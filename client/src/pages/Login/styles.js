import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem;

  h2 {
    text-align: center;
    padding: 0 0 2rem 0;
    font-weight: 500;
  }
`

export const LoginContainer = styled.div`
  padding: 4rem 4rem 1rem 4rem;
  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;

    & > input {
      font-size: 1.2rem;
      width: 25rem;
      height: 2.5rem;
      padding: 0.4rem 0.6rem;
      margin: 0.4rem 0;
    }
  }
`

export const LostPass = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: #3a6cdf;

    &:hover {
      text-decoration: underline;
    }
  }

  & > input {
    background-color: #b1b1b1;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
  }
`

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  & > span {
    padding: 0.5rem;
  }

  a {
    padding: 0.6rem;
    border-radius: 1rem;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.8rem;

    &:hover {
      background-color: #b1b1b1;
      transition: all 200ms ease;
    }
  }
`