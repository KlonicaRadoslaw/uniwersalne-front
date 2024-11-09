import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes, Navigate } from 'react-router';
import LoginPage from './Pages/LoginPage/LoginPage';
import MarketPage from './Pages/MarketPage/MarketPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/market" element={<MarketPage/>} />
    </Routes>
    </>
  );
}

export default App;
