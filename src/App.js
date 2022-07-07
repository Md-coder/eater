import './App.css';
import Navbar from './components/assets/Navbar';

import Footer from './components/assets/Footer';
import Home from './pages/Home';
import { EaterProvider } from './components/context/EaterContex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './pages/Food';
import NotFound from './components/assets/NotFound';
function App() {
  return (
    <EaterProvider>
      <div className='App h-screen flex flex-col justify-between'>
        <Router>
          <Navbar />
          <main className=' container mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/food/:title' element={<Food />} />
              <Route path='/notFound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </EaterProvider>
  );
}

export default App;
