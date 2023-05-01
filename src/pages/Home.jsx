import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';

const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};

const Home = () => {
  const { data } = useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
  });

  console.log(data);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
