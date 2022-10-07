const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const timerDisplay = document.getElementById("time")
const seconds  = document.querySelector(".seconds")
const minutes  = document.querySelector(".minutes")
const hours = document.querySelector(".hours")


let sec = 0
let min = 0
let hour = 0
let secInterval;

startBtn.addEventListener('click', () =>{
    secInterval = setInterval(incrementSec, 1000) 
})

stopBtn.addEventListener('click', () =>{
    if(secInterval !== 0){
        clearInterval(secInterval)
    }
})

resetBtn.addEventListener('click', () =>{
   clearInterval(secInterval)
   hours.innerText = "00:"
   minutes.innerText = "00:"
   seconds.innerText = "00"
   sec = 0
   min = 0
   hour = 0

})
const incrementSec = ()=>{
    
    if(sec >= 59){
        sec = -1
        min++
        minutes.innerText = min
    }
    if(min >=59){
        min = -1
        hour++
        hours.innerText = hour
    }


    sec++;
    seconds.innerText = sec;
}
