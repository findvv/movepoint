var movePointLeft = function (str, scale) {
    var point = str.indexOf('.'),
        b = str.match(/\d/g) || '',
        c = '',
        d;

    if (point === -1) {
        if (b.length > scale) {
            for (var t = 0; t < b.length; t++) {
                c += b[t];
                if (t === b.length - scale - 1) {
                    c += '.';
                }
            }
        } else {
            c += '0.';
            for (var g = 0; g < scale - b.length; g++) {
                c += '0';
            }
            for (var h = 0; h < b.length; h++) {
                c += b[h];
            }
        }
    } else {
        if (point > scale) {
            for (var i = 0; i < b.length; i++) {
                c += b[i];
                if (i === point - scale - 1) {
                    c += '.';
                }
            }
        } else {
            c += '0.';
            for (var n = 0; n < scale - point; n++) {
                c += '0';
            }
            for (var m = 0; m < b.length; m++) {
                c += b[m];
            }
        }
    }
    d = c.match(/\d+\.?\d*[^0]+/g);
    if (d) {
        var e = d[0];
            
        if (e[e.length - 1] === '.') {
            e = e.split('.')[0];
        }
        c = c.replace(c, e);
    }
    return c;
},
movePointRight = function (str, scale) {
    var a = str.match(/\.\d+/),
        len = a ? a[0].length - 1 : 0,
        point = str.indexOf('.'),
        b = str.match(/\d/g) || '',
        c = '';

    if (scale < len) {
        for (var i = 0; i < b.length; i++) {
            c += b[i];
            if (i === point + scale - 1) {
                c += '.';
            }
        }
    } else {
        for (var m = 0; m < b.length; m++) {
            c += b[m];
        }
        if (scale > len) {
            for (var n = 0; n < (scale - len); n++) {
                c += '0';
            }
        }
    }
    return c;
};
module.exports = function (num, scale) {
    var str = String(num),
        hasFh = str.indexOf('-') !== -1,
        str1,
        result;

    if (hasFh) {
        str1 = str.split('-')[1];
    } else {
        str1 = str;
    }
    if (scale > 0) {
        result = movePointRight(str1, scale);
    } else if (scale == 0) {
        result = str1;
    } else {
        result = movePointLeft(str1, -scale);
    }
    result = hasFh ? ('-' + result) : result;
    return result;
}