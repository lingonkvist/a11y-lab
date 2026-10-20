import './PropertiesPanel.css'
import { createPropertyFields } from './properties/createPropertyFields'

/**
 * Initializes a properties panel.
 *
 * @param {HTMLElement} panel - Panel to initialize.
 */
export function initPropertiesPanel(panel) {
  let currentComponent = null

  panel.append(
    createTitle(),
    createContent(),
    createExportButton(() => currentComponent)
  )

  document.addEventListener('component:select', (e) => {
    currentComponent = e.detail.component
  })
}

function createTitle() {
  const title = document.createElement('h2')
  title.className = 'panel-title'
  title.textContent = 'Properties'

  return title
}

function createContent() {
  const content = document.createElement('div')
  content.className = 'panel-content'

  content.append(createPropertyFields())

  return content
}

function createExportButton(getComponent) {
  const button = document.createElement('button')
  button.className = 'export-button'
  button.textContent = 'Copy CSS'

  button.addEventListener('click', async () => {
    const component = getComponent()
    if (!component) return

    await navigator.clipboard.writeText(buildCssString(component))
    button.textContent = 'Copied!'
    setTimeout(() => {
      button.textContent = 'Copy CSS'
    }, 1500)
  })

  return button
}

function buildCssString(component) {
  const rules = []
  rules.push(`background-color: ${component.backgroundColor}`)
  rules.push(`color: ${component.foregroundColor}`)
  rules.push(`width: ${component.width}px`)
  rules.push(`height: ${component.height}px`)
  if (component.borderRadius !== undefined) rules.push(`border-radius: ${component.borderRadius}px`)
  if (component.fontSize !== undefined) rules.push(`font-size: ${component.fontSize}px`)
  if (component.fontWeight !== undefined) rules.push(`font-weight: ${component.fontWeight}`)

  return `.component {\n  ${rules.join(';\n  ')};\n}`
}
