import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import { useGetAllPoints } from '@/features/_queries_/_rest_api_';
import useTgApp from '@/features/_tg_methods_';

 interface StickerProps {
    image: string,
    alt: string,
    achieved: boolean
 }

const Sticker = ({ image, alt, achieved }: StickerProps) => {
    console.log(`achieved ${alt}`, achieved);
    return (
        <StickerWr>
            <StickeItem src={image} width={70} height={70} alt={alt}/>
            <Dot $new={achieved} />
        </StickerWr>
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

const StickeItem = styled.img`
width: 100%;
height: 100%;
`;

const Dot = styled.div  <{$new: boolean}>`
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