export default class Catalog {
  constructor (data, config) {
    this._data = data
    this._config = config
  }

  translate (key, params) {
    let translatedText = key

    if (this.hasTranslation(key)) {
      translatedText = this._data[key]
    } else {
      if (this.debugMode) {
        console.warn(`translation not found for key: ${key}`)
      }
    }

    for (const paramName in params) {
      translatedText = translatedText.replace(`{{${paramName}}}`, params[paramName])
    }

    return translatedText
  }

  hasTranslation (key) {
    return this._data != null && this._data[key] != null
  }

  get debugMode () {
    return this._config.debugMode
  }
}
