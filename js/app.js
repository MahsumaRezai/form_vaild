// vaild date
function data() {
    let username = document.getElementById("user").value;
    let emailadd = document.getElementById("email").vlaue;
    let pass = document.getElementById("password").value;
    let date = document.getElementById("db").value;
    let vaild = true;
    if (username == "") {
        document.getElementById("suser").style.display = "inline";
        vaild = false;
    }
    if (emailadd == "") {
        document.getElementById("semail").style.display = "inline";
        vaild = false;
    }
    if (pass == "") {
        document.getElementById("spassword").style.display = "inline";
        vaild = false;
    }
    if (date == "") {
        document.getElementById("sbd").style.display = "inline";
        vaild = false;
    }

    return vaild;
}