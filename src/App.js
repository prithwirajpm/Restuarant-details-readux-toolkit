
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CardDetails from './Pages/CardDetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/carddetails/:id" element={<CardDetails />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
