/**
 * JSON Schema - Draft 2019-09
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02
 *
 * [Changes]
 *   @see https://json-schema.org/draft/2019-09/release-notes.html
 *
 * [Tags]
 *   @changed - Changed from previous Schema
 *   @new - Added from former schema
 */
import { TypeOnly, validateJsonSchemaDraft } from '../schema-draft';
import { NullableNonArrayJsonValue } from '../../basic-json';
import { OneOrMore } from '../../helpers';
import { TsExtras } from '../../index';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */
/* Type-check the namespace against the JsonSchemaDraft interface */
type check = validateJsonSchemaDraft<typeof Draft2019_09>

export namespace Draft2019_09 {
  export const title = 'JSON';
  export const version = '2019_09';
  export const URI = 'http://json-schema.org/draft/2019-09/schema';

  export const primitiveTypeNames = [ 'string', 'number', 'integer', 'boolean', 'null' ] as const;
  export const typeNames = [ ...primitiveTypeNames, 'object', 'array' ] as const;

  export type PrimitiveTypeName = typeof primitiveTypeNames[number]
  export type TypeName = typeof typeNames[number];
  export type JsonDefinition<TSchema = Schema> = TSchema | boolean

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;
  export const Schema: Schema = TypeOnly;


  /* ********************************************************* *
   * Schema
   * ********************************************************* */
  export namespace SchemaWithExtras {
    export interface Draft2020_04 extends Schema, TsExtras.Draft2020_04.Schema<JsonDefinition<Draft2020_04>> { }
    export type Latest = Draft2020_04

    export const Draft2020_04: Draft2020_04 = TypeOnly;
    export const Latest: Latest = TypeOnly;
  }

  export interface Schema {
    /**
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.2.2
     */
    $id?: string;
    /**
     * @new
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.2.3
     */
    $anchor?: string;
    /**
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.3
     */
    $comment?: string;
    /**
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.1.1
     */
    $schema?: string;
    /**
     * @new
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.1.2
     */
    $vocabulary?: string;
    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7
     */
    format?: string;
    /**
     * @new
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.2.5
     */
    $defs?: Record<string, JsonDefinition<this>>


    /**
     * Reference
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.8.2.4
     */
    $ref?: string;
    /**
     * @new
     */
    $recursiveRef?: string;
    /**
     * @new
     */
    recursiveAnchor?: boolean;


    /**
     * Sub-schema Conditionals
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#conditional
     */
    if?: JsonDefinition<this>
    then?: JsonDefinition<this>;
    else?: JsonDefinition<this>;
    /**
     * @new
     */
    dependentSchemas?: Record<string, JsonDefinition<this>>


    /**
     * Sub-schema Boolean Logic
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#logic
     */
    allOf?: JsonDefinition<this>[];
    anyOf?: JsonDefinition<this>[];
    oneOf?: JsonDefinition<this>[];
    not?: JsonDefinition<this>;


    /**
     * Type Validation Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1
     */
    type?: OneOrMore<TypeName>;
    enum?: NullableNonArrayJsonValue[];
    const?: NullableNonArrayJsonValue;


    /**
     * Numeric Validation Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2
     */
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;


    /**
     * String Validation Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3
     */
    maxLength?: number;
    minLength?: number;
    pattern?: string;


    /**
     * Array Keywords
     * @see https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.3.1
     */
    items?: OneOrMore<JsonDefinition<this>>;
    additionalItems?: JsonDefinition<this>;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: this;
    /**
     * @new
     */
    unevaluatedItems?: JsonDefinition<this>;
    /**
     * @new
     */
    maxContains?: number;
    /**
     * @new
     */
    minContains?: number;


    /**
     * Object Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.3.2
     */
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    additionalProperties?: JsonDefinition<this>;
    propertyNames?: JsonDefinition<this>;
    /**
     * @new
     */
    unevaluatedProperties?: JsonDefinition<this>;
    /**
     * @new
     */
    dependentRequired?: {
      [key: string]: string[]
    }
    properties?: Record<string, JsonDefinition<this>>
    patternProperties?: Record<string, JsonDefinition<this>>
    dependencies?: Record<string, JsonDefinition<this> | string[]>


    /**
     * String-encoded Data Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8
     */
    contentMediaType?: string;
    contentEncoding?: string;
    /**
     * @new
     */
    contentSchema?: JsonDefinition<this>;


    /**
     * Annotations
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9
     */
    title?: string;
    description?: string;
    default?: NullableNonArrayJsonValue;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: NullableNonArrayJsonValue;
    deprecated?: boolean;


    /**
     * Deprecated (Still valid)
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#appendix-A
     */
    definitions?: Record<string, JsonDefinition<this>>
  }
}
