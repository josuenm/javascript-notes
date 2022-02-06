import { useNavigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { PrivateRouter } from './auth/private_router';
import { HeaderLogged } from './components/HeaderLogged';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './redux/slices/userSlice';

export function AppRoutes() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const pathname = window.location.pathname;
  const navigate = useNavigate();

  user === false && dispatch(login(JSON.parse(localStorage.getItem('user'))));

  useEffect(() => {
    if (pathname !== '/users/edit')
      localStorage.getItem('user') && navigate('/notes', { replace: true });
  }, [navigate, pathname, dispatch, user]);

  return (
    <>
      {localStorage.getItem('user') ? <HeaderLogged /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<PrivateRouter />} />
        <Route path="/users/edit" element={<PrivateRouter />} />
      </Routes>
    </>
  );
}
