import type {AppProps} from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import {tgInit} from "@/features/_tg_methods_";
import {useDidMount} from "@/features/_index_";
import {useSukaOdinRaz} from "@/features/useSukaOdinRaz";

export default function App({Component, pageProps}: AppProps) {
  const didMount = useDidMount();

  useSukaOdinRaz(()=> {
    tgInit(true)
  }, []);


  return (
    <>
      <GlobalStyles/>
      {didMount && <Component {...pageProps} />}
    </>
  )
}
