import { JsonSchemaDraft, TsExtrasDraft } from './drafts/schema-draft';
import { TsExtras_2020_04, JSON_7 } from '.';


/* ****************************************************************************************************************** */
// region: Type Helpers
/* ****************************************************************************************************************** */
// @formatter:off

export type OneOrMore<T> = T | T[]
export type GetValues<T> = { [K in keyof T]: T[K] }[keyof T]
export type RequireSome<T, K extends keyof T> = T & Pick<Required<T>, K>
export type GetKeysOfType<T, TType> = { [K in keyof T]: T[K] extends TType ? K : never }[keyof T]

// @formatter:on
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
// @formatter:off

/**
 * Merge arrays from Drafts & output proper merged array type
 */
export function mergeDraftArrays<
  T extends Record<string, any>[],
  TKey extends GetKeysOfType<T[number], readonly any[] | any[]>
>
(drafts: T, key: TKey): ReadonlyArray<T[number][TKey][number]>
{
  return drafts.reduce((p, draft) => {
    const arr = (<any>draft)[key];
    if (!Array.isArray(arr))
      throw new Error(`Cannot merge arrays. Property ${key} on ${draft.title} draft is not an array!`);
    p.push(...arr);
    return p;
  }, <any[]>[]) as any[];
}

// @formatter:on
// endregion

