/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/b2.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up-left">
      <img src={picture} alt="Minha foto" data-aos="fade-up-right" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Seja bem vindo(a)</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue"> Diego,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Santos</span>
            </div>
            {'\u007d'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007b'}
            <div>
              Função: <span className="blue"> Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">Cidade Alta</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
