let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
   // console.log("form submited"); 
    event.preventDefault();
   // alert("form submitted")
    
});

    //let inp = document.querySelector("input");



     let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

  // YOU CAN ALSO ACESS THE ELEMENTS IN FORM BY THIS WAY//
   // let user = this.elements[0];
   // let pass = this.elements[1];


    // console.dir(inp);
    // console.dir(inp.value)

  //  console.log(user.value);
  //  console.log(pass.value);

  //  alert(`Hi ${user.value}, ur password is set to ${pass.value}`)


  //-------------------------------------//4
  // CHANGE ; the change event occurs when the value of an element has been changed 

  user.addEventListener("change",function() {
    console.log("changed event ");
    console.log("final value = ",this.value);
  });

  user.addEventListener("change",function() {
    console.log("input event ");
    console.log("final value = ",this.value);
  
});

//---------------------------//
// INPUT EVENT 
//THE INPPUT FIRES WHEN THE VALUE OF <INPUT> ,<SELECT> OR <TEXT AREA> ELEMENT HAS BEEN CHANGED 




