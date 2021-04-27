// after page loads function runs to grab location
window.addEventListener('load', ()=> {
    //selected elements
    let lon;
    let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let localTimeZone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.weather-icon');
    
    //grabbing the geolocation from the browser 
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            
            //passing the coords from the browser into variables
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=bd62628f129a817f1d50db7210b477b0`;

            fetch(api)
                .then(response => {
                return response.json(); //parse the data
                })
                .then(data => {
                console.log(data);
                const {description} = data.weather[0];
                const {icon} = data.weather[0];
                const {temp} = data.main;
                const {name} = data;
                //set Dom Elements from API
                tempDescription.textContent = description;
                tempDegree.textContent = temp;
                localTimeZone.textContent = name;
                //link icon
                locationIcon.innerHTML = `<img src="icons/${icon}.png"/>`;
                    
                })
        });
    }

});



