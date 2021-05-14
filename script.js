
const current_temp=document.querySelector('.current-temp')
const temp_max=document.querySelector('.temp-max');
const temp_min=document.querySelector('.temp-min');
const humidity=document.querySelector('.humidity');



const city='ujjain';

window.addEventListener('load',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
            lat=position.coords.latitude;
            long=position.coords.longitude;

            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=7e87816d939310608a58b6cdf39451cd`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data)
                current_temp.innerHTML='Current-temp: '+`${data.main.temp}`+' &#x2103;'
                temp_max.innerHTML='Max-temp: '+`${data.main.temp_max}`+' &#x2103;'
                temp_min.innerHTML='Min-temp: '+`${data.main.temp_min}`+' &#x2103;'
                humidity.innerHTML='Humidity: '+`${data.main.humidity}`

            })
        })
    }
})
