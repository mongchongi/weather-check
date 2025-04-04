const LocationButton = () => {
  return (
    <div className='locations'>
      <button className='locations__button locations__button--current'>Current Location</button>
      <button className='locations__button'>Japan</button>
      <button className='locations__button'>Vietnam</button>
      <button className='locations__button'>Paris</button>
      <button className='locations__button'>New York</button>
    </div>
  );
};

export default LocationButton;
