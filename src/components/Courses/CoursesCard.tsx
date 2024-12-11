import React from 'react';
import {H1} from "@/styles/textTags";
import styled from "styled-components";
import Link from "next/link";

const CoursesCard = ({data}) => {
  return (
    <CoursesCardWr href={`/courses/${data.slug}`}>
      <H1>{data.name}</H1>
    </CoursesCardWr>
  );
};

const CoursesCardWr = styled(Link)`
  width: 100%;
  border: 1px solid red;
`

export default CoursesCard;