import './CanvasBar.css'
import plusIcon from '../assets/images/plus.svg?raw'

const presets = [
  { label: 'White', value: '#ffffff' },
  { label: 'Gray', value: '#808080' },
  { label: 'Black', value: '#000000' },
]

/**
 * Initializes a canvas bar.
 *
 * @param {HTMLElement} bar - The bar to initialize.
 */
export function initCanvasBar(bar) {
  const recentColors = []
  const recentGroup = createRecentGroup()

  const picker = createColorPicker((color) => {
    recentColors.push(color)
    if (recentColors.length > 3) recentColors.shift()

    renderRecent(recentGroup, recentColors)
    setActive(recentGroup.lastElementChild)
  })

  bar.append(createSwatchGroup(), recentGroup, picker)
}

function createSwatchGroup() {
  const group = document.createElement('div')
  group.className = 'swatch-group'

  presets.forEach(({ value, label }) => {
    const swatch = createSwatch(value, label)
    swatch.addEventListener('click', () => {
      setActive(swatch)
      dispatchUpdate(value)
    })
    group.append(swatch)
  })

  return group
}

function createRecentGroup() {
  const group = document.createElement('div')
  group.className = 'recent-group'
  return group
}

function renderRecent(group, colors) {
  group.replaceChildren()

  colors.forEach((color) => {
    const swatch = createSwatch(color, `Recent: ${color}`)
    swatch.addEventListener('click', () => {
      setActive(swatch)
      dispatchUpdate(color)
    })
    group.append(swatch)
  })
}

function createSwatch(color, label) {
  const swatch = document.createElement('button')
  swatch.className = 'swatch'
  swatch.style.backgroundColor = color
  swatch.setAttribute('aria-label', label)
  return swatch
}

function createColorPicker(onRecent) {
  const wrapper = document.createElement('div')
  wrapper.className = 'color-picker'

  const picker = document.createElement('input')
  picker.className = 'color-picker-input'
  picker.type = 'color'
  picker.tabIndex = -1

  const button = document.createElement('button')
  button.className = 'swatch picker-button'
  button.setAttribute('aria-label', 'Pick custom color')
  button.innerHTML = plusIcon

  button.addEventListener('click', () => picker.click())
  picker.addEventListener('input', () => dispatchUpdate(picker.value))
  picker.addEventListener('change', () => onRecent(picker.value))

  wrapper.append(picker, button)
  return wrapper
}

function setActive(swatch) {
  document.querySelector('.canvas-bar .active')?.classList.remove('active')
  swatch?.classList.add('active')
}

function dispatchUpdate(color) {
  document.dispatchEvent(
    new CustomEvent('canvas:update', {
      detail: { color },
    })
  )
}
