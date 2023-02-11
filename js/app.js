// vaild date
function data() {
    let username = document.getElementById("user").value;
    let emailadd = document.getElementById("email").vlaue;
    let pass = document.getElementById("password").value;
    let date = document.getElementById("db").value;
    let vaild = true;
    if (username == "") {
        alert("palse write your name");
        vaild = false;
    }
    if (emailadd == "") {
        alert("write your emali");
        vaild = false;
    }
    if (pass == "") {
        alert("write your password");
        vaild = false;
    }
    if (date == "") {
        alert("write your date");
        vaild = false;
    }
    return vaild;
}