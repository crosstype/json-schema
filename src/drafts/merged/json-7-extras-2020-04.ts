/**
 * JSON Schema 7 + TsExtras 2020-04
 */

import { validateJsonSchemaDraft, validateKeys, validateWide } from '../schema-draft';
import { JSON_7 } from '../json';
import { TsExtras_2020_04 } from '../ts-extras';
import { mergeDraftArrays, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */
/* Type-check the namespace */
// @formatter:off
type check =
  validateJsonSchemaDraft<typeof JSON_7_TsExtras_2020_04> |
  validateWide<typeof JSON_7_TsExtras_2020_04> |
  validateKeys<
    typeof JSON_7_TsExtras_2020_04,
    /* TRequiredKeys */ typeof JSON_7_TsExtras_2020_04.schemaKeys[number],
    /* TSchemaKeys */ keyof JSON_7_TsExtras_2020_04.JsonSchema
  >
// @formatter:on

export namespace JSON_7_TsExtras_2020_04 {
  export const title = 'JSON + TsExtras';
  export const version = '7 : 2020-04';
  export const URI = [
    'http://json-schema.org/draft-07/schema',
    '' // TODO - TBD
  ];

  /* ********************************************************* */
  // region: JSON
  /* ********************************************************* */

  export const primitiveTypeNames = JSON_7.primitiveTypeNames;
  export const typeNames = JSON_7.typeNames;

  export type PrimitiveTypeName = JSON_7.PrimitiveTypeName
  export type TypeName = JSON_7.TypeName
  export type JsonDefinition = boolean | JsonSchema

  /* Placeholders */
  export const PrimitiveTypeName = JSON_7.PrimitiveTypeName;
  export const TypeName = JSON_7.TypeName;
  export const JsonDefinition:JsonDefinition = TypeOnly;

  // endregion

  /* ********************************************************* */
  // region: TsExtras
  /* ********************************************************* */

  export const tsTypes = TsExtras_2020_04.tsTypes;
  export type TsType = TsExtras_2020_04.TsType;

  export type TypeParameter = TsExtras_2020_04.TypeParameter<JsonDefinition>;
  export type FunctionParameter = TsExtras_2020_04.FunctionParameter<JsonDefinition>;
  export type FunctionSignature = TsExtras_2020_04.FunctionSignature<JsonDefinition>;

  /* Placeholders */
  export const TsType = TsExtras_2020_04.TsType;
  export const TypeParameter = TsExtras_2020_04.TypeParameter;
  export const FunctionParameter = TsExtras_2020_04.FunctionParameter;
  export const FunctionSignature = TsExtras_2020_04.FunctionSignature;

  // endregion

  /* ********************************************************* */
  // region: Schema
  /* ********************************************************* */

  export const schemaKeys = mergeDraftArrays([ JSON_7, TsExtras_2020_04 ], 'schemaKeys');
  export interface JsonSchema extends JSON_7.JsonSchema, TsExtras_2020_04.MetaSchema<JsonDefinition> { }

  export const JsonSchema: JsonSchema = TypeOnly;

  // endregion
}
