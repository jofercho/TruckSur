/**
 * Created by Jose on 1/8/2017.
 */
var scrollEnabled = true;
var missionSepartionWidth = 0;


$(document).ready(function () {
    setNosotrosImages();
    $( window ).resize(function() {
        setNosotrosImages();
    });
    smootNormalScroll();
    $("#navbar-scroll").on("activate.bs.scrollspy", function () {
        var currentItem = $("#secondNavBar li.active > a").text();
        console.log("Currently you are viewing - " + currentItem);
        if (currentItem.localeCompare("Nosotros") == 0) {
            animateNosotros();
        }
        else {
            scrollEnabled = true;
            normalScroll();
        }
    })
});

function normalScroll() {
    console.log("normal scroll");

}

function animateNosotros() {

    if(scrollEnabled)
    {
        scrollEnabled = false;

        setNosotrosImages();
        console.log("locked animate nosotros");

        var hash = '#vertical-slide3'

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 450, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    }

    $('#vertical-slide3').on('mousewheel', function(event) {
        console.log(event.deltaX, event.deltaY, event.deltaFactor);
        //this.scrollLeft -= (chg * 50); //need a value to speed up the change
        var newRight = parseInt($('.misionTitle').css("right")) - event.deltaY * event.deltaFactor;
        var newLeft = parseInt($('.misionContent').css("left")) - event.deltaY * event.deltaFactor;

        if(newRight > 0) newRight = 0;
        if(newLeft > 0) newLeft = 0;
        if(newRight < -missionSepartionWidth) newRight = -missionSepartionWidth;
        if(newLeft < -missionSepartionWidth) newLeft = -missionSepartionWidth;

        $('.misionTitle').css({"right":newRight+"px"});
        $('.misionContent').css({"left":newLeft+"px"});

        event.preventDefault();
    });
}

function smootNormalScroll() {

    $(".navbar ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        //alert("hash "+hash);
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 450, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });
}

function scrollImages()
{

}

function setNosotrosImages()
{
    //$('.misionContent').width($( window ).width());
    // var top = $('#vertical-slide3').position().top;
    console.log("SET NOSOTROS IMAGES");
    var height = $(window).height();
    var missionTitlewidth = $(window).width()/2;
    var missionContentwidth = missionTitlewidth * 1.7;
    // $('.misionTitle').css({"top":top+"px;"});

    // $('.misionTitle').css({"rigth":"-40px;"});
    // $('.missionContent').css({"left":-(width*1.7)+"px;"});
    $('.misionTitle img').height(height);
    $('.misionTitle img').width(missionTitlewidth);

    $('.misionContent img').height(height);
    $('.misionContent img').width(missionContentwidth);

    missionSepartionWidth = missionTitlewidth > missionContentwidth? missionTitlewidth:missionContentwidth;

    $('.misionTitle').css({"right":-missionSepartionWidth+"px"});
    $('.misionContent').css({"left":-missionSepartionWidth+"px"});

    // $('.misionTitle').css({"top":top+"px;"});
}

