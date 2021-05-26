import React from 'react';
import { Container } from './styles';

interface RecipeProps {
  image: string;
  title: string;
}

export const Recipe: React.FC<RecipeProps> = ({ image, title }) => {
  return (
    <Container>
      <img src={image} alt='Crazy' />
      <div>
        <span>{title}</span>
        <a href="/">See Recipe</a>
      </div>
    </Container>
  );
};
