import { OptionTemplate } from './Template';
import { topicSvgs } from '@/constants/quiz';
import { FlexBox, OverflowContainer } from '@/comon/styled/FlexBox';

export const FavoriteTopics = () => {
  return (
    <OverflowContainer alignItem="center" justifyContent="flex-start">
      <OptionTemplate start={0} finish={2} topicSvgs={topicSvgs[1]} />
      <FlexBox
        marginTop="40px"
        justifyContent="flex-start"
        alignItem="stretch"
        width="100%"
      >
        <OptionTemplate start={2} finish={4} topicSvgs={topicSvgs[2]} />
      </FlexBox>
      <OptionTemplate start={4} finish={6} topicSvgs={topicSvgs[3]} />
      <OptionTemplate start={6} topicSvgs={topicSvgs[4]} />
    </OverflowContainer>
  );
};
