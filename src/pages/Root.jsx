import { Outlet, ScrollRestoration } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Navigation />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default Root;
