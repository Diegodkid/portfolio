import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer data-aos="fade-left">
      <Input placeholder="Nome" required />
      <Input placeholder="Email" type="email" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
