import React from 'react';
import {ProgressBurSection} from "@/components/Shared/ProgressBurSection";
import {Btn1} from "@/styles/textTags";
import {ProgressBurLevel} from "@/components/Shared/ProgressBurLevel";
import frog1 from '@/assets/img/frogLevel/1.png';
import frog2 from '@/assets/img/frogLevel/2.png';
import frog3 from '@/assets/img/frogLevel/3.png';


const Index = ({data}) => {

  console.log(Math.round(data.xp / 100), data.xp % 100);

  return (
    <div>
      <Btn1>{data.character}</Btn1>
      <ProgressBurLevel percent={data.xp % 100} level={Math.round(data.xp / 100)}/>
      <ProgressBurSection percent={data.total_progress}/>
    </div>
  );
};

export default Index;