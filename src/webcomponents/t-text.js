import config from '../config'
import { $t } from '..'

export default class TranslateText extends HTMLElement {
  constructor () {
    super()

    this._params = {}

    for (const el of this.children) {
      if (el.tagName !== 'T-PARAM') {
        continue
      }

      const paramName = el.attributes.name.value
      this._params[paramName] = el.innerHTML

      el.replaceWith(document.createTextNode(`{{${paramName}}}`))
    }

    this._translationKey = this.innerHTML
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.updateContent()
  }

  connectedCallback () {
    this._deregister = config.registerComponent(this.updateContent.bind(this))
  }

  disconnectedCallback () {
    this._deregister()
  }

  updateContent () {
    this._shadowRoot.innerHTML = $t(this._translationKey, this._params)
  }
}

window.customElements.define('t-text', TranslateText)
