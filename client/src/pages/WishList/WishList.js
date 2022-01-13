import CardContainer from '../../components/CardContainer/CardContainer'
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WishList() {

  const [wishlist, setWishlist] = useState([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if(localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('user/userList', config)
      .then(reponse => {
        setWishlist(reponse.data.games);
      })
    }
  }, [mounted])

  return (
    <CardContainer title='Lista de Desejos GameStore Member'>
      {
        wishlist.length > 0 ? (
          wishlist.map(game => (
            <Card 
            key={game.id}
            image={game.imageUrl}
            name={game.name}
            price={game.price}
            id={game.id}
          />
          ))
        ) : (
          <h2>Sem Items favoritados</h2>
        )
          
      }
    </CardContainer>
  )
}