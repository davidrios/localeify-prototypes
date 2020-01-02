import config from './config'

function $t (key, params) {
  return config.catalog.translate(key, params)
}

function $tp (key, params) {
  return config.catalog.translate(key, params)
}

export {
  $t,
  $tp
}
