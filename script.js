let songIndex=0;
let audioElement=new Audio("./Songs/1.mp3");
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');
let songs=[
    {songName:"Let me love you" , filepath:"./Songs/1.mp3" , coverpath:"./Images/covers/10.jpg"},
    {songName:"Let  love you" , filepath:"./Songs/2.mp3" , coverpath:"./Images/covers/9.jpg"},
    {songName:"Let meve you" , filepath:"./Songs/3.mp3" , coverpath:"./Images/covers/8.jpg"},
    {songName:"Let me e you" , filepath:"./Songs/4.mp3" , coverpath:"./Images/covers/7.jpg"},
    {songName:"Let me love you" , filepath:"./Songs/5.mp3" , coverpath:"./Images/covers/6.jpg"},
    {songName:"Lete you" , filepath:"./Songs/6.mp3" , coverpath:"./Images/covers/5.jpg"},
    {songName:"Let me love you" , filepath:"./Songs/7.mp3" , coverpath:"./Images/covers/4.jpg"},
    {songName:"Let move you" , filepath:"./Songs/8.mp3" , coverpath:"./Images/covers/3.jpg"},
    {songName:"Let me love you" , filepath:"./Songs/9.mp3" , coverpath:"./Images/covers/2.jpg"},
    {songName:"Leve you" , filepath:"./Songs/10.mp3" , coverpath:"./Images/covers/1.jpg"}
]

  songItems.forEach((element,i)=>{
       element.getElementsByTagName("img")[0].src=songs[i].coverpath;
       element.getElementsByTagName("span")[0].innerText=songs[i].songName;

  })

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
             audioElement.play();
             masterPlay.classList.remove('fa-play-circle');
             masterPlay.classList.add('fa-pause-circle');
             gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    })

    audioElement.addEventListener('timeupdate',()=>{
                 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
                 myProgressBar.value=progress;
    })

    myProgressBar.addEventListener('change',()=>{
            audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
            })

            function makeallplays(){
                Array.from(document.getElementsByClassName("specificsongplay")).forEach((element)=>{
                    element.classList.add("fa-play-circle");
                    element.classList.remove("fa-pause-circle");
                })
            }

           Array.from(document.getElementsByClassName("specificsongplay")).forEach((element)=>{
                element.addEventListener('click',(e)=>{
                    makeallplays();
                    songIndex=parseInt(e.target.id);
                    gif.style.opacity=1;
                    mastersongname.innerText=songs[songIndex].songName;
                    e.target.classList.remove("fa-play-circle");
                    e.target.classList.add("fa-pause-circle");
                    audioElement.src=`Songs/${songIndex+1}.mp3`;
                    audioElement.currentTime=0;
                    audioElement.play();
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle');
                })
            })

            document.getElementById('next').addEventListener('click',()=>{
               if(songIndex>=9){
                songIndex=0;}
                else{
                    songIndex+=1;
                }
                audioElement.src=`Songs/${songIndex+1}.mp3`;
                mastersongname.innerText=songs[songIndex].songName;
                    audioElement.currentTime=0;
                    audioElement.play();
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle');
            })

            document.getElementById('previous').addEventListener('click',()=>{
                if(songIndex<=0){
                 songIndex=0;}
                 else{
                     songIndex-=1;
                 }
                 
                 audioElement.src=`Songs/${songIndex+1}.mp3`;
                 mastersongname.innerText=songs[songIndex].songName;
                     audioElement.currentTime=0;
                     audioElement.play();
                     masterPlay.classList.remove('fa-play-circle');
                     masterPlay.classList.add('fa-pause-circle');
             })