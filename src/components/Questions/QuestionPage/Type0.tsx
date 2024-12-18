import React from 'react';
import {Btn3} from "@/styles/textTags";

const Type0 = ({data}) => {
  console.log(data);
  return (
    <div>
      Type0
      {data.cont_type0.map((answer, i)=> (
        <Btn3 key={i}>{answer}</Btn3>
      ))}
    </div>
  );
};

export default Type0;