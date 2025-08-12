import { COLORS } from '@/styles/variables';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../Shared/CustomBtn';
import { Btn1, Btn2, Btn2Style, Btn3 } from '@/styles/textTags';
import QuestionsSvgSelector from './QuestionsSvgSelector';
import Image from 'next/image';
import crownImg from '@/assets/img/crown.png';
import frogImg from '@/assets/img/frog.png';
import { useRouter } from 'next/router';
import SvgSelector from '../Shared/SvgSelector';
import Loader from '../Shared/Loader';
import { addCompletedCourseSlug } from '@/features/localStorage';

interface EndPageProps {
  // eslint-disable-next-line
  QuizFunc: any;
}

const EndPage = ({ QuizFunc }: EndPageProps) => {
  const router = useRouter();
  const point_id = router.query.point_id;
  const section_slug = router.query.section_id;
  const course_slug = router.query.courses_id;

  const [achievement, setAchievement] = useState<boolean | null>(null);

  useEffect(() => {
    if (!point_id || !section_slug || !course_slug) return;

    const fetchData = async () => {
      const data = await QuizFunc.gameOver(section_slug, Number(point_id));

      if (data?.is_completed_course) {
        setAchievement(true);
        addCompletedCourseSlug(String(course_slug));
      } else {
        setAchievement(false);
      }
    };

    fetchData();
  }, [point_id, section_slug, course_slug]);

  if (achievement === null) {
    return <Loader />;
  }

  return (
    <EndPageWr>
      <button onClick={() => router.push(`/courses/${course_slug}/${section_slug}`)}>
        <SvgSelector svg='close-btn' />
      </button>
      <EndPageContentBlock>
        <CrownBlock>
          <Title>Поздравляем!</Title>
          <Level>уровень {point_id}</Level>
          <Image src={crownImg.src} alt='вы прошли уровень' width={300} height={200} />
        </CrownBlock>
        <ExpBlock>
          <Btn2>Награда</Btn2>
          <PointRollBlock>
            <QuestionsSvgSelector name={achievement ? 'stciker' : 'exp'} />
            <span>{achievement ? '+1' : '+70'}</span>
          </PointRollBlock>
        </ExpBlock>
        <CustomBtn onClick={() => router.push(`/courses/${course_slug}/${section_slug}`)}>
          Продолжить
        </CustomBtn>
        {achievement && (
          <CustomBtn orange onClick={() => router.push('/achievements')}>
            Мой{'\u00A0'}чемодан
          </CustomBtn>
        )}
      </EndPageContentBlock>
      {!achievement && <MascotImg src={frogImg.src} alt='Квакс' width={310} height={289} />}
    </EndPageWr>
  );
};

const EndPageWr = styled.div`
  //padding-top: 56vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40vw;

  > button {
    align-self: flex-end;
    justify-self: flex-start;
  }
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
  max-height: 139vw;
  min-height: 74.29vw;
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
    width: 12vw;
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
