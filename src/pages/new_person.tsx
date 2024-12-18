// @/components/NewPerson.tsx

import { Page } from '@/components/Shared/Page';
import SvgSelector from '@/components/Shared/SvgSelector';
import Image from 'next/image';
import React, { useState } from 'react';
import charImg from '@/assets/img/frog.png';
import { B1 } from '@/styles/textTags';
import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import { CustomInput } from '@/components/Shared/CustomInput';
import useTgApp from '@/features/_tg_methods_';
import { useCreateUser } from '@/features/_queries_/_rest_api_'; 
import { useRouter } from 'next/router'; 

const NewPerson = () => {
  const [petName, setPetName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const {userId} = useTgApp();
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
      if (!response.ok) {

      }
      console.log(response);
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
    }
  };
  return (
    <>
      <Page back={false}>
        <NewPersonWr>
          <SvgSelector svg={'textLogo'} />
          <Image src={charImg} alt='' />
          <StyledB1>
            Вперед! В познавательное путешествие! А это ваш новый друг, он будет учиться вместе с
            вами.
          </StyledB1>
          {!isUserCreated && (
            <CustomInput
              placeholder='Назовите питомца'
              value={petName}
              onChange={handleInputChange}
            />
          )}
          <CustomBtn
            onClick={handleSubmit}
            disabled={isDisabled && !isUserCreated}
          >
            {isUserCreated ? 'К доступным курсам' : 'Продолжить'}
          </CustomBtn>
        </NewPersonWr>
      </Page>
    </>
  );
};

const NewPersonWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.429vw;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledB1 = styled(B1)`
  text-align: center;
  color: ${COLORS.textGreen};
`;

export default NewPerson;