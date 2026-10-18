import { createFieldValidator } from './createFieldValidator.js'
import { attachCommitBehavior } from './attachCommitBehavior.js'

/**
 * Creates a property field for color input.
 *
 * @param {object} property - Property with key, label, type, and constraints.
 * @param {string} currentValue - The value to display initially.
 * @param {function(string): void} onChange - Called with the committed value on Enter or blur.
 * @returns {HTMLElement} A labeled input field with validation and commit-on-Enter/blur behavior.
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
  attachCommitBehavior({
    input: textInput, error, validate, onChange: (value => {
      if (/^#[0-9a-f]{6}$/i.test(value)) {
        colorInput.value = value
      }
      onChange(value)
    })
  })

  const inputGroup = document.createElement('div')
  inputGroup.className = 'color-input-group'
  inputGroup.append(colorInput, textInput)

  field.append(label, inputGroup, error)

  return field
}
