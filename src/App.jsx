import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { NewThread } from './pages/NewThread';
import { DetailThread } from './pages/DetailThread';

function App() {
  return (
    <div className="min-h-screen bg-primaryLight dark:bg-primaryDark font-leagueSpartan">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addThread" element={<NewThread />} />
        <Route path="/thread/:id" element={<DetailThread />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
