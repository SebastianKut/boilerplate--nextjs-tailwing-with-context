import Link from 'next/link';
import { useGlobalContext } from '../context/Context';

const AboutPage = () => {
  const { counter, dispatch } = useGlobalContext();

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    });
  const handleIncrease15 = (event) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    });

  return (
    <>
      <h1>ABOUT</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
