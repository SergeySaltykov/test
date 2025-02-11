import { ICocktails, TGetDataWithIngredients, TIngredients } from '../types';

export const transformCocktails = (data: any): TIngredients => {
  const map = new Map<ICocktails['ingredient'], ICocktails['measure']>();

  // Бесконечный цикл, прерывающийся при отсутствии данных (либо while (true) c count = 1 count++)
  for (let i = 1; ; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = data[ingredientKey];
    const measure = data[measureKey];

    if (ingredient) {
      const existMeasure = map.get(ingredient);
      if (existMeasure) {
        map.set(ingredient, existMeasure + ', ' + measure);
      } else {
        map.set(ingredient, measure);
      }
    } else {
      break; // Выходим из цикла, если нет measure
    }
  }

  return Array.from(map);
};

//  получилось немного не универсально, поэтому пускай лежит тут*/
export const getData = <T extends Record<string, any>>(list: T[], uniqIdKey: keyof T): TGetDataWithIngredients<T> => {
  return list.reduce((res: TGetDataWithIngredients<T>, cur: T) => {
    const id = cur[uniqIdKey] as string;
    res[id] = {
      ...cur,
      ingredients: transformCocktails(cur),
    };

    return res;
  }, {} as TGetDataWithIngredients<T>);
};
