'use strict'

var img1 = bodymovin.loadAnimation({
  container: document.querySelector('.img1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img1.json'
})

  var img3 = bodymovin.loadAnimation({
    container: document.querySelector('.img3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img3.json'
  })
var img4 = bodymovin.loadAnimation({
  container: document.getElementById('img4'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img4.json'
})
