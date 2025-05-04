/**
 * @module interfaces/core/transforms
 */
import { ICommonBase } from '@app-mtc/interfaces/core/common';

/**
 * @name					ITransformSource
 *
 * @description		The interface for the 'source' param, which is directly referenced
 *                within {@link module:interfaces/core/transforms/ITransformInput}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformSource {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
