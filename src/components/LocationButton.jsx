const LocationButton = ({ cities, currentCity, handleChangeCity }) => {
  return (
    <div className='locations'>
      <button
        className={`locations__button locations__button--current ${currentCity === '' && 'locations__button--active'}`}
        onClick={() => handleChangeCity('current')}
      >
        Current Location
      </button>
      {cities.map((city) => (
        <button
          className={`locations__button ${currentCity === city && 'locations__button--active'}`}
          key={city}
          onClick={() => handleChangeCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default LocationButton;
