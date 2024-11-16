import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact-Me";
import About from "./components/AboutMe";
import Services from "./components/Services";
import "./index.css";
import Navigation from "./components/Home";
import Projects from "./components/Project";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigation />}>  </Route>
        <Route path="/AboutMe" element={<About  />}>  </Route>
        <Route path="/Contact-Me" element={<Contact />}>  </Route>
        <Route path="/Services" element={<Services />}>  </Route>
        <Route path="/Project" element={<Projects />}>  </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
