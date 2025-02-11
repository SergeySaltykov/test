import { FC, memo } from 'react';

import { useCocktailsStore } from '../../../app/store/store.ts';
import LazyImg from './component/LazyImg/LazyImg.tsx';
import './styled.scss';

interface ICardProps {
  id: string;
}

const Card: FC<ICardProps> = memo(({ id }) => {
  const card = useCocktailsStore((state) => state.data[id]);

  const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, ingredients, strDrinkThumb } = card;

  return (
    <div className="card">
      <div className="card-description">
        <div className="card-container">
          <h2>{strDrink}</h2>
          <div className="card-category">
            <span>{strCategory}</span>
            <span>{strAlcoholic}</span>
            <span>{strGlass}</span>
            <span>Instructions:</span>
            <span>{strInstructions}</span>
          </div>
        </div>
        <LazyImg src={strDrinkThumb} placeholder={strDrink} />
      </div>
      <div className="card-ingredients">
        <span className="card-ingredients-header">List of ingredients:</span>
        {ingredients.map(([ingredient, measure]: [string, string], index: number) => {
          return (
            <div key={`${ingredient}_${index}`}>
              {ingredient && <span>{ingredient}</span>}&nbsp;
              {measure && <span>{measure}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Card;
