import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
  useMemo,
} from 'react';
import { useParams } from 'react-router-dom';

interface QuizState {
  language: string;
  gender: string;
  age: string;
  hateInBooks: Array<string>;
  favoriteTopics: Array<string>;
  email: string;
}

const initialState: QuizState = {
  language: '',
  gender: '',
  age: '',
  hateInBooks: [],
  favoriteTopics: [],
  email: '',
};

type QuizAction =
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'SET_GENDER'; payload: string }
  | { type: 'SET_AGE'; payload: string }
  | { type: 'SET_HATE_IN_BOOKS'; payload: string }
  | { type: 'SET_FAVORITE_TOPICS'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'CLEAR_ALL'; payload: null };

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
      case 'CLEAR_ALL':
        return { ...initialState };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      case 'SET_GENDER':
        return { ...state, gender: action.payload };
      case 'SET_AGE':
        return { ...state, age: action.payload };
      case 'SET_HATE_IN_BOOKS':
        return {
          ...state,
          hateInBooks: state.hateInBooks.includes(action.payload)
            ? state.hateInBooks.filter((el) => el !== action.payload)
            : [...state.hateInBooks, action.payload],
        };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_FAVORITE_TOPICS':
        return {
          ...state,
          favoriteTopics: state.favoriteTopics.includes(action.payload)
            ? state.favoriteTopics.filter((el) => el !== action.payload)
            : state.favoriteTopics.length === 3
              ? [...state.favoriteTopics.slice(0, 2), action.payload]
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
  sequenceNum: number;
  setSequenceNum: Dispatch<SetStateAction<number>>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const { quizId } = useParams<{ quizId: string }>();

  const [sequenceNum, setSequenceNum] = useState(quizId ? +quizId : 1);
  const [state, dispatch] = useReducer(
    quizReducer,
    loadStateFromLocalStorage()
  );

  const value = useMemo(
    () => ({ state, dispatch, sequenceNum, setSequenceNum }),
    [state, dispatch, sequenceNum, setSequenceNum]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = (): QuizContextType => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};
