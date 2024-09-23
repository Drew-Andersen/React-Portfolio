import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import './App.css'
import FooterAbove from './components/footer-above/FooterAbove';

function App() {
  return (
    <>
      <div className='background'>
        <Header/>
          <Outlet/>
        <FooterAbove />
        <Footer className='footer mt-5' />
      </div>
    </>
  );
}

export default App;