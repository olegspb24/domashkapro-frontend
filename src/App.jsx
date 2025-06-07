import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InputTask from './components/InputTask';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
