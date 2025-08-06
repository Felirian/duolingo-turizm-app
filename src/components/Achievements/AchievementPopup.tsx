import React from 'react';
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
    setPopupOpen: ()=> void;
    setPopupData: ()=> void;
};

// const handlePopupClose = (setPopupOpen: ()=>void, setPopupData: ()=> void ) => (
//     setPopupOpen(false);
//     setPopupData(null);
// )

const AchievementPopup = ({name, image, course, open, setPopupOpen, setPopupData} : AchievementPopupProps) => {
    return (
        <AchievementPopupWr $open={open}>
            <button onClick={() => ()}>
              <SvgSelector svg="close-btn" />
            </button>
            <Image src={image} width={220} height={220} alt='' />
            <H2>{name}</H2>
            <B2>
                Получено за прохождение курса {course}
            </B2>
            <CustomBtn orange>ОК</CustomBtn>
        </AchievementPopupWr>
    )
};

const AchievementPopupWr = styled.div<{$open: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    padding: 71px 20px 37px;
    background-color: ${COLORS.white};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;

    >button:first-of-type {
        align-self: flex-end;
    }

`;

export default AchievementPopup;