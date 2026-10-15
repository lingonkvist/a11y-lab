import './styles/reset.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import { createCanvas } from './components/Canvas'
import { createComponentPanel } from './components/ComponentsPanel'

createCanvas()

const panel = document.querySelector('.components-panel')
panel.append(createComponentPanel())
