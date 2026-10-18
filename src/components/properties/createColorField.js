import { createFieldValidator } from './createFieldValidator.js'

/**
 * Creates a property field for color input.
 *
 * @param {object} property - The property.
 * @param {string} currentValue - Current property value.
 * @param {function(string): void} onChange - Called with the new value on input.
 * @returns {HTMLElement} Property field.
 */
export function createColorField(property, currentValue, onChange) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const label = document.createElement('label')
  label.textContent = property.label

  const validate = createFieldValidator(property)
  const error = document.createElement('span')
  error.className = 'field-error'

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
    const result = validate(textInput.value)
    if (result !== null) {
      error.textContent = result
      textInput.setAttribute('data-error', true)
    } else {
      error.textContent = ''
      textInput.removeAttribute('data-error')
      if (/^#[0-9a-f]{6}$/i.test(textInput.value)) {
        colorInput.value = textInput.value
        onChange(textInput.value)
      }
    }
  })

  const inputGroup = document.createElement('div')
  inputGroup.className = 'color-input-group'
  inputGroup.append(colorInput, textInput)

  field.append(label, inputGroup, error)

  return field
}
