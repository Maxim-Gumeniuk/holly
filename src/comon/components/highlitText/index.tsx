import { Fragment } from 'react';
import { PinkText } from '@/components/email/styles';

export const highlight = (text: string, terms: string[]): React.ReactNode => {
  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (terms.includes(part)) {
      return <PinkText key={index}>{part}</PinkText>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
};
