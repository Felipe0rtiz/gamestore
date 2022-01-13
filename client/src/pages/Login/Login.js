import { useState } from 'react';
import { Container, LoginContainer, LostPass, Create } from './styles';
import axios from 'axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    axios.post('/auth/login', login)
    .then(response => {
      const tokenValue = response.data.token;
      localStorage.setItem('token', tokenValue)
      
    })
  }

  return (
    <Container>
      <h2>⭐ GameStore Member Login ⭐</h2>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <input 
          type='text' 
          placeholder='Endereço de e-mail' 
          required 
          onChange= {event => setEmail(event.target.value)}
          />

          <input 
          type='password' 
          placeholder='Senha' 
          required 
          onChange= {event => setPassword(event.target.value)}
          />

          <LostPass>
            <a href='!#'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </LostPass>
        </form>

        <Create>
          <span>Ainda não é GameStore Member?</span>
          <a href='/register'>Criar GameStore Member</a>
        </Create>
      </LoginContainer>
    </Container>
  )
}