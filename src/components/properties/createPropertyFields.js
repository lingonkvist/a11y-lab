import { createColorField } from './createColorField.js'
import { createNumberField } from './createNumberField.js'
import { createTextField } from './createTextField.js'

const fieldBuilders = {
  color: createColorField,
  number: createNumberField,
  text: createTextField,
}

/**
 * Creates a wrapper that renders editable property fields for the selected component.
 * Listens for 'component:select' events and rebuilds the fields accordingly.
 *
 * @returns {HTMLElement} A container that updates its fields on component selection.
 */
export function createPropertyFields() {
  const wrapper = document.createElement('div')
  wrapper.className = 'property-fields'

  document.addEventListener('component:select', (e) => {
    renderFields(wrapper, e.detail.component)
  })

  return wrapper
}

/**
 * Clears the wrapper and creates a field for each editable property of the component.
 *
 * @param {HTMLElement} container - The container element.
 * @param {object} component - Component with editable properties.
 */
function renderFields(container, component) {
  container.replaceChildren()

  for (const property of component.editableProperties) {
    const createField = fieldBuilders[property.type]
    if (!createField) {
      console.warn(`No field builder for type: ${property.type}`)
      continue
    }

    const onChange = (newValue) => {
      component[property.key] = newValue
      document.dispatchEvent(
        new CustomEvent('component:update', {
          detail: { component },
        })
      )
    }

    const field = createField(property, component[property.key], onChange)
    container.append(field)
  }
}
