import React from 'react';
import styled from 'styled-components';
import { H2, B2 } from "@/styles/textTags";
import { CustomBtn } from "@/components/Shared/CustomBtn";
import sadImg from '@/assets/img/popup/sadKlubok.png';
import Image from 'next/image';
import SvgSelector from '@/components/Shared/SvgSelector';

const ClosePage = ({QuizFunc, section_slug, course_slug, setClosePage}: any) => {
    return (
        <ClosePageWr>
            <button onClick={() => setClosePage(false)}>
              <SvgSelector svg="close-btn" />
            </button>
            <div>
                <H2>Хотите покинуть уровень?</H2>
                <B2>Ваш прогресс на этом уровне будет утерян</B2>
            </div>
            <Image src={sadImg} width={163} height={163} alt='Клубок' />
            <div> 
                <CustomBtn orange onClick={()=> { QuizFunc.leaveLevel(section_slug, course_slug)}}>Да</CustomBtn>
                <CustomBtn onClick={() => setClosePage(false)}>Отмена</CustomBtn>
            </div>
        </ClosePageWr>
    )
};

const ClosePageWr = styled.div`
    padding: 4.85vw 0 31.4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    overflow: hidden;

    >img {
        transform: rotate(-11.016deg) translate(-25%, 10%);
        width: 55vw;
        height: 55vw;
    }

    >button:first-of-type {
        align-self: flex-end;
    }

    >div {
        display: flex;
        flex-direction: column;

    };

    >div:first-of-type {
        gap: 17.14vw;
        padding: 0 2.2vw;
    }

    >div:last-of-type {
        width: 100%;
        gap: 3vw;
    }
`;

export default ClosePage;