import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import IntroPart from "@/components/IntroPart";
// import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import magicIcon from "@/assets/icons/magic.svg";
import gemIcon from "@/assets/icons/gem.svg";
import earthIcon from "@/assets/icons/earth.svg";
import paletteIcon from "@/assets/icons/palette.svg";
import vectorSquareIcon from "@/assets/icons/vector-square.svg";
import filledGemIcon from "@/assets/icons/filled-gem.svg";
import pencilRulerIcon from "@/assets/icons/pencil-ruler.svg";
import Service from "@/components/Service";

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

  const services = [
    {
      icon: {
        source: paletteIcon,
        alt: "Palette"
      },
      className: "graphic-design",
      title: "Graphic Design",
      description: "Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration."
    },
    {
      icon: {
        source: vectorSquareIcon,
        alt: "Web Design"
      },
      className: "web-design",
      title: "Web Design",
      description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites."
    },
    {
      icon: {
        source: filledGemIcon,
        alt: "UI & UX Design"
      },
      className: "ui-ux",
      title: "UI & UX Design",
      description: "UI & UX design is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction."
    },
    {
      icon: {
        source: pencilRulerIcon,
        alt: "Web Development"
      },
      className: "web-development",
      title: "Web Development",
      description: "Web development is a broad term for the work involved in developing a website for the internet or an intranet."
    }
  ];

  return (
    <div>
      <Header />
      <Background />
      <Intro>
        {intros.map(intro => <IntroPart icon={{ source: intro.icon.source, alt: intro.icon.alt }} title={intro.title} key={intro.title} />)}
      </Intro>
      <Services>
        {services.map(service => <Service icon={{ source: service.icon.source, alt: service.icon.alt }} title={service.title} description={service.description} className={service.className} key={service.title} />)}
      </Services>
      {/*
      <Portfolio />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;