import { TGetLIst } from '../../types';

export const getList = <T extends Record<string, any>>(list: T[], uniqIdKey: keyof T): TGetLIst => list.map((item) => item[uniqIdKey]);
