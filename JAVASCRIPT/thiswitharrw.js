const student = {
     name: "aman",
     marks: 95,
     prop: this,
     getName: function() { // this is an normal function with "this" 
        console.log(this); // so it calls the CHILD OF FUNCT = Student 
                           //
        return this.name;  //
     },



     getMarks: () => {      //this is same but with arrow function so what it does is 
        console.log(this);  //this calls directly PARENT FUNCTION  is WINDOWS
        return this.marks;  //
     },
     getInfo1: function ()  {
        setTimeout(function () {
            console.log(this);  //function() is parent of  setTimeout and its this is student so 
        },2000);                //output is student 
        
     },

       getInfo2: function ()  {
        setTimeout(function () {
            console.log(this); // in this the "this" of setTimeout called by WINDOWS
        },2000);               // so the will print the windows
         
     },

};

