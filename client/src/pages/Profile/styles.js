import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        width: 20rem;
        border-radius: 10rem;
    }

    h2 {
        padding: 1rem;
      }
      span {
        padding: 0.2rem;
      }
      button {
        background-color: #e60012;
        border: none;
        border-radius: 0.8rem;
        padding: 0.8rem;
        margin: 1rem 0;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        
        &:hover {
          background-color: #e6001273;
          transition: all 200ms ease;
        }
      }
      `;