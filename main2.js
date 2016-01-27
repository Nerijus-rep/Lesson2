$(document).ready(function() {
    $("button").click(function() {
        var username = $("#username").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var passwordtest= $("#passwordtest").val();
        
         if (username === '' && firstname === '' && lastname === '' && email === ''&& password === ''&& passwordtest === ''){
            $("#username,#firstname,#lastname,#email,#password,#passwordtest").addClass("error");
            alert("Prašau užpildyti visus laukelius...!!!!!!");
     } else { 
              (username !== '' && firstname !== '' && lastname !== '' && email !== ''&& password !== ''&& passwordtest !== '')
              $("#username,#firstname,#lastname,#email,#password,#passwordtest").removeClass("error");
            
         if (username === ''){
            $("#username").addClass("error"); 
            alert("Prašau nurodyti prisijungimo vardą...!!!!!!");
     } else { 
              (username !== '')
              $("#username").removeClass("error");
         
         if (firstname === ''){
            $("#firstname").addClass("error");    
            alert("Prašau nurodyti savo vardą...!!!!!!");
     } else { 
              (firstname !== '')
              $("#firstname").removeClass("error");

        if (lastname === '') {
            $("#lastname").addClass("error");    
            alert("Prašau nurodyti savo pavardę...!!!!!!");
     } else { 
              (lastname !== '')
              $("#lastname").removeClass("error");
        
        if (email === '') {
            $("#email").addClass("error");    
            alert("Prašau nurodyti elektroninį pašta...!!!!!!");
     } else { 
              (email !== '')
              $("#email").removeClass("error");
        
        if (password === '') {
            $("#password").addClass("error");    
            alert("Prašau nurodyti prisijungimo slaptažodį...!!!!!!");
     } else { 
              (password !== '')
              $("#password").removeClass("error");
        
        if  ((password.length) < 8) {
            $("#password").addClass("error");    
            alert("Prisijungimo slaptažodis turi buti ne mažiau aštuonių simbolių...!!!!!!");
     } else {
              $("#password").removeClass("error");
        
        if  (passwordtest === '') {
            $("#passwordtest").addClass("error");
            alert("Prašau pakartoti prisijungimo slaptažodį...!!!!!!");
     } else { 
              (firstname !== '')
              $("#passwordtest").removeClass("error");
        
        if  (!(passwordtest).match(password)) {
            $("#password,#passwordtest").addClass("error");    
            alert("Pakartotas slaptažodis nesutampa...!!!!!!");
     } else {
               $("#password,#passwordtest").removeClass("error");
        
        if (!(password).match(passwordtest)) {
            alert("Pakartotas slaptažodis nesutampa...!!!!!!");
     } else {
               $("#firstname").removeClass("error");

            alert(('Puiku! Jūs sėkmingai prisiregistravote. Jūsų prisijungimo vardas:\n'+username));
            document.location.href='prisijungti.html';
            
   }}}}}}}}}}});
});


