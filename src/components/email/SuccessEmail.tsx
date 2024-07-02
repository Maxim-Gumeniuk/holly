import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DownLoadSvg } from '@/public/assets/svg/download';
import { SuccesSvg } from '@/public/assets/svg/succes';

import { useQuizContext } from '@/main-context/Quiz';
import { downloadCSV } from '@/utils/csv';
import { FlexBox } from '@/comon/styled/FlexBox';

export const SuccesEmail = () => {
  const { state } = useQuizContext();

  const userAnswers = useMemo(() => {
    return [
      {
        order: 1,
        title: 'What is prefferred language?',
        type: 'single-select',
        answer: `${state.language}`,
      },
      {
        order: 2,
        title: 'Waht gender do you identify with?',
        type: 'single-select-imagw',
        answer: `${state.gender}`,
      },
      {
        order: 3,
        title: 'What is your age?',
        type: 'single-select',
        answer: `${state.age}`,
      },
      {
        order: 4,
        title: 'What do you hate the most in a book',
        type: 'multiple-select',
        answer: `${state.hateInBooks.join(',')}`,
      },
      {
        order: 5,
        title: 'What are you favorite topics',
        type: 'bubble',
        answer: `${state.favoriteTopics.join(',')}`,
      },
      { order: 6, title: 'email', type: 'email', answer: `${state.email}` },
    ];
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div>
        <SuccesSvg />
      </div>
      <FlexBox
        cursor="pointer"
        justifyContent="center"
        gap="5px"
        alignItem="center"
        onClick={() => {
          downloadCSV(userAnswers);
        }}
      >
        <DownLoadSvg />

        <div>{t('download-answers.title')}</div>
      </FlexBox>
    </>
  );
};
