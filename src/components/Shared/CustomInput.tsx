import React, { useRef } from 'react';
import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { Btn1Style } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  capitalizeFirstLetter?: boolean;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
}

export const CustomInput = ({ capitalizeFirstLetter = false, enterKeyHint, value, onKeyDown, onChange, ...props }: CustomInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (capitalizeFirstLetter) {
      const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      e.target.value = capitalizedValue;
    }
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
      onKeyDown?.(e);
    }
  };

  const inputMoveFocus = () => {
    if (inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const offset = window.innerHeight - inputRect.bottom - 50; // 50 — отступ снизу
      if (offset < 0) {
        window.scrollTo({
          top: window.scrollY - offset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <CustomInputnWr
      ref={inputRef}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onFocus={inputMoveFocus}
      enterKeyHint={enterKeyHint}
      {...props}
    />
  );
};

const CustomInputnWr = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>((props) => ({
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
  &:placeholder-shown {
    border-color: ${COLORS.gray};
  }
`;