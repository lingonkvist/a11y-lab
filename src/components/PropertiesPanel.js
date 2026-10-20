import './PropertiesPanel.css'
import { createPropertyFields } from './properties/createPropertyFields'

/**
 * Initializes a properties panel.
 *
 * @param {HTMLElement} panel - Panel to initialize.
 */
export function initPropertiesPanel(panel) {
  panel.append(createTitle(), createContent())
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
