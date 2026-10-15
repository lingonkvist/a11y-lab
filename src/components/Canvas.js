import './Canvas.css'

/**
 * Creates a canvas.
 */
export function createCanvas() {
  const main = document.querySelector('main')

  document.addEventListener('component:select', (e) => {
    const { component } = e.detail
    main.replaceChildren(component.buildComponent())
  })
}
