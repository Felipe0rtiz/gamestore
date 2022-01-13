import logo from './logo.png';
import {Container, Logo, List,} from './styles';
import {GrAlert, GrShop, GrDiamond, GrUserAdd, GrUser} from "react-icons/gr";;

export default function Navbar() {
  return(
    <Container>
      <Logo>
        <a href='/'>
          <img src={logo} alt='Gamestore' />
        </a>
      </Logo>
        <List>
          <li>
            <a href='https://www.gamestore.com.br/'>
              <GrAlert />
              <span>oficial</span>
            </a>
          </li>
          <li>
            <a href='/wishlist'>
              <GrShop />
              <span>Lista de Desejos</span>
            </a>
          </li>
          <li>
            <a href='/login'>
              <GrDiamond />
              <span>Login</span>
            </a>
          </li>
          <li>
            <a href='/register'>
              <GrUserAdd />
              <span>Criar conta</span>
            </a>
          </li>
          <li>
            <a href='/profile'>
              <GrUser />
              <span>Perfil</span>
            </a>
          </li>
        </List>
      
    </Container>
  )
}