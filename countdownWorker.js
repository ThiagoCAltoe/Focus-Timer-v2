// countdownWorker.js

self.addEventListener(
  "message",
  function (e) {
    var data = e.data

    if (data.elapsedTime !== undefined) {
      // Se o tempo decorrido foi recebido do aplicativo
      var elapsedTime = data.elapsedTime
      var minutes = Math.floor(elapsedTime / (1000 * 60)) // Converter milissegundos em minutos
      var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000) // Converter milissegundos restantes em segundos

      // Lógica da contagem regressiva a partir do tempo decorrido
      var totalSeconds = minutes * 60 + seconds
      var countdownInterval = setInterval(function () {
        totalSeconds--
        if (totalSeconds <= 0) {
          clearInterval(countdownInterval)
          self.postMessage("done")
        } else {
          self.postMessage(totalSeconds)
        }
      }, 1000)
    }
  },
  false
)
