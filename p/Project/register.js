document.getElementById("btnp").addEventListener("click", function (event) {
    event.preventDefault();
    var a1 = document.getElementById("Input1").value;
    var a2 = document.getElementById("Input2").value;
    var a3 = document.getElementById("Input3").value;
    var place1 = document.getElementById("place1");
    var place2 = document.getElementById("place2");

    if (a1 === "" || a2 === "" || a3 === "") {
        place1.style.color = "red";
        place1.innerHTML = "Fill all required details!!";
    } else if (a2 !== a3) {
        place1.style.color = "red";
        place1.innerHTML = "Error password dose not match!!";
    } else {
        place1.style.color = "green";
        place2.style.color = "green";
        place1.innerHTML = "SUCCESS!!";
        place2.innerHTML = "You are registered you will now redirected to login page!!";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 2000);
    }
});
