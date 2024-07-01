import { PrefLanguage } from '@/components/questions/pref-language';

export const quizAnswers = {
  language: '',
  gender: '',
  age: '',
  hateInBooks: '',
  favoriteTopics: '',
};

export const maxSteps = 5;

export const quizTitles = {
  '1': { title: 'language.title', subtitle: 'language.subtitle' },
  '2': { title: 'gender.title', subtitle: 'gender.subtitle' },
};

export const quizComponents = {
  '1': <PrefLanguage />,
  '2': <div style={{ color: '#ffff' }}>HWWWWW</div>,
  '3': <>3</>,
  '4': <>4</>,
  '5': <>5</>,
};
