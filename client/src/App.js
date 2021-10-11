import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer/>
    </div>    
  );
}

export default App;
