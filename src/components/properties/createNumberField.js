import { createFieldValidator } from "./createFieldValidator.js"

/**
 * Creates a property field for number input.
 *
 * @param {object} property - The property.
 * @param {number} currentValue - Current property value.
 * @param {function(number): void} onChange - Called with the new value on input.
 * @returns {HTMLElement} Property field.
 */
export function createNumberField(property, currentValue, onChange) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const label = document.createElement('label')
  label.textContent = property.label

  const validate = createFieldValidator(property)
  const error = document.createElement('span')
  error.className = 'field-error'

  const input = document.createElement('input')
  input.type = 'number'
  input.value = currentValue
  input.addEventListener('input', () => {
    const result = validate(input.value)
    if (result !== null) {
      error.textContent = result
      input.setAttribute('data-error', true)
    } else {
      error.textContent = ''
      input.removeAttribute('data-error')
      onChange(Number(input.value))
    }
  })
  if (property.min !== undefined) input.min = property.min
  if (property.max !== undefined) input.max = property.max

  field.append(label, input, error)

  return field
}
