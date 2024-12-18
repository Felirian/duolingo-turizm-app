import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/globalStyles';
import { tgInit } from '@/features/_tg_methods_';
import { useDidMount } from '@/features/_index_';
import { useSukaOdinRaz } from '@/features/useSukaOdinRaz';
import { Provider } from 'react-redux';
import store from '@/features/redux';
import useAccount from '@/features/_local_storage_';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  const didMount = useDidMount();
  //const { isAuth, account, addXp, setAccount } = useAccount();

  useSukaOdinRaz(() => {
    tgInit(true);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
      offset: -9999,
      easing: 'ease',
      delay: 50,
    });
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles />
      {didMount && <Component {...pageProps} />}
    </Provider>
  );
}
