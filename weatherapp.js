const api = {
    key: "fcc8de7015bbb202209bbf0261babf4c",
    base: "https://api.openweathermap.org/data/2.5/"
    }

const city=document.querySelector(".city");
const weather=document.querySelector(".weather");
const hilow=document.querySelector(".hi-low");
const temp=document.querySelector(".temp");
const date=document.querySelector(".date");
const button=document.querySelector(".button");
let   query;
button.addEventListener("click" ,(evt)=>{
    evt.preventDefault();
    const search=document.querySelector(".sexrch");
    query=search.value;
    if(query===""){
        query="new york";
    }
    run();
});



async function run(){
    const response =fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
    const res=(await response).json();
    console.log(res);
    const data=(await res);
    
    city.innerText=data.name;
    temp.innerText=data.main.temp;
    weather.innerText=`${data.weather[0].main} , ${data.weather[0].description}`;
    hilow.innerText=`${data.main.temp_min} / ${data.main.temp_max}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
