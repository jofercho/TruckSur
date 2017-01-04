/**
 * Created by Jose on 12/21/2016.
 */
$(document).ready(function() {
    $('#secondNavBar').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height())
        {
            $('#secondNavBar').fadeIn();
        }
        else
        {
            $('#secondNavBar').fadeOut();
        }
    });
});