import {useEffect, useState} from "react";
import {
  init,
  initData,
  isFullscreen, isViewportMounted,
  mountViewport,
  parseInitData,
  requestFullscreen,
  retrieveLaunchParams,
  settingsButton,
  viewport,

} from "@telegram-apps/sdk";

const useTgApp = () => {

}

export const tgInit = async () => {
  init();
  settingsButton.mount();
  settingsButton.show();

  if (viewport.mount.isAvailable()) {
    viewport.mount();
    if (      viewport.isMounted()) {
      await viewport.requestFullscreen();
      viewport.isFullscreen();
    }
    viewport.unmount();
  }


  const { initDataRaw, initData } = retrieveLaunchParams();
  //alert(JSON.stringify(initData))
}

export default useTgApp;
