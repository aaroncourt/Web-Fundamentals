console.log("page loaded...");

function startPreview(elem){
    console.log(elem)

    var video = document.querySelector(elem)

    console.log(video)

    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 1;
    video.play();

    console.log("video started...");
}

function stopPreview(elem){
    var video = document.querySelector(elem)

    console.log(video)
    
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();

    console.log("video stopped");
}
