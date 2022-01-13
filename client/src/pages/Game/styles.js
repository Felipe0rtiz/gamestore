import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  img {
    padding: 5px 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex;
    background-color: red;

  }
`;

export const Info = styled.div`
  h2 {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
  h3 {
    padding: 1rem 2rem;
    font-size: 1.3rem;
  }
  p {
    padding: 1rem 2rem;
    text-align: justify;
    font-size: 1.2rem;
  }
`;

export const Bar = styled.div`
  font-size: 1.5em;
  text-decoration: none;
  color: #e60012;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;