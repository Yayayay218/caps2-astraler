$(document).ready(function () {
    //Stop people from typing
    $('.spinner input').keydown(function (e) {
        e.preventDefault();
        return false;
    });
    var minNumber = 1;
    var maxNumber = 10;
    $('.spinner .btn:first-of-type').on('click', function () {
        if ($('.spinner input').val() == maxNumber) {
            return false;
        } else {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
            return false;
        }
    });

    $('.spinner .btn:last-of-type').on('click', function () {
        if ($('.spinner input').val() == minNumber) {
            return false;
        } else {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
            return false;
        }
    });
});



