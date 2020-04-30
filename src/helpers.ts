import { JsonSchemaDraft, TsExtrasDraft } from './drafts/schema-draft';


/* ****************************************************************************************************************** */
// region: Type Helpers
/* ****************************************************************************************************************** */

export type OneOrMore<T> = T | T[]
export type GetValues<T> = { [K in keyof T]: T[K] }[keyof T]
export type RequireSome<T, K extends keyof T> = T & Pick<Required<T>, K>
export type GetProperty<T extends any, K extends any, K2 extends any = undefined> =
  K2 extends undefined ? T[K] : T[K][K2]

// endregion


/* ****************************************************************************************************************** */
// region: Constants
/* ****************************************************************************************************************** */

/**
 * Serves as placeholder value for type-only based draft namespaces (allows accessing types using typeof <draft>)
 */
export const TypeOnly: any = Symbol('Type Only (placeholder)');

// endregion


/* ****************************************************************************************************************** */
// region: Helper Functions
/* ****************************************************************************************************************** */

/**
 * Merge arrays from Drafts & output proper merged array type
 */
export function mergeDraftArrays<T extends (JsonSchemaDraft | TsExtrasDraft)[], TKey extends keyof T[number]>(drafts: T, key: TKey):
  ReadonlyArray<GetProperty<T[number], TKey, number>>
{
  return drafts.reduce((p, draft) => {
    const arr = (<any>draft)[key];
    if (!Array.isArray(arr))
      throw new Error(`Cannot merge arrays. Property ${key} on ${draft.title} draft is not an array!`);
    p.push(...arr);
    return p;
  }, <any[]>[]);
}

// endregion

