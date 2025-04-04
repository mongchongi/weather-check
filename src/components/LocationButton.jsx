const LocationButton = ({ cities, setCity }) => {
  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className='locations'>
      <button className='locations__button locations__button--current'>Current Location</button>
      {cities.map((city) => (
        <button className='locations__button' key={city} onClick={() => handleSelectCity(city)}>
          {city}
        </button>
      ))}
    </div>
  );
};

export default LocationButton;
