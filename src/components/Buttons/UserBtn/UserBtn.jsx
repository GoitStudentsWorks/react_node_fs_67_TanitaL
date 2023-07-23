import React from 'react';
import css from './UserBtn.module.css';

const UserBtn = ({ closeBurgerMenu }) => {
  return (
    <button type="button" className={css.userBtn} onClick={closeBurgerMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        focusable="true"
      >
        <g stroke="#FFC107" stroke-width="1.5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M22 24v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2m12-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
          <rect width="26.5" height="26.5" x=".75" y=".75" rx="13.25" />
        </g>
      </svg>
    </button>
  );
};

export default UserBtn;
