import styled from "styled-components";
import {Btn1} from "@/styles/textTags";

export const ProgressBurSection = ({percent}: any) => {
  return (
    <FrameParentRoot>
      <PercentLine $percent={percent}/>
      <PercentBlock>{Math.round(percent)}%</PercentBlock>
    </FrameParentRoot>
  );
};

const FrameParentRoot = styled.div`
  width: 100%;
  height: 9.44vw;
  position: relative;
  border-radius: 1.67vw;
  background-color: #fe6d2c;
  border: 0.83vw solid #fe6d2c;
  
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
    background-color: #ff7b40;
    height: 4.44vw;    
    
    z-index: 1;
  }
`;

const PercentLine = styled.div<{ $percent: any }>`
  width: ${({$percent}) => $percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  
  border-radius: 1.67vw;
  background-color: #ff8f04;
  z-index: 2;
  
  &:after {
    content: "";
    
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 1.67vw;
    background-color: #ff8500;
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


