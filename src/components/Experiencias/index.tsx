import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />
      <section data-aos="fade-up-left">
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit, orem ipsum dolor sit"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
