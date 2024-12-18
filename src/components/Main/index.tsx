import React from 'react';
import {ProgressBurSection} from "@/components/Shared/ProgressBurSection";
import {Btn1} from "@/styles/textTags";
import {ProgressBurLevel} from "@/components/Shared/ProgressBurLevel";

const Index = ({data}) => {

  console.log(data);

  return (
    <div>
      <Btn1>{data.character}</Btn1>
      <ProgressBurLevel percent={data.xp} />
      <ProgressBurSection percent={data.total_progress}/>
    </div>
  );
};

export default Index;