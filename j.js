$(document).ready(function(){
$("button").click(function(){
var username = $("#username").val();
var firstname = $("#firstname").val();
var lastname = $("#lastname").val();
var email = $("#email").val();
var password = $("#password").val();
var passwordtest= $("#passwordtest").val();
if (username === '' && firstname === '' && lastname === '' && email === ''&& password === ''&& passwordtest === '') {
alert("Prašau užpildyti visus laukelius...!!!!!!");
$("#username,#firstname,#lastname,#email,#password,#passwordtest").addClass("error");
}else if (username === ''){
$("#username").addClass("error");   
alert("Prašau nurodyti prisijungimo vardą...!!!!!!");
}else if (firstname === ''){
$("#firstname").addClass("error");    
alert("Prašau nurodyti savo vardą...!!!!!!");
}else if (lastname === ''){
$("#lastname").addClass("error");    
alert("Prašau nurodyti savo pavardę...!!!!!!");
}else if (email === ''){
$("#email").addClass("error");    
alert("Prašau nurodyti elektroninį pašta...!!!!!!");
}else if (password === ''){
$("#password").addClass("error");    
alert("Prašau nurodyti prisijungimo slaptažodį...!!!!!!");
}else if ((password.length) < 8) {
$("#password").addClass("error");    
alert("Prisijungimo slaptažodis turi buti ne mažiau aštuonių simbolių...!!!!!!");
}else if (passwordtest === ''){
$("#passwordtest").addClass("error");    
alert("Prašau pakartoti prisijungimo slaptažodį...!!!!!!");
} else if (!(passwordtest).match(password)) {
$("#password,#passwordtest").addClass("error");    
alert("Pakartotas slaptažodis nesutampa...!!!!!!"); 
} else if (!(password).match(passwordtest)) {
alert("Pakartotas slaptažodis nesutampa...!!!!!!");
}else{
alert(('Puiku! Jūs sėkmingai prisiregistravote. Jūsų prisijungimo vardas:\n'+username));
document.location.href='prisijungti.html';
}});
});


