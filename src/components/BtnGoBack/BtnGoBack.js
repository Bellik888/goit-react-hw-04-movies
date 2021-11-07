import s from './BtnGoBack.module.css';

export const BtnGoBack = ({ handleBackClick }) => {
  return (
    <button type="button" onClick={handleBackClick} className={s.btn}>
      &#8592; GoBack
    </button>
  );
};
