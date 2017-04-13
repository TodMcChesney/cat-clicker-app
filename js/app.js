var numClicks = 0;

$('.main-image').click(function() {
    numClicks += 1;
    $('.counter').text('Number of Clicks: ' + numClicks);
});
