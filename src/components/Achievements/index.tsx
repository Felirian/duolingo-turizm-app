import React from 'react';
import { H1 } from '@/styles/textTags';
import styled from 'styled-components';
import Suitcase from '@/components/Achievements/Suitcase';
import bg from '../../assets/img/background.png' ;
import { COLORS } from '@/styles/variables';
import { IAchievement, IAchievements } from '@/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useTgApp from '@/features/_tg_methods_';
import { SafeAreaInsets } from '@telegram-apps/bridge';


const Achievements = ({data}: IAchievements) => {
  const { safeAreas } = useTgApp(); 
  const chunked = data.reduce<IAchievement[][]>(
  (acc, _, i) => i % 12 ? acc : [...acc, data.slice(i, i + 12)],
  []
);

    return (
        <AchievementsWr $safeAreas={safeAreas}>
            <H1
              data-aos="fade-up"
              data-aos-duration="500"
            >Мои наклейки</H1>
            <CustomPaginationWrapper>
                <Swiper
                    modules={[ Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    style={{ width: '100%'}}
                    loop={true}
                    >
                    {chunked.map((chunk) => (
                        <SwiperSlide 
                        style={{width: '100%', margin:'0'}}>
                            <Suitcase data={chunk} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CustomPaginationWrapper>
        </AchievementsWr>
    )
}

const AchievementsWr = styled.div<{$safeAreas: SafeAreaInsets | null}>`
    height: 100%;
    width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10vw;

    &::after {
        pointer-events: none;
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        background-image: url(${bg.src});
        background-size: contain;
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