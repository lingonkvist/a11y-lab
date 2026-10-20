/**
 * Represents a component.
 */
export class Component {
  #backgroundColor
  #foregroundColor
  #width
  #height

  /**
   * Creates an instance of Component.
   *
   * @param {object} properties - Configuration properties.
   * @param {string} properties.foregroundColor - Hex color.
   * @param {string} properties.backgroundColor - Hex color.
   * @param {number} properties.width - Width in pixels.
   * @param {number} properties.height - Height in pixels.
   */
  constructor({ foregroundColor = '#000000', backgroundColor = '#ffffff', width = 100, height = 40 } = {}) {
    this.#foregroundColor = foregroundColor
    this.#backgroundColor = backgroundColor
    this.#width = width
    this.#height = height
  }

  /**
   * Builds a component to be used by the canvas.
   *
   * @abstract
   * @returns {HTMLElement} The new component.
   */
  buildComponent() {
    throw new Error('Subclasses must implement buildComponent()')
  }

  get editableProperties() {
    return [
      { key: 'backgroundColor', label: 'Background', type: 'color' },
      { key: 'foregroundColor', label: 'Foreground', type: 'color' },
      { key: 'width', label: 'Width', type: 'number', min: 24, max: 800 },
      { key: 'height', label: 'Height', type: 'number', min: 24, max: 600 },
    ]
  }

  get backgroundColor() {
    return this.#backgroundColor
  }

  set backgroundColor(value) {
    this.#backgroundColor = value
  }

  get foregroundColor() {
    return this.#foregroundColor
  }

  set foregroundColor(value) {
    this.#foregroundColor = value
  }

  get width() {
    return this.#width
  }

  set width(value) {
    this.#width = value
  }

  get height() {
    return this.#height
  }

  set height(value) {
    this.#height = value
  }
}
