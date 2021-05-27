import React, { useEffect, useState } from 'react';
import { Button, HeaderContainer } from './styles';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

interface UserProps {
  CEP: string;
  CPF: string;
  UF: string;
  born: string;
  city: string;
  name: string;
  number: string;
  street: string;
}

export const Header: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [user, setUser] = useState<UserProps | null>({} as UserProps);

  useEffect(() => {
    const localStorageResponse = localStorage.getItem('@HealthyFood:user');
    if (!localStorageResponse) {
      setUser(null);
      return;
    }
    setUser(JSON.parse(localStorageResponse) as UserProps);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuVisible(previousValue => !previousValue);
  };

  return (
    <HeaderContainer>
      <a href='/'>
        <h1>Healthy Food</h1>
      </a>

      <div>
        <Button to='/'>
          <span>Healthy Recipes</span>
        </Button>
        <Button to='/'>
          <span>Blog</span>
        </Button>
        <Button to='/'>
          <span>Join</span>
        </Button>
        <Button to={user ? '/' : '/register'} main={1}>
          <span>
            {user && user.name
              ? `Hello, ${user.name.split(' ')[0]}`
              : 'Register'}
          </span>
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
          <Button to='/' secondary={isMenuVisible ? 1 : 0}>
            <span>Healthy Recipes</span>
          </Button>
          <Button to='/' secondary={isMenuVisible ? 1 : 0}>
            <span>Blog</span>
          </Button>
          <Button to='/' secondary={isMenuVisible ? 1 : 0}>
            <span>Join</span>
          </Button>
          <Button
            to={user ? '/' : '/register'}
            main={1}
            secondary={isMenuVisible ? 1 : 0}
          >
            <span>
              {user ? `Hello, ${user.name.split(' ')[0]}` : 'Register'}
            </span>
          </Button>
        </div>
      )}
    </HeaderContainer>
  );
};
