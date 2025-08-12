import { PointsData } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointItem from './PointItem';
import React from 'react';
import useTgApp from '@/features/_tg_methods_';
import { SafeAreaInsets } from '@telegram-apps/bridge';


const IMG_COORSDS = [
  { top: '60vw', left: '-5vw' },
  { top: '90vw', left: '57vw' },
  { top: '130vw', left: '-5vw' },
];

const Points = ({ data }: { data: PointsData }) => {
  const { safeAreas } = useTgApp();
  const currentPoint = data.progress?.point + 1 || 1;

  return (
    <PointsWr>
      <PointsTitleBlock  $safeAreas={safeAreas}>
          <PointsTitle>{data.section.name}</PointsTitle>
      </PointsTitleBlock>

      <PointsCon> 
      {data?.points
        .sort((a, b) => a.number - b.number)
        .map((point, index) => {
          return (
            <div className={index%2 === 0 ? 'left' : 'right'} 
                key={`${index}-point-item`}>
              <PointItem
              side={index%2 === 0 ? 'left' : 'right'}
                data={point}
                currentPoint={currentPoint}
                progress={data.progress.point}
                isLast={index === data.points.length - 1}
              />
            </div>
          );
        })}
      </PointsCon>

      {data.section.images.slice(0, 3).map((img, index) => {
        return (
          <MascotsCon
            key={`${index}-point-img`}
            // data-aos={index % 2 ? 'fade-left' : 'fade-right'}
            style={{  ...IMG_COORSDS[index] }}
          >
            <img src={img} />
          </MascotsCon>
        );
      })} 
    </PointsWr>
  );
};

const PointsWr = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: left;
  padding-top: 40vw;

  overflow-y: hidden;

  display: flex;
  align-items: center;


  justify-content: center;
  
  color: ${COLORS.textGray};
`;

const PointsTitleBlock = styled.div<{$safeAreas: SafeAreaInsets | null;}>`

  padding: 5.7vw;
  border: 2px solid ${COLORS.shadowGreen};
  background-color: ${COLORS.white};
  border-radius: 4.8vw;
  width: auto;

  position: fixed;
  z-index: 5;
  top: ${({ $safeAreas }: any) => 50 +  $safeAreas?.top}px;
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
  z-index: 0;

  >img {
    width: 38.29vw;
    height: 38.29vw;

    object-fit: contain;
  }

`;

const PointsCon = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10vw;
  justify-content: center;
  justify-content: center;
  width: 40vw;
  z-index: 4;

  .right {
    align-self: flex-end;
  }

  .left {
    align-self: flex-start;
  }

`;


export default Points;
