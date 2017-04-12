var numClicks = 0;

$('.main-image').click(function() {
    numClicks += 1;
    var updatedCounter = '<p class="clicks">Number of Clicks: ' + numClicks + '</p>';
    $('.counter').html(updatedCounter);
});
