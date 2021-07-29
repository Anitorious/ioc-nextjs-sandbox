import { Container } from 'inversify';

import { TranslationService } from '@/services/translation.service';
import { ServiceKey } from '@/types/services/service-keys.const';
import { ITranslationService } from '@/types/services/translation-service.types';

const _container = new Container();

_container.bind<ITranslationService>(ServiceKey.TranslationService).to(TranslationService);

export const container = _container;