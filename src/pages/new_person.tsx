import { Page } from '@/components/Shared/Page';
import SvgSelector from '@/components/Shared/SvgSelector';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import charImg from '@/assets/img/frog.png';
import { B1, H3 } from '@/styles/textTags';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import { CustomInput } from '@/components/Shared/CustomInput';
import useTgApp from '@/features/_tg_methods_';
import { CreateUser, useGetUser } from '@/features/_queries_/_rest_api_';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NewPerson = () => {
  const [petName, setPetName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const { userId } = useTgApp();
  const router = useRouter();

  const { data } = useGetUser();
  useEffect(() => {
    if (data) {
      console.log('Already exists');
      router.push('/');
    }
  }, [data, router]);

  // Обработчик изменения значения инпута
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPetName(value);
    setIsDisabled(value.trim() === '');
  };

  // Обработчик отправки данных на сервер
  const handleSubmit = async () => {
    try {
      const response = await CreateUser(petName, userId);
      if (response?.ok) {
        setIsUserCreated(true);
        console.log(response);
      }
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
    }
  };

  return (
    <>
      <Page back={false} navBar={false}>
        <NewPersonWr>
          {userId}
          <TopContainer>
            {!isUserCreated ? (
              <SvgSelector svg={'textLogo'} />
            ) : (
              <StyledH3>{petName} теперь с вами!</StyledH3>
            )}
          </TopContainer>

          <Image src={charImg} alt='' />
          {!isUserCreated && (
            <StyledB1>Образовательное путешествие по земному шару вместе с новым другом!</StyledB1>
          )}

          {!isUserCreated && (
            <CustomInput
              placeholder='Назовите питомца'
              value={petName}
              onChange={handleInputChange}
              capitalizeFirstLetter={true}
            />
          )}

          {!isUserCreated ? (
            <CustomBtn onClick={handleSubmit} disabled={isDisabled && !isUserCreated}>
              Продолжить
            </CustomBtn>
          ) : (
            <>
              <StyledH3>Осталось выбрать курс</StyledH3>
              <Link href={'/courses'}>
                <CustomBtn onClick={handleSubmit}>Доступные курсы</CustomBtn>
              </Link>
            </>
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
  img {
    width: auto;
    height: 100%;
    max-height: 40vh;
    object-fit: contain;
    flex-shrink: 0;
  }
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

const StyledB1 = styled(B1)`
  text-align: center;
  color: ${COLORS.textGreen};
`;

const StyledH3 = styled(H3)`
  text-align: center;
  color: ${COLORS.textGreen};
`;

export default NewPerson;
