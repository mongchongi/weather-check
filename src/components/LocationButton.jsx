const LocationButton = ({ cities, handleChangeCity }) => {
  return (
    <div className='locations'>
      <button className='locations__button locations__button--current' onClick={() => handleChangeCity('current')}>
        Current Location
      </button>
      {cities.map((city) => (
        <button className='locations__button' key={city} onClick={() => handleChangeCity(city)}>
          {city}
        </button>
      ))}
    </div>
  );
};

export default LocationButton;
