function getDataAsync(method, url, callback) {
    var req = new XMLHttpRequest()

    req.open(method, url)
    req.send('');

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(req);
        }
    }
}

function getDataSync(method, url) {
    var req = new XMLHttpRequest();
    
    req.open(method, url, false);
    req.send('');

    return req;
}