const getWeatherBtn = document.querySelector('button')
const toPrint = document.querySelector('#temp')

const api_key = 'a5277a670215173962c7d3ae19ba1757'

getWeatherBtn.addEventListener('click', () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=abuja&appid=${api_key}&units=metric`).then(res => res.json())
    .then(data => {
        console.log(data)
        toPrint.innerText = `Temperature: ${data.main.temp}°C`
    })
})