(function() {
        var doc = document;
        var body = doc.body;
        var html = doc.documentElement;

        function clearHandlers() {
            html.onselectstart = html.oncopy = html.oncut = html.onpaste = html.onkeydown = html.oncontextmenu = html.onmousemove = body.oncopy = body.oncut = body.onpaste = body.onkeydown = body.oncontextmenu = body.onmousemove = body.onselectstart = body.ondragstart = doc.onselectstart = doc.oncopy = doc.oncut = doc.onpaste = doc.onkeydown = doc.oncontextmenu = doc.onmousedown = doc.onmouseup = window.onkeyup = window.onkeydown = null;
            body.style.webkitUserSelect = 'auto';
        }
        clearHandlers();
        var l = document.getElementsByTagName("input");
        var n = document.getElementsByTagName("textarea");
        for (var m = 0; m < l.length; m++) {
            l[m].onpaste = function () {
                return true;
            };
        }
        for (var m = 0; m < n.length; m++) {
            n[m].onpaste = function () {
                return true;
            };
        }
    }
)();