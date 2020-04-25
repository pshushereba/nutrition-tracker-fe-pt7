import "../styles/styles.css";
import fetch from "isomorphic-unfetch";
import { AuthProvider } from "../components/AuthProvider";

fetch("https://labspt7-nutrition-tracker-be.herokuapp.com");

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
