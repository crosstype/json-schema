/**
 * Wide compilation of TsExtras Drafts (includes all possible fields and values, including deprecated, so any draft
 * should match)
 */

import { TsExtrasDrafts, TsExtras_2020_04 } from '../index';
import { GetValues, mergeDraftArrays, TypeOnly } from '../helpers';


/* ****************************************************************************************************************** *
 * Config
 * ****************************************************************************************************************** */

const TsExtrasDraftsArray: Array<GetValues<typeof TsExtrasDrafts>> = Object.values(TsExtrasDrafts);


/* ****************************************************************************************************************** */
// Wide Draft
/* ****************************************************************************************************************** */

export namespace TsExtrasWide {
  export const tsTypes = mergeDraftArrays(TsExtrasDraftsArray, 'tsTypes');
  export type TsType = typeof tsTypes[number];

  export type TypeParameter = TsExtras_2020_04.TypeParameter
  export type FunctionParameter = TsExtras_2020_04.FunctionParameter
  export type FunctionSignature = TsExtras_2020_04.FunctionSignature

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const TsType: TsType = TypeOnly;
  export const TypeParameter: TypeParameter = TypeOnly;
  export const FunctionParameter: FunctionParameter = TypeOnly;
  export const FunctionSignature: FunctionSignature = TypeOnly;
  export const MetaSchema: MetaSchema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */

  export const schemaKeys = mergeDraftArrays(TsExtrasDraftsArray, 'schemaKeys');
  export type MetaSchema = TsExtras_2020_04.MetaSchema
}
