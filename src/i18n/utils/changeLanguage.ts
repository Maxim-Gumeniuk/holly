import i18next from 'i18next';

export const changeLanguage = async (language: string) => {
  await i18next.changeLanguage(language);
};
