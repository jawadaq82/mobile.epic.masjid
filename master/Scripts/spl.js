$(document).on('pageinit', '#splash', function () { // the .on() method does require jQuery 1.7 + but this will allow you to have the contained code only run when the #splash page is initialized.
    SetSalatTime();
    setTimeout(function () {
        window.location.href = "Menu.html";
        //  $.mobile.changePage("default.html", {transition:"slide"});
    }, 4000);
    

    //setTimeout(window.location.href = "default.html", 5000);
});

function SetSalatTime() {
    var cookieName = 'st';
    var salatJson;
    var month = 0;
    month = (new Date).getMonth() + 1;
    var url = 'http://www.corsproxy.com/epicmasjid.com/mAdmin/jsonData/getJson.php?getData=' + month;
    jQuery.noConflict();
    jQuery.get(url, function (response) {
        salatJson = response;
        salatJson = salatJson.replaceAll("month", "o")
        .replaceAll("January", "1")
        .replaceAll(":\"1\",", ":1,")
        .replaceAll("February", "2")
        .replaceAll(":\"2\",", ":2,")
        .replaceAll("March", "3")
        .replaceAll(":\"3\",", ":3,")
        .replaceAll("April", "4")
        .replaceAll(":\"4\",", ":4,")
        .replaceAll("May", "5")
        .replaceAll(":\"5\",", ":5,")
        .replaceAll("June", "6")
        .replaceAll(":\"6\",", ":6,")
        .replaceAll("July", "7")
        .replaceAll(":\"7\",", ":7,")
        .replaceAll("August", "8")
        .replaceAll(":\"8\",", ":8,")
        .replaceAll("September", "9")
        .replaceAll(":\"9\",", ":9,")
        .replaceAll("October", "10")
        .replaceAll(":\"10\",", ":10,")
        .replaceAll("November", "11")
        .replaceAll(":\"11\",", ":11,")
        .replaceAll("December", "12")
        .replaceAll(":\"12\",", ":12,")
        .replaceAll("day", "d")
        .replaceAll("fajrBegin", "f1").replaceAll("fajr", "f")
        .replaceAll("shuruq", "s")
        .replaceAll("dhuhrBegin", "z1").replaceAll("dhuhr", "z")
        .replaceAll("asrBegin", "a1").replaceAll("asr", "a")
        .replaceAll("maghribBegin", "m1").replaceAll("maghrib", "m")
        .replaceAll("ishaBegin", "i1").replaceAll("isha", "i")
        .replaceAll("\r", "").replaceAll("\n", "").replaceAll("\r\n", "")
        .replaceAll("\"", "\'")
        .replaceAll("\'o\':", "o:")
        .replaceAll("\'d\':", "d:")
        .replaceAll("\'f1\':", "f1:")
        .replaceAll("\'f\':", "f:")
        .replaceAll("\'s\':", "s:")
        .replaceAll("\'z1\':", "z1:")
        .replaceAll("\'z\':", "z:")
        .replaceAll("\'a1\':", "a1:")
        .replaceAll("\'a\':", "a:")
        .replaceAll("\'m1\':", "m1:")
        .replaceAll("\'m\':", "m:")
        .replaceAll("\'i1\':", "i1:")
        .replaceAll("\'i\':", "i:");
        if (salatJson.length > 100) {
            localStorage.setItem(cookieName, salatJson);
            //setCookie(cookieName, salatJson, 365);
           // alert('cookies set');
        }


    });
    return false;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (sourceChar, newChar) {
        var locName = this;
        for (var i = 0; i <= this.split(sourceChar).length; i++) {
            locName = locName.replace(sourceChar, newChar);
        }
        return locName;
    }
}
