import {PropsWithChildren, useEffect} from "react";
import {useRouter} from "next/router";
import {backButton, useSignal} from "@telegram-apps/sdk-react";

/**
 * #### Кастомный компонент
 * ## Компонент страницы
 * @param {string} name - Имя инпута
 * @param {string} placeholder - Плейсхолдер
 * @param {string} type - Тип инпута (так-же поддерживает textarea)
 * @param {string} description - Описание инпута (выводится над полем)
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

export function Page({children, back = true}: PropsWithChildren<{ back?: boolean }>) {

  const router = useRouter();
  const isVisible = useSignal(backButton.isSupported);

  useEffect(() => {
    if (!isVisible) return
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }


  }, [back]);

  useEffect(() => {
    if (!isVisible) return
    return backButton.onClick(() => {
      router.back();
    });
  }, [router]);

  return <>{children}</>;
}