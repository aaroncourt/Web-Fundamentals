function logging (element) {
    var inOut = document.querySelector(element);

    if (inOut.innerHTML == "Login") {
        inOut.innerHTML = "Logout"
    }
    else {
        inOut.innerHTML = "Login"
    }
}

function closeAlert(element) {

    var alertID = document.querySelector(element);

    alertID.style.display = 'none';
}

function likeAlert(element) {

    var alertID = document.querySelector(element);

    alertID.style.display = 'flex';

    console.log(alertID.style.display)
}

function hideAlert(element) {

    var alertID = document.querySelector(element);

    alertID.style.visibility = 'hidden';
}