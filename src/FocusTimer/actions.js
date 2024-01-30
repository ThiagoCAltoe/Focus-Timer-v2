import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  clearInterval(state.countdownID)
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function upFive() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes + 5 > 60) {
    timer.updateDisplay(60, 0)
    return
  }
  minutes = minutes + 5
  timer.updateDisplay(minutes, seconds)
}

export function downFive() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes - 5 < 0) {
    return
  }
  minutes = minutes - 5
  timer.updateDisplay(minutes, seconds)
}

export function toggleForest() {
  state.isForest = document.documentElement.classList.toggle("forest-on")

  if (state.isForest) {
    sounds.bgForest.play()
    return
  }
  sounds.bgForest.pause()
}

export function toggleRain() {
  state.isRain = document.documentElement.classList.toggle("rain-on")

  if (state.isRain) {
    sounds.bgRain.play()
    return
  }
  sounds.bgRain.pause()
}

export function toggleCoffe() {
  state.isCoffe = document.documentElement.classList.toggle("coffe-on")

  if (state.isCoffe) {
    sounds.bgCoffe.play()
    return
  }
  sounds.bgCoffe.pause()
}

export function toggleFire() {
  state.isFire = document.documentElement.classList.toggle("fire-on")

  if (state.isFire) {
    sounds.bgFire.play()
    return
  }
  sounds.bgFire.pause()
}
