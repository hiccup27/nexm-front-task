import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Characters from './components/Characters/Characters';
import Character from './components/Character/Character';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}