import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NotFoundMax from '../../assets/images/cat-404-max-opt.png';
import NotFoundMin from '../../assets/images/cat-404-min-opt.png';

import css from './PageNotFound.module.css';
import Container from 'components/Container/Container/Container';
import BgContainer from 'components/Container/BgContainer/BgContainer';

const PageNotFound = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Container >
      <div className={css.PageNotFound}>
      <BgContainer>
      <p className={css.textError}>
        <span className={css.span}>Ooops! </span>
        This page not found :(
      </p>
      <div className={css.NotFoundImg}>
        {isMobile ? (
        <img src={NotFoundMin} alt="page-not-found" width="280px" height="123px" />
        ) : (
          <img src={NotFoundMax} alt="page-not-found" width="822px" height="360px" />
        )
        }
      </div>
      <Link to="/">
      <button type='button' className={css.PageNotFoundBtn} onClick="/">To main page 
        < svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          focusable="false"
        >
          <g fill="#FEF9F9" clipPath="url(#a)">
            <path d="M15.361 14.361a5.82 5.82 0 0 0-3.322-4.518 5.82 5.82 0 0 0-5.596.36l-4.074 2.58a3.674 3.674 0 0 0-1.473 1.795 3.674 3.674 0 0 0-.113 2.32 3.674 3.674 0 0 0 1.294 1.93c.631.49 1.388.76 2.189.777l.052.001a7.271 7.271 0 0 1 5.24 2.467 3.678 3.678 0 0 0 2.002 1.177 3.674 3.674 0 0 0 2.31-.25 3.675 3.675 0 0 0 1.705-1.577c.388-.7.536-1.49.43-2.283l-.644-4.779Zm-2.074 7.359c-.927.422-2 .19-2.672-.575a8.66 8.66 0 0 0-2.85-2.135 8.662 8.662 0 0 0-3.467-.811h-.035A2.28 2.28 0 0 1 2.14 16.52a2.28 2.28 0 0 1 .982-2.55l4.075-2.58a4.418 4.418 0 0 1 4.249-.273 4.419 4.419 0 0 1 2.522 3.43l.643 4.78a2.28 2.28 0 0 1-1.323 2.392ZM4.721 9.395c.828.058 1.624-.26 2.244-.892.59-.603.948-1.426 1.01-2.318.06-.892-.182-1.757-.682-2.435-.527-.712-1.272-1.135-2.099-1.192-1.662-.115-3.12 1.325-3.252 3.21-.103 1.503.668 2.84 1.825 3.38.296.138.617.224.954.247Zm-1.375-3.53c.077-1.11.863-1.965 1.752-1.903.16.01.316.052.463.12.227.106.432.277.6.505.303.409.448.942.41 1.501-.039.56-.256 1.067-.612 1.43-.326.334-.731.502-1.14.474-.889-.061-1.55-1.015-1.473-2.126ZM10.641 8.647c1.762.821 3.957-.143 4.893-2.15.936-2.008.264-4.31-1.498-5.131-1.761-.822-3.956.143-4.892 2.15-.936 2.008-.264 4.31 1.497 5.13Zm2.801-6.006c1.059.493 1.425 1.956.817 3.261-.608 1.304-1.965 1.963-3.023 1.47-1.059-.494-1.425-1.957-.817-3.26.608-1.305 1.964-1.965 3.023-1.471ZM15.744 12.114c.229.216.485.388.76.516 1.285.6 2.974.248 4.122-.966.66-.7 1.05-1.582 1.097-2.487.05-.946-.278-1.803-.923-2.412-.644-.609-1.518-.888-2.46-.786-.901.098-1.76.537-2.421 1.236-1.394 1.475-1.472 3.672-.175 4.899ZM16.94 8.18c.432-.456.982-.741 1.55-.803.526-.057 1.003.088 1.343.41.34.32.512.788.484 1.316-.03.571-.283 1.137-.715 1.593-.86.911-2.159 1.088-2.893.394-.733-.693-.63-1.999.231-2.91ZM22.67 14.827c-.797-1.465-2.795-1.923-4.456-1.022-1.66.902-2.363 2.827-1.569 4.29.29.535.74.935 1.274 1.185.933.435 2.125.411 3.181-.162 1.66-.902 2.364-2.827 1.57-4.291Zm-2.24 3.055c-.98.531-2.124.326-2.548-.457-.425-.783.026-1.852 1.004-2.384.65-.353 1.372-.38 1.909-.13.271.126.496.324.639.587.424.783-.027 1.852-1.005 2.384Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </button>
      </Link>
      </BgContainer>
      </div>
    </Container>
  );
};

export default PageNotFound;