import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
