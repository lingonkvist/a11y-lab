import { Component } from "./Component";

/**
 * Represents a button component.
 */
export class ButtonComponent extends Component {
  #text
  #borderRadius

  /**
   * Creates an instance of ButtonComponent.
   *
   * @param {object} properties - Configuration properties.
   */
  constructor(properties = {}) {
    super({
      foregroundColor: '#b6ecf7',
      backgroundColor: '#00a2c7',
      width: 120,
      height: 40,
      ...properties
    })
    this.#text = properties.text ?? 'Button'
    this.#borderRadius = properties.borderRadius ?? 4
  }

  /**
   * Builds a component to be used by the canvas.
   *
   * @returns {HTMLElement} The new component.
   */
  buildComponent() {
    const button = document.createElement('button')
    button.textContent = this.#text
    button.style.color = this.foregroundColor
    button.style.backgroundColor = this.backgroundColor
    button.style.width = `${this.width}px`
    button.style.height = `${this.height}px`
    button.style.border = 'none'
    button.style.borderRadius = `${this.#borderRadius}px`
    button.style.fontSize = 'inherit'
    button.style.cursor = 'pointer'

    return button
  }
}
