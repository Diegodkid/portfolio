import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 01"
        type="website"
        imgUrl="https://thumbs.dreamstime.com/z/vetor-do-molde-projeto-web-site-rela%C3%A7%C3%A3o-neg%C3%B3cio-p%C3%A1gina-da-aterrissagem-equipe-profissional-b-corporativo-monitora%C3%A7%C3%A3o-e-117625238.jpg"
      />

      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod optio
          rerum, provident nesciunt nihil aut sapiente suscipit, fugiat nulla
          eligendi possimus iusto libero necessitatibus accusamus.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
