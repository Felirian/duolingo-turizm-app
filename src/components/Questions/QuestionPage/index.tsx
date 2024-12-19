import React, {useState} from 'react';
import Type0 from "@/components/Questions/QuestionPage/Type0";
import Type1 from "@/components/Questions/QuestionPage/Type1";
import Type2 from "@/components/Questions/QuestionPage/Type2";
import {B2, H3} from "@/styles/textTags";
import {CustomBtn} from "@/components/Shared/CustomBtn";

const Index = ({data}) => {
  const [isHintOpen, setIsHintOpen] = useState(false)

  const handleClickHintOpen = () => {
    setIsHintOpen(true)
  }

  return (
    <>
      <H3>{data.text}</H3>
      <B2>{data.hint}</B2>

      {data.answer.type === 0 ? (
        <Type0 data={data.answer}/>
      ) : data.answer.type === 1 ? (
        <Type1 data={data.answer}/>
      ) : data.answer.type === 2 && (
        <Type2 data={data.answer}/>
      )}
      <CustomBtn onClick={handleClickHintOpen}>Продолжить</CustomBtn>
    </>
  );
};

export default Index;