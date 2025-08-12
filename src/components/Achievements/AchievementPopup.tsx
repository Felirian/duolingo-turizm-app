import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import Image from 'next/image';
import { H2, B2 } from '@/styles/textTags';
import SvgSelector from '../Shared/SvgSelector';
import { CustomBtn } from '../Shared/CustomBtn';

interface AchievementPopupProps {
  name: string;
  image: string;
  course: string;
  open: boolean;
  setPopupOpen: () => void;
}

const AchievementPopup = ({ name, image, course, open, setPopupOpen }: AchievementPopupProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setPopupOpen(), 300);
  };

  return (
    <AchievementPopupWr $open={visible}>
      <CloseBtn onClick={handleClose}>
        <SvgSelector svg='close-btn' />
      </CloseBtn>
      <div className='image-wrapper'>
        <Image src={image} width={220} height={220} alt={`Достижение: ${name}`} />
      <div 
        data-aos="fade-up"
        data-aos-duration="300"
      className="image-wrapper">
        <Image 
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
        src={image} width={220} height={220} alt={`Достижение: ${name}`} />
      </div>
      <H2>{name}</H2>
      <B2>Получено за прохождение курса {course}</B2>
      <CustomBtn orange onClick={handleClose}>
        ОК
      </CustomBtn>
      <H2
      data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="600"
      >{name}</H2>
      <B2
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="900"
      >Получено за прохождение курса {course}</B2>
      <CustomBtn
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="1200"
      orange onClick={handleClose}>ОК</CustomBtn>
    </AchievementPopupWr>
  );
};

const AchievementPopupWr = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  padding: 20.3vw 5.7vw 10.5vw;
  background-color: ${COLORS.white};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  transition: opacity 0.2s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 11.4vw;

  .image-wrapper {
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 20%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transform: skewX(-45deg);
      animation: sticker 2s infinite;
      pointer-events: none;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @keyframes sticker {
    0% {
      left: -150%;
    }
    100% {
      left: 150%;
    }
  }
`;

const CloseBtn = styled.button`
  align-self: flex-end;
`;

export default AchievementPopup;
