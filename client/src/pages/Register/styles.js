import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h2`
  text-align: center;
  padding: 4rem;
  font-weight: 600;
`

export const Form = styled.form`
  background-color: red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin: 0 0 4rem 0;

  label {
    font-size: 1.5rem;
  }

  input {
    font-size: 1.5rem;
    padding: 0.4rem 0.6rem;
    margin: 0 0 1rem 0;
  }
`

export const Terms = styled.div`
  margin: 2rem 0;
  padding: 0.1rem 0;
  border-top: 1px solid red;
  border-bottom: 1px solid red;

  label {
    font-size: 1.1rem;
    text-align: justify;
    font-weight: 600;
  }

  a {
    color: #97B0E7;
  }

  input {
    margin: 0 0.5rem;
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: red;
    color: black;
    border: none;
    border-radius: 5rem;
    padding: 0.6rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: white;
    }
  }

`