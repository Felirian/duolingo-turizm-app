import {
  init,
  $debug,
  initData,
  User,
  miniApp,
  themeParams,
  backButton,
  viewport, useSignal, swipeBehavior
} from "@telegram-apps/sdk-react";
import {useEffect, useState} from "react";
import {SafeAreaInsets} from "@telegram-apps/bridge";

const useTgApp = () => {
  const [dataUser, setDataUser] = useState<User | undefined | null>(null)
  const [userId, setUserId] = useState(0)
  const isInitData = useSignal(initData.user);
  const [gg, setGg] = useState(false)
  const [safeAreas, setSafeAreas] = useState<SafeAreaInsets | null>(null);
  const isSafeArea = useSignal(viewport.contentSafeAreaInsets);

  useEffect(() => {
    const initDataG = initData.user();
    if (initDataG) {
      setDataUser(initDataG)
      setUserId(initDataG.id)
    } else {
      setDataUser(null)
    }
  }, [isInitData]);

  useEffect(() => {
    setSafeAreas(viewport.contentSafeAreaInsets());
  }, [isSafeArea]);

  return {
    gg,
    setGg,
    userId,
    dataUser,
    safeAreas
  };
}

export function tgInit (debug: boolean): void  {
  /**
   * ##### _function_
   * ## Функция иницилизации
   * @param {debug} name - Имя инпута
   * @remarks Для работы компонента необходимо, чтобы он находился внутри формы с провайдером (React-hook-form)
   * @example
   * return (
   * <FormProvider {...methods}>
   *   <form onSubmit={handleSubmit(onSubmit)>
   *     <InputControl type='checkbox' description='Публиковать на главной:' name={`${name}.name`} />
   *   </form>
   * </FormProvider>
   * );
   *
   */

    // eslint-disable-next-line
  const setFullscreen = async () => {
    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen()
    }
  }
  try {
    //$debug.set(debug);
    init();

    // eslint-disable-next-line
    backButton.isSupported() && backButton.mount();
    miniApp.mount();
    themeParams.mount();
    initData.restore();

    viewport
      .mount()
      .then(() => {
        viewport.expand();
        !debug && setFullscreen();
      })
      .catch(e => console.error('Ошибка viewport', e));
    //@ts-ignore
    swipeBehavior.mount()
    swipeBehavior.disableVertical();

  } catch (error) {
    console.log('Ошибка инициализации tg:', error);
  }
  // eslint-disable-next-line
  debug && import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);
}

export default useTgApp;
