import Head from 'next/head'
import { collect, WithStoreProp} from 'react-recollect';

import { HelloWorld } from '@/templates/hello-world.template';

import styles from '../styles/Home.module.css'
import { Select } from '@/components/select.component';
import { Locale } from '@/types/services/locale.enum';
import { useInjection } from '@/services/inject.context';
import { ServiceKey } from '@/types/services/service-keys.const';
import { ITranslationService } from '@/types/services/translation-service.types';

function Home({ store }: WithStoreProp) {
  const translationService = useInjection<ITranslationService>(ServiceKey.TranslationService);

  const onChange = (e) => { translationService.setLocale((e.target.value as unknown) as Locale);}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HelloWorld />
        <Select label="Language" options={{ 'EN': Locale.EN, 'FR': Locale.FR, 'DE': Locale.DE }} value={store.locale} onChange={onChange} />
      </main>
    </div>
  )
}

export default collect(Home);