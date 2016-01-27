$(document).ready(function() {
    $("button").click(function(){
        var x = $("#inputusername").val();
        var y = $("#inputPassword").val();

      if(x===''&&y===''){
         return alert("Jūs neįvedėte prisijungimo\n vardo ir slaptažodžio");
      
    }else{  
      
      if(x===''){
         return alert("Jūs neįvedėte prisijungimo\n vardo");
      
    }else{
      
      if(y==='')
         return alert("Jūs neįvedėte prisijungimo\n slaptažodžio");
      
      if(y.length<4)
         return alert("Slaptažodis turi būti ne mažiau 4 simbolių ");
         return alert("Jus prisijungete vardu:\n"+x)

}}});
});
















 

