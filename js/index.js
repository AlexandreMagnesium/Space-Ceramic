$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.active').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});
