module.exports = class Tools {
    constructor() {

    }
    getData(method, url, success, fail) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method, url, true);
        xmlhttp.send();
        console.log(xmlhttp);

        xmlhttp.onreadystatechange = function() {
            console.log(xmlhttp);
            console.log(33333);
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText);
                    var data = eval('(' + xmlhttp.responseText + ')');
                    console.log(data);
                    console.log(typeof data);
                    success(data);
                } else {
                    fail(xmlhttp.responseText)
                }
            }
        }
    }
}