import PropTypes from 'prop-types';

function DateInput({ id, value, onChange, min }) {
  return (
    <input
      id={id}
      className='block appearance-auto w-full bg-white border border-white text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      type='date'
      onChange={onChange}
      value={value}
      min={min}
    />
  );
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string.isRequired
};

export default DateInput;
