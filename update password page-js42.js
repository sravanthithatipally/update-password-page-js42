let newpasswordele = document.getElementById("newPassword");
let confirmpasswordele = document.getElementById("confirmPassword");
let buttonele = document.getElementById("updateBtn");
let formele = document.getElementById("updatePasswordForm");
let firsterrorele = document.getElementById("newPasswordErrMsg");
let seconderrorele = document.getElementById("confirmPasswordErrMsg");


function function1() {
    if (newpasswordele.value === "") {
        firsterrorele.textContent = "Required*";
    } else {
        firsterrorele.textContent = "";
    }
}

function function2() {
    let newpasswordvalue = newpasswordele.value;
    let confirmpasswordvalue = confirmpasswordele.value;
    if (newpasswordvalue !== confirmpasswordvalue) {
        seconderrorele.textContent = "Passwords must be same";
    } else {
        seconderrorele.textContent = "";
    }
}


newpasswordele.addEventListener("blur", function1);
confirmpasswordele.addEventListener("blur", function2);

formele.addEventListener("submit", function(event) {
    event.preventDefault();
    function1();
    function2();
});