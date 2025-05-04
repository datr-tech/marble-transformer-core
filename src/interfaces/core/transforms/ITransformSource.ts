import { ICommonBase } from '@app-mtc/interfaces/core/common';

export interface ITransformSource {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
