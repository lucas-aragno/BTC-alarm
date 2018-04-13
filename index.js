const cryptoSocket = require('crypto-socket')
const player = require('play-sound')(opts = {})
require('dotenv').config()

cryptoSocket.start("bitfinex",['LTCBTC','BTCUSD'])

let state = {
  lastValue: null,
  isPlaying: false
}

let parseValue = (exchange) => 
  (exchange['bitfinex'] && exchange['bitfinex']['BTCUSD'])
    ? exchange['bitfinex']['BTCUSD']
    : null

let playAlarm = () => {
  state.isPlaying = true
  player.play(process.env.SONG_PATH, (err) => {
    if (err) throw err
    state.isPlaying = false
  })
}

let processValue = (value) => {
  let { lastValue, isPlaying } = state
  if (value != lastValue && !isPlaying) {
    playAlarm()
  } 
}


setInterval(
  () => {
    let exchange = cryptoSocket.Exchanges
    currentValue = parseValue(exchange)
    processValue(currentValue)
    state.lastValue = currentValue
  },1000)

