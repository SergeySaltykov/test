import { Tab } from '../ui/Tabs/Tabs';
import { addSlashConditional } from '../lib/utils';
import { ECocktailCode } from '../types';

export const tabsConfig: Tab[] = [
  {
    label: ECocktailCode.margarita,
    path: addSlashConditional(ECocktailCode.margarita),
  },
  {
    label: ECocktailCode.mojito,
    path: addSlashConditional(ECocktailCode.mojito),
  },
  {
    label: ECocktailCode.a1,
    path: addSlashConditional(ECocktailCode.a1),
  },
  {
    label: ECocktailCode.kir,
    path: addSlashConditional(ECocktailCode.kir),
  },
];
