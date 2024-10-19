import "./Home.scss";

import Hero from "../../components/layout/Hero";
import Quiz from "../../components/layout/Quiz";
import Feedback from "../../components/layout/Feedback";
import FAQ from "../../components/layout/FAQ";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="home__wrapper">
      <Hero />
      <Quiz />
      <Feedback />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
