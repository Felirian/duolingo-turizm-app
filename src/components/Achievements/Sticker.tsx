import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import AchievementPopupPortal from './AchievementPopupPortal';

 interface StickerProps {
    image: string
    alt: string,
 }

const Sticker = ({ image, alt }: StickerProps) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
        <StickerWr onClick={() => setOpen(true)} >
            <StickerItem src={image} width={70} height={70} alt={alt} $new={false}/>
            <Dot $new={true} />
        </StickerWr>
        {open && (
        <AchievementPopupPortal
            name={alt}
            image={image}
            course="ndjsfk"
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