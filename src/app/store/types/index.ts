import { ECocktailCode } from '../../../shared/types';

export interface IUseCocktailsState {
    idLists: any,
    data: any,
    loading: boolean,
    error: null; // дописать
    getCocktail: (query: ECocktailCode, signal?: AbortSignal) => void
}
