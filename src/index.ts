import * as JsonSchemaDrafts from './drafts/json'
import * as JsonWithExtrasDrafts from './drafts/merged'
import * as TsExtrasDrafts from './drafts/ts-extras'
import { JsonValue } from './basic-json';
import { JsonWithExtrasWide } from './wide';


/* ****************************************************************************************************************** *
 * Drafts & Basic Types
 * ****************************************************************************************************************** */

export * from './basic-json'
export * from './wide'
export * from './drafts'
export { JsonSchemaDrafts, TsExtrasDrafts, JsonWithExtrasDrafts }
export * as Drafts from './drafts'


/* ****************************************************************************************************************** *
 * Unions
 * ****************************************************************************************************************** */

/**
 * Union of all JsonDefinition from Json Schema
 */
export type AnyJsonSchemaDefinition = typeof JsonSchemaDrafts[keyof typeof JsonSchemaDrafts]['JsonDefinition']

/**
 * Union of all JsonDefinition from Json Schema (includes all TsExtras)
 */
export type AnyJsonWithExtrasDefinition = Exclude<AnyJsonSchemaDefinition, AnyJsonSchema> | AnyJsonWithExtrasSchema

/**
 * Union of all Json Schema
 */
export type AnyJsonSchema = { [K in keyof typeof JsonSchemaDrafts]: typeof JsonSchemaDrafts[K]['JsonSchema'] }[keyof typeof JsonSchemaDrafts]

/**
 * Union of all Json Schema (includes all TsExtras)
 */
export type AnyJsonWithExtrasSchema =
  { [K in keyof typeof JsonWithExtrasDrafts]: typeof JsonWithExtrasDrafts[K]['JsonSchema'] }[keyof typeof JsonWithExtrasDrafts]


/* ****************************************************************************************************************** *
 * Utilities
 * ****************************************************************************************************************** */

/**
 * Allow additional properties on TSchema, provided their values are valid JSON values
 * @param TSchema Schema or JsonDefinition
 * @param TDefinition Optionally override Definition type
 */
export type OpenJsonSchema<TSchema, TDefinition = JsonWithExtrasWide.JsonDefinition> =
  TSchema extends boolean ? TSchema :
  TSchema & { [k: string]: TDefinition | JsonValue }
