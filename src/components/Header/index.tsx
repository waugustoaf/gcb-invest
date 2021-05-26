import React, { useState } from 'react';
import { Button, HeaderContainer } from './styles';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

export const Header: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuVisible(previousValue => !previousValue);
  }

  return (
    <HeaderContainer>
      <a href='/'>
        <h1>Healthy Food</h1>
      </a>

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

      <button onClick={handleToggleMenu}>
        {isMenuVisible ? (
          <IoMdClose color='#fff' size={32} />
        ) : (
          <IoMdMenu color='#fff' size={32} />
        )}
      </button>

      {isMenuVisible && (
        <div className='menu'>
          <Button type='button' secondary={isMenuVisible ? 1 : 0}>
            <span>Healthy Recipes</span>
          </Button>
          <Button type='button' secondary={isMenuVisible ? 1 : 0}>
            <span>Blog</span>
          </Button>
          <Button type='button' secondary={isMenuVisible ? 1 : 0}>
            <span>Join</span>
          </Button>
          <Button type='button' main={1} secondary={isMenuVisible ? 1 : 0}>
            <span>Register</span>
          </Button>
        </div>
      )}
    </HeaderContainer>
  );
};
