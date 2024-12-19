import {PropsWithChildren, useEffect} from 'react';
import {useRouter} from 'next/router';
import {backButton, useSignal} from '@telegram-apps/sdk-react';
import useTgApp from '@/features/_tg_methods_';
import styled from 'styled-components';
import {SafeAreaInsets} from '@telegram-apps/bridge';

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

export function Page({
                       children,
                       back = true,
                       background = true,
                       navBar = true
                     }:
                       PropsWithChildren<{
                         back?: boolean,
                         background?: boolean,
                         navBar?: boolean
                       }>) {
  const router = useRouter();
  const isVisible = useSignal(backButton.isSupported);
  //const isBtnClick = useSignal(backButton.onClick);

  const {safeAreas} = useTgApp();

  useEffect(() => {
    if (!isVisible) return;
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    if (!isVisible) return;

    return backButton.onClick(() => {
      console.log('back');
      router.back();
    });
  }, [router]);

  return (
    <PageWr
      $safeAreas={safeAreas}
      $background={background }
      $navBar={navBar}
    >
      {children}
    </PageWr>
  );
}

const PageWr = styled.div<{
  $safeAreas: SafeAreaInsets | null,
  $background: boolean | undefined,
  $navBar: boolean | undefined,

}>`
  // eslint-disable-next-line 
  padding-top: ${({$safeAreas}: any) => 20 + $safeAreas?.top}px; // eslint-disable-line no-explicit-any
  padding-left: ${({$safeAreas}: any) => 20 + $safeAreas?.left}px;
  padding-right: ${({$safeAreas}: any) => 20 + $safeAreas?.right}px;
  padding-bottom: ${({$safeAreas, $navBar}: any) => ($navBar ? 120 : 20) + $safeAreas?.bottom}px;
  
  width: 100vw;
  height: 100vh;

  background: ${({$background}) => $background
    ? 'linear-gradient(353.92deg, #ffd9b2 5.82%, #daf8b2 50.17%, #92eecb 91.94%)'
    : '#F1F4EA'
  };
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
