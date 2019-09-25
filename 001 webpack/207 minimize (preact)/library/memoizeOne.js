function areInputsEqual(r, n) {
    if (r.length !== n.length) return !1;
    for (var t = 0; t < r.length; t++)
        if (r[t] !== n[t]) return !1;
    return !0
}

function memoizeOne(r, n) {
    var t;
    void 0 === n && (n = areInputsEqual);
    var e, u = [],
        i = !1;
    return function() {
        for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++) l[o] = arguments[o];
        return i && t === this && n(l, u) ? e : (e = r.apply(this, l), i = !0, t = this, u = l, e)
    }
}
export { memoizeOne };