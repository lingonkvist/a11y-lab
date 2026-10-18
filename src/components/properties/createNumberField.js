import { createFieldTemplate } from './createFieldTemplate.js'
import { attachCommitBehavior } from './attachCommitBehavior.js'

/**
 * Creates a property field for number input.
 *
 * @param {object} property - Property with key, label, type, and constraints.
 * @param {number} currentValue - The value to display initially.
 * @param {function(number): void} onChange - Called with the committed value on Enter or blur.
 * @returns {HTMLElement} A labeled input field with validation and commit-on-Enter/blur behavior.
 */
export function createNumberField(property, currentValue, onChange) {
  const { field, label, input, error, validate } = createFieldTemplate(property)

  input.type = 'number'
  input.value = currentValue

  attachCommitBehavior({ input, error, validate, onChange: (value) => onChange(Number(value)) })
  if (property.min !== undefined) input.min = property.min
  if (property.max !== undefined) input.max = property.max

  field.append(label, input, error)

  return field
}
