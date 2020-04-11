/**
 * JSON Schema 7
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 *
 * Credit:  Boris Cherny <https://github.com/bcherny>
 *          Cyrille Tuzi <https://github.com/cyrilletuzi>
 *          Lucian Buzzo <https://github.com/lucianbuzzo>
 *          Roland Groza <https://github.com/rolandjitsu>
 */

import { TypeOnly, validateJsonSchemaDraft } from '../schema-draft';
import { NullableNonArrayJsonValue } from '../../basic-json';
import { OneOrMore } from '../../helpers';
import { TsExtras } from '../../index';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */
/* Type-check the namespace against the JsonSchemaDraft interface */
type check = validateJsonSchemaDraft<typeof Draft7>

export namespace Draft7 {
  export const title = 'JSON';
  export const version = '7';
  export const URI = 'http://json-schema.org/draft-07/schema';

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
    export const Latest: Draft2020_04 = TypeOnly;
  }

  export interface Schema {
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
    items?: OneOrMore<JsonDefinition<this>>;
    additionalItems?: JsonDefinition<this>;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: this;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
     */
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    properties?: Record<string, JsonDefinition<this>>;
    patternProperties?: Record<string, JsonDefinition<this>>
    additionalProperties?: Record<string, JsonDefinition<this>>
    dependencies?: Record<string, JsonDefinition<this> | string[]>
    propertyNames?: JsonDefinition<this>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6
     */
    if?: JsonDefinition<this>;
    then?: JsonDefinition<this>;
    else?: JsonDefinition<this>;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
     */
    allOf?: JsonDefinition<this>[];
    anyOf?: JsonDefinition<this>[];
    oneOf?: JsonDefinition<this>[];
    not?: JsonDefinition<this>;

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
    definitions?: Record<string, this | boolean>

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
