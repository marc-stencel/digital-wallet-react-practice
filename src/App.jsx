import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Business from './pages/Business';
import Login from './pages/Login';
import Register from './pages/Register';
import Fees from './pages/Fees';
import Help from './pages/Help';
import DashboardPage from './pages/DashboardPage';

import { tokenAndUserNameLoader } from './loaders/tokenAndUserNameLoader';
import { checkLogInLoader } from './loaders/checkLogInLoader';
import { checkAuthLoader } from './loaders/checkAuthLoader';

import { logInAction } from './actions/logInAction';
import { signUpAction } from './actions/signUpAction';
import { logOutAction } from './actions/logOutAction';
import { editDataAction } from './actions/updateAction';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenAndUserNameLoader,
    children: [
      { index: true, element: <Home /> },
      { path: 'business', element: <Business /> },
      {
        path: 'login',
        element: <Login />,
        action: logInAction,
        loader: checkLogInLoader,
      },
      {
        path: 'register',
        element: <Register />,
        action: signUpAction,
        loader: checkLogInLoader,
      },
      { path: 'fees', element: <Fees /> },
      { path: 'help', element: <Help /> },
      { path: 'logout', action: logOutAction },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        loader: checkAuthLoader,
        action: editDataAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
