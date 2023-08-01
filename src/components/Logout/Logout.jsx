import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import sprite from 'assets/svg/sprite-cards.svg';

const Logout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSuccess = () => {
    dispatch(logoutThunk());
    setIsOpenModal(false);
    // closeBurgerMenu(true);
    // navigate('/notices');
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <LogoutBtn setIsOpenModal={setIsOpenModal} />

      {isOpenModal && (
        <ModalApproveAction
          handleSuccess={handleSuccess}
          handleCancel={handleCancel}
          successButtonText={
            <>
              <p>Yes</p>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-logout-white`} />
              </svg>
            </>
          }
        >
          <div>
            <p>Already leaving?</p>
          </div>
        </ModalApproveAction>
      )}
    </>
  );
};

export default Logout;
