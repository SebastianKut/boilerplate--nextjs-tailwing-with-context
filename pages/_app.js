import { ContextProvider } from '../context/Context';
import { reducer, initialState } from '../context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
