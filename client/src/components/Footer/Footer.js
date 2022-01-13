import { FaFacebookSquare, FaInstagramSquare,} from 'react-icons/fa';
import { Container, Social } from './styles';

export default function Footer() {
  return (
    <Container>
      <Social>
        <a href='https://www.facebook.com/GameStoreBR/'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/gamestore_tatuape/'><FaInstagramSquare /></a>
      </Social>
      <span>Isso é apenas um projeto.</span>
      <span>Links direcionam para a GameStore Oficial</span>
    </Container>
  )
}