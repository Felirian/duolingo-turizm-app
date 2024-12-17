import type {AppProps} from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import {tgInit} from "@/features/_tg_methods_";
import {useDidMount} from "@/features/_index_";
import {useSukaOdinRaz} from "@/features/useSukaOdinRaz";
import {Provider} from "react-redux";
import store from "@/features/redux";
import useAccount from "@/features/_local_storage_";

export default function App({Component, pageProps}: AppProps) {
  const didMount = useDidMount();
  //const { isAuth, account, addXp, setAccount } = useAccount();


  useSukaOdinRaz(() => {
    tgInit(true)
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles/>
      {didMount && <Component {...pageProps} />}
    </Provider>
  )
}
