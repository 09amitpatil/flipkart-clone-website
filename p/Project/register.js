document.getElementById("btnp").addEventListener("click", sub)

function sub() {
    var a1 = document.getElementById("Input1").value;
    var a2 = document.getElementById("Input2").value;
    var a3 = document.getElementById("Input3").value;

    if (a1 == "" && a2 == "" && a3 == "") {
        document.getElementById("place1").style.color = "red";
        document.getElementById("place2").style.color = "red";
        document.getElementById("place1").innerHTML = "Error!!";
        document.getElementById("place2").innerHTML = "Fill all required details!!";
    }
    else if(a2!=a3){
        document.getElementById("place1").style.color = "red";
        document.getElementById("place1").innerHTML = "Error password dose not match!!";

    }
    else if (a1 !== "" && a2 !== "" && a3 !== "" ) {
        document.getElementById("place1").style.color = "green";
        document.getElementById("place2").style.color = "green";
        document.getElementById("place1").innerHTML = "SUCCESS!!";
        document.getElementById("place2").innerHTML = "You are registered proceed to login!!";

    }
}