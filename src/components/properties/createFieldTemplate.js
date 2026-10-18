import { createFieldValidator } from './createFieldValidator.js'

/**
 * @typedef {object} FieldTemplate
 * @property {HTMLDivElement} field - Wrapper container.
 * @property {HTMLLabelElement} label - Label linked to the input.
 * @property {HTMLInputElement} input - Input with ARIA attributes wired.
 * @property {HTMLSpanElement} error - Error span linked via aria-describedby.
 * @property {function(string): (string|null)} validate - Returns error message or null.
 */

let counter = 0
function generateId(prefix) {
  counter++
  return `${prefix}-${counter}`
}

/**
 * Creates the shared DOM elements and validator for a property field.
 *
 * @param {object} property - Property with key, label, type, and constraints.
 * @returns {FieldTemplate} Field template.
 */
export function createFieldTemplate(property) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const validate = createFieldValidator(property)

  const error = document.createElement('span')
  error.id = generateId(`${property.key}-error`)
  error.className = 'field-error'
  error.setAttribute('aria-live', 'polite')

  const input = document.createElement('input')
  input.id = generateId(`${property.key}-input`)
  input.setAttribute('aria-describedby', error.id)

  const label = document.createElement('label')
  label.textContent = property.label
  label.htmlFor = input.id

  return { field, label, input, error, validate }
}
