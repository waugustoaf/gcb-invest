import styled from 'styled-components';

export const Container = styled.div`
  height: 14rem;

  display: flex;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  > img {
    position: relative;
    height: 14rem;
  }

  > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > span {
      font-weight: 600;
      font-size: 1.5rem;
      max-width: 12rem;
    }

    a {
      border: none;
      outline: none;
      background-color: #badc58;
      margin-top: 1rem;
      padding: 0.8rem 1.5rem;
      border-radius: 7px;
      text-decoration: none;
      color: #fff;
    }
  }
`;
