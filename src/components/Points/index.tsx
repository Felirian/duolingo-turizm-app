import { PointsData } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointItem from './PointItem';
import React from 'react';

const PONTS_COORDS = [
  { top: '29.71vw', left: '22vw' },
  { top: '53.71vw', left: '44.5vw' },
  { top: '86.29vw', left: '32vw' },
  { top: '118.86vw', left: '23vw' },
  { top: '145.71vw', left: '44.8vw' },
];

const IMG_COORSDS = [
  { top: '32vw', left: '-5vw' },
  { top: '77vw', left: '57vw' },
  { top: '122vw', left: '-5vw' },
];

const Points = ({ data }: { data: PointsData }) => {
  console.log(data.progress);
  return (
    <PointsWr>
      <PointsTitleBlock>
        <div data-aos='zoom-in'>
          <Btn1>{data.section.name}</Btn1>
        </div>
        <div data-aos='zoom-in' data-aos-duration='600'>
          <B1>{`уровень ${(data.progress?.point + 1) | 1}`}</B1>
        </div>
      </PointsTitleBlock>

      {data?.points
        .sort((a, b) => a.number - b.number)
        .slice(0, 5)
        .map((point, index) => {
          return (
            <React.Fragment key={`${index}-point-item`}>
              <PointItem
                data={point}
                currentPoint={data.progress?.point + 1}
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
  height: 187vw;

  overflow-y: none;
`;

const PointsTitleBlock = styled.div`
  position: fixed;
  z-index: 5;

  top: 5.71vw;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLORS.textGreen};
`;

const MascotImg = styled.img`
  width: 38.29vw;
  height: 38.29vw;

  object-fit: contain;
`;

export default Points;
