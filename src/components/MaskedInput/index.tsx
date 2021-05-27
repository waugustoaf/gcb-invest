import { useField } from '@unform/core';
import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Error } from './styles';
import { FiAlertCircle } from 'react-icons/fi';
import ReactInputMask, { Props as ReactInputProps } from 'react-input-mask';

interface InputProps extends ReactInputProps {
  name: string;
  containerStyle?: object;
  customBlur?: React.FocusEventHandler<HTMLInputElement>
  icon?: ComponentType<IconBaseProps>;
}

export const MaskedInput: React.FC<InputProps> = ({
  name,
  icon: Icon,
  containerStyle = {},
  customBlur,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInput = () => {
    setIsFocused(value => !value);
    setIsFilled(!!inputRef.current?.value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      {Icon && <Icon size={20} />}
      <ReactInputMask
        ref={inputRef}
        alwaysShowMask={false}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleInput}
        onBlur={(value) => {
          handleInput();
          customBlur && customBlur(value);
        }}
        {...rest}
      />
      {error && (
        <Error title={error || 'Campo inválido'}>
          <FiAlertCircle color='#c53030' size={20} />
        </Error>
      )}
    </Container>
  );
};
