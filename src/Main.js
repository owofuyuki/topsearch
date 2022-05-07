import './Main.css';
import { createContext, useState } from 'react';
import TopButtons from './components/TopButtons.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import WeatherApp from './components/WeatherApp.js';
import CalendarApp from './components/CalendarApp.js';
import { ThemeProvider } from '@emotion/react';

export const ThemeContext = createContext(null);

function Main() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  const setEnglish = () => {
    setLanguage("english");
  };

  const setVietnamese = () => {
    setLanguage("vietnamese");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${language} Main`} id={theme}>
        <TopButtons onClick={toggleTheme} theme={theme} language={language} />
        <Content theme={theme} language={language} />
        <Footer onClick1={setEnglish} onClick2={setVietnamese} language={language} />
        <WeatherApp />
        <CalendarApp />
      </div>
    </ThemeContext.Provider>
  );
}

export default Main;