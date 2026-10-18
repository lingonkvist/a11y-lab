import Field from '../../../lib/form-validation/src/Field.js'
import Validation from '../../../lib/form-validation/src/Validation.js'
import { RequiredRule, MinValueRule, MaxValueRule, MaxLengthRule } from '../../../lib/form-validation/src/Rule.js'

/**
 * Creates a field validator for a property.
 *
 * @param {object} property - The property to create a validator for.
 * @returns {function(string): (string|null)} Validator function that returns the first error message or null if valid.
 */
export function createFieldValidator(property) {
  const validation = new Validation()
  const field = new Field(property.key)

  field.addRule(new RequiredRule())

  if (property.min !== undefined) field.addRule(new MinValueRule(property.min))
  if (property.max !== undefined) field.addRule(new MaxValueRule(property.max))
  if (property.maxLength !== undefined) field.addRule(new MaxLengthRule(property.maxLength))

  validation.addField(field)
  return (value) => {
    const result = validation.validate({ [property.key]: value })
    return result.success ? null : result.errors[0].errorMessage
  }
}
