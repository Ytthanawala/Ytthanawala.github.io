let userArray = ['Taher'];




function validateForm() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let button = document.getElementById('submitButton');
    if (username == userArray[0] && password == '123') {
        swal("Logged in");
        button; //gets the DOM for sweetalert to run

        return false;
    }
    if (username == userArray[1] && password == '123') {
        swal("Logged in");
        button; //gets the DOM for sweetalert to run

        return false;
    }
    if (username == userArray[2] && password == '123') {
        swal("Logged in");
        button; //gets the DOM for sweetalert to run

        return false;
    } else {
        swal('Invalid Credentials');
        button;
    }
}

function addUser() {
    swal('Usernames added')
    userArray.push('David');
    userArray.push('Isaac')
    userArray.push('Newton')
}