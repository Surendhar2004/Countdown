console.log("HI");
const countdown = () => {
    const countDate = new Date("jan 30, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now ;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor(( gap % minute) / second);

    document.querySelector(".days").innerText = textDay ;
    document.querySelector(".hour").innerText = textHour ;
    document.querySelector(".minutes").innerText = textMinute ;
    document.querySelector(".seconds").innerText = textSecond ;

    console.log(gap)
};

setInterval(countdown, 1000);