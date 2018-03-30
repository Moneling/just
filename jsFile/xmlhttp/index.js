const Tools = require("./tools.js");
const tools = new Tools();

tools.getData("get", "./data1.json", function(data) {
    console.log(document.getElementsByTagName("h1")[0]);
    console.log(data.key)
    document.getElementsByTagName("h1")[0].innerHTML = data.key;
}, function(data) {
    console.log("is error")
})
tools.getData("get", "./data2.json", function(data) {
    console.log(document.getElementsByTagName("h2")[0]);
    console.log(data.key)
    document.getElementsByTagName("h2")[0].innerHTML = data.key;
}, function(data) {
    console.log("is error")
})
tools.getData("get", "./data3.json", function(data) {
    console.log(document.getElementsByTagName("h3")[0]);
    console.log(data.key)
    document.getElementsByTagName("h3")[0].innerHTML = data.key;
}, function(data) {
    console.log("is error")
})