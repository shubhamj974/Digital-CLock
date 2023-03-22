let cl = console.log;


function DigitalCLock(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";

    if(hour >= 12){
        session =  "PM"
    }

    if(hour > 12){
        hour = hour - 12
    }
    if(hour < 10){
        hour = "0" + hour
    }
    if(min < 10){
        min = "0" + min
    }
    if(sec < 10){
        sec = "0" + sec
    }
    
    let result = `${hour} : ${min} : ${sec} ${session}`;
    const clock = document.getElementById("digitalClock");
    clock.innerHTML = result;
    cl(hour,min,sec);
    setTimeout(DigitalCLock,1000);
}
DigitalCLock();













