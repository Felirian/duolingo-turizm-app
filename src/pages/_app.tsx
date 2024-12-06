import type {AppProps} from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import {useEffect, useState} from "react";
import {init, miniApp, settingsButton} from "@telegram-apps/sdk";
import {tgInit} from "@/pages/features/_tg_methods_";

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    tgInit()
  }, []);
  return (
    <div
      // style={{
      //   marginTop: `${safeArea.top}px`,
      //   marginBottom: `${safeArea.bottom}px`,
      //   minHeight: '100vh',
      //   boxSizing: 'border-box',
      // }}
    >
      <GlobalStyles/>
      <Component {...pageProps} />
    </div>
  )
}
