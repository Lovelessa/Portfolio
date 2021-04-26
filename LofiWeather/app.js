// after page loads function runs to grab location
window.addEventListener('load', ()=> {
    let lon;
    let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let localTimeZone = document.querySelector('.location-timezone');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)

            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=bd62628f129a817f1d50db7210b477b0`;

            fetch(api)
                .then(response => {
                return response.json(); //parse the data
                })
                .then(data => {
                console.log(data);
                const {description, icon}= data.weather[0];
                const {temp} = data.main;
                const {name} = data;
                //set Dom Elements from API
                tempDescription.textContent = description;
                tempDegree.textContent = temp;
                localTimeZone.textContent = name;
                //set icon
                    
                })
        });
    }
});



//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//2caefa76186fe46255b40dc7b1ba774c
//bd62628f129a817f1d50db7210b477b0
