function myFunction() {
    var insideVariable = "Inside";
  

    console.log(insideVariable);
  }
  
  myFunction();
  
  console.log(insideVariable); 
  


  var outsideVariable = "Outside";

  function myFunction() {

    console.log(outsideVariable);
  }
  
  myFunction(); 
  


