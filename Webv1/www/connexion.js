var pseudo = document.forms["myForm"].elements["username"].value;
var mdp = document.forms["myForm"].elements["userpwd"].value;
var login_msg = document.getElementById("sign_msg");
var msg_node;

//Envoi une requête en AJAX pour se connecter
document.getElementById("myForm").addEventListener('submit', function(e) 
{
	var pseudo = document.forms["myForm"].elements["username"].value;
	var mdp = document.forms["myForm"].elements["userpwd"].value;
	
	var request = new XMLHttpRequest(); 
	request.addEventListener('readystatechange', function() {
	    if (request.readyState === XMLHttpRequest.DONE && request.status === 200)
	    {
	        login_msg.textContent = request.responseText;
	        login_msg.style.color = "rgb(25, 160, 210)";
    	}
	});

	//requête en GET
	//Attention a bien mettre le bon numéro de port dans l'URL !!!
	request.open("GET", "htbin/login.py?username=" + pseudo + "&userpwd=" + mdp);
	request.send();

	e.preventDefault(); //bloque l'envoi du formulaire
});
