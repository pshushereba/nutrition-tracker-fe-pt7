import "../styles/styles.css";
import fetch from 'isomorphic-unfetch';

fetch('https://labspt7-nutrition-tracker-be.herokuapp.com');

function MyApp({ Component, pageProps}) {

  return (
    <Component {... pageProps} />
  )
}

export default MyApp;