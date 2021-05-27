import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ScrollContainer from 'react-indiana-drag-scroll';
import { BlogTopic } from '../../components/BlogTopic';
import { Header } from '../../components/Header';
import { Recipe } from '../../components/Recipe';
import { images } from '../../services/images';
import {
  BeMember,
  BestRecipes,
  BlogPosts,
  Container,
  Footer,
  SearchContainer,
  Services,
} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <img src={images.Illustration} alt='Healthy Food' />
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
            <Recipe image={images.comida_1} title='Broccoli Salad with Bacon' />
            <Recipe image={images.comida_2} title='Classic Beef Burgers' />
            <Recipe image={images.comida_3} title='Classic Potato Salad' />
            <Recipe
              image={images.comida_4}
              title='Cherry Gobble on the Grill'
            />
          </div>
        </div>
      </BestRecipes>

      <Services>
        <img src={images.bloco_services} alt='Services' />

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

      <BlogPosts>
        <span>
          <h2>Read Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries{' '}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </span>
        <div>
          <ScrollContainer horizontal vertical={false} className='items'>
            <BlogTopic
              author_image={images.unknown_profile}
              author_name='Kevin Ibrahim'
              image={images.bloco_image_1}
              title='Quick-start guide to nuts and seeds'
            />
            <BlogTopic
              author_image={images.unknown_profile}
              author_name='Mike Jackson'
              image={images.bloco_image_2}
              title='Nutrition: Tips for Improving Your Health'
            />
            <BlogTopic
              author_image={images.unknown_profile}
              author_name='Bryan McGregor '
              image={images.bloco_image_3}
              title='The top 10 benefits of eating healthy'
            />
            <BlogTopic
              author_image={images.unknown_profile}
              author_name='Jashua'
              image={images.bloco_image_4}
              title='What Makes a Healthy Diet?'
            />
          </ScrollContainer>
          <div className='side' />
        </div>
      </BlogPosts>

      <BeMember>
        <h2>
          Join our membership <br />
          to get special offer
        </h2>

        <div className='email-container'>
          <input type='text' placeholder='Enter your email address' />
          <button>Join</button>
        </div>

        <img src={images.bloco_final_image} alt='Join our membership' />
      </BeMember>

      <Footer>
        <span>&copy; Copyrights 2019 Stack. All Rights Reserved.</span>

        <span className='links'>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Terms and conditions</a>
        </span>
      </Footer>
    </Container>
  );
};
