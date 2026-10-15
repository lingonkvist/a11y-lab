import './styles/reset.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import { createComponentPanel } from './components/ComponentsPanel'

const panel = document.querySelector('.components-panel')
panel.append(createComponentPanel())
