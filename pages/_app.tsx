import '../styles/globals.css'
import "reflect-metadata";
import { initStore } from 'react-recollect';

import { ContainerProvider } from "@/services/inject.context";
import { container } from './_container';
import { Locale } from '@/types/services/locale.enum';

initStore({ locale: Locale.EN });

function MyApp({ Component, pageProps }) {
  return (
    <ContainerProvider container={container}>
      <Component {...pageProps} />
    </ContainerProvider>
  );
}

export default MyApp
