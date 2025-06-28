import { HashRouter } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
