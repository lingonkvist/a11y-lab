import './PropertiesPanel.css'
import { createPropertyFields } from './properties/createPropertyFields'

/**
 * Creates a properties panel.
 *
 * @returns {HTMLElement} Properties panel.
 */
export function createPropertiesPanel() {
  const panel = document.createElement('div')
  panel.className = 'panel-content'

  const title = document.createElement('div')
  title.className = 'panel-title'
  title.textContent = 'Properties'

  panel.append(title, createPropertyFields())

  return panel
}
