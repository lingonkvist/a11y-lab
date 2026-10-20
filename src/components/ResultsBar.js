import pass from '../assets/images/check.svg?raw'
import fail from '../assets/images/x.svg?raw'
import { WcagEngine } from 'wcag-engine'
import './ResultsBar.css'

const wcag = new WcagEngine

/**
 * Initializes a results bar.
 *
 * @param {HTMLElement} bar - The bar to initialize.
 */
export function initResultsBar(bar) {
  let currentComponent = null
  let currentCanvasColor = '#ffffff'

  document.addEventListener('component:select', (e) => {
    currentComponent = e.detail.component
    render()
  })

  document.addEventListener('component:update', () => render())

  document.addEventListener('canvas:update', (e) => {
    currentCanvasColor = e.detail.color
    render()
  })

  function render() {
    if (!currentComponent) return
    bar.replaceChildren(buildResults(currentComponent, currentCanvasColor))
  }
}

function buildResults(component, canvasColor) {
  const fragment = document.createDocumentFragment()

  const contrast = wcag.checkContrast(component.foregroundColor, component.backgroundColor, { fontSize: component.fontSize, fontWeight: component.fontWeight })
  const textLevel = contrast.aaa ? 'AAA' : contrast.aa ? 'AA' : 'Fail'
  fragment.append(buildPill('Text', { level: textLevel, value: `${contrast.ratio.toFixed(1)}:1`, colors: [component.foregroundColor, component.backgroundColor] }))

  const nonText = wcag.checkNonTextContrast(component.backgroundColor, canvasColor)
  const nonTextLevel = nonText.aa ? 'Pass' : 'Fail'
  fragment.append(buildPill('Non-text', { level: nonTextLevel, value: `${nonText.ratio.toFixed(1)}:1`, colors: [component.backgroundColor, canvasColor] }))

  const target = wcag.checkTargetSize(component.width, component.height)
  const sizeLevel = target.aaa ? 'AAA' : target.aa ? 'AA' : 'Fail'
  fragment.append(buildPill('Size', { level: sizeLevel, value: `${component.width}x${component.height}` }))

  return fragment
}

function buildPill(label, { level, value, colors }) {
  const pill = document.createElement('div')
  pill.className = `pill ${level !== 'Fail' ? 'pass' : 'fail'}`

  const iconSpan = document.createElement('span')
  iconSpan.innerHTML = level !== 'Fail' ? pass : fail

  const labelSpan = document.createElement('span')
  labelSpan.textContent = `${label} ${level} ${value}`

  pill.append(iconSpan, labelSpan)
  if (colors) pill.append(buildSwatches(colors[0], colors[1]))

  return pill
}

function buildSwatches(color1, color2) {
  const wrapper = document.createElement('span')
  wrapper.className = 'pill-swatches'

  const swatch1 = document.createElement('span')
  swatch1.className = 'pill-swatch'
  swatch1.style.backgroundColor = color1

  const swatch2 = document.createElement('span')
  swatch2.className = 'pill-swatch'
  swatch2.style.backgroundColor = color2

  wrapper.append(swatch1, swatch2)
  return wrapper
}
