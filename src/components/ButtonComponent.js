import { Component } from './Component'

/**
 * Represents a button component.
 */
export class ButtonComponent extends Component {
  #text
  #borderRadius
  #fontSize
  #fontWeight

  /**
   * Creates an instance of ButtonComponent.
   *
   * @param {object} properties - Configuration properties.
   */
  constructor(properties = {}) {
    super({
      foregroundColor: '#FFFFFF',
      backgroundColor: '#045468',
      width: 120,
      height: 44,
      ...properties,
    })
    this.#text = properties.text ?? 'Button'
    this.#borderRadius = properties.borderRadius ?? 4
    this.#fontSize = properties.fontSize ?? 16
    this.#fontWeight = properties.fontWeight ?? 400
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
    button.style.fontSize = `${this.#fontSize}px`
    button.style.fontWeight = `${this.#fontWeight}`
    button.style.cursor = 'pointer'

    return button
  }

  get editableProperties() {
    return [
      ...super.editableProperties,
      { key: 'borderRadius', label: 'Border Radius', type: 'number', min: 0, max: 999 },
      { key: 'fontSize', label: 'Font Size', type: 'number', min: 9, max: 72 },
      { key: 'fontWeight', label: 'Font Weight', type: 'number', min: 100, max: 900 }
    ]
  }

  get borderRadius() {
    return this.#borderRadius
  }

  set borderRadius(value) {
    this.#borderRadius = value
  }

  get fontSize() {
    return this.#fontSize
  }

  set fontSize(value) {
    this.#fontSize = value
  }

  get fontWeight() {
    return this.#fontWeight
  }

  set fontWeight(value) {
    this.#fontWeight = value
  }
}
