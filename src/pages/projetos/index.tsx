import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="# Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
        />
        <ProjetoItem
          title="# Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
        />
        <ProjetoItem
          title="# Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
        />
        <ProjetoItem
          title="# Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
        />
      </main>
    </ProjetosContainer>
  );
}
