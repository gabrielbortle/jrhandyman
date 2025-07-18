import '../styles/globals.css'; // Global styles (resets, base styling)
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
