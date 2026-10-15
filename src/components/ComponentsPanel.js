import './ComponentsPanel.css'
import githubLogoRaw from '../assets/images/github-logo.svg?raw'

const placeholderComponents = ['Button', 'Card']

/**
 * Creates a components panel.
 *
 * @returns {HTMLElement} components panel.
 */
export function createComponentPanel() {
  const fragment = document.createDocumentFragment()
  fragment.append(createPanelContent(), createPanelFooter())

  return fragment
}

function createPanelContent() {
  const content = document.createElement('div')
  content.className = 'panel-content'

  const title = document.createElement('div')
  title.className = 'panel-title'
  title.textContent = 'Components'

  content.append(title, createComponentList())

  return content
}

function createComponentList() {
  const ul = document.createElement('ul')
  ul.className = 'components-list'

  placeholderComponents.forEach((component) => {
    const li = document.createElement('li')
    li.textContent = component
    ul.append(li)
  })

  return ul
}

function createPanelFooter() {
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
