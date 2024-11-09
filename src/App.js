import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes, Navigate } from 'react-router';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </>
  );
}

export default App;
