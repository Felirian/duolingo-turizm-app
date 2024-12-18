import React from 'react';
import { H1, B2 } from '@/styles/textTags';
import styled from 'styled-components';
import {useRouter} from "next/router";
// eslint-disable-next-line
const SectionsCard = ({ data }: any) => {
  const router = useRouter();
  const handlePointClick = () => {
    router.push(router.asPath +'/'+ data.slug);
  };
  return (
    <SectionsCardWr onClick={handlePointClick}>
      <CardText>
        <H1>{data.name}</H1>
        <B2>{data.descr}</B2>
      </CardText>
      <ImageWr>
        <img
          src={data.bgimage}
          alt={data.name}
        />
      </ImageWr>
    </SectionsCardWr>
  );
};

const SectionsCardWr = styled.div`
  width: 100%;
  height: 42.857vw;
  border-radius: 3.429vw;
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
`;

const ImageWr = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardText = styled.div`
  position: absolute;
  bottom: 4.571vw;
  left: 4.571vw;
  color: white;
  z-index: 2;
`;

export default SectionsCard;