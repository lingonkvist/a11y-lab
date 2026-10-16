/**
 * Creates a property field for color input.
 *
 * @param {object} property - The property.
 * @param {number} currentValue - Current property value.
 * @param {function(number): void} onChange - Called with the new value on input.
 * @returns {HTMLElement} Property field.
 */
export function createColorField(property, currentValue, onChange) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const label = document.createElement('label')
  label.textContent = property.label

  const colorInput = document.createElement('input')
  colorInput.type = 'color'
  colorInput.value = currentValue
  colorInput.addEventListener('input', () => {
    textInput.value = colorInput.value
    onChange(colorInput.value)
  })

  const textInput = document.createElement('input')
  textInput.type = 'text'
  textInput.value = currentValue
  textInput.addEventListener('input', () => {
    if (/^#[0-9a-f]{6}$/i.test(textInput.value)) {
      colorInput.value = textInput.value
      onChange(textInput.value)
    }
  })

  const error = document.createElement('span')
  error.className = 'field-error'

  field.append(label, colorInput, textInput, error)

  return field
}
