export interface QuizState {
  language: string;
  gender: string;
  age: string;
  hateInBooks: Array<string>;
  favoriteTopics: Array<string>;
  email: string;
  sequenceNum: number;
}

export enum Actions {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_GENDER = 'SET_GENDER',
  SET_AGE = 'SET_AGE',
  SET_HATE_IN_BOOKS = 'SET_HATE_IN_BOOKS',
  SET_FAVORITE_TOPICS = 'SET_FAVORITE_TOPICS',
  SET_EMAIL = 'SET_EMAIL',
  CLEAR_ALL = 'CLEAR_ALL',
  SET_SEQUENCE = 'SET_SEQUENCE',
}
