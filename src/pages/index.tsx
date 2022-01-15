import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { useEffect } from 'react';
import Aos from 'aos';
import { HomeContainer, Cover } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import 'aos/dist/aos.css';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
            <Projetos projetos={projetos} />
            <Conhecimentos />
            <FormContato />
          </main>
          <Footer />
        </HomeContainer>
      </Cover>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
