import { PointsData } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointItem from './PointItem';
import React from 'react';

const PONTS_COORDS = [
  { top: '43vw', left: '22vw' },
  { top: '68vw', left: '44.5vw' },
  { top: '97vw', left: '32vw' },
  { top: '129vw', left: '23vw' },
  { top: '157vw', left: '44.8vw' },
];

const IMG_COORSDS = [
  { top: '65vw', left: '-5vw' },
  { top: '98vw', left: '57vw' },
  { top: '148vw', left: '-5vw' },
];

const Points = ({ data }: { data: PointsData }) => {
  const currentPoint = data.progress?.point + 1 || 1;

  return (
    <PointsWr>
      {/*<PointsTitleBlock>*/}
        <div data-aos='zoom-in'>
          <PointsTitle>{data.section.name}</PointsTitle>
        </div>
        <div data-aos='zoom-in' data-aos-duration='600'>
          <B1>{currentPoint > 5 ? 'все уровни пройдены!' : `уровень ${currentPoint}`}</B1>
        </div>
      {/*</PointsTitleBlock>*/}

      {data?.points
        .sort((a, b) => a.number - b.number)
        .slice(0, 5)
        .map((point, index) => {
          return (
            <React.Fragment key={`${index}-point-item`}>
              <PointItem
                data={point}
                currentPoint={currentPoint}
                coordinates={PONTS_COORDS[index]}
              />
            </React.Fragment>
          );
        })}

      {data.section.images.slice(0, 3).map((img, index) => {
        return (
          <div
            key={`${index}-point-img`}
            data-aos={index % 2 ? 'fade-left' : 'fade-right'}
            style={{ position: 'absolute', ...IMG_COORSDS[index] }}
          >
            <MascotImg src={img} />
          </div>
        );
      })}
    </PointsWr>
  );
};

const PointsWr = styled.div`
  position: relative;
  width: 100%;
  height: 200vw;

  text-align: center;

  overflow-y: none;
  
  color: ${COLORS.textGreen};
`;

const PointsTitleBlock = styled.div`
  position: fixed;
  z-index: 5;

  top: 12vw;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  color: ${COLORS.textGreen};
`;

const PointsTitle = styled(Btn1)`
  line-height: 105%;
`;

const MascotImg = styled.img`
  width: 38.29vw;
  height: 38.29vw;

  object-fit: contain;
`;

export default Points;
