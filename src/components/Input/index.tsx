import { useField } from '@unform/core';
import React, {
  ComponentType,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Error } from './styles';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  customChange?: React.ChangeEventHandler<HTMLInputElement>;
  customValue?: string | number | readonly string[] | undefined;
  icon?: ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  containerStyle = {},
  customChange,
  customValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
      <input
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleInput}
        onBlur={handleInput}
        onChange={value => {
          customChange && customChange(value);
        }}
        value={customValue}
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
