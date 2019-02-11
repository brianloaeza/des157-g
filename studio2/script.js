// global variables

// var aqua=true; //boolean values for marker color
// var crimson=false;
var answer;
var userAnswer;
var page=1; //dictates which page you are on
var open=false; //boolean value for whether or not the notebook is open
var noteBook = document.querySelector('#noteBook');
var question=document.querySelector('.question');
var submit=document.querySelector('.submit');
var noteBookOpen1Text=document.querySelector('.noteBookOpen1Text');
var noteBookOpen1Blue=document.querySelector('.noteBookOpen1Blue');
var tears=document.querySelector('.tears');
var me=document.querySelector('.me');
var marker=document.querySelector('#marker');
var pen=document.querySelector('#pen');

//opens notebook
noteBook.addEventListener("click", function(start){
noteBook.src='itemsInBackPackNotebookOpen1.png';
question.style.display='block';
submit.style.display='block';
open=true;

//used to change pages/answer riddles
// document.querySelector("form").addEventListener("submit", processForm);

//1st Page
if(open===true&&page===1){
var answer='I suffered today';
pen.addEventListener("click", function(){
  noteBookOpen1Text.style.display='block';
  marker.addEventListener("click", function(){
    noteBookOpen1Blue.style.display='block';
  });
});
}

//2nd Page
if(open===true&&page===2){
pen.addEventListener("click", function(){
  noteBookOpen1Text.style.display='block';
  marker.addEventListener("click", function(){
    noteBookOpen1Blue.style.display='block';
  });
});
}
});
