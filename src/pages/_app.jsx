// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Raleway, Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable} ${raleway.variable}`}>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
