import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import AchievementPopupPortal from './AchievementPopupPortal';
import { IAchievement } from '@/interfaces';


const Sticker = ({ achievement_image, course_id, course_name, is_completed, achievement_name='achievement_name'}: IAchievement) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
        <StickerWr 
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="500"
        onClick={() => setOpen(true)} disabled={!is_completed}>
            <StickerItem src={achievement_image} width={70} height={70} alt={course_name} $new={is_completed}/>
            <Dot $new={is_completed} />
        </StickerWr>
        {open && (
        <AchievementPopupPortal
            name={achievement_name}
            image={achievement_image}
            course={course_name}
            open={open}
            setPopupOpen={setOpen}
        />
        )}
        </>
    )
};

const StickerWr = styled.button`
    width: 22vw;
    height: 22vw;
    //padding: 0.85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`;

const StickerItem = styled.img<{$new: boolean}>`
    width: 100%;
    height: 100%;

    animation: ${({ $new }) => ($new ? 'newSticker 0.8s infinite' : 'none')};

    @keyframes newSticker {
        0% {
        transform: Scale(1);
        }
        50% {
        transform: Scale(0.95);
        }
        100% {
        transform: Scale(1);
        }
  }
`;

const Dot = styled.div<{$new: boolean}>`
    display:${({ $new }) => ($new ? 'flex' : 'none')};
    width: 2vw;
    height: 2vw;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: absolute;
    top: 2%;
    right: 2%;
    background-color: ${COLORS.orange};
`

export default Sticker;