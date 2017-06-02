! function(t, e) { 
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && (define.amd || define.cmd) ? define([], e) : "object" == typeof exports ? exports.G2 = e() : t.G2 = e() }(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = { exports: {}, id: r, loaded: !1 };
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0) }(function(t) {
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
                case "function":
                    break;
                case "object":
                    t[e] = function(e) {
                        var n = e.slice(1),
                            r = t[e[0]];
                        return function(t, e, i) { r.apply(this, [t, e, i].concat(n)) } }(t[e]);
                    break;
                default:
                    t[e] = t[t[e]] }
            return t }([function(t, e, n) { "use strict";
            var r = {};
            r.Chart = n(264), r.Util = n(1), r.Global = n(6), r.Stat = n(30), r.Stat.map = n(155), r.Stat.tree = n(179), r.Stat.treemap = n(182), r.Scale = n(19), r.Shape = n(58), r.Frame = n(2), r.Theme = n(45), r.Canvas = n(11), r.Coord = n(71), r.Base = n(26), r.ColorCalculate = n(59), r.Plugin = {}, t.exports = r }, function(t, e, n) {
            var r = n(225);
            t.exports = r }, function(t, e, n) {
            var r = n(90);
            n(310), t.exports = r }, function(t, e, n) {
            var r = { Matrix3: n(161), Vector2: n(162), Vector3: n(163) };
            t.exports = r }, function(t, e, n) {
            var r = n(160);
            t.exports = r }, function(t, e, n) { "use strict";
            var r = n(1);
            t.exports = r }, function(t, e, n) { "use strict";

            function r(t) { t = t || 0, t = 100 * t;
                var e = 2;
                return t > 0 && t < .01 && (e = (1 / t + "").indexOf(".") + 1), t.toFixed(e) + "%" }

            function i(t) {
                for (var e in c) c.hasOwnProperty(e) && delete c[e];
                var n;
                n = s.isObject(t) ? t : s.indexOf(u, t) !== -1 ? o[t] : o["default"], s.mix(!0, c, a, n), c.setTheme = i }
            var a, s = n(1),
                o = n(307),
                u = ["default", "dark", "cheery"],
                c = {};
            a = { animate: !0, percentFormat: r, widthRatio: { column: .5, rose: .9999999, multiplePie: 1 / 1.3 }, scales: { "..x": { type: "linear", min: 0, nice: !1 }, "..y": { type: "linear", min: 0, nice: !1 }, "..level": { type: "linear", min: 0, nice: !1 }, "..value": { type: "linear", min: 0 }, "..count": { type: "linear", min: 0, alias: "count" }, "..percent": { type: "linear", min: 0, max: 1, alias: "percent", formatter: r }, "..proportion": { type: "linear", min: 0, max: 1, alias: "proportion", formatter: r }, "..density": { type: "linear", min: 0, alias: "density" }, "..long": { type: "linear", alias: "longitude", nice: !1 }, "..lant": { type: "linear", alias: "latitude", nice: !1 }, "..pieX": { type: "cat", values: ["..pieX"], ticks: ["..pieX"] } }, connectNulls: !1, heatmapColors: "rgb(125,125,248)-rgb(0,0,255)-rgb(0,255,0)-yellow-rgb(255,0,0)", heatmap: { radius: 50 } }, i("default"), t.exports = c }, function(t, e, n) { "use strict";
            var r = n(82),
                i = n(56),
                a = n(55),
                s = n(54),
                o = n(3);
            n(1), o.Vector2;
            t.exports = { line: function(t, e, n, i, a, s, o) {
                    var u = r.box(t, e, n, i, a);
                    if (!this.box(u.minX, u.maxX, u.minY, u.maxY, s, o)) return !1;
                    var c = r.pointDistance(t, e, n, i, s, o);
                    return !isNaN(c) && c <= a / 2 }, polyline: function(t, e, n, r) {
                    var i = this,
                        a = t.length - 1;
                    if (a < 1) return !1;
                    for (var s = 0; s < a; s++) {
                        var o = t[s][0],
                            u = t[s][1],
                            c = t[s + 1][0],
                            l = t[s + 1][1];
                        if (i.line(o, u, c, l, e, n, r)) return !0 }
                    return !1 }, cubicline: function(t, e, n, r, i, s, o, u, c, l, h) {
                    return a.pointDistance(t, e, n, r, i, s, o, u, l, h) <= c / 2 }, quadraticline: function(t, e, n, r, a, s, o, u, c) {
                    return i.pointDistance(t, e, n, r, a, s, u, c) <= o / 2 }, arcline: function(t, e, n, r, i, a, o, u, c) {
                    return s.pointDistance(t, e, n, r, i, a, u, c) <= o / 2 }, rect: function(t, e, n, r, i, a) {
                    return t <= i && i <= t + n && e <= a && a <= e + r }, circle: function(t, e, n, r, i) {
                    return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2) }, box: function(t, e, n, r, i, a) {
                    return t <= i && i <= e && n <= a && a <= r } } }, function(t, e, n) { "use strict";
            var r = n(5),
                i = n(79),
                a = n(3),
                s = n(7),
                o = a.Vector3,
                u = function(t) { u.superclass.constructor.call(this, t) };
            u.ATTRS = { fillOpacity: 1, strokeOpacity: 1 }, r.extend(u, i), r.augment(u, { isShape: !0, createPath: function() {}, drawInner: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.attr("lineWidth");
                    t.createPath(), t.hasFill() && e.fill(), t.hasStroke() && n > 0 && e.stroke() }, isPointInPath: function(t, e) {
                    return !1 }, isHit: function(t, e) {
                    var n = this,
                        r = n.get("canvas"),
                        i = new o(t, e, 1);
                    n.invert(i, r);
                    var a = n.getBBox();
                    if (a && s.box(a.minX, a.maxX, a.minY, a.maxY, i.x, i.y)) {
                        var u = n.__attrs.clip;
                        if (!u) return n.isPointInPath(i.x, i.y);
                        if (u.inside(t, e)) return n.isPointInPath(i.x, i.y) }
                    return !1 }, getBBox: function() {
                    return this.get("box") } }), t.exports = u }, function(t, e, n) { "use strict";
            var r = n(16),
                i = n(1),
                a = n(144),
                s = (n(3), n(128)),
                o = n(127),
                u = n(123),
                c = (r.G, { radius: "r", "font-size": "fontSize", "stroke-width": "lineWidth", "text-anchor": "textAlign", "font-weight": "fontWeight", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", horizontalAlign: "textAlign", verticalAlign: "textBaseline" });
            i.mix(i, { isPositiveNum: function(t) {
                    var e = /^[0-9]*[1-9][0-9]*$/;
                    return e.test(t) }, adapAttrs: function(t) { i.each(t, function(e, n) {
                        var r = i.adapAttr(n, e);
                        r && (t[r.name] = r.value) }) }, adapAttr: function(t, e) {
                    var n, r = c[t];
                    return r && (n = {}, "font-size" === t ? e = parseInt(e) : "text-anchor" === t && (e = "start" === e ? "left" : "middle" === e ? "center" : "right"), n.name = r, n.value = e), n }, merge: function(t, e) {
                    if (e) {
                        if (i.isObject(e)) {
                            var n = {};
                            return i.mix(n, t, e), n }
                        return e }
                    return t }, getRatio: function() {
                    return window.devicePixelRatio ? window.devicePixelRatio : 2 }, mixXY: function(t, e) {
                    var n = { x: e.get("x"), y: e.get("y") };
                    t.x ? t.x += n.x : t.x = n.x, t.y ? t.y += n.y : t.y = n.y }, getWidth: function(t) {
                    var e = i.getStyle(t, "width");
                    return "auto" === e && (e = t.offsetWidth), parseFloat(e) }, getHeight: function(t) {
                    var e = i.getStyle(t, "height");
                    return "auto" === e && (e = t.offsetHeight), parseFloat(e) }, getOuterHeight: function(t) {
                    var e = i.getHeight(t),
                        n = parseFloat(i.getStyle(t, "borderTopWidth")) || 0,
                        r = parseFloat(i.getStyle(t, "paddingTop")),
                        a = parseFloat(i.getStyle(t, "paddingBottom")),
                        s = parseFloat(i.getStyle(t, "borderBottomWidth")) || 0;
                    return e + n + s + r + a }, parsePathArray: function(t) {
                    return s.parsePathArray(t) }, path2Absolute: function(t) {
                    return s.path2Absolute(t) }, parsePathString: function(t) {
                    return s.parsePathString(t) }, animPath: function(t, e, n, r, a, s) {
                    if (i.vml) return void after();
                    if (n = n || 0, r = r || 400, !e) return void after();
                    var o, u = t.attr("path"),
                        c = i.parsePathString(e),
                        l = u.slice(n * -1);
                    if (u.length > c.length) o = u.slice(0, c.length);
                    else if (o = u.concat([]), n)
                        for (var h = o.length; h < c.length; h++) o = o.concat(l);
                    t.animate({ path: c }, r, a, s) }, animate: function(t, e, n, r, s) {
                    function c() {
                        var e, o, l, h, y, _ = +new Date,
                            S = _ - g,
                            w = {},
                            b = t.get("canvas");
                        f = S / n, f = f <= 0 ? 0 : f >= 1 ? 1 : f, f = u[r](f);
                        for (y in p)
                            if (d[y] != p[y])
                                if ("path" === y) { o = i.parsePathString(p[y]), l = i.parsePathString(d[y]), w[y] = [];
                                    for (var M = 0; M < o.length; M++) {
                                        for (var A = o[M], C = l[M], k = [], P = 0; P < A.length; P++) i.isNumeric(A[P]) ? (h = a.interpolation(A[P], C[P]), k.push(h(f))) : k.push(A[P]);
                                        w[y].push(k) } } else h = a.interpolation(d[y], p[y]), w[y] = h(f);
                        if (v) {
                            var T = a.interpolation(x, v),
                                e = T(f);
                            t.setMatrix(e) }
                        t.attr(w), b.draw(), i.requestAnimationFrame(function() {
                            if (m === t.get("animCount") && t.get("animable"))
                                if (f >= 0 && f < 1) c();
                                else if (f >= 1) return s && s() }) }

                    function l(e) {
                        var n, r = { M: null, attrs: {} };
                        for (n in e) "transform" === n ? r.M = o.transform(t.getMatrix(), e[n]) : "matrix" === n ? r.M = e[n] : r.attrs[n] = e[n];
                        return r }

                    function h(e) {
                        var n, r = {};
                        for (n in e) r[n] = t.attr(n);
                        return r }
                    var f, g = +new Date,
                        l = l(e),
                        p = l.attrs,
                        v = l.M,
                        d = h(p),
                        x = t.getMatrix().clone(),
                        m = t.get("animCount");
                    r = r ? r : "linear", setTimeout(function() { m === t.get("animCount") && c() }, 6) } }), i.MatrixUtil = o, t.exports = i }, function(t, e, n) { "use strict";
            var r = n(31),
                i = n(1),
                a = n(2),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, r), i.augment(s, { type: "summary", getStatDims: function() {
                    var t = this,
                        e = t.getDims(),
                        n = e.length,
                        r = [e[n - 1]];
                    return r }, getGroupCondition: function() {
                    var t, e = this,
                        n = e.getDims(),
                        r = n.length,
                        a = [];
                    return r > 1 && (a = n.slice(0, r - 1), t = []), i.each(a, function(e) { 0 !== e.indexOf("..") && t.push(e) }), t }, groupFrames: function(t) {
                    var e, n = this,
                        r = n.getGroupCondition();
                    return e = r ? a.group(t, r) : [t] }, transformGroup: function(t, e) {
                    var n = this,
                        r = [];
                    return i.each(t, function(t) { r.push(n.transform(t, e)) }), r }, execFrame: function(t) {
                    var e = this,
                        n = e.getStatDims()[0],
                        r = e.groupFrames(t),
                        i = e.transformGroup(r, n),
                        s = a.merge.apply(null, i);
                    return s }, transform: function(t) {
                    return t } }), t.exports = s }, function(t, e, n) {
            var r = n(109),
                i = n(12),
                a = n(16);
            r.G = a.G, r.Components = n(114), r.Group = i.GroupBase, r.Shape = {}, r.Shape.Marker = i.Marker, r.Util = n(9), r.Matrix = n(3), t.exports = r }, function(t, e, n) { t.exports = { GMixin: n(124), GroupBase: n(70), GroupMixin: n(125), Marker: n(126) } }, function(t, e) { "use strict";
            var n = { prefix: "g", backupContext: function() {
                    return document.createElement("canvas").getContext("2d") }(), debug: !1, warn: function(t) {} };
            t.exports = n }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(53),
                a = function(t) { a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { regressionType: "base", isRegression: !0, getRegressionString: function() {
                    return "" }, execSmooth: function(t) {
                    return t } }), t.exports = a }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(26),
                a = n(11).Matrix,
                s = a.Matrix3,
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { easing: "easeInOutQuad", duration: 1e3, callback: null, group: null, rect: null, before: null }, r.extend(o, i), r.augment(o, { start: function() {
                    return this.startAnimate(), this }, startAnimate: function() {
                    var t = this.getTarget(),
                        e = this.get("group");
                    this.set("originMatrix", e.getMatrix().clone()), this.set("rect", this.getAnimRect()), this.set("target", t), this.beforeAnimate(t), this.execAnimate(t) }, beforeAnimate: function(t) {
                    var e = this.getInitMatrix(),
                        n = this.getInitAttrs(),
                        r = this.get("originMatrix");
                    e = s.multiply(r, e), t.setMatrix(e), t.attr(n) }, execAnimate: function(t) {
                    var e, n = this,
                        i = n.get("before"),
                        a = n.get("callback"),
                        o = n.get("duration"),
                        u = n.get("easing"),
                        c = n.getEndAttrs(),
                        l = n.get("originMatrix"),
                        h = n.getEndMatrix();
                    h = s.multiply(l, h), e = r.mix({}, c, { matrix: h }), t.animate(e, o, u, function() { a && a(), n.afterAnimate(t) }), i && i() }, afterAnimate: function(t) {
                    var e = this.get("group"),
                        n = e.get("canvas");
                    return e == t || (e.attr("clip", !1), void n.draw()) }, getTarget: function() {
                    return this.get("group") }, getInitMatrix: function() {
                    return new s }, getInitAttrs: function() {
                    return {} }, getEndMatrix: function() {
                    return new s }, getEndAttrs: function() {
                    return {} }, getAnimRect: function() {
                    var t = this.get("rect"),
                        e = this.get("group");
                    return t || (t = e.getBBBox()), t }, getCircleInfo: function() {
                    var t = this.get("rect"),
                        e = this.get("circle"),
                        n = this.getRectCenter(t),
                        r = Math.min(t.width, t.height) / 2;
                    return e || (e = { center: n, r: r }), e }, getRectCenter: function(t) {
                    return { x: t.x + t.width / 2, y: t.y + t.height / 2 } }, stop: function() {
                    return this.stopAnimate(), this }, stopAnimate: function() {
                    var t = this.getTarget();
                    t && t.stopAnimate() } }), t.exports = o }, function(t, e, n) {
            var r = n(106),
                i = n(63);
            r.G = n(21), r.Util = n(27), r.Group = i.GroupBase, t.exports = r }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = function(t) { r.mix(this, t), this._init() };
            a.prototype = { type: "base", names: null, scales: [], callback: null, scaleCache: null, _init: function() {
                    for (var t = this, e = t.names || [this.type], n = t.scales, r = {}, i = 0; i < n.length; i++) {
                        var a = n[i],
                            s = e[i] || this.type + i;
                        r[s] = a }
                    t.scaleCache = r }, _execCallback: function(t) {
                    var e = this,
                        n = e.callback,
                        i = e.getNames(),
                        a = [],
                        s = {};
                    r.each(i, function(n) {
                        var r = e.getScale(n);
                        a.push(r.invert(t[n])) });
                    var o = n.apply(null, a);
                    return r.isArray(o) || (o = [o]), r.each(i, function(t, e) {
                        var n = o[e];
                        r.isNull(n) || (s[t] = n) }), s }, mapping: function(t) {
                    var e = this;
                    return t = t.toJSON(), r.each(t, function(n, i) {
                        var a = e.getMappedRecord(n);
                        t[i] = r.mix(n, a) }), t = new i(t) }, getMappedRecord: function(t) {
                    var e, n = this;
                    return e = n.callback ? n._execCallback(t) : n.mappingRecord(t) }, getNames: function() {
                    var t = this.scaleCache,
                        e = [];
                    return r.each(t, function(t, n) { e.push(n) }), e }, getDims: function() {
                    var t = this.scales,
                        e = [];
                    return r.each(t, function(t) { e.push(t.dim) }), e }, getScale: function(t) {
                    return this.scaleCache[t] }, getScales: function() {
                    return this.scales }, getMappingValue: function() {
                    var t, e = this,
                        n = e.getNames(),
                        i = r.toArray(arguments);
                    if (e.callback) {
                        var a = [];
                        r.each(i, function(t, r) {
                            var i = n[r],
                                s = e.getScale(i);
                            if (s) {
                                var o = s.invert(t);
                                a.push(o) } }), t = e.callback.apply(e, a) } else t = e.getValue.apply(e, i);
                    return t }, getValue: function(t) {
                    return t }, mappingRecord: function(t) {
                    return t } }, t.exports = a }, function(t, e, n) { "use strict";
            var r = n(1),
                i = ["min", "max"],
                a = function(t) { r.mix(this, t) };
            r.augment(a, { xScale: null, yScale: null, cfg: {}, parsePoint: function(t, e) {
                    var n = this,
                        a = n.xScale,
                        s = n.yScale,
                        o = e[0],
                        u = e[1];
                    return a && (o = r.indexOf(i, o) !== -1 ? a.scale(a[o]) : a.scale(o)), s && (u = r.indexOf(i, u) !== -1 ? s.scale(s[u]) : s.scale(u)), t.convert({ x: o, y: u }) }, paint: function() {} }), t.exports = a }, function(t, e, n) {
            var r = n(1),
                i = n(42);
            i.Linear = n(41), i.linear = function(t) {
                return new i.Linear(t) }, i.Cat = n(29), i.cat = function(t) {
                return new i.Cat(t) }, i.Pow = n(174), i.pow = function(t) {
                return new i.Pow(t) }, i.Log = n(172), i.log = function(t) {
                return new i.Log(t) }, i.Identity = n(171), i.I = function(t) {
                return new i.Identity(t) }, i.Time = n(176), i.time = function(t) {
                return new i.Time(t) }, i.NumberCat = n(173), i.numberCat = function(t) {
                return new i.NumberCat(t) }, i.TimeCat = n(175), i.timeCat = function(t) {
                return new i.TimeCat(t) }, i.Condition = n(169), i.condition = function(t) {
                return new i.Condition(t) }, i.Group = n(170), i.group = function(t) {
                return new i.Group(t) }, i.I_TYPE = "identity", i.isCategory = function(t) {
                if ("cat" === t) return !0;
                var e = r.ucfirst(t);
                return !(!i[e] || !i[e].superclass || "cat" !== i[e].superclass.type) }, t.exports = i }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(199),
                a = { getRegressionString: function() {
                        return this.regressionStr }, getRegression: function() {
                        return { equation: [], string: "" } }, execSmooth: function(t, e) {
                        var n = this,
                            a = n.getRegression(t),
                            s = a.equation;
                        this.regressionStr = a.string;
                        var o = [];
                        return r.each(e, function(t) {
                            var e = t,
                                r = i.execFnction(n.regressionType, s, e);
                            o.push([e, r]) }), o } };
            t.exports = a }, function(t, e, n) {
            var r = n(13),
                i = { Canvas: n(230), Group: n(80), Shape: n(8), Rect: n(245), Circle: n(234), Ellipse: n(236), Path: n(241), Text: n(246), Line: n(239), Image: n(238), Polygon: n(242), Polyline: n(243), Arc: n(233), Fan: n(237), Cubic: n(235), Quadratic: n(244), debug: function(t) { r.debug = t } };
            t.exports = i }, function(t, e, n) { "use strict";

            function r(t) {
                return t.binWidth || t.bandWidth }
            var i = n(1),
                a = n(26),
                s = n(277),
                o = n(282),
                u = n(284),
                c = n(286),
                l = n(287),
                h = n(285),
                f = n(288),
                g = n(271),
                p = n(6),
                v = ["size", "shape", "color"],
                d = function x(t) { x.superclass.constructor.call(this, t), this._init() };
            d.ATTRS = { chart: null, attrs: null, stats: null, scales: null, multipleActive: !1, shareTooltip: !0, shapeStyle: null, animate: p.animate }, i.extend(d, a), i.mixin(d, [f, h, l, u, c]), i.augment(d, { _init: function() {
                    var t = this.get("chart"),
                        e = t.get("plotContainer"),
                        n = e.addGroup({ zIndex: 10 });
                    this.set("container", n) }, getBinStat: function(t) {
                    var e = null;
                    if (r(t)) e = t;
                    else if (t.stat) {
                        for (var n = t.stat; n && !r(n);) n = n.stat;
                        n && r(n) && (e = n) }
                    return e }, _addLabels: function(t) {
                    var e = this,
                        n = e.get("container"),
                        r = [],
                        a = e.get("coord"),
                        s = e.getAttr("label"),
                        u = o.getLabelsClass(a.type, e.get("type")),
                        c = s.cfg,
                        l = n.addGroup(u, { labelsCfg: c, coord: a, geom: e, geomType: e.get("type") });
                    i.each(t, function(t) { r = r.concat(t.toJSON()) }), l.showLabels(r) }, _draw: function(t) {
                    var e = this,
                        n = [];
                    return t = e.framePreprocess(t), t = e.normalizeFrames(t), t = e.getShapePoints(t), t = e.execMapping(t), e.set("frames", t), i.each(t, function(t, r) { t.index = r, e.drawFrame(t), n.push(t) }), e._afterDraw(), n }, _afterDraw: function() {
                    var t = this,
                        e = t.get("group"),
                        n = t.get("shapeStyle");
                    if (n) {
                        var r = e.get("children");
                        i.each(r, function(t) { t.attr(n) }) } }, getDefaultValue: function(t) {
                    var e = this,
                        n = e.get(t),
                        r = e.getAttr(t);
                    if (r) {
                        var i = r.getScale(t); "identity" === i.type && (n = i.value) }
                    return n }, getAttr: function(t) {
                    var e = this,
                        n = e.get("attrs"),
                        r = null;
                    return i.each(n, function(e) {
                        if (e.type === t) return r = e, !1 }), r }, getLegendAttr: function() {
                    var t = this,
                        e = t.get("attrs"),
                        n = [];
                    return i.each(e, function(t) { i.indexOf(v, t.type) !== -1 && n.push(t) }), n }, getXDim: function() {
                    var t = this.getXScale();
                    return t.dim }, getYDim: function() {
                    var t = this.getYScale();
                    return t ? t.dim : "y" }, getXScale: function() {
                    return this.getAttr("position").getScale("x") }, getYScale: function() {
                    return this.getAttr("position").getScale("y") }, getScales: function() {
                    return this.get("scales") }, getMinYPercent: function() {
                    var t = this,
                        e = t.getYScale(),
                        n = 0;
                    return e && void 0 !== e.min && e.min < 0 && (n = e.scale(0)), n }, getPositionScales: function() {
                    return this.getAttr("position").getScales() }, isShareTooltip: function() {
                    return !!this.getYScale() && this.get("shareTooltip") }, isInCircle: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.isPolar;
                    return n }, getGroup: function(t) {
                    var e = this,
                        n = e.get("container"),
                        r = n.get("children"),
                        a = null;
                    return 1 === r.length ? a = r[0] : i.each(r, function(e) {
                        if (e.get("coord") === t) return a = e, !1 }), a }, paint: function(t, e, n) {
                    function r() {
                        var r = a._draw(e);
                        n && n(t, r), a.getAttr("label") && a._addLabels(r) }
                    var a = this;
                    if ("map" === t.type) {
                        var o = a.get("scales"),
                            u = o["..long"],
                            c = o["..lant"];
                        t.set("originMin", [u.min, c.min]), t.set("originMax", [u.max, c.max]) }
                    a.set("coord", t);
                    var l = a.get("container"),
                        h = l.addGroup(g, { geom: a, coord: t, multipleActive: a.isShareTooltip(), capture: !1 });
                    h.setMatrix(t.get("matrix").clone()), a.set("group", h);
                    var f = a.get("chart"),
                        p = f.get("animate");
                    if (p = i.isNull(p) ? a.get("animate") : p) {
                        var v = s.getDefault({ geom: a, fn: function() { r() } });
                        v.start() } else r();
                    return a }, destroy: function() {
                    var t = this.get("container");
                    t.clear(), t.remove(), this._attrs = {}, this.events = {} } }), t.exports = d }, function(t, e, n) { "use strict";
            var r = n(1),
                i = { defaultShapeType: null, getShape: function(t) {
                        var e = this,
                            n = e[t] || e[e.defaultShapeType];
                        if (n) return n;
                        throw new Error("not support this shape") }, getShapePoints: function(t, e) {
                        var n = this.getShape(e);
                        return n.getShapePoints(t) }, getShapeCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getShapeCfg(e) }, getMarkerCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getMarkerCfg(e) }, getActiveCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getActiveCfg(e) }, getSelectedCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getActiveCfg(e) } },
                a = { getShapePoints: function(t) {
                        return t }, getShapeCfg: function() {
                        return {} }, getMarkerCfg: function() {
                        return null }, getActiveCfg: function() {
                        return null }, getSelectedCfg: function() {
                        return null } },
                s = {};
            s.registGeom = function(t, e) {
                var n = r.ucfirst(t),
                    a = r.mix({}, i, e);
                return s[n] = a, a }, s.registShape = function(t, e, n) {
                var i = r.ucfirst(t),
                    o = s[i],
                    u = r.mix({}, a, n);
                return o[e] = u, u }, t.exports = s }, function(t, e, n) { "use strict";

            function r(t, e, n) {
                if (!t.length) return "";
                var r = "",
                    i = "";
                t.length <= 2 && (n = !1);
                for (var a = 0, s = t.length; a < s; a++) {
                    var o = t[a];
                    i = 0 === a ? n ? "M{x} {y} R" : "M{x} {y}" : n ? " {x} {y}" : "L{x} {y}", r += u.substitute(i, o) }
                return e && (r += "Z"), r }

            function i(t, e) {
                var n = t.getCenter(),
                    r = Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
                return r }

            function a(t, e) {
                for (var n = t.length, r = [t[0]], i = 1; i < n; i += 2) {
                    var a = e.convertPoint({ x: t[i], y: t[i + 1] });
                    r.push(a.x, a.y) }
                return r }

            function s(t, e, n) {
                var r = n.getRadius(),
                    a = n.get("inner") || 0,
                    s = a * r,
                    o = n.isTransposed,
                    u = n.get("startAngle"),
                    c = n.get("endAngle"),
                    l = { x: t[1], y: t[2] },
                    h = { x: e[1], y: e[2] },
                    f = [];
                s = s || 0;
                var g = o ? "y" : "x",
                    p = Math.abs(h[g] - l[g]) * (c - u),
                    v = h[g] >= l[g] ? 1 : 0,
                    d = p > Math.PI ? 1 : 0,
                    x = n.convertPoint(h),
                    m = i(n, x);
                if (p === 2 * Math.PI) {
                    if (m >= .5) {
                        var y = { x: (h.x + l.x) / 2, y: (h.y + l.y) / 2 },
                            _ = n.convertPoint(y);
                        f.push(["A", m, m, 0, d, v, _.x, _.y]), f.push(["A", m, m, 0, d, v, x.x, x.y]) } } else f.push(["A", m, m, 0, d, v, x.x, x.y]);
                return f }

            function o(t) { u.each(t, function(e, n) {
                    var r = e;
                    if ("a" === r[0].toLowerCase()) {
                        var i = t[n - 1],
                            a = t[n + 1];
                        a && "a" === a[0].toLowerCase() ? i && "l" === i[0].toLowerCase() && (i[0] = "M") : i && "a" === i[0].toLowerCase() && a && "l" === a[0].toLowerCase() && (a[0] = "M") } }) }
            var u = n(1),
                c = n(177),
                l = { getLinePath: function(t, e, n) {
                        return r(t, e, n) }, getSplinePath: function(t, e, n) {
                        var r = [],
                            i = t[0],
                            a = null;
                        u.each(t, function(t) { a && a.x === t.x && a.y === t.y || (r.push(t.x), r.push(t.y), a = t) });
                        var s = n.get("start"),
                            o = n.get("end"),
                            l = [
                                [s.x, o.y],
                                [o.x, s.y]
                            ],
                            h = c.catmullRom2bezier(r, e, l);
                        return "M" + i.x + " " + i.y + u.parsePathArray(h) }, splitPoints: function(t, e) {
                        if (!t.length) return [];
                        var n = [],
                            r = [];
                        e = e || "y";
                        var i = t.length;
                        return u.each(t, function(t, a) {
                            var s = t[e];
                            u.isArray(s) && u.isNull(s[0]) || u.isNull(s) ? a !== i - 1 && (r.length > 0 && n.push(r), r = []) : r.push(t) }), n.push(r), n }, getPointRadius: function(t, e) {
                        var n = i(t, e);
                        return n }, getPointAngle: function(t, e) {
                        var n = t.getCenter(),
                            r = Math.atan2(e.y - n.y, e.x - n.x);
                        return r }, convertNormalPath: function(t, e) {
                        var n = [];
                        return u.each(t, function(t) {
                            var r = t[0];
                            switch (r.toLowerCase()) {
                                case "m":
                                case "l":
                                case "c":
                                    n.push(a(t, e));
                                    break;
                                case "z":
                                default:
                                    n.push(t) } }), n }, convertPolarPath: function(t, e) {
                        var n = [];
                        return u.each(t, function(r, i) {
                            var o = r[0];
                            switch (o.toLowerCase()) {
                                case "m":
                                case "c":
                                    n.push(a(r, e));
                                    break;
                                case "l":
                                    var u = t[i - 1],
                                        c = r,
                                        l = e.isTransposed,
                                        h = l ? u[1] === c[1] : u[2] === c[2];
                                    h ? n = n.concat(s(u, c, e)) : n.push(a(r, e));
                                    break;
                                case "z":
                                default:
                                    n.push(r) } }), o(n), n } };
            t.exports = l }, function(t, e, n) { t.exports = n(311) }, function(t, e, n) {
            var r = n(105);
            t.exports = r }, function(t, e, n) { "use strict";
            var r = n(21),
                i = n(1),
                a = r.Shape.superclass.constructor,
                s = document.createElement("table"),
                o = document.createElement("tr"),
                u = /^\s*<(\w+|!)[^>]*>/,
                c = { tr: document.createElement("tbody"), tbody: s, thead: s, tfoot: s, td: o, th: o, "*": document.createElement("div") };
            i.mix(i, { getBoundingClientRect: function(t) {
                    var e = t.getBoundingClientRect(),
                        n = document.documentElement.clientTop,
                        r = document.documentElement.clientLeft;
                    return { top: e.top - n, bottom: e.bottom - n, left: e.left - r, right: e.right - r } }, upperFirst: function(t) {
                    return t.replace(/(\w)/, function(t) {
                        return t.toUpperCase() }) }, getStyle: function(t, e) {
                    return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e] }, modiCSS: function(t, e) {
                    var n;
                    for (n in e) t.style[n] = e[n];
                    return t }, getRatio: function() {
                    return window.devicePixelRatio ? window.devicePixelRatio : 1 }, initClassCfgs: function(t) {
                    if (!t.__cfg && t !== a) {
                        var e = t.superclass.constructor;
                        e && !e.__cfg && i.initClassCfgs(e), t.__cfg = {}, i.mix(!0, t.__cfg, e.__cfg), i.mix(!0, t.__cfg, t.CFG) } }, mixin: function(t, e) {
                    var n = t.CFG ? "CFG" : "ATTRS";
                    if (t && e) { t._mixins = e, t[n] = t[n] || {};
                        var r = {};
                        i.each(e, function(e) { i.augment(t, e);
                            var a = e[n];
                            a && i.mix(r, a) }), t[n] = i.mix(r, t[n]) } }, createDom: function(t) {
                    var e = u.test(t) && RegExp.$1;
                    e in c || (e = "*");
                    var n = c[e];
                    return t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t, n.childNodes[0] } }), t.exports = i }, function(t, e, n) { "use strict";
            var r = n(30),
                i = n(1),
                a = n(2),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, r), i.augment(s, { type: "map", mapData: {}, initDims: function(t) {
                    var e = t[0],
                        n = t.slice(1);
                    t = n.concat([e]), t.unshift("..lant"), t.unshift("..long"), this.dims = t }, getStatDims: function() {
                    var t = this.getDims(),
                        e = t.filter(function(t) {
                            return t.indexOf("..") > -1 });
                    return e }, execFrame: function(t) {
                    var e = this,
                        n = e.getStatDims(),
                        r = [];
                    return t = t.toJSON(), i.each(t, function(t) { r.push(e.addGeoInfo(t, n)) }), new a(r) }, addGeoInfo: function(t) {
                    return t } }), t.exports = s }, function(t, e, n) { "use strict";
            var r = n(42),
                i = n(1),
                a = n(35),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, r), i.augment(s, { type: "cat", tickCount: null, isCategory: !0, init: function() {
                    var t = this,
                        e = t.values,
                        n = t.tickCount;
                    if (i.each(e, function(t, n) { e[n] = t.toString() }), !t.ticks) {
                        var r = e;
                        if (n) {
                            var s = a.Category.caculate({ maxCount: n, data: e });
                            r = s.ticks }
                        this.ticks = r } }, getText: function(t) {
                    return this.values.indexOf(t) > -1 ? t = t : i.isNumber(t) && (t = this.values[Math.round(t)]), s.superclass.getText.call(this, t) }, translate: function(t) {
                    var e = this.values.indexOf(t);
                    return e === -1 && i.isNumber(t) ? e = t : e === -1 && (e = NaN), e }, scale: function(t) {
                    var e, n = this.rangeMin(),
                        r = this.rangeMax();
                    return (i.isString(t) || this.values.indexOf(t) !== -1) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, n + e * (r - n) }, invert: function(t) {
                    if (i.isString(t)) return t;
                    var e = this.rangeMin(),
                        n = this.rangeMax();
                    t < e && (t = e), t > n && (t = n);
                    var r = (t - e) / (n - e),
                        a = Math.round(r * (this.values.length - 1)) % this.values.length;
                    return a = a || 0, this.values[a] } }), t.exports = s }, function(t, e, n) {
            var r = n(31);
            r.summary = n(210), r.bin = n(186), r.smooth = n(200), r.density = n(190), r.region = n(193);
            var i = n(2);
            i.execStat = function(t, e) { e.init();
                var n = e.exec([t]);
                return i.merge.apply(null, n) }, t.exports = r }, function(t, e, n) { "use strict";
            var r = n(1),
                i = function(t) { r.mix(this, t) };
            r.augment(i, { isStat: !0, initDims: function() {}, getDims: function() {
                    return this.dims }, getStatDims: function() {
                    return this.getDims() }, init: function() {
                    var t = this,
                        e = t.dims;
                    if (r.isString(e) && (e = e.split("*"), t.dims = e), e && e.isStat) {
                        var n = e;
                        n.init(), t.stat = n, e = n.dims, t.dims = e }
                    e || (e = [], t.dims = e), t.initDims(e) }, preExecute: function() {}, exec: function(t) {
                    var e = this;
                    e.preExecute(t);
                    var n = [];
                    return this.stat && (t = this.stat.exec(t)), r.each(t, function(i) {
                        var a = e.execFrame(i, t);
                        r.isArray(a) ? n = n.concat(a) : n.push(a) }), n }, execFrame: function(t) {
                    return t } }), t.exports = i }, function(t, e, n) {
            function r(t, e, n, r) { s(t, a(e, n, r)) }

            function i(t, e, n) {
                var r = n / Math.sin(c);
                return t.setLength(r / 2), e.sub(t), e }

            function a(t, e, n) {
                var r = new u(1, 0).angleTo(t),
                    i = r - c,
                    a = r + c,
                    s = 6 + 3 * n;
                return [{ x: e.x - s * Math.cos(i), y: e.y - s * Math.sin(i) }, e, { x: e.x - s * Math.cos(a), y: e.y - s * Math.sin(a) }] }

            function s(t, e) { t.moveTo(e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y), t.lineTo(e[2].x, e[2].y) }
            var o = n(3),
                u = (n(4), n(1), o.Vector2),
                c = Math.PI / 6;
            t.exports = { makeArrow: r, getEndPoint: i } }, function(t, e, n) { "use strict";
            var r = n(1),
                i = function(t) { r.mix(this, t) };
            r.augment(i, { xValue: null, yValue: null, region: null, frame: null }), t.exports = i }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = 0,
                s = function(t) { r.mix(this, t) };
            r.augment(s, { xDim: null, yDim: null, adjustNames: ["x", "y"], isAdjust: function(t) {
                    return r.inArray(this.adjustNames, t) }, processAdjust: function(t) {
                    var e = this,
                        n = i.merge.apply(null, t);
                    return e.adjFrames = t, e.mergeFrame = n, t = e.adjustFrames(t, n), e.adjFrames = null, e.mergeFrame = null, t }, _getDimValues: function(t) {
                    var e = this,
                        n = {},
                        s = [];
                    if (e.xDim && e.isAdjust("x") && s.push(e.xDim), e.yDim && e.isAdjust("y") && s.push(e.yDim), r.each(s, function(e) {
                            var r = i.values(t, e);
                            r.sort(function(t, e) {
                                return t - e }), n[e] = r }), !e.yDim && e.isAdjust("y")) {
                        var o = "y",
                            u = [a, 1];
                        n[o] = u }
                    return n }, adjustFrames: function(t, e) {
                    var n = this,
                        a = [],
                        s = n._getDimValues(e);
                    return r.each(t, function(e, o) {
                        var u = e.toJSON();
                        r.each(s, function(e, r) { n.adjustDim(r, e, u, t.length, o) }), a.push(new i(u)) }), a }, adjustDim: function(t, e, n) {
                    return new i(n) }, getAdjustRange: function(t, e, n) {
                    var i, a, s = this,
                        o = r.indexOf(n, e),
                        u = n.length;
                    return !s.yDim && s.isAdjust("y") ? (i = 0, a = 1) : u > 1 ? (i = 0 === o ? n[0] : n[o - 1], a = o === u - 1 ? n[u - 1] : n[o + 1], 0 !== o ? i += (e - i) / 2 : i -= (a - e) / 2, o !== u - 1 ? a -= (a - e) / 2 : a += (e - n[u - 2]) / 2) : (i = 0 === e ? 0 : e - .5, a = 0 === e ? 1 : e + .5), { pre: i, next: a } }, groupData: function(t, e) {
                    var n = {};
                    return r.each(t, function(t) {
                        var r = t[e];
                        void 0 === r && (r = t[e] = a), n[r] || (n[r] = []), n[r].push(t) }), n } }), t.exports = s }, function(t, e, n) {
            var r = n(104);
            t.exports = r }, function(t, e, n) { t.exports = n(129) }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(3),
                a = i.Matrix3,
                s = i.Vector3,
                o = function(t) { this._attrs = {}, this._attrs.matrix = new a, r.mix(this._attrs, o.ATTRS, t), this.init() };
            r.augment(o, { isTransposed: !1, set: function(t, e) {
                    return this._attrs[t] = e, this }, get: function(t) {
                    return this._attrs[t] }, getDim: function(t) {
                    switch (t) {
                        case "x":
                            return this.get("x");
                        case "y":
                            return this.get("y");
                        case "z":
                            return this.get("z");
                        default:
                            console.error("\u6ca1\u6709" + t + "\u4ee3\u8868\u7684\u7ef4\u5ea6!") } }, init: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        r = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 };
                    t.set("center", r), t.set("width", Math.abs(n.x - e.x)), t.set("height", Math.abs(n.y - e.y)) }, getWidth: function() {
                    return this.get("width") }, getHeight: function() {
                    return this.get("height") }, convertDim: function(t, e) {
                    var n = this;
                    return e = n.get(e), e.start + t * (e.end - e.start) }, invertDim: function(t, e) {
                    var n = this;
                    return e = n.get(e), (t - e.start) / (e.end - e.start) }, rotate: function(t) {
                    var e = this,
                        n = e.get("matrix"),
                        r = e.get("center");
                    return n.translate(-r.x, -r.y), n.rotate(t), n.translate(r.x, r.y), this }, reflect: function(t) {
                    var e = this;
                    switch (t) {
                        case "x":
                            e._swapDim("x");
                            break;
                        case "y":
                            e._swapDim("y");
                            break;
                        default:
                            e._swapDim("y") }
                    return this }, _swapDim: function(t) {
                    var e = this,
                        n = e.get(t);
                    if (n) {
                        var r = n.start;
                        n.start = n.end, n.end = r } }, scale: function(t, e) {
                    var n = this,
                        r = n.get("matrix"),
                        i = n.get("center");
                    return r.translate(-i.x, -i.y), r.scale(t, e), r.translate(i.x, i.y), this }, translate: function(t, e) {
                    var n = this,
                        r = n.get("matrix");
                    return r.translate(t, e), this }, transpose: function() { this.isTransposed = !this.isTransposed }, convertPoint: function(t) {
                    return t }, invertPoint: function(t) {
                    return t }, convert: function(t) {
                    var e = this;
                    t = this.convertPoint(t);
                    var n = e.trans(t.x, t.y, 1);
                    return { x: n.x, y: n.y } }, invert: function(t) {
                    var e = this,
                        n = e.reverse(t.x, t.y, 1);
                    return this.invertPoint({ x: n.x, y: n.y }) }, trans: function(t, e, n) { n = n || 0;
                    var r = this,
                        i = r.get("matrix"),
                        a = new s(t, e, n);
                    return a.applyMatrix(i), a }, reverse: function(t, e, n) { n = n || 0;
                    var r = this,
                        i = r.get("matrix"),
                        a = i.getInverse(),
                        o = new s(t, e, n);
                    return o.applyMatrix(a), o } }), t.exports = o }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(37),
                a = n(3),
                s = n(4),
                o = a.Vector2,
                u = a.Matrix3,
                c = a.Vector3,
                l = function(t) {
                    var e = {};
                    r.mix(e, l.ATTRS, t), l.superclass.constructor.call(this, e), this._init() };
            l.ATTRS = { startAngle: -Math.PI / 2, endAngle: 3 * Math.PI / 2, inner: .5 }, r.extend(l, i), r.augment(l, { type: "plus", isPolar: !0, _init: function() {
                    var t, e, n = this,
                        r = n.get("radius"),
                        i = n.get("inner"),
                        a = n.get("startAngle"),
                        s = n.get("endAngle"),
                        o = n.get("center"),
                        u = n.getOneBox(),
                        c = u.maxX - u.minX,
                        l = u.maxY - u.minY,
                        h = Math.abs(u.minX) / c,
                        f = Math.abs(u.minY) / l,
                        g = n.getWidth(),
                        p = n.getHeight();
                    p / l > g / c ? (t = g / c, e = { x: o.x - (.5 - h) * g, y: o.y - (.5 - f) * t * l }) : (t = p / l, e = { x: o.x - (.5 - h) * t * c, y: o.y - (.5 - f) * p }), r = r ? r > 0 && r <= 1 ? t * r : r > 0 && r <= t ? r : t : t;
                    var v = { start: a, end: s },
                        d = { start: i * r, end: r };
                    n.set("x", v), n.set("y", d), n.set("radius", r), n.set("circleCentre", e), n.set("center", e) }, getCenter: function() {
                    return this.get("circleCentre") }, getOneBox: function() {
                    for (var t = this, e = t.get("startAngle"), n = t.get("endAngle"), r = [0, Math.cos(e), Math.cos(n)], i = [0, Math.sin(e), Math.sin(n)], a = 5 * -Math.PI / 2; a < 3 * Math.PI / 2; a += Math.PI / 2) e <= a && a <= n && (r.push(Math.cos(a)), i.push(Math.sin(a)));
                    return { minX: Math.min.apply(Math, r), maxX: Math.max.apply(Math, r), minY: Math.min.apply(Math, i), maxY: Math.max.apply(Math, i) } }, getRadius: function() {
                    return this.get("radius") }, convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = e.isTransposed ? t.y : t.x,
                        i = e.isTransposed ? t.x : t.y;
                    return r = e.convertDim(r, "x"), i = e.convertDim(i, "y"), { x: n.x + Math.cos(r) * i, y: n.y + Math.sin(r) * i } }, invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = new o(t.x - n.x, t.y - n.y),
                        i = e.get("x"),
                        a = new u;
                    a.rotate(i.start);
                    var l = new c(1, 0, 0);
                    l.applyMatrix(a), l = new o(l.x, l.y);
                    var h = l.angleTo(r, i.end < i.start);
                    s.equal(h, 2 * Math.PI) && (h = 0);
                    var f = r.length(),
                        g = h / (i.end - i.start);
                    g = i.end - i.start > 0 ? g : -g;
                    var p = e.invertDim(f, "y"),
                        v = {};
                    return v.x = e.isTransposed ? p : g, v.y = e.isTransposed ? g : p, v } }), t.exports = l }, function(t, e, n) {
            var r = n(140);
            t.exports = r }, function(t, e, n) { "use strict";

            function r(t, e) {
                if (a.isNumeric(t) && a.isNumeric(e)) return s.number(t, e);
                if (a.isString(t) && a.isString(e)) {
                    var n = new u(t),
                        r = new u(e);
                    if (n.getType() && r.getType()) return o.color(n, r) } }

            function i(t, e) {
                if (a.isNumeric(t) && a.isNumeric(e)) return s.unNumber(t, e);
                if (a.isString(t) && a.isString(e)) {
                    var n = new u(t),
                        r = new u(e);
                    if (n.getType() && r.getType()) return o.unColor(n, r) } }
            var a = n(1),
                s = n(149),
                o = n(146),
                u = n(36);
            t.exports = { singular: r, unSingular: i } }, function(t, e, n) { "use strict";
            var r = n(42),
                i = n(1),
                a = n(35),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, r), i.augment(s, { type: "linear", isLinear: !0, min: null, max: null, nice: !1, tickCount: 5, tickInterval: null, init: function() {
                    var t = this;
                    if (t.ticks) {
                        var e = t.ticks,
                            n = t.translate(e[0]),
                            r = t.translate(e[e.length - 1]);
                        (i.isNull(t.min) || t.min > n) && (t.min = n), (i.isNull(t.max) || t.max < r) && (t.max = r) } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks() }, calculateTicks: function() {
                    var t = this,
                        e = t.min,
                        n = t.max,
                        r = t.tickCount,
                        i = t.tickInterval,
                        s = a.caculate({ min: e, max: n, minCount: r, maxCount: r, interval: i });
                    return s.ticks }, initTicks: function() {
                    var t = this,
                        e = t.calculateTicks();
                    if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
                    else {
                        var n = [];
                        i.each(e, function(e) { e >= t.min && e <= t.max && n.push(e) }), t.ticks = n } }, scale: function(t) {
                    if (null === t || void 0 === t) return NaN;
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    var r = (t - n) / (e - n),
                        i = this.rangeMin(),
                        a = this.rangeMax();
                    return i + r * (a - i) }, invert: function(t) {
                    var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                    return this.min + e * (this.max - this.min) } }), t.exports = s }, function(t, e, n) { "use strict";
            var r = n(1),
                i = function(t) { r.mix(this, t), this.init() };
            r.augment(i, { formatter: null, range: [0, 1], ticks: null, init: function() {}, getTicks: function() {
                    var t = this,
                        e = t.ticks,
                        n = [];
                    return r.each(e, function(e) {
                        var i;
                        i = r.isObject(e) ? e : { text: t.getText(e), value: t.scale(e) }, n.push(i) }), n }, getText: function(t) {
                    var e = this.formatter;
                    return t = e ? e(t) : t, !r.isNull(t) && t.toString || (t = ""), t.toString() }, rangeMin: function() {
                    return this.range[0] }, rangeMax: function() {
                    var t = this.range;
                    return t[t.length - 1] }, invert: function() {}, translate: function(t) {
                    return t }, scale: function() {}, clone: function() {
                    var t = this,
                        e = t.constructor,
                        n = {};
                    return r.each(t, function(e, r) { n[r] = t[r] }), new e(n) }, change: function(t) {
                    return this.ticks = null, r.mix(this, t), this.init(), this } }), t.exports = i }, function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(31),
                a = n(2),
                s = function(t) { s.superclass.constructor.call(this, t), this.colRange = {}, this.binWidth || (this.binWidth = .03) };
            r.extend(s, i), r.augment(s, { type: "bin", binWidth: .03, colRange: {}, binDims: null, setRange: function(t, e) { this.colRange[t] = e }, getStatDims: function() {
                    return this.getDims() }, getBinDims: function() {
                    var t = this.binDims || this.getDims(),
                        e = [];
                    return r.each(t, function(t) { t.indexOf("..") === -1 && e.push(t) }), e }, getBinWidth: function() {
                    return this.binWidth || .03 }, getCenterValue: function(t, e, n) {
                    var r, i = this.getBinWidth(),
                        a = (t - n) / (e - n);
                    return 1 === a && (a -= i / 4), r = (e - n) * (Math.floor(a / i) * i + i / 2) + n }, toBin: function(t) {
                    for (var e = this, n = e.getBinDims(), r = 0; r < n.length; r++) {
                        var i = n[r],
                            a = t[i],
                            s = e.getDimRange(i);
                        t[i] = e.getCenterValue(a, s.max, s.min) } }, getDimRange: function(t) {
                    var e = this,
                        n = e.cacheRange;
                    return n[t] || { min: 0, max: 0 } }, preExecute: function(t) {
                    var e = this,
                        n = a.merge.apply(null, t),
                        i = e.getStatDims(),
                        s = e.colRange,
                        o = {};
                    r.each(i, function(t) {
                        if (s[t]) o[t] = s[t];
                        else {
                            var e = a.range(n, t);
                            o[t] = { min: e[0], max: e[1] } } }), e.cacheRange = o }, execFrame: function(t) {
                    var e = this,
                        n = t.toJSON();
                    return r.each(n, function(t) { e.toBin(t) }), new a(n) }, getRegion: function() {
                    return [{ x: 0, y: 0 }] } }), t.exports = s
        }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = function(t) { r.mix(this, t) };
            r.augment(a, { dims: [], margin: 0, defs: {}, facetTitle: { titleOffset: 25, colDimTitle: { title: { "font-size": 16, "text-anchor": "middle", fill: "#444" } }, colTitle: { title: { "font-size": 14, "text-anchor": "middle", fill: "#444" } }, rowTitle: { title: { "font-size": 14, "text-anchor": "middle", rotate: 90, fill: "#444" } }, rowDimTitle: { title: { "font-size": 16, "text-anchor": "middle", rotate: 90, fill: "#444" } } }, plotRange: null, getDimValues: function(t, e) {
                    var n = this,
                        r = n.defs[t],
                        a = [];
                    return a = r && r.values ? r.values : i.values(e, t) }, getFilter: function(t) {
                    var e = this.defs,
                        n = function(n) {
                            var i = !0;
                            return r.each(t, function(t) {
                                var a = t.dim,
                                    s = t.value,
                                    o = t.values,
                                    u = !0;!r.isNull(s) && a && (u = e[a] && e[a].group ? e[a].group(n) === r.indexOf(o, s) : n[a] === s || n[a] === r.indexOf(o, s)), i = i && u }), i };
                    return n }, drawTitles: function(t, e) {
                    var n = this,
                        i = n.dims;
                    r.each(t, function(t) { n.drawFacetTitle("col", t, e) }), n.drawDimTitle("col", i[0], e) }, generateFacets: function() {}, drawFacetTitle: function(t, e, n) {
                    var i = this,
                        a = i.facetTitle,
                        s = a.titleOffset,
                        o = "row" === t ? a.rowTitle : a.colTitle,
                        u = e.region,
                        c = u.start,
                        l = u.end,
                        h = "row" === t ? "y" : "x",
                        f = "row" === t ? "x" : "y",
                        g = {};
                    g[h] = (l[h] - c[h]) / 2 + c[h], g[f] = l[f];
                    var p = "x" === h ? -1 : 1,
                        v = r.mix({ text: e[h + "Value"] }, o.title);
                    v[h] = g[h], v[f] = g[f] + s * p, n.addShape("Text", { attrs: v }) }, drawDimTitle: function(t, e, n) {
                    if (!r.isNull(e)) {
                        var i = this,
                            a = i.plotRange,
                            s = i.defs,
                            o = "row" === t ? "y" : "x",
                            u = i.facetTitle,
                            c = u.titleOffset,
                            l = "x" === o ? u.colDimTitle : u.rowDimTitle,
                            h = s[e] && s[e].alias || e,
                            f = {};
                        f = "x" === o ? { y: a.tl.y + (c + 40) * -1, x: (a.tr.x - a.tl.x) / 2 + a.tl.x } : { x: a.tr.x + (c + 40), y: (a.br.y - a.tr.y) / 2 + a.tr.y }, h = r.mix({ text: h, x: f.x, y: f.y }, l.title), n.addShape("Text", { attrs: h }) } } }), t.exports = a }, function(t, e) { "use strict";
            var n = "#4E7CCC",
                r = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimSun, "sans-serif"',
                i = { defaultColor: n, plotCfg: { margin: [20, 80, 60, 80] }, facetCfg: { type: "rect", margin: 10, facetTitle: { titleOffset: 16, colDimTitle: { title: { "font-size": "14", "text-anchor": "middle", fill: "#999" } }, colTitle: { title: { "font-size": "12", "text-anchor": "middle", fill: "#999" } }, rowTitle: { title: { "font-size": "12", "text-anchor": "middle", rotate: 90, fill: "#999" } }, rowDimTitle: { title: { "font-size": "12", "text-anchor": "middle", rotate: 90, fill: "#999" } } } }, binWidth: .03, fontFamily: r, colors: { "default": ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"], intervalStack: ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"] }, shapes: { point: ["hollowCircle", "hollowSquare", "hollowDiamond", "hollowBowtie", "hollowTriangle", "hollowHexagon", "cross", "tick", "plus", "hyphen", "line"], line: ["line", "dash", "dot"], area: ["area"] }, hues: ["red", "yellow", "green", "blue", "orange", "purple", "pink", "brown", "white", "gray", "black"], axis: { top: { position: "top", titleOffset: 30, title: { "font-size": "12", fill: "#999" }, labels: { label: { fill: "#404040", "font-size": "12" } }, tickLine: { "stroke-width": 1, stroke: "#ccc", value: 5 } }, bottom: { position: "bottom", titleOffset: 45, labelOffset: 20, title: { "font-size": "12", "text-anchor": "middle", fill: "#999" }, labels: { label: { fill: "#404040", "font-size": "12" } }, line: { "stroke-width": 1, stroke: "#ccc" }, tickLine: { "stroke-width": 1, stroke: "#ccc", value: 5 } }, left: { position: "left", titleOffset: 60, labelOffset: 13, title: { "font-size": "12", fill: "#999" }, labels: { label: { fill: "#404040" } }, line: { "stroke-width": 1, stroke: "#ccc" }, tickLine: { "stroke-width": 1, stroke: "#ccc", value: 5 }, grid: { line: { stroke: "#d9d9d9", "stroke-width": 1, "stroke-dasharray": [2, 2] } } }, right: { position: "right", titleOffset: 60, labelOffset: 13, title: { "font-size": "12", fill: "#999" }, labels: { label: { fill: "#404040" } }, line: { "stroke-width": 1, stroke: "#ccc" }, tickLine: { "stroke-width": 1, stroke: "#ccc", value: 5 } }, circle: { labelOffset: 5, line: { "stroke-width": 1, stroke: "#ccc" }, grid: { line: { stroke: "#d9d9d9", "stroke-width": 1, "stroke-dasharray": [1, 3] } }, labels: { label: { fill: "#404040" } } }, gauge: { grid: null, labelOffset: 5, tickLine: { "stroke-width": 1, value: -20, stroke: "#ccc" }, subTick: 5, labels: { label: { fill: "#404040" } } }, clock: { grid: null, labelOffset: 5, tickLine: { "stroke-width": 1, value: -20, stroke: "#C0D0E0" }, subTick: 5, labels: { label: { fill: "#404040" } } }, radius: { titleOffset: 45, labels: { label: { fill: "#404040" } }, line: { "stroke-width": 1, stroke: "#ccc" }, grid: { line: { stroke: "#d9d9d9", "stroke-width": 1, "stroke-dasharray": [2, 2] }, type: "circle" } } }, labels: { offset: 14, label: { fill: "#666", "font-size": "12" } }, treemapLabels: { offset: 10, label: { fill: "#fff", "font-size": "14", verticalAlign: "top", fontStyle: "bold" } }, innerLabels: { label: { fill: "#fff", "font-size": "12" } }, thetaLabels: { labelLine: { "stroke-width": 1 }, labelHeight: 14, offset: 30 }, legend: { right: { position: "right", back: null, spacingX: 10, spacingY: 12, markerAlign: "center", wordSpaceing: 12 }, left: { position: "left", back: null, spacingX: 10, spacingY: 12, markerAlign: "center", wordSpaceing: 12 }, top: { position: "top", title: null, back: null, spacingX: 16, spacingY: 10, markerAlign: "center", wordSpaceing: 12 }, bottom: { position: "bottom", title: null, back: null, spacingX: 16, spacingY: 10, markerAlign: "center", wordSpaceing: 12 }, size: { width: 20, height: 156 } }, tooltip: { crosshairs: !1, offset: 15, crossLine: { stroke: "#666" }, wordSpaceing: 6, markerCfg: { symbol: "circle", radius: 3 } }, activeShape: { point: { radius: 5, "fill-opacity": .7 }, hollowPoint: { "stroke-width": 2, radius: 4 }, interval: { "fill-opacity": .7 }, hollowInterval: { "stroke-width": 2 }, area: { "fill-opacity": .85 }, hollowArea: { "stroke-width": 2 }, line: { "stroke-width": 2 }, polygon: { "fill-opacity": .75 } }, shape: { point: { "stroke-width": 1, fill: n, radius: 4 }, hollowPoint: { fill: "#fff", "stroke-width": 1, stroke: n, radius: 3 }, interval: { "stroke-width": 0, fill: n, "fill-opacity": .85 }, strokeInterval: { "stroke-width": 1, stroke: "#fff" }, pie: { "stroke-width": 1, stroke: "#fff" }, hollowInterval: { fill: "#fff", stroke: n, "fill-opacity": 0, "stroke-width": 1 }, area: { "stroke-width": 0, fill: n, "fill-opacity": .6 }, polygon: { "stroke-width": 0, fill: n, "fill-opacity": 1 }, hollowPolygon: { fill: "#fff", stroke: n, "fill-opacity": 0, "stroke-width": 1 }, strokePolygon: { fill: n, stroke: "#efefef", "fill-opacity": 1 }, hollowArea: { fill: "#fff", stroke: n, "fill-opacity": 0, "stroke-width": 1 }, line: { stroke: n, "stroke-width": 1, fill: null } }, guide: { text: { fill: "#666", "font-size": "12" }, line: { stroke: n, "stroke-dasharray": [0, 2, 2] }, rect: { "stroke-width": 0, fill: n, "fill-opacity": .1 }, tag: { line: { stroke: n, "stroke-dasharray": [0, 2, 2] }, text: { fill: "#666", "font-size": "12", "text-anchor": "middle" }, rect: { "stroke-width": 0, fill: n, "fill-opacity": .1 } } }, tooltipMarker: { fill: "#fff", symbol: "circle", "stroke-width": 2, stroke: n, radius: 4 } };
            t.exports = i }, function(t, e, n) {
            var r = n(1),
                i = n(12),
                a = n(65),
                s = i.GroupBase,
                o = a.ShowLabels,
                u = "x-chart-axis",
                c = n(111),
                l = function(t) { l.superclass.constructor.call(this, t) };
            l.CFG = { zIndex: 4, ticks: null, line: null, tickLine: null, subTick: null, grid: null, gridAlign: "start", coord: null, labels: { label: {}, autoRotate: !0 }, title: {}, _title: { textBaseline: "middle" }, autoPaint: !0, labelOffset: 10, titleOffset: 20, animate: !1, formatter: null, firstTick: !0 }, r.mixin(l, [o]), r.extend(l, s), r.augment(l, { _initCfg: function() { this.deepSet("title") }, _beforeRenderUI: function() { l.superclass._beforeRenderUI.call(this) }, _renderUI: function() { l.superclass._renderUI.call(this), this.parseTicks(this.get("ticks"));
                    var t = this.get("labels");
                    t && this.renderLabels(), this.get("autoPaint") && this.paint(), this.get("title") && this._renderTitle(), this.sort() }, parseTicks: function(t) {
                    for (var t = t || [], e = t.length, n = 0; n < t.length; n++) {
                        var i = t[n];
                        r.isObject(i) || (t[n] = this.parseTick(i, n, e)) }
                    return this.set("ticks", t), t }, parseTick: function(t, e, n) {
                    return { text: t, value: e / (n - 1) } }, getMaxLabelWidth: function(t) {
                    var e = t.get("children"),
                        n = 0;
                    return r.each(e, function(t) {
                        var e = t.getBBBox(),
                            r = e.width;
                        n < r && (n = r) }), n }, paint: function() { this._renderLines(), this._renderTicks(), this.renderGrid();
                    var t = this.get("labels");
                    t && t.autoRotate && this.autoRotateLabels() }, autoRotateLabels: function() {}, _renderTitle: function() {}, renderGrid: function() {
                    var t, e = this.get("grid");
                    e && (r.isNull(e.animate) && (e.animate = this.get("animate")), t = this.getParent().addGroup(c, e), t.setMatrix(this.getCoordMatrix().clone()), this.set("gridGroup", t)) }, getLinePath: function() {}, getOffsetPoint: function() {}, transPoint: function(t) {
                    var e = this.get("coord");
                    return e.trans(t.x, t.y, 1) }, _renderLines: function() {
                    var t, e = this.get("line"),
                        n = this.get("ticks");
                    if (e) { t = this.getLinePath(), e = r.mix({ path: t }, e);
                        var i = this.addShape("Path", { elCls: u + "-line", attrs: e });
                        i.setMatrix(this.getCoordMatrix().clone()), this.set("lineShape", i) }
                    this._processTicks(n) }, _processTicks: function(t) {
                    var e = this,
                        n = e.get("labels"),
                        i = e.get("subTick"),
                        a = e.get("tickLine");
                    t = t || e.get("ticks");
                    var s = null;
                    r.each(t, function(r, i) {
                        var o, u = t[i + 1];
                        o = s ? s : e.getOffsetPoint(r), s = u ? e.getOffsetPoint(u) : null, a && e._addTickItem(o), e.get("grid") && 0 !== r.value && e._addGridItem(o, s), n && e.addLabel(e.formatPoint(r.text), o) }), i && r.each(t, function(n, s) {
                        var o = s ? n.value - t[s - 1].value : n.value;
                        o /= e.get("subTick");
                        for (var u = [], c = 1; c < i; c++) {
                            var l = { text: "", value: s ? t[s - 1].value + c * o : c * o };
                            u.push(l) }
                        r.each(u, function(t) {
                            var n = e.getOffsetPoint(t);
                            if (a) {
                                var r = parseInt(.6 * a.value);
                                e._addTickItem(n, r) } }) }) }, _renderTicks: function() {
                    var t = this,
                        e = t.get("tickItems"),
                        n = t.get("tickLine"),
                        i = "",
                        a = r.mix({}, n);
                    if (e) { r.each(e, function(e) {
                            var n = t._getTickPath(e);
                            i += n }), delete a.value, a.path = i;
                        var s = t.addShape("Path", { elCls: u + "-ticks", attrs: a });
                        s.setMatrix(t.getCoordMatrix().clone()), t.set("tickShape", s) } }, _getTickPath: function(t) {
                    var e = r.substitute("M{x1} {y1}L{x2} {y2}", t);
                    return e }, _addTickItem: function(t, e) {
                    var n = this.get("tickItems"),
                        i = { x1: t.x, y1: t.y },
                        a = this.getTickEnd(t, e);
                    i.x2 = a.x, i.y2 = a.y, n || (n = [], this.set("tickItems", n)), r.mix(i, a), n.push(i) }, getCoordMatrix: function() {
                    var t = this.get("coord"),
                        e = t.get("matrix");
                    return e }, getTickEnd: function() {}, getSideVector: function() {}, getTextAnchor: function(t) {
                    var e, n = Math.abs(t.y / t.x);
                    return e = n >= 1 ? "middle" : t.x > 0 ? "start" : "end" }, addLabel: function(t, e) {
                    var n, r = this.get("labelsGroup"),
                        i = {};
                    if (r) {
                        var a = this.get("coord"),
                            s = this.get("labelOffset") || 10,
                            o = this.getSideVector(s, e),
                            u = { x: e.x + o.x, y: e.y + o.y };
                        u = this.transPoint(u), o = a.trans(o.x, o.y), i.text = t, i.x = u.x, i.y = u.y, i["text-anchor"] = this.getTextAnchor(o), n = r.addLabel(i) }
                    return n }, formatPoint: function(t) {
                    var e = this.get("formatter");
                    return e && (t = e.call(this, t)), t }, _addGridItem: function(t, e) {
                    var n, i, a = this.get("coord"),
                        s = this.get("grid"),
                        o = {},
                        u = this.get("gridAlign");
                    s.items || (s.items = []), i = t, "start" === u ? i = t : "middle" === u && (i = "cartesian" !== a.type || e ? this.getGridMiddlePoint(t, e) : null), i && (n = this.getGridItemCfg(i), r.mix(o, n), s.items.push(o)) }, getGridMiddlePoint: function(t, e) {
                    var n, r, i = this.get("coord"),
                        a = i.invertPoint(t);
                    return e ? (a.x >= 1 && (a.x -= 1), n = i.invertPoint(e), r = { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 }) : 1 !== a.x && (r = this.getEndMiddlePoint(t, a)), i.convertPoint(r) }, getEndMiddlePoint: function(t) {
                    var e = this.get("coord"),
                        n = { value: 1 },
                        r = this.getOffsetPoint(n);
                    return e.invertPoint(r) }, getGridItemCfg: function() {}, remove: function() { l.superclass.remove.call(this);
                    var t = this.get("gridGroup");
                    t && t.remove(), this.removeLabels() } }), t.exports = l }, function(t, e, n) {
            var r = n(119);
            t.exports = r }, function(t, e, n) { "use strict";

            function r(t, e) {
                return t > e ? e : t }

            function i(t, e) {
                return t > e ? t : e }

            function a(t, e) { this.start = t, this.end = e, this.init() }
            var s = n(1);
            a.CFG = { start: null, end: null, background: null }, s.augment(a, { init: function() {
                    var t = this,
                        e = t.start,
                        n = t.end,
                        a = t.tl = {};
                    a.x = r(e.x, n.x), a.y = r(e.y, n.y);
                    var s = t.tr = {};
                    s.x = i(e.x, n.x), s.y = r(e.y, n.y);
                    var o = t.bl = {};
                    o.x = r(e.x, n.x), o.y = i(e.y, n.y);
                    var u = t.br = {};
                    u.x = i(e.x, n.x), u.y = i(e.y, n.y);
                    var c = t.cc = {};
                    c.x = (u.x - a.x) / 2 + a.x, c.y = (u.y - a.y) / 2 + a.y }, reset: function(t, e) { this.start = t, this.end = e, this.init() }, isInRange: function(t, e) { s.isObject(t) && (e = t.y, t = t.x);
                    var n = this,
                        r = n.tl,
                        i = n.br;
                    return t >= r.x && t <= i.x && e >= r.y && e <= i.y }, isInVertical: function(t) { s.isObject(t) && (t = t.y);
                    var e = this,
                        n = e.tl,
                        r = e.br;
                    return t >= n.y && t <= r.y }, isInHorizontal: function(t) { s.isObject(t) && (t = t.x);
                    var e = this,
                        n = e.tl,
                        r = e.br;
                    return t >= n.x && t <= r.x }, getWidth: function() {
                    var t = this.tl,
                        e = this.br;
                    return e.x - t.x }, getHeight: function() {
                    var t = this.tl,
                        e = this.br;
                    return e.y - t.y } }), t.exports = a }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(38),
                a = function(t) { t.inner = t.inner || 0, a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { type: "polar" }), t.exports = a }, function(t, e, n) {
            var r = n(141);
            t.exports = r }, function(t, e, n) { "use strict";
            var r = n(1),
                i = Math.PI / 180,
                a = 180 / Math.PI,
                s = function(t) { r.mix(this, t) };
            r.augment(s, { basic: null, toRadians: function(t) {
                    return i * t }, toDegrees: function(t) {
                    return t * a }, project: function(t, e) {
                    return { x: t, y: e } }, invert: function(t) {
                    return { x: t.x, y: t.y } } }), t.exports = s }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(10),
                a = function(t) { a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { type: "region" }), t.exports = a }, function(t, e, n) { "use strict";
            var r = n(31),
                i = n(1),
                a = n(2),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, r), i.augment(s, { type: "smooth", bandWidth: .01, colRange: {}, setRange: function(t, e) { this.colRange[t] = e }, getStatDims: function() {
                    var t = this,
                        e = t.getDims(),
                        n = e.length,
                        r = [e[n - 1]];
                    return r }, execSmooth: function(t) {
                    return t }, getXDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 2) throw "you must support the x,y dimension!!!";
                    return e[0] }, getYDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 2) throw "you must support the x,y dimension!!!";
                    return e[1] }, getZDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 3) throw "you must support the x,y,z dimension!!!";
                    return e[2] }, getData: function(t) {
                    var e = [],
                        n = this.dims;
                    return t.each(function(t) {
                        var r = [];
                        i.each(n, function(e) { r.push(t[e]) }), e.push(r) }), e }, getDimRange: function(t, e) {
                    var n = this,
                        r = n.colRange[e];
                    if (!r) {
                        var i = a.range(t, e);
                        r = { min: i[0], max: i[1] } }
                    return r }, gatStep: function(t, e) {
                    var n = this,
                        r = n.getDimRange(t, e),
                        i = r.min,
                        a = r.max,
                        s = n.bandWidth,
                        o = (a - i) * s;
                    return o }, getInterArray: function(t, e) {
                    for (var n = this, r = n.gatStep(t, e), i = n.getDimRange(t, e), a = i.min, s = i.max, o = [], u = a; u <= s; u += r) o.push(u);
                    return o }, execFrame: function(t) {
                    var e = this,
                        n = e.getXDim(),
                        r = e.getYDim();
                    t = a.sort(t, n);
                    var s = e.getData(t),
                        o = e.getInterArray(t, n),
                        u = e.execSmooth(s, o, t),
                        c = t.rowObject(0),
                        l = [];
                    return i.each(u, function(t) {
                        var e = i.mix({}, c);
                        e[n] = t[0], e[r] = t[1], l.push(e) }), new a(l) } }), t.exports = s }, function(t, e, n) { "use strict";

            function r(t, e, n, r) {
                return { x: Math.cos(r) * n + t, y: Math.sin(r) * n + e } }

            function i(t, e, n, r) {
                if (r) {
                    if (t < e) var i = e - t,
                        a = 2 * Math.PI - n + t;
                    else if (t > n) var i = 2 * Math.PI - t + e,
                        a = t - n } else var i = t - e,
                    a = n - t;
                return i > a ? n : e }

            function a(t, e, n, r) {
                var a = 0;
                return n - e >= 2 * Math.PI && (a = 2 * Math.PI), e = l.mod(e, 2 * Math.PI), n = l.mod(n, 2 * Math.PI) + a, t = l.mod(t, 2 * Math.PI), r ? e >= n ? t > n && t < e ? t : i(t, n, e, !0) : t < e || t > n ? t : i(t, e, n) : e <= n ? e < t && t < n ? t : i(t, e, n, !0) : t > e || t < n ? t : i(t, n, e) }

            function s(t, e, n, r, i, s, o, u, l) {
                var h = new c(o, u),
                    f = new c(t, e),
                    g = new c(1, 0),
                    p = c.sub(h, f),
                    v = g.angleTo(p);
                v = a(v, r, i, s);
                var d = new c(n * Math.cos(v) + t, n * Math.sin(v) + e);
                l && (l.x = d.x, l.y = d.y);
                var x = h.distanceTo(d);
                return x }

            function o(t, e, n, i, s, o) {
                var u = 0,
                    c = Math.PI / 2,
                    l = Math.PI,
                    f = 3 * Math.PI / 2,
                    g = [],
                    p = a(u, i, s, o);
                p === u && g.push(r(t, e, n, u)), p = a(c, i, s, o), p === c && g.push(r(t, e, n, c)), p = a(l, i, s, o), p === l && g.push(r(t, e, n, l)), p = a(f, i, s, o), p === f && g.push(r(t, e, n, f)), g.push(r(t, e, n, i)), g.push(r(t, e, n, s));
                var v = 1 / 0,
                    d = -(1 / 0),
                    x = 1 / 0,
                    m = -(1 / 0);
                return h.each(g, function(t) { v > t.x && (v = t.x), d < t.x && (d = t.x), x > t.y && (x = t.y), m < t.y && (m = t.y) }), { minX: v, minY: x, maxX: d, maxY: m } }
            var u = n(3),
                c = u.Vector2,
                l = n(4),
                h = n(1);
            t.exports = { nearAngle: a, projectPoint: function(t, e, n, r, i, a, o, u) {
                    var c = {};
                    return s(t, e, n, r, i, a, o, u, c), c }, pointDistance: s, box: o } }, function(t, e, n) { "use strict";

            function r(t, e, n, r, i) {
                var a = 1 - i;
                return a * a * (a * r + 3 * i * n) + i * i * (i * t + 3 * a * e) }

            function i(t, e, n, r, i) {
                var a = 1 - i;
                return 3 * (((e - t) * a + 2 * (n - e) * i) * a + (r - n) * i * i) }

            function a(t, e, n, i, a, s, o, c, l, h, f) {
                for (var g, p = .005, v = 1 / 0, d = 1e-4, x = new u(l, h), m = 0; m < 1; m += .05) {
                    var y = new u(r(t, n, a, o, m), r(e, i, s, c, m)),
                        _ = y.distanceToSquared(x);
                    _ < v && (g = m, v = _) }
                for (var v = 1 / 0, S = 0; S < 32 && !(p < d); S++) {
                    var w = g - p,
                        b = g + p,
                        y = new u(r(t, n, a, o, w), r(e, i, s, c, w)),
                        _ = y.distanceToSquared(x);
                    if (w >= 0 && _ < v) g = w, v = _;
                    else {
                        var M = new u(r(t, n, a, o, b), r(e, i, s, c, b)),
                            A = M.distanceToSquared(x);
                        b <= 1 && A < v ? (g = b, v = A) : p *= .5 } }
                return f && (f.x = r(t, n, a, o, g), f.y = r(e, i, s, c, g)), Math.sqrt(v) }

            function s(t, e, n, r) {
                var i = 3 * t - 9 * e + 9 * n - 3 * r,
                    a = 6 * e - 12 * n + 6 * r,
                    s = 3 * n - 3 * r,
                    o = [];
                if (c.equal(i, 0)) {
                    if (!c.equal(a, 0)) {
                        var u = -s / a;
                        u >= 0 && u <= 1 && o.push(u) } } else {
                    var l = a * a - 4 * i * s;
                    if (c.equal(l, 0)) o.push(-a / (2 * i));
                    else if (l > 0) {
                        var h = Math.sqrt(l),
                            u = (-a + h) / (2 * i),
                            f = (-a - h) / (2 * i);
                        u >= 0 && u <= 1 && o.push(u), f >= 0 && f <= 1 && o.push(f) } }
                return o }
            var o = n(3),
                u = o.Vector2,
                c = n(4);
            t.exports = { at: r, derivativeAt: i, projectPoint: function(t, e, n, r, i, s, o, u, c, l) {
                    var h = {};
                    return a(t, e, n, r, i, s, o, u, c, l, h), h }, pointDistance: a, extrema: s } }, function(t, e, n) { "use strict";

            function r(t, e, n, r) {
                var i = 1 - r;
                return i * (i * t + 2 * r * e) + r * r * n }

            function i(t, e, n, i, a, s, o, c, l) {
                for (var h, f = .005, g = 1 / 0, p = 1e-4, v = new u(o, c), d = 0; d < 1; d += .05) {
                    var x = new u(r(t, n, a, d), r(e, i, s, d)),
                        m = x.distanceToSquared(v);
                    m < g && (h = d, g = m) }
                for (var g = 1 / 0, y = 0; y < 32 && !(f < p); y++) {
                    var _ = h - f,
                        S = h + f,
                        x = new u(r(t, n, a, _), r(e, i, s, _)),
                        m = x.distanceToSquared(v);
                    if (_ >= 0 && m < g) h = _, g = m;
                    else {
                        var w = new u(r(t, n, a, S), r(e, i, s, S)),
                            b = w.distanceToSquared(v);
                        S <= 1 && b < g ? (h = S, g = b) : f *= .5 } }
                return l && (l.x = r(t, n, a, h), l.y = r(e, i, s, h)), Math.sqrt(g) }

            function a(t, e, n) {
                var r = t + n - 2 * e;
                if (o.equal(r, 0)) return [.5];
                var i = (t - e) / r;
                return i <= 1 && i >= 0 ? [i] : [] }
            var s = n(3),
                o = n(4),
                u = s.Vector2;
            t.exports = { at: r, projectPoint: function(t, e, n, r, a, s, o, u) {
                    var c = {};
                    return i(t, e, n, r, a, s, o, u, c), c }, pointDistance: i, extrema: a } }, function(t, e, n) { "use strict";
            var r = n(1),
                i = n(22),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            a.ATTRS = { type: "path", shape: "line", shapeType: "line", allowActiveShape: !1 }, r.extend(a, i), r.augment(a, { _getShapeCfg: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        r = n[0],
                        i = { color: r.color, size: r.size, opacity: r.opacity, yDim: e.getYDim(), coord: e.get("coord"), isInCircle: e.isInCircle(), points: n },
                        a = r.shape,
                        s = e.get("shapeObj"),
                        o = s.getShapeCfg(a, i);
                    return o.path = e.mappingPath(o.path), o }, drawFrame: function(t) {
                    var e = this;
                    if (t.rowCount()) {
                        var n = e.get("group"),
                            r = e._getShapeCfg(t),
                            i = n.addShape("path", { attrs: r });
                        return i.set("origin", t), n } } }), t.exports = a }, function(t, e, n) { "use strict";
            var r = n(1),
                i = { Point: n(295), Line: n(294), Area: n(292), Interval: n(293), Schema: n(297), Polygon: n(296), createShape: function(t, e) {
                        var n = this;
                        return t = t || "point", e && (e = e.replace("..", "")), t = r.ucfirst(t), n[t] } };
            t.exports = i },
        [313, 91, 60],
        function(t, e) { "use strict";

            function n() {
                var t = document.createElement("i");
                return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t }
            var r = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
            t.exports = { toRGB: function() {
                    var t;
                    return document.body && (t = n()),
                        function(e) { t || (t = n()), t.style.color = e;
                            var i = document.defaultView.getComputedStyle(t, "").getPropertyValue("color"),
                                a = r.exec(i);
                            return a.shift(), this.arr2rgb(a) } }(), toHex: function(t) {
                    return t = Math.round(t), t = t.toString(16), 1 === t.length && (t = "0" + t), t }, hsl2Rgb: function(t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = {};
                    if (0 === n) i.r = i.g = i.b = r;
                    else {
                        var a = function(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t },
                            s = r <= .5 ? r * (1 + n) : r + n - r * n,
                            o = 2 * r - s;
                        i.r = a(o, s, e + 1 / 3), i.g = a(o, s, e), i.b = a(o, s, e - 1 / 3) }
                    return i.r = Math.min(Math.round(255 * i.r), 255), i.g = Math.min(Math.round(255 * i.g), 255), i.b = Math.min(Math.round(255 * i.b), 255), "#" + this.toHex(i.r) + this.toHex(i.g) + this.toHex(i.b) }, rgb2hsl: function(t) {
                    var e, n, r, i = this.rgb2arr(t),
                        a = i[0] / 255,
                        s = i[1] / 255,
                        o = i[2] / 255,
                        u = Math.min(a, s, o),
                        c = Math.max(a, s, o),
                        l = c - u;
                    return c == u ? e = 0 : a == c ? e = (s - o) / l : s == c ? e = 2 + (o - a) / l : o == c && (e = 4 + (a - s) / l), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = (u + c) / 2, n = c == u ? 0 : r <= .5 ? l / (c + u) : l / (2 - c - u), [e / 360, n, r] }, arr2rgb: function(t) {
                    return "#" + this.toHex(t[0]) + this.toHex(t[1]) + this.toHex(t[2]) }, rgb2arr: function(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e } } },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { getEndAttrs: function() {
                    var t = this.get("rect"),
                        e = { width: t.width, height: t.height };
                    return e }, getTarget: function() {
                    var t = this.get("group"),
                        e = t.getParent(),
                        n = e.addShape("Rect");
                    return t.attr("clip", n), n } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(27),
                i = n(21),
                a = i.Group,
                s = function(t) { s.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI() };
            s.CFG = {}, r.extend(s, a), r.augment(s, { _beforeRenderUI: function() { this._initCfg(), this._multiRatioCfg() }, _renderUI: function() {}, _multiRatioCfg: function() {}, _initCfg: function() {}, _bindUI: function() {} }), t.exports = s },
        function(t, e, n) { t.exports = { GMixin: n(107), GroupBase: n(62), GroupMixin: n(108) } },
        function(t, e, n) { "use strict";

            function r(t) { r.superclass.constructor.call(this, t) }
            var i = n(46),
                a = n(9),
                s = "x-chart-axis",
                o = n(3),
                u = n(4);
            r.CFG = { zIndex: 4, x: null, y: null, start: null, end: null, elCls: s, position: "bottom", line: { lineWidth: 1, stroke: "#C0D0E0" }, tickLine: { lineWidth: 1, stroke: "#C0D0E0", value: 5 } }, a.extend(r, i), a.augment(r, { _beforeRenderUI: function() { r.superclass._beforeRenderUI.call(this);
                    var t, e = this;
                    t = e.get("coord"), e.get("start") || e.set("start", e.getOffsetByPercent(0)), e.get("end") || e.set("end", e.getOffsetByPercent(1)) }, isVertical: function() {
                    var t, e = this,
                        n = e.get("isVertical"),
                        r = e.get("coord");
                    return a.isNull(n) ? (t = e.get("position"), n = "bottom" !== t && "top" !== t, r.isTransposed && (n = !n), e.set("isVertical", n), n) : n }, getOffsetPoint: function(t) {
                    return this.getOffsetByPercent(t.value) }, getOffsetByPercent: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = e.getPercentPoint(t);
                    return n.convertPoint(r) }, autoRotateLabels: function() {
                    var t = this,
                        e = t.get("labelsGroup"),
                        n = t.get("coord"),
                        r = t.get("title");
                    if (e) {
                        var i = t.get("labelOffset") || 10,
                            s = i,
                            o = t.get("titleOffset"),
                            c = t.getAxisVector();
                        c = n.trans(c.x, c.y);
                        var l;
                        if (u.equal(c.x, 0) && r.text) {
                            var h = t.getMaxLabelWidth(e);
                            h + i > o - s && (l = Math.acos((o - s) / (h + i)) * -1) } else if (u.equal(c.y, 0) && e.getCount() > 1) {
                            var f = Math.abs(t._getAvgLabelLength(e)),
                                h = t.getMaxLabelWidth(e);
                            h > f && (l = Math.atan2(1.5 * i, f)) }
                        if (l) {
                            var g = t._getAlignFactor();
                            a.each(e.get("children"), function(t) { t.rotateAtStart(180 * l / Math.PI), u.equal(c.y, 0) && (g > 0 ? t.attr("textAlign", "start") : t.attr("textAlign", "end")) }) } } }, _getAvgLabelLength: function(t) {
                    var e = t.get("children");
                    return e[1].attr("x") - e[0].attr("x") }, getPercentPoint: function(t) {
                    var e = this,
                        n = {},
                        r = e.get("position");
                    switch (r) {
                        case "top":
                            n = { x: t, y: 1 };
                            break;
                        case "bottom":
                            n = { x: t, y: 0 };
                            break;
                        case "left":
                            n = { x: 0, y: t };
                            break;
                        case "right":
                            n = { x: 1, y: t } }
                    return n }, getLinePath: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        r = [];
                    return r.push(["M", e.x, e.y]), r.push(["L", n.x, n.y]), r }, getTickEnd: function(t, e) {
                    var n = this,
                        r = n.get("tickLine"),
                        e = e ? e : r.value;
                    return n.getSidePoint(t, e) }, getSideVector: function(t) {
                    var e, n = this,
                        r = n._getAlignFactor();
                    return e = n.isVertical() ? new o.Vector2(t * r, 0) : new o.Vector2(0, t * r) }, getAxisVector: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end");
                    return new o.Vector2(n.x - e.x, n.y - e.y) }, getSidePoint: function(t, e) {
                    var n = this,
                        r = {},
                        i = n.getSideVector(e);
                    return r.x = t.x + i.x, r.y = t.y + i.y, r }, _isReflectX: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.get("x");
                    return n.start > n.end }, _isReflectY: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.get("y");
                    return n.start < n.end }, _getAlignFactor: function() {
                    var t, e = this,
                        n = e.get("factor"),
                        r = e.get("coord");
                    return n ? n : (t = e.get("position"), n = "bottom" === t || "right" === t ? 1 : -1, "bottom" !== t && "top" !== t || !e._isReflectY() || (n *= -1), "left" !== t && "right" !== t || !e._isReflectX() || (n *= -1), r.isTransposed && (n *= -1), e.set("factor", n), n) }, _renderTitle: function() {
                    var t = this,
                        e = t.get("title"),
                        n = t.getOffsetByPercent(.5),
                        r = t.get("titleOffset"),
                        i = t.get("labelsGroup");
                    if (i) {
                        var c = t.getMaxLabelWidth(i),
                            l = t.get("labelOffset") || 10;
                        c + l + 20 < r && (r = c + l + 20) }
                    var h = a.mix({}, e),
                        f = t.get("coord");
                    if (e.text) {
                        var g = t.getSideVector(r),
                            p = { x: n.x + g.x, y: n.y + g.y };
                        p = t.transPoint(p);
                        var v = t.getAxisVector();
                        v = f.trans(v.x, v.y);
                        var d = 0;
                        if (!u.equal(v.y, 0)) {
                            var x = new o.Vector2(1, 0),
                                m = new o.Vector2(v.x, v.y);
                            d = m.angleTo(x, !0) }
                        h.rotate = d * (180 / Math.PI), h.x = p.x, h.y = p.y;
                        t.addShape("Text", { elCls: s + "-title", attrs: h }) } }, getGridItemCfg: function(t) {
                    var e = this,
                        n = {},
                        r = e.get("coord"),
                        i = e.get("position"),
                        a = r.invertPoint(t),
                        s = t,
                        o = a;
                    n.x1 = s.x, n.y1 = s.y;
                    var u, c;
                    return c = "left" === i ? { x: 1, y: o.y } : "right" === i ? { x: 0, y: o.y } : "bottom" === i ? { x: o.x, y: 1 } : { x: o.x, y: 0 }, u = r.convertPoint(c), n.y2 = u.y, n.x2 = u.x, n } }), t.exports = r },
        function(t, e, n) {
            var r = n(66);
            r.ShowLabels = n(115), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(12),
                i = r.GroupBase,
                a = n(1),
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.CFG = { zIndex: 6, items: null, label: null, _label: { "font-Size": 12, textBaseline: "middle" }, renderer: null, custom: !1, animate: !1, html: '<div class="g-labels" style="position:absolute;top:0;left:0;"></div>', itemTpl: '<div class="g-label" style="position:absolute;">{text}</div>', duration: 400 }, a.extend(s, i), a.augment(s, { _initCfg: function() { s.superclass._initCfg.call(this), this.deepSet("label") }, _renderUI: function() { s.superclass._renderUI.call(this), this._drawLabels() }, _drawLabels: function() {
                    var t = this,
                        e = t.get("items");
                    a.each(e, function(e, n) { t._addLabel(e, n) }) }, _addLabel: function(t, e) {
                    var n = this._getLabelCfg(t, e);
                    return this._createText(n) }, _getLabelCfg: function(t, e) {
                    var n = this.get("label") || {},
                        r = this.get("renderer");
                    if (!a.isObject(t)) {
                        var i = t;
                        t = {}, t.text = i }
                    r && (t.text = r(t.text, t, e)), a.isNull(t.text) && (t.text = ""), t.text = t.text.toString(), t.x = (t.x || 0) + (n.x || 0), t.y = (t.y || 0) + (n.y || 0);
                    var s = a.mix({}, t, n);
                    return s }, _createText: function(t) {
                    var e = this,
                        n = e.get("custom"),
                        r = e.get("customDiv");
                    if (!n) return this.addShape("Text", { attrs: t });
                    if (!r) {
                        var i = e.get("html"),
                            s = e.get("canvas").get("el").parentNode;
                        r = a.createDom(i), s.style.position = "relative", s.appendChild(r), e.set("customDiv", r) }
                    var o = e._createDom(t);
                    r.appendChild(o), e._setCustomPosition(t, o) }, _setCustomPosition: function(t, e) {
                    var n = (this.get("canvas"), t["text-anchor"] || "start"),
                        r = t.y,
                        i = t.x,
                        s = a.getWidth(e),
                        o = a.getHeight(e);
                    r -= o / 2, "middle" === n ? i -= s / 2 : "end" === n && (i -= s), e.style.top = parseInt(r) + "px", e.style.left = parseInt(i) + "px" }, _createDom: function(t) {
                    var e = this,
                        n = e.get("itemTpl"),
                        r = a.substitute(n, t),
                        i = a.createDom(r);
                    return i }, getLabels: function() {
                    var t = this,
                        e = t.get("customDiv");
                    return e ? a.toArray(e.childNodes) : t.get("children") }, addLabel: function(t) {
                    var e = this.get("items"),
                        n = e.length;
                    return e.push(t), this._addLabel(t, n) }, changeLabel: function(t, e) {
                    var n, r, i = this,
                        s = i.get("custom");
                    if (n = a.indexOf(i.get("children"), t), r = i._getLabelCfg(e, n), t)
                        if (s) {
                            var o = i._createDom(r);
                            t.innerHTML = o.innerHTML, i._setCustomPosition(r, t) } else if (t.attr("text", r.text), t.attr("x") !== r.x || t.attr("y") !== r.y) {
                        var u = t.get("attrs").rotate;
                        u && t.rotateAtStart(-u), t.attr(r), u && t.rotateAtStart(u) } }, clear: function() {
                    var t = this,
                        e = t.get("customDiv");
                    e && (e.innerHTML = ""), s.superclass.clear.call(t) }, setItems: function(t) {
                    var e = this;
                    e.clear(), e.set("items", t), e._drawLabels() } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = n(12),
                a = i.GroupBase,
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.CFG = { title: {}, titleText: null, plotRange: null, _title: { text: " ", fill: "#333", textBaseline: "middle" }, dx: 0, dy: 0, position: !0 }, r.extend(s, a), r.augment(s, { _initCfg: function() { s.superclass._initCfg.call(this), r.isNull(this.get("title")) && this.set("titleText", null), this.deepSet("title") }, _beforeRenderUI: function() { s.superclass._beforeRenderUI.call(this);
                    var t = this.get("title");
                    this.set("itemsGroup", this.addGroup()), this.set("titleShape", this.addShape("Text", { attrs: t })) }, _renderUI: function() { s.superclass._renderUI.call(this), this._renderTitle() }, _renderTitle: function() {
                    var t = this.get("titleShape"),
                        e = this.get("titleText");
                    t.attr({ x: 0, text: e }) }, setPosition: function(t) {
                    var t = t ? t : this.get("position"),
                        e = this.get("plotRange");
                    if (e) {
                        var n = e.tl,
                            r = e.br,
                            i = this.get("dx"),
                            a = this.get("dy"),
                            s = this.getBBBox().width,
                            o = 0,
                            u = 0;
                        switch (t) {
                            case "top":
                                o = n.x, u = n.y;
                                break;
                            case "left":
                                o = n.x, u = (n.y + r.y) / 2;
                                break;
                            case "right":
                                o = r.x - s, u = (n.y + r.y) / 2;
                                break;
                            case "bottom":
                                o = (n.x + r.x) / 2 - s / 2, u = r.y }
                        this.move(o + i, u + a), this.set("position", t) } }, getCount: function() {
                    return this.get("itemsGroup").get("children").length }, getLeaveCount: function() {
                    var t = this.get("itemsGroup"),
                        e = t.get("children"),
                        n = [];
                    return n = r.filter(e, function(t) {
                        return t.get("checked") }), n.length }, setItems: function(t) { this.set("items", t), this.clearItems(), this._renderUI() }, addItem: function(t) {
                    var e = this.get("items");
                    e.push(t), this.clearItems(), this._renderUI() }, clearItems: function() {
                    var t = this.get("itemsGroup");
                    t.clear() } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(12),
                a = n(48),
                s = i.GroupBase,
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.CFG = { type: "plotBack", margin: null, border: null, plotRange: null, background: null }, r.extend(o, s), r.augment(o, { _beforeRenderUI: function() { this._calculateRange() }, _renderUI: function() { this._renderBorder(), this._renderBackground() }, _renderBorder: function() {
                    var t, e = this,
                        n = e.get("border"),
                        i = e.get("canvas"),
                        a = e.get("borderShape");
                    if (n) {
                        var s = e.get("width") || i.get("width"),
                            o = e.get("height") || i.get("height");
                        a ? a.attr({ x: 0, y: 0, width: s, height: o }) : (t = r.mix({ x: 0, y: 0, width: s, height: o }, n), a = this.addShape("Rect", { attrs: t }), this.set("borderShape", a)) } }, _renderBackground: function() {
                    var t, e, n, i, a = this,
                        s = a.get("background"),
                        o = a.get("plotRange"),
                        u = a.get("backShape");
                    s && (t = o.getWidth(), e = o.getHeight(), n = o.tl, i = { x: n.x, y: n.y, width: t, height: e }, u ? u.attr(i) : (s.image ? (i.img = s.image, u = a.addShape("Image", { attrs: i })) : (r.mix(i, s), u = a.addShape("Rect", { attrs: i })), a.set("backShape", u))) }, _calculateRange: function() {
                    var t, e, n = this,
                        i = n.get("margin"),
                        s = n.get("canvas"),
                        o = n.get("width") || s.get("width"),
                        u = n.get("height") || s.get("height"),
                        c = n.get("plotRange"),
                        l = 0,
                        h = 0,
                        f = 0,
                        g = 0;
                    r.isNumber(i) && (l = h = f = g = i), r.isArray(i) && (l = i[0], f = r.isNull(i[1]) ? i[0] : i[1], g = r.isNull(i[2]) ? i[0] : i[2], h = r.isNull(i[3]) ? f : i[3]), t = { x: h, y: u - g }, e = { x: o - f, y: l }, c ? c.reset(t, e) : (c = new a(t, e), n.set("plotRange", c)) }, repaint: function() {
                    return this._calculateRange(), this._renderBorder(), this._renderBackground(), this } }), t.exports = o },
        function(t, e, n) {
            var r = n(122);
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = n(16),
                a = i.G,
                s = a.Group,
                o = function(t) { o.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI() };
            o.CFG = {}, r.extend(o, s), r.augment(o, { _beforeRenderUI: function() { this._initCfg() }, _renderUI: function() {}, _initCfg: function() {}, _bindUI: function() {} }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(37),
                i = n(72),
                a = n(49),
                s = n(138),
                o = n(137),
                u = n(38),
                c = n(139),
                l = n(134),
                h = n(135),
                f = n(136);
            r.Cartesian = i, r.Rect = i, r.Polar = a, r.Theta = s, r.Rho = o, r.Plus = u, r.TriAngle = c, r.Clock = l, r.Gauge = h, r.Map = f, t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(37),
                a = function(t) {
                    var e = {};
                    r.mix(e, a.ATTRS, t), a.superclass.constructor.call(this, e), this._init() };
            a.ATTRS = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, r.extend(a, i), r.augment(a, { type: "cartesian", isRect: !0, _init: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        r = { start: e.x, end: n.x },
                        i = { start: e.y, end: n.y };
                    t.set("x", r), t.set("y", i) }, convertPoint: function(t) {
                    var e = this,
                        n = e.isTransposed ? t.y : t.x,
                        r = e.isTransposed ? t.x : t.y;
                    return { x: this.convertDim(n, "x"), y: this.convertDim(r, "y") } }, invertPoint: function(t) {
                    var e = this,
                        n = this.invertDim(t.x, "x"),
                        r = this.invertDim(t.y, "y"),
                        i = {};
                    return i.x = e.isTransposed ? r : n, i.y = e.isTransposed ? n : r, i } }), t.exports = a },
        function(t, e) {
            var n = { uniform: function(t) {
                    return Math.abs(t) < 1 ? .5 : 0 }, triangular: function(t) {
                    return Math.abs(t) < 1 ? 1 - Math.abs(t) : 0 }, epanechnikov: function(t) {
                    return Math.abs(t) < 1 ? .75 * (1 - t * t) : 0 }, quartic: function(t) {
                    return Math.abs(t) < 1 ? .9375 * Math.pow(1 - t * t, 2) : 0 }, triweight: function(t) {
                    return Math.abs(t) < 1 ? 35 / 32 * Math.pow(1 - t * t, 3) : 0 }, tricube: function(t) {
                    return Math.abs(t) < 1 ? 70 / 81 * Math.pow(1 - Math.pow(Math.abs(t), 3), 3) : 0 }, gaussian: function(t) {
                    return Math.abs(t) < 3 ? 1 / Math.sqrt(2 * Math.PI) * Math.exp(-.5 * t * t) : 0 }, cosine: function(t) {
                    return Math.abs(t) < 1 ? Math.PI / 4 * Math.cos(Math.PI / 2 * t) : 0 } };
            t.exports = n
        },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(30),
                a = n(2),
                s = "..x",
                o = "..y",
                u = "_value",
                c = "_level",
                l = function(t) { l.superclass.constructor.call(this, t) };
            r.extend(l, i), r.augment(l, { type: "tree", levels: 0, totalValue: 0, initDims: function(t) { t.unshift(o), t.unshift(s) }, getValueField: function() {
                    var t = this.getDims();
                    return t[3] || u }, getChildrenField: function() {
                    var t = this.getDims();
                    return t[2] }, exec: function(t) {
                    var e = this,
                        n = [],
                        r = a.merge.apply(null, t);
                    return n.push(e.execFrame(r)), n }, _traverseNodes: function(t, e) {
                    var n, i = this;
                    n = e ? e[c] + 1 : 0;
                    var a = i.getChildrenField(),
                        s = i.getValueField();
                    r.each(t, function(t) { t[c] = n, t.parent = e;
                        var r = t[a];
                        r ? (i._traverseNodes(t[a], t), s === u && (t[s] = i.getTotalValue(r))) : (s === u && (t[s] = 1), n + 1 > i.levels && (i.levels = n + 1)) }) }, getNodeValue: function(t) {
                    var e = this,
                        n = e.getValueField();
                    return t[n] }, getNodeRange: function(t, e, n) {
                    var r, i = this,
                        a = t[c],
                        s = i.levels,
                        o = e.indexOf(t),
                        u = t.parent,
                        l = 0,
                        h = 1,
                        f = 0;
                    if (u ? (r = i.getNodeValue(u), h = n.end.x - n.start.x, f = n.start.x) : r = i.getTotalValue(e), o > 0) {
                        var g = e.slice(0, o);
                        l = i.getTotalValue(g) }
                    var p = i.getNodeValue(t),
                        v = { start: { x: l / r * h + f, y: a / s }, end: { x: (l + p) / r * h + f, y: (a + 1) / s } };
                    return v }, getTotalValue: function(t) {
                    var e = this,
                        n = e.getValueField(),
                        i = 0;
                    return r.each(t, function(t) { i += t[n] }), i }, getStatObject: function(t, e) {
                    var n = r.mix({}, t);
                    return n[s] = (e.end.x + e.start.x) / 2, n[o] = (e.end.y + e.start.y) / 2, n }, _extractData: function(t, e, n) {
                    var i = this,
                        a = i.getChildrenField();
                    r.each(t, function(r) {
                        var s = i.getNodeRange(r, t, n),
                            o = i.getStatObject(r, s);
                        e.push(o), r[a] && i._extractData(r[a], e, s) }) }, execFrame: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        r = [];
                    e._traverseNodes(n), e._extractData(n, r, 0);
                    var t = new a(r);
                    return t } }), t.exports = l },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(43),
                a = n(2),
                s = function(t) { s.superclass.constructor.call(this, t) };
            r.extend(s, i), r.augment(s, { fractions: 10, execFrame: function(t) {
                    var e = this,
                        n = t.toJSON();
                    r.each(n, function(t) { e.toBin(t) });
                    var i = new a(n);
                    return e.execQuantile(i) }, getSplitArray: function() {
                    for (var t = this, e = t.fractions, n = [], r = 1 / e, i = 0; i <= 1; i += r) n.push(i);
                    return n }, execQuantile: function(t) {
                    var e = this,
                        n = [],
                        i = e.getDims(),
                        s = i[i.length - 1],
                        o = i.slice(0, i.length - 1),
                        u = a.group(t, o),
                        c = e.getSplitArray();
                    return r.each(u, function(t) {
                        var e = t.rowObject(0);
                        e[s] = a.quantile(t, s, c), n.push(e) }), new a(n) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(31),
                i = n(1),
                a = n(2),
                s = "..density",
                o = function(t) { o.superclass.constructor.call(this, t) };
            i.extend(o, r), i.augment(o, { type: "density", bandWidth: .01, colRange: {}, initDims: function(t) { t.push(s) }, execFrame: function(t) {
                    return t }, getWindowWidth: function(t, e) {
                    var n = a.max(t, e),
                        r = a.min(t, e),
                        i = (n - r) * this.bandWidth;
                    return i }, getCoordinate: function(t, e, n) {
                    for (var r = this, i = r.getDimRange(t, e), a = i.max, s = i.min, o = [], u = s; u <= a; u += n) o.push(u);
                    return o }, getDimRange: function(t, e) {
                    var n = this,
                        r = n.colRange[e];
                    if (!r) {
                        var i = a.range(t, e);
                        r = { min: i[0], max: i[1] } }
                    return r }, setRange: function(t, e) { this.colRange[t] = e } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2);
            t.exports = { exec: function(t) {
                    var e = this;
                    e.preExecute(t), this.stat && (t = this.stat.exec(t));
                    var n = [],
                        a = i.merge.apply(null, t),
                        s = e.getGroupCondition(),
                        o = i.groupToMap(a, s);
                    if (t.length > 1) r.each(t, function(t) {
                        var r = e.execFrame(t, o);
                        n.push(r) });
                    else {
                        var u = e.execFrame(t[0]);
                        n.push(u) }
                    return n }, execFrame: function(t, e) {
                    var n = this,
                        a = n.getGroupCondition(),
                        s = i.groupToMap(t, a),
                        o = [],
                        u = n.getStatDims()[0];
                    return r.each(s, function(r, i) {
                        var a = e ? e[i] : t,
                            s = n.transform(r, u, a);
                        o.push(s) }), i.merge.apply(null, o) } } },
        function(t, e, n) { "use strict";

            function r(t, e) { t.sort(function(t, n) {
                    return t[e] - n[e] }) }

            function i(t, e) {
                var n = 0;
                return a.each(t, function(t) { n += t[e] }), n }
            var a = n(1),
                s = function(t) {
                    return t },
                o = function(t) { a.mix(this, t), this.rect = this.rect || { x: 0, y: 0, dx: 1, dy: 1 }, this.init() };
            a.augment(o, { nodes: null, rect: null, valueField: "value", childrenField: "children", init: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.rect,
                        s = t.valueField;
                    r(e, s), a.each(e, function(e) { t._traverse(e) });
                    var o = i(e, s);
                    t.processNodes(e, n, o) }, _traverse: function(t, e) {
                    var n = this;
                    e = e || 0, t.depth = e;
                    var i = n.childrenField;
                    t.parent || (t.parent = null);
                    var s = t[i];
                    a.isArray(s) && (r(s, n.valueField), a.each(s, function(r) { r.parent = t, n._traverse(r, e + 1) })) }, getNodes: function() {
                    return this.nodes }, changeNodes: function(t) {
                    return this.nodes = t, this.init(), this }, processNodes: function() {}, pad: function(t) {
                    var e = { x: t.x, y: t.y, dx: t.dx, dy: t.dy };
                    return e }, position: function(t, e, n, r) {
                    var i, a = -1,
                        o = t.length,
                        u = n.x,
                        c = n.y,
                        l = e ? s(t.area / e) : 0;
                    if (e === n.dx) {
                        for ((r || l > n.dy) && (l = n.dy); ++a < o;) i = t[a], i.x = u, i.y = c, i.dy = l, u += i.dx = Math.min(n.x + n.dx - u, l ? s(i.area / l) : 0);
                        i.z = !0, i.dx += n.x + n.dx - u, n.y += l, n.dy -= l } else {
                        for ((r || l > n.dx) && (l = n.dx); ++a < o;) i = t[a], i.x = u, i.y = c, i.dx = l, c += i.dy = Math.min(n.y + n.dy - c, l ? s(i.area / l) : 0);
                        i.z = !1, i.dy += n.y + n.dy - c, n.x += l, n.dx -= l } }, scale: function(t, e) {
                    for (var n, r, i = -1, a = t.length, s = this.valueField; ++i < a;) r = (n = t[i])[s] * (e < 0 ? 0 : e), n.area = isNaN(r) || r <= 0 ? 0 : r } }), t.exports = o },
        function(t, e, n) { "use strict";

            function r(t) {
                if (!t.__attrs && t !== c) {
                    var e = t.superclass.constructor;
                    e && !e.__attrs && r(e), t.__attrs = {}, i.mix(!0, t.__attrs, e.__attrs), i.mix(!0, t.__attrs, t.ATTRS) } }
            var i = n(5),
                a = n(13),
                s = n(226),
                o = n(232),
                u = n(231),
                c = function(t) { this.__cfg = {};
                    var e = this.getDefaultCfg();
                    i.mix(this.__cfg, c.CFG, e, t), this.__cfg.uuid = i.guid(a.prefix), r(this.constructor), this.initAttrs(this.__cfg.attrs), this.initTransform(), this.initEventDispatcher(), this.init() };
            c.CFG = { id: null, zIndex: 0, canvas: null, parent: null, capture: !0, context: null, visible: !0, destroyed: !1 }, i.augment(c, s, o, u, { init: function() {}, getDefaultCfg: function() {
                    return {} }, set: function(t, e) {
                    var n = this,
                        r = "__set" + i.ucfirst(t);
                    return n[r] && (e = n[r](e)), n.__cfg[t] = e, this }, get: function(t) {
                    return this.__cfg[t] }, beforeDraw: function() {}, draw: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs.clip;
                    t.beforeDraw(), t.get("visible") && (e.save(), n && (e.save(), n.resetTransform(), n.createPath(), e.restore(), e.clip()), t.resetAttrs(), t.resetTransform(), t.drawInner(), e.restore()) }, drawInner: function() {}, show: function() {
                    return this.set("visible", !0), this }, hide: function() {
                    return this.set("visible", !1), this }, remove: function(t) {
                    var e = this;
                    if (void 0 === t && (t = !0), e.get("parent")) {
                        var n = e.get("parent"),
                            r = n.get("children");
                        i.remove(r, e), e.set("parent", null) }
                    return t && e.destroy(), e }, destroy: function() {
                    var t = this,
                        e = t.get("destroyed");
                    if (!e) return t.__cfg = {}, t.__attrs = null, t.__listeners = null, t.__m = null, t.set("destroyed", !0), t }, __setZIndex: function(t) {
                    var e = this;
                    return this.__cfg.zIndex = t, i.notNull(e.get("parent")) && e.get("parent").sort(), t }, __setAttrs: function(t) {
                    var e = this;
                    return e.attr(t), t }, clone: function() {
                    return i.clone(this) }, getBBox: function() {
                    return { minX: 0, maxX: 0, minY: 0, maxY: 0 } } }), t.exports = c },
        function(t, e, n) { "use strict";

            function r(t) { r.superclass.constructor.call(this, t), this.set("children", []) }
            var i = n(5),
                a = n(79),
                s = (n(7), n(3)),
                o = s.Vector3;
            i.extend(r, a), i.augment(r, { isGroup: !0, canFill: !0, canStroke: !0, remove: function(t, e) {
                    var n = this;
                    if (arguments.length >= 2) n.contain(t) && t.remove(e);
                    else {
                        if (1 === arguments.length) {
                            if (!i.isBoolean(t)) return n.contain(t) && t.remove(!0), n;
                            e = t }
                        0 === arguments.length && (e = !0), r.superclass.remove.call(n, e) }
                    return n }, add: function(t) {
                    var e = this,
                        n = e.get("children");
                    if (i.isArray(t)) i.each(t, function(t) { t.get("parent") && t.get("parent").remove(t, !1), e.__setEvn(t) }), n.push.apply(n, t);
                    else {
                        var r = t;
                        r.get("parent") && r.get("parent").remove(r, !1), e.__setEvn(r), n.push(r) }
                    return e }, contain: function(t) {
                    for (var e = this, n = e.get("children"), r = 0, i = n.length; r < i; r++)
                        if (n[r] === t) return !0;
                    return !1 }, __setEvn: function(t) {
                    var e = this;
                    t.set("parent", e), t.set("context", e.get("context"));
                    var n = t.__attrs.clip;
                    n && (n.set("parent", e), n.set("context", e.get("context"))), t.set("canvas", e.get("canvas")), i.each(t.get("children"), function(e) { t.__setEvn(e) }) }, getBBox: function() {
                    var t = this,
                        e = 1 / 0,
                        n = -(1 / 0),
                        r = 1 / 0,
                        a = -(1 / 0),
                        s = t.get("children");
                    return i.each(s, function(t) {
                        if (t.get("visible")) {
                            var i = t.getBBox("box");
                            if (!i) return !0;
                            var s = new o(i.minX, i.minY, 1),
                                u = new o(i.minX, i.maxY, 1),
                                c = new o(i.maxX, i.minY, 1),
                                l = new o(i.maxX, i.maxY, 1);
                            t.apply(s), t.apply(u), t.apply(c), t.apply(l);
                            var h = Math.min(s.x, u.x, c.x, l.x),
                                f = Math.max(s.x, u.x, c.x, l.x),
                                g = Math.min(s.y, u.y, c.y, l.y),
                                p = Math.max(s.y, u.y, c.y, l.y);
                            h < e && (e = h), f > n && (n = f), g < r && (r = g), p > a && (a = p) } }), { minX: e, minY: r, maxX: n, maxY: a } }, drawInner: function() {
                    var t = this,
                        e = t.get("children");
                    return i.each(e, function(t) { t.draw() }), t }, getCount: function() {
                    var t = this;
                    return t.get("children").length }, sort: function() {
                    var t = this,
                        e = t.get("children");
                    return e.sort(function(t, e) {
                        return t.get("zIndex") - e.get("zIndex") }), t }, find: function(t) {
                    var e = this;
                    return e.findBy(function(e) {
                        return e.get("id") === t }) }, findBy: function(t) {
                    var e = this,
                        n = e.get("children"),
                        r = null;
                    return i.each(n, function(e) {
                        if (t(e) ? r = e : e.findBy && (r = e.findBy(t)), r) return !1 }), r }, getShape: function(t, e) {
                    function n() {
                        for (var n = s.length - 1; n >= 0; n--) {
                            var i = s[n];
                            if (i.get("visible") && i.get("capture") && (i.isGroup ? r = i.getShape(t, e) : i.isHit(t, e) && (r = i)), r) break } }
                    var r, i = this,
                        a = i.__attrs.clip,
                        s = i.get("children");
                    return a ? a.inside(t, e) && n() : n(), r }, clear: function() {
                    for (var t = this, e = t.get("children"); 0 !== e.length;) e[e.length - 1].remove();
                    return t }, destroy: function() {
                    var t = this;
                    t.get("destroyed") || (t.clear(), r.superclass.destroy.call(t)) } }), t.exports = r },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                var r = g.exec(t),
                    i = c.mod(c.degreeToRad(parseFloat(r[1])), 2 * Math.PI),
                    a = r[2],
                    o = e.getBBox();
                if (0 <= i && i < .5 * Math.PI) var u = { x: o.minX, y: o.minY },
                    l = { x: o.maxX, y: o.maxY };
                else if (.5 * Math.PI <= i && i < Math.PI) var u = { x: o.maxX, y: o.minY },
                    l = { x: o.minX, y: o.maxY };
                else if (Math.PI <= i && i < 1.5 * Math.PI) var u = { x: o.maxX, y: o.maxY },
                    l = { x: o.minX, y: o.minY };
                else var u = { x: o.minX, y: o.maxY },
                    l = { x: o.maxX, y: o.minY };
                var h = Math.tan(i),
                    f = h * h,
                    p = (l.x - u.x + h * (l.y - u.y)) / (f + 1) + u.x,
                    v = h * (l.x - u.x + h * (l.y - u.y)) / (f + 1) + u.y,
                    d = e.get("context"),
                    x = d.createLinearGradient(u.x, u.y, p, v);
                return s(a, x, n), x }

            function i(t, e, n) {
                var r = p.exec(t),
                    i = parseFloat(r[1]),
                    a = parseFloat(r[2]),
                    o = parseFloat(r[3]),
                    u = r[4],
                    c = e.getBBox(),
                    l = e.get("context"),
                    h = c.maxX - c.minX,
                    f = c.maxY - c.minY,
                    g = Math.sqrt(h * h + f * f) / 2,
                    v = l.createRadialGradient(c.minX + h * i, c.minY + f * a, o, c.minX + h / 2, c.minY + f / 2, g);
                return s(u, v, n), v }

            function a(t, e) {
                var n = v.exec(t),
                    r = n[1],
                    i = n[2];
                switch (r) {
                    case "a":
                        r = "repeat";
                        break;
                    case "x":
                        r = "repeat-x";
                        break;
                    case "y":
                        r = "repeat-y";
                        break;
                    case "n":
                        r = "no-repeat";
                        break;
                    default:
                        r = "no-repeat" }
                var a = document.getElementById(i),
                    s = e.get("context"),
                    o = s.createPattern(a, r);
                return o }

            function s(t, e, n) {
                var r = t.match(d);
                u.each(r, function(t) { t = t.split(":");
                    var r = o(t[1], n);
                    e.addColorStop(t[0], r) }) }

            function o(t, e) {
                if (void 0 === e) return t;
                t = new l(t), t.multiplyA(e);
                var n = t.getType();
                return "hsl" === n ? t.getHSLStyle() : "rgb" === n ? t.getRGBStyle() : void 0 }
            var u = n(5),
                c = n(4),
                l = n(36),
                h = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
                f = /[^\s\,]+/gi,
                g = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
                p = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
                v = /^p\s*([axyn])\s+(.*)/i,
                d = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
                x = { parsePath: function(t) {
                        return t = t || [], u.isArray(t) ? t : u.isString(t) ? (t = t.match(h), u.each(t, function(e, n) {
                            if (e = e.match(f), e[0].length > 1) {
                                var r = e[0].charAt(0);
                                e.splice(1, 0, e[0].substr(1)), e[0] = r }
                            u.each(e, function(t, n) { isNaN(t) || (e[n] = +t) }), t[n] = e }), t) : void 0 }, parseStyle: function(t, e, n) {
                        if (u.isString(t)) return g.test(t) ? r(t, e, n) : p.test(t) ? i(t, e, n) : v.test(t) ? a(t, e) : o(t, n) } };
            t.exports = x },
        function(t, e, n) { "use strict";
            var r = n(3),
                i = r.Vector2;
            t.exports = { at: function(t, e, n) {
                    return (e - t) * n + t }, pointDistance: function(t, e, n, r, a, s) {
                    var o = new i(n - t, r - e);
                    if (o.isZero()) return NaN;
                    var u = o.vertical();
                    u.normalize();
                    var c = new i(a - t, s - e);
                    return Math.abs(c.dot(u)) }, box: function(t, e, n, r, i) {
                    var a = i / 2,
                        s = Math.min(t, n),
                        o = Math.max(t, n),
                        u = Math.min(e, r),
                        c = Math.max(e, r);
                    return { minX: s - a, minY: u - a, maxX: o + a, maxY: c + a } } } },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(84),
                a = n(2),
                s = n(33),
                o = function u(t) { u.superclass.constructor.call(this, t) };
            r.extend(o, i), r.augment(o, { dims: [], cols: 5, rows: null, drawTitles: function(t, e) {
                    var n = this,
                        i = n.dims;
                    r.each(t, function(t) { n.drawFacetTitle("col", t, e) }), n.drawDimTitle("col", i[0], e) }, getRegion: function(t, e, n, r) {
                    var i = this,
                        a = i.plotRange,
                        s = i.margin,
                        o = a.tl,
                        u = a.br,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = { x: o.x + c * n, y: o.y + l * (r + 1) - s },
                        f = { x: h.x + c - s, y: h.y - l + s };
                    return { start: h, end: f } }, generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        i = n[0];
                    if (!i) throw new Error("Please specify for the field for facet!");
                    var o = e.getDimValues(i, t),
                        u = o.length,
                        c = e.cols,
                        l = parseInt((u + c - 1) / c, 10),
                        h = [],
                        f = 0;
                    return r.each(o, function(n, r) {
                        var g = parseInt(r / c, 10),
                            p = r % c,
                            v = [{ dim: i, value: n, values: o }],
                            d = e.getFilter(v),
                            x = a.filter(t, d),
                            m = new s({ type: e.type, count: u, xValue: n, xDim: i, yValue: n, yDim: i, colIndex: p, rowIndex: g, cols: c, rows: l, frame: x, region: e.getRegion(l, c, p, g), index: f++ });
                        h.push(m) }), h } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(44),
                s = n(33),
                o = function u(t) { u.superclass.constructor.call(this, t) };
            r.extend(o, a), r.augment(o, { dims: [], defs: {}, type: "rect", plotRange: null, drawTitles: function(t, e) {
                    if (!(t.length <= 1)) {
                        var n = this,
                            i = t[0];
                        r.each(t, function(t) { t.cols > 0 && t.rowIndex === t.rows - 1 && n.drawFacetTitle("col", t, e), t.rows > 0 && t.colIndex === t.cols - 1 && n.drawFacetTitle("row", t, e) }), i && (i.cols > 1 && n.drawDimTitle("col", i.xDim, e), i.rows > 1 && n.drawDimTitle("row", i.yDim, e)) } }, getRegion: function(t, e, n, r) {
                    var i = this,
                        a = i.plotRange,
                        s = 1 === t && 1 === e ? 0 : i.margin,
                        o = a.bl,
                        u = a.tr,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = { x: o.x + c * n, y: o.y + l * r - s },
                        f = { x: h.x + c - s, y: h.y + l + s };
                    return { start: h, end: f } }, generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        a = [],
                        o = 1,
                        u = 1,
                        c = n[0],
                        l = n[1],
                        h = [""],
                        f = [""];
                    c && (h = e.getDimValues(c, t), u = h.length), l && (f = e.getDimValues(l, t), o = f.length);
                    var g = 0;
                    return r.each(h, function(n, p) { r.each(f, function(r, v) {
                            var d = [{ dim: c, value: n, values: h }, { dim: l, value: r, values: f }],
                                x = e.getFilter(d),
                                m = i.filter(t, x),
                                y = new s({ type: e.type, xValue: n, yValue: r, xDim: c, yDim: l, colIndex: p, rowIndex: v, cols: u, rows: o, frame: m, region: e.getRegion(o, u, p, v), index: g++ });
                            a.push(y) }) }), a } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = { Point: n(289), Path: n(57), Line: n(88), Interval: n(281), Area: n(278), Polygon: n(290), Schema: n(291), Heatmap: n(280), Contour: n(279) };
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(87),
                a = n(24),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, i), r.augment(s, { getPointRauis: function(t, e) {
                    return a.getPointRadius(t, e) }, getCirclePoint: function(t, e, n) {
                    var r = this,
                        i = r.get("coord"),
                        a = i.getCenter(),
                        s = r.getPointRauis(i, n);
                    if (i.isTransposed && s > e) {
                        var o = Math.asin(e / (2 * s));
                        t += 2 * o } else s += e;
                    return { x: a.x + s * Math.cos(t), y: a.y + s * Math.sin(t), angle: t, r: s } }, getArcPoint: function(t, e) {
                    var n, i = this;
                    return e = e || 0, n = r.isArray(t.x) || r.isArray(t.y) ? { x: r.isArray(t.x) ? t.x[e] : t.x, y: r.isArray(t.y) ? t.y[e] : t.y } : t, i.transLabelPoint(n), n }, getPointAngle: function(t) {
                    var e = this,
                        n = e.get("coord");
                    return a.getPointAngle(n, t) }, getMiddlePoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        i = t.length,
                        a = { x: 0, y: 0 };
                    return r.each(t, function(t) { a.x += t.x, a.y += t.y }), a.x /= i, a.y /= i, a = n.convert(a) }, _isToMiddle: function(t) {
                    return t.x.length > 2 }, getLabelPoint: function(t, e, n) {
                    var r, i = this,
                        a = t[n],
                        s = 1;
                    i._isToMiddle(e) ? r = i.getMiddlePoint(e.points) : (1 === t.length && 0 === n ? n = 1 : 0 === n && (s = -1), r = i.getArcPoint(e, n));
                    var o = i.getDefaultOffset();
                    o *= s;
                    var u = i.getPointAngle(r),
                        c = i.getCirclePoint(u, o, r);
                    return c.text = a, c.angle = u, c.color = e.color, c.rotate = i.getLabelRotate(u, o, e), c }, _isEmitLabels: function() {
                    var t = this.get("labels");
                    return t.labelEmit }, getLabelRotate: function(t) {
                    var e, n = this;
                    return e = 180 * t / Math.PI, e += 90, n._isEmitLabels() && (e -= 90), e && (e > 90 ? e -= 180 : e < -90 && (e += 180)), e }, getLabelAlign: function(t) {
                    var e, n = this,
                        r = n.get("coord");
                    if (r.isTransposed) {
                        var i = r.getCenter(),
                            a = n.getDefaultOffset();
                        e = Math.abs(t.x - i.x) < 1 ? "middle" : t.angle > Math.PI || t.angle <= 0 ? a > 0 ? "start" : "end" : a > 0 ? "end" : "start" } else e = "middle";
                    return e } }), t.exports = s },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = 0;
                return u.each(t, function(t) { e += t }), e / t.length }
            var i = n(11),
                a = i.Components,
                s = a.Labels,
                o = i.Group,
                u = n(1),
                c = n(6),
                l = ["line", "point", "path"],
                h = function f(t) { f.superclass.constructor.call(this, t) };
            h.CFG = { labels: c.labels, labelsCfg: null, coord: null, geomType: null, zIndex: 6 }, u.extend(h, o), u.mixin(h, [s.ShowLabels]), u.augment(h, { _renderUI: function() { h.superclass._renderUI.call(this), this.initLabelsCfg(), this.renderLabels() }, initLabelsCfg: function() {
                    var t = this,
                        e = t.getDefaultLabelCfg(),
                        n = t.get("labelsCfg");
                    u.mix(!0, e, n), t.set("labels", e) }, getDefaultLabelCfg: function() {
                    var t = this,
                        e = t.get("labelsCfg"),
                        n = t.get("geomType");
                    return "polygon" === n || e && e.offset < 0 && u.indexOf(l, n) === -1 ? u.mix(!0, {}, c.innerLabels) : this.get("labels") }, getLabelsItems: function(t) {
                    var e = this,
                        n = [],
                        r = e.get("labels");
                    return u.each(t, function(t) {
                        var i = t.label;
                        u.isArray(i) || (i = [i]);
                        var a = i.length;
                        u.each(i, function(s, o) {
                            var c = e.getLabelPoint(i, t, o);
                            if (c) { c = u.mix({}, t._origin, c);
                                var l;
                                l = r && r.label && r.label["text-anchor"] ? r.label["text-anchor"] : e.getLabelAlign(c, o, a), c["text-anchor"] = l, n.push(c) } }) }), n }, adjustItems: function(t) {
                    return t }, drawLines: function() {}, getLabelPoint: function(t, e, n) {
                    function i(e, n) {
                        return u.isArray(e) && (e = 1 === t.length ? e.length <= 2 ? e[e.length - 1] : r(e) : e[n]), e }
                    var a = this,
                        s = { x: i(e.x, n), y: i(e.y, n), text: t[n] },
                        o = a.getLabelOffset(s, n, t.length);
                    return a.transLabelPoint(s), s.x += o.x, s.y += o.y, s }, transLabelPoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = n.trans(t.x, t.y, 1);
                    t.x = r.x, t.y = r.y }, getOffsetVector: function() {
                    var t, e = this,
                        n = e.get("labels"),
                        r = n.offset || 0,
                        i = e.get("coord");
                    return t = i.isTransposed ? i.trans(r, 0) : i.trans(0, r) }, getDefaultOffset: function() {
                    var t = this,
                        e = 0,
                        n = t.get("coord"),
                        r = t.getOffsetVector();
                    return e = n.isTransposed ? r.x : r.y }, getLabelOffset: function(t, e, n) {
                    var r = this,
                        i = r.getDefaultOffset(),
                        a = r.get("coord"),
                        s = a.isTransposed,
                        o = s ? "x" : "y",
                        u = s ? 1 : -1,
                        c = { x: 0, y: 0 };
                    return e > 0 || 1 === n ? c[o] = i * u : c[o] = i * u * -1, c }, getLabelAlign: function(t, e, n) {
                    var r = this,
                        i = "middle",
                        a = r.get("coord");
                    if (a.isTransposed) {
                        var s = r.getDefaultOffset();
                        i = s < 0 ? "end" : 0 === s ? "middle" : "start", n > 1 && 0 === e && ("end" === i ? i = "start" : "start" === i && (i = "end")) }
                    return i }, showLabels: function(t) {
                    var e = this,
                        n = e.getLabelsItems(t),
                        r = e.get("labels");
                    n = e.adjustItems(n), e.resetLabels(n), r.labelLine && e.drawLines(n, r.labelLine) }, destroy: function() { this.removeLabels(), h.superclass.destroy.call(this) } }), t.exports = h },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(57),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            a.ATTRS = { type: "line" }, r.extend(a, i), r.augment(a, { framePreprocess: function(t) {
                    var e = this,
                        n = [];
                    return r.each(t, function(t) { n.push(e.sortFrame(t)) }), n } }), t.exports = a },
        function(t, e) { "use strict";

            function n() {
                var t = document.createElement("i");
                return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t }
            var r = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
            t.exports = { toRGB: function() {
                    var t;
                    return document.body && (t = n()),
                        function(e) { t || (t = n()), t.style.color = e;
                            var i = document.defaultView.getComputedStyle(t, "").getPropertyValue("color"),
                                a = r.exec(i);
                            return a.shift(), this.arr2rgb(a) } }(), toHex: function(t) {
                    return t = Math.round(t), t = t.toString(16), 1 === t.length && (t = "0" + t), t }, hsl2Rgb: function(t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = {};
                    if (0 === n) i.r = i.g = i.b = r;
                    else {
                        var a = function(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t },
                            s = r <= .5 ? r * (1 + n) : r + n - r * n,
                            o = 2 * r - s;
                        i.r = a(o, s, e + 1 / 3), i.g = a(o, s, e), i.b = a(o, s, e - 1 / 3) }
                    return i.r = Math.min(Math.round(255 * i.r), 255), i.g = Math.min(Math.round(255 * i.g), 255), i.b = Math.min(Math.round(255 * i.b), 255), "#" + this.toHex(i.r) + this.toHex(i.g) + this.toHex(i.b) }, rgb2hsl: function(t) {
                    var e, n, r, i = this.rgb2arr(t),
                        a = i[0] / 255,
                        s = i[1] / 255,
                        o = i[2] / 255,
                        u = Math.min(a, s, o),
                        c = Math.max(a, s, o),
                        l = c - u;
                    return c == u ? e = 0 : a == c ? e = (s - o) / l : s == c ? e = 2 + (o - a) / l : o == c && (e = 4 + (a - s) / l), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = (u + c) / 2, n = c == u ? 0 : r <= .5 ? l / (c + u) : l / (2 - c - u), [e / 360, n, r] }, arr2rgb: function(t) {
                    return "#" + this.toHex(t[0]) + this.toHex(t[1]) + this.toHex(t[2]) }, rgb2arr: function(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e } } },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t }

            function i(t) {
                return null === t || void 0 === t }
            var a = n(1),
                s = function(t, e) { this.data = t, r(this, e), this.initFrame() };
            s.prototype = { isFrame: !0, initFrame: function() {
                    var t = this,
                        e = t.data,
                        n = t.colNames(),
                        r = t.arr;
                    if (a.isArray(e[0]) && (r = t.arr = e), !r) { r = [];
                        for (var i = 0; i < n.length; i++) {
                            for (var s = [], o = n[i], u = 0; u < e.length; u++) s.push(e[u][o]);
                            r.push(s) }
                        t.arr = r } }, contains: function(t) {
                    var e = this.colNames();
                    return a.indexOf(e, t) !== -1 }, colNames: function() {
                    var t = this,
                        e = t.names;
                    if (!e) {
                        var n = this.data,
                            r = n[0];
                        if (e = [], r)
                            for (var i in r) r.hasOwnProperty(i) && e.push(i);
                        t.names = e }
                    return e }, rowCount: function() {
                    var t = this,
                        e = t.arr;
                    return e && e.length ? e[0].length : 0 }, colCount: function() {
                    var t = this,
                        e = t.colNames();
                    return e ? e.length : 0 }, colIndex: function(t) {
                    return a.indexOf(this.names, t) }, colArray: function(t) {
                    return this.col(t).toArray()[0] }, colReplace: function(t, e) {
                    var n = this.arr,
                        r = this.colNames();
                    if (a.isString(t)) {
                        var i = t;
                        t = a.indexOf(r, i) }
                    return n[t] = e, this }, each: function(t) {
                    for (var e = this, n = e.rowCount(), r = 0; r < n; r++) {
                        var i = e._getObject(r);
                        t(i, r) }
                    return e }, row: function(t) {
                    var e = this,
                        n = e.colNames(),
                        r = [];
                    return r.push(e._getObject(t, n)), new s(r, { names: n.slice(0) }) }, rowObject: function(t) {
                    return this._getObject(t) }, _getObject: function(t, e) {
                    var n = this,
                        r = n.arr,
                        i = {};
                    e = e || n.colNames();
                    for (var a = 0; a < e.length; a++) i[e[a]] = r[a][t];
                    return i }, rows: function(t) {
                    var e = this,
                        n = e.colNames(),
                        r = e.data,
                        i = [];
                    if (r)
                        for (var a = 0; a < t.length; a++) i.push(e._getObject(a, n));
                    return new s(i, { names: n.slice(0) }) }, _getColArray: function(t, e, n) {
                    var r = this,
                        s = r.arr,
                        o = r.colNames(),
                        u = [],
                        c = r.rowCount(),
                        l = a.map(t, function(t) {
                            return a.indexOf(o, t) });
                    e = e || 0, n = i(n) ? c : n;
                    for (var h = 0; h < l.length; h++) {
                        var f = s[l[h]] || [],
                            g = f.slice(e, n);
                        u.push(g) }
                    return u }, col: function(t) {
                    var e, n = this,
                        r = n.colNames();
                    a.isString(t) ? (e = t, t = a.indexOf(r, e)) : e = r[t];
                    var i = n._getColArray([e]);
                    return new s(i, { names: [e] }) }, addCol: function(t, e) {
                    var n = this;
                    if (a.isFunction(e)) {
                        var r = e;
                        e = [], n.each(function(t, n) {
                            var i = r(t, n);
                            e.push(i) }) }
                    n.names.push(t), n.arr.push(e) }, cols: function(t) {
                    for (var e = this, n = 0; n < t.length; n++) {
                        var r = t[n];
                        a.isNumber(r) && (t[n] = e.names[r]) }
                    var i = e._getColArray(t);
                    return new s(i, { names: t }) }, cell: function(t, e) {
                    var n = this,
                        r = n.colNames(),
                        i = n.arr;
                    return a.isString(e) && (e = a.indexOf(r, e)), i[e] ? i[e][t] : void 0 }, toArray: function() {
                    return this.arr }, toJSON: function() {
                    for (var t = this, e = t.rowCount(), n = [], r = 0; r < e; r++) n.push(t._getObject(r));
                    return n }, sub: function(t, e, n, r) {
                    var a, o = this,
                        u = o.colNames();
                    return t = t || 0, e ? e += 1 : e = void 0, u = u.slice(t, e), i(n) || (r ? r += 1 : r = o.rowCount - 1), a = o._getColArray(u, n, r), new s(a, { names: u }) }, toString: function() {
                    var t = this,
                        e = [],
                        n = t.arr,
                        r = t.colNames(),
                        i = t.rowCount();
                    e.push(r.join("\t"));
                    for (var a = 0; a < i; a++) {
                        for (var s = [], o = 0; o < n.length; o++) s.push(n[o][a]);
                        e.push(s.join("\t")) }
                    return e.join("\n") }, s: function() {
                    return this.toString() } }, t.exports = s },
        function(t, e, n) { "use strict";

            function r(t, e, n, r) {
                var i = t[r] + (e[r] - t[r]) * n;
                return i }
            var i = n(60),
                a = n(1),
                s = { calColor: function(t, e, n) {
                        var a, s = t.length - 1,
                            o = Math.floor(s * e),
                            u = s * e - o,
                            c = t[o],
                            l = o === s ? c : t[o + 1];
                        return "hsl" === n ? a = i.hsl2Rgb([r(c, l, u, 0), r(c, l, u, 1), r(c, l, u, 2)]) : (a = { r: r(c, l, u, 0), g: r(c, l, u, 1), b: r(c, l, u, 2) }, a = "#" + i.toHex(a.r) + i.toHex(a.g) + i.toHex(a.b)), a }, lightness: function(t, e) { e = e || 0;
                        var n = [
                            [e, 1, .9],
                            [e, 1, .5]
                        ];
                        return s.calColor(n, t, "hsl") }, red: function(t) {
                        return this.lightness(t, 0) }, blue: function(t) {
                        return this.lightness(t, .66) }, green: function(t) {
                        return this.lightness(t, .33) }, gradient: function(t) {
                        var e = [];
                        return a.isString(t) && (t = t.split("-")), a.each(t, function(t) { t.indexOf("#") === -1 && (t = i.toRGB(t)), e.push(i.rgb2arr(t)) }),
                            function(t) {
                                return s.calColor(e, t) } }, gradientHsl: function(t) {
                        var e = [];
                        return a.isString(t) && (t = t.split("-")), a.each(t, function(t) { t.indexOf("#") === -1 && (t = i.toRGB(t)), e.push(i.rgb2hsl(t)) }),
                            function(t) {
                                return s.calColor(e, t, "hsl") } }, saturation: function(t, e) { e = e || 0;
                        var n = [
                            [e, 0, .5],
                            [e, 1, .5]
                        ];
                        return s.calColor(n, t, "hsl") }, hue: function(t) {
                        var e = [
                            [0, 1, .5],
                            [1, 1, .5]
                        ];
                        return s.calColor(e, t, "hsl") }, brightness: function(t) {
                        var e = [
                            [255, 255, 255],
                            [0, 0, 0]
                        ];
                        return s.calColor(e, t) }, heat: function(t) {
                        var e = [
                            [255, 255, 255],
                            [255, 127.5, 0],
                            [0, 0, 0]
                        ];
                        return s.calColor(e, t) }, rainbow: function(t) {
                        var e = [
                            [0, 255, 255],
                            [0, 0, 255],
                            [0, 255, 0],
                            [255, 0, 0]
                        ];
                        return s.calColor(e, t) }, circular: function(t) {
                        var e = [
                            [0, 0, 255],
                            [0, 255, 0],
                            [255, 255, 0],
                            [255, 0, 0],
                            [0, 0, 255]
                        ];
                        return s.calColor(e, t) }, bipolar: function(t) {
                        var e = [
                            [0, 255, 0],
                            [0, 0, 0],
                            [255, 0, 0]
                        ];
                        return s.calColor(e, t) } };
            t.exports = s },
        function(t, e, n) {
            var r = n(93);
            r.Group = n(94), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = function() {};
            i.ATTRS = { actived: !1 }, r.augment(i, { isActived: function() {
                    return this.get("actived") }, setActived: function() { this.setActiveStatus(!0), this.set("actived", !0) }, setActiveStatus: function() {}, clearActived: function() { this.setActiveStatus(!1), this.set("actived", !1), this.clearActivedItem && this.clearActivedItem() } }), t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = function() {};
            i.ATTRS = { multipleActive: !1 }, r.augment(i, { isItemActived: function(t) {
                    return t.isActived() }, getActiveItems: function() {
                    return this.get("children") }, setItemActived: function(t, e) { e ? t.setActived() : t.clearActived() }, onActived: function(t) { this.fire("itemactived", { item: t }), this.fireUpGroup && this.fireUpGroup("actived", t) }, onUnActived: function(t) { this.fire("itemunactived", { item: t }), this.fireUpGroup && this.fireUpGroup("unactived", t) }, setActivedItem: function(t) {
                    var e = this,
                        n = e.get("multipleActive");
                    n || e.clearActivedItem(), t && !e.isItemActived(t) && (e.setItemActived(t, !0), e.onActived(t)) }, getActived: function() {
                    var t = this,
                        e = t.getActiveItems(),
                        n = null;
                    return r.each(e, function(e) {
                        if (t.isItemActived(e)) return n = e, !1 }), n }, getAllActived: function() {
                    var t = this,
                        e = t.getActiveItems(),
                        n = [];
                    return r.each(e, function(e) { t.isItemActived(e) && n.push(e) }), n }, clearAllActived: function() {
                    var t = this,
                        e = t.getAllActived();
                    return r.each(e, function(e) { t.setItemActived(e, !1), t.onUnActived(e) }), this }, clearActivedItem: function(t) {
                    var e = this;
                    return t = t || e.getActived(), t && (e.setItemActived(t, !1), e.onUnActived(t)), this } }), t.exports = i },
        function(t, e, n) {
            var r = n(98);
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            a.ATTRS = { _circle: { center: { x: 0, y: 0 }, r: 0, startAngle: -Math.PI / 2, endAngle: 1.5 * Math.PI } }, i.extend(a, r), i.augment(a, { getInitAttrs: function() {
                    var t = this.get("_circle"),
                        e = this.getCircleInfo(),
                        n = e.center;
                    e = i.mix(t, e);
                    var r = { x: n.x, y: n.y, rs: 0, re: e.r + 100, startAngle: e.startAngle / Math.PI * 180, endAngle: e.startAngle / Math.PI * 180 };
                    return r }, getEndAttrs: function() {
                    var t = this.get("_circle"),
                        e = this.getCircleInfo();
                    e = i.mix(t, e);
                    var n = { endAngle: e.endAngle / Math.PI * 180 };
                    return n }, getTarget: function() {
                    var t = this.get("group"),
                        e = t.getParent(),
                        n = e.addShape("Fan");
                    return t.attr("clip", n), n } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { getInitAttrs: function() {
                    var t = this.getCircleInfo(),
                        e = t.center,
                        n = { x: e.x, y: e.y, r: 0 };
                    return n }, getEndAttrs: function() {
                    var t = this.getCircleInfo(),
                        e = { r: t.r + 150 };
                    return e }, getTarget: function() {
                    var t = this.get("group"),
                        e = t.getParent(),
                        n = e.addShape("Circle");
                    return t.attr("clip", n), n } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(96),
                a = n(97),
                s = n(102),
                o = n(101),
                u = n(100),
                c = n(99),
                l = n(103);
            r.angle = i, r.circle = a, r.waveh = s, r.scaleXY = o, r.scaleY = u, r.scaleX = c, r.waves = l, t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = n(11).Matrix,
                s = a.Matrix3,
                o = i.MatrixUtil,
                u = function(t) { u.superclass.constructor.call(this, t) };
            i.extend(u, r), i.augment(u, { getInitMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, .01, 1, e.x - t.width / 2, t.y) }, getAnimMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, 1, 1, e.x - t.width / 2, t.y) } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = n(11).Matrix,
                s = a.Matrix3,
                o = i.MatrixUtil,
                u = function(t) { u.superclass.constructor.call(this, t) };
            i.extend(u, r), i.augment(u, { getInitMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, 1, -.01, e.x, t.y + t.height) }, getAnimMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, 1, 1, e.x, t.y + t.height) } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(15),
                i = n(1),
                a = n(11).Matrix,
                s = a.Matrix3,
                o = i.MatrixUtil,
                u = function(t) { u.superclass.constructor.call(this, t) };
            i.extend(u, r), i.augment(u, { getInitMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, .01, .01, e.x, e.y) }, getAnimMatrix: function() {
                    var t = this.get("rect"),
                        e = this.getRectCenter(t),
                        n = new s;
                    return n = o.scale(n, 1, 1, e.x, e.y) } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(61),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { getInitAttrs: function() {
                    var t = this.get("rect"),
                        e = { x: t.x, y: t.y, width: t.width, height: 0 };
                    return e } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(61),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { getInitAttrs: function() {
                    var t = this.get("rect"),
                        e = { x: t.x, y: t.y, width: 0, height: t.height };
                    return e } }), t.exports = a },
        function(t, e, n) {
            "use strict";

            function r(t) {
                return null === t || void 0 === t }

            function i(t) {
                var e = 1;
                if (t < 1e-6) return e;
                for (; t > 10;) e = 10 * e, t /= 10;
                for (; t < 1;) e /= 10, t = 10 * t;
                return e }

            function a(t, e, n) { n = n || M;
                var r = n !== M,
                    a = 1;
                t < 0 && (a = -1), t *= a;
                var o = i(t);
                return a *= o, t /= o, t = r ? s(n, t) : e && a > 0 ? b.snapFloor(n, t) : b.snapCeiling(n, t), t * a }

            function s(t, e) {
                for (var n = e, r = e, i = e, a = 1; a < t.length; a++) {
                    var s = t[a];
                    if (s > e) { n = s;
                        break }
                    r = s }
                return i = Math.abs(r - e) < Math.abs(n - e) ? r : n }

            function o(t, e, n) {
                var r;
                return r = n ? Math.ceil(t / e, 10) : Math.floor(t / e, 10), r * e }

            function u(t) {
                for (var e = t[0], n = t[0], r = t.length, i = 1; i < r; i++) {
                    var a = t[i];
                    e < a && (e = a), n > a && (n = a) }
                return n === e && (n > 0 ? n = 0 : e = 0), { max: e, min: n } }

            function c(t, e) {
                var n = [];
                return e ? S.isArray(t[0]) && S.each(t[0], function(e, r) {
                    for (var i = e, a = 1; a < t.length; a++) i += t[a][r];
                    n.push(i) }) : S.each(t, function(t) { S.isArray(t) ? n = n.concat(t) : n.push(t) }), n }

            function l(t, e, n) {
                var r = c(t, n);
                return e && (r = S.map(r, e)), u(r) }

            function h(t) {
                return t = new Date(t), w.getDate(t).getTime() }

            function f(t) { t = new Date(t);
                var e = w.getDate(t);
                return e < t && (e = w.addDay(1, e)), e.getTime() }

            function g(t) {
                return new Date(t).getFullYear() }

            function p(t) {
                return new Date(t, 0, 1).getTime() }

            function v(t) {
                return new Date(t).getMonth() }

            function d(t, e) {
                var n = g(t),
                    r = g(e),
                    i = v(t),
                    a = v(e);
                return 12 * (r - n) + (a - i) % 12 }

            function x(t, e) {
                return new Date(t, e, 1).getTime() }

            function m(t, e) {
                return Math.ceil((e - t) / L) }

            function y(t, e) {
                return Math.ceil((e - t) / D) }

            function _(t, e) {
                return Math.ceil((e - t) / 6e4) }
            var S = n(1),
                w = n(39),
                b = n(4),
                M = [0, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10],
                A = [0, 1, 2, 4, 5, 10],
                C = [1, 2, 4, 6, 8, 12],
                k = 5,
                P = 7,
                T = {};
            T.caculate = function(t, e) {
                var n, i = t.min,
                    s = t.max,
                    u = t.data,
                    c = t.interval,
                    h = [],
                    f = t.minCount || k,
                    g = t.maxCount || P,
                    p = (f + g) / 2,
                    v = !1;
                e && "percent" === e && (i = 0, s = 100, c = 25);
                var d;
                if ((r(i) || r(s) || r(c)) && (d = l(u, null, v), r(s) && (s = d.max + .05 * (d.max - d.min)), r(i) && (i = d.min), s === i && (s = i + 1, i -= 1, S.isNull(t.max) || (i = t.max - 1), S.isNull(t.min) || (s = t.min + 1), c = 1), r(c))) {
                    var x = (s - i) / p;
                    c = a(x, !0, A), n = parseInt((s - i) / c, 10), n > g && (n = g), n < f && (n = f), c = a((s - i) / n, !0, A), s = o(s, c, !0), i = o(i, c), n = Math.round((s - i) / c) }
                r(n) && (s = o(s, c, !0), i = o(i, c), n = Math.round((s - i) / c)), i = S.fixedBase(i, c), r(i) || h.push(i);
                for (var m = 1; m <= n; m++) h.push(S.fixedBase(c * m + i, c));
                return { min: i, max: S.fixedBase(s, c), interval: c, count: n, ticks: h, info: d } }, T.Time = {};
            var I = 6e4,
                D = 36e5,
                L = 864e5;
            T.Time.caculate = function(t) {
                var e, n = t.min,
                    i = t.max,
                    a = t.data,
                    s = t.interval,
                    o = [],
                    u = {};
                if (r(n) || r(i) || r(s)) {
                    if (u = l(a, function(t) {
                            return S.isDate(t) && (t = t.getTime()), S.isString(t) && (t = t.replace(/-/gi, "/"), t = new Date(t)), t }), r(i) && (i = u.max), r(n) && (n = u.min), i - n > L && (n = h(n), i = f(i)), i === n) throw "max not  equal to min";
                    if (r(s)) {
                        var c, w, M = i - n,
                            A = L,
                            k = 365 * A;
                        s = parseInt(M / (t.maxCount || 8)), c = s / k;
                        var P = g(n);
                        if (c > .51) { w = Math.ceil(c), s = w * k;
                            for (var T = g(i), R = P; R <= T + w; R += w) o.push(p(R));
                            s = null } else if (c > .0834) {
                            for (var w = g(n), B = Math.floor(c / .0834), F = v(n), O = d(n, i), R = 0; R <= O + B; R += B) o.push(x(P, R + F));
                            s = null } else if (s > .5 * A) {
                            var G = new Date(n),
                                w = G.getFullYear(),
                                B = G.getMonth(n),
                                N = G.getDate(),
                                z = Math.ceil(s / A),
                                Y = m(n, i);
                            s = z * A;
                            for (var R = 0; R < Y + z; R += z) o.push(new Date(w, B, N + R).getTime()) } else if (s > D) {
                            var G = new Date(n),
                                w = G.getFullYear(),
                                B = G.getMonth(n),
                                z = G.getDate(),
                                X = G.getHours(),
                                j = b.snapTo(C, Math.ceil(s / D)),
                                E = y(n, i);
                            s = j * D;
                            for (var R = 0; R <= E + j; R += j) o.push(new Date(w, B, z, X + R).getTime()) } else if (s > I) {
                            var V = _(n, i),
                                q = Math.ceil(s / I);
                            s = q * I;
                            for (var R = 0; R <= V + q; R += q) o.push(n + R * I) } else { s < 1e3 && (s = 1e3), n = 1e3 * Math.floor(n / 1e3);
                            var W = Math.ceil((i - n) / 1e3),
                                H = Math.ceil(s / 1e3);
                            s = 1e3 * H;
                            for (var R = 0; R < W + H; R += H) o.push(n + 1e3 * R) }
                    }
                }
                if (!o.length) { n = 1e3 * Math.floor(n / 1e3), i = 1e3 * Math.ceil(i / 1e3);
                    for (var e = (i - n) / s, R = 0; R <= e; R++) o.push(S.fixedBase(s * R + n, s)) }
                return { max: u.max || i, min: u.min || n, interval: s, ticks: o, count: o.length }
            }, T.Category = {}, T.Category.caculate = function(t) {
                var e = {},
                    n = [],
                    r = t.maxCount || P,
                    i = c(t.data);
                if (i.length < r) n = [].concat(i);
                else {
                    var a = i.length,
                        s = parseInt(a / (r - 1), 10),
                        o = i.map(function(t, e) {
                            return e % s === 0 ? i.slice(e, e + s) : null }).filter(function(t) {
                            return t });
                    n.push(i[0]);
                    for (var u = 1; u < o.length && u < r - 1; u++) n.push(o[u][0]);
                    n.push(i[a - 1]) }
                return e.categories = i, e.ticks = n, e }, t.exports = T
        },
        function(t, e, n) { "use strict";

            function r(t) {
                if (!t._attrs && t !== i) {
                    var e = t.superclass.constructor;
                    e && !e._attrs && r(e), t._attrs = {}, a.mix(!0, t._attrs, e._attrs), a.mix(!0, t._attrs, t.ATTRS) } }
            var i, a = n(1);
            i = function(t) { r(this.constructor), this._attrs = {}, this.events = {};
                var e = this.getDefaultCfg();
                a.mix(this._attrs, e, t) }, a.augment(i, { getDefaultCfg: function() {
                    var t = this,
                        e = t.constructor,
                        n = e._attrs,
                        r = a.mix(!0, {}, n);
                    return r }, set: function(t, e) {
                    var n = "_onRender" + a.ucfirst(t);
                    return this[n] && this[n](e, this._attrs[t]), this._attrs[t] = e, this }, get: function(t) {
                    return this._attrs[t] }, on: function(t, e) {
                    var n = this,
                        r = n.events,
                        i = r[t];
                    return i || (i = r[t] = []), i.push(e), n }, fire: function(t, e) {
                    var n = this,
                        r = n.events,
                        i = r[t];
                    i && a.each(i, function(t) { t(e) }) }, off: function(t, e) {
                    var n = this,
                        r = n.events,
                        i = r[t];
                    return t ? (i && a.remove(i, e), n) : (n.events = {}, n) }, destroy: function() {
                    var t = this,
                        e = t.destroyed;
                    return e ? t : (t._attrs = {}, t.events = {}, void(t.destroyed = !0)) } }), t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(27),
                i = n(21),
                a = i.Shape.superclass.constructor,
                s = i.Canvas,
                o = n(63);
            r.mixin(a, [o.GMixin]), r.mixin(i.Group, [o.GroupMixin]);
            var u = function(t) { u.superclass.constructor.call(this, t) };
            u.CFG = { width: null, height: null, widthCanvas: null, heightCanvas: null, widthStyle: null, heightStyle: null, containerDOM: null, canvasDOM: null, pixelRatio: null }, r.extend(u, s), r.augment(u, { init: function() { u.superclass.constructor.superclass.init.call(this), this._setGlobalParam(), this._setDOM(), this._setInitSize(), this._setCanvas(), this._scale() }, _scale: function() {
                    var t = this.get("pixelRatio");
                    this.scale(t, t) }, _setCanvas: function() {
                    var t = this.get("canvasDOM");
                    this.set("el", t), this.set("context", t.getContext("2d")), this.set("canvas", this), this.__events() }, _setGlobalParam: function() {
                    var t = this.get("pixelRatio");
                    t || this.set("pixelRatio", r.getRatio()) }, _setDOM: function() { this._setContainer(), this._setLayer() }, _setContainer: function() {
                    var t = this.get("containerId"),
                        e = this.get("containerDOM");
                    e || (e = document.getElementById(t), this.set("containerDOM", e)), r.modiCSS(e, { position: "relative" }) }, _setLayer: function() {
                    var t = this.get("containerDOM"),
                        e = r.guid("canvas_");
                    if (t) {
                        var n = r.createDom('<canvas id="' + e + '"></canvas>');
                        t.appendChild(n), this.set("canvasDOM", n) } }, _setInitSize: function() { this.get("widthStyle") ? this.changeSizeByCss(this.get("widthStyle"), this.get("heightStyle")) : this.get("width") && this.changeSize(this.get("width"), this.get("height")) }, _getPx: function(t, e) {
                    var n = this.get("canvasDOM");
                    n.style[t] = e;
                    var i = r.getBoundingClientRect(n);
                    return "width" === t ? i.right - i.left : "height" === t ? i.bottom - i.top : void 0 }, _reSize: function() {
                    var t = this.get("canvasDOM"),
                        e = this.get("widthCanvas"),
                        n = this.get("heightCanvas"),
                        r = this.get("widthStyle"),
                        i = this.get("heightStyle");
                    t.style.width = r, t.style.height = i, t.setAttribute("width", e), t.setAttribute("height", n) }, getWidth: function() {
                    var t = this.get("pixelRatio"),
                        e = this.get("width");
                    return e * t }, getHeight: function() {
                    var t = this.get("pixelRatio"),
                        e = this.get("height");
                    return e * t }, changeSizeByCss: function(t, e) {
                    var n = this.get("pixelRatio"),
                        t = this._getPx("width", t),
                        e = this._getPx("height", e),
                        r = t * n,
                        i = e * n;
                    this.set("widthStyle", t), this.set("heightStyle", e), this.set("widthCanvas", r), this.set("heightCanvas", i), this.set("width", t), this.set("height", e), this._reSize() }, changeSize: function(t, e) {
                    var n = this.get("pixelRatio"),
                        r = t * n,
                        i = e * n;
                    this.set("widthCanvas", r), this.set("heightCanvas", i), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._reSize() } }), t.exports = u },
        function(t, e, n) {
            var r = n(27),
                i = (n(21), function() {});
            r.augment(i, { getParent: function() {
                    return this.get("parent") || this.get("father") }, getDefaultCfg: function() { r.initClassCfgs(this.constructor);
                    var t = r.mix(!0, {}, this.constructor.__cfg);
                    return t }, getBBBox: function() {
                    var t = this.getBBox();
                    return t ? (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY, t.centerX = t.x + t.width / 2, t.centerY = t.y + t.height / 2) : t = { x: 0, y: 0, centerX: 0, centerY: 0, width: 0, height: 0 }, t }, move: function(t, e) {
                    var n = this,
                        r = n.get("x") || 0,
                        i = n.get("y") || 0;
                    n.translate(t - r, e - i), n.set("x", t), n.set("y", e) } }), t.exports = i },
        function(t, e, n) {
            var r = n(27),
                i = n(21),
                a = n(62),
                s = function() {};
            r.augment(s, { addShape: function(t, e) {
                    var n, a = this.get("canvas");
                    return e = r.mix({}, e), e ? (e.type = t, e.canvas = a, e.father = this, t = r.upperFirst(t), n = new i[t](e)) : n = new i[t], this.add(n), n }, addGroup: function(t, e) {
                    var n, i = this.get("canvas");
                    if (e = r.mix({}, e), r.isFunction(t)) e ? (e.canvas = i, e.father = this, n = new t(e)) : n = new t({ canvas: i, father: this }), this.add(n);
                    else if (r.isObject(t)) t.canvas = i, n = new a(t), this.add(n);
                    else {
                        if (void 0 !== t) return !1;
                        n = new a, this.add(n) }
                    return n }, findByCFG: function(t, e) {
                    var n = this.get("children"),
                        i = [];
                    return r.each(n, function(n, r) { n.get(t) === e && i.push(n) }), i } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = n(16),
                a = n(12),
                s = n(164),
                o = i.G,
                u = o.Shape.superclass.constructor;
            new s(o), r.mixin(u, [a.GMixin]), r.mixin(o.Group, [a.GroupMixin]), o.Marker = a.Marker;
            var c = function(t) { c.superclass.constructor.call(this, t) };
            c.CFG = {}, r.extend(c, i), t.exports = c },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(46),
                a = n(3),
                s = a.Vector2,
                o = function(t) { o.superclass.constructor.call(this, t) };
            r.extend(o, i), o.CFG = { type: "circle", tickInterval: null, grid: { line: { "stroke-width": 1, stroke: "#C0D0E0" } }, labelOffset: 5 }, r.augment(o, { _beforeRenderUI: function() {
                    var t = this;
                    o.superclass._beforeRenderUI.call(t) }, parseTick: function(t, e, n) {
                    return { text: t, value: e / n } }, _isReflectY: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.get("y");
                    return n.start > n.end }, getOffsetPoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = e._isReflectY(),
                        i = n.convertPoint({ x: t.value, y: r ? 0 : 1 });
                    return i }, getCenter: function() {
                    var t = this,
                        e = t.get("coord");
                    return e.getCenter() }, getRadius: function() {
                    var t = this,
                        e = t.get("coord");
                    return e.getRadius() }, getLinePath: function() {
                    var t = this,
                        e = t.getCenter(),
                        n = e.x,
                        r = e.y,
                        i = t.getRadius(),
                        a = i,
                        s = t.get("coord"),
                        o = s.get("startAngle"),
                        u = s.get("endAngle"),
                        c = [];
                    if (u - o === 2 * Math.PI) c = [
                        ["M", n, r],
                        ["m", 0, -a],
                        ["a", i, a, 0, 1, 1, 0, 2 * a],
                        ["a", i, a, 0, 1, 1, 0, -2 * a],
                        ["z"]
                    ];
                    else {
                        var l = s.get("inner"),
                            h = s.convertPoint({ x: 0, y: 1 }),
                            f = s.convertPoint({ x: 1, y: 1 }),
                            g = u - o > Math.PI ? 1 : 0;
                        if (l) {
                            var p = s.convertPoint({ x: 0, y: 0 }),
                                v = s.convertPoint({ x: 1, y: 0 });
                            c = [
                                ["M", p.x, p.y],
                                ["L", h.x, h.y],
                                ["A", i, a, 0, g, 1, f.x, f.y],
                                ["L", v.x, v.y],
                                ["A", i * l, a * l, 0, g, 0, p.x, p.y]
                            ] } else c = [
                            ["M", n, r],
                            ["L", h.x, h.y],
                            ["A", i, a, 0, g, 1, f.x, f.y],
                            ["z"]
                        ] }
                    return c }, getGridItemCfg: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = n.invertPoint(t),
                        i = n.convertPoint({ x: r.x, y: 0 });
                    return { x1: i.x, y1: i.y, x2: t.x, y2: t.y } }, getEndMiddlePoint: function(t, e) {
                    var n = this,
                        r = n.get("coord"),
                        i = { value: .9999 },
                        a = n.getOffsetPoint(i),
                        s = r.invertPoint(a),
                        o = { x: (s.x + e.x) / 2, y: (s.y + e.y) / 2 };
                    return o }, addLabel: function(t, e) {
                    var n = this,
                        r = n.get("labelOffset");
                    e = n.getSidePoint(e, r), o.superclass.addLabel.call(n, t, e) }, autoRotateLabels: function() {
                    var t = this,
                        e = t.get("ticks"),
                        n = t.get("labelsGroup");
                    if (n && e.length > 12) {
                        var i = t.get("coord"),
                            a = t.getRadius(),
                            s = i.get("startAngle"),
                            o = i.get("endAngle"),
                            u = o - s,
                            c = u / e.length,
                            l = Math.sin(c / 2) * a * 2,
                            h = t.getMaxLabelWidth(n);
                        r.each(n.get("children"), function(t, n) {
                            var r = e[n],
                                i = r.value * u + s,
                                a = i % (2 * Math.PI);
                            h < l ? (a <= 0 && (i += Math.PI), a > Math.PI && (i -= Math.PI), i -= Math.PI / 2, t.attr("text-anchor", "middle")) : a > Math.PI / 2 ? i -= Math.PI : a < Math.PI / 2 * -1 && (i += Math.PI), t.rotateAtStart(180 * i / Math.PI) }) } }, getSideVector: function(t, e) {
                    var n = this,
                        r = n.getCenter(),
                        i = new s(e.x - r.x, e.y - r.y);
                    return i.setLength(t), i }, getSidePoint: function(t, e) {
                    var n = this,
                        r = n.getSideVector(e, t);
                    return { x: t.x + r.x, y: t.y + r.y } }, getTextAnchor: function(t) {
                    var e, n = this.get("coord");
                    return e = n.isTransposed ? "end" : t.x >= 0 ? "start" : "end" }, getGridMiddlePoint: function(t, e) {
                    var n = this;
                    if (!e) {
                        var r = n.get("coord"),
                            i = r.get("startAngle"),
                            a = r.get("endAngle");
                        if (a - i < 2 * Math.PI) return null }
                    return o.superclass.getGridMiddlePoint.call(n, t, e) }, getTickEnd: function(t, e) {
                    var n = this,
                        r = n.get("tickLine"),
                        e = e ? e : r.value,
                        i = n.getSidePoint(t, e);
                    return { x: i.x, y: i.y } } }), t.exports = o },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                var r = e.get(t);
                return r || (r = n, e.set(t, r)), r }

            function i(t, e) {
                var n = "",
                    r = u.mix({}, e);
                return u.each(t, function(t) {
                    var e = u.substitute("M{x1} {y1}L{x2} {y2}", t);
                    n += e }), r.path = n, r }

            function a(t) { a.superclass.constructor.call(this, t) }
            var s = n(12),
                o = s.GroupBase,
                u = n(1),
                c = "x-chart-grid";
            u.extend(a, o), a.CFG = { zIndex: 1, elCls: c, type: "line", line: null, minorLine: null, minorCount: 0, renderer: null, items: null, odd: null, even: null, animate: !1, matrix: null, duration: 1e3 }, u.augment(a, { _renderUI: function() {
                    var t = this;
                    a.superclass._renderUI.call(t), t._drawLines() }, _drawLines: function() {
                    var t = this,
                        e = t.get("line"),
                        n = t.get("items");
                    n && (t._precessItems(n), t._drawGridLines(n, e, c + "-line"), t.get("minorCount") && t.drawMinorLines()) }, _precessItems: function(t) {
                    var e, n = this,
                        r = n.get("minorCount"),
                        i = n.get("renderer");
                    u.each(t, function(t, a) { i ? i.call(n, t, a) : r && e && n._addMonorItem(t, e), e && (n.get("odd") || n.get("even")) && n._drawOddEven(t, e, a), e = t }) }, change: function(t) {
                    var e = this;
                    return e.set("items", t), e._clearPre(), e._precessItems(t), e._changeGridLines(t, c + "-line"), e._changeMinorLinses(), this }, _clearPre: function() {
                    var t, e = this;
                    e.get("minorCount") && e.set("minorItems", []), t = e.findAllBy(function(t) {
                        var e = t.get("elCls");
                        return e !== c + "-line" && e !== c + "-minor" }), u.each(t, function(t) { t.remove() }) }, _isVertical: function(t) {
                    return t.x1 === t.x2 }, _drawGridLines: function(t, e, n) {
                    var r = this,
                        i = r._linesToPath(t, e),
                        a = r.addShape("Path", { elCls: n, attrs: i });
                    r.set("gridLine" + n, a) }, _changeGridLines: function(t, e) {
                    var n = this,
                        r = n.get("animate"),
                        i = n.get("gridLine" + e);
                    if (i) {
                        var a = n._linesToPath(t, {});
                        r ? u.animPath(i, a.path, 2) : a ? i.attr("path", a.path) : i.remove() } else if (t && t.length) {
                        var s;
                        s = e === c + "-line" ? n.get("line") : n.get("minorLine"), n._drawGridLines(t, s, e) } }, _linesToPath: function(t, e) {
                    var n, r = this,
                        a = [],
                        s = r.get("type");
                    return "line" === s ? 0 !== t.length && i(t, e) : (n = u.mix({}, e), u.each(t, function(t) { a = a.concat(r._getMultiplePath(t, s)) }), n.path = a, n) }, _getMultiplePath: function(t, e) {
                    var n = t.points,
                        r = [];
                    if ("polygon" === e) u.each(n, function(t, e) { 0 === e ? r.push(["M", t.x, t.y]) : r.push(["L", t.x, t.y]) });
                    else if (t.center) {
                        var i = t.center.x,
                            a = t.center.y,
                            s = t.r,
                            o = t.r;
                        0 === s ? r = [] : t.endAngle - t.startAngle === 2 * Math.PI ? r = [
                            ["M", i, a],
                            ["m", 0, -o],
                            ["a", s, o, 0, 1, 1, 0, 2 * o],
                            ["a", s, o, 0, 1, 1, 0, -2 * o]
                        ] : u.each(n, function(t, e) { 0 === e ? r.push(["M", t.x, t.y]) : r.push(["A", s, o, 1, 0, 1, t.x, t.y]) }) }
                    return r }, _drawOddEven: function(t, e, n) {
                    var r, i, a = this,
                        s = a.get("odd"),
                        o = a.get("even");
                    n % 2 === 0 ? o && (i = a._getBackItem(e, t, o), r = "even") : s && (i = a._getBackItem(e, t, s), r = "odd"), i && a.addShape("Path", { elCls: c + "-" + r, attrs: i }) }, _getBackItem: function(t, e, n) {
                    var r = u.substitute("M {x1} {y1} L{x2} {y2}", t);
                    return r += u.substitute("L{x2} {y2} L{x1} {y1}Z", e), n = u.mix({}, n, { path: r }) }, _getMinorItem: function(t, e, n, r) {
                    var i = this,
                        a = i._isVertical(t, e),
                        s = a ? "x" : "y",
                        o = a ? "y" : "x",
                        u = e[s + "1"] - t[s + "1"],
                        c = u / (r + 1),
                        l = {};
                    return l[s + "1"] = l[s + "2"] = (n + 1) * c + t[s + "1"], l[o + "1"] = t[o + "1"], l[o + "2"] = t[o + "2"], l }, _addMonorItem: function(t, e) {
                    var n = this,
                        i = r("minorItems", n, []),
                        a = n.get("minorCount");
                    if (a)
                        for (var s = 0; s < a; s++) {
                            var o = n._getMinorItem(e, t, s, a);
                            i.push(o) } }, drawMinorLines: function() {
                    var t = this,
                        e = t.get("minorLine"),
                        n = t.get("minorItems");
                    t._drawGridLines(n, e, c + "-minor") }, _changeMinorLinses: function() {
                    var t = this,
                        e = t.get("minorItems");
                    t._changeGridLines(e, c + "-minor") } }), t.exports = a },
        function(t, e, n) {
            var r = n(64);
            r.Abstract = n(46), r.Circle = n(110), r.Radius = n(113), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(64),
                a = function(t) { a.superclass.constructor.call(this, t) };
            a.CFG = { circle: null, position: "left", type: "radius" }, r.extend(a, i), r.augment(a, { _beforeRenderUI: function() { a.superclass._beforeRenderUI.call(this);
                    var t = this,
                        e = t.get("coord");
                    e.isTransposed ? (t.set("start", e.convertPoint({ x: 0, y: 0 })), t.set("end", e.convertPoint({ x: 1, y: 0 }))) : (t.set("start", e.convertPoint({ x: 0, y: 0 })), t.set("end", e.convertPoint({ x: 0, y: 1 }))) }, getGridItemCfg: function(t) {
                    for (var e = this, n = {}, r = [], i = e.get("circle"), a = i.get("ticks"), s = a.length, o = e.get("coord"), u = o.invertPoint(t), c = o.get("inner"), l = o.getRadius(), h = 0; h < s; h++) {
                        var f = a[h],
                            g = o.convertPoint({ x: f.value, y: u.y });
                        r.push(g) }
                    var p = a[0];
                    if (0 !== p.value) {
                        var v = o.convertPoint({ x: 0, y: u.y });
                        r.unshift(v) }
                    var d = r[r.length - 1],
                        g = o.convertPoint({ x: 1, y: u.y });
                    d.x !== g.x && d.y !== g.y && r.push(g);
                    var x = o.get("startAngle"),
                        m = o.get("endAngle");
                    return n.points = r, n.r = l * (1 - c) * u.y + l * c, n.center = o.getCenter(), n.endAngle = m, n.startAngle = x, n } }), t.exports = a },
        function(t, e, n) { "use strict";
            t.exports = { Axis: n(112), PlotBack: n(68), PlotRange: n(48), Plot: { Back: n(68), Range: n(48) }, Labels: n(65), Tooltip: n(120), Li: n(47), Ul: n(69), Legend: n(118) } },
        function(t, e, n) { "use strict";

            function r(t) { t.remove() }
            var i = n(9),
                a = n(66),
                s = function() {};
            s.ATTRS = { labels: null }, i.augment(s, { renderLabels: function() {
                    var t, e = this,
                        n = e.get("labels");
                    n && (n.items || (n.items = []), i.isNull(n.animate) && (n.animate = e.get("animate")), t = e.addGroup(a, n), e.set("labelsGroup", t)) }, resetLabels: function(t) {
                    var e = this,
                        n = e.get("labels");
                    if (n) {
                        var a = e.get("labelsGroup"),
                            s = a.getLabels(),
                            o = s.length;
                        t = t || n.items, i.each(t, function(t, n) {
                            if (n < o) {
                                var r = s[n];
                                a.changeLabel(r, t) } else e.addLabel(t.text, t) });
                        for (var u = o - 1; u >= t.length; u--) r(s[u]) } }, addLabel: function(t, e) {
                    var n, r = this,
                        i = r.get("labelsGroup"),
                        a = {};
                    return i && (a.text = t, a.x = e.x, a.y = e.y, a.point = e, a["text-anchor"] = e["text-anchor"], e.rotate && (a.rotate = e.rotate), n = i.addLabel(a)), n }, removeLabels: function() {
                    var t = this,
                        e = t.get("labelsGroup");
                    e && e.remove(), t.set("labelsGroup", null) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = (n(12), n(47)),
                a = n(50),
                s = n(67),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.CFG = { type: "category-legend", items: null, spacingX: 5, spacingY: 10, wordSpaceing: 2, itemsGroup: null, layout: "horizontal", leaveChecked: !0, backPadding: [0, 0, 0, 0], checkable: !0, itemsbeginX: 0, itemsbeginY: 0, unChecked: "#CCC", word: { fill: "#3c3c3c" }, back: null, itemWrap: !1, maxLength: 100, _back: {} }, r.extend(o, s), r.augment(o, { _initCfg: function() { o.superclass._initCfg.call(this), this.deepSet("back") }, _beforeRenderUI: function() { o.superclass._beforeRenderUI.call(this);
                    var t = this.get("col"),
                        e = this.get("items").length;
                    this.set("_row", Math.ceil(e / t)) }, _renderUI: function() { o.superclass._renderUI.call(this), this._renderTitle(), this._renderItems(), this._wrapItems(), this._renderBack(), this.setPosition() }, _wrapItems: function() {
                    var t = this.get("itemWrap"),
                        e = this.get("layout"),
                        n = this.get("maxLength");
                    t && n > 0 && ("horizontal" === e ? this._warpHorizontal() : "vertical" === e && this._warpVertical()) }, _warpVertical: function() {
                    var t, e, n, i, a = this.get("itemsGroup"),
                        s = this.get("titleShape"),
                        o = a.get("children"),
                        u = this.get("maxLength"),
                        c = this.get("spacingX"),
                        l = this.get("spacingY"),
                        h = s.getBBBox().height + l,
                        f = 1,
                        g = h,
                        p = 0,
                        v = 0,
                        d = 0;
                    a.getBBBox().height > u && r.each(o, function(r, a) { i = r.getBBBox(), e = i.width + c, n = i.height + l, p = v, v = e > v ? e : v, t = g, g += n, g > u ? (d += p, g = n + h, f++, v = 0, p = 0, r.move(d, h)) : r.move(d, t) }) }, _warpHorizontal: function() {
                    var t, e, n, i = this.get("itemsGroup"),
                        a = i.get("children"),
                        s = this.get("maxLength"),
                        o = this.get("spacingX"),
                        u = this.get("spacingY"),
                        c = 1,
                        l = 0,
                        h = 0;
                    i.getBBBox().width > s && r.each(a, function(r, i) { n = r.getBBBox(), t = n.width + o, e = n.height + u, h = l, l += t, l > s ? (l = t, c++, r.move(0, c * e)) : r.move(h, c * e) }) }, _bindUI: function() { this._bindOverOut(), this._bindClick() }, _bindClick: function() {
                    var t = (this.get("canvas"), this.get("checkable"));
                    t && this.on("click", r.wrapBehavior(this, "_onClick")) }, _bindOverOut: function() { this.on("mouseenter", r.wrapBehavior(this, "_onMouseenter")), this.on("mouseleave", r.wrapBehavior(this, "_onMouseleave")) }, _onClick: function(t) {
                    var e, n, r, i, s, o = (this.get("leaveChecked"), this._getLi(t.currentTarget));
                    this.get("canvas");
                    o && (i = o.findByType("marker"), s = o.get("checked"), e = new a("itemclick", t), e.item = o, this.trigger(e), this.get("leaveChecked") && s && 1 === this.getLeaveCount() || (s ? (r = new a("itemunchecked", t), r.item = o, this.trigger(r)) : (n = new a("itemchecked", t), n.item = o, this.trigger(n)))) }, _onMouseenter: function(t) {
                    var e = new a("itemover", t),
                        n = t.currentTarget,
                        i = this._getLi(t.currentTarget),
                        s = n.getCanvasNode();
                    i && (e.item = i, this.trigger(e), r.modiCSS(s, { cursor: "pointer" })) }, _onMouseleave: function(t) {
                    var e = new a("itemout", t),
                        n = this.getCanvasNode(),
                        i = this._getLi(t.currentTarget);
                    i && (e.item = i, this.trigger(e), r.modiCSS(n, { cursor: "default" })) }, _renderBack: function() {
                    var t = this.get("itemsGroup"),
                        e = this.get("backPadding"),
                        n = this.get("back");
                    t.renderBack(e, n) }, _renderItems: function() {
                    var t = this,
                        e = t.get("items");
                    r.each(e, function(e, n) { t._addItem(e, n) }) }, _addItem: function(t) {
                    var e = this.get("itemsGroup"),
                        n = this._getNextX(),
                        r = this._getNextY(),
                        a = this.get("unChecked"),
                        s = { words: [{ text: t.name }] };
                    t.symbol ? s.marker = { symbol: t.symbol, fill: t.checked ? t.color : a } : t.marker && (t.checked || (t.marker.fill = a, t.marker.stroke = a), s.marker = t.marker), e.addGroup(i, { value: t.name, "class": "legend-item", word: t.word, checked: t.checked, x: n, y: r, items: s }) }, _getNextX: function() {
                    var t = this.get("layout"),
                        e = this.get("spacingX"),
                        n = this.get("itemsGroup"),
                        i = n.get("children"),
                        a = 0;
                    return "horizontal" === t && r.each(i, function(t) { a += t.getBBBox().width + e }), a }, _getNextY: function() {
                    var t = this.get("spacingY"),
                        e = this.get("layout"),
                        n = this.get("itemsGroup"),
                        i = this.get("titleShape"),
                        a = n.get("children"),
                        s = i.getBBBox().height + t;
                    return "vertical" === e && r.each(a, function(e) { s += e.getBBBox().height + t }), s }, _getLi: function(t) {
                    var e = t.getParent();
                    return "li" === e.get("type") && e } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = (n(12), n(67)),
                a = n(36),
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.CFG = { type: "continuous-legend", items: null, layout: "vertical", width: 200, height: 60, theme: "block", nameGroup: null, titleOffset: 30, nameOffset: 10, word: {}, title: { text: " " }, _word: { fill: "#333", textAlign: "center", textBaseline: "middle" } }, r.extend(s, i), r.augment(s, { _initCfg: function() { s.superclass._initCfg.call(this), this.deepSet("word") }, _beforeRenderUI: function() { s.superclass._beforeRenderUI.call(this);
                    var t = (this.get("itemsGroup"), this.addGroup());
                    this.set("nameGroup", t) }, _renderUI: function() { s.superclass._renderUI.call(this);
                    var t = this.get("theme"); "gradient" === t ? this._renderGradient() : this._renderBlock() }, _renderBlock: function() {
                    var t = this.get("items"),
                        e = this.get("titleShape"),
                        n = this.get("layout"),
                        r = this.get("titleOffset"),
                        i = e.getBBBox(),
                        a = { x: 0, y: i.height + r };
                    this._renderName(t, n, a), this._renderBlockShape(t, n, a) }, _renderGradient: function() {
                    var t = this.get("items"),
                        e = this.get("titleShape"),
                        n = this.get("layout"),
                        r = this.get("titleOffset"),
                        i = e.getBBBox(),
                        a = { x: 0, y: i.height + r };
                    this._renderName(t, n, a), this._renderGradientShape(t, n, a) }, _renderBlockShape: function(t, e, n) {
                    var i, a, s = this.get("itemsGroup"),
                        o = this.get("width"),
                        u = this.get("height");
                    r.each(t, function(r, c) { "vertical" === e ? (a = 0 != c ? (r.value - t[c - 1].value) * u : r.value * u, i = { x: n.x, y: n.y + (1 - r.value) * u, width: o, height: a, fill: r.color }) : (a = 0 != c ? (r.value - t[c - 1].value) * o : r.value * o, i = { x: n.x + r.value * o - a, y: n.y, width: a, height: u, fill: r.color }), s.addShape("Rect", { attrs: i }) }) }, _renderGradientShape: function(t, e, n) {
                    var i, s = this.get("itemsGroup"),
                        o = this.get("width"),
                        u = this.get("height"),
                        c = ""; "vertical" === e ? (c += "l (90) ", r.each(t, function(t, e) { i = new a(t.color).getRGBStyle(), c += 1 - t.value + ":" + i + " " })) : (c += "l (0) ", r.each(t, function(t, e) { i = new a(t.color).getRGBStyle(), c += t.value + ":" + i + " " })), s.addShape("Rect", { attrs: { x: n.x, y: n.y, width: o, height: u, fill: c } }) }, setLayout: function(t) { this.set("layout", t), this.clear(), this._renderUI() }, _renderName: function(t, e, n) {
                    var i = this.get("nameGroup"),
                        a = r.mix({}, this.get("word")),
                        s = this.get("nameOffset"),
                        o = this.get("width"),
                        u = this.get("height");
                    r.each(t, function(c, l) { 0 !== l && l !== t.length - 1 || ("vertical" === e ? (s = 0 === l ? s : -s, a = r.mix(a, { x: n.x + o / 2, y: n.y + u * (1 - c.value) + s, text: c.name }), i.addShape("Text", { attrs: a })) : (s = 1 === l ? s : -s, a = r.mix(a, { x: n.x + o * c.value + s, y: n.y + u / 2, text: c.name }), i.addShape("Text", { attrs: a }))) }) }, clear: function() {
                    var t = this.get("itemsGroup"),
                        e = this.get("nameGroup");
                    t.clear(), e.clear() } }), t.exports = s },
        function(t, e, n) {
            var r = n(116);
            r.Continuous = n(117), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = n(12),
                a = i.GroupBase,
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.CFG = { type: "li", items: null, itemsGroup: null, word: null, marker: null, wordSpaceing: null, _marker: { fill: "red", lineWidth: 4, r: 2.5 }, _wordSpaceing: 6, _word: { fill: "#fff", textBaseline: "middle" } }, r.extend(s, a), r.augment(s, { _initCfg: function() { this.deepSet("word"), this.deepSet("marker"), this.deepSet("wordSpaceing"), this.deepSet("markerAlign") }, _renderUI: function() { s.superclass._renderUI.call(this), this._renderItems() }, _renderItems: function() {
                    var t = this,
                        e = t.getBBBox(),
                        n = e.width,
                        i = t.get("word"),
                        a = t.get("wordSpaceing"),
                        s = t.get("items"),
                        o = t.get("marker"),
                        u = t.get("markerAlign");
                    if (s.marker) {
                        var c = r.mix({}, o, s.marker, { x: "center" === u ? 0 : s.marker.radius, y: 0 });
                        r.mixXY(c, t), t.addShape("Marker", { type: "marker", attrs: c }) }
                    r.each(s.words, function(s, o) { e = t.getBBBox(), n = Math.abs(e.width) === 1 / 0 ? 0 : e.width;
                        var c = r.mix({}, i, s, { x: "center" === u ? a : 0 === n ? 0 : n + a, y: 0 });
                        r.mixXY(c, t);
                        t.addShape("Text", { attrs: c }) }) } }), t.exports = s },
        function(t, e, n) {
            var r = n(121);
            t.exports = r },
        function(t, e, n) { "use strict";

            function r(t, e) {
                return t.getElementsByClassName(e)[0] }
            var i = n(9),
                a = n(3),
                s = n(12),
                o = n(69),
                u = s.GroupBase,
                c = "ac-title",
                l = "ac-list",
                h = function(t) { h.superclass.constructor.call(this, t) };
            h.CFG = { zIndex: 10, x: 0, y: 0, itemName: "tootip", items: [], ulItems: [], ul: { fill: "#fff", textAlign: "start" }, title: {}, name: {}, value: {}, crossLine: { stroke: "#999", lineWidth: 1 }, markerCfg: null, titleText: void 0, wordSpaceing: 6, padding: [10, 10, 10, 10], crosshairs: !1, titleShape: null, ulGroup: null, crossShapeX: null, crossShapeY: null, backShape: null, plotRange: null, shared: !1, offset: 10, animate: !0, duration: 50, visible: !1, valueSplit: "", valueSuffix: "", custom: !1, customDiv: null, customFollow: !0, timeStamp: 0, html: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="' + c + '"></h4><ul class="' + l + '"></ul></div>', itemTpl: '<li><span style="color:{color}">{name}</span> : {value}</li>' }, i.extend(h, u), i.augment(h, { _beforeRenderUI: function() { o.superclass._beforeRenderUI.call(this);
                    var t = this.get("ul"),
                        e = this.get("custom"),
                        n = this.get("crossLine"),
                        r = this.addGroup({ attrs: n }),
                        i = this.addGroup(o, { zIndex: 10, attrs: t });
                    this.set("ulItems", []), this.set("crossGroup", r), this.set("ulGroup", i), e && this._setCustomDiv() }, _renderUI: function() { o.superclass._renderUI.call(this);
                    var t = this.get("custom");
                    t ? this._renderCustom() : this._renderUl(), this._renderCrossLine() }, _renderUl: function() {
                    var t, e, n, r, a = this,
                        s = [],
                        o = a.get("ulGroup"),
                        u = a.get("items"),
                        c = a.get("title"),
                        l = a.get("titleText"),
                        h = a.get("name"),
                        f = a.get("value"),
                        g = a.get("valueSplit"),
                        p = a.get("valueSuffix"),
                        v = a.get("markerCfg");
                    c && s.push({ words: [{ text: l }], attrs: c }), i.each(u, function(t, e) {
                        var n = i.mix({}, h, { text: t.name ? t.name + ":" : "" }),
                            r = i.mix({}, f, { text: t.value + g + p });
                        t.marker === !0 && (t.marker = "circle");
                        var a = t.marker ? { symbol: t.marker, fill: t.color } : {};
                        s.push({ color: t.color, words: [n, r], marker: i.mix(a, v) }) }), o.setItems(s), r = o.get("backShape"), c && (e = o.get("itemsGroup").getFirst(), n = e.getFirst(), a.set("titleShape", n)), t = o.get("itemsGroup").getFilterChild(e), a.set("backShape", r), a.set("ulItems", s), a.set("textGroup", t) }, _renderCrossLine: function() {
                    var t = this.get("crosshairs"),
                        e = this.get("canvas"),
                        n = this.get("plotRange");
                    if (this.clearCrossGroup(), t) switch (t.type) {
                        case "x":
                            this._renderCrossLineX(e, n);
                            break;
                        case "y":
                            this._renderCrossLineY(e, n);
                            break;
                        case "cross":
                            this._renderCrossLineX(e, n), this._renderCrossLineY(e, n);
                            break;
                        default:
                            this._renderCrossLineY(e, n) } }, _renderCrossLineY: function(t, e) {
                    var n, r, a = this.get("crosshairs");
                    e ? (n = e.bl.y, r = e.tl.y) : (n = t.get("height"), r = 0);
                    var s = i.mix({ x1: 0, y1: n, x2: 0, y2: r }, this.get("crossLine")); "dash" === a.shape && (s = i.mix(s, { lineDash: "6 3" }));
                    var o = this._getCrossShape(s);
                    this.set("crossShapeY", o) }, _renderCrossLineX: function(t, e) {
                    var n, r, a, s, o = this.get("crosshairs");
                    e ? (n = e.bl.x, r = e.br.x) : (n = t.get("width"), r = 0), a = i.mix({ x1: n, y1: 0, x2: r, y2: 0 }, this.get("crossLine")), "dash" === o.shape && (a = i.mix(a, { lineDash: "6 3" })), s = this._getCrossShape(a), this.set("crossShapeX", s) }, _getCrossShape: function(t) {
                    var e = this.get("crossGroup"),
                        n = e.addShape("Line", { attrs: t });
                    return n }, clearCrossGroup: function() {
                    var t = this.get("crossGroup");
                    this.set("crossShapeX", void 0), this.set("crossShapeY", void 0), t.clear() }, setCross: function(t) {
                    var e = {};
                    e.type = t, this.set("crosshairs", { type: t }), this._renderCrossLine() }, setContent: function(t, e) {
                    var n = this._isContentChange(t, e);
                    if (!n) {
                        var r = this.get("custom"),
                            i = (this.get("timeStamp"), +new Date);
                        this.set("items", e), this.set("titleText", t), this.set("timeStamp", i), r ? this._renderCustom() : this._renderUl() }
                    return this }, _isContentChange: function(t, e) {
                    var n = this.get("titleText"),
                        r = this.get("items");
                    return t === n && r.length === e.length && e[0].value === r[0].value }, getTitle: function() {
                    return this.get("titleShape") }, setPosition: function(t, e) {
                    var n = this.get("canvas"),
                        r = this.get("customDiv"),
                        i = this.get("plotRange"),
                        s = this.get("offset"),
                        o = this.get("crossShapeX"),
                        u = this.get("crossShapeY"),
                        c = this.get("ulGroup"),
                        l = c.getBBBox(),
                        h = this.get("animate"),
                        f = (this.get("x"), this.get("y"), new a.Matrix3),
                        g = !0,
                        p = t,
                        v = e;
                    r && this.get("customFollow") ? t += s : (t = t - l.width - s, e -= l.height), i && (i.isInRange(t, e) || (i.isInVertical(e) || (e = i.tl.y), i.isInHorizontal(t) || (t = Math.max(i.tl.x, p) + s, g = !1))), this.get("x") === t && this.get("y") === e || (u && (g ? u.move(p, 0) : u.move(t - s, 0)), o && o.move(0, v), f.translate(t, e), h && this.get("visible") ? c.animate({ matrix: f }, this.get("duration")) : (c.setMatrix(f), this.get("visible") || this.show(), n.draw()), this.moveCustom(t, e, g)) }, _setCustomDiv: function() {
                    var t, e, n = this,
                        r = n.get("html"),
                        a = n.get("canvas").get("el").parentNode; /^\#/.test(r) ? (e = r.replace("#", ""), t = document.getElementById(e)) : t = i.createDom(r), n.set("customDiv", t), n.get("customFollow") && (a.appendChild(t), a.style.position = "relative") }, _renderCustom: function() {
                    var t = this,
                        e = t.get("title"),
                        n = t.get("titleText"),
                        a = t.get("customDiv"),
                        s = r(a, c),
                        o = r(a, l),
                        u = t.get("items");
                    t._clearCustom(), s && e && (s.innerHTML = n), o && (t.set("titleText", n), i.each(u, function(e, n) { t.addCustomItem(e, n) })) }, _clearCustom: function() {
                    var t = this.get("customDiv"),
                        e = r(t, c),
                        n = r(t, l);
                    e && (e.innerHTML = ""), n && (n.innerHTML = "") }, addCustomItem: function(t, e) {
                    var n, a, s = this.get("customDiv"),
                        o = r(s, l),
                        u = this.get("itemTpl");
                    n = i.substitute(u, t), a = i.createDom(n), o.appendChild(a) }, moveCustom: function(t, e) {
                    var n = this,
                        r = n.get("customDiv");
                    r && n.get("customFollow") && (t = t, e = e, e -= i.getOuterHeight(r) / 2, r.style.left = t + "px", r.style.top = e + "px") }, show: function() {
                    var t = this.get("crossShapeX"),
                        e = this.get("crossShapeY"),
                        n = this.get("customDiv"),
                        r = this.get("hideHandler");
                    r && clearTimeout(r), h.superclass.show.call(this), n && this.get("customFollow") && (n.style.visibility = "visible"), t && t.show(), e && e.show() }, hide: function() {
                    var t = this,
                        e = t.get("customDiv"),
                        n = t.get("crossShapeX"),
                        r = t.get("crossShapeY"),
                        i = t.get("canvas"),
                        a = setTimeout(function() { e && t.get("customFollow") && (e.style.visibility = "hidden"), t.set("hideHandler", null), t.get("destroyed") || (h.superclass.hide.call(t), i.draw()) }, t.get("duration"));
                    t.set("hideHandler", a), n && n.hide(), r && r.hide() }, remove: function() {
                    var t = this,
                        e = t.get("crossShapeX"),
                        n = t.get("crossShapeY"),
                        r = t.get("customDiv");
                    e && e.remove(), n && n.remove(), h.superclass.remove.call(this), r && r.parentNode.removeChild(r) } }), t.exports = h },
        function(t, e, n) { "use strict";

            function r(t) { r.superclass.constructor.call(this, t) }
            var i = n(1),
                a = n(12),
                s = n(47),
                o = a.GroupBase;
            r.CFG = { items: null, itemsGroup: null, backShape: null, back: { radius: 6, fill: "#000", fillOpacity: .7 }, padding: null, lineHeight: null, _padding: [10, 10, 10, 10], _lineHeight: 20 }, i.extend(r, o), i.augment(r, { _initCfg: function() { this.deepSet("lineHeight"), this.deepSet("padding"), this.deepSet("marker") }, _beforeRenderUI: function() { r.superclass._beforeRenderUI.call(this);
                    var t = this;
                    t.get("items");
                    t.set("itemsGroup", this.addGroup()) }, _renderUI: function() { r.superclass._renderUI.call(this);
                    var t = this;
                    t.get("items") && (t._renderItems(), t._renderBack()) }, _renderBack: function() {
                    var t = this.get("padding"),
                        e = this.get("back"),
                        n = this.get("itemsGroup"),
                        r = n.renderBack(t, e);
                    this.set("backShape", r) }, _renderItems: function() {
                    var t = this,
                        e = t.get("items");
                    i.each(e, function(e, n) { t._addItem(e, n) }) }, _addItem: function(t, e) {
                    var n = this,
                        r = (n.get("canvas"), n.get("itemsGroup")),
                        i = (n.get("lineHeight"), n.get("padding")),
                        a = e * n.get("lineHeight") + i[0] + 8;
                    r.addGroup(s, { x: i[3], y: a, items: t }) }, setItems: function(t) {
                    var e = this;
                    e.clearItems(), e.set("items", t), e._renderItems(), e._renderBack() }, clearItems: function() {
                    var t = this,
                        e = t.get("itemsGroup");
                    e && e.clear() } }), t.exports = r },
        function(t, e) {
            "use strict";
            var n = (Math.pow, Math.abs, {
                linear: function(t) {
                    return t },
                easeInQuad: function(t) {
                    return t * t },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2) },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) },
                easeInCubic: function(t) {
                    return t * t * t },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1) },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) },
                easeInQuart: function(t) {
                    return t * t * t * t },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1) },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2) },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1) },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1 },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2)) },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1) },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1)) },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1) },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2) },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t) },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        r = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), r < Math.abs(1) ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n))) },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        r = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), r < Math.abs(1) ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1) },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        r = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), r < Math.abs(1) ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? -.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1) },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e) },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1) },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2) },
                easeInBounce: function(t) {
                    return 1 - n.easeOutBounce(1 - t) },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
                },
                easeInOutBounce: function(t) {
                    return t < .5 ? .5 * n.easeInBounce(2 * t) : .5 * n.easeOutBounce(2 * t - 1) + .5 }
            });
            t.exports = n
        },
        function(t, e, n) { "use strict";
            var r = n(9),
                i = n(16),
                a = n(3),
                s = n(50),
                o = (a.Vector3, i.G, function() {});
            r.augment(o, { fire: function(t, e) {
                    var n, r = new s(t);
                    for (n in e) r[n] = e[n];
                    this.trigger(r) }, getCenter: function() {
                    var t = this.getBBBox();
                    return { x: t.minX + t.width / 2, y: t.minY + t.height / 2 } }, getWidth: function() {
                    return this.getBBBox().width }, getHeight: function() {
                    return this.getBBBox().height }, init: function() { this.set("animable", !0), this.set("animCount", 0), this.transformByAttr() }, deepSet: function(t) {
                    var e = this.get("_" + t),
                        n = this.deepGet(t);
                    this.set(t, r.merge(e, n)) }, deepGet: function(t) {
                    for (var e = this.get(t), n = (this.get("canvas"), this.getParent()); n;) {
                        if (e) return e;
                        e = n.get(t), n = n.getParent() } }, getCanvasNode: function() {
                    var t = this.get("canvas");
                    return t.get("el") }, transformByAttr: function() {
                    var t = this.get("attrs");
                    return t && t.rotate && this.rotateAtStart(t.rotate), this }, rotateAtStart: function(t) {
                    var e = this.attr("x"),
                        n = this.attr("y");
                    this.transform([
                        ["t", -e, -n],
                        ["r", t],
                        ["t", e, n]
                    ]) }, move: function(t, e) {
                    var n = this,
                        r = n.get("x") || 0,
                        i = n.get("y") || 0;
                    n.translate(t - r, e - i), n.set("x", t), n.set("y", e) }, animate: function(t, e, n, i) { this.get("animCount");
                    this.addAnimCount(), r.animate(this, t, e, n, i) }, stopAnimate: function() { this.set("animable", !1) }, addAnimCount: function() {
                    var t = this.get("animCount");
                    t < 1e4 ? this.set("animCount", ++t) : this.set("animCount", 0) } }), t.exports = o },
        function(t, e, n) {
            var r = n(9),
                i = n(16),
                a = n(70),
                s = i.G,
                o = function() {};
            r.augment(o, { findAllBy: function(t) {
                    var e = this,
                        n = e.get("children"),
                        i = [],
                        a = [];
                    return r.each(n, function(e) {
                        if (t(e) && i.push(e), e.findBy) { a = e.findAllBy(t);
                            for (var n = 0; n < a.length; n++) i.push(a[n]) } }), 0 !== i.length && i }, isChild: function(t) {
                    var e = this.get("canvas"),
                        n = e.get("children");
                    return n.indexOf(t) !== -1 }, getFilterChild: function(t) {
                    var e = this.get("children"),
                        n = [];
                    return r.each(e, function(e, r) { t != e && n.push(e) }), n }, getChildAt: function(t) {
                    var e = this.get("children");
                    return e[t] }, getFirst: function() {
                    var t = this.get("children");
                    return t[0] }, getLast: function() {
                    var t = this.get("children");
                    return t[t.length - 1] }, addShape: function(t, e) {
                    var n, i, a = this.get("canvas");
                    return e = r.mix({}, e), e ? (e.type = t, t = r.upperFirst(t), e.attrs && (i = e.attrs, r.adapAttrs(i), "Text" === t && (i.fontFamily = i.fontFamily ? i.fontFamily : a.get("fontFamily"))), e.canvas = a, e.father = this, n = new s[t](e)) : n = new s[t], this.add(n), n }, addGroup: function(t, e) {
                    var n, i = this.get("canvas");
                    if (e = r.mix({}, e), r.adapAttrs(e.attrs), r.isFunction(t)) e ? (e.canvas = i, e.father = this, n = new t(e)) : n = new t({ canvas: i, father: this }), this.add(n);
                    else if (r.isObject(t)) t.canvas = i, n = new a(t), this.add(n);
                    else {
                        if (void 0 !== t) return !1;
                        n = new a, this.add(n) }
                    return n }, renderBack: function(t, e) {
                    var n = this.get("backShape"),
                        i = this.getBBBox(),
                        a = this.getParent();
                    return r.mix(e, { x: i.minX - t[3], y: i.minY - t[0], width: i.width + t[1] + t[3], height: i.height + t[0] + t[2] }), n ? n.attr(e) : n = a.addShape("Rect", { zIndex: -1, attrs: e }), this.set("backShape", n), a.sort(), n }, findByType: function(t) {
                    var e, n = this.get("children");
                    return r.each(n, function(n, r) { n.get("type") === t && (e = n) }), e } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(16),
                i = n(9),
                a = r.G,
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.Symbols = { circle: function(t, e, n) {
                    return [
                        ["M", t, e - n],
                        ["a", n, n, 0, 1, 1, 0, 2 * n],
                        ["a", n, n, 0, 1, 1, 0, -2 * n],
                        ["z"]
                    ] }, square: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e - n],
                        ["L", t + n, e + n],
                        ["L", t - n, e + n],
                        ["z"]
                    ] }, diamond: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t, e - n],
                        ["L", t + n, e],
                        ["L", t, e + n],
                        ["z"]
                    ] }, triangle: function(t, e, n) {
                    var r = n / .966,
                        i = n;
                    return [
                        ["M", t, e - n],
                        ["L", t + r, e + i],
                        ["L", t - r, e + i],
                        ["z"]
                    ] }, "triangle-down": function(t, e, n) {
                    var r = n / .966,
                        i = n;
                    return [
                        ["M", t, e + n],
                        ["L", t + r, e - i],
                        ["L", t - r, e - i],
                        ["z"]
                    ] } }, s.ATTRS = { path: null, lineWidth: 1 }, i.extend(s, a.Path), i.augment(s, { getDefaultAttrs: function() { s.superclass.getDefaultAttrs.call(this);
                    var t, e, n = this.get("attrs"),
                        r = n.x,
                        a = n.y,
                        o = n.radius ? n.radius : n.r;
                    if (e = i.isFunction(n.symbol) ? n.symbol : s.Symbols[n.symbol], !e) throw "not support this type " + n.symbol;
                    return t = { path: e(r, a, o) }, i.mix(s.ATTRS, t) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = { transform: function(t, e) {
                        return t = t.clone(), r.each(e, function(e) {
                            switch (e[0]) {
                                case "t":
                                    t.translate(e[1], e[2]);
                                    break;
                                case "s":
                                    t.scale(e[1], e[2]);
                                    break;
                                case "r":
                                    t.rotate(e[1]);
                                    break;
                                case "m":
                                    t.multiply(e[1]);
                                    break;
                                default:
                                    return !1 } }), t }, isMatrix3: function(t) {
                        return "matrix3" === t.type }, scale: function(t, e, n, r, i) {
                        return t = t.clone(), t.translate(-1 * r, -1 * i), t.scale(e, n), t.translate(r, i), t }, rotate: function(t, e, n, r) {
                        return t = t.clone(), e = parseFloat(e) / 180 * Math.PI, t.translate(-1 * n, -1 * r), t.rotate(e), t.translate(n, r), t } };
            t.exports = i },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                    var a = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];
                    e ? r ? i - 4 === r ? a[3] = { x: +t[0], y: +t[1] } : i - 2 === r && (a[2] = { x: +t[0], y: +t[1] }, a[3] = { x: +t[2], y: +t[3] }) : a[0] = { x: +t[i - 2], y: +t[i - 1] } : i - 4 === r ? a[3] = a[2] : r || (a[0] = { x: +t[r], y: +t[r + 1] }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]) }
                return n }
            var i = n(1),
                a = "concat",
                s = String.prototype.toUpperCase,
                o = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                u = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                c = { path2Absolute: function(t) {
                        if (i.isArray(t) && i.isArray(t && t[0]) || (t = c.parsePathString(t)), !t || !t.length) return [
                            ["M", 0, 0]
                        ];
                        var e = [],
                            n = 0,
                            o = 0,
                            u = 0,
                            l = 0,
                            h = 0; "M" === t[0][0] && (n = +t[0][1], o = +t[0][2], u = n, l = o, h++, e[0] = ["M", n, o]);
                        for (var f, g, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), v = h, d = t.length; v < d; v++) { e.push(f = []), g = t[v];
                            var x;
                            if (g[0] !== s.call(g[0])) switch (f[0] = s.call(g[0]), f[0]) {
                                    case "A":
                                        f[1] = g[1], f[2] = g[2], f[3] = g[3], f[4] = g[4], f[5] = g[5], f[6] = +(g[6] + n), f[7] = +(g[7] + o);
                                        break;
                                    case "V":
                                        f[1] = +g[1] + o;
                                        break;
                                    case "H":
                                        f[1] = +g[1] + n;
                                        break;
                                    case "R":
                                        x = [n, o][a](g.slice(1));
                                        for (var m = 2, y = x.length; m < y; m++) x[m] = +x[m] + n, x[++m] = +x[m] + o;
                                        e.pop(), e = e[a](r(x, p));
                                        break;
                                    case "M":
                                        for (u = +g[1] + n, l = +g[2] + o, m = 1, y = g.length; m < y; m++) f[m] = +g[m] + (m % 2 ? n : o);
                                        break;
                                    default:
                                        for (m = 1, y = g.length; m < y; m++) f[m] = +g[m] + (m % 2 ? n : o) } else if ("R" === g[0]) x = [n, o][a](g.slice(1)), e.pop(), e = e[a](r(x, p)), f = ["R"][a](g.slice(-2));
                                else
                                    for (var _ = 0, S = g.length; _ < S; _++) f[_] = g[_];
                            switch (f[0]) {
                                case "Z":
                                    n = u, o = l;
                                    break;
                                case "H":
                                    n = f[1];
                                    break;
                                case "V":
                                    o = f[1];
                                    break;
                                case "M":
                                    u = f[f.length - 2], l = f[f.length - 1], n = f[f.length - 2], o = f[f.length - 1];
                                    break;
                                default:
                                    n = f[f.length - 2], o = f[f.length - 1] } }
                        return e }, parsePathString: function(t) {
                        if (!t) return null;
                        var e = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
                            n = [];
                        return i.isArray(t) && i.isArray(t[0]) && (n = t.slice(0)), !n.length && i.isString(t) && t.replace(u, function(t, r, i) {
                            var s = [],
                                u = r.toLowerCase();
                            if (i.replace(o, function(t, e) { e && s.push(+e) }), "m" === u && s.length > 2 && (n.push([r][a](s.splice(0, 2))), u = "l", r = "m" === r ? "l" : "L"), "r" === u) n.push([r][a](s));
                            else
                                for (; s.length >= e[u] && (n.push([r][a](s.splice(0, e[u]))), e[u]);); }), n }, parsePathArray: function(t) {
                        if (i.isArray(t)) {
                            var e = i.map(t, function(t) {
                                var e = t.join(" ");
                                return e.replace(/([a-z,A-Z])\s+/, "$1") });
                            return e.join(" ") }
                        return t } };
            t.exports = c },
        function(t, e, n) { "use strict";

            function r(t) { this.space = {}, i.isString(t) ? this.setStyle(t) : t instanceof r && this.copy(t) }
            var i = n(1),
                a = (n(4), n(131)),
                s = n(132),
                o = n(130),
                u = { hex: /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/, space: /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)$/, rgbNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/, rgbaNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/, rgbPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/, rgbaPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/, hsl: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/, hsla: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/ };
            i.augment(r, { getType: function() {
                    return this.space.type }, toRGB: function() {
                    var t = this.space;
                    if ("rgb" !== t.type) {
                        var e = t.toRGB();
                        this.setRGB(e.r, e.g, e.b, e.a) } }, toHSL: function() {
                    var t = this.space;
                    if ("hsl" !== t.type) {
                        var e = t.toHSL();
                        this.setHSL(e.h, e.s, e.l, e.a) } }, getR: function() {
                    return this.toRGB(), this.space.r }, getG: function() {
                    return this.toRGB(), this.space.g }, getB: function() {
                    return this.toRGB(), this.space.b }, getH: function() {
                    return this.toHSL(), this.space.h }, getS: function() {
                    return this.toHSL(), this.space.s }, getL: function() {
                    return this.toHSL(), this.space.l }, getA: function() {
                    return this.space.a }, multiplyA: function(t) {
                    return void 0 === t ? this : (void 0 === this.space.a && (this.space.a = 1), this.space.a *= t, this) }, getRGBStyle: function() {
                    return this.toRGB(), this.space.getStyle() }, getRGBPreStyle: function() {
                    return this.toRGB(), this.space.getPreStyle() }, getHSLStyle: function() {
                    return this.toHSL(), this.space.getStyle() }, getHex: function() {
                    return this.toRGB(), this.space.getHex() }, setRGB: function(t, e, n, r) {
                    return this.space = new s, this.space.setRGB(t, e, n, r), this }, setHSL: function(t, e, n, r) {
                    return this.space = new a, this.space.setHSL(t, e, n, r), this }, setHex: function(t) {
                    return this.space = new s, t = Math.floor(t), this.space.r = (t >> 16 & 255) / 255, this.space.g = (t >> 8 & 255) / 255, this.space.b = (255 & t) / 255, this }, setStyle: function(t) {
                    var e;
                    if (e = u.hex.exec(t)) {
                        var n = e[1],
                            r = n.length;
                        if (3 === r) return this.setRGB(parseInt(n.charAt(0) + n.charAt(0), 16) / 255, parseInt(n.charAt(1) + n.charAt(1), 16) / 255, parseInt(n.charAt(2) + n.charAt(2), 16) / 255), this;
                        if (6 === r) return this.setRGB(parseInt(n.charAt(0) + n.charAt(1), 16) / 255, parseInt(n.charAt(2) + n.charAt(3), 16) / 255, parseInt(n.charAt(4) + n.charAt(5), 16) / 255), this } else if (e = u.space.exec(t)) {
                        var i, a = e[1],
                            s = e[2];
                        switch (a) {
                            case "rgb":
                                if (i = u.rgbNum.exec(s)) return this.setRGB(parseInt(i[1], 10) / 255, parseInt(i[2], 10) / 255, parseInt(i[3], 10) / 255), this;
                                if (i = u.rgbPre.exec(s)) return this.setRGB(parseInt(i[1], 10) / 100, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100), this;
                                break;
                            case "rgba":
                                if (i = u.rgbaNum.exec(s)) return this.setRGB(parseInt(i[1], 10) / 255, parseInt(i[2], 10) / 255, parseInt(i[3], 10) / 255, parseFloat(i[4])), this;
                                if (i = u.rgbaPre.exec(s)) return this.setRGB(parseInt(i[1], 10) / 100, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100, parseFloat(i[4])), this;
                                break;
                            case "hsl":
                                if (i = u.hsl.exec(s)) return this.setHSL(parseInt(i[1], 10) / 360, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100), this;
                                break;
                            case "hsla":
                                if (i = u.hsla.exec(s)) return this.setHSL(parseInt(i[1], 10) / 360, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100, parseFloat(i[4])), this } } else t = t.toLowerCase(), void 0 !== o[t] ? this.setHex(o[t]) : this.setHex(o.black) }, copy: function(t) { this.space = t.space.clone() }, clone: function() {
                    return new r(this) } }), t.exports = r },
        function(t, e) { t.exports = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 } },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(4),
                a = function() { this.h = 0, this.s = 0, this.l = 0 };
            r.augment(a, { type: "hsl", setHSL: function(t, e, n, r) { this.h = i.mod(t, 1), this.s = i.clamp(e, 0, 1), this.l = i.clamp(n, 0, 1), void 0 !== r ? this.a = i.clamp(r, 0, 1) : this.a = void 0 }, toRGB: function() {
                    function t(t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t }
                    return function() {
                        var e = this,
                            n = e.h,
                            r = e.s,
                            i = e.l;
                        if (0 === r) return { r: i, g: i, b: i, a: e.a };
                        var a = i <= .5 ? i * (1 + r) : i + r - i * r,
                            s = 2 * i - a;
                        return { r: t(s, a, n + 1 / 3), g: t(s, a, n), b: t(s, a, n - 1 / 3), a: e.a } } }(), clone: function() {
                    var t = new a;
                    return t.h = this.h, t.s = this.s, t.l = this.l, t.a = this.a, t }, copy: function(t) {
                    return this.h = t.h, this.s = t.s, this.l = t.l, this.a = t.a, this }, getStyle: function() {
                    var t = this;
                    return void 0 === t.a ? "hsl(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%)" : "hsla(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%, " + t.a + ")" } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(4),
                a = function() { this.r = 0, this.g = 0, this.b = 0, this.type = "rgb" };
            r.augment(a, { type: "rgb", setRGB: function(t, e, n, r) { this.r = i.clamp(t, 0, 1), this.g = i.clamp(e, 0, 1), this.b = i.clamp(n, 0, 1), void 0 !== r ? this.a = i.clamp(r, 0, 1) : this.a = void 0 }, toHSL: function() {
                    var t, e, n = this.r,
                        r = this.g,
                        i = this.b,
                        a = Math.max(n, r, i),
                        s = Math.min(n, r, i),
                        o = (s + a) / 2;
                    if (s === a) t = 0, e = 0;
                    else {
                        var u = a - s;
                        switch (e = o <= .5 ? u / (a + s) : u / (2 - a - s), a) {
                            case n:
                                t = (r - i) / u + (r < i ? 6 : 0);
                                break;
                            case r:
                                t = (i - n) / u + 2;
                                break;
                            case i:
                                t = (n - r) / u + 4 }
                        t /= 6 }
                    return { h: t, s: e, l: o, a: this.a } }, getHex: function() {
                    var t = 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
                    return "#" + ("000000" + t.toString(16)).slice(-6) }, getStyle: function() {
                    return void 0 === this.a ? "rgb(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ")" : "rgba(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ", " + this.a + ")" }, getPreStyle: function() {
                    return void 0 === this.a ? "rgb(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%)" : "rgba(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%, " + this.a + ")" }, clone: function() {
                    var t = new a;
                    return t.r = this.r, t.g = this.g, t.b = this.b, t.a = this.a, t }, copy: function(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this } }), t.exports = a },
        function(t, e) { "use strict";

            function n(t) { w = t.length, w && (b = t[0].length), w > 1 && b > 1 && (m = t[0][0][0], _ = t[0][0][1], y = t[1][0][0] - t[0][0][0], S = t[0][1][1] - t[0][0][1]) }

            function r(t, e) {
                var n = i(!0, t, e),
                    r = i(!1, t, e);
                return [n, r] }

            function i(t, e, n) {
                var r = w,
                    i = b,
                    s = [];
                t ? i-- : r--;
                for (var o = 0; o < r; o++) { s[o] = [];
                    for (var u = 0; u < i; u++) { s[o][u] = {};
                        var c, l;
                        if (c = e[o][u][2], l = t ? e[o][u + 1][2] : e[o + 1][u][2], a(c, l)) s[o][u].rate = -2, s[o][u].have_iso_point = !1;
                        else {
                            var h = a(n, c),
                                f = a(n, l),
                                g = (n - c) * (n - l);
                            if (h || f) { h ? c += M : l += M;
                                var p = s[o][u].rate = (n - c) / (l - c);
                                p > 0 && p < 1 ? s[o][u].have_iso_point = !0 : s[o][u].have_iso_point = !1 } else g > 0 ? (s[o][u].rate = -2, s[o][u].have_iso_point = !1) : g < 0 && (s[o][u].rate = (n - c) / (l - c), s[o][u].have_iso_point = !0) } } }
                return s }

            function a(t, e) {
                return Math.abs(t - e) < 1e-9 }

            function s(t, e, n, r) {
                var i = 0,
                    a = 0,
                    s = c(),
                    u = c();
                for (i = 0; i < w - 1; i++) e[i][0].have_iso_point && (s = c(i, -1, !1), u = c(i, 0, !1), o(s, u, n, r, t, e));
                for (a = 0; a < b - 1; a++) t[w - 1][a].have_iso_point && (s = c(w, a, !0), u = c(w - 1, a, !0), o(s, u, n, r, t, e));
                for (i = 0; i < w - 1; i++) e[i][b - 1].have_iso_point && (s = c(i, b, !1), u = c(i, b - 1, !1), o(s, u, n, r, t, e));
                for (a = 0; a < b - 1; a++) t[0][a].have_iso_point && (s = c(-1, a, !0), u = c(0, a, !0), o(s, u, n, r, t, e)) }

            function o(t, e, n, r, i, a) {
                var s = !1,
                    o = { value: n, path: [] };
                for (h(e, i, a), o.path.push(u(e, i, a)); !s && f(e, t, i, a, o);) s = !e.row && e.isHorizon || !e.col && !e.isHorizon || e.row == w - 1 || e.col == b - 1;
                r.push(o) }

            function u(t, e, n) {
                var r = t.row,
                    i = t.col,
                    a = t.isHorizon,
                    s = m + r * y,
                    o = _ + i * S;
                return a ? o += e[r][i].rate * S : s += n[r][i].rate * y, [s, o] }

            function c(t, e, n) {
                return { row: t || 0, col: e || 0, isHorizon: n || 0, clone: l } }

            function l(t) { this.row = t.row, this.col = t.col, this.isHorizon = t.isHorizon }

            function h(t, e, n) {
                var r = t.row,
                    i = t.col,
                    a = t.isHorizon;
                return a ? e[r][i].have_iso_point = !1 : n[r][i].have_iso_point = !1, t }

            function f(t, e, n, r, i) {
                var a = c(),
                    s = c(),
                    o = c();
                g(a, s, o, t, e);
                for (var l = [a, s, o], f = [], d = {}, x = !1, m = 0; m < 3; m++) f[m] = p(n, r, l[m]);
                if (f[0] && f[1] && f[2]) d = v(t, l[0], n, r) < v(t, l[1], n, r) ? h(l[0], n, r) : h(l[1], n, r), x = !0;
                else
                    for (var m = 0; m < 3; m++)
                        if (f[m]) { d = h(l[m], n, r), x = !0;
                            break } return x && (i.path.push(u(d, n, r)), e.clone(t), t.clone(d)), x }

            function g(t, e, n, r, i) {
                return r.row > i.row ? (t.clone(r), t.isHorizon = !1, e.clone(t), e.col += 1, n.clone(r), void(n.row += 1)) : r.col > i.col ? (e.clone(r), e.isHorizon = !0, t.clone(e), t.row += 1, n.clone(r), void(n.col += 1)) : r.isHorizon ? (e.clone(r), e.row -= 1, e.isHorizon = !1, t.clone(e), t.col += 1, n.clone(r), void(n.row -= 1)) : (t.clone(r), t.col -= 1, t.isHorizon = !0, e.clone(t), e.row += 1, n.clone(r), void(n.col -= 1)) }

            function p(t, e, n) {
                var r = n.row,
                    i = n.col,
                    a = n.isHorizon;
                return a ? t[r][i].have_iso_point : e[r][i].have_iso_point }

            function v(t, e, n, r) {
                var i = u(t, n, r),
                    a = u(e, n, r),
                    s = i.x - a.x,
                    o = i.y - a.y;
                return Math.sqrt(s * s + o * o) }

            function d(t, e, n, r) {
                var i, a, s = c(),
                    o = c();
                for (a = 0; a < b - 1; a++)
                    for (i = 0; i < w - 1; i++) e[i][a].have_iso_point && (s = c(i, 0, !1), o = c(i, a, !1), x(s, o, t, e, n, r)) }

            function x(t, e, n, r, i, a) {
                var s = e.row,
                    o = e.col,
                    c = !1,
                    l = { value: i, path: [] };
                for (l.path.push(u(e, n, r)); !c && f(e, t, n, r, l);) c = e.row == s && e.col == o && !e.isHorizon;
                a.push(l) }
            var m, y, _, S, w = 0,
                b = 0,
                M = .001,
                A = function(t, e) {
                    var i, a = [],
                        o = [],
                        u = [];
                    n(t);
                    for (var c = 0; c < e.length; c++) { i = e[c];
                        var l = r(t, i);
                        a = l[0], o = l[1], s(a, o, i, u), d(a, o, i, u) }
                    return u };
            t.exports = A },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(49),
                a = function(t) { t.inner = t.inner || 0, a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { type: "clock" }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(49),
                a = function(t) { t.inner = t.inner || 0, a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { type: "gauge" }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(72),
                a = n(151),
                s = function(t) {
                    var e = {};
                    r.mix(e, s.ATTRS, t), s.superclass.constructor.call(this, e);
                    var n = this.get("projection"),
                        i = this.get("basic"),
                        o = a[n];
                    this.set("project", new o({ basic: i })) };
            s.ATTRS = { projection: "mercator" }, r.extend(s, i), r.augment(s, { type: "map", _getOriginRange: function() {
                    var t = this,
                        e = t.get("originMin")[0],
                        n = t.get("originMin")[1],
                        r = t.get("originMax")[0],
                        i = t.get("originMax")[1],
                        a = { x: r - e, y: i - n };
                    return { xMin: e, yMin: n, range: a } }, _getProjectRange: function() {
                    var t = this,
                        e = t.get("min") ? t.get("min") : t.get("originMin"),
                        n = t.get("max") ? t.get("max") : t.get("originMax"),
                        r = e[0],
                        i = e[1],
                        a = n[0],
                        s = n[1],
                        o = { x: a - r, y: s - i };
                    return { xMin: r, yMin: i, range: o } }, _invert: function(t, e) {
                    var n; "origin" === e ? n = this._getOriginRange() : "project" === e && (n = this._getProjectRange());
                    var r = n.xMin,
                        i = n.yMin,
                        a = n.range;
                    return t.x = r + t.x * a.x, t.y = i + t.y * a.y, t }, _scale: function(t, e) {
                    var n; "origin" === e ? n = this._getOriginRange() : "project" === e && (n = this._getProjectRange());
                    var r = n.xMin,
                        i = n.yMin,
                        a = n.range;
                    return t.x = (t.x - r) / a.x, t.y = (t.y - i) / a.y, t }, convertPoint: function(t) {
                    var e = this,
                        n = e.isTransposed ? t.y : t.x,
                        r = e.isTransposed ? t.x : t.y,
                        i = e.get("project"),
                        a = e._invert({ x: n, y: r }, "origin");
                    return a = i.project(a.x, a.y), a = e._scale(a, "project"), { x: this.convertDim(a.x, "x"), y: this.convertDim(a.y, "y") } }, invertPoint: function(t) {
                    var e = this,
                        n = this.invertDim(t.x, "x"),
                        r = this.invertDim(t.y, "y"),
                        i = {};
                    i.x = e.isTransposed ? r : n, i.y = e.isTransposed ? n : r;
                    var a = e.get("project");
                    return i = e._invert(i, "project"), i = a.invert(i), i = e._scale(i, "origin") } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(38),
                a = n(3),
                s = a.Vector2,
                o = function(t) { t.inner = t.inner || 0, o.superclass.constructor.call(this, t);
                    var e = this.get("x");
                    this.set("x", this.get("y")), this.set("y", e) };
            r.extend(o, i), r.augment(o, { type: "rho", convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = e.get("y").start,
                        i = e.convertDim(t.x, "x");
                    return { x: n.x + Math.cos(r) * i, y: n.y + Math.sin(r) * i } }, invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = new s(t.x - n.x, t.y - n.y),
                        i = r.length();
                    return { x: e.invertDim(i, "x") } } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(38),
                a = n(3),
                s = n(4),
                o = a.Vector2,
                u = a.Matrix3,
                c = a.Vector3,
                l = function(t) { t.inner = t.inner || 0, l.superclass.constructor.call(this, t) };
            r.extend(l, i), r.augment(l, { type: "theta", convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = e.convertDim(t.x, "x"),
                        i = e.get("y").end;
                    return { x: n.x + Math.cos(r) * i, y: n.y + Math.sin(r) * i } }, invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        r = new o(t.x - n.x, t.y - n.y),
                        i = e.get("x"),
                        a = new u;
                    a.rotate(i.start);
                    var l = new c(1, 0, 0);
                    l.applyMatrix(a), l = new o(l.x, l.y);
                    var h = l.angleTo(r, i.end < i.start);
                    s.equal(h, 2 * Math.PI) && (h = 0);
                    var f = h / (i.end - i.start);
                    return f = i.end - i.start > 0 ? f : -f, { x: f } } }), t.exports = l },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = {};
                i.mix(e, r.ATTRS, t), r.superclass.constructor.call(this, e), this._init() }
            var i = n(1),
                a = n(37);
            r.ATTRS = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, top: .5 }, i.extend(r, a), i.augment(r, { type: "triAngle", triAngle: !0, _init: function() {
                    return this.setTopfactor(), this }, setTopfactor: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        r = { x: n.x, y: e.y },
                        i = { x: e.x + (n.x - e.x) * t.get("top"), y: n.y };
                    t.getXStart = function(t) {
                        return e.x + (i.x - e.x) / (i.y - e.y) * (t - e.y) }, t.getXEnd = function(t) {
                        return r.x + (i.x - r.x) / (i.y - r.y) * (t - r.y) } }, set: function(t, e) {
                    return this._attrs[t] = e, "top" === t && this.setTopfactor(), this }, convertPoint: function(t) {
                    var e = this,
                        n = e.get("start"),
                        r = e.get("end"),
                        i = t.y,
                        a = t.x;
                    isNaN(i) && (i = 0), i = n.y + (r.y - n.y) * i;
                    var s = e.getXStart(i),
                        o = e.getXEnd(i);
                    return a = s + (o - s) * a, { x: a, y: i } }, invertPoint: function(t) {
                    var e = this,
                        n = e.get("start"),
                        r = e.get("end"),
                        i = e.getXStart(t.y),
                        a = e.getXEnd(t.y),
                        s = (t.x - i) / (i - a);
                    return { x: -s, y: -(t.y - n.y) / (r.y - n.y) } } }), t.exports = r },
        function(t, e) { "use strict";

            function n(t) {
                return t instanceof Date ? t : new Date(t) }

            function r(t, e, n) {
                var r = new Date(n);
                switch (isNaN(r) && (r = new Date), e = parseInt(e, 10), t) {
                    case "s":
                        r = new Date(r.getTime() + 1e3 * e);
                        break;
                    case "n":
                        r = new Date(r.getTime() + 6e4 * e);
                        break;
                    case "h":
                        r = new Date(r.getTime() + 36e5 * e);
                        break;
                    case "d":
                        r = new Date(r.getTime() + 864e5 * e);
                        break;
                    case "w":
                        r = new Date(r.getTime() + 6048e5 * e);
                        break;
                    case "m":
                        r = new Date(r.getFullYear(), r.getMonth() + e, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds());
                        break;
                    case "y":
                        r = new Date(r.getFullYear() + e, r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds()) }
                return r }
            var i = /^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,
                a = function() {
                    var t = /w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                        e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                        n = /[^-+\dA-Z]/g,
                        r = function(t, e) {
                            for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
                            return t },
                        i = { "default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", isoUTCDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", localShortDate: "yy\u5e74mm\u6708dd\u65e5", localShortDateTime: "yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT", localLongDate: "yyyy\u5e74mm\u6708dd\u65e5", localLongDateTime: "yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT", localFullDate: "yyyy\u5e74mm\u6708dd\u65e5 w", localFullDateTime: "yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT" },
                        a = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };
                    return function(s, o, u) {
                        if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(s) || /\d/.test(s) || (o = s, s = void 0), s = s ? new Date(s) : new Date, isNaN(s)) throw SyntaxError("invalid date");
                        o = String(i[o] || o || i["default"]), "UTC:" === o.slice(0, 4) && (o = o.slice(4), u = !0);
                        var c = u ? "getUTC" : "get",
                            l = s[c + "Date"](),
                            h = s[c + "Day"](),
                            f = s[c + "Month"](),
                            g = s[c + "FullYear"](),
                            p = s[c + "Hours"](),
                            v = s[c + "Minutes"](),
                            d = s[c + "Seconds"](),
                            x = s[c + "Milliseconds"](),
                            m = u ? 0 : s.getTimezoneOffset(),
                            y = { d: l, dd: r(l, void 0), ddd: a.dayNames[h], dddd: a.dayNames[h + 7], w: a.dayNames[h + 14], m: f + 1, mm: r(f + 1, void 0), mmm: a.monthNames[f], mmmm: a.monthNames[f + 12], yy: String(g).slice(2), yyyy: g, h: p % 12 || 12, hh: r(p % 12 || 12, void 0), H: p, HH: r(p, void 0), M: v, MM: r(v, void 0), s: d, ss: r(d, void 0), l: r(x, 3), L: r(x > 99 ? Math.round(x / 10) : x, void 0), t: p < 12 ? "a" : "p", tt: p < 12 ? "am" : "pm", T: p < 12 ? "A" : "P", TT: p < 12 ? "AM" : "PM", Z: u ? "UTC" : (String(s).match(e) || [""]).pop().replace(n, ""), o: (m > 0 ? "-" : "+") + r(100 * Math.floor(Math.abs(m) / 60) + Math.abs(m) % 60, 4), S: ["th", "st", "nd", "rd"][l % 10 > 3 ? 0 : (l % 100 - l % 10 !== 10) * l % 10] };
                        return o.replace(t, function(t) {
                            return t in y ? y[t] : t.slice(1, t.length - 1) }) } }(),
                s = { add: function(t, e, n) {
                        return r(t, e, n) }, addHour: function(t, e) {
                        return r("h", t, e) }, addMinute: function(t, e) {
                        return r("n", t, e) }, addSecond: function(t, e) {
                        return r("s", t, e) }, addDay: function(t, e) {
                        return r("d", t, e) }, addWeek: function(t, e) {
                        return r("w", t, e) }, addMonths: function(t, e) {
                        return r("m", t, e) }, addYear: function(t, e) {
                        return r("y", t, e) }, isDateEquals: function(t, e) {
                        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate() }, isEquals: function(t, e) {
                        return t === e || !(!t || !e) && (!(!t.getTime || !e.getTime) && t.getTime() === e.getTime()) }, isDateString: function(t) {
                        return i.test(t) }, format: function(t, e, n) {
                        return a(t, e, n) }, parse: function(t) {
                        return "string" == typeof t && (t = t.replace(/-/g, "/")), n(t) }, today: function() {
                        var t = new Date;
                        return new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, getDate: function(t) {
                        return new Date(t.getFullYear(), t.getMonth(), t.getDate()) } };
            t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = function(t, e, n, r) { this.type = t, this.target = null, this.currentTarget = null, this.bubbles = n, this.cancelable = r, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e };
            r.augment(i, { preventDefault: function() { this.defaultPrevented = this.cancelable && !0 }, stopPropagation: function() { this.propagationStopped = !0 }, remove: function() { this.remove = !0 }, clone: function() {
                    return r.clone(this) }, toString: function() {
                    return "[Event (type=" + this.type + ")]" } }), t.exports = i },
        function(t, e) {
            var n = function(t, e, n) {
                    var r, i, a, s, o = !0;
                    for (r = 0; r < n - 1; r++) {
                        if (0 == t[r][r]) { o = !1;
                            break }
                        for (i = r + 1; i < n; i++)
                            for (s = -t[i][r] / t[r][r], e[i] = e[i] + s * e[r], a = r; a < n; a++) t[i][a] = t[i][a] + s * t[r][a] }
                    for (r = 0; r < n; r++)
                        if (0 == t[r][r]) { o = !1;
                            break }
                    return o },
                r = function(t, e) {
                    var r = [],
                        i = t,
                        a = e,
                        s = a.length,
                        o = n(i, a, s);
                    if (o) { r[s - 1] = a[s - 1] / i[s - 1][s - 1];
                        for (var u = s - 2; u >= 0; u--) { r[u] = a[u];
                            for (var c = u + 1; c < s; c++) r[u] = r[u] - i[u][c] * r[c];
                            r[u] = r[u] / i[u][u] } } else r = !1;
                    return r };
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(308),
                a = function(t) { r.mix(this, t) };
            r.augment(a, { get: function(t) {
                    return this[t] }, set: function(t, e) { this[t] = e }, width: 500, height: 500, x: 0, y: 0, min: null, max: null, formatter: function(t) {
                    return t }, radius: 60, blur: 0, colors: ["rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,255,0)", "yellow", "rgb(255,0,0)"], _mkcircle: function(t, e, n, r) {
                    var i = this.blur,
                        a = this.radius,
                        s = r.createRadialGradient(t, e, a * i, t, e, a);
                    s.addColorStop(0, "rgba(0, 0, 0, 1)"), s.addColorStop(1, "rgba(0, 0, 0, 0)"), r.globalAlpha = n, r.fillStyle = s }, _colorise: function(t) {
                    for (var e = this.width, n = this.height, r = t.getImageData(this.x, this.y, e, n), a = r.data, s = a.length, o = this.colors, u = i.gradient(o), c = 3; c < s; c += 4) {
                        var l = a[c];
                        if (l) {
                            var h = i.Util.rgb2arr(u(l / 256));
                            a[c - 3] = h[0], a[c - 2] = h[1], a[c - 1] = h[2], a[c] = l } }
                    return r }, getData: function(t) {
                    for (var e = [], n = t.length - 1; n >= 0; n--) e.push(t[n][2]);
                    var i = r.isNull(this.max) ? Math.max.apply(null, e) : this.max,
                        a = r.isNull(this.min) ? Math.min.apply(null, e) : this.min;
                    if (i === a) return !1;
                    var s = document.createElement("canvas"),
                        o = s.getContext("2d");
                    s.width = this.width + this.x, s.height = this.height + this.y;
                    for (var u = this.formatter, n = t.length - 1; n >= 0; n--) {
                        var c = (u(t[n][2]) - u(a)) / (u(i) - u(a));
                        this._mkcircle(t[n][0], t[n][1], c, o), o.fillRect(0, 0, this.width + this.x, this.height + this.y) }
                    return this._colorise(o) } }), t.exports = a },
        function(t, e, n) {
            var r = n(147);
            t.exports = { interpolation: r.interpolation, unInterpolation: r.unInterpolation } },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n = [], r = Math.min(t.length, e.length), i = 0; i < r; i++) n[i] = a.singular(t[i], e[i]);
                return function(t) {
                    for (var e = [], i = 0; i < r; i++) e[i] = n[i](t);
                    return e } }

            function i(t, e) {
                for (var n = [], r = Math.min(t.length, e.length), i = 0; i < r; i++) n[i] = a.unSingular(t[i], e[i]);
                return function(t) {
                    for (var e = Math.min(n.length, t.length), r = 0, i = 0, a = 0; a < e; a++) r += n[a](t[a]), i++;
                    return 0 === i ? 0 : r / i } }
            var a = n(40);
            t.exports = { array: r, unArray: i } },
        function(t, e, n) {
            "use strict";

            function r(t, e) {
                switch (e.getType()) {
                    case "rgb":
                        return a(t, e);
                    case "hsl":
                        return o(t, e) } }

            function i(t, e) {
                switch (e.getType()) {
                    case "rgb":
                        return s(t, e);
                    case "hsl":
                        return u(t, e) } }

            function a(t, e) {
                var n = t.getR(),
                    r = t.getG(),
                    i = t.getB(),
                    a = t.getA(),
                    s = e.getR() - n,
                    o = e.getG() - r,
                    u = e.getB() - i,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        var e = new c;
                        return e.setRGB(n + s * t, r + o * t, i + u * t, void 0 !== a && void 0 !== l ? a + l * t : void 0), e.getRGBStyle() } }

            function s(t, e) {
                var n = t.getR(),
                    r = t.getG(),
                    i = t.getB(),
                    a = t.getA(),
                    s = e.getR() - n,
                    o = e.getG() - r,
                    u = e.getB() - i,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        if (t = new c(t), !t.getType()) return 0;
                        var e = t.getR(),
                            h = t.getG(),
                            f = t.getB(),
                            g = t.getA();
                        g = g || 1;
                        var p = 0,
                            v = 0;
                        return 0 !== s && (p += (e - n) / s, v++), 0 !== o && (p += (h - r) / o, v++), 0 !== u && (p += (f - i) / u, v++), 0 !== l && l && (p += (g - a) / l, v++), 0 === v ? 0 : p / v } }

            function o(t, e) {
                var n = t.getH(),
                    r = t.getS(),
                    i = t.getL(),
                    a = t.getA(),
                    s = e.getH() - n,
                    o = e.getS() - r,
                    u = e.getL() - i,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        var e = new c;
                        return e.setHSL(n + s * t, r + o * t, i + u * t, void 0 !== a && void 0 !== l ? a + l * t : void 0), e.getHSLStyle() } }

            function u(t, e) {
                var n = t.getH(),
                    r = t.getS(),
                    i = t.getL(),
                    a = t.getA(),
                    s = e.getH() - n,
                    o = e.getS() - r,
                    u = e.getL() - i,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        if (t = new c(t), !t.getType()) return 0;
                        var e = t.getH(),
                            h = t.getS(),
                            f = t.getL(),
                            g = t.getA();
                        g = g || 1;
                        var p = 0,
                            v = 0;
                        return 0 !== s && (p += (e - n) / s, v++), 0 !== o && (p += (h - r) / o, v++), 0 !== u && (p += (f - i) / u, v++), 0 !== l && l && (p += (g - a) / l,
                            v++), 0 === v ? 0 : p / v
                    }
            }
            var c = n(36);
            t.exports = { color: r, unColor: i }
        },
        function(t, e, n) { "use strict";

            function r(t, e) {
                return t instanceof h && e instanceof h ? c.matrix(t, e) : a.isArray(t) && a.isArray(e) ? s.array(t, e) : a.isObject(t) && a.isObject(e) ? o.object(t, e) : u.singular(t, e) }

            function i(t, e) {
                return t instanceof h && e instanceof h ? c.unMatrix(t, e) : a.isArray(t) && a.isArray(e) ? s.unArray(t, e) : a.isObject(t) && a.isObject(e) ? o.unObject(t, e) : u.unSingular(t, e) }
            var a = n(1),
                s = n(145),
                o = n(150),
                u = n(40),
                c = n(148),
                l = n(3),
                h = l.Matrix3;
            t.exports = { interpolation: r, unInterpolation: i } },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n = [], r = t.elements, i = e.elements, s = 0; s < u; s++) n[s] = a.singular(r[s], i[s]);
                return function(t) {
                    for (var e = new o, r = e.elements, i = 0; i < u; i++) r[i] = n[i](t);
                    return e } }

            function i(t, e) {
                for (var n = [], r = t.elements, i = e.elements, s = 0; s < u; s++) n[s] = a.unSingular(r[s], i[s]);
                return function(t) {
                    for (var e = t.elements, r = 0, i = 0, a = 0; a < u; a++) {
                        var s = n[a](e[a]);
                        0 !== s && (r += s, i++) }
                    return r / i } }
            var a = n(40),
                s = n(3),
                o = s.Matrix3,
                u = 9;
            t.exports = { matrix: r, unMatrix: i } },
        function(t, e) { "use strict";

            function n(t, e) {
                return t = +t, e = +e,
                    function(n) {
                        return t * (1 - n) + e * n } }

            function r(t, e) {
                return e -= t,
                    function(n) {
                        return 0 === e ? 0 : (n - t) / e } }
            t.exports = { number: n, unNumber: r } },
        function(t, e, n) { "use strict";

            function r(t, e) {
                var n = {};
                for (var r in t) r in e && (n[r] = a.singular(t[r], e[r]));
                return function(t) {
                    var e = {};
                    for (var r in n) e[r] = n[r](t);
                    return e } }

            function i(t, e) {
                var n = {};
                for (var r in t) r in e && (n[r] = a.unSingular(t[r], e[r]));
                return function(t) {
                    var e = 0,
                        r = 0;
                    for (var i in n) i in t && (e += n[i](t[i]), r++);
                    return 0 === r ? 0 : e / r } }
            var a = n(40);
            t.exports = { object: r, unObject: i } },
        function(t, e, n) {
            var r;
            r = { albers: n(152), mercator: n(153), orthographic: n(154) }, t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(51),
                a = function(t) { a.superclass.constructor.call(this, t), this._init() };
            r.extend(a, i), r.augment(a, { "\u03bb0": 0, "\u03c60": 0, "\u03c61": 0, "\u03c62": 0, basic: [0, 0, 0, 60], _init: function() { this.\u03bb0 = this.toRadians(this.basic[0]), this.\u03c60 = this.toRadians(this.basic[1]), this.\u03c61 = this.toRadians(this.basic[2]), this.\u03c62 = this.toRadians(this.basic[3]) }, project: function(t, e) {
                    var n = this.\u03bb0,
                        r = (this.\u03c60, this.\u03c61),
                        i = this.\u03c62,
                        a = .5 * (Math.sin(r) + Math.sin(i)),
                        s = Math.cos(r),
                        o = s * s + 2 * a * Math.sin(r),
                        u = Math.sqrt(o - 2 * a * Math.sin(n)) / a,
                        c = a * (this.toRadians(t) - n),
                        l = Math.sqrt(o - 2 * a * Math.sin(this.toRadians(e))) / a;
                    return { x: this.toDegrees(l * Math.sin(c)), y: this.toDegrees(u - l * Math.cos(c)) } }, invert: function(t) {
                    var e = this.\u03bb0,
                        n = (this.\u03c60, this.\u03c61),
                        r = this.\u03c62,
                        i = this.toRadians(t.x),
                        a = this.toRadians(t.y),
                        s = .5 * (Math.sin(n) + Math.sin(r)),
                        o = Math.cos(n),
                        u = o * o + 2 * s * Math.sin(n),
                        c = Math.sqrt(u - 2 * s * Math.sin(e)) / s,
                        l = Math.atan(i / (c - a)),
                        h = Math.sqrt(i * i + Math.pow(c - a, 2));
                    return { x: this.toDegrees(e + l / s), y: this.toDegrees(Math.asin((u - h * h * s * s) / (2 * s))) } } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(51),
                a = function(t) { a.superclass.constructor.call(this, t), this._init() };
            r.extend(a, i), r.augment(a, { "\u03bb0": 0, _init: function() { this.\u03bb0 = this.toRadians(this.\u03bb0) }, project: function(t, e) {
                    return t = this.toRadians(t), e = this.toRadians(e), { x: this.toDegrees(t - this.\u03bb0), y: this.toDegrees(Math.log(Math.tan(Math.PI / 4 + e / 2))) } }, invert: function(t) {
                    var e = this.toRadians(t.x),
                        n = this.toRadians(t.y);
                    return { x: this.toDegrees(e + this.\u03bb0), y: this.toDegrees(2 * Math.atan(Math.exp(n)) - Math.PI / 2) } } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(51),
                a = function(t) { a.superclass.constructor.call(this, t), this._init() };
            r.extend(a, i), r.augment(a, { "\u03bb0": 110, "\u03c61": 25, _init: function() { this.\u03bb0 = this.toRadians(this.\u03bb0), this.\u03c61 = this.toRadians(this.\u03c61) }, project: function(t, e) { t = this.toRadians(t), e = this.toRadians(e);
                    var n = Math.cos(e) * Math.sin(t - this.\u03bb0),
                        r = Math.cos(\u03c61) * Math.sin(e) - Math.sin(\u03c61) * Math.cos(e) * Math.cos(t - \u03bb0);
                    return { x: this.toDegrees(n), y: this.toDegrees(r) } }, invert: function(t) {
                    var e = this.toRadians(t.x),
                        n = this.toRadians(t.y),
                        r = Math.sqrt(e * e + n * n),
                        i = Math.asin(r),
                        a = this.\u03bb0 + Math.atan(e * Math.sin(i) / (r * Math.cos(this.\u03c61) * Math.cos(i) - n * Math.sin(this.\u03c611) * Math.sin(i))),
                        s = Math.asin(Math.cos(i) * Math.sin(this.\u03c61) + n * Math.sin(i) * Math.cos(this.\u03c61) / r);
                    return { x: this.toDegrees(a), y: this.toDegrees(s) } } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = (n(2), n(28), { region: n(159), center: n(156), name: n(158), location: n(157) });
            t.exports = r },
        function(t, e, n) { "use strict";

            function r(t) {
                return Math.min.apply(null, t) }

            function i(t) {
                return Math.max.apply(null, t) }
            var a = n(1),
                s = n(28),
                o = function(t, e) {
                    return new s({ dims: t, mapData: e, addGeoInfo: function(t, e) {
                            var n = this,
                                r = n.getDims(),
                                i = r[r.length - 1],
                                s = t[i],
                                o = n.mapData.features,
                                u = e[0],
                                c = e[1];
                            return t[u] = [], t[c] = [], o && a.each(o, function(e) {
                                var r = e.properties ? e.properties.name : "";
                                if (r === s) {
                                    var i = e.properties.cp;
                                    if (!i) {
                                        var a = e.geometry,
                                            o = a.coordinates,
                                            l = n._getBBox(o);
                                        i = [l[0] + (l[2] - l[0]) / 2, l[1] + (l[3] - l[1]) / 2] }
                                    return t[u] = i[0], t[c] = i[1], !1 } }), t }, _getBBox: function(t) {
                            var e = this,
                                n = [],
                                s = [],
                                o = e._getPoints(t);
                            return a.each(o, function(t) { n.push(t[0]), s.push(t[1]) }), [r(n), r(s), i(n), i(s)] }, _getPoints: function(t) {
                            var e = this,
                                n = [];
                            return a.isArray(t[0]) ? a.each(t, function(t) {
                                var r = e._getPoints(t);
                                n = n.concat(r) }) : n.push(t), n } }) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(28),
                i = function(t) {
                    return new r({ dims: t, initDims: function(t) {
                            var e = t.slice(0, 2),
                                n = t.slice(2);
                            t = n.concat(e), t.unshift("..lant"), t.unshift("..long"), this.dims = t }, addGeoInfo: function(t, e) {
                            var n = this,
                                r = e[0],
                                i = e[1],
                                a = n.getDims(),
                                s = a.length;
                            return t[r] = t[a[s - 2]], t[i] = t[a[s - 1]], t } }) };
            t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(28),
                a = function(t, e) {
                    return new i({ dims: t, mapData: e, initDims: function(t) { t.push("..name") }, addGeoInfo: function(t, e) {
                            var n = this,
                                i = n.getDims(),
                                a = i[0],
                                s = i[1],
                                o = [t[a], t[s]],
                                u = !1,
                                c = n.mapData.features;
                            return t[e] = "", c && r.each(c, function(i) {
                                var a = i.geometry.coordinates;
                                if ("Polygon" === i.geometry.type ? r.each(a, function(t) {
                                        if (u = n._isInside(o, t)) return !1 }) : "MultiPolygon" === i.geometry.type && r.each(a, function(t) {
                                        return !u && void r.each(t, function(t) {
                                            if (u = n._isInside(o, t)) return !1 }) }), u) {
                                    var s = i.properties ? i.properties.name : "";
                                    return t[e] = n.names ? n.names.indexOf(s) : s, !1 } }), t }, _isInside: function(t, e) {
                            for (var n = t[0], r = t[1], i = !1, a = 0, s = e.length - 1; a < e.length; s = a++) {
                                var o = e[a][0],
                                    u = e[a][1],
                                    c = e[s][0],
                                    l = e[s][1],
                                    h = u > r != l > r && n < (c - o) * (r - u) / (l - u) + o;
                                h && (i = !i) }
                            return i } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(28),
                a = function(t, e) {
                    return new i({ dims: t, mapData: e, addGeoInfo: function(t, e) {
                            var n = this,
                                i = n.getDims(),
                                a = i[i.length - 1],
                                s = t[a],
                                o = n.mapData,
                                u = o.features,
                                c = e[0],
                                l = e[1];
                            return t[c] = [], t[l] = [], u && r.each(u, function(e) {
                                var r = e.properties ? e.properties.name : "";
                                if (r === s) {
                                    var i = e.geometry,
                                        a = i.coordinates;
                                    return "Polygon" === i.type ? a.forEach(function(e) { n._getCoordinates(e, t[c], t[l]) }) : "MultiPolygon" === i.type ? a.forEach(function(e) { e.forEach(function(e) { n._getCoordinates(e, t[c], t[l]) }) }) : "MultiLineString" === i.type && a.forEach(function(e) { n._getCoordinates(e, t[c], t[l], "line") }), !1 } }), t }, _getCoordinates: function(t, e, n, i) {
                            return r.each(t, function(t) { e.push(t[0]), n.push(t[1]) }), i && "line" === i && (e.push(t[0][0]), n.push(t[0][1])), !1 } }) };
            t.exports = a },
        function(t, e) { "use strict";

            function n(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var r = t[0];
                if (e < t[0]) return NaN;
                if (e >= t[n - 1]) return t[n - 1];
                for (var i = 1; i < t.length && !(e < t[i]); i++) r = t[i];
                return r }

            function r(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var r, i = t[0];
                if (e > t[n - 1]) return NaN;
                if (e < t[0]) return t[0];
                for (var a = 1; a < t.length; a++) {
                    if (e <= t[a]) { r = t[a];
                        break }
                    i = t[a] }
                return r }
            var i = { PRECISION: 1e-5, equal: function(t, e) {
                    return Math.abs(t - e) < i.PRECISION }, clamp: function(t, e, n) {
                    return t < e ? e : t > n ? n : t }, snapTo: function(t, e) {
                    var i = n(t, e),
                        a = r(t, e);
                    if (isNaN(i) || isNaN(a)) {
                        if (t[0] >= e) return t[0];
                        var s = t[t.length - 1];
                        if (s <= e) return s }
                    return Math.abs(e - i) < Math.abs(a - e) ? i : a }, snapFloor: function(t, e) {
                    return n(t, e) }, snapCeiling: function(t, e) {
                    return r(t, e) }, degreeToRad: function(t) {
                    return Math.PI / 180 * t }, radToDegree: function(t) {
                    return 180 / Math.PI * t }, mod: function(t, e) {
                    return (t % e + e) % e } };
            t.exports = i },
        function(t, e, n) { "use strict";

            function r() { "undefined" != typeof Float32Array ? this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1] }
            var i = n(1),
                a = n(4);
            r.multiply = function(t, e) {
                var n = t.elements,
                    i = e.elements,
                    a = new r;
                return a.set(n[0] * i[0] + n[3] * i[1] + n[6] * i[2], n[0] * i[3] + n[3] * i[4] + n[6] * i[5], n[0] * i[6] + n[3] * i[7] + n[6] * i[8], n[1] * i[0] + n[4] * i[1] + n[7] * i[2], n[1] * i[3] + n[4] * i[4] + n[7] * i[5], n[1] * i[6] + n[4] * i[7] + n[7] * i[8], n[2] * i[0] + n[5] * i[1] + n[8] * i[2], n[2] * i[3] + n[5] * i[4] + n[8] * i[5], n[2] * i[6] + n[5] * i[7] + n[8] * i[8]) }, r.equal = function(t, e) {
                for (var n = t.elements, r = e.elements, i = !0, s = 0, o = n.length; s < o; s++)
                    if (!a.equal(n[s], r[s])) { i = !1;
                        break }
                return i }, i.augment(r, { type: "matrix3", set: function(t, e, n, r, i, a, s, o, u) {
                    var c = this.elements;
                    return c[0] = t, c[3] = e, c[6] = n, c[1] = r, c[4] = i, c[7] = a, c[2] = s, c[5] = o, c[8] = u, this }, get: function(t, e) {
                    return t--, e--, this.elements[3 * e + t] }, identity: function() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1) }, multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this }, det: function() {
                    var t = this.elements,
                        e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3],
                        a = t[4],
                        s = t[5],
                        o = t[6],
                        u = t[7],
                        c = t[8];
                    return e * a * c - e * s * u - n * i * c + n * s * o + r * i * u - r * a * o }, inverse: function(t) {
                    return this.copy(this.getInverse(t)) }, getInverse: function(t) {
                    var e = this.det();
                    if (0 === e) {
                        if (t) throw "matrix exception: get inverse matrix with 0 det";
                        return console.warn("matrix cannot inverse"), new r }
                    var n = this.elements,
                        i = (n[0], n[3], n[6], n[1], n[4], n[7], n[2], n[5], n[8], new r);
                    return i.set(n[4] * n[8] - n[7] * n[5], -(n[3] * n[8] - n[6] * n[5]), n[3] * n[7] - n[6] * n[4], -(n[1] * n[8] - n[7] * n[2]), n[0] * n[8] - n[6] * n[2], -(n[0] * n[7] - n[6] * n[1]), n[1] * n[5] - n[4] * n[2], -(n[0] * n[5] - n[3] * n[2]), n[0] * n[4] - n[3] * n[1]), i.multiplyScalar(1 / e), i }, transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this }, multiply: function(t) {
                    return this.copy(r.multiply(this, t)) }, translate: function(t, e) {
                    var n = new r;
                    return n.set(1, 0, t, 0, 1, e, 0, 0, 1), this.copy(r.multiply(n, this)) }, rotate: function(t) {
                    var e = new r;
                    return e.set(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1), this.copy(r.multiply(e, this)) }, scale: function(t, e) {
                    var n = new r;
                    return n.set(t, 0, 0, 0, e, 0, 0, 0, 1), this.copy(r.multiply(n, this)) }, equal: function(t) {
                    return r.equal(this, t) }, copy: function(t) {
                    for (var e = t.elements, n = this.elements, r = 0, i = e.length; r < i; r++) n[r] = e[r];
                    return this }, clone: function() {
                    for (var t = new r, e = t.elements, n = this.elements, i = 0, a = n.length; i < a; i++) e[i] = n[i];
                    return t }, to2DObject: function() {
                    var t = this.elements;
                    return { a: t[0], b: t[1], c: t[3], d: t[4], e: t[6], f: t[7] } }, from2DObject: function(t) {
                    var e = this.elements;
                    return e[0] = t.a, e[1] = t.b, e[3] = t.c, e[4] = t.d, e[6] = t.e, e[7] = t.f, this } }), t.exports = r },
        function(t, e, n) { "use strict";

            function r(t, e) {
                if (1 === arguments.length) {
                    var n = t;
                    t = n[0], e = n[1] }
                this.x = t || 0, this.y = e || 0 }
            var i = n(1),
                a = n(4);
            r.add = function(t, e) {
                return new r(t.x + e.x, t.y + e.y) }, r.sub = function(t, e) {
                return new r(t.x - e.x, t.y - e.y) }, r.lerp = function(t, e, n) {
                return new r(t.x + (e.x - t.x) * n, t.y + (e.y - t.y) * n) }, r.angle = function(t, e) {
                var n = t.dot(e) / (t.length() * e.length());
                return Math.acos(a.clamp(n, -1, 1)) }, r.direction = function(t, e) {
                return t.x * e.y - e.x * t.y }, i.augment(r, { type: "vector2", set: function(t, e) {
                    return this.x = t, this.y = e, this }, setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            return this.x = e, this;
                        case 1:
                            return this.y = e, this;
                        default:
                            throw new Error("the index out of range:" + t) } }, getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("the index out of range:" + t) } }, copy: function(t) {
                    return this.x = t.x, this.y = t.y, this }, add: function(t) {
                    return this.copy(r.add(this, t)) }, sub: function(t) {
                    return this.copy(r.sub(this, t)) }, subBy: function(t) {
                    return this.copy(r.sub(t, this)) }, multiplyScaler: function(t) {
                    return this.x *= t, this.y *= t, this }, divideScaler: function(t) {
                    if (0 !== t) {
                        var e = 1 / t;
                        this.x *= e, this.y *= e } else this.x = 0, this.y = 0;
                    return this }, min: function(t) {
                    return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this }, max: function(t) {
                    return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this }, clamp: function(t, e) {
                    return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this }, clampScale: function() {
                    var t, e;
                    return function(n, i) {
                        return void 0 === t && (t = new r, e = new r), t.set(n, n), e.set(i, i), this.clamp(t, e) } }(), floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }, negate: function() {
                    return this.x = -this.x, this.y = -this.y, this }, dot: function(t) {
                    return this.x * t.x + this.y * t.y }, lengthSq: function() {
                    return this.x * this.x + this.y * this.y }, length: function() {
                    return Math.sqrt(this.lengthSq()) }, normalize: function() {
                    return this.divideScaler(this.length()) }, distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        n = this.y - t.y;
                    return e * e + n * n }, distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t)) }, angleTo: function(t, e) {
                    var n = this.angle(t),
                        i = r.direction(this, t) >= 0;
                    return e ? i ? 2 * Math.PI - n : n : i ? n : 2 * Math.PI - n }, vertical: function(t) {
                    return t ? new r(this.y, (-this.x)) : new r((-this.y), this.x) }, angle: function(t) {
                    return r.angle(this, t) }, setLength: function(t) {
                    var e = this.length();
                    return 0 !== e && t !== e && this.multiplyScaler(t / e), this }, isZero: function() {
                    return 0 === this.x && 0 === this.y }, lerp: function(t, e) {
                    return this.copy(r.lerp(this, t, e)) }, equal: function(t) {
                    return a.equal(this.x, t.x) && a.equal(this.y, t.y) }, clone: function() {
                    return new r(this.x, this.y) } }), t.exports = r },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                if (1 === arguments.length)
                    if (i.isArray(t)) {
                        var r = t;
                        t = r[0], e = r[1], n = r[2] } else if ("vector2" === t.type) {
                    var a = t;
                    t = a.x, e = a.y, n = 1 }
                this.x = t || 0, this.y = e || 0, this.z = n || 0 }
            var i = n(1),
                a = n(4);
            r.add = function(t, e) {
                return new r(t.x + e.x, t.y + e.y, t.z + e.z) }, r.sub = function(t, e) {
                return new r(t.x - e.x, t.y - e.y, t.z - e.z) }, r.lerp = function(t, e, n) {
                return new r(t.x + (e.x - t.x) * n, t.y + (e.y - t.y) * n, t.z + (e.z - t.z) * n) }, r.cross = function(t, e) {
                var n = t.x,
                    i = t.y,
                    a = t.z,
                    s = e.x,
                    o = e.y,
                    u = e.z;
                return new r(i * u - a * o, a * s - n * u, n * o - i * s) }, r.angle = function(t, e) {
                var n = t.dot(e) / (t.length() * e.length());
                return Math.acos(a.clamp(n, -1, 1)) }, i.augment(r, { type: "vector3", set: function(t, e, n) {
                    return this.x = t, this.y = e, this.z = n, this }, setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            return this.x = e, this;
                        case 1:
                            return this.y = e, this;
                        case 2:
                            return this.z = e, this;
                        default:
                            throw new Error("index is out of range:" + t) } }, getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range:" + t) } }, add: function(t) {
                    return this.copy(r.add(this, t)) }, sub: function(t) {
                    return this.copy(r.sub(this, t)) }, subBy: function(t) {
                    return this.copy(r.sub(t, this)) }, multiplyScaler: function(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this }, divideScaler: function(t) {
                    if (0 !== t) {
                        var e = 1 / t;
                        this.x *= e, this.y *= e, this.z *= e } else this.x = 0, this.y = 0, this.z = 0;
                    return this }, min: function(t) {
                    return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this }, max: function(t) {
                    return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this }, clamp: function(t, e) {
                    return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this }, clampScale: function() {
                    var t, e;
                    return function(n, i) {
                        return void 0 === t && (t = new r, e = new r), t.set(n, n, n), e.set(i, i, i), this.clamp(t, e) } }(), floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }, ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }, round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }, roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }, negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }, dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z }, lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z }, length: function() {
                    return Math.sqrt(this.lengthSq()) }, lengthManhattan: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }, normalize: function() {
                    return this.divideScaler(this.length()) }, setLength: function(t) {
                    var e = this.length();
                    return 0 !== e && t !== e && this.multiplyScaler(t / e), this }, lerp: function(t, e) {
                    return this.copy(r.lerp(this, t, e)) }, cross: function(t) {
                    return this.copy(r.cross(this, t)) }, angle: function(t) {
                    return r.angle(this, t) }, distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        n = this.y - t.y,
                        r = this.z - t.z;
                    return e * e + n * n + r * r }, distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t)) }, applyMatrix: function(t) {
                    var e = t.elements,
                        n = e[0] * this.x + e[3] * this.y + e[6] * this.z,
                        r = e[1] * this.x + e[4] * this.y + e[7] * this.z,
                        i = e[2] * this.x + e[5] * this.y + e[8] * this.z;
                    return this.x = n, this.y = r, this.z = i, this }, copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = void 0 !== t.z ? t.z : 1, this }, equal: function(t) {
                    return a.equal(this.x, t.x) && a.equal(this.y, t.y) && a.equal(this.z, t.z) }, clone: function() {
                    return new r(this.x, this.y, this.z) } }), t.exports = r },
        function(t, e, n) {
            var r = n(166);
            if (window.G) { new r(window.G) } else t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(50),
                a = function(t) { this.canvas = t, this.el = t.get("el"), this.current = null, this.pre = null };
            r.augment(a, { tryTrigger: function(t, e) { t.__listeners && t.trigger(e) }, getCurrent: function(t) {
                    var e = this.canvas,
                        n = e.getPointByClient(t.clientX, t.clientY);
                    this.point = n, this.pre = this.current, this.current = e.getShape(n.x, n.y) }, mousemove: function(t) { this.getCurrent(t);
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mousemove")) {
                        var r = new i("canvas-mousemove", t, (!0), (!0));
                        r.x = e.x, r.y = e.y, r.clientX = t.clientX, r.clientY = t.clientY, r.currentTarget = n, this.tryTrigger(n, r) }
                    if (this.pre && this.pre !== this.current) {
                        var a = new i("mouseleave", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.pre, a.target = this.pre, this.tryTrigger(this.pre, a) }
                    if (this.current) {
                        var s = new i("mousemove", t, (!0), (!0));
                        if (s.x = e.x, s.y = e.y, s.clientX = t.clientX, s.clientY = t.clientY, s.currentTarget = this.current, s.target = this.current, this.tryTrigger(this.current, s), this.pre !== this.current) {
                            var o = new i("mouseenter", t, (!0), (!0));
                            o.x = e.x, o.y = e.y, o.clientX = t.clientX, o.clientY = t.clientY, o.currentTarget = this.current, o.target = this.current, this.tryTrigger(this.current, o) } } }, mousedown: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mousedown")) {
                        var r = new i("canvas-mousedown", t, (!0), (!0));
                        r.x = e.x, r.y = e.y, r.clientX = t.clientX, r.clientY = t.clientY, r.currentTarget = n, this.tryTrigger(n, r) }
                    if (this.current) {
                        var a = new i("mousedown", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a) } }, mouseup: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mouseup")) {
                        var r = new i("canvas-mouseup", t, (!0), (!0));
                        r.x = e.x, r.y = e.y, r.clientX = t.clientX, r.clientY = t.clientY, r.currentTarget = n, this.tryTrigger(n, r) }
                    if (this.current) {
                        var a = new i("mouseup", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a) } }, click: function(t) { this.getCurrent(t);
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-click")) {
                        var r = new i("canvas-click", t, (!0), (!0));
                        r.x = e.x, r.y = e.y, r.clientX = t.clientX, r.clientY = t.clientY, r.currentTarget = n, this.tryTrigger(n, r) }
                    if (this.current) {
                        var a = new i("click", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a) } }, dblclick: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-dblclick")) {
                        var r = new i("canvas-dblclick", t, (!0), (!0));
                        r.x = e.x, r.y = e.y, r.clientX = t.clientX, r.clientY = t.clientY, r.currentTarget = n, this.tryTrigger(n, r) }
                    if (this.current) {
                        var a = new i("dblclick", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a) } }, mouseout: function(t) {
                    var e = this.point,
                        n = this.canvas,
                        r = new i("canvas-mouseleave", t, (!0), (!0));
                    r.x = e.x, r.y = e.y, r.currentTarget = n, this.tryTrigger(n, r) }, mouseover: function(t) {
                    var e = (this.point, this.canvas),
                        n = new i("canvas-mouseenter", t, (!0), (!0));
                    n.currentTarget = e, this.tryTrigger(e, n) } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t) { this.name = "mouseEvent", this.type = "event", r.superclass.constructor.call(this, t) }
            var i = n(1),
                a = n(165),
                s = n(167);
            i.extend(r, s), i.augment(r, { __events: function() {
                    var t = this,
                        e = t.get("el"),
                        n = new a(this);
                    e.addEventListener("mouseout", function(t) { n.mouseout(t) }, !1), e.addEventListener("mouseover", function(t) { n.mouseover(t) }, !1), e.addEventListener("mousemove", function(t) { n.mousemove(t) }, !1), e.addEventListener("mousedown", function(t) { n.mousedown(t) }, !1), e.addEventListener("mouseup", function(t) { n.mouseup(t) }, !1), e.addEventListener("click", function(t) { n.click(t) }, !1), e.addEventListener("dblclick", function(t) { n.dblclick(t) }, !1) } }), t.exports = r },
        function(t, e, n) {
            var r = n(168);
            t.exports = r },
        function(t, e, n) { "use strict";

            function r(t) { this.register(t) }
            var i = n(1);
            i.augment(r, { register: function(t) {
                    var e = this;
                    if (t.plugins || (t.plugins = {}), !t.plugins[e.name]) switch (t.plugins[e.name] = e, e.type) {
                        case "event":
                            e.__registerEvent(t) } }, __registerEvent: function(t) {
                    var e = this;
                    if (e.__events) {
                        var n = t.Canvas.prototype.__events;
                        i.augment(t.Canvas, { __events: function() { n && n.call(this), e.__events.call(this) } }) } } }), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(29),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { type: "condition", condition: null }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(29),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { type: "group", group: null }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(42),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { type: "identity", value: null, getText: function() {
                    return this.value.toString() }, scale: function() {
                    return 1 }, invert: function() {
                    return this.value } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t, e) {
                return 1 === t ? 1 : Math.log(e) / Math.log(t) }
            var i = n(1),
                a = n(41),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, a), i.augment(s, { type: "log", base: 2, tickCount: 10, calculateTicks: function() {
                    var t, e = this,
                        n = e.base,
                        i = r(n, e.max);
                    t = e.min > 0 ? Math.floor(r(n, e.min)) : i - 1;
                    for (var a = i - t, s = e.tickCount, o = Math.ceil(a / s), u = [], c = t; c < i + o; c += o) u.push(Math.pow(n, c));
                    return u }, getScalePercent: function(t) {
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    var i = this.base,
                        a = (r(i, t) - r(i, n)) / (r(i, e) - r(i, n));
                    return a }, scale: function(t) {
                    var e = this.getScalePercent(t),
                        n = this.rangeMin(),
                        r = this.rangeMax();
                    return n + e * (r - n) }, invert: function(t) {
                    var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
                        n = this.base,
                        i = r(n, this.max),
                        a = r(n, this.min),
                        s = e * (i - a) + a;
                    return Math.pow(n, s) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(29),
                i = n(1),
                a = function(t) { a.superclass.constructor.call(this, t) };
            i.extend(a, r), i.augment(a, { type: "numberCat", init: function() {
                    var t = this.values;
                    t.sort(function(t, e) {
                        return t - e }), i.each(t, function(e, n) { t[n] = e.toString() }), this.ticks = t } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t, e) {
                var n = Math.E,
                    r = Math.pow(n, Math.log(e) / t);
                return r }
            var i = n(1),
                a = n(41),
                s = function(t) { s.superclass.constructor.call(this, t) };
            i.extend(s, a), i.augment(s, { type: "pow", exponent: 2, tickCount: 12, calculateTicks: function() {
                    var t, e = this,
                        n = e.exponent,
                        i = Math.ceil(r(n, e.max));
                    if (t = e.min >= 0 ? Math.round(r(n, e.min)) : 0, t > i) {
                        var a = i;
                        i = t, t = a }
                    for (var s = i - t, o = e.tickCount, u = Math.ceil(s / o), c = [], l = t; l < i + u; l += u) c.push(Math.pow(l, n));
                    return c }, getScalePercent: function(t) {
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    var i = this.exponent,
                        a = (r(i, t) - r(i, n)) / (r(i, e) - r(i, n));
                    return a }, scale: function(t) {
                    var e = this.getScalePercent(t),
                        n = this.rangeMin(),
                        r = this.rangeMax();
                    return n + e * (r - n) }, invert: function(t) {
                    var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
                        n = this.exponent,
                        i = r(n, this.max),
                        a = r(n, this.min),
                        s = e * (i - a) + a;
                    return Math.pow(s, n) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(29),
                i = n(1),
                a = n(39),
                s = n(35),
                o = function(t) { o.superclass.constructor.call(this, t) };
            i.extend(o, r), i.augment(o, { type: "timeCat", mask: "yyyy-mm-dd HH:MM:ss", tickCount: 5, init: function() {
                    var t = this,
                        e = this.values;
                    e.sort(function(e, n) {
                        return e = t._toTimeStamp(e), n = t._toTimeStamp(n), e - n }), i.each(e, function(n, r) { e[r] = t._toTimeStamp(n) }), this.ticks = this.calculateTicks(!0) }, calculateTicks: function(t) {
                    var e = this,
                        n = e.tickCount,
                        r = s.Category.caculate({ maxCount: n, data: e.values }),
                        o = r.ticks;
                    return t && i.each(o, function(t, n) { o[n] = a.format(t, e.mask) }), o }, translate: function(t) { t = this._toTimeStamp(t);
                    var e = this.values.indexOf(t);
                    return e === -1 && (e = i.isNumber(t) && t < this.values.length ? t : NaN), e }, scale: function(t) {
                    var e, n = this.rangeMin(),
                        r = this.rangeMax(),
                        i = this.translate(t);
                    return e = this.values.length > 1 && i > -1 ? i / (this.values.length - 1) : 0, n + e * (r - n) }, getText: function(t) {
                    var e = "",
                        n = this.translate(t);
                    n > -1 && (e = this.values[n]);
                    var r = this.formatter;
                    return e = parseInt(e, 10), e = r ? r(e) : a.format(e, this.mask) }, getTicks: function() {
                    var t = this,
                        e = this.calculateTicks(!1),
                        n = [];
                    return i.each(e, function(e) {
                        var r;
                        r = i.isObject(e) ? e : { text: t.getText(e), value: t.scale(e) }, n.push(r) }), n }, _toTimeStamp: function(t) {
                    return i.isString(t) && (t = t.replace(/-/gi, "/").replace("T", " ").replace("Z", ""), t = new Date(t).getTime()), i.isDate(t) && (t = t.getTime()), t } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(41),
                i = n(1),
                a = n(35),
                s = n(39),
                o = function(t) { o.superclass.constructor.call(this, t) };
            i.extend(o, r), i.augment(o, { type: "time", mask: "yyyy-mm-dd", calculateTicks: function() {
                    var t = this,
                        e = t.min,
                        n = t.max,
                        r = t.tickCount,
                        i = t.tickInterval,
                        s = a.Time.caculate({ min: e, max: n, minCount: r, maxCount: r, interval: i });
                    return s.ticks }, getText: function(t) {
                    var e = this.formatter;
                    return t = this.translate(t), t = e ? e(t) : s.format(t, this.mask) }, scale: function(t) {
                    return i.isString(t) && (t = this.translate(t)), o.superclass.scale.call(this, t) }, translate: function(t) {
                    return i.isString(t) && (t = t.replace(/-/gi, "/").replace("T", " ").replace("Z", ""), t = new Date(t).getTime()), i.isDate(t) && (t = t.getTime()), t } }), t.exports = o },
        function(t, e, n) {
            var r = n(178);
            t.exports = r },
        function(t, e, n) {
            function r(t, e, n, r) {
                var i, o, c, l, h = [],
                    f = !!r;
                if (f) { c = new u(1 / 0, 1 / 0), l = new u((-(1 / 0)), (-(1 / 0)));
                    for (var g = 0, p = t.length; g < p; g++) {
                        var v = a(t[g]);
                        c.min(v), l.max(v) }
                    c.min(a(r[0])), l.max(a(r[1])) }
                for (var g = 0, d = t.length; g < d; g++) {
                    var v = a(t[g]);
                    if (n) i = a(t[g ? g - 1 : d - 1]), o = a(t[(g + 1) % d]);
                    else {
                        if (0 === g || g === d - 1) { h.push([v.x, v.y]);
                            continue }
                        i = a(t[g - 1]), o = a(t[g + 1]) }
                    var x = u.sub(o, i);
                    s(x, e);
                    var m = v.distanceTo(i),
                        y = v.distanceTo(o),
                        _ = m + y;
                    0 !== _ && (m /= _, y /= _);
                    var S = s(x.clone(), -m),
                        w = s(x.clone(), y),
                        b = u.add(v, S),
                        M = u.add(v, w);
                    f && (b.max(c), b.min(l), M.max(c), M.min(l)), h.push([b.x, b.y]), h.push([M.x, M.y]) }
                return n && h.push(h.shift()), h }

            function i(t, e, n) {
                for (var i = !!e, a = [], s = 0, o = t.length; s < o; s += 2) a.push([t[s], t[s + 1]]);
                for (var u, c, l, h = r(a, .4, i, n), f = a.length, g = [], s = 0; s < f - 1; s++) u = h[2 * s], c = h[2 * s + 1], l = a[s + 1], g.push(["C", u[0], u[1], c[0], c[1], l[0], l[1]]);
                return i && (u = h[f], c = h[f + 1], l = a[0], g.push(["C", u[0], u[1], c[0], c[1], l[0], l[1]])), g }

            function a(t) {
                return new u(t[0], t[1]) }

            function s(t, e) {
                return t.x *= e, t.y *= e, t }
            var o = n(3),
                u = o.Vector2;
            t.exports = { catmullRom2bezier: i } },
        function(t, e, n) { "use strict";
            var r = n(30),
                i = { dot: n(180), rect: n(181) };
            r.tree = i, t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(74),
                i = function(t) {
                    return new r({ dims: t }) };
            t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(74),
                a = "..x",
                s = "..y",
                o = function(t) {
                    return new i({ dims: t, getStatObject: function(t, e) {
                            var n = r.mix({}, t);
                            return n[a] = [e.start.x, e.start.x, e.end.x, e.end.x], n[s] = [e.start.y, e.end.y, e.end.y, e.start.y], n } }) };
            t.exports = o },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                return e = e || 1, new i({ dims: t, ratio: e, mode: n }) }
            var i = n(183),
                a = function(t, e) {
                    return r(t, e, "squarify") };
            a.squarify = function(t, e) {
                return r(t, e, "squarify") }, a.sliceDice = function(t, e) {
                return r(t, e, "slice-dice") }, t.exports = a },
        function(t, e, n) { "use strict";

            function r(t) {
                return 1 - t }
            var i = n(1),
                a = n(30),
                s = n(221),
                o = n(2),
                u = "..x",
                c = "..y",
                l = "_value",
                h = function(t) { h.superclass.constructor.call(this, t) };
            i.extend(h, a), i.augment(h, { type: "treemap", mode: "squarify", ratio: 1, getValueField: function() {
                    var t = this.getDims();
                    return t[3] || l }, getChildrenField: function() {
                    var t = this.getDims();
                    return t[2] }, initDims: function(t) { t.unshift(c), t.unshift(u) }, _copyObject: function(t) {
                    var e = i.mix({}, t);
                    return e }, _extractData: function(t, e) {
                    for (var n = this, a = t.length - 1; a >= 0; a--) {
                        var s = t[a],
                            o = n._copyObject(s);
                        o[u] = [], o[c] = [], o[u].push(s.x), o[c].push(r(s.y + s.dy)), o[u].push(s.x), o[c].push(r(s.y)), o[u].push(s.x + s.dx), o[c].push(r(s.y)), o[u].push(s.x + s.dx), o[c].push(r(s.y + s.dy)), e.push(o);
                        var l = n.getChildrenField();
                        i.isArray(s[l]) && n._extractData(s[l], e) } }, exec: function(t) {
                    var e = this,
                        n = [],
                        r = o.merge.apply(null, t);
                    return n.push(e.execFrame(r)), n }, execFrame: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        r = (e.getDims(), new s.Squarify({ nodes: n, mode: e.mode, childrenField: e.getChildrenField(), valueField: e.getValueField(), ratio: e.ratio })),
                        i = r.getNodes(),
                        n = [];
                    e._extractData(i, n);
                    var t = new o(n);
                    return t } }), t.exports = h },
        function(t, e, n) { "use strict";
            var r = n(43),
                i = function(t, e) {
                    return new r({ dims: t, binWidth: e }) };
            t.exports = i },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                var r = [];
                return s.each(t, function(t) { r.push(t * e * n / 2) }), r }

            function i(t, e) {
                var n = [];
                return s.each(t, function(t) { n.push(t * e / 2) }), n }
            var a = n(43),
                s = n(1),
                o = function(t, e, n) {
                    return new a({ ratio: n || .5, dims: t, binWidth: e || .03, _getDimVaues: function(t, e, n) {
                            var r = this,
                                i = r.getDimRange(e),
                                a = i.max - i.min,
                                o = [];
                            return s.each(n, function(e) { o.push(t + a * e) }), o }, toBin: function(t) {
                            var e = this,
                                n = e.getBinDims();
                            if (n < 2) throw "the bin.rect method only support 2 dimenssion!";
                            var a = n[0],
                                s = n[1],
                                o = e.binWidth,
                                u = e.ratio,
                                c = e._center([t[a], t[s]]),
                                l = r([-.5, -1.5, -.5, .5, 1.5, .5], o, u),
                                h = i([-1, 0, 1, 1, 0, -1], o);
                            t[a] = e._getDimVaues(c[0], a, l), t[s] = e._getDimVaues(c[1], s, h) }, _center: function(t) {
                            var e, n, r, i = this,
                                a = i.binWidth,
                                s = i.getBinDims(),
                                o = s[0],
                                u = i.getDimRange(o),
                                c = a * (u.max - u.min) / 2,
                                l = s[1],
                                h = i.getDimRange(l),
                                f = a * (h.max - h.min) / 2,
                                g = i.ratio;
                            return n = [t[0] / (c * g), t[1] / f], r = i._centerForBasis(n), e = [r[0] * c, r[1] * f] }, _chkOdd: function(t) {
                            var e = parseInt(t);
                            return e ? !!(e % 2) : "0" }, _aroundX: function(t) {
                            var e, n, r, i = this;
                            return t = t < 1 ? 1 : t, i._chkOdd(t) ? n = r = parseInt(t) + .5 : t % 2 === 0 ? n = r = parseInt(t) - .5 : (n = parseInt(t) - .5, r = n + 2), e = [n, r] }, _aroundY: function(t) {
                            var e, n, r;
                            return t = t < 1 ? 1 : t, n = parseInt(t), r = n + 1, e = [n, r] }, _shortPoint: function(t, e, n) {
                            var r, i, a = this,
                                s = (t[1] - .5) % 4;
                            1 === s ? a._chkOdd(e[1]) ? (r = [t[0], e[0]], i = [t[1], e[1]]) : (r = [t[1], e[0]], i = [t[0], e[1]]) : a._chkOdd(e[0]) ? (r = [t[0], e[0]], i = [t[1], e[1]]) : (r = [t[1], e[0]], i = [t[0], e[1]]);
                            var o = Math.abs(n[0] - r[0]) + Math.abs(n[1] - r[1]),
                                u = Math.abs(n[0] - i[0]) + Math.abs(n[1] - i[1]);
                            return o === u ? r[0] < i[0] ? r : i : o < u ? r : i }, _centerForBasis: function(t) {
                            var e, n, r, i, a = this,
                                s = a._aroundX(t[0]),
                                o = a.ratio;
                            return s[0] === s[1] ? (r = s[0], r > 2 && a._chkOdd(r / 2) ? (t[1] = t[1] < 1 ? 1 : t[1], i = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) + 1 : parseInt(t[1])) : (t[1] = t[1] < 1 ? 1 : t[1], i = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) : parseInt(t[1]) - 1), e = [r, i]) : (t[1] = t[1] < 1 ? 1 : t[1], n = a._aroundY(t[1]), e = a._shortPoint(s, n, t)), e[0] = e[0] * o, e } }) };
            t.exports = o },
        function(t, e, n) {
            var r = { dot: n(184), rect: n(189), hex: n(185), quantile: n(187) };
            t.exports = r },
        function(t, e, n) {
            var r = n(75);
            r.letter = n(188), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(75),
                i = function(t, e) {
                    return new r({ dims: t, binWidth: e, fractions: 4 }) };
            t.exports = i },
        function(t, e, n) {
            "use strict";
            var r = n(43),
                i = function(t, e) {
                    return new r({
                        dims: t,
                        binWidth: e,
                        toBin: function(t) {
                            var e = this,
                                n = e.getBinDims();
                            if (n.length < 1) throw "the bin.rect method support for minimum one dimension!";
                            if (1 === n.length) {
                                var r = n[0];
                                t[r] = e._getValueRange(r, t[r]) } else {
                                var i = n[0],
                                    a = n[1],
                                    s = e._getValueRange(i, t[i]),
                                    o = e._getValueRange(a, t[a]);
                                t[i] = [s[0], s[0], s[1], s[1]], t[a] = [o[0], o[1], o[1], o[0]] } },
                        _getValueRange: function(t, e) {
                            var n = this,
                                r = n.binWidth,
                                i = n.getDimRange(t),
                                a = i.max - i.min,
                                s = n.getCenterValue(e, i.max, i.min);
                            return [s - a * r * 1 / 2, s + a * r * 1 / 2]
                        }
                    })
                };
            t.exports = i
        },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                return e = e || .01, new i({ dims: t, bandWidth: e, kernelType: n }) }
            var i = n(191),
                a = n(192),
                s = {};
            s.kernel = {}, s.kernel.uniform = function(t, e) {
                return r(t, e, "uniform") }, s.kernel.triangular = function(t, e) {
                return r(t, e, "triangular") }, s.kernel.epanechnikov = function(t, e) {
                return r(t, e, "epanechnikov") }, s.kernel.quartic = function(t, e) {
                return r(t, e, "quartic") }, s.kernel.triweight = function(t, e) {
                return r(t, e, "triweight") }, s.kernel.tricube = function(t, e) {
                return r(t, e, "tricube") }, s.kernel.gaussian = function(t, e) {
                return r(t, e, "gaussian") }, s.kernel.cosine = function(t, e) {
                return r(t, e, "cosine") }, s.normal = function(t, e) {
                return e = e || .01, new a({ dims: t, bandWidth: e }) }, t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(73),
                s = n(76),
                o = "..density",
                u = function(t) { u.superclass.constructor.call(this, t) };
            r.extend(u, s), r.augment(u, { kernelType: "", execFrame: function(t) {
                    var e = this,
                        n = e.kernelType;
                    if (!n) return t;
                    var r = a[n],
                        s = e.getDims(),
                        o = [];
                    return 2 === s.length ? o = e._getOneDimDensity(t, r, s) : 3 === s.length && (o = e._getTwoDimDensity(t, r, s)), new i(o) }, _getOneDimDensity: function(t, e, n) {
                    for (var i = n[n.length - 2], a = t.colArray(i), s = this.getWindowWidth(t, i), u = this.getCoordinate(t, i, s), c = u.length, l = a.length, h = t.rowObject(0), f = [], g = 0; g < c; g++) {
                        for (var p = 0, v = u[g], d = 0; d < l; d++) p += e((v - a[d]) / s);
                        var x = 1 / (l * s) * p,
                            m = r.mix({}, h);
                        m[i] = v, m[o] = x, f[g] = m }
                    return f }, _getTwoDimDensity: function(t, e, n) {
                    for (var i = n[n.length - 3], a = n[n.length - 2], s = this.getWindowWidth(t, i), u = this.getWindowWidth(t, a), c = this.getCoordinate(t, i, s), l = c.length, h = this.getCoordinate(t, a, u), f = h.length, g = t.rowCount(), p = t.rowObject(0), v = [], d = 0; d < l; d++)
                        for (var x = 0; x < f; x++) {
                            for (var m = 0, y = c[d], _ = h[x], S = 0; S < g; S++) m += e((y - t.data[S][i]) / s) * e((_ - t.data[S][a]) / u);
                            var w = 1 / (g * s * u) * m,
                                b = r.mix({}, p);
                            b[i] = y, b[a] = _, b[o] = w, v.push(b) }
                    return v } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(76),
                s = "..density",
                o = function(t) { o.superclass.constructor.call(this, t) };
            r.extend(o, a), r.augment(o, { execFrame: function(t) {
                    for (var e = this, n = t.rowObject(0), a = e.getDims(), o = a[a.length - 2], u = this.getWindowWidth(t, o), c = this.getCoordinate(t, o, u), l = c.length, h = i.mean(t, o), f = i.standard_deviation(t, o), g = [], p = 0; p < l; p++) {
                        var v = c[p],
                            d = e.getNormal(v, h, f),
                            x = r.mix({}, n);
                        x[o] = v, x[s] = d, g.push(x) }
                    return new i(g) }, getNormal: function(t, e, n) {
                    var r = 1 / (Math.sqrt(2 * Math.PI) * n) * Math.exp(-(t - e) * (t - e) / (2 * n * n));
                    return r } }), t.exports = o },
        function(t, e, n) {
            var r = { spread: { range: n(194), sd: n(195), se: n(196) }, confi: {} };
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(52),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.range(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(52),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0),
                                r = i.mean(t, e),
                                a = i.sd(t, e);
                            return n[e] = [r - a, r + a], new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(52),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0),
                                r = i.mean(t, e),
                                a = i.se(t, e);
                            return n[e] = [r - a, r + a], new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = function(t) {
                    return new i(r.mix({}, s, { dims: t, regressionType: "cubic", getRegression: function(t) {
                            return a("polynomial", t, 3) } })) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = n(2),
                u = function(t) {
                    return new i(r.mix({}, s, { dims: t, regressionType: "exp", preExecute: function(t) {
                            var e = this.getYDim();
                            r.each(t, function(t) {
                                var n = o.min(t, e);
                                if (n < 0) throw "the field " + e + " has value less than 0,you can't use this regression!" }) }, getRegression: function(t) {
                            return a("exponential", t) } })) };
            t.exports = u },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    n += i * Math.pow(e, r) }
                return n }
            var i = n(1),
                a = ["linear", "cubic", "quadratic"],
                s = { execFnction: function(t, e, n) {
                        var r;
                        return r = i.indexOf(a, t) >= 0 ? s.poly(e, n) : s[t] ? s[t](e[0], e[1], n) : n }, linear: function(t, e, n) {
                        var i = [e, t];
                        return r(i, n) }, poly: function(t, e) {
                        return r(t, e) }, log: function(t, e, n) {
                        return t + e * Math.log(n) }, pow: function(t, e, n) {
                        return t * Math.pow(n, e) }, exp: function(t, e, n) {
                        return t * Math.pow(Math.E, e * n) } };
            t.exports = s },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                return e = e || .01, new a({ dims: t, bandWidth: e, kernelType: n }) }
            var i = n(53);
            i.mean = n(204), i.median = n(205), i.linear = n(201), i.quadratic = n(207), i.cubic = n(197), i.log = n(203), i.pow = n(206), i.exp = n(198);
            var a = n(202);
            i.loess = {}, i.loess.uniform = function(t, e) {
                return r(t, e, "uniform") }, i.loess.triangular = function(t, e) {
                return r(t, e, "triangular") }, i.loess.epanechnikov = function(t, e) {
                return r(t, e, "epanechnikov") }, i.loess.quartic = function(t, e) {
                return r(t, e, "quartic") }, i.loess.triweight = function(t, e) {
                return r(t, e, "triweight") }, i.loess.tricube = function(t, e) {
                return r(t, e, "tricube") }, i.loess.gaussian = function(t, e) {
                return r(t, e, "gaussian") }, i.loess.cosine = function(t, e) {
                return r(t, e, "cosine") }, t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = function(t) {
                    return new i(r.mix({}, s, { dims: t, regressionType: "linear", getRegression: function(t) {
                            return a("polynomial", t, 1) } })) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(53),
                i = n(1),
                a = n(73),
                s = n(2),
                o = n(142),
                u = function(t) { u.superclass.constructor.call(this, t) };
            i.extend(u, r), i.augment(u, { kernelType: "", k: 10, execFrame: function(t) {
                    var e = this,
                        n = e.getDims(),
                        r = [];
                    if (2 === n.length) {
                        var a = e.getXDim(),
                            o = e.getYDim(),
                            u = e.getData(t),
                            c = e.getInterArray(t, a),
                            l = e.execSmooth(u, c),
                            h = t.rowObject(0);
                        i.each(l, function(t) {
                            var e = i.mix({}, h);
                            e[a] = t[0], e[o] = t[1], r.push(e) }) } else {
                        var a = e.getXDim(),
                            o = e.getYDim(),
                            f = e.getZDim(),
                            u = e.getData(t),
                            c = [];
                        c[0] = e.getInterArray(t, a), c[1] = e.getInterArray(t, o);
                        var l = e.execSmoothThreeDim(u, c),
                            h = t.rowObject(0);
                        i.each(l, function(t) {
                            var e = i.mix({}, h);
                            e[a] = t[0], e[o] = t[1], e[f] = t[2], r.push(e) }) }
                    return new s(r) }, execSmooth: function(t, e) {
                    for (var n = this, r = e.length, i = t.length, s = n.kernelType, o = a[s], u = [], c = [], l = e[1] - e[0], h = 0; h < r; h++) {
                        for (var f, g, p, v, d = 0, x = 0, m = 0, y = 0, _ = 0, S = e[h], w = n.getWindowWidth([S], t, [l])[0], b = 0; b < i; b++) g = t[b][0], p = t[b][1], f = o((S - g) / w), 0 !== f && (d += f, x += f * g, m += f * g * g, y += f * p, _ += f * g * p);
                        d * m - x * x !== 0 && (c[1] = (x * y - d * _) / (x * x - d * m), c[0] = y / d - x / d * c[1], v = c[0] + c[1] * S, u.push([S, v])) }
                    return u }, execSmoothThreeDim: function(t, e) {
                    for (var n = this, r = e[0].length, i = e[1].length, s = t.length, u = n.kernelType, c = a[u], l = [], h = [], f = e[0][1] - e[0][0], g = e[1][1] - e[1][0], p = 0; p < r; p++)
                        for (var v = 0; v < i; v++) {
                            for (var d, x, m, y, _, S = 0, w = 0, b = 0, M = 0, A = 0, C = 0, k = 0, P = 0, T = 0, I = e[0][p], D = e[1][v], L = n.getWindowWidth([I, D], t, [f, g]), R = L[0], B = L[1], F = 0; F < s; F++) x = t[F][0], m = t[F][1], y = t[F][2], d = c((I - x) / R) * c((D - m) / B), 0 !== d && (S += d, w += d * x, b += d * m, M += d * x * m, A += d * x * x, C += d * m * m, k += d * y, P += d * x * y, T += d * m * y);
                            var O = [
                                    [S, w, b],
                                    [w, A, M],
                                    [b, M, C]
                                ],
                                G = [k, P, T];
                            h = o(O, G), h && (_ = h[0] + h[1] * I + h[2] * D, l.push([I, D, _])) }
                    return l }, getWindowWidth: function(t, e, n) {
                    var r = this,
                        i = r.k,
                        a = e.length,
                        s = [],
                        o = e[0].length - 1,
                        u = 0;
                    a <= i && (i = a), e.sort(function(e, r) {
                        for (var i = 0, a = 0, s = 0; s < o; s++) i += (e[s] - t[s]) * (e[s] - t[s]) / (n[s] * n[s]), a += (r[s] - t[s]) * (r[s] - t[s]) / (n[s] * n[s]);
                        return i - a });
                    for (var c = 0; c < o; c++) {
                        for (; e[i - 1][c] === e[0][c];) i++;
                        var l = 1.1 * Math.abs(e[i - 1][c] - t[c]) / n[c];
                        u += l * l }
                    u = Math.sqrt(u);
                    for (var c = 0; c < o; c++) s[c] = u * n[c];
                    return s } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = function(t) {
                    return new i(r.mix({}, s, { dims: t, regressionType: "log", getRegression: function(t) {
                            return a("logarithmic", t) } })) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(14),
                s = function(t) {
                    return new a({ dims: t, getRegressionString: function() {
                            return "y = " + this.curMean }, execSmooth: function(t, e, n) {
                            var a = this,
                                s = a.getYDim(),
                                o = i.mean(n, s);
                            a.curMean = o;
                            var u = [];
                            return r.each(e, function(t) { u.push([t, o]) }), u } }) };
            t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(14),
                s = function(t) {
                    return new a({ dims: t, getRegressionString: function() {
                            return "y = " + this.curMedian }, execSmooth: function(t, e, n) {
                            var a = this,
                                s = a.getYDim(),
                                o = i.median(n, s);
                            a.curMedian = o;
                            var u = [];
                            return r.each(e, function(t) { u.push([t, o]) }), u } }) };
            t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = n(2),
                u = function(t) {
                    return new i(r.mix({}, s, { dims: t, regressionType: "pow", preExecute: function(t) {
                            var e = this.getYDim();
                            r.each(t, function(t) {
                                var n = o.min(t, e);
                                if (n < 0) throw "the field " + e + " has value less than 0,you can't use this regression!" }) }, getRegression: function(t) {
                            return a("power", t) } })) };
            t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(14),
                a = n(25),
                s = n(20),
                o = function(t) {
                    return new i(r.mix({}, s, { regressionType: "quadratic", dims: t, getRegression: function(t) {
                            return a("polynomial", t, 2) } })) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, initDims: function(t) { t.push("..count") }, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = t.rowCount(), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = n(1),
                s = function(t) {
                    return new r({ dims: t, getStatDims: function() {
                            var t = this.stat;
                            if (t) return t.getStatDims();
                            var e = this.getDims(),
                                n = e.length,
                                r = [e[n - 1]];
                            return r }, execFrame: function(t) {
                            var e = this.getStatDims(),
                                n = e[e.length - 1],
                                r = this.getDims()[0];
                            r && r !== n && (t = i.sort(t, r));
                            var s = this.stat,
                                o = [];
                            if (s && "density" === s.type) {
                                var u = s.getWindowWidth(t, r),
                                    c = t.colArray(n),
                                    l = 0;
                                a.each(c, function(t) { l += t * u, o.push(l) }) } else o = i.cumulative(t, n);
                            return t.colReplace(n, o), t } }) };
            t.exports = s },
        function(t, e, n) {
            var r = { count: n(208), max: n(211), min: n(214), mean: n(212), median: n(213), proportion: n(217), range: n(218), percent: n(216), sd: n(219), mode: n(215), sum: n(220), cumulative: n(209) };
            t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.max(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.mean(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.median(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.min(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.mode(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(10),
                a = n(2),
                s = n(77),
                o = "..percent",
                u = function(t) {
                    return new i(r.mix({ dims: t, initDims: function(t) {
                            var e = t[t.length - 1];
                            t.splice(t.length - 1, 0, o), this.percetDim = e }, getStatDims: function() {
                            return [o] }, transform: function(t, e, n) { e = this.percetDim;
                            var r = a.sum(t, e),
                                i = a.sum(n, e),
                                s = t.rowObject(0);
                            return s["..percent"] = r / i, s[e] = r, new a([s]) } }, s)) };
            t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(10),
                a = n(2),
                s = n(77),
                o = function(t) {
                    return new i(r.mix({ dims: t, initDims: function(t) { t.push("..proportion") }, transform: function(t, e, n) {
                            var r = t.rowCount() / n.rowCount(),
                                i = t.rowObject(0);
                            return i[e] = r, new a([i]) } }, s)) };
            t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.max(t, e) - i.min(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.standard_deviation(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(10),
                i = n(2),
                a = function(t) {
                    return new r({ dims: t, transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = i.sum(t, e), new i([n]) } }) };
            t.exports = a },
        function(t, e, n) {
            var r = n(78);
            r.Squarify = n(222), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(78),
                a = function(t) { a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { mode: "squarify", ratio: .5 * (1 + Math.sqrt(5)), processNodes: function(t, e, n) {
                    var i = this;
                    if (r.isArray(t) && t.length) {
                        var a, s, o, u = [],
                            c = t[0],
                            l = i.mode,
                            h = i.valueField,
                            f = i.childrenField,
                            g = t.slice(),
                            p = 1 / 0,
                            v = "slice" === l ? e.dx : "dice" === l ? e.dy : "slice-dice" === l ? c.depth % 2 ? e.dy : e.dx : Math.min(e.dx, e.dy);
                        for (i.scale(g, e.dx * e.dy / n), u.area = 0;
                            (o = g.length) > 0;) u.push(a = g[o - 1]), u.area += a.area, "squarify" !== l || (s = i.worst(u, v)) <= p ? (g.pop(), p = s) : (u.area -= u.pop().area, i.position(u, v, e, !1), v = Math.min(e.dx, e.dy), u.length = u.area = 0, p = 1 / 0);
                        u.length && (i.position(u, v, e, !0), u.length = u.area = 0), t.forEach(function(t) { i.processNodes(t[f], i.pad(t), t[h]) }) } }, worst: function(t, e) {
                    for (var n, r = this, i = t.area, a = 0, s = 1 / 0, o = -1, u = t.length; ++o < u;)(n = t[o].area) && (n < s && (s = n), n > a && (a = n));
                    return i *= i, e *= e, i ? Math.max(e * a * r.ratio / i, i / (e * s * r.ratio)) : 1 / 0 } }), t.exports = a },
        function(t, e, n) {
            var r = n(224);
            t.exports = r },
        function(t, e) { "use strict";

            function n(t, e, r) { r = r || 0;
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var o = e[i];
                        null !== o && s.isObject(o) ? (s.isObject(t[i]) || (t[i] = {}), r < a ? n(t[i], e[i]) : t[i] = e[i]) : s.isArray(o) ? (t[i] = [], t[i] = t[i].concat(o)) : void 0 !== o && (t[i] = e[i]) } }
            var r = Object.prototype,
                i = r.toString,
                a = 5,
                s = { substitute: function(t, e) {
                        return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) {
                            return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "" : e[n] }) : t }, ucfirst: function(t) {
                        return t += "", t.charAt(0).toUpperCase() + t.substring(1) }, isString: function(t) {
                        return "string" == typeof t }, isNumber: function(t) {
                        return "number" == typeof t }, isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t) }, isBoolean: function(t) {
                        return "boolean" == typeof t }, isFunction: function(t) {
                        return "function" == typeof t }, isArray: "isArray" in Array ? Array.isArray : function(t) {
                        return "[object Array]" === i.call(t) }, isDate: function(t) {
                        return "[object Date]" === i.call(t) }, isNull: function(t) {
                        return void 0 === t || null === t }, notNull: function(t) {
                        return !s.isNull(t) }, isBlank: function(t) {
                        if (s.isArray(t)) return 0 === t.length;
                        if (s.isObject(t)) {
                            var e = 0;
                            return s.each(t, function(t, n) { e++ }), 0 === e }
                        return !1 }, isObject: "[object Object]" === i.call(null) ? function(t) {
                        return null !== t && void 0 !== t && "[object Object]" === i.call(t) && void 0 === t.ownerDocument } : function(t) {
                        return "[object Object]" === i.call(t) }, extend: function(t, e, n, r) { s.isFunction(e) || (n = e, e = t, t = function() {});
                        var i = Object.create ? function(t, e) {
                                return Object.create(t, { constructor: { value: e } }) } : function(t, e) {
                                function n() {}
                                n.prototype = t;
                                var r = new n;
                                return r.constructor = e, r },
                            a = i(e.prototype, t);
                        return t.prototype = s.mix(a, t.prototype), t.superclass = i(e.prototype, e), s.mix(a, n), s.mix(t, r), t }, augment: function(t) {
                        for (var e = s.toArray(arguments), n = 1; n < e.length; n++) {
                            var r = e[n];
                            s.isFunction(r) && (r = r.prototype), s.mix(t.prototype, r) } }, toArray: function(t) {
                        return t && t.length ? Array.prototype.slice.call(t) : [] }, mix: function() {
                        var t = s.toArray(arguments),
                            e = t[0];
                        if (e === !0) { e = t[1];
                            for (var r = 2; r < t.length; r++) {
                                var i = t[r];
                                n(e, i) } } else
                            for (var r = 1; r < t.length; r++) {
                                var i = t[r];
                                for (var a in i) i.hasOwnProperty(a) && "constructor" !== a && (e[a] = i[a]) }
                        return e }, each: function(t, e) {
                        if (t)
                            if (s.isObject(t)) {
                                for (var n in t)
                                    if (t.hasOwnProperty(n)) {
                                        var r = e(t[n], n);
                                        if (r === !1) break } } else if (t.length)
                            for (var i = 0; i < t.length; i++) {
                                var r = e(t[i], i);
                                if (r === !1) break } }, requestAnimationFrame: function(t) {
                        var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                            return setTimeout(t, 16) };
                        return e(t) }, cancelAnimationFrame: function(t) {
                        var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
                            return clearTimeout(t) };
                        return e(t) } };
            t.exports = s },
        function(t, e, n) { "use strict";

            function r(t, e) {
                var n = e.toString(),
                    r = n.indexOf(".");
                if (r === -1) return Math.round(t);
                var i = n.substr(r + 1).length;
                return parseFloat(t.toFixed(i)) }
            var i = Object.prototype,
                a = (i.toString, n(223));
            a.mix(a, { mixin: function(t, e) {
                    if (t && e) { t._mixins = e, t.ATTRS = t.ATTRS || {};
                        var n = {};
                        a.each(e, function(e) { a.augment(t, e);
                            var r = e.ATTRS;
                            r && a.mix(n, r) }), t.ATTRS = a.mix(n, t.ATTRS) } }, map: function(t, e) {
                    var n = [];
                    return a.each(t, function(t, r) { n.push(e(t, r)) }), n }, filter: function(t, e) {
                    var n = [];
                    return a.each(t, function(t, r) { e(t, r) && n.push(t) }), n }, guid: function() {
                    var t = {};
                    return function(e) {
                        return e = e || "g", t[e] ? t[e] += 1 : t[e] = 1, e + t[e] } }(), inArray: function(t, e) {
                    return a.indexOf(t, e) !== -1 }, indexOf: function(t, e) {
                    var n = Array.prototype.indexOf;
                    if (n) return n.call(t, e);
                    for (var r = -1, i = 0; i < t.length; i++)
                        if (t[i] === e) { r = i;
                            break }
                    return r }, remove: function(t, e) {
                    var n = a.indexOf(t, e);
                    n !== -1 && t.splice(n, 1) }, empty: function(t) {
                    if (!(t instanceof Array))
                        for (var e = t.length - 1; e >= 0; e--) delete t[e];
                    t.length = 0 }, equalsArray: function(t, e) {
                    if (t === e) return !0;
                    if (!t || !e) return !1;
                    if (t.length !== e.length) return !1;
                    for (var n = !0, r = 0; r < t.length; r++)
                        if (t[r] !== e[r]) { n = !1;
                            break }
                    return n }, wrapBehavior: function(t, e) {
                    return t["_wrap_" + e] = function(n) { t[e](n) } }, getWrapBehavior: function(t, e) {
                    return t["_wrap_" + e] }, fixedBase: function(t, e) {
                    return r(t, e) }, length: function(t) {
                    if (a.isArray(t)) return t.length;
                    if (a.isObject(t)) {
                        var e = 0;
                        return a.each(t, function() { e++ }), e }
                    return 0 }, clone: function(t) {
                    if ("object" != typeof t || null === t) return t;
                    if (a.isArray(t))
                        for (var e = [], n = 0, r = t.length; n < r; n++) "object" == typeof t[n] && null != t[n] ? e[n] = a.clone(t[n]) : e[n] = t[n];
                    else {
                        var e = {};
                        for (var n in t) "object" == typeof t[n] && null != t[n] ? e[n] = a.clone(t[n]) : e[n] = t[n] }
                    return e } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(228),
                a = n(229),
                s = n(81),
                o = (n(13), n(227)),
                u = n(3),
                c = u.Vector3,
                l = function(t) {};
            r.augment(l, { canFill: !1, canStroke: !1, initAttrs: function(t) {
                    return this.__attrs = {}, this.attr(r.mix({}, this.getDefaultAttrs(), t)), this }, getDefaultAttrs: function() {
                    var t = this,
                        e = t.constructor,
                        n = e.__attrs;
                    return r.mix(!0, {}, n) }, attr: function(t, e) {
                    var n = this;
                    if (0 === arguments.length) return n.__attrs;
                    if (r.isObject(t)) return r.each(t, function(t, e) { n._setAttr(e, t) }), n.__afterSetAttrAll && n.__afterSetAttrAll(t), n;
                    if (2 === arguments.length) {
                        if (n._setAttr(t, e) !== !1) {
                            var i = "__afterSetAttr" + r.ucfirst(t);
                            n[i] && n[i](e) }
                        return n }
                    return n._getAttr(t) }, resetAttrs: function() {
                    var t = this,
                        e = t,
                        n = t.get("context"),
                        o = e.__attrs;
                    e.isGroup ? r.each(o, function(t, a) { i[a] && ("fillStyle" === a && (t = s.parseStyle(t, e, o.fillOpacity)), "strokeStyle" === a && (t = s.parseStyle(t, e, o.strokeOpacity)), "lineDash" === a && n.setLineDash ? r.isArray(t) ? n.setLineDash(t) : r.isString(t) && n.setLineDash(t.split(" ")) : n[a] = t) }) : r.each(o, function(t, i) { a[i] && ("fillStyle" === i && (t = s.parseStyle(t, e, o.fillOpacity)), "strokeStyle" === i && (t = s.parseStyle(t, e, o.strokeOpacity)), "lineDash" === i && n.setLineDash ? r.isArray(t) ? n.setLineDash(t) : r.isString(t) && n.setLineDash(t.split(" ")) : n[i] = t) }) }, _getAttr: function(t) {
                    var e = this,
                        n = e.__attrs[t],
                        i = "__getAttr" + r.ucfirst(t);
                    return e[i] && (n = e[i](n)), n }, _setAttr: function(t, e) {
                    var n = this,
                        i = "__setAttr" + r.ucfirst(t);
                    return n[i] && (e = n[i](e, n.__attrs[t])), e !== n.__attrs[t] && (n.__attrs[t] = e, n) }, __setAttrFill: function(t) {
                    var e = this;
                    if (e.canFill) return e.__attrs.fillStyle = t, t }, hasFill: function() {
                    if (this.canFill)
                        for (var t = this; t;) {
                            if (t.__attrs.fill) return t.__attrs.fill;
                            t = t.get("parent") } }, __setAttrStroke: function(t) {
                    var e = this;
                    if (e.canStroke) return this.__attrs.strokeStyle = t, t }, hasStroke: function() {
                    if (this.canStroke)
                        for (var t = this; t;) {
                            if (t.__attrs.stroke) return t.__attrs.stroke;
                            t = t.get("parent") } }, __setAttrOpacity: function(t) {
                    return this.__attrs.globalAlpha = t, t }, __getAttrOpacity: function() {
                    return this.__attrs.globalAlpha }, __setAttrLineWidth: function(t, e) {
                    return t >= 0 ? t : e || 1 }, __setAttrClip: function(t) {
                    var e = this;
                    if (t && t.type in o) return null === t.get("canvas") && (t = r.clone(t)), t.set("parent", e.get("parent")), t.set("context", e.get("context")), t.inside = function(n, r) {
                        var i = new c(n, r, 1);
                        return t.invert(i, e.get("canvas")), t.__isPointInFill(i.x, i.y) }, t } }), t.exports = l },
        function(t, e) { "use strict";
            t.exports = { circle: 1, ellipse: 1, fan: 1, polygon: 1, rect: 1, path: 1 } },
        function(t, e) { "use strict";
            t.exports = { fillStyle: 1, strokeStyle: 1, globalAlpha: 1, shadowBlur: 1, shadowColor: 1, shadowOffsetX: 1, shadowOffsetY: 1, lineDash: 1 } },
        function(t, e) { "use strict";
            t.exports = { fillStyle: 1, font: 1, globalAlpha: 1, lineCap: 1, lineWidth: 1, lineJoin: 1, miterLimit: 1, shadowBlur: 1, shadowColor: 1, shadowOffsetX: 1, shadowOffsetY: 1, strokeStyle: 1, textAlign: 1, textBaseline: 1, lineDash: 1 } },
        function(t, e, n) {
            var r = n(5),
                i = n(80),
                a = function(t) { a.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { init: function() { a.superclass.init.call(this);
                    var t = this,
                        e = t.get("canvasId"),
                        n = document.getElementById(e);
                    t.set("el", n), t.set("context", n.getContext("2d")), t.set("canvas", t), t.__events() }, __events: function() {}, getPointByClient: function(t, e) {
                    var n = this,
                        r = n.get("el"),
                        i = r.getBoundingClientRect(),
                        a = i.right - i.left,
                        s = i.bottom - i.top;
                    return { x: (t - i.left) * (r.width / a), y: (e - i.top) * (r.height / s) } }, getClientByPoint: function(t, e) {
                    var n = this,
                        r = n.get("el"),
                        i = r.getBoundingClientRect(),
                        a = i.right - i.left,
                        s = i.bottom - i.top;
                    return { clientX: t / (r.width / a) + i.left, clientY: e / (r.height / s) + i.top } }, beforeDraw: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.get("el");
                    e.clearRect(0, 0, n.width, n.height) }, draw: function() {
                    function t() { e.set("animateHandler", r.requestAnimationFrame(function() { e.set("animateHandler", void 0), e.get("toDraw") && t() })), a.superclass.draw.call(e), e.set("toDraw", !1) }
                    var e = this;
                    e.get("animateHandler") ? e.set("toDraw", !0) : t() } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = function() {};
            r.augment(i, { initEventDispatcher: function() { this.__listeners = {} }, on: function(t, e) {
                    var n = this.__listeners;
                    return r.isNull(n[t]) && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e), this }, off: function(t, e) {
                    var n = this.__listeners;
                    return 0 === arguments.length ? (this.__listeners = {}, this) : 1 === arguments.length && r.isString(t) ? (n[t] = [], this) : 2 === arguments.length && r.isString(t) && r.isFunction(e) ? (r.remove(n[t], e), this) : void 0 }, has: function(t, e) {
                    var n = this.__listeners;
                    return 0 === arguments.length && !r.isBlank(n) || (!(1 !== arguments.length || !n[t] || r.isBlank(n[t])) || !(2 !== arguments.length || !n[t] || n[t].indexOf(e) === -1)) }, trigger: function(t) {
                    var e = this,
                        n = e.__listeners,
                        i = n[t.type];
                    if (t.target = e, r.notNull(i) && r.each(i, function(n) { n.call(e, t) }), t.bubbles) {
                        var a = e.get("parent");
                        a && !t.propagationStopped && a.trigger(t) }
                    return e } }), t.exports = i },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(3),
                a = i.Matrix3,
                s = (i.Vector3, n(4)),
                o = function() {};
            r.augment(o, { initTransform: function() { this.__m = new a }, translate: function(t, e) {
                    return this.__m.translate(t, e), this }, rotate: function(t) {
                    return this.__m.rotate(s.degreeToRad(t)), this }, scale: function(t, e) {
                    return this.__m.scale(t, e), this }, transform: function(t) {
                    var e = this;
                    return r.each(t, function(t) {
                        switch (t[0]) {
                            case "t":
                                e.translate(t[1], t[2]);
                                break;
                            case "s":
                                e.scale(t[1], t[2]);
                                break;
                            case "r":
                                e.rotate(t[1]);
                                break;
                            case "m":
                                e.__m = a.multiply(t[1], e.__m) } }), this }, setTransform: function(t) {
                    return this.__m.identity(), this.transform(t) }, getMatrix: function() {
                    return this.__m }, setMatrix: function(t) {
                    return this.__m = t, this }, apply: function(t, e) {
                    var n = this;
                    e = e || n;
                    for (var i = n, s = []; i !== e;) s.unshift(i), i = i.get("parent");
                    s.unshift(i);
                    var o = new a;
                    return r.each(s, function(t) { o.multiply(t.__m) }), t.applyMatrix(o), this }, invert: function(t, e) {
                    var n = this;
                    e = e || n;
                    for (var i = n, s = []; i !== e;) s.unshift(i), i = i.get("parent");
                    s.unshift(i);
                    var o = new a;
                    r.each(s, function(t) { o.multiply(t.__m) });
                    var u = o.getInverse();
                    return t.applyMatrix(u), this }, resetTransform: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__m.to2DObject();
                    e.transform(n.a, n.b, n.c, n.d, n.e, n.f) } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(54),
                o = n(4),
                u = n(32),
                c = n(3),
                l = c.Vector2,
                h = n(13),
                f = function(t) { f.superclass.constructor.call(this, t) };
            f.ATTRS = { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1, arrow: !1 }, r.extend(f, i), r.augment(f, { canStroke: !0, type: "arc", __setAttrR: function(t, e) {
                    return t >= 0 ? t : (h.warn("r \u5fc5\u987b\u5927\u4e8e0"), e) }, __setAttrClockwise: function(t, e) {
                    return r.isBoolean(t) ? t : (h.warn("clockwise \u5fc5\u987b\u662fboolean\u503c"), e) }, __setAttrStartAngle: function(t) {
                    return o.degreeToRad(t) }, __getAttrStartAngle: function(t) {
                    return o.radToDegree(t) }, __setAttrEndAngle: function(t) {
                    return o.degreeToRad(t) }, __getAttrEndAngle: function(t) {
                    return o.radToDegree(t) }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrR: function() { this.__calculateBox() }, __afterSetAttrStartAngle: function() { this.__calculateBox() }, __afterSetAttrEndAngle: function() { this.__calculateBox() }, __afterSetAttrClockwise: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.r,
                        a = e.startAngle,
                        o = e.endAngle,
                        u = e.clockwise,
                        c = e.lineWidth,
                        l = s.box(n, r, i, a, o, u),
                        h = c / 2;
                    l.minX -= h, l.minY -= h, l.maxX += h, l.maxY += h, this.set("box", l) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        o = r.r,
                        u = r.startAngle,
                        c = r.endAngle,
                        l = r.clockwise,
                        h = r.lineWidth;
                    return !!n.hasStroke() && a.arcline(i, s, o, u, c, l, h, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x,
                        i = n.y,
                        a = n.r,
                        s = n.startAngle,
                        o = n.endAngle,
                        c = n.clockwise,
                        h = n.lineWidth,
                        f = n.arrow;
                    if (e.beginPath(), e.arc(r, i, a, s, o, c), f) {
                        var g = { x: r + a * Math.cos(o), y: i + a * Math.sin(o) },
                            p = new l(-a * Math.sin(o), a * Math.cos(o));
                        c && p.multiplyScaler(-1), u.makeArrow(e, p, g, h) } } }), t.exports = f },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(13),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { x: 0, y: 0, r: 0, lineWidth: 1 }, r.extend(o, i), r.augment(o, { canFill: !0, canStroke: !0, type: "circle", __setAttrR: function(t, e) {
                    return t >= 0 ? t : (s.warn("r \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrR: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.r,
                        a = e.lineWidth,
                        s = a / 2 + i;
                    this.set("box", { minX: n - s, minY: r - s, maxX: n + s, maxY: r + s }) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        o = r.r;
                    return a.circle(i, s, o, t, e) }, __isPointInStroke: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        o = r.r,
                        u = r.lineWidth;
                    return a.arcline(i, s, o, 0, 2 * Math.PI, !1, u, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x,
                        i = n.y,
                        a = n.r;
                    e.beginPath(), e.arc(r, i, a, 0, 2 * Math.PI, !1), e.closePath() } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = (n(4), n(32)),
                o = n(55),
                u = n(3),
                c = u.Vector2,
                l = function(t) { l.superclass.constructor.call(this, t) };
            l.ATTRS = { p1: null, p2: null, p3: null, p4: null, lineWidth: 1, arrow: !1 }, r.extend(l, i), r.augment(l, { canStroke: !0, type: "cubic", __afterSetAttrP1: function() { this.__calculateBox() }, __afterSetAttrP2: function() { this.__calculateBox() }, __afterSetAttrP3: function() { this.__calculateBox() }, __afterSetAttrP4: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.p1,
                        i = e.p2,
                        a = e.p3,
                        s = e.p4;
                    if (!(r.isNull(n) || r.isNull(i) || r.isNull(a) || r.isNull(s))) {
                        for (var u = e.lineWidth / 2, c = o.extrema(n[0], i[0], a[0], s[0]), l = 0, h = c.length; l < h; l++) c[l] = o.at(n[0], i[0], a[0], s[0], c[l]);
                        for (var f = o.extrema(n[1], i[1], a[1], s[1]), l = 0, h = f.length; l < h; l++) f[l] = o.at(n[1], i[1], a[1], s[1], f[l]);
                        c.push(n[0], s[0]), f.push(n[1], s[1]), t.set("box", { minX: Math.min.apply(Math, c) - u, maxX: Math.max.apply(Math, c) + u, minY: Math.min.apply(Math, f) - u, maxY: Math.max.apply(Math, f) + u }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.p1,
                        s = r.p2,
                        o = r.p3,
                        u = r.p4,
                        c = r.lineWidth;
                    return a.cubicline(i[0], i[1], s[0], s[1], o[0], o[1], u[0], u[1], c, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.p1,
                        a = n.p2,
                        o = n.p3,
                        u = n.p4,
                        l = n.lineWidth,
                        h = n.arrow;
                    if (!(r.isNull(i) || r.isNull(a) || r.isNull(o) || r.isNull(u)) && (e.beginPath(), e.moveTo(i[0], i[1]), e.bezierCurveTo(a[0], a[1], o[0], o[1], u[0], u[1]), h)) {
                        var f = new c(u[0] - o[0], u[1] - o[1]);
                        s.makeArrow(e, f, { x: u[0], y: u[1] }, l) } }, getPoint: function(t) {
                    var e = this.__attrs;
                    return { x: o.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t), y: o.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t) } } }), t.exports = l },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(3),
                o = s.Matrix3,
                u = s.Vector3,
                c = n(13),
                l = function(t) { l.superclass.constructor.call(this, t) };
            l.ATTRS = { x: 0, y: 0, rx: 1, ry: 1, lineWidth: 1 }, r.extend(l, i), r.augment(l, { canFill: !0, canStroke: !0, type: "ellipse", __setAttrRx: function(t, e) {
                    return t > 0 ? t : (c.warn("rx \u5927\u4e8e\u7b49\u4e8e0"), e) }, __setAttrRy: function(t, e) {
                    return t > 0 ? t : (c.warn("ry \u5927\u4e8e\u7b49\u4e8e0"), e) }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrRx: function() { this.__calculateBox() }, __afterSetAttrRy: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.rx,
                        a = e.ry,
                        s = e.lineWidth,
                        o = i + s / 2,
                        u = a + s / 2;
                    this.set("box", { minX: n - o, minY: r - u, maxX: n + o, maxY: r + u }) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        c = r.rx,
                        l = r.ry,
                        h = c > l ? c : l,
                        f = c > l ? 1 : c / l,
                        g = c > l ? l / c : 1,
                        p = new u(t, e, 1),
                        v = new o;
                    v.scale(f, g), v.translate(i, s);
                    var d = v.getInverse();
                    return p.applyMatrix(d), a.circle(0, 0, h, p.x, p.y) }, __isPointInStroke: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        c = r.rx,
                        l = r.ry,
                        h = r.lineWidth,
                        f = c > l ? c : l,
                        g = c > l ? 1 : c / l,
                        p = c > l ? l / c : 1,
                        v = new u(t, e, 1),
                        d = new o;
                    d.scale(g, p), d.translate(i, s);
                    var x = d.getInverse();
                    return v.applyMatrix(x), a.arcline(0, 0, f, 0, 2 * Math.PI, !1, h, v.x, v.y) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x,
                        i = n.y,
                        a = n.rx,
                        s = n.ry,
                        u = a > s ? a : s,
                        c = a > s ? 1 : a / s,
                        l = a > s ? s / a : 1,
                        h = new o;
                    h.scale(c, l), h.translate(r, i);
                    var f = h.to2DObject();
                    e.beginPath(), e.save(), e.transform(f.a, f.b, f.c, f.d, f.e, f.f), e.arc(0, 0, u, 0, 2 * Math.PI), e.restore(), e.closePath() } }), t.exports = l },
        function(t, e, n) {
            "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(4),
                o = n(54),
                u = n(3),
                c = u.Vector2,
                l = n(13),
                h = function(t) { h.superclass.constructor.call(this, t) };
            h.ATTRS = { x: 0, y: 0, rs: 0, re: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1 }, r.extend(h, i), r.augment(h, {
                canFill: !0,
                canStroke: !0,
                type: "fan",
                __setAttrRs: function(t, e) {
                    return t >= 0 ? t : (l.warn("rs \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) },
                __setAttrRe: function(t, e) {
                    return t >= 0 ? t : (l.warn("re \u5fc5\u987b\u5927\u4e8e\u7b49\u4f600"), e) },
                __setAttrClockwise: function(t, e) {
                    return r.isBoolean(t) ? t : (l.warn("clockwise \u5fc5\u987b\u4e3aboolean\u503c"), e) },
                __setAttrStartAngle: function(t) {
                    return s.degreeToRad(t) },
                __getAttrStartAngle: function(t) {
                    return s.radToDegree(t) },
                __setAttrEndAngle: function(t) {
                    return s.degreeToRad(t) },
                __getAttrEndAngle: function(t) {
                    return s.radToDegree(t) },
                __afterSetAttrX: function() { this.__calculateBox() },
                __afterSetAttrY: function() { this.__calculateBox() },
                __afterSetAttrRs: function() { this.__calculateBox() },
                __afterSetAttrRe: function() { this.__calculateBox() },
                __afterSetAttrStartAngle: function() { this.__calculateBox() },
                __afterSetAttrEndAngle: function() { this.__calculateBox() },
                __afterSetAttrClockwise: function() { this.__calculateBox() },
                __afterSetAttrLineWidth: function() { this.__calculateBox() },
                __afterSetAttrAll: function() { this.__calculateBox() },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.rs,
                        a = e.re,
                        s = e.startAngle,
                        u = e.endAngle,
                        c = e.clockwise,
                        l = e.lineWidth,
                        h = o.box(n, r, i, s, u, c),
                        f = o.box(n, r, a, s, u, c),
                        g = Math.min(h.minX, f.minX),
                        p = Math.min(h.minY, f.minY),
                        v = Math.max(h.maxX, f.maxX),
                        d = Math.max(h.maxY, f.maxY),
                        x = l / 2;
                    this.set("box", { minX: g - x, minY: p - x, maxX: v + x, maxY: d + x }) },
                isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) },
                __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        a = r.y,
                        u = r.rs,
                        l = r.re,
                        h = r.startAngle,
                        f = r.endAngle,
                        g = r.clockwise,
                        p = new c(1, 0),
                        v = new c(t - i, e - a),
                        d = p.angleTo(v),
                        x = o.nearAngle(d, h, f, g);
                    if (s.equal(d, x)) {
                        var m = v.lengthSq();
                        if (u * u <= m && m <= l * l) return !0 }
                    return !1 },
                __isPointInStroke: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        o = r.rs,
                        u = r.re,
                        c = r.startAngle,
                        l = r.endAngle,
                        h = r.clockwise,
                        f = r.lineWidth,
                        g = {
                            x: Math.cos(c) * o + i,
                            y: Math.sin(c) * o + s
                        },
                        p = { x: Math.cos(c) * u + i, y: Math.sin(c) * u + s },
                        v = { x: Math.cos(l) * o + i, y: Math.sin(l) * o + s },
                        d = { x: Math.cos(l) * u + i, y: Math.sin(l) * u + s };
                    return !!a.line(g.x, g.y, p.x, p.y, f, t, e) || (!!a.line(v.x, v.y, d.x, d.y, f, t, e) || (!!a.arcline(i, s, o, c, l, h, f, t, e) || !!a.arcline(i, s, u, c, l, h, f, t, e)))
                },
                createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x,
                        i = n.y,
                        a = n.rs,
                        s = n.re,
                        o = n.startAngle,
                        u = n.endAngle,
                        c = n.clockwise,
                        l = { x: Math.cos(o) * a + r, y: Math.sin(o) * a + i },
                        h = { x: Math.cos(o) * s + r, y: Math.sin(o) * s + i },
                        f = { x: Math.cos(u) * a + r, y: Math.sin(u) * a + i };
                    ({ x: Math.cos(u) * s + r, y: Math.sin(u) * s + i });
                    e.beginPath(), e.moveTo(l.x, l.y), e.lineTo(h.x, h.y), e.arc(r, i, s, o, u, c), e.lineTo(f.x, f.y), e.arc(r, i, a, u, o, !c), e.closePath() }
            }), t.exports = h
        },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(13),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { x: 0, y: 0, img: void 0, width: 0, height: 0, sx: null, sy: null, swidth: null, sheight: null }, r.extend(o, i), r.augment(o, { type: "image", getDefaultAttrs: function() {
                    return o.ATTRS }, __setAttrWidth: function(t, e) {
                    return t >= 0 ? t : (s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __setAttrHeight: function(t, e) {
                    return t >= 0 ? t : (s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrWidth: function() { this.__calculateBox() }, __afterSetAttrHeight: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.width,
                        a = e.height;
                    this.set("box", { minX: n, minY: r, maxX: n + i, maxY: r + a }) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs;
                    if (n.get("toDraw") || !r.img) return !1;
                    var i = r.x,
                        s = r.y,
                        o = r.width,
                        u = r.height;
                    return a.rect(i, s, o, u, t, e) }, __setLoading: function(t) {
                    var e = this,
                        n = e.get("canvas");
                    return t === !1 && e.get("toDraw") === !0 && (e.__cfg.loading = !1, n.draw()), t }, __setAttrImg: function(t) {
                    var e = this,
                        n = e.__attrs;
                    e.get("context");
                    if (!r.isString(t)) return t instanceof Image ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : t instanceof HTMLElement && r.isString(t.nodeName) && "CANVAS" === t.nodeName.toUpperCase() ? (n.width || e.attr("width", Number(t.getAttribute("width"))), n.height || e.attr("height", Number(t.getAttribute("height"))), t) : t instanceof ImageData ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : void 0;
                    var i = new Image;
                    i.onload = function() {
                        return !e.get("destroyed") && (e.attr("imgSrc", t), e.attr("img", i), void e.set("loading", !1)) }, i.src = t, e.set("loading", !0) }, drawInner: function() {
                    var t = this;
                    return t.get("loading") ? void t.set("toDraw", !0) : void t.__drawImage() }, __drawImage: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.x,
                        a = n.y,
                        s = n.img,
                        o = n.width,
                        u = n.height,
                        c = n.sx,
                        l = n.sy,
                        h = n.swidth,
                        f = n.sheight;
                    return t.set("toDraw", !1), s instanceof Image || s instanceof HTMLElement && r.isString(s.nodeName) && "CANVAS" === s.nodeName.toUpperCase() ? r.isNull(c) || r.isNull(l) || r.isNull(h) || r.isNull(f) ? void e.drawImage(s, i, a, o, u) : r.notNull(c) && r.notNull(l) && r.notNull(h) && r.notNull(f) ? void e.drawImage(s, c, l, h, f, i, a, o, u) : void 0 : s instanceof ImageData ? void e.putImageData(s, i, a, c || 0, l || 0, h || o, f || u) : void 0 } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(3),
                o = s.Vector2,
                u = n(32),
                c = n(82),
                l = function(t) { l.superclass.constructor.call(this, t) };
            l.ATTRS = { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1, arrow: !1 }, r.extend(l, i), r.augment(l, { canStroke: !0, type: "line", __afterSetAttrX1: function() { this.__calculateBox() }, __afterSetAttrY1: function() { this.__calculateBox() }, __afterSetAttrX2: function() { this.__calculateBox() }, __afterSetAttrY2: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x1,
                        r = e.y1,
                        i = e.x2,
                        a = e.y2,
                        s = e.lineWidth;
                    this.set("box", c.box(n, r, i, a, s)) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x1,
                        s = r.y1,
                        o = r.x2,
                        u = r.y2,
                        c = r.lineWidth;
                    return !!n.hasStroke() && a.line(i, s, o, u, c, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x1,
                        i = n.y1,
                        a = n.x2,
                        s = n.y2,
                        c = n.arrow,
                        l = n.lineWidth;
                    if (e.beginPath(), e.moveTo(r, i), c) {
                        var h = new o(a - r, s - i),
                            f = u.getEndPoint(h, new o(a, s), l);
                        e.lineTo(f.x, f.y), u.makeArrow(e, h, f, l) } else e.lineTo(a, s) }, getPoint: function(t) {
                    var e = this.__attrs;
                    return { x: c.at(e.x1, e.x2, t), y: c.at(e.y1, e.y2, t) } } }), t.exports = l },
        function(t, e, n) { "use strict";

            function r(t, e, n, r, i) {
                return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r }

            function i(t, e, n, r, i) {
                return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r }

            function a(t, e, n) {
                return Math.atan(-n / e * Math.tan(t)) }

            function s(t, e, n) {
                return Math.atan(n / (e * Math.tan(t))) }
            var o = n(3);
            o.Vector2, n(4);
            t.exports = { xAt: r, yAt: i, xExtrema: a, yExtrema: s } },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(247),
                s = n(81),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { path: null, lineWidth: 1 }, r.extend(o, i), r.augment(o, { canFill: !0, canStroke: !0, type: "path", __afterSetAttrPath: function(t) {
                    var e = this;
                    if (r.isNull(t)) return e.set("segments", null), void e.set("box", void 0);
                    var n, i = s.parsePath(t),
                        o = [];!r.isArray(i) || 0 === i.length || "M" !== i[0][0] && "m" !== i[0][0] || (r.each(i, function(t) { n = new a(t, n), o.push(n) }), e.set("segments", o), e.__calculateBox()) }, __afterSetAttrLineWidth: function(t) {
                    var e = this;
                    e.get("segments");
                    e.__calculateBox() }, __afterSetAttrAll: function(t) {
                    var e = this;
                    t.path ? e.__afterSetAttrPath(t.path) : e.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.lineWidth,
                        i = t.get("segments");
                    if (i) {
                        var a = 1 / 0,
                            s = -(1 / 0),
                            o = 1 / 0,
                            u = -(1 / 0);
                        r.each(i, function(t, e) { t.getBBox(n);
                            var r = t.box;
                            r && (r.minX < a && (a = r.minX), r.maxX > s && (s = r.maxX), r.minY < o && (o = r.minY), r.maxY > u && (u = r.maxY)) }), this.set("box", { minX: a, minY: o, maxX: s, maxY: u }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.get("context");
                    if (r) return n.createPath(), r.isPointInPath(t, e) }, __isPointInStroke: function(t, e) {
                    for (var n = this, r = n.get("segments"), i = n.__attrs, a = i.lineWidth, s = 0, o = r.length; s < o; s++)
                        if (r[s].isInside(t, e, a)) return !0;
                    return !1 }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.get("segments");
                    e.beginPath();
                    for (var r = 0, i = n.length; r < i; r++) n[r].draw(e) } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = function(t) { s.superclass.constructor.call(this, t) };
            s.ATTRS = { points: null, lineWidth: 1 }, r.extend(s, i), r.augment(s, { canFill: !0, canStroke: !0, type: "polygon", __afterSetAttrPoints: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.points,
                        i = e.lineWidth;
                    if (n && 0 !== n.length) {
                        var a = 1 / 0,
                            s = 1 / 0,
                            o = -(1 / 0),
                            u = -(1 / 0);
                        r.each(n, function(t) {
                            var e = t[0],
                                n = t[1];
                            e < a && (a = e), e > o && (o = e), n < s && (s = n), n > u && (u = n) });
                        var c = i / 2;
                        t.set("box", { minX: a - c, minY: s - c, maxX: o + c, maxY: u + c }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.get("context");
                    return n.createPath(), r.isPointInPath(t, e) }, __isPointInStroke: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.points;
                    if (i.length < 2) return !1;
                    var s = r.lineWidth,
                        o = i.slice(0);
                    return i.length >= 3 && o.push(i[0]), a.polyline(o, s, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.points;
                    i.length < 2 || (e.beginPath(), r.each(i, function(t, n) { 0 === n ? e.moveTo(t[0], t[1]) : e.lineTo(t[0], t[1]) }), e.closePath()) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(3),
                o = s.Vector2,
                u = n(32),
                c = function(t) { c.superclass.constructor.call(this, t) };
            c.ATTRS = { points: null, lineWidth: 1, arrow: !1 }, r.extend(c, i), r.augment(c, { canStroke: !0, type: "polyline", __afterSetAttrPoints: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.lineWidth,
                        i = e.points;
                    if (i && 0 !== i.length) {
                        var a = 1 / 0,
                            s = 1 / 0,
                            o = -(1 / 0),
                            u = -(1 / 0);
                        r.each(i, function(t) {
                            var e = t[0],
                                n = t[1];
                            e < a && (a = e), e > o && (o = e), n < s && (s = n), n > u && (u = n) });
                        var c = n / 2;
                        this.set("box", { minX: a - c, minY: s - c, maxX: o + c, maxY: u + c }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs;
                    if (n.hasStroke()) {
                        var i = r.points;
                        if (i.length < 2) return !1;
                        var s = r.lineWidth;
                        return a.polyline(i, s, t, e) }
                    return !1 }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.points,
                        i = n.arrow,
                        a = n.lineWidth;
                    if (!(r.length < 2)) { e.beginPath(), e.moveTo(r[0][0], r[0][1]);
                        for (var s = 1, c = r.length - 1; s < c; s++) e.lineTo(r[s][0], r[s][1]);
                        if (i) {
                            var l = new o(r[c][0] - r[c - 1][0], r[c][1] - r[c - 1][1]),
                                h = u.getEndPoint(l, new o(r[c][0], r[c][1]), a);
                            e.lineTo(h.x, h.y), u.makeArrow(e, l, h, a) } else e.lineTo(r[c][0], r[c][1]) } } }), t.exports = c },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = (n(4), n(32)),
                o = n(56),
                u = n(3),
                c = u.Vector2,
                l = function(t) { l.superclass.constructor.call(this, t) };
            l.ATTRS = { p1: null, p2: null, p3: null, lineWidth: 1, arrow: !1 }, r.extend(l, i), r.augment(l, { canStroke: !0, type: "quadratic", __afterSetAttrP1: function() { this.__calculateBox() }, __afterSetAttrP2: function() { this.__calculateBox() }, __afterSetAttrP3: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.p1,
                        i = e.p2,
                        a = e.p3;
                    if (!(r.isNull(n) || r.isNull(i) || r.isNull(a))) {
                        for (var s = e.lineWidth / 2, u = o.extrema(n[0], i[0], a[0]), c = 0, l = u.length; c < l; c++) u[c] = o.at(n[0], i[0], a[0], u[c]);
                        u.push(n[0], a[0]);
                        for (var h = o.extrema(n[1], i[1], a[1]), c = 0, l = h.length; c < l; c++) h[c] = o.at(n[1], i[1], a[1], h[c]);
                        h.push(n[1], a[1]), t.set("box", { minX: Math.min.apply(Math, u) - s, maxX: Math.max.apply(Math, u) + s, minY: Math.min.apply(Math, h) - s, maxY: Math.max.apply(Math, h) + s }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.p1,
                        s = r.p2,
                        o = r.p3,
                        u = r.lineWidth;
                    return a.quadraticline(i[0], i[1], s[0], s[1], o[0], o[1], u, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.p1,
                        a = n.p2,
                        o = n.p3,
                        u = n.lineWidth,
                        l = n.arrow;
                    if (!(r.isNull(i) || r.isNull(a) || r.isNull(o)) && (e.beginPath(), e.moveTo(i[0], i[1]), e.quadraticCurveTo(a[0], a[1], o[0], o[1]), l)) {
                        var h = new c(o[0] - a[0], o[1] - a[1]);
                        s.makeArrow(e, h, { x: o[0], y: o[1] }, u) } }, getPoint: function(t) {
                    var e = this.__attrs;
                    return { x: o.at(e.p1[0], e.p2[0], e.p3[0], t), y: o.at(e.p1[1], e.p2[1], e.p3[1], t) } } }), t.exports = l },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(13),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 1 }, r.extend(o, i), r.augment(o, { canFill: !0, canStroke: !0, type: "rect", __setAttrWidth: function(t, e) {
                    return t >= 0 ? t : (s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __setAttrHeight: function(t, e) {
                    return t >= 0 ? t : (s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __setAttrRadius: function(t, e) {
                    return t >= 0 ? t : (s.warn("radius \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e) }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrWidth: function() { this.__calculateBox() }, __afterSetAttrHeight: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function() { this.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.width,
                        a = e.height,
                        s = e.lineWidth,
                        o = s / 2;
                    this.set("box", { minX: n - o, minY: r - o, maxX: n + i + o, maxY: r + a + o }) }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.hasFill(),
                        i = n.hasStroke();
                    return r && i ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : r ? n.__isPointInFill(t, e) : !!i && n.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = (r.x, r.y, r.width, r.height, r.radius, n.get("context"));
                    return !!i && (n.createPath(), i.isPointInPath(t, e)) }, __isPointInStroke: function(t, e) {
                    var n = this,
                        r = n.__attrs,
                        i = r.x,
                        s = r.y,
                        o = r.width,
                        u = r.height,
                        c = r.radius,
                        l = r.lineWidth;
                    if (0 === c) {
                        var h = l / 2;
                        return a.line(i - h, s, i + o + h, s, l, t, e) || a.line(i + o, s - h, i + o, s + u + h, l, t, e) || a.line(i + o + h, s + u, i - h, s + u, l, t, e) || a.line(i, s + u + h, i, s - h, l, t, e) }
                    return a.line(i + c, s, i + o - c, s, l, t, e) || a.line(i + o, s + c, i + o, s + u - c, l, t, e) || a.line(i + o - c, s + u, i + c, s + u, l, t, e) || a.line(i, s + u - c, i, s + c, l, t, e) || a.arcline(i + o - c, s + c, c, 1.5 * Math.PI, 2 * Math.PI, !1, l, t, e) || a.arcline(i + o - c, s + u - c, c, 0, .5 * Math.PI, !1, l, t, e) || a.arcline(i + c, s + u - c, c, .5 * Math.PI, Math.PI, !1, l, t, e) || a.arcline(i + c, s + c, c, Math.PI, 1.5 * Math.PI, !1, l, t, e) }, createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.x,
                        i = n.y,
                        a = n.width,
                        s = n.height,
                        o = n.radius;
                    e.beginPath(), 0 === o ? (e.moveTo(r, i), e.lineTo(r + a, i), e.lineTo(r + a, i + s), e.lineTo(r, i + s), e.lineTo(r, i)) : (e.moveTo(r + o, i), e.lineTo(r + a - o, i), e.arc(r + a - o, i + o, o, -Math.PI / 2, 0, !1), e.lineTo(r + a, i + s - o), e.arc(r + a - o, i + s - o, o, 0, Math.PI / 2, !1), e.lineTo(r + o, i + s), e.arc(r + o, i + s - o, o, Math.PI / 2, Math.PI, !1), e.lineTo(r, i + o), e.arc(r + o, i + o, o, Math.PI, 3 * Math.PI / 2, !1)), e.closePath() } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(5),
                i = n(8),
                a = n(7),
                s = n(13),
                o = function(t) { o.superclass.constructor.call(this, t) };
            o.ATTRS = { x: 0, y: 0, text: null, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineWidth: 1 };
            var u = { start: 1, right: 1, left: 1, end: 1, center: 1 },
                c = { top: 1, middle: 1, bottom: 1 },
                l = { normal: 1, italic: 1, oblique: 1 },
                h = { normal: 1, "small-caps": 1 },
                f = { normal: 1, bold: 1, bolder: 1, lighter: 1, 100: 1, 200: 1, 300: 1, 400: 1, 500: 1, 600: 1, 700: 1, 800: 1, 900: 1 };
            r.extend(o, i), r.augment(o, { canFill: !0, canStroke: !0, type: "text", __setAttrTextAlign: function(t, e) {
                    return t in u ? t : e }, __setAttrTextBaseline: function(t, e) {
                    return t in c ? t : e }, __setAttrFontSize: function(t, e) {
                    return t >= 12 ? t : e }, __setAttrFontStyle: function(t, e) {
                    return t in l ? t : e }, __setAttrFontVariant: function(t, e) {
                    return t in h ? t : e }, __setAttrFontWeight: function(t, e) {
                    return t in f ? t : e }, __assembleFont: function() {
                    var t = this,
                        e = t.attr("fontSize"),
                        n = t.attr("fontFamily"),
                        r = t.attr("fontWeight"),
                        i = t.attr("fontStyle"),
                        a = t.attr("fontVariant");
                    t.attr("font", [i, a, r, e + "px", n].join(" ")) }, __afterSetAttrFontSize: function(t) {
                    var e = this;
                    e.attr({ height: t }), e.__assembleFont() }, __afterSetAttrFontFamily: function() { this.__assembleFont() }, __afterSetAttrFontWeight: function() { this.__assembleFont() }, __afterSetAttrFontStyle: function() { this.__assembleFont() }, __afterSetAttrFontVariant: function() { this.__assembleFont() }, __afterSetAttrFont: function() { this.attr("width", this.measureText()) }, __afterSetAttrText: function() { this.attr("width", this.measureText()) }, __afterSetAttrTextAlign: function() { this.__calculateBox() }, __afterSetAttrTextBaseline: function() { this.__calculateBox() }, __afterSetAttrX: function() { this.__calculateBox() }, __afterSetAttrY: function() { this.__calculateBox() }, __afterSetAttrWidth: function() { this.__calculateBox() }, __afterSetAttrLineWidth: function() { this.__calculateBox() }, __afterSetAttrAll: function(t) {
                    var e = this; "fontSize" in t && e.attr("height", t.fontSize), ("fontSize" in t || "fontWeight" in t || "fontStyle" in t || "fontVariant" in t || "fontFamily" in t) && e.__assembleFont(), "text" in t && e.__afterSetAttrText(t.text), e.__calculateBox() }, __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        r = e.y,
                        i = e.width;
                    if (i) {
                        var a = e.height,
                            s = e.textAlign,
                            o = e.textBaseline,
                            u = e.lineWidth,
                            c = { x: n, y: r - a };
                        s && ("end" === s || "right" === s ? c.x -= i : "center" === s && (c.x -= i / 2)), o && ("top" === o ? c.y += a : "middle" === o && (c.y += a / 2)), this.set("startPoint", c);
                        var l = u / 2;
                        this.set("box", { minX: c.x - l, minY: c.y - l, maxX: c.x + i + l, maxY: c.y + a + l }) } }, isPointInPath: function(t, e) {
                    var n = this,
                        r = n.getBBox();
                    if (n.hasFill() || n.hasStroke()) return a.box(r.minX, r.maxX, r.minY, r.maxY, t, e) }, drawInner: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.text,
                        a = n.x,
                        s = n.y;
                    r.isNull(i) || (e.beginPath(), t.hasFill() && e.fillText(i, a, s), t.hasStroke() && e.strokeText(i, a, s)) }, measureText: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.text,
                        i = e.font;
                    if (!r.isNull(n)) {
                        var a = s.backupContext;
                        a.save(), a.font = i;
                        var o = a.measureText(n).width;
                        return a.restore(), o } } }), t.exports = o },
        function(t, e, n) { "use strict";

            function r(t, e) { this.preSegment = e, this.init(t, e) }

            function i(t, e, n) {
                return { x: n.x + t, y: n.y + e } }

            function a(t, e) {
                return { x: e.x + (e.x - t.x), y: e.y + (e.y - t.y) } }

            function s(t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1]) }

            function o(t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (s(t) * s(e)) }

            function u(t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(o(t, e)) }

            function c(t, e, n, r, i, a, s) {
                var c = h.mod(h.degreeToRad(s), 2 * Math.PI),
                    l = t.x,
                    f = t.y,
                    g = e.x,
                    p = e.y,
                    v = Math.cos(c) * (l - g) / 2 + Math.sin(c) * (f - p) / 2,
                    d = -1 * Math.sin(c) * (l - g) / 2 + Math.cos(c) * (f - p) / 2,
                    x = v * v / (i * i) + d * d / (a * a);
                x > 1 && (i *= Math.sqrt(x), a *= Math.sqrt(x));
                var m = Math.sqrt((i * i * (a * a) - i * i * (d * d) - a * a * (v * v)) / (i * i * (d * d) + a * a * (v * v)));
                n === r && (m *= -1), isNaN(m) && (m = 0);
                var y = m * i * d / a,
                    _ = m * -a * v / i,
                    S = (l + g) / 2 + Math.cos(c) * y - Math.sin(c) * _,
                    w = (f + p) / 2 + Math.sin(c) * y + Math.cos(c) * _,
                    b = u([1, 0], [(v - y) / i, (d - _) / a]),
                    M = [(v - y) / i, (d - _) / a],
                    A = [(-1 * v - y) / i, (-1 * d - _) / a],
                    C = u(M, A);
                return o(M, A) <= -1 && (C = Math.PI), o(M, A) >= 1 && (C = 0), 0 === r && C > 0 && (C -= 2 * Math.PI), 1 === r && C < 0 && (C += 2 * Math.PI), [t, S, w, i, a, b, C, c, r] }
            var l = n(5),
                h = n(4),
                f = n(3),
                g = n(7),
                p = n(55),
                v = n(56),
                d = n(240),
                x = f.Vector3,
                m = f.Matrix3;
            l.augment(r, { init: function(t, e) {
                    var n = t[0];
                    e = e || { endPoint: { x: 0, y: 0 } };
                    var r = /[a-z]/.test(n),
                        s = n.toUpperCase(),
                        o = t;
                    switch (s) {
                        case "M":
                            if (r) var u = i(o[1], o[2], e.endPoint);
                            else var u = { x: o[1], y: o[2] };
                            this.command = "M", this.params = [e.endPoint, u], this.subStart = u, this.endPoint = u;
                            break;
                        case "L":
                            if (r) var u = i(o[1], o[2], e.endPoint);
                            else var u = { x: o[1], y: o[2] };
                            this.command = "L", this.params = [e.endPoint, u], this.subStart = e.subStart, this.endPoint = u;
                            break;
                        case "H":
                            if (r) var u = i(o[1], 0, e.endPoint);
                            else var u = { x: o[1], y: e.endPoint.y };
                            this.command = "L", this.params = [e.endPoint, u], this.subStart = e.subStart, this.endPoint = u;
                            break;
                        case "V":
                            if (r) var u = i(0, o[1], e.endPoint);
                            else var u = { x: e.endPoint.x, y: o[1] };
                            this.command = "L", this.params = [e.endPoint, u], this.subStart = e.subStart, this.endPoint = u;
                            break;
                        case "Q":
                            if (r) var l = i(o[1], o[2], e.endPoint),
                                h = i(o[3], o[4], e.endPoint);
                            else var l = { x: o[1], y: o[2] },
                                h = { x: o[3], y: o[4] };
                            this.command = "Q", this.params = [e.endPoint, l, h], this.subStart = e.subStart, this.endPoint = h;
                            break;
                        case "T":
                            if (r) var h = i(o[1], o[2], e.endPoint);
                            else var h = { x: o[1], y: o[2] };
                            if ("Q" === e.command) {
                                var l = a(e.params[1], e.endPoint);
                                this.command = "Q", this.params = [e.endPoint, l, h], this.subStart = e.subStart, this.endPoint = h } else this.command = "TL", this.params = [e.endPoint, h], this.subStart = e.subStart, this.endPoint = h;
                            break;
                        case "C":
                            if (r) var l = i(o[1], o[2], e.endPoint),
                                h = i(o[3], o[4], e.endPoint),
                                f = i(o[5], o[6], e.endPoint);
                            else var l = { x: o[1], y: o[2] },
                                h = { x: o[3], y: o[4] },
                                f = { x: o[5], y: o[6] };
                            this.command = "C", this.params = [e.endPoint, l, h, f], this.subStart = e.subStart, this.endPoint = f;
                            break;
                        case "S":
                            if (r) var h = i(o[1], o[2], e.endPoint),
                                f = i(o[3], o[4], e.endPoint);
                            else var h = { x: o[1], y: o[2] },
                                f = { x: o[3], y: o[4] };
                            if ("C" === e.command) {
                                var l = a(e.params[2], e.endPoint);
                                this.command = "C", this.params = [e.endPoint, l, h, f], this.subStart = e.subStart, this.endPoint = f } else this.command = "SQ", this.params = [e.endPoint, h, f], this.subStart = e.subStart, this.endPoint = f;
                            break;
                        case "A":
                            var g = o[1],
                                p = o[2],
                                v = o[3],
                                d = o[4],
                                x = o[5];
                            if (r) var u = i(o[6], o[7], e.endPoint);
                            else var u = { x: o[6], y: o[7] };
                            this.command = "A", this.params = c(e.endPoint, u, d, x, g, p, v), this.subStart = e.subStart, this.endPoint = u;
                            break;
                        case "Z":
                            this.command = "Z", this.params = [e.endPoint, e.subStart], this.subStart = e.subStart, this.endPoint = e.subStart } }, isInside: function(t, e, n) {
                    var r = this,
                        i = r.command,
                        a = r.params,
                        s = r.box;
                    if (s && !g.box(s.minX, s.maxX, s.minY, s.maxY, t, e)) return !1;
                    switch (i) {
                        case "M":
                            return !1;
                        case "TL":
                        case "L":
                        case "Z":
                            return g.line(a[0].x, a[0].y, a[1].x, a[1].y, n, t, e);
                        case "SQ":
                        case "Q":
                            return g.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, n, t, e);
                        case "C":
                            return g.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, n, t, e);
                        case "A":
                            var o = a,
                                u = o[1],
                                c = o[2],
                                l = o[3],
                                h = o[4],
                                f = o[5],
                                p = o[6],
                                v = o[7],
                                d = o[8],
                                y = l > h ? l : h,
                                _ = l > h ? 1 : l / h,
                                S = l > h ? h / l : 1,
                                o = new x(t, e, 1),
                                w = new m;
                            return w.translate(-u, -c), w.rotate(-v), w.scale(1 / _, 1 / S), o.applyMatrix(w), g.arcline(0, 0, y, f, f + p, 1 - d, n, o.x, o.y) }
                    return !1 }, draw: function(t) {
                    var e = this.command,
                        n = this.params;
                    switch (e) {
                        case "M":
                            t.moveTo(n[1].x, n[1].y);
                            break;
                        case "TL":
                        case "L":
                            t.lineTo(n[1].x, n[1].y);
                            break;
                        case "SQ":
                        case "Q":
                            var r = n[1],
                                i = n[2];
                            t.quadraticCurveTo(r.x, r.y, i.x, i.y);
                            break;
                        case "C":
                            var r = n[1],
                                i = n[2],
                                a = n[3];
                            t.bezierCurveTo(r.x, r.y, i.x, i.y, a.x, a.y);
                            break;
                        case "A":
                            var s = n,
                                o = s[1],
                                u = s[2],
                                c = s[3],
                                l = s[4],
                                h = s[5],
                                f = s[6],
                                g = s[7],
                                p = s[8],
                                v = c > l ? c : l,
                                d = c > l ? 1 : c / l,
                                x = c > l ? l / c : 1;
                            t.translate(o, u), t.rotate(g), t.scale(d, x), t.arc(0, 0, v, h, h + f, 1 - p), t.scale(1 / d, 1 / x), t.rotate(-g), t.translate(-o, -u);
                            break;
                        case "Z":
                            t.closePath() } }, getBBox: function(t) {
                    var e = t / 2,
                        n = this.params;
                    switch (this.command) {
                        case "M":
                        case "Z":
                            break;
                        case "TL":
                        case "L":
                            this.box = { minX: Math.min(n[0].x, n[1].x) - e, maxX: Math.max(n[0].x, n[1].x) + e, minY: Math.min(n[0].y, n[1].y) - e, maxY: Math.max(n[0].y, n[1].y) + e };
                            break;
                        case "SQ":
                        case "Q":
                            for (var r = v.extrema(n[0].x, n[1].x, n[2].x), i = 0, a = r.length; i < a; i++) r[i] = v.at(n[0].x, n[1].x, n[2].x, r[i]);
                            r.push(n[0].x, n[2].x);
                            for (var s = v.extrema(n[0].y, n[1].y, n[2].y), i = 0, a = s.length; i < a; i++) s[i] = v.at(n[0].y, n[1].y, n[2].y, s);
                            s.push(n[0].y, n[2].y), this.box = { minX: Math.min.apply(Math, r) - e, maxX: Math.max.apply(Math, r) + e, minY: Math.min.apply(Math, s) - e, maxY: Math.max.apply(Math, s) + e };
                            break;
                        case "C":
                            for (var r = p.extrema(n[0].x, n[1].x, n[2].x, n[3].x), i = 0, a = r.length; i < a; i++) r[i] = p.at(n[0].x, n[1].x, n[2].x, n[3].x, r[i]);
                            for (var s = p.extrema(n[0].y, n[1].y, n[2].y, n[3].y), i = 0, a = s.length; i < a; i++) s[i] = p.at(n[0].y, n[1].y, n[2].y, n[3].y, s[i]);
                            r.push(n[0].x, n[3].x), s.push(n[0].y, n[3].y), this.box = { minX: Math.min.apply(Math, r) - e, maxX: Math.max.apply(Math, r) + e, minY: Math.min.apply(Math, s) - e, maxY: Math.max.apply(Math, s) + e };
                            break;
                        case "A":
                            for (var o = n, u = o[1], c = o[2], l = o[3], h = o[4], f = o[5], g = o[6], x = o[7], m = o[8], y = f, _ = f + g, S = d.xExtrema(x, l, h), w = 1 / 0, b = -(1 / 0), M = [y, _], i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                                var A = S + i;
                                1 === m ? y < A && A < _ && M.push(A) : _ < A && A < y && M.push(A) }
                            for (var i = 0, a = M.length; i < a; i++) {
                                var C = d.xAt(x, l, h, u, M[i]);
                                C < w && (w = C), C > b && (b = C) }
                            for (var k = d.yExtrema(x, l, h), P = 1 / 0, T = -(1 / 0), I = [y, _], i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                                var D = k + i;
                                1 === m ? y < D && D < _ && I.push(D) : _ < D && D < y && I.push(D) }
                            for (var i = 0, a = I.length; i < a; i++) {
                                var L = d.yAt(x, l, h, c, I[i]);
                                L < P && (P = L), L > T && (T = L) }
                            this.box = { minX: w - e, maxX: b + e, minY: P - e, maxY: T + e } } } }), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(17),
                a = n(59),
                s = n(19),
                o = function u(t) { u.superclass.constructor.call(this, t), this._initCalMethod() };
            r.extend(o, i), r.augment(o, { type: "color", names: ["color"], colors: null, calType: null, _initCalMethod: function() {
                    var t, e = this.calType;
                    t = e && e.indexOf("-") !== -1 ? a.gradient(e) : a[e], this.calMethod = t }, mappingRecord: function(t) {
                    var e = this.type,
                        n = {},
                        r = this.getScale(e),
                        i = t[e];
                    return i = r.type !== s.I_TYPE ? this.getValue(i) : r.invert(i), n[e] = i, n }, getValue: function(t) {
                    var e, n = this.colors;
                    if (n) {
                        var r, i = this.getScale(this.type);
                        if (i.isCategory) {
                            var s = i.invert(t);
                            r = i.translate(s) } else r = parseInt((n.length - 1) * t, 10);
                        e = n[r % n.length] } else this.calMethod && (e = this.calMethod.call(a, t));
                    return e } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(17);
            r.Position = n(252), r.Color = n(248), r.Size = n(254), r.Shape = n(253), r.Opacity = n(251), r.Label = n(250), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(17),
                a = "_origin",
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, i), r.augment(s, { type: "label", getLabel: function(t) {
                    var e, n = this,
                        i = n.scales,
                        a = n.callback;
                    if (a) {
                        var s = [];
                        r.each(i, function(e) { s.push(t[e.dim]) }), e = a.apply(null, s) } else {
                        var o = n.getScale(n.type);
                        if (e = t[o.dim], r.isArray(e)) {
                            var u = [];
                            r.each(e, function(t) { u.push(o.getText(t)) }), e = u } else e = o.getText(e) }
                    return e }, getMappedRecord: function(t) {
                    var e = this,
                        n = t,
                        r = e.type;
                    return t[a] && (n = t[a]), t[r] = e.getLabel(n), t } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(19),
                a = n(17),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, a), r.augment(s, { type: "opacity", mappingRecord: function(t) {
                    var e = this.type,
                        n = {},
                        r = this.getScale(e),
                        a = t[e];
                    return a = r.type !== i.I_TYPE ? this.getValue(a) : r.invert(a), n[e] = a, n }, getValue: function(t) {
                    return .9 * t + .1 } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(17),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { type: "position", names: ["x", "y", "z"], _transRecord: function(t) {
                    var e, n, i, a = this.coord;
                    if (r.isArray(t.x) && r.isArray(t.y)) { n = [], i = [];
                        for (var s = t.x, o = t.y, u = 0, c = 0; u < s.length && c < o.length; u++, c++) {
                            var l = a.convertPoint({ x: s[u], y: o[c] });
                            n.push(l.x), i.push(l.y) }
                        e = { x: n, y: i } } else r.isArray(t.y) ? (i = [], r.each(t.y, function(e) {
                        var s = a.convertPoint({ x: t.x, y: e });
                        n ? (r.isArray(n) || (n = [n]), n.push(s.x)) : n = s.x, i.push(s.y) }), e = { x: n, y: i }) : r.isArray(t.x) ? (n = [], i = [], r.each(t.x, function(e) {
                        var r = a.convertPoint({ x: e, y: t.y });
                        n.push(r.x), i.push(r.y) }), e = { x: n, y: i }) : e = a.convertPoint(t);
                    return e }, mappingRecord: function(t) {
                    var e = this.getDims(),
                        n = this.names,
                        r = n[1];
                    return 1 === e.length && void 0 === t[r] && (t[r] = .1), this._transRecord(t) }, getNames: function() {
                    var t = a.superclass.getNames.call(this);
                    return 1 === t.length && t.push("y"), t }, setCoord: function(t) { this.coord = t } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(19),
                a = n(17),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, a), r.augment(s, { type: "shape", shapes: [], mappingRecord: function(t) {
                    var e = this.type,
                        n = {},
                        r = this.getScale(e),
                        a = t[e];
                    return a = r.type !== i.I_TYPE ? this.getValue(a) : r.invert(a), n[e] = a, n }, getValue: function(t) {
                    var e, n = this.shapes,
                        r = this.getScale(this.type);
                    return r.isCategory ? (t = r.invert(t), e = r.translate(t)) : e = parseInt(t * (n.length - 1), 10), n[e % n.length] } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(19),
                a = n(17),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, a), r.augment(s, { type: "size", max: 4, min: 1, mappingRecord: function(t) {
                    var e = this.type,
                        n = {},
                        r = this.getScale(e),
                        a = t[e];
                    return a = r.type !== i.I_TYPE ? this.getValue(a) : r.invert(a), n[e] = a, n }, getValue: function(t) {
                    var e = this.getScale(this.type);
                    e.isCategory && (t = e.invert(t), t = e.translate(t) / e.values.length);
                    var n = this.max,
                        r = this.min;
                    return r + (n - r) * t } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(11),
                a = i.Components,
                s = a.Axis,
                o = n(6),
                u = function(t) { this.axisCfg = {}, r.mix(this, t) };
            r.augment(u, { axisCfg: null, enable: !0, container: null, chart: null, _isHide: function(t) {
                    var e = this.axisCfg;
                    return e && e[t] === !1 }, _getAxisClass: function(t, e) {
                    return t.isRect ? s : "x" === e ? s.Circle : s.Radius }, _getAxisPosition: function(t, e, n, r) {
                    var i = t.type,
                        a = "";
                    return t.isRect ? ("mirror" === r ? "x" === e && (a = "bottom") : "x" === e && (a = "bottom"), "y" === e && (a = n ? "right" : "left")) : a = "clock" === i ? "clock" : "gauge" === i ? "gauge" : "x" === e ? t.isTransposed ? "radius" : "circle" : t.isTransposed ? "circle" : "radius", a }, _getAxisCfg: function(t, e, n, i, a) {
                    var s = this,
                        u = n.rows,
                        c = n.cols,
                        l = n.rowIndex,
                        h = n.colIndex,
                        f = n.type,
                        g = s.axisCfg,
                        p = {},
                        v = s._getAxisPosition(t, i, a, f),
                        d = t.getHeight(),
                        x = t.type;
                    if ("cartesian" !== x || 1 === u && 1 === c ? "cartesian" === x && (p.title = { text: e.alias || e.dim }) : (p.title = { text: e.alias || e.dim }, "tree" === f ? ("y" === i && 0 !== n.originColIndex && 0 !== h || "x" === i && n.children) && (p.labels = null, p.title = null) : "circle" === f ? (p.labels = null, p.title = null) : ("mirror" !== f && "y" === i && (0 !== h && "left" === v || h !== c - 1 && "right" === v) && (p.labels = null, p.title = null), "rect" === f ? "x" === i && 0 !== l && (p.labels = null, p.title = null) : "list" === f ? "x" === i && l !== u - 1 && c * l + h + 1 + c <= n.count && (p.labels = null, p.title = null) : "mirror" === f && "x" === i && (1 === u && 1 === h || 2 === u && 0 === l) && (p.labels = null, p.title = null)), "y" === i && p.title && l !== Math.floor(u / 2) && (p.title = null), "x" === i && p.title && h !== Math.floor(c / 2) && (p.title = null)), p = r.mix(!0, {}, o.axis[v], p, g[e.dim]), p.ticks = e.getTicks(), t.isPolar && !e.isCategory && "x" === i && ("clock" === t.type ? p.ticks[0].text = "" : "gauge" !== t.type && p.ticks.pop()), "y" === i) {
                        var m = p.ticks,
                            y = m.length,
                            _ = 16;
                        if (d / y < _) {
                            var S = [],
                                w = Math.floor(d / _) + 1,
                                b = Math.floor(y / w);
                            b < 1 && (b = 1), S.push(m[0]);
                            for (var M = b; M <= y - 2; M += b) S.push(m[M]);
                            S.push(m[y - 1]), p.ticks = S } }
                    return p.coord = t, p.labels && r.isNull(p.labels.autoRotate) && (p.labels.autoRotate = !0), p }, _drawAxis: function(t, e, n, r, i, a) {
                    var s = this.container,
                        o = this._getAxisClass(t, r),
                        u = this._getAxisCfg(t, e, n, r, a);
                    return "y" === r && i && "circle" === i.get("type") && (u.circle = i), s.addGroup(o, u) }, createAxis: function(t, e, n) {
                    var i = this;
                    if (i.enable) {
                        var a = t.get("coord"),
                            s = a.type,
                            o = i.chart.get("facets"),
                            u = o[t.get("index")];
                        if ("theta" !== s && ("polar" !== s || !a.isTransposed)) {
                            var c;
                            e && !i._isHide(e.dim) && (c = i._drawAxis(a, e, u, "x")), n && n.length && r.each(n, function(t, e) { i._isHide(t.dim) || i._drawAxis(a, t, u, "y", c, e) }) } } } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(71),
                a = function(t) { r.mix(this, t), this.resetActions() };
            r.augment(a, { type: "rect", coordCfg: {}, actions: [], _execActions: function(t) {
                    var e = this.actions;
                    r.each(e, function(e) {
                        var n = e[0];
                        t[n](e[1], e[2]) }) }, hasAction: function(t) {
                    var e = this.actions,
                        n = !1;
                    return r.each(e, function(e) {
                        if (t === e[0]) return n = !0, !1 }), n }, createCoord: function(t, e) {
                    var n, a, s = this,
                        o = s.type || "rect",
                        u = r.mix({ start: t, end: e }, s.coordCfg);
                    return "theta" === o ? (n = i.Polar, s.hasAction("transpose") || s.transpose(), a = new n(u), a.type = o) : (n = i[r.ucfirst(o)] || i.Rect, a = new n(u)), s._execActions(a), a }, rotate: function(t) {
                    var e = this.actions;
                    return t = t * Math.PI / 180, e.push(["rotate", t]), this }, reflect: function(t) {
                    var e = this.actions;
                    return e.push(["reflect", t]), this }, scale: function(t, e) {
                    var n = this.actions;
                    return n.push(["scale", t, e]), this }, transpose: function() {
                    var t = this.actions;
                    return t.push(["transpose"]), this }, resetActions: function() {
                    return this.actions = [], this } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = r.getRatio(),
                a = function(t) { r.mix(this, t) };
            r.augment(a, { chart: null, _getCanvas: function() {
                    var t = this.chart;
                    return t.get("frontCanvas") }, _getPointInfo: function(t) {
                    var e = this.chart,
                        n = { x: t.x / i, y: t.y / i },
                        r = e.getViewByPoint(n);
                    return n.view = r, n }, _getEventObj: function(t, e, n) {
                    return { x: e.x, y: e.y, target: t.target, toElement: t.event.toElement, view: n } }, bindEvents: function() {
                    var t = this,
                        e = t._getCanvas();
                    e.on("canvas-mousemove", r.wrapBehavior(t, "onMove")), e.on("canvas-mouseleave", r.wrapBehavior(t, "onOut")), e.on("canvas-click", r.wrapBehavior(t, "onClick")) }, onOut: function(t) {
                    var e = this,
                        n = e.chart,
                        r = e._getPointInfo(t);
                    n.fire("plotleave", e._getEventObj(t, r, e.curView)) }, onMove: function(t) {
                    var e = this,
                        n = e.chart,
                        r = e._getPointInfo(t),
                        i = e.curView;
                    i !== r.view && (r.view && n.fire("plotenter", e._getEventObj(t, r, r.view)), i && n.fire("plotleave", e._getEventObj(t, r, i))), r.view && n.fire("plotmove", e._getEventObj(t, r, r.view)), e.curView = r.view }, onClick: function(t) {
                    var e = this,
                        n = e.chart,
                        r = e._getPointInfo(t);
                    if (r.view) {
                        for (var i, a, s = r.view, o = n.get("geoms"), u = e._getEventObj(t, r, s), c = o.length - 1; c >= 0 && (a = o[c], !(i = a.getSingleShape(r))); c--);
                        i && (u.shape = i, u.geom = a, u.data = i.get("origin")), n.fire("plotclick", u), a && i && a.allowSelected && a.allowSelected() && (i.get("selected") ? a.setSelected(null, s) : a.setSelected(i.get("origin"), s)) } }, clearEvents: function() {
                    var t = this,
                        e = t._getCanvas();
                    e.off("canvas-mousemove", r.getWrapBehavior(t, "onMove")), e.off("canvas-mouseleave", r.getWrapBehavior(t, "onClick")) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(268),
                a = function(t) { r.mix(this, t) };
            r.augment(a, { plotContainer: null, facetCfg: {}, _getFacetClass: function(t) {
                    return t = r.ucfirst(t), i[t] }, createFacets: function(t) {
                    var e = this.facetCfg,
                        n = this._getFacetClass(e.type),
                        r = new n(e),
                        i = r.generateFacets(t),
                        a = this.plotContainer,
                        s = a.addGroup();
                    return r.drawTitles(i, s), i } }), t.exports = a },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(300),
                a = n(6),
                s = ["text", "tag"],
                o = function(t) { r.mix(this, t), this.guides = [] };
            r.augment(o, {
                guides: null,
                xScale: null,
                yScale: null,
                backPlot: null,
                frontPlot: null,
                _addGuide: function(t) { this.guides.push(t) },
                _getDefault: function() {
                    return { xScale: this.xScale, yScale: this.yScale } },
                setScale: function(t, e) {
                    var n = this.guides;
                    this.xScale = t, this.yScale = e, r.each(n, function(n) { n.xScale = t, n.yScale = e }) },
                line: function(t, e, n) {
                    var s = { type: "line", from: t, to: e, cfg: r.mix({}, a.guide.line, n) };
                    r.mix(s, this._getDefault());
                    var o = new i.Line(s);
                    return this._addGuide(o), this },
                text: function(t, e, n) {
                    var s = { type: "text", position: t, text: e, cfg: r.mix({}, a.guide.text, n) };
                    r.mix(s, this._getDefault());
                    var o = new i.Text(s);
                    return this._addGuide(o), this },
                image: function(t, e, n) {
                    var a = { type: "image", start: t };
                    r.isArray(e) && (a.end = e), r.isObject(e) && (n = e), n && (a.cfg = n), r.mix(a, this._getDefault());
                    var s = new i.Image(a);
                    return this._addGuide(s), this },
                rect: function(t, e, n) {
                    var s = { type: "rect", start: t, end: e, cfg: r.mix({}, a.guide.rect, n) };
                    r.mix(s, this._getDefault());
                    var o = new i.Rect(s);
                    return this._addGuide(o), this
                },
                arc: function(t, e, n) {
                    var s = { type: "arc", start: t, end: e, cfg: r.mix({}, a.guide.arc, n) };
                    r.mix(s, this._getDefault());
                    var o = new i.Arc(s);
                    return this._addGuide(o), this },
                tag: function(t, e, n, s) {
                    var o = { type: "tag", from: t, to: e, text: n, cfg: r.mix({}, a.guide.tag, s) };
                    r.mix(o, this._getDefault());
                    var u = new i.Tag(o);
                    return this._addGuide(u), this },
                paint: function(t, e, n) {
                    var i = this.guides;
                    e = e || this.backPlot, n = n || this.frontPlot, r.each(i, function(i) { r.inArray(s, i.type) ? i.paint(t, n) : i.paint(t, e) }) },
                clear: function() {
                    return this.guides = [], this }
            }), t.exports = o
        },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(256),
                a = n(255),
                s = n(262),
                o = n(263),
                u = n(261),
                c = n(259),
                l = n(257),
                h = n(258),
                f = function(t) { r.mix(this, t) };
            r.augment(f, { chart: null, _initEvent: function() {
                    var t = this.chart,
                        e = new l({ chart: t });
                    e.bindEvents(), t.set("eventAssist", e) }, _initScale: function() {
                    var t = this.chart,
                        e = new s({ defs: t.get("colDefs") });
                    t.set("scaleAssist", e) }, _initCoord: function() {
                    var t = this.chart,
                        e = new i;
                    t.set("coordAssist", e) }, _initAxis: function() {
                    var t = this.chart,
                        e = new a({ chart: t, container: t.get("backPlot") });
                    t.set("axisAssist", e) }, _initLegend: function() {
                    var t = this.chart,
                        e = new u({ chart: t });
                    t.set("legendAssist", e) }, _initTooltip: function() {
                    var t = this.chart,
                        e = new o({ chart: t });
                    t.set("tooltipAssist", e) }, _initGuide: function() {
                    var t = this.chart,
                        e = new c({ backPlot: t.get("backPlot"), frontPlot: t.get("frontCanvas") });
                    t.set("guideAssist", e) }, _initFacet: function() {
                    var t = this.chart,
                        e = new h({ plotContainer: t.get("plotContainer"), facetCfg: t.get("facetCfg") });
                    t.set("facetAssist", e) }, initAssists: function() { this._initEvent(), this._initScale(), this._initCoord(), this._initAxis(), this._initLegend(), this._initTooltip(), this._initGuide(), this._initFacet() } }), t.exports = f },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(11),
                a = i.Components,
                s = a.Legend,
                o = n(6),
                u = n(58),
                c = 16,
                l = 25,
                h = function(t) { r.mix(this, t), this.legendCfg = {}, this.reset();
                    var e = this.chart;
                    this.container = e.get("frontCanvas"), this.plotRange = e.get("plotRange") };
            r.augment(h, { plotRange: null, container: null, chart: null, enable: !0, position: "right", legendCfg: {}, _isFiltered: function(t, e, n) {
                    if (!t.isCategory) return !0;
                    var i = !1;
                    return n = t.invert(n), r.each(e, function(e) {
                        if (i = i || t.getText(e) === t.getText(n)) return !1 }), i }, _getLayoutType: function(t) {
                    return "right" === t || "left" === t ? "vertical" : "horizontal" }, _getFilterVals: function(t) {
                    var e = this.chart,
                        n = e.get("filters");
                    return n[t] }, _bindEvent: function(t, e) {
                    var n = this,
                        i = n.chart,
                        a = e.dim;
                    t.on("itemchecked", function(t) {
                        var e = t.item.get("value"),
                            r = n._getFilterVals(a);
                        r.push(e), i.repaint() }), t.on("itemunchecked", function(t) {
                        var s = t.item.get("value"),
                            o = n._getFilterVals(a);
                        o || (o = e.values.slice(0)), r.remove(o, s), i.filter(a, o), i.repaint() }) }, _getRegion: function(t) {
                    var e = 0,
                        n = 0;
                    return r.each(t, function(t) {
                        var r = t.getBBBox();
                        e < r.width && (e = r.width), n += r.width }), { maxWidth: e, totalWidth: n } }, _alignLegend: function(t, e, n, r) {
                    var i = this,
                        a = i.container,
                        s = a.get("canvas"),
                        o = s.get("width"),
                        u = s.get("height"),
                        h = i.plotRange,
                        f = 0,
                        g = 0,
                        p = t.get("dx") || 0,
                        v = t.get("dy") || 0,
                        d = t.getBBBox();
                    if ("left" === r || "right" === r) {
                        var x = n.maxWidth;
                        h ? (u = h.br.y, f = "left" === r ? c : h.br.x + c) : f = "left" === r ? c : o - x + c, g = u - d.height, e && (g = e.get("y") - d.height - l) } else {
                        var m = 0;
                        h && (m = h.bl.x + (h.getWidth() - n.totalWidth) / 2), f = m, g = "top" === r ? c : u - d.height - c, e && (f = e.get("x") + e.getBBBox().width + l) }
                    t.move(f + p, g + v) }, addMixedLegend: function(t) {
                    var e = this;
                    if (!e.enable) return null;
                    var n = e.container,
                        i = e.position,
                        a = e.legendCfg,
                        c = e.legends;
                    c[i] = c[i] || [], r.each(t, function(t) { t.type = null, t.marker = u.Point.getMarkerCfg("point", t), t.checked = !0 });
                    var l = n.addGroup(s, r.mix({}, { checkable: !1, layout: e._getLayoutType(i), items: t, word: { fill: "#333" } }, o.legend[i], a));
                    return c[i].push(l), l }, addLegend: function(t, e, n, r) {
                    var i, a = this;
                    if (!a.enable) return null;
                    var s = a.legendCfg,
                        o = t.dim;
                    if (s && s[o] === !1) return null;
                    var u = s[o];
                    return i = u && u.position ? u.position : a.position, t.isLinear && "color" === e.type ? a._addContinuousLegend(t, e, i) : a._addCategroyLegend(t, e, n, r, i) }, _addContinuousLegend: function(t, e, n) {
                    var i = this,
                        a = i.legends;
                    a[n] = a[n] || [];
                    var u, c, l, h, f, g = i.container,
                        p = i.legendCfg,
                        v = t.dim,
                        d = t.getTicks(),
                        x = [],
                        m = i._getLayoutType(n);
                    return r.each(d, function(t) { u = t.value, c = e.getMappingValue(u), x.push({ name: t.text, color: c, value: u }), 0 === u && (h = !0), 1 === u && (f = !0) }), h || x.push({ name: t.getText(t.invert(0)), color: e.getMappingValue(0), value: 0 }), f || x.push({ name: t.getText(t.invert(1)), color: e.getMappingValue(1), value: 1 }), l = g.addGroup(s.Continuous, r.mix({}, { titleText: t.alias || t.dim, checkable: t.isCategory, layout: m, theme: "gradient", items: x }, o.legend[n], o.legend.size, p[v] || p)), a[n].push(l), l }, _addCategroyLegend: function(t, e, n, i, a) {
                    var c = this,
                        l = t.dim,
                        h = c.legendCfg,
                        f = c.legends;
                    f[a] = f[a] || [];
                    var g, p = c.container,
                        v = [],
                        d = t.getTicks(),
                        x = "point",
                        m = "point",
                        y = c._getLayoutType(a),
                        _ = c.plotRange,
                        S = "right" === a || "left" === a ? _.bl.y - _.tr.y : _.tr.x - _.bl.x;
                    r.each(d, function(a) {
                        var s = a.text,
                            o = a.value,
                            l = t.invert(o),
                            h = { isInCircle: n.isInCircle() },
                            f = !i || c._isFiltered(t, i, o),
                            p = e.getMappingValue(o); "color" === e.type ? h.color = p : "shape" === e.type ? (x = n.get("shapeType"), m = p) : "size" === e.type && (g = p);
                        var d = u.createShape(x),
                            y = d.getMarkerCfg(m, h);
                        r.isNull(g) || (y.radius = g), v.push({ name: s, checked: f, type: null, marker: y, value: l }) });
                    var w = p.addGroup(s, r.mix({}, { titleText: t.alias || t.dim, checkable: t.isCategory, maxLength: S, layout: y, items: v, word: { fill: "#333" } }, o.legend[a], h[l] || h));
                    return c._bindEvent(w, t), f[a].push(w), w }, alignLegends: function() {
                    var t = this,
                        e = t.legends;
                    return r.each(e, function(e, n) {
                        var i = t._getRegion(e);
                        r.each(e, function(r, a) {
                            var s = e[a - 1];
                            t._alignLegend(r, s, i, n) }) }), this }, reset: function() {
                    var t = this,
                        e = t.legends;
                    r.each(e, function(t) { r.each(t, function(t) { t.remove() }) }), this.legends = {} } }), t.exports = h },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(19),
                a = n(39),
                s = n(2),
                o = n(6),
                u = { LINEAR: "linear", CAT: "cat", TIME: "time" },
                c = function(t) { r.mix(this, t), this.defs = this.defs || {} };
            r.augment(c, { defs: null, _addNewCol: function(t, e, n) {
                    var i = this,
                        a = e.dims,
                        s = [];
                    r.each(a, function(t) {
                        var e = i._getDefaultType(t, n);
                        if (0 === s.length) s.push(e);
                        else if (!r.inArray(s, e)) throw new Error('Sorry, the values that are involved in "+" must be of the same type.') }), e.type = s[0];
                    var o = [];
                    r.each(a, function(t) { o.push(n.colArray(t)) });
                    for (var u = [], c = 0; c < o[0].length; c++) { u[c] = [];
                        for (var l = 0; l < a.length; l++) u[c].push(o[l][c]) }
                    n.addCol(t, u) }, _getDefs: function() {
                    var t = this.defs;
                    return r.mix(!0, {}, o.scales, t) }, _getScaleCfg: function(t, e, n) {
                    var r = { dim: e };
                    if (n.contains(e)) {
                        var a = s.values(n, e);
                        r.values = a, i.isCategory(t) || (r.min = s.min(n, e), r.max = s.max(n, e), "time" === t ? r.nice = !1 : r.nice = !0) }
                    return r }, _getDefaultType: function(t, e) {
                    var n = u.LINEAR,
                        i = s.values(e, t),
                        o = i[0];
                    return r.isArray(o) && (o = o[0]), a.isDateString(o) ? n = u.TIME : r.isString(o) && (n = u.CAT), n }, _syncScales: function(t, e) { t.isCategory ? t.change({ values: e.values, ticks: e.ticks }) : "identity" !== t.type && t.change({ min: e.min, max: e.max, ticks: e.ticks, values: e.values }) }, createDefaultScale: function(t, e) {
                    var n = this._getDefaultType(t, e),
                        r = this._getScaleCfg(n, t, e);
                    return i[n](r) }, createScale: function(t, e) {
                    var n, a = this,
                        s = a._getDefs();
                    if (r.isNumber(t)) n = i.I({ value: t, dim: t.toString() });
                    else if (s[t] || r.indexOf(e.colNames(), t) !== -1)
                        if (s[t]) {
                            var o = s[t];
                            o.dims && a._addNewCol(t, o, e);
                            var u = o.type || a._getDefaultType(t, e),
                                c = a._getScaleCfg(u, t, e);
                            r.mix(c, o), n = i[u](c) } else n = a.createDefaultScale(t, e);
                    else n = i.I({ value: t, dim: t });
                    return n }, sortScales: function(t, e, n) {
                    var i = this;
                    return n ? (t = s.sortBy(t, n), void r.each(e, function(e, n) {
                        var r = e.type;
                        if ("identity" !== r && t.contains(n)) {
                            var a = i.createScale(n, t);
                            e.values = a.values } })) : null }, trainScales: function(t, e) {
                    var n = this;
                    r.each(e, function(e) {
                        var r = e.type,
                            i = e.dim;
                        if ("identity" !== r && t.contains(i)) {
                            var a = n.createScale(i, t);
                            n._syncScales(e, a) } }) }, resetScales: function(t, e) {
                    var n = this;
                    r.each(e, function(e, r) {
                        var i = n.createScale(r, t);
                        n._syncScales(e, i) }) }, _getFilterFunction: function(t, e) {
                    var n, i = t.dim;
                    return n = t.isCategory ? function(n) {
                        var a = !1;
                        return r.each(e, function(e) {
                            var r = n[i];
                            if (a = a || t.getText(e) === t.getText(r)) return !1 }), a } : function(t) {
                        var n = t[i];
                        return r.inArray(e, n) } }, filterData: function(t, e, n) {
                    var i = this,
                        a = [];
                    r.each(e, function(t, e) {
                        var r = n[e];
                        if (t && r) {
                            var s = i._getFilterFunction(r, t);
                            a.push(s) } });
                    var o = t;
                    return a.length && (o = s.filter(t, function(t) {
                        var e = !0;
                        return r.each(a, function(n) { e = e && n(t) }), e })), o }, processCatScale: function(t, e) {
                    var n = this,
                        i = n._getDefs();
                    return r.each(e, function(e, n) {
                        var a = e.type;
                        if (e.isCategory && "timeCat" !== a && t.contains(n)) {
                            var s = i[n];
                            if (s && !s.hasOwnProperty("values") || !s) {
                                var o = t.colArray(n);
                                r.each(o, function(t, e) { o[e] = t.toString() }), t.colReplace(n, o) } } }), t } }), t.exports = c },
        function(t, e, n) { "use strict";

            function r(t, e) {
                if (!t) return !1;
                var n = "";
                return n = o.isNull(t.className.baseVal) ? t.className : t.className.baseVal, n.indexOf(e) !== -1 }

            function i(t, e) {
                for (var n = t.parentNode, i = !1; n && n !== document.body;) {
                    if (r(n, e)) { i = !0;
                        break }
                    n = n.parentNode }
                return i }

            function a(t, e) {
                var n = -1;
                return o.each(t, function(t, r) {
                    if (t.title === e.title && t.name === e.name && t.value === e.value) return n = r, !1 }), n }

            function s(t) {
                var e = [];
                return o.each(t, function(t) {
                    var n = a(e, t);
                    n === -1 ? e.push(t) : e[n] = t }), e }
            var o = n(1),
                u = n(6),
                c = n(11),
                l = c.Components,
                h = l.Tooltip,
                f = ["line", "area", "path", "areaStack"],
                g = ["line", "area"],
                p = function(t) { o.mix(this, t) };
            o.augment(p, { enable: !0, cfg: null, tooltip: null, markerGroup: null, chart: null, timeStamp: 0, get: function(t) {
                    return this[t] }, set: function(t, e) { this[t] = e }, _showMarkers: function(t, e) {
                    var n = this,
                        r = n.get("markerGroup");
                    r.setMatrix(e.get("matrix").clone()), r.clear(), o.each(t, function(t) {
                        var e = t.point,
                            n = o.mix({}, r.get("marker"), { x: o.isArray(e.x) ? e.x[e.x.length - 1] : e.x, y: o.isArray(e.y) ? e.y[e.y.length - 1] : e.y, stroke: t.color });
                        r.addShape("Marker", { attrs: n }) }), r.show() }, _getCanvas: function() {
                    return this.chart.get("frontCanvas") }, _setTooltip: function(t, e, n) {
                    var r = this,
                        i = r.get("tooltip"),
                        a = r.get("prePoint");
                    if (!a || a.x !== e.x || a.y !== e.y) { n = s(n), r.set("prePoint", e);
                        var u = r.chart,
                            c = o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                            l = o.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
                        i.get("visible") || u.fire("tooltipshow", { x: c, y: l, tooltip: i }), u.fire("tooltipchange", { tooltip: i, x: c, y: l, items: n }), i.setContent(t, n), i.setPosition(c, l) } }, _clearActive: function() {
                    var t = this,
                        e = t.get("chart"),
                        n = e.get("geoms");
                    o.each(n, function(t) { t.clearShapeActived() }) }, _bindEvent: function() {
                    var t = this,
                        e = t.chart;
                    e.on("plotmove", o.wrapBehavior(t, "onMouseMove")), e.on("plotleave", o.wrapBehavior(t, "onMouseOut")) }, _offEvent: function() {
                    var t = this,
                        e = t.chart;
                    e.off("plotmove", o.getWrapBehavior(t, "onMouseMove")), e.off("plotleave", o.getWrapBehavior(t, "onMouseOut")) }, _setTooltipCrosshairs: function() {
                    var t = this,
                        e = o.mix({}, u.tooltip),
                        n = t.get("chart"),
                        r = n.get("geoms"),
                        i = [];
                    return o.each(r, function(t) {
                        var e = t.get("type");
                        o.indexOf(i, e) === -1 && i.push(e) }), r.length && "cartesian" === r[0].get("coord").type && 1 === i.length && o.indexOf(g, i[0]) > -1 && o.mix(e, { crosshairs: !0 }), e }, renderTooltip: function() {
                    var t = this;
                    if (!t.get("tooltip")) {
                        var e = t.get("chart"),
                            n = t.get("cfg"),
                            r = t._setTooltipCrosshairs();
                        n = o.mix({ plotRange: e.get("plotRange"), visible: !1, capture: !1 }, r, n);
                        var i = t._getCanvas();
                        if (!t.get("markerGroup")) {
                            var a = i.addGroup({ zIndex: 11, capture: !1, marker: u.tooltipMarker });
                            t.set("markerGroup", a) }
                        var s = i.addGroup(h, n);
                        i.sort(), t.set("tooltip", s), t._bindEvent() } }, showTooltip: function(t, e) {
                    var n = this;
                    if (e && t) {
                        var r = e.get("geoms"),
                            i = e.get("coord"),
                            a = [],
                            s = [];
                        if (o.each(r, function(e) {
                                var n = e.get("frames");
                                if (e.isShareTooltip()) {
                                    var r = [];
                                    o.each(n, function(n) {
                                        var i = e.findPoint(t, n);
                                        if (i) { r.push(i);
                                            var u = e.getTipItems(i);
                                            a = a.concat(u);
                                            var c = e.get("type");
                                            o.indexOf(f, c) !== -1 && (s = s.concat(u)) } }), r.length && e.setActiveByPoint(r[0]) } else {
                                    var i = e.getSingleShape(t, n);
                                    i && (a = e.getTipItems(i.get("origin")), e.setShapesActive([i])) } }), s.length && n._showMarkers(s, i), a.length) {
                            var u = a[0];
                            if (s.length) { t = u.point;
                                var c = o.isArray(t.x) ? t.x[t.x.length - 1] : t.x,
                                    l = o.isArray(t.y) ? t.y[t.y.length - 1] : t.y;
                                t = i.trans(c, l, 1) }
                            var h = u.title || u.name;
                            n._setTooltip(h, t, a) } } }, hideTooltip: function() {
                    var t = this,
                        e = t.get("tooltip"),
                        n = t.chart,
                        r = t.get("markerGroup"),
                        i = t._getCanvas();
                    t.set("prePoint", null), e.hide(), r.hide(), t._clearActive(), n.fire("tooltiphide", { tooltip: e }), i.draw() }, onMouseMove: function(t) {
                    var e = this.get("timeStamp"),
                        n = +new Date;
                    if (this.enable && t.view) {
                        var r = this,
                            i = { x: t.x, y: t.y };
                        n - e > 16 && (r.showTooltip(i, t.view), this.set("timeStamp", n)) } }, onMouseOut: function(t) {
                    var e = this,
                        n = e.get("tooltip"),
                        a = e._getCanvas();
                    t && t.target !== a || t && t.toElement && n.get("custom") && (r(t.toElement, "ac-tooltip") || i(t.toElement, "ac-tooltip")) || e.hideTooltip() }, isInFacet: function(t, e) {
                    var n = t.view.get("coord"),
                        r = n.invert(e);
                    return r.x >= 0 && r.y >= 0 }, clear: function() {
                    var t = this,
                        e = t.get("tooltip"),
                        n = t.get("markerGroup");
                    e && e.remove(), n && n.remove(), t.set("tooltip", null), t.set("markerGroup", null), t._offEvent() } }), t.exports = p },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = t.get("el");
                e.style.position = "absolute", e.style.top = 0, e.style.left = 0 }

            function i(t, e) {
                var n = new h(t);
                return e && r(n), n.set("fontFamily", p.fontFamily), n }

            function a(t, e, n) {
                var r = (t - e) / (n - e);
                return r >= 0 && r <= 1 }

            function s(t, e) {
                var n = t.type,
                    r = !1;
                if ("theta" === n) {
                    var i = t.get("start"),
                        s = t.get("end");
                    r = a(e.x, i.x, s.x) && a(e.y, i.y, s.y) } else {
                    var o = t.invert(e);
                    r = o.x >= 0 && o.y >= 0 && o.x <= 1 && o.y <= 1 }
                return r }

            function o(t) {
                var e = ["polar", "plus", "theta"];
                return g.inArray(e, t.type) }

            function u(t) {
                var e = t.coordCfg;
                return !(e && !g.isNull(e.startAngle) && !g.isNull(e.endAngle) && e.endAngle - e.startAngle < 2 * Math.PI) }

            function c(t, e) {
                return function(n) {
                    var r = this;
                    e && (n = e);
                    var i = new x({ chart: r, type: t, adjusts: n });
                    return r._addLayer(i), i } }
            var l = n(26),
                h = n(11),
                f = n(2),
                g = n(1),
                p = n(6),
                v = n(260),
                d = n(85),
                x = n(265),
                m = n(266),
                y = ["left", "top", "bottom", "right"],
                _ = h.Components,
                S = _.Plot,
                w = function A(t) { A.superclass.constructor.call(this, t), this._init() };
            w.ATTRS = { id: null, width: null, height: null, data: null, plotCfg: null, facetCfg: null, forceFit: !1, layers: [], views: [], geoms: [], filters: {}, scales: {} }, g.extend(w, l), g.augment(w, { _init: function() { this.set("plotCfg", g.mix({}, p.plotCfg, this.get("plotCfg"))), this.set("facetCfg", g.mix({}, p.facetCfg, this.get("facetCfg")));
                    var t = this.get("data"),
                        e = this.get("forceFit");
                    this._initData(t), this._initDomContainer(), e && this._initForceFit(), this._initCanvas(), this._initPlot(), this._initAssists(), this.set("geoms", []), this.set("layers", []), this.set("views", []), this.set("scales", {}), this.set("axisCfg", {}), this.set("filters", {}) }, _initForceFit: function() {
                    var t = this.get("container"),
                        e = g.getWidth(t);
                    this.set("width", e), window.addEventListener("resize", g.wrapBehavior(this, "_initForceFitEvent")) }, _initForceFitEvent: function() {
                    var t = setTimeout(g.wrapBehavior(this, "forceFit"), 200);
                    clearTimeout(this.get("resizeTimer")), this.set("resizeTimer", t) }, forceFit: function() {
                    var t = this.get("container"),
                        e = g.getWidth(t),
                        n = this.get("height");
                    e !== this.get("width") && this.changeSize(e, n) }, _initDomContainer: function() {
                    var t = this.get("id"),
                        e = document.getElementById(t),
                        n = this.get("container");
                    if (!e && !n) throw new Error("please specify the canvas container Id !");
                    if (e && n) throw new Error('please specify the "container" or "id" property !');
                    if (!n) {
                        var r = g.guid("g-chart");
                        n = g.createDom("<div></div>"), n.id = r, e.appendChild(n) }
                    this.set("container", n) }, _initCanvas: function() {
                    var t = this.get("width"),
                        e = this.get("height"),
                        n = this.get("container"),
                        r = { width: t, height: e, containerDOM: n, capture: !1 },
                        a = i(r, !1),
                        s = i(r, !0),
                        o = i(r, !0);
                    this.set("backCanvas", a), this.set("canvas", s), this.set("frontCanvas", o) }, _initPlot: function() {
                    var t = this.get("canvas"),
                        e = t.addGroup(),
                        n = this.get("plotCfg"),
                        r = this.get("backCanvas"),
                        i = r.addGroup(S.Back, n),
                        a = i.get("plotRange"),
                        s = r.addGroup();
                    this.set("backPlotBg", i), this.set("plotRange", a), this.set("plotContainer", e), this.set("backPlot", s) }, _initAssists: function() {
                    var t = new v({ chart: this });
                    t.initAssists() }, _initData: function(t) { t && (t instanceof f || (t = new f(t)), this.set("data", t)) }, _initFacets: function(t, e, n) {
                    var r = this.get("filters");
                    t = n.filterData(t, r, e);
                    var i = this.get("facetCfg");
                    i.plotRange = this.get("plotRange"), i.facetTitle = g.mix({}, p.facetCfg.facetTitle, i.facetTitle);
                    var a = this.get("facetAssist");
                    a.facetCfg = i;
                    var s = a.createFacets(t);
                    return s }, _addLayer: function(t) { this.get("layers").push(t) }, _clearInner: function() {
                    var t = this.get("geoms");
                    return g.each(t, function(t) { t.destroy() }), this.set("geoms", []), this.set("views", []), this.set("facets", []), this.get("legendAssist").reset(), this.get("plotContainer").clear(), this.get("backPlot").clear(), this.get("tooltipAssist").clear(), this.get("frontCanvas").clear(), this }, _trainScales: function(t, e) {
                    var n = this.get("scales"),
                        r = [];
                    g.each(n, function(t) { e(t) && r.push(t) });
                    var i = this.get("scaleAssist");
                    i.trainScales(t, r) }, _trainLinearScales: function(t) { this._trainScales(t, function(t) {
                        return t.isLinear }) }, _trainCatScales: function(t) {
                    var e = this,
                        n = e.get("filters");
                    e._trainScales(t, function(t) {
                        return t.isCategory && !n[t.dim] }) }, _getYScale: function() {
                    var t = this,
                        e = t.get("geoms"),
                        n = [];
                    return g.each(e, function(t) {
                        var e = t.getYScale();
                        e && g.indexOf(n, e) === -1 && n.push(e) }), n }, _renderLegends: function() {
                    var t = this.get("legendAssist"),
                        e = this.get("geoms"),
                        n = this.get("filters"),
                        r = this._getYScale(),
                        i = [];
                    if (g.each(e, function(e) {
                            var r = e.getLegendAttr();
                            g.each(r, function(r) {
                                var a = r.type,
                                    s = r.getScale(a);
                                if ("identity" !== s.type && g.indexOf(i, s) === -1) { i.push(s);
                                    var o;
                                    n && n[s.dim] && (o = n[s.dim]), t.addLegend(s, r, e, o) } }) }), !i.length && r.length > 1) {
                        var a = [];
                        g.each(r, function(t) { g.each(e, function(e) {
                                if (e.getYScale() === t) {
                                    var n = { name: t.alias || t.dim, color: e.getDefaultValue("color") };
                                    return a.push(n), !1 } }) }), t.addMixedLegend(a) }
                    t.alignLegends() }, _renderTooltip: function() {
                    var t = this.get("tooltipAssist");
                    t.renderTooltip() }, source: function(t, e) {
                    if (e) {
                        var n = this.get("scaleAssist"),
                            r = this.get("facetCfg");
                        n.defs = e, r.defs = e }
                    return this._initData(t), this }, coord: function(t, e) {
                    var n = this.get("coordAssist");
                    return n.type = t, n.coordCfg = e, n.resetActions(), n }, facet: function(t, e) {
                    var n = this.get("facetCfg");
                    return n.dims = g.isString(t) ? [t] : t, g.mix(n, e), this }, axis: function(t, e) {
                    var n = this.get("axisAssist");
                    if (t === !1) n.enable = !1;
                    else {
                        var r = n.axisCfg;
                        n.enable = !0, r[t] = e }
                    return this }, legend: function(t, e) {
                    var n = this.get("legendAssist"),
                        r = n.legendCfg;
                    return n.enable = !0, g.isBoolean(t) ? n.enable = t : g.inArray(y, t) ? n.position = t : g.isObject(t) ? (r = t, n.position = r.position ? r.position : "right") : r[t] = e, n.legendCfg = r, this }, tooltip: function(t, e) {
                    var n = this.get("tooltipAssist");
                    return g.isObject(t) && (e = t, t = !0), n.enable = t, n.cfg = e, this }, guide: function() {
                    return this.get("guideAssist") }, animate: function(t) {
                    return this.set("animate", t), this }, filter: function(t, e) {
                    var n = this.get("filters");
                    return n[t] = e, this.set("filters", n), this }, _processScales: function() {
                    var t = this,
                        e = t.get("coordAssist"),
                        n = t.get("views")[0],
                        r = n.getXScale(),
                        i = n.getYScales(),
                        a = [];
                    r && a.push(r), a = a.concat(i);
                    var s = o(e) && u(e);
                    g.each(a, function(t) {
                        if (t.isCategory) {
                            var n, r = t.values.length;
                            if (1 === r) n = [.5, 1];
                            else {
                                var i = 1,
                                    a = 0;
                                s ? e.hasAction("transpose") ? (i = p.widthRatio.multiplePie, a = 1 / r * i, n = [a / 2, 1 - a / 2]) : n = [0, 1 - 1 / r] : (i = p.widthRatio.column, a = 1 / r * i, n = [a, 1 - a]) }
                            t.range = n } }) }, _createView: function(t) {
                    var e = this,
                        n = new m({ index: t.index, data: t.frame, region: t.region, layers: e.get("layers"), coordAssist: e.get("coordAssist"), axisAssist: e.get("axisAssist"), guideAssist: e.get("guideAssist"), tooltipMap: e.get("tooltipAssist").cfg && e.get("tooltipAssist").cfg.map });
                    t.view = n;
                    var r = n.get("coord");
                    return "mirror" === t.type && (1 === t.rows ? (r.transpose(), 0 === t.colIndex && r.scale(-1, 1)) : 1 === t.rowIndex && r.scale(1, -1)), n }, render: function() {
                    var t = this,
                        e = t.get("scaleAssist"),
                        n = t.get("data"),
                        r = t.get("scales");
                    n = e.processCatScale(n, r), t.set("data", n);
                    var i, a = t._initFacets(n, r, e),
                        s = [],
                        o = [],
                        u = t.get("views");
                    return g.each(a, function(e) {
                        var n = t._createView(e);
                        u.push(n), s = s.concat(n.get("data")), o = o.concat(n.get("geoms")) }), t.set("facets", a), t.set("views", u), t.set("geoms", o), i = f.forceMerge.apply(null, s), t._trainCatScales(i), t._processScales(), s = [], g.each(u, function(t) { t.adjustData(), s = s.concat(t.get("data")) }), i = f.forceMerge.apply(null, s), t._trainLinearScales(i), t.fire("beforepaint", { chart: t }), g.each(u, function(t) { t.render() }), t.fire("afterpaint"), t._renderLegends(), t._renderTooltip(), t.get("plotContainer").sort(), t.get("backCanvas").draw(), t.get("canvas").draw(), t.get("frontCanvas").draw(), t }, clear: function() {
                    return this.get("guideAssist").clear(), this.set("layers", []), this.set("scales", {}), this.set("filters", {}), this._clearInner(), this.get("backCanvas").draw(), this.get("canvas").draw(), this.get("frontCanvas").draw(), this }, destroy: function() {
                    if (!this.destroyed) {
                        var t = this.get("container");
                        this.fire("destroy"), this.clear(), this.get("backCanvas").destroy(), this.get("canvas").destroy(), this.get("frontCanvas").destroy(), this._attrs = {}, this.events = {}, this.destroyed = !0, t.parentNode.removeChild(t), window.removeEventListener("resize", g.getWrapBehavior(this, "_initForceFitEvent")) } }, repaint: function() {
                    var t = this.get("animate");
                    return t !== !1 && this.animate(!1), this._clearInner(), this.render(), t !== !1 && this.animate(t), this }, changeData: function(t) {
                    var e = this.get("scales"),
                        n = this.get("scaleAssist");
                    return this._initData(t), t = this.get("data"), n.resetScales(t, e), this.repaint(), this }, changeSize: function(t, e) {
                    var n = this.get("backCanvas"),
                        r = this.get("canvas"),
                        i = this.get("frontCanvas");
                    n.changeSize(t, e), r.changeSize(t, e), i.changeSize(t, e), this.set("width", t), this.set("height", e);
                    var a = this.get("backPlotBg");
                    return a.repaint(), this.repaint(), this }, getFacets: function() {
                    return this.get("facets") }, getGeoms: function() {
                    return this.get("geoms") }, getViews: function() {
                    return this.get("views") }, getScale: function(t) {
                    var e = this.get("scales");
                    return e[t] }, getViewByPoint: function(t) {
                    var e, n = this.get("facets");
                    return g.each(n, function(n) {
                        var r = n.view,
                            i = r.get("coord");
                        if (s(i, t)) return e = r, !1 }), e }, showTooltip: function(t) {
                    var e = this,
                        n = e.getViewByPoint(t);
                    if (n) {
                        var r = e.get("tooltipAssist");
                        r.showTooltip(t, n) }
                    return e }, hideTooltip: function() {
                    var t = this.get("tooltipAssist");
                    t.hideTooltip() }, getTooltipItems: function(t) {
                    var e = this,
                        n = e.getViewByPoint(t),
                        r = [];
                    if (n) {
                        var i = n.get("geoms");
                        g.each(i, function(e) {
                            var n = e.getTipInfo(t);
                            r = r.concat(n) }) }
                    return r }, createScale: function(t, e) { e = e || this.get("data");
                    var n = this.get("scaleAssist"),
                        r = this.get("scales");
                    return r[t] || (r[t] = n.createScale(t, e)), r[t] }, col: function(t, e) {
                    var n = this,
                        r = n.get("scaleAssist"),
                        i = r.defs,
                        a = n.get("facetCfg");
                    return i[t] = e, a.defs = i, n }, getPosition: function(t) {
                    var e, n, r, i = this,
                        a = i.getViews(),
                        s = a[0],
                        o = s.get("coord"),
                        u = s.getXScale();
                    u && (r = u.dim, e = u.scale(t[r]));
                    var c = this.get("scales");
                    return g.each(c, function(e) {
                        if (e && e.dim !== r && t[e.dim]) {
                            var i = e.dim;
                            return void(n = e.scale(t[i])) } }), o.convert({ x: e, y: n }) }, legendVisible: function(t, e) {
                    var n = this,
                        r = n.get("legendAssist");
                    r.legendCfg = r.legendCfg, r.legendCfg[t] = e } });
            for (var b in d) d.hasOwnProperty(b) && (b = b.toLowerCase(), w.prototype[b] = c(b));
            var M = ["pointStack", "pointJitter", "pointDodge", "intervalStack", "intervalDodge", "intervalSymmetric", "areaStack", "schemaDodge"];
            g.each(M, function(t) {
                var e = t.replace(/([a-z](?=[A-Z]))/g, "$1 "),
                    n = e.split(" "),
                    r = n[0],
                    i = n[1]; "pointDodge" === t && (i = ["dodge", "stack"]), w.prototype[t] = c(r, i) }), t.exports = w },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(249),
                a = n(85),
                s = n(6),
                o = ["point", "path", "line", "interval", "area", "polygon", "schema", "heatmap", "contour"],
                u = function(t) { r.mix(this, t), this._init() };
            r.augment(u, { type: "point", adjusts: null, chart: null, attrs: null, shapeStyle: null, scales: null, tooltipDims: null, _init: function() { this.attrs = [], this.scales = {}, this.stats = [];
                    var t = this.adjusts;
                    t && (r.isArray(t) ? r.each(t, function(e, n) { t[n] = r.ucfirst(e) }) : t = r.ucfirst(t), this.adjusts = t) }, _createScale: function(t) {
                    var e = this.scales,
                        n = this.chart;
                    return e[t] || (e[t] = n.createScale(t)), e[t] }, _addStat: function(t) { this.stats.push(t) }, _addAttr: function(t, e) {
                    var n = this.attrs;
                    t = r.ucfirst(t);
                    var a = i[t],
                        s = new a(e);
                    n.push(s) }, _getDefaultShapes: function() {
                    var t = this.type,
                        e = /[A-Z].*$/;
                    return t = t.replace(e), s.shapes[t] }, _getDefaultColors: function() {
                    var t, e = this.adjusts;
                    return t = e && !r.isArray(e) ? this.type + e : this.type, s.colors[t] || s.colors["default"] }, _parseDims: function(t, e) {
                    var n, i = this,
                        a = i.chart;
                    if (t.isStat && (n = t, n.init(), t = n.getDims(), i._addStat(n)), r.isString(t) && t.indexOf("+") !== -1) {
                        var s = [],
                            o = a.get("scaleAssist"),
                            u = t.replace(/\s+/g, "").split("*");
                        r.each(u, function(t) {
                            var e = t.replace(/\(|\)|\s+/g, "").split("+"),
                                n = e.join("+");
                            s.push(n), e.length > 1 && (o.defs[n] = { dims: e }) }), t = s } else r.isString(t) && t.indexOf("*") !== -1 ? t = t.replace(/\s+/g, "").split("*") : (r.isNumber(t) || r.isString(t)) && (t = [t]);
                    var c = a.get("coordAssist"); "position" === e && "theta" === c.type && "interval" === i.type && "Stack" === i.adjusts && t.unshift("..pieX");
                    var l = [];
                    return r.each(t, function(t) {
                        var e = i._createScale(t);
                        l.push(e) }), { dims: t, stat: n, scales: l } }, createGeom: function() {
                    var t = this.type;
                    if (r.inArray(o, t)) return t = r.ucfirst(t), new a[t]({ type: this.type, chart: this.chart, attrs: this.attrs, stats: this.stats, scales: this.scales, shapeStyle: this.shapeStyle, tooltipDims: this.tooltipDims, adjusts: this.adjusts });
                    throw new Error(t + " is not supported!") }, position: function(t) {
                    var e = this._parseDims(t, "position");
                    return this._addAttr("position", { scales: e.scales, stat: e.stat }), this }, color: function(t, e) {
                    var n = this._parseDims(t),
                        i = { scales: n.scales, stat: n.stat };
                    return "heatmap" !== this.type || e || (e = s.heatmapColors), r.isFunction(e) ? i.callback = e : r.isArray(e) ? i.colors = e : e ? i.calType = e : i.colors = this._getDefaultColors(), this._addAttr("color", i), this }, shape: function(t, e) {
                    var n = this._parseDims(t),
                        i = { scales: n.scales, stat: n.stat };
                    return r.isFunction(e) ? i.callback = e : i.shapes = e || this._getDefaultShapes(), this._addAttr("shape", i), this }, opacity: function(t, e) {
                    var n = this._parseDims(t),
                        i = { scales: n.scales, stat: n.stat, callback: r.isFunction(e) ? e : null };
                    return this._addAttr("opacity", i), this }, label: function(t, e, n) {
                    var i = this._parseDims(t);
                    return r.isObject(e) && (n = e, e = null), this._addAttr("label", { scales: i.scales, cfg: n, callback: e, stat: i.stat }), this }, size: function(t, e, n) {
                    var i = this._parseDims(t),
                        a = { scales: i.scales, stat: i.stat, min: r.isNull(n) ? 1 : n };
                    return r.isFunction(e) ? a.callback = e : a.max = e || 10, this._addAttr("size", a), this }, tooltip: function(t) {
                    var e = this._parseDims(t);
                    return this.tooltipDims = e.dims, this }, style: function(t) {
                    return this.shapeStyle = t, this } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(26),
                a = n(2),
                s = function o(t) { o.superclass.constructor.call(this, t), this._init() };
            s.ATTRS = { index: null, data: null, region: null, geoms: null, coord: null, layers: null, coordAssist: null, axisAssist: null, guideAssist: null, tooltipMap: null }, r.extend(s, i), r.augment(s, { _init: function() {
                    var t = this._createCoord();
                    this.set("coord", t);
                    var e = this.get("data"),
                        n = this._createGeoms(),
                        i = [];
                    r.each(n, function(n) {
                        var r = n.processData(e, t);
                        n.set("frames", r), i = i.concat(r) });
                    var s = a.forceMerge.apply(null, i);
                    this.set("data", s) }, adjustData: function() {
                    var t = this,
                        e = t.get("geoms"),
                        n = [];
                    r.each(e, function(t) {
                        var e = t.get("frames");
                        e = t.numbericFrames(e), e = t.processAdjust(e), t.set("frames", e), n = n.concat(e) });
                    var i = a.forceMerge.apply(null, n);
                    t.set("data", i) }, _createCoord: function() {
                    var t = this.get("coordAssist"),
                        e = this.get("region"),
                        n = e.start,
                        r = e.end;
                    return t.createCoord(n, r) }, _createGeoms: function() {
                    var t = this,
                        e = t.get("layers"),
                        n = [];
                    return r.each(e, function(e) {
                        var r = e.createGeom(),
                            i = t.get("tooltipMap");
                        i && r.set("tooltipMap", i), n.push(r) }), t.set("geoms", n), n }, _renderAxis: function() {
                    var t = this,
                        e = t.get("axisAssist"),
                        n = t.getXScale(),
                        r = t.getYScales();
                    e.createAxis(t, n, r) }, _renderGuide: function() {
                    var t = this.get("guideAssist");
                    if (t.guides.length) {
                        var e = this.get("coord"),
                            n = this.getXScale(),
                            r = this.getYScales()[0];
                        t.setScale(n, r), t.paint(e) } }, render: function() {
                    var t = this,
                        e = t.get("geoms"),
                        n = t.get("coord");
                    r.each(e, function(t) { t.paint(n, t.get("frames"), function(e, n) {
                            if (t.isShareTooltip()) {
                                var i = [],
                                    s = t.getXScale().dim;
                                r.each(n, function(t) { i.push(a.sort(t, s)) }), t.set("frames", i) } }) }), t._renderGuide();
                    var i = t.getXScale();
                    i && t._renderAxis() }, getXScale: function() {
                    var t = this.get("geoms"),
                        e = null;
                    return t.length && (e = t[0].getXScale()), e }, getYScales: function() {
                    var t = this.get("geoms"),
                        e = [];
                    return r.each(t, function(t) {
                        var n = t.getYScale();
                        n && r.indexOf(e, n) === -1 && e.push(n) }), e } }), t.exports = s },
        function(t, e, n) { "use strict";

            function r(t, e, n) {
                return { x: t.x + e * Math.cos(n), y: t.y + e * Math.sin(n) } }
            var i = n(1),
                a = n(44),
                s = n(2),
                o = n(33),
                u = function c(t) { c.superclass.constructor.call(this, t) };
            i.extend(u, a), i.augment(u, { getRegion: function(t, e) {
                    var n = this,
                        i = n.plotRange,
                        a = Math.min(i.getWidth(), i.getHeight()) / 2,
                        s = 2 * Math.PI / t,
                        o = -1 * Math.PI / 2 + s * e,
                        u = a / (1 + 1 / Math.sin(s / 2)),
                        c = n.getCenter(),
                        l = r(c, a - u, o);
                    return n.getFacetRegion(l, u) }, getFacetRegion: function(t, e) {
                    var n = 3 * Math.PI / 4,
                        i = Math.PI * -1 * 1 / 4;
                    return { start: r(t, e, n), end: r(t, e, i) } }, getCenter: function() {
                    var t = this,
                        e = t.plotRange,
                        n = e.tl,
                        r = e.getWidth(),
                        i = e.getHeight(),
                        a = { x: n.x + r / 2, y: n.y + i / 2 };
                    return a }, generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        r = n[0];
                    if (!r) throw new Error("Please specify for the field for facet!");
                    var a = e.getDimValues(r, t),
                        u = a.length,
                        c = [],
                        l = 0;
                    return i.each(a, function(n, i) {
                        var h = [{ dim: r, value: n, values: a }],
                            f = e.getFilter(h),
                            g = s.filter(t, f),
                            p = new o({ type: e.type, xValue: n, xDim: r, colIndex: i, cols: u, rows: 1, rowIndex: 0, frame: g, region: e.getRegion(u, i), index: l++ });
                        c.push(p) }), c } }), t.exports = u },
        function(t, e, n) { "use strict";
            var r = n(44);
            r.Facet = n(33), r.Rect = n(84), r.List = n(83), r.Circle = n(267), r.Tree = n(270), r.Mirror = n(269), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(83),
                a = function s(t) { s.superclass.constructor.call(this, t), this._init() };
            r.extend(a, i), r.augment(a, { type: "mirror", transpose: !1, drawTitles: function(t, e) {
                    var n = this,
                        i = n.dims,
                        a = n.transpose ? "col" : "row";
                    r.each(t, function(t) { n.drawFacetTitle(a, t, e) }), n.drawDimTitle(a, i[0], e) }, _init: function() {
                    var t = this,
                        e = t.dims,
                        n = e[0];
                    if (!n) throw new Error("Please specify for the field for facet!");
                    t.transpose ? (t.cols = 2, t.rows = 1) : (t.cols = 1, t.rows = 2) }, getRegion: function(t, e, n, r) {
                    var i, a, s = this,
                        o = s.plotRange,
                        u = s.margin,
                        c = o.tl,
                        l = o.br;
                    e > 1 ? (i = (l.x - c.x - u) / e, a = l.y - c.y) : (i = l.x - c.x, a = (l.y - c.y - u) / t);
                    var h = { x: c.x + i * n + n * u, y: c.y + a * (r + 1) + u * r },
                        f = { x: h.x + i, y: h.y - a };
                    return { start: h, end: f } } }), t.exports = a },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(44),
                a = n(2),
                s = n(33),
                o = function u(t) { u.superclass.constructor.call(this, t) };
            r.extend(o, i), r.augment(o, {
                rootTitle: "",
                line: { stroke: "red" },
                smooth: !1,
                generateFacets: function(t) {
                    var e = this,
                        n = e.dims;
                    if (!n.length) throw new Error("Please specify for the fields for facet!");
                    var r = [],
                        i = e.getRootFacet(t);
                    return r.push(i), i.children = e.getChildFacets(t, 1, r), e.setRegion(r), r },
                getRows: function() {
                    return this.dims.length + 1 },
                drawTitles: function(t, e) {
                    var n = this;
                    n.drawLines(t, e), r.each(t, function(t) { n.drawFacetTitle("col", t, e) }) },
                drawLines: function(t, e) {
                    var n = this,
                        i = e.addGroup();
                    r.each(t, function(t) {
                        if (!n.isLeaf(t)) {
                            var e = t.children;
                            n._addFacetLines(t, e, i) } }) },
                _addFacetLines: function(t, e, n) {
                    var i = this,
                        a = t.region,
                        s = { x: a.start.x + (a.end.x - a.start.x) / 2, y: a.start.y };
                    r.each(e, function(t) {
                        var e = t.region,
                            r = { x: e.start.x + (e.end.x - e.start.x) / 2, y: e.end.y },
                            a = { x: s.x, y: s.y + (r.y - s.y) / 2 },
                            o = { x: r.x, y: a.y };
                        i._drawLine([s, a, o, r], n) }) },
                _getPath: function(t) {
                    var e = this,
                        n = "",
                        i = e.smooth;
                    if (i) {
                        var a = [];
                        a.push(["M", t[0].x, t[0].y]), a.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]), n = a.join(" ") } else r.each(t, function(t, e) {
                        var i = 0 === e ? "M {x} {y}" : "L {x} {y}";
                        n += r.substitute(i, t) });
                    return n },
                _drawLine: function(t, e) {
                    var n = this,
                        i = n._getPath(t),
                        a = n.line;
                    e.addShape("Path", { attrs: r.mix({ path: i }, a) }) },
                getRootFacet: function(t) {
                    var e = this,
                        n = new s({ type: e.type, rows: e.getRows(), rowIndex: 0, colIndex: 0, xValue: e.rootTitle, frame: t, index: 0 });
                    return n },
                getChildFacets: function(t, e, n) {
                    var i = this,
                        o = [],
                        u = i.dims,
                        c = u.length;
                    if (c < e) return [];
                    var l = u[e - 1],
                        h = i.getDimValues(l, t);
                    return r.each(h, function(r, u) {
                        var c = [{ dim: l, value: r, values: h }],
                            f = i.getFilter(c),
                            g = a.filter(t, f);
                        if (g.rowCount()) {
                            var p = new s({ type: i.type, xValue: r, xDim: l, colIndex: u, rows: i.getRows(), rowIndex: e, frame: g, children: i.getChildFacets(g, e + 1, n), index: n.length });
                            o.push(p), n.push(p) } }), o },
                getFacetsByLevel: function(t, e) {
                    var n = [];
                    return r.each(t, function(t) { t.rowIndex === e && n.push(t) }), n },
                getRegion: function(t, e, n, r) {
                    var i = this,
                        a = i.plotRange,
                        s = i.margin,
                        o = a.bl,
                        u = a.tr,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = { x: o.x + c * n + s, y: o.y + l * r - s },
                        f = { x: h.x + c - s, y: h.y + 2 * l / 3 + s };
                    return { start: h, end: f } },
                getRegionIndex: function(t) {
                    var e = t[0],
                        n = t[t.length - 1];
                    return (n.colIndex - e.colIndex) / 2 + e.colIndex },
                setRegion: function(t) {
                    var e = this;
                    e.forceColIndex(t), r.each(t, function(t) { t.region = e.getRegion(t.rows, t.cols, t.colIndex, t.rows - t.rowIndex - 1) })
                },
                isLeaf: function(t) {
                    return !t.children || !t.children.length },
                forceColIndex: function(t) {
                    var e = this,
                        n = [],
                        i = 0;
                    r.each(t, function(t) { e.isLeaf(t) && (n.push(t), t.colIndex = i, i++) }), r.each(n, function(t) { t.cols = n.length });
                    for (var a = e.dims.length, s = a - 1; s >= 0; s--)
                        for (var o = e.getFacetsByLevel(t, s), u = 0; u < o.length; u++) {
                            var c = o[u];
                            e.isLeaf(c) || (c.originColIndex = c.colIndex, c.colIndex = e.getRegionIndex(c.children), c.cols = n.length) } }
            }), t.exports = o
        },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(11),
                a = n(92),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            s.ATTRS = { gemo: null }, r.extend(s, i.Group), r.mixin(s, [a.Group]), r.augment(s, { isItemActived: function(t) {
                    return t.get("actived") }, setItemActived: function(t, e) { e ? t.set("actived", !0) : t.set("actived", !1) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(34),
                a = n(2),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, i), r.augment(s, { marginRatio: .5, dodgeRatio: .5, getDistribution: function(t) {
                    var e = this,
                        n = e.adjFrames,
                        i = {};
                    return r.each(n, function(e, n) {
                        var s = a.values(e, t);
                        s.length || s.push(0), r.each(s, function(t) { i[t] || (i[t] = []), i[t].push(n) }) }), i }, adjustDim: function(t, e, n, i, a) {
                    var s = this,
                        o = s.getDistribution(t),
                        u = s.groupData(n, t);
                    r.each(u, function(n, i) { i = parseFloat(i);
                        var u;
                        u = 1 === e.length ? { pre: -1, next: 1 } : s.getAdjustRange(t, i, e), r.each(n, function(e) {
                            var n = e[t],
                                i = o[n],
                                c = r.indexOf(i, a);
                            e[t] = s.getDodgeOffset(u, c, i.length) }) }) }, getDodgeOffset: function(t, e, n) {
                    var r, i = this,
                        a = t.pre,
                        s = t.next,
                        o = s - a,
                        u = o * i.dodgeRatio / n,
                        c = i.marginRatio * u;
                    return r = .5 * (o - n * u - (n - 1) * c) + ((e + 1) * u + e * c) - .5 * u - .5 * o, (a + s) / 2 + r } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(34);
            r.Dodge = n(272), r.Jitter = n(274), r.Stack = n(275), r.Symmetric = n(276), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(34),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { getAdjustOffset: function(t, e) {
                    var n = Math.random(),
                        r = e - t,
                        i = .05 * r;
                    return t + i + .9 * r * n }, _adjustGroup: function(t, e, n, i) {
                    var a = this,
                        s = a.getAdjustRange(e, n, i);
                    r.each(t, function(t) { t[e] = a.getAdjustOffset(s.pre, s.next) }) }, adjustDim: function(t, e, n) {
                    var i = this,
                        a = i.groupData(n, t);
                    r.each(a, function(n, r) { r = parseFloat(r), i._adjustGroup(n, t, r, e) }) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(34),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, a), r.augment(s, { height: null, size: 10, adjustNames: ["y"], processOneDimStack: function(t) {
                    for (var e = this, n = e.xDim, r = e.yDim || "y", a = e.height, s = {}, o = [], u = 0; u < t.length; u++) {
                        for (var c = t[u].toJSON(), l = 0; l < c.length; l++) {
                            var h = c[l],
                                f = h.size || e.size,
                                g = 2 * f / a,
                                p = h[n];
                            s[p] || (s[p] = g / 2), h[r] = s[p], s[p] += g }
                        o.push(new i(c)) }
                    return o }, processAdjust: function(t) {
                    var e = this;
                    return t = e.yDim ? e.processStack(t) : e.processOneDimStack(t) }, processStack: function(t) {
                    for (var e = this, n = e.xDim, a = e.yDim, s = t.length, o = [], u = {}, c = [], l = 0; l < s; l++) {
                        for (var h = t[l].toJSON(), f = 0; f < h.length; f++) {
                            var g = h[f],
                                p = g[n],
                                v = g[a],
                                d = p.toString();
                            v = r.isArray(v) ? v[1] : v, u[d] || (u[d] = 0), g[a] = [u[d], v + u[d]], u[d] += v }
                        o.push(h) }
                    return r.each(o, function(t) {
                        var e = new i(t);
                        c.push(e) }), c } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(34),
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, a), r.augment(s, { adjustNames: ["y"], _getMax: function(t) {
                    var e = this,
                        n = e.mergeFrame,
                        r = i.max(n, t);
                    return r }, adjustDim: function(t, e, n) {
                    for (var a = this, s = a._getMax(t), o = 0; o < n.length; o++) {
                        var u, c = n[o],
                            l = c[t];
                        if (r.isArray(l)) { u = (s - l[l.length - 1]) / 2;
                            var h = [];
                            r.each(l, function(t) { h.push(u + t) }), c[t] = h } else u = (s - l) / 2, c[t] = [u, l + u] }
                    return new i(n) } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(95),
                i = n(1),
                a = {};
            a.getDefault = function(t) {
                var e = t.geom,
                    n = t.fn,
                    a = e.get("coord"),
                    s = r,
                    o = e.get("type"),
                    u = e.get("adjusts") || "";
                switch (o += u, a.type) {
                    case "cartesian":
                        switch (o) {
                            case "interval":
                            case "intervalStack":
                            case "intervalDodge":
                                s = a.isTransposed ? r.scaleX : r.scaleY;
                                break;
                            case "intervalSymmetric":
                                s = r.scaleX;
                                break;
                            default:
                                s = r.waves }
                        break;
                    case "polar":
                        switch (o) {
                            case "area":
                            case "areaStack":
                            case "interval":
                            case "intervalStack":
                            case "intervalDodge":
                                s = r.scaleXY;
                                break;
                            default:
                                s = r.angle }
                        break;
                    case "theta":
                        s = r.angle;
                        break;
                    case "plus":
                        s = r.scaleXY }
                var c = a.get("start"),
                    l = a.get("end"),
                    h = l.x - c.x,
                    f = c.y - l.y,
                    g = { group: e.get("group"), rect: { x: c.x, y: l.y, width: h, height: f }, before: n };
                return a.isPolar && i.mix(g, { circle: { center: a.getCenter(), startAngle: a.get("startAngle"), endAngle: a.get("endAngle"), r: Math.max(h, f) / 2 } }), new s(g) }, t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(88),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            a.ATTRS = { shapeType: "area", type: "area", shape: "area", trigger: !1 }, r.extend(a, i), r.augment(a, { getShapePointInfo: function(t) {
                    var e = this,
                        n = {};
                    return r.mix(n, t, { y0: e.getMinYPercent() }), n } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(133),
                a = n(2),
                s = n(57),
                o = function u(t) { u.superclass.constructor.call(this, t) };
            o.ATTRS = { type: "contour", shareTooltip: !1, allowActiveShape: !1 }, r.extend(o, s), r.augment(o, { framePreprocess: function(t) {
                    var e = this,
                        n = e.getXDim(),
                        s = e.getYDim(),
                        o = e.getZScale(),
                        u = o.dim,
                        c = a.merge.apply(null, t),
                        l = c.rowObject(0),
                        h = e.getData(c),
                        f = o.ticks,
                        g = i(h, f),
                        p = [];
                    return r.each(g, function(t) {
                        var e = t.path,
                            i = t.value,
                            o = [];
                        r.each(e, function(t) {
                            var e = r.mix({}, l);
                            e[n] = t[0], e[s] = t[1], e[u] = i, o.push(e) }), p.push(new a(o)) }), p }, getData: function(t) {
                    var e = this,
                        n = [],
                        i = e.getAttr("position"),
                        s = i.getDims(),
                        o = s[0],
                        u = s[1],
                        c = s[2],
                        l = a.values(t, o),
                        h = a.values(t, u),
                        f = 0,
                        g = 0,
                        p = null;
                    return r.each(l, function(t) { p && e.beql(p, t) || f++, p = t }), p = null, r.each(h, function(t) { p && e.beql(p, t) || g++, p = t }), t.each(function(t, e) {
                        var r = Math.floor(e / g),
                            i = Math.floor(e % g),
                            a = [t[o], t[u], t[c]];
                        Array.isArray(n[r]) || (n[r] = []), n[r][i] = a }), n }, getZScale: function() {
                    return this.getAttr("position").getScale("z") }, beql: function(t, e) {
                    return Math.abs(t - e) < 1e-6 }, getSingleShape: function(t) {
                    var e = this,
                        n = e.get("chart"),
                        r = n.getViews()[0].get("data"),
                        i = e.findPoint(t, r),
                        a = { origin: i, get: function(t) {
                                return this[t] } };
                    return a }, findPoint: function(t, e) {
                    var n, r = this,
                        i = r.get("coord"),
                        a = i.invert(t),
                        s = r.getXScale(),
                        o = s.dim,
                        u = r.getYScale(),
                        c = u.dim,
                        l = s.invert(a.x),
                        h = u.invert(a.y),
                        f = {};
                    return e.each(function(t) {
                        var e = (t[o] - l) * (t[o] - l) + (t[c] - h) * (t[c] - h);
                        (!n || e < n) && (n = e, f = t) }), f } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(143),
                a = n(22),
                s = n(6),
                o = function u(t) { u.superclass.constructor.call(this, t) };
            o.ATTRS = { type: "heatmap" }, r.extend(o, a), r.augment(o, { drawFrame: function(t) {
                    if (t.rowCount()) {
                        var e = this,
                            n = e.get("group"),
                            a = e.getHeatmapData(t),
                            o = e.getImageRegion(),
                            u = e.getZScale(),
                            c = t.rowObject(0).size,
                            l = e.getAttr("color"),
                            h = r.mix({ min: u.min, max: u.max, formatter: function(t) {
                                    return u.scale(t) } }, s.heatmap, o);
                        h.colors = [l.getMappingValue(0), l.getMappingValue(.25), l.getMappingValue(.5), l.getMappingValue(.75), l.getMappingValue(1)];
                        var f = c ? parseInt(c, 10) : e.getRadius();
                        f && (h.radius = f);
                        var g = new i(h),
                            p = g.getData(a),
                            v = document.createElement("canvas"),
                            d = v.getContext("2d");
                        v.width = o.width, v.height = o.height, d.putImageData(p, 0, 0);
                        var x = n.addShape("Image", { attrs: o });
                        x.attr("img", v) } }, getImageRegion: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.get("start"),
                        r = e.get("end"),
                        i = { x: n.x, y: r.y, width: r.x - n.x, height: n.y - r.y };
                    return i }, getTipTitle: function(t) {
                    var e, n = this,
                        r = n._getTipMapScale("title");
                    if (r) {
                        var i = t[r.dim];
                        e = r.getText(i) } else {
                        var a = n.getXScale(),
                            s = n.getYScale(),
                            o = a.getText(t[a.dim]),
                            u = s.getText(t[s.dim]);
                        e = "( " + o + ", " + u + " )" }
                    return e }, getHeatmapData: function(t) {
                    var e = this,
                        n = [],
                        r = e.getAttr("color"),
                        i = r.getDims(),
                        a = i[0];
                    return t.each(function(t) {
                        var e = [t.x, t.y, t[a]];
                        n.push(e) }), n }, getZScale: function() {
                    return this.getAttr("color").getScale("color") }, getRadius: function() {
                    var t = this,
                        e = t.getAttr("position"),
                        n = t.get("coord"),
                        r = e.stat,
                        i = null;
                    if (r) {
                        var a = r.bandWidth;
                        i = Math.min(n.getWidth(), n.getHeight()) * a }
                    return 2 * i }, findPoint: function(t, e) {
                    var n, r = this,
                        i = r.get("coord"),
                        a = i.invert(t),
                        s = r.getXScale(),
                        o = s.dim,
                        u = r.getYScale(),
                        c = u.dim,
                        l = s.invert(a.x),
                        h = u.invert(a.y),
                        f = {};
                    return e.each(function(t) {
                        var e = (t._origin[o] - l) * (t._origin[o] - l) + (t._origin[c] - h) * (t._origin[c] - h);
                        (!n || e < n) && (n = e, f = t) }), f } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(22),
                a = "_origin",
                s = function o(t) { o.superclass.constructor.call(this, t) };
            s.ATTRS = { type: "interval", shapeType: "interval", shape: "rect", animate: !0, lineToArc: !0, snapAll: !1 }, r.extend(s, i), r.augment(s, { _getShapeCfg: function(t, e) {
                    var n = this,
                        r = n.get("shapeObj"),
                        i = { color: t.color, size: t.size, opacity: t.opacity, isInCircle: n.isInCircle(), point: t, coord: n.get("coord") };
                    e && (i.nextPoint = e);
                    var a = r.getShapeCfg(t.shape, i);
                    return a.path = n.mappingPath(a.path), a }, _getNextPoint: function(t, e) {
                    var n = null,
                        i = e.index,
                        a = e.toJSON(),
                        s = this.get("frames");
                    if (r.isNull(a[t + 1])) {
                        if (!r.isNull(s[i + 1])) {
                            var o = s[i + 1],
                                u = o.toJSON();
                            n = u[0] } } else n = a[t + 1];
                    return n }, _addInterval: function(t) {
                    for (var e = this, n = e.get("group"), i = t.toJSON(), a = 0, s = i.length; a < s; a++) {
                        var o = i[a];
                        if ((!isNaN(o.x) || r.isArray(o.x)) && (!isNaN(o.y) || r.isArray(o.y))) {
                            var u;
                            if ("funnel" === o.shape || "pyramid" === o.shape) {
                                var c = e._getNextPoint(a, t);
                                u = e._getShapeCfg(o, c) } else u = e._getShapeCfg(o);
                            var l = n.addShape("Path", { attrs: u });
                            l.set("origin", o) } } }, drawFrame: function(t) {
                    var e = this;
                    t.rowCount() && e._addInterval(t) }, isShareTooltip: function() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.type,
                        r = t.get("shareTooltip");
                    return ("theta" === n || "polar" === n && e.isTransposed) && (r = !1), r }, getShapePointInfo: function(t) {
                    var e = this,
                        n = {},
                        i = t.size;
                    return (r.isNull(i) || i >= 1) && (i = e.getNormalizeSize()), r.mix(n, t, { y0: e.getMinYPercent(), size: i }), n }, allowSelected: function u() {
                    var t = this,
                        e = t.get("coord"),
                        n = e.type,
                        u = t.get("allowSelected");
                    return "theta" === n && (u = !0), u }, beforeChange: function() {
                    var t = this;
                    t.set("barWidth", null) }, framePreprocess: function(t) {
                    var e = this.get("coord"),
                        n = e.type;
                    if ("theta" === n || "polar" === n && e.isTransposed && "Stack" === this.adjusts) {
                        var i = [],
                            s = this.getYDim();
                        return r.each(t, function(t) {
                            var e = t.colArray(a);
                            e[0][s] > 0 && i.push(t) }), i }
                    return t } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(87),
                i = n(86),
                a = n(283),
                s = { getLabelsClass: function(t) {
                        var e = r;
                        return "polar" === t || "plus" === t ? e = i : "theta" === t && (e = a), e } };
            t.exports = s },
        function(t, e, n) { "use strict";

            function r(t) {
                return l.equal(t, -Math.PI / 2) || l.equal(t, Math.PI / 2) || l.equal(t, 3 * Math.PI / 2) }

            function i(t, e, n) {
                return { x: t.x + n * Math.cos(e), y: t.y + n * Math.sin(e) } }

            function a(t, e, n, r, i, a) {
                var s = Math.acos((r - e) / r),
                    o = a ? n - Math.PI + s : n - s;
                t.orignAngle = t.angle, t.angle = o, t.orignX = t.x, t.orignY = t.y, t.x = i.x + (r + 2.5) * Math.cos(t.angle), t.y = i.y + (r + 2.5) * Math.sin(t.angle), l.equal(o, -Math.PI / 2) ? t.x += g : l.equal(o, 3 * Math.PI / 2) ? t.x -= g : l.equal(o, Math.PI / 2) && (o >= t.orignAngle ? t.x += g : t.x -= g) }

            function s(t, e, n, r, i, s) {
                var o = parseInt(2 * e / s, 10),
                    u = t.y + e,
                    c = t.y - e;
                o < n.length && n.splice(o, n.length - o);
                for (var l, h, f, g = 0, p = n.length, v = 0, d = 0; d < p; d++) {
                    var x = n[d],
                        m = x.y;
                    h = p - d, l = i > 0 ? (u - m) / h : (m - c) / h, d > 0 && (v = i > 0 ? (m - c) / d : (u - m) / d);
                    var y;
                    if (y = i > 0 ? h < p ? m - n[d - 1].y : m - c : h < p - 1 ? n[d - 1].y - m : u - m, g = d, l < s) { 0 !== g && (g = d + 1);
                        break }(v > 0 && v < s || y > 0 && y < s) && (f = d) }
                if (f)
                    for (var _ = 0; _ <= f; _++) {
                        var S = _ * s;
                        a(n[_], S, r, e, t, !0) }
                var w = i < 0 && g <= p - 1 || i > 0 && g < p - 1;
                if (p > 1 && w) {
                    var b = 0 === g ? 0 : g - 1,
                        M = n[b],
                        A = M.y,
                        C = i > 0 ? u : c;
                    h = p - b - 1, l = Math.abs(C - A) / h, l < s && (l = s);
                    for (var k = p - 1; k >= b; k--) {
                        var P = (p - 1 - k) * l;
                        a(n[k], P, r, e, t, !1) }
                    for (var T = i > 0 ? c : u, I = !1, D = b - 1; D > 0; D--) {
                        var L = n[D];
                        if (!I && Math.abs(T - L.y) / (D + 1) < s && (I = !0), I) {
                            var R = Math.abs(n[D + 1].y - C) + s;
                            a(n[D], R, r, e, t) } } } }
            var o = n(1),
                u = n(86),
                c = n(24),
                l = n(4),
                h = n(6),
                f = 5,
                g = 1,
                p = function v(t) { v.superclass.constructor.call(this, t) };
            p.CFG = { labels: h.thetaLabels }, o.extend(p, u), o.augment(p, { adjustItems: function(t) {
                    var e = this,
                        n = e.getDefaultOffset();
                    return n > 0 && (t = e._adjustItems(t, n)), t }, _adjustItems: function(t) {
                    var e = this,
                        n = e.getDefaultOffset(),
                        r = [],
                        i = e.get("coord"),
                        a = i.getCenter(),
                        u = i.getRadius(),
                        c = u + n,
                        l = i.get("startAngle"),
                        h = e.get("labels").labelHeight,
                        f = [],
                        g = [];
                    if (o.each(t, function(t) { t.x > a.x ? f.push(t) : r.push(t) }), r.length) {
                        var p = l >= -Math.PI / 2 ? 3 * Math.PI / 2 : -Math.PI / 2;
                        s(a, c, r, p, -1, h) }
                    return f.length && s(a, c, f, Math.PI / 2, 1, h), g = g.concat(f, r) }, drawLines: function(t, e) {
                    var n = this,
                        r = n.getDefaultOffset();
                    r > 0 && o.each(t, function(t) { n.lineToLabel(t, e) }) }, lineToLabel: function(t, e) {
                    var n, a = this,
                        s = a.get("coord"),
                        u = s.getRadius(),
                        c = a.getDefaultOffset(),
                        h = a.get("labels"),
                        g = t.orignAngle || t.angle,
                        p = s.getCenter(),
                        v = i(p, g, u + f / 2),
                        d = h.labelHeight,
                        x = a.get("lineGroup"),
                        m = [],
                        y = r(t.angle),
                        _ = 1;
                    y && (c -= d / 2, l.equal(t.angle, Math.PI / 2) && (_ = -1)), m.push(["M", v.x, v.y]), n = i(p, g, u + c / 2);
                    var S = y ? t.y + d / 2 * _ : t.y;
                    m.push(["R", n.x, n.y, t.x, S]), m = o.path2Absolute(m), x || (x = a.addGroup({ elCls: "x-line-group" }), a.set("lineGroup", x)), x.addShape("path", { attrs: o.mix({ path: m, fill: null, stroke: t.color }, e) }) }, getLabelRotate: function(t, e) {
                    var n;
                    return e < 0 && (n = 180 * t / Math.PI, n > 90 && (n -= 180), n < -90 && (n += 180)), n }, getLabelAlign: function(t) {
                    var e, n = this,
                        r = n.get("coord"),
                        i = r.getCenter();
                    e = t.x === i.x ? "middle" : t.x > i.x ? "start" : "end";
                    var a = n.getDefaultOffset();
                    return a <= 0 && (e = "end" === e ? "start" : "end"), e }, getArcPoint: function(t) {
                    return t }, getPointAngle: function(t) {
                    var e, n, r = this,
                        i = r.get("coord");
                    e = { x: t.x[0], y: t.y[0] }, n = { x: t.x[1], y: t.y[1] };
                    var a = c.getPointAngle(i, e),
                        s = c.getPointAngle(i, n);
                    a >= s && (s += 2 * Math.PI);
                    var o = a + (s - a) / 2;
                    return o }, getCirclePoint: function(t, e) {
                    var n = this,
                        r = n.get("coord"),
                        i = r.getCenter(),
                        a = r.getRadius() + e;
                    return { x: i.x + a * Math.cos(t), y: i.y + a * Math.sin(t), angle: t, r: a } } }), t.exports = p },
        function(t, e, n) { "use strict";

            function r(t, e) {
                if (!t) return !0;
                if (t.length !== e.length) return !0;
                var n = !1;
                return i.each(e, function(e, r) {
                    if (e !== t[r]) return n = !0, !1 }), n }
            var i = n(1),
                a = Math.abs,
                s = function() {};
            s.ATTRS = { localRefresh: !1, allowActiveShape: !0, snapAll: !0, snapDistance: 10 }, i.augment(s, { setActiveByPoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        i = null;
                    if (!e.get("allowActiveShape")) return [];
                    if (e.isShareTooltip()) i = e._getSharedShapes(t, n);
                    else { i = [];
                        var a = e.getSingleShape(t);
                        a && i.push(a) }
                    var s = e.get("preShapes");
                    return r(s, i) && e.setShapesActive(i), e.set("preShapes", i), i }, _getSharedShapes: function(t) {
                    var e = this,
                        n = e.get("group"),
                        r = [];
                    if (n) {
                        var a = e.getXDim(),
                            s = n.get("children");
                        i.each(s, function(e) {
                            var n = e.get("origin");
                            n && n._origin[a] === t._origin[a] && r.push(e) }) }
                    return r }, getSingleShape: function(t) {
                    var e = this,
                        n = e.get("group"),
                        r = e.get("coord"),
                        a = n.get("canvas"),
                        s = a.get("pixelRatio"),
                        o = null;
                    if (n) {
                        var u = n.get("children"),
                            c = [];
                        u.length > 30 ? i.each(u, function(n) {
                            var i = n.get("origin");
                            i && e.isSnapPoint(t, i, r) && c.push(n) }) : c = u;
                        for (var l = c.length - 1; l >= 0; l--) {
                            var h = c[l];
                            if (h.get("origin") && h.isHit(t.x * s, t.y * s)) { o = h;
                                break } } }
                    return o }, isSnapPoint: function(t, e, n) {
                    var r = this,
                        i = this.get("snapDistance"),
                        s = !1;
                    if (this.get("snapAll")) {
                        var o = n.trans(e.x, e.y, 1);
                        s = a(o.x - t.x) < i && a(o.y - t.y) < i } else {
                        var u = n.invert(t),
                            c = r.getXScale(),
                            l = c.dim,
                            h = c.translate(c.invert(u.x));
                        i = r.getXDistance(), s = a(h - e[l]) < i }
                    return s }, setShapesActive: function(t) {
                    var e = this;
                    if (e.get("allowActiveShape")) {
                        var n = e.get("coord"),
                            r = e.get("activeGroup"),
                            a = e.get("chart"),
                            s = a.get("frontCanvas");
                        r ? r.clear() : (r = s.addGroup(), e.set("activeGroup", r)), r.setMatrix(n.get("matrix").clone()), i.each(t, function(t) { e._activeShape(t, r) }), s.sort() } }, _activeShape: function(t, e) {
                    var n = this,
                        r = t.get("type"),
                        a = t.get("origin"),
                        s = a.shape || n.getDefaultValue("shape"),
                        o = n.get("shapeObj"),
                        u = o.getActiveCfg(s, a),
                        c = i.mix({}, t.__attrs, u, { fill: "white", "fill-opacity": .15, fillOpacity: .15 }),
                        l = e.addShape(r, { attrs: c });
                    l.setMatrix(t.getMatrix()), l.set("origin", a) }, clearShapeActived: function() {
                    var t = this,
                        e = t.get("activeGroup");
                    e && e.clear() } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(2),
                a = n(273),
                s = n(58),
                o = n(24),
                u = ["size", "shape", "color"],
                c = "_origin",
                l = ["Dodge", "Jitter", "Stack", "Symmetric"],
                h = function() {};
            h.ATTRS = { adjusts: null, hasShapePath: !0, lineToArc: !1 }, r.augment(h, { _getShapeScale: function() {
                    var t = this,
                        e = t.getAttr("shape"),
                        n = null;
                    return e && (n = e.getScale("shape")), n }, _getScale: function(t) {
                    var e = this,
                        n = e.get("scales"),
                        i = null;
                    return r.each(n, function(e) {
                        if (e.dim === t) return i = e, !1 }), i }, _getGroupScales: function() {
                    var t = this,
                        e = [];
                    return r.each(u, function(n) {
                        var i = t.getAttr(n);
                        if (i) {
                            var a = i.getScales();
                            r.each(a, function(t) { t.isCategory && r.indexOf(e, t) === -1 && e.push(t) }) } }), e }, _saveOriginData: function(t) {
                    return r.each(t, function(t) {
                        var e = t.toJSON();
                        t.addCol(c, e) }), t }, _setStatRange: function(t) {
                    var e = this,
                        n = t.getDims(),
                        i = [];
                    r.each(n, function(n) {
                        var r = e._getScale(n);
                        r.isCategory || "identity" === r.type || (isNaN(r.min) || isNaN(r.max) || t.setRange(n, { min: r.min, max: r.max }), "bin" === t.type && i.push(n)) }), i.length && (t.binDims = i) }, _execStat: function(t, e) {
                    var n = this,
                        r = n.getBinStat(t);
                    return r && n._setStatRange(r), (t.isRegression || t.setRange) && n._setStatRange(t), t.exec(e) }, _execStats: function(t) {
                    var e = this,
                        n = t;
                    if (r.isNull(t) || t && 0 === t.length) return n;
                    var a = e.get("attrs"),
                        s = e.getAttr("position"),
                        o = s.stat,
                        u = [];
                    if (r.each(a, function(t) { "position" !== t.type && t.stat && u.push(t.stat) }), o && (n = e._execStat(o, n)), u.length) {
                        var c = [],
                            l = s.getDims();
                        r.each(n, function(t) { c = c.concat(i.group(t, l)) }), n = c, r.each(u, function(t) { n = e._execStat(t, n) }), n = [i.merge.apply(this, n)] }
                    return n }, _execPointsMapping: function(t) {
                    var e = this,
                        n = t.colArray("points"),
                        a = e.getAttr("position"),
                        s = [];
                    return r.each(n, function(t) {
                        var e = new i(t);
                        e = a.mapping(e), e = e.toJSON(), s.push(e) }), t.colReplace("points", s), t }, mappingPath: function(t) {
                    var e = this,
                        n = e.get("coord");
                    return t = r.parsePathString(t), t = e.isInCircle() && e.get("lineToArc") ? o.convertPolarPath(t, n) : o.convertNormalPath(t, n) }, _groupFrames: function(t) {
                    var e = this,
                        n = [],
                        a = e._getGroupScales();
                    return r.each(a, function(t) { n.push(t.dim) }), i.group(t, n) }, _filterNullValue: function(t) {
                    var e = this.getXDim();
                    return i.filter(t, function(t) {
                        return r.isArray(t[e]) || !r.isNull(t[e]) }) }, _createFrame: function(t) {
                    var e = this,
                        n = e.get("scales"),
                        a = [],
                        s = [];
                    r.each(n, function(e) {
                        var n = e.dim;
                        a.push(n);
                        var r;
                        if (t.contains(n)) r = t.colArray(n);
                        else {
                            var o = e.value || 0;
                            r = i.Array.repeat(o, t.rowCount()) }
                        s.push(r) });
                    var o = new i(s, { names: a });
                    return o }, _normalizeFrame: function(t, e) {
                    var n = e.getDims(),
                        a = e.getNames(),
                        s = e.scaleCache;
                    r.each(a, function(e) { t.contains(e) && r.indexOf(n, e) === -1 && n.push(e) });
                    var o = t.cols(n);
                    o = o.toJSON(), r.each(s, function(t, e) { r.each(o, function(n) {
                            var i = t.dim,
                                a = n[i];
                            r.isArray(a) ? n[e] = r.map(a, function(e) {
                                return t.scale(e) }) : n[e] = t.scale(a) }) }), a = a.concat(n);
                    var u = new i(o, { names: a });
                    return u }, processData: function(t, e) {
                    var n = this;
                    n.set("coord", e);
                    var r = n._createFrame(t);
                    return r = n._filterNullValue(r), t = n._groupFrames(r), t = n._execStats(t), t = n._saveOriginData(t) }, numbericFrames: function(t) {
                    var e = this,
                        n = e.get("scales");
                    return r.each(t, function(t) { r.each(n, function(e) {
                            var n = e.dim;
                            if (e.isCategory || "time" === e.type) {
                                var i = t.colArray(n);
                                r.each(i, function(t, n) { i[n] = e.translate(t) }), t.colReplace(n, i) } }) }), t }, processAdjust: function(t) {
                    var e = this,
                        n = e.get("adjusts");
                    return r.isNull(n) || (n = r.isArray(n) ? n : n.split(","), r.each(n, function(n) {
                        if (!r.inArray(l, n)) throw new Error(r.ucfirst(n) + " is not supported, please use " + l.toString());
                        var i = {},
                            s = e.getYScale(),
                            o = e.getXScale();
                        if ("Dodge" === n) {
                            var u = [];
                            if (o.isCategory) u.push("x");
                            else {
                                if (s) throw new Error("dodge is not support linear attribute, please use category attribute!");
                                u.push("y") }
                            i = { xDim: e.getXDim(), yDim: s ? s.dim : null, adjustNames: u } } else if ("Stack" === n) {
                            var c = e.getDefaultValue("size") || 3;
                            if (i = { xDim: e.getXDim(), size: c }, s) i.yDim = e.getYDim();
                            else {
                                var h = e.get("coord");
                                i.height = h.getHeight() } } else i = { xDim: e.getXDim(), yDim: e.getYDim() };
                        var f = new a[n](i);
                        t = f.processAdjust(t) })), t }, framePreprocess: function(t) {
                    return t }, normalizeFrames: function(t) {
                    var e = this,
                        n = e.get("attrs"),
                        a = [];
                    return r.each(t, function(t) {
                        var s = [];
                        r.each(n, function(n) {
                            var r = e._normalizeFrame(t, n);
                            s.push(r) });
                        var o = i.combin.apply(null, s),
                            u = t.colArray(c);
                        o.addCol(c, u), a.push(o) }), a }, getShapePoints: function(t) {
                    var e = this,
                        n = e.get("shapeType"),
                        a = s.createShape(n),
                        o = [],
                        u = e._getShapeScale(),
                        c = "";
                    return e.set("shapeObj", a), r.each(t, function(t) {
                        var n = [];
                        t.each(function(t) { u && t.shape && (c = u.invert(t.shape));
                            var r = e.getShapePointInfo(t),
                                i = a.getShapePoints(r, c);
                            t.points = i, n.push(t) }), n = new i(n), o.push(n) }), o }, execMapping: function(t) {
                    var e = this,
                        n = e.get("attrs"),
                        i = [];
                    return r.each(t, function(t) {
                        var a = t;
                        r.each(n, function(t) {
                            if ("position" === t.type) {
                                var n = e.get("coord");
                                t.setCoord(n) }
                            a = t.mapping(a) }), e.get("hasShapePath") || (a = e._execPointsMapping(a)), i.push(a) }), i }, getShapePointInfo: function(t) {
                    return t }, sortFrame: function(t) {
                    var e = this.getXDim();
                    return i.sort(t, e) } }), t.exports = h },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = r.MatrixUtil,
                a = function() {};
            a.ATTRS = { allowSelected: !1 }, r.augment(a, { allowSelected: function() {
                    return this.get("allowSelected") }, getSelectShapes: function(t) {
                    var e = this,
                        n = e.get("container"),
                        i = [],
                        a = [];
                    if (t) {
                        var s = e.getGroup(t.get("coord"));
                        a.push(s) } else a = n.get("children");
                    return r.each(a, function(t) {
                        var e = t.get("children");
                        r.each(e, function(t) { t.get("origin") && i.push(t) }) }), i }, getData: function(t) {
                    var e = this,
                        n = e.getSelectShapes(t),
                        i = [];
                    return r.each(n, function(t) {
                        var e = t.get("origin");
                        e && i.push(e) }), i }, getShapeByObj: function(t, e) {
                    var n = null;
                    return t && r.each(e, function(e) {
                        if (e.get("origin") === t) return n = e, !1 }), n }, getSelectedShape: function(t, e) {
                    var n = this;
                    t = t || n.getSelectShapes(e);
                    var i = null;
                    return r.each(t, function(t) {
                        if (t.get("selected")) return i = t, !1 }), i }, setShapeSelected: function(t, e) {
                    var n = this;
                    t.set("selected", e), n.setSelectedStatus(t, e) }, setSelectedStatus: function(t, e) {
                    var n = this,
                        i = n.get("activeGroup"),
                        a = {};
                    if (e) {
                        var s = t.get("origin"),
                            o = n.get("shapeObj"),
                            u = s.shape || n.getDefaultValue("shape"),
                            c = { geom: n, coord: t.get("parent").get("coord"), point: s },
                            l = o.getSelectedCfg(u, c);
                        t.get("originSelectCfg") ? a = t.get("originSelectCfg") : (r.each(l, function(e, n) {
                            if ("transform" === n || "matrix" === n) a.matrix = t.getMatrix().clone();
                            else {
                                var r = t.attr(n);
                                r !== e && (a[n] = r) } }), t.set("originSelectCfg", a)), l = this.parseCfg(a.matrix, l), t.animate(l, 300) } else a = t.get("originSelectCfg"), t.animate(a, 300);
                    n.clearShapeActived(), i && i.get("canvas").draw() }, parseCfg: function(t, e) {
                    return e.transform && (e.matrix = i.transform(t, e.transform), delete e.transform), e }, setSelected: function(t, e) {
                    var n = this,
                        r = n.get("chart");
                    e = e || r.getViews()[0];
                    var i = n.getSelectShapes(e),
                        a = n.getSelectedShape(i, e),
                        s = n.getShapeByObj(t, i);
                    a !== s && (a && (n.setShapeSelected(a, !1), r.fire("itemunselected", { shape: a, data: a.get("origin"), view: e, geom: n })), s && (n.setShapeSelected(s, !0), r.fire("itemselected", { shape: s, data: t, view: e, geom: n })), r.fire("itemselectedchange", { shape: s, data: t, view: e, geom: n, preShape: a, preData: a ? a.get("origin") : null })) }, getSelected: function(t) {
                    var e = this,
                        n = e.get("chart");
                    t = t || n.getViews()[0];
                    var r = e.getSelectedShape(null, t),
                        i = null;
                    return r && (i = r.get("origin")), i }, clearSelected: function(t) { this.setSelected(null, t) } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t) {
                return t.alias || t.dim }
            var i = n(1),
                a = n(6),
                s = "_origin",
                o = function() {};
            o.ATTRS = { tooltipMap: {}, tooltipDims: null }, i.augment(o, { _snapEqual: function(t, e, n) {
                    var r;
                    return t = n.translate(t), e = n.translate(e), r = n.isCategory ? t === e : Math.abs(t - e) <= .001 }, _getScaleValueByPoint: function(t) {
                    var e = 0,
                        n = this.get("coord"),
                        r = this.getXScale(),
                        i = n.invert(t),
                        a = i.x;
                    return this.isInCircle() && a > (1 + r.rangeMax()) / 2 && (a = r.rangeMin()), e = r.invert(a), r.isCategory && (e = r.translate(e)), e }, _getTipMapScale: function(t) {
                    var e = this,
                        n = e.get("tooltipMap"),
                        r = n && n[t];
                    return e._getScale(r) }, _getTipValueScale: function() {
                    var t = this,
                        e = t._getTipMapScale("value");
                    if (!e) {
                        var n = t.getLegendAttr();
                        i.each(n, function(t) {
                            var n = t.getScale(t.type);
                            if (n.isLinear) return e = n, !1 }) }
                    return e || t.getYScale() || t.getXScale() }, _getTipTitleSclale: function() {
                    var t = this,
                        e = t._getTipMapScale("title");
                    if (!e) {
                        var n, r = t.getAttr("position"),
                            a = r.getDims();
                        i.each(a, function(t) {
                            if (t.indexOf("..") === -1) return n = t, !1 }), e = t._getScale(n) }
                    return e }, findPoint: function(t, e) {
                    var n = this,
                        r = null,
                        a = e.toJSON(),
                        o = a[0],
                        u = a[a.length - 1];
                    if (!o) return r;
                    var c = n._getScaleValueByPoint(t),
                        l = n.getXScale(),
                        h = l.dim,
                        f = o[s][h],
                        g = u[s][h];
                    if (i.isArray(f)) i.each(a, function(t) {
                        var e = t[s];
                        if (l.translate(e[h][0]) <= c && l.translate(e[h][1]) >= c) return r = t, !1 });
                    else {
                        if (i.isNumber(c) && (c > l.translate(g) || c < l.translate(f))) return null;
                        var p;
                        i.each(a, function(t, e) {
                            var o = t[s];
                            return n._snapEqual(o[h], c, l) ? (r = t, !1) : void(i.isNumber(c) && l.translate(o[h]) <= c && (u = t, p = a[e + 1])) }), u && p && Math.abs(l.translate(u[s][h]) - c) > Math.abs(l.translate(p[s][h]) - c) && (u = p) }
                    var v = n.getXDistance();
                    return !r && Math.abs(l.translate(u[s][h]) - c) < v / 2 && (r = u), r }, getTipTitle: function(t) {
                    var e = this,
                        n = e.get("tooltipMap"),
                        r = n.title;
                    if (r) {
                        var i = e._getScale(r);
                        if (!i) return r }
                    var a, s = e._getTipTitleSclale();
                    if (s) {
                        var o = t[s.dim];
                        a = s.getText(o) }
                    return a }, getTipValue: function(t) {
                    var e, n = this,
                        r = n._getTipValueScale(),
                        a = r.dim;
                    if (e = t[a], i.isArray(e)) {
                        var s = [];
                        i.each(e, function(t) { s.push(r.getText(t)) }), e = s.join("-") } else e = r.getText(e);
                    return e }, getTipName: function(t) {
                    var e, n, a = this,
                        s = a.get("tooltipMap"),
                        o = s.name;
                    if (o && (n = a._getScale(o), !n)) return o;
                    var u = a._getGroupScales();
                    if (!n && u.length && i.each(u, function(t) {
                            return n = t, !1 }), n) {
                        var c = n.dim;
                        e = n.getText(t[c]) } else {
                        var l = a._getTipValueScale();
                        e = r(l) }
                    return e }, getTipItems: function(t) {
                    function e(e, n) { i.isNull(n) || "" === n || f.push({ title: h, point: t, name: e || h, value: n, color: t.color || a.defaultColor, marker: !0 }) }
                    var n, o, u = this,
                        c = t[s],
                        l = u.get("tooltipDims"),
                        h = u.getTipTitle(c),
                        f = [];
                    return l ? i.each(l, function(t) {
                        var i = u._getScale(t);
                        n = r(i), o = i.getText(c[t]), e(n, o) }) : (o = u.getTipValue(c), n = u.getTipName(c), e(n, o)), f }, getTipInfo: function(t) {
                    var e = this,
                        n = e.get("frames"),
                        r = [];
                    return i.each(n, function(n) {
                        var i = e.findPoint(t, n);
                        if (i) {
                            var a = e.getTipItems(i);
                            r = r.concat(a) } }), r } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(6),
                a = { getDimWidth: function(t) {
                        var e = this,
                            n = e.get("coord"),
                            r = n.convertPoint({ x: 0, y: 0 }),
                            i = n.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }),
                            a = 0;
                        return r && i && (a = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2))), a }, getNormalizeSize: function() {
                        var t, e = this,
                            n = e.get("coord"),
                            a = e.getXScale(),
                            s = e.getDefaultValue("size");
                        if (r.isNull(s)) {
                            var o = a.values.length;
                            t = 1 / o;
                            var u = 1;
                            e.isInCircle() && "schema" !== e.get("type") ? n.isTransposed && o > 1 && (u = i.widthRatio.multiplePie) : u = i.widthRatio.column, t *= u;
                            var c = e.get("adjusts");
                            if (c && ("Dodge" === c || r.inArray(c, "Dodge"))) {
                                var l = e.get("frames");
                                t /= l.length } } else {
                            var h;
                            h = e.isInCircle() && !n.isTransposed ? (n.get("endAngle") - n.get("startAngle")) * n.get("radius") : e.getDimWidth("x"), t = s / h }
                        return t }, getXDistance: function() {
                        var t, e = this,
                            n = e.getXScale();
                        return t = n.isCategory ? 1 : (n.max - n.min) / n.values.length } };
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(22),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            a.ATTRS = { type: "point", shapeType: "point", shape: "hollowCircle", animate: !0, hasShapePath: !1, shareTooltip: !1 }, r.extend(a, i), r.augment(a, { _drawPoint: function(t) {
                    var e = this,
                        n = e.get("group"),
                        i = e.get("shapeObj"),
                        a = t.shape || e.get("shape"),
                        s = t.points;
                    t.coord = e.get("coord");
                    var o = i.getShapeCfg(a, t);
                    r.each(s, function(e) {
                        var i = r.mix({ x: e.x, y: e.y, zIndex: 5 }, o),
                            a = n.addShape("Marker", { attrs: i });
                        a.set("origin", t) }) }, drawFrame: function(t) {
                    var e = this;
                    t.each(function(t) { 0 !== t.size && e._drawPoint(t) }) } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t, e) {
                for (var n = t.x, r = t.y, i = n[0], a = r[0], s = n[0], o = r[0], u = 0; u < n.length; u++) {
                    var c = n[u],
                        l = r[u];
                    c <= i && (i = c), c >= s && (s = c), l <= a && (a = l), l >= o && (o = l) }
                var h = e.x >= i && e.x <= s && e.y >= a && e.y <= o;
                return h }
            var i = n(1),
                a = n(22),
                s = Math.abs,
                o = function u(t) { u.superclass.constructor.call(this, t) };
            o.ATTRS = { type: "polygon", shapeType: "polygon", lineToArc: !0, shareTooltip: !1 }, i.extend(o, a), i.augment(o, { drawFrame: function(t) {
                    var e = this,
                        n = e.get("group");
                    t.each(function(t) { e.addPolygon(t, n) }) }, getShapeCfg: function(t) {
                    var e = this,
                        n = e.get("shapeObj"),
                        r = t.shape,
                        i = n.getShapeCfg(r, t);
                    return i.path = e.mappingPath(i.path), i }, addPolygon: function(t, e) {
                    var n = this,
                        r = n.getShapeCfg(t),
                        i = e.addShape("path", { attrs: r });
                    i.set("origin", t) }, getShapePointInfo: function(t) {
                    var e, n = this,
                        r = t.x,
                        a = t.y;
                    if (!i.isArray(r) || !i.isArray(a)) {
                        var s = n.getXScale(),
                            o = n.getYScale(),
                            u = n._getScaleOffset(s),
                            c = n._getScaleOffset(o);
                        if (s.isCategory && o.isCategory) r = [r - u, r - u, r + u, r + u], a = [a - c, a + c, a + c, a - c];
                        else if (i.isArray(r)) e = r, r = [e[0], e[0], e[1], e[1]], a = [a - c / 2, a + c / 2, a + c / 2, a - c / 2];
                        else {
                            if (!i.isArray(a)) throw new Error("Generated polygon, continuous field must pass in an array\uff01");
                            e = a, a = [e[0], e[1], e[1], e[0]], r = [r - u / 2, r - u / 2, r + u / 2, r + u / 2] } }
                    var l = i.mix({}, t, { x: r, y: a });
                    return l }, _getScaleOffset: function(t) {
                    return t.scale(1) - t.scale(.5) }, isSnapPoint: function c(t, e, n) {
                    var c, a = this,
                        o = a.get("snapDistance"),
                        u = a.getXScale(),
                        l = a.getYScale(),
                        h = n.invert(t);
                    if (i.isArray(e.x) && i.isArray(e.y)) c = r(e, t);
                    else {
                        var f = n.trans(e.x, e.y, 1),
                            g = !1,
                            p = !1;
                        g = u.isCategory ? u.translate(u.invert(h.x)) === e[u.dim] : s(f.x - t.x) < o, p = l && l.isCategory ? l.translate(l.invert(h.y)) === e[l.dim] : s(f.y - t.y) < o, c = g && p }
                    return c } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(22),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            a.ATTRS = { type: "schema", shapeType: "schema", lineToArc: !0, animate: !0, snapAll: !1 }, r.extend(a, i), r.augment(a, { drawFrame: function(t) {
                    var e = this,
                        n = e.get("group");
                    t.each(function(t) { e.addSchema(t, n) }) }, getShapeCfg: function(t) {
                    var e = this,
                        n = e.get("shapeObj"),
                        r = { color: t.color, size: t.size, opacity: t.opacity, point: t },
                        i = n.getShapeCfg(t.shape, r);
                    return i.path = e.mappingPath(i.path), i }, getShapePointInfo: function(t) {
                    var e = this,
                        n = {},
                        i = t.size;
                    return (r.isNull(i) || i >= 1) && (i = e.getNormalizeSize()), r.mix(n, t, { size: i }), n }, addSchema: function(t, e) {
                    var n = this;
                    if (!isNaN(t.x) || r.isArray(t.x)) {
                        var i = n.getShapeCfg(t),
                            a = e.addShape("path", { attrs: i });
                        a.set("origin", t) } } }), t.exports = a },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = v.shape.area,
                    n = f.mix(!0, {}, e, { fill: t.color, stroke: t.color, "stroke-width": t.size, "fill-opacity": t.opacity });
                return n }

            function i(t) {
                var e = v.shape.hollowArea,
                    n = f.mix(!0, {}, e, { stroke: t.color, "stroke-width": t.size, "stroke-opacity": t.opacity });
                return n }

            function a(t, e, n, r) {
                var i = "",
                    a = [],
                    s = [],
                    o = [];
                return f.each(t, function(t) {
                    var e = t.points;
                    s.push(e[0]), o.push(e[1]) }), o = o.reverse(), a.push(s, o), f.each(a, function(t, a) {
                    var s = "";
                    if (s = e ? g.getSplinePath(t, !1, n) : g.getLinePath(t, !1), r) {
                        var o = t[0];
                        s += f.substitute("L {x} {y}", o) } else a > 0 && (s = s.replace("M", "L"));
                    i += s }), i += "z" }

            function s(t, e) {
                var n = t.points,
                    r = t.yDim,
                    i = t.coord,
                    s = t.isInCircle,
                    o = "",
                    u = g.splitPoints(n, r);
                return f.each(u, function(t) { o += a(t, e, i, s) }), f.path2Absolute(o) }

            function o(t, e, n) {
                var a = s(t, e),
                    o = n ? i(t) : r(t);
                return f.mix({ path: a }, o) }

            function u(t, e, n) {
                return [
                    ["M", t - n, e + n],
                    ["L", t - n, e - n],
                    ["L", t, e],
                    ["L", t + n, e - n],
                    ["L", t + n, e + n],
                    ["z"]
                ] }

            function c(t, e, n) {
                return f.path2Absolute([
                    ["M", t - n, e + n],
                    ["L", t - n, e],
                    ["R", t - n / 2, e - n / 2, t, e, t + n / 2, e + n / 2, t + n, e],
                    ["L", t + n, e + n],
                    ["z"]
                ]) }

            function l(t, e, n) {
                var a = n ? i(t) : r(t);
                return f.mix({ symbol: e ? c : u }, a) }

            function h(t) {
                return t && t.indexOf("line") !== -1 ? v.activeShape.hollowArea : v.activeShape.area }
            var f = n(1),
                g = n(24),
                p = n(23),
                v = n(6),
                d = [2, 1],
                x = p.registGeom("area", { defaultShapeType: "area", getShapePoints: function(t) {
                        var e = [],
                            n = t.x,
                            r = t.y,
                            i = t.y0;
                        return r = f.isArray(r) ? r : [i, r], f.each(r, function(t) { e.push({ x: n, y: t }) }), e }, getShapeCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getShapeCfg(e) }, getMarkerCfg: function(t, e) {
                        var n = this.getShape(t);
                        return n.getMarkerCfg(e) }, getActiveCfg: function(t) {
                        return h(t) } });
            p.registShape("area", "area", { getShapeCfg: function(t) {
                    return o(t, !1, !1) }, getMarkerCfg: function(t) {
                    return l(t, !1, !1) } }), p.registShape("area", "smooth", { getShapeCfg: function(t) {
                    return o(t, !0, !1) }, getMarkerCfg: function(t) {
                    return l(t, !0, !1) } }), x.spline = x.smooth, p.registShape("area", "line", { getShapeCfg: function(t) {
                    return o(t, !1, !0) }, getMarkerCfg: function(t) {
                    return l(t, !1, !0) } }), p.registShape("area", "dotLine", { getShapeCfg: function(t) {
                    var e = o(t, !1, !0);
                    return e["stroke-dasharray"] = d, e }, getMarkerCfg: function(t) {
                    var e = l(t, !1, !0);
                    return e["stroke-dasharray"] = d, e } }), p.registShape("area", "smoothLine", { getShapeCfg: function(t) {
                    return o(t, !0, !0) }, getMarkerCfg: function(t) {
                    return l(t, !0, !0) } }), p.registShape("area", "dotSmoothLine", { getShapeCfg: function(t) {
                    var e = o(t, !0, !0);
                    return e["stroke-dasharray"] = d, e }, getMarkerCfg: function(t) {
                    var e = l(t, !0, !0);
                    return e["stroke-dasharray"] = d, e } }), t.exports = x },
        function(t, e, n) {
            "use strict";

            function r(t, e) {
                var n, r, i, a, s = e.getRadius(),
                    o = e.get("inner"),
                    u = s * o;
                return p.isArray(t.x) ? (i = { x: t.x[0], y: t.y[0] }, a = { x: t.x[1], y: t.y[1] }, n = x.getPointAngle(e, i), r = x.getPointAngle(e, a), r <= n && (r += 2 * Math.PI)) : (a = t, n = e.get("startAngle"), r = x.getPointAngle(e, a)), { r: s, ir: u, startAngle: n, endAngle: r } }

            function i(t) {
                return t && "rect" !== t ? v.activeShape.hollowInterval : v.activeShape.interval }

            function a(t, e) {
                var n = e.coord,
                    i = e.point,
                    a = 7.5;
                if (n && "theta" === n.type) {
                    var s = r(i, n),
                        o = (s.endAngle - s.startAngle) / 2 + s.startAngle,
                        u = a * Math.cos(o),
                        c = a * Math.sin(o);
                    e = { transform: [
                            ["t", u, c]
                        ] } }
                return e
            }

            function s(t) {
                var e = v.shape.interval,
                    n = {},
                    r = p.mix(!0, {}, e, { fill: t.color, stroke: t.color, "fill-opacity": t.opacity }, n);
                return r }

            function o(t) {
                var e = v.shape.hollowInterval,
                    n = p.mix(!0, {}, e, { stroke: t.color, "stroke-opacity": t.opacity });
                return n }

            function u(t, e) {
                var n = t.x,
                    r = t.y,
                    i = t.y0,
                    a = t.size,
                    s = i,
                    o = r;
                p.isArray(r) && (o = r[1], s = r[0]);
                var u, c;
                p.isArray(n) ? (u = n[0], c = n[1]) : (u = n - a / 2, c = n + a / 2);
                var l = [];
                return l.push({ x: u, y: s }, { x: u, y: o }), e ? l.push({ x: c, y: (o + s) / 2 }) : l.push({ x: c, y: o }, { x: c, y: s }), l }

            function c(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = 0 === n ? "M" : "L";
                    e.push([i, r.x, r.y]) }
                var a = t[0];
                return e.push(["L", a.x, a.y]), e.push(["z"]), e }

            function l(t) {
                var e = t.x,
                    n = t.y,
                    r = t.y0,
                    i = [];
                return p.isArray(n) ? p.each(n, function(t, n) { i.push({ x: p.isArray(e) ? e[n] : e, y: t }) }) : i.push({ x: e, y: n }, { x: e, y: r }), i }

            function h(t) {
                var e = t.x,
                    n = p.isArray(t.y) ? t.y[1] : t.y,
                    r = p.isArray(t.y) ? t.y[0] : t.y0,
                    i = t.size || 5,
                    a = [];
                return a.push({ x: e - i / 2, y: n }, { x: e + i / 2, y: n }, { x: e, y: n }, { x: e, y: r }, { x: e - i / 2, y: r }, { x: e + i / 2, y: r }), a }

            function f(t) {
                var e = [];
                return e.push(["M", t[0].x, t[0].y], ["L", t[1].x, t[1].y], ["M", t[2].x, t[2].y], ["L", t[3].x, t[3].y], ["M", t[4].x, t[4].y], ["L", t[5].x, t[5].y]), e }

            function g(t, e) {
                var n = [],
                    r = t.point.points,
                    i = t.nextPoint;
                if (p.isNull(i)) e ? n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", r[2].x, r[2].y], ["L", r[3].x, r[3].y], ["Z"]) : n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", r[2].x, r[2].y], ["Z"]);
                else {
                    var a = i.points;
                    n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", a[1].x, a[1].y], ["L", a[0].x, a[0].y], ["Z"]) }
                return n }
            var p = n(1),
                v = n(6),
                d = n(23),
                x = n(24),
                m = d.registGeom("interval", { defaultShapeType: "rect", getActiveCfg: function(t) {
                        return i(t) }, getSelectedCfg: function(t, e) {
                        return a(t, e) } });
            d.registShape("interval", "rect", { getShapePoints: function(t) {
                    return u(t, !1) }, getShapeCfg: function(t) {
                    var e = s(t);
                    return e.path = c(t.point.points), e }, getMarkerCfg: function(t) {
                    var e = s(t),
                        n = t.isInCircle,
                        r = n ? "circle" : "square";
                    return p.mix({ symbol: r }, e) } }), d.registShape("interval", "hollowRect", { getShapePoints: function(t) {
                    return u(t, !1) }, getShapeCfg: function(t) {
                    var e = o(t);
                    return e.path = c(t.point.points), e }, getMarkerCfg: function(t) {
                    var e = o(t),
                        n = t.isInCircle,
                        r = n ? "circle" : "square";
                    return p.mix({ symbol: r }, e) } }), d.registShape("interval", "stroke", { getShapePoints: function(t) {
                    return u(t, !1) }, getShapeCfg: function(t) {
                    var e = s(t);
                    return e.path = c(t.point.points), p.mix(e, v.shape.strokeInterval) }, getMarkerCfg: function(t) {
                    var e = s(t),
                        n = t.isInCircle,
                        r = n ? "circle" : "square";
                    return p.mix({ symbol: r }, e, v.shape.strokeInterval) } }), d.registShape("interval", "line", { getShapePoints: function(t) {
                    return l(t) }, getShapeCfg: function(t) {
                    var e = o(t);
                    return e.path = c(t.point.points), e }, getMarkerCfg: function(t) {
                    var e = o(t);
                    return p.mix({ symbol: "line" }, e) } }), d.registShape("interval", "tick", { getShapePoints: function(t) {
                    return h(t) }, getShapeCfg: function(t) {
                    var e = o(t);
                    return e.path = f(t.point.points), e }, getMarkerCfg: function(t) {
                    var e = o(t);
                    return p.mix({ symbol: "tick" }, e) } }), d.registShape("interval", "funnel", { getShapePoints: function(t) {
                    return t.size = 2 * t.size, u(t, !1) }, getShapeCfg: function(t) {
                    var e = s(t);
                    return e.path = g(t, !0), e }, getMarkerCfg: function(t) {
                    var e = s(t);
                    return p.mix({ symbol: "square" }, e) } }), d.registShape("interval", "pyramid", { getShapePoints: function(t) {
                    return t.size = 2 * t.size, u(t, !0) }, getShapeCfg: function(t) {
                    var e = s(t);
                    return e.path = g(t, !1), e }, getMarkerCfg: function(t) {
                    var e = s(t);
                    return p.mix({ symbol: "square" }, e) } }), t.exports = m
        },
        function(t, e, n) { "use strict";

            function r(t, e, n, r) {
                for (var i = t[0], a = "", s = 0, o = i.points.length; s < o; s++) {
                    var u = p.map(t, function(t) {
                        return t.points[s] });
                    a += e ? v.getSplinePath(u, n, r) : v.getLinePath(u, n, e) }
                return a }

            function i(t, e) {
                var n = t.points,
                    i = t.yDim,
                    a = t.isInCircle,
                    s = t.coord,
                    o = "",
                    u = v.splitPoints(n, i);
                return p.each(u, function(t) { o += r(t, e, a, s) }), p.path2Absolute(o) }

            function a(t) {
                var e = x.shape.line,
                    n = p.mix(!0, {}, e, { stroke: t.color, "stroke-width": t.size });
                return t.opacity && (n.opacity = t.opacity), n }

            function s(t, e) {
                var n = i(t, e);
                return p.mix({ path: n }, a(t)) }

            function o(t, e, n) {
                return [
                    ["M", t - n, e],
                    ["L", t + n, e]
                ] }

            function u(t, e, n) {
                return p.path2Absolute([
                    ["M", t - n, e],
                    ["R", t - n / 2, e - n / 2, t, e, t + n / 2, e + n / 2, t + n, e]
                ]) }

            function c(t, e) {
                return p.mix({ symbol: e ? u : o }, a(t)) }

            function l(t, e) {
                var n = [];
                return p.each(t, function(r, i) {
                    var a = t[i + 1];
                    n.push(r), a && (n = n.concat(e(r, a))) }), n }

            function h(t) {
                var e = "";
                return p.each(t, function(t, n) {
                    var r = 0 === n ? "M {x} {y}" : "L {x} {y}";
                    e += p.substitute(r, t) }), e }

            function f(t, e) {
                var n = [];
                p.each(t.points, function(t) {
                    var e = t.points;
                    p.each(e, function(t) { n.push({ x: t.x, y: t.y }) }) });
                var r = l(n, e),
                    i = p.mix({}, t),
                    s = h(r);
                return p.mix({ path: s }, a(i)) }

            function g(t, e) {
                return p.mix({ symbol: e }, a(t)) }
            var p = n(1),
                v = n(24),
                d = n(23),
                x = n(6),
                m = [2, 1],
                y = [10, 5],
                _ = d.registGeom("line", { defaultShapeType: "line", getShapePoints: function(t) {
                        var e = [],
                            n = t.x,
                            r = t.y;
                        return r = p.isArray(r) ? r : [r], p.each(r, function(t, r) { e.push({ x: p.isArray(n) ? n[r] : n, y: t }) }), e }, getShapeCfg: function(t, e) {
                        var n = _[t] || _.line;
                        return n.getShapeCfg(e) }, getMarkerCfg: function(t, e) {
                        var n = _[t] || _.line;
                        return n.getMarkerCfg(e) }, getActiveCfg: function() {
                        return x.activeShape.line } });
            d.registShape("line", "line", { getShapeCfg: function(t) {
                    return s(t) }, getMarkerCfg: function(t) {
                    return c(t) } }), d.registShape("line", "dot", { getShapeCfg: function(t) {
                    var e = s(t, !1);
                    return e["stroke-dasharray"] = m, e }, getMarkerCfg: function(t) {
                    var e = c(t, !1);
                    return e["stroke-dasharray"] = m, e } }), d.registShape("line", "fill", { getShapeCfg: function(t) {
                    var e = s(t, !1);
                    return e.path.push(["z"]), e.fill = e.stroke, e.stroke = null, e }, getMarkerCfg: function(t) {
                    var e = c(t, !1);
                    return e.fill = e.stroke, e } }), d.registShape("line", "dash", { getShapeCfg: function(t) {
                    var e = s(t, !1);
                    return e["stroke-dasharray"] = y, e }, getMarkerCfg: function(t) {
                    var e = c(t, !1);
                    return e["stroke-dasharray"] = y, e } }), d.registShape("line", "smooth", { getShapeCfg: function(t) {
                    return s(t, !0) }, getMarkerCfg: function(t) {
                    return c(t, !0) } }), _.spline = _.smooth, d.registShape("line", "dotSmooth", { getShapeCfg: function(t) {
                    var e = s(t, !0);
                    return e["stroke-dasharray"] = m, e }, getMarkerCfg: function(t) {
                    var e = c(t, !0);
                    return e["stroke-dasharray"] = m, e } }), d.registShape("line", "hv", { getShapeCfg: function(t) {
                    return f(t, function(t, e) {
                        var n = [];
                        return n.push({ x: e.x, y: t.y }), n }) }, getMarkerCfg: function(t) {
                    return g(t, function(t, e, n) {
                        return [
                            ["M", t - n, e - n],
                            ["L", t, e - n],
                            ["L", t, e],
                            ["L", t + n, e]
                        ] }) } }), d.registShape("line", "vh", { getShapeCfg: function(t) {
                    return f(t, function(t, e) {
                        var n = [];
                        return n.push({ x: t.x, y: e.y }), n }) }, getMarkerCfg: function(t) {
                    return g(t, function(t, e, n) {
                        return [
                            ["M", t - n, e],
                            ["L", t, e],
                            ["L", t, e - n],
                            ["L", t + n, e - n]
                        ] }) } }), d.registShape("line", "hvh", { getShapeCfg: function(t) {
                    return f(t, function(t, e) {
                        var n = [],
                            r = (e.x - t.x) / 2 + t.x;
                        return n.push({ x: r, y: t.y }), n.push({ x: r, y: e.y }), n }) }, getMarkerCfg: function(t) {
                    return g(t, function(t, e, n) {
                        return [
                            ["M", t - 3 * n / 2, e],
                            ["L", t - n / 2, e],
                            ["L", t - n / 2, e - n / 2],
                            ["L", t + n / 2, e - n / 2],
                            ["L", t + n / 2, e],
                            ["L", t + 3 * n / 2, e]
                        ] }) } }), d.registShape("line", "vhv", { getShapeCfg: function(t) {
                    return f(t, function(t, e) {
                        var n = [],
                            r = (e.y - t.y) / 2 + t.y;
                        return n.push({ x: t.x, y: r }), n.push({ x: e.x, y: r }), n }) }, getMarkerCfg: function(t) {
                    return g(t, function(t, e, n) {
                        return [
                            ["M", t - n, e],
                            ["L", t - n, e - n / 2],
                            ["L", t, e - n / 2],
                            ["L", t, e - n],
                            ["L", t, e + n / 2],
                            ["L", t + n, e + n / 2]
                        ] }) } }), t.exports = _ },
        function(t, e, n) { "use strict";

            function r(t, e) {
                var n = h.shape.point,
                    r = c.mix(!0, {}, n, { fill: e.color, stroke: e.color, symbol: t, "fill-opacity": e.opacity, radius: e.size });
                return r }

            function i(t, e) {
                var n = h.shape.hollowPoint,
                    r = c.mix(!0, {}, n, { stroke: e.color, symbol: t, "stroke-opacity": e.opacity, radius: e.size });
                return r }

            function a(t) {
                return !t || 0 !== t.indexOf("hollow") && c.indexOf(p, t) === -1 ? h.activeShape.point : h.activeShape.hollowPoint }

            function s(t) {
                var e = t.coord,
                    n = .04,
                    r = t.size / 10,
                    i = r - .04,
                    a = Math.atan(n / i) / (2 * Math.PI),
                    s = e.convertPoint({ x: 0, y: 0 }),
                    o = e.invertPoint({ x: t.x, y: t.y }),
                    u = e.convertPoint({ x: o.x, y: r }),
                    c = e.convertPoint({ x: o.x + a, y: i }),
                    l = e.convertPoint({ x: o.x - a, y: i });
                return [
                    ["M", s.x, s.y],
                    ["L", u.x, u.y],
                    ["M", u.x, u.y],
                    ["L", c.x, c.y],
                    ["M", u.x, u.y],
                    ["L", l.x, l.y]
                ] }

            function o(t) {
                var e = t.coord,
                    n = e.convertPoint({ x: 0, y: 0 }),
                    r = e.invertPoint({ x: t.x, y: t.y }),
                    i = e.convertPoint({ x: r.x, y: t.size / 10 });
                return [
                    ["M", n.x, n.y],
                    ["L", i.x, i.y]
                ] }

            function u(t) {
                var e = t.coord,
                    n = t.size / 10,
                    r = e.invertPoint({ x: t.x, y: t.y }),
                    i = e.convertPoint({ x: r.x, y: 0 }),
                    a = e.convertPoint({ x: r.x, y: n }),
                    s = (a.y - i.y) / (a.x - i.x),
                    o = Math.PI / 2 - Math.atan(s),
                    u = [],
                    c = t.size * Math.cos(o),
                    l = t.size * Math.sin(o);
                return u.push(["M", i.x - c, i.y + l]), u.push(["L", a.x - c, a.y + l]), u.push(["L", a.x + c, a.y - l]), u.push(["L", i.x + c, i.y - l]), u.push(["z"]), u }
            var c = n(1),
                l = n(11),
                h = n(6),
                f = n(23),
                g = ["circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down", "pointerRect"],
                p = ["cross", "tick", "plus", "hyphen", "line", "pointerLine", "pointerArrow"],
                v = Math.sqrt(3);
            c.mix(l.Shape.Marker.Symbols, { hexagon: function(t, e, n) {
                    var r = n / 2 * v;
                    return [
                        ["M", t, e - n],
                        ["L", t + r, e - n / 2],
                        ["L", t + r, e + n / 2],
                        ["L", t, e + n],
                        ["L", t - r, e + n / 2],
                        ["L", t - r, e - n / 2],
                        ["z"]
                    ] }, bowtie: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e + n],
                        ["L", t + n, e - n],
                        ["L", t - n, e + n],
                        ["z"]
                    ] }, cross: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e + n],
                        ["M", t + n, e - n],
                        ["L", t - n, e + n]
                    ] }, tick: function(t, e, n) {
                    return [
                        ["M", t - n / 2, e - n],
                        ["L", t + n / 2, e - n],
                        ["M", t, e - n],
                        ["L", t, e + n],
                        ["M", t - n / 2, e + n],
                        ["L", t + n / 2, e + n]
                    ] }, plus: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t + n, e],
                        ["M", t, e - n],
                        ["L", t, e + n]
                    ] }, hyphen: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t + n, e]
                    ] }, line: function(t, e, n) {
                    return [
                        ["M", t, e - n],
                        ["L", t, e + n]
                    ] }, pointerLine: function(t, e, n) {
                    return [
                        ["M", t, e - n],
                        ["L", t, e + n]
                    ] } });
            var d = f.registGeom("point", { defaultShapeType: "circle", getShapePoints: function(t) {
                    var e = [],
                        n = t.x,
                        r = t.y;
                    return r = c.isArray(r) ? r : [r], c.each(r, function(t, r) {
                        var i = { x: c.isArray(n) ? n[r] : n, y: t };
                        e.push(i) }), e }, getShapeCfg: function(t, e) {
                    var n = this.getShape(t);
                    return n.getShapeCfg(e) }, getMarkerCfg: function(t, e) {
                    return d.getShapeCfg(t, e) }, getActiveCfg: function(t, e) {
                    var n = a(t);
                    return e && e.size && delete n.radius, n } });
            c.each(g, function(t) { f.registShape("point", t, { getShapeCfg: function(e) {
                        return r(t, e) } }), f.registShape("point", "hollow" + c.ucfirst(t), { getShapeCfg: function(e) {
                        return i(t, e) } }) }), c.each(p, function(t) { f.registShape("point", t, { getShapeCfg: function(e) {
                        return i(t, e) } }) }), f.registShape("point", "pointerArrow", { getShapeCfg: function(t) {
                    var e = h.shape.hollowPoint,
                        n = c.mix(!0, {}, e, { stroke: t.color, "stroke-width": 2, "fill-opacity": t.opacity, radius: t.size, symbol: function() {
                                return s(t) } });
                    return n } }), f.registShape("point", "pointerLine", { getShapeCfg: function(t) {
                    var e = h.shape.hollowPoint,
                        n = c.mix(!0, {}, e, { stroke: t.color, "fill-opacity": t.opacity, radius: t.size, symbol: function() {
                                return o(t) } });
                    return n } }), f.registShape("point", "pointerRect", { getShapeCfg: function(t) {
                    var e = h.shape.point,
                        n = c.mix(!0, {}, e, { fill: t.color, stroke: t.color, "fill-opacity": t.opacity, radius: t.size, symbol: function() {
                                return u(t) } });
                    return n } }), t.exports = d },
        function(t, e, n) { "use strict";

            function r() {
                return c.activeShape.polygon }

            function i(t) {
                return t.color || c.defaultColor }

            function a(t, e) {
                var n = { "fill-opacity": t.opacity };
                return u.mix(!0, {}, e, n) }

            function s(t, e) {
                var n = [];
                return u.each(t, function(t, r) {
                    var i = e[r];
                    n.push({ x: t, y: i }) }), n }

            function o(t) {
                var e = "",
                    n = [t[0].x, t[0].y],
                    r = 0,
                    i = t[0];
                return u.each(t, function(a, s) {
                    var o = 0 === s ? "M {x} {y} " : "L {x} {y} ";
                    if (e += u.substitute(o, a), r !== s && s < t.length - 1 && u.equalsArray(n, [a.x, a.y])) {
                        var c = t[s + 1];
                        e += "z" + u.substitute("M {x} {y}", c), i = c, r = s + 1, n = [c.x, c.y] } }), e += u.substitute("L {x} {y}", i), e += "z", u.path2Absolute(e) }
            var u = n(1),
                c = n(6),
                l = n(23),
                h = l.registGeom("polygon", { defaultShapeType: "polygon", getShapePoints: function(t) {
                        return s(t.x, t.y) }, getMarkerCfg: function() {
                        return { symbol: "rect" } }, getActiveCfg: function(t) {
                        return r(t) } });
            l.registShape("polygon", "polygon", { getShapeCfg: function(t) {
                    var e = a(t, c.shape.polygon);
                    return e.fill = i(t), e.path = o(t.points), e } }), l.registShape("polygon", "hollow", { getShapeCfg: function(t) {
                    var e = a(t, c.shape.hollowPolygon);
                    return e.stroke = i(t), e.path = o(t.points), e } }), l.registShape("polygon", "stroke", { getShapeCfg: function(t) {
                    var e = a(t, c.shape.strokePolygon);
                    return e.fill = i(t), e.path = o(t.points), e } }), t.exports = h },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = v.shape.line,
                    n = p.mix(!0, {}, e, { stroke: t.color, fill: "#fff", "fill-opacity": 0, "stroke-opacity": t.opacity });
                return n }

            function i(t, e) {
                return p.mix({ symbol: e }, r(t)) }

            function a(t) { p.isArray(t) || (t = [t]);
                var e = t[0],
                    n = t[t.length - 1],
                    r = t.length > 1 ? t[1] : e,
                    i = t.length > 3 ? t[3] : n,
                    a = t.length > 2 ? t[2] : r;
                return { min: e, max: n, min1: r, max1: i, median: a } }

            function s(t, e) { p.each(t, function(t) { e.push({ x: t[0], y: t[1] }) }) }

            function o(t, e, n) {
                var r, i, o = [];
                return p.isArray(e) ? (i = a(e), r = [
                    [t - n / 2, i.max],
                    [t + n / 2, i.max],
                    [t, i.max],
                    [t, i.max1],
                    [t - n / 2, i.min1],
                    [t - n / 2, i.max1],
                    [t + n / 2, i.max1],
                    [t + n / 2, i.min1],
                    [t, i.min1],
                    [t, i.min],
                    [t - n / 2, i.min],
                    [t + n / 2, i.min],
                    [t - n / 2, i.median],
                    [t + n / 2, i.median]
                ]) : (e = e || .5, i = a(t), r = [
                    [i.min, e - n / 2],
                    [i.min, e + n / 2],
                    [i.min, e],
                    [i.min1, e],
                    [i.min1, e - n / 2],
                    [i.min1, e + n / 2],
                    [i.max1, e + n / 2],
                    [i.max1, e - n / 2],
                    [i.max1, e],
                    [i.max, e],
                    [i.max, e - n / 2],
                    [i.max, e + n / 2],
                    [i.median, e - n / 2],
                    [i.median, e + n / 2]
                ]), s(r, o), o }

            function u(t) {
                var e = [
                    ["M", t[0].x, t[0].y],
                    ["L", t[1].x, t[1].y],
                    ["M", t[2].x, t[2].y],
                    ["L", t[3].x, t[3].y],
                    ["M", t[4].x, t[4].y],
                    ["L", t[5].x, t[5].y],
                    ["L", t[6].x, t[6].y],
                    ["L", t[7].x, t[7].y],
                    ["L", t[4].x, t[4].y],
                    ["Z"],
                    ["M", t[8].x, t[8].y],
                    ["L", t[9].x, t[9].y],
                    ["M", t[10].x, t[10].y],
                    ["L", t[11].x, t[11].y],
                    ["M", t[12].x, t[12].y],
                    ["L", t[13].x, t[13].y]
                ];
                return e }

            function c(t) {
                var e = t.point,
                    n = e.points,
                    i = u(n),
                    a = r(t);
                return a.path = i, p.mix(a, r(t)) }

            function l(t) { p.isArray(t) || (t = [t]);
                var e = t.sort(function(t, e) {
                        return t < e ? 1 : -1 }),
                    n = e.length;
                if (n < 4)
                    for (var r = e[n - 1], i = 0; i < 4 - n; i++) e.push(r);
                return e }

            function h(t, e, n) {
                var r = l(e),
                    i = [{ x: t, y: r[0] }, { x: t, y: r[1] }, { x: t - n / 2, y: r[2] }, { x: t - n / 2, y: r[1] }, { x: t + n / 2, y: r[1] }, { x: t + n / 2, y: r[2] }, { x: t, y: r[2] }, { x: t, y: r[3] }];
                return i }

            function f(t) {
                var e = [
                    ["M", t[0].x, t[0].y],
                    ["L", t[1].x, t[1].y],
                    ["M", t[2].x, t[2].y],
                    ["L", t[3].x, t[3].y],
                    ["L", t[4].x, t[4].y],
                    ["L", t[5].x, t[5].y],
                    ["Z"],
                    ["M", t[6].x, t[6].y],
                    ["L", t[7].x, t[7].y]
                ];
                return e }

            function g(t) {
                var e = t.point,
                    n = e.points,
                    i = f(n);
                return p.mix({ path: i }, r(t)) }
            var p = n(1),
                v = n(6),
                d = n(23),
                x = d.registGeom("schema", { getActiveCfg: function() {
                        return v.activeShape.line } });
            d.registShape("schema", "box", { getShapePoints: function(t) {
                    return o(t.x, t.y, t.size) }, getShapeCfg: function(t) {
                    return c(t) }, getMarkerCfg: function(t) {
                    return i(t, function(t, e, n) {
                        var r = [e - n, e - n / 2, e, e + n / 2, e + n],
                            i = o(t, r, 2 * n);
                        return u(i) }) } }), d.registShape("schema", "candle", { getShapePoints: function(t) {
                    return h(t.x, t.y, t.size) }, getShapeCfg: function(t) {
                    var e = g(t);
                    return e.fill = t.color, e["fill-opacity"] = t.opacity, e["stroke-width"] = 1, e }, getMarkerCfg: function(t) {
                    var e = i(t, function(t, e, n) { e = [e + 1.5 * n, e + n / 2, e - n / 2, e - 1.5 * n];
                        var r = h(t, e, n);
                        return f(r) });
                    return e.fill = t.color, e["fill-opacity"] = t.opacity, e } }), t.exports = x },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = n(3),
                s = a.Vector2,
                o = function u(t) { u.superclass.constructor.call(this, t) };
            r.extend(o, i), r.augment(o, { start: [], end: [], cfg: { stroke: "#000" }, getCfg: function(t) {
                    var e, n, r, i = this,
                        a = i.parsePoint(t, i.start),
                        o = i.parsePoint(t, i.end),
                        u = t.invertPoint(a),
                        c = t.invertPoint(o),
                        l = { x: (c.x + u.x) / 2, y: u.y },
                        h = t.convertPoint(l),
                        f = t.getCenter(),
                        g = new s(1, 0),
                        p = new s.sub(a, f).length(),
                        v = new s.sub(o, a);
                    return v = v.vertical(), v.setLength(p), v.add(h), e = new s.sub(a, v), n = new s.sub(o, v), r = { x: v.x, y: v.y, startAngle: e.angleTo(g, !0) / Math.PI * 180, endAngle: n.angleTo(g, !0) / Math.PI * 180, r: p } }, paint: function(t, e) {
                    var n = r.mix({}, this.cfg, this.getCfg(t));
                    e.addShape("Arc", { attrs: n }) } }), t.exports = o },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { start: [], end: null, src: "", paint: function(t, e) {
                    var n = this,
                        i = n.parsePoint(t, n.start),
                        a = n.cfg;
                    if (a.img = a.src, a = r.mix({ src: n.src }, a, i), n.end) {
                        var s = n.parsePoint(t, n.end);
                        a.x = i.x, a.y = s.y, a.width = s.x - i.x, a.height = i.y - s.y } else a.y = a.y - a.height;
                    e.addShape("Image", { attrs: a }) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(18);
            r.Image = n(299), r.Text = n(304), r.Line = n(301), r.Tag = n(303), r.Rect = n(302), r.Arc = n(298), t.exports = r },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { from: [], to: [], cfg: { stroke: "#000", "stroke-width": 1 }, paint: function(t, e) {
                    var n = this,
                        i = n.parsePoint(t, n.from),
                        a = n.parsePoint(t, n.to),
                        s = n.cfg,
                        o = r.substitute("M {x} {y}", i) + r.substitute("L {x} {y}", a);
                    s = r.mix({ path: o }, s), e.addShape("Path", { attrs: s }) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { start: [], end: [], cfg: { stroke: "#000" }, getPath: function(t) {
                    var e = this,
                        n = e.parsePoint(t, e.start),
                        r = e.parsePoint(t, e.end),
                        i = [];
                    return i.push(["M", n.x, n.y]), i.push(["L", r.x, n.y]), i.push(["L", r.x, r.y]), i.push(["L", n.x, r.y]), i.push(["z"]), i }, paint: function(t, e) {
                    var n = this,
                        i = n.cfg,
                        a = n.getPath(t);
                    i = r.mix({ path: a }, i), e.addShape("Path", { attrs: i }) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = 10,
                s = function o(t) { o.superclass.constructor.call(this, t) };
            r.extend(s, i), r.augment(s, { from: [], to: [], text: "", cfg: { line: { stroke: "#000", "stroke-width": 1 }, text: { fill: "#000" }, rect: { stroke: "#000", "stroke-width": 1, fill: "#fff" } }, paint: function(t, e) {
                    var n = this,
                        r = n.parsePoint(t, n.from),
                        i = n.parsePoint(t, n.to),
                        a = e.addGroup();
                    n.drawLine(r, i, a), n.drawText(i, a) }, drawLine: function(t, e, n) {
                    var i = this,
                        a = r.substitute("M {x} {y}", t) + r.substitute("L {x} {y}", e),
                        s = r.mix({ path: a }, i.cfg.line);
                    n.addShape("Path", { attrs: s }) }, drawText: function(t, e) {
                    var n = this,
                        i = r.mix({ text: n.text }, n.cfg.text, t),
                        s = e.addShape("Text", { zIndex: 1, attrs: i }),
                        o = s.getBBBox(),
                        u = r.mix({ x: o.minX - a, y: o.minY - a, width: o.width + 2 * a, height: o.height + 2 * a }, n.cfg.rect);
                    e.addShape("rect", { attrs: u }), e.sort() } }), t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(18),
                a = function s(t) { s.superclass.constructor.call(this, t) };
            r.extend(a, i), r.augment(a, { position: [], text: "", cfg: { fill: "#000", "text-anchor": "middle" }, paint: function(t, e) {
                    var n = this,
                        i = n.position,
                        a = n.parsePoint(t, i),
                        s = n.cfg;
                    s = r.mix({ text: n.text }, s, a), e.addShape("Text", { attrs: s }) } }), t.exports = a },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(45),
                a = "#62a4e8",
                s = r.mix(!0, {}, i, { defaultColor: a, colors: { "default": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0"], intervalStack: ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#605ff0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"] }, shape: { point: { fill: a }, hollowPoint: { stroke: a }, interval: { fill: a }, hollowInterval: { stroke: a }, area: { fill: a }, polygon: { fill: a }, hollowPolygon: { stroke: a }, strokePolygon: { fill: a }, hollowArea: { stroke: a }, line: { stroke: a } }, guide: { line: { stroke: a }, rect: { fill: a }, tag: { line: { stroke: a }, rect: { fill: a } } }, tooltipMarker: { stroke: a } });
            t.exports = s },
        function(t, e, n) { "use strict";
            var r = n(1),
                i = n(45),
                a = r.mix(!0, {}, i, { plotCfg: { margin: [20, 80, 60, 80], border: { fill: "#18242E" } }, axis: { top: { labels: { label: { fill: "#D5D4D4" } }, tickLine: { stroke: "#46525F" } }, bottom: { labels: { label: { fill: "#999" } }, line: { stroke: "#46525F" }, tickLine: { stroke: "#46525F" } }, left: { labels: { label: { fill: "#999" } }, line: { stroke: "#46525F" }, tickLine: { stroke: "#46525F" }, grid: { line: { stroke: "#46525F" } } }, right: { labels: { label: { fill: "#999" } }, line: { stroke: "#46525F" }, tickLine: { stroke: "#46525F" } }, circle: { line: { stroke: "#46525F" }, grid: { line: { stroke: "#46525F" } }, labels: { label: { fill: "#999" } } }, gauge: { tickLine: { stroke: "#46525F" }, labels: { label: { fill: "#999" } } }, clock: { tickLine: { stroke: "#46525F" }, subTick: 5, labels: { label: { fill: "#999" } } }, radius: { labels: { label: { fill: "#999" } }, line: { stroke: "#46525F" }, grid: { line: { stroke: "#46525F" } } } }, legend: { right: { word: { fill: "#999" }, title: { fill: "#999" } }, left: { word: { fill: "#999" }, title: { fill: "#999" } }, top: { word: { fill: "#999" } }, bottom: { word: { fill: "#999" } } }, guide: { text: { fill: "#999" }, tag: { text: { fill: "#999" } } } });
            t.exports = a },
        function(t, e, n) { "use strict";
            var r = { "default": n(45), dark: n(306), cheery: n(305) };
            t.exports = r },
        [313, 309, 89],
        function(t, e, n) { "use strict";

            function r(t, e, n, r) {
                var i = t[r] + (e[r] - t[r]) * n;
                return i }
            var i = n(89),
                a = n(1);
            t.exports = { calColor: function(t, e, n) {
                    var a, s = t.length - 1,
                        o = Math.floor(s * e),
                        u = s * e - o,
                        c = t[o],
                        l = o === s ? c : t[o + 1];
                    return "hsl" === n ? a = i.hsl2Rgb([r(c, l, u, 0), r(c, l, u, 1), r(c, l, u, 2)]) : (a = { r: r(c, l, u, 0), g: r(c, l, u, 1), b: r(c, l, u, 2) }, a = "#" + i.toHex(a.r) + i.toHex(a.g) + i.toHex(a.b)), a }, lightness: function(t, e) { e = e || 0;
                    var n = [
                        [e, 1, .9],
                        [e, 1, .5]
                    ];
                    return this.calColor(n, t, "hsl") }, red: function(t) {
                    return this.lightness(t, 0) }, blue: function(t) {
                    return this.lightness(t, .66) }, green: function(t) {
                    return this.lightness(t, .33) }, gradient: function(t) {
                    var e = this,
                        n = [];
                    return a.isString(t) && (t = t.split("-")), a.each(t, function(t) { t.indexOf("#") === -1 && (t = i.toRGB(t)), n.push(i.rgb2arr(t)) }),
                        function(t) {
                            return e.calColor(n, t) } }, gradientHsl: function(t) {
                    var e = this,
                        n = [];
                    return a.isString(t) && (t = t.split("-")), a.each(t, function(t) { t.indexOf("#") === -1 && (t = i.toRGB(t)), n.push(i.rgb2hsl(t)) }),
                        function(t) {
                            return e.calColor(n, t, "hsl") } }, saturation: function(t, e) { e = e || 0;
                    var n = [
                        [e, 0, .5],
                        [e, 1, .5]
                    ];
                    return this.calColor(n, t, "hsl") }, hue: function(t) {
                    var e = [
                        [0, 1, .5],
                        [1, 1, .5]
                    ];
                    return this.calColor(e, t, "hsl") }, brightness: function(t) {
                    var e = [
                        [255, 255, 255],
                        [0, 0, 0]
                    ];
                    return this.calColor(e, t) }, heat: function(t) {
                    var e = [
                        [255, 255, 255],
                        [255, 127.5, 0],
                        [0, 0, 0]
                    ];
                    return this.calColor(e, t) }, rainbow: function(t) {
                    var e = [
                        [0, 255, 255],
                        [0, 0, 255],
                        [0, 255, 0],
                        [255, 0, 0]
                    ];
                    return this.calColor(e, t) }, circular: function(t) {
                    var e = [
                        [0, 0, 255],
                        [0, 255, 0],
                        [255, 255, 0],
                        [255, 0, 0],
                        [0, 0, 255]
                    ];
                    return this.calColor(e, t) }, bipolar: function(t) {
                    var e = [
                        [0, 255, 0],
                        [0, 0, 0],
                        [255, 0, 0]
                    ];
                    return this.calColor(e, t) } } },
        function(t, e, n) { "use strict";

            function r(t) {
                var e = [];
                return s.each(t, function(t) { s.isArray(t) ? e = e.concat(t) : e.push(t) }), e }

            function i(t) {
                var e = [];
                return s.each(t, function(t) { s.isNull(t) || e.push(t) }), e }

            function a(t, e, n) { s.each(n, function(n) { t[n] = e[n] }) }
            var s = n(1),
                o = n(90),
                u = n(312);
            s.mix(o, { values: function(t, e) {
                    for (var n = t.col(e), r = [], i = n.rowCount(), a = 0; a < i; a++) {
                        var o = n.cell(a, 0);
                        void 0 !== o && s.indexOf(r, o) === -1 && r.push(o) }
                    return r }, mean: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.mean(n) }, geometric_mean: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.geometric_mean(n) }, median: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.median(n) }, max: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.max(n) }, min: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.min(n) }, mode: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.mode(n) }, range: function(t, e) {
                    var n = o.max(t, e),
                        r = o.min(t, e);
                    return [r, n] }, sum: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.sum(n) }, quantile: function(t, e, n) {
                    var a = t.colArray(e);
                    return a = r(a), a = i(a), u.quantile(a, n) }, variance: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.variance(n) }, sample_variance: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.sample_variance(n) }, standard_deviation: function(t, e) {
                    var n = t.colArray(e);
                    return n = r(n), n = i(n), u.standard_deviation(n) }, sd: function(t, e) {
                    return o.standard_deviation(t, e) }, se: function(t, e) {
                    var n = t.colArray(e);
                    n = r(n), n = i(n);
                    var a = u.sample_variance(n);
                    return Math.sqrt(a) / Math.sqrt(n.length) }, sort: function(t, e) {
                    var n = t.toJSON();
                    return n.sort(function(t, n) {
                        return t[e] - n[e] }), new o(n, { names: t.colNames() }) }, sortBy: function(t, e) {
                    var n = t.toJSON();
                    return n.sort(e), new o(n, { names: t.colNames() }) }, group: function(t, e) {
                    if (!e) return [t];
                    var n = o.groupToMap(t, e),
                        r = [];
                    for (var i in n) r.push(n[i]);
                    return r }, groupToMap: function(t, e) {
                    var n = t.colNames(),
                        r = {};
                    if (!e) return { 0: t };
                    if (!s.isFunction(e)) {
                        var i = s.isArray(e) ? e : e.replace(/\s+/g, "").split("*");
                        e = function(t) {
                            for (var e = "", n = 0, r = i.length; n < r; n++) e += t[i[n]].toString();
                            return e } }
                    t.each(function(t) {
                        var n = e(t);
                        r[n] ? r[n].push(t) : r[n] = [t] });
                    for (var a in r) r[a] = new o(r[a], { names: n.slice(0) });
                    return r }, filter: function(t, e) {
                    var n = [];
                    return e ? (t.each(function(t, r) { e(t, r) && n.push(t) }), new o(n)) : t }, cumulative: function(t, e) {
                    var n = t.colArray(e);
                    n = i(n);
                    var r = [],
                        a = 0;
                    return s.each(n, function(t) { a += t, r.push(a) }), r }, complement: function(t, e) {
                    var n = t.colNames().slice(0);
                    return s.each(e, function(t) { s.remove(n, t) }), t.cols(n) }, merge: function() {
                    for (var t = s.toArray(arguments), e = t[0], n = e.colNames(), r = e.colCount(), i = [], a = 0; a < r; a++) { i[a] = [];
                        for (var u = 0; u < t.length; u++) {
                            var c = t[u].col(a).toArray()[0];
                            i[a] = i[a].concat(c) } }
                    return new o(i, { names: n }) }, forceMerge: function() {
                    var t = s.toArray(arguments),
                        e = [],
                        n = [];
                    return s.each(t, function(t) {
                        var n = t.colNames();
                        s.each(n, function(t) { s.indexOf(e, t) === -1 && e.push(t) }) }), s.each(t, function(t) {
                        var e = t.toJSON();
                        n = n.concat(e) }), new o(n, { names: e }) }, combin: function() {
                    var t = s.toArray(arguments),
                        e = [],
                        n = [];
                    return s.each(t, function(t) { e = e.concat(t.colNames()), n = n.concat(t.toArray()) }), new o(n, { names: e }) }, combinColumns: function(t, e, n, r, i) {
                    if (r = r || "type", s.isString(i) && (i = [i]), !i) { i = [];
                        var u = t.colNames();
                        s.each(u, function(t) { s.indexOf(e, t) === -1 && i.push(t) }) }
                    var c = [];
                    return t.each(function(t) { s.each(e, function(e) {
                            var s = {};
                            s[n] = t[e], s[r] = e, a(s, t, i), c.push(s) }) }), new o(c) }, combinArray: function() {
                    var t, e = s.toArray(arguments);
                    t = s.isString(e[0]) ? e.shift() : "type";
                    var n = [];
                    return s.each(e, function(e, r) { s.each(e, function(e) { e[t] = r }), n = n.concat(e) }), new o(n) } }), o.Array = { repeat: function(t, e) {
                    for (var n = [], r = 0; r < e; r++) n.push(t);
                    return n } }, t.exports = o },
        function(t, e) {
            /**
             * @license
             *
             * Regression.JS - Regression functions for javascript
             * http://tom-alexander.github.com/regression-js/
             *
             * copyright(c) 2013 Tom Alexander
             * Licensed under the MIT license.
             *
             **/
            "use strict";
            var n = function(t, e) {
                    var n = 0,
                        r = 0,
                        i = 0,
                        a = 0,
                        s = 0,
                        o = t.length - 1,
                        u = new Array(e);
                    for (n = 0; n < o; n++) {
                        for (a = n, r = n + 1; r < o; r++) Math.abs(t[n][r]) > Math.abs(t[n][a]) && (a = r);
                        for (i = n; i < o + 1; i++) s = t[i][n], t[i][n] = t[i][a], t[i][a] = s;
                        for (r = n + 1; r < o; r++)
                            for (i = o; i >= n; i--) t[i][r] -= t[i][n] * t[n][r] / t[n][n] }
                    for (r = o - 1; r >= 0; r--) {
                        for (s = 0, i = r + 1; i < o; i++) s += t[i][r] * u[i];
                        u[r] = (t[o][r] - s) / t[r][r] }
                    return u },
                r = { linear: function(t) {
                        for (var e = [0, 0, 0, 0, 0], n = 0, r = []; n < t.length; n++) null != t[n][1] && (e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][0] * t[n][0], e[3] += t[n][0] * t[n][1], e[4] += t[n][1] * t[n][1]);
                        for (var i = (n * e[3] - e[0] * e[1]) / (n * e[2] - e[0] * e[0]), a = e[1] / n - i * e[0] / n, s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], t[s][0] * i + a];
                            r.push(u) }
                        var c = "y = " + Math.round(100 * i) / 100 + "x + " + Math.round(100 * a) / 100;
                        return { equation: [i, a], points: r, string: c } }, linearThroughOrigin: function(t) {
                        for (var e = [0, 0], n = 0, r = []; n < t.length; n++) null != t[n][1] && (e[0] += t[n][0] * t[n][0], e[1] += t[n][0] * t[n][1]);
                        for (var i = e[1] / e[0], a = 0, s = t.length; a < s; a++) {
                            var o = [t[a][0], t[a][0] * i];
                            r.push(o) }
                        var u = "y = " + Math.round(100 * i) / 100 + "x";
                        return { equation: [i], points: r, string: u } }, exponential: function(t) {
                        var e = [0, 0, 0, 0, 0, 0],
                            n = 0,
                            r = [];
                        for (u = t.length; n < u; n++) null != t[n][1] && (e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][0] * t[n][0] * t[n][1], e[3] += t[n][1] * Math.log(t[n][1]), e[4] += t[n][0] * t[n][1] * Math.log(t[n][1]), e[5] += t[n][0] * t[n][1]);
                        for (var i = e[1] * e[2] - e[5] * e[5], a = Math.pow(Math.E, (e[2] * e[3] - e[5] * e[4]) / i), s = (e[1] * e[4] - e[5] * e[3]) / i, o = 0, u = t.length; o < u; o++) {
                            var c = [t[o][0], a * Math.pow(Math.E, s * t[o][0])];
                            r.push(c) }
                        var l = "y = " + Math.round(100 * a) / 100 + "e^(" + Math.round(100 * s) / 100 + "x)";
                        return { equation: [a, s], points: r, string: l } }, logarithmic: function(t) {
                        var e = [0, 0, 0, 0],
                            n = 0,
                            r = [];
                        for (o = t.length; n < o; n++) null != t[n][1] && (e[0] += Math.log(t[n][0]), e[1] += t[n][1] * Math.log(t[n][0]), e[2] += t[n][1], e[3] += Math.pow(Math.log(t[n][0]), 2));
                        for (var i = (n * e[1] - e[2] * e[0]) / (n * e[3] - e[0] * e[0]), a = (e[2] - i * e[0]) / n, s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], a + i * Math.log(t[s][0])];
                            r.push(u) }
                        var c = "y = " + Math.round(100 * a) / 100 + " + " + Math.round(100 * i) / 100 + " ln(x)";
                        return { equation: [a, i], points: r, string: c } }, power: function(t) {
                        var e = [0, 0, 0, 0],
                            n = 0,
                            r = [];
                        for (o = t.length; n < o; n++) null != t[n][1] && (e[0] += Math.log(t[n][0]), e[1] += Math.log(t[n][1]) * Math.log(t[n][0]), e[2] += Math.log(t[n][1]), e[3] += Math.pow(Math.log(t[n][0]), 2));
                        for (var i = (n * e[1] - e[2] * e[0]) / (n * e[3] - e[0] * e[0]), a = Math.pow(Math.E, (e[2] - i * e[0]) / n), s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], a * Math.pow(t[s][0], i)];
                            r.push(u) }
                        var c = "y = " + Math.round(100 * a) / 100 + "x^" + Math.round(100 * i) / 100;
                        return { equation: [a, i], points: r, string: c } }, polynomial: function(t, e) { "undefined" == typeof e && (e = 2);
                        for (var r = [], i = [], a = [], s = 0, o = 0, u = 0, c = e + 1; u < c; u++) {
                            for (var l = 0, h = t.length; l < h; l++) null != t[l][1] && (s += Math.pow(t[l][0], u) * t[l][1]);
                            r.push(s), s = 0;
                            for (var f = [], g = 0; g < c; g++) {
                                for (var l = 0, h = t.length; l < h; l++) null != t[l][1] && (o += Math.pow(t[l][0], u + g));
                                f.push(o), o = 0 }
                            i.push(f) }
                        i.push(r);
                        for (var p = n(i, c), u = 0, h = t.length; u < h; u++) {
                            for (var v = 0, d = 0; d < p.length; d++) v += p[d] * Math.pow(t[u][0], d);
                            a.push([t[u][0], v]) }
                        for (var x = "y = ", u = p.length - 1; u >= 0; u--) x += u > 1 ? Math.round(p[u] * Math.pow(10, u)) / Math.pow(10, u) + "x^" + u + " + " : 1 == u ? Math.round(100 * p[u]) / 100 + "x + " : Math.round(100 * p[u]) / 100;
                        return { equation: p, points: a, string: x } }, lastvalue: function(t) {
                        for (var e = [], n = null, r = 0; r < t.length; r++) t[r][1] ? (n = t[r][1], e.push([t[r][0], t[r][1]])) : e.push([t[r][0], n]);
                        return { equation: [n], points: e, string: "" + n } } },
                i = function(t, e, n) {
                    if ("string" == typeof t) return r[t](e, n) };
            t.exports = i
        },
        function(t, e, n) {! function() {
                function e() {
                    var t = {},
                        e = [];
                    return t.data = function(n) {
                        return arguments.length ? (e = n.slice(), t) : e }, t.mb = function() {
                        var t, n, r = e.length;
                        if (1 === r) t = 0, n = e[0][1];
                        else {
                            for (var i, a, s, o = 0, u = 0, c = 0, l = 0, h = 0; h < r; h++) i = e[h], a = i[0], s = i[1], o += a, u += s, c += a * a, l += a * s;
                            t = (r * l - o * u) / (r * c - o * o), n = u / r - t * o / r }
                        return { m: t, b: n } }, t.m = function() {
                        return t.mb().m }, t.b = function() {
                        return t.mb().b }, t.line = function() {
                        var e = t.mb(),
                            n = e.m,
                            r = e.b;
                        return function(t) {
                            return r + n * t } }, t }

                function n(t, e) {
                    if (t.length < 2) return 1;
                    for (var n, r = 0, i = 0; i < t.length; i++) r += t[i][1];
                    n = r / t.length;
                    for (var a = 0, s = 0; s < t.length; s++) a += Math.pow(n - t[s][1], 2);
                    for (var o = 0, u = 0; u < t.length; u++) o += Math.pow(t[u][1] - e(t[u][0]), 2);
                    return 1 - o / a }

                function r() {
                    var t = {},
                        e = 0,
                        n = {};
                    return t.train = function(t, r) { n[r] || (n[r] = {});
                        for (var i in t) {
                            var a = t[i];
                            void 0 === n[r][i] && (n[r][i] = {}), void 0 === n[r][i][a] && (n[r][i][a] = 0), n[r][i][t[i]]++ }
                        e++ }, t.score = function(t) {
                        var r, i = {};
                        for (var a in t) {
                            var s = t[a];
                            for (r in n) void 0 === i[r] && (i[r] = {}), n[r][a] ? i[r][a + "_" + s] = (n[r][a][s] || 0) / e : i[r][a + "_" + s] = 0 }
                        var o = {};
                        for (r in i)
                            for (var u in i[r]) void 0 === o[r] && (o[r] = 0), o[r] += i[r][u];
                        return o }, t }

                function i(t) {
                    for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                    return e }

                function a(t) {
                    return 0 === t.length ? null : i(t) / t.length }

                function s(t) {
                    if (0 === t.length) return null;
                    for (var e = 1, n = 0; n < t.length; n++) {
                        if (t[n] <= 0) return null;
                        e *= t[n] }
                    return Math.pow(e, 1 / t.length) }

                function o(t) {
                    if (0 === t.length) return null;
                    for (var e = 0, n = 0; n < t.length; n++) {
                        if (t[n] <= 0) return null;
                        e += 1 / t[n] }
                    return t.length / e }

                function u(t) {
                    if (0 === t.length) return null;
                    for (var e = 0, n = 0; n < t.length; n++) e += Math.pow(t[n], 2);
                    return Math.sqrt(e / t.length) }

                function c(t) {
                    for (var e, n = 0; n < t.length; n++)(t[n] < e || void 0 === e) && (e = t[n]);
                    return e }

                function l(t) {
                    for (var e, n = 0; n < t.length; n++)(t[n] > e || void 0 === e) && (e = t[n]);
                    return e }

                function h(t) {
                    if (0 === t.length) return null;
                    for (var e = a(t), n = [], r = 0; r < t.length; r++) n.push(Math.pow(t[r] - e, 2));
                    return a(n) }

                function f(t) {
                    return 0 === t.length ? null : Math.sqrt(h(t)) }

                function g(t, e) {
                    for (var n = a(t), r = 0, i = 0; i < t.length; i++) r += Math.pow(t[i] - n, e);
                    return r }

                function p(t) {
                    if (t.length <= 1) return null;
                    var e = g(t, 2);
                    return e / (t.length - 1) }

                function v(t) {
                    return t.length <= 1 ? null : Math.sqrt(p(t)) }

                function d(t, e) {
                    if (t.length <= 1 || t.length != e.length) return null;
                    for (var n = a(t), r = a(e), i = 0, s = 0; s < t.length; s++) i += (t[s] - n) * (e[s] - r);
                    return i / (t.length - 1) }

                function x(t, e) {
                    var n = d(t, e),
                        r = v(t),
                        i = v(e);
                    return null === n || null === r || null === i ? null : n / r / i }

                function m(t) {
                    if (0 === t.length) return null;
                    var e = t.slice().sort(function(t, e) {
                        return t - e });
                    if (e.length % 2 === 1) return e[(e.length - 1) / 2];
                    var n = e[e.length / 2 - 1],
                        r = e[e.length / 2];
                    return (n + r) / 2 }

                function y(t) {
                    if (0 === t.length) return null;
                    if (1 === t.length) return t[0];
                    for (var e, n = t.slice().sort(function(t, e) {
                            return t - e }), r = n[0], i = 0, a = 1, s = 1; s < n.length + 1; s++) n[s] !== r ? (a > i && (i = a, e = r), a = 1, r = n[s]) : a++;
                    return e }

                function _(t, e) {
                    var n = a(t),
                        r = f(t),
                        i = Math.sqrt(t.length);
                    return (n - e) / (r / i) }

                function S(t, e, n) {
                    var r = t.length,
                        i = e.length;
                    if (!r || !i) return null;
                    n || (n = 0);
                    var s = a(t),
                        o = a(e),
                        u = ((r - 1) * p(t) + (i - 1) * p(e)) / (r + i - 2);
                    return (s - o - n) / Math.sqrt(u * (1 / r + 1 / i)) }

                function w(t, e) {
                    var n = [];
                    if (e <= 0) return null;
                    for (var r = 0; r < t.length; r += e) n.push(t.slice(r, r + e));
                    return n }

                function b(t, e) { e = e || Math.random;
                    for (var n, r, i = t.length; i > 0;) r = Math.floor(e() * i--), n = t[i], t[i] = t[r], t[r] = n;
                    return t }

                function M(t, e) {
                    return t = t.slice(), b(t.slice(), e) }

                function A(t, e, n) {
                    var r = M(t, n);
                    return r.slice(0, e) }

                function C(t, e) {
                    if (0 === t.length) return null;
                    var n = t.slice().sort(function(t, e) {
                        return t - e });
                    if (e.length) {
                        for (var r = [], i = 0; i < e.length; i++) r[i] = k(n, e[i]);
                        return r }
                    return k(n, e) }

                function k(t, e) {
                    var n = t.length * e;
                    return e < 0 || e > 1 ? null : 1 === e ? t[t.length - 1] : 0 === e ? t[0] : n % 1 !== 0 ? t[Math.ceil(n) - 1] : t.length % 2 === 0 ? (t[n - 1] + t[n]) / 2 : t[n] }

                function P(t) {
                    return 0 === t.length ? null : C(t, .75) - C(t, .25) }

                function T(t) {
                    if (!t || 0 === t.length) return null;
                    for (var e = m(t), n = [], r = 0; r < t.length; r++) n.push(Math.abs(t[r] - e));
                    return m(n) }

                function I(t, e) {
                    var n, r, i = [],
                        a = [],
                        s = 0;
                    for (n = 0; n < t.length + 1; n++) {
                        var o = [],
                            u = [];
                        for (r = 0; r < e + 1; r++) o.push(0), u.push(0);
                        i.push(o), a.push(u) }
                    for (n = 1; n < e + 1; n++)
                        for (i[1][n] = 1, a[1][n] = 0, r = 2; r < t.length + 1; r++) a[r][n] = 1 / 0;
                    for (var c = 2; c < t.length + 1; c++) {
                        for (var l = 0, h = 0, f = 0, g = 0, p = 1; p < c + 1; p++) {
                            var v = c - p + 1,
                                d = t[v - 1];
                            if (f++, l += d, h += d * d, s = h - l * l / f, g = v - 1, 0 !== g)
                                for (r = 2; r < e + 1; r++) a[c][r] >= s + a[g][r - 1] && (i[c][r] = v, a[c][r] = s + a[g][r - 1]) }
                        i[c][1] = 1, a[c][1] = s }
                    return { lower_class_limits: i, variance_combinations: a } }

                function D(t, e, n) {
                    var r = t.length - 1,
                        i = [],
                        a = n;
                    for (i[n] = t[t.length - 1], i[0] = t[0]; a > 1;) i[a - 1] = t[e[r][a] - 2], r = e[r][a] - 1, a--;
                    return i }

                function L(t, e) {
                    if (e > t.length) return null;
                    t = t.slice().sort(function(t, e) {
                        return t - e });
                    var n = I(t, e),
                        r = n.lower_class_limits;
                    return D(t, r, e) }

                function R(t) {
                    if (t.length < 3) return null;
                    var e = t.length,
                        n = Math.pow(v(t), 3),
                        r = g(t, 3);
                    return e * r / ((e - 1) * (e - 2) * n) }

                function B(t) {
                    var e = Math.abs(t),
                        n = Math.floor(10 * e),
                        r = 10 * (Math.floor(100 * e) / 10 - Math.floor(100 * e / 10)),
                        i = Math.min(10 * n + r, E.length - 1);
                    return t >= 0 ? E[i] : +(1 - E[i]).toFixed(4) }

                function F(t, e, n) {
                    return (t - e) / n }

                function O(t) {
                    if (t < 0) return null;
                    for (var e = 1, n = 2; n <= t; n++) e *= n;
                    return e }

                function G(t) {
                    return t < 0 || t > 1 ? null : N(1, t) }

                function N(t, e) {
                    function n(t, e, n) {
                        return O(e) / (O(t) * O(e - t)) * (Math.pow(n, t) * Math.pow(1 - n, e - t)) }
                    if (e < 0 || e > 1 || t <= 0 || t % 1 !== 0) return null;
                    var r = 0,
                        i = 0,
                        a = {};
                    do a[r] = n(r, t, e), i += a[r], r++; while (i < 1 - V);
                    return a }

                function z(t) {
                    function e(t, e) {
                        return Math.pow(Math.E, -e) * Math.pow(e, t) / O(t) }
                    if (t <= 0) return null;
                    var n = 0,
                        r = 0,
                        i = {};
                    do i[n] = e(n, t), r += i[n], n++; while (r < 1 - V);
                    return i }

                function Y(t, e, n) {
                    for (var r, i, s = a(t), o = 0, u = 1, c = e(s), l = [], h = [], f = 0; f < t.length; f++) void 0 === l[t[f]] && (l[t[f]] = 0), l[t[f]]++;
                    for (f = 0; f < l.length; f++) void 0 === l[f] && (l[f] = 0);
                    for (i in c) i in l && (h[i] = c[i] * t.length);
                    for (i = h.length - 1; i >= 0; i--) h[i] < 3 && (h[i - 1] += h[i], h.pop(), l[i - 1] += l[i], l.pop());
                    for (i = 0; i < l.length; i++) o += Math.pow(l[i] - h[i], 2) / h[i];
                    return r = l.length - u - 1, q[r][n] < o }

                function X(t) {
                    function e(t) {
                        return function() {
                            var e = Array.prototype.slice.apply(arguments);
                            return e.unshift(this), j[t].apply(j, e) } }
                    var n = !(!Object.defineProperty || !Object.defineProperties);
                    if (!n) throw new Error("without defineProperty, simple-statistics cannot be mixed in");
                    var r, i = ["median", "standard_deviation", "sum", "sample_skewness", "mean", "min", "max", "quantile", "geometric_mean", "harmonic_mean", "root_mean_square"];
                    r = t ? t.slice() : Array.prototype;
                    for (var a = 0; a < i.length; a++) Object.defineProperty(r, i[a], { value: e(i[a]), configurable: !0, enumerable: !1, writable: !0 });
                    return r }
                var j = {};
                t.exports = j;
                var E = [.5, .504, .508, .512, .516, .5199, .5239, .5279, .5319, .5359, .5398, .5438, .5478, .5517, .5557, .5596, .5636, .5675, .5714, .5753, .5793, .5832, .5871, .591, .5948, .5987, .6026, .6064, .6103, .6141, .6179, .6217, .6255, .6293, .6331, .6368, .6406, .6443, .648, .6517, .6554, .6591, .6628, .6664, .67, .6736, .6772, .6808, .6844, .6879, .6915, .695, .6985, .7019, .7054, .7088, .7123, .7157, .719, .7224, .7257, .7291, .7324, .7357, .7389, .7422, .7454, .7486, .7517, .7549, .758, .7611, .7642, .7673, .7704, .7734, .7764, .7794, .7823, .7852, .7881, .791, .7939, .7967, .7995, .8023, .8051, .8078, .8106, .8133, .8159, .8186, .8212, .8238, .8264, .8289, .8315, .834, .8365, .8389, .8413, .8438, .8461, .8485, .8508, .8531, .8554, .8577, .8599, .8621, .8643, .8665, .8686, .8708, .8729, .8749, .877, .879, .881, .883, .8849, .8869, .8888, .8907, .8925, .8944, .8962, .898, .8997, .9015, .9032, .9049, .9066, .9082, .9099, .9115, .9131, .9147, .9162, .9177, .9192, .9207, .9222, .9236, .9251, .9265, .9279, .9292, .9306, .9319, .9332, .9345, .9357, .937, .9382, .9394, .9406, .9418, .9429, .9441, .9452, .9463, .9474, .9484, .9495, .9505, .9515, .9525, .9535, .9545, .9554, .9564, .9573, .9582, .9591, .9599, .9608, .9616, .9625, .9633, .9641, .9649, .9656, .9664, .9671, .9678, .9686, .9693, .9699, .9706, .9713, .9719, .9726, .9732, .9738, .9744, .975, .9756, .9761, .9767, .9772, .9778, .9783, .9788, .9793, .9798, .9803, .9808, .9812, .9817, .9821, .9826, .983, .9834, .9838, .9842, .9846, .985, .9854, .9857, .9861, .9864, .9868, .9871, .9875, .9878, .9881, .9884, .9887, .989, .9893, .9896, .9898, .9901, .9904, .9906, .9909, .9911, .9913, .9916, .9918, .992, .9922, .9925, .9927, .9929, .9931, .9932, .9934, .9936, .9938, .994, .9941, .9943, .9945, .9946, .9948, .9949, .9951, .9952, .9953, .9955, .9956, .9957, .9959, .996, .9961, .9962, .9963, .9964, .9965, .9966, .9967, .9968, .9969, .997, .9971, .9972, .9973, .9974, .9974, .9975, .9976, .9977, .9977, .9978, .9979, .9979, .998, .9981, .9981, .9982, .9982, .9983, .9984, .9984, .9985, .9985, .9986, .9986, .9987, .9987, .9987, .9988, .9988, .9989, .9989, .9989, .999, .999],
                    V = 1e-4,
                    q = { 1: { .995: 0, .99: 0, .975: 0, .95: 0, .9: .02, .5: .45, .1: 2.71, .05: 3.84, .025: 5.02, .01: 6.63, .005: 7.88 }, 2: { .995: .01, .99: .02, .975: .05, .95: .1, .9: .21, .5: 1.39, .1: 4.61, .05: 5.99, .025: 7.38, .01: 9.21, .005: 10.6 }, 3: { .995: .07, .99: .11, .975: .22, .95: .35, .9: .58, .5: 2.37, .1: 6.25, .05: 7.81, .025: 9.35, .01: 11.34, .005: 12.84 }, 4: { .995: .21, .99: .3, .975: .48, .95: .71, .9: 1.06, .5: 3.36, .1: 7.78, .05: 9.49, .025: 11.14, .01: 13.28, .005: 14.86 }, 5: { .995: .41, .99: .55, .975: .83, .95: 1.15, .9: 1.61, .5: 4.35, .1: 9.24, .05: 11.07, .025: 12.83, .01: 15.09, .005: 16.75 }, 6: { .995: .68, .99: .87, .975: 1.24, .95: 1.64, .9: 2.2, .5: 5.35, .1: 10.65, .05: 12.59, .025: 14.45, .01: 16.81, .005: 18.55 }, 7: { .995: .99, .99: 1.25, .975: 1.69, .95: 2.17, .9: 2.83, .5: 6.35, .1: 12.02, .05: 14.07, .025: 16.01, .01: 18.48, .005: 20.28 }, 8: { .995: 1.34, .99: 1.65, .975: 2.18, .95: 2.73, .9: 3.49, .5: 7.34, .1: 13.36, .05: 15.51, .025: 17.53, .01: 20.09, .005: 21.96 }, 9: { .995: 1.73, .99: 2.09, .975: 2.7, .95: 3.33, .9: 4.17, .5: 8.34, .1: 14.68, .05: 16.92, .025: 19.02, .01: 21.67, .005: 23.59 }, 10: { .995: 2.16, .99: 2.56, .975: 3.25, .95: 3.94, .9: 4.87, .5: 9.34, .1: 15.99, .05: 18.31, .025: 20.48, .01: 23.21, .005: 25.19 }, 11: { .995: 2.6, .99: 3.05, .975: 3.82, .95: 4.57, .9: 5.58, .5: 10.34, .1: 17.28, .05: 19.68, .025: 21.92, .01: 24.72, .005: 26.76 }, 12: { .995: 3.07, .99: 3.57, .975: 4.4, .95: 5.23, .9: 6.3, .5: 11.34, .1: 18.55, .05: 21.03, .025: 23.34, .01: 26.22, .005: 28.3 }, 13: { .995: 3.57, .99: 4.11, .975: 5.01, .95: 5.89, .9: 7.04, .5: 12.34, .1: 19.81, .05: 22.36, .025: 24.74, .01: 27.69, .005: 29.82 }, 14: { .995: 4.07, .99: 4.66, .975: 5.63, .95: 6.57, .9: 7.79, .5: 13.34, .1: 21.06, .05: 23.68, .025: 26.12, .01: 29.14, .005: 31.32 }, 15: { .995: 4.6, .99: 5.23, .975: 6.27, .95: 7.26, .9: 8.55, .5: 14.34, .1: 22.31, .05: 25, .025: 27.49, .01: 30.58, .005: 32.8 }, 16: { .995: 5.14, .99: 5.81, .975: 6.91, .95: 7.96, .9: 9.31, .5: 15.34, .1: 23.54, .05: 26.3, .025: 28.85, .01: 32, .005: 34.27 }, 17: { .995: 5.7, .99: 6.41, .975: 7.56, .95: 8.67, .9: 10.09, .5: 16.34, .1: 24.77, .05: 27.59, .025: 30.19, .01: 33.41, .005: 35.72 }, 18: { .995: 6.26, .99: 7.01, .975: 8.23, .95: 9.39, .9: 10.87, .5: 17.34, .1: 25.99, .05: 28.87, .025: 31.53, .01: 34.81, .005: 37.16 }, 19: { .995: 6.84, .99: 7.63, .975: 8.91, .95: 10.12, .9: 11.65, .5: 18.34, .1: 27.2, .05: 30.14, .025: 32.85, .01: 36.19, .005: 38.58 }, 20: { .995: 7.43, .99: 8.26, .975: 9.59, .95: 10.85, .9: 12.44, .5: 19.34, .1: 28.41, .05: 31.41, .025: 34.17, .01: 37.57, .005: 40 }, 21: { .995: 8.03, .99: 8.9, .975: 10.28, .95: 11.59, .9: 13.24, .5: 20.34, .1: 29.62, .05: 32.67, .025: 35.48, .01: 38.93, .005: 41.4 }, 22: { .995: 8.64, .99: 9.54, .975: 10.98, .95: 12.34, .9: 14.04, .5: 21.34, .1: 30.81, .05: 33.92, .025: 36.78, .01: 40.29, .005: 42.8 }, 23: { .995: 9.26, .99: 10.2, .975: 11.69, .95: 13.09, .9: 14.85, .5: 22.34, .1: 32.01, .05: 35.17, .025: 38.08, .01: 41.64, .005: 44.18 }, 24: { .995: 9.89, .99: 10.86, .975: 12.4, .95: 13.85, .9: 15.66, .5: 23.34, .1: 33.2, .05: 36.42, .025: 39.36, .01: 42.98, .005: 45.56 }, 25: { .995: 10.52, .99: 11.52, .975: 13.12, .95: 14.61, .9: 16.47, .5: 24.34, .1: 34.28, .05: 37.65, .025: 40.65, .01: 44.31, .005: 46.93 }, 26: { .995: 11.16, .99: 12.2, .975: 13.84, .95: 15.38, .9: 17.29, .5: 25.34, .1: 35.56, .05: 38.89, .025: 41.92, .01: 45.64, .005: 48.29 }, 27: { .995: 11.81, .99: 12.88, .975: 14.57, .95: 16.15, .9: 18.11, .5: 26.34, .1: 36.74, .05: 40.11, .025: 43.19, .01: 46.96, .005: 49.65 }, 28: { .995: 12.46, .99: 13.57, .975: 15.31, .95: 16.93, .9: 18.94, .5: 27.34, .1: 37.92, .05: 41.34, .025: 44.46, .01: 48.28, .005: 50.99 }, 29: { .995: 13.12, .99: 14.26, .975: 16.05, .95: 17.71, .9: 19.77, .5: 28.34, .1: 39.09, .05: 42.56, .025: 45.72, .01: 49.59, .005: 52.34 }, 30: { .995: 13.79, .99: 14.95, .975: 16.79, .95: 18.49, .9: 20.6, .5: 29.34, .1: 40.26, .05: 43.77, .025: 46.98, .01: 50.89, .005: 53.67 }, 40: { .995: 20.71, .99: 22.16, .975: 24.43, .95: 26.51, .9: 29.05, .5: 39.34, .1: 51.81, .05: 55.76, .025: 59.34, .01: 63.69, .005: 66.77 }, 50: { .995: 27.99, .99: 29.71, .975: 32.36, .95: 34.76, .9: 37.69, .5: 49.33, .1: 63.17, .05: 67.5, .025: 71.42, .01: 76.15, .005: 79.49 }, 60: { .995: 35.53, .99: 37.48, .975: 40.48, .95: 43.19, .9: 46.46, .5: 59.33, .1: 74.4, .05: 79.08, .025: 83.3, .01: 88.38, .005: 91.95 }, 70: { .995: 43.28, .99: 45.44, .975: 48.76, .95: 51.74, .9: 55.33, .5: 69.33, .1: 85.53, .05: 90.53, .025: 95.02, .01: 100.42, .005: 104.22 }, 80: { .995: 51.17, .99: 53.54, .975: 57.15, .95: 60.39, .9: 64.28, .5: 79.33, .1: 96.58, .05: 101.88, .025: 106.63, .01: 112.33, .005: 116.32 }, 90: { .995: 59.2, .99: 61.75, .975: 65.65, .95: 69.13, .9: 73.29, .5: 89.33, .1: 107.57, .05: 113.14, .025: 118.14, .01: 124.12, .005: 128.3 }, 100: { .995: 67.33, .99: 70.06, .975: 74.22, .95: 77.93, .9: 82.36, .5: 99.33, .1: 118.5, .05: 124.34, .025: 129.56, .01: 135.81, .005: 140.17 } };
                j.linear_regression = e, j.standard_deviation = f, j.r_squared = n, j.median = m, j.mean = a, j.mode = y, j.min = c, j.max = l, j.sum = i, j.quantile = C, j.quantile_sorted = k, j.iqr = P, j.mad = T, j.chunk = w, j.shuffle = M, j.shuffle_in_place = b, j.sample = A, j.sample_covariance = d, j.sample_correlation = x, j.sample_variance = p, j.sample_standard_deviation = v, j.sample_skewness = R, j.geometric_mean = s, j.harmonic_mean = o, j.root_mean_square = u, j.variance = h, j.t_test = _, j.t_test_two_sample = S, j.jenksMatrices = I, j.jenksBreaks = D, j.jenks = L, j.bayesian = r, j.epsilon = V, j.factorial = O, j.bernoulli_distribution = G, j.binomial_distribution = N, j.poisson_distribution = z, j.chi_squared_goodness_of_fit = Y, j.z_score = F, j.cumulative_std_normal_probability = B, j.standard_normal_table = E, j.average = a, j.interquartile_range = P, j.mixin = X, j.median_absolute_deviation = T, j.rms = u }(this) },
        function(t, e, n, r, i) {
            var a = n(r);
            a.Util = n(i), t.exports = a }
    ]))
});
