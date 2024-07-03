import { ActionsSvg } from '@/assets/svg/actions';
import { AdultSvg } from '@/assets/svg/adult';
import { BadBoySvg } from '@/assets/svg/badBoy';
import { BillionareSvg } from '@/assets/svg/billionare';
import { RomanceSvg } from '@/assets/svg/romance';
import { RoyalSvg } from '@/assets/svg/royal';
import { WereWolfSvg } from '@/assets/svg/werewolf';
import { ChooseAge } from '@/components/questions/age';
import { HateInBook } from '@/components/questions/books-hate';
import { ChooseGender } from '@/components/questions/gender';
import { PrefLanguage } from '@/components/questions/pref-language';
import { FavoriteTopics } from '@/components/questions/topics';
import FemalePicture from '@/assets/female.png';
import MalePicture from '@/assets/male.png';
import OtherPicture from '@/assets/other.png';

export const topicSvgs = {
  '1': {
    '0': <WereWolfSvg />,
    '1': <RomanceSvg />,
  },
  '2': {
    '0': <ActionsSvg />,
    '1': <AdultSvg />,
  },
  '3': {
    '0': <RoyalSvg />,
    '1': <BadBoySvg />,
  },

  '4': {
    '0': <BillionareSvg />,
  },
};

export const quizTitles = {
  '1': { title: 'language.title', subtitle: 'language.subtitle' },
  '2': { title: 'gender.title', subtitle: 'gender.subtitle' },
  '3': { title: 'age.title', subtitle: null },
  '4': { title: 'books.title', subtitle: null },
  '5': { title: 'topics.title', subtitle: 'topics.subtitle' },
};

export const quizComponents = {
  '1': <PrefLanguage />,
  '2': <ChooseGender />,
  '3': <ChooseAge />,
  '4': <HateInBook />,
  '5': <FavoriteTopics />,
};

export const genderImages = {
  0: FemalePicture,
  1: MalePicture,
  2: OtherPicture,
};
