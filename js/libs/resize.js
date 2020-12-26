import { width, height } from "../config.js"

const resize = canvas => {
  resizeHandler(canvas)
  document.body.addEventListener("resize", () => {
    resizeHandler(canvas)
  })
}

const resizeHandler = (canvas) => {
  Object.assign(canvas, {
    width, 
    height
  })
}

export default resize