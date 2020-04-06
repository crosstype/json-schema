import { NullableJsonObject } from '../basic-json';


/* ****************************************************************************************************************** */
// region: Base Interfaces
/* ****************************************************************************************************************** */

interface SchemaDraft {
  title: string
  version: string
  URI: string

  /**
   * Type Only
   */
  Schema: any
}

export interface IJsonSchemaDraft extends SchemaDraft {
  typeNames: readonly string[]
  primitiveTypeNames: readonly string[]

  /**
   * Type Only
   */
  PrimitiveTypeName: string
  TypeName: string
  JsonDefinition: any
}

export interface ITsExtrasDraft extends SchemaDraft {
  tsTypes: readonly string[]

  /**
   * Type Only
   */
  TsType: string
  TypeParameter: NullableJsonObject
  FunctionParameter: NullableJsonObject
  FunctionSignature: NullableJsonObject
}

export interface DraftCollection {
  [p:string]: any
  latest: any
}

// endregion
