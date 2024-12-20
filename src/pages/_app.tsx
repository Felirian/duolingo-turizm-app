import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/globalStyles';
import { tgInit } from '@/features/_tg_methods_';
import { useDidMount } from '@/features/_index_';
import { useSukaOdinRaz } from '@/features/useSukaOdinRaz';
import { Provider } from 'react-redux';
import store from '@/features/redux';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//@ts-ignore
// import welcomeVid from '@/assets/video/welcome.mp4';

const WelcomeVideo = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'white',
        zIndex: 1000,
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <source src={'/welcome.mp4'} type='video/mp4' />
      </video>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const didMount = useDidMount();
  const [showVideo, setShowVideo] = useState(true);

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

    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles />
      {showVideo && <WelcomeVideo />}
      {didMount && <Component {...pageProps} />}
    </Provider>
  );
}
