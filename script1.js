// Image Gallery JS Variables
let image_gallery = document.querySelector('.image_gallery'),
    images = image_gallery.querySelectorAll('span'),
    prev_btn = document.querySelector('.prev_btn'),
    next_btn = document.querySelector('.next_btn');

let deg = 0;

// Creating a 3D Gallery
images.forEach((image, index) => {
  const angle = index * 60; // Calculate the rotation angle
  image.style.transform = `rotateY(${angle}deg) translateZ(18.75rem)`;
});

// Previous Button
prev_btn.addEventListener('click', function(){
  deg += 60;
  image_gallery.style.transform = `perspective(62.5rem) rotateY(${deg}deg)`;
})

// Next Button
next_btn.addEventListener('click', function(){
  deg -= 60;
  image_gallery.style.transform = `perspective(62.5rem) rotateY(${deg}deg)`;
})