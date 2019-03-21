"use strict"

var language = document.querySelector('.language');
var spanish = document.querySelector('#sp');
var english = document.querySelector('#en');
var other = document.querySelector('#ot');
var yesNo = document.querySelector('.yesNo');
var yes = document.querySelector('#y');
var no = document.querySelector('#n');
var sure = document.querySelector('.sure');
var su = document.querySelector('#su');
var submission = document.querySelector('.submission');
var enter = document.querySelector('#e');
var paper = document.querySelector('.paper');
var leave = document.querySelector('.leave');
var enter=false;

var anim;
var img1 = {
  container: document.querySelector('.game'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  autoloadSegments: false,
  path: 'data.json'
}
anim = bodymovin.loadAnimation(img1);
anim.addEventListener('DOMLoaded', function(){
anim.playSegments([0,80],true);
})

english.addEventListener("click", function(){
  language.style.display='none';
  yesNo.style.display='block';
  anim.playSegments([120,180],true);

  yes.addEventListener("click", function(){
    anim.playSegments([181,270],true);
    yesNo.style.display='none';
    sure.style.display='block';

    sure.addEventListener("click", function(){
      // anim.playSegments([181,270],true);
      sure.style.display='none';
      paper.style.display='block';
      submission.style.display='block';

      enter.addEventListener("click", function(){
        anim.playSegments([390,510],true);
        paper.style.display='none';
        submission.style.display='none';
      })
    })
  })
})

spanish.addEventListener("click", function(){
  language.style.display='none';
  siNo.style.display='block';
  yes.addEventListener("click", function(){
    yesNo.style.display='none';
    gender.style.display='block';
    age.style.display='block';
    status.style.display='block';
    submission.style.display='block';
  })
})

// leave.addEventListener("click", function(){
//   // yesNo.style.display='none';
//   // gender.style.display='none';
//   // age.style.display='none';
//   // status.style.display='none';
//   submission.style.display='none';
//   language.style.display='block';
// })
