import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  img {
    width: 100vw;
    height: 40rem;
  }
`;

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  span {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a1a1a;
  }

  button {
    background-color: #e60012;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    border: none;
    border-radius: 0.8rem;
    padding: 2rem 0.8rem;
    margin: 0 1rem;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const AgeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 1rem;
    width: 10rem;
    color: #484848;
     font-size: 0.8rem;
  };
`;

export const Square = styled.div`
  background-color: black;
  height: 3rem;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: 700;
  font-size: 1.2em;
`;