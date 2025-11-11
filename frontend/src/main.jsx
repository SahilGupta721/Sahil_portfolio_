import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx'
import Footer from './components/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
      <About/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
