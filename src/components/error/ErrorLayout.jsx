import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const ErrorLayout = ({ children }) => {
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');

  return (
    <>
      <Navigation token={token} userName={userName} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ErrorLayout;
