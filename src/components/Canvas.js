import './Canvas.css'

/**
 * Creates and updates the canvas.
 */
export function renderCanvas() {
  const main = document.querySelector('main')

  const render = (e) => {
    const { component } = e.detail
    main.replaceChildren(component.buildComponent())
  }

  document.addEventListener('component:select', render)
  document.addEventListener('component:update', render)
}
