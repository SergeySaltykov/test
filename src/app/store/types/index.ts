import { ECocktailCode } from '../../../shared/types';

export interface IUseCocktailsState {
  idLists: any;
  data: any;
  loading: boolean;
  error: string | null;
  getCocktail: (query: ECocktailCode, signal?: AbortSignal) => void;
}
