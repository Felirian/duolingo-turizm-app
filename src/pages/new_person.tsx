// @/components/NewPerson.tsx

import { Page } from '@/components/Shared/Page';
import SvgSelector from '@/components/Shared/SvgSelector';
import Image from 'next/image';
import React, { useState } from 'react';
import charImg from '@/assets/img/frog.png';
import { B1, H3 } from '@/styles/textTags';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import { CustomInput } from '@/components/Shared/CustomInput';
import useTgApp from '@/features/_tg_methods_';
import { useCreateUser } from '@/features/_queries_/_rest_api_';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NewPerson = () => {
  const [petName, setPetName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const { userId } = useTgApp();
  const router = useRouter();

  // Обработчик изменения значения инпута
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPetName(value);
    setIsDisabled(value.trim() === '');
  };

  // Обработчик отправки данных на сервер
  const handleSubmit = async () => {
    try {
      const response = await useCreateUser(petName, userId);
      if (response.ok) {
        setIsUserCreated(true);
        console.log(response);
      }
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
    }
  };

  return (
    <>
      <Page back={false}>
        <NewPersonWr>
          <TopContainer>
            <SvgSelector svg={'textLogo'} />
            <StyledH3>Кругосветное приключение</StyledH3>
          </TopContainer>
          <MiddleContainer>
            <Image src={charImg} alt='' />
            <StyledB1>
              Вперед! В познавательное путешествие! А это ваш новый друг, он будет учиться вместе с
              вами.
            </StyledB1>
          </MiddleContainer>
          {!isUserCreated && (
            <CustomInput
              placeholder='Назовите питомца'
              value={petName}
              onChange={handleInputChange}
            />
          )}

          {!isUserCreated ? (
            <CustomBtn onClick={handleSubmit} disabled={isDisabled && !isUserCreated}>
              Продолжить
            </CustomBtn>
          ) : (
            <Link href={'/courses'}>
              <CustomBtn onClick={handleSubmit}>К доступным курсам</CustomBtn>
            </Link>
          )}
        </NewPersonWr>
      </Page>
    </>
  );
};

const NewPersonWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5vw;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;

  svg {
    width: 100%;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;

  img {
    width: auto;
    height: 100%;
    max-height: 40vh;
    object-fit: contain;
    flex-shrink: 0;
  }
`;

const StyledB1 = styled(B1)`
  text-align: center;
  color: ${COLORS.textGreen};
`;

const StyledH3 = styled(H3)`
  text-align: center;
  color: ${COLORS.textGreen};
`;

export default NewPerson;