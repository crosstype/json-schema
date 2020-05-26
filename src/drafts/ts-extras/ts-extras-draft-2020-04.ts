import { validateKeys, validateTsExtrasDraft, validateWide } from '../schema-draft';
import { JsonWithExtrasWide } from '../../index';
import { OneOrMore, RequireSome, TypeOnly } from '../../helpers';


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

  /**
   * Root TypeScript definition types
   */
  export const tsTypes = [ 'interface', 'class', 'type', 'function', 'enum' ] as const;
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
    $typeParameters?: MetaSchema<TDefinition>['$typeParameters']
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
    '$functionSignature', '$callSignature', '$constructSignature', '$heritageObjects', '$tsType', '$typeParameters',
    'keyOrder', 'methods', 'enumKeys'
  ] as const;

  /* @internal */
  export interface Base {
    $ref?: string
  }

  export interface MetaSchema<TDefinition = JsonWithExtrasWide.JsonDefinition> extends Base {
    /**
     * Definition type
     * Note: Can be an array in the case of declaration merging (ie. [ 'interface', 'class' ])
     */
    $tsType?: OneOrMore<TsType>

    /**
     * Array of references (represents 'extends' and 'implements' heritage objects)
     * Valid for:
     *   $tsType: 'interface' | 'class'
     */
    $heritageObjects?: Array<RequireSome<Partial<this>, '$ref'>>

    /**
     * Values make use of and $extends, default, supplied value is in value root
     * Valid for:
     *   $tsType: 'interface' | 'class' | 'type'
     *   $callSignature
     *   $constructSignature
     *   $functionSignature
     *   methods -> signature
     */
    $typeParameters?: Record<string, TypeParameter<TDefinition>>

    /**
     * Function signature(s)
     * Valid for:
     *   $tsType: 'function'
     */
    $functionSignature?: OneOrMore<FunctionSignature<TDefinition>>

    /**
     * Function call signature(s) (specified in type/interface)
     * Valid for:
     *   $tsType: 'interface' | 'type'
     */
    $callSignature?: OneOrMore<Exclude<FunctionSignature<TDefinition>, 'name'>>

    /**
     * Construct signature(s) (ie. new (): T)
     * Valid for:
     *   $tsType: 'interface' | 'type' | 'class'
     */
    $constructSignature?: OneOrMore<Exclude<FunctionSignature<TDefinition>, 'name'>>

    /**
     * Order of keys (properties & methods) in object
     * Valid for:
     *   $tsType: 'interface' | 'class'
     *   type: 'object'
     */
    keyOrder?: string[]

    /**
     * Enum value key names
     * Valid for:
     *   type: 'enum'
     */
    enumKeys?: string[]

    /**
     *
     * Valid for:
     *   $tsType: 'interface' | 'class'
     *   type: 'object'
     */
    methods?: Record<string, { signature: OneOrMore<RequireSome<FunctionSignature<TDefinition>, 'name'>> }>
  }
}
