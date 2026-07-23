const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

openBtn.onclick = () => {

welcome.style.display = "none";

mainPage.style.display = "block";

song.play();

musicBtn.innerHTML = "⏸ Pause Music";

};

musicBtn.onclick = () => {

if(song.paused){

song.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

song.pause();

musicBtn.innerHTML="🎵 Play Music";

}

};
const startDate = new Date("March 8, 2024 00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerText=days;

document.getElementById("hours").innerText=hours;

document.getElementById("minutes").innerText=minutes;

document.getElementById("seconds").innerText=seconds;

}

setInterval(updateTimer,1000);

updateTimer();
const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart-float";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);

