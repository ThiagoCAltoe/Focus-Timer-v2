import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {
  clearInterval(state.countdownID) // Limpa qualquer intervalo existente

  if (!state.isRunning) {
    return
  }

    let minutes2 = Number(el.minutes.textContent)
    let seconds2 = Number(el.seconds.textContent)

  let initialTime = minutes2 * 60 + seconds2 // Tempo inicial em segundos
  let startTime = Date.now(); // Registrar o tempo de início

  state.countdownID = setInterval(() => {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000) // Tempo decorrido em segundos
    let remainingTime = initialTime - elapsedTime // Tempo restante em segundos

    if (remainingTime <= 0) {
      // Tempo acabou
      reset()
      kitchenTimer.play()
      clearInterval(state.countdownID) // Limpa o intervalo quando o tempo acabar
      return
    }

    let minutes = Math.floor(remainingTime / 60) // Converter para minutos
    let seconds = remainingTime % 60 // Segundos restantes

    updateDisplay(minutes, seconds)
  }, 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}