import styled from 'styled-components';
import { Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
// eslint-disable-next-line
interface CustomBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
// eslint-disable-next-line
export const CustomBtn = ({ children, ...props }: CustomBtnProps) => {
  return (
    <>
      <CustomBtnWr {...props}>
        <TextCon>{children}</TextCon>
      </CustomBtnWr>
    </>
  );
};

const CustomBtnWr = styled.button.attrs<React.ButtonHTMLAttributes<HTMLButtonElement>>((props) => ({
  ...props,
}))`
  width: 100%;
  position: relative;
  box-shadow: 0 1.11vw 0 #009860;
  border-radius: 5.56vw;
  background-color: #02c77f;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.06vw 20.83vw;

  transition: 0.2s ease;

  &:after {
    content: '';

    width: 90%;
    height: 6.11vw;

    position: absolute;
    top: 1.67vw;
    border-radius: 5.56vw;
    background-color: #16d38e;

    z-index: 0;
    transition: 0.2s ease;
    opacity: 1;
    &:disabled{
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1.11vw);
    background-color: #03b071;
    box-shadow: 0px -1.11vw 0px 0px #009860;
    &:after {
      //height: 0;
      opacity: 0;
    }
  }

  &:disabled {
    opacity: 0.5; 
    cursor: not-allowed; 
    background-color: ${COLORS.gray}; 
    color:${COLORS.lightGray};
    box-shadow: 0px -1.11vw 0px 0px ${COLORS.gray};
    &:after {
      background-color: ${COLORS.gray}; 
    }
  }
`;

const TextCon = styled(Btn1)`
  position: relative;
  text-align: center;
  z-index: 1;
  color: #fff;
`;
