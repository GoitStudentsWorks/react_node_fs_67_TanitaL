import LoginPage from 'pages/AuthNavPages/LoginPage';
import RegisterPage from 'pages/AuthNavPages/RegisterPage';
import MainPage from 'pages/NavPages/MainPage';
import NewsPage from 'pages/NavPages/NewsPage';
import NoticesPage from 'pages/NavPages/NoticesPage';
import OurFriendsPage from 'pages/NavPages/OurFriendsPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/friends" element={<OurFriendsPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
