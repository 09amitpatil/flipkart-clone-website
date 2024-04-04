document.getElementById("btnp").addEventListener("click", sub)

function sub() {
    var a1 = document.getElementById("validationCustom01").value;
    var a2 = document.getElementById("validationCustom03").value;
    var a3 = document.getElementById("validationCustom04").value;
    var a4 = document.getElementById("validationCustom05").value;
    
    if (a1 == "" && a2 == "" && a3 == "" && a4 == "") {
        document.getElementById("place1").style.color = "red";
        document.getElementById("place2").style.color = "red";
        document.getElementById("place1").innerHTML = "Error!!";
        document.getElementById("place2").innerHTML = "Fill all required details!!";

    }
    else if (a1 !== "" && a2 !== "" && a3 !== "" && a4 !== "") {
        document.getElementById("place1").style.color = "green";
        document.getElementById("place2").style.color = "green";
        document.getElementById("place1").innerHTML = "SUCCESS!!";
        document.getElementById("place2").innerHTML = "Order placed!!";
    }



}