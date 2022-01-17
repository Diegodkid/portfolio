import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Estou disponivel para novos projetos
            <br />
          </>
        }
        description={
          <>
            Entre em contato comigo e marcamos uma conversa
            <br />
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
