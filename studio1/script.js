"use strict";
/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector("form").addEventListener("submit", processForm);

//define process function
function processForm(evt) {
  /*userName variable captures the value from the form input element with the id userName
  */
  var userName = document.querySelector("#userName").value;

  //give feedback
  alert("Hi " + userName);

  /*prompt1: declare a variable favMovie to caputure the value from the form input text element with the id favMovie
  */

  /*prompt2: declare a variable myMsg to capture the html element with the id myMsg
  */

  /* prompt3: comment out the call to alert() above that says hi to the user
  */

  /* prompt4: use innerHTML to concatenate a message that includes the userName and the favMovie
  */

  // prevent page from reloading
  evt.preventDefault();
  return false;
}
