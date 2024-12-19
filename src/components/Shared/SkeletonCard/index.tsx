import { styled } from 'styled-components';

const SkeletonCard = () => {
  return (
    <SectionsCardWr>
      <span></span>
      <span></span>
    </SectionsCardWr>
  );
};

const SectionsCardWr = styled.div`
  width: 100%;
  height: 42.857vw;
  border-radius: 3.429vw;
  position: relative;

  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 4.57vw;
  gap: 2.86vw;

  background-color: rgba(166, 218, 144, 0.7);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: loading 1.5s infinite;
  }

  span {
    background-color: rgba(132, 192, 132, 0.7);
    display: block;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: loading 0.8s infinite;
    }

    &:first-child {
      height: 8vw;
      width: 80%;
    }

    &:last-child {
      height: 5vw;
      width: 50%;
    }
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default SkeletonCard;
