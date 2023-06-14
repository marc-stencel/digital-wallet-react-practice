import ConsumerIntroduction from '../components/consumer/ConsumerIntroduction';
import ConsumerProducts from '../components/consumer/ConsumerProducts';
import Banner from '../components/banner/Banner';
import SendMoney from '../components/consumer/SendMoney';

const Home = () => {
  return (
    <>
      <ConsumerIntroduction />
      <ConsumerProducts />
      <Banner />
      <SendMoney />
    </>
  );
};

export default Home;
