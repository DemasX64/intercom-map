import logo from './logo.svg';
import './App.css';
import YandexMap from './components/yandex-map/yandex-map';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
   }, []);

  return (
    <div className="App">
      <YandexMap/>
    </div>
  );
}

export default App;
