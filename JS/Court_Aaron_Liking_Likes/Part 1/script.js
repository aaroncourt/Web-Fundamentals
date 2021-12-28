function like(element) {

    var liked = document.querySelector(element);

    console.log(liked)
    
    liked.innerHTML++;

    console.log(liked.innerHTML);
}