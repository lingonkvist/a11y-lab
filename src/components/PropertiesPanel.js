import './PropertiesPanel.css'

/**
 * Creates a properties panel.
 *
 * @returns {HTMLElement} properties panel.
 */
export function createPropertiesPanel() {
  const fragment = document.createDocumentFragment()
  fragment.append(createPanelContent())

  return fragment
}

function createPanelContent() {
  const content = document.createElement('div')
  content.className = 'panel-content'

  const title = document.createElement('div')
  title.className = 'panel-title'
  title.textContent = 'Properties'

  content.append(title, createPropertyFields())

  return content
}

function createPropertyFields() {
  const container = document.createElement('div')
  container.className = 'property-fields'

  document.addEventListener('component:select', (e) => {
    const { component } = e.detail
    container.replaceChildren()

    for (const property of component.editableProperties) {
      const field = createField(property, component)
      container.append(field)
    }
  })

  return container
}

function createField(property, component) {
  const field = document.createElement('div')
  field.className = 'property-field'

  const label = document.createElement('label')
  label.textContent = property.label

  const input = document.createElement('input')
  input.type = property.type
  input.value = component[property.key]
  input.addEventListener('input', () => {
    component[property.key] = input.value
    document.dispatchEvent(
      new CustomEvent('component:update', {
        detail: { component },
      })
    )
  })

  const error = document.createElement('span')
  error.className = 'field-error'

  field.append(label, input, error)

  return field
}
