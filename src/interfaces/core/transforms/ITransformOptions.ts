/**
 * @module interfaces/core/transforms
 */
import { ICommonBase } from '@app-mtc/interfaces/core/common';

/**
 * @name					ITransformOptions
 *
 * @description		The interface for the 'options' param, which is directly referenced
 *                within {@link module:interfaces/core/transforms/ITransformInput}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformOptions {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
