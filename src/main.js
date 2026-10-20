import './styles/reset.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import { initCanvas } from './components/Canvas.js'
import { initComponentPanel } from './components/ComponentsPanel.js'
import { initPropertiesPanel } from './components/PropertiesPanel.js'
import { initCanvasBar } from './components/CanvasBar.js'
import { initResultsBar } from './components/ResultsBar.js'

const main = document.querySelector('main')
initCanvas(main)

const propertiesPanel = document.querySelector('.properties-panel')
initPropertiesPanel(propertiesPanel)

const canvasBar = document.querySelector('.canvas-bar')
initCanvasBar(canvasBar)

const resultsBar = document.querySelector('.results-bar')
initResultsBar(resultsBar)

// Initializes last because it auto-selects the first component on load,
// dispatching 'component:select', which requires others to be loaded.
const componentsPanel = document.querySelector('.components-panel')
initComponentPanel(componentsPanel)
