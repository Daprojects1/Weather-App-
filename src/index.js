import "../css/styles.css"
import callForWeather from "./checkForWeather";

let weatherInput = document.querySelector("#weatherInput");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
     callForWeather()
})
weatherInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") return callForWeather();
})
