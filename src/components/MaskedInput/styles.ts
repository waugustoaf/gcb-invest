import styled from "styled-components";
import Tooltip from '../Tooltip';

interface InputContainerStyleProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputContainerStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  background: #f5f5f5;
  border-radius: 10px;

  border: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isFocused
      ? '2px solid #58DC60'
      : props.isErrored
      ? '2px solid #c53030'
      : '2px solid #666360'};

  & + div {
    margin-top: 8px;
  }

  svg {
    color: ${props =>
      props.isFocused || props.isFilled ? '#58DC60' : '#666360'};
  }

  input {
    background: #f5f5f5;
    border: 0;
    padding: 16px;
    flex: 1;
    color: #000;
    margin-left: 10px;
    outline: none;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;