import { useTranslation } from 'react-i18next';
import { OptionTopicContainer } from './styles/OptionTopicContainer';
import { OptionTopic } from './styles/OptionTopic';
import { FC } from 'react';
import { useQuizContext } from '@/main-context/Quiz';

type Props = {
  start: number;
  finish?: number;
  topicSvgs: { [key: string]: JSX.Element };
};

export const OptionTemplate: FC<Props> = ({ start, finish, topicSvgs }) => {
  const { t } = useTranslation();

  const { state, dispatch } = useQuizContext();

  console.log(state, '-state');

  return (
    <OptionTopicContainer style={{ color: 'white' }}>
      {(t('topics.variants', { returnObjects: true }) as Array<string>)
        .slice(start, finish && finish)
        .map((topic, index) => (
          <OptionTopic
            key={topic}
            onClick={() => {
              dispatch({ type: 'SET_FAVORITE_TOPICS', payload: topic });
            }}
          >
            {topicSvgs[index]}
            {topic}
          </OptionTopic>
        ))}
    </OptionTopicContainer>
  );
};
