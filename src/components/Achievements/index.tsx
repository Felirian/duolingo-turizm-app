import React from 'react';
import { H1 } from '@/styles/textTags';
import styled from 'styled-components';
import Suitcase from '@/components/Achievements/Suitcase';
import bg from '../../assets/img/background.png' ;
import { COLORS } from '@/styles/variables';
import { IAchievements } from '@/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const Achievements = ({data}: IAchievements) => {

      const slides = [
    { id: 1, text: "Слайд 1" },
    { id: 2, text: "Слайд 2" },
    { id: 3, text: "Слайд 3" },
    { id: 4, text: "Слайд 4" },
  ];


    return (
        <AchievementsWr>
            <H1>Мои наклейки</H1>
            <CustomPaginationWrapper>
                <Swiper
                    modules={[ Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    style={{ width: '100%'}}
                    loop={true}
                    >
                    {slides.map((slide) => (
                        <SwiperSlide style={{width: '100%', margin:"0"}}>
                            <Suitcase data={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CustomPaginationWrapper>
        </AchievementsWr>
    )
}

const AchievementsWr = styled.div`
    height: 100%;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 11.42vw;

    &::after {
        pointer-events: none;
		content: '';
		display: block;
		position: absolute;
        z-index: 0;
        height: 50vw;
        width: 100vw;
        top: -8%;
        left: 0;
		background-image: url(${bg.src});
		background-size: cover;
		background-repeat: no-repeat;
    }

    h1 {
        position: static;
        z-index: 2; 
        color: ${COLORS.white};
        font-size: 7.42vw;
    }
`;

const CustomPaginationWrapper = styled.div`
  width: 100%;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    bottom: 25vw;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    width: 2vw;
    height: 2vw;
    background-color: ${COLORS.seaGreen};
    margin: 0 1vw;
    transition: all 0.3s ease;
    border-radius: 8.2vw;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 4.5vw;
  }
`;



export default Achievements;