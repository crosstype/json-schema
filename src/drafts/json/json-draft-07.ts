/**
 * JSON Schema 7
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 *
 * Credit:  Boris Cherny <https://github.com/bcherny>
 *          Cyrille Tuzi <https://github.com/cyrilletuzi>
 *          Lucian Buzzo <https://github.com/lucianbuzzo>
 *          Roland Groza <https://github.com/rolandjitsu>
 */

import { IJsonSchemaDraft } from '../schema-draft';
import { NullableNonArrayJsonValue } from '../../basic-json';
import { OneOrMore } from '../../helpers';


/* ****************************************************************************************************************** *
 * Draft
 * ****************************************************************************************************************** */

type JsonDefinition<TSchema> = TSchema | boolean

export abstract class JsonSchemaDraft_7<TSchema = JsonSchema_7> implements IJsonSchemaDraft {
  title = 'JSON';
  version = '7';
  URI = 'http://json-schema.org/draft-07/schema';

  primitiveTypeNames = [ 'string', 'number', 'integer', 'boolean', 'null' ] as const;
  typeNames = [ ...this.primitiveTypeNames, 'object', 'array' ] as const;

  /* ********************************************************* */
  // region: Types
  /* ********************************************************* */

  abstract PrimitiveTypeName: (JsonSchemaDraft_7['primitiveTypeNames'])[number];
  abstract TypeName: (JsonSchemaDraft_7['typeNames'])[number];
  abstract JsonDefinition: JsonDefinition<this['Schema']>;

  abstract Schema: TSchema

  // endregion
}

/* ****************************************************************************************************************** *
 * Schema
 * ****************************************************************************************************************** */

export interface JsonSchema_7 {
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
  type?: OneOrMore<JsonSchemaDraft_7['TypeName']>;
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
