import React from 'react';
import { collect, WithStoreProp } from 'react-recollect';

import { Heading } from '@/components/heading.component';
import { useInjection } from '@/services/inject.context';
import { ServiceKey } from '@/types/services/service-keys.const';
import { ITranslationService } from '@/types/services/translation-service.types';

function Component({ store }: WithStoreProp): React.ReactElement<{}> {
    const translationService = useInjection<ITranslationService>(ServiceKey.TranslationService);

    return (
        <Heading>{translationService.t('hello_world', store.locale)}</Heading>
    )
}

export const HelloWorld = collect(Component);