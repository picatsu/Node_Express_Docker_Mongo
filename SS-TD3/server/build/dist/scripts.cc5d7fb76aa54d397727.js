!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function () { try {
    return require("moment");
}
catch (t) { } }()) : "function" == typeof define && define.amd ? define(["require"], (function (t) { return e(function () { try {
    return t("moment");
}
catch (e) { } }()); })) : (t = t || self).Chart = e(t.moment); }(this, (function (t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, n = function (t, n) { return function (t) { var n = {}; for (var i in e)
        e.hasOwnProperty(i) && (n[e[i]] = i); var r = t.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } }; for (var a in r)
        if (r.hasOwnProperty(a)) {
            if (!("channels" in r[a]))
                throw new Error("missing channels property: " + a);
            if (!("labels" in r[a]))
                throw new Error("missing channel labels property: " + a);
            if (r[a].labels.length !== r[a].channels)
                throw new Error("channel and label counts mismatch: " + a);
            var o = r[a].channels, s = r[a].labels;
            delete r[a].channels, delete r[a].labels, Object.defineProperty(r[a], "channels", { value: o }), Object.defineProperty(r[a], "labels", { value: s });
        } r.rgb.hsl = function (t) { var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a), l = s - o; return s === o ? e = 0 : i === s ? e = (r - a) / l : r === s ? e = 2 + (a - i) / l : a === s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]; }, r.rgb.hsv = function (t) { var e, n, i, r, a, o = t[0] / 255, s = t[1] / 255, l = t[2] / 255, u = Math.max(o, s, l), h = u - Math.min(o, s, l), c = function (t) { return (u - t) / 6 / h + .5; }; return 0 === h ? r = a = 0 : (a = h / u, e = c(o), n = c(s), i = c(l), o === u ? r = i - n : s === u ? r = 1 / 3 + e - i : l === u && (r = 2 / 3 + n - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * a, 100 * u]; }, r.rgb.hwb = function (t) { var e = t[0], n = t[1], i = t[2]; return [r.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]; }, r.rgb.cmyk = function (t) { var e, n = t[0] / 255, i = t[1] / 255, r = t[2] / 255; return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]; }, r.rgb.keyword = function (t) { var i = n[t]; if (i)
        return i; var r, a, o, s = 1 / 0; for (var l in e)
        if (e.hasOwnProperty(l)) {
            var u = (a = t, o = e[l], Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2) + Math.pow(a[2] - o[2], 2));
            u < s && (s = u, r = l);
        } return r; }, r.keyword.rgb = function (t) { return e[t]; }, r.rgb.xyz = function (t) { var e = t[0] / 255, n = t[1] / 255, i = t[2] / 255; return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]; }, r.rgb.lab = function (t) { var e = r.rgb.xyz(t), n = e[0], i = e[1], a = e[2]; return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]; }, r.hsl.rgb = function (t) { var e, n, i, r, a, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100; if (0 === s)
        return [a = 255 * l, a, a]; e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0]; for (var u = 0; u < 3; u++)
        (i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r[u] = 255 * (a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e); return r; }, r.hsl.hsv = function (t) { var e = t[0], n = t[1] / 100, i = t[2] / 100, r = n, a = Math.max(i, .01); return n *= (i *= 2) <= 1 ? i : 2 - i, r *= a <= 1 ? a : 2 - a, [e, 100 * (0 === i ? 2 * r / (a + r) : 2 * n / (i + n)), (i + n) / 2 * 100]; }, r.hsv.rgb = function (t) { var e = t[0] / 60, n = t[1] / 100, i = t[2] / 100, r = Math.floor(e) % 6, a = e - Math.floor(e), o = 255 * i * (1 - n), s = 255 * i * (1 - n * a), l = 255 * i * (1 - n * (1 - a)); switch (i *= 255, r) {
        case 0: return [i, l, o];
        case 1: return [s, i, o];
        case 2: return [o, i, l];
        case 3: return [o, s, i];
        case 4: return [l, o, i];
        case 5: return [i, o, s];
    } }, r.hsv.hsl = function (t) { var e, n, i, r = t[0], a = t[1] / 100, o = t[2] / 100, s = Math.max(o, .01); return i = (2 - a) * o, n = a * s, [r, 100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]; }, r.hwb.rgb = function (t) { var e, n, i, r, a, o, s, l = t[0] / 360, u = t[1] / 100, h = t[2] / 100, c = u + h; switch (c > 1 && (u /= c, h /= c), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), r = u + i * ((n = 1 - h) - u), e) {
        default:
        case 6:
        case 0:
            a = n, o = r, s = u;
            break;
        case 1:
            a = r, o = n, s = u;
            break;
        case 2:
            a = u, o = n, s = r;
            break;
        case 3:
            a = u, o = r, s = n;
            break;
        case 4:
            a = r, o = u, s = n;
            break;
        case 5: a = n, o = u, s = r;
    } return [255 * a, 255 * o, 255 * s]; }, r.cmyk.rgb = function (t) { var e = t[1] / 100, n = t[2] / 100, i = t[3] / 100; return [255 * (1 - Math.min(1, t[0] / 100 * (1 - i) + i)), 255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]; }, r.xyz.rgb = function (t) { var e, n, i, r = t[0] / 100, a = t[1] / 100, o = t[2] / 100; return n = -.9689 * r + 1.8758 * a + .0415 * o, i = .0557 * r + -.204 * a + 1.057 * o, e = (e = 3.2406 * r + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]; }, r.xyz.lab = function (t) { var e = t[0], n = t[1], i = t[2]; return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]; }, r.lab.xyz = function (t) { var e, n, i; e = t[1] / 500 + (n = (t[0] + 16) / 116), i = n - t[2] / 200; var r = Math.pow(n, 3), a = Math.pow(e, 3), o = Math.pow(i, 3); return n = r > .008856 ? r : (n - 16 / 116) / 7.787, e = a > .008856 ? a : (e - 16 / 116) / 7.787, i = o > .008856 ? o : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]; }, r.lab.lch = function (t) { var e, n = t[0], i = t[1], r = t[2]; return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]; }, r.lch.lab = function (t) { var e, n = t[1]; return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)]; }, r.rgb.ansi16 = function (t) { var e = t[0], n = t[1], i = t[2], a = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2]; if (0 === (a = Math.round(a / 50)))
        return 30; var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255)); return 2 === a && (o += 60), o; }, r.hsv.ansi16 = function (t) { return r.rgb.ansi16(r.hsv.rgb(t), t[2]); }, r.rgb.ansi256 = function (t) { var e = t[0], n = t[1], i = t[2]; return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5); }, r.ansi16.rgb = function (t) { var e = t % 10; if (0 === e || 7 === e)
        return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e]; var n = .5 * (1 + ~~(t > 50)); return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]; }, r.ansi256.rgb = function (t) { if (t >= 232) {
        var e = 10 * (t - 232) + 8;
        return [e, e, e];
    } var n; return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]; }, r.rgb.hex = function (t) { var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase(); return "000000".substring(e.length) + e; }, r.hex.rgb = function (t) { var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i); if (!e)
        return [0, 0, 0]; var n = e[0]; 3 === e[0].length && (n = n.split("").map((function (t) { return t + t; })).join("")); var i = parseInt(n, 16); return [i >> 16 & 255, i >> 8 & 255, 255 & i]; }, r.rgb.hcg = function (t) { var e, n = t[0] / 255, i = t[1] / 255, r = t[2] / 255, a = Math.max(Math.max(n, i), r), o = Math.min(Math.min(n, i), r), s = a - o; return e = s <= 0 ? 0 : a === n ? (i - r) / s % 6 : a === i ? 2 + (r - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]; }, r.hsl.hcg = function (t) { var e, n = t[1] / 100, i = t[2] / 100, r = 0; return (e = i < .5 ? 2 * n * i : 2 * n * (1 - i)) < 1 && (r = (i - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * r]; }, r.hsv.hcg = function (t) { var e = t[2] / 100, n = t[1] / 100 * e, i = 0; return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]; }, r.hcg.rgb = function (t) { var e = t[1] / 100, n = t[2] / 100; if (0 === e)
        return [255 * n, 255 * n, 255 * n]; var i, r = [0, 0, 0], a = t[0] / 360 % 1 * 6, o = a % 1, s = 1 - o; switch (Math.floor(a)) {
        case 0:
            r[0] = 1, r[1] = o, r[2] = 0;
            break;
        case 1:
            r[0] = s, r[1] = 1, r[2] = 0;
            break;
        case 2:
            r[0] = 0, r[1] = 1, r[2] = o;
            break;
        case 3:
            r[0] = 0, r[1] = s, r[2] = 1;
            break;
        case 4:
            r[0] = o, r[1] = 0, r[2] = 1;
            break;
        default: r[0] = 1, r[1] = 0, r[2] = s;
    } return [255 * (e * r[0] + (i = (1 - e) * n)), 255 * (e * r[1] + i), 255 * (e * r[2] + i)]; }, r.hcg.hsv = function (t) { var e = t[1] / 100, n = e + t[2] / 100 * (1 - e), i = 0; return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n]; }, r.hcg.hsl = function (t) { var e = t[1] / 100, n = t[2] / 100 * (1 - e) + .5 * e, i = 0; return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]; }, r.hcg.hwb = function (t) { var e = t[1] / 100, n = e + t[2] / 100 * (1 - e); return [t[0], 100 * (n - e), 100 * (1 - n)]; }, r.hwb.hcg = function (t) { var e = 1 - t[2] / 100, n = e - t[1] / 100, i = 0; return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]; }, r.apple.rgb = function (t) { return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]; }, r.rgb.apple = function (t) { return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]; }, r.gray.rgb = function (t) { return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]; }, r.gray.hsl = r.gray.hsv = function (t) { return [0, 0, t[0]]; }, r.gray.hwb = function (t) { return [0, 100, t[0]]; }, r.gray.cmyk = function (t) { return [0, 0, 0, t[0]]; }, r.gray.lab = function (t) { return [t[0], 0, 0]; }, r.gray.hex = function (t) { var e = 255 & Math.round(t[0] / 100 * 255), n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase(); return "000000".substring(n.length) + n; }, r.rgb.gray = function (t) { return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]; }; }(n = { exports: {} }), n.exports; }();
    function i(t, e) { return function (n) { return e(t(n)); }; }
    function r(t, e) { for (var r = [e[t].parent, t], a = n[e[t].parent][t], o = e[t].parent; e[o].parent;)
        r.unshift(e[o].parent), a = i(n[e[o].parent][o], a), o = e[o].parent; return a.conversion = r, a; }
    var a = {};
    Object.keys(n).forEach((function (t) { a[t] = {}, Object.defineProperty(a[t], "channels", { value: n[t].channels }), Object.defineProperty(a[t], "labels", { value: n[t].labels }); var e = function (t) { for (var e = function (t) { var e = function () { for (var t = {}, e = Object.keys(n), i = e.length, r = 0; r < i; r++)
        t[e[r]] = { distance: -1, parent: null }; return t; }(), i = [t]; for (e[t].distance = 0; i.length;)
        for (var r = i.pop(), a = Object.keys(n[r]), o = a.length, s = 0; s < o; s++) {
            var l = a[s], u = e[l];
            -1 === u.distance && (u.distance = e[r].distance + 1, u.parent = r, i.unshift(l));
        } return e; }(t), i = {}, a = Object.keys(e), o = a.length, s = 0; s < o; s++) {
        var l = a[s];
        null !== e[l].parent && (i[l] = r(l, e));
    } return i; }(t); Object.keys(e).forEach((function (n) { var i = e[n]; a[t][n] = function (t) { var e = function (e) { if (null == e)
        return e; arguments.length > 1 && (e = Array.prototype.slice.call(arguments)); var n = t(e); if ("object" == typeof n)
        for (var i = n.length, r = 0; r < i; r++)
            n[r] = Math.round(n[r]); return n; }; return "conversion" in t && (e.conversion = t.conversion), e; }(i), a[t][n].raw = function (t) { var e = function (e) { return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e)); }; return "conversion" in t && (e.conversion = t.conversion), e; }(i); })); }));
    var o = a, s = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, l = { getRgba: u, getHsla: h, getRgb: function (t) { var e = u(t); return e && e.slice(0, 3); }, getHsl: function (t) { var e = h(t); return e && e.slice(0, 3); }, getHwb: c, getAlpha: function (t) { var e = u(t); return e ? e[3] : (e = h(t)) ? e[3] : (e = c(t)) ? e[3] : void 0; }, hexString: function (t, e) { return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + m(t[0]) + m(t[1]) + m(t[2]) + (e >= 0 && e < 1 ? m(Math.round(255 * e)) : ""); }, rgbString: function (t, e) { return e < 1 || t[3] && t[3] < 1 ? d(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"; }, rgbaString: d, percentString: function (t, e) { return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"; }, percentaString: f, hslString: function (t, e) { return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"; }, hslaString: g, hwbString: function (t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"; }, keyword: function (t) { return v[t.slice(0, 3)]; } };
    function u(t) { if (t) {
        var e = [0, 0, 0], n = 1, i = t.match(/^#([a-fA-F0-9]{3,4})$/i), r = "";
        if (i) {
            r = (i = i[1])[3];
            for (var a = 0; a < e.length; a++)
                e[a] = parseInt(i[a] + i[a], 16);
            r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100);
        }
        else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
            for (r = i[2], i = i[1], a = 0; a < e.length; a++)
                e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16);
            r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100);
        }
        else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (a = 0; a < e.length; a++)
                e[a] = parseInt(i[a + 1]);
            n = parseFloat(i[4]);
        }
        else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (a = 0; a < e.length; a++)
                e[a] = Math.round(2.55 * parseFloat(i[a + 1]));
            n = parseFloat(i[4]);
        }
        else if (i = t.match(/(\w+)/)) {
            if ("transparent" == i[1])
                return [0, 0, 0, 0];
            if (!(e = s[i[1]]))
                return;
        }
        for (a = 0; a < e.length; a++)
            e[a] = p(e[a], 0, 255);
        return n = n || 0 == n ? p(n, 0, 1) : 1, e[3] = n, e;
    } }
    function h(t) { if (t) {
        var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
        if (e) {
            var n = parseFloat(e[4]);
            return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)];
        }
    } }
    function c(t) { if (t) {
        var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
        if (e) {
            var n = parseFloat(e[4]);
            return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)];
        }
    } }
    function d(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"; }
    function f(t, e) { return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"; }
    function g(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"; }
    function p(t, e, n) { return Math.min(Math.max(e, t), n); }
    function m(t) { var e = t.toString(16).toUpperCase(); return e.length < 2 ? "0" + e : e; }
    var v = {};
    for (var b in s)
        v[s[b]] = b;
    var x = function (t) { return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void ("string" == typeof t ? (e = l.getRgba(t)) ? this.setValues("rgb", e) : (e = l.getHsla(t)) ? this.setValues("hsl", e) : (e = l.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t); var e; };
    x.prototype = { isValid: function () { return this.valid; }, rgb: function () { return this.setSpace("rgb", arguments); }, hsl: function () { return this.setSpace("hsl", arguments); }, hsv: function () { return this.setSpace("hsv", arguments); }, hwb: function () { return this.setSpace("hwb", arguments); }, cmyk: function () { return this.setSpace("cmyk", arguments); }, rgbArray: function () { return this.values.rgb; }, hslArray: function () { return this.values.hsl; }, hsvArray: function () { return this.values.hsv; }, hwbArray: function () { var t = this.values; return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb; }, cmykArray: function () { return this.values.cmyk; }, rgbaArray: function () { var t = this.values; return t.rgb.concat([t.alpha]); }, hslaArray: function () { var t = this.values; return t.hsl.concat([t.alpha]); }, alpha: function (t) { return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this); }, red: function (t) { return this.setChannel("rgb", 0, t); }, green: function (t) { return this.setChannel("rgb", 1, t); }, blue: function (t) { return this.setChannel("rgb", 2, t); }, hue: function (t) { return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t); }, saturation: function (t) { return this.setChannel("hsl", 1, t); }, lightness: function (t) { return this.setChannel("hsl", 2, t); }, saturationv: function (t) { return this.setChannel("hsv", 1, t); }, whiteness: function (t) { return this.setChannel("hwb", 1, t); }, blackness: function (t) { return this.setChannel("hwb", 2, t); }, value: function (t) { return this.setChannel("hsv", 2, t); }, cyan: function (t) { return this.setChannel("cmyk", 0, t); }, magenta: function (t) { return this.setChannel("cmyk", 1, t); }, yellow: function (t) { return this.setChannel("cmyk", 2, t); }, black: function (t) { return this.setChannel("cmyk", 3, t); }, hexString: function () { return l.hexString(this.values.rgb); }, rgbString: function () { return l.rgbString(this.values.rgb, this.values.alpha); }, rgbaString: function () { return l.rgbaString(this.values.rgb, this.values.alpha); }, percentString: function () { return l.percentString(this.values.rgb, this.values.alpha); }, hslString: function () { return l.hslString(this.values.hsl, this.values.alpha); }, hslaString: function () { return l.hslaString(this.values.hsl, this.values.alpha); }, hwbString: function () { return l.hwbString(this.values.hwb, this.values.alpha); }, keyword: function () { return l.keyword(this.values.rgb, this.values.alpha); }, rgbNumber: function () { var t = this.values.rgb; return t[0] << 16 | t[1] << 8 | t[2]; }, luminosity: function () { for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
        } return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]; }, contrast: function (t) { var e = this.luminosity(), n = t.luminosity(); return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05); }, level: function (t) { var e = this.contrast(t); return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""; }, dark: function () { var t = this.values.rgb; return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128; }, light: function () { return !this.dark(); }, negate: function () { for (var t = [], e = 0; e < 3; e++)
            t[e] = 255 - this.values.rgb[e]; return this.setValues("rgb", t), this; }, lighten: function (t) { var e = this.values.hsl; return e[2] += e[2] * t, this.setValues("hsl", e), this; }, darken: function (t) { var e = this.values.hsl; return e[2] -= e[2] * t, this.setValues("hsl", e), this; }, saturate: function (t) { var e = this.values.hsl; return e[1] += e[1] * t, this.setValues("hsl", e), this; }, desaturate: function (t) { var e = this.values.hsl; return e[1] -= e[1] * t, this.setValues("hsl", e), this; }, whiten: function (t) { var e = this.values.hwb; return e[1] += e[1] * t, this.setValues("hwb", e), this; }, blacken: function (t) { var e = this.values.hwb; return e[2] += e[2] * t, this.setValues("hwb", e), this; }, greyscale: function () { var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2]; return this.setValues("rgb", [e, e, e]), this; }, clearer: function (t) { var e = this.values.alpha; return this.setValues("alpha", e - e * t), this; }, opaquer: function (t) { var e = this.values.alpha; return this.setValues("alpha", e + e * t), this; }, rotate: function (t) { var e = this.values.hsl, n = (e[0] + t) % 360; return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this; }, mix: function (t, e) { var n = t, i = void 0 === e ? .5 : e, r = 2 * i - 1, a = this.alpha() - n.alpha(), o = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2, s = 1 - o; return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i)); }, toJSON: function () { return this.rgb(); }, clone: function () { var t, e, n = new x, i = this.values, r = n.values; for (var a in i)
            i.hasOwnProperty(a) && ("[object Array]" === (e = {}.toString.call(t = i[a])) ? r[a] = t.slice(0) : "[object Number]" === e ? r[a] = t : console.error("unexpected color value:", t)); return n; } }, x.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, x.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, x.prototype.getValues = function (t) { for (var e = this.values, n = {}, i = 0; i < t.length; i++)
        n[t.charAt(i)] = e[t][i]; return 1 !== e.alpha && (n.a = e.alpha), n; }, x.prototype.setValues = function (t, e) { var n, i, r = this.values, a = this.spaces, s = this.maxes, l = 1; if (this.valid = !0, "alpha" === t)
        l = e;
    else if (e.length)
        r[t] = e.slice(0, t.length), l = e[t.length];
    else if (void 0 !== e[t.charAt(0)]) {
        for (n = 0; n < t.length; n++)
            r[t][n] = e[t.charAt(n)];
        l = e.a;
    }
    else if (void 0 !== e[a[t][0]]) {
        var u = a[t];
        for (n = 0; n < t.length; n++)
            r[t][n] = e[u[n]];
        l = e.alpha;
    } if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t)
        return !1; for (n = 0; n < t.length; n++)
        i = Math.max(0, Math.min(s[t][n], r[t][n])), r[t][n] = Math.round(i); for (var h in a)
        h !== t && (r[h] = o[t][h](r[t])); return !0; }, x.prototype.setSpace = function (t, e) { var n = e[0]; return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this); }, x.prototype.setChannel = function (t, e, n) { var i = this.values[t]; return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this); }, "undefined" != typeof window && (window.Color = x);
    var y, _ = x, k = { noop: function () { }, uid: (y = 0, function () { return y++; }), isNullOrUndef: function (t) { return null == t; }, isArray: function (t) { if (Array.isArray && Array.isArray(t))
            return !0; var e = Object.prototype.toString.call(t); return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6); }, isObject: function (t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t); }, isFinite: function (t) { return ("number" == typeof t || t instanceof Number) && isFinite(t); }, valueOrDefault: function (t, e) { return void 0 === t ? e : t; }, valueAtIndexOrDefault: function (t, e, n) { return k.valueOrDefault(k.isArray(t) ? t[e] : t, n); }, callback: function (t, e, n) { if (t && "function" == typeof t.call)
            return t.apply(n, e); }, each: function (t, e, n, i) { var r, a, o; if (k.isArray(t))
            if (a = t.length, i)
                for (r = a - 1; r >= 0; r--)
                    e.call(n, t[r], r);
            else
                for (r = 0; r < a; r++)
                    e.call(n, t[r], r);
        else if (k.isObject(t))
            for (a = (o = Object.keys(t)).length, r = 0; r < a; r++)
                e.call(n, t[o[r]], o[r]); }, arrayEquals: function (t, e) { var n, i, r, a; if (!t || !e || t.length !== e.length)
            return !1; for (n = 0, i = t.length; n < i; ++n)
            if (a = e[n], (r = t[n]) instanceof Array && a instanceof Array) {
                if (!k.arrayEquals(r, a))
                    return !1;
            }
            else if (r !== a)
                return !1; return !0; }, clone: function (t) { if (k.isArray(t))
            return t.map(k.clone); if (k.isObject(t)) {
            for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r)
                e[n[r]] = k.clone(t[n[r]]);
            return e;
        } return t; }, _merger: function (t, e, n, i) { var r = e[t], a = n[t]; k.isObject(r) && k.isObject(a) ? k.merge(r, a, i) : e[t] = k.clone(a); }, _mergerIf: function (t, e, n) { var i = e[t], r = n[t]; k.isObject(i) && k.isObject(r) ? k.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = k.clone(r)); }, merge: function (t, e, n) { var i, r, a, o, s, l = k.isArray(e) ? e : [e], u = l.length; if (!k.isObject(t))
            return t; for (i = (n = n || {}).merger || k._merger, r = 0; r < u; ++r)
            if (k.isObject(e = l[r]))
                for (s = 0, o = (a = Object.keys(e)).length; s < o; ++s)
                    i(a[s], t, e, n); return t; }, mergeIf: function (t, e) { return k.merge(t, e, { merger: k._mergerIf }); }, extend: Object.assign || function (t) { return k.merge(t, [].slice.call(arguments, 1), { merger: function (t, e, n) { e[t] = n[t]; } }); }, inherits: function (t) { var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () { return e.apply(this, arguments); }, i = function () { this.constructor = n; }; return i.prototype = e.prototype, n.prototype = new i, n.extend = k.inherits, t && k.extend(n.prototype, t), n.__super__ = e.prototype, n; }, _deprecated: function (t, e, n, i) { void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead'); } }, w = k;
    k.callCallback = k.callback, k.indexOf = function (t, e, n) { return Array.prototype.indexOf.call(t, e, n); }, k.getValueOrDefault = k.valueOrDefault, k.getValueAtIndexOrDefault = k.valueAtIndexOrDefault;
    var M = { linear: function (t) { return t; }, easeInQuad: function (t) { return t * t; }, easeOutQuad: function (t) { return -t * (t - 2); }, easeInOutQuad: function (t) { return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1); }, easeInCubic: function (t) { return t * t * t; }, easeOutCubic: function (t) { return (t -= 1) * t * t + 1; }, easeInOutCubic: function (t) { return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2); }, easeInQuart: function (t) { return t * t * t * t; }, easeOutQuart: function (t) { return -((t -= 1) * t * t * t - 1); }, easeInOutQuart: function (t) { return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2); }, easeInQuint: function (t) { return t * t * t * t * t; }, easeOutQuint: function (t) { return (t -= 1) * t * t * t * t + 1; }, easeInOutQuint: function (t) { return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2); }, easeInSine: function (t) { return 1 - Math.cos(t * (Math.PI / 2)); }, easeOutSine: function (t) { return Math.sin(t * (Math.PI / 2)); }, easeInOutSine: function (t) { return -.5 * (Math.cos(Math.PI * t) - 1); }, easeInExpo: function (t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)); }, easeOutExpo: function (t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t); }, easeInOutExpo: function (t) { return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t)); }, easeInCirc: function (t) { return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1); }, easeOutCirc: function (t) { return Math.sqrt(1 - (t -= 1) * t); }, easeInOutCirc: function (t) { return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1); }, easeInElastic: function (t) { var e = 1.70158, n = 0, i = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)); }, easeOutElastic: function (t) { var e = 1.70158, n = 0, i = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1); }, easeInOutElastic: function (t) { var e = 1.70158, n = 0, i = 1; return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1); }, easeInBack: function (t) { var e = 1.70158; return t * t * ((e + 1) * t - e); }, easeOutBack: function (t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1; }, easeInOutBack: function (t) { var e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2); }, easeInBounce: function (t) { return 1 - M.easeOutBounce(1 - t); }, easeOutBounce: function (t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375; }, easeInOutBounce: function (t) { return t < .5 ? .5 * M.easeInBounce(2 * t) : .5 * M.easeOutBounce(2 * t - 1) + .5; } }, S = { effects: M };
    w.easingEffects = M;
    var C = Math.PI, T = C / 180, P = 2 * C, A = C / 2, D = C / 4, I = 2 * C / 3, F = { clear: function (t) { t.ctx.clearRect(0, 0, t.width, t.height); }, roundedRect: function (t, e, n, i, r, a) { if (a) {
            var o = Math.min(a, r / 2, i / 2), s = e + o, l = n + o, u = e + i - o, h = n + r - o;
            t.moveTo(e, l), s < u && l < h ? (t.arc(s, l, o, -C, -A), t.arc(u, l, o, -A, 0), t.arc(u, h, o, 0, A), t.arc(s, h, o, A, C)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -A, A), t.arc(s, l, o, A, C + A)) : l < h ? (t.arc(s, l, o, -C, 0), t.arc(s, h, o, 0, C)) : t.arc(s, l, o, -C, C), t.closePath(), t.moveTo(e, n);
        }
        else
            t.rect(e, n, i, r); }, drawPoint: function (t, e, n, i, r, a) { var o, s, l, u, h, c = (a || 0) * T; if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o))
            return t.save(), t.translate(i, r), t.rotate(c), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore(); if (!(isNaN(n) || n <= 0)) {
            switch (t.beginPath(), e) {
                default:
                    t.arc(i, r, n, 0, P), t.closePath();
                    break;
                case "triangle":
                    t.moveTo(i + Math.sin(c) * n, r - Math.cos(c) * n), c += I, t.lineTo(i + Math.sin(c) * n, r - Math.cos(c) * n), c += I, t.lineTo(i + Math.sin(c) * n, r - Math.cos(c) * n), t.closePath();
                    break;
                case "rectRounded":
                    u = n - (h = .516 * n), s = Math.cos(c + D) * u, l = Math.sin(c + D) * u, t.arc(i - s, r - l, h, c - C, c - A), t.arc(i + l, r - s, h, c - A, c), t.arc(i + s, r + l, h, c, c + A), t.arc(i - l, r + s, h, c + A, c + C), t.closePath();
                    break;
                case "rect":
                    if (!a) {
                        u = Math.SQRT1_2 * n, t.rect(i - u, r - u, 2 * u, 2 * u);
                        break;
                    }
                    c += D;
                case "rectRot":
                    s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + l, r - s), t.lineTo(i + s, r + l), t.lineTo(i - l, r + s), t.closePath();
                    break;
                case "crossRot": c += D;
                case "cross":
                    s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                    break;
                case "star":
                    s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s), c += D, s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                    break;
                case "line":
                    s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l);
                    break;
                case "dash": t.moveTo(i, r), t.lineTo(i + Math.cos(c) * n, r + Math.sin(c) * n);
            }
            t.fill(), t.stroke();
        } }, _isPointInArea: function (t, e) { return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6; }, clipArea: function (t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip(); }, unclipArea: function (t) { t.restore(); }, lineTo: function (t, e, n, i) { var r = n.steppedLine; if (r) {
            if ("middle" === r) {
                var a = (e.x + n.x) / 2;
                t.lineTo(a, i ? n.y : e.y), t.lineTo(a, i ? e.y : n.y);
            }
            else
                "after" === r && !i || "after" !== r && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
            t.lineTo(n.x, n.y);
        }
        else
            n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y); } }, O = F;
    w.clear = F.clear, w.drawRoundedRectangle = function (t) { t.beginPath(), F.roundedRect.apply(F, arguments); };
    var L = { _set: function (t, e) { return w.merge(this[t] || (this[t] = {}), e); } };
    L._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 });
    var R = L, E = w.valueOrDefault, z = { toLineHeight: function (t, e) { var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1])
            return 1.2 * e; switch (t = +n[2], n[3]) {
            case "px": return t;
            case "%": t /= 100;
        } return e * t; }, toPadding: function (t) { var e, n, i, r; return w.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, { top: e, right: n, bottom: i, left: r, height: e + i, width: r + n }; }, _parseFont: function (t) { var e = R.global, n = E(t.fontSize, e.defaultFontSize), i = { family: E(t.fontFamily, e.defaultFontFamily), lineHeight: w.options.toLineHeight(E(t.lineHeight, e.defaultLineHeight), n), size: n, style: E(t.fontStyle, e.defaultFontStyle), weight: null, string: "" }; return i.string = function (t) { return !t || w.isNullOrUndef(t.size) || w.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family; }(i), i; }, resolve: function (t, e, n, i) { var r, a, o, s = !0; for (r = 0, a = t.length; r < a; ++r)
            if (void 0 !== (o = t[r]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && w.isArray(o) && (o = o[n], s = !1), void 0 !== o))
                return i && !s && (i.cacheable = !1), o; } }, N = { _factorize: function (t) { var e, n = [], i = Math.sqrt(t); for (e = 1; e < i; e++)
            t % e == 0 && (n.push(e), n.push(t / e)); return i === (0 | i) && n.push(i), n.sort((function (t, e) { return t - e; })).pop(), n; }, log10: Math.log10 || function (t) { var e = Math.log(t) * Math.LOG10E, n = Math.round(e); return t === Math.pow(10, n) ? n : e; } }, B = N;
    w.log10 = N.log10;
    var W = w, V = O, H = z, j = B;
    W.easing = S, W.canvas = V, W.options = H, W.math = j, W.rtl = { getRtlAdapter: function (t, e, n) { return t ? function (t, e) { return { x: function (n) { return t + t + e - n; }, setWidth: function (t) { e = t; }, textAlign: function (t) { return "center" === t ? t : "right" === t ? "left" : "right"; }, xPlus: function (t, e) { return t - e; }, leftForLtr: function (t, e) { return t - e; } }; }(e, n) : { x: function (t) { return t; }, setWidth: function (t) { }, textAlign: function (t) { return t; }, xPlus: function (t, e) { return t + e; }, leftForLtr: function (t, e) { return t; } }; }, overrideTextDirection: function (t, e) { var n, i; "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i); }, restoreTextDirection: function (t) { var e = t.prevTextDirection; void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])); } };
    var q = function (t) { W.extend(this, t), this.initialize.apply(this, arguments); };
    W.extend(q.prototype, { _type: void 0, initialize: function () { this.hidden = !1; }, pivot: function () { var t = this; return t._view || (t._view = W.extend({}, t._model)), t._start = {}, t; }, transition: function (t) { var e = this, n = e._model, i = e._start, r = e._view; return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), function (t, e, n, i) { var r, a, o, s, l, u, h, c, d, f = Object.keys(n); for (r = 0, a = f.length; r < a; ++r)
            if (u = n[o = f[r]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                if (t.hasOwnProperty(o) || (t[o] = s), (h = typeof u) == typeof (l = t[o]))
                    if ("string" === h) {
                        if ((c = _(l)).valid && (d = _(u)).valid) {
                            e[o] = d.mix(c, i).rgbString();
                            continue;
                        }
                    }
                    else if (W.isFinite(l) && W.isFinite(u)) {
                        e[o] = l + (u - l) * i;
                        continue;
                    }
                e[o] = u;
            } }(i, r, n, t), e) : (e._view = W.extend({}, n), e._start = null, e); }, tooltipPosition: function () { return { x: this._model.x, y: this._model.y }; }, hasValue: function () { return W.isNumber(this._model.x) && W.isNumber(this._model.y); } }), q.extend = W.inherits;
    var Y = q, U = Y.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), X = U;
    Object.defineProperty(U.prototype, "animationObject", { get: function () { return this; } }), Object.defineProperty(U.prototype, "chartInstance", { get: function () { return this.chart; }, set: function (t) { this.chart = t; } }), R._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: W.noop, onComplete: W.noop } });
    var G = { animations: [], request: null, addAnimation: function (t, e, n, i) { var r, a, o = this.animations; for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), r = 0, a = o.length; r < a; ++r)
            if (o[r].chart === t)
                return void (o[r] = e); o.push(e), 1 === o.length && this.requestAnimationFrame(); }, cancelAnimation: function (t) { var e = W.findIndex(this.animations, (function (e) { return e.chart === t; })); -1 !== e && (this.animations.splice(e, 1), t.animating = !1); }, requestAnimationFrame: function () { var t = this; null === t.request && (t.request = W.requestAnimFrame.call(window, (function () { t.request = null, t.startDigest(); }))); }, startDigest: function () { this.advance(), this.animations.length > 0 && this.requestAnimationFrame(); }, advance: function () { for (var t, e, n, i, r = this.animations, a = 0; a < r.length;)
            e = (t = r[a]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), W.callback(t.render, [e, t], e), W.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (W.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(a, 1)) : ++a; } }, $ = W.options.resolve, K = ["push", "pop", "shift", "splice", "unshift"];
    function Z(t, e) { var n = t._chartjs; if (n) {
        var i = n.listeners, r = i.indexOf(e);
        -1 !== r && i.splice(r, 1), i.length > 0 || (K.forEach((function (e) { delete t[e]; })), delete t._chartjs);
    } }
    var J = function (t, e) { this.initialize(t, e); };
    W.extend(J.prototype, { datasetElementType: null, dataElementType: null, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"], _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"], initialize: function (t, e) { var n = this; n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type; }, updateIndex: function (t) { this.index = t; }, linkScales: function () { var t = this.getMeta(), e = this.chart, n = e.scales, i = this.getDataset(), r = e.options.scales; null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || r.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || r.yAxes[0].id); }, getDataset: function () { return this.chart.data.datasets[this.index]; }, getMeta: function () { return this.chart.getDatasetMeta(this.index); }, getScaleForId: function (t) { return this.chart.scales[t]; }, _getValueScaleId: function () { return this.getMeta().yAxisID; }, _getIndexScaleId: function () { return this.getMeta().xAxisID; }, _getValueScale: function () { return this.getScaleForId(this._getValueScaleId()); }, _getIndexScale: function () { return this.getScaleForId(this._getIndexScaleId()); }, reset: function () { this._update(!0); }, destroy: function () { this._data && Z(this._data, this); }, createMetaDataset: function () { var t = this.datasetElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index }); }, createMetaData: function (t) { var e = this.dataElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t }); }, addElements: function () { var t, e, n = this.getMeta(), i = this.getDataset().data || [], r = n.data; for (t = 0, e = i.length; t < e; ++t)
            r[t] = r[t] || this.createMetaData(t); n.dataset = n.dataset || this.createMetaDataset(); }, addElementAndReset: function (t) { var e = this.createMetaData(t); this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0); }, buildOrUpdateElements: function () { var t, e, n = this, i = n.getDataset(), r = i.data || (i.data = []); n._data !== r && (n._data && Z(n._data, n), r && Object.isExtensible(r) && (e = n, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), K.forEach((function (e) { var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1), i = t[e]; Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function () { var e = Array.prototype.slice.call(arguments), r = i.apply(this, e); return W.each(t._chartjs.listeners, (function (t) { "function" == typeof t[n] && t[n].apply(t, e); })), r; } }); })))), n._data = r), n.resyncElements(); }, _configure: function () { this._config = W.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], { merger: function (t, e, n) { "_meta" !== t && "data" !== t && W._merger(t, e, n); } }); }, _update: function (t) { this._configure(), this._cachedDataOpts = null, this.update(t); }, update: W.noop, transition: function (t) { for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r)
            n[r].transition(t); e.dataset && e.dataset.transition(t); }, draw: function () { var t = this.getMeta(), e = t.data || [], n = e.length, i = 0; for (t.dataset && t.dataset.draw(); i < n; ++i)
            e[i].draw(); }, getStyle: function (t) { var e, n = this.getMeta(), i = n.dataset; return this._configure(), !1 !== (e = i && void 0 === t ? this._resolveDatasetElementOptions(i || {}) : this._resolveDataElementOptions(n.data[t = t || 0] || {}, t)).fill && null !== e.fill || (e.backgroundColor = e.borderColor), e; }, _resolveDatasetElementOptions: function (t, e) { var n, i, r, a, o = this, s = o.chart, l = o._config, u = t.custom || {}, h = s.options.elements[o.datasetElementType.prototype._type] || {}, c = o._datasetElementOptions, d = {}, f = { chart: s, dataset: o.getDataset(), datasetIndex: o.index, hover: e }; for (n = 0, i = c.length; n < i; ++n)
            r = c[n], a = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, d[r] = $([u[a], l[a], h[a]], f); return d; }, _resolveDataElementOptions: function (t, e) { var n = this, i = t && t.custom, r = n._cachedDataOpts; if (r && !i)
            return r; var a, o, s, l, u = n.chart, h = n._config, c = u.options.elements[n.dataElementType.prototype._type] || {}, d = n._dataElementOptions, f = {}, g = { chart: u, dataIndex: e, dataset: n.getDataset(), datasetIndex: n.index }, p = { cacheable: !i }; if (i = i || {}, W.isArray(d))
            for (o = 0, s = d.length; o < s; ++o)
                f[l = d[o]] = $([i[l], h[l], c[l]], g, e, p);
        else
            for (o = 0, s = (a = Object.keys(d)).length; o < s; ++o)
                f[l = a[o]] = $([i[l], h[d[l]], h[l], c[l]], g, e, p); return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f; }, removeHoverStyle: function (t) { W.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle; }, setHoverStyle: function (t) { var e = this.chart.data.datasets[t._datasetIndex], n = t._index, i = t.custom || {}, r = t._model, a = W.getHoverColor; t.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = $([i.hoverBackgroundColor, e.hoverBackgroundColor, a(r.backgroundColor)], void 0, n), r.borderColor = $([i.hoverBorderColor, e.hoverBorderColor, a(r.borderColor)], void 0, n), r.borderWidth = $([i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, n); }, _removeDatasetHoverStyle: function () { var t = this.getMeta().dataset; t && this.removeHoverStyle(t); }, _setDatasetHoverStyle: function () { var t, e, n, i, r, a, o = this.getMeta().dataset, s = {}; if (o) {
            for (a = o._model, r = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(r)).length; t < e; ++t)
                s[n = i[t]] = a[n], a[n] = r[n];
            o.$previousStyle = s;
        } }, resyncElements: function () { var t = this.getMeta(), e = this.getDataset().data, n = t.data.length, i = e.length; i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n); }, insertElements: function (t, e) { for (var n = 0; n < e; ++n)
            this.addElementAndReset(t + n); }, onDataPush: function () { var t = arguments.length; this.insertElements(this.getDataset().data.length - t, t); }, onDataPop: function () { this.getMeta().data.pop(); }, onDataShift: function () { this.getMeta().data.shift(); }, onDataSplice: function (t, e) { this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2); }, onDataUnshift: function () { this.insertElements(0, arguments.length); } }), J.extend = W.inherits;
    var Q = J, tt = 2 * Math.PI;
    function et(t, e) { var n = e.startAngle, i = e.endAngle, r = e.pixelMargin, a = r / e.outerRadius, o = e.x, s = e.y; t.beginPath(), t.arc(o, s, e.outerRadius, n - a, i + a), e.innerRadius > r ? t.arc(o, s, e.innerRadius - r, i + (a = r / e.innerRadius), n - a, !0) : t.arc(o, s, r, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip(); }
    R._set("global", { elements: { arc: { backgroundColor: R.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } });
    var nt = Y.extend({ _type: "arc", inLabelRange: function (t) { var e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2); }, inRange: function (t, e) { var n = this._view; if (n) {
            for (var i = W.getAngleFromPoint(n, { x: t, y: e }), r = i.angle, a = i.distance, o = n.startAngle, s = n.endAngle; s < o;)
                s += tt;
            for (; r > s;)
                r -= tt;
            for (; r < o;)
                r += tt;
            return r >= o && r <= s && a >= n.innerRadius && a <= n.outerRadius;
        } return !1; }, getCenterPoint: function () { var t = this._view, e = (t.startAngle + t.endAngle) / 2, n = (t.innerRadius + t.outerRadius) / 2; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n }; }, getArea: function () { var t = this._view; return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2)); }, tooltipPosition: function () { var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2, n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n }; }, draw: function () { var t, e = this._chart.ctx, n = this._view, i = "inner" === n.borderAlign ? .33 : 0, r = { x: n.x, y: n.y, innerRadius: n.innerRadius, outerRadius: Math.max(n.outerRadius - i, 0), pixelMargin: i, startAngle: n.startAngle, endAngle: n.endAngle, fullCircles: Math.floor(n.circumference / tt) }; if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, r.fullCircles) {
            for (r.endAngle = r.startAngle + tt, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t)
                e.fill();
            r.endAngle = r.startAngle + n.circumference % tt;
        } e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && function (t, e, n) { var i = "inner" === e.borderAlign; i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function (t, e, n, i) { var r, a = n.endAngle; for (i && (n.endAngle = n.startAngle + tt, et(t, n), n.endAngle = a, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += tt, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + tt, n.startAngle, !0), r = 0; r < n.fullCircles; ++r)
            t.stroke(); for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + tt), r = 0; r < n.fullCircles; ++r)
            t.stroke(); }(t, e, n, i), i && et(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke(); }(e, n, r), e.restore(); } }), it = W.valueOrDefault, rt = R.global.defaultColor;
    R._set("global", { elements: { line: { tension: .4, backgroundColor: rt, borderWidth: 3, borderColor: rt, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } });
    var at = Y.extend({ _type: "line", draw: function () { var t, e, n, i = this, r = i._view, a = i._chart.ctx, o = r.spanGaps, s = i._children.slice(), l = R.global, u = l.elements.line, h = -1, c = i._loop; if (s.length) {
            if (i._loop) {
                for (t = 0; t < s.length; ++t)
                    if (e = W.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                        s = s.slice(t).concat(s.slice(0, t)), c = o;
                        break;
                    }
                c && s.push(s[0]);
            }
            for (a.save(), a.lineCap = r.borderCapStyle || u.borderCapStyle, a.setLineDash && a.setLineDash(r.borderDash || u.borderDash), a.lineDashOffset = it(r.borderDashOffset, u.borderDashOffset), a.lineJoin = r.borderJoinStyle || u.borderJoinStyle, a.lineWidth = it(r.borderWidth, u.borderWidth), a.strokeStyle = r.borderColor || l.defaultColor, a.beginPath(), (n = s[0]._view).skip || (a.moveTo(n.x, n.y), h = 0), t = 1; t < s.length; ++t)
                n = s[t]._view, e = -1 === h ? W.previousItem(s, t) : s[h], n.skip || (h !== t - 1 && !o || -1 === h ? a.moveTo(n.x, n.y) : W.canvas.lineTo(a, e._view, n), h = t);
            c && a.closePath(), a.stroke(), a.restore();
        } } }), ot = W.valueOrDefault, st = R.global.defaultColor;
    function lt(t) { var e = this._view; return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius; }
    R._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: st, borderColor: st, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } });
    var ut = Y.extend({ _type: "point", inRange: function (t, e) { var n = this._view; return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2); }, inLabelRange: lt, inXRange: lt, inYRange: function (t) { var e = this._view; return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius; }, getCenterPoint: function () { var t = this._view; return { x: t.x, y: t.y }; }, getArea: function () { return Math.PI * Math.pow(this._view.radius, 2); }, tooltipPosition: function () { var t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth }; }, draw: function (t) { var e = this._view, n = this._chart.ctx, i = e.pointStyle, r = e.rotation, a = e.radius, o = e.x, s = e.y, l = R.global, u = l.defaultColor; e.skip || (void 0 === t || W.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ot(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, W.canvas.drawPoint(n, i, a, o, s, r)); } }), ht = R.global.defaultColor;
    function ct(t) { return t && void 0 !== t.width; }
    function dt(t) { var e, n, i, r, a; return ct(t) ? (e = t.x - (a = t.width / 2), n = t.x + a, i = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (a = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - a, r = t.y + a), { left: e, top: i, right: n, bottom: r }; }
    function ft(t, e, n) { return t === e ? n : t === n ? e : t; }
    function gt(t, e, n) { var i = null === e, r = null === n, a = !(!t || i && r) && dt(t); return a && (i || e >= a.left && e <= a.right) && (r || n >= a.top && n <= a.bottom); }
    R._set("global", { elements: { rectangle: { backgroundColor: ht, borderColor: ht, borderSkipped: "bottom", borderWidth: 0 } } });
    var pt = Y.extend({ _type: "rectangle", draw: function () { var t = this._chart.ctx, e = this._view, n = function (t) { var e = dt(t), n = e.right - e.left, i = e.bottom - e.top, r = function (t, e, n) { var i, r, a, o, s = t.borderWidth, l = function (t) { var e = t.borderSkipped, n = {}; return e ? (t.horizontal ? t.base > t.x && (e = ft(e, "left", "right")) : t.base < t.y && (e = ft(e, "bottom", "top")), n[e] = !0, n) : n; }(t); return W.isObject(s) ? (i = +s.top || 0, r = +s.right || 0, a = +s.bottom || 0, o = +s.left || 0) : i = r = a = o = +s || 0, { t: l.top || i < 0 ? 0 : i > n ? n : i, r: l.right || r < 0 ? 0 : r > e ? e : r, b: l.bottom || a < 0 ? 0 : a > n ? n : a, l: l.left || o < 0 ? 0 : o > e ? e : o }; }(t, n / 2, i / 2); return { outer: { x: e.left, y: e.top, w: n, h: i }, inner: { x: e.left + r.l, y: e.top + r.t, w: n - r.l - r.r, h: i - r.t - r.b } }; }(e), i = n.outer, r = n.inner; t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === r.w && i.h === r.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore()); }, height: function () { var t = this._view; return t.base - t.y; }, inRange: function (t, e) { return gt(this._view, t, e); }, inLabelRange: function (t, e) { var n = this._view; return ct(n) ? gt(n, t, null) : gt(n, null, e); }, inXRange: function (t) { return gt(this._view, t, null); }, inYRange: function (t) { return gt(this._view, null, t); }, getCenterPoint: function () { var t, e, n = this._view; return ct(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e }; }, getArea: function () { var t = this._view; return ct(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base); }, tooltipPosition: function () { var t = this._view; return { x: t.x, y: t.y }; } }), mt = {}, vt = at, bt = ut, xt = pt;
    mt.Arc = nt, mt.Line = vt, mt.Point = bt, mt.Rectangle = xt;
    var yt = W._deprecated, _t = W.valueOrDefault;
    R._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), R._set("global", { datasets: { bar: { categoryPercentage: .8, barPercentage: .9 } } });
    var kt = Q.extend({ dataElementType: mt.Rectangle, _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"], initialize: function () { var t, e, n = this; Q.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, yt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), yt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), yt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), yt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), yt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness"); }, update: function (t) { var e, n, i = this.getMeta().data; for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e)
            this.updateElement(i[e], e, t); }, updateElement: function (t, e, n) { var i = this, r = i.getMeta(), a = i.getDataset(), o = i._resolveDataElementOptions(t, e); t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderSkipped: o.borderSkipped, borderWidth: o.borderWidth, datasetLabel: a.label, label: i.chart.data.labels[e] }, W.isArray(a.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot(); }, _updateElementGeometry: function (t, e, n, i) { var r = this, a = t._model, o = r._getValueScale(), s = o.getBasePixel(), l = o.isHorizontal(), u = r._ruler || r.getRuler(), h = r.calculateBarValuePixels(r.index, e, i), c = r.calculateBarIndexPixels(r.index, e, u, i); a.horizontal = l, a.base = n ? s : h.base, a.x = l ? n ? s : h.head : c.center, a.y = l ? c.center : n ? s : h.head, a.height = l ? c.size : void 0, a.width = l ? void 0 : c.size; }, _getStacks: function (t) { var e, n, i = this._getIndexScale(), r = i._getMatchingVisibleMetas(this._type), a = i.options.stacked, o = r.length, s = []; for (e = 0; e < o && (n = r[e], (!1 === a || -1 === s.indexOf(n.stack) || void 0 === a && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e)
            ; return s; }, getStackCount: function () { return this._getStacks().length; }, getStackIndex: function (t, e) { var n = this._getStacks(t), i = void 0 !== e ? n.indexOf(e) : -1; return -1 === i ? n.length - 1 : i; }, getRuler: function () { var t, e, n = this._getIndexScale(), i = []; for (t = 0, e = this.getMeta().data.length; t < e; ++t)
            i.push(n.getPixelForValue(null, t, this.index)); return { pixels: i, start: n._startPixel, end: n._endPixel, stackCount: this.getStackCount(), scale: n }; }, calculateBarValuePixels: function (t, e, n) { var i, r, a, o, s, l, u, h = this.chart, c = this._getValueScale(), d = c.isHorizontal(), f = h.data.datasets, g = c._getMatchingVisibleMetas(this._type), p = c._parseValue(f[t].data[e]), m = n.minBarLength, v = c.options.stacked, b = this.getMeta().stack, x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max, y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max, _ = g.length; if (v || void 0 === v && void 0 !== b)
            for (i = 0; i < _ && (r = g[i]).index !== t; ++i)
                r.stack === b && (a = void 0 === (u = c._parseValue(f[r.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && a < 0 || p.max >= 0 && a > 0) && (x += a)); return o = c.getPixelForValue(x), l = (s = c.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !d || y < 0 && d ? o - m : o + m), { size: l, base: o, head: s, center: s + l / 2 }; }, calculateBarIndexPixels: function (t, e, n, i) { var r = "flex" === i.barThickness ? function (t, e, n) { var i, r = e.pixels, a = r[t], o = t > 0 ? r[t - 1] : null, s = t < r.length - 1 ? r[t + 1] : null, l = n.categoryPercentage; return null === o && (o = a - (null === s ? e.end - e.start : s - a)), null === s && (s = a + a - o), i = a - (a - Math.min(o, s)) / 2 * l, { chunk: Math.abs(s - o) / 2 * l / e.stackCount, ratio: n.barPercentage, start: i }; }(e, n, i) : function (t, e, n) { var i, r, a = n.barThickness, o = e.stackCount, s = e.pixels[t], l = W.isNullOrUndef(a) ? function (t, e) { var n, i, r, a, o = t._length; for (r = 1, a = e.length; r < a; ++r)
            o = Math.min(o, Math.abs(e[r] - e[r - 1])); for (r = 0, a = t.getTicks().length; r < a; ++r)
            i = t.getPixelForTick(r), o = r > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i; return o; }(e.scale, e.pixels) : -1; return W.isNullOrUndef(a) ? (i = l * n.categoryPercentage, r = n.barPercentage) : (i = a * o, r = 1), { chunk: i / o, ratio: r, start: s - i / 2 }; }(e, n, i), a = this.getStackIndex(t, this.getMeta().stack), o = r.start + r.chunk * a + r.chunk / 2, s = Math.min(_t(i.maxBarThickness, 1 / 0), r.chunk * r.ratio); return { base: o - s / 2, head: o + s / 2, center: o, size: s }; }, draw: function () { var t = this.chart, e = this._getValueScale(), n = this.getMeta().data, i = this.getDataset(), r = n.length, a = 0; for (W.canvas.clipArea(t.ctx, t.chartArea); a < r; ++a) {
            var o = e._parseValue(i.data[a]);
            isNaN(o.min) || isNaN(o.max) || n[a].draw();
        } W.canvas.unclipArea(t.ctx); }, _resolveDataElementOptions: function () { var t = this, e = W.extend({}, Q.prototype._resolveDataElementOptions.apply(t, arguments)), n = t._getIndexScale().options, i = t._getValueScale().options; return e.barPercentage = _t(n.barPercentage, e.barPercentage), e.barThickness = _t(n.barThickness, e.barThickness), e.categoryPercentage = _t(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = _t(n.maxBarThickness, e.maxBarThickness), e.minBarLength = _t(i.minBarLength, e.minBarLength), e; } }), wt = W.valueOrDefault, Mt = W.options.resolve;
    R._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function () { return ""; }, label: function (t, e) { return (e.datasets[t.datasetIndex].label || "") + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.datasets[t.datasetIndex].data[t.index].r + ")"; } } } });
    var St = Q.extend({ dataElementType: mt.Point, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"], update: function (t) { var e = this, n = e.getMeta(); W.each(n.data, (function (n, i) { e.updateElement(n, i, t); })); }, updateElement: function (t, e, n) { var i = this, r = i.getMeta(), a = t.custom || {}, o = i.getScaleForId(r.xAxisID), s = i.getScaleForId(r.yAxisID), l = i._resolveDataElementOptions(t, e), u = i.getDataset().data[e], h = i.index, c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, h), d = n ? s.getBasePixel() : s.getPixelForValue(u, e, h); t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = h, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, rotation: l.rotation, radius: n ? 0 : l.radius, skip: a.skip || isNaN(c) || isNaN(d), x: c, y: d }, t.pivot(); }, setHoverStyle: function (t) { var e = t._model, n = t._options, i = W.getHoverColor; t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = wt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = wt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = wt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius; }, _resolveDataElementOptions: function (t, e) { var n = this, i = n.chart, r = n.getDataset(), a = t.custom || {}, o = r.data[e] || {}, s = Q.prototype._resolveDataElementOptions.apply(n, arguments), l = { chart: i, dataIndex: e, dataset: r, datasetIndex: n.index }; return n._cachedDataOpts === s && (s = W.extend({}, s)), s.radius = Mt([a.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s; } }), Ct = W.valueOrDefault, Tt = Math.PI, Pt = 2 * Tt, At = Tt / 2;
    R._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function (t) { var e, n, i, r = document.createElement("ul"), a = t.data, o = a.datasets, s = a.labels; if (r.setAttribute("class", t.id + "-legend"), o.length)
            for (e = 0, n = o[0].data.length; e < n; ++e)
                (i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e])); return r.outerHTML; }, legend: { labels: { generateLabels: function (t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function (n, i) { var r = t.getDatasetMeta(0), a = r.controller.getStyle(i); return { text: n, fillStyle: a.backgroundColor, strokeStyle: a.borderColor, lineWidth: a.borderWidth, hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden, index: i }; })) : []; } }, onClick: function (t, e) { var n, i, r, a = e.index, o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                (r = o.getDatasetMeta(n)).data[a] && (r.data[a].hidden = !r.data[a].hidden); o.update(); } }, cutoutPercentage: 50, rotation: -At, circumference: Pt, tooltips: { callbacks: { title: function () { return ""; }, label: function (t, e) { var n = e.labels[t.index], i = ": " + e.datasets[t.datasetIndex].data[t.index]; return W.isArray(n) ? (n = n.slice())[0] += i : n += i, n; } } } });
    var Dt = Q.extend({ dataElementType: mt.Arc, linkScales: W.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], getRingIndex: function (t) { for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && ++e; return e; }, update: function (t) { var e, n, i = this, r = i.chart, a = r.chartArea, o = r.options, s = 1, l = 1, u = 0, h = 0, c = i.getMeta(), d = c.data, f = o.cutoutPercentage / 100 || 0, g = o.circumference, p = i._getRingWeight(i.index); if (g < Pt) {
            var m = o.rotation % Pt, v = (m += m >= Tt ? -Pt : m < -Tt ? Pt : 0) + g, b = Math.cos(m), x = Math.sin(m), y = Math.cos(v), _ = Math.sin(v), k = m <= 0 && v >= 0 || v >= Pt, w = m <= At && v >= At || v >= Pt + At, M = m <= -At && v >= -At || v >= Tt + At, S = m === -Tt || v >= Tt ? -1 : Math.min(b, b * f, y, y * f), C = M ? -1 : Math.min(x, x * f, _, _ * f), T = k ? 1 : Math.max(b, b * f, y, y * f), P = w ? 1 : Math.max(x, x * f, _, _ * f);
            s = (T - S) / 2, l = (P - C) / 2, u = -(T + S) / 2, h = -(P + C) / 2;
        } for (e = 0, n = d.length; e < n; ++e)
            d[e]._options = i._resolveDataElementOptions(d[e], e); for (r.borderWidth = i.getMaxBorderWidth(), r.outerRadius = Math.max(Math.min((a.right - a.left - r.borderWidth) / s, (a.bottom - a.top - r.borderWidth) / l) / 2, 0), r.innerRadius = Math.max(r.outerRadius * f, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), r.offsetX = u * r.outerRadius, r.offsetY = h * r.outerRadius, c.total = i.calculateTotal(), i.outerRadius = r.outerRadius - r.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - r.radiusLength * p, 0), e = 0, n = d.length; e < n; ++e)
            i.updateElement(d[e], e, t); }, updateElement: function (t, e, n) { var i = this, r = i.chart, a = r.chartArea, o = r.options, s = o.animation, l = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o.rotation, c = o.rotation, d = i.getDataset(), f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(d.data[e]) * (o.circumference / Pt), g = t._options || {}; W.extend(t, { _datasetIndex: i.index, _index: e, _model: { backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, borderAlign: g.borderAlign, x: l + r.offsetX, y: u + r.offsetY, startAngle: h, endAngle: c, circumference: f, outerRadius: n && s.animateScale ? 0 : i.outerRadius, innerRadius: n && s.animateScale ? 0 : i.innerRadius, label: W.valueAtIndexOrDefault(d.label, e, r.data.labels[e]) } }); var p = t._model; n && s.animateRotate || (p.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, p.endAngle = p.startAngle + p.circumference), t.pivot(); }, calculateTotal: function () { var t, e = this.getDataset(), n = this.getMeta(), i = 0; return W.each(n.data, (function (n, r) { t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t)); })), i; }, calculateCircumference: function (t) { var e = this.getMeta().total; return e > 0 && !isNaN(t) ? Pt * (Math.abs(t) / e) : 0; }, getMaxBorderWidth: function (t) { var e, n, i, r, a, o, s, l, u = 0, h = this.chart; if (!t)
            for (e = 0, n = h.data.datasets.length; e < n; ++e)
                if (h.isDatasetVisible(e)) {
                    t = (i = h.getDatasetMeta(e)).data, e !== this.index && (a = i.controller);
                    break;
                } if (!t)
            return 0; for (e = 0, n = t.length; e < n; ++e)
            r = t[e], a ? (a._configure(), o = a._resolveDataElementOptions(r, e)) : o = r._options, "inner" !== o.borderAlign && (u = (l = o.hoverBorderWidth) > (u = (s = o.borderWidth) > u ? s : u) ? l : u); return u; }, setHoverStyle: function (t) { var e = t._model, n = t._options, i = W.getHoverColor; t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = Ct(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ct(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ct(n.hoverBorderWidth, n.borderWidth); }, _getRingWeightOffset: function (t) { for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n)); return e; }, _getRingWeight: function (t) { return Math.max(Ct(this.chart.data.datasets[t].weight, 1), 0); }, _getVisibleDatasetWeightTotal: function () { return this._getRingWeightOffset(this.chart.data.datasets.length); } });
    R._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }), R._set("global", { datasets: { horizontalBar: { categoryPercentage: .8, barPercentage: .9 } } });
    var It = kt.extend({ _getValueScaleId: function () { return this.getMeta().xAxisID; }, _getIndexScaleId: function () { return this.getMeta().yAxisID; } }), Ft = W.valueOrDefault, Ot = W.options.resolve, Lt = W.canvas._isPointInArea;
    function Rt(t, e) { var n = t && t.options.ticks || {}, i = n.reverse, r = void 0 === n.min ? e : 0, a = void 0 === n.max ? e : 0; return { start: i ? a : r, end: i ? r : a }; }
    function Et(t, e, n) { var i = n / 2, r = Rt(t, i), a = Rt(e, i); return { top: a.end, right: r.end, bottom: a.start, left: r.start }; }
    function zt(t) { var e, n, i, r; return W.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, r = t.left) : e = n = i = r = t, { top: e, right: n, bottom: i, left: r }; }
    R._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } });
    var Nt = Q.extend({ datasetElementType: mt.Line, dataElementType: mt.Point, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, update: function (t) { var e, n, i = this, r = i.getMeta(), a = r.dataset, o = r.data || [], s = i._config, l = i._showLine = Ft(s.showLine, i.chart.options.showLines); for (i._xScale = i.getScaleForId(r.xAxisID), i._yScale = i.getScaleForId(r.yAxisID), l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a._scale = i._yScale, a._datasetIndex = i.index, a._children = o, a._model = i._resolveDatasetElementOptions(a), a.pivot()), e = 0, n = o.length; e < n; ++e)
            i.updateElement(o[e], e, t); for (l && 0 !== a._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
            o[e].pivot(); }, updateElement: function (t, e, n) { var i, r, a = this, o = a.getMeta(), s = t.custom || {}, l = a.getDataset(), u = a.index, h = l.data[e], c = a._xScale, d = a._yScale, f = o.dataset._model, g = a._resolveDataElementOptions(t, e); i = c.getPixelForValue("object" == typeof h ? h : NaN, e, u), r = n ? d.getBasePixel() : a.calculatePointY(h, e, u), t._xScale = c, t._yScale = d, t._options = g, t._datasetIndex = u, t._index = e, t._model = { x: i, y: r, skip: s.skip || isNaN(i) || isNaN(r), radius: g.radius, pointStyle: g.pointStyle, rotation: g.rotation, backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, tension: Ft(s.tension, f ? f.tension : 0), steppedLine: !!f && f.steppedLine, hitRadius: g.hitRadius }; }, _resolveDatasetElementOptions: function (t) { var e = this, n = e._config, i = t.custom || {}, r = e.chart.options, a = r.elements.line, o = Q.prototype._resolveDatasetElementOptions.apply(e, arguments); return o.spanGaps = Ft(n.spanGaps, r.spanGaps), o.tension = Ft(n.lineTension, a.tension), o.steppedLine = Ot([i.steppedLine, n.steppedLine, a.stepped]), o.clip = zt(Ft(n.clip, Et(e._xScale, e._yScale, o.borderWidth))), o; }, calculatePointY: function (t, e, n) { var i, r, a, o, s, l, u = this.chart, h = this._yScale, c = 0, d = 0; if (h.options.stacked) {
            for (o = +h.getRightValue(t), l = (s = u._getSortedVisibleDatasetMetas()).length, i = 0; i < l && (r = s[i]).index !== n; ++i)
                "line" === r.type && r.yAxisID === h.id && ((a = +h.getRightValue(u.data.datasets[r.index].data[e])) < 0 ? d += a || 0 : c += a || 0);
            return h.getPixelForValue(o < 0 ? d + o : c + o);
        } return h.getPixelForValue(t); }, updateBezierControlPoints: function () { var t, e, n, i, r = this.chart, a = this.getMeta(), o = a.dataset._model, s = r.chartArea, l = a.data || []; function u(t, e, n) { return Math.max(Math.min(t, n), e); } if (o.spanGaps && (l = l.filter((function (t) { return !t._model.skip; }))), "monotone" === o.cubicInterpolationMode)
            W.splineCurveMonotone(l);
        else
            for (t = 0, e = l.length; t < e; ++t)
                n = l[t]._model, i = W.splineCurve(W.previousItem(l, t)._model, n, W.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y; if (r.options.elements.line.capBezierPoints)
            for (t = 0, e = l.length; t < e; ++t)
                Lt(n = l[t]._model, s) && (t > 0 && Lt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Lt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom))); }, draw: function () { var t, e = this.chart, n = this.getMeta(), i = n.data || [], r = e.chartArea, a = e.canvas, o = 0, s = i.length; for (this._showLine && (W.canvas.clipArea(e.ctx, { left: !1 === (t = n.dataset._model.clip).left ? 0 : r.left - t.left, right: !1 === t.right ? a.width : r.right + t.right, top: !1 === t.top ? 0 : r.top - t.top, bottom: !1 === t.bottom ? a.height : r.bottom + t.bottom }), n.dataset.draw(), W.canvas.unclipArea(e.ctx)); o < s; ++o)
            i[o].draw(r); }, setHoverStyle: function (t) { var e = t._model, n = t._options, i = W.getHoverColor; t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Ft(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ft(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ft(n.hoverBorderWidth, n.borderWidth), e.radius = Ft(n.hoverRadius, n.radius); } }), Bt = W.options.resolve;
    R._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function (t) { var e, n, i, r = document.createElement("ul"), a = t.data, o = a.datasets, s = a.labels; if (r.setAttribute("class", t.id + "-legend"), o.length)
            for (e = 0, n = o[0].data.length; e < n; ++e)
                (i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e])); return r.outerHTML; }, legend: { labels: { generateLabels: function (t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function (n, i) { var r = t.getDatasetMeta(0), a = r.controller.getStyle(i); return { text: n, fillStyle: a.backgroundColor, strokeStyle: a.borderColor, lineWidth: a.borderWidth, hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden, index: i }; })) : []; } }, onClick: function (t, e) { var n, i, r, a = e.index, o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                (r = o.getDatasetMeta(n)).data[a].hidden = !r.data[a].hidden; o.update(); } }, tooltips: { callbacks: { title: function () { return ""; }, label: function (t, e) { return e.labels[t.index] + ": " + t.yLabel; } } } });
    var Wt = Q.extend({ dataElementType: mt.Arc, linkScales: W.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], _getIndexScaleId: function () { return this.chart.scale.id; }, _getValueScaleId: function () { return this.chart.scale.id; }, update: function (t) { var e, n, i, r = this, a = r.getDataset(), o = r.getMeta(), s = r.chart.options.startAngle || 0, l = r._starts = [], u = r._angles = [], h = o.data; for (r._updateRadius(), o.count = r.countVisibleElements(), e = 0, n = a.data.length; e < n; e++)
            l[e] = s, i = r._computeAngle(e), u[e] = i, s += i; for (e = 0, n = h.length; e < n; ++e)
            h[e]._options = r._resolveDataElementOptions(h[e], e), r.updateElement(h[e], e, t); }, _updateRadius: function () { var t = this, e = t.chart, n = e.chartArea, i = e.options, r = Math.min(n.right - n.left, n.bottom - n.top); e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength; }, updateElement: function (t, e, n) { var i = this, r = i.chart, a = i.getDataset(), o = r.options, s = o.animation, l = r.scale, u = r.data.labels, h = l.xCenter, c = l.yCenter, d = o.startAngle, f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]), g = i._starts[e], p = g + (t.hidden ? 0 : i._angles[e]), m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]), v = t._options || {}; W.extend(t, { _datasetIndex: i.index, _index: e, _scale: l, _model: { backgroundColor: v.backgroundColor, borderColor: v.borderColor, borderWidth: v.borderWidth, borderAlign: v.borderAlign, x: h, y: c, innerRadius: 0, outerRadius: n ? m : f, startAngle: n && s.animateRotate ? d : g, endAngle: n && s.animateRotate ? d : p, label: W.valueAtIndexOrDefault(u, e, u[e]) } }), t.pivot(); }, countVisibleElements: function () { var t = this.getDataset(), e = this.getMeta(), n = 0; return W.each(e.data, (function (e, i) { isNaN(t.data[i]) || e.hidden || n++; })), n; }, setHoverStyle: function (t) { var e = t._model, n = t._options, i = W.getHoverColor, r = W.valueOrDefault; t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = r(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = r(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = r(n.hoverBorderWidth, n.borderWidth); }, _computeAngle: function (t) { var e = this, n = this.getMeta().count, i = e.getDataset(), r = e.getMeta(); return isNaN(i.data[t]) || r.data[t].hidden ? 0 : Bt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], { chart: e.chart, dataIndex: t, dataset: i, datasetIndex: e.index }, t); } });
    R._set("pie", W.clone(R.doughnut)), R._set("pie", { cutoutPercentage: 0 });
    var Vt = Dt, Ht = W.valueOrDefault;
    R._set("radar", { spanGaps: !1, scale: { type: "radialLinear" }, elements: { line: { fill: "start", tension: 0 } } });
    var jt = Q.extend({ datasetElementType: mt.Line, dataElementType: mt.Point, linkScales: W.noop, _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, _getIndexScaleId: function () { return this.chart.scale.id; }, _getValueScaleId: function () { return this.chart.scale.id; }, update: function (t) { var e, n, i = this, r = i.getMeta(), a = r.dataset, o = r.data || [], s = i.chart.scale, l = i._config; for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = s, a._datasetIndex = i.index, a._children = o, a._loop = !0, a._model = i._resolveDatasetElementOptions(a), a.pivot(), e = 0, n = o.length; e < n; ++e)
            i.updateElement(o[e], e, t); for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
            o[e].pivot(); }, updateElement: function (t, e, n) { var i = this, r = t.custom || {}, a = i.getDataset(), o = i.chart.scale, s = o.getPointPositionForValue(e, a.data[e]), l = i._resolveDataElementOptions(t, e), u = i.getMeta().dataset._model, h = n ? o.xCenter : s.x, c = n ? o.yCenter : s.y; t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = { x: h, y: c, skip: r.skip || isNaN(h) || isNaN(c), radius: l.radius, pointStyle: l.pointStyle, rotation: l.rotation, backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, tension: Ht(r.tension, u ? u.tension : 0), hitRadius: l.hitRadius }; }, _resolveDatasetElementOptions: function () { var t = this, e = t._config, n = t.chart.options, i = Q.prototype._resolveDatasetElementOptions.apply(t, arguments); return i.spanGaps = Ht(e.spanGaps, n.spanGaps), i.tension = Ht(e.lineTension, n.elements.line.tension), i; }, updateBezierControlPoints: function () { var t, e, n, i, r = this.getMeta(), a = this.chart.chartArea, o = r.data || []; function s(t, e, n) { return Math.max(Math.min(t, n), e); } for (r.dataset._model.spanGaps && (o = o.filter((function (t) { return !t._model.skip; }))), t = 0, e = o.length; t < e; ++t)
            n = o[t]._model, i = W.splineCurve(W.previousItem(o, t, !0)._model, n, W.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, a.left, a.right), n.controlPointPreviousY = s(i.previous.y, a.top, a.bottom), n.controlPointNextX = s(i.next.x, a.left, a.right), n.controlPointNextY = s(i.next.y, a.top, a.bottom); }, setHoverStyle: function (t) { var e = t._model, n = t._options, i = W.getHoverColor; t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Ht(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ht(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ht(n.hoverBorderWidth, n.borderWidth), e.radius = Ht(n.hoverRadius, n.radius); } });
    R._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, tooltips: { callbacks: { title: function () { return ""; }, label: function (t) { return "(" + t.xLabel + ", " + t.yLabel + ")"; } } } }), R._set("global", { datasets: { scatter: { showLine: !1 } } });
    var qt = { bar: kt, bubble: St, doughnut: Dt, horizontalBar: It, line: Nt, polarArea: Wt, pie: Vt, radar: jt, scatter: Nt };
    function Yt(t, e) { return t.native ? { x: t.x, y: t.y } : W.getRelativePosition(t, e); }
    function Ut(t, e) { var n, i, r, a, o, s, l = t._getSortedVisibleDatasetMetas(); for (i = 0, a = l.length; i < a; ++i)
        for (r = 0, o = (n = l[i].data).length; r < o; ++r)
            (s = n[r])._view.skip || e(s); }
    function Xt(t, e) { var n = []; return Ut(t, (function (t) { t.inRange(e.x, e.y) && n.push(t); })), n; }
    function Gt(t, e, n, i) { var r = Number.POSITIVE_INFINITY, a = []; return Ut(t, (function (t) { if (!n || t.inRange(e.x, e.y)) {
        var o = t.getCenterPoint(), s = i(e, o);
        s < r ? (a = [t], r = s) : s === r && a.push(t);
    } })), a; }
    function $t(t) { var e = -1 !== t.indexOf("x"), n = -1 !== t.indexOf("y"); return function (t, i) { var r = e ? Math.abs(t.x - i.x) : 0, a = n ? Math.abs(t.y - i.y) : 0; return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)); }; }
    function Kt(t, e, n) { var i = Yt(e, t); n.axis = n.axis || "x"; var r = $t(n.axis), a = n.intersect ? Xt(t, i) : Gt(t, i, !1, r), o = []; return a.length ? (t._getSortedVisibleDatasetMetas().forEach((function (t) { var e = t.data[a[0]._index]; e && !e._view.skip && o.push(e); })), o) : []; }
    var Zt = { modes: { single: function (t, e) { var n = Yt(e, t), i = []; return Ut(t, (function (t) { if (t.inRange(n.x, n.y))
                return i.push(t), i; })), i.slice(0, 1); }, label: Kt, index: Kt, dataset: function (t, e, n) { var i = Yt(e, t); n.axis = n.axis || "xy"; var r = $t(n.axis), a = n.intersect ? Xt(t, i) : Gt(t, i, !1, r); return a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data), a; }, "x-axis": function (t, e) { return Kt(t, e, { intersect: !1 }); }, point: function (t, e) { return Xt(t, Yt(e, t)); }, nearest: function (t, e, n) { var i = Yt(e, t); n.axis = n.axis || "xy"; var r = $t(n.axis); return Gt(t, i, n.intersect, r); }, x: function (t, e, n) { var i = Yt(e, t), r = [], a = !1; return Ut(t, (function (t) { t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (a = !0); })), n.intersect && !a && (r = []), r; }, y: function (t, e, n) { var i = Yt(e, t), r = [], a = !1; return Ut(t, (function (t) { t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (a = !0); })), n.intersect && !a && (r = []), r; } } }, Jt = W.extend;
    function Qt(t, e) { return W.where(t, (function (t) { return t.pos === e; })); }
    function te(t, e) { return t.sort((function (t, n) { var i = e ? n : t, r = e ? t : n; return i.weight === r.weight ? i.index - r.index : i.weight - r.weight; })); }
    function ee(t, e, n, i) { return Math.max(t[n], e[n]) + Math.max(t[i], e[i]); }
    function ne(t, e, n) { var i, r, a = n.box, o = t.maxPadding; if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? a.height : a.width, t[n.pos] += n.size, a.getPadding) {
        var s = a.getPadding();
        o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right);
    } if (i = e.outerWidth - ee(o, t, "left", "right"), r = e.outerHeight - ee(o, t, "top", "bottom"), i !== t.w || r !== t.h)
        return t.w = i, t.h = r, n.horizontal ? i !== t.w : r !== t.h; }
    function ie(t, e) { var n, i = e.maxPadding; return n = { left: 0, top: 0, right: 0, bottom: 0 }, (t ? ["left", "right"] : ["top", "bottom"]).forEach((function (t) { n[t] = Math.max(e[t], i[t]); })), n; }
    function re(t, e, n) { var i, r, a, o, s, l, u = []; for (i = 0, r = t.length; i < r; ++i)
        (o = (a = t[i]).box).update(a.width || e.w, a.height || e.h, ie(a.horizontal, e)), ne(e, n, a) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(a); return s && re(u, e, n) || l; }
    function ae(t, e, n) { var i, r, a, o, s = n.padding, l = e.x, u = e.y; for (i = 0, r = t.length; i < r; ++i)
        o = (a = t[i]).box, a.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right); e.x = l, e.y = u; }
    R._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });
    var oe, se = { defaults: {}, addBox: function (t, e) { t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () { return [{ z: 0, draw: function () { e.draw.apply(e, arguments); } }]; }, t.boxes.push(e); }, removeBox: function (t, e) { var n = t.boxes ? t.boxes.indexOf(e) : -1; -1 !== n && t.boxes.splice(n, 1); }, configure: function (t, e, n) { for (var i, r = ["fullWidth", "position", "weight"], a = r.length, o = 0; o < a; ++o)
            n.hasOwnProperty(i = r[o]) && (e[i] = n[i]); }, update: function (t, e, n) { if (t) {
            var i = W.options.toPadding((t.options.layout || {}).padding), r = e - i.width, a = n - i.height, o = function (t) { var e = function (t) { var e, n, i, r = []; for (e = 0, n = (t || []).length; e < n; ++e)
                r.push({ index: e, box: i = t[e], pos: i.position, horizontal: i.isHorizontal(), weight: i.weight }); return r; }(t), n = te(Qt(e, "left"), !0), i = te(Qt(e, "right")), r = te(Qt(e, "top"), !0), a = te(Qt(e, "bottom")); return { leftAndTop: n.concat(r), rightAndBottom: i.concat(a), chartArea: Qt(e, "chartArea"), vertical: n.concat(i), horizontal: r.concat(a) }; }(t.boxes), s = o.vertical, l = o.horizontal, u = Object.freeze({ outerWidth: e, outerHeight: n, padding: i, availableWidth: r, vBoxMaxWidth: r / 2 / s.length, hBoxMaxHeight: a / 2 }), h = Jt({ maxPadding: Jt({}, i), w: r, h: a, x: i.left, y: i.top }, i);
            !function (t, e) { var n, i, r; for (n = 0, i = t.length; n < i; ++n)
                (r = t[n]).width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight; }(s.concat(l), u), re(s, h, u), re(l, h, u) && re(s, h, u), function (t) { var e = t.maxPadding; function n(n) { var i = Math.max(e[n] - t[n], 0); return t[n] += i, i; } t.y += n("top"), t.x += n("left"), n("right"), n("bottom"); }(h), ae(o.leftAndTop, h, u), h.x += h.w, h.y += h.h, ae(o.rightAndBottom, h, u), t.chartArea = { left: h.left, top: h.top, right: h.left + h.w, bottom: h.top + h.h }, W.each(o.chartArea, (function (e) { var n = e.box; Jt(n, t.chartArea), n.update(h.w, h.h); }));
        } } }, le = (oe = Object.freeze({ __proto__: null, default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && oe.default || oe, ue = ["animationstart", "webkitAnimationStart"], he = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };
    function ce(t, e) { var n = W.getStyle(t, e), i = n && n.match(/^(\d+)(\.\d+)?px$/); return i ? Number(i[1]) : void 0; }
    var de = !!function () { var t = !1; try {
        var e = Object.defineProperty({}, "passive", { get: function () { t = !0; } });
        window.addEventListener("e", null, e);
    }
    catch (n) { } return t; }() && { passive: !0 };
    function fe(t, e, n) { t.addEventListener(e, n, de); }
    function ge(t, e, n) { t.removeEventListener(e, n, de); }
    function pe(t, e, n, i, r) { return { type: t, chart: e, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null }; }
    function me(t) { var e = document.createElement("div"); return e.className = t || "", e; }
    var ve = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function (t) { if (!this.disableCSSInjection) {
            var e = t.getRootNode ? t.getRootNode() : document;
            !function (t, e) { var n = t.$chartjs || (t.$chartjs = {}); if (!n.containsStyles) {
                n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                var i = document.createElement("style");
                i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i);
            } }(e.host ? e : document.head, le);
        } }, acquireContext: function (t, e) { "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas); var n = t && t.getContext && t.getContext("2d"); return n && n.canvas === t ? (this._ensureLoaded(t), function (t, e) { var n = t.style, i = t.getAttribute("height"), r = t.getAttribute("width"); if (t.$chartjs = { initial: { height: i, width: r, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === r || "" === r) {
            var a = ce(t, "width");
            void 0 !== a && (t.width = a);
        } if (null === i || "" === i)
            if ("" === t.style.height)
                t.height = t.width / (e.options.aspectRatio || 2);
            else {
                var o = ce(t, "height");
                void 0 !== a && (t.height = o);
            } }(t, e), n) : null; }, releaseContext: function (t) { var e = t.canvas; if (e.$chartjs) {
            var n = e.$chartjs.initial;
            ["height", "width"].forEach((function (t) { var i = n[t]; W.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i); })), W.each(n.style || {}, (function (t, n) { e.style[n] = t; })), e.width = e.width, delete e.$chartjs;
        } }, addEventListener: function (t, e, n) { var i = t.canvas; if ("resize" !== e) {
            var r = n.$chartjs || (n.$chartjs = {});
            fe(i, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) { n(function (t, e) { var n = he[t.type] || t.type, i = W.getRelativePosition(t, e); return pe(n, e, i.x, i.y, t); }(e, t)); });
        }
        else
            !function (t, e, n) { var i, r, a, o, s = t.$chartjs || (t.$chartjs = {}), l = s.resizer = function (t) { var e = me("chartjs-size-monitor"), n = me("chartjs-size-monitor-expand"), i = me("chartjs-size-monitor-shrink"); n.appendChild(me()), i.appendChild(me()), e.appendChild(n), e.appendChild(i), e._reset = function () { n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6; }; var r = function () { e._reset(), t(); }; return fe(n, "scroll", r.bind(n, "expand")), fe(i, "scroll", r.bind(i, "shrink")), e; }((i = function () { if (s.resizer) {
                var i = n.options.maintainAspectRatio && t.parentNode, r = i ? i.clientWidth : 0;
                e(pe("resize", n)), i && i.clientWidth < r && n.canvas && e(pe("resize", n));
            } }, a = !1, o = [], function () { o = Array.prototype.slice.call(arguments), r = r || this, a || (a = !0, W.requestAnimFrame.call(window, (function () { a = !1, i.apply(r, o); }))); })); !function (t, e) { var n = t.$chartjs || (t.$chartjs = {}), i = n.renderProxy = function (t) { "chartjs-render-animation" === t.animationName && e(); }; W.each(ue, (function (e) { fe(t, e, i); })), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor"); }(t, (function () { if (s.resizer) {
                var e = t.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
            } })); }(i, n, t); }, removeEventListener: function (t, e, n) { var i, r, a, o = t.canvas; if ("resize" !== e) {
            var s = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
            s && ge(o, e, s);
        }
        else
            a = (r = (i = o).$chartjs || {}).resizer, delete r.resizer, function (t) { var e = t.$chartjs || {}, n = e.renderProxy; n && (W.each(ue, (function (e) { ge(t, e, n); })), delete e.renderProxy), t.classList.remove("chartjs-render-monitor"); }(i), a && a.parentNode && a.parentNode.removeChild(a); } };
    W.addEvent = fe, W.removeEvent = ge;
    var be = W.extend({ initialize: function () { }, acquireContext: function () { }, releaseContext: function () { }, addEventListener: function () { }, removeEventListener: function () { } }, ve._enabled ? ve : { acquireContext: function (t) { return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null; } });
    R._set("global", { plugins: {} });
    var xe = { _plugins: [], _cacheId: 0, register: function (t) { var e = this._plugins; [].concat(t).forEach((function (t) { -1 === e.indexOf(t) && e.push(t); })), this._cacheId++; }, unregister: function (t) { var e = this._plugins; [].concat(t).forEach((function (t) { var n = e.indexOf(t); -1 !== n && e.splice(n, 1); })), this._cacheId++; }, clear: function () { this._plugins = [], this._cacheId++; }, count: function () { return this._plugins.length; }, getAll: function () { return this._plugins; }, notify: function (t, e, n) { var i, r, a, o, s, l = this.descriptors(t), u = l.length; for (i = 0; i < u; ++i)
            if ("function" == typeof (s = (a = (r = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(r.options), !1 === s.apply(a, o)))
                return !1; return !0; }, descriptors: function (t) { var e = t.$plugins || (t.$plugins = {}); if (e.id === this._cacheId)
            return e.descriptors; var n = [], i = [], r = t && t.config || {}, a = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach((function (t) { if (-1 === n.indexOf(t)) {
            var e = t.id, r = a[e];
            !1 !== r && (!0 === r && (r = W.clone(R.global.plugins[e])), n.push(t), i.push({ plugin: t, options: r || {} }));
        } })), e.descriptors = i, e.id = this._cacheId, i; }, _invalidate: function (t) { delete t.$plugins; } }, ye = { constructors: {}, defaults: {}, registerScaleType: function (t, e, n) { this.constructors[t] = e, this.defaults[t] = W.clone(n); }, getScaleConstructor: function (t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0; }, getScaleDefaults: function (t) { return this.defaults.hasOwnProperty(t) ? W.merge({}, [R.scale, this.defaults[t]]) : {}; }, updateScaleDefaults: function (t, e) { this.defaults.hasOwnProperty(t) && (this.defaults[t] = W.extend(this.defaults[t], e)); }, addScalesToLayout: function (t) { W.each(t.scales, (function (e) { e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, se.addBox(t, e); })); } }, _e = W.valueOrDefault, ke = W.rtl.getRtlAdapter;
    R._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: W.noop, title: function (t, e) { var n = "", i = e.labels, r = i ? i.length : 0; if (t.length > 0) {
                    var a = t[0];
                    a.label ? n = a.label : a.xLabel ? n = a.xLabel : r > 0 && a.index < r && (n = i[a.index]);
                } return n; }, afterTitle: W.noop, beforeBody: W.noop, beforeLabel: W.noop, label: function (t, e) { var n = e.datasets[t.datasetIndex].label || ""; return n && (n += ": "), W.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n; }, labelColor: function (t, e) { var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor }; }, labelTextColor: function () { return this._options.bodyFontColor; }, afterLabel: W.noop, afterBody: W.noop, beforeFooter: W.noop, footer: W.noop, afterFooter: W.noop } } });
    var we = { average: function (t) { if (!t.length)
            return !1; var e, n, i = 0, r = 0, a = 0; for (e = 0, n = t.length; e < n; ++e) {
            var o = t[e];
            if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                i += s.x, r += s.y, ++a;
            }
        } return { x: i / a, y: r / a }; }, nearest: function (t, e) { var n, i, r, a = e.x, o = e.y, s = Number.POSITIVE_INFINITY; for (n = 0, i = t.length; n < i; ++n) {
            var l = t[n];
            if (l && l.hasValue()) {
                var u = l.getCenterPoint(), h = W.distanceBetweenPoints(e, u);
                h < s && (s = h, r = l);
            }
        } if (r) {
            var c = r.tooltipPosition();
            a = c.x, o = c.y;
        } return { x: a, y: o }; } };
    function Me(t, e) { return e && (W.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t; }
    function Se(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t; }
    function Ce(t) { var e = R.global; return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, rtl: t.rtl, textDirection: t.textDirection, bodyFontColor: t.bodyFontColor, _bodyFontFamily: _e(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: _e(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: _e(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: _e(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: _e(t.titleFontStyle, e.defaultFontStyle), titleFontSize: _e(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: _e(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: _e(t.footerFontStyle, e.defaultFontStyle), footerFontSize: _e(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth }; }
    function Te(t, e) { return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding; }
    function Pe(t) { return Me([], Se(t)); }
    var Ae = Y.extend({ initialize: function () { this._model = Ce(this._options), this._lastActive = []; }, getTitle: function () { var t = this, e = t._options, n = e.callbacks, i = n.beforeTitle.apply(t, arguments), r = n.title.apply(t, arguments), a = n.afterTitle.apply(t, arguments), o = []; return o = Me(o, Se(i)), o = Me(o, Se(r)), Me(o, Se(a)); }, getBeforeBody: function () { return Pe(this._options.callbacks.beforeBody.apply(this, arguments)); }, getBody: function (t, e) { var n = this, i = n._options.callbacks, r = []; return W.each(t, (function (t) { var a = { before: [], lines: [], after: [] }; Me(a.before, Se(i.beforeLabel.call(n, t, e))), Me(a.lines, i.label.call(n, t, e)), Me(a.after, Se(i.afterLabel.call(n, t, e))), r.push(a); })), r; }, getAfterBody: function () { return Pe(this._options.callbacks.afterBody.apply(this, arguments)); }, getFooter: function () { var t = this, e = t._options.callbacks, n = e.beforeFooter.apply(t, arguments), i = e.footer.apply(t, arguments), r = e.afterFooter.apply(t, arguments), a = []; return a = Me(a, Se(n)), a = Me(a, Se(i)), Me(a, Se(r)); }, update: function (t) { var e, n, i, r, a, o, s, l, u, h, c = this, d = c._options, f = c._model, g = c._model = Ce(d), p = c._active, m = c._data, v = { xAlign: f.xAlign, yAlign: f.yAlign }, b = { x: f.x, y: f.y }, x = { width: f.width, height: f.height }, y = { x: f.caretX, y: f.caretY }; if (p.length) {
            g.opacity = 1;
            var _ = [], k = [];
            y = we[d.position].call(c, p, c._eventPosition);
            var w = [];
            for (e = 0, n = p.length; e < n; ++e)
                w.push((r = void 0, a = void 0, l = void 0, u = void 0, h = void 0, r = (i = p[e])._xScale, a = i._yScale || i._scale, o = i._index, u = (l = i._chart.getDatasetMeta(s = i._datasetIndex).controller)._getIndexScale(), h = l._getValueScale(), { xLabel: r ? r.getLabelForIndex(o, s) : "", yLabel: a ? a.getLabelForIndex(o, s) : "", label: u ? "" + u.getLabelForIndex(o, s) : "", value: h ? "" + h.getLabelForIndex(o, s) : "", index: o, datasetIndex: s, x: i._model.x, y: i._model.y }));
            d.filter && (w = w.filter((function (t) { return d.filter(t, m); }))), d.itemSort && (w = w.sort((function (t, e) { return d.itemSort(t, e, m); }))), W.each(w, (function (t) { _.push(d.callbacks.labelColor.call(c, t, c._chart)), k.push(d.callbacks.labelTextColor.call(c, t, c._chart)); })), g.title = c.getTitle(w, m), g.beforeBody = c.getBeforeBody(w, m), g.body = c.getBody(w, m), g.afterBody = c.getAfterBody(w, m), g.footer = c.getFooter(w, m), g.x = y.x, g.y = y.y, g.caretPadding = d.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, x = function (t, e) { var n = t._chart.ctx, i = 2 * e.yPadding, r = 0, a = e.body, o = a.reduce((function (t, e) { return t + e.before.length + e.lines.length + e.after.length; }), 0), s = e.title.length, l = e.footer.length, u = e.titleFontSize, h = e.bodyFontSize, c = e.footerFontSize; i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += (o += e.beforeBody.length + e.afterBody.length) * h, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * c, i += l ? (l - 1) * e.footerSpacing : 0; var d = 0, f = function (t) { r = Math.max(r, n.measureText(t).width + d); }; return n.font = W.fontString(u, e._titleFontStyle, e._titleFontFamily), W.each(e.title, f), n.font = W.fontString(h, e._bodyFontStyle, e._bodyFontFamily), W.each(e.beforeBody.concat(e.afterBody), f), d = e.displayColors ? h + 2 : 0, W.each(a, (function (t) { W.each(t.before, f), W.each(t.lines, f), W.each(t.after, f); })), d = 0, n.font = W.fontString(c, e._footerFontStyle, e._footerFontFamily), W.each(e.footer, f), { width: r += 2 * e.xPadding, height: i }; }(this, g), b = function (t, e, n, i) { var r = t.x, a = t.y, o = t.caretPadding, s = n.xAlign, l = n.yAlign, u = t.caretSize + o, h = t.cornerRadius + o; return "right" === s ? r -= e.width : "center" === s && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === l ? a += u : a -= "bottom" === l ? e.height + u : e.height / 2, "center" === l ? "left" === s ? r += u : "right" === s && (r -= u) : "left" === s ? r -= h : "right" === s && (r += h), { x: r, y: a }; }(g, x, v = function (t, e) { var n, i, r, a, o, s = t._model, l = t._chart, u = t._chart.chartArea, h = "center", c = "center"; s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom"); var d = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2; "center" === c ? (n = function (t) { return t <= d; }, i = function (t) { return t > d; }) : (n = function (t) { return t <= e.width / 2; }, i = function (t) { return t >= l.width - e.width / 2; }), r = function (t) { return t + e.width + s.caretSize + s.caretPadding > l.width; }, a = function (t) { return t - e.width - s.caretSize - s.caretPadding < 0; }, o = function (t) { return t <= f ? "top" : "bottom"; }, n(s.x) ? (h = "left", r(s.x) && (h = "center", c = o(s.y))) : i(s.x) && (h = "right", a(s.x) && (h = "center", c = o(s.y))); var g = t._options; return { xAlign: g.xAlign ? g.xAlign : h, yAlign: g.yAlign ? g.yAlign : c }; }(this, x), c._chart);
        }
        else
            g.opacity = 0; return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, c._model = g, t && d.custom && d.custom.call(c, g), c; }, drawCaret: function (t, e) { var n = this._chart.ctx, i = this.getCaretPosition(t, e, this._view); n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3); }, getCaretPosition: function (t, e, n) { var i, r, a, o, s, l, u = n.caretSize, h = n.cornerRadius, c = n.xAlign, d = n.yAlign, f = t.x, g = t.y, p = e.width, m = e.height; if ("center" === d)
            s = g + m / 2, "left" === c ? (r = (i = f) - u, a = i, o = s + u, l = s - u) : (r = (i = f + p) + u, a = i, o = s - u, l = s + u);
        else if ("left" === c ? (i = (r = f + h + u) - u, a = r + u) : "right" === c ? (i = (r = f + p - h - u) - u, a = r + u) : (i = (r = n.caretX) - u, a = r + u), "top" === d)
            s = (o = g) - u, l = o;
        else {
            s = (o = g + m) + u, l = o;
            var v = a;
            a = i, i = v;
        } return { x1: i, x2: r, x3: a, y1: o, y2: s, y3: l }; }, drawTitle: function (t, e, n) { var i, r, a, o = e.title, s = o.length; if (s) {
            var l = ke(e.rtl, e.x, e.width);
            for (t.x = Te(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, r = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = W.fontString(i, e._titleFontStyle, e._titleFontFamily), a = 0; a < s; ++a)
                n.fillText(o[a], l.x(t.x), t.y + i / 2), t.y += i + r, a + 1 === s && (t.y += e.titleMarginBottom - r);
        } }, drawBody: function (t, e, n) { var i, r, a, o, s, l, u, h, c = e.bodyFontSize, d = e.bodySpacing, f = e._bodyAlign, g = e.body, p = e.displayColors, m = 0, v = p ? Te(e, "left") : 0, b = ke(e.rtl, e.x, e.width), x = function (e) { n.fillText(e, b.x(t.x + m), t.y + c / 2), t.y += c + d; }, y = b.textAlign(f); for (n.textAlign = f, n.textBaseline = "middle", n.font = W.fontString(c, e._bodyFontStyle, e._bodyFontFamily), t.x = Te(e, y), n.fillStyle = e.bodyFontColor, W.each(e.beforeBody, x), m = p && "right" !== y ? "center" === f ? c / 2 + 1 : c + 2 : 0, s = 0, u = g.length; s < u; ++s) {
            for (i = g[s], a = e.labelColors[s], n.fillStyle = r = e.labelTextColors[s], W.each(i.before, x), l = 0, h = (o = i.lines).length; l < h; ++l) {
                if (p) {
                    var _ = b.x(v);
                    n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(_, c), t.y, c, c), n.lineWidth = 1, n.strokeStyle = a.borderColor, n.strokeRect(b.leftForLtr(_, c), t.y, c, c), n.fillStyle = a.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(_, 1), c - 2), t.y + 1, c - 2, c - 2), n.fillStyle = r;
                }
                x(o[l]);
            }
            W.each(i.after, x);
        } m = 0, W.each(e.afterBody, x), t.y -= d; }, drawFooter: function (t, e, n) { var i, r, a = e.footer, o = a.length; if (o) {
            var s = ke(e.rtl, e.x, e.width);
            for (t.x = Te(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = W.fontString(i, e._footerFontStyle, e._footerFontFamily), r = 0; r < o; ++r)
                n.fillText(a[r], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing;
        } }, drawBackground: function (t, e, n, i) { n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth; var r = e.xAlign, a = e.yAlign, o = t.x, s = t.y, l = i.width, u = i.height, h = e.cornerRadius; n.beginPath(), n.moveTo(o + h, s), "top" === a && this.drawCaret(t, i), n.lineTo(o + l - h, s), n.quadraticCurveTo(o + l, s, o + l, s + h), "center" === a && "right" === r && this.drawCaret(t, i), n.lineTo(o + l, s + u - h), n.quadraticCurveTo(o + l, s + u, o + l - h, s + u), "bottom" === a && this.drawCaret(t, i), n.lineTo(o + h, s + u), n.quadraticCurveTo(o, s + u, o, s + u - h), "center" === a && "left" === r && this.drawCaret(t, i), n.lineTo(o, s + h), n.quadraticCurveTo(o, s, o + h, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke(); }, draw: function () { var t = this._chart.ctx, e = this._view; if (0 !== e.opacity) {
            var n = { width: e.width, height: e.height }, i = { x: e.x, y: e.y }, r = Math.abs(e.opacity < .001) ? 0 : e.opacity;
            this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (t.save(), t.globalAlpha = r, this.drawBackground(i, e, t, n), i.y += e.yPadding, W.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), W.rtl.restoreTextDirection(t, e.textDirection), t.restore());
        } }, handleEvent: function (t) { var e, n = this, i = n._options; return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !W.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = { x: t.x, y: t.y }, n.update(!0), n.pivot())), e; } });
    Ae.positioners = we;
    var De = W.valueOrDefault;
    function Ie() { return W.merge({}, [].slice.call(arguments), { merger: function (t, e, n, i) { if ("xAxes" === t || "yAxes" === t) {
            var r, a, o, s = n[t].length;
            for (e[t] || (e[t] = []), r = 0; r < s; ++r)
                a = De((o = n[t][r]).type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), W.merge(e[t][r], !e[t][r].type || o.type && o.type !== e[t][r].type ? [ye.getScaleDefaults(a), o] : o);
        }
        else
            W._merger(t, e, n, i); } }); }
    function Fe() { return W.merge({}, [].slice.call(arguments), { merger: function (t, e, n, i) { var r = e[t] || {}, a = n[t]; "scales" === t ? e[t] = Ie(r, a) : "scale" === t ? e[t] = W.merge(r, [ye.getScaleDefaults(a.type), a]) : W._merger(t, e, n, i); } }); }
    function Oe(t) { var e = t.options; W.each(t.scales, (function (e) { se.removeBox(t, e); })), e = Fe(R.global, R[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize(); }
    function Le(t, e, n) { var i, r = function (t) { return t.id === i; }; do {
        i = e + n++;
    } while (W.findIndex(t, r) >= 0); return i; }
    function Re(t) { return "top" === t || "bottom" === t; }
    function Ee(t, e) { return function (n, i) { return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]; }; }
    R._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 });
    var ze = function (t, e) { return this.construct(t, e), this; };
    W.extend(ze.prototype, { construct: function (t, e) { var n = this; e = function (t) { var e = (t = t || {}).data = t.data || {}; return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Fe(R.global, R[t.type], t.options || {}), t; }(e); var i = be.acquireContext(t, e), r = i && i.canvas, a = r && r.height, o = r && r.width; n.id = W.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = o, n.height = a, n.aspectRatio = a ? o / a : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, ze.instances[n.id] = n, Object.defineProperty(n, "data", { get: function () { return n.config.data; }, set: function (t) { n.config.data = t; } }), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item"); }, initialize: function () { var t = this; return xe.notify(t, "beforeInit"), W.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), xe.notify(t, "afterInit"), t; }, clear: function () { return W.canvas.clear(this), this; }, stop: function () { return G.cancelAnimation(this), this; }, resize: function (t) { var e = this, n = e.options, i = e.canvas, r = n.maintainAspectRatio && e.aspectRatio || null, a = Math.max(0, Math.floor(W.getMaximumWidth(i))), o = Math.max(0, Math.floor(r ? a / r : W.getMaximumHeight(i))); if ((e.width !== a || e.height !== o) && (i.width = e.width = a, i.height = e.height = o, i.style.width = a + "px", i.style.height = o + "px", W.retinaScale(e, n.devicePixelRatio), !t)) {
            var s = { width: a, height: o };
            xe.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({ duration: n.responsiveAnimationDuration });
        } }, ensureScalesHaveIDs: function () { var t = this.options, e = t.scales || {}, n = t.scale; W.each(e.xAxes, (function (t, n) { t.id || (t.id = Le(e.xAxes, "x-axis-", n)); })), W.each(e.yAxes, (function (t, n) { t.id || (t.id = Le(e.yAxes, "y-axis-", n)); })), n && (n.id = n.id || "scale"); }, buildOrUpdateScales: function () { var t = this, e = t.options, n = t.scales || {}, i = [], r = Object.keys(n).reduce((function (t, e) { return t[e] = !1, t; }), {}); e.scales && (i = i.concat((e.scales.xAxes || []).map((function (t) { return { options: t, dtype: "category", dposition: "bottom" }; })), (e.scales.yAxes || []).map((function (t) { return { options: t, dtype: "linear", dposition: "left" }; })))), e.scale && i.push({ options: e.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), W.each(i, (function (e) { var i = e.options, a = i.id, o = De(i.type, e.dtype); Re(i.position) !== Re(e.dposition) && (i.position = e.dposition), r[a] = !0; var s = null; if (a in n && n[a].type === o)
            (s = n[a]).options = i, s.ctx = t.ctx, s.chart = t;
        else {
            var l = ye.getScaleConstructor(o);
            if (!l)
                return;
            s = new l({ id: a, type: o, options: i, ctx: t.ctx, chart: t }), n[s.id] = s;
        } s.mergeTicksOptions(), e.isDefault && (t.scale = s); })), W.each(r, (function (t, e) { t || delete n[e]; })), t.scales = n, ye.addScalesToLayout(this); }, buildOrUpdateControllers: function () { var t, e, n = this, i = [], r = n.data.datasets; for (t = 0, e = r.length; t < e; t++) {
            var a = r[t], o = n.getDatasetMeta(t), s = a.type || n.config.type;
            if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = a.order || 0, o.index = t, o.controller)
                o.controller.updateIndex(t), o.controller.linkScales();
            else {
                var l = qt[o.type];
                if (void 0 === l)
                    throw new Error('"' + o.type + '" is not a chart type.');
                o.controller = new l(n, t), i.push(o.controller);
            }
        } return i; }, resetElements: function () { var t = this; W.each(t.data.datasets, (function (e, n) { t.getDatasetMeta(n).controller.reset(); }), t); }, reset: function () { this.resetElements(), this.tooltip.initialize(); }, update: function (t) { var e, n, i = this; if (t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }), Oe(i), xe._invalidate(i), !1 !== xe.notify(i, "beforeUpdate")) {
            i.tooltip._data = i.data;
            var r = i.buildOrUpdateControllers();
            for (e = 0, n = i.data.datasets.length; e < n; e++)
                i.getDatasetMeta(e).controller.buildOrUpdateElements();
            i.updateLayout(), i.options.animation && i.options.animation.duration && W.each(r, (function (t) { t.reset(); })), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], xe.notify(i, "afterUpdate"), i._layers.sort(Ee("z", "_idx")), i._bufferedRender ? i._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : i.render(t);
        } }, updateLayout: function () { var t = this; !1 !== xe.notify(t, "beforeLayout") && (se.update(this, this.width, this.height), t._layers = [], W.each(t.boxes, (function (e) { e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers()); }), t), t._layers.forEach((function (t, e) { t._idx = e; })), xe.notify(t, "afterScaleUpdate"), xe.notify(t, "afterLayout")); }, updateDatasets: function () { if (!1 !== xe.notify(this, "beforeDatasetsUpdate")) {
            for (var t = 0, e = this.data.datasets.length; t < e; ++t)
                this.updateDataset(t);
            xe.notify(this, "afterDatasetsUpdate");
        } }, updateDataset: function (t) { var e = this.getDatasetMeta(t), n = { meta: e, index: t }; !1 !== xe.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), xe.notify(this, "afterDatasetUpdate", [n])); }, render: function (t) { var e = this; t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }); var n = e.options.animation, i = De(t.duration, n && n.duration), r = t.lazy; if (!1 !== xe.notify(e, "beforeRender")) {
            var a = function (t) { xe.notify(e, "afterRender"), W.callback(n && n.onComplete, [t], e); };
            if (n && i) {
                var o = new X({ numSteps: i / 16.66, easing: t.easing || n.easing, render: function (t, e) { var n = e.currentStep, i = n / e.numSteps; t.draw((0, W.easing.effects[e.easing])(i), i, n); }, onAnimationProgress: n.onProgress, onAnimationComplete: a });
                G.addAnimation(e, o, i, r);
            }
            else
                e.draw(), a(new X({ numSteps: 0, chart: e }));
            return e;
        } }, draw: function (t) { var e, n, i = this; if (i.clear(), W.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== xe.notify(i, "beforeDraw", [t])) {
            for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
                n[e].draw(i.chartArea);
            for (i.drawDatasets(t); e < n.length; ++e)
                n[e].draw(i.chartArea);
            i._drawTooltip(t), xe.notify(i, "afterDraw", [t]);
        } }, transition: function (t) { for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
            this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t); this.tooltip.transition(t); }, _getSortedDatasetMetas: function (t) { var e, n, i = []; for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
            t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e)); return i.sort(Ee("order", "index")), i; }, _getSortedVisibleDatasetMetas: function () { return this._getSortedDatasetMetas(!0); }, drawDatasets: function (t) { var e, n; if (!1 !== xe.notify(this, "beforeDatasetsDraw", [t])) {
            for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n)
                this.drawDataset(e[n], t);
            xe.notify(this, "afterDatasetsDraw", [t]);
        } }, drawDataset: function (t, e) { var n = { meta: t, index: t.index, easingValue: e }; !1 !== xe.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), xe.notify(this, "afterDatasetDraw", [n])); }, _drawTooltip: function (t) { var e = this.tooltip, n = { tooltip: e, easingValue: t }; !1 !== xe.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), xe.notify(this, "afterTooltipDraw", [n])); }, getElementAtEvent: function (t) { return Zt.modes.single(this, t); }, getElementsAtEvent: function (t) { return Zt.modes.label(this, t, { intersect: !0 }); }, getElementsAtXAxis: function (t) { return Zt.modes["x-axis"](this, t, { intersect: !0 }); }, getElementsAtEventForMode: function (t, e, n) { var i = Zt.modes[e]; return "function" == typeof i ? i(this, t, n) : []; }, getDatasetAtEvent: function (t) { return Zt.modes.dataset(this, t, { intersect: !0 }); }, getDatasetMeta: function (t) { var e = this.data.datasets[t]; e._meta || (e._meta = {}); var n = e._meta[this.id]; return n || (n = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e.order || 0, index: t }), n; }, getVisibleDatasetCount: function () { for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
            this.isDatasetVisible(e) && t++; return t; }, isDatasetVisible: function (t) { var e = this.getDatasetMeta(t); return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden; }, generateLegend: function () { return this.options.legendCallback(this); }, destroyDatasetMeta: function (t) { var e = this.id, n = this.data.datasets[t], i = n._meta && n._meta[e]; i && (i.controller.destroy(), delete n._meta[e]); }, destroy: function () { var t, e, n = this, i = n.canvas; for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
            n.destroyDatasetMeta(t); i && (n.unbindEvents(), W.canvas.clear(n), be.releaseContext(n.ctx), n.canvas = null, n.ctx = null), xe.notify(n, "destroy"), delete ze.instances[n.id]; }, toBase64Image: function () { return this.canvas.toDataURL.apply(this.canvas, arguments); }, initToolTip: function () { var t = this; t.tooltip = new Ae({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t); }, bindEvents: function () { var t = this, e = t._listeners = {}, n = function () { t.eventHandler.apply(t, arguments); }; W.each(t.options.events, (function (i) { be.addEventListener(t, i, n), e[i] = n; })), t.options.responsive && (n = function () { t.resize(); }, be.addEventListener(t, "resize", n), e.resize = n); }, unbindEvents: function () { var t = this, e = t._listeners; e && (delete t._listeners, W.each(e, (function (e, n) { be.removeEventListener(t, n, e); }))); }, updateHoverStyle: function (t, e, n) { var i, r, a, o = n ? "set" : "remove"; for (r = 0, a = t.length; r < a; ++r)
            (i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i); "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"](); }, eventHandler: function (t) { var e = this, n = e.tooltip; if (!1 !== xe.notify(e, "beforeEvent", [t])) {
            e._bufferedRender = !0, e._bufferedRequest = null;
            var i = e.handleEvent(t);
            n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), xe.notify(e, "afterEvent", [t]);
            var r = e._bufferedRequest;
            return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), e._bufferedRender = !1, e._bufferedRequest = null, e;
        } }, handleEvent: function (t) { var e, n = this, i = n.options || {}, r = i.hover; return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, r.mode, r), W.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !W.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e; } }), ze.instances = {};
    var Ne = ze;
    function Be() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided."); }
    function We(t) { this.options = t || {}; }
    ze.Controller = ze, ze.types = {}, W.configMerge = Fe, W.scaleMerge = Ie, W.extend(We.prototype, { formats: Be, parse: Be, format: Be, add: Be, diff: Be, startOf: Be, endOf: Be, _create: function (t) { return t; } }), We.override = function (t) { W.extend(We.prototype, t); };
    var Ve = { _date: We }, He = { formatters: { values: function (t) { return W.isArray(t) ? t : "" + t; }, linear: function (t, e, n) { var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0]; Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t)); var r = W.log10(Math.abs(i)), a = ""; if (0 !== t)
                if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                    var o = W.log10(Math.abs(t)), s = Math.floor(o) - Math.floor(r);
                    s = Math.max(Math.min(s, 20), 0), a = t.toExponential(s);
                }
                else {
                    var l = -1 * Math.floor(r);
                    l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l);
                }
            else
                a = "0"; return a; }, logarithmic: function (t, e, n) { var i = t / Math.pow(10, Math.floor(W.log10(t))); return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""; } } }, je = W.isArray, qe = W.isNullOrUndef, Ye = W.valueOrDefault, Ue = W.valueAtIndexOrDefault;
    function Xe(t, e, n) { var i, r = t.getTicks().length, a = Math.min(e, r - 1), o = t.getPixelForTick(a), s = t._startPixel, l = t._endPixel; if (!(n && (i = 1 === r ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(a - 1)) / 2, (o += a < e ? i : -i) < s - 1e-6 || o > l + 1e-6)))
        return o; }
    function Ge(t) { return t.drawTicks ? t.tickMarkLength : 0; }
    function $e(t) { var e, n; return t.display ? (e = W.options._parseFont(t), n = W.options.toPadding(t.padding), e.lineHeight + n.height) : 0; }
    function Ke(t, e) { return W.extend(W.options._parseFont({ fontFamily: Ye(e.fontFamily, t.fontFamily), fontSize: Ye(e.fontSize, t.fontSize), fontStyle: Ye(e.fontStyle, t.fontStyle), lineHeight: Ye(e.lineHeight, t.lineHeight) }), { color: W.options.resolve([e.fontColor, t.fontColor, R.global.defaultFontColor]) }); }
    function Ze(t) { var e = Ke(t, t.minor); return { minor: e, major: t.major.enabled ? Ke(t, t.major) : e }; }
    function Je(t) { var e, n, i, r = []; for (n = 0, i = t.length; n < i; ++n)
        void 0 !== (e = t[n])._index && r.push(e); return r; }
    function Qe(t, e, n, i) { var r, a, o, s, l = Ye(n, 0), u = Math.min(Ye(i, t.length), t.length), h = 0; for (e = Math.ceil(e), i && (e = (r = i - n) / Math.floor(r / e)), s = l; s < 0;)
        h++, s = Math.round(l + h * e); for (a = Math.max(l, 0); a < u; a++)
        o = t[a], a === s ? (o._index = a, h++, s = Math.round(l + h * e)) : delete o.label; }
    R._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: He.formatters.values, minor: {}, major: {} } });
    var tn = Y.extend({ zeroLineIndex: 0, getPadding: function () { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 }; }, getTicks: function () { return this._ticks; }, _getLabels: function () { var t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []; }, mergeTicksOptions: function () { }, beforeUpdate: function () { W.callback(this.options.beforeUpdate, [this]); }, update: function (t, e, n) { var i, r, a, o, s, l = this, u = l.options.ticks, h = u.sampleSize; if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = W.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
            for (o = [], i = 0, r = l.ticks.length; i < r; ++i)
                o.push({ value: l.ticks[i], major: !1 }); return l._ticks = o, a = l._convertTicksToLabels((s = h < o.length) ? function (t, e) { for (var n = [], i = t.length / e, r = 0, a = t.length; r < a; r += i)
            n.push(t[Math.floor(r)]); return n; }(o, h) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (a = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = a, l.afterUpdate(), l.minSize; }, _configure: function () { var t, e, n = this, i = n.options.ticks.reverse; n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t; }, afterUpdate: function () { W.callback(this.options.afterUpdate, [this]); }, beforeSetDimensions: function () { W.callback(this.options.beforeSetDimensions, [this]); }, setDimensions: function () { var t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0; }, afterSetDimensions: function () { W.callback(this.options.afterSetDimensions, [this]); }, beforeDataLimits: function () { W.callback(this.options.beforeDataLimits, [this]); }, determineDataLimits: W.noop, afterDataLimits: function () { W.callback(this.options.afterDataLimits, [this]); }, beforeBuildTicks: function () { W.callback(this.options.beforeBuildTicks, [this]); }, buildTicks: W.noop, afterBuildTicks: function (t) { var e = this; return je(t) && t.length ? W.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = W.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t); }, beforeTickToLabelConversion: function () { W.callback(this.options.beforeTickToLabelConversion, [this]); }, convertTicksToLabels: function () { var t = this.options.ticks; this.ticks = this.ticks.map(t.userCallback || t.callback, this); }, afterTickToLabelConversion: function () { W.callback(this.options.afterTickToLabelConversion, [this]); }, beforeCalculateTickRotation: function () { W.callback(this.options.beforeCalculateTickRotation, [this]); }, calculateTickRotation: function () { var t, e, n, i, r, a, o, s = this, l = s.options, u = l.ticks, h = s.getTicks().length, c = u.minRotation || 0, d = u.maxRotation, f = c; !s._isVisible() || !u.display || c >= d || h <= 1 || !s.isHorizontal() ? s.labelRotation = c : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (r = l.offset ? s.maxWidth / h : i / (h - 1)) && (r = i / (h - (l.offset ? .5 : 1)), a = s.maxHeight - Ge(l.gridLines) - u.padding - $e(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = W.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))), f = Math.max(c, Math.min(d, f))), s.labelRotation = f); }, afterCalculateTickRotation: function () { W.callback(this.options.afterCalculateTickRotation, [this]); }, beforeFit: function () { W.callback(this.options.beforeFit, [this]); }, fit: function () { var t = this, e = t.minSize = { width: 0, height: 0 }, n = t.chart, i = t.options, r = i.ticks, a = i.scaleLabel, o = i.gridLines, s = t._isVisible(), l = "bottom" === i.position, u = t.isHorizontal(); if (u ? e.width = t.maxWidth : s && (e.width = Ge(o) + $e(a)), u ? s && (e.height = Ge(o) + $e(a)) : e.height = t.maxHeight, r.display && s) {
            var h = Ze(r), c = t._getLabelSizes(), d = c.first, f = c.last, g = c.widest, p = c.highest, m = .4 * h.minor.lineHeight, v = r.padding;
            if (u) {
                var b = 0 !== t.labelRotation, x = W.toRadians(t.labelRotation), y = Math.cos(x), _ = Math.sin(x);
                e.height = Math.min(t.maxHeight, e.height + (_ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m)) + v);
                var k, w, M = t.getPixelForTick(0) - t.left, S = t.right - t.getPixelForTick(t.getTicks().length - 1);
                b ? (k = l ? y * d.width + _ * d.offset : _ * (d.height - d.offset), w = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (k = d.width / 2, w = f.width / 2), t.paddingLeft = Math.max((k - M) * t.width / (t.width - M), 0) + 3, t.paddingRight = Math.max((w - S) * t.width / (t.width - S), 0) + 3;
            }
            else
                e.width = Math.min(t.maxWidth, e.width + (r.mirror ? 0 : g.width + v + m)), t.paddingTop = d.height / 2, t.paddingBottom = f.height / 2;
        } t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom); }, handleMargins: function () { var t = this; t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)); }, afterFit: function () { W.callback(this.options.afterFit, [this]); }, isHorizontal: function () { var t = this.options.position; return "top" === t || "bottom" === t; }, isFullWidth: function () { return this.options.fullWidth; }, getRightValue: function (t) { if (qe(t))
            return NaN; if (("number" == typeof t || t instanceof Number) && !isFinite(t))
            return NaN; if (t)
            if (this.isHorizontal()) {
                if (void 0 !== t.x)
                    return this.getRightValue(t.x);
            }
            else if (void 0 !== t.y)
                return this.getRightValue(t.y); return t; }, _convertTicksToLabels: function (t) { var e, n, i, r = this; for (r.ticks = t.map((function (t) { return t.value; })), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n)
            t[n].label = e[n]; return e; }, _getLabelSizes: function () { var t = this, e = t._labelSizes; return e || (t._labelSizes = e = function (t, e, n, i) { var r, a, o, s, l, u, h, c, d, f, g, p, m, v = n.length, b = [], x = [], y = []; for (r = 0; r < v; ++r) {
            if (s = n[r].label, t.font = u = (l = n[r].major ? e.major : e.minor).string, h = i[u] = i[u] || { data: {}, gc: [] }, c = l.lineHeight, d = f = 0, qe(s) || je(s)) {
                if (je(s))
                    for (a = 0, o = s.length; a < o; ++a)
                        qe(g = s[a]) || je(g) || (d = W.measureText(t, h.data, h.gc, d, g), f += c);
            }
            else
                d = W.measureText(t, h.data, h.gc, d, s), f = c;
            b.push(d), x.push(f), y.push(c / 2);
        } function _(t) { return { width: b[t] || 0, height: x[t] || 0, offset: y[t] || 0 }; } return function (t, e) { W.each(t, (function (t) { var n, i = t.gc, r = i.length / 2; if (r > e) {
            for (n = 0; n < r; ++n)
                delete t.data[i[n]];
            i.splice(0, r);
        } })); }(i, v), p = b.indexOf(Math.max.apply(null, b)), m = x.indexOf(Math.max.apply(null, x)), { first: _(0), last: _(v - 1), widest: _(p), highest: _(m) }; }(t.ctx, Ze(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e; }, _parseValue: function (t) { var e, n, i, r; return je(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), r = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, r = t), { min: i, max: r, start: e, end: n }; }, _getScaleLabel: function (t) { var e = this._parseValue(t); return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t); }, getLabelForIndex: W.noop, getPixelForValue: W.noop, getValueForPixel: W.noop, getPixelForTick: function (t) { var e = this.options.offset, n = this._ticks.length, i = 1 / Math.max(n - (e ? 0 : 1), 1); return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0)); }, getPixelForDecimal: function (t) { return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length; }, getDecimalForPixel: function (t) { var e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e; }, getBasePixel: function () { return this.getPixelForValue(this.getBaseValue()); }, getBaseValue: function () { var t = this.min, e = this.max; return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0; }, _autoSkip: function (t) { var e, n, i, r, a = this.options.ticks, o = a.maxTicksLimit || this._length / this._tickSize() + 1, s = a.major.enabled ? function (t) { var e, n, i = []; for (e = 0, n = t.length; e < n; e++)
            t[e].major && i.push(e); return i; }(t) : [], l = s.length, u = s[0], h = s[l - 1]; if (l > o)
            return function (t, e, n) { var i, r, a = 0, o = e[0]; for (n = Math.ceil(n), i = 0; i < t.length; i++)
                r = t[i], i === o ? (r._index = i, o = e[++a * n]) : delete r.label; }(t, s, l / o), Je(t); if (i = function (t, e, n, i) { var r, a, o, s, l = function (t) { var e, n, i = t.length; if (i < 2)
            return !1; for (n = t[0], e = 1; e < i; ++e)
            if (t[e] - t[e - 1] !== n)
                return !1; return n; }(t), u = (e.length - 1) / i; if (!l)
            return Math.max(u, 1); for (o = 0, s = (r = W.math._factorize(l)).length - 1; o < s; o++)
            if ((a = r[o]) > u)
                return a; return Math.max(u, 1); }(s, t, 0, o), l > 0) {
            for (e = 0, n = l - 1; e < n; e++)
                Qe(t, i, s[e], s[e + 1]);
            return Qe(t, i, W.isNullOrUndef(r = l > 1 ? (h - u) / (l - 1) : null) ? 0 : u - r, u), Qe(t, i, h, W.isNullOrUndef(r) ? t.length : h + r), Je(t);
        } return Qe(t, i), Je(t); }, _tickSize: function () { var t = this.options.ticks, e = W.toRadians(this.labelRotation), n = Math.abs(Math.cos(e)), i = Math.abs(Math.sin(e)), r = this._getLabelSizes(), a = t.autoSkipPadding || 0, o = r ? r.widest.width + a : 0, s = r ? r.highest.height + a : 0; return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i; }, _isVisible: function () { var t, e, n, i = this.chart, r = this.options.display; if ("auto" !== r)
            return !!r; for (t = 0, e = i.data.datasets.length; t < e; ++t)
            if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id))
                return !0; return !1; }, _computeGridLineItems: function (t) { var e, n, i, r, a, o, s, l, u, h, c, d, f, g, p, m, v, b = this, x = b.chart, y = b.options, _ = y.gridLines, k = y.position, w = _.offsetGridLines, M = b.isHorizontal(), S = b._ticksToDraw, C = S.length + (w ? 1 : 0), T = Ge(_), P = [], A = _.drawBorder ? Ue(_.lineWidth, 0, 0) : 0, D = A / 2, I = W._alignPixel, F = function (t) { return I(x, t, A); }; for ("top" === k ? (e = F(b.bottom), s = b.bottom - T, u = e - D, c = F(t.top) + D, f = t.bottom) : "bottom" === k ? (e = F(b.top), c = t.top, f = F(t.bottom) - D, s = e + D, u = b.top + T) : "left" === k ? (e = F(b.right), o = b.right - T, l = e - D, h = F(t.left) + D, d = t.right) : (e = F(b.left), h = t.left, d = F(t.right) - D, o = e + D, l = b.left + T), n = 0; n < C; ++n)
            qe((i = S[n] || {}).label) && n < S.length || (n === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = Ue(_.lineWidth, n, 1), p = Ue(_.color, n, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (r = Xe(b, i._index || n, w)) && (a = I(x, r, g), M ? o = l = h = d = a : s = u = c = f = a, P.push({ tx1: o, ty1: s, tx2: l, ty2: u, x1: h, y1: c, x2: d, y2: f, width: g, color: p, borderDash: m, borderDashOffset: v }))); return P.ticksLength = C, P.borderValue = e, P; }, _computeLabelItems: function () { var t, e, n, i, r, a, o, s, l, u, h, c, d = this, f = d.options, g = f.ticks, p = f.position, m = g.mirror, v = d.isHorizontal(), b = d._ticksToDraw, x = Ze(g), y = g.padding, _ = Ge(f.gridLines), k = -W.toRadians(d.labelRotation), w = []; for ("top" === p ? (a = d.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (a = d.top + _ + y, o = k ? "right" : "center") : "left" === p ? (r = d.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (r = d.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t)
            qe(i = (n = b[t]).label) || (s = d.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? x.major : x.minor).lineHeight, h = je(i) ? i.length : 1, v ? (r = s, c = "top" === p ? ((k ? 1 : .5) - h) * u : (k ? 0 : .5) * u) : (a = s, c = (1 - h) * u / 2), w.push({ x: r, y: a, rotation: k, label: i, font: l, textOffset: c, textAlign: o })); return w; }, _drawGrid: function (t) { var e = this, n = e.options.gridLines; if (n.display) {
            var i, r, a, o, s, l = e.ctx, u = e.chart, h = W._alignPixel, c = n.drawBorder ? Ue(n.lineWidth, 0, 0) : 0, d = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
            for (a = 0, o = d.length; a < o; ++a)
                r = (s = d[a]).color, (i = s.width) && r && (l.save(), l.lineWidth = i, l.strokeStyle = r, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
            if (c) {
                var f, g, p, m, v = c, b = Ue(n.lineWidth, d.ticksLength - 1, 1), x = d.borderValue;
                e.isHorizontal() ? (f = h(u, e.left, v) - v / 2, g = h(u, e.right, b) + b / 2, p = m = x) : (p = h(u, e.top, v) - v / 2, m = h(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = c, l.strokeStyle = Ue(n.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke();
            }
        } }, _drawLabels: function () { var t = this; if (t.options.ticks.display) {
            var e, n, i, r, a, o, s, l, u = t.ctx, h = t._labelItems || (t._labelItems = t._computeLabelItems());
            for (e = 0, i = h.length; e < i; ++e) {
                if (o = (a = h[e]).font, u.save(), u.translate(a.x, a.y), u.rotate(a.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = a.textAlign, l = a.textOffset, je(s = a.label))
                    for (n = 0, r = s.length; n < r; ++n)
                        u.fillText("" + s[n], 0, l), l += o.lineHeight;
                else
                    u.fillText(s, 0, l);
                u.restore();
            }
        } }, _drawTitle: function () { var t = this, e = t.ctx, n = t.options, i = n.scaleLabel; if (i.display) {
            var r, a, o = Ye(i.fontColor, R.global.defaultFontColor), s = W.options._parseFont(i), l = W.options.toPadding(i.padding), u = s.lineHeight / 2, h = n.position, c = 0;
            if (t.isHorizontal())
                r = t.left + t.width / 2, a = "bottom" === h ? t.bottom - u - l.bottom : t.top + u + l.top;
            else {
                var d = "left" === h;
                r = d ? t.left + u + l.top : t.right - u - l.top, a = t.top + t.height / 2, c = d ? -.5 * Math.PI : .5 * Math.PI;
            }
            e.save(), e.translate(r, a), e.rotate(c), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore();
        } }, draw: function (t) { this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels()); }, _layers: function () { var t = this, e = t.options, n = e.ticks && e.ticks.z || 0, i = e.gridLines && e.gridLines.z || 0; return t._isVisible() && n !== i && t.draw === t._draw ? [{ z: i, draw: function () { t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments); } }, { z: n, draw: function () { t._drawLabels.apply(t, arguments); } }] : [{ z: n, draw: function () { t.draw.apply(t, arguments); } }]; }, _getMatchingVisibleMetas: function (t) { var e = this, n = e.isHorizontal(); return e.chart._getSortedVisibleDatasetMetas().filter((function (i) { return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id); })); } });
    tn.prototype._draw = tn.prototype.draw;
    var en = tn, nn = W.isNullOrUndef, rn = en.extend({ determineDataLimits: function () { var t, e = this, n = e._getLabels(), i = e.options.ticks, r = i.min, a = i.max, o = 0, s = n.length - 1; void 0 !== r && (t = n.indexOf(r)) >= 0 && (o = t), void 0 !== a && (t = n.indexOf(a)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s]; }, buildTicks: function () { var t = this._getLabels(), e = this.minIndex, n = this.maxIndex; this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1); }, getLabelForIndex: function (t, e) { var n = this.chart; return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]; }, _configure: function () { var t = this, e = t.options.offset, n = t.ticks; en.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)); }, getPixelForValue: function (t, e, n) { var i, r, a, o = this; return nn(e) || nn(n) || (t = o.chart.data.datasets[n].data[e]), nn(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (r = o._getLabels(), t = W.valueOrDefault(i, t), e = -1 !== (a = r.indexOf(t)) ? a : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange); }, getPixelForTick: function (t) { var e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex); }, getValueForPixel: function (t) { var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange); return Math.min(Math.max(e, 0), this.ticks.length - 1); }, getBasePixel: function () { return this.bottom; } });
    rn._defaults = { position: "bottom" };
    var an = W.isNullOrUndef, on = en.extend({ getRightValue: function (t) { return "string" == typeof t ? +t : en.prototype.getRightValue.call(this, t); }, handleTickRangeOptions: function () { var t = this, e = t.options.ticks; if (e.beginAtZero) {
            var n = W.sign(t.min), i = W.sign(t.max);
            n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0);
        } var r = void 0 !== e.min || void 0 !== e.suggestedMin, a = void 0 !== e.max || void 0 !== e.suggestedMax; void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), r !== a && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--); }, getTickLimit: function () { var t, e = this.options.ticks, n = e.stepSize, i = e.maxTicksLimit; return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t; }, _computeTickLimit: function () { return Number.POSITIVE_INFINITY; }, handleDirectionalChanges: W.noop, buildTicks: function () { var t = this, e = t.options.ticks, n = t.getTickLimit(), i = { maxTicks: n = Math.max(2, n), min: e.min, max: e.max, precision: e.precision, stepSize: W.valueOrDefault(e.fixedStepSize, e.stepSize) }, r = t.ticks = function (t, e) { var n, i, r, a, o = [], s = t.stepSize, l = s || 1, u = t.maxTicks - 1, h = t.min, c = t.max, d = t.precision, f = e.min, g = e.max, p = W.niceNum((g - f) / u / l) * l; if (p < 1e-14 && an(h) && an(c))
            return [f, g]; (a = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = W.niceNum(a * p / u / l) * l), s || an(d) ? n = Math.pow(10, W._decimalPlaces(p)) : (n = Math.pow(10, d), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, r = Math.ceil(g / p) * p, s && (!an(h) && W.almostWhole(h / p, p / 1e3) && (i = h), !an(c) && W.almostWhole(c / p, p / 1e3) && (r = c)), a = W.almostEquals(a = (r - i) / p, Math.round(a), p / 1e3) ? Math.round(a) : Math.ceil(a), i = Math.round(i * n) / n, r = Math.round(r * n) / n, o.push(an(h) ? i : h); for (var m = 1; m < a; ++m)
            o.push(Math.round((i + m * p) * n) / n); return o.push(an(c) ? r : c), o; }(i, t); t.handleDirectionalChanges(), t.max = W.max(r), t.min = W.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max); }, convertTicksToLabels: function () { var t = this; t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), en.prototype.convertTicksToLabels.call(t); }, _configure: function () { var t, e = this, n = e.getTicks(), i = e.min, r = e.max; en.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (r - i) / Math.max(n.length - 1, 1) / 2, r += t), e._startValue = i, e._endValue = r, e._valueRange = r - i; } }), sn = { position: "left", ticks: { callback: He.formatters.linear } };
    function ln(t, e, n, i) { var r, a, o = t.options, s = function (t, e, n) { var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join("."); return void 0 === t[i] && (t[i] = { pos: [], neg: [] }), t[i]; }(e, o.stacked, n), l = s.pos, u = s.neg, h = i.length; for (r = 0; r < h; ++r)
        a = t._parseValue(i[r]), isNaN(a.min) || isNaN(a.max) || n.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, o.relativePoints ? l[r] = 100 : a.min < 0 || a.max < 0 ? u[r] += a.min : l[r] += a.max); }
    function un(t, e, n) { var i, r, a = n.length; for (i = 0; i < a; ++i)
        r = t._parseValue(n[i]), isNaN(r.min) || isNaN(r.max) || e.data[i].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max)); }
    var hn = on.extend({ determineDataLimits: function () { var t, e, n, i, r = this, a = r.options, o = r.chart.data.datasets, s = r._getMatchingVisibleMetas(), l = a.stacked, u = {}, h = s.length; if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l)
            for (t = 0; !l && t < h; ++t)
                l = void 0 !== (e = s[t]).stack; for (t = 0; t < h; ++t)
            n = o[(e = s[t]).index].data, l ? ln(r, u, e, n) : un(r, e, n); W.each(u, (function (t) { i = t.pos.concat(t.neg), r.min = Math.min(r.min, W.min(i)), r.max = Math.max(r.max, W.max(i)); })), r.min = W.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = W.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions(); }, _computeTickLimit: function () { var t; return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = W.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight)); }, handleDirectionalChanges: function () { this.isHorizontal() || this.ticks.reverse(); }, getLabelForIndex: function (t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]); }, getPixelForValue: function (t) { return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange); }, getValueForPixel: function (t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange; }, getPixelForTick: function (t) { var e = this.ticksAsNumbers; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]); } });
    hn._defaults = sn;
    var cn = W.valueOrDefault, dn = W.math.log10, fn = { position: "left", ticks: { callback: He.formatters.logarithmic } };
    function gn(t, e) { return W.isFinite(t) && t >= 0 ? t : e; }
    var pn = en.extend({ determineDataLimits: function () { var t, e, n, i, r, a, o = this, s = o.options, l = o.chart, u = l.data.datasets, h = o.isHorizontal(); function c(t) { return h ? t.xAxisID === o.id : t.yAxisID === o.id; } o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY; var d = s.stacked; if (void 0 === d)
            for (t = 0; t < u.length; t++)
                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && c(e) && void 0 !== e.stack) {
                    d = !0;
                    break;
                } if (s.stacked || d) {
            var f = {};
            for (t = 0; t < u.length; t++) {
                var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                if (l.isDatasetVisible(t) && c(e))
                    for (void 0 === f[g] && (f[g] = []), r = 0, a = (i = u[t].data).length; r < a; r++) {
                        var p = f[g];
                        n = o._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (p[r] = p[r] || 0, p[r] += n.max);
                    }
            }
            W.each(f, (function (t) { if (t.length > 0) {
                var e = W.min(t), n = W.max(t);
                o.min = Math.min(o.min, e), o.max = Math.max(o.max, n);
            } }));
        }
        else
            for (t = 0; t < u.length; t++)
                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && c(e))
                    for (r = 0, a = (i = u[t].data).length; r < a; r++)
                        n = o._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero))); o.min = W.isFinite(o.min) ? o.min : null, o.max = W.isFinite(o.max) ? o.max : null, o.minNotZero = W.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions(); }, handleTickRangeOptions: function () { var t = this, e = t.options.ticks; t.min = gn(e.min, t.min), t.max = gn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(dn(t.min)) - 1), t.max = Math.pow(10, Math.floor(dn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(dn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(dn(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(dn(t.max))) : 1); }, buildTicks: function () { var t = this, e = t.options.ticks, n = !t.isHorizontal(), i = { min: gn(e.min), max: gn(e.max) }, r = t.ticks = function (t, e) { var n, i, r = [], a = cn(t.min, Math.pow(10, Math.floor(dn(e.min)))), o = Math.floor(dn(e.max)), s = Math.ceil(e.max / Math.pow(10, o)); 0 === a ? (n = Math.floor(dn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(a), a = i * Math.pow(10, n)) : (n = Math.floor(dn(a)), i = Math.floor(a / Math.pow(10, n))); var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1; do {
            r.push(a), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), a = Math.round(i * Math.pow(10, n) * l) / l;
        } while (n < o || n === o && i < s); var u = cn(t.max, a); return r.push(u), r; }(i, t); t.max = W.max(r), t.min = W.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse(); }, convertTicksToLabels: function () { this.tickValues = this.ticks.slice(), en.prototype.convertTicksToLabels.call(this); }, getLabelForIndex: function (t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]); }, getPixelForTick: function (t) { var e = this.tickValues; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]); }, _getFirstTickValue: function (t) { var e = Math.floor(dn(t)); return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e); }, _configure: function () { var t = this, e = t.min, n = 0; en.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = cn(t.options.ticks.fontSize, R.global.defaultFontSize) / t._length), t._startValue = dn(e), t._valueOffset = n, t._valueRange = (dn(t.max) - dn(e)) / (1 - n); }, getPixelForValue: function (t) { var e = this, n = 0; return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (dn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n); }, getValueForPixel: function (t) { var e = this, n = e.getDecimalForPixel(t); return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange); } });
    pn._defaults = fn;
    var mn = W.valueOrDefault, vn = W.valueAtIndexOrDefault, bn = W.options.resolve, xn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: He.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function (t) { return t; } } };
    function yn(t) { var e = t.ticks; return e.display && t.display ? mn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY : 0; }
    function _n(t, e, n, i, r) { return t === i || t === r ? { start: e - n / 2, end: e + n / 2 } : t < i || t > r ? { start: e - n, end: e } : { start: e, end: e + n }; }
    function kn(t) { return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"; }
    function wn(t, e, n, i) { var r, a, o = n.y + i / 2; if (W.isArray(e))
        for (r = 0, a = e.length; r < a; ++r)
            t.fillText(e[r], n.x, o), o += i;
    else
        t.fillText(e, n.x, o); }
    function Mn(t, e, n) { 90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h); }
    function Sn(t) { return W.isNumber(t) ? t : 0; }
    var Cn = on.extend({ setDimensions: function () { var t = this; t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = yn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2; }, determineDataLimits: function () { var t = this, e = t.chart, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY; W.each(e.data.datasets, (function (r, a) { if (e.isDatasetVisible(a)) {
            var o = e.getDatasetMeta(a);
            W.each(r.data, (function (e, r) { var a = +t.getRightValue(e); isNaN(a) || o.data[r].hidden || (n = Math.min(a, n), i = Math.max(a, i)); }));
        } })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions(); }, _computeTickLimit: function () { return Math.ceil(this.drawingArea / yn(this.options)); }, convertTicksToLabels: function () { var t = this; on.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function () { var e = W.callback(t.options.pointLabels.callback, arguments, t); return e || 0 === e ? e : ""; })); }, getLabelForIndex: function (t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]); }, fit: function () { var t = this.options; t.display && t.pointLabels.display ? function (t) { var e, n, i, r = W.options._parseFont(t.options.pointLabels), a = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop }, o = {}; t.ctx.font = r.string, t._pointLabelSizes = []; var s, l, u, h = t.chart.data.labels.length; for (e = 0; e < h; e++) {
            i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = r.lineHeight, n = W.isArray(u = t.pointLabels[e]) ? { w: W.longestText(s, s.font, u), h: u.length * l } : { w: s.measureText(u).width, h: l }, t._pointLabelSizes[e] = n;
            var c = t.getIndexAngle(e), d = W.toDegrees(c) % 360, f = _n(d, i.x, n.w, 0, 180), g = _n(d, i.y, n.h, 90, 270);
            f.start < a.l && (a.l = f.start, o.l = c), f.end > a.r && (a.r = f.end, o.r = c), g.start < a.t && (a.t = g.start, o.t = c), g.end > a.b && (a.b = g.end, o.b = c);
        } t.setReductions(t.drawingArea, a, o); }(this) : this.setCenterPoint(0, 0, 0, 0); }, setReductions: function (t, e, n) { var i = this, r = e.l / Math.sin(n.l), a = Math.max(e.r - i.width, 0) / Math.sin(n.r), o = -e.t / Math.cos(n.t), s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b); r = Sn(r), a = Sn(a), o = Sn(o), s = Sn(s), i.drawingArea = Math.min(Math.floor(t - (r + a) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(r, a, o, s); }, setCenterPoint: function (t, e, n, i) { var r = this, a = n + r.drawingArea, o = r.height - r.paddingTop - i - r.drawingArea; r.xCenter = Math.floor((t + r.drawingArea + (r.width - e - r.drawingArea)) / 2 + r.left), r.yCenter = Math.floor((a + o) / 2 + r.top + r.paddingTop); }, getIndexAngle: function (t) { var e = this.chart, n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360; return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360; }, getDistanceFromCenterForValue: function (t) { var e = this; if (W.isNullOrUndef(t))
            return NaN; var n = e.drawingArea / (e.max - e.min); return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n; }, getPointPosition: function (t, e) { var n = this.getIndexAngle(t) - Math.PI / 2; return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter }; }, getPointPositionForValue: function (t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)); }, getBasePosition: function (t) { var e = this.min, n = this.max; return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0); }, _drawGrid: function () { var t, e, n, i = this, r = i.ctx, a = i.options, o = a.gridLines, s = a.angleLines, l = mn(s.lineWidth, o.lineWidth), u = mn(s.color, o.color); if (a.pointLabels.display && function (t) { var e = t.ctx, n = t.options, i = n.pointLabels, r = yn(n), a = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), o = W.options._parseFont(i); e.save(), e.font = o.string, e.textBaseline = "middle"; for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
            var l = t.getPointPosition(s, a + (0 === s ? r / 2 : 0) + 5), u = vn(i.fontColor, s, R.global.defaultFontColor);
            e.fillStyle = u;
            var h = t.getIndexAngle(s), c = W.toDegrees(h);
            e.textAlign = kn(c), Mn(c, t._pointLabelSizes[s], l), wn(e, t.pointLabels[s], l, o.lineHeight);
        } e.restore(); }(i), o.display && W.each(i.ticks, (function (t, n) { 0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function (t, e, n, i) { var r, a = t.ctx, o = e.circular, s = t.chart.data.labels.length, l = vn(e.color, i - 1), u = vn(e.lineWidth, i - 1); if ((o || s) && l && u) {
            if (a.save(), a.strokeStyle = l, a.lineWidth = u, a.setLineDash && (a.setLineDash(e.borderDash || []), a.lineDashOffset = e.borderDashOffset || 0), a.beginPath(), o)
                a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
            else {
                r = t.getPointPosition(0, n), a.moveTo(r.x, r.y);
                for (var h = 1; h < s; h++)
                    r = t.getPointPosition(h, n), a.lineTo(r.x, r.y);
            }
            a.closePath(), a.stroke(), a.restore();
        } }(i, o, e, n)); })), s.display && l && u) {
            for (r.save(), r.lineWidth = l, r.strokeStyle = u, r.setLineDash && (r.setLineDash(bn([s.borderDash, o.borderDash, []])), r.lineDashOffset = bn([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--)
                e = i.getDistanceFromCenterForValue(a.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), r.beginPath(), r.moveTo(i.xCenter, i.yCenter), r.lineTo(n.x, n.y), r.stroke();
            r.restore();
        } }, _drawLabels: function () { var t = this, e = t.ctx, n = t.options.ticks; if (n.display) {
            var i, r, a = t.getIndexAngle(0), o = W.options._parseFont(n), s = mn(n.fontColor, R.global.defaultFontColor);
            e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(a), e.textAlign = "center", e.textBaseline = "middle", W.each(t.ticks, (function (a, l) { (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (r = e.measureText(a).width, e.fillStyle = n.backdropColor, e.fillRect(-r / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, r + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(a, 0, -i)); })), e.restore();
        } }, _drawTitle: W.noop });
    Cn._defaults = xn;
    var Tn = W._deprecated, Pn = W.options.resolve, An = W.valueOrDefault, Dn = Number.MIN_SAFE_INTEGER || -9007199254740991, In = Number.MAX_SAFE_INTEGER || 9007199254740991, Fn = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } }, On = Object.keys(Fn);
    function Ln(t, e) { return t - e; }
    function Rn(t) { return W.valueOrDefault(t.time.min, t.ticks.min); }
    function En(t) { return W.valueOrDefault(t.time.max, t.ticks.max); }
    function zn(t, e, n, i) { var r = function (t, e, n) { for (var i, r, a, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
        if (a = t[i = o + s >> 1], !(r = t[i - 1] || null))
            return { lo: null, hi: a };
        if (a[e] < n)
            o = i + 1;
        else {
            if (!(r[e] > n))
                return { lo: r, hi: a };
            s = i - 1;
        }
    } return { lo: a, hi: null }; }(t, e, n), a = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0], o = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1], s = o[e] - a[e]; return a[i] + (o[i] - a[i]) * (s ? (n - a[e]) / s : 0); }
    function Nn(t, e) { var n = t._adapter, i = t.options.time, r = i.parser, a = r || i.format, o = e; return "function" == typeof r && (o = r(o)), W.isFinite(o) || (o = "string" == typeof a ? n.parse(o, a) : n.parse(o)), null !== o ? +o : (r || "function" != typeof a || (o = a(e), W.isFinite(o) || (o = n.parse(o))), o); }
    function Bn(t, e) { if (W.isNullOrUndef(e))
        return null; var n = t.options.time, i = Nn(t, t.getRightValue(e)); return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i); }
    function Wn(t, e, n, i) { var r, a, o = On.length; for (r = On.indexOf(t); r < o - 1; ++r)
        if ((a = Fn[On[r]]).common && Math.ceil((n - e) / ((a.steps ? a.steps : In) * a.size)) <= i)
            return On[r]; return On[o - 1]; }
    function Vn(t, e, n) { var i, r, a = [], o = {}, s = e.length; for (i = 0; i < s; ++i)
        o[r = e[i]] = i, a.push({ value: r, major: !1 }); return 0 !== s && n ? function (t, e, n, i) { var r, a, o = t._adapter, s = +o.startOf(e[0].value, i), l = e[e.length - 1].value; for (r = s; r <= l; r = +o.add(r, 1, i))
        (a = n[r]) >= 0 && (e[a].major = !0); return e; }(t, a, o, n) : a; }
    var Hn = en.extend({ initialize: function () { this.mergeTicksOptions(), en.prototype.initialize.call(this); }, update: function () { var t = this, e = t.options, n = e.time || (e.time = {}), i = t._adapter = new Ve._date(e.adapters.date); return Tn("time scale", n.format, "time.format", "time.parser"), Tn("time scale", n.min, "time.min", "ticks.min"), Tn("time scale", n.max, "time.max", "ticks.max"), W.mergeIf(n.displayFormats, i.formats()), en.prototype.update.apply(t, arguments); }, getRightValue: function (t) { return t && void 0 !== t.t && (t = t.t), en.prototype.getRightValue.call(this, t); }, determineDataLimits: function () { var t, e, n, i, r, a, o, s = this, l = s.chart, u = s._adapter, h = s.options, c = h.time.unit || "day", d = In, f = Dn, g = [], p = [], m = [], v = s._getLabels(); for (t = 0, n = v.length; t < n; ++t)
            m.push(Bn(s, v[t])); for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
            if (l.isDatasetVisible(t))
                if (W.isObject((r = l.data.datasets[t].data)[0]))
                    for (p[t] = [], e = 0, i = r.length; e < i; ++e)
                        a = Bn(s, r[e]), g.push(a), p[t][e] = a;
                else
                    p[t] = m.slice(0), o || (g = g.concat(m), o = !0);
            else
                p[t] = []; m.length && (d = Math.min(d, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = n > 1 ? function (t) { var e, n, i, r = {}, a = []; for (e = 0, n = t.length; e < n; ++e)
            r[i = t[e]] || (r[i] = !0, a.push(i)); return a; }(g).sort(Ln) : g.sort(Ln), d = Math.min(d, g[0]), f = Math.max(f, g[g.length - 1])), d = Bn(s, Rn(h)) || d, f = Bn(s, En(h)) || f, d = d === In ? +u.startOf(Date.now(), c) : d, f = f === Dn ? +u.endOf(Date.now(), c) + 1 : f, s.min = Math.min(d, f), s.max = Math.max(d + 1, f), s._table = [], s._timestamps = { data: g, datasets: p, labels: m }; }, buildTicks: function () { var t, e, n, i = this, r = i.min, a = i.max, o = i.options, s = o.ticks, l = o.time, u = i._timestamps, h = [], c = i.getLabelCapacity(r), d = s.source, f = o.distribution; for (u = "data" === d || "auto" === d && "series" === f ? u.data : "labels" === d ? u.labels : function (t, e, n, i) { var r, a = t._adapter, o = t.options, s = o.time, l = s.unit || Wn(s.minUnit, e, n, i), u = Pn([s.stepSize, s.unitStepSize, 1]), h = "week" === l && s.isoWeekday, c = e, d = []; if (h && (c = +a.startOf(c, "isoWeek", h)), c = +a.startOf(c, h ? "day" : l), a.diff(n, e, l) > 1e5 * u)
            throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l; for (r = c; r < n; r = +a.add(r, u, l))
            d.push(r); return r !== n && "ticks" !== o.bounds || d.push(r), d; }(i, r, a, c), "ticks" === o.bounds && u.length && (r = u[0], a = u[u.length - 1]), r = Bn(i, Rn(o)) || r, a = Bn(i, En(o)) || a, t = 0, e = u.length; t < e; ++t)
            (n = u[t]) >= r && n <= a && h.push(n); return i.min = r, i.max = a, i._unit = l.unit || (s.autoSkip ? Wn(l.minUnit, i.min, i.max, c) : function (t, e, n, i, r) { var a, o; for (a = On.length - 1; a >= On.indexOf(n); a--)
            if (Fn[o = On[a]].common && t._adapter.diff(r, i, o) >= e - 1)
                return o; return On[n ? On.indexOf(n) : 0]; }(i, h.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function (t) { for (var e = On.indexOf(t) + 1, n = On.length; e < n; ++e)
            if (Fn[On[e]].common)
                return On[e]; }(i._unit) : void 0, i._table = function (t, e, n, i) { if ("linear" === i || !t.length)
            return [{ time: e, pos: 0 }, { time: n, pos: 1 }]; var r, a, o, s, l, u = [], h = [e]; for (r = 0, a = t.length; r < a; ++r)
            (s = t[r]) > e && s < n && h.push(s); for (h.push(n), r = 0, a = h.length; r < a; ++r)
            l = h[r + 1], s = h[r], void 0 !== (o = h[r - 1]) && void 0 !== l && Math.round((l + o) / 2) === s || u.push({ time: s, pos: r / (a - 1) }); return u; }(i._timestamps.data, r, a, f), i._offsets = function (t, e, n, i, r) { var a, o, s = 0, l = 0; return r.offset && e.length && (a = zn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - a : (zn(t, "time", e[1], "pos") - a) / 2, o = zn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - zn(t, "time", e[e.length - 2], "pos")) / 2), { start: s, end: l, factor: 1 / (s + 1 + l) }; }(i._table, h, 0, 0, o), s.reverse && h.reverse(), Vn(i, h, i._majorUnit); }, getLabelForIndex: function (t, e) { var n = this, i = n._adapter, r = n.chart.data, a = n.options.time, o = r.labels && t < r.labels.length ? r.labels[t] : "", s = r.datasets[e].data[t]; return W.isObject(s) && (o = n.getRightValue(s)), a.tooltipFormat ? i.format(Nn(n, o), a.tooltipFormat) : "string" == typeof o ? o : i.format(Nn(n, o), a.displayFormats.datetime); }, tickFormatFunction: function (t, e, n, i) { var r = this.options, a = r.time.displayFormats, o = this._majorUnit, s = a[o], l = n[e], u = r.ticks, h = o && s && l && l.major, c = this._adapter.format(t, i || (h ? s : a[this._unit])), d = h ? u.major : u.minor, f = Pn([d.callback, d.userCallback, u.callback, u.userCallback]); return f ? f(c, e, n) : c; }, convertTicksToLabels: function (t) { var e, n, i = []; for (e = 0, n = t.length; e < n; ++e)
            i.push(this.tickFormatFunction(t[e].value, e, t)); return i; }, getPixelForOffset: function (t) { var e = this._offsets, n = zn(this._table, "time", t, "pos"); return this.getPixelForDecimal((e.start + n) * e.factor); }, getPixelForValue: function (t, e, n) { var i = null; if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = Bn(this, t)), null !== i)
            return this.getPixelForOffset(i); }, getPixelForTick: function (t) { var e = this.getTicks(); return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null; }, getValueForPixel: function (t) { var e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end, i = zn(this._table, "pos", n, "time"); return this._adapter._create(i); }, _getLabelSize: function (t) { var e = this.options.ticks, n = this.ctx.measureText(t).width, i = W.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation), r = Math.cos(i), a = Math.sin(i), o = An(e.fontSize, R.global.defaultFontSize); return { w: n * r + o * a, h: n * a + o * r }; }, getLabelWidth: function (t) { return this._getLabelSize(t).w; }, getLabelCapacity: function (t) { var e = this, n = e.options.time, i = n.displayFormats, r = i[n.unit] || i.millisecond, a = e.tickFormatFunction(t, 0, Vn(e, [t], e._majorUnit), r), o = e._getLabelSize(a), s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h); return e.options.offset && s--, s > 0 ? s : 1; } });
    Hn._defaults = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
    var jn = { category: rn, linear: hn, logarithmic: pn, radialLinear: Cn, time: Hn }, qn = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
    Ve._date.override("function" == typeof t ? { _id: "moment", formats: function () { return qn; }, parse: function (e, n) { return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null; }, format: function (e, n) { return t(e).format(n); }, add: function (e, n, i) { return t(e).add(n, i).valueOf(); }, diff: function (e, n, i) { return t(e).diff(t(n), i); }, startOf: function (e, n, i) { return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf(); }, endOf: function (e, n) { return t(e).endOf(n).valueOf(); }, _create: function (e) { return t(e); } } : {}), R._set("global", { plugins: { filler: { propagate: !0 } } });
    var Yn = { dataset: function (t) { var e = t.fill, n = t.chart, i = n.getDatasetMeta(e), r = i && n.isDatasetVisible(e) && i.dataset._children || [], a = r.length || 0; return a ? function (t, e) { return e < a && r[e]._view || null; } : null; }, boundary: function (t) { var e = t.boundary, n = e ? e.x : null, i = e ? e.y : null; return W.isArray(e) ? function (t, n) { return e[n]; } : function (t) { return { x: null === n ? t.x : n, y: null === i ? t.y : i }; }; } };
    function Un(t, e, n) { var i, r = t._model || {}, a = r.fill; if (void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a)
        return !1; if (!0 === a)
        return "origin"; if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i)
        return "-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i; switch (a) {
        case "bottom": return "start";
        case "top": return "end";
        case "zero": return "origin";
        case "origin":
        case "start":
        case "end": return a;
        default: return !1;
    } }
    function Xn(t) { return (t.el._scale || {}).getPointPositionForValue ? function (t) { var e, n, i, r, a, o = t.el._scale, s = o.options, l = o.chart.data.labels.length, u = t.fill, h = []; if (!l)
        return null; for (n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e = s.ticks.reverse ? o.max : o.min), r = 0; r < l; ++r)
        a = "start" === u || "end" === u ? o.getPointPositionForValue(r, "start" === u ? e : n) : o.getBasePosition(r), s.gridLines.circular && (a.cx = i.x, a.cy = i.y, a.angle = o.getIndexAngle(r) - Math.PI / 2), h.push(a); return h; }(t) : function (t) { var e, n = t.el._model || {}, i = t.el._scale || {}, r = t.fill, a = null; if (isFinite(r))
        return null; if ("start" === r ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePixel && (a = i.getBasePixel()), null != a) {
        if (void 0 !== a.x && void 0 !== a.y)
            return a;
        if (W.isFinite(a))
            return { x: (e = i.isHorizontal()) ? a : null, y: e ? null : a };
    } return null; }(t); }
    function Gn(t, e, n) { var i, r = t[e].fill, a = [e]; if (!n)
        return r; for (; !1 !== r && -1 === a.indexOf(r);) {
        if (!isFinite(r))
            return r;
        if (!(i = t[r]))
            return !1;
        if (i.visible)
            return r;
        a.push(r), r = i.fill;
    } return !1; }
    function $n(t) { var e = t.fill, n = "dataset"; return !1 === e ? null : (isFinite(e) || (n = "boundary"), Yn[n](t)); }
    function Kn(t) { return t && !t.skip; }
    function Zn(t, e, n, i, r) { var a, o, s, l; if (i && r) {
        for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a)
            W.canvas.lineTo(t, e[a - 1], e[a]);
        if (void 0 === n[0].angle)
            for (t.lineTo(n[r - 1].x, n[r - 1].y), a = r - 1; a > 0; --a)
                W.canvas.lineTo(t, n[a], n[a - 1], !0);
        else
            for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), a = r - 1; a > 0; --a)
                t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0);
    } }
    function Jn(t, e, n, i, r, a) { var o, s, l, u, h, c, d, f, g = e.length, p = i.spanGaps, m = [], v = [], b = 0, x = 0; for (t.beginPath(), o = 0, s = g; o < s; ++o)
        h = n(u = e[l = o % g]._view, l, i), c = Kn(u), d = Kn(h), a && void 0 === f && c && (s = g + (f = o + 1)), c && d ? (b = m.push(u), x = v.push(h)) : b && x && (p ? (c && m.push(u), d && v.push(h)) : (Zn(t, m, v, b, x), b = x = 0, m = [], v = [])); Zn(t, m, v, b, x), t.closePath(), t.fillStyle = r, t.fill(); }
    var Qn = { id: "filler", afterDatasetsUpdate: function (t, e) { var n, i, r, a, o = (t.data.datasets || []).length, s = e.propagate, l = []; for (i = 0; i < o; ++i)
            a = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof mt.Line && (a = { visible: t.isDatasetVisible(i), fill: Un(r, i, o), chart: t, el: r }), n.$filler = a, l.push(a); for (i = 0; i < o; ++i)
            (a = l[i]) && (a.fill = Gn(l, i, s), a.boundary = Xn(a), a.mapper = $n(a)); }, beforeDatasetsDraw: function (t) { var e, n, i, r, a, o, s, l = t._getSortedVisibleDatasetMetas(), u = t.ctx; for (n = l.length - 1; n >= 0; --n)
            (e = l[n].$filler) && e.visible && (a = (i = e.el)._children || [], s = (r = i._view).backgroundColor || R.global.defaultColor, (o = e.mapper) && s && a.length && (W.canvas.clipArea(u, t.chartArea), Jn(u, a, o, r, s, i._loop), W.canvas.unclipArea(u))); } }, ti = W.rtl.getRtlAdapter, ei = W.noop, ni = W.valueOrDefault;
    function ii(t, e) { return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth; }
    R._set("global", { legend: { display: !0, position: "top", align: "center", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function (t, e) { var n = e.datasetIndex, i = this.chart, r = i.getDatasetMeta(n); r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update(); }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function (t) { var e = t.data.datasets, n = t.options.legend || {}, i = n.labels && n.labels.usePointStyle; return t._getSortedDatasetMetas().map((function (n) { var r = n.controller.getStyle(i ? 0 : void 0); return { text: e[n.index].label, fillStyle: r.backgroundColor, hidden: !t.isDatasetVisible(n.index), lineCap: r.borderCapStyle, lineDash: r.borderDash, lineDashOffset: r.borderDashOffset, lineJoin: r.borderJoinStyle, lineWidth: r.borderWidth, strokeStyle: r.borderColor, pointStyle: r.pointStyle, rotation: r.rotation, datasetIndex: n.index }; }), this); } } }, legendCallback: function (t) { var e, n, i, r = document.createElement("ul"), a = t.data.datasets; for (r.setAttribute("class", t.id + "-legend"), e = 0, n = a.length; e < n; e++)
            (i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[e].backgroundColor, a[e].label && i.appendChild(document.createTextNode(a[e].label)); return r.outerHTML; } });
    var ri = Y.extend({ initialize: function (t) { W.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1; }, beforeUpdate: ei, update: function (t, e, n) { var i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize; }, afterUpdate: ei, beforeSetDimensions: ei, setDimensions: function () { var t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 }; }, afterSetDimensions: ei, beforeBuildLabels: ei, buildLabels: function () { var t = this, e = t.options.labels || {}, n = W.callback(e.generateLabels, [t.chart], t) || []; e.filter && (n = n.filter((function (n) { return e.filter(n, t.chart.data); }))), t.options.reverse && n.reverse(), t.legendItems = n; }, afterBuildLabels: ei, beforeFit: ei, fit: function () { var t = this, e = t.options, n = e.labels, i = e.display, r = t.ctx, a = W.options._parseFont(n), o = a.size, s = t.legendHitBoxes = [], l = t.minSize, u = t.isHorizontal(); if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
            if (r.font = a.string, u) {
                var h = t.lineWidths = [0], c = 0;
                r.textAlign = "left", r.textBaseline = "middle", W.each(t.legendItems, (function (t, e) { var i = ii(n, o) + o / 2 + r.measureText(t.text).width; (0 === e || h[h.length - 1] + i + 2 * n.padding > l.width) && (c += o + n.padding, h[h.length - (e > 0 ? 0 : 1)] = 0), s[e] = { left: 0, top: 0, width: i, height: o }, h[h.length - 1] += i + n.padding; })), l.height += c;
            }
            else {
                var d = n.padding, f = t.columnWidths = [], g = t.columnHeights = [], p = n.padding, m = 0, v = 0;
                W.each(t.legendItems, (function (t, e) { var i = ii(n, o) + o / 2 + r.measureText(t.text).width; e > 0 && v + o + 2 * d > l.height && (p += m + n.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, i), v += o + d, s[e] = { left: 0, top: 0, width: i, height: o }; })), p += m, f.push(m), g.push(v), l.width += p;
            }
            t.width = l.width, t.height = l.height;
        }
        else
            t.width = l.width = t.height = l.height = 0; }, afterFit: ei, isHorizontal: function () { return "top" === this.options.position || "bottom" === this.options.position; }, draw: function () { var t = this, e = t.options, n = e.labels, i = R.global, r = i.defaultColor, a = i.elements.line, o = t.height, s = t.columnHeights, l = t.width, u = t.lineWidths; if (e.display) {
            var h, c = ti(e.rtl, t.left, t.minSize.width), d = t.ctx, f = ni(n.fontColor, i.defaultFontColor), g = W.options._parseFont(n), p = g.size;
            d.textAlign = c.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = g.string;
            var m = ii(n, p), v = t.legendHitBoxes, b = function (t, i) { switch (e.align) {
                case "start": return n.padding;
                case "end": return t - i;
                default: return (t - i + n.padding) / 2;
            } }, x = t.isHorizontal();
            h = x ? { x: t.left + b(l, u[0]), y: t.top + n.padding, line: 0 } : { x: t.left + n.padding, y: t.top + b(o, s[0]), line: 0 }, W.rtl.overrideTextDirection(t.ctx, e.textDirection);
            var y = p + n.padding;
            W.each(t.legendItems, (function (e, i) { var f = d.measureText(e.text).width, g = m + p / 2 + f, _ = h.x, k = h.y; c.setWidth(t.minSize.width), x ? i > 0 && _ + g + n.padding > t.left + t.minSize.width && (k = h.y += y, h.line++, _ = h.x = t.left + b(l, u[h.line])) : i > 0 && k + y > t.top + t.minSize.height && (_ = h.x = _ + t.columnWidths[h.line] + n.padding, h.line++, k = h.y = t.top + b(o, s[h.line])); var w = c.x(_); !function (t, e, i) { if (!(isNaN(m) || m <= 0)) {
                d.save();
                var o = ni(i.lineWidth, a.borderWidth);
                if (d.fillStyle = ni(i.fillStyle, r), d.lineCap = ni(i.lineCap, a.borderCapStyle), d.lineDashOffset = ni(i.lineDashOffset, a.borderDashOffset), d.lineJoin = ni(i.lineJoin, a.borderJoinStyle), d.lineWidth = o, d.strokeStyle = ni(i.strokeStyle, r), d.setLineDash && d.setLineDash(ni(i.lineDash, a.borderDash)), n && n.usePointStyle) {
                    var s = m * Math.SQRT2 / 2, l = c.xPlus(t, m / 2);
                    W.canvas.drawPoint(d, i.pointStyle, s, l, e + p / 2, i.rotation);
                }
                else
                    d.fillRect(c.leftForLtr(t, m), e, m, p), 0 !== o && d.strokeRect(c.leftForLtr(t, m), e, m, p);
                d.restore();
            } }(w, k, e), v[i].left = c.leftForLtr(w, v[i].width), v[i].top = k, function (t, e, n, i) { var r = p / 2, a = c.xPlus(t, m + r), o = e + r; d.fillText(n.text, a, o), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(a, o), d.lineTo(c.xPlus(a, i), o), d.stroke()); }(w, k, e, f), x ? h.x += g + n.padding : h.y += y; })), W.rtl.restoreTextDirection(t.ctx, e.textDirection);
        } }, _getLegendItemAt: function (t, e) { var n, i, r, a = this; if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
            for (r = a.legendHitBoxes, n = 0; n < r.length; ++n)
                if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height)
                    return a.legendItems[n]; return null; }, handleEvent: function (t) { var e, n = this, i = n.options, r = "mouseup" === t.type ? "click" : t.type; if ("mousemove" === r) {
            if (!i.onHover && !i.onLeave)
                return;
        }
        else {
            if ("click" !== r)
                return;
            if (!i.onClick)
                return;
        } e = n._getLegendItemAt(t.x, t.y), "click" === r ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e)); } });
    function ai(t, e) { var n = new ri({ ctx: t.ctx, options: e, chart: t }); se.configure(t, n, e), se.addBox(t, n), t.legend = n; }
    var oi = { id: "legend", _element: ri, beforeInit: function (t) { var e = t.options.legend; e && ai(t, e); }, beforeUpdate: function (t) { var e = t.options.legend, n = t.legend; e ? (W.mergeIf(e, R.global.legend), n ? (se.configure(t, n, e), n.options = e) : ai(t, e)) : n && (se.removeBox(t, n), delete t.legend); }, afterEvent: function (t, e) { var n = t.legend; n && n.handleEvent(e); } }, si = W.noop;
    R._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } });
    var li = Y.extend({ initialize: function (t) { W.extend(this, t), this.legendHitBoxes = []; }, beforeUpdate: si, update: function (t, e, n) { var i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize; }, afterUpdate: si, beforeSetDimensions: si, setDimensions: function () { var t = this; t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 }; }, afterSetDimensions: si, beforeBuildLabels: si, buildLabels: si, afterBuildLabels: si, beforeFit: si, fit: function () { var t, e = this, n = e.options, i = e.minSize = {}, r = e.isHorizontal(); n.display ? (t = (W.isArray(n.text) ? n.text.length : 1) * W.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = r ? e.maxWidth : t, e.height = i.height = r ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0; }, afterFit: si, isHorizontal: function () { var t = this.options.position; return "top" === t || "bottom" === t; }, draw: function () { var t = this, e = t.ctx, n = t.options; if (n.display) {
            var i, r, a, o = W.options._parseFont(n), s = o.lineHeight, l = s / 2 + n.padding, u = 0, h = t.top, c = t.left, d = t.bottom, f = t.right;
            e.fillStyle = W.valueOrDefault(n.fontColor, R.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (r = c + (f - c) / 2, a = h + l, i = f - c) : (r = "left" === n.position ? c + l : f - l, a = h + (d - h) / 2, i = d - h, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, a), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
            var g = n.text;
            if (W.isArray(g))
                for (var p = 0, m = 0; m < g.length; ++m)
                    e.fillText(g[m], 0, p, i), p += s;
            else
                e.fillText(g, 0, 0, i);
            e.restore();
        } } });
    function ui(t, e) { var n = new li({ ctx: t.ctx, options: e, chart: t }); se.configure(t, n, e), se.addBox(t, n), t.titleBlock = n; }
    var hi = {}, ci = Qn, di = oi, fi = { id: "title", _element: li, beforeInit: function (t) { var e = t.options.title; e && ui(t, e); }, beforeUpdate: function (t) { var e = t.options.title, n = t.titleBlock; e ? (W.mergeIf(e, R.global.title), n ? (se.configure(t, n, e), n.options = e) : ui(t, e)) : n && (se.removeBox(t, n), delete t.titleBlock); } };
    for (var gi in hi.filler = ci, hi.legend = di, hi.title = fi, Ne.helpers = W, function () { function t(t, e, n) { var i; return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i; } function e(t) { return null != t && "none" !== t; } function n(n, i, r) { var a = document.defaultView, o = W._getParentNode(n), s = a.getComputedStyle(n)[i], l = a.getComputedStyle(o)[i], u = e(s), h = e(l), c = Number.POSITIVE_INFINITY; return u || h ? Math.min(u ? t(s, n, r) : c, h ? t(l, o, r) : c) : "none"; } W.where = function (t, e) { if (W.isArray(t) && Array.prototype.filter)
        return t.filter(e); var n = []; return W.each(t, (function (t) { e(t) && n.push(t); })), n; }, W.findIndex = Array.prototype.findIndex ? function (t, e, n) { return t.findIndex(e, n); } : function (t, e, n) { n = void 0 === n ? t : n; for (var i = 0, r = t.length; i < r; ++i)
        if (e.call(n, t[i], i, t))
            return i; return -1; }, W.findNextWhere = function (t, e, n) { W.isNullOrUndef(n) && (n = -1); for (var i = n + 1; i < t.length; i++) {
        var r = t[i];
        if (e(r))
            return r;
    } }, W.findPreviousWhere = function (t, e, n) { W.isNullOrUndef(n) && (n = t.length); for (var i = n - 1; i >= 0; i--) {
        var r = t[i];
        if (e(r))
            return r;
    } }, W.isNumber = function (t) { return !isNaN(parseFloat(t)) && isFinite(t); }, W.almostEquals = function (t, e, n) { return Math.abs(t - e) < n; }, W.almostWhole = function (t, e) { var n = Math.round(t); return n - e <= t && n + e >= t; }, W.max = function (t) { return t.reduce((function (t, e) { return isNaN(e) ? t : Math.max(t, e); }), Number.NEGATIVE_INFINITY); }, W.min = function (t) { return t.reduce((function (t, e) { return isNaN(e) ? t : Math.min(t, e); }), Number.POSITIVE_INFINITY); }, W.sign = Math.sign ? function (t) { return Math.sign(t); } : function (t) { return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1; }, W.toRadians = function (t) { return t * (Math.PI / 180); }, W.toDegrees = function (t) { return t * (180 / Math.PI); }, W._decimalPlaces = function (t) { if (W.isFinite(t)) {
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;)
            e *= 10, n++;
        return n;
    } }, W.getAngleFromPoint = function (t, e) { var n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i), a = Math.atan2(i, n); return a < -.5 * Math.PI && (a += 2 * Math.PI), { angle: a, distance: r }; }, W.distanceBetweenPoints = function (t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)); }, W.aliasPixel = function (t) { return t % 2 == 0 ? 0 : .5; }, W._alignPixel = function (t, e, n) { var i = t.currentDevicePixelRatio, r = n / 2; return Math.round((e - r) * i) / i + r; }, W.splineCurve = function (t, e, n, i) { var r = t.skip ? e : t, a = e, o = n.skip ? e : n, s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)), l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)), u = s / (s + l), h = l / (s + l), c = i * (u = isNaN(u) ? 0 : u), d = i * (h = isNaN(h) ? 0 : h); return { previous: { x: a.x - c * (o.x - r.x), y: a.y - c * (o.y - r.y) }, next: { x: a.x + d * (o.x - r.x), y: a.y + d * (o.y - r.y) } }; }, W.EPSILON = Number.EPSILON || 1e-14, W.splineCurveMonotone = function (t) { var e, n, i, r, a, o, s, l, u, h = (t || []).map((function (t) { return { model: t._model, deltaK: 0, mK: 0 }; })), c = h.length; for (e = 0; e < c; ++e)
        if (!(i = h[e]).model.skip) {
            if (n = e > 0 ? h[e - 1] : null, (r = e < c - 1 ? h[e + 1] : null) && !r.model.skip) {
                var d = r.model.x - i.model.x;
                i.deltaK = 0 !== d ? (r.model.y - i.model.y) / d : 0;
            }
            i.mK = !n || n.model.skip ? i.deltaK : !r || r.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? 0 : (n.deltaK + i.deltaK) / 2;
        } for (e = 0; e < c - 1; ++e)
        r = h[e + 1], (i = h[e]).model.skip || r.model.skip || (W.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (a = i.mK / i.deltaK, o = r.mK / i.deltaK, (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = a * s * i.deltaK, r.mK = o * s * i.deltaK))); for (e = 0; e < c; ++e)
        (i = h[e]).model.skip || (r = e < c - 1 ? h[e + 1] : null, (n = e > 0 ? h[e - 1] : null) && !n.model.skip && (i.model.controlPointPreviousX = i.model.x - (u = (i.model.x - n.model.x) / 3), i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (i.model.controlPointNextX = i.model.x + (u = (r.model.x - i.model.x) / 3), i.model.controlPointNextY = i.model.y + u * i.mK)); }, W.nextItem = function (t, e, n) { return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]; }, W.previousItem = function (t, e, n) { return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]; }, W.niceNum = function (t, e) { var n = Math.floor(W.log10(t)), i = t / Math.pow(10, n); return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n); }, W.requestAnimFrame = "undefined" == typeof window ? function (t) { t(); } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) { return window.setTimeout(t, 1e3 / 60); }, W.getRelativePosition = function (t, e) { var n, i, r = t.originalEvent || t, a = t.target || t.srcElement, o = a.getBoundingClientRect(), s = r.touches; s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY); var l = parseFloat(W.getStyle(a, "padding-left")), u = parseFloat(W.getStyle(a, "padding-top")), h = parseFloat(W.getStyle(a, "padding-right")), c = parseFloat(W.getStyle(a, "padding-bottom")), d = o.bottom - o.top - u - c; return { x: n = Math.round((n - o.left - l) / (o.right - o.left - l - h) * a.width / e.currentDevicePixelRatio), y: i = Math.round((i - o.top - u) / d * a.height / e.currentDevicePixelRatio) }; }, W.getConstraintWidth = function (t) { return n(t, "max-width", "clientWidth"); }, W.getConstraintHeight = function (t) { return n(t, "max-height", "clientHeight"); }, W._calculatePadding = function (t, e, n) { return (e = W.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10); }, W._getParentNode = function (t) { var e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e; }, W.getMaximumWidth = function (t) { var e = W._getParentNode(t); if (!e)
        return t.clientWidth; var n = e.clientWidth, i = n - W._calculatePadding(e, "padding-left", n) - W._calculatePadding(e, "padding-right", n), r = W.getConstraintWidth(t); return isNaN(r) ? i : Math.min(i, r); }, W.getMaximumHeight = function (t) { var e = W._getParentNode(t); if (!e)
        return t.clientHeight; var n = e.clientHeight, i = n - W._calculatePadding(e, "padding-top", n) - W._calculatePadding(e, "padding-bottom", n), r = W.getConstraintHeight(t); return isNaN(r) ? i : Math.min(i, r); }, W.getStyle = function (t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e); }, W.retinaScale = function (t, e) { var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) {
        var i = t.canvas, r = t.height, a = t.width;
        i.height = r * n, i.width = a * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = a + "px");
    } }, W.fontString = function (t, e, n) { return e + " " + t + "px " + n; }, W.longestText = function (t, e, n, i) { var r = (i = i || {}).data = i.data || {}, a = i.garbageCollect = i.garbageCollect || []; i.font !== e && (r = i.data = {}, a = i.garbageCollect = [], i.font = e), t.font = e; var o, s, l, u, h, c = 0, d = n.length; for (o = 0; o < d; o++)
        if (null != (u = n[o]) && !0 !== W.isArray(u))
            c = W.measureText(t, r, a, c, u);
        else if (W.isArray(u))
            for (s = 0, l = u.length; s < l; s++)
                null == (h = u[s]) || W.isArray(h) || (c = W.measureText(t, r, a, c, h)); var f = a.length / 2; if (f > n.length) {
        for (o = 0; o < f; o++)
            delete r[a[o]];
        a.splice(0, f);
    } return c; }, W.measureText = function (t, e, n, i, r) { var a = e[r]; return a || (a = e[r] = t.measureText(r).width, n.push(r)), a > i && (i = a), i; }, W.numberOfLabelLines = function (t) { var e = 1; return W.each(t, (function (t) { W.isArray(t) && t.length > e && (e = t.length); })), e; }, W.color = _ ? function (t) { return t instanceof CanvasGradient && (t = R.global.defaultColor), _(t); } : function (t) { return console.error("Color.js not found!"), t; }, W.getHoverColor = function (t) { return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : W.color(t).saturate(.5).darken(.1).rgbString(); }; }(), Ne._adapters = Ve, Ne.Animation = X, Ne.animationService = G, Ne.controllers = qt, Ne.DatasetController = Q, Ne.defaults = R, Ne.Element = Y, Ne.elements = mt, Ne.Interaction = Zt, Ne.layouts = se, Ne.platform = be, Ne.plugins = xe, Ne.Scale = en, Ne.scaleService = ye, Ne.Ticks = He, Ne.Tooltip = Ae, Ne.helpers.each(jn, (function (t, e) { Ne.scaleService.registerScaleType(e, t, t._defaults); })), hi)
        hi.hasOwnProperty(gi) && Ne.plugins.register(hi[gi]);
    Ne.platform.initialize();
    var pi = Ne;
    return "undefined" != typeof window && (window.Chart = Ne), Ne.Chart = Ne, Ne.Legend = hi.legend._element, Ne.Title = hi.title._element, Ne.pluginService = Ne.plugins, Ne.PluginBase = Ne.Element.extend({}), Ne.canvasHelpers = Ne.helpers.canvas, Ne.layoutService = Ne.layouts, Ne.LinearScaleBase = on, Ne.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function (t) { Ne[t] = function (e, n) { return new Ne(e, Ne.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) })); }; })), pi;
})), function (t, e, n, i) {
    "use strict";
    function r(t, e, n) { return setTimeout(u(t, n), e); }
    function a(t, e, n) { return !!Array.isArray(t) && (o(t, n[e], n), !0); }
    function o(t, e, n) { var r; if (t)
        if (t.forEach)
            t.forEach(e, n);
        else if (t.length !== i)
            for (r = 0; r < t.length;)
                e.call(n, t[r], r, t), r++;
        else
            for (r in t)
                t.hasOwnProperty(r) && e.call(n, t[r], r, t); }
    function s(e, n, i) { var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n"; return function () { var n = new Error("get-stack-trace"), i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", a = t.console && (t.console.warn || t.console.log); return a && a.call(t.console, r, i), e.apply(this, arguments); }; }
    function l(t, e, n) { var i, r = e.prototype; (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && it(i, n); }
    function u(t, e) { return function () { return t.apply(e, arguments); }; }
    function h(t, e) { return typeof t == ot ? t.apply(e && e[0] || i, e) : t; }
    function c(t, e) { return t === i ? e : t; }
    function d(t, e, n) { o(m(e), (function (e) { t.addEventListener(e, n, !1); })); }
    function f(t, e, n) { o(m(e), (function (e) { t.removeEventListener(e, n, !1); })); }
    function g(t, e) { for (; t;) {
        if (t == e)
            return !0;
        t = t.parentNode;
    } return !1; }
    function p(t, e) { return t.indexOf(e) > -1; }
    function m(t) { return t.trim().split(/\s+/g); }
    function v(t, e, n) { if (t.indexOf && !n)
        return t.indexOf(e); for (var i = 0; i < t.length;) {
        if (n && t[i][n] == e || !n && t[i] === e)
            return i;
        i++;
    } return -1; }
    function b(t) { return Array.prototype.slice.call(t, 0); }
    function x(t, e, n) { for (var i = [], r = [], a = 0; a < t.length;) {
        var o = e ? t[a][e] : t[a];
        v(r, o) < 0 && i.push(t[a]), r[a] = o, a++;
    } return n && (i = e ? i.sort((function (t, n) { return t[e] > n[e]; })) : i.sort()), i; }
    function y(t, e) { for (var n, r, a = e[0].toUpperCase() + e.slice(1), o = 0; o < rt.length;) {
        if ((r = (n = rt[o]) ? n + a : e) in t)
            return r;
        o++;
    } return i; }
    function _(e) { var n = e.ownerDocument || e; return n.defaultView || n.parentWindow || t; }
    function k(t, e) { var n = this; this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) { h(t.options.enable, [t]) && n.handler(e); }, this.init(); }
    function w(t, e, n) { var i = n.pointers.length, r = n.changedPointers.length, a = e & xt && i - r == 0, o = e & (_t | kt) && i - r == 0; n.isFirst = !!a, n.isFinal = !!o, a && (t.session = {}), n.eventType = e, function (t, e) { var n = t.session, i = e.pointers, r = i.length; n.firstInput || (n.firstInput = S(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = S(e) : 1 === r && (n.firstMultiple = !1); var a = n.firstInput, o = n.firstMultiple, s = o ? o.center : a.center, l = e.center = C(i); e.timeStamp = ut(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = D(s, l), e.distance = A(s, l), function (t, e) { var n = e.center, i = t.offsetDelta || {}, r = t.prevDelta || {}, a = t.prevInput || {}; e.eventType !== xt && a.eventType !== _t || (r = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, i = t.offsetDelta = { x: n.x, y: n.y }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y); }(n, e), e.offsetDirection = P(e.deltaX, e.deltaY); var u = T(e.deltaTime, e.deltaX, e.deltaY); e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = lt(u.x) > lt(u.y) ? u.x : u.y, e.scale = o ? function (t, e) { return A(e[0], e[1], Ft) / A(t[0], t[1], Ft); }(o.pointers, i) : 1, e.rotation = o ? function (t, e) { return D(e[1], e[0], Ft) + D(t[1], t[0], Ft); }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, M(n, e); var h = t.element; g(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h; }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n; }
    function M(t, e) { var n, r, a, o, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp; if (e.eventType != kt && (l > bt || s.velocity === i)) {
        var u = e.deltaX - s.deltaX, h = e.deltaY - s.deltaY, c = T(l, u, h);
        r = c.x, a = c.y, n = lt(c.x) > lt(c.y) ? c.x : c.y, o = P(u, h), t.lastInterval = e;
    }
    else
        n = s.velocity, r = s.velocityX, a = s.velocityY, o = s.direction; e.velocity = n, e.velocityX = r, e.velocityY = a, e.direction = o; }
    function S(t) { for (var e = [], n = 0; n < t.pointers.length;)
        e[n] = { clientX: st(t.pointers[n].clientX), clientY: st(t.pointers[n].clientY) }, n++; return { timeStamp: ut(), pointers: e, center: C(e), deltaX: t.deltaX, deltaY: t.deltaY }; }
    function C(t) { var e = t.length; if (1 === e)
        return { x: st(t[0].clientX), y: st(t[0].clientY) }; for (var n = 0, i = 0, r = 0; e > r;)
        n += t[r].clientX, i += t[r].clientY, r++; return { x: st(n / e), y: st(i / e) }; }
    function T(t, e, n) { return { x: e / t || 0, y: n / t || 0 }; }
    function P(t, e) { return t === e ? wt : lt(t) >= lt(e) ? 0 > t ? Mt : St : 0 > e ? Ct : Tt; }
    function A(t, e, n) { n || (n = It); var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]]; return Math.sqrt(i * i + r * r); }
    function D(t, e, n) { return n || (n = It), 180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]]) / Math.PI; }
    function I() { this.evEl = Lt, this.evWin = Rt, this.pressed = !1, k.apply(this, arguments); }
    function F() { this.evEl = Nt, this.evWin = Bt, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []; }
    function O() { this.evTarget = Vt, this.evWin = Ht, this.started = !1, k.apply(this, arguments); }
    function L(t, e) { var n = b(t.touches), i = b(t.changedTouches); return e & (_t | kt) && (n = x(n.concat(i), "identifier", !0)), [n, i]; }
    function R() { this.evTarget = qt, this.targetIds = {}, k.apply(this, arguments); }
    function E(t, e) { var n = b(t.touches), i = this.targetIds; if (e & (xt | yt) && 1 === n.length)
        return i[n[0].identifier] = !0, [n, n]; var r, a, o = b(t.changedTouches), s = [], l = this.target; if (a = n.filter((function (t) { return g(t.target, l); })), e === xt)
        for (r = 0; r < a.length;)
            i[a[r].identifier] = !0, r++; for (r = 0; r < o.length;)
        i[o[r].identifier] && s.push(o[r]), e & (_t | kt) && delete i[o[r].identifier], r++; return s.length ? [x(a.concat(s), "identifier", !0), s] : void 0; }
    function z() { k.apply(this, arguments); var t = u(this.handler, this); this.touch = new R(this.manager, t), this.mouse = new I(this.manager, t), this.primaryTouch = null, this.lastTouches = []; }
    function N(t, e) { t & xt ? (this.primaryTouch = e.changedPointers[0].identifier, B.call(this, e)) : t & (_t | kt) && B.call(this, e); }
    function B(t) { var e = t.changedPointers[0]; if (e.identifier === this.primaryTouch) {
        var n = { x: e.clientX, y: e.clientY };
        this.lastTouches.push(n);
        var i = this.lastTouches;
        setTimeout((function () { var t = i.indexOf(n); t > -1 && i.splice(t, 1); }), Yt);
    } }
    function W(t) { for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
        var r = this.lastTouches[i], a = Math.abs(e - r.x), o = Math.abs(n - r.y);
        if (Ut >= a && Ut >= o)
            return !0;
    } return !1; }
    function V(t, e) { this.manager = t, this.set(e); }
    function H(t) { this.options = it({}, this.defaults, t || {}), this.id = dt++, this.manager = null, this.options.enable = c(this.options.enable, !0), this.state = ee, this.simultaneous = {}, this.requireFail = []; }
    function j(t) { return t & oe ? "cancel" : t & re ? "end" : t & ie ? "move" : t & ne ? "start" : ""; }
    function q(t) { return t == Tt ? "down" : t == Ct ? "up" : t == Mt ? "left" : t == St ? "right" : ""; }
    function Y(t, e) { var n = e.manager; return n ? n.get(t) : t; }
    function U() { H.apply(this, arguments); }
    function X() { U.apply(this, arguments), this.pX = null, this.pY = null; }
    function G() { U.apply(this, arguments); }
    function $() { H.apply(this, arguments), this._timer = null, this._input = null; }
    function K() { U.apply(this, arguments); }
    function Z() { U.apply(this, arguments); }
    function J() { H.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0; }
    function Q(t, e) { return (e = e || {}).recognizers = c(e.recognizers, Q.defaults.preset), new tt(t, e); }
    function tt(t, e) { this.options = it({}, Q.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = function (t) { return new (t.options.inputClass || (gt ? F : pt ? R : ft ? z : I))(t, w); }(this), this.touchAction = new V(this, this.options.touchAction), et(this, !0), o(this.options.recognizers, (function (t) { var e = this.add(new t[0](t[1])); t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]); }), this); }
    function et(t, e) { var n, i = t.element; i.style && (o(t.options.cssProps, (function (r, a) { n = y(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""; })), e || (t.oldCssProps = {})); }
    function nt(t, n) { var i = e.createEvent("Event"); i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i); }
    var it, rt = ["", "webkit", "Moz", "MS", "ms", "o"], at = e.createElement("div"), ot = "function", st = Math.round, lt = Math.abs, ut = Date.now;
    it = "function" != typeof Object.assign ? function (t) { if (t === i || null === t)
        throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (r !== i && null !== r)
            for (var a in r)
                r.hasOwnProperty(a) && (e[a] = r[a]);
    } return e; } : Object.assign;
    var ht = s((function (t, e, n) { for (var r = Object.keys(e), a = 0; a < r.length;)
        (!n || n && t[r[a]] === i) && (t[r[a]] = e[r[a]]), a++; return t; }), "extend", "Use `assign`."), ct = s((function (t, e) { return ht(t, e, !0); }), "merge", "Use `assign`."), dt = 1, ft = "ontouchstart" in t, gt = y(t, "PointerEvent") !== i, pt = ft && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), mt = "touch", vt = "mouse", bt = 25, xt = 1, yt = 2, _t = 4, kt = 8, wt = 1, Mt = 2, St = 4, Ct = 8, Tt = 16, Pt = Mt | St, At = Ct | Tt, Dt = Pt | At, It = ["x", "y"], Ft = ["clientX", "clientY"];
    k.prototype = { handler: function () { }, init: function () { this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(_(this.element), this.evWin, this.domHandler); }, destroy: function () { this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(_(this.element), this.evWin, this.domHandler); } };
    var Ot = { mousedown: xt, mousemove: yt, mouseup: _t }, Lt = "mousedown", Rt = "mousemove mouseup";
    l(I, k, { handler: function (t) { var e = Ot[t.type]; e & xt && 0 === t.button && (this.pressed = !0), e & yt && 1 !== t.which && (e = _t), this.pressed && (e & _t && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: vt, srcEvent: t })); } });
    var Et = { pointerdown: xt, pointermove: yt, pointerup: _t, pointercancel: kt, pointerout: kt }, zt = { 2: mt, 3: "pen", 4: vt, 5: "kinect" }, Nt = "pointerdown", Bt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Nt = "MSPointerDown", Bt = "MSPointerMove MSPointerUp MSPointerCancel"), l(F, k, { handler: function (t) { var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), r = Et[i], a = zt[t.pointerType] || t.pointerType, o = a == mt, s = v(e, t.pointerId, "pointerId"); r & xt && (0 === t.button || o) ? 0 > s && (e.push(t), s = e.length - 1) : r & (_t | kt) && (n = !0), 0 > s || (e[s] = t, this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), n && e.splice(s, 1)); } });
    var Wt = { touchstart: xt, touchmove: yt, touchend: _t, touchcancel: kt }, Vt = "touchstart", Ht = "touchstart touchmove touchend touchcancel";
    l(O, k, { handler: function (t) { var e = Wt[t.type]; if (e === xt && (this.started = !0), this.started) {
            var n = L.call(this, t, e);
            e & (_t | kt) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: mt, srcEvent: t });
        } } });
    var jt = { touchstart: xt, touchmove: yt, touchend: _t, touchcancel: kt }, qt = "touchstart touchmove touchend touchcancel";
    l(R, k, { handler: function (t) { var e = jt[t.type], n = E.call(this, t, e); n && this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: mt, srcEvent: t }); } });
    var Yt = 2500, Ut = 25;
    l(z, k, { handler: function (t, e, n) { var i = n.pointerType == vt; if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (n.pointerType == mt)
                N.call(this, e, n);
            else if (i && W.call(this, n))
                return;
            this.callback(t, e, n);
        } }, destroy: function () { this.touch.destroy(), this.mouse.destroy(); } });
    var Xt = y(at.style, "touchAction"), Gt = Xt !== i, $t = "compute", Kt = "manipulation", Zt = "none", Jt = "pan-x", Qt = "pan-y", te = function () { if (!Gt)
        return !1; var e = {}, n = t.CSS && t.CSS.supports; return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (i) { e[i] = !n || t.CSS.supports("touch-action", i); })), e; }();
    V.prototype = { set: function (t) { t == $t && (t = this.compute()), Gt && this.manager.element.style && te[t] && (this.manager.element.style[Xt] = t), this.actions = t.toLowerCase().trim(); }, update: function () { this.set(this.manager.options.touchAction); }, compute: function () { var t = []; return o(this.manager.recognizers, (function (e) { h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction())); })), function (t) { if (p(t, Zt))
            return Zt; var e = p(t, Jt), n = p(t, Qt); return e && n ? Zt : e || n ? e ? Jt : Qt : p(t, Kt) ? Kt : "auto"; }(t.join(" ")); }, preventDefaults: function (t) { var e = t.srcEvent, n = t.offsetDirection; if (!this.manager.session.prevented) {
            var i = this.actions, r = p(i, Zt) && !te[Zt], a = p(i, Qt) && !te[Qt], o = p(i, Jt) && !te[Jt];
            if (r && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250)
                return;
            return o && a ? void 0 : r || a && n & Pt || o && n & At ? this.preventSrc(e) : void 0;
        } e.preventDefault(); }, preventSrc: function (t) { this.manager.session.prevented = !0, t.preventDefault(); } };
    var ee = 1, ne = 2, ie = 4, re = 8, ae = re, oe = 16;
    H.prototype = { defaults: {}, set: function (t) { return it(this.options, t), this.manager && this.manager.touchAction.update(), this; }, recognizeWith: function (t) { if (a(t, "recognizeWith", this))
            return this; var e = this.simultaneous; return e[(t = Y(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this; }, dropRecognizeWith: function (t) { return a(t, "dropRecognizeWith", this) ? this : (t = Y(t, this), delete this.simultaneous[t.id], this); }, requireFailure: function (t) { if (a(t, "requireFailure", this))
            return this; var e = this.requireFail; return -1 === v(e, t = Y(t, this)) && (e.push(t), t.requireFailure(this)), this; }, dropRequireFailure: function (t) { if (a(t, "dropRequireFailure", this))
            return this; t = Y(t, this); var e = v(this.requireFail, t); return e > -1 && this.requireFail.splice(e, 1), this; }, hasRequireFailures: function () { return this.requireFail.length > 0; }, canRecognizeWith: function (t) { return !!this.simultaneous[t.id]; }, emit: function (t) { function e(e) { n.manager.emit(e, t); } var n = this, i = this.state; re > i && e(n.options.event + j(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= re && e(n.options.event + j(i)); }, tryEmit: function (t) { return this.canEmit() ? this.emit(t) : void (this.state = 32); }, canEmit: function () { for (var t = 0; t < this.requireFail.length;) {
            if (!(this.requireFail[t].state & (32 | ee)))
                return !1;
            t++;
        } return !0; }, recognize: function (t) { var e = it({}, t); return h(this.options.enable, [this, e]) ? (this.state & (ae | oe | 32) && (this.state = ee), this.state = this.process(e), void (this.state & (ne | ie | re | oe) && this.tryEmit(e))) : (this.reset(), void (this.state = 32)); }, process: function (t) { }, getTouchAction: function () { }, reset: function () { } }, l(U, H, { defaults: { pointers: 1 }, attrTest: function (t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e; }, process: function (t) { var e = this.state, n = t.eventType, i = e & (ne | ie), r = this.attrTest(t); return i && (n & kt || !r) ? e | oe : i || r ? n & _t ? e | re : e & ne ? e | ie : ne : 32; } }), l(X, U, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Dt }, getTouchAction: function () { var t = this.options.direction, e = []; return t & Pt && e.push(Qt), t & At && e.push(Jt), e; }, directionTest: function (t) { var e = this.options, n = !0, i = t.distance, r = t.direction, a = t.deltaX, o = t.deltaY; return r & e.direction || (e.direction & Pt ? (r = 0 === a ? wt : 0 > a ? Mt : St, n = a != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? wt : 0 > o ? Ct : Tt, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction; }, attrTest: function (t) { return U.prototype.attrTest.call(this, t) && (this.state & ne || !(this.state & ne) && this.directionTest(t)); }, emit: function (t) { this.pX = t.deltaX, this.pY = t.deltaY; var e = q(t.direction); e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t); } }), l(G, U, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function () { return [Zt]; }, attrTest: function (t) { return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ne); }, emit: function (t) { 1 !== t.scale && (t.additionalEvent = this.options.event + (t.scale < 1 ? "in" : "out")), this._super.emit.call(this, t); } }), l($, H, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function () { return ["auto"]; }, process: function (t) { var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, a = t.deltaTime > e.time; if (this._input = t, !i || !n || t.eventType & (_t | kt) && !a)
            this.reset();
        else if (t.eventType & xt)
            this.reset(), this._timer = r((function () { this.state = ae, this.tryEmit(); }), e.time, this);
        else if (t.eventType & _t)
            return ae; return 32; }, reset: function () { clearTimeout(this._timer); }, emit: function (t) { this.state === ae && (t && t.eventType & _t ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ut(), this.manager.emit(this.options.event, this._input))); } }), l(K, U, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function () { return [Zt]; }, attrTest: function (t) { return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ne); } }), l(Z, U, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Pt | At, pointers: 1 }, getTouchAction: function () { return X.prototype.getTouchAction.call(this); }, attrTest: function (t) { var e, n = this.options.direction; return n & (Pt | At) ? e = t.overallVelocity : n & Pt ? e = t.overallVelocityX : n & At && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && lt(e) > this.options.velocity && t.eventType & _t; }, emit: function (t) { var e = q(t.offsetDirection); e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t); } }), l(J, H, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function () { return [Kt]; }, process: function (t) { var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, a = t.deltaTime < e.time; if (this.reset(), t.eventType & xt && 0 === this.count)
            return this.failTimeout(); if (i && a && n) {
            if (t.eventType != _t)
                return this.failTimeout();
            var o = !this.pTime || t.timeStamp - this.pTime < e.interval, s = !this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
            if (this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps)
                return this.hasRequireFailures() ? (this._timer = r((function () { this.state = ae, this.tryEmit(); }), e.interval, this), ne) : ae;
        } return 32; }, failTimeout: function () { return this._timer = r((function () { this.state = 32; }), this.options.interval, this), 32; }, reset: function () { clearTimeout(this._timer); }, emit: function () { this.state == ae && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)); } }), Q.VERSION = "2.0.7", Q.defaults = { domEvents: !1, touchAction: $t, enable: !0, inputTarget: null, inputClass: null, preset: [[K, { enable: !1 }], [G, { enable: !1 }, ["rotate"]], [Z, { direction: Pt }], [X, { direction: Pt }, ["swipe"]], [J], [J, { event: "doubletap", taps: 2 }, ["tap"]], [$]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }, tt.prototype = { set: function (t) { return it(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this; }, stop: function (t) { this.session.stopped = t ? 2 : 1; }, recognize: function (t) { var e = this.session; if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var n, i = this.recognizers, r = e.curRecognizer;
            (!r || r && r.state & ae) && (r = e.curRecognizer = null);
            for (var a = 0; a < i.length;)
                n = i[a], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (ne | ie | re) && (r = e.curRecognizer = n), a++;
        } }, get: function (t) { if (t instanceof H)
            return t; for (var e = this.recognizers, n = 0; n < e.length; n++)
            if (e[n].options.event == t)
                return e[n]; return null; }, add: function (t) { if (a(t, "add", this))
            return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t; }, remove: function (t) { if (a(t, "remove", this))
            return this; if (t = this.get(t)) {
            var e = this.recognizers, n = v(e, t);
            -1 !== n && (e.splice(n, 1), this.touchAction.update());
        } return this; }, on: function (t, e) { if (t !== i && e !== i) {
            var n = this.handlers;
            return o(m(t), (function (t) { n[t] = n[t] || [], n[t].push(e); })), this;
        } }, off: function (t, e) { if (t !== i) {
            var n = this.handlers;
            return o(m(t), (function (t) { e ? n[t] && n[t].splice(v(n[t], e), 1) : delete n[t]; })), this;
        } }, emit: function (t, e) { this.options.domEvents && nt(t, e); var n = this.handlers[t] && this.handlers[t].slice(); if (n && n.length) {
            e.type = t, e.preventDefault = function () { e.srcEvent.preventDefault(); };
            for (var i = 0; i < n.length;)
                n[i](e), i++;
        } }, destroy: function () { this.element && et(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null; } }, it(Q, { INPUT_START: xt, INPUT_MOVE: yt, INPUT_END: _t, INPUT_CANCEL: kt, STATE_POSSIBLE: ee, STATE_BEGAN: ne, STATE_CHANGED: ie, STATE_ENDED: re, STATE_RECOGNIZED: ae, STATE_CANCELLED: oe, STATE_FAILED: 32, DIRECTION_NONE: wt, DIRECTION_LEFT: Mt, DIRECTION_RIGHT: St, DIRECTION_UP: Ct, DIRECTION_DOWN: Tt, DIRECTION_HORIZONTAL: Pt, DIRECTION_VERTICAL: At, DIRECTION_ALL: Dt, Manager: tt, Input: k, TouchAction: V, TouchInput: R, MouseInput: I, PointerEventInput: F, TouchMouseInput: z, SingleTouchInput: O, Recognizer: H, AttrRecognizer: U, Tap: J, Pan: X, Swipe: Z, Pinch: G, Rotate: K, Press: $, on: d, off: f, each: o, merge: ct, extend: ht, assign: it, inherit: l, bindFn: u, prefixed: y }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = Q, "function" == typeof define && define.amd ? define((function () { return Q; })) : "undefined" != typeof module && module.exports ? module.exports = Q : t.Hammer = Q;
}(window, document);
