import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: auto;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  > div {
    padding: 1rem;
    h2 {
      font-size: 1.5rem;
      max-width: 18rem;
    }

    .author {
      display: flex;
      align-items: center;

      margin-top: 1rem;

      img {
        width: 2rem;
        height: 2rem;
      }

      span {
        text-align: start;
        margin-left: 8px;
        font-size: 1rem;
        color: #9e9baf;
      }
    }
  }

  & + div {
    margin-left: 2rem;
  }
`;