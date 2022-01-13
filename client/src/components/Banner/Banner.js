import { Container, InfoBar, AgeBar, Square } from './styles'

export default function Banner(props) {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <InfoBar>         
        <span>{props.info}</span>     
      </InfoBar>
    </Container>
  )
}