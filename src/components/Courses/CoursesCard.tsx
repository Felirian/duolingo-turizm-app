import React from 'react';
import { H1, B2 } from '@/styles/textTags';
import styled from 'styled-components';
import Link from 'next/link';
import SvgSelector from '../Shared/SvgSelector';

const CoursesCard = ({ data }) => {
  return (
    <CoursesCardWr href={`/courses/${data.slug}`}>
      <CardText>
        <H1>{data.name}</H1>
        <B2>{data.descr}</B2>
      </CardText>
      <SvgSelectorWr>
        <SvgSelector svg={'courseCardBg'} />
      </SvgSelectorWr>
    </CoursesCardWr>
  );
};

const CoursesCardWr = styled(Link)`
  width: 91.429vw;
  height: 42.857vw;
  border-radius: 3.429vw;
  position: relative;
  display: block;
  box-sizing: border-box;
`;

const SvgSelectorWr = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
    border-radius: 3.429vw;
  }
`;

const CardText = styled.div`
  position: absolute;
  top: 4.571vw;
  left: 4.571vw;
  color: white;
  z-index: 2;
`;

export default CoursesCard;
