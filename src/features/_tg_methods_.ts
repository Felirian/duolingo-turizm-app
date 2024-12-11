import {
  init,
  initDataUser,
  $debug,
  initData,
  User,
  miniApp,
  themeParams,
  backButton,
  viewport
} from "@telegram-apps/sdk-react";
import {useEffect, useState} from "react";

const useTgApp = () => {
  const [dataUser, setDataUser] = useState<User | undefined | null>(null)

  useEffect(() => {
    const initData = initDataUser();

    if (initData) {
      console.log(initData);
      setDataUser(initData)
    } else {
      console.log('initData error');
      setDataUser(null)
    }
  }, []);


  return {
    dataUser,
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

  try {
    $debug.set(debug);
    console.log('---Init Tg---');
    init();

    backButton.isSupported() && backButton.mount();
    miniApp.mount();
    themeParams.mount();
    initData.restore();
    void viewport.mount().catch(e => {
      console.error('ошибка viewport', e);
    });
    const gfgf = async () => {
      if (viewport.isMounted()) {
        console.log('dd')
        await viewport.requestFullscreen()
      }
    }
    //gfgf()

  } catch (error) {
    console.log('Ошибка инициализации tg:', error);
  }

  debug && import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);

};

export default useTgApp;
