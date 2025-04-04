const Weather = ({ weather }) => {
  return (
    <div className='weather'>
      <div className='weather__condition'>{weather?.weather[0].description}</div>
      <div className='weather__temperature'>
        {Math.trunc(weather?.main.temp)}°C / {Math.trunc(weather?.main.temp * (9 / 5) + 32)}°F
      </div>
      <div className='weather__location'>{weather?.name}</div>
      <div className='weather__details'>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Wind Speed</div>
          <div className='weather__detail-value'>
            {weather?.wind.speed}
            <span>km/h</span>
          </div>
        </div>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Humidity</div>
          <div className='weather__detail-value'>
            {weather?.main.humidity}
            <span>%</span>
          </div>
        </div>
        <div className='weather__detail'>
          <div className='weather__detail-title'>Precipitation</div>
          <div className='weather__detail-value'>
            {!weather?.rain ? '0' : weather.rain['1h']}
            <span>mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
