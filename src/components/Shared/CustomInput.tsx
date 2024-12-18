import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { Btn1Style } from '@/styles/textTags';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomInput = ({ ...props }: CustomInputProps) => {
  return <CustomInputnWr {...props} />;
};

const CustomInputnWr = styled.input.attrs<React.InputHTMLAttributes<HTMLInputElement>>((props) => ({
  ...props,
}))`
  width: 100%;
  height: 16vw;
  padding: 1.5vw 2vw;
  border: 0.571vw solid #02c77f;
  border-radius: 3.143vw;
  background-color: #fff;
  color: #000;
  outline: none;
  text-align: center;

  &::placeholder {
    color: #888;
  }

  ${Btn1Style} 
`;