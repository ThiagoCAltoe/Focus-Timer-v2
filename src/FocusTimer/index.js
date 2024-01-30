import state from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

let startTime = null

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  // Registrar o tempo de início quando o temporizador é iniciado
  registerStartTime()

  timer.updateDisplay()

  events.registerControls()
  events.registerSounds()
}

export function registerStartTime() {
  startTime = new Date()
}

export function getStartTime() {
  return startTime
}
