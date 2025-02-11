import { TGetLIst } from '../../types';

export interface ResponseDrinks {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: any;
}

export interface ICocktails {
  ingredient: string;
  measure: string;
}

export type TIngredients = [ICocktails['ingredient'], ICocktails['measure']][];
export type TGetData<T> = Record<string, T>;
export type TGetDataWithIngredients<T> = TGetData<T> & { ingredients: TIngredients };
export type TError = string | null;

export interface INormalizeData<T> {
  list: TGetLIst;
  data: TGetDataWithIngredients<T>;
  error: TError;
}

export interface IResetData<T> {
  list: TGetLIst;
  data: TGetData<T>;
  error: TError;
}
