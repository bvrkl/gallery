import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Collections from "./Collections/Collections";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* 
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          */
