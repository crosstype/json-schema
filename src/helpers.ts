
/* ****************************************************************************************************************** *
 * Helpers
 * ****************************************************************************************************************** */

export type OneOrMore<T> = T | T[]
export type RequireSome<T, K extends keyof T> = T & Pick<Required<T>, K>
export type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };
