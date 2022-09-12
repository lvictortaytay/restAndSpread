// refactor code to fit ES2015 standards

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
// ES2015
  function createInstructor15(firstName, lastName){
      return{
          firstName,
          lastName
      }
  }
//-----------------------------------------------------------
// write ES2015 standard code for computed property names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


// ES2015 


let favNum = 42

const teacher = {
    firstName : "colt",
    [favNum] : "that is my favorite"
}
//------------------------------------------------------------
// write ES2015 standard code for object methods

var instructorES5 = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //ES2015

  const proffesor = {
      firstName: "colt",
      sayHi(){
          return "Hi!"
      },
      sayBye(){
          return this.firstName + " says bye!"
      }
  }
  //--------------------------------------------------------------

  /* Write a function which generates an animal object {}. The function should accepts 3 arguments ( 1, 2, 3, ):

- species: the species of animal (‘cat’, ‘dog’) first argument

- verb: a string used to name a function (‘bark’, ‘bleet’) second argument

- noise: a string to be printed when above function is called (‘woof’, ‘baaa’) third argument

- Use one or more of the object enhancements we’ve covered. */

const createEmote = function(species , verb , noise){
    return {
        species , 
        [verb](){
            return noise;
        }
    }
}
