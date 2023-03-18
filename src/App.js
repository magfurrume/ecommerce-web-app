
import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='fixed  top-0' style={{ position: 'fixed', zIndex: '10', top: '0px' }}>
        <Header />
        <Navbar />
      </div>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
