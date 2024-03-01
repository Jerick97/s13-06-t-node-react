import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function SelectForm({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tipo de Documento');
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className='relative mb-4 text-sm'>
      <button
        type='button'
        className='shadow flex items-center justify-between bg-white w-full border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onClick={handleToggleDropdown}
      >
        <span className='leading-none uppercase text-gray-400'>
          {selectedOption}
        </span>
        <svg
          className={`w-4 h-4 mt-px ml-2 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='absolute flex flex-col w-full mt-1 border border-[#E2E8F0] shadow-lg bg-white rounded'>
          {options.map((option, index) => (
            <button
              type='button'
              key={index}
              className='flex items-center h-8 px-3 text-sm hover:bg-gray-200'
              onClick={() => handleOptionSelect(option.option)}
            >
              {option.option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

SelectForm.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      option: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SelectForm;
