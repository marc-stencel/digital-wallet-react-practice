import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { logInAction } from './actions/logInAction';
import { signUpAction } from './actions/signUpAction';

import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Business from './pages/Business';
import Login from './pages/Login';
import Register from './pages/Register';
import Fees from './pages/Fees';
import Help from './pages/Help';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'business', element: <Business /> },
      { path: 'login', element: <Login />, action: logInAction },
      { path: 'register', element: <Register />, action: signUpAction },
      { path: 'fees', element: <Fees /> },
      { path: 'help', element: <Help /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
