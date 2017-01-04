/**
 * Created by Jose on 12/21/2016.
 */
$(document).ready(function () {
    $('#truckSurCarousel').carousel('pause');
});

$(document).on('slid.bs.carousel', function (event) {
    resizeGallery();
});

// $('#galleryButton').on('click', function () {
//     console.log($(window).height());
//     resizeGallery();
// });
$(window).on('shown.bs.modal', function () {
    $('#truckSurCarousel').carousel('cycle');
    resizeGallery();
});

$(window).on('hidden.bs.modal', function() {
    $('#truckSurCarousel').carousel('pause');
});

function resizeGallery() {
    var slideHeight = $('.active img').height();
    var windowHeight = $(window).height();
    var top;
    var topString;
    if(slideHeight<windowHeight)
    {
        top = windowHeight/2 - slideHeight/2;
        topString = top.toString()+'px';
        $('#truckSurCarousel').css({top:topString});
    }

    console.log("window height: "+windowHeight+" to css "+topString);
}