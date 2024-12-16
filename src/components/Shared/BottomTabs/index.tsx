import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';

import BottomTabsSvgSelector from './BottomTabsSvgSelector';
import { CustomBtn } from '../CustomBtn';
import { useRouter } from 'next/router';

const TAB_BUTTONS = [
  {
    icon: <BottomTabsSvgSelector name='play' />,
    link: '',
  },
  {
    icon: <BottomTabsSvgSelector name='home' />,
    link: '',
  },
  {
    icon: <BottomTabsSvgSelector name='burger' />,
    link: '',
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
  bottom: 0;
  width: 100%;
  height: 23.71vw;
  padding: 2.29vw 4.29vw;
  padding-bottom: 3.14vw;

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
    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default BottomTabs;
