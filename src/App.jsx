import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { ThemeProvider } from './components/theme/Themecontent';
import './App.css';
import './components/theme/theme.css';
import FooterAbove from './components/footer-above/FooterAbove';

function App() {
  return (
    <ThemeProvider>
      <div className='background'>
        <Header/>
          <Outlet/>
        <FooterAbove />
        <Footer className='footer mt-5' />
      </div>
    </ThemeProvider>
  );
}

export default App;