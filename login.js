let array = ['Taher'];




function validateForm() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let button = document.getElementById('submitButton');
    if (array.includes(username) && password == '123') {
        swal("Logged in");

        return false;
    } else {
        swal('Invalid Credentials');

    }
}




function pushData() {
    let inputText = document.getElementById('addUserInput').value

    array.push(inputText);


    let pval = '';
    for (i = 0; i < array.length; i++) {
        pval = pval + array[i] + " "
    }

    document.getElementById('ptext').innerHTML = pval;
    swal('User added')
    document.getElementById('addUserInput').value = ''
}