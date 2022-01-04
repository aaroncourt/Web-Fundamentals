function closeAlert(element) {
    console.log(element);

    var alertID = document.querySelector(element);

    alertID.style.display = 'none';
}

function cityAlert(element) {
    console.log(element);

    var alertID = document.querySelector(element);

    alertID.style.display = 'flex';
}

function temperature (choice) {

    var formula = choice.value;

    if (formula == "fahrenheit") {

        for (let i = 0; i < 4; i++) {

            var newHigh = document.querySelector('#high' + i).innerHTML;

            newHigh = Math.round(newHigh*1.8 + 32);

            document.querySelector('#high' + i).innerHTML = newHigh;

            var newLow = document.querySelector('#low' + i).innerHTML;

            newLow = Math.round(newLow*1.8 + 32);

            document.querySelector('#low' + i).innerHTML = newLow;
        }
    } else if (formula == "celcius") {

        for (let i = 0; i < 4; i++) {

            var highArr = [24,27,21,26];

            var lowArr = [18,19,16,21];

            document.querySelector('#high' + i).innerHTML = highArr[i];

            document.querySelector('#low' + i).innerHTML = lowArr[i];
        }
    }
}
