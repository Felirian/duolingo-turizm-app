import styled from "styled-components";
import {Btn1} from "@/styles/textTags";
import {COLORS} from "@/styles/variables";

export const ProgressBurLevel = ({percent, level}) => {
  return (
    <FrameParentRoot>
      <LevelWr>
        <StyledBtn1>
          {level}
        </StyledBtn1>

      </LevelWr>

      <PercentLine $percent={percent}/>
      <PercentBlock>{percent}/100xp</PercentBlock>
    </FrameParentRoot>
  );
};

const LevelWr = styled.div`
  position: absolute;
  top: 0;
  left: -0.20vw;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 100%;
  font-size: 2vw;
  
  color: ${COLORS.white};
  border-radius: 1.5vw;
  background-color: #167351;
  border: 1vw solid #167351;
  &:after {
    content: "";

    width: 100%;
    position: absolute;

    top: 0;
    left: 0;
 
    border-radius:1.67vw;
    background-color: #03B071;
    height: 2.82vw;

    z-index: -1;
  }
  
`

const FrameParentRoot = styled.div`
  width: 50%;
  height: 8.5vw;
  position: relative;
  border-radius: 1.714vw;
  background-color: #167351;
  border: 0.83vw solid #167351;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: "";

    width: 100%;
    position: absolute;

    bottom: 0;
    left: 0;
    
    border-radius: 1.714vw;
    background-color: #0F8359;
    height: 4.44vw;    
    
    z-index: 1;
  }
`;

const PercentLine = styled.div<{ $percent }>`
  width: ${({$percent}) => $percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  
  border-radius: 1.714vw;
  background-color: #4EE1AB;
  z-index: 2;
  
  &:after {
    content: "";
    
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.714vw;
    background-color: #16D38E;
    width: 100%;
    height: 4.44vw;
    z-index: 1;
  }
`;

const PercentBlock = styled(Btn1)`
  color: #FFF;  
  font-family: Nunito;
  font-size: 3vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  
  z-index: 2;
`;

const StyledBtn1 = styled(Btn1)`
  color: #FFF;  
  font-family: Nunito;
  font-size: 4vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  
  z-index: 2;
`;
