import React from 'react';
import css from './LogoutBtn.module.css';

const LogoutBtn = ({ closeBurgerMenu, setIsOpenModal }) => {
  const handleClick = () => {
    // closeBurgerMenu();
    setIsOpenModal(true);
  };

  return (
    <div className={css.logoutBtnWrap}>
      <button type="button" className={css.logoutBtn} onClick={handleClick}>
        Log out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="#FEF9F9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M3 12h12M3 12l4-4m-4 4 4 4"
          />
        </svg>
      </button>
    </div>
  );
};

export default LogoutBtn;
