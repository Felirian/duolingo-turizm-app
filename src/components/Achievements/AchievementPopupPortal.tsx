import ReactDOM from 'react-dom';
import AchievementPopup from './AchievementPopup';

interface Props {
  name: string;
  image: string;
  course: string;
  open: boolean;
  handleClose: () => void;
}

const AchievementPopupPortal = (props: Props) => {
  if (typeof window === 'undefined') return null;

  const popupRoot = document.getElementById('popup-root');
  if (!popupRoot) return null;

  return ReactDOM.createPortal(<AchievementPopup {...props} />, popupRoot);
};

export default AchievementPopupPortal;
