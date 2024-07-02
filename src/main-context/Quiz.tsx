import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  useMemo,
} from 'react';
import { Actions, QuizState } from './types';

export const initialState: QuizState = {
  language: '',
  gender: '',
  age: '',
  hateInBooks: [],
  favoriteTopics: [],
  email: '',
  sequenceNum: 1,
};

type QuizAction =
  | { type: Actions.SET_LANGUAGE; payload: string }
  | { type: Actions.SET_GENDER; payload: string }
  | { type: Actions.SET_AGE; payload: string }
  | { type: Actions.SET_HATE_IN_BOOKS; payload: string }
  | { type: Actions.SET_FAVORITE_TOPICS; payload: string }
  | { type: Actions.SET_EMAIL; payload: string }
  | { type: Actions.SET_SEQUENCE; payload: number }
  | { type: Actions.CLEAR_ALL; payload: null };

const saveStateToLocalStorage = (state: QuizState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('quizState', serializedState);
  } catch (e) {
    console.warn('Error saving state to localStorage', e);
  }
};

const loadStateFromLocalStorage = (): QuizState => {
  try {
    const serializedState = localStorage.getItem('quizState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState) as QuizState;
  } catch (e) {
    console.warn('Error loading state from localStorage', e);
    return initialState;
  }
};

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  const newState = (() => {
    switch (action.type) {
      case Actions.CLEAR_ALL:
        return { ...initialState };
      case Actions.SET_LANGUAGE:
        return { ...state, language: action.payload };
      case Actions.SET_GENDER:
        return { ...state, gender: action.payload };
      case Actions.SET_AGE:
        return { ...state, age: action.payload };
      case Actions.SET_HATE_IN_BOOKS:
        return {
          ...state,
          hateInBooks: state.hateInBooks.includes(action.payload)
            ? state.hateInBooks.filter((el) => el !== action.payload)
            : [...state.hateInBooks, action.payload],
        };
      case Actions.SET_EMAIL:
        return { ...state, email: action.payload };
      case Actions.SET_SEQUENCE:
        return { ...state, sequenceNum: action.payload };
      case Actions.SET_FAVORITE_TOPICS:
        return {
          ...state,
          favoriteTopics: state.favoriteTopics.includes(action.payload)
            ? state.favoriteTopics.filter((el) => el !== action.payload)
            : state.favoriteTopics.length === 3
              ? [...state.favoriteTopics.slice(1, 3), action.payload]
              : [...state.favoriteTopics, action.payload],
        };

      default:
        return state;
    }
  })();

  saveStateToLocalStorage(newState);
  return newState;
};

interface QuizContextType {
  state: QuizState;
  dispatch: Dispatch<QuizAction>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(
    quizReducer,
    loadStateFromLocalStorage()
  );

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = (): QuizContextType => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};
