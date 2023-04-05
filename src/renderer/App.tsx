import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import translationEn from './locales/en/translation.json';
import translationPl from './locales/pl/translation.json';
import translationRus from './locales/rus/translation.json';
import icon from '../../assets/icon.svg';
import './App.css';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: translationEn },
    pl: { common: translationPl },
    rus: { common: translationRus },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

function Hello() {
  const { t } = useTranslation('common');
  const [language, setLanguage] = useState('');

  const onChangeLanguage = (event: ChangeEvent<{ value: string }>) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>{t('title')}</h1>
      <div className="localise">
        <p>{t('starthint')}</p>
        <select name="language" onChange={onChangeLanguage}>
          <option value="en">{t('englishOption')}</option>
          <option value="pl">{t('polishOption')}</option>
          <option value="rus">{t('russianOption')}</option>
        </select>
        <h1>
          {t('langNow')} {language}
        </h1>
      </div>
      <div className="text">
        <p>{t('lorem')}</p>
      </div>
      <div className="buttons">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            {t('butDoc')}
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
