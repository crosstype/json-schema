import * as JsonSchemaDrafts from './drafts/json'
import * as TsExtrasDrafts from './drafts/ts-extras'
import { JsonValue } from './basic-json';
import { JsonWithExtrasWide } from './drafts/wide';


/* ****************************************************************************************************************** *
 * Drafts & Basic Types
 * ****************************************************************************************************************** */

export * from './basic-json'
export * from './drafts/wide'
export { JsonSchemaDrafts, TsExtrasDrafts }


/* ****************************************************************************************************************** *
 * Unions
 * ****************************************************************************************************************** */

/**
 * Union of all JsonDefinition from Json Schema
 */
export type AnyJsonDefinition = typeof JsonSchemaDrafts[keyof typeof JsonSchemaDrafts]['JsonDefinition']
/**
 * Union of all JsonDefinition from Json Schema (includes all TsExtras)
 */
export type AnyJsonDefinitionWithExtras = Exclude<AnyJsonDefinition, AnyJsonSchema> | AnyJsonSchemaWithExtras

/**
 * Union of all Json Schema
 */
export type AnyJsonSchema = { [K in keyof typeof JsonSchemaDrafts]: typeof JsonSchemaDrafts[K]['Schema'] }[keyof typeof JsonSchemaDrafts]
/**
 * Union of all Json Schema (includes all TsExtras)
 */
export type AnyJsonSchemaWithExtras = {
  [K in keyof typeof JsonSchemaDrafts]: {
    [K2 in keyof typeof JsonSchemaDrafts[K]['SchemaWithExtras']]: typeof JsonSchemaDrafts[K]['SchemaWithExtras'][K2]
  }[keyof typeof JsonSchemaDrafts[K]['SchemaWithExtras']]
}[keyof typeof JsonSchemaDrafts]


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
