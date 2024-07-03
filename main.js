

var time = document.getElementById("utc-time");

const setTime = () =>{
    var d = new Date();
    
    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;
}

setInterval(setTime, 1000)


var day = document.getElementById("day-of-week");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
day.innerHTML = days[new Date().getDay()]
