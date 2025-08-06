import React, { useState } from 'react';
import { H1 } from '@/styles/textTags';
import styled from 'styled-components';
import Suitcase from '@/components/Achievements/Suitcase';
import bg from '../../assets/img/background.png' ;
import { COLORS } from '@/styles/variables';
import { ICourses } from '@/interfaces';
import AchievementPopup from './AchievementPopup';

const Achievements = (data: ICourses) => {
    return (
        <AchievementsWr>
            <H1>Мои наклейки</H1>
            <Suitcase data={data?.data} />
            {/* {popupData && <AchievementPopup name={popupData?.name} image={`/mock/${popupData?.image}`} course={popupData?.course} open={popupOpen} setPopupOpen={setPopupOpen} setPopupData={setPopupData} />} */}
        </AchievementsWr>
    )
}

const AchievementsWr = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 11.42vw;

    &::after {
        pointer-events: none;
		content: '';
		display: block;
		position: absolute;
        z-index: 0;
        height: 50vw;
        width: 100vw;
        top: -8%;
        left: 0;
		background-image: url(${bg.src});
		background-size: cover;
		background-repeat: no-repeat;
    }

    h1 {
        position: static;
        z-index: 2; 
        color: ${COLORS.white};
        font-size: 7.42vw;
    }
`;

export default Achievements;