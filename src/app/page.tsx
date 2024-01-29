import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import IntroPart from "@/components/IntroPart";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import magicIcon from "@/assets/icons/magic.svg";
import gemIcon from "@/assets/icons/gem.svg";
import earthIcon from "@/assets/icons/earth.svg";
import Image from "next/image";

const Home: React.FC = () => {
  const intros = [
    {
      icon: {
        source: magicIcon,
        alt: "Magic"
      },
      title: "Tell us your idea."
    },
    {
      icon: {
        source: gemIcon,
        alt: "Gem"
      },
      title: "We will do all the work."
    },
    {
      icon: {
        source: earthIcon,
        alt: "Earth"
      },
      title: "Your product is worldwide."
    }
  ];

  return (
    <div>
      <Header />
      <Background />
      <Intro>
        {
          intros.map(intro =>  <IntroPart icon={{ source: intro.icon.source, alt: intro.icon.alt }} title={intro.title} key={intro.title} />)
        }
      </Intro>
      {/* <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;