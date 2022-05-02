import { ComponentType } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../index.css';

const HeaderAndFooterHOC = (Component: ComponentType) => {
  // Must use HOC to wrap each Component with Header and Footer
  return (
    <div className="App">
      <Header />
      <Component />
      <Footer />
    </div>
  );
};

export default HeaderAndFooterHOC;
