import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import ContactUs from "./pages/contact-us";
import NavBar from "./components/nav-bar";
import NotFound from "./pages/404";
import WebDesign from "./pages/web-design";
import AppDevelopment from "./pages/app-development";
import Jobs from "./pages/jobs";
import JobDetail from "./pages/job-detail";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          {/* <Route path=":id" element={<Product />} /> */}
          <Route path="web-design" element={<WebDesign />} />
          <Route path="app-development" element={<AppDevelopment />} />
        </Route>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
