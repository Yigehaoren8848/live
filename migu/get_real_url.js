// let c = new Promise(function(e){
//     e(("skadfjkfd ",q)())
// })

// c.then(function(r){
//     console.log(r)
// })

// function q(a,b){
//     return "skldfjksdjklsdjkfkjfsdk"

// }

var i = 'file:///opt/idc/apps/jenkins/workspace/build-41-SXH5-migustatic%E6%9E%84%E5%BB%BAmgs_master-new-271829/migustatic/player/src/wasm/pickproof1000.js'

function n_(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
}
function idefault(e) {
    var t, o;
    (e = void 0 !== (e = e || {}) ? e : {}).ready = new Promise((function (e, r) {
        t = e,
            o = r
    }
    ));
    var a, s = {};
    for (a in e)
        e.hasOwnProperty(a) && (s[a] = e[a]);
    var u, l = [], c = "./this.program", f = !0, d = !1, h = "";
    (f || d) && (d ? h = self.location.href : "undefined" != typeof document && document.currentScript && (h = document.currentScript.src),
        i && (h = i),
        h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "",
        d && (u = function (e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1),
                t.responseType = "arraybuffer",
                t.send(null),
                new Uint8Array(t.response)
        }
        ));
    var p, y, v = e.print || console.log.bind(console), m = e.printErr || console.warn.bind(console);
    for (a in s)
        s.hasOwnProperty(a) && (e[a] = s[a]);
    s = null,
        e.arguments && (l = e.arguments),
        e.thisProgram && (c = e.thisProgram),
        e.quit && e.quit,
        e.wasmBinary && (p = e.wasmBinary),
        e.noExitRuntime,
        "object" !== ("undefined" == typeof WebAssembly ? "undefined" : n_(WebAssembly)) && C("no native wasm support detected");
    var g, _, b, E = !1, S = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function w(e, t, r) {
        for (var n = t + r, i = t; e[i] && !(i >= n);)
            ++i;
        if (i - t > 16 && e.subarray && S)
            return S.decode(e.subarray(t, i));
        for (var o = ""; t < i;) {
            var a = e[t++];
            if (128 & a) {
                var s = 63 & e[t++];
                if (192 != (224 & a)) {
                    var u = 63 & e[t++];
                    if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & e[t++]) < 65536)
                        o += String.fromCharCode(a);
                    else {
                        var l = a - 65536;
                        o += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                    }
                } else
                    o += String.fromCharCode((31 & a) << 6 | s)
            } else
                o += String.fromCharCode(a)
        }
        return o
    }
    function T(e, t) {
        return e ? w(_, e, t) : ""
    }
    function I(e, t, r, n) {
        if (!(n > 0))
            return 0;
        for (var i = r, o = r + n - 1, a = 0; a < e.length; ++a) {
            var s = e.charCodeAt(a);
            if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a)),
                s <= 127) {
                if (r >= o)
                    break;
                t[r++] = s
            } else if (s <= 2047) {
                if (r + 1 >= o)
                    break;
                t[r++] = 192 | s >> 6,
                    t[r++] = 128 | 63 & s
            } else if (s <= 65535) {
                if (r + 2 >= o)
                    break;
                t[r++] = 224 | s >> 12,
                    t[r++] = 128 | s >> 6 & 63,
                    t[r++] = 128 | 63 & s
            } else {
                if (r + 3 >= o)
                    break;
                t[r++] = 240 | s >> 18,
                    t[r++] = 128 | s >> 12 & 63,
                    t[r++] = 128 | s >> 6 & 63,
                    t[r++] = 128 | 63 & s
            }
        }
        return t[r] = 0,
            r - i
    }
    e.INITIAL_MEMORY;
    var O, k = [], R = [], A = [], L = 0, P = null, D = null;
    function C(t) {
        e.onAbort && e.onAbort(t),
            m(t += ""),
            E = !0,
            t = "abort(" + t + "). Build with -s ASSERTIONS=1 for more info.";
        var r = new WebAssembly.RuntimeError(t);
        throw o(r),
        r
    }
    e.preloadedImages = {},
        e.preloadedAudios = {};
    var x, M, N = "data:application/octet-stream;base64,";
    function U(e) {
        return e.startsWith(N)
    }
    function B(e) {
        try {
            if (e == x && p)
                return new Uint8Array(p);
            if (u)
                return u(e);
            throw "both async and sync fetching of the wasm failed"
        } catch (e) {
            C(e)
        }
    }
    function j(t) {
        for (; t.length > 0;) {
            var r = t.shift();
            if ("function" != typeof r) {
                var n = r.func;
                "number" == typeof n ? void 0 === r.arg ? O.get(n)() : O.get(n)(r.arg) : n(void 0 === r.arg ? null : r.arg)
            } else
                r(e)
        }
    }
    function F(e) {
        this.excPtr = e,
            this.ptr = e - 16,
            this.set_type = function (e) {
                b[this.ptr + 4 >> 2] = e
            }
            ,
            this.get_type = function () {
                return b[this.ptr + 4 >> 2]
            }
            ,
            this.set_destructor = function (e) {
                b[this.ptr + 8 >> 2] = e
            }
            ,
            this.get_destructor = function () {
                return b[this.ptr + 8 >> 2]
            }
            ,
            this.set_refcount = function (e) {
                b[this.ptr >> 2] = e
            }
            ,
            this.set_caught = function (e) {
                e = e ? 1 : 0,
                    g[this.ptr + 12 | 0] = e
            }
            ,
            this.get_caught = function () {
                return 0 != g[this.ptr + 12 | 0]
            }
            ,
            this.set_rethrown = function (e) {
                e = e ? 1 : 0,
                    g[this.ptr + 13 | 0] = e
            }
            ,
            this.get_rethrown = function () {
                return 0 != g[this.ptr + 13 | 0]
            }
            ,
            this.init = function (e, t) {
                this.set_type(e),
                    this.set_destructor(t),
                    this.set_refcount(0),
                    this.set_caught(!1),
                    this.set_rethrown(!1)
            }
            ,
            this.add_ref = function () {
                var e = b[this.ptr >> 2];
                b[this.ptr >> 2] = e + 1
            }
            ,
            this.release_ref = function () {
                var e = b[this.ptr >> 2];
                return b[this.ptr >> 2] = e - 1,
                    1 === e
            }
    }
    e.locateFile ? U(x = "pickproof1000.wasm") || (M = x,
        x = e.locateFile ? e.locateFile(M, h) : h + M) : x = 'https://m.miguvideo.com/mgs/player/prd/v_20241018155228_d14c47c2/dist/pickproof1000.wasm';
    var V = {};
    function H() {
        if (!H.strings) {
            var e = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: "zh_CN.UTF-8"
            };
            for (var t in V)
                void 0 === V[t] ? delete e[t] : e[t] = V[t];
            var r = [];
            for (var t in e)
                r.push(t + "=" + e[t]);
            H.strings = r
        }
        return H.strings
    }
    var G = {
        mappings: {},
        buffers: [null, [], []],
        printChar: function (e, t) {
            var r = G.buffers[e];
            0 === t || 10 === t ? ((1 === e ? v : m)(w(r, 0)),
                r.length = 0) : r.push(t)
        },
        varargs: void 0,
        get: function () {
            return G.varargs += 4,
                b[G.varargs - 4 >> 2]
        },
        getStr: function (e) {
            return T(e)
        },
        get64: function (e, t) {
            return e
        }
    };
    function W(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }
    function Y(e, t) {
        for (var r = 0, n = 0; n <= t; r += e[n++])
            ;
        return r
    }
    var K = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        , q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function z(e, t) {
        for (var r = new Date(e.getTime()); t > 0;) {
            var n = W(r.getFullYear())
                , i = r.getMonth()
                , o = (n ? K : q)[i];
            if (!(t > o - r.getDate()))
                return r.setDate(r.getDate() + t),
                    r;
            t -= o - r.getDate() + 1,
                r.setDate(1),
                i < 11 ? r.setMonth(i + 1) : (r.setMonth(0),
                    r.setFullYear(r.getFullYear() + 1))
        }
        return r
    }
    function X(e, t, r, n) {
        var i = b[n + 40 >> 2]
            , o = {
                tm_sec: b[n >> 2],
                tm_min: b[n + 4 >> 2],
                tm_hour: b[n + 8 >> 2],
                tm_mday: b[n + 12 >> 2],
                tm_mon: b[n + 16 >> 2],
                tm_year: b[n + 20 >> 2],
                tm_wday: b[n + 24 >> 2],
                tm_yday: b[n + 28 >> 2],
                tm_isdst: b[n + 32 >> 2],
                tm_gmtoff: b[n + 36 >> 2],
                tm_zone: i ? T(i) : ""
            }
            , a = T(r)
            , s = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
        for (var u in s)
            a = a.replace(new RegExp(u, "g"), s[u]);
        var l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            , c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        function f(e, t, r) {
            for (var n = "number" == typeof e ? e.toString() : e || ""; n.length < t;)
                n = r[0] + n;
            return n
        }
        function d(e, t) {
            return f(e, t, "0")
        }
        function h(e, t) {
            function r(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0
            }
            var n;
            return 0 === (n = r(e.getFullYear() - t.getFullYear())) && 0 === (n = r(e.getMonth() - t.getMonth())) && (n = r(e.getDate() - t.getDate())),
                n
        }
        function p(e) {
            switch (e.getDay()) {
                case 0:
                    return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                    return e;
                case 2:
                    return new Date(e.getFullYear(), 0, 3);
                case 3:
                    return new Date(e.getFullYear(), 0, 2);
                case 4:
                    return new Date(e.getFullYear(), 0, 1);
                case 5:
                    return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                    return new Date(e.getFullYear() - 1, 11, 30)
            }
        }
        function y(e) {
            var t = z(new Date(e.tm_year + 1900, 0, 1), e.tm_yday)
                , r = new Date(t.getFullYear(), 0, 4)
                , n = new Date(t.getFullYear() + 1, 0, 4)
                , i = p(r)
                , o = p(n);
            return h(i, t) <= 0 ? h(o, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
        }
        var v = {
            "%a": function (e) {
                return l[e.tm_wday].substring(0, 3)
            },
            "%A": function (e) {
                return l[e.tm_wday]
            },
            "%b": function (e) {
                return c[e.tm_mon].substring(0, 3)
            },
            "%B": function (e) {
                return c[e.tm_mon]
            },
            "%C": function (e) {
                return d((e.tm_year + 1900) / 100 | 0, 2)
            },
            "%d": function (e) {
                return d(e.tm_mday, 2)
            },
            "%e": function (e) {
                return f(e.tm_mday, 2, " ")
            },
            "%g": function (e) {
                return y(e).toString().substring(2)
            },
            "%G": function (e) {
                return y(e)
            },
            "%H": function (e) {
                return d(e.tm_hour, 2)
            },
            "%I": function (e) {
                var t = e.tm_hour;
                return 0 == t ? t = 12 : t > 12 && (t -= 12),
                    d(t, 2)
            },
            "%j": function (e) {
                return d(e.tm_mday + Y(W(e.tm_year + 1900) ? K : q, e.tm_mon - 1), 3)
            },
            "%m": function (e) {
                return d(e.tm_mon + 1, 2)
            },
            "%M": function (e) {
                return d(e.tm_min, 2)
            },
            "%n": function () {
                return "\n"
            },
            "%p": function (e) {
                return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
            },
            "%S": function (e) {
                return d(e.tm_sec, 2)
            },
            "%t": function () {
                return "\t"
            },
            "%u": function (e) {
                return e.tm_wday || 7
            },
            "%U": function (e) {
                var t = new Date(e.tm_year + 1900, 0, 1)
                    , r = 0 === t.getDay() ? t : z(t, 7 - t.getDay())
                    , n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                if (h(r, n) < 0) {
                    var i = Y(W(n.getFullYear()) ? K : q, n.getMonth() - 1) - 31
                        , o = 31 - r.getDate() + i + n.getDate();
                    return d(Math.ceil(o / 7), 2)
                }
                return 0 === h(r, t) ? "01" : "00"
            },
            "%V": function (e) {
                var t, r = new Date(e.tm_year + 1900, 0, 4), n = new Date(e.tm_year + 1901, 0, 4), i = p(r), o = p(n), a = z(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                return h(a, i) < 0 ? "53" : h(o, a) <= 0 ? "01" : (t = i.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - i.getDate() : e.tm_yday + 1 - i.getDate(),
                    d(Math.ceil(t / 7), 2))
            },
            "%w": function (e) {
                return e.tm_wday
            },
            "%W": function (e) {
                var t = new Date(e.tm_year, 0, 1)
                    , r = 1 === t.getDay() ? t : z(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1)
                    , n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                if (h(r, n) < 0) {
                    var i = Y(W(n.getFullYear()) ? K : q, n.getMonth() - 1) - 31
                        , o = 31 - r.getDate() + i + n.getDate();
                    return d(Math.ceil(o / 7), 2)
                }
                return 0 === h(r, t) ? "01" : "00"
            },
            "%y": function (e) {
                return (e.tm_year + 1900).toString().substring(2)
            },
            "%Y": function (e) {
                return e.tm_year + 1900
            },
            "%z": function (e) {
                var t = e.tm_gmtoff
                    , r = t >= 0;
                return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60,
                    (r ? "+" : "-") + String("0000" + t).slice(-4)
            },
            "%Z": function (e) {
                return e.tm_zone
            },
            "%%": function () {
                return "%"
            }
        };
        for (var u in v)
            a.includes(u) && (a = a.replace(new RegExp(u, "g"), v[u](o)));
        var m, _, E, S, w, O, k = (m = a,
            _ = !1,
            S = E > 0 ? E : function (e) {
                for (var t = 0, r = 0; r < e.length; ++r) {
                    var n = e.charCodeAt(r);
                    n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++r)),
                        n <= 127 ? ++t : t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4
                }
                return t
            }(m) + 1,
            w = new Array(S),
            O = I(m, w, 0, w.length),
            _ && (w.length = O),
            w);
        return k.length > t ? 0 : (function (e, t) {
            g.set(e, t)
        }(k, e),
            k.length - 1)
    }
    var $, Z = {
        b: function (e) {
            return J(e + 16) + 16
        },
        a: function (e, t, r) {
            throw new F(e).init(t, r),
            e
        },
        c: function () {
            C()
        },
        e: function (e) {
            _.length,
                C("OOM")
        },
        g: function (e, t) {
            var r = 0;
            return H().forEach((function (n, i) {
                var o = t + r;
                b[e + 4 * i >> 2] = o,
                    function (e, t, r) {
                        for (var n = 0; n < e.length; ++n)
                            g[0 | t++] = e.charCodeAt(n);
                        r || (g[0 | t] = 0)
                    }(n, o),
                    r += n.length + 1
            }
            )),
                0
        },
        h: function (e, t) {
            var r = H();
            b[e >> 2] = r.length;
            var n = 0;
            return r.forEach((function (e) {
                n += e.length + 1
            }
            )),
                b[t >> 2] = n,
                0
        },
        i: function (e) {
            return 0
        },
        j: function (e, t, r, n, i) { },
        d: function (e, t, r, n) {
            for (var i = 0, o = 0; o < r; o++) {
                for (var a = b[t + 8 * o >> 2], s = b[t + (8 * o + 4) >> 2], u = 0; u < s; u++)
                    G.printChar(e, _[a + u]);
                i += s
            }
            return b[n >> 2] = i,
                0
        },
        f: function (e, t, r, n) {
            return X(e, t, r, n)
        }
    }, J = (function () {
        var t = {
            a: Z
        };
        function r(t, r) {
            var n, i, o = t.exports;
            e.asm = o,
                y = e.asm.k,
                n = y.buffer,
                e.HEAP8 = g = new Int8Array(n),
                e.HEAP16 = new Int16Array(n),
                e.HEAP32 = b = new Int32Array(n),
                e.HEAPU8 = _ = new Uint8Array(n),
                e.HEAPU16 = new Uint16Array(n),
                e.HEAPU32 = new Uint32Array(n),
                e.HEAPF32 = new Float32Array(n),
                e.HEAPF64 = new Float64Array(n),
                O = e.asm.n,
                i = e.asm.l,
                R.unshift(i),
                function (t) {
                    if (L--,
                        e.monitorRunDependencies && e.monitorRunDependencies(L),
                        0 == L && (null !== P && (clearInterval(P),
                            P = null),
                            D)) {
                        var r = D;
                        D = null,
                            r()
                    }
                }()
        }
        function n(e) {
            r(e.instance)
        }
        function i(e) {
            return (p || !f && !d || "function" != typeof fetch ? Promise.resolve().then((function () {
                return B(x)
            }
            )) : fetch(x, {
                credentials: "same-origin"
            }).then((function (e) {
                if (!e.ok)
                    throw "failed to load wasm binary file at '" + x + "'";
                return e.arrayBuffer()
            }
            )).catch((function () {
                return B(x)
            }
            ))).then((function (e) {
                return WebAssembly.instantiate(e, t)
            }
            )).then((function (e) {
                return e
            }
            )).then(e, (function (e) {
                m("failed to asynchronously prepare wasm: " + e),
                    C(e)
            }
            ))
        }
        if (L++,
            e.monitorRunDependencies && e.monitorRunDependencies(L),
            e.instantiateWasm)
            try {
                return e.instantiateWasm(t, r)
            } catch (e) {
                return m("Module.instantiateWasm callback failed with error: " + e),
                    !1
            }
        (p || "function" != typeof WebAssembly.instantiateStreaming || U(x) || "function" != typeof fetch ? i(n) : fetch(x, {
            credentials: "same-origin"
        }).then((function (e) {
            return WebAssembly.instantiateStreaming(e, t).then(n, (function (e) {
                return m("wasm streaming compile failed: " + e),
                    m("falling back to ArrayBuffer instantiation"),
                    i(n)
            }
            ))
        }
        ))).catch(o)
    }(),
        e.___wasm_call_ctors = function () {
            return (e.___wasm_call_ctors = e.asm.l).apply(null, arguments)
        }
        ,
        e._getEncrypt = function () {
            return (e._getEncrypt = e.asm.m).apply(null, arguments)
        }
        ,
        e._free = function () {
            return (e._free = e.asm.o).apply(null, arguments)
        }
        ,
        e._malloc = function () {
            return (J = e._malloc = e.asm.p).apply(null, arguments)
        }
    );
    function Q(r) {
        function n() {
            $ || ($ = !0,
                e.calledRun = !0,
                E || (j(R),
                    t(e),
                    e.onRuntimeInitialized && e.onRuntimeInitialized(),
                    function () {
                        if (e.postRun)
                            for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;)
                                t = e.postRun.shift(),
                                    A.unshift(t);
                        var t;
                        j(A)
                    }()))
        }
        r = r || l,
            L > 0 || (function () {
                if (e.preRun)
                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;)
                        t = e.preRun.shift(),
                            k.unshift(t);
                var t;
                j(k)
            }(),
                L > 0 || (e.setStatus ? (e.setStatus("Running..."),
                    setTimeout((function () {
                        setTimeout((function () {
                            e.setStatus("")
                        }
                        ), 1),
                            n()
                    }
                    ), 1)) : n()))
    }
    if (e.UTF8ToString = T,
        e.stringToUTF8 = function (e, t, r) {
            return I(e, _, t, r)
        }
        ,
        D = function e() {
            $ || Q(),
                $ || (D = e)
        }
        ,
        e.run = Q,
        e.preInit)
        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0;)
            e.preInit.pop()();
    return Q(),
        e.ready
}
var c;
var nP = false
    , a = null;
