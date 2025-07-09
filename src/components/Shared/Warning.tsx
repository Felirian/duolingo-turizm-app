import styled from "styled-components";
import { H3 } from "@/styles/textTags";
import { COLORS } from "@/styles/variables";

interface WarningProps {
    isMobile: boolean;
    isLandscape: boolean;
    isTelegram: boolean;
}

export const Warning = ({isMobile, isLandscape, isTelegram}: WarningProps) => {
    return (
        <WarningWr>
            {!isMobile && <H3>Откройте приложение с мобильного телефона</H3>}
            {isMobile && isLandscape && <H3>Переверните устройство в вертикальное положение</H3>}
            {isMobile && !isTelegram && <H3>Зайдите в приложение через Телеграм</H3>}
        </WarningWr>
    )

};

const WarningWr = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${COLORS.textGreen};
    background-color: ${COLORS.lightGreen};
`;