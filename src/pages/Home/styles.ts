import styled from 'styled-components';

export const Container = styled.div`
  > img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    height: 100vh;
  }

  @media screen and (max-width: 1366px) {
    > img {
      max-width: 60vw;
      height: auto;
    }
  }
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 7rem;
  height: calc(100vh - 5rem);
  position: relative;

  h2 {
    font-size: 3rem;
  }

  .search {
    margin-top: 1rem;
    display: flex;

    input {
      height: 3rem;
      width: 25rem;

      border: #2d3561 solid 1px;
      border-radius: 5px;
      padding: 8px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #badc58;
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;

      svg {
        font-size: 1rem;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 880px) {
    padding: 0 3rem;
  }
`;

export const BestRecipes = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;

  > div {
    padding-top: 4rem;

    h2 {
      font-size: 2rem;
      text-align: center;
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      text-align: center;
    }
  }

  .grid {
    flex: 1;
    padding: 2rem 5rem 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  @media screen and (max-width: 1366px) {
    height: auto;

    .grid {
      > div {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const Services = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }

  img {
    height: 100vh;
  }

  h2 {
    font-size: 2rem;
  }

  span {
    display: inline-block;
    margin-top: 2rem;
    max-width: 30rem;

    p {
      font-size: 1rem;

      & + p {
        margin-top: 1rem;
      }
    }
  }

  button {
    margin-top: 3rem;
    border: none;
    outline: none;
    background-color: #badc58;
    border-radius: 5px;
    padding: 1rem 2rem;
    font-weight: 500;
    color: #fff;
  }

  @media screen and (max-width: 1366px) {
    img {
      max-width: 40vw;
      height: auto;
    }
  }

  @media screen and (max-width: 880px) {
    img {
      display: none;
    }

    > div {
      padding: 2rem 6rem;
      background: #dcfeda;
    }
  }
`;

export const BlogPosts = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    width: 100%;
    text-align: center;
  }

  > div {
    display: flex;
    position: relative;

    height: 60%;
    width: 80%;

    background: transparent;

    align-self: flex-end;

    .items {
      padding: 1rem;
      flex: 1;
      display: flex;
      align-items: center;

      &:hover {
        overflow-y: hidden;
      }
    }

    .side {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 20%;
      pointer-events: none;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.958420868347339) 100%
      );
    }
  }

  @media screen and (max-width: 570px) {
    > div {
      width: 95%;
    }
  }
`;

export const BeMember = styled.section`
  height: 100vh;
  position: relative;
  padding: 0 8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2rem;
    z-index: 1;
  }

  .email-container {
    z-index: 1;
    margin-top: 1rem;
    display: flex;

    input {
      height: 3rem;
      width: 25rem;

      border: #2d3561 solid 1px;
      border-radius: 5px;
      padding: 8px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #badc58;
      margin-left: 1rem;
      color: #fff;
      padding: 0 2rem;
    }
  }

  > img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
  }

  @media screen and (max-width: 1366px) {
    > img {
      max-width: 40vw;
      height: auto;
    }

    height: 60vh;
  }

  @media screen and (max-width: 425px) {
   padding: 0 2rem;

    .email-container {
      flex-direction: column;

      input {
        width: 100%;
      }

      button {
        height: 3rem;
        margin-left: 0;
        margin-top: 4px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;

  span {
    font-size: 1rem;
    color: #1d164d;

    &.links {
      a {
        color: #9e9baf;
        text-decoration: none;
        cursor: pointer;

        & + a {
          margin-left: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem 2rem;

    span {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      &.links > a + a {
        margin-left: 0;
      }
    }
  }
`;
