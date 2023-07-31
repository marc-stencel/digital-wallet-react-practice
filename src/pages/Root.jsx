import {
  Outlet,
  ScrollRestoration,
  useRouteLoaderData,
} from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

const Root = () => {
  const data = useRouteLoaderData('root');
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');

  return (
    <>
      <ScrollRestoration />
      <Navigation
        token={data?.token || token}
        userName={data?.userName || userName}
      />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default Root;
