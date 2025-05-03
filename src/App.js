import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <Router>
      <div className="p-4">
        <nav style={{
          display: 'flex',
          gap: '10px',
          padding: '10px',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px',
        }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;