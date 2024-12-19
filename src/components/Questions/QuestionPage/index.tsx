import React, { useState } from 'react';
import Type0 from '@/components/Questions/QuestionPage/Type0';
import Type1 from '@/components/Questions/QuestionPage/Type1';
import Type2 from '@/components/Questions/QuestionPage/Type2';
import { B2, H3 } from '@/styles/textTags';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import styled from 'styled-components';

const Index = ({ data }) => {
  const [isHintOpen, setIsHintOpen] = useState(false);

  const handleClickHintOpen = () => {
    setIsHintOpen(true);
  };

  return (
    <QuestionPageWr>
      <QuestionPageCon>
        {data.answer.type === 0 ? (
          data.answer.true_type0.length === 1 ? (
            <H3>Один вариант ответа</H3>
          ) : (
            <H3>Несколько вариантов ответа</H3>
          )
        ) : data.answer.type === 1 ? (
          <H3>Правда или ложь?</H3>
        ) : data.answer.type === 2 ? (
          <H3>Расположите в правильном порядке</H3>
        ) : null}

        <B2>{data.text}</B2>
      </QuestionPageCon>
      <QuestionPageCon>
        {data.answer.type === 0 ? (
          <Type0 data={data.answer} />
        ) : data.answer.type === 1 ? (
          <Type1 data={data.answer} />
        ) : data.answer.type === 2 ? (
          <Type2 data={data.answer} />
        ) : null}

        {data.answer.type !== 1 && <CustomBtn onClick={handleClickHintOpen}>Продолжить</CustomBtn>}
      </QuestionPageCon>
    </QuestionPageWr>
  );
};

export default Index;

const QuestionPageWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const QuestionPageCon = styled.div`
  display: flex;
  flex-direction: column;
`;
