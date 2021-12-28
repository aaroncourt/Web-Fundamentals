console.log("page loaded...");

function startPreview(elem){
    console.log(elem)

    var video = document.querySelector(elem)

    video.volume = 0.0;
    video.currentTime = 1;
    video.playbackRate = 1;
    video.play();

    console.log("video started...");
}

function stopPreview(){

    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();

    console.log("video stopped");
}

// function smallStartPrev(elem){
//     console.log(elem)
//     var video = document.querySelector(elem)

//     // video.muted = true;
//     video.currentTime = 1;
//     video.playbackRate = 1;
//     video.play();

//     console.log("video started...");
// }