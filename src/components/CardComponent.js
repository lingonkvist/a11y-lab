import { Component } from './Component'
import './CardComponent.css'

/**
 * Represents a card component.
 */
export class CardComponent extends Component {
  #title
  #text
  #borderRadius

  /**
   * Creates an instance of CardComponent.
   *
   * @param {object} properties - Configuration properties.
   */
  constructor(properties = {}) {
    super({
      foregroundColor: '#111111',
      backgroundColor: '#eeeeee',
      width: 360,
      height: 360,
      ...properties,
    })
    this.#title = properties.title ?? 'Card title'
    this.#text = properties.text ?? 'A short description for the card component.'
    this.#borderRadius = properties.borderRadius ?? 8
  }

  /**
   * Builds a component to be used by the canvas.
   *
   * @returns {HTMLElement} The new component.
   */
  buildComponent() {
    const card = document.createElement('div')
    card.className = 'card'

    const image = document.createElement('div')
    image.className = 'card-image'

    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    const title = document.createElement('h3')
    title.className = 'card-title'
    title.textContent = this.#title

    const text = document.createElement('p')
    text.className = 'card-text'
    text.textContent = this.#text

    Object.assign(card.style, {
      backgroundColor: this.backgroundColor,
      width: `${this.width}px`,
      height: `${this.height}px`,
      color: this.foregroundColor,
      borderRadius: `${this.#borderRadius}px`,
    })

    wrapper.append(title, text)
    card.append(image, wrapper)
    return card
  }

  get editableProperties() {
    return [
      ...super.editableProperties,
      { key: 'borderRadius', label: 'Border Radius', type: 'number', min: 0, max: 999 },
    ]
  }

  get borderRadius() {
    return this.#borderRadius
  }

  set borderRadius(value) {
    this.#borderRadius = value
  }
}
