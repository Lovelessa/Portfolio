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

//movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector('.location-timezone');
const temp = document.querySelector('.temp-degree');
const cloud = document.querySelector('.weather-icon');
const tempType = document.querySelector('.degree-type');

// mouse animation event 
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /10;
    let yAxis = (window.innerHeight / 2 - e.pageY) /10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    //popout
    temp.style.transform = 'translateZ(100px)'
    tempType.style.transform = 'translateZ(75px)'
});
//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cloud.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popback
        //temp
    temp.style.transform = 'translateZ(0px)'
    temp.style.transition = "all 0.5s ease";
        //tempType
    tempType.style.transform = 'translateZ(0px)'
    tempType.style.transition = "all 0.5s ease";
    
});




