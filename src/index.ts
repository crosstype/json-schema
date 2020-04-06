import { JsonSchema_7, JsonSchemaDraft_7 } from './drafts/json/json-draft-07'
import { JsonSchema_2019_09, JsonSchemaDraft_2019_09 } from './drafts/json/json-draft-2019-09'
import { TsExtras_2020_04, TsExtrasDraft_2020_04 } from './drafts/ts-extras/ts-extras-draft-2020-04'
import { DraftCollection, IJsonSchemaDraft } from './drafts/schema-draft';
import { JsonValue } from './basic-json';


/* ****************************************************************************************************************** *
 * Basic JSON Types
 * ****************************************************************************************************************** */
export * from './basic-json'


/* ****************************************************************************************************************** *
 * Drafts
 * ****************************************************************************************************************** */

export abstract class JsonSchemaDraft implements DraftCollection {
  ['7'] = JsonSchemaDraft_7.prototype;
  ['2019_09'] = JsonSchemaDraft_2019_09.prototype;
  ['latest'] = JsonSchemaDraft_2019_09.prototype;
}

export abstract class TsExtrasDraft<TBaseDraft extends IJsonSchemaDraft = WideJsonSchemaDraft> implements DraftCollection {
  ['2020_04'] = TsExtrasDraft_2020_04.prototype;
  ['latest'] = TsExtrasDraft_2020_04.prototype;
}

/**
 * Wide JSON Schema Draft (union of all drafts)
 */
export type WideJsonSchemaDraft = JsonSchemaDraft[keyof JsonSchemaDraft]

/**
 * Wide Ts-Extras Draft (union of all drafts)
 */
export type WideTsExtrasDraft = TsExtrasDraft[keyof TsExtrasDraft]


/* ****************************************************************************************************************** *
 * Schema
 * ****************************************************************************************************************** */

/* ********************************************************* *
 * Merged
 * ********************************************************* */

export interface JsonSchema_7_Extras_2020_04 extends JsonSchema_7, TsExtras_2020_04<JsonSchemaDraft_7> { }

export interface JsonSchema_2019_09_Extras_2020_04 extends JsonSchema_2019_09, TsExtras_2020_04<JsonSchemaDraft_2019_09> { }

/* ********************************************************* *
 * Wide
 * ********************************************************* */

/**
 *  Wide JSON Schema (intersection of all drafts)
 */
export type WideJsonSchema = JsonSchema_7 & JsonSchema_2019_09

/**
 *  Wide JSON Schema with TsExtras meta-schema (intersection of all drafts)
 */
export type WideJsonSchemaWithExtras = JsonSchema_7_Extras_2020_04 & JsonSchema_2019_09_Extras_2020_04

/**
 * Wide JSON Definition (union from all drafts)
 */
export type WideJsonDefinition = WideJsonSchemaDraft['JsonDefinition']

/* ********************************************************* *
 * Open
 * ********************************************************* */

/**
 * Wide JSON Schema (intersection of all drafts) - Allows additional valid JSON fields
 */
export type WideJsonSchemaOpen = WideJsonSchema & { [k: string]: WideJsonDefinition | JsonValue }

/**
 * Wide JSON Schema with TsExtras meta-schema (intersection of all drafts) - Allows additional valid JSON fields
 */
export type WideJsonSchemaWithExtrasOpen = WideJsonSchema & { [k: string]: WideJsonDefinition | JsonValue }
