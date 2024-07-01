import { FlexContainer } from '@/comon/styled/Flex';
import { OptionTemplate } from './Template';
import { topicSvgs } from '@/constants/quiz';

export const FavoriteTopics = () => {
  return (
    <FlexContainer style={{ overflow: 'auto' }}>
      <OptionTemplate start={0} finish={2} topicSvgs={topicSvgs[1]} />
      <div style={{ marginTop: '40px' }}>
        <OptionTemplate start={2} finish={4} topicSvgs={topicSvgs[2]} />
      </div>
      <OptionTemplate start={4} finish={6} topicSvgs={topicSvgs[3]} />
      <OptionTemplate start={6} topicSvgs={topicSvgs[4]} />
    </FlexContainer>
  );
};
