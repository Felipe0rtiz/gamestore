import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 10rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  span {
    font-size: 2rem;
    font-weight: 600;
    padding: 0 1rem;
  }

  input[type=text] {
    margin: 0 2rem;
    width: 25rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    border: none;
  }

  input[type=submit] {
    margin: 0 0.5rem;
    width: 10rem;
    padding: 1rem;
    font-size: 1.1rem;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: blue;
      transition: all 200ms ease;
    }
  }
`;