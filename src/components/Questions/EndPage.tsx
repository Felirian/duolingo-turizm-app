import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../Shared/CustomBtn';
import { Btn1, Btn2, Btn2Style, Btn3 } from '@/styles/textTags';
import QuestionsSvgSelector from './QuestionsSvgSelector';
import Image from 'next/image';
import crownImg from '@/assets/img/crown.png';
import frogImg from '@/assets/img/frog.png';
import { useRouter } from 'next/router';

interface EndPageProps {
  QuizFunc: any;
}

const EndPage = ({ QuizFunc }: EndPageProps) => {
  const router = useRouter();
  const id = router.query.point_id;

  console.log(QuizFunc, 'QuizFunc');

  return (
    <EndPageWr>
      <EndPageContentBlock>
        <CrownBlock>
          <Title>Поздравляем!</Title>
          <Level>уровень {id}</Level>
          <Image src={crownImg.src} alt='вы прошли уровень' width={300} height={200} />
        </CrownBlock>
        <ExpBlock>
          <Btn2>Награда</Btn2>
          <PointRollBlock>
            <QuestionsSvgSelector name='exp' />
            <span>+70</span>
          </PointRollBlock>
        </ExpBlock>
        <CustomBtn>Продолжить</CustomBtn>
      </EndPageContentBlock>
      <MascotImg src={frogImg.src} alt='Квакс' width={310} height={289} />
    </EndPageWr>
  );
};

const EndPageWr = styled.div`
  padding-top: 56vw;
  width: 100%;
  height: 100%;
`;

const CrownBlock = styled.div`
  position: absolute;
  left: -10vw;
  top: -40vw;
  width: 98vw;
  height: 60vw;
  color: ${COLORS.white};
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled(Btn1)`
  position: absolute;
  z-index: 2;
  font-size: 6.86vw;
  font-weight: 800;
  text-transform: uppercase;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7.5vw;
`;

const Level = styled(Btn3)`
  position: absolute;
  z-index: 2;
  font-size: 4.57vw;
  font-weight: 500;
  left: 50%;
  transform: translateX(-50%);
  bottom: 18vw;
`;

const EndPageContentBlock = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  width: 80vw;
  height: 74.29vw;
  background-color: ${COLORS.white};

  padding: 24.57vw 5.71vw 7.14vw;

  display: flex;
  flex-direction: column;
  justify-content: end;

  gap: 6vw;

  border-radius: 8.57vw;
  border: 3px solid ${COLORS.bubbleGreen};
`;

const ExpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.71vw;
`;

const PointRollBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  span {
    ${Btn2Style};
    font-size: 9.14vw;
    color: ${COLORS.textGreen};
  }

  svg {
    width: 13vw;
    height: 12vw;
  }
`;

const MascotImg = styled(Image)`
  position: absolute;
  bottom: -25vw;
  left: 50%;
  transform: translateX(-50%);
  width: 85.57vw;
  height: 79.57vw;
  z-index: 0;
`;

export default EndPage;
