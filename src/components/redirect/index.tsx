import { ROUTES } from '@/navigation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedirectView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${ROUTES.QUIZ}/1`);
  }, []);

  return null;
};
