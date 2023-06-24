import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { NewThread } from './pages/NewThread';
import { DetailThread } from './pages/DetailThread';
import { asyncPreloadProcess } from './states/preload/action';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';

function App() {
  const authUser = useSelector((states) => states.authUser);
  const preload = useSelector((states) => states.preload);
  const theme = useSelector((states) => states.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (preload) {
    return <h1>Loading ... </h1>;
  }

  if (!authUser) {
    return (
      <>
        <Loading />
        <div className="min-h-screen bg-primaryLight dark:bg-primaryDark font-leagueSpartan">
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="min-h-screen bg-primaryLight dark:bg-primaryDark font-leagueSpartan">
        <Navbar name={authUser.name} theme={theme} />
        <Routes>
          <Route path="/home" element={<Home authUser={authUser} />} />
          <Route path="/addThread" element={<NewThread />} />
          <Route
            path="/thread/:id"
            element={<DetailThread authUser={authUser} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
