let muzyka = document.getElementById("muzyka");
let btn = document.getElementById("playBtn");
let volumeSlider = document.getElementById("volumeSlider");
let songList = document.getElementById("songList");

let savedVolume = localStorage.getItem("volume");
let savedSong = localStorage.getItem("song");
let playing = localStorage.getItem("playing");

if(savedSong){
    muzyka.src = savedSong;
    songList.value = savedSong;
}else{
    muzyka.src = songList.value;
}

if(savedVolume){
    muzyka.volume = savedVolume;
    volumeSlider.value = savedVolume;
}else{
    muzyka.volume = 0.5;
}

if(playing === "true"){
    muzyka.play();
    btn.innerText = "⏸";
}

function toggleMusic(){

    if(muzyka.paused){
        muzyka.play();
        btn.innerText = "⏸";
        localStorage.setItem("playing","true");
    }else{
        muzyka.pause();
        btn.innerText = "▶";
        localStorage.setItem("playing","false");
    }

}

volumeSlider.addEventListener("input",function(){
    muzyka.volume = this.value;
    localStorage.setItem("volume",this.value);
});

songList.addEventListener("change",function(){

    muzyka.src = this.value;
    localStorage.setItem("song",this.value);

    muzyka.play();
    btn.innerText = "⏸";
    localStorage.setItem("playing","true");

});