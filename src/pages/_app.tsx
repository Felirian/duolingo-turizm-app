import type {AppProps} from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import {useEffect, useRef} from "react";
import {tgInit} from "@/features/_tg_methods_";
import {useDidMount} from "@/features/_index_";
import {MiniAppState, viewport} from "@telegram-apps/sdk-react";
import {useSukaOdinRaz} from "@/features/useSukaOdinRaz";

export default function App({Component, pageProps}: AppProps) {

  const didMount = useDidMount();
  useSukaOdinRaz(()=> {
    tgInit(true)
  });

  return (
    <>
      <GlobalStyles/>
      {didMount && <Component {...pageProps} />}
    </>
  )
}
