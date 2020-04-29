import { JsonWithExtrasWide, TsExtrasDrafts } from '../index';
import { Mutable } from '../helpers';


/* ****************************************************************************************************************** */
// region: Helpers & Constants
/* ****************************************************************************************************************** */

/**
 * Serves as placeholder value for type-only based draft namespaces (allows accessing types using typeof <draft>)
 */
export const TypeOnly: any = Symbol('Type Only (placeholder)');

/* The following types are used simply to provide type-checker diagnostics if namespace violates the interface structure */
export type validateJsonSchemaDraft<T extends JsonSchemaDraft> = T
export type validateTsExtrasDraft<T extends TsExtrasDraft> = T
export type validateWide<T extends Partial<typeof JsonWithExtrasWide>> = T

/**
 * Merge arrays from draftSet & output proper merged array type
 */
export function mergeArrays<T extends { [p: string]: { [p: string]: any } }, TKey extends string>(draftSet: T, key: TKey):
  ReadonlyArray<{ [K in keyof T]: Mutable<T[K][TKey]> }[keyof T][number]>
{
  return Object.values(draftSet).reduce((p, draft) => {
    p.push(...draft[key]);
    return p;
  }, []) as any[];
}

// endregion


/* ****************************************************************************************************************** */
// region: Base Interfaces
/* ****************************************************************************************************************** */

export interface SchemaDraft {
  title: string
  version: string
  URI: string

  /**
   * Type Only
   */
  Schema: any
}

export interface JsonSchemaDraft extends SchemaDraft {
  typeNames: readonly string[]
  primitiveTypeNames: readonly string[]
  SchemaWithExtras: Record<keyof typeof TsExtrasDrafts, any>

  /**
   * Type Only
   */
  PrimitiveTypeName: string
  TypeName: string
  JsonDefinition: any
}

export interface TsExtrasDraft extends SchemaDraft {
  tsTypes: readonly string[]

  /**
   * Type Only
   */
  TsType: string
  TypeParameter: object
  FunctionParameter: object
  FunctionSignature: object
}

// endregion
