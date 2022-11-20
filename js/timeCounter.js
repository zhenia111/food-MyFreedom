
const deadline = '2023-10-11';

//отсчет времени ведется с 1970-01-01
//console.log(Date.parse('1970-10-11'));


function getTimeRemaining(endtime) {
    //вернет количетво в милисекндах!!! большое
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        //получим остаток от неполных суток!!!!!! 
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}

//дополнительная функция если дни и часы будут меньше 10 чтоб 0 подстовлялчЯ в переди
function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`
    } else {
        return num
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    timeInterval = setInterval(updateClock, 1000);
    

    //чтобы небыло маргание версти!!!
    // updateClock();

    function updateClock(){
        //в вызове этой функции вернется обьект !!!!!с полями дни минуты сек и т.д
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

        if(t.total <= 0){
            clearInterval(timeInterval);
        } 

    }


    
}

setClock('.timer', deadline);





const time = "2020-05-11";
const arr = time.split("-");


// const btn = document.querySelector(".btn_white");
// let i;

// btn.addEventListener("click",() => {
//     //clearInterval(i);
//     i= setInterval(()=>{
// console.log(1);
//     },1000);
// })