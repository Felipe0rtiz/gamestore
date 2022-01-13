import styled from "styled-components";

export const Container = styled.div`
  color: #484848;
  border-bottom: 1px solid #dadada;
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  background-color: white;
  padding: 1.5rem 0;

  img {
    width: 10rem;
    margin: 0 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    a {
      text-decoration: none;
      color: red;
      font-weight: 600;
      padding: 0 6rem;
      font-size: 1.5em;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
      }

      &:hover {
        color: black;
        cursor: pointer;
        transition: all 200ms ease;
      }
    }
  }
`;