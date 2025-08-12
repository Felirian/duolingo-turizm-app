import { Point } from '@/interfaces';
import { Btn1Style } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import {styled, keyframes} from 'styled-components';
import PointsSvgSelector from './PointsSvgSelector';
import { useRouter } from 'next/router';

type PointStatus = 'locked' | 'open' | 'completed';

interface PointItemProps {
  data: Point;
  currentPoint: number;
  progress: number;
  side: string; 
  isLast: boolean;
}

const PointItem = ({ data, currentPoint, progress, side, isLast }: PointItemProps) => {
  const router = useRouter();

  const handlePointClick = () => {
    router.push(router.asPath + '/' + data.number);
  };

  let status: PointStatus;
    if (data.number > currentPoint) {
      status = 'locked';
    } else if (data.number <= progress) {
      status = 'completed';
    } else {
      status = 'open';
    }

      return (
        <PointItemWr
          onClick={handlePointClick}
          disabled={status === 'locked'}
          $status={status}
        >
          <PointBtn1 
          data-aos="zoom-in"
          data-aos-duration="800"
          $status={status}>
            <span>
              {status === 'locked' ? '' : data.number}
            </span>
            {status === 'completed' && 
            <span 
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="800"
            className='hand'>
              <PointsSvgSelector name='hand' />
            </span>}
            <PointsSvgSelector name={'point-' + status} />
            {currentPoint === data.number && (
              <CurrentPointCloud
                data-aos="zoom-in"
                data-aos-delay="1200"
                data-aos-duration="400"
              >
                <span>Начать</span>
                <PointsSvgSelector name="cloud" />
              </CurrentPointCloud>
            )} 
          </PointBtn1>
          <RoadCon 
          $left={side === 'left'}
          $right={side === 'right'}
          $isLast={isLast}>
            <PointsSvgSelector name='road' />
          </RoadCon>
        </PointItemWr>
      );
};

const Road = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

const PointItemWr = styled.button<{$status: PointStatus}>`
  width: 14vw;
  height: 14vw;
  position: relative;
  >svg {
    width: 100%;
    height: 100%;
  }

&:active {
  transition: 0.2s;
    svg {
      ellipse {
        ${({ $status }) => {
          switch ($status) {
            case 'completed': 
              return `
                &:last-of-type {
                  fill: ${COLORS.shadowGreen} !important;
                }
                &:first-of-type {
                  fill: ${COLORS.shadowGreen} !important;
                }
              `;
            case 'open': 
            default: 
              return `
                &:last-of-type {
                  fill: ${COLORS.mediumOrange} !important;
                }
                &:first-of-type {
                  fill: ${COLORS.mediumOrange} !important;
                }
              `;
          }
        }}
      }
    }
  }

  &:disabled {
    pointer-events: none;
  }
`;

const PointBtn1 = styled.div<{ $status: PointStatus }>`
  ${Btn1Style}
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.4vw;

  .hand {
    height: 8.2vw;
    width: 8.2vw;
    position: absolute;
    right: -25%;
    bottom: -25%;
    > svg {
      height: 100%;
      width: 100%;
    }
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    color: ${COLORS.white};
    font-size: 11.14vw;
    font-weight: inherit;
    font-family: inherit;

    >svg {
      width: 6.2vw;
      height: 7.7vw;
    }
  }

  & > svg {
    position: absolute;
    width: 19.14vw;
    height: 19.14vw;
    z-index: 0;
  }
`;

const CurrentPointCloud = styled.div`
  position: absolute;

  top: -80%;
  left: -20%;

  width: 20.57vw;
  height: 9.77vw;

  display: flex;

  >svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  span {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    margin-top: 1.7vw;

    ${Btn1Style};
    font-size: 3.47vw;
    color: ${COLORS.textGray};
    z-index: 2;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
  }
`;

const RoadCon  = styled.div<{$left: boolean, $right: boolean, $isLast:boolean}>`
  ${({ $isLast }) => $isLast && `
  display: none;
  `}
    position: absolute;
    width: 11vw;
    height: 28vw;

    >svg {
      circle {
        opacity: 0;
          animation: ${Road} 0.4s ease forwards;
        }
        circle:nth-child(1) { animation-delay: 0.1s; }
        circle:nth-child(2) { animation-delay: 0.2s; }
        circle:nth-child(3) { animation-delay: 0.3s; }
        circle:nth-child(4) { animation-delay: 0.4s; }
    }

    ${({ $left }) => $left && `
      top: 10%;
      right: -110%;
      transform: rotate(-5deg);
    `}

    ${({ $right }) => $right && `
      top: 10%;
      right: 130%;
      transform: rotate(-111deg);
    `}

    >svg {
      width: 100%;
      height: 100%;
    }

`;

export default PointItem;
