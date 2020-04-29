import { mergeArrays, TypeOnly } from '../schema-draft';
import { JsonSchemaDrafts, TsExtrasDrafts } from '../../index';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

export namespace JsonWithExtrasWide {
  /* ********************************************************* */
  // region: JSON Schema Fields
  /* ********************************************************* */

  export const primitiveTypeNames =  mergeArrays(JsonSchemaDrafts, 'primitiveTypeNames');
  export const typeNames = mergeArrays(JsonSchemaDrafts, 'typeNames');

  export type PrimitiveTypeName = typeof primitiveTypeNames[number]
  export type TypeName = typeof typeNames[number];
  export type JsonDefinition = Schema | boolean

  /* Placeholders */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;

  // endregion

  /* ********************************************************* */
  // region: TS Extras Fields
  /* ********************************************************* */

  export const tsTypes = mergeArrays(TsExtrasDrafts, 'tsTypes');
  export type TsType = typeof tsTypes[number];

  export interface TypeParameter extends TsExtrasDrafts.Latest.TypeParameter {}
  export interface FunctionParameter extends TsExtrasDrafts.Latest.FunctionParameter {}
  export interface FunctionSignature extends TsExtrasDrafts.Latest.FunctionSignature {}

  /* Placeholders */
  export const TsType: TsType = TypeOnly;
  export const TypeParameter: TypeParameter = TypeOnly;
  export const FunctionParameter: FunctionParameter = TypeOnly;
  export const FunctionSignature: FunctionSignature = TypeOnly;
  export const Schema: Schema = TypeOnly;

  // endregion

  /* ********************************************************* *
   * Schema
   * ********************************************************* */

  export interface Schema extends JsonSchemaDrafts.Latest.SchemaWithExtras.Latest { }
}
