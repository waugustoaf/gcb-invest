import styled from "styled-components";
import backgroundImage from '../../assets/register_image.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  .form {
    width: 100%;
    max-width: 700px;
    background-color: #f5f5f5;
    padding: 0 2rem;
    overflow-y: auto;

    .header {
      margin-top: 4rem;

      p {
        color: #9a9a9a;

        a {
          color: #58dc60;
          text-decoration: none;
          cursor: pointer;
        }
        & + h1 {
          margin-bottom: 1rem;
        }
      }
    }

    form {
      margin-top: 2rem;

      button {
        border: none;
        outline: none;
        background: #58dc60;
        padding: 1rem 2rem;
        border-radius: 10px;
        margin-top: 1rem;
        color: #f5f5f5;
      }
    }
  }
`;

export const Background = styled.aside`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: 100%;
`;