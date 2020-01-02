import Catalog from './catalog'

class Config {
  constructor () {
    this._loadedTranslations = {}
    this._locale = null
    this._registry = {}
    this._registryCount = 0
    this._config = {}
    this._catalog = new Catalog({}, {})
  }

  setLocale (code) {
    if (this._loadedTranslations[code] == null) {
      throw new Error(`Locale ${code} has not loaded translations.`)
    }

    this._catalog = new Catalog(this._loadedTranslations[code], this._config)

    for (const componentId in this._registry) {
      setTimeout(() => this._registry[componentId](), 5)
    }
  }

  loadTranslations (code, translations) {
    this._loadedTranslations[code] = translations
  }

  registerComponent (callback) {
    this._registryCount += 1
    const newId = this._registryCount
    this._registry[newId] = callback

    return () => {
      delete this._registry[newId]
    }
  }

  updateConfig (newSettings) {
    for (const key of ['debugMode']) {
      this._config[key] = newSettings[key]
    }
  }

  get catalog () {
    return this._catalog
  }
}

const config = new Config()

export default config

export {
  config,
  Config
}
