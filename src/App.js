
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
