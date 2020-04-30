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

import { validateJsonSchemaDraft, validateKeys, validateWide } from '../schema-draft';
import { NullableNonArrayJsonValue } from '../../basic-json';
import { OneOrMore, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

/* Type-check the namespace */
type check =
  validateJsonSchemaDraft<typeof JSON_2019_09> |
  validateWide<typeof JSON_2019_09> |
  validateKeys<
    typeof JSON_2019_09,
    typeof JSON_2019_09.schemaKeys[number],  // No outside keys in schemaKeys
    keyof typeof JSON_2019_09.JsonSchema     // Schema has all schemaKeys
  >

export namespace JSON_2019_09 {
  export const title = 'JSON';
  export const version = '2019-09';
  export const URI = 'http://json-schema.org/draft/2019-09/schema';

  export const primitiveTypeNames = [ 'string', 'number', 'integer', 'boolean', 'null' ] as const;
  export const typeNames = [ ...primitiveTypeNames, 'object', 'array' ] as const;

  export type PrimitiveTypeName = typeof primitiveTypeNames[number]
  export type TypeName = typeof typeNames[number];
  export type JsonDefinition<TSchema = JsonSchema> = TSchema | boolean

  /* ********************************************************* *
   * Placeholders
   * ********************************************************* */
  export const PrimitiveTypeName: PrimitiveTypeName = TypeOnly;
  export const TypeName: TypeName = TypeOnly;
  export const JsonDefinition: JsonDefinition = TypeOnly;
  export const JsonSchema: JsonSchema = TypeOnly;

  /* ********************************************************* *
   * Schema
   * ********************************************************* */

  export const schemaKeys = [
    '$id', '$anchor', '$comment', '$schema', '$vocabulary', 'format', '$defs', '$ref', '$recursiveRef', 'recursiveAnchor', 'if',
    'then', 'else', 'allOf', 'anyOf', 'oneOf', 'not', 'type', 'enum', 'const', 'multipleOf', 'maximum', 'exclusiveMaximum', 'minimum',
    'exclusiveMinimum', 'maxLength', 'minLength', 'pattern', 'items', 'additionalItems', 'maxItems', 'minItems', 'uniqueItems', 'contains',
    'unevaluatedItems', 'maxContains', 'minContains', 'maxProperties', 'minProperties', 'required', 'additionalProperties', 'propertyNames',
    'unevaluatedProperties', 'dependentRequired', 'properties', 'patternProperties', 'dependencies', 'contentMediaType', 'contentEncoding',
    'contentSchema', 'title', 'description', 'default', 'readOnly', 'writeOnly', 'examples', 'deprecated', 'definitions', 'dependentSchemas'
  ] as const;

  export interface JsonSchema {
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
    $defs?: Record<string, JsonDefinition<Partial<this>>>


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
    if?: JsonDefinition<Partial<this>>
    then?: JsonDefinition<Partial<this>>;
    else?: JsonDefinition<Partial<this>>;
    /**
     * @new
     */
    dependentSchemas?: Record<string, JsonDefinition<Partial<this>>>


    /**
     * Sub-schema Boolean Logic
     * @see https://json-schema.org/draft/2019-09/json-schema-core.html#logic
     */
    allOf?: JsonDefinition<Partial<this>>[];
    anyOf?: JsonDefinition<Partial<this>>[];
    oneOf?: JsonDefinition<Partial<this>>[];
    not?: JsonDefinition<Partial<this>>;


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
    items?: OneOrMore<JsonDefinition<Partial<this>>>;
    additionalItems?: JsonDefinition<Partial<this>>;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: Partial<this>;
    /**
     * @new
     */
    unevaluatedItems?: JsonDefinition<Partial<this>>;
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
    additionalProperties?: JsonDefinition<Partial<this>>;
    propertyNames?: JsonDefinition<Partial<this>>;
    /**
     * @new
     */
    unevaluatedProperties?: JsonDefinition<Partial<this>>;
    /**
     * @new
     */
    dependentRequired?: {
      [key: string]: string[]
    }
    properties?: Record<string, JsonDefinition<Partial<this>>>
    patternProperties?: Record<string, JsonDefinition<Partial<this>>>
    dependencies?: Record<string, JsonDefinition<Partial<this>> | string[]>


    /**
     * String-encoded Data Keywords
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8
     */
    contentMediaType?: string;
    contentEncoding?: string;
    /**
     * @new
     */
    contentSchema?: JsonDefinition<Partial<this>>;


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
    definitions?: Record<string, JsonDefinition<Partial<this>>>
  }
}
