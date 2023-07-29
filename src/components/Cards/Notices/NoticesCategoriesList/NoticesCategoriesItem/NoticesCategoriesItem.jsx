import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';

import PetModal from 'components/PetModal/PetModal';

import 'react-toastify/dist/ReactToastify.css';
import css from './NoticesCategoriesItem.module.css';

import sprite from 'assets/svg/sprite-cards.svg';
import { instance } from 'service/api/api';

const addDelPet = async id => {
  try {
    const response = await instance.post(`/notices/${id}/favorite`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const CategoryItem = ({ id, title, file, location, age, sex, category }) => {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [sexIcon, setSexIcon] = useState('icon-male');

  const isUserRegistered = useSelector(authSelector);

  useEffect(() => {
    if (sex === 'female') {
      setSexIcon('icon-female');
    } else {
      setSexIcon('icon-male');
    }
  }, [sex]);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    instance
      .post(`/notices/${id}/favorite`)
      .then(response => {
        setIsFavorite(response.data.isFavorite);
      })
      .catch(error => {
        console.error('Error getting favorite status:', error);
      });
  }, [id]);

  const addToFavorites = () => {
    if (!isUserRegistered) {
      toast.warning('Please register to add to favorites!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (isFavorite) {
      addDelPet(id)
        .then(() => {
          setIsFavorite(!isFavorite);
        })
        .catch(error => {
          console.error('Error adding/removing from favorites:', error);
        });
    } else {
      addDelPet(id)
        .then(() => {
          setIsFavorite(true);
        })
        .catch(error => {
          console.error('Error adding to favorites:', error);
        });
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li key={id} className={css.item}>
      <div className={css.imageWrapper}>
        <img
          alt={title}
          loading="lazy"
          className={css.image}
          src={imageError ? 'https://http.cat/407' : file}
          onError={handleImageError}
        />
        <button className={css.addToFavoritesButton} onClick={addToFavorites}>
          {isFavorite ? (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-heart-off`}></use>
            </svg>
          ) : (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-heart-on`}></use>
            </svg>
          )}
        </button>
      </div>

      <div className={css.itemBox}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.infoWrapper}>
          <p className={css.category}>{category}</p>
          <p className={css.location}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#icon-location-1`}></use>
            </svg>
            <span className={css.texProperty}>{location}</span>
          </p>
          <p className={css.year}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#icon-clock`}></use>
            </svg>
            <span className={css.texProperty}>{age}</span>
          </p>
          <p className={css.sex}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#${sexIcon}`}></use>
            </svg>
            <span className={css.texProperty}>{sex}</span>
          </p>
        </div>
        <div className={css.learnContainerButton}>
          <button className={css.learnMoreButton} onClick={handleOpenModal}>
            Learn More
            <svg width="24" height="24">
              <use href={`${sprite}#icon-pawprint-lapka`}></use>
            </svg>
          </button>
        </div>
      </div>
      <ToastContainer />
      {isModalOpen && (
        <PetModal
          id={id}
          onClose={handleCloseModal}
          isFavorite={isFavorite}
          addToFavotire={addToFavorites}
        />
      )}
    </li>
  );
};

export default CategoryItem;
