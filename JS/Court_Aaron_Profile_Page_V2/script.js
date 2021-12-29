function editProfile(elem){

    if (document.querySelector(elem).innerHTML == "Jane Doe"){

        document.querySelector(elem).innerHTML = "David Doe";
    }   
        else{
        
        document.querySelector(elem).innerHTML = "Jane Doe";
        }   
}

function updateAll(elem){
    
    var reqID = document.querySelector(elem);

    if (elem.includes("req1")){

        reqID = document.querySelector("#req1");

        reqID.style.display = "none";

        document.querySelector("#req-total").innerHTML -- ; 

    }   else if(elem.includes("req2")){

            reqID = document.querySelector("#req2");

            reqID.style.display = "none";

            document.querySelector("#req-total").innerHTML -- ; 
        }

    if (elem.includes("approve")){

        document.querySelector("#con-total").innerHTML ++ ;
    }
}




