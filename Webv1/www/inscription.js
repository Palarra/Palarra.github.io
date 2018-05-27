/* Declaration des variables */

var size_formulaire = 5;
var donneesFormulaire = new Array(size_formulaire);
for (var i = 0; i < size_formulaire; i++)
{
    donneesFormulaire[i] = false;
}

var submit_button = document.getElementById("submit");
var reset_button = document.getElementById("reset");


var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var username = document.getElementById("username");
var email = document.getElementById("useremail");
var pwd = document.getElementById("userpwd");
var pwd2 = document.getElementById("userpwd2");

submit_button.disabled = true;

reset_button.addEventListener("click", resetFormulaire);


lastname.addEventListener("input", checkLastname);
firstname.addEventListener("input", checkFirstname);
username.addEventListener("input", checkUsername);
email.addEventListener("input", checkEmail);
pwd.addEventListener("input", checkPwd);
pwd2.addEventListener("input", checkPwd);

/* Fonctions de traîtement du formulaire */ 

function checkFormulaire()
{
    var formulaireOk = true;
    for (var i = 0; i < size_formulaire; i++)
    {
        if (!donneesFormulaire[i])
        {
            formulaireOk = false;
        }
    }
    
    if (formulaireOk)
    {
        submit_button.disabled = false;
    }
    else
    {
        submit_button.disabled = true;
    }
}


function checkLastname()
{
    if (lastname.value.length >= 1)
    {
        lastname.style.borderColor = "green";
        donneesFormulaire[0] = true;
    }
    else
    {
        lastname.style.borderColor = "red";
        donneesFormulaire[0] = false;
    }
    
    checkFormulaire();
}

function checkFirstname()
{
    if (firstname.value.length >= 1)
    {
        firstname.style.borderColor = "green";
        donneesFormulaire[1] = true;
    }
    else
    {
        firstname.style.borderColor = "red";
        donneesFormulaire[1] = false;
    }
    
    checkFormulaire();
}

function checkUsername()
{
    if (username.value.length >= 6)
    {
        username.style.borderColor = "green";
        donneesFormulaire[2] = true;
    }
    else
    {
        username.style.borderColor = "red";
        donneesFormulaire[2] = false;
    }
    
    checkFormulaire();
}

function checkEmail()
{
    var regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/);

    if (regex.test(email.value))
    {
        email.style.borderColor = "green";
        donneesFormulaire[3] = true;
    }
    else
    {
        email.style.borderColor = "red";
        donneesFormulaire[3] = false;
    }
    
    checkFormulaire();
}


function checkPwd()
{
    var regex = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[\w]{8,}$/);
    console.log(pwd.value + " " + pwd2.value);
    if (pwd.value === pwd2.value && regex.test(pwd.value))
    {
        pwd.style.borderColor = "green";    
        pwd2.style.borderColor = "green"; 
        donneesFormulaire[4] = true;

    }
    else
    {
        pwd.style.borderColor = "red";    
        pwd2.style.borderColor = "red";
        donneesFormulaire[4] = false;
    }
    
    checkFormulaire();
}

function resetFormulaire()
{
    alert("Formulaire réinitialisée !");
}


