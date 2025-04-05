// 1. 앱 실행 즉시 현재 위치 기반 날씨 정보 보이기 (지역, 섭씨 온도, 화씨 온도, 날씨 상태)
// 2. 5개 버튼 (1개는 현재 위치, 4개는 지역)
// 3. 버튼을 클릭하면 그에 맞는 날씨 정보 보이기
// 4. 정보를 가져오는 동안 로딩 중 표시

import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import LocationButton from './components/LocationButton';
import sunImage from './assets/sun.png';
import thunderImage from './assets/thunder.png';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cities = ['japan', 'vietnam', 'paris', 'new york'];

  const fetchWeather = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getWeatherByCurrentLocation = (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }&units=metric`;

    fetchWeather(url);
  };

  const getWeatherByCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }&units=metric`;

    fetchWeather(url);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords; // 현재 위치 위도 & 경도
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const handleChangeCity = (selectedCity) => {
    if (selectedCity === 'current') {
      setCity('');
    } else {
      setCity(selectedCity);
    }
  };

  useEffect(() => {
    if (city === '') {
      setIsLoading(true);
      getCurrentLocation();
    } else {
      setIsLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  if (isLoading) {
    return (
      <div className='container'>
        <img src={sunImage} alt='sun' className='loading-spinner' />
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className='container'>
        <div className='error'>
          <img src={thunderImage} alt='thunder' className='error__image' />
          <span className='error__message'>Unable to get weather information...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <Weather weather={weather} />
      <LocationButton cities={cities} currentCity={city} handleChangeCity={handleChangeCity} />
    </div>
  );
};

export default App;