function s(e) {
   (e(),
        clearTimeout(a),
        nP = !0)
}

async function real_url(link) {
    let result = "";
    var l = void 0, c = null;

    // 确保 Promise 被创建
    c = c || new Promise((function (e) {
        e((0, idefault)());
    }));

    // 使用 await 等待 Promise 完成
    try {
        const r = await c;

        // 调用 s 函数
        s((function () {
            l && r._free(l);
            l = r._malloc(4 * link.length + 1);
            r.stringToUTF8(link, l, 4 * link.length + 1);
            var n = r._getEncrypt(l);
            var i = r.UTF8ToString(n);
            result = i; // 将 i 的值赋给 result
    
        }));

        return result; // 返回 result
    } catch (error) {
        console.log("wasm encrypt error!!!", error);
        s((function () {
            console.log("wasm encrypt error!!!");
        }));
        throw new Error("wasm encrypt error!!!"); // 可以选择抛出错误
    }
}

// async function main(){
//     let q = real_url("https://h5live.gslb.cmvideo.cn/wd_r2/cctv/cctv1hd/600/index.m3u8?msisdn=b6ba7834302e34823117d2984f6ba716&mdspid=&spid=699004&netType=0&sid=2201057821&pid=2028597139&timestamp=20241028180731&Channel_ID=0131_10010001005&ProgramID=608807420&ParentNodeID=-99&assertID=2201057821&client_ip=106.114.54.181&SecurityKey=20241028180731&promotionId=&mvid=2201057821&mcid=500020&playurlVersion=WX-A1-7.10.1-RELEASE&userid=&jmhm=&videocodec=h264&bean=mgsph5&puData=58afeec0dc56dce3856ccc67f9242322")
// console.log("款式大方寄快递设计费",q)
// }
module.exports = {
    real_url
}