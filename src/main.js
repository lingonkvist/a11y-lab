import './styles/reset.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import { renderCanvas } from './components/Canvas'
import { createComponentPanel } from './components/ComponentsPanel'
import { createPropertiesPanel } from './components/PropertiesPanel'

renderCanvas()

const componentsPanel = document.querySelector('.components-panel')
componentsPanel.append(createComponentPanel())

const propertiesPanel = document.querySelector('.properties-panel')
propertiesPanel.append(createPropertiesPanel())
