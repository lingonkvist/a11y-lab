import { createColorField } from './createColorField.js'
import { createNumberField } from './createNumberField.js'
import { createTextField } from './createTextField.js'

const fieldBuilders = {
  color: createColorField,
  number: createNumberField,
  text: createTextField,
}

/**
 * Creates property fields.
 *
 * @returns {HTMLElement} A container with fields.
 */
export function createPropertyFields() {
  const container = document.createElement('div')
  container.className = 'property-fields'

  document.addEventListener('component:select', (e) => {
    renderFields(container, e.detail.component)
  })

  return container
}

function renderFields(container, component) {
  container.replaceChildren()

  for (const property of component.editableProperties) {
    const createField = fieldBuilders[property.type]
    if (!createField) {
      console.warn(`No field builder for type: ${property.type}`)
      continue
    }

    const onChange = (newValue) => {
      const value = newValue
      component[property.key] = value
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
