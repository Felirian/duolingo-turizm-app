import type {AppProps} from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import {useEffect} from "react";
import {tgInit} from "@/features/_tg_methods_";
import {useDidMount} from "@/features/_index_";

export default function App({Component, pageProps}: AppProps) {
  // const lp = useLaunchParams();
  // console.log(lp);

  useEffect(() => {
    tgInit(true)
  }, []);

  const didMount = useDidMount();

  return (
    <>
      <GlobalStyles/>
      {didMount && <Component {...pageProps} />}
    </>
  )
}
