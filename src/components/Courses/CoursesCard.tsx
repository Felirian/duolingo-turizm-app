import React from 'react';
import { H1, B2 } from '@/styles/textTags';
import styled from 'styled-components';
import Link from 'next/link';
import SvgSelector from '../Shared/SvgSelector';
// eslint-disable-next-line
const CoursesCard = ({ data }: any) => {

  console.log(data);

  return (
    <CoursesCardWr
      href={`/courses/${data.slug}`}
      style={{
        backgroundImage: `url(${data.bgimage})`,
      }}
    >
      <CardText>
        <H1>{data.name}</H1>
        {data.descr != '' && <B2>{data.descr}</B2>}
      </CardText>
      {/*<SvgSelectorWr>*/}
      {/*  <SvgSelector svg={'courseCardBg'} />*/}
      {/*</SvgSelectorWr>*/}
    </CoursesCardWr>
  );
};

const CoursesCardWr = styled(Link)`
  width: 100%;
  height: 42.857vw;
  border-radius: 3.429vw;
  position: relative;
  display: block;
  box-sizing: border-box;

  background-size: cover;
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
