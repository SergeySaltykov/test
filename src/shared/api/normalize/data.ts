import { getData } from '../utils';
import { getList } from '../../lib/utils';
import { INormalizeData, IResetData, ResponseDrinks } from '../types';

export const normalizeData = <T extends Record<string, any>>(list: T[], uniqIdKey: keyof T): INormalizeData<T> => ({
  list: getList(list, uniqIdKey),
  data: getData(list, uniqIdKey),
  error: null,
});

export const resetData = (): IResetData<ResponseDrinks> => ({
  list: [],
  data: {},
  error: null,
});
