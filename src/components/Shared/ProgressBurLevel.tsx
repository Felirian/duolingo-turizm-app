import styled from "styled-components";
import {Btn1, Btn2} from "@/styles/textTags";
import {COLORS} from "@/styles/variables";

export const ProgressBurLevel = ({percent, level}) => {
  return (
    <FrameParentRoot>
      <LevelWr>
        <Btn1>
          {level}
        </Btn1>

      </LevelWr>

      <PercentLine $percent={percent}/>
      <PercentBlock>{percent}/100xp</PercentBlock>
    </FrameParentRoot>
  );
};

const LevelWr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 100%;
  
  color: ${COLORS.white};
  border-radius: 2.31vw;
  background-color: #167351;
  border: 0.83vw solid #167351;
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
  width: 100%;
  height: 9.44vw;
  position: relative;
  border-radius: 3.31vw;
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
    
    border-radius: 0px 0px 1.67vw 1.67vw;
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
  
  border-radius: 3.31vw;
  background-color: #4EE1AB;
  z-index: 2;
  
  &:after {
    content: "";
    
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 3.31vw 3.31vw;
    background-color: #16D38E;
    width: 100%;
    height: 4.44vw;
    z-index: 1;
  }
`;

const PercentBlock = styled(Btn1)`
  color: #FFF;  
  font-family: Nunito;
  font-size: 5.56vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  
  z-index: 2;
`;

