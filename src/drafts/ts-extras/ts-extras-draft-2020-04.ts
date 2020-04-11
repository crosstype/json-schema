import { TypeOnly, validateTsExtrasDraft } from '../schema-draft';
import { WideJsonDefinitionWithExtras } from '../../index';


/* ****************************************************************************************************************** */
// Draft
/* ****************************************************************************************************************** */
/* Type-check the namespace against the JsonSchemaDraft interface */
type check = validateTsExtrasDraft<typeof Draft2020_04>

export namespace Draft2020_04 {
  export const title = 'Ts-Extras';
  export const version = '2020_04';
  export const URI = ''; // TODO - TBD

  export const tsTypes = [ 'interface', 'class', 'object', 'type', 'method', 'function' ] as const;

  export type TsType = typeof tsTypes[number];

  export interface TypeParameter<TDefinition = WideJsonDefinitionWithExtras> {
    constraint?: TDefinition
    default?: TDefinition
    value?: TDefinition
  }

  export interface FunctionParameter<TDefinition = WideJsonDefinitionWithExtras> {
    name?: string
    type: TDefinition
    optional?: boolean
  }

  export interface FunctionSignature<TDefinition = WideJsonDefinitionWithExtras> {
    name?: string
    parameters: Array<FunctionParameter<TDefinition>>
    returnType: TDefinition
    restParameter?: FunctionParameter<TDefinition>
  }

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
  export interface Schema<TDefinition = WideJsonDefinitionWithExtras> {
    $tsType?: TsType

    /**
     * $tsType: 'interface' | 'class'
     * Array of references
     */
    $heritageObjects?: Array<this>

    /**
     * $tsType: 'interface' | 'class' | 'object' | 'type' | 'method' | 'function'
     * Values make use of and $extends, default, supplied value is in value root
     */
    $typeParameters?: Record<string, TypeParameter<TDefinition>>

    /**
     * $tsType: 'method' | 'function'
     */
    $functionSignature?: FunctionSignature<TDefinition>

    /**
     * 'object' type
     * Keys (properties & methods) in object
     */
    keyOrder?: string[]

    /**
     * 'object' type
     * Keys (properties & methods) in object
     */
    methods?: Record<string, this & Pick<Required<this>, '$functionSignature'> & { $tsType: 'method' }>
  }
}
