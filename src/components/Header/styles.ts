import styled, { css } from 'styled-components';

interface ButtonProps {
  main?: number;
  secondary?: number;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 0 7rem;
  height: 5rem;

  > button {
    display: none;
    border: none;
    outline: none;
    background: transparent;
  }

  > a {
    border: none;
    outline: none;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;

    h1 {
      color: #badc58;
      font-size: 2rem;
    }
  }

  .menu {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 5rem);
    background-color: #fff;
    z-index: 999;
    top: 5rem;
    left: 0;
    padding: 2rem;

    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 880px) {
    padding: 0 3rem;

    > div {
      display: none;
    }

    > button {
      display: block;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  background-color: transparent;
  transition: opacity 0.2s;
  margin-top: ${props => !!props.secondary ? '2rem' : '0'};

  &:hover {
    opacity: 0.9;
  }

  span {
    text-transform: uppercase;
    color: ${props => (!!props.secondary ? '#badc58' : '#fff')};
    font-size: 1rem;
  }

  & + button {
    margin-left: ${props => !!props.secondary ? '0' : '1.5rem' };
  }

  ${props =>
    !!props.main &&
    css`
      background-color: #fff;
      padding: 1rem;
      border-radius: 10px;

      span {
        color: #badc58;
      }
    `}

  ${props =>
    !!props.main &&
    !!props.secondary &&
    css`
      background-color: #badc58;
      padding: 1rem;
      border-radius: 10px;

      span {
        color: #fff;
      }
    `}
`;
