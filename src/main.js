// Importar o arquivo toggle-mode.js, se necessário
import "./toggle-mode.js"

// Importar o módulo FocusTimer
import * as FocusTimer from "./FocusTimer/index.js"

// Iniciar o temporizador de foco com 30 minutos e 0 segundos
FocusTimer.start(30, 0)

// Registrar o tempo de início do temporizador de foco
FocusTimer.registerStartTime()

// Iniciar o Web Worker
var countdownWorker = new Worker("countdownWorker.js")

// Função para calcular e enviar o tempo decorrido para o Web Worker
function sendElapsedTime() {
  var elapsedTime = new Date() - FocusTimer.getStartTime() // Tempo decorrido desde o início da contagem regressiva
  countdownWorker.postMessage({ elapsedTime: elapsedTime }) // Enviar o tempo decorrido para o Web Worker
}

// Enviar o tempo decorrido para o Web Worker a cada segundo
setInterval(sendElapsedTime, 1000)
