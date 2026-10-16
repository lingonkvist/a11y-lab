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

  const input = document.createElement('input')
  input.type = 'number'
  input.value = currentValue
  input.addEventListener('input', () => {
    onChange(Number(input.value))
  })
  if (property.min !== undefined) input.min = property.min
  if (property.max !== undefined) input.max = property.max

  const error = document.createElement('span')
  error.className = 'field-error'

  field.append(label, input, error)

  return field
}
