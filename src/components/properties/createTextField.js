import { createFieldTemplate } from './createFieldTemplate.js'
import { attachCommitBehavior } from './attachCommitBehavior.js'

/**
 * Creates a property field for text input.
 *
 * @param {object} property - Property with key, label, type, and constraints.
 * @param {string} currentValue - The value to display initially.
 * @param {function(string): void} onChange - Called with the committed value on Enter or blur.
 * @returns {HTMLElement} A labeled input field with validation and commit-on-Enter/blur behavior.
 */
export function createTextField(property, currentValue, onChange) {
  const { field, label, input, error, validate } = createFieldTemplate(property)

  input.type = 'text'
  input.value = currentValue

  attachCommitBehavior({ input, error, validate, onChange })
  if (property.maxLength !== undefined) input.maxLength = property.maxLength

  field.append(label, input, error)

  return field
}
