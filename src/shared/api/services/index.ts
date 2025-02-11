import { normalizeData, resetData } from '../normalize/data';
import { getDrinks } from './urls';
import { INormalizeData, IResetData, ResponseDrinks } from '../types';
import { ECocktailCode } from '../../types';

// async await
export const fetchGetDrinks = async (
  code: ECocktailCode,
  signal?: AbortSignal,
): Promise<INormalizeData<ResponseDrinks> | IResetData<ResponseDrinks>> => {
  const controller = new AbortController();
  const abortSignal = signal || controller.signal;

  try {
    const url = getDrinks(code);
    const response = await fetch(url, { signal: abortSignal });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const { drinks } = await response.json();

    if (!drinks) {
      return resetData();
    }

    return normalizeData(drinks, 'idDrink');
  } catch (error: any) {
    console.error(error);
    return { ...resetData(), error };
  } finally {
    controller.abort();
  }
};

// или через then catch. без раницы это всеголишь обертки
// export const fetchGetDrinks = async (code: ECocktailCode): Promise<INormalizeData<ResponseDrinks>|{list: [], data: {}}> => {
//     return fetch(getDrinks(code))
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(`Error status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then(({ drinks }) => {
//             return normalizeData(drinks, 'idDrink');
//         })
//         .catch((error) => {
//             console.error(error);
//             return {
//                list: [],
//                data: {},
//         };
//         });
// }
