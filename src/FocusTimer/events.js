import { controls, sounds } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"
import state from "./state.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function registerSounds() {
  sounds.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}
