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
var enter = false;

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
anim.addEventListener('DOMLoaded', function() {
    anim.playSegments([0, 80], true);
})

// For English Portions
english.addEventListener("click", function() {
    language.style.display = 'none';
    yesNo.style.display = 'block';
    anim.playSegments([120, 180], true);

    // Leads to Consultation
    yes.addEventListener("click", function() {
        anim.playSegments([181, 270], true);
        yesNo.style.display = 'none';
        sure.style.display = 'block';

        // Leads to Paper Form
        sure.addEventListener("click", function() {
            // anim.playSegments([181,270],true);
            sure.style.display = 'none';
            paper.style.display = 'block';
            submission.style.display = 'block';

            //Leads to Question Section
            enter.addEventListener("click", function() {
                anim.playSegments([390, 510], true);
                paper.style.display = 'none';
                submission.style.display = 'none';
            })
        })
    })
})

// For Spanish Portions
spanish.addEventListener("click", function() {
    alert("Este Caristica llegara pronto!");
})

//for Other Languages
other.addEventListener("click", function() {
    alert("Coming Soon!");
})
