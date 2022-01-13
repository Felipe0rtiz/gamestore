import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0.8rem 1rem;
  width: 15rem;
  height: 20rem;
`;

export const Item = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  img {
    width: 15rem;
    height: 10rem;
    border-radius: 0.4rem;
  }
  h2 {
    padding: 0.5rem 0;
    font-size: 1.2em;
    inline-size: 15rem;
    overflow-wrap: break-word;
  }
`;

export const Wish = styled.div`
  
  button {
    border: none;
    color: #e60013;
    font-size: 1.4em;
    padding: 0.5rem 0;
    display: flex;
    background-color: #fff;
    &:hover {
      cursor: pointer;
    }
    
  }
`;