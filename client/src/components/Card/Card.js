import { FaRegHeart } from 'react-icons/fa';
import { Container, Item, Wish } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Card(props) {

  const navigate = useNavigate();
  const [gameAdded, setGameAdded] = useState(false);
  const [gameError, setGameError] = useState(false);

  const goToGamePage = () => {
    navigate('/game', { state: props.id })
  }

  const wishGame = async() => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }
    const id = props.id;

    await axios.patch(`/user/addList/${id}`, '', config)
    .then(response => {
      if(response.data.status !== 200) {
        setGameError(true)
      }
    })
  }

  return (
    <Container>
      <Item onClick={goToGamePage}>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <span>{'R$ ' + props.price}</span>
      </Item>
      <Wish>
        <button onClick={wishGame}>
          <FaRegHeart />
        </button>
      </Wish>
      {
        gameError ? (
          <p>Jogo não adicionado</p>
        ) : ('')
      }
    </Container>
  )
}