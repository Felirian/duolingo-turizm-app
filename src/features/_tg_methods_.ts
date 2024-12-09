import {
  init,  initDataUser, initData, User
} from "@telegram-apps/sdk";
import {useEffect, useState} from "react";

const useTgApp = () => {
  const [dataUser, setDataUser] = useState<User | undefined | null>(null)

  useEffect(() => {
    // initData.restore();
    const initDatag = initDataUser();

    if (initDatag) {
      console.log(initDatag);
      setDataUser(initDatag)
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
  try {
    init();
    initData.restore();
  } catch (error) {
    console.log('Ошибка иницилизации tg:',error);
  }

  // settingsButton.mount();
  // settingsButton.show();
}

export default useTgApp;
