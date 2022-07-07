# [JSON Schema](https://json-schema.org/) [Specification](https://json-schema.org/specification.html)


## [Getting Started; Step-by-Step](https://json-schema.org/learn/getting-started-step-by-step.html)

Data/Instance Types: BASE_INSTANCE_TYPE

### Base Types
- null: A JSON "null" value
- boolean: A "true" or "false" value, from the JSON "true" or "false" value
- string: A string of Unicode code points, from the JSON "string" value
- number: An arbitrary-precision, base-10 decimal number value, from the JSON "number" value
- array: An ordered list of instances, from the JSON "array" value

### Nestable Types
- object: An unordered set of properties mapping a string to an instance, from the JSON "object" value
- *An array of objects*
- The `required` keyword is only applicable to the nested data structure that contains it.


```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "URI",
  "title": "Simple Annotation",
  "description": "Further Annotation",
  "type": "object",
  "properties": {
    "name_key": {
      "description": "Annotation",
      "type":  "Property validation"
    },
    "required": [ PROPERTY_NAMES... ],
```


```json
{
  "exclusiveMinimum": 0,
  "inclusiveMinimum": 0
  "properties": {
    "myList": {
      "type": "array",
      "items" : BASE_INSTANCE_TYPE,
      "minItems": COUNT,
      "uniqueItems": TRUE
    } 
  }
}
```

## [Understanding JSON Schema](https://json-schema.org/understanding-json-schema/)

- string
  - minLength: INT
  - maxLength: INT
  - pattern: Regex [Recommended Subset](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html)
  - format: Annotation/Description; Validator Implementation may optionally interpret this as an assertion.

For a list of [Built-in string formats](https://json-schema.org/understanding-json-schema/reference/string.html), e.g.
Dates and Times, Email Addresses, IP Addresses, Resource Identifiers (UUID, URI, etc).

- integer and number share the same validation Keywords
  - multipleOf
  - minimum
  - exclusiveMinimum
  - maximum
  - exclusiveMaximum

- object
  - properties
    - KEY
    - VALIDATION_SCHEMA 
  - patternProperties: Maps regex to schema
  - additionalProperties: Schema for other properties not previously defined.
  - "additionalProperties: false" means no additional properties are allowed.
  - unevaluatedProperties
  - required
  - propertyNames: { pattern: regex }
  - minProperties
  - maxProperties

- array (both list validation and tuple validation)
  - items
  - contains
  - prefixItems: [ LIST OF SCHEMAS FOR EACH FIELD IN TUPLE]
  - minContains
  - maxContains
  - minItems
  - maxItems
  - uniqueItems

Note: Setting items: false alongside prefixItems will disallow further items in the tuple.



- boolean: Only the special values `true` and `false`.  Not truthy/falsy.

- null: Only null

- Annotations
  - title: String
  - description: String
  - default: Does not fill in missing values during validation.  May be used for documentation/form generators.
  - examples
  - Special: readOnly, writeOnly, deprecat4ed

- Comments
  - $comment: String

- Enumeration
  - enum: [...]; Can use mixed types.

- Constant Values
  - const

- Media
  - contentMediaType
  - contentEncoding

## Schema Composition

- allOf: Validate against all of a list of schemas.
- anyOf: Validate against any in a list of schemas.
- oneOf: Validate against exactly one of in a list of schemas.
- not: Schema

Properties of Schema Composition

Note: Its trivial to create universally invalid schemas.

You can factor out common properties.  E.g.

```javascript
{
  type: 'number',
  oneOf : [
    multipleOf : 3,
    multipleOf : 5
  ]
}
```

Conditional Sub-schemas

- dependentRequired
- dependentSchemas
- if-then-else

Dialect

- $schema: Only applies to the root.

Custom Vocabularies: Reference later if needed.

### Structuring a Complex Schema

#### Schema Identification

Logical units that reference each other as necessary.

Schema documents are identified by non-relative URIs.

Schema documents are not required, but are necessary for referencing on document from an other.

URI, non-relative URIs, contain a scheme (`http`) and can contain fragments (`#collection`)
Absolute URI contains a scheme but not a fragment.
Relative references do not contain a scheme but may include a fragment.
Schemas are identified by URIs but are not necessarily network addressable at the URI.

#### Base URI

If no $id is set then the URI used to retrieve the schema will be used.

$id will set the base URI explicitly without a Fragment. The base URI from $id will override any retrieval URI that was
used.  However its best to provide a full URI as a base via $id.

#### JSON Pointers

JSON Pointers can be used to reference subschemas in a larger schema document.

#### Anchors

Anchors are also available if you really really need them.

####  $ref

URI-reference that is resolved against the current Base URI.

#### $def

Defines a subschema that can be referenced in the same schema document.  E.g.

```javascript
  //...
  $ref: "#/$defs/name",
  $def: { name: { type: 'string' } 
  //...
```

#### Recursion is useful...

```javascript
{
  "type": "object",
          "properties": {
    "name": { "type": "string" },
    "children": {
      "type": "array",
      "items": { "$ref": "#" } // Refers to its parent
    }
  }
}
```

#### Bundling

... See reference.

