import { PointsData } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';
import PointItem from './PointItem';

const PONTS_COORDS = [
  { top: '27.71vw', left: '22vw' },
  { top: '51.71vw', left: '44.5vw' },
  { top: '84.29vw', left: '32vw' },
  { top: '116.86vw', left: '23vw' },
  { top: '143.71vw', left: '44.8vw' },
];

const IMG_COORSDS = [
  { top: '31.71vw', left: '0' },
  { top: '76.57vw', left: '61.71vw' },
  { top: '121.43vw', left: '0' },
];

const Points = ({ data }: { data: PointsData }) => {
  console.log(data, ' pointsdata');
  return (
    <PointsWr>
      <PointsTitleBlock>
        <Btn1 data-aos='zoom-in'>{data.section.name}</Btn1>
        <B1 data-aos='zoom-in' data-aos-duration='600'>
          уровень
        </B1>
      </PointsTitleBlock>

      {data.points
        .sort((a, b) => a.number - b.number)
        .slice(0, 5)
        .map((point, index) => {
          return (
            <PointItem key={`${index}-point-item`} data={point} coordinates={PONTS_COORDS[index]} />
          );
        })}

      {data.section.images.slice(0, 3).map((img, index) => {
        return (
          <MascotImg
            key={`${index}-point-img`}
            data-aos={IMG_COORSDS[index].left === '0' ? 'fade-right' : 'fade-left'}
            src={img}
            style={IMG_COORSDS[index]}
          />
        );
      })}
    </PointsWr>
  );
};

const PointsWr = styled.div`
  position: relative;
  width: 100%;
  height: 192vw;

  overflow-y: none;

  /* &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; 
  scrollbar-width: none;  */
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
  position: absolute;
  z-index: 1;

  width: 38.29vw;
  height: 38.29vw;

  object-fit: contain;
`;

export default Points;
