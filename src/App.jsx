import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Our from "./components/our/Our";
import Follow from "./components/follow/Follow";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Our />
      <Follow />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
