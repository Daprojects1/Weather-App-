let displayWeather = document.querySelector(".displayWeather")
import { appender } from ".";
import ChangeToFarenheight from "./changeToFarenheight";

const showData = (data) => {
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

const checkIfLoading = () => {
    displayWeather.innerHTML = "loading ..."
}

export { showData, checkIfLoading}