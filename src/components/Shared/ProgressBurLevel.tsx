import styled from 'styled-components';
import { Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';

export const ProgressBurLevel = ({ percent, level }: any) => {
  return (
    <FrameParentRoot>
      <LevelWr>
        <StyledBtn1>{level}</StyledBtn1>
      </LevelWr>

      <PercentLine $percent={percent} />
      <PercentBlock>{percent}/100xp</PercentBlock>
    </FrameParentRoot>
  );
};

const LevelWr = styled.div`
  position: absolute;
  /* top: -0.83vw; */
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: inherit;
  transform: translateX(-50%);
  font-size: 2vw;
  color: ${COLORS.white};
  border-radius: 1.5vw;
  background-color: #0f8359;
  border: 1vw solid #0f8359;

  &:after {
    content: '';

    width: 100%;
    position: absolute;

    top: 0;
    left: 0;

    border-radius: 1.67vw;
    background-color: #03b071;
    height: 2.82vw;

    z-index: -1;
  }
`;

const FrameParentRoot = styled.div`
  width: 50%;
  height: 8.5vw;
  flex-shrink: 0;
  z-index: 2;
  transform: translateX(2vw);
  position: relative;
  border-radius: 1.714vw;
  background-color: #0f8359;
  border: 0.83vw solid #0f8359;

  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';

    width: 100%;
    position: absolute;

    top: 0;
    left: 0;

    border-radius: 1.714vw 1.714vw 0 0;
    background-color: #167351;
    height: 50%;

    z-index: 1;
  }
`;

const PercentLine = styled.div<{ $percent: any }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  border-radius: 1.714vw;
  background-color: #16d38e;
  z-index: 2;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1.714vw 1.714vw 0 0;
    background-color: #4ee1ab;
    width: 100%;
    height: 50%;
    z-index: 1;
  }
`;

const PercentBlock = styled(Btn1)`
  color: #fff;
  font-family: Nunito;
  font-size: 4vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  z-index: 2;
`;

const StyledBtn1 = styled(Btn1)`
  color: #fff;
  font-family: Nunito;
  font-size: 4vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  z-index: 2;
`;
