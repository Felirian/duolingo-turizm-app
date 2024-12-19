import React from 'react';
import { Btn3, H3 } from '@/styles/textTags';
import styled from 'styled-components';
import { SelectorButton } from '@/components/Shared/SelectorBtn';

const Type0 = ({ data }) => {

  return (
    <SelectorWr>
      {/*{data.cont_type0.map((answer, i) => (*/}
      {/*  <SelectorCon key={i}>*/}
      {/*    <SelectorNum>{i + 1}</SelectorNum>*/}
      {/*    <SelectorButton>{answer}</SelectorButton>*/}
      {/*  </SelectorCon>*/}
      {/*))}*/}
    </SelectorWr>
  );
};

export default Type0;

const SelectorWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const SelectorCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const SelectorNum = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  background-color: green; 
  color: white; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px; 
`;