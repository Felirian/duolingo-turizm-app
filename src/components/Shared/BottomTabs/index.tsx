import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';

import BottomTabsSvgSelector from './BottomTabsSvgSelector';
import { CustomBtn } from '../CustomBtn';
import { useRouter } from 'next/router';

const TAB_BUTTONS = [
  {
    icon: <BottomTabsSvgSelector name='play' />,
    link: '/',
  },
  {
    icon: <BottomTabsSvgSelector name='home' />,
    link: '/',
  },
  {
    icon: <BottomTabsSvgSelector name='burger' />,
    link: '/courses',
  },
];

const BottomTabs = () => {
  const router = useRouter();

  const buttonClick = (link: string) => {
    router.push(link);
  };

  return (
    <BottomTabsWr>
      {TAB_BUTTONS.map((button, index) => {
        return (
          <CustomBtn
            key={`${index}-tab-btn`}
            onClick={() => {
              buttonClick(button.link);
            }}
          >
            {button.icon}
          </CustomBtn>
        );
      })}
    </BottomTabsWr>
  );
};

const BottomTabsWr = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 26vw;
  padding: 2.29vw 4.29vw 5vw;

  background-color: ${COLORS.lightGreen};
  border-radius: 5.71vw 5.71vw 0px 0px;

  display: flex;
  flex-wrap: nowrap;
  gap: 2.86vw;

  button {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${COLORS.mediumGreen};
    box-shadow: none;
    &:after {
      background-color: ${COLORS.white};
      opacity: 0.1;
    }
    &:before {
      transition: 0.2s;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(187deg, #44cf70 29.02%, #a9f09f 108.07%);
      opacity: 0;
      border-radius: inherit;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 9.14vw;
      height: 10.29vw;
      transition: transform 0.2s;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    &:active {
      transform: none;
      background-color: ${COLORS.mediumGreen};
      box-shadow: none;
      p {
        transform: scale(0.9);
      }
      &:before {
        opacity: 1;
      }
    }
  }
`;

export default BottomTabs;
