'use strict'

//Variables
var projectsTab = document.querySelector('.projectsNav');
var projects = document.querySelector('.projects');
var aboutTab = document.querySelector('.aboutNav');
var about = document.querySelector('.about');
var close = document.querySelector('.close');
var overlay =document.querySelector('#overlay');
//Variables Related to Graphic Tab
var graphicTab = document.querySelector('#graphic');
var graphic = document.querySelector('.graphic');
var font = document.querySelector('#fontPoster');
var fontOverlay = document.querySelector('.fontOverlay');
var punk = document.querySelector('#punkPoster');
var punkOverlay = document.querySelector('.punkOverlay');
var comic = document.querySelector('#comicPoster');
var comicOverlay = document.querySelector('.comicOverlay');
var info = document.querySelector('#infoPoster');
var infoOverlay = document.querySelector('.infoOverlay');
var tryptich = document.querySelector('#tryptichPoster');
var tryptichOverlay = document.querySelector('.tryptichOverlay');
var witch = document.querySelector('#witchPoster');
var witchOverlay = document.querySelector('.witchOverlay');
//Variables Related to Web/Games Tab
var webGamesTab = document.querySelector('#web-games');
var webGames = document.querySelector('.web-games');
var board = document.querySelector('#boardGame');
var boardOverlay = document.querySelector('.boardOverlay');
var immi = document.querySelector('#immiGame');
var immiOverlay = document.querySelector('.immiOverlay');
// Variables related to Other tab
var otherTab = document.querySelector('#other');
var other = document.querySelector('.other');
var color = document.querySelector('#colorPrint');
var colorOverlay = document.querySelector('.colorOverlay');
var light = document.querySelector('#light');
var lightOverlay = document.querySelector('.lightOverlay');
var book = document.querySelector('#book');
var bookOverlay = document.querySelector('.bookOverlay');



//Event Listeners
aboutTab.addEventListener("click", function(){
about.style.display = 'block';
})

projectsTab.addEventListener("mouseover", function(){ //opens/closes Project drop menu
projects.style.display = 'block';
aboutTab.addEventListener("mouseover", function(){
projects.style.display = 'none';
})
projects.addEventListener("mouseover", function(){
projects.style.display = 'block';
projects.addEventListener("mouseout", function(){
projects.style.display = 'none';
})
})
})

graphicTab.addEventListener("click", function(){
graphic.style.display = 'block';
webGames.style.display = 'none';
other.style.display = 'none';
about.style.display = 'none';
})

webGamesTab.addEventListener("click", function(){
webGames.style.display = 'block';
other.style.display = 'none';
graphic.style.display = 'none';
about.style.display = 'none';
})

otherTab.addEventListener("click", function(){
other.style.display = 'block';
graphic.style.display = 'none';
webGames.style.display = 'none';
about.style.display = 'none';
})

//Event Listeners under Graphics tab
font.addEventListener("click", function(){
fontOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
fontOverlay.style.display="none";
close.style.display='none';
})
})
punk.addEventListener("click", function(){
punkOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
punkOverlay.style.display="none";
close.style.display='none';
})
})
comic.addEventListener("click", function(){
comicOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
comicOverlay.style.display="none";
close.style.display='none';
})
})
info.addEventListener("click", function(){
infoOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
infoOverlay.style.display="none";
close.style.display='none';
})
})
tryptich.addEventListener("click", function(){
tryptichOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
tryptichOverlay.style.display="none";
close.style.display='none';
})
})
witch.addEventListener("click", function(){
witchOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
witchOverlay.style.display="none";
close.style.display='none';
})
})
// Event Listeners under Game/Web Tab
board.addEventListener("click", function(){
boardOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
boardOverlay.style.display="none";
close.style.display='none';
})
})
immi.addEventListener("click", function(){
immiOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
immiOverlay.style.display="none";
close.style.display='none';
})
})
// Event Listeners under Other Tab
color.addEventListener("click", function(){
colorOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
colorOverlay.style.display="none";
close.style.display='none';
})
})
light.addEventListener("click", function(){
lightOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
lightOverlay.style.display="none";
close.style.display='none';
})
})
book.addEventListener("click", function(){
bookOverlay.style.display = 'block';
close.style.display='block';
close.addEventListener("click", function(){
bookOverlay.style.display="none";
close.style.display='none';
})
})
//Event Listeners General overlay
