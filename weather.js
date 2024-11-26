let button = document.querySelector(".button")
let input = document.querySelector(".input")

button.addEventListener("click", function(){
    let newInput = input.value

    let API_KEY = "155535e66e7fbd048b856955932e7529"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newInput}&appid=${API_KEY}`, {
        method: "GET"
    })

    .then(Response => {
        if(!Response.ok){
            console.log("no.")
        } return Response.json()
    })

    .then(data => {
        console.log(data)

        let temp = Math.round(data.main.temp - 273.15)
        let temp2 = `${temp}°C`
        let weather = document.querySelector(".weather")
        let p = document.querySelector("p")
        p.textContent = temp2
        weather.append(p)

        let pp = document.createElement("p")
        let country = data.sys.country
        pp.textContent = country
        weather.append(pp)

        let ppp = document.createElement("p")
        let city = data.name
        ppp.textContent = city
        weather.append(ppp)

       

        
    })

    .catch(error => {
        console.log(error)
    })
})




