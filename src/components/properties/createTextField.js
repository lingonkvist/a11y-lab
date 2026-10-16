/**
 * Creates a property field for text input.
 *
 * @param {object} property - The property.
 * @param {number} currentValue - Current property value.
 * @param {function(number): void} onChange - Called with the new value on input.
 * @returns {HTMLElement} Property field.
 */
export function createTextField(property, currentValue, onChange) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const label = document.createElement('label')
  label.textContent = property.label

  const input = document.createElement('input')
  input.type = 'text'
  input.value = currentValue
  input.addEventListener('input', () => {
    onChange(input.value)
  })
  if (property.maxLength !== undefined) input.maxLength = property.maxLength

  const error = document.createElement('span')
  error.className = 'field-error'

  field.append(label, input, error)

  return field
}
