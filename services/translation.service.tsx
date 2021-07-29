import { injectable } from "inversify";
import { store } from 'react-recollect';

import { Locale } from "@/types/services/locale.enum";
import { ITranslationService } from "@/types/services/translation-service.types";

const locales = {
    [Locale.EN]: {
        'hello_world': 'Hello, World!'
    },
    [Locale.FR]: {
        'hello_world': 'Salut tout le monde!'
    },
    [Locale.DE]: {
        'hello_world': 'Hallo Welt!'
    },
};

@injectable()
export class TranslationService implements ITranslationService {
    _locale: Locale = Locale.EN;

    registry: Record<Locale, Record<string, string>> = locales;

    get locale() {
        return this._locale;
    }

    setLocale = (locale: Locale) => {
        this._locale = locale;
        store.locale = locale;
    };

    t = (key: string, locale: Locale) => {
        return this.registry[locale][key];
    }
}

