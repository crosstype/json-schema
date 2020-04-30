import { JsonWithExtrasWide } from '../index';


/* ****************************************************************************************************************** */
// region: Helpers & Constants
/* ****************************************************************************************************************** */

/* The following types are used simply to provide type-checker diagnostics if namespace violates the interface structure */
export type validateJsonSchemaDraft<T extends JsonSchemaDraft> = T
export type validateTsExtrasDraft<T extends TsExtrasDraft> = T
export type validateWide<T extends Partial<typeof JsonWithExtrasWide>> = T
export type validateKeys<
  T extends SchemaDraft,
  /* No outside keys in schemaKeys */
  TKeysOfSchemaKeys extends T extends JsonSchemaDraft ? keyof T['JsonSchema'] : keyof T['MetaSchema'],
  /* Schema has all schemaKeys */
  TKeysOfSchema extends TKeysOfSchemaKeys
> = T

// endregion


/* ****************************************************************************************************************** */
// region: Base Interfaces
/* ****************************************************************************************************************** */

export type SchemaDraft = {
  title: string
  version: string
  URI: string | string[]
  JsonSchema?: any
  MetaSchema?: any
}

export interface JsonSchemaDraft extends SchemaDraft {
  typeNames: readonly string[]
  primitiveTypeNames: readonly string[]
  schemaKeys: readonly string[]

  /**
   * Type Only
   */
  PrimitiveTypeName: string
  TypeName: string
  JsonDefinition: any
  JsonSchema: any
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
  MetaSchema: any
}

// endregion
