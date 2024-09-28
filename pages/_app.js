import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full height for the app */}
      <Header />
      <div className="content"> {/* Use the content class for body content */}
        <Component {...pageProps} />
      </div>
      <Footer className="footer" /> 
    </div>
  );
}

export default MyApp;
