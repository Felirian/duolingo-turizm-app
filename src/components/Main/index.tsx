import React from 'react';
import { ProgressBurSection } from '@/components/Shared/ProgressBurSection';
import { Btn1, H3 } from '@/styles/textTags';
import { ProgressBurLevel } from '@/components/Shared/ProgressBurLevel';
import frog1 from '@/assets/img/frogLevel/1.png';
import frog2 from '@/assets/img/frogLevel/2.png';
import frog3 from '@/assets/img/frogLevel/3.png';
import styled from 'styled-components';

const BG_SVG = (
  <svg
    width='350'
    height='205'
    viewBox='0 0 350 205'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M173.434 170.421C253.572 167.289 263.25 230.043 363.253 191.781C520.34 131.678 379.109 -40.0285 233.887 -103.247C78.8572 -170.736 -146.459 -73.422 -35.7365 144.495C21.8442 257.822 109.193 172.932 173.434 170.421Z'
      fill='url(#paint0_linear_163_1931)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_163_1931'
        x1='41'
        y1='-26.5001'
        x2='69.0831'
        y2='289.706'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#A6D881' />
        <stop offset='1' stop-color='#91EFCB' />
      </linearGradient>
    </defs>
  </svg>
);

// eslint-disable-next-line
const Index = ({ data }: any) => {
  const FrogLevel =
    Math.round(data.xp / 100) < 5 ? frog1 : Math.round(data.xp / 100) > 10 ? frog3 : frog2;

  return (
    <MainWr>
      <SvgCon>{BG_SVG}</SvgCon>
      <Btn1>{data.character}</Btn1>
      <ProgressBurLevel percent={data.xp % 100} level={Math.round(data.xp / 100)} />

      <ImgCon>
        <img src={FrogLevel.src} />
      </ImgCon>

      <ProgressCon>
        <H3>Общий прогресс</H3>
        <ProgressBurSection percent={data.progress_percentage} />
      </ProgressCon>
    </MainWr>
  );
};

const MainWr = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.56vw;
  width: 100%;
  height: 100%;
  color: #0f8359;

  ${Btn1} {
    z-index: 2;
  }
`;

const ImgCon = styled.div`
  z-index: 4;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 295px;
    max-width: 310px;
    width: 100%;
    height: 100%;
    aspect-ratio: 310/295;
  }
`;

const ProgressCon = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.86vw;

  margin-bottom: 10vw;
`;

const SvgCon = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: -19vw;
  left: 50%;
  transform: translateX(-50%) scale(1.2);
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Index;
