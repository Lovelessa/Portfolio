// after page loads function runs to grab location
window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={bd62628f129a817f1d50db7210b477b0}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
        });
    }
        
});

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//2caefa76186fe46255b40dc7b1ba774c
//bd62628f129a817f1d50db7210b477b0
