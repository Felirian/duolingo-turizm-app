import React, { useState } from 'react';
import styled from 'styled-components';
import suitcase from '../../assets/img/suitcase.svg' ;
import Sticker from './Sticker';
import { BASE_URL } from '@/features/_queries_/config';
import { ICourses, Course } from '@/interfaces';

const Suitcase = ({ data }: ICourses) => {
    
    return (
        <SuitcaseWr>
            {data?.map((sticker:Course)=> 
            <Sticker 
                key={'sticker-' + sticker.count}
                image={sticker.unachievement}
                alt={sticker.descr}
                slug={sticker.slug}
                />
            )}
        </SuitcaseWr>
    )
}

const SuitcaseWr = styled.div`
    width: 81.7vw;
    height: 115.5vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.5vw 1vw ;
    position: relative;
    padding: 13.62vw 8.85vw 14.85vw 7.22vw;
    z-index: 1;
    background-image: url(${suitcase.src});
	background-size: cover;
	background-repeat: no-repeat;
`

export default Suitcase;