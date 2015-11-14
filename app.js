var main = function() {
    $('.btn').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('	');
    });
    $('.status-box').keyup(function() {
        var charLength = 140 - $(this).val().length;
        $('.counter').text(charLength);
    });
};

$(document).ready(main);