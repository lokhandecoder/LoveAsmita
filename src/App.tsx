import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import MessagePage from './pages/MessagePage';
import ProposalPage from './pages/ProposalPage';
import PuzzlePage from './pages/PuzzlePage';
import "./styles/romantic.css";
import "./styles/theme.css";
import "./styles/love-theme.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/proposal" element={<ProposalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
