'use strict'

const ColorHash = require('color-hash')
const colorHash = new ColorHash()

module.exports = (peerId) => {
  return colorHash.hex(peerId.substring(Math.round(peerId.length / 2)))
}
