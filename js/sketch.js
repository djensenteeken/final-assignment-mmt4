var playBtn = $(".play");
var rewindBtn = $("#rewind");
var checkBtwn = $('#check');
var darkSwitch = $('#footer-switch');


$(document).ready(function () {

    $(function () {
        $("#accordion").accordion({
            animate: 400,
            heightStyle: "content"
        })
    });

    $("video").each(function () {
        var player = videojs(this);

        // $(this).parents('.accordion-content').find('.video.js').hover(function(){
        //     $( this ).fadeOut( 100 );
        //     $( this ).fadeIn( 500 );
        //     $('.player-button-wrapper').css({
        //         'display': 'block'
        //     });
        // })


        $(this).parents(".accordion-content").find(".rewind").click(function () {
            event.preventDefault();
            var time = player.currentTime();
            player.currentTime(time - 10);

        });

        $(this).parents(".accordion-content").find(".play").click(function () {
            event.preventDefault();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');

                player.pause();
                playBtn.html('<img src="img/play.png" class="play-icon">');
                $('.play-icon').css({
                    'padding': '20px 25px 20px 15px'
                });
            } else {
                $(this).addClass('active');

                player.play();
                playBtn.html('<img src="img/pause.png" class="play-icon">');
                $('.play-icon').css({
                        'width': '40px',
                        'height': '40px',
                        'padding': '25px 25px 25px 25px'
                
                });
            }
        });
     
        $(this).parents(".accordion-content").find(".check").click(function(){
            event.preventDefault();

            $('.accordion-check').css({
                'display': 'block'
            });

            $('#modal-wrapper').css({
                'display': 'block'
            });

            $('#modal').css({
                'display': 'block'
            });
        });
    });
    $('#modal-wrapper').click(function () {
        event.preventDefault();

        $('#modal-wrapper').css({
            'display': 'none'
        });
        $('#modal').css({
            'display': 'none'
        });
    });

    darkSwitch.click(function () {
        event.preventDefault();

        if (darkSwitch.hasClass("active")) {
            darkSwitch.removeClass("active");
            $("body").addClass('darkmode');
            console.log('dark theme');

        } else {
            darkSwitch.addClass("active");
            $('body').removeClass('darkmode');
            console.log('light theme');
            
        };
    });

});