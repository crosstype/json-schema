import { JsonSchema } from '../';

// TODO - Add heritage examples


/* ****************************************************************************************************************** *
 * Class
 * ****************************************************************************************************************** */

export class ABC<G extends string> {
  a!: string;
  b!: G;
  c<T, B extends string = string, C = never>(p1: T, p2: B, p3?: number, ...args: any[]): C {
    return <any>null
  }
  d = function Hello<T>(a: any): T { return <any>null }
}


/* ****************************************************************************************************************** *
 * Schema
 * ****************************************************************************************************************** */

const SchemaResult: JsonSchema.Latest.SchemaWithExtras.Latest = {
  '$tsType': 'class',
  '$typeParameters': {
    'G': {
      'constraint': { type: 'string' },
    }
  },

  'type': 'object',
  'properties': {
    'a': { type: 'string' },

    'b': { $ref: '#/$typeParameters/G' },

    'd': {
      '$tsType': 'function',
      '$typeParameters': {
        'T': {}
      },
      '$functionSignature': {
        'name': 'Hello',
        'parameters': [
          {
            'name': 'a',
            'type': true,
          }
        ],
        'returnType': { $ref: '#/properties/d/$typeParameters/T' }
      }
    }
  },

  methods: {
    'c': {
      '$tsType': 'method',
      '$typeParameters': {
        'T': {},
        'B': {
          'constraint': { type: 'string' },
          'default': { type: 'string' },
          'value': { '$ref': '#/methods/c/$typeParameters/B/default' }
        },
        'C': {
          'default': false // Assumes neverAsFalse option set to true
        }
      },
      '$functionSignature': {
        'parameters': [
          {
            'name': 'p1',
            'type': { $ref: '#/methods/c/$typeParameters/T' }
          },
          {
            'name': 'p2',
            'type': { $ref: '#/methods/c/$typeParameters/B' }
          },
          {
            'name': 'p3',
            'type': { type: 'number' },
            'optional': true
          }
        ],
        'restParameter': {
          'name': 'args',
          'type': true
        },
        'returnType': { $ref: '#/methods/c/$typeParameters/C' }
      },
    }
  },

  keyOrder: [ 'a', 'b', 'c', 'd' ]
};
