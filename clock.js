//ساعة الحائط بداية
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); // Date  بيطلع لك التاريخ
    const seconds = now.getSeconds(); //بيطلع لك الثواني فقط
    const secondsDegrees = ((seconds / 60) * 360) + 90; //خوارزمية كتبانها
    secondHand.style.transform = `rotate(${secondsDegrees}deg)` //هنا عشان تتحكم بال rotate
    
    const min = now.getMinutes() // بيطلع لك الدقايق
    const minsDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000)
// ساعة الحائط نهاية


// ساعة الكترونية بداية
const hoursHandE = document.querySelector(".hours-hande");
const minHandE = document.querySelector(".min-hande");
const secondHandE = document.querySelector(".second-hande");

function setDateE() {
    const now = new Date();
    const hours = now.getHours();
    hoursHandE.textContent = `${hours}`;
    const min = now.getMinutes()
    minHandE.textContent = `: ${min}`;
    const second = now.getSeconds();
    secondHandE.textContent = `: ${second}`;
}

setInterval(setDateE, 1000)
//ساعة الكترونية نهاية