import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes, Navigate } from 'react-router';
import LoginPage from './Pages/LoginPage/LoginPage';
import MarketPage from './Pages/MarketPage/MarketPage'
import NewsPage from './Pages/NewsPage/NewsPage'
import GameDetailsPage from './Pages/GameDetailsPage/GameDetailsPage'
import PopularPage from './Pages/PopularPage/PopularPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/popular" element={<PopularPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/market" element={<MarketPage/>} />
      <Route path="/news" element={<NewsPage/>} />
      <Route path="/game/:id" element={<GameDetailsPage/>} />
    </Routes>
    </>
  );
}

export default App;
