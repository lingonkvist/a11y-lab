/**
 * Initializes the canvas.
 *
 * @param {HTMLElement} main - The main element to use as canvas.
 */
export function initCanvas(main) {
  const render = (e) => main.replaceChildren(e.detail.component.buildComponent())

  document.addEventListener('component:select', render)
  document.addEventListener('component:update', render)

  document.addEventListener('canvas:update', (e) => {
    main.style.backgroundColor = e.detail.color
  })
}
