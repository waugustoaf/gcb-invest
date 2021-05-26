import React from 'react';
import { BestRecipes, Container, SearchContainer, Services } from './styles';
import { FaSearch } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { Recipe } from '../../components/Recipe';
import homeImage from '../../assets/Illustration.svg';
import serviceImage from '../../assets/bloco_services.svg';
import Food1 from '../../assets/comida_1.svg';
import Food2 from '../../assets/comida_2.svg';
import Food3 from '../../assets/comida_3.svg';
import Food4 from '../../assets/comida_4.svg';

export const Home: React.FC = () => {
  return (
    <Container>
      <img src={homeImage} alt='Healthy Food' />
      <Header />

      <SearchContainer>
        <h2>
          Ready for <br />
          Trying a new <br />
          recipe?
        </h2>

        <div className='search'>
          <input type='text' placeholder='Search healthy recipes' />
          <button>
            <FaSearch />
          </button>
        </div>
      </SearchContainer>

      <BestRecipes>
        <div>
          <h2>Our Best Recipes</h2>
          <p>
            Far far away, behind the word mountains, far from the countries{' '}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className='grid'>
          <div>
            <Recipe image={Food1} title='Broccoli Salad with Bacon' />
            <Recipe image={Food2} title='Classic Beef Burgers' />
            <Recipe image={Food3} title='Classic Potato Salad' />
            <Recipe image={Food4} title='Cherry Gobble on the Grill' />
          </div>
        </div>
      </BestRecipes>

      <Services>
        <img src={serviceImage} alt='Services' />

        <div>
          <h2>
            The best services ready <br />
            To serve you
          </h2>

          <span>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </span>

          <button type='button'>Know More</button>
        </div>
      </Services>
    </Container>
  );
};
