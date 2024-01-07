import { encode, decode } from "./encoding.mjs"

const field1 = document.querySelector("#field1")
const field2 = document.querySelector("#field2")
const encodeButton = document.querySelector("#encode")
const decodeButton = document.querySelector("#decode")

encodeButton.addEventListener("click", ev => {
  field2.value = encode(field1.value)
  field2.style.color = "rgb(0, 0, 0)"
})

decodeButton.addEventListener("click", ev => {
  const decodeString = decode(field1.value)

  if (decodeString == "\x00") {
    field2.value = "Unknown encoding text"
    field2.style.color = "rgb(255, 0, 0)"
  } else {
    field2.value = decodeString
    field2.style.color = "rgb(0, 0, 0)"
  }
})