import { Locale } from "./locale.enum";

export interface ITranslationService {
    readonly locale: Locale;
    t: (key: string, locale: Locale) => string;
    setLocale: (locale: Locale) => void;
}