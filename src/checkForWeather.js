import keyObject from "./key";
import { checkIfLoading, showData } from "./showData";

const callForWeather = ()=> {
    checkIfLoading()
        fetch(`https://api.weatherapi.com/v1/current.json?key=${keyObject.apiKey}&q=${document.querySelector("#weatherInput").value}&aqi=no`)
            .then(res => res.json())
            .then(data => {            
                setTimeout(() => {
                    if (data) {
                        let { current } = data;
                        let { location } = data;
                        showData([current, location]);
                        weatherInput.value = "";
                    }
                }, 1000);
            })
            .catch(err => {
                console.log(err)
            })

}

export default callForWeather