import keyObject from "./key";
import { checkIfLoading, showData } from "./showData";

function callForWeather() {
    checkIfLoading()
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${keyObject.apiKey}&q=${document.querySelector("#weatherInput").value}&aqi=no`).
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

export default callForWeather