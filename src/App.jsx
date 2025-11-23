import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OnTheJob from './pages/OnTheJob';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router basename="/lazlogaming-site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/otj" element={<OnTheJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
