import { IJsonSchemaDraft, ITsExtrasDraft } from '../schema-draft';


/* ****************************************************************************************************************** */
// TSJsonSchema
/* ****************************************************************************************************************** */

/**
 * @see core/resources/type-schema-draft-01-example.ts
 */
export abstract class TsExtrasDraft_2020_04<TDraft extends IJsonSchemaDraft> implements ITsExtrasDraft {
  title = 'TS-EXTRAS';
  version = '2020_04';
  URI = ''; // TODO - Publish & set

  tsTypes = [ 'interface', 'class', 'object', 'type', 'method', 'function' ] as const;

  /* ********************************************************* */
  // region: Types
  /* ********************************************************* */

  abstract TsType: this['tsTypes'][number];

  abstract TypeParameter: {
    constraint?: TDraft['JsonDefinition']
    default?: TDraft['JsonDefinition']
    value?: TDraft['JsonDefinition']
  };

  abstract FunctionParameter: {
    name?: string
    type: TDraft['JsonDefinition']
    optional?: boolean
  };

  abstract FunctionSignature: {
    name?: string
    parameters: Array<TsExtrasDraft_2020_04<TDraft>['FunctionParameter']>
    returnType: TDraft['JsonDefinition']
    restParameter?: TsExtrasDraft_2020_04<TDraft>['FunctionParameter']
  };

  abstract Schema: TsExtras_2020_04<TDraft>

  // endregion
}


export interface TsExtras_2020_04<TDraft extends IJsonSchemaDraft> {
  $tsType?: TsExtrasDraft_2020_04<TDraft>['TsType']

  /**
   * $tsType: 'interface' | 'class'
   * Array of references
   */
  $heritageObjects?: Array<this>

  /**
   * $tsType: 'interface' | 'class' | 'object' | 'type' | 'method' | 'function'
   * Values make use of and $extends, default, supplied value is in value root
   */
  $typeParameters?: Record<string, TsExtrasDraft_2020_04<TDraft>['TypeParameter']>

  /**
   * $tsType: 'method' | 'function'
   */
  $functionSignature?: TsExtrasDraft_2020_04<TDraft>['FunctionSignature']

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
