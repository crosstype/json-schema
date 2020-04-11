import { JsonSchema, OpenJsonSchema } from '../index';

// Should allow extraField
const openSchema: OpenJsonSchema<JsonSchema.Latest.SchemaWithExtras.Latest> = {
  '$tsType': 'type',
  'extraField': 3
};
