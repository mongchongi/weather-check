const Weather = () => {
  return (
    <div className='weather'>
      <div className='weather__condition'>Clear</div>
      <div className='weather__temperature'>14°C / 57.2°F</div>
      <div className='weather__location'>Seoul</div>
      <div className='weather__details'>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Wind Speed</div>
          <div className='weather__detail-value'>
            10<span>km/h</span>
          </div>
        </div>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Humidity</div>
          <div className='weather__detail-value'>
            32<span>%</span>
          </div>
        </div>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Precipitation</div>
          <div className='weather__detail-value'>
            50<span>mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
