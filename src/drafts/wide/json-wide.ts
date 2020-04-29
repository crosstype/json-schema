import { mergeArrays, TypeOnly } from '../schema-draft';
import { JsonSchemaDrafts } from '../../index';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

export namespace JsonSchemaWide {
  export const primitiveTypeNames =  mergeArrays(JsonSchemaDrafts, 'primitiveTypeNames');
  export const typeNames = mergeArrays(JsonSchemaDrafts, 'typeNames');

  export type PrimitiveTypeName = typeof primitiveTypeNames[number]
  export type TypeName = typeof typeNames[number];
  export type JsonDefinition = Schema | boolean

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;
  export const Schema: Schema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */

  export interface Schema extends JsonSchemaDrafts.Latest.Schema { }
}
