var catImage = document.querySelector('.main-image');
var counter = document.querySelector('.counter');
var numClicks = 0;

catImage.addEventListener('click', function() {
    numClicks += 1;
    counter.textContent = 'Number of Clicks: ' + numClicks;
});
