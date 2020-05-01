import { validateKeys, validateTsExtrasDraft, validateWide } from '../schema-draft';
import { JsonWithExtrasWide } from '../../index';
import { RequireSome, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** */
// Draft
/* ****************************************************************************************************************** */
/* Type-check the namespace */
// @formatter:off
type check =
  validateTsExtrasDraft<typeof TsExtras_2020_04> |
  validateWide<typeof TsExtras_2020_04> |
  validateKeys<
    typeof TsExtras_2020_04,
    /* TRequiredKeys */ Exclude<typeof TsExtras_2020_04.schemaKeys[number], keyof TsExtras_2020_04.Base>,
    /* TSchemaKeys */ Exclude<keyof TsExtras_2020_04.MetaSchema, keyof TsExtras_2020_04.Base>
  >
// @formatter:on

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
  /* @internal */
  export const Base: Base = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */
  export const schemaKeys = [
    '$functionSignature', '$heritageObjects', '$tsType', '$typeParameters', 'keyOrder', 'methods'
  ] as const;

  /* @internal */
  export interface Base {
    $ref?: string
  }

  export interface MetaSchema<TDefinition = JsonWithExtrasWide.JsonDefinition> extends Base {
    /**
     * TypeScript originating Type ('interface' | 'class' | 'type' | 'function' | 'method')
     */
    $tsType?: TsType

    /**
     * Array of references
     * Valid for:
     *   $tsType: 'interface' | 'class'
     */
    $heritageObjects?: Array<RequireSome<Partial<this>, '$ref'>>

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
    methods?: Record<string, RequireSome<Partial<this>, '$functionSignature'> & { $tsType: 'method' }>
  }
}
