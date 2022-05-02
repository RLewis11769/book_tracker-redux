import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderAndFooterHOC from './components/HOC/HeaderAndFooterHOC';
import Home from './pages/Home/Home';
import AddBook from './pages/AddBook/AddBook';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Depending on url, direct to different page */}
        {/* Note that require HOC to wrap elements in header and footer */}
        <Route path="/" element={HeaderAndFooterHOC(Home)} />
        <Route path="/add-book" element={HeaderAndFooterHOC(AddBook)} />
      </Routes>
    </Router>
  );
}

export default App;
