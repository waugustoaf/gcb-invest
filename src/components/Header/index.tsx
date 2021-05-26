import React from 'react';
import { Button, HeaderContainer } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <button type='button'>
        <h1>Healthy Food</h1>
      </button>

      <div>
        <Button type='button'>
          <span>Healthy Recipes</span>
        </Button>
        <Button type='button'>
          <span>Blog</span>
        </Button>
        <Button type='button'>
          <span>Join</span>
        </Button>
        <Button type='button' main={1}>
          <span>Register</span>
        </Button>
      </div>
    </HeaderContainer>
  );
};
