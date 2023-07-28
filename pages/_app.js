import '../styles/globals.css'
import store from '../store/store';
import { Provider } from 'react-redux';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import IndustryFooter from '../components/IndustryFooter'
import { useEffect } from 'react';
import KontentSmartLink from "@kentico/kontent-smart-link";

const MyApp = ({
  Component,
  pageProps
}) => {
  useEffect(() => {
    // This is just an example of SDK initialization inside ES6 module.
    // HTML markup should still contain all necessary data-attributes (e.g. PageSection component).
    const kontentSmartLink = KontentSmartLink.initialize({
      defaultDataAttributes: {
        projectId: "d126e552-2eb3-0059-2e1a-e44dc4b9c001",
        languageCodename: "default",
      },
      queryParam: "preview-mode"
    });

    return () => {
      kontentSmartLink.destroy();
    };
  });

  return (

    <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>

  );
};

export default MyApp