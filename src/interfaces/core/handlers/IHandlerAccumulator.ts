import { ICommonBase } from '@app-mtc/interfaces/core/common';

export interface IHandlerAccumulator {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
