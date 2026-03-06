import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import MessagePage from './pages/MessagePage';
import ProposalPage from './pages/ProposalPage';
import PuzzlePage from './pages/PuzzlePage';
import "./styles/romantic.css";
import "./styles/theme.css";
import "./styles/love-theme.css"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/proposal" element={<ProposalPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
