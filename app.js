let songlist=document.getElementById('song-list');
let progress=document.getElementById('progress');
let play_button=document.getElementById('play-button');

let forward_button=document.getElementById('play-forward');
let backward_button=document.getElementById('play-backward');

let timer=document.getElementById('currentTimer-1');
let timer1=document.getElementById('currentTimer-2');


let songs=[
    {
        name: 'song1',
        id : 1
    },
    {
        name: 'song2',
        id : 2
    },
    {
        name: 'song3',
        id : 3
    },
    {
        name: 'song4',
        id : 4
    },
    {
        name: 'song5',
        id : 5
    },
    {
        name: 'song6',
        id : 6
    }
    
] 

let audio=new Audio('./Assets/song1.mp3');

for(let song of songs){
    let li=document.createElement('li');
    li.innerText=song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');
    songlist.append(li);
}

play_button.addEventListener('click',()=>{
    audio.paused ? audio.play(): audio.pause();

    if(play_button.children[0].classList.contains('fa-play')){
        play_button.children[0].classList.remove('fa-play')
        play_button.children[0].classList.add('fa-pause')
    }
    else{
        play_button.children[0].classList.add('fa-play')
        play_button.children[0].classList.remove('fa-pause')
    }
})

audio.addEventListener('timeupdate',function(){
    let currentProgress=audio.currentTime*100/audio.duration;
    progress.value=currentProgress;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = (audio.currentTime % 60).toFixed(0);   
    timer.innerText=`${minutes}:${seconds}`;

    const minutes1 = Math.floor(audio.duration / 60);
    const seconds1 = (audio.duration % 60).toFixed(0);  
    timer1.innerText=`${minutes1}:${seconds1}`;

    
    
})

progress.addEventListener('change', function(){
    let updatedtime=progress.value*audio.duration/100;
    audio.currentTime=updatedtime;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = (audio.currentTime % 60).toFixed(0);   
    timer.innerText=`${minutes}:${seconds}`;
   
})


songlist.addEventListener('click', function(event){
    let songID=event.target.getAttribute('id');
    audio.src=`./Assets/song${songID}.mp3`;
    audio.currentTime=0;

    audio.play();
    play_button.children[0].classList.add('fa-pause')
    play_button.children[0].classList.remove('fa-play')

})






