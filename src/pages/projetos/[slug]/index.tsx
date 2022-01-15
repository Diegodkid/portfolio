import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Aos from 'aos';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import 'aos/dist/aos.css';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <ProjetoContainer data-aos="fade-left">
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a target="_blank" href={projeto.link} rel="noreferrer">
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};