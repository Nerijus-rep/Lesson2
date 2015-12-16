function clicked(){
  var x = document.getElementsByName('user')[0].value;
  var y = document.getElementsByName('pass')[0].value;
           if(x===""&&y==="")
           return alert("Jūs neįvedėte prisijungimo\n vardo ir slaptažodžio");
           else{  
           if(x==="")
           return alert("Jūs neįvedėte prisijungimo\n vardo");
           else{
           if(y==="")
           return alert("Jūs neįvedėte prisijungimo\n slaptažodžio");
           if(y.length<4)
           return alert("Slaptažodis turi būti ne mažiau 4 simbolių ");
  return alert("Jus prisijungete vardu:\n"+x)
}}}














 

