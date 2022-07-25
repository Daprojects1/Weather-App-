let displayWeather = document.querySelector(".displayWeather")
import appender from "./appender";
import ChangeToFarenheight from "./changeToFarenheight";

const showData = (data) => {
    if (!data[0] && !data[1]) {
        displayWeather.innerHTML = "<h1>" + "Please Input a Valid Location" + "<h1>"
        return;
    } else if (data[0] && data[1]) {
        const { temp_c, temp_f, condition: { icon, text } } = data[0]
        const {name,country} = data[1]
        displayWeather.innerHTML = "";
        let card = document.createElement("div");
        card.classList.add("card")

        // CARD HEADER
        let h2 = document.createElement("h2");
        h2.classList.add("conditionh3")
        h2.innerText = `The Weather for ${name}, ${country}`

        // WEATHER CONDITIONS
        let h3 = document.createElement("h3");
        h3.innerText = `${text}`

        // TEMPERATURE TEXT 
        let tempH3 = document.createElement("h3");
        tempH3.classList.add("tempH3")
        tempH3.innerText = `${temp_c}ºC`;
        ChangeToFarenheight(tempH3, [temp_c, temp_f])

        // ICON IMAGE
        let img = document.createElement("img");
        img.setAttribute("src", `${icon}`);
        img.classList.add("mainImg")

        appender(card, h2, h3,img,tempH3)
        appender(displayWeather, card);  
    } 
}   

const checkIfLoading = () => {
    displayWeather.innerHTML = "loading ..."
}

export { showData, checkIfLoading}