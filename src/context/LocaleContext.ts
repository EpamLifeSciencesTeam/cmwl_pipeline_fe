import { createContext } from 'react';

export enum LocaleLanguage {
  en = 'en',
  ru = 'ru'
}

export interface LocaleContextProps {
  locale: LocaleLanguage
  setLocale: (value: LocaleLanguage) => void
}

export const LocaleContext = createContext<LocaleContextProps>({
  locale: LocaleLanguage.en,
  setLocale: () => {}
});
