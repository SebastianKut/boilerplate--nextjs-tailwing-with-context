import Link from 'next/link';
import { useGlobalContext } from '../context/Context';

const IndexPage = () => {
  const { counter, dispatch } = useGlobalContext();

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    });
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    });

  return (
    <>
      <h1>HOME</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;
