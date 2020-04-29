import { mergeArrays, TypeOnly } from '../schema-draft';
import { TsExtrasDrafts } from '../../';


/* ****************************************************************************************************************** */
// Wide Draft
/* ****************************************************************************************************************** */

export namespace TsExtrasWide {
  export const tsTypes = mergeArrays(TsExtrasDrafts, 'tsTypes');
  export type TsType = typeof tsTypes[number];

  export interface TypeParameter extends TsExtrasDrafts.Latest.TypeParameter {}
  export interface FunctionParameter extends TsExtrasDrafts.Latest.FunctionSignature {}
  export interface FunctionSignature extends TsExtrasDrafts.Latest.FunctionParameter {}

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const TsType: TsType = TypeOnly;
  export const TypeParameter: TypeParameter = TypeOnly;
  export const FunctionParameter: FunctionParameter = TypeOnly;
  export const FunctionSignature: FunctionSignature = TypeOnly;
  export const Schema: Schema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */
  export interface Schema extends TsExtrasDrafts.Latest.Schema {}
}
