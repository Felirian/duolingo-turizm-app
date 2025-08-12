import React from 'react';
import styled, { keyframes } from 'styled-components';
import suitcase from '../../assets/img/suitcase.svg';
import Sticker from './Sticker';
import { IAchievement, IAchievements } from '@/interfaces';

const WheelSvg = () => {
  return (
    <svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M34 17C34 7.61068 26.3893 0 17 0C7.61068 0 0 7.61068 0 17C0 26.3893 7.61068 34 17 34C26.3893 34.0015 34 26.3893 34 17Z'
        fill='#181E2A'
      />
      <path
        d='M17 2C16.4477 2 16 3.34306 16 5C16 6.65694 16.4477 8 17 8C17.5523 8 18 6.65694 18 5C18.0001 3.34306 17.5523 2 17 2Z'
        fill='#5E696B'
      />
      <path
        d='M17 26C16.4477 26 16 27.3431 16 29C16 30.6569 16.4477 32 17 32C17.5523 32 18 30.6569 18 29C18.0001 27.3431 17.5523 26 17 26Z'
        fill='#5E696B'
      />
      <path
        d='M27.608 6.39342C27.2174 6.00288 25.9512 6.636 24.7795 7.80763C23.6079 8.97927 22.9748 10.2455 23.3653 10.6361C23.7559 11.0266 25.0221 10.3935 26.1937 9.22185C27.3654 8.05028 27.9985 6.78397 27.608 6.39342Z'
        fill='#5E696B'
      />
      <path
        d='M10.6372 23.3639C10.2467 22.9733 8.98045 23.6065 7.80882 24.7781C6.63719 25.9497 6.00406 27.216 6.39461 27.6065C6.78515 27.9971 8.0514 27.3639 9.22303 26.1923C10.3947 25.0207 11.0278 23.7544 10.6372 23.3639Z'
        fill='#5E696B'
      />
      <path
        d='M32.002 17.0005C32.002 16.4482 30.6589 16.0005 29.002 16.0005C27.345 16.0005 26.002 16.4482 26.002 17.0005C26.002 17.5528 27.345 18.0005 29.002 18.0005C30.6589 18.0006 32.002 17.5528 32.002 17.0005Z'
        fill='#5E696B'
      />
      <path
        d='M8.00195 17.0005C8.00195 16.4482 6.65889 16.0005 5.00195 16.0005C3.34501 16.0005 2.00195 16.4482 2.00195 17.0005C2.00195 17.5528 3.34501 18.0005 5.00195 18.0005C6.65889 18.0006 8.00195 17.5528 8.00195 17.0005Z'
        fill='#5E696B'
      />
      <path
        d='M27.6078 27.6084C27.9983 27.2179 27.3652 25.9516 26.1936 24.78C25.022 23.6084 23.7557 22.9753 23.3652 23.3658C22.9746 23.7563 23.6077 25.0226 24.7794 26.1942C25.9509 27.3659 27.2173 27.999 27.6078 27.6084Z'
        fill='#5E696B'
      />
      <path
        d='M10.6371 10.638C11.0276 10.2474 10.3945 8.98118 9.22288 7.80955C8.05125 6.63792 6.785 6.00479 6.39446 6.39534C6.00391 6.78588 6.63704 8.05213 7.80867 9.22377C8.98024 10.3955 10.2466 11.0285 10.6371 10.638Z'
        fill='#5E696B'
      />
      <path
        d='M23 17C23 13.6861 20.3139 11 17 11C13.6861 11 11 13.6861 11 17C11 20.3139 13.6861 23 17 23C20.3139 23.0005 23 20.3139 23 17Z'
        fill='#5E696B'
      />
    </svg>
  );
};

const Suitcase = ({ data }: IAchievements) => {
  return (
    <SuitcaseWr data-aos='fade-right' data-aos-duration='300'>
      {data?.map((sticker: IAchievement) => (
        <Sticker
          key={'sticker-' + sticker.course_name}
          achievement_image={sticker.achievement_image}
          course_name={sticker.course_name}
          is_completed={sticker.is_completed}
          achievement_name={sticker.achievement_name}
          course_slug={sticker.course_slug}
        />
      ))}
      <Wheel>
        <WheelSvg />
      </Wheel>
      <Wheel>
        <WheelSvg />
      </Wheel>
    </SuitcaseWr>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SuitcaseWr = styled.div`
  width: 81.7vw;
  height: 115.5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.5vw 1vw;
  position: relative;
  padding: 13.62vw 8.85vw 14.85vw 7.22vw;
  z-index: 1;

  &::before {
    pointer-events: none;
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(${suitcase.src});
    background-size: 81.7vw 115.5vw;
    background-repeat: no-repeat;
  }
`;

const Wheel = styled.div`
  width: 10vw;
  height: 10vw;
  position: absolute;
  bottom: 0;
  animation: ${rotate} 2s linear infinite;

  svg {
    width: 100%;
    height: 100%;
  }

  &:first-of-type {
    left: 4.5vw;
  }

  &:last-of-type {
    right: 4.8vw;
  }
`;

export default Suitcase;
