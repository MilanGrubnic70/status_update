var main = function() {
    var $btn = $('.btn');
    var $statusBox = $('.status-box');
    $btn.click(function() {
        var post = $statusBox.val();
        $('<li>').text(post).prependTo('.posts');
        $statusBox.val('	');
        $('.counter').text('140');
        $btn.addClass('disabled');
    });

    $statusBox.keyup(function() {
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        if (charactersLeft < 0) {
            $btn.addClass('disabled');
        } else if (charactersLeft == 140) {
            $btn.addClass('disabled');
        } else {
            $btn.removeClass('disabled');
        }
    });

    $btn.addClass('disabled');
}

$(document).ready(main);