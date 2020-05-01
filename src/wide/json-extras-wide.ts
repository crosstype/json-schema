/**
 * Wide compilation of JSON and TsExtras Drafts (includes all possible fields and values, including deprecated, so any draft should match)
 */

import { GetValues, mergeDraftArrays, TypeOnly } from '../helpers';
import {
  JSON_2019_09, JsonSchemaDrafts, JsonSchemaWide, JsonWithExtrasDrafts, TsExtras_2020_04, TsExtrasDrafts, TsExtrasWide
} from '../index';


/* ****************************************************************************************************************** *
 * Config
 * ****************************************************************************************************************** */

const AllDraftsArray: Array<GetValues<typeof TsExtrasDrafts> | GetValues<typeof JsonSchemaDrafts>> =
  [ ...Object.values(TsExtrasDrafts), ...Object.values(JsonSchemaDrafts) ];


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

export namespace JsonWithExtrasWide {
  /* ********************************************************* */
  // region: JSON Schema Fields
  /* ********************************************************* */

  export const primitiveTypeNames = JsonSchemaWide.primitiveTypeNames;
  export const typeNames = JsonSchemaWide.typeNames;

  export type PrimitiveTypeName = JsonSchemaWide.PrimitiveTypeName;
  export type TypeName = JsonSchemaWide.TypeName;
  export type JsonDefinition =
    { [K in keyof typeof JsonWithExtrasDrafts]: (typeof JsonWithExtrasDrafts)[K]['JsonDefinition'] }[keyof typeof JsonWithExtrasDrafts]

  /* Placeholders */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;

  // endregion

  /* ********************************************************* */
  // region: TS Extras Fields
  /* ********************************************************* */

  export const tsTypes = TsExtrasWide.tsTypes;
  export type TsType = TsExtrasWide.TsType;

  export type TypeParameter = TsExtrasWide.TypeParameter;
  export type FunctionParameter = TsExtrasWide.FunctionParameter;
  export type FunctionSignature = TsExtrasWide.FunctionSignature;

  /* Placeholders */
  export const TsType = TsExtrasWide.TsType;
  export const TypeParameter = TsExtrasWide.TypeParameter;
  export const FunctionParameter = TsExtrasWide.FunctionParameter;
  export const FunctionSignature = TsExtrasWide.FunctionSignature;

  // endregion

  /* ********************************************************* *
   * Schema
   * ********************************************************* */

  export const schemaKeys = mergeDraftArrays(AllDraftsArray, 'schemaKeys');
  export interface JsonSchema extends JSON_2019_09.JsonSchema, TsExtras_2020_04.MetaSchema<JsonDefinition> { }

  export const JsonSchema: JsonSchema = TypeOnly;
}
