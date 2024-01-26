let img=document.querySelector("img");
let audio=document.querySelector("audio");

let backward=document.querySelector(".fa-backward");
let forward=document.querySelector(".fa-forward");
let playBtn=document.querySelector(".fa-play");
let pauseBtn=document.querySelector(".fa-circle-pause");
let vol=document.querySelector("#volume");


let maicont=document.querySelector("#main-cont");

 



let storage=[
{imgSrc:"images/simg1.jpg",     audioSrc:"songs/sample-3s.mp3"},
{imgSrc:"images/simg2.jpeg",audioSrc:"songs/sample-6s.mp3"},
{imgSrc:"images/simg3.jpeg",    audioSrc:"songs/sample-9s.mp3"},
{imgSrc:"images/simg4.jpeg",     audioSrc:"songs/sample-12s.mp3"},
{imgSrc:"images/simg5.jpeg", audioSrc:"songs/sample-15s.mp3"}]

// console.log(storage);
let index=0;
let realTime=0;



function playfun(){
    img.src=storage[index].imgSrc;
    audio.src=storage[index].audioSrc;
    audio.currentTime=realTime;
    audio.play();
    pauseBtn.style.display="block";
    playBtn.style.display="none";


    setInterval(()=>{
        maicont.value=((audio.currentTime)/audio.duration)*100;


    },1000)

}

function pausePlay(){
    if(audio.paused){
        playfun();

    }else{
        audio.pause();
        realTime=audio.currentTime;

        pauseBtn.style.display="none";
        playBtn.style.display="block";
    }


}
pauseBtn.addEventListener("click",pausePlay);
playBtn.addEventListener("click",pausePlay);

forward.addEventListener( "click", ()=>{
    index=(index+1)%storage.length
    realTime=0;
    playfun()
})

backward.addEventListener("click",()=>{
    index=(index-1+storage.length)%storage.length;
    realTime=0;
    playfun();
})

audio.addEventListener("ended",()=>{
    index=(index+1)%storage.length;
    realTime=0;
    playfun()
})

vol.addEventListener("input",()=>{
    audio.volume=vol.value
})

maicont.addEventListener("input",()=>{
    audio.currentTime=maicont.value*audio.duration/100
})