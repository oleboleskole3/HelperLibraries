Array.prototype.map = function(callbackfn) {
    var out = [];

    this.forEach(function(value, index) {
        out.push(callbackfn(value, index, this));
    });

    return out;
}

Array.prototype.filter = function(callbackfn) {
    var out = this.slice();

    for (var index = this.length; index >= 0; i--) {
        if (!callbackfn(this[index], index, this))
            out.splice(index, 1);
    }

    return out;
}

Array.prototype.reduce = function(callbackfn, initialValue) {
    var last = initialValue;

    this.forEach(function(value, index) {
        last = callbackfn(last, value, index, this);
    });

    return last;
}
