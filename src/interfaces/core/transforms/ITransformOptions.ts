import { ICommonBase } from '@app-mtc/interfaces/core/common';

export interface ITransformOptions {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
