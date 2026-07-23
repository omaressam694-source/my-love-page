// ==========================
// ELEMENTS
// ==========================

const startBtn = document.getElementById("startBtn");
const hero = document.querySelector(".hero");
const main = document.getElementById("main");

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

const topBtn = document.getElementById("topBtn");

const modal = document.getElementById("letterModal");
const openLetter = document.getElementById("openLetter");
const closeModal = document.getElementById("closeModal");

const wishBtn = document.getElementById("wishBtn");

// ==========================
// OPEN GIFT
// ==========================

startBtn.addEventListener("click",()=>{

hero.style.display="none";

main.style.display="block";

song.play().catch(()=>{});

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// ==========================
// MUSIC
// ==========================

musicBtn.addEventListener("click",()=>{

if(song.paused){

song.play();

musicBtn.innerHTML="⏸";

}else{

song.pause();

musicBtn.innerHTML="🎵";

}

});

// ==========================
// TIMER
// ==========================

const startDate=new Date("March 8,2024 00:00:00");

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateTimer,1000);

updateTimer();
// ==========================
// LETTER
// ==========================

openLetter.onclick=function(){

modal.style.display="flex";

}

closeModal.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}

// ==========================
// TOP BUTTON
// ==========================

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// ==========================
// FLOATING HEARTS
// ==========================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (6 + Math.random()*4) + "s";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);

}

setInterval(createHeart,700);

// ==========================
// MAKE A WISH
// ==========================

wishBtn.addEventListener("click",()=>{

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["❤️","💖","💕","💗","✨"][Math.floor(Math.random()*5)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

    wishBtn.innerHTML="🎉 Happy Birthday Zina ❤️";

    wishBtn.disabled=true;

    setTimeout(()=>{

        wishBtn.innerHTML="✨ Make A Wish";

        wishBtn.disabled=false;

    },4000);

});
