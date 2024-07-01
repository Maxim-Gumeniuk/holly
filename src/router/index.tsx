import { ROUTES } from '@/navigation';
import { Quiz } from '@/pages/Quiz';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: `/${ROUTES.QUIZ}`,
    element: <Quiz />,
    children: [
      {
        path: ':quizId',
        element: <div></div>,
      },
    ],
  },
  {
    path: `${ROUTES.EMAIL}`,
    element: <div>hello</div>,
  },
]);
