
/* ****************************************************************************************************************** *
 * Helpers
 * ****************************************************************************************************************** */

export type OneOrMore<T> = T | T[]
export type MergeUnions<U> = UnionToIntersection<Extract<U, Record<any, any>>> | Exclude<U, Record<any, any>>
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
