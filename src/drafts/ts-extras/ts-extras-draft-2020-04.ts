import { TypeOnly, validateTsExtrasDraft, validateWide } from '../schema-draft';
// noinspection ES6PreferShortImport
import { JsonWithExtrasWide } from '../../index';
import { RequireSome } from '../../helpers';


/* ****************************************************************************************************************** */
// Draft
/* ****************************************************************************************************************** */
/* Type-check the namespace against the JsonSchemaDraft interface */
type check = validateTsExtrasDraft<typeof Draft2020_04> | validateWide<typeof Draft2020_04>

export namespace Draft2020_04 {
  export const title = 'Ts-Extras';
  export const version = '2020_04';
  export const URI = ''; // TODO - TBD

  export const tsTypes = [ 'interface', 'class', 'type', 'function', 'method' ] as const;
  export type TsType = typeof tsTypes[number];

  export interface TypeParameter<TDefinition = JsonWithExtrasWide.JsonDefinition> {
    constraint?: TDefinition
    default?: TDefinition
    value?: TDefinition
  }

  export interface FunctionParameter<TDefinition = JsonWithExtrasWide.JsonDefinition> {
    name: string
    type: TDefinition
    optional?: boolean
  }

  export interface FunctionSignature<TDefinition = JsonWithExtrasWide.JsonDefinition> {
    name?: string
    parameters?: Array<FunctionParameter<TDefinition>>
    returnType?: TDefinition
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
  export interface Schema<TDefinition = JsonWithExtrasWide.JsonDefinition> {
    $tsType?: TsType

    /**
     * Array of references
     * Valid for:
     *   $tsType: 'interface' | 'class'
     */
    $heritageObjects?: Array<Partial<this>>

    /**
     * Values make use of and $extends, default, supplied value is in value root
     * Valid for:
     *   $tsType: 'interface' | 'class' | 'type' | 'function' | 'method'
     */
    $typeParameters?: Record<string, TypeParameter<TDefinition>>

    /**
     * Function signature
     * Valid for:
     *   $tsType: 'function' | 'method'
     */
    $functionSignature?: FunctionSignature<TDefinition>

    /**
     * Order of keys (properties & methods) in object
     * Valid for:
     *   $tsType: 'interface' | 'class'
     *   type: 'object'
     */
    keyOrder?: string[]

    /**
     *
     * Valid for:
     *   $tsType: 'interface' | 'class'
     *   type: 'object'
     */
    methods?: Record<string, RequireSome<this, '$functionSignature'> & { $tsType: 'method' }>
  }
}
