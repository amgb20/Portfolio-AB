import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./Components/ScrollToTop";
import InteractiveBackground from "./Components/InteractiveBackground";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Publications from "./Pages/Publications";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import OffTheClock from "./Pages/OffTheClock";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <InteractiveBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/off-the-clock" element={<OffTheClock />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}
export default App;
