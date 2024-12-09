import {
  init,
  initDataUser,
  initData,
  User,
  unmountViewport,
  expandViewport,
  isFullscreen,
  requestFullscreen,
  mountViewport,
  isViewportMounted
} from "@telegram-apps/sdk";
import {useEffect, useState} from "react";

const useTgApp = () => {
  const [dataUser, setDataUser] = useState<User | undefined | null>(null)

  useEffect(() => {
    const initData = initDataUser();

    if (initData) {
      console.log(initData);
      setDataUser(initData)
    } else {
      console.log('ff');
      setDataUser(null)
    }

  }, []);


  return {
    dataUser,
  };
}

export const tgInit = () => {

  const setFullPage = async () => {
    //mountViewport();
    if (requestFullscreen.isAvailable()) {
      await requestFullscreen();
    }
  }

  try {
    init();
    initData.restore();
    if (mountViewport.isAvailable() && !isFullscreen()) {
      setFullPage();
    }


  } catch (error) {
    console.log('Ошибка иницилизации tg:', error);
  }

  // settingsButton.mount();
  // settingsButton.show();
}

export default useTgApp;
