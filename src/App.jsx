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
      <Hero />
      <InputTask />
      <About />
      <Pricing />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
