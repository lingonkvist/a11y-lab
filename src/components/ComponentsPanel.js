import './ComponentsPanel.css'
import { ButtonComponent } from './ButtonComponent.js'
import { CardComponent } from './CardComponent.js'
import githubLogoRaw from '../assets/images/github-logo.svg?raw'

const registry = [
  { name: 'Button', Component: ButtonComponent },
  { name: 'Card', Component: CardComponent },
]

/**
 * Initializes a components panel.
 *
 * @param {HTMLElement} panel - Panel to initialize.
 */
export function initComponentPanel(panel) {
  panel.append(createTitle(), createContent(), createFooter())
}

function createTitle() {
  const title = document.createElement('h2')
  title.className = 'panel-title'
  title.textContent = 'Components'

  return title
}

function createContent() {
  const content = document.createElement('div')
  content.className = 'panel-content'

  content.append(createComponentList())

  return content
}

function createComponentList() {
  const ul = document.createElement('ul')
  ul.className = 'components-list'

  registry.forEach(({ name, Component }) => {
    const li = document.createElement('li')
    li.textContent = name
    li.addEventListener('click', () => {
      ul.querySelector('.active')?.classList.remove('active')
      li.classList.add('active')

      const component = new Component()
      document.dispatchEvent(
        new CustomEvent('component:select', {
          detail: { component },
        })
      )
    })
    ul.append(li)
  })

  const firstItem = ul.querySelector('li')
  firstItem?.click()

  return ul
}

function createFooter() {
  const footer = document.createElement('div')
  footer.className = 'panel-footer'

  const appName = document.createElement('span')
  appName.className = 'app-name'
  appName.textContent = 'a11y lab'

  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/lingonkvist/a11y-lab'
  githubLink.setAttribute('aria-label', 'View source on GitHub')

  const githubIcon = document.createElement('span')
  githubIcon.innerHTML = githubLogoRaw

  githubLink.append(githubIcon)
  footer.append(appName, githubLink)

  return footer
}
