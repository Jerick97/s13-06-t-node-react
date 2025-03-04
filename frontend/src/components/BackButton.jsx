import { useLocation, useNavigate } from 'react-router-dom';
import arrowBack from '../assets/arrow-back.svg';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = location.search;

  //   TODO: agregar mas casos mientras vayamos agregando vistas
  function handleClick() {
    switch (location.pathname) {
      case '/ticket':
        navigate('/');
        break;
      case '/ticket/seats':
        navigate(`/ticket${queryParams}`);
        break;
      case '/ticket/passengers':
        navigate(`/ticket/seats${queryParams}`);
        break;
      case '/ticket/summary':
        navigate(`/ticket/passengers${queryParams}`);
        break;
      case '/ticket/payment':
        navigate(`/ticket/summary${queryParams}`);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <button
        className='bg-transparent border-[#D97706] border-[1px] px-5 py-0 rounded-[40px] h-11 lg:flex items-center w-40 justify-center hidden text-[#FF5F00] font-semibold'
        onClick={() => handleClick()}
      >
        Volver
      </button>
      <button
        className='lg:hidden flex bg-transparent border-[#D97706] border-[1px] text-[#FF5F00] rounded-full items-center pl-3 relative w-11 h-11'
        onClick={handleClick}
      >
        <img src={arrowBack} alt='Volver a pagina previa' />
      </button>
    </>
  );
}

export default BackButton;
