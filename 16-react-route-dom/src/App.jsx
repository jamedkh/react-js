import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import NavBar from "./components/nav-bar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
