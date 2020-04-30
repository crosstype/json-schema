/**
 * JSON Schema 7
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 *
 * Credit:  Boris Cherny <https://github.com/bcherny>
 *          Cyrille Tuzi <https://github.com/cyrilletuzi>
 *          Lucian Buzzo <https://github.com/lucianbuzzo>
 *          Roland Groza <https://github.com/rolandjitsu>
 */
import { validateJsonSchemaDraft, validateKeys, validateWide } from '../schema-draft';
import { NullableNonArrayJsonValue } from '../../basic-json';
import { OneOrMore, TypeOnly } from '../../helpers';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

/* Type-check the namespace */
type check =
  validateJsonSchemaDraft<typeof JSON_7> |
  validateWide<typeof JSON_7> |
  validateKeys<
    typeof JSON_7,
    typeof JSON_7.schemaKeys[number],  // No outside keys in schemaKeys
    keyof typeof JSON_7.JsonSchema     // Schema has all schemaKeys
  >

export namespace JSON_7 {
  export const title = 'JSON';
  export const version = '7';
  export const URI = 'http://json-schema.org/draft-07/schema';

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
    '$id', '$ref', '$comment', '$schema', 'type', 'enum', 'const', 'multipleOf', 'maximum', 'exclusiveMaximum',
    'minimum', 'exclusiveMinimum', 'maxLength', 'minLength', 'pattern', 'items', 'additionalItems', 'maxItems',
    'minItems', 'uniqueItems', 'contains',     'maxProperties', 'minProperties', 'required', 'properties',
    'patternProperties', 'additionalProperties', 'dependencies', 'propertyNames', 'if', 'then', 'else', 'allOf',
    'anyOf', 'oneOf', 'not', 'format', 'contentMediaType', 'contentEncoding', 'definitions', 'title', 'description',
    'default', 'readOnly', 'writeOnly', 'examples'
  ] as const;


  export interface JsonSchema {
    $id?: string;
    $ref?: string;
    $comment?: string;

    /**
     * Meta schema
     *
     * Recommended values:
     * - 'http://json-schema.org/schema#'
     * - 'http://json-schema.org/hyper-schema#'
     * - 'http://json-schema.org/draft-07/schema#'
     * - 'http://json-schema.org/draft-07/hyper-schema#'
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
     */
    $schema?: string;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
     */
    type?: OneOrMore<TypeName>;
    enum?: NullableNonArrayJsonValue[];
    const?: NullableNonArrayJsonValue;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2
     */
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
     */
    maxLength?: number;
    minLength?: number;
    pattern?: string;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
     */
    items?: OneOrMore<JsonDefinition<Partial<this>>>;
    additionalItems?: JsonDefinition<Partial<this>>;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: Partial<this>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
     */
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    properties?: Record<string, JsonDefinition<Partial<this>>>;
    patternProperties?: Record<string, JsonDefinition<Partial<this>>>
    additionalProperties?: Record<string, JsonDefinition<Partial<this>>>
    dependencies?: Record<string, JsonDefinition<Partial<this>> | string[]>
    propertyNames?: JsonDefinition<Partial<this>>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6
     */
    if?: JsonDefinition<Partial<this>>;
    then?: JsonDefinition<Partial<this>>;
    else?: JsonDefinition<Partial<this>>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
     */
    allOf?: JsonDefinition<Partial<this>>[];
    anyOf?: JsonDefinition<Partial<this>>[];
    oneOf?: JsonDefinition<Partial<this>>[];
    not?: JsonDefinition<Partial<this>>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7
     */
    format?: string;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8
     */
    contentMediaType?: string;
    contentEncoding?: string;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-9
     */
    definitions?: Record<string, Partial<this> | boolean>

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10
     */
    title?: string;
    description?: string;
    default?: NullableNonArrayJsonValue;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: NullableNonArrayJsonValue;
  }
}
