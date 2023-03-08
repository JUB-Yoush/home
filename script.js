let time = document.getElementById("currentTime")
updateTime();

setInterval(()=>{
updateTime();
},1000)

function updateTime(){
    let dt = new Date().toLocaleString("en-US", {timeZone: "America/Toronto"})
    year = dt.year
    month = dt.month
    day = dt.day
    hour = dt.hour
    minute = dt.minute
    second = dt.second
    time.textContent = dt + " current time in Toronto, Canada "

}