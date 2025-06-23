import React from 'react';
import {ProgressBurSection} from "@/components/Shared/ProgressBurSection";
import {Btn1, H3} from "@/styles/textTags";
import {ProgressBurLevel} from "@/components/Shared/ProgressBurLevel";
import frog1 from '@/assets/img/frogLevel/1.png';
import frog2 from '@/assets/img/frogLevel/2.png';
import frog3 from '@/assets/img/frogLevel/3.png';
import styled from "styled-components";

// eslint-disable-next-line
const Index = ({data}: any) => {
  const FrogLevel = Math.round(data.xp / 100) < 5 ? frog1 : Math.round(data.xp / 100) > 10 ? frog3 : frog2
  console.log(Math.round(data.xp / 100), data.xp % 100);

  return (
    <MainWr>
      <Btn1>{data.character}</Btn1>
      <ProgressBurLevel percent={data.xp % 100} level={Math.round(data.xp / 100)}/>

      <img src={FrogLevel.src}/>
      <H3>Прогресс</H3>
      <ProgressBurSection percent={data.total_progress * 2.8571428571}/>
    </MainWr>
  );
};

const MainWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.56vw;
  width: 100%;
  height: 100%;
  color: #0F8359;
`

export default Index;