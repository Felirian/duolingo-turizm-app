import styled from "styled-components";
import {Btn1, Btn3} from "@/styles/textTags";
import {COLORS} from "@/styles/variables";

export const ProgressBur = ({percent}: any) => {
  return (
    <FrameParentRoot>
      <PercentLine $percent={percent}/>
      <PercentBlock>{percent}%</PercentBlock>
    </FrameParentRoot>
  );
};

const FrameParentRoot = styled.div`  
  position: absolute;
  left: 4%;
  top: 8%;
  z-index: 2;
  width: 92%;
  //margin: 4.1vw;
  background-color: #fff;
  
  border-radius: 3.08vw;
  
  display: flex;
  align-items: center;
  justify-content: center;
    
`;

const PercentLine = styled.div<{ $percent: any }>`
  width: ${({$percent}) => $percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  
  border-radius: 1.714vw;
  background-color: #4EE1AB;
  z-index: 2;
`;

const PercentBlock = styled(Btn3)`
  color: black;  
  font-family: Nunito;
  font-size: 3vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  
  z-index: 2;
`;

