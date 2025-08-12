import { PointsData } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointItem from './PointItem';
import React from 'react';
import useTgApp from '@/features/_tg_methods_';
import { SafeAreaInsets } from '@telegram-apps/bridge';

const IMG_COORSDS = [
  { top: '10vw', left: '-30vw' },
  { top: '35vw', left: '35vw' },
  { top: '60vw', left: '-30vw' },
];

const Points = ({ data }: { data: PointsData }) => {
  const { safeAreas } = useTgApp();
  const currentPoint = data.progress?.point + 1 || 1;

  return (
    <PointsWr $safeAreas={safeAreas}>
      <PointsTitleBlock data-aos='fade-down' data-aos-duration='800' $safeAreas={safeAreas}>
        <PointsTitle>{data.section.name}</PointsTitle>
      </PointsTitleBlock>

      <PointsCon>
        {data?.points
          .sort((a, b) => a.number - b.number)
          .map((point, index) => {
            return (
              <div className={index % 2 === 0 ? 'left' : 'right'} key={`${index}-point-item`}>
                <PointItem
                  side={index % 2 === 0 ? 'left' : 'right'}
                  data={point}
                  currentPoint={currentPoint}
                  progress={data.progress?.point}
                  isLast={index === data.points.length - 1}
                />
              </div>
            );
          })}
        {data.section.images.slice(0, 3).map((img, index) => {
          return (
            <MascotsCon
              key={`${index}-point-img`}
              data-aos={index % 2 ? 'fade-left' : 'fade-right'}
              data-aos-duration='800'
              style={{ ...IMG_COORSDS[index] }}
            >
              <img src={img} />
            </MascotsCon>
          );
        })}
      </PointsCon>
    </PointsWr>
  );
};

const PointsWr = styled.div<{ $safeAreas: SafeAreaInsets | null }>`
  width: 100%;
  text-align: left;
  padding-top: ${({ $safeAreas }: any) => 125 + $safeAreas?.top}px;

  overflow-y: none;

  display: flex;
  align-items: center;

  justify-content: center;

  color: ${COLORS.textGray};
`;

const PointsTitleBlock = styled.div<{ $safeAreas: SafeAreaInsets | null }>`
  padding: 5.7vw;
  border: 2px solid ${COLORS.shadowGreen};
  background-color: ${COLORS.white};
  border-radius: 4.8vw;
  width: auto;

  position: fixed;
  z-index: 5;
  top: 10vw;
  //top: ${({ $safeAreas }: any) => 50 + $safeAreas?.top}px;
  left: 2.85vw;
  right: 2.85vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PointsTitle = styled(Btn1)`
  line-height: 125%;
  font-size: 5.14vw;
  font-style: bold;
`;

const MascotsCon = styled.div`
  position: absolute;
  z-index: -1;

  > img {
    width: 33vw;
    height: 33vw;

    object-fit: contain;
  }
`;

const PointsCon = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 13vw;
  justify-content: center;
  justify-content: center;
  width: 36vw;
  z-index: 4;

  .right {
    align-self: flex-end;
  }

  .left {
    align-self: flex-start;
  }
`;

export default Points;
