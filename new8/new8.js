let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){

    if(userName.value.trim()===""){
       onError(userName,"Book title cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

}

//prix 
if(isNaN(Number(input[2].value))){
    input[2].nextElementSibling.innerHTML = "Enter a Number"
    input[2].nextElementSibling.style.color = "Red"
    validation++;
}