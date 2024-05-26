document.addEventListener('DOMContentLoaded',()=>{
    const apiKey="4922368445e864ad42085bccf933c52e";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    // OPENWEATHERMAP WEBSITE API

    let searchBox=document.querySelector("#input");
    let searchBtn=document.querySelector("#button");

    async function checkWeather(city){
        let response = await fetch(apiUrl+city+`&appid=${apiKey}`);
        let data = await response.json();
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".hd h3").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind h3").innerHTML=data.wind.speed+"km/h";
        document.querySelector("#weather").src=`./images/${(data.weather[0].main)}.png`;
    }
    searchBox.addEventListener('keypress',(event)=>{
        if(event.key==='Enter'){
            searchBtn.click();
            searchBox.value="";
            searchBox.blur();
        }  
    })
    searchBtn.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
})
