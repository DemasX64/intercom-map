import './App.css';
import WebFont from 'webfontloader';
import React, { useEffect } from 'react';
import YandexMap from './components/yandex-map/yandex-map';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter'],
      },
    });
  }, []);

  return (
    <div className="App">
      <YandexMap />
    </div>
  );
};

export default App;
