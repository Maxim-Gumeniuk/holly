import { RedirectView } from '@/components/redirect';
import { ROUTES } from '@/navigation';
import { EmailPage } from '@/pages/Email';
import { Quiz } from '@/pages/Quiz';
import { Succes } from '@/pages/Succes';
import { createBrowserRouter, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  { path: `${ROUTES.ROOT}`, element: <RedirectView /> },
  {
    path: `${ROUTES.QUIZ}`,
    element: <Quiz />,
    children: [
      {
        path: ':quizId',
        element: <Outlet />,
      },
    ],
  },
  {
    path: `${ROUTES.EMAIL}`,
    element: <EmailPage />,
  },
  { path: `${ROUTES.SUCCESS}`, element: <Succes /> },
]);
