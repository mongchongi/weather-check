// 1. 앱 실행 즉시 현재 위치 기반 날씨 정보 보이기 (지역, 섭씨 온도, 화씨 온도, 날씨 상태)
// 2. 5개 버튼 (1개는 현재 위치, 4개는 지역)
// 3. 버튼을 클릭하면 그에 맞는 날씨 정보 보이기
// 4. 정보를 가져오는 동안 로딩 중 표시

import { useEffect } from 'react';
import './App.css';

const App = () => {
  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords; // 현재 위치 위도 & 경도
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>App</div>;
};

export default App;
