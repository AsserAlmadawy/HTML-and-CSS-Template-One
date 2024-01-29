import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

const Home: React.FC = () => (
  <div className="main-container">
    <Header />
    <Background />
    <Intro />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Home;