import { Point } from '@/interfaces';
import { Btn1Style } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointsSvgSelector from './PointsSvgSelector';
import { useRouter } from 'next/router';

interface PointItemProps {
  data: Point;
  coordinates: { top: string; left: string };
  currentPoint: number;
}

const PointItem = ({ data, coordinates, currentPoint }: PointItemProps) => {
  const router = useRouter();

  const handlePointClick = () => {
    router.push(router.asPath + '/' + data.number);
  };

  const isLockedPoint = data.number > currentPoint;

  return (
    <PointItemWr
      style={coordinates}
      onClick={handlePointClick}
      data-aos='flip-right'
      data-aos-delay={data.number * 100}
      data-aos-duration='700'
      disabled={isLockedPoint}
    >
      <PointBtn1 $islocked={isLockedPoint}>
        <span>{isLockedPoint ? <PointsSvgSelector name='locked' /> : data.number}</span>
        <PointsSvgSelector name='point' />

        {currentPoint === data.number && (
          <CurrentPointCloud data-aos='fade-down' data-aos-delay='700' data-aos-duration='400'>
            <span>Начать</span>
            <PointsSvgSelector name='cloud' />
          </CurrentPointCloud>
        )}
      </PointBtn1>
    </PointItemWr>
  );
};

const PointItemWr = styled.button`
  position: absolute;
  width: 23vw;
  height: 20vw;

  z-index: 2;

  &:active {
    svg {
      ellipse {
        transition: 0.2s;
        fill: ${COLORS.heavyOrange};
      }
    }
  }
  &:disabled {
    pointer-events: none;
  }
`;

const PointBtn1 = styled.div<{ $islocked: boolean }>`
  ${Btn1Style}
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    color: ${COLORS.white};
    font-size: 11.14vw;
    font-weight: inherit;
    font-family: inherit;

    svg {
      width: 7.43vw;
      height: 9.43vw;
    }
  }

  & > svg {
    position: absolute;
    width: 99%;
    height: 99%;
    z-index: 0;
    will-change: filter;
    transform: translateZ(0);
    backdrop-filter: blur(0);
    filter: ${({ $islocked }) =>
      $islocked
        ? `drop-shadow(0px 1.7vw 0px ${COLORS.darkOrange}) drop-shadow(0 0.8vw 0.8vw rgb(0, 0, 0, 0.25))`
        : `drop-shadow(0px 1.7vw 0px ${COLORS.mediumOrange}) drop-shadow(0 0.8vw 0.8vw rgb(0, 0, 0, 0.25))`};
    -webkit-filter: ${({ $islocked }) =>
      $islocked
        ? `drop-shadow(0px 1.7vw 0px ${COLORS.darkOrange}) drop-shadow(0 0.8vw 0.8vw rgb(0, 0, 0, 0.25))`
        : `drop-shadow(0px 1.7vw 0px ${COLORS.mediumOrange}) drop-shadow(0 0.8vw 0.8vw rgb(0, 0, 0, 0.25))`};
    path {
      fill: ${({ $islocked }) => ($islocked ? COLORS.lightOrange : COLORS.softOrange)};
    }
    ellipse {
      fill: ${({ $islocked }) => ($islocked ? COLORS.mediumOrange : COLORS.orange)};
    }
  }
`;

const CurrentPointCloud = styled.div`
  position: absolute;

  top: -65%;
  left: 5%;

  width: 20.86vw;
  height: 10.29vw;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    margin-top: 1vw;

    ${Btn1Style};
    font-size: 4.57vw;
    color: ${COLORS.textGreen};
    z-index: 2;
  }
`;

export default PointItem;
