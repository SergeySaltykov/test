import { create } from 'zustand';
import { IUseCocktailsState } from './types';
import { fetchGetDrinks } from '../../shared/api/services';
import { ECocktailCode } from '../../shared/types';

export const useCocktailsStore = create<IUseCocktailsState>((set) => ({
  idLists: {},
  data: {},
  loading: false,
  error: null,
  getCocktail: async (code: ECocktailCode, signal?: AbortSignal) => {
    set({ loading: true });

    try {
      const { list, data, error } = await fetchGetDrinks(code, signal);

      set((state) => {
        return {
          idLists: {
            ...state.idLists,
            [code]: list,
          },
          data: {
            ...state.data,
            ...data,
          },
          error,
        };
      });
    } catch (e: any) {
      console.error(e);
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
