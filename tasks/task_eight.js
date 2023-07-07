function outerFunction() {
    let outerVariable = "Outer";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  let inner = outerFunction();
  inner(); 
  