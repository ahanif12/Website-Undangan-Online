const countdownPernikahan = document.querySelector('.countdownTime');
const nowTime = document.querySelector('.nowTime')

// nowTime
const time = () => {
    const now = new Date();

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const second = now.getSeconds()
    nowTime.innerHTML = '<span>' +  hours + ' : ' + minutes + ' : ' + second + '</span>'
}
setInterval(time, 1000)



// Countdown
const countdown = new Date('Mar 03, 2023')
const setCountdown = setInterval(() => {
    const now = new Date()

    const distance = countdown - now

    const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minute = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    const second = Math.floor((distance % (1000 * 60) / (1000)));

    countdownPernikahan.innerHTML = '<span> ' + days + ' : ' + hours + ' : ' + minute + ' : ' + second + ' </span>'
});