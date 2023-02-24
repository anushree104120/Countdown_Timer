const enddate="21 February 2023 2:51 PM"
document.getElementById("end-date").innerText=enddate;
const inputs=document.querySelectorAll("input");
function updateTimer() {
    future = new Date(enddate);
    now = new Date();
    diff = future - now;
    if(diff<0){
        document.getElementById("end").innerHTML="CONGRATS!!!! HAPPY MARRIAGE ANNIVERSARY";
        return;
    }

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
    inputs[0].value=d;
    inputs[1].value=h;
    inputs[2].value=m;
    inputs[3].value=s;  
}

setInterval('updateTimer()', 1000);