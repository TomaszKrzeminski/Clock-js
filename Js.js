$(document).ready(function () {
    setInterval(function ()
    {
        var seconds = new Date().getSeconds();
        var secD = seconds * 6;
        var sRot = "rotate(" + secD + "deg)";
        $("#sec").css({ "-moz-transform": sRot });      
        
    }, 1000);


    setInterval(function ()
    {
        var hour = new Date().getHours();
        if(hour > 12)
        {
            hour-= 12;
        } else if (hour === 0) {
            hour = 12;
        }
        var minuts = new Date().getMinutes();
        var minD;
        if (minuts >= 0 && minuts < 12) {
            minD = 0;
        }
        else if (minuts >= 12 && minuts < 24) {
            minD =6;
        }
        else if (minuts >= 24 && minuts < 36) {
            minD = 12;
        }
        else if (minuts >= 36 && minuts < 48) {
            minD = 18;
        }
        else if (minuts >= 48 && minuts < 60) {
            minD = 24;
        }
        var hourD = hour * 30+minD+2;
        $("#hour").css({ "-moz-transform":"rotate("+hourD+"deg)"});     


    }, 1000);

    setInterval(function () {
        var minuts = new Date().getMinutes();
        var minD = minuts * 6;
        var mRot = "rotate(" + minD + "deg)";
        $("#min").css({ "-moz-transform": mRot });

    }, 1000);

});
    //setInterval(function () {
    //    var seconds = new Date().getSeconds();
    //    var sdegree = seconds * 6;
    //    var srotate = "rotate(" + sdegree + "deg)";

    //    $("#sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });

    //}, 1000);


    //setInterval(function () {
    //    var hours = new Date().getHours();
    //    var mins = new Date().getMinutes();
    //    var hdegree = hours * 30 + (mins / 2);
    //    var hrotate = "rotate(" + hdegree + "deg)";

    //    $("#hour").css({ "-moz-transform": hrotate, "-webkit-transform": hrotate });

    //}, 1000);

    //setInterval(function () {
    //    var mins = new Date().getMinutes();
    //    var mdegree = mins * 6;
    //    var mrotate = "rotate(" + mdegree + "deg)";

    //    $("#min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });

    //}, 1000);