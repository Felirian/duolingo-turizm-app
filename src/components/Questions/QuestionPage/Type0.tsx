import React from 'react';
import {Btn3, H3} from "@/styles/textTags";

const Type0 = ({data}) => {
  console.log(data);
  return (
    <div>
      Type0
      <H3>{data.true_type0.length === 1 ? 'Один вариант ответа' : 'Несколько вариантов ответа'}</H3>
      {data.cont_type0.map((answer, i)=> (
        <Btn3 key={i}>{answer}</Btn3>
      ))}
    </div>
  );
};

export default Type0;