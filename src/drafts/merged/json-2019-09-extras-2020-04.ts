/**
 * JSON Schema 2019-09 + TsExtras 2020-04
 */

import { validateJsonSchemaDraft, validateKeys, validateWide } from '../schema-draft';
import { JSON_2019_09 } from '../json';
import { TsExtras_2020_04 } from '../ts-extras';
import { mergeDraftArrays, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */
/* Type-check the namespace */
// @formatter:off
type check =
  validateJsonSchemaDraft<typeof JSON_2019_09_TsExtras_2020_04> |
  validateWide<typeof JSON_2019_09_TsExtras_2020_04> |
  validateKeys<
    typeof JSON_2019_09_TsExtras_2020_04,
    /* TRequiredKeys */ typeof JSON_2019_09_TsExtras_2020_04.schemaKeys[number],
    /* TSchemaKeys */ keyof JSON_2019_09_TsExtras_2020_04.JsonSchema
  >
// @formatter:on

export namespace JSON_2019_09_TsExtras_2020_04 {
  export const title = 'JSON + TsExtras';
  export const version = '2019-09 : 2020-04';
  export const URI = [
    'http://json-schema.org/draft/2019-09/schema',
    '' // TODO - TBD
  ];

  /* ********************************************************* */
  // region: JSON
  /* ********************************************************* */

  export const primitiveTypeNames = JSON_2019_09.primitiveTypeNames;
  export const typeNames = JSON_2019_09.typeNames;

  export type PrimitiveTypeName = JSON_2019_09.PrimitiveTypeName
  export type TypeName = JSON_2019_09.TypeName
  export type JsonDefinition = boolean | JsonSchema

  /* Placeholders */
  export const PrimitiveTypeName = JSON_2019_09.PrimitiveTypeName;
  export const TypeName = JSON_2019_09.TypeName;
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

  export const schemaKeys = mergeDraftArrays([ JSON_2019_09, TsExtras_2020_04 ], 'schemaKeys');
  export interface JsonSchema extends JSON_2019_09.JsonSchema, TsExtras_2020_04.MetaSchema<JsonDefinition> { }

  export const JsonSchema: JsonSchema = TypeOnly;

  // endregion
}
