"use strict"

var language = document.querySelector('.language');
var spanish = document.querySelector('#sp');
var english = document.querySelector('#en');
var other = document.querySelector('#ot');
var yesNo = document.querySelector('.yesNo');
var yes = document.querySelector('#y');
var no = document.querySelector('#n');
var submission = document.querySelector('.submission');
var age = document.querySelector('.age');
var gender = document.querySelector('.gender');
var status = document.querySelector('.status');
var leave = document.querySelector('.leave');
var enter=false;

english.addEventListener("click", function(){
  language.style.display='none';
  yesNo.style.display='block';
  yes.addEventListener("click", function(){
    yesNo.style.display='none';
    gender.style.display='block';
    age.style.display='block';
    status.style.display='block';
    submission.style.display='block';
  })


})

spanish.addEventListener("click", function(){

})

leave.addEventListener("click", function(){
  // yesNo.style.display='none';
  // gender.style.display='none';
  // age.style.display='none';
  // status.style.display='none';
  submission.style.display='none';
  language.style.display='block';
})
