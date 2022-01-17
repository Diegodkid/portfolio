import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <RiWhatsappFill
            onClick={() => handleRedirect('https://wa.me/556791884338')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/Diegodkid')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/diego-solit-527259217/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}
export default Footer;
