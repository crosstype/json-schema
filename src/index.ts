import * as JsonSchema from './drafts/json'
import * as TsExtras from './drafts/ts-extras'
import { JsonValue } from './basic-json';


/* ****************************************************************************************************************** *
 * Drafts & Types
 * ****************************************************************************************************************** */
export * from './basic-json'

export { JsonSchema, TsExtras }

export type WideJsonDefinition = typeof JsonSchema[keyof typeof JsonSchema]['JsonDefinition']
export type WideJsonDefinitionWithExtras = Exclude<WideJsonDefinition, WideJsonSchema> | WideJsonSchemaWithExtras

export type WideJsonSchema = { [K in keyof typeof JsonSchema]: typeof JsonSchema[K]['Schema'] }[keyof typeof JsonSchema]
export type WideJsonSchemaWithExtras = {
  [K in keyof typeof JsonSchema]: {
    [K2 in keyof typeof JsonSchema[K]['SchemaWithExtras']]: typeof JsonSchema[K]['SchemaWithExtras'][K2]
  }[keyof typeof JsonSchema[K]['SchemaWithExtras']]
}[keyof typeof JsonSchema]


/* ****************************************************************************************************************** *
 * Utilities
 * ****************************************************************************************************************** */
/**
 * Allow additional properties on TSchema, provided their values are valid JSON values
 * @param TSchema Schema or JsonDefinition
 * @param TDefinition Optionally override Definition type
 */
export type OpenJsonSchema<TSchema, TDefinition = WideJsonDefinitionWithExtras> =
  TSchema extends boolean ? TSchema :
  TSchema & { [k: string]: TDefinition | JsonValue }
