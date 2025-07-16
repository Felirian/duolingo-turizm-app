import styled from "styled-components";
import { H3 } from "@/styles/textTags";
import { BREAKPOINTS, COLORS } from "@/styles/variables";
import mainImg from '@/assets/img/warning/mainImg.png';
import Logo from '@/assets/img/warning/Logo.png';
import notMobile from '@/assets/img/warning/notMobile.png';
import notTg from '@/assets/img/warning/notTg.png';
import flipPhone from '@/assets/img/warning/flipPhone.png';


interface WarningProps {
    isMobile: boolean;
    isLandscape: boolean;
    isTelegram: boolean;
}

export const Warning = ({isMobile, isLandscape, isTelegram}: WarningProps) => {
    return (
        <WarningWr>
            {!isMobile && <NotMobileCon>
                <img src={mainImg.src} />

                <div>
                    <img src={Logo.src} />
                    <h3> {!isMobile && (!isTelegram ? 'Откройте приложение через Telegram' : 'Откройте приложение на телефоне')} 
                        </h3>
                    <img src={!isMobile && (!isTelegram ? notTg.src : notMobile.src)} />
                </div>
            </NotMobileCon>
}
            {isMobile && isLandscape && <LandscapeCon>
             <h3>Поверните устройство в&nbsp;вертикальное&nbsp;положение</h3>
             <img src={flipPhone.src} />
            </LandscapeCon>}
        </WarningWr>
    )

};

const WarningWr = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(353.92deg, #ffd9b2 5.82%, #daf8b2 50.17%, #92eecb 91.94%);
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        text-align: center;
        font-family: Nunito;
        font-size: 2.55vw;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        color: ${COLORS.textGreen};
    }

    @media ${BREAKPOINTS.mobile} {
        h3 {
        font-size: 7.31vw;
    }
    }


`;

const NotMobileCon = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 13.13vw;
    padding: 5.21vw 13.44vw;

        > img {
            width: 30.16vw;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4.01vw;
            width: 29.58vw;
            img:nth-of-type(1) {
                width: 25.31vw;
            }

            img:nth-of-type(2) {
                width: 7.97vw;
            }
        }

        @media ${BREAKPOINTS.mobile} {
            padding: 14.62vw 7.6vw;
            gap: 25vw;
            height: 100vh;

            > img {
                display: none;
            }

            > div {
                width: 100%;
                height: 100%;
                justify-content: space-evenly;

                img:nth-of-type(1) {
                width: 72.53vw;
            }

            img:nth-of-type(2) {
                width: 22.8vw;
            }

            }
        }
`

const LandscapeCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 125vh;
    padding: 11.7vh;
    gap: 14.2vh;

    h3 {
        font-size: 7.4vh;
    }



    img {
        width: 44.5vh;
    }
`;
