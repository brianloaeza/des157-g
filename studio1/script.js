"use strict";
/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

//define process function
function processForm(evt) {
  /*userName variable captures the value from the form input element with the id userName
  */
  var adj = document.querySelector('#adj').value;
  var noun = document.querySelector('#noun').value;
  var verb = document.querySelector('#verb').value;

  // myMsg.innerHTML =
  //   'Hi, ' +
  //   userName +
  //   '!<p>You love the color <em>' +
  //   favColor +
  //   '</em>!  Have a great day!</p>';
  //
  // msgSection.className = 'show';

  evt.preventDefault();
}

function resetForm() {
  msgSection.className = 'hide';
}
