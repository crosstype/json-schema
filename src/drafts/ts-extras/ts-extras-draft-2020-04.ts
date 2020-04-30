import { validateKeys, validateTsExtrasDraft, validateWide } from '../schema-draft';
import { JsonWithExtrasWide } from '../../index';
import { RequireSome, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** */
// Draft
/* ****************************************************************************************************************** */
/* Type-check the namespace */
type check =
  validateTsExtrasDraft<typeof TsExtras_2020_04> |
  validateWide<typeof TsExtras_2020_04> |
  validateKeys<
    typeof TsExtras_2020_04,
    typeof TsExtras_2020_04.schemaKeys[number],  // No outside keys in schemaKeys
    keyof typeof TsExtras_2020_04.MetaSchema     // Schema has all schemaKeys
  >

export namespace TsExtras_2020_04 {
  export const title = 'TsExtras';
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
  export const MetaSchema: MetaSchema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */
  export const schemaKeys = [
    '$functionSignature', '$heritageObjects', '$tsType', '$typeParameters', 'keyOrder', 'methods'
  ] as const;

  export interface MetaSchema<TDefinition = JsonWithExtrasWide.JsonDefinition> {
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
