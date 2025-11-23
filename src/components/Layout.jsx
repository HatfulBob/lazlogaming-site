import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="main-section">
        <Navigation />
        <article>
          {children}
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Layout;
