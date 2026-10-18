/**
 * Attach validation and commit-on-Enter/blur behavior to a field.
 *
 * @param {object} config - The field configuration.
 * @param {HTMLInputElement} config.input - The input element to attach listeners to.
 * @param {HTMLElement} config.error - Element for showing validation error messages.
 * @param {function(string): (string|null)} config.validate - Returns the first error message or null if valid.
 * @param {function(string): void} config.onChange - Called with the input value on successful commit.
 */
export function attachCommitBehavior({ input, error, validate, onChange }) {
  let lastCommittedValue = input.value

  function commit() {
    const result = validate(input.value)
    if (result !== null) {
      error.textContent = result
      input.setAttribute('data-error', true)
    } else {
      error.textContent = ''
      input.removeAttribute('data-error')
      onChange(input.value)
      lastCommittedValue = input.value
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') commit()
    if (e.key === 'Escape') {
      error.textContent = ''
      input.removeAttribute('data-error')
      input.value = lastCommittedValue
    }
  })

  input.addEventListener('blur', commit)
}
