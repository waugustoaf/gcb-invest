import styled, { css } from "styled-components";

interface ButtonProps {
  main?: number;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 0 7rem;
  height: 5rem;

  > button {
    border: none;
    outline: none;
    background-color: transparent;

    h1 {
      color: #badc58;
      font-size: 2rem;
    }    
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  background-color: transparent;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  span {
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;
  }

  & + button {
    margin-left: 1.5rem;
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
`;
