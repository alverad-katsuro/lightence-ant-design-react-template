import { LanguageType } from '@app/interfaces/interfaces';

interface Language {
  id: number;
  name: LanguageType;
  title: string;
  countryCode: string;
}

export const languages: Language[] = [
  {
    id: 1,
    name: 'pt-BR',
    title: 'Português Brasil',
    countryCode: 'br',
  },
  {
    id: 2,
    name: 'en',
    title: 'English',
    countryCode: 'gb',
  },
  {
    id: 3,
    name: 'de',
    title: 'German',
    countryCode: 'de',
  },
];
