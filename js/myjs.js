//Code for smooth sliding start
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });




});

// COde smooth sliding end//





$(document).ready(function () {
    $(".send").click(function () {
        $("#rightBar").animate({
            "width": "250px"
        }, 500)
        $("#rightBarTwo").animate({
            "width": "0px"
        }, 500)
    })

    $(".closeRightBar").click(function () {
        $("#rightBar").animate({
            "width": "0px"
        }, 500)
    })

    $(".phone").click(function () {
        $("#rightBarTwo").animate({
            "width": "250px"
        }, 500)
        $("#rightBar").animate({
            "width": "0px"
        }, 500)
    })

    $(".closeRightBar").click(function () {
        $("#rightBarTwo").animate({
            "width": "0px"
        }, 500)
    })


    //start popoup modal

})




$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $(".floatingContact").css({
            "display": "block"
        })
        $(".mainBox").slideDown(500);

    } else {
        $(".mainBox").slideUp(500);
    }

})

$(".closeMainBox").click(function () {
    $(".floatingContact").animate({
        "width": "0px",

    }, 500)

    $(".mainBoxIcon").css({
        "display": "none"
    })
    $(".mainBox").css({
        "border": "none"
    })
    $("#contactToolBoxTwo ").css({
        "display": "none"
    })
    $("#contactToolBox ").css({
        "display": "none"
    })

})

$(".more").click(function () {
    $("#contactToolBoxTwo").slideToggle(500);
    $("#contactToolBox").slideUp(500);
})
$(".phoneNo").click(function () {
    $("#contactToolBox").slideToggle(500);
    $("#contactToolBoxTwo").slideUp(500);
})

//overlay animation

$(document).ready(function () {

    $(".overLayTwo").animate({
        "height": "400px"
    }, 1200)
    $(".overLayFour").animate({
        "height": "300px"
    }, 600)
})
