import { Container, Header, Info, Bar } from './styles';
import { FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Game() {

  const state = useLocation();
  const id = state.state;

  const [game, setGame] = useState({});
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${id}`)
    .then(response => {
      setGame(response.data)
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <Container>
      <Header>
        <img src={game.imageUrl} width="650" height="550" alt={game.name} /> 
      </Header>
      <Info>
        <h2>{game.name}</h2>
        
        <Bar>
          <span>R$ {game.price}</span>
          <a href='!#'>
            <FaRegHeart />
          </a>
        </Bar>

        <h3>{game.year}</h3>
        <p>{game.storyline}</p>
      </Info>
    </Container>
  )
}