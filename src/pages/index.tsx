import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { HomeContainer, Cover } from '../styles/HomeStyles';

export default function Home() {
  return (
    <>
      <Cover>
        <video autoPlay loop muted>
          <source src="/c11.mp4" type="video/mp4" />
        </video>
        <HomeContainer>
          <Header />
          <main className="container">
            <HomeHero />
            <Experiencias />
            <Projetos />
            <Conhecimentos />
            <FormContato />
          </main>

          <Footer />
        </HomeContainer>
      </Cover>
    </>
  );
}
