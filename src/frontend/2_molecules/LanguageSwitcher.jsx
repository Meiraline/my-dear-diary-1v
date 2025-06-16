import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomSelect from '../1_atoms/Inputs/Select/Select';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // сохраняем выбор
  };

  const options = [
    { value: 'en', name: 'English' },
    { value: 'ru', name: 'Русский' },
  ];

  return (
    <CustomSelect
     
      options={options}
      value={i18n.language}
      onChange={handleChange}
    />
  );
}

export default LanguageSwitcher;
