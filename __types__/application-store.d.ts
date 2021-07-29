import 'react-recollect';

declare module 'react-recollect' {
    interface Store {
      locale?: import("./services/locale.enum").Locale;
    }
  }