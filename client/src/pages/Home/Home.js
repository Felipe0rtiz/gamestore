import Banner from '../../components/Banner/Banner';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {

  const [games, setGames] = useState([]);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      setGames(response.data)
    })
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
      <Banner 
        image='https://portaldosgamesbr.files.wordpress.com/2021/07/4754d1dbfbde23e1110a1b5e741254ee-700.jpg' 
      />
     <Search />
      <CardContainer title='Jogos'>
      {
        games.map(game => (
          <Card 
            key={game.id}
            image={game.imageUrl}
            name={game.name}
            price={game.price}
            id={game.id}
          />
        ))
      }
      </CardContainer>
    </>
  )
}