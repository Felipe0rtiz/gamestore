import {Content, Title, Cards} from './styles';

export default function Container(props) {
  return (
    <Content>
      <Title>{props.title}</Title>
      <Cards>
        {props.children}
      </Cards>
    </Content>
  )
}