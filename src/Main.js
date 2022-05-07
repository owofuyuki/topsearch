import './Main.css';
import TopButtons from './components/TopButtons.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import WeatherApp from './components/WeatherApp.js';
import CalendarApp from './components/CalendarApp.js';

function Main() {
  return (
    <div className="Main">
      <TopButtons />
      <Content />
      <Footer />
      <WeatherApp />
      <CalendarApp />
    </div>
  );
}

export default Main;