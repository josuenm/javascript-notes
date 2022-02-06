import { Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { UserEdit } from '../pages/UserEdit';

export function PrivateRouter() {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname === '/users/edit' && localStorage.getItem('user') ? (
        <UserEdit />
      ) : null}

      {pathname === '/notes' && localStorage.getItem('user') ? (
        <Dashboard />
      ) : null}

      {(pathname === '/notes') | 'users/edit' &&
      !localStorage.getItem('user') ? (
        <Navigate to="/login" />
      ) : null}
    </>
  );
}
