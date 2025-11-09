import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact-Me";
import About from "./pages/AboutMe";
import Services from "./pages/Services";
import Projects from "./pages/Project";
import Home from "./pages/Home";
import "./css/home.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path="/Contact-Me" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
