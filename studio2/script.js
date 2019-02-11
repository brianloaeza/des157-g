// global variables
"use strict";
console.log('reading js');


var page=1; //dictates which page you are on
var open=false; //boolean value for whether or not the notebook is open
var noteBook = document.querySelector('#noteBook');
var noteBookOpen1Text=document.querySelector('.noteBookOpen1Text');
var noteBookOpen1Blue=document.querySelector('.noteBookOpen1Blue');
var marker=document.querySelector('#marker');
var pen=document.querySelector('#pen');

//hover effects on pen and marker
marker.addEventListener('mouseover', function() {
  marker.src='itemsInBackPackMarkerHighlight.png';
});
marker.addEventListener('mouseout', function() {
  marker.src='itemsInBackPackMarker2.png';
});
pen.addEventListener('mouseover', function() {
  pen.src='itemsInBackPackPenHighlight.png';
});
pen.addEventListener('mouseout', function() {
  pen.src='itemsInBackPackPen2.png';
});

//opens notebook
noteBook.addEventListener("click", function(start){
noteBook.src='noteBookWriting.png';
open=true;

//1st Page
if(open===true&&page===1){

pen.addEventListener("click", function(){
  noteBook.src='noteBookWritingPen.png';
});
marker.addEventListener("click", function(){
  noteBook.src='notebookCode.png';
});
}
});
