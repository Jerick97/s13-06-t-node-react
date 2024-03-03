import Bus from '../../assets/Itinerary/bus.svg';
import Arrow from '../../assets/Itinerary/arrow.svg';
import ItinerarySchedule from './ItinerarySchedule.jsx';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils/dateUtils.js';
import { useQueryParams } from '../../hooks/useQueryParams.js';

Itinerary.propTypes = {
  travelSelected: PropTypes.object.isRequired
};

function Itinerary({ travelSelected }) {
  const queryParams = useQueryParams();

  //formatting
  const formattedDepartureTime = formatTime(travelSelected.departureTime);
  // endpoint not ready for this yet TODO:
  // const formattedArrivalTime = formatTime(travelSelected.arrivalTime);

  return (
    <div className='text-center mt-24'>
      <section className='bg-[#DEE5ED] h-[401px] max-w-80 rounded-[10px] px-4 pt-5 pb-8 mx-auto'>
        <h1 className='font-bold text-xl tracking-tight mb-9 text-[#1A202C]'>
          {travelSelected.typeOfTravel || 'TEST-CAMBIAR'}
        </h1>

        <div className='flex justify-between font-medium text-[#486284] text-[15px] opacity-90 tracking-tight mb-[10px]'>
          <h2>Salida</h2> <h2>Llegada</h2>
        </div>
        <div className='flex justify-between font-medium text-xl tracking-tight items-center text-[#1A202C] mb-3'>
          <p>{queryParams.origin}</p>
          <img src={Arrow} className='size-5 mx-2' alt='Flecha'></img>
          <p>{queryParams.destination}</p>
        </div>
        <ItinerarySchedule
          departingDay={'need BE'}
          arrivalDay={'need BE'}
          arrivalHour={formattedDepartureTime}
          departingHour={'need to pass as prop'}
        />
        <img src={Bus} className='mx-auto mt-7 mb-14' alt='Icono de Autobus' />
        <h1 className='font-bold text-xl text-[#1A202C] text-left'>
          ${travelSelected.cost} -
        </h1>
      </section>
    </div>
  );
}

export default Itinerary;
