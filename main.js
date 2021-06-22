 const input = document.getElementById("input") ;
 document.getElementById('checkbox').addEventListener('click',
function () {

    if( input.type === "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
})
   // myFunction
//      var x = document.getElementById("input");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
 
