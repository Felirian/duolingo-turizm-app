import React from 'react';
import {Btn1, B2, H2, Btn2} from '@/styles/textTags';
import styled from 'styled-components';
import {useRouter} from "next/router";
import {ProgressBur} from "@/components/Shared/ProgressBur";
// eslint-disable-next-line
const SectionsCard = ({ data, index }: any) => {
  const router = useRouter();
  const handlePointClick = () => {
    router.push(router.asPath +'/'+ data.slug);
  };

  return (
    <SectionsCardWr
      data-aos="fade-up"
      data-aos-delay={`${(index +1) * 200}`}
      data-aos-duration="700"
      onClick={handlePointClick}
      style={{
        backgroundImage: `url(${data.bgimage})`,
      }}
    >
      {data.progress && <ProgressBur percent={Math.round((data.progress/data.total_points)*100)}/>}


      <CardText>
        {data.name.length < 20 ? (
          <H2>{data.name}</H2>
        ) : (
          <Btn2>{data.name}</Btn2>
        )}
        {data.descr != '' && <B2>{data.descr}</B2>}
      </CardText>

    </SectionsCardWr>
  );
};

const SectionsCardWr = styled.div`
  width: 100%;
  height: 42.857vw;
  border-radius: 3.429vw;
  padding: 4.571vw;
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  
  //box-sizing: border-box;
  overflow: hidden;
  background-size: cover;
`;

const CardText = styled.div`  
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.08vw;
   p {
     max-width: 70%;
   }
`;

export default SectionsCard;