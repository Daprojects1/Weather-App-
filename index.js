import "./styles.css"
import callForWeather from "./checkForWeather";

let weatherInput = document.querySelector("#weatherInput");
let btn = document.querySelector("#btn");


let appender = (appendee,...items) => {
    items.forEach(item=> appendee.appendChild(item))
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
     callForWeather()
})
weatherInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") return callForWeather();
})

export { appender }