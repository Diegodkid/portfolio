import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          img="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/02/praticas-web-design-proximo-projecto-1024x512.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
