/**
 * Wide compilation of JSON Drafts (includes all possible fields and values, including deprecated, so any draft should
 * match)
 */

import { GetValues, mergeDraftArrays, TypeOnly } from '../helpers';
import { JsonSchemaDrafts } from '../index';


/* ****************************************************************************************************************** *
 * Config
 * ****************************************************************************************************************** */

const JsonDraftsArray: Array<GetValues<typeof JsonSchemaDrafts>> = Object.values(JsonSchemaDrafts);


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

export namespace JsonSchemaWide {
  export const primitiveTypeNames =  mergeDraftArrays(JsonDraftsArray, 'primitiveTypeNames');
  export const typeNames = mergeDraftArrays(JsonDraftsArray, 'typeNames');

  export type PrimitiveTypeName = typeof primitiveTypeNames[number]
  export type TypeName = typeof typeNames[number];
  export type JsonDefinition =
    { [K in keyof typeof JsonSchemaDrafts]: (typeof JsonSchemaDrafts)[K]['JsonDefinition'] }[keyof typeof JsonSchemaDrafts]

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;
  export const JsonSchema: JsonSchema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */
  export const schemaKeys = mergeDraftArrays(JsonDraftsArray, 'schemaKeys');
  export type JsonSchema = JsonSchemaDrafts.JSON_Latest.JsonSchema
}
