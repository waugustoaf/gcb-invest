import styled from 'styled-components';

export const Container = styled.div`
  > img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    height: 100vh;
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
`;

export const BestRecipes = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-height: 100vh;
  position: relative;

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
`;

export const Services = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;

  img {
    height: 100vh;
  }

  h2 {
    font-size: 2rem;
  }

  span {
    display: inline-block;
    margin-top: 2rem;

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
    padding: 1rem;
    font-weight: 500;
    color: #fff;
  }
`;
