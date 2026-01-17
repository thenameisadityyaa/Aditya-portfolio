import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop"; // ✅ add this
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
