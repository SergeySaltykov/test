import { ECocktailCode } from '../../types';

export const getDrinks = (code: ECocktailCode) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`;
