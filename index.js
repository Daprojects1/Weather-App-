import keyObject from "./otherfile"
import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
let weatherInput = document.querySelector("#weatherInput");
let btn = document.querySelector("#btn");
let displayWeather = document.querySelector(".displayWeather")

let appender = (appendee,...items) => {
    items.forEach(item=> appendee.appendChild(item))
}
let ChangeToFarenheight = (item, values) => {
        item.addEventListener("click", () => {
            if (item.innerText === `${values[0]}ºC`) { 
                item.innerText=`${values[1]}ºF`
            } else {
                item.innerText = `${values[0]}ºC`
            }
        })
    }
const checkIfLoading = () => {
       displayWeather.innerHTML = "loading ..."
}
let showData = (data) => {
    if (!data[0] && !data[1]) {
        displayWeather.innerHTML = "<h1>" + "Please Input a Valid Location" + "<h1>"
        return;
    } else if (data[0] && data[1]) {
        displayWeather.innerHTML = "";
        let card = document.createElement("div");
        card.classList.add("card")
        // header for card
        let h2 = document.createElement("h2");
        h2.classList.add("conditionh3")
        h2.innerText = `The Weather for ${data[1].name}, ${data[1].country}`
        // weather conditions
        let h3 = document.createElement("h3");
        h3.innerText = `${data[0].condition.text}`
        // temp text 
        let tempH3 = document.createElement("h3");
        tempH3.classList.add("tempH3")
        tempH3.innerText = `${data[0].temp_c}ºC`;
        ChangeToFarenheight(tempH3, [data[0].temp_c, data[0].temp_f])
        // img
        let img = document.createElement("img");
        img.setAttribute("src", `${data[0].condition.icon}`);
        img.classList.add("mainImg")
        appender(card, h2, h3,img,tempH3)
        appender(displayWeather, card);  
    } 
}   
    function callForWeather() {
    checkIfLoading()
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${keyObject.apiKey}&q=${weatherInput.value}&aqi=no`).
    then(result => result.json())
        .then(data => {
            setTimeout(() => {
                if (data){
                    let { current } = data;
                    let { location } = data;
                    showData([current, location]);
                    weatherInput.value = "";  
            }       
            }, 1000)
       
        })
    .catch(e => {
        console.log(e, "failed")
    })
}
    btn.addEventListener("click", (e) => {
    e.preventDefault();
     callForWeather()
})
weatherInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") return callForWeather();
})
})
