import React from 'react';
import { Container } from './styles';

interface BlogTopicProps {
  image: string;
  title: string;
  author_image: string;
  author_name: string;
}

export const BlogTopic: React.FC<BlogTopicProps> = ({
  image,
  title,
  author_image,
  author_name,
}) => {
  return (
    <Container>
      <img src={image} alt='Blog' />
      <div>
        <h2>{title}</h2>

        <div className='author'>
          <img src={author_image} alt={author_name} />
          <span>{author_name}</span>
        </div>
      </div>
    </Container>
  );
};
