import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InputTask from './components/InputTask';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import BlogAnnouncement from './pages/BlogAnnouncement';
import BlogManual from './pages/BlogManual';
import BlogTips from './pages/BlogTips'; // новая страница

import { Routes, Route } from "react-router-dom";

function MainLanding() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <InputTask />
      <section id="about">
        <About />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
    </>
  );
}

function App() {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/blog/announcement" element={<BlogAnnouncement />} />
        <Route path="/blog/manual" element={<BlogManual />} />
        <Route path="/blog/tips" element={<BlogTips />} /> {/* новый роут */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
