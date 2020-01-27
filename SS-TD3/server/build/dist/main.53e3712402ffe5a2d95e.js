(window.webpackJsonp = window.webpackJsonp || []).push([[1], { "+SKG": function (t, e) { t.exports = function (t) { return n && global.Buffer.isBuffer(t) || o && (t instanceof global.ArrayBuffer || r(t)); }; var n = "function" == typeof global.Buffer && "function" == typeof global.Buffer.isBuffer, o = "function" == typeof global.ArrayBuffer, r = o && "function" == typeof global.ArrayBuffer.isView ? global.ArrayBuffer.isView : function (t) { return t.buffer instanceof global.ArrayBuffer; }; }, "/RX3": function (t, e, n) { function o(t) { if (t)
            return function (t) { for (var e in o.prototype)
                t[e] = o.prototype[e]; return t; }(t); } t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this; }, o.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments); } return n.fn = e, this.on(t, n), this; }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this; var n, o = this._callbacks["$" + t]; if (!o)
            return this; if (1 == arguments.length)
            return delete this._callbacks["$" + t], this; for (var r = 0; r < o.length; r++)
            if ((n = o[r]) === e || n.fn === e) {
                o.splice(r, 1);
                break;
            } return this; }, o.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t]; if (n)
            for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o)
                n[o].apply(this, e); return this; }, o.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []; }, o.prototype.hasListeners = function (t) { return !!this.listeners(t).length; }; }, 0: function (t, e, n) { t.exports = n("zUnb"); }, "0+mJ": function (t, e, n) { var o = n("fg2H"), r = n("K/+X"), i = n("rfC7"), a = n("YzUL"); e.polling = function (t) { var e = !1, n = !1, a = !1 !== t.jsonp; if ("undefined" != typeof location) {
            var s = "https:" === location.protocol, l = location.port;
            l || (l = s ? 443 : 80), e = t.hostname !== location.hostname || l !== t.port, n = t.secure !== s;
        } if (t.xdomain = e, t.xscheme = n, "open" in new o(t) && !t.forceJSONP)
            return new r(t); if (!a)
            throw new Error("JSONP disabled"); return new i(t); }, e.websocket = a; }, "0Agi": function (t, e) { var n = 1e3, o = 6e4, r = 36e5, i = 24 * r; function a(t, e, n) { if (!(t < e))
            return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"; } t.exports = function (t, e) { e = e || {}; var s, l = typeof t; if ("string" === l && t.length > 0)
            return function (t) { if (!((t = String(t)).length > 100)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var a = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y": return 315576e5 * a;
                        case "days":
                        case "day":
                        case "d": return a * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h": return a * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m": return a * o;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s": return a * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms": return a;
                        default: return;
                    }
                }
            } }(t); if ("number" === l && !1 === isNaN(t))
            return e.long ? a(s = t, i, "day") || a(s, r, "hour") || a(s, o, "minute") || a(s, n, "second") || s + " ms" : function (t) { return t >= i ? Math.round(t / i) + "d" : t >= r ? Math.round(t / r) + "h" : t >= o ? Math.round(t / o) + "m" : t >= n ? Math.round(t / n) + "s" : t + "ms"; }(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)); }; }, "0z79": function (t, e, n) { var o = n("AdPF"), r = n("CUme"), i = n("1Mk5"), a = n("Yvos"), s = n("HjK1")("engine.io-client:polling-xhr"); function l() { } function u(t) { if (r.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, global.location) {
            var e = "https:" === location.protocol, n = location.port;
            n || (n = e ? 443 : 80), this.xd = t.hostname !== global.location.hostname || n !== t.port, this.xs = t.secure !== e;
        } } function c(t) { this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create(); } function p() { for (var t in c.requests)
            c.requests.hasOwnProperty(t) && c.requests[t].abort(); } t.exports = u, t.exports.Request = c, a(u, r), u.prototype.supportsBinary = !0, u.prototype.request = function (t) { return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new c(t); }, u.prototype.doWrite = function (t, e) { var n = this.request({ method: "POST", data: t, isBinary: "string" != typeof t && void 0 !== t }), o = this; n.on("success", e), n.on("error", (function (t) { o.onError("xhr post error", t); })), this.sendXhr = n; }, u.prototype.doPoll = function () { s("xhr poll"); var t = this.request(), e = this; t.on("data", (function (t) { e.onData(t); })), t.on("error", (function (t) { e.onError("xhr poll error", t); })), this.pollXhr = t; }, i(c.prototype), c.prototype.create = function () { var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR }; t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized; var e = this.xhr = new o(t), n = this; try {
            s("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
            try {
                if (this.extraHeaders)
                    for (var r in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders)
                        this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r]);
            }
            catch (i) { }
            if ("POST" === this.method)
                try {
                    e.setRequestHeader("Content-type", this.isBinary ? "application/octet-stream" : "text/plain;charset=UTF-8");
                }
                catch (i) { }
            try {
                e.setRequestHeader("Accept", "*/*");
            }
            catch (i) { }
            "withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () { n.onLoad(); }, e.onerror = function () { n.onError(e.responseText); }) : e.onreadystatechange = function () { if (2 === e.readyState)
                try {
                    var t = e.getResponseHeader("Content-Type");
                    n.supportsBinary && "application/octet-stream" === t && (e.responseType = "arraybuffer");
                }
                catch (i) { } 4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout((function () { n.onError(e.status); }), 0)); }, s("xhr data %s", this.data), e.send(this.data);
        }
        catch (i) {
            return void setTimeout((function () { n.onError(i); }), 0);
        } global.document && (this.index = c.requestsCount++, c.requests[this.index] = this); }, c.prototype.onSuccess = function () { this.emit("success"), this.cleanup(); }, c.prototype.onData = function (t) { this.emit("data", t), this.onSuccess(); }, c.prototype.onError = function (t) { this.emit("error", t), this.cleanup(!0); }, c.prototype.cleanup = function (t) { if (null != this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, t)
                try {
                    this.xhr.abort();
                }
                catch (e) { }
            global.document && delete c.requests[this.index], this.xhr = null;
        } }, c.prototype.onLoad = function () { var t; try {
            var e;
            try {
                e = this.xhr.getResponseHeader("Content-Type");
            }
            catch (n) { }
            t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText;
        }
        catch (n) {
            this.onError(n);
        } null != t && this.onData(t); }, c.prototype.hasXDR = function () { return void 0 !== global.XDomainRequest && !this.xs && this.enablesXDR; }, c.prototype.abort = function () { this.cleanup(); }, c.requestsCount = 0, c.requests = {}, global.document && (global.attachEvent ? global.attachEvent("onunload", p) : global.addEventListener && global.addEventListener("beforeunload", p, !1)); }, "0zaL": function (t, e, n) { var o = n("hWa/"), r = n("/RX3"); function i(t) { this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress; } t.exports = i, r(i.prototype), i.prototype.onError = function (t, e) { var n = new Error(t); return n.type = "TransportError", n.description = e, this.emit("error", n), this; }, i.prototype.open = function () { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this; }, i.prototype.close = function () { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this; }, i.prototype.send = function (t) { if ("open" !== this.readyState)
            throw new Error("Transport not open"); this.write(t); }, i.prototype.onOpen = function () { this.readyState = "open", this.writable = !0, this.emit("open"); }, i.prototype.onData = function (t) { var e = o.decodePacket(t, this.socket.binaryType); this.onPacket(e); }, i.prototype.onPacket = function (t) { this.emit("packet", t); }, i.prototype.onClose = function () { this.readyState = "closed", this.emit("close"); }; }, 1: function (t, e) { }, "14A5": function (t, e) { var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, o = function () { try {
            return 2 === new Blob(["hi"]).size;
        }
        catch (t) {
            return !1;
        } }(), r = o && function () { try {
            return 2 === new Blob([new Uint8Array([1, 2])]).size;
        }
        catch (t) {
            return !1;
        } }(), i = n && n.prototype.append && n.prototype.getBlob; function a(t) { return t.map((function (t) { if (t.buffer instanceof ArrayBuffer) {
            var e = t.buffer;
            if (t.byteLength !== e.byteLength) {
                var n = new Uint8Array(t.byteLength);
                n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = n.buffer;
            }
            return e;
        } return t; })); } function s(t, e) { e = e || {}; var o = new n; return a(t).forEach((function (t) { o.append(t); })), e.type ? o.getBlob(e.type) : o.getBlob(); } function l(t, e) { return new Blob(a(t), e || {}); } "undefined" != typeof Blob && (s.prototype = Blob.prototype, l.prototype = Blob.prototype), t.exports = o ? r ? Blob : l : i ? s : void 0; }, "1Mk5": function (t, e, n) { function o(t) { if (t)
            return function (t) { for (var e in o.prototype)
                t[e] = o.prototype[e]; return t; }(t); } t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this; }, o.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments); } return n.fn = e, this.on(t, n), this; }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this; var n, o = this._callbacks["$" + t]; if (!o)
            return this; if (1 == arguments.length)
            return delete this._callbacks["$" + t], this; for (var r = 0; r < o.length; r++)
            if ((n = o[r]) === e || n.fn === e) {
                o.splice(r, 1);
                break;
            } return this; }, o.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t]; if (n)
            for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o)
                n[o].apply(this, e); return this; }, o.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []; }, o.prototype.hasListeners = function (t) { return !!this.listeners(t).length; }; }, 2: function (t, e) { }, "2Dig": function (t, e) { t.exports = function (t, e, n) { return t.on(e, n), { destroy: function () { t.removeListener(e, n); } }; }; }, "2pII": function (t, e, n) { var o = n("akSB"), r = n("1Mk5"), i = n("HjK1")("engine.io-client:socket"), a = n("7jRU"), s = n("Wm4p"), l = n("Uxeu"), u = n("TypT"); function c(t, e) { if (!(this instanceof c))
            return new c(t, e); e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = l(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = l(e.host).host), this.secure = null != e.secure ? e.secure : global.location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (global.location ? location.hostname : "localhost"), this.port = e.port || (global.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode; var n = "object" == typeof global && global; n.global === n && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open(); } t.exports = c, c.priorWebsocketSuccess = !1, r(c.prototype), c.protocol = s.protocol, c.Socket = c, c.Transport = n("Gbct"), c.transports = n("akSB"), c.parser = n("Wm4p"), c.prototype.createTransport = function (t) { i('creating transport "%s"', t); var e = function (t) { var e = {}; for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); return e; }(this.query); e.EIO = s.protocol, e.transport = t; var n = this.transportOptions[t] || {}; return this.id && (e.sid = this.id), new o[t]({ query: e, socket: this, agent: n.agent || this.agent, hostname: n.hostname || this.hostname, port: n.port || this.port, secure: n.secure || this.secure, path: n.path || this.path, forceJSONP: n.forceJSONP || this.forceJSONP, jsonp: n.jsonp || this.jsonp, forceBase64: n.forceBase64 || this.forceBase64, enablesXDR: n.enablesXDR || this.enablesXDR, timestampRequests: n.timestampRequests || this.timestampRequests, timestampParam: n.timestampParam || this.timestampParam, policyPort: n.policyPort || this.policyPort, pfx: n.pfx || this.pfx, key: n.key || this.key, passphrase: n.passphrase || this.passphrase, cert: n.cert || this.cert, ca: n.ca || this.ca, ciphers: n.ciphers || this.ciphers, rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate, extraHeaders: n.extraHeaders || this.extraHeaders, forceNode: n.forceNode || this.forceNode, localAddress: n.localAddress || this.localAddress, requestTimeout: n.requestTimeout || this.requestTimeout, protocols: n.protocols || void 0 }); }, c.prototype.open = function () { var t; if (this.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
            t = "websocket";
        else {
            if (0 === this.transports.length) {
                var e = this;
                return void setTimeout((function () { e.emit("error", "No transports available"); }), 0);
            }
            t = this.transports[0];
        } this.readyState = "opening"; try {
            t = this.createTransport(t);
        }
        catch (n) {
            return this.transports.shift(), void this.open();
        } t.open(), this.setTransport(t); }, c.prototype.setTransport = function (t) { i("setting transport %s", t.name); var e = this; this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", (function () { e.onDrain(); })).on("packet", (function (t) { e.onPacket(t); })).on("error", (function (t) { e.onError(t); })).on("close", (function () { e.onClose("transport close"); })); }, c.prototype.probe = function (t) { i('probing transport "%s"', t); var e = this.createTransport(t, { probe: 1 }), n = !1, o = this; function r() { o.onlyBinaryUpgrades && (n = n || !this.supportsBinary && o.transport.supportsBinary), n || (i('probe transport "%s" opened', t), e.send([{ type: "ping", data: "probe" }]), e.once("packet", (function (r) { if (!n)
            if ("pong" === r.type && "probe" === r.data) {
                if (i('probe transport "%s" pong', t), o.upgrading = !0, o.emit("upgrading", e), !e)
                    return;
                c.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', o.transport.name), o.transport.pause((function () { n || "closed" !== o.readyState && (i("changing transport and sending upgrade packet"), d(), o.setTransport(e), e.send([{ type: "upgrade" }]), o.emit("upgrade", e), e = null, o.upgrading = !1, o.flush()); }));
            }
            else {
                i('probe transport "%s" failed', t);
                var a = new Error("probe error");
                a.transport = e.name, o.emit("upgradeError", a);
            } }))); } function a() { n || (n = !0, d(), e.close(), e = null); } function s(n) { var r = new Error("probe error: " + n); r.transport = e.name, a(), i('probe transport "%s" failed because of error: %s', t, n), o.emit("upgradeError", r); } function l() { s("transport closed"); } function u() { s("socket closed"); } function p(t) { e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), a()); } function d() { e.removeListener("open", r), e.removeListener("error", s), e.removeListener("close", l), o.removeListener("close", u), o.removeListener("upgrading", p); } c.priorWebsocketSuccess = !1, e.once("open", r), e.once("error", s), e.once("close", l), this.once("close", u), this.once("upgrading", p), e.open(); }, c.prototype.onOpen = function () { if (i("socket open"), this.readyState = "open", c.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            i("starting upgrade probes");
            for (var t = 0, e = this.upgrades.length; t < e; t++)
                this.probe(this.upgrades[t]);
        } }, c.prototype.onPacket = function (t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
            switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "pong":
                    this.setPing(), this.emit("pong");
                    break;
                case "error":
                    var e = new Error("server error");
                    e.code = t.data, this.onError(e);
                    break;
                case "message": this.emit("data", t.data), this.emit("message", t.data);
            }
        else
            i('packet received with socket readyState "%s"', this.readyState); }, c.prototype.onHandshake = function (t) { this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat)); }, c.prototype.onHeartbeat = function (t) { clearTimeout(this.pingTimeoutTimer); var e = this; e.pingTimeoutTimer = setTimeout((function () { "closed" !== e.readyState && e.onClose("ping timeout"); }), t || e.pingInterval + e.pingTimeout); }, c.prototype.setPing = function () { var t = this; clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout((function () { i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout); }), t.pingInterval); }, c.prototype.ping = function () { var t = this; this.sendPacket("ping", (function () { t.emit("ping"); })); }, c.prototype.onDrain = function () { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush(); }, c.prototype.flush = function () { "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush")); }, c.prototype.write = c.prototype.send = function (t, e, n) { return this.sendPacket("message", t, e, n), this; }, c.prototype.sendPacket = function (t, e, n, o) { if ("function" == typeof e && (o = e, e = void 0), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var r = { type: t, data: e, options: n };
            this.emit("packetCreate", r), this.writeBuffer.push(r), o && this.once("flush", o), this.flush();
        } }, c.prototype.close = function () { if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var t = this;
            this.writeBuffer.length ? this.once("drain", (function () { this.upgrading ? o() : e(); })) : this.upgrading ? o() : e();
        } function e() { t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close(); } function n() { t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e(); } function o() { t.once("upgrade", n), t.once("upgradeError", n); } return this; }, c.prototype.onError = function (t) { i("socket error %j", t), c.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t); }, c.prototype.onClose = function (t, e) { "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0); }, c.prototype.filterUpgrades = function (t) { for (var e = [], n = 0, o = t.length; n < o; n++)
            ~a(this.transports, t[n]) && e.push(t[n]); return e; }; }, "2xqC": function (t, e, n) { function o(t) { if (t)
            return function (t) { for (var e in o.prototype)
                t[e] = o.prototype[e]; return t; }(t); } t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this; }, o.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments); } return n.fn = e, this.on(t, n), this; }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this; var n, o = this._callbacks["$" + t]; if (!o)
            return this; if (1 == arguments.length)
            return delete this._callbacks["$" + t], this; for (var r = 0; r < o.length; r++)
            if ((n = o[r]) === e || n.fn === e) {
                o.splice(r, 1);
                break;
            } return this; }, o.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t]; if (n)
            for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o)
                n[o].apply(this, e); return this; }, o.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []; }, o.prototype.hasListeners = function (t) { return !!this.listeners(t).length; }; }, "3exg": function (t, e, n) { var o = n("0zaL"), r = n("TypT"), i = n("hWa/"), a = n("Yvos"), s = n("Aplp"), l = n("Bn1Y")("engine.io-client:polling"); t.exports = c; var u = null != new (n("fg2H"))({ xdomain: !1 }).responseType; function c(t) { u && !(t && t.forceBase64) || (this.supportsBinary = !1), o.call(this, t); } a(c, o), c.prototype.name = "polling", c.prototype.doOpen = function () { this.poll(); }, c.prototype.pause = function (t) { var e = this; function n() { l("paused"), e.readyState = "paused", t(); } if (this.readyState = "pausing", this.polling || !this.writable) {
            var o = 0;
            this.polling && (l("we are currently polling - waiting to pause"), o++, this.once("pollComplete", (function () { l("pre-pause polling complete"), --o || n(); }))), this.writable || (l("we are currently writing - waiting to pause"), o++, this.once("drain", (function () { l("pre-pause writing complete"), --o || n(); })));
        }
        else
            n(); }, c.prototype.poll = function () { l("polling"), this.polling = !0, this.doPoll(), this.emit("poll"); }, c.prototype.onData = function (t) { var e = this; l("polling got data %s", t), i.decodePayload(t, this.socket.binaryType, (function (t, n, o) { if ("opening" === e.readyState && e.onOpen(), "close" === t.type)
            return e.onClose(), !1; e.onPacket(t); })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState)); }, c.prototype.doClose = function () { var t = this; function e() { l("writing close packet"), t.write([{ type: "close" }]); } "open" === this.readyState ? (l("transport open - closing"), e()) : (l("transport not open - deferring close"), this.once("open", e)); }, c.prototype.write = function (t) { var e = this; this.writable = !1; var n = function () { e.writable = !0, e.emit("drain"); }; i.encodePayload(t, this.supportsBinary, (function (t) { e.doWrite(t, n); })); }, c.prototype.uri = function () { var t = this.query || {}, e = this.secure ? "https" : "http", n = ""; return !1 !== this.timestampRequests && (t[this.timestampParam] = s()), this.supportsBinary || t.sid || (t.b64 = 1), t = r.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t; }; }, "4+Ds": function (t, e, n) { t.exports = n("uKDP"), t.exports.parser = n("hWa/"); }, "5M3R": function (t, e, n) { function o() { var t; try {
            t = e.storage.debug;
        }
        catch (n) { } return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t; } (e = t.exports = n("Nq7k")).log = function () { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments); }, e.formatArgs = function (t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
            var o = "color: " + this.color;
            t.splice(1, 0, o, "color: inherit");
            var r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function (t) { "%%" !== t && (r++, "%c" === t && (i = r)); })), t.splice(i, 0, o);
        } }, e.save = function (t) { try {
            null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        }
        catch (n) { } }, e.load = o, e.useColors = function () { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () { try {
            return window.localStorage;
        }
        catch (t) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) { try {
            return JSON.stringify(t);
        }
        catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        } }, e.enable(o()); }, "6C75": function (t, e) { var n = {}.toString; t.exports = Array.isArray || function (t) { return "[object Array]" == n.call(t); }; }, "7jRU": function (t, e) { var n = [].indexOf; t.exports = function (t, e) { if (n)
            return t.indexOf(e); for (var o = 0; o < t.length; ++o)
            if (t[o] === e)
                return o; return -1; }; }, AdPF: function (t, e, n) { var o = n("yeub"); t.exports = function (t) { var e = t.xdomain, n = t.xscheme, r = t.enablesXDR; try {
            if ("undefined" != typeof XMLHttpRequest && (!e || o))
                return new XMLHttpRequest;
        }
        catch (i) { } try {
            if ("undefined" != typeof XDomainRequest && !n && r)
                return new XDomainRequest;
        }
        catch (i) { } if (!e)
            try {
                return new (global[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
            }
            catch (i) { } }; }, Aplp: function (t, e, n) {
            "use strict";
            var o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), i = {}, a = 0, s = 0;
            function l(t) { var e = ""; do {
                e = r[t % 64] + e, t = Math.floor(t / 64);
            } while (t > 0); return e; }
            function u() { var t = l(+new Date); return t !== o ? (a = 0, o = t) : t + "." + l(a++); }
            for (; s < 64; s++)
                i[r[s]] = s;
            u.encode = l, u.decode = function (t) { var e = 0; for (s = 0; s < t.length; s++)
                e = 64 * e + i[t.charAt(s)]; return e; }, t.exports = u;
        }, Bn1Y: function (t, e, n) { e.log = function (...t) { return "object" == typeof console && console.log && console.log(...t); }, e.formatArgs = function (e) { if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
            return; const n = "color: " + this.color; e.splice(1, 0, n, "color: inherit"); let o = 0, r = 0; e[0].replace(/%[a-zA-Z%]/g, t => { "%%" !== t && (o++, "%c" === t && (r = o)); }), e.splice(r, 0, n); }, e.save = function (t) { try {
            t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
        }
        catch (n) { } }, e.load = function () { let t; try {
            t = e.storage.getItem("debug");
        }
        catch (n) { } return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t; }, e.useColors = function () { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); }, e.storage = function () { try {
            return localStorage;
        }
        catch (t) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n("c3Nh")(e); const { formatters: o } = t.exports; o.j = function (t) { try {
            return JSON.stringify(t);
        }
        catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        } }; }, C2QD: function (t, e) { function n(t) { this.ms = (t = t || {}).min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0; } t.exports = n, n.prototype.duration = function () { var t = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) {
            var e = Math.random(), n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        } return 0 | Math.min(t, this.max); }, n.prototype.reset = function () { this.attempts = 0; }, n.prototype.setMin = function (t) { this.ms = t; }, n.prototype.setMax = function (t) { this.max = t; }, n.prototype.setJitter = function (t) { this.jitter = t; }; }, CIKq: function (t, e, n) { var o, r = n("Gbct"), i = n("Wm4p"), a = n("TypT"), s = n("Yvos"), l = n("Aplp"), u = n("HjK1")("engine.io-client:websocket"), c = global.WebSocket || global.MozWebSocket; if ("undefined" == typeof window)
            try {
                o = n(1);
            }
            catch (h) { } var p = c; function d(t) { t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = c && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (p = o), r.call(this, t); } p || "undefined" != typeof window || (p = o), t.exports = d, s(d, r), d.prototype.name = "websocket", d.prototype.supportsBinary = !0, d.prototype.doOpen = function () { if (this.check()) {
            var t = this.uri(), e = this.protocols, n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
            n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket ? e ? new p(t, e) : new p(t) : new p(t, e, n);
            }
            catch (o) {
                return this.emit("error", o);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        } }, d.prototype.addEventListeners = function () { var t = this; this.ws.onopen = function () { t.onOpen(); }, this.ws.onclose = function () { t.onClose(); }, this.ws.onmessage = function (e) { t.onData(e.data); }, this.ws.onerror = function (e) { t.onError("websocket error", e); }; }, d.prototype.write = function (t) { var e = this; this.writable = !1; for (var n = t.length, o = 0, r = n; o < r; o++)
            !function (t) { i.encodePacket(t, e.supportsBinary, (function (o) { if (!e.usingBrowserWebSocket) {
                var r = {};
                t.options && (r.compress = t.options.compress), e.perMessageDeflate && ("string" == typeof o ? global.Buffer.byteLength(o) : o.length) < e.perMessageDeflate.threshold && (r.compress = !1);
            } try {
                e.usingBrowserWebSocket ? e.ws.send(o) : e.ws.send(o, r);
            }
            catch (h) {
                u("websocket closed before onclose event");
            } --n || (e.emit("flush"), setTimeout((function () { e.writable = !0, e.emit("drain"); }), 0)); })); }(t[o]); }, d.prototype.onClose = function () { r.prototype.onClose.call(this); }, d.prototype.doClose = function () { void 0 !== this.ws && this.ws.close(); }, d.prototype.uri = function () { var t = this.query || {}, e = this.secure ? "wss" : "ws", n = ""; return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = l()), this.supportsBinary || (t.b64 = 1), (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t; }, d.prototype.check = function () { return !(!p || "__initialize" in p && this.name === d.prototype.name); }; }, CUme: function (t, e, n) { var o = n("Gbct"), r = n("TypT"), i = n("Wm4p"), a = n("Yvos"), s = n("Aplp"), l = n("HjK1")("engine.io-client:polling"); t.exports = c; var u = null != new (n("AdPF"))({ xdomain: !1 }).responseType; function c(t) { u && !(t && t.forceBase64) || (this.supportsBinary = !1), o.call(this, t); } a(c, o), c.prototype.name = "polling", c.prototype.doOpen = function () { this.poll(); }, c.prototype.pause = function (t) { var e = this; function n() { l("paused"), e.readyState = "paused", t(); } if (this.readyState = "pausing", this.polling || !this.writable) {
            var o = 0;
            this.polling && (l("we are currently polling - waiting to pause"), o++, this.once("pollComplete", (function () { l("pre-pause polling complete"), --o || n(); }))), this.writable || (l("we are currently writing - waiting to pause"), o++, this.once("drain", (function () { l("pre-pause writing complete"), --o || n(); })));
        }
        else
            n(); }, c.prototype.poll = function () { l("polling"), this.polling = !0, this.doPoll(), this.emit("poll"); }, c.prototype.onData = function (t) { var e = this; l("polling got data %s", t), i.decodePayload(t, this.socket.binaryType, (function (t, n, o) { if ("opening" === e.readyState && e.onOpen(), "close" === t.type)
            return e.onClose(), !1; e.onPacket(t); })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState)); }, c.prototype.doClose = function () { var t = this; function e() { l("writing close packet"), t.write([{ type: "close" }]); } "open" === this.readyState ? (l("transport open - closing"), e()) : (l("transport not open - deferring close"), this.once("open", e)); }, c.prototype.write = function (t) { var e = this; this.writable = !1; var n = function () { e.writable = !0, e.emit("drain"); }; i.encodePayload(t, this.supportsBinary, (function (t) { e.doWrite(t, n); })); }, c.prototype.uri = function () { var t = this.query || {}, e = this.secure ? "https" : "http", n = ""; return !1 !== this.timestampRequests && (t[this.timestampParam] = s()), this.supportsBinary || t.sid || (t.b64 = 1), t = r.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t; }; }, Cl5A: function (t, e, n) { var o = n("CUme"), r = n("Yvos"); t.exports = u; var i, a = /\n/g, s = /\\n/g; function l() { } function u(t) { o.call(this, t), this.query = this.query || {}, i || (global.___eio || (global.___eio = []), i = global.___eio), this.index = i.length; var e = this; i.push((function (t) { e.onData(t); })), this.query.j = this.index, global.document && global.addEventListener && global.addEventListener("beforeunload", (function () { e.script && (e.script.onerror = l); }), !1); } r(u, o), u.prototype.supportsBinary = !1, u.prototype.doClose = function () { this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this); }, u.prototype.doPoll = function () { var t = this, e = document.createElement("script"); this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) { t.onError("jsonp poll error", e); }; var n = document.getElementsByTagName("script")[0]; n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function () { var t = document.createElement("iframe"); document.body.appendChild(t), document.body.removeChild(t); }), 100); }, u.prototype.doWrite = function (t, e) { var n = this; if (!this.form) {
            var o, r = document.createElement("form"), i = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
            r.className = "socketio", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", r.target = l, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), i.name = "d", r.appendChild(i), document.body.appendChild(r), this.form = r, this.area = i;
        } function u() { c(), e(); } function c() { if (n.iframe)
            try {
                n.form.removeChild(n.iframe);
            }
            catch (t) {
                n.onError("jsonp polling iframe removal error", t);
            } try {
            o = document.createElement('<iframe src="javascript:0" name="' + n.iframeId + '">');
        }
        catch (t) {
            (o = document.createElement("iframe")).name = n.iframeId, o.src = "javascript:0";
        } o.id = n.iframeId, n.form.appendChild(o), n.iframe = o; } this.form.action = this.uri(), c(), t = t.replace(s, "\\\n"), this.area.value = t.replace(a, "\\n"); try {
            this.form.submit();
        }
        catch (p) { } this.iframe.attachEvent ? this.iframe.onreadystatechange = function () { "complete" === n.iframe.readyState && u(); } : this.iframe.onload = u; }; }, FGiv: function (t, e) { var n = 1e3, o = 6e4, r = 36e5, i = 24 * r; function a(t, e, n) { if (!(t < e))
            return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"; } t.exports = function (t, e) { e = e || {}; var s, l = typeof t; if ("string" === l && t.length > 0)
            return function (t) { if (!((t = String(t)).length > 100)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var a = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y": return 315576e5 * a;
                        case "days":
                        case "day":
                        case "d": return a * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h": return a * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m": return a * o;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s": return a * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms": return a;
                        default: return;
                    }
                }
            } }(t); if ("number" === l && !1 === isNaN(t))
            return e.long ? a(s = t, i, "day") || a(s, r, "hour") || a(s, o, "minute") || a(s, n, "second") || s + " ms" : function (t) { return t >= i ? Math.round(t / i) + "d" : t >= r ? Math.round(t / r) + "h" : t >= o ? Math.round(t / o) + "m" : t >= n ? Math.round(t / n) + "s" : t + "ms"; }(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)); }; }, Gbct: function (t, e, n) { var o = n("Wm4p"), r = n("1Mk5"); function i(t) { this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress; } t.exports = i, r(i.prototype), i.prototype.onError = function (t, e) { var n = new Error(t); return n.type = "TransportError", n.description = e, this.emit("error", n), this; }, i.prototype.open = function () { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this; }, i.prototype.close = function () { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this; }, i.prototype.send = function (t) { if ("open" !== this.readyState)
            throw new Error("Transport not open"); this.write(t); }, i.prototype.onOpen = function () { this.readyState = "open", this.writable = !0, this.emit("open"); }, i.prototype.onData = function (t) { var e = o.decodePacket(t, this.socket.binaryType); this.onPacket(e); }, i.prototype.onPacket = function (t) { this.emit("packet", t); }, i.prototype.onClose = function () { this.readyState = "closed", this.emit("close"); }; }, HjK1: function (t, e, n) { function o() { var t; try {
            t = e.storage.debug;
        }
        catch (n) { } return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t; } (e = t.exports = n("lhf0")).log = function () { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments); }, e.formatArgs = function (t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
            var o = "color: " + this.color;
            t.splice(1, 0, o, "color: inherit");
            var r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function (t) { "%%" !== t && (r++, "%c" === t && (i = r)); })), t.splice(i, 0, o);
        } }, e.save = function (t) { try {
            null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        }
        catch (n) { } }, e.load = o, e.useColors = function () { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () { try {
            return window.localStorage;
        }
        catch (t) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) { try {
            return JSON.stringify(t);
        }
        catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        } }, e.enable(o()); }, "Id/V": function (t, e) { t.exports = function (t) { return n && Buffer.isBuffer(t) || o && (t instanceof ArrayBuffer || function (t) { return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer; }(t)); }; var n = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer, o = "function" == typeof ArrayBuffer; }, "K/+X": function (t, e, n) { var o = n("fg2H"), r = n("3exg"), i = n("/RX3"), a = n("Yvos"), s = n("Bn1Y")("engine.io-client:polling-xhr"); function l() { } function u(t) { if (r.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" != typeof location) {
            var e = "https:" === location.protocol, n = location.port;
            n || (n = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || n !== t.port, this.xs = t.secure !== e;
        } } function c(t) { this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create(); } if (t.exports = u, t.exports.Request = c, a(u, r), u.prototype.supportsBinary = !0, u.prototype.request = function (t) { return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.withCredentials = this.withCredentials, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new c(t); }, u.prototype.doWrite = function (t, e) { var n = this.request({ method: "POST", data: t, isBinary: "string" != typeof t && void 0 !== t }), o = this; n.on("success", e), n.on("error", (function (t) { o.onError("xhr post error", t); })), this.sendXhr = n; }, u.prototype.doPoll = function () { s("xhr poll"); var t = this.request(), e = this; t.on("data", (function (t) { e.onData(t); })), t.on("error", (function (t) { e.onError("xhr poll error", t); })), this.pollXhr = t; }, i(c.prototype), c.prototype.create = function () { var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR }; t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized; var e = this.xhr = new o(t), n = this; try {
            s("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
            try {
                if (this.extraHeaders)
                    for (var r in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders)
                        this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r]);
            }
            catch (i) { }
            if ("POST" === this.method)
                try {
                    e.setRequestHeader("Content-type", this.isBinary ? "application/octet-stream" : "text/plain;charset=UTF-8");
                }
                catch (i) { }
            try {
                e.setRequestHeader("Accept", "*/*");
            }
            catch (i) { }
            "withCredentials" in e && (e.withCredentials = this.withCredentials), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () { n.onLoad(); }, e.onerror = function () { n.onError(e.responseText); }) : e.onreadystatechange = function () { if (2 === e.readyState)
                try {
                    var t = e.getResponseHeader("Content-Type");
                    (n.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && (e.responseType = "arraybuffer");
                }
                catch (i) { } 4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout((function () { n.onError("number" == typeof e.status ? e.status : 0); }), 0)); }, s("xhr data %s", this.data), e.send(this.data);
        }
        catch (i) {
            return void setTimeout((function () { n.onError(i); }), 0);
        } "undefined" != typeof document && (this.index = c.requestsCount++, c.requests[this.index] = this); }, c.prototype.onSuccess = function () { this.emit("success"), this.cleanup(); }, c.prototype.onData = function (t) { this.emit("data", t), this.onSuccess(); }, c.prototype.onError = function (t) { this.emit("error", t), this.cleanup(!0); }, c.prototype.cleanup = function (t) { if (null != this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, t)
                try {
                    this.xhr.abort();
                }
                catch (e) { }
            "undefined" != typeof document && delete c.requests[this.index], this.xhr = null;
        } }, c.prototype.onLoad = function () { var t; try {
            var e;
            try {
                e = this.xhr.getResponseHeader("Content-Type");
            }
            catch (n) { }
            t = ("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && this.xhr.response || this.xhr.responseText;
        }
        catch (n) {
            this.onError(n);
        } null != t && this.onData(t); }, c.prototype.hasXDR = function () { return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR; }, c.prototype.abort = function () { this.cleanup(); }, c.requestsCount = 0, c.requests = {}, "undefined" != typeof document)
            if ("function" == typeof attachEvent)
                attachEvent("onunload", d);
            else if ("function" == typeof addEventListener) {
                var p = "onpagehide" in self ? "pagehide" : "unload";
                addEventListener(p, d, !1);
            } function d() { for (var t in c.requests)
            c.requests.hasOwnProperty(t) && c.requests[t].abort(); } }, KFGy: function (t, e, n) { var o = n("Vo14"), r = n("2xqC"), i = n("kSER"), a = n("2Dig"), s = n("QN7Q"), l = n("x7D4")("socket.io-client:socket"), u = n("TypT"), c = n("WLGk"); t.exports = h; var p = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, d = r.prototype.emit; function h(t, e, n) { this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open(); } r(h.prototype), h.prototype.subEvents = function () { if (!this.subs) {
            var t = this.io;
            this.subs = [a(t, "open", s(this, "onopen")), a(t, "packet", s(this, "onpacket")), a(t, "close", s(this, "onclose"))];
        } }, h.prototype.open = h.prototype.connect = function () { return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this); }, h.prototype.send = function () { var t = i(arguments); return t.unshift("message"), this.emit.apply(this, t), this; }, h.prototype.emit = function (t) { if (p.hasOwnProperty(t))
            return d.apply(this, arguments), this; var e = i(arguments), n = { type: (void 0 !== this.flags.binary ? this.flags.binary : c(e)) ? o.BINARY_EVENT : o.EVENT, data: e, options: {} }; return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this; }, h.prototype.packet = function (t) { t.nsp = this.nsp, this.io.packet(t); }, h.prototype.onopen = function () { if (l("transport is open - connecting"), "/" !== this.nsp)
            if (this.query) {
                var t = "object" == typeof this.query ? u.encode(this.query) : this.query;
                l("sending connect packet with query %s", t), this.packet({ type: o.CONNECT, query: t });
            }
            else
                this.packet({ type: o.CONNECT }); }, h.prototype.onclose = function (t) { l("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t); }, h.prototype.onpacket = function (t) { if (t.nsp === this.nsp || t.type === o.ERROR && "/" === t.nsp)
            switch (t.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case o.ACK:
                case o.BINARY_ACK:
                    this.onack(t);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR: this.emit("error", t.data);
            } }, h.prototype.onevent = function (t) { var e = t.data || []; l("emitting event %j", e), null != t.id && (l("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e); }, h.prototype.ack = function (t) { var e = this, n = !1; return function () { if (!n) {
            n = !0;
            var r = i(arguments);
            l("sending ack %j", r), e.packet({ type: c(r) ? o.BINARY_ACK : o.ACK, id: t, data: r });
        } }; }, h.prototype.onack = function (t) { var e = this.acks[t.id]; "function" == typeof e ? (l("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : l("bad ack %s", t.id); }, h.prototype.onconnect = function () { this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered(); }, h.prototype.emitBuffered = function () { var t; for (t = 0; t < this.receiveBuffer.length; t++)
            d.apply(this, this.receiveBuffer[t]); for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++)
            this.packet(this.sendBuffer[t]); this.sendBuffer = []; }, h.prototype.ondisconnect = function () { l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect"); }, h.prototype.destroy = function () { if (this.subs) {
            for (var t = 0; t < this.subs.length; t++)
                this.subs[t].destroy();
            this.subs = null;
        } this.io.destroy(this); }, h.prototype.close = h.prototype.disconnect = function () { return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({ type: o.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this; }, h.prototype.compress = function (t) { return this.flags.compress = t, this; }, h.prototype.binary = function (t) { return this.flags.binary = t, this; }; }, "M/K+": function (t, e, n) { var o = n("Qsis"), r = n("Id/V"), i = Object.prototype.toString, a = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File); e.deconstructPacket = function (t) { var e = [], n = t; return n.data = function t(e, n) { if (!e)
            return e; if (r(e)) {
            var i = { _placeholder: !0, num: n.length };
            return n.push(e), i;
        } if (o(e)) {
            for (var a = new Array(e.length), s = 0; s < e.length; s++)
                a[s] = t(e[s], n);
            return a;
        } if ("object" == typeof e && !(e instanceof Date)) {
            for (var l in a = {}, e)
                a[l] = t(e[l], n);
            return a;
        } return e; }(t.data, e), n.attachments = e.length, { packet: n, buffers: e }; }, e.reconstructPacket = function (t, e) { return t.data = function t(e, n) { if (!e)
            return e; if (e && e._placeholder)
            return n[e.num]; if (o(e))
            for (var r = 0; r < e.length; r++)
                e[r] = t(e[r], n);
        else if ("object" == typeof e)
            for (var i in e)
                e[i] = t(e[i], n); return e; }(t.data, e), t.attachments = void 0, t; }, e.removeBlobs = function (t, e) { var n = 0, i = t; !function t(l, u, c) { if (!l)
            return l; if (a && l instanceof Blob || s && l instanceof File) {
            n++;
            var p = new FileReader;
            p.onload = function () { c ? c[u] = this.result : i = this.result, --n || e(i); }, p.readAsArrayBuffer(l);
        }
        else if (o(l))
            for (var d = 0; d < l.length; d++)
                t(l[d], d, l);
        else if ("object" == typeof l && !r(l))
            for (var h in l)
                t(l[h], h, l); }(i), n || e(i); }; }, Nq7k: function (t, e, n) { function o(t) { var n; function o() { if (o.enabled) {
            var t = o, r = +new Date, i = r - (n || r);
            t.diff = i, t.prev = n, t.curr = r, n = r;
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                a[s] = arguments[s];
            a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
            var l = 0;
            a[0] = a[0].replace(/%([a-zA-Z%])/g, (function (n, o) { if ("%%" === n)
                return n; l++; var r = e.formatters[o]; return "function" == typeof r && (n = r.call(t, a[l]), a.splice(l, 1), l--), n; })), e.formatArgs.call(t, a);
            var u = o.log || e.log || console.log.bind(console);
            u.apply(t, a);
        } } return o.namespace = t, o.enabled = e.enabled(t), o.useColors = e.useColors(), o.color = function (t) { var n, o = 0; for (n in t)
            o = (o << 5) - o + t.charCodeAt(n), o |= 0; return e.colors[Math.abs(o) % e.colors.length]; }(t), o.destroy = r, "function" == typeof e.init && e.init(o), e.instances.push(o), o; } function r() { var t = e.instances.indexOf(this); return -1 !== t && (e.instances.splice(t, 1), !0); } (e = t.exports = o.debug = o.default = o).coerce = function (t) { return t instanceof Error ? t.stack || t.message : t; }, e.disable = function () { e.enable(""); }, e.enable = function (t) { var n; e.save(t), e.names = [], e.skips = []; var o = ("string" == typeof t ? t : "").split(/[\s,]+/), r = o.length; for (n = 0; n < r; n++)
            o[n] && ("-" === (t = o[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))); for (n = 0; n < e.instances.length; n++) {
            var i = e.instances[n];
            i.enabled = e.enabled(i.namespace);
        } }, e.enabled = function (t) { if ("*" === t[t.length - 1])
            return !0; var n, o; for (n = 0, o = e.skips.length; n < o; n++)
            if (e.skips[n].test(t))
                return !1; for (n = 0, o = e.names.length; n < o; n++)
            if (e.names[n].test(t))
                return !0; return !1; }, e.humanize = n("FGiv"), e.instances = [], e.names = [], e.skips = [], e.formatters = {}; }, OAgL: function (t, e, n) { var o = n("s1oe"), r = n("/RX3"), i = n("kSER"), a = n("Y4EA"), s = n("QN7Q"), l = n("Bn1Y")("socket.io-client:socket"), u = n("TypT"), c = n("WLGk"); t.exports = h; var p = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, d = r.prototype.emit; function h(t, e, n) { this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open(); } r(h.prototype), h.prototype.subEvents = function () { if (!this.subs) {
            var t = this.io;
            this.subs = [a(t, "open", s(this, "onopen")), a(t, "packet", s(this, "onpacket")), a(t, "close", s(this, "onclose"))];
        } }, h.prototype.open = h.prototype.connect = function () { return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this); }, h.prototype.send = function () { var t = i(arguments); return t.unshift("message"), this.emit.apply(this, t), this; }, h.prototype.emit = function (t) { if (p.hasOwnProperty(t))
            return d.apply(this, arguments), this; var e = i(arguments), n = { type: (void 0 !== this.flags.binary ? this.flags.binary : c(e)) ? o.BINARY_EVENT : o.EVENT, data: e, options: {} }; return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this; }, h.prototype.packet = function (t) { t.nsp = this.nsp, this.io.packet(t); }, h.prototype.onopen = function () { if (l("transport is open - connecting"), "/" !== this.nsp)
            if (this.query) {
                var t = "object" == typeof this.query ? u.encode(this.query) : this.query;
                l("sending connect packet with query %s", t), this.packet({ type: o.CONNECT, query: t });
            }
            else
                this.packet({ type: o.CONNECT }); }, h.prototype.onclose = function (t) { l("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t); }, h.prototype.onpacket = function (t) { if (t.nsp === this.nsp || t.type === o.ERROR && "/" === t.nsp)
            switch (t.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case o.ACK:
                case o.BINARY_ACK:
                    this.onack(t);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR: this.emit("error", t.data);
            } }, h.prototype.onevent = function (t) { var e = t.data || []; l("emitting event %j", e), null != t.id && (l("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e); }, h.prototype.ack = function (t) { var e = this, n = !1; return function () { if (!n) {
            n = !0;
            var r = i(arguments);
            l("sending ack %j", r), e.packet({ type: c(r) ? o.BINARY_ACK : o.ACK, id: t, data: r });
        } }; }, h.prototype.onack = function (t) { var e = this.acks[t.id]; "function" == typeof e ? (l("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : l("bad ack %s", t.id); }, h.prototype.onconnect = function () { this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered(); }, h.prototype.emitBuffered = function () { var t; for (t = 0; t < this.receiveBuffer.length; t++)
            d.apply(this, this.receiveBuffer[t]); for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++)
            this.packet(this.sendBuffer[t]); this.sendBuffer = []; }, h.prototype.ondisconnect = function () { l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect"); }, h.prototype.destroy = function () { if (this.subs) {
            for (var t = 0; t < this.subs.length; t++)
                this.subs[t].destroy();
            this.subs = null;
        } this.io.destroy(this); }, h.prototype.close = h.prototype.disconnect = function () { return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({ type: o.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this; }, h.prototype.compress = function (t) { return this.flags.compress = t, this; }, h.prototype.binary = function (t) { return this.flags.binary = t, this; }; }, Q80o: function (t, e, n) { function o(t) { var n; function o() { if (o.enabled) {
            var t = o, r = +new Date, i = r - (n || r);
            t.diff = i, t.prev = n, t.curr = r, n = r;
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                a[s] = arguments[s];
            a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
            var l = 0;
            a[0] = a[0].replace(/%([a-zA-Z%])/g, (function (n, o) { if ("%%" === n)
                return n; l++; var r = e.formatters[o]; return "function" == typeof r && (n = r.call(t, a[l]), a.splice(l, 1), l--), n; })), e.formatArgs.call(t, a);
            var u = o.log || e.log || console.log.bind(console);
            u.apply(t, a);
        } } return o.namespace = t, o.enabled = e.enabled(t), o.useColors = e.useColors(), o.color = function (t) { var n, o = 0; for (n in t)
            o = (o << 5) - o + t.charCodeAt(n), o |= 0; return e.colors[Math.abs(o) % e.colors.length]; }(t), o.destroy = r, "function" == typeof e.init && e.init(o), e.instances.push(o), o; } function r() { var t = e.instances.indexOf(this); return -1 !== t && (e.instances.splice(t, 1), !0); } (e = t.exports = o.debug = o.default = o).coerce = function (t) { return t instanceof Error ? t.stack || t.message : t; }, e.disable = function () { e.enable(""); }, e.enable = function (t) { var n; e.save(t), e.names = [], e.skips = []; var o = ("string" == typeof t ? t : "").split(/[\s,]+/), r = o.length; for (n = 0; n < r; n++)
            o[n] && ("-" === (t = o[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))); for (n = 0; n < e.instances.length; n++) {
            var i = e.instances[n];
            i.enabled = e.enabled(i.namespace);
        } }, e.enabled = function (t) { if ("*" === t[t.length - 1])
            return !0; var n, o; for (n = 0, o = e.skips.length; n < o; n++)
            if (e.skips[n].test(t))
                return !1; for (n = 0, o = e.names.length; n < o; n++)
            if (e.names[n].test(t))
                return !0; return !1; }, e.humanize = n("FGiv"), e.instances = [], e.names = [], e.skips = [], e.formatters = {}; }, QN7Q: function (t, e) { var n = [].slice; t.exports = function (t, e) { if ("string" == typeof e && (e = t[e]), "function" != typeof e)
            throw new Error("bind() requires a function"); var o = n.call(arguments, 2); return function () { return e.apply(t, o.concat(n.call(arguments))); }; }; }, Qsis: function (t, e) { var n = {}.toString; t.exports = Array.isArray || function (t) { return "[object Array]" == n.call(t); }; }, Rpy8: function (t, e, n) { function o(t) { var n; function o() { if (o.enabled) {
            var t = o, r = +new Date, i = r - (n || r);
            t.diff = i, t.prev = n, t.curr = r, n = r;
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                a[s] = arguments[s];
            a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
            var l = 0;
            a[0] = a[0].replace(/%([a-zA-Z%])/g, (function (n, o) { if ("%%" === n)
                return n; l++; var r = e.formatters[o]; return "function" == typeof r && (n = r.call(t, a[l]), a.splice(l, 1), l--), n; })), e.formatArgs.call(t, a);
            var u = o.log || e.log || console.log.bind(console);
            u.apply(t, a);
        } } return o.namespace = t, o.enabled = e.enabled(t), o.useColors = e.useColors(), o.color = function (t) { var n, o = 0; for (n in t)
            o = (o << 5) - o + t.charCodeAt(n), o |= 0; return e.colors[Math.abs(o) % e.colors.length]; }(t), o.destroy = r, "function" == typeof e.init && e.init(o), e.instances.push(o), o; } function r() { var t = e.instances.indexOf(this); return -1 !== t && (e.instances.splice(t, 1), !0); } (e = t.exports = o.debug = o.default = o).coerce = function (t) { return t instanceof Error ? t.stack || t.message : t; }, e.disable = function () { e.enable(""); }, e.enable = function (t) { var n; e.save(t), e.names = [], e.skips = []; var o = ("string" == typeof t ? t : "").split(/[\s,]+/), r = o.length; for (n = 0; n < r; n++)
            o[n] && ("-" === (t = o[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))); for (n = 0; n < e.instances.length; n++) {
            var i = e.instances[n];
            i.enabled = e.enabled(i.namespace);
        } }, e.enabled = function (t) { if ("*" === t[t.length - 1])
            return !0; var n, o; for (n = 0, o = e.skips.length; n < o; n++)
            if (e.skips[n].test(t))
                return !1; for (n = 0, o = e.names.length; n < o; n++)
            if (e.names[n].test(t))
                return !0; return !1; }, e.humanize = n("0Agi"), e.instances = [], e.names = [], e.skips = [], e.formatters = {}; }, TypT: function (t, e) { e.encode = function (t) { var e = ""; for (var n in t)
            t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])); return e; }, e.decode = function (t) { for (var e = {}, n = t.split("&"), o = 0, r = n.length; o < r; o++) {
            var i = n[o].split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        } return e; }; }, Uxeu: function (t, e) { var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]; t.exports = function (t) { var e = t, r = t.indexOf("["), i = t.indexOf("]"); -1 != r && -1 != i && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length)); for (var a = n.exec(t || ""), s = {}, l = 14; l--;)
            s[o[l]] = a[l] || ""; return -1 != r && -1 != i && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s; }; }, Vo14: function (t, e, n) { var o = n("5M3R")("socket.io-parser"), r = n("aKum"), i = n("cD5x"), a = n("ojuT"), s = n("+SKG"); function l() { } e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = l, e.Decoder = p; var u = e.ERROR + '"encode error"'; function c(t) { var n = "" + t.type; if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
            var r = function (t) { try {
                return JSON.stringify(t);
            }
            catch (e) {
                return !1;
            } }(t.data);
            if (!1 === r)
                return u;
            n += r;
        } return o("encoded %j as %s", t, n), n; } function p() { this.reconstructor = null; } function d(t) { this.reconPack = t, this.buffers = []; } function h(t) { return { type: e.ERROR, data: "parser error: " + t }; } l.prototype.encode = function (t, n) { o("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type ? function (t, e) { i.removeBlobs(t, (function (t) { var n = i.deconstructPacket(t), o = c(n.packet), r = n.buffers; r.unshift(o), e(r); })); }(t, n) : n([c(t)]); }, r(p.prototype), p.prototype.add = function (t) { var n; if ("string" == typeof t)
            n = function (t) { var n = 0, r = { type: Number(t.charAt(0)) }; if (null == e.types[r.type])
                return h("unknown packet type " + r.type); if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
                for (var i = ""; "-" !== t.charAt(++n) && (i += t.charAt(n), n != t.length);)
                    ;
                if (i != Number(i) || "-" !== t.charAt(n))
                    throw new Error("Illegal attachments");
                r.attachments = Number(i);
            } if ("/" === t.charAt(n + 1))
                for (r.nsp = ""; ++n && "," !== (l = t.charAt(n)) && (r.nsp += l, n !== t.length);)
                    ;
            else
                r.nsp = "/"; var s = t.charAt(n + 1); if ("" !== s && Number(s) == s) {
                for (r.id = ""; ++n;) {
                    var l;
                    if (null == (l = t.charAt(n)) || Number(l) != l) {
                        --n;
                        break;
                    }
                    if (r.id += t.charAt(n), n === t.length)
                        break;
                }
                r.id = Number(r.id);
            } if (t.charAt(++n)) {
                var u = function (t) { try {
                    return JSON.parse(t);
                }
                catch (e) {
                    return !1;
                } }(t.substr(n));
                if (!1 === u || r.type !== e.ERROR && !a(u))
                    return h("invalid payload");
                r.data = u;
            } return o("decoded %s as %j", t, r), r; }(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new d(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
        else {
            if (!s(t) && !t.base64)
                throw new Error("Unknown type: " + t);
            if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
            (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", n));
        } }, p.prototype.destroy = function () { this.reconstructor && this.reconstructor.finishedReconstruction(); }, d.prototype.takeBinaryData = function (t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            var e = i.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
        } return null; }, d.prototype.finishedReconstruction = function () { this.reconPack = null, this.buffers = []; }; }, WLGk: function (t, e, n) { var o = n("6C75"), r = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File); t.exports = function t(e) { if (!e || "object" != typeof e)
            return !1; if (o(e)) {
            for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n]))
                    return !0;
            return !1;
        } if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || i && e instanceof Blob || a && e instanceof File)
            return !0; if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
            return t(e.toJSON(), !0); for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s]))
                return !0; return !1; }; }, Wm4p: function (t, e, n) { var o, r = n("dkv/"), i = n("WLGk"), a = n("ypnn"), s = n("zMFY"), l = n("oIG/"); "undefined" != typeof ArrayBuffer && (o = n("g5Dd")); var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), c = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), p = u || c; e.protocol = 3; var d = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, h = r(d), f = { type: "error", data: "parser error" }, m = n("14A5"); function g(t, e, n) { for (var o = new Array(t.length), r = s(t.length, n), i = function (t, n, r) { e(n, (function (e, n) { o[t] = n, r(e, o); })); }, a = 0; a < t.length; a++)
            i(a, t[a], r); } e.encodePacket = function (t, n, o, r) { "function" == typeof n && (r = n, n = !1), "function" == typeof o && (r = o, o = null); var i = void 0 === t.data ? void 0 : t.data.buffer || t.data; if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer)
            return function (t, n, o) { if (!n)
                return e.encodeBase64Packet(t, o); var r = t.data, i = new Uint8Array(r), a = new Uint8Array(1 + r.byteLength); a[0] = d[t.type]; for (var s = 0; s < i.length; s++)
                a[s + 1] = i[s]; return o(a.buffer); }(t, n, r); if (void 0 !== m && i instanceof m)
            return function (t, n, o) { if (!n)
                return e.encodeBase64Packet(t, o); if (p)
                return function (t, n, o) { if (!n)
                    return e.encodeBase64Packet(t, o); var r = new FileReader; return r.onload = function () { e.encodePacket({ type: t.type, data: r.result }, n, !0, o); }, r.readAsArrayBuffer(t.data); }(t, n, o); var r = new Uint8Array(1); return r[0] = d[t.type], o(new m([r.buffer, t.data])); }(t, n, r); if (i && i.base64)
            return function (t, n) { return n("b" + e.packets[t.type] + t.data.data); }(t, r); var a = d[t.type]; return void 0 !== t.data && (a += o ? l.encode(String(t.data), { strict: !1 }) : String(t.data)), r("" + a); }, e.encodeBase64Packet = function (t, n) { var o, r = "b" + e.packets[t.type]; if (void 0 !== m && t.data instanceof m) {
            var i = new FileReader;
            return i.onload = function () { var t = i.result.split(",")[1]; n(r + t); }, i.readAsDataURL(t.data);
        } try {
            o = String.fromCharCode.apply(null, new Uint8Array(t.data));
        }
        catch (u) {
            for (var a = new Uint8Array(t.data), s = new Array(a.length), l = 0; l < a.length; l++)
                s[l] = a[l];
            o = String.fromCharCode.apply(null, s);
        } return r += btoa(o), n(r); }, e.decodePacket = function (t, n, o) { if (void 0 === t)
            return f; if ("string" == typeof t) {
            if ("b" === t.charAt(0))
                return e.decodeBase64Packet(t.substr(1), n);
            if (o && !1 === (t = function (t) { try {
                t = l.decode(t, { strict: !1 });
            }
            catch (e) {
                return !1;
            } return t; }(t)))
                return f;
            var r = t.charAt(0);
            return Number(r) == r && h[r] ? t.length > 1 ? { type: h[r], data: t.substring(1) } : { type: h[r] } : f;
        } r = new Uint8Array(t)[0]; var i = a(t, 1); return m && "blob" === n && (i = new m([i])), { type: h[r], data: i }; }, e.decodeBase64Packet = function (t, e) { var n = h[t.charAt(0)]; if (!o)
            return { type: n, data: { base64: !0, data: t.substr(1) } }; var r = o.decode(t.substr(1)); return "blob" === e && m && (r = new m([r])), { type: n, data: r }; }, e.encodePayload = function (t, n, o) { "function" == typeof n && (o = n, n = null); var r = i(t); return n && r ? m && !p ? e.encodePayloadAsBlob(t, o) : e.encodePayloadAsArrayBuffer(t, o) : t.length ? void g(t, (function (t, o) { e.encodePacket(t, !!r && n, !1, (function (t) { o(null, function (t) { return t.length + ":" + t; }(t)); })); }), (function (t, e) { return o(e.join("")); })) : o("0:"); }, e.decodePayload = function (t, n, o) { if ("string" != typeof t)
            return e.decodePayloadAsBinary(t, n, o); var r; if ("function" == typeof n && (o = n, n = null), "" === t)
            return o(f, 0, 1); for (var i, a, s = "", l = 0, u = t.length; l < u; l++) {
            var c = t.charAt(l);
            if (":" === c) {
                if ("" === s || s != (i = Number(s)))
                    return o(f, 0, 1);
                if (s != (a = t.substr(l + 1, i)).length)
                    return o(f, 0, 1);
                if (a.length) {
                    if (r = e.decodePacket(a, n, !1), f.type === r.type && f.data === r.data)
                        return o(f, 0, 1);
                    if (!1 === o(r, l + i, u))
                        return;
                }
                l += i, s = "";
            }
            else
                s += c;
        } return "" !== s ? o(f, 0, 1) : void 0; }, e.encodePayloadAsArrayBuffer = function (t, n) { if (!t.length)
            return n(new ArrayBuffer(0)); g(t, (function (t, n) { e.encodePacket(t, !0, !0, (function (t) { return n(null, t); })); }), (function (t, e) { var o = e.reduce((function (t, e) { var n; return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2; }), 0), r = new Uint8Array(o), i = 0; return e.forEach((function (t) { var e = "string" == typeof t, n = t; if (e) {
            for (var o = new Uint8Array(t.length), a = 0; a < t.length; a++)
                o[a] = t.charCodeAt(a);
            n = o.buffer;
        } r[i++] = e ? 0 : 1; var s = n.byteLength.toString(); for (a = 0; a < s.length; a++)
            r[i++] = parseInt(s[a]); for (r[i++] = 255, o = new Uint8Array(n), a = 0; a < o.length; a++)
            r[i++] = o[a]; })), n(r.buffer); })); }, e.encodePayloadAsBlob = function (t, n) { g(t, (function (t, n) { e.encodePacket(t, !0, !0, (function (t) { var e = new Uint8Array(1); if (e[0] = 1, "string" == typeof t) {
            for (var o = new Uint8Array(t.length), r = 0; r < t.length; r++)
                o[r] = t.charCodeAt(r);
            t = o.buffer, e[0] = 0;
        } var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), a = new Uint8Array(i.length + 1); for (r = 0; r < i.length; r++)
            a[r] = parseInt(i[r]); if (a[i.length] = 255, m) {
            var s = new m([e.buffer, a.buffer, t]);
            n(null, s);
        } })); }), (function (t, e) { return n(new m(e)); })); }, e.decodePayloadAsBinary = function (t, n, o) { "function" == typeof n && (o = n, n = null); for (var r = t, i = []; r.byteLength > 0;) {
            for (var s = new Uint8Array(r), l = 0 === s[0], u = "", c = 1; 255 !== s[c]; c++) {
                if (u.length > 310)
                    return o(f, 0, 1);
                u += s[c];
            }
            r = a(r, 2 + u.length), u = parseInt(u);
            var p = a(r, 0, u);
            if (l)
                try {
                    p = String.fromCharCode.apply(null, new Uint8Array(p));
                }
                catch (m) {
                    var d = new Uint8Array(p);
                    for (p = "", c = 0; c < d.length; c++)
                        p += String.fromCharCode(d[c]);
                }
            i.push(p), r = a(r, u);
        } var h = i.length; i.forEach((function (t, r) { o(e.decodePacket(t, n, !0), r, h); })); }; }, Y4EA: function (t, e) { t.exports = function (t, e, n) { return t.on(e, n), { destroy: function () { t.removeListener(e, n); } }; }; }, Yvos: function (t, e) { t.exports = function (t, e) { var n = function () { }; n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t; }; }, YzUL: function (t, e, n) { var o, r, i = n("0zaL"), a = n("hWa/"), s = n("TypT"), l = n("Yvos"), u = n("Aplp"), c = n("Bn1Y")("engine.io-client:websocket"); if ("undefined" != typeof WebSocket ? o = WebSocket : "undefined" != typeof self && (o = self.WebSocket || self.MozWebSocket), "undefined" == typeof window)
            try {
                r = n(2);
            }
            catch (h) { } var p = o || r; function d(t) { t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = o && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (p = r), i.call(this, t); } t.exports = d, l(d, i), d.prototype.name = "websocket", d.prototype.supportsBinary = !0, d.prototype.doOpen = function () { if (this.check()) {
            var t = this.uri(), e = this.protocols, n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
            n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new p(t, e) : new p(t) : new p(t, e, n);
            }
            catch (o) {
                return this.emit("error", o);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        } }, d.prototype.addEventListeners = function () { var t = this; this.ws.onopen = function () { t.onOpen(); }, this.ws.onclose = function () { t.onClose(); }, this.ws.onmessage = function (e) { t.onData(e.data); }, this.ws.onerror = function (e) { t.onError("websocket error", e); }; }, d.prototype.write = function (t) { var e = this; this.writable = !1; for (var n = t.length, o = 0, r = n; o < r; o++)
            !function (t) { a.encodePacket(t, e.supportsBinary, (function (o) { if (!e.usingBrowserWebSocket) {
                var r = {};
                t.options && (r.compress = t.options.compress), e.perMessageDeflate && ("string" == typeof o ? Buffer.byteLength(o) : o.length) < e.perMessageDeflate.threshold && (r.compress = !1);
            } try {
                e.usingBrowserWebSocket ? e.ws.send(o) : e.ws.send(o, r);
            }
            catch (h) {
                c("websocket closed before onclose event");
            } --n || (e.emit("flush"), setTimeout((function () { e.writable = !0, e.emit("drain"); }), 0)); })); }(t[o]); }, d.prototype.onClose = function () { i.prototype.onClose.call(this); }, d.prototype.doClose = function () { void 0 !== this.ws && this.ws.close(); }, d.prototype.uri = function () { var t = this.query || {}, e = this.secure ? "wss" : "ws", n = ""; return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t; }, d.prototype.check = function () { return !(!p || "__initialize" in p && this.name === d.prototype.name); }; }, aKum: function (t, e, n) { function o(t) { if (t)
            return function (t) { for (var e in o.prototype)
                t[e] = o.prototype[e]; return t; }(t); } t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this; }, o.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments); } return n.fn = e, this.on(t, n), this; }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this; var n, o = this._callbacks["$" + t]; if (!o)
            return this; if (1 == arguments.length)
            return delete this._callbacks["$" + t], this; for (var r = 0; r < o.length; r++)
            if ((n = o[r]) === e || n.fn === e) {
                o.splice(r, 1);
                break;
            } return this; }, o.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t]; if (n)
            for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o)
                n[o].apply(this, e); return this; }, o.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []; }, o.prototype.hasListeners = function (t) { return !!this.listeners(t).length; }; }, akSB: function (t, e, n) { var o = n("AdPF"), r = n("0z79"), i = n("Cl5A"), a = n("CIKq"); e.polling = function (t) { var e = !1, n = !1, a = !1 !== t.jsonp; if (global.location) {
            var s = "https:" === location.protocol, l = location.port;
            l || (l = s ? 443 : 80), e = t.hostname !== location.hostname || l !== t.port, n = t.secure !== s;
        } if (t.xdomain = e, t.xscheme = n, "open" in new o(t) && !t.forceJSONP)
            return new r(t); if (!a)
            throw new Error("JSONP disabled"); return new i(t); }, e.websocket = a; }, c3EK: function (t, e) { var n, o, r, i = String.fromCharCode; function a(t) { for (var e, n, o = [], r = 0, i = t.length; r < i;)
            (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < i ? 56320 == (64512 & (n = t.charCodeAt(r++))) ? o.push(((1023 & e) << 10) + (1023 & n) + 65536) : (o.push(e), r--) : o.push(e); return o; } function s(t, e) { if (t >= 55296 && t <= 57343) {
            if (e)
                throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
            return !1;
        } return !0; } function l(t, e) { return i(t >> e & 63 | 128); } function u(t, e) { if (0 == (4294967168 & t))
            return i(t); var n = ""; return 0 == (4294965248 & t) ? n = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (s(t, e) || (t = 65533), n = i(t >> 12 & 15 | 224), n += l(t, 6)) : 0 == (4292870144 & t) && (n = i(t >> 18 & 7 | 240), n += l(t, 12), n += l(t, 6)), n + i(63 & t | 128); } function c() { if (r >= o)
            throw Error("Invalid byte index"); var t = 255 & n[r]; if (r++, 128 == (192 & t))
            return 63 & t; throw Error("Invalid continuation byte"); } function p(t) { var e, i; if (r > o)
            throw Error("Invalid byte index"); if (r == o)
            return !1; if (e = 255 & n[r], r++, 0 == (128 & e))
            return e; if (192 == (224 & e)) {
            if ((i = (31 & e) << 6 | c()) >= 128)
                return i;
            throw Error("Invalid continuation byte");
        } if (224 == (240 & e)) {
            if ((i = (15 & e) << 12 | c() << 6 | c()) >= 2048)
                return s(i, t) ? i : 65533;
            throw Error("Invalid continuation byte");
        } if (240 == (248 & e) && (i = (7 & e) << 18 | c() << 12 | c() << 6 | c()) >= 65536 && i <= 1114111)
            return i; throw Error("Invalid UTF-8 detected"); } t.exports = { version: "2.1.2", encode: function (t, e) { for (var n = !1 !== (e = e || {}).strict, o = a(t), r = o.length, i = -1, s = ""; ++i < r;)
                s += u(o[i], n); return s; }, decode: function (t, e) { var s = !1 !== (e = e || {}).strict; n = a(t), o = n.length, r = 0; for (var l, u = []; !1 !== (l = p(s));)
                u.push(l); return function (t) { for (var e, n = t.length, o = -1, r = ""; ++o < n;)
                (e = t[o]) > 65535 && (r += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), r += i(e); return r; }(u); } }; }, c3Nh: function (t, e, n) { t.exports = function (t) { function e(t) { let e = 0; for (let n = 0; n < t.length; n++)
            e = (e << 5) - e + t.charCodeAt(n), e |= 0; return o.colors[Math.abs(e) % o.colors.length]; } function o(t) { let n; function a(...t) { if (!a.enabled)
            return; const e = a, r = Number(new Date); e.diff = r - (n || r), e.prev = n, e.curr = r, n = r, t[0] = o.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O"); let i = 0; t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, r) => { if ("%%" === n)
            return n; i++; const a = o.formatters[r]; return "function" == typeof a && (n = a.call(e, t[i]), t.splice(i, 1), i--), n; }), o.formatArgs.call(e, t), (e.log || o.log).apply(e, t); } return a.namespace = t, a.enabled = o.enabled(t), a.useColors = o.useColors(), a.color = e(t), a.destroy = r, a.extend = i, "function" == typeof o.init && o.init(a), o.instances.push(a), a; } function r() { const t = o.instances.indexOf(this); return -1 !== t && (o.instances.splice(t, 1), !0); } function i(t, e) { const n = o(this.namespace + (void 0 === e ? ":" : e) + t); return n.log = this.log, n; } function a(t) { return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*"); } return o.debug = o, o.default = o, o.coerce = function (t) { return t instanceof Error ? t.stack || t.message : t; }, o.disable = function () { const t = [...o.names.map(a), ...o.skips.map(a).map(t => "-" + t)].join(","); return o.enable(""), t; }, o.enable = function (t) { let e; o.save(t), o.names = [], o.skips = []; const n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length; for (e = 0; e < r; e++)
            n[e] && ("-" === (t = n[e].replace(/\*/g, ".*?"))[0] ? o.skips.push(new RegExp("^" + t.substr(1) + "$")) : o.names.push(new RegExp("^" + t + "$"))); for (e = 0; e < o.instances.length; e++) {
            const t = o.instances[e];
            t.enabled = o.enabled(t.namespace);
        } }, o.enabled = function (t) { if ("*" === t[t.length - 1])
            return !0; let e, n; for (e = 0, n = o.skips.length; e < n; e++)
            if (o.skips[e].test(t))
                return !1; for (e = 0, n = o.names.length; e < n; e++)
            if (o.names[e].test(t))
                return !0; return !1; }, o.humanize = n("xc6+"), Object.keys(t).forEach(e => { o[e] = t[e]; }), o.instances = [], o.names = [], o.skips = [], o.formatters = {}, o.selectColor = e, o.enable(o.load()), o; }; }, cD5x: function (t, e, n) { var o = n("ojuT"), r = n("+SKG"), i = Object.prototype.toString, a = "function" == typeof global.Blob || "[object BlobConstructor]" === i.call(global.Blob), s = "function" == typeof global.File || "[object FileConstructor]" === i.call(global.File); e.deconstructPacket = function (t) { var e = [], n = t; return n.data = function t(e, n) { if (!e)
            return e; if (r(e)) {
            var i = { _placeholder: !0, num: n.length };
            return n.push(e), i;
        } if (o(e)) {
            for (var a = new Array(e.length), s = 0; s < e.length; s++)
                a[s] = t(e[s], n);
            return a;
        } if ("object" == typeof e && !(e instanceof Date)) {
            for (var l in a = {}, e)
                a[l] = t(e[l], n);
            return a;
        } return e; }(t.data, e), n.attachments = e.length, { packet: n, buffers: e }; }, e.reconstructPacket = function (t, e) { return t.data = function t(e, n) { if (!e)
            return e; if (e && e._placeholder)
            return n[e.num]; if (o(e))
            for (var r = 0; r < e.length; r++)
                e[r] = t(e[r], n);
        else if ("object" == typeof e)
            for (var i in e)
                e[i] = t(e[i], n); return e; }(t.data, e), t.attachments = void 0, t; }, e.removeBlobs = function (t, e) { var n = 0, i = t; !function t(l, u, c) { if (!l)
            return l; if (a && l instanceof Blob || s && l instanceof File) {
            n++;
            var p = new FileReader;
            p.onload = function () { c ? c[u] = this.result : i = this.result, --n || e(i); }, p.readAsArrayBuffer(l);
        }
        else if (o(l))
            for (var d = 0; d < l.length; d++)
                t(l[d], d, l);
        else if ("object" == typeof l && !r(l))
            for (var h in l)
                t(l[h], h, l); }(i), n || e(i); }; }, crnd: function (t, e) { function n(t) { return Promise.resolve().then((function () { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e; })); } n.keys = function () { return []; }, n.resolve = n, t.exports = n, n.id = "crnd"; }, "dkv/": function (t, e) { t.exports = Object.keys || function (t) { var e = [], n = Object.prototype.hasOwnProperty; for (var o in t)
            n.call(t, o) && e.push(o); return e; }; }, eOtv: function (t, e, n) { var o = n("lKxJ"), r = n("KFGy"), i = n("2xqC"), a = n("Vo14"), s = n("2Dig"), l = n("QN7Q"), u = n("x7D4")("socket.io-client:manager"), c = n("7jRU"), p = n("C2QD"), d = Object.prototype.hasOwnProperty; function h(t, e) { if (!(this instanceof h))
            return new h(t, e); t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new p({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = []; var n = e.parser || a; this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open(); } t.exports = h, h.prototype.emitAll = function () { for (var t in this.emit.apply(this, arguments), this.nsps)
            d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments); }, h.prototype.updateSocketIds = function () { for (var t in this.nsps)
            d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t)); }, h.prototype.generateId = function (t) { return ("/" === t ? "" : t + "#") + this.engine.id; }, i(h.prototype), h.prototype.reconnection = function (t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection; }, h.prototype.reconnectionAttempts = function (t) { return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts; }, h.prototype.reconnectionDelay = function (t) { return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay; }, h.prototype.randomizationFactor = function (t) { return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor; }, h.prototype.reconnectionDelayMax = function (t) { return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax; }, h.prototype.timeout = function (t) { return arguments.length ? (this._timeout = t, this) : this._timeout; }, h.prototype.maybeReconnectOnOpen = function () { !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect(); }, h.prototype.open = h.prototype.connect = function (t, e) { if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open"))
            return this; u("opening %s", this.uri), this.engine = o(this.uri, this.opts); var n = this.engine, r = this; this.readyState = "opening", this.skipReconnect = !1; var i = s(n, "open", (function () { r.onopen(), t && t(); })), a = s(n, "error", (function (e) { if (u("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
            var n = new Error("Connection error");
            n.data = e, t(n);
        }
        else
            r.maybeReconnectOnOpen(); })); if (!1 !== this._timeout) {
            var l = this._timeout;
            u("connect attempt will timeout after %d", l);
            var c = setTimeout((function () { u("connect attempt timed out after %d", l), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", l); }), l);
            this.subs.push({ destroy: function () { clearTimeout(c); } });
        } return this.subs.push(i), this.subs.push(a), this; }, h.prototype.onopen = function () { u("open"), this.cleanup(), this.readyState = "open", this.emit("open"); var t = this.engine; this.subs.push(s(t, "data", l(this, "ondata"))), this.subs.push(s(t, "ping", l(this, "onping"))), this.subs.push(s(t, "pong", l(this, "onpong"))), this.subs.push(s(t, "error", l(this, "onerror"))), this.subs.push(s(t, "close", l(this, "onclose"))), this.subs.push(s(this.decoder, "decoded", l(this, "ondecoded"))); }, h.prototype.onping = function () { this.lastPing = new Date, this.emitAll("ping"); }, h.prototype.onpong = function () { this.emitAll("pong", new Date - this.lastPing); }, h.prototype.ondata = function (t) { this.decoder.add(t); }, h.prototype.ondecoded = function (t) { this.emit("packet", t); }, h.prototype.onerror = function (t) { u("error", t), this.emitAll("error", t); }, h.prototype.socket = function (t, e) { var n = this.nsps[t]; if (!n) {
            n = new r(this, t, e), this.nsps[t] = n;
            var o = this;
            n.on("connecting", i), n.on("connect", (function () { n.id = o.generateId(t); })), this.autoConnect && i();
        } function i() { ~c(o.connecting, n) || o.connecting.push(n); } return n; }, h.prototype.destroy = function (t) { var e = c(this.connecting, t); ~e && this.connecting.splice(e, 1), this.connecting.length || this.close(); }, h.prototype.packet = function (t) { u("writing packet %j", t); var e = this; t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, (function (n) { for (var o = 0; o < n.length; o++)
            e.engine.write(n[o], t.options); e.encoding = !1, e.processPacketQueue(); }))); }, h.prototype.processPacketQueue = function () { if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift();
            this.packet(t);
        } }, h.prototype.cleanup = function () { u("cleanup"); for (var t = this.subs.length, e = 0; e < t; e++)
            this.subs.shift().destroy(); this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy(); }, h.prototype.close = h.prototype.disconnect = function () { u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close(); }, h.prototype.onclose = function (t) { u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect(); }, h.prototype.reconnect = function () { if (this.reconnecting || this.skipReconnect)
            return this; var t = this; if (this.backoff.attempts >= this._reconnectionAttempts)
            u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var e = this.backoff.duration();
            u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
            var n = setTimeout((function () { t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open((function (e) { e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect()); }))); }), e);
            this.subs.push({ destroy: function () { clearTimeout(n); } });
        } }, h.prototype.onreconnect = function () { var t = this.backoff.attempts; this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t); }; }, fg2H: function (t, e, n) { var o = n("yeub"); t.exports = function (t) { var e = t.xdomain, n = t.xscheme, r = t.enablesXDR; try {
            if ("undefined" != typeof XMLHttpRequest && (!e || o))
                return new XMLHttpRequest;
        }
        catch (i) { } try {
            if ("undefined" != typeof XDomainRequest && !n && r)
                return new XDomainRequest;
        }
        catch (i) { } if (!e)
            try {
                return new (self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
            }
            catch (i) { } }; }, g5Dd: function (t, e) { !function () {
            "use strict";
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), o = 0; o < t.length; o++)
                n[t.charCodeAt(o)] = o;
            e.encode = function (e) { var n, o = new Uint8Array(e), r = o.length, i = ""; for (n = 0; n < r; n += 3)
                i += t[o[n] >> 2], i += t[(3 & o[n]) << 4 | o[n + 1] >> 4], i += t[(15 & o[n + 1]) << 2 | o[n + 2] >> 6], i += t[63 & o[n + 2]]; return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i; }, e.decode = function (t) { var e, o, r, i, a, s = .75 * t.length, l = t.length, u = 0; "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--); var c = new ArrayBuffer(s), p = new Uint8Array(c); for (e = 0; e < l; e += 4)
                o = n[t.charCodeAt(e)], r = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], a = n[t.charCodeAt(e + 3)], p[u++] = o << 2 | r >> 4, p[u++] = (15 & r) << 4 | i >> 2, p[u++] = (3 & i) << 6 | 63 & a; return c; };
        }(); }, gFX4: function (t, e, n) { var o = n("zJ60"), r = n("Vo14"), i = n("eOtv"), a = n("x7D4")("socket.io-client"); t.exports = e = l; var s = e.managers = {}; function l(t, e) { "object" == typeof t && (e = t, t = void 0), e = e || {}; var n, r = o(t), l = r.source, u = r.id; return e.forceNew || e["force new connection"] || !1 === e.multiplex || s[u] && r.path in s[u].nsps ? (a("ignoring socket cache for %s", l), n = i(l, e)) : (s[u] || (a("new io instance for %s", l), s[u] = i(l, e)), n = s[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e); } e.protocol = r.protocol, e.connect = l, e.Manager = n("eOtv"), e.Socket = n("KFGy"); }, "hWa/": function (t, e, n) { var o, r = n("k7Z5"), i = n("WLGk"), a = n("ypnn"), s = n("zMFY"), l = n("c3EK"); "undefined" != typeof ArrayBuffer && (o = n("g5Dd")); var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), c = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), p = u || c; e.protocol = 3; var d = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, h = r(d), f = { type: "error", data: "parser error" }, m = n("14A5"); function g(t, e, n) { for (var o = new Array(t.length), r = s(t.length, n), i = function (t, n, r) { e(n, (function (e, n) { o[t] = n, r(e, o); })); }, a = 0; a < t.length; a++)
            i(a, t[a], r); } e.encodePacket = function (t, n, o, r) { "function" == typeof n && (r = n, n = !1), "function" == typeof o && (r = o, o = null); var i = void 0 === t.data ? void 0 : t.data.buffer || t.data; if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer)
            return function (t, n, o) { if (!n)
                return e.encodeBase64Packet(t, o); var r = t.data, i = new Uint8Array(r), a = new Uint8Array(1 + r.byteLength); a[0] = d[t.type]; for (var s = 0; s < i.length; s++)
                a[s + 1] = i[s]; return o(a.buffer); }(t, n, r); if (void 0 !== m && i instanceof m)
            return function (t, n, o) { if (!n)
                return e.encodeBase64Packet(t, o); if (p)
                return function (t, n, o) { if (!n)
                    return e.encodeBase64Packet(t, o); var r = new FileReader; return r.onload = function () { e.encodePacket({ type: t.type, data: r.result }, n, !0, o); }, r.readAsArrayBuffer(t.data); }(t, n, o); var r = new Uint8Array(1); return r[0] = d[t.type], o(new m([r.buffer, t.data])); }(t, n, r); if (i && i.base64)
            return function (t, n) { return n("b" + e.packets[t.type] + t.data.data); }(t, r); var a = d[t.type]; return void 0 !== t.data && (a += o ? l.encode(String(t.data), { strict: !1 }) : String(t.data)), r("" + a); }, e.encodeBase64Packet = function (t, n) { var o, r = "b" + e.packets[t.type]; if (void 0 !== m && t.data instanceof m) {
            var i = new FileReader;
            return i.onload = function () { var t = i.result.split(",")[1]; n(r + t); }, i.readAsDataURL(t.data);
        } try {
            o = String.fromCharCode.apply(null, new Uint8Array(t.data));
        }
        catch (u) {
            for (var a = new Uint8Array(t.data), s = new Array(a.length), l = 0; l < a.length; l++)
                s[l] = a[l];
            o = String.fromCharCode.apply(null, s);
        } return r += btoa(o), n(r); }, e.decodePacket = function (t, n, o) { if (void 0 === t)
            return f; if ("string" == typeof t) {
            if ("b" === t.charAt(0))
                return e.decodeBase64Packet(t.substr(1), n);
            if (o && !1 === (t = function (t) { try {
                t = l.decode(t, { strict: !1 });
            }
            catch (e) {
                return !1;
            } return t; }(t)))
                return f;
            var r = t.charAt(0);
            return Number(r) == r && h[r] ? t.length > 1 ? { type: h[r], data: t.substring(1) } : { type: h[r] } : f;
        } r = new Uint8Array(t)[0]; var i = a(t, 1); return m && "blob" === n && (i = new m([i])), { type: h[r], data: i }; }, e.decodeBase64Packet = function (t, e) { var n = h[t.charAt(0)]; if (!o)
            return { type: n, data: { base64: !0, data: t.substr(1) } }; var r = o.decode(t.substr(1)); return "blob" === e && m && (r = new m([r])), { type: n, data: r }; }, e.encodePayload = function (t, n, o) { "function" == typeof n && (o = n, n = null); var r = i(t); return n && r ? m && !p ? e.encodePayloadAsBlob(t, o) : e.encodePayloadAsArrayBuffer(t, o) : t.length ? void g(t, (function (t, o) { e.encodePacket(t, !!r && n, !1, (function (t) { o(null, function (t) { return t.length + ":" + t; }(t)); })); }), (function (t, e) { return o(e.join("")); })) : o("0:"); }, e.decodePayload = function (t, n, o) { if ("string" != typeof t)
            return e.decodePayloadAsBinary(t, n, o); var r; if ("function" == typeof n && (o = n, n = null), "" === t)
            return o(f, 0, 1); for (var i, a, s = "", l = 0, u = t.length; l < u; l++) {
            var c = t.charAt(l);
            if (":" === c) {
                if ("" === s || s != (i = Number(s)))
                    return o(f, 0, 1);
                if (s != (a = t.substr(l + 1, i)).length)
                    return o(f, 0, 1);
                if (a.length) {
                    if (r = e.decodePacket(a, n, !1), f.type === r.type && f.data === r.data)
                        return o(f, 0, 1);
                    if (!1 === o(r, l + i, u))
                        return;
                }
                l += i, s = "";
            }
            else
                s += c;
        } return "" !== s ? o(f, 0, 1) : void 0; }, e.encodePayloadAsArrayBuffer = function (t, n) { if (!t.length)
            return n(new ArrayBuffer(0)); g(t, (function (t, n) { e.encodePacket(t, !0, !0, (function (t) { return n(null, t); })); }), (function (t, e) { var o = e.reduce((function (t, e) { var n; return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2; }), 0), r = new Uint8Array(o), i = 0; return e.forEach((function (t) { var e = "string" == typeof t, n = t; if (e) {
            for (var o = new Uint8Array(t.length), a = 0; a < t.length; a++)
                o[a] = t.charCodeAt(a);
            n = o.buffer;
        } r[i++] = e ? 0 : 1; var s = n.byteLength.toString(); for (a = 0; a < s.length; a++)
            r[i++] = parseInt(s[a]); for (r[i++] = 255, o = new Uint8Array(n), a = 0; a < o.length; a++)
            r[i++] = o[a]; })), n(r.buffer); })); }, e.encodePayloadAsBlob = function (t, n) { g(t, (function (t, n) { e.encodePacket(t, !0, !0, (function (t) { var e = new Uint8Array(1); if (e[0] = 1, "string" == typeof t) {
            for (var o = new Uint8Array(t.length), r = 0; r < t.length; r++)
                o[r] = t.charCodeAt(r);
            t = o.buffer, e[0] = 0;
        } var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), a = new Uint8Array(i.length + 1); for (r = 0; r < i.length; r++)
            a[r] = parseInt(i[r]); if (a[i.length] = 255, m) {
            var s = new m([e.buffer, a.buffer, t]);
            n(null, s);
        } })); }), (function (t, e) { return n(new m(e)); })); }, e.decodePayloadAsBinary = function (t, n, o) { "function" == typeof n && (o = n, n = null); for (var r = t, i = []; r.byteLength > 0;) {
            for (var s = new Uint8Array(r), l = 0 === s[0], u = "", c = 1; 255 !== s[c]; c++) {
                if (u.length > 310)
                    return o(f, 0, 1);
                u += s[c];
            }
            r = a(r, 2 + u.length), u = parseInt(u);
            var p = a(r, 0, u);
            if (l)
                try {
                    p = String.fromCharCode.apply(null, new Uint8Array(p));
                }
                catch (m) {
                    var d = new Uint8Array(p);
                    for (p = "", c = 0; c < d.length; c++)
                        p += String.fromCharCode(d[c]);
                }
            i.push(p), r = a(r, u);
        } var h = i.length; i.forEach((function (t, r) { o(e.decodePacket(t, n, !0), r, h); })); }; }, k7Z5: function (t, e) { t.exports = Object.keys || function (t) { var e = [], n = Object.prototype.hasOwnProperty; for (var o in t)
            n.call(t, o) && e.push(o); return e; }; }, kSER: function (t, e) { t.exports = function (t, e) { for (var n = [], o = (e = e || 0) || 0; o < t.length; o++)
            n[o - e] = t[o]; return n; }; }, l518: function (t, e, n) { function o() { var t; try {
            t = e.storage.debug;
        }
        catch (n) { } return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t; } (e = t.exports = n("Rpy8")).log = function () { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments); }, e.formatArgs = function (t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
            var o = "color: " + this.color;
            t.splice(1, 0, o, "color: inherit");
            var r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function (t) { "%%" !== t && (r++, "%c" === t && (i = r)); })), t.splice(i, 0, o);
        } }, e.save = function (t) { try {
            null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        }
        catch (n) { } }, e.load = o, e.useColors = function () { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () { try {
            return window.localStorage;
        }
        catch (t) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) { try {
            return JSON.stringify(t);
        }
        catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        } }, e.enable(o()); }, lKxJ: function (t, e, n) { t.exports = n("2pII"), t.exports.parser = n("Wm4p"); }, lhf0: function (t, e, n) { function o(t) { var n; function o() { if (o.enabled) {
            var t = o, r = +new Date, i = r - (n || r);
            t.diff = i, t.prev = n, t.curr = r, n = r;
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                a[s] = arguments[s];
            a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
            var l = 0;
            a[0] = a[0].replace(/%([a-zA-Z%])/g, (function (n, o) { if ("%%" === n)
                return n; l++; var r = e.formatters[o]; return "function" == typeof r && (n = r.call(t, a[l]), a.splice(l, 1), l--), n; })), e.formatArgs.call(t, a);
            var u = o.log || e.log || console.log.bind(console);
            u.apply(t, a);
        } } return o.namespace = t, o.enabled = e.enabled(t), o.useColors = e.useColors(), o.color = function (t) { var n, o = 0; for (n in t)
            o = (o << 5) - o + t.charCodeAt(n), o |= 0; return e.colors[Math.abs(o) % e.colors.length]; }(t), o.destroy = r, "function" == typeof e.init && e.init(o), e.instances.push(o), o; } function r() { var t = e.instances.indexOf(this); return -1 !== t && (e.instances.splice(t, 1), !0); } (e = t.exports = o.debug = o.default = o).coerce = function (t) { return t instanceof Error ? t.stack || t.message : t; }, e.disable = function () { e.enable(""); }, e.enable = function (t) { var n; e.save(t), e.names = [], e.skips = []; var o = ("string" == typeof t ? t : "").split(/[\s,]+/), r = o.length; for (n = 0; n < r; n++)
            o[n] && ("-" === (t = o[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))); for (n = 0; n < e.instances.length; n++) {
            var i = e.instances[n];
            i.enabled = e.enabled(i.namespace);
        } }, e.enabled = function (t) { if ("*" === t[t.length - 1])
            return !0; var n, o; for (n = 0, o = e.skips.length; n < o; n++)
            if (e.skips[n].test(t))
                return !1; for (n = 0, o = e.names.length; n < o; n++)
            if (e.names[n].test(t))
                return !0; return !1; }, e.humanize = n("FGiv"), e.instances = [], e.names = [], e.skips = [], e.formatters = {}; }, mrSG: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "__extends", (function () { return r; })), n.d(e, "__assign", (function () { return i; })), n.d(e, "__rest", (function () { return a; })), n.d(e, "__decorate", (function () { return s; })), n.d(e, "__param", (function () { return l; })), n.d(e, "__metadata", (function () { return u; })), n.d(e, "__awaiter", (function () { return c; })), n.d(e, "__generator", (function () { return p; })), n.d(e, "__exportStar", (function () { return d; })), n.d(e, "__values", (function () { return h; })), n.d(e, "__read", (function () { return f; })), n.d(e, "__spread", (function () { return m; })), n.d(e, "__spreadArrays", (function () { return g; })), n.d(e, "__await", (function () { return y; })), n.d(e, "__asyncGenerator", (function () { return b; })), n.d(e, "__asyncDelegator", (function () { return v; })), n.d(e, "__asyncValues", (function () { return _; })), n.d(e, "__makeTemplateObject", (function () { return w; })), n.d(e, "__importStar", (function () { return k; })), n.d(e, "__importDefault", (function () { return C; }));
            var o = function (t, e) { return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]); })(t, e); };
            function r(t, e) { function n() { this.constructor = t; } o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }
            var i = function () { return (i = Object.assign || function (t) { for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t; }).apply(this, arguments); };
            function a(t, e) { var n = {}; for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (o = Object.getOwnPropertySymbols(t); r < o.length; r++)
                    e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
            } return n; }
            function s(t, e, n, o) { var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a); return i > 3 && a && Object.defineProperty(e, n, a), a; }
            function l(t, e) { return function (n, o) { e(n, o, t); }; }
            function u(t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e); }
            function c(t, e, n, o) { return new (n || (n = Promise))((function (r, i) { function a(t) { try {
                l(o.next(t));
            }
            catch (e) {
                i(e);
            } } function s(t) { try {
                l(o.throw(t));
            }
            catch (e) {
                i(e);
            } } function l(t) { t.done ? r(t.value) : new n((function (e) { e(t.value); })).then(a, s); } l((o = o.apply(t, e || [])).next()); })); }
            function p(t, e) { var n, o, r, i, a = { label: 0, sent: function () { if (1 & r[0])
                    throw r[1]; return r[1]; }, trys: [], ops: [] }; return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function s(i) { return function (s) { return function (i) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done)
                        return r;
                    switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4: return a.label++, { value: i[1], done: !1 };
                        case 5:
                            a.label++, o = i[1], i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break;
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1], r = i;
                                break;
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2], a.ops.push(i);
                                break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    i = e.call(t, a);
                }
                catch (s) {
                    i = [6, s], o = 0;
                }
                finally {
                    n = r = 0;
                } if (5 & i[0])
                throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, s]); }; } }
            function d(t, e) { for (var n in t)
                e.hasOwnProperty(n) || (e[n] = t[n]); }
            function h(t) { var e = "function" == typeof Symbol && t[Symbol.iterator], n = 0; return e ? e.call(t) : { next: function () { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }; } }; }
            function f(t, e) { var n = "function" == typeof Symbol && t[Symbol.iterator]; if (!n)
                return t; var o, r, i = n.call(t), a = []; try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done;)
                    a.push(o.value);
            }
            catch (s) {
                r = { error: s };
            }
            finally {
                try {
                    o && !o.done && (n = i.return) && n.call(i);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            } return a; }
            function m() { for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(f(arguments[e])); return t; }
            function g() { for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length; var o = Array(t), r = 0; for (e = 0; e < n; e++)
                for (var i = arguments[e], a = 0, s = i.length; a < s; a++, r++)
                    o[r] = i[a]; return o; }
            function y(t) { return this instanceof y ? (this.v = t, this) : new y(t); }
            function b(t, e, n) { if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined."); var o, r = n.apply(t, e || []), i = []; return o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function () { return this; }, o; function a(t) { r[t] && (o[t] = function (e) { return new Promise((function (n, o) { i.push([t, e, n, o]) > 1 || s(t, e); })); }); } function s(t, e) { try {
                (n = r[t](e)).value instanceof y ? Promise.resolve(n.value.v).then(l, u) : c(i[0][2], n);
            }
            catch (o) {
                c(i[0][3], o);
            } var n; } function l(t) { s("next", t); } function u(t) { s("throw", t); } function c(t, e) { t(e), i.shift(), i.length && s(i[0][0], i[0][1]); } }
            function v(t) { var e, n; return e = {}, o("next"), o("throw", (function (t) { throw t; })), o("return"), e[Symbol.iterator] = function () { return this; }, e; function o(o, r) { e[o] = t[o] ? function (e) { return (n = !n) ? { value: y(t[o](e)), done: "return" === o } : r ? r(e) : e; } : r; } }
            function _(t) { if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined."); var e, n = t[Symbol.asyncIterator]; return n ? n.call(t) : (t = h(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function () { return this; }, e); function o(n) { e[n] = t[n] && function (e) { return new Promise((function (o, r) { !function (t, e, n, o) { Promise.resolve(o).then((function (e) { t({ value: e, done: n }); }), e); }(o, r, (e = t[n](e)).done, e.value); })); }; } }
            function w(t, e) { return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t; }
            function k(t) { if (t && t.__esModule)
                return t; var e = {}; if (null != t)
                for (var n in t)
                    Object.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e; }
            function C(t) { return t && t.__esModule ? t : { default: t }; }
        }, "oIG/": function (t, e) { var n, o, r, i = String.fromCharCode; function a(t) { for (var e, n, o = [], r = 0, i = t.length; r < i;)
            (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < i ? 56320 == (64512 & (n = t.charCodeAt(r++))) ? o.push(((1023 & e) << 10) + (1023 & n) + 65536) : (o.push(e), r--) : o.push(e); return o; } function s(t, e) { if (t >= 55296 && t <= 57343) {
            if (e)
                throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
            return !1;
        } return !0; } function l(t, e) { return i(t >> e & 63 | 128); } function u(t, e) { if (0 == (4294967168 & t))
            return i(t); var n = ""; return 0 == (4294965248 & t) ? n = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (s(t, e) || (t = 65533), n = i(t >> 12 & 15 | 224), n += l(t, 6)) : 0 == (4292870144 & t) && (n = i(t >> 18 & 7 | 240), n += l(t, 12), n += l(t, 6)), n + i(63 & t | 128); } function c() { if (r >= o)
            throw Error("Invalid byte index"); var t = 255 & n[r]; if (r++, 128 == (192 & t))
            return 63 & t; throw Error("Invalid continuation byte"); } function p(t) { var e, i; if (r > o)
            throw Error("Invalid byte index"); if (r == o)
            return !1; if (e = 255 & n[r], r++, 0 == (128 & e))
            return e; if (192 == (224 & e)) {
            if ((i = (31 & e) << 6 | c()) >= 128)
                return i;
            throw Error("Invalid continuation byte");
        } if (224 == (240 & e)) {
            if ((i = (15 & e) << 12 | c() << 6 | c()) >= 2048)
                return s(i, t) ? i : 65533;
            throw Error("Invalid continuation byte");
        } if (240 == (248 & e) && (i = (7 & e) << 18 | c() << 12 | c() << 6 | c()) >= 65536 && i <= 1114111)
            return i; throw Error("Invalid UTF-8 detected"); } t.exports = { version: "2.1.2", encode: function (t, e) { for (var n = !1 !== (e = e || {}).strict, o = a(t), r = o.length, i = -1, s = ""; ++i < r;)
                s += u(o[i], n); return s; }, decode: function (t, e) { var s = !1 !== (e = e || {}).strict; n = a(t), o = n.length, r = 0; for (var l, u = []; !1 !== (l = p(s));)
                u.push(l); return function (t) { for (var e, n = t.length, o = -1, r = ""; ++o < n;)
                (e = t[o]) > 65535 && (r += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), r += i(e); return r; }(u); } }; }, ojuT: function (t, e) { var n = {}.toString; t.exports = Array.isArray || function (t) { return "[object Array]" == n.call(t); }; }, pqID: function (t, e, n) { var o = n("qp7M"), r = n("s1oe"), i = n("wlXU"), a = n("Bn1Y")("socket.io-client"); t.exports = e = l; var s = e.managers = {}; function l(t, e) { "object" == typeof t && (e = t, t = void 0), e = e || {}; var n, r = o(t), l = r.source, u = r.id; return e.forceNew || e["force new connection"] || !1 === e.multiplex || s[u] && r.path in s[u].nsps ? (a("ignoring socket cache for %s", l), n = i(l, e)) : (s[u] || (a("new io instance for %s", l), s[u] = i(l, e)), n = s[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e); } e.protocol = r.protocol, e.connect = l, e.Manager = n("wlXU"), e.Socket = n("OAgL"); }, qp7M: function (t, e, n) { var o = n("Uxeu"), r = n("Bn1Y")("socket.io-client:url"); t.exports = function (t, e) { var n = t; e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (r("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), r("parse %s", t), n = o(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/"; var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host; return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port), n; }; }, rfC7: function (t, e, n) { var o = n("3exg"), r = n("Yvos"); t.exports = c; var i, a = /\n/g, s = /\\n/g; function l() { } function u() { return "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}; } function c(t) { if (o.call(this, t), this.query = this.query || {}, !i) {
            var e = u();
            i = e.___eio = e.___eio || [];
        } this.index = i.length; var n = this; i.push((function (t) { n.onData(t); })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function () { n.script && (n.script.onerror = l); }), !1); } r(c, o), c.prototype.supportsBinary = !1, c.prototype.doClose = function () { this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this); }, c.prototype.doPoll = function () { var t = this, e = document.createElement("script"); this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) { t.onError("jsonp poll error", e); }; var n = document.getElementsByTagName("script")[0]; n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function () { var t = document.createElement("iframe"); document.body.appendChild(t), document.body.removeChild(t); }), 100); }, c.prototype.doWrite = function (t, e) { var n = this; if (!this.form) {
            var o, r = document.createElement("form"), i = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
            r.className = "socketio", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", r.target = l, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), i.name = "d", r.appendChild(i), document.body.appendChild(r), this.form = r, this.area = i;
        } function u() { c(), e(); } function c() { if (n.iframe)
            try {
                n.form.removeChild(n.iframe);
            }
            catch (t) {
                n.onError("jsonp polling iframe removal error", t);
            } try {
            o = document.createElement('<iframe src="javascript:0" name="' + n.iframeId + '">');
        }
        catch (t) {
            (o = document.createElement("iframe")).name = n.iframeId, o.src = "javascript:0";
        } o.id = n.iframeId, n.form.appendChild(o), n.iframe = o; } this.form.action = this.uri(), c(), t = t.replace(s, "\\\n"), this.area.value = t.replace(a, "\\n"); try {
            this.form.submit();
        }
        catch (p) { } this.iframe.attachEvent ? this.iframe.onreadystatechange = function () { "complete" === n.iframe.readyState && u(); } : this.iframe.onload = u; }; }, s1oe: function (t, e, n) { var o = n("l518")("socket.io-parser"), r = n("/RX3"), i = n("M/K+"), a = n("Qsis"), s = n("Id/V"); function l() { } e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = l, e.Decoder = p; var u = e.ERROR + '"encode error"'; function c(t) { var n = "" + t.type; if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
            var r = function (t) { try {
                return JSON.stringify(t);
            }
            catch (e) {
                return !1;
            } }(t.data);
            if (!1 === r)
                return u;
            n += r;
        } return o("encoded %j as %s", t, n), n; } function p() { this.reconstructor = null; } function d(t) { this.reconPack = t, this.buffers = []; } function h(t) { return { type: e.ERROR, data: "parser error: " + t }; } l.prototype.encode = function (t, n) { o("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type ? function (t, e) { i.removeBlobs(t, (function (t) { var n = i.deconstructPacket(t), o = c(n.packet), r = n.buffers; r.unshift(o), e(r); })); }(t, n) : n([c(t)]); }, r(p.prototype), p.prototype.add = function (t) { var n; if ("string" == typeof t)
            n = function (t) { var n = 0, r = { type: Number(t.charAt(0)) }; if (null == e.types[r.type])
                return h("unknown packet type " + r.type); if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
                for (var i = ""; "-" !== t.charAt(++n) && (i += t.charAt(n), n != t.length);)
                    ;
                if (i != Number(i) || "-" !== t.charAt(n))
                    throw new Error("Illegal attachments");
                r.attachments = Number(i);
            } if ("/" === t.charAt(n + 1))
                for (r.nsp = ""; ++n && "," !== (l = t.charAt(n)) && (r.nsp += l, n !== t.length);)
                    ;
            else
                r.nsp = "/"; var s = t.charAt(n + 1); if ("" !== s && Number(s) == s) {
                for (r.id = ""; ++n;) {
                    var l;
                    if (null == (l = t.charAt(n)) || Number(l) != l) {
                        --n;
                        break;
                    }
                    if (r.id += t.charAt(n), n === t.length)
                        break;
                }
                r.id = Number(r.id);
            } if (t.charAt(++n)) {
                var u = function (t) { try {
                    return JSON.parse(t);
                }
                catch (e) {
                    return !1;
                } }(t.substr(n));
                if (!1 === u || r.type !== e.ERROR && !a(u))
                    return h("invalid payload");
                r.data = u;
            } return o("decoded %s as %j", t, r), r; }(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new d(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
        else {
            if (!s(t) && !t.base64)
                throw new Error("Unknown type: " + t);
            if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
            (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", n));
        } }, p.prototype.destroy = function () { this.reconstructor && this.reconstructor.finishedReconstruction(); }, d.prototype.takeBinaryData = function (t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            var e = i.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
        } return null; }, d.prototype.finishedReconstruction = function () { this.reconPack = null, this.buffers = []; }; }, uKDP: function (t, e, n) { var o = n("0+mJ"), r = n("/RX3"), i = n("Bn1Y")("engine.io-client:socket"), a = n("7jRU"), s = n("hWa/"), l = n("Uxeu"), u = n("TypT"); function c(t, e) { if (!(this instanceof c))
            return new c(t, e); e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = l(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = l(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open(); } t.exports = c, c.priorWebsocketSuccess = !1, r(c.prototype), c.protocol = s.protocol, c.Socket = c, c.Transport = n("0zaL"), c.transports = n("0+mJ"), c.parser = n("hWa/"), c.prototype.createTransport = function (t) { i('creating transport "%s"', t); var e = function (t) { var e = {}; for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); return e; }(this.query); e.EIO = s.protocol, e.transport = t; var n = this.transportOptions[t] || {}; return this.id && (e.sid = this.id), new o[t]({ query: e, socket: this, agent: n.agent || this.agent, hostname: n.hostname || this.hostname, port: n.port || this.port, secure: n.secure || this.secure, path: n.path || this.path, forceJSONP: n.forceJSONP || this.forceJSONP, jsonp: n.jsonp || this.jsonp, forceBase64: n.forceBase64 || this.forceBase64, enablesXDR: n.enablesXDR || this.enablesXDR, withCredentials: n.withCredentials || this.withCredentials, timestampRequests: n.timestampRequests || this.timestampRequests, timestampParam: n.timestampParam || this.timestampParam, policyPort: n.policyPort || this.policyPort, pfx: n.pfx || this.pfx, key: n.key || this.key, passphrase: n.passphrase || this.passphrase, cert: n.cert || this.cert, ca: n.ca || this.ca, ciphers: n.ciphers || this.ciphers, rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate, extraHeaders: n.extraHeaders || this.extraHeaders, forceNode: n.forceNode || this.forceNode, localAddress: n.localAddress || this.localAddress, requestTimeout: n.requestTimeout || this.requestTimeout, protocols: n.protocols || void 0, isReactNative: this.isReactNative }); }, c.prototype.open = function () { var t; if (this.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
            t = "websocket";
        else {
            if (0 === this.transports.length) {
                var e = this;
                return void setTimeout((function () { e.emit("error", "No transports available"); }), 0);
            }
            t = this.transports[0];
        } this.readyState = "opening"; try {
            t = this.createTransport(t);
        }
        catch (n) {
            return this.transports.shift(), void this.open();
        } t.open(), this.setTransport(t); }, c.prototype.setTransport = function (t) { i("setting transport %s", t.name); var e = this; this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", (function () { e.onDrain(); })).on("packet", (function (t) { e.onPacket(t); })).on("error", (function (t) { e.onError(t); })).on("close", (function () { e.onClose("transport close"); })); }, c.prototype.probe = function (t) { i('probing transport "%s"', t); var e = this.createTransport(t, { probe: 1 }), n = !1, o = this; function r() { o.onlyBinaryUpgrades && (n = n || !this.supportsBinary && o.transport.supportsBinary), n || (i('probe transport "%s" opened', t), e.send([{ type: "ping", data: "probe" }]), e.once("packet", (function (r) { if (!n)
            if ("pong" === r.type && "probe" === r.data) {
                if (i('probe transport "%s" pong', t), o.upgrading = !0, o.emit("upgrading", e), !e)
                    return;
                c.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', o.transport.name), o.transport.pause((function () { n || "closed" !== o.readyState && (i("changing transport and sending upgrade packet"), d(), o.setTransport(e), e.send([{ type: "upgrade" }]), o.emit("upgrade", e), e = null, o.upgrading = !1, o.flush()); }));
            }
            else {
                i('probe transport "%s" failed', t);
                var a = new Error("probe error");
                a.transport = e.name, o.emit("upgradeError", a);
            } }))); } function a() { n || (n = !0, d(), e.close(), e = null); } function s(n) { var r = new Error("probe error: " + n); r.transport = e.name, a(), i('probe transport "%s" failed because of error: %s', t, n), o.emit("upgradeError", r); } function l() { s("transport closed"); } function u() { s("socket closed"); } function p(t) { e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), a()); } function d() { e.removeListener("open", r), e.removeListener("error", s), e.removeListener("close", l), o.removeListener("close", u), o.removeListener("upgrading", p); } c.priorWebsocketSuccess = !1, e.once("open", r), e.once("error", s), e.once("close", l), this.once("close", u), this.once("upgrading", p), e.open(); }, c.prototype.onOpen = function () { if (i("socket open"), this.readyState = "open", c.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            i("starting upgrade probes");
            for (var t = 0, e = this.upgrades.length; t < e; t++)
                this.probe(this.upgrades[t]);
        } }, c.prototype.onPacket = function (t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
            switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "pong":
                    this.setPing(), this.emit("pong");
                    break;
                case "error":
                    var e = new Error("server error");
                    e.code = t.data, this.onError(e);
                    break;
                case "message": this.emit("data", t.data), this.emit("message", t.data);
            }
        else
            i('packet received with socket readyState "%s"', this.readyState); }, c.prototype.onHandshake = function (t) { this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat)); }, c.prototype.onHeartbeat = function (t) { clearTimeout(this.pingTimeoutTimer); var e = this; e.pingTimeoutTimer = setTimeout((function () { "closed" !== e.readyState && e.onClose("ping timeout"); }), t || e.pingInterval + e.pingTimeout); }, c.prototype.setPing = function () { var t = this; clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout((function () { i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout); }), t.pingInterval); }, c.prototype.ping = function () { var t = this; this.sendPacket("ping", (function () { t.emit("ping"); })); }, c.prototype.onDrain = function () { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush(); }, c.prototype.flush = function () { "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush")); }, c.prototype.write = c.prototype.send = function (t, e, n) { return this.sendPacket("message", t, e, n), this; }, c.prototype.sendPacket = function (t, e, n, o) { if ("function" == typeof e && (o = e, e = void 0), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var r = { type: t, data: e, options: n };
            this.emit("packetCreate", r), this.writeBuffer.push(r), o && this.once("flush", o), this.flush();
        } }, c.prototype.close = function () { if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var t = this;
            this.writeBuffer.length ? this.once("drain", (function () { this.upgrading ? o() : e(); })) : this.upgrading ? o() : e();
        } function e() { t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close(); } function n() { t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e(); } function o() { t.once("upgrade", n), t.once("upgradeError", n); } return this; }, c.prototype.onError = function (t) { i("socket error %j", t), c.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t); }, c.prototype.onClose = function (t, e) { "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0); }, c.prototype.filterUpgrades = function (t) { for (var e = [], n = 0, o = t.length; n < o; n++)
            ~a(this.transports, t[n]) && e.push(t[n]); return e; }; }, wlXU: function (t, e, n) { var o = n("4+Ds"), r = n("OAgL"), i = n("/RX3"), a = n("s1oe"), s = n("Y4EA"), l = n("QN7Q"), u = n("Bn1Y")("socket.io-client:manager"), c = n("7jRU"), p = n("C2QD"), d = Object.prototype.hasOwnProperty; function h(t, e) { if (!(this instanceof h))
            return new h(t, e); t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new p({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = []; var n = e.parser || a; this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open(); } t.exports = h, h.prototype.emitAll = function () { for (var t in this.emit.apply(this, arguments), this.nsps)
            d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments); }, h.prototype.updateSocketIds = function () { for (var t in this.nsps)
            d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t)); }, h.prototype.generateId = function (t) { return ("/" === t ? "" : t + "#") + this.engine.id; }, i(h.prototype), h.prototype.reconnection = function (t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection; }, h.prototype.reconnectionAttempts = function (t) { return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts; }, h.prototype.reconnectionDelay = function (t) { return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay; }, h.prototype.randomizationFactor = function (t) { return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor; }, h.prototype.reconnectionDelayMax = function (t) { return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax; }, h.prototype.timeout = function (t) { return arguments.length ? (this._timeout = t, this) : this._timeout; }, h.prototype.maybeReconnectOnOpen = function () { !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect(); }, h.prototype.open = h.prototype.connect = function (t, e) { if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open"))
            return this; u("opening %s", this.uri), this.engine = o(this.uri, this.opts); var n = this.engine, r = this; this.readyState = "opening", this.skipReconnect = !1; var i = s(n, "open", (function () { r.onopen(), t && t(); })), a = s(n, "error", (function (e) { if (u("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
            var n = new Error("Connection error");
            n.data = e, t(n);
        }
        else
            r.maybeReconnectOnOpen(); })); if (!1 !== this._timeout) {
            var l = this._timeout;
            u("connect attempt will timeout after %d", l);
            var c = setTimeout((function () { u("connect attempt timed out after %d", l), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", l); }), l);
            this.subs.push({ destroy: function () { clearTimeout(c); } });
        } return this.subs.push(i), this.subs.push(a), this; }, h.prototype.onopen = function () { u("open"), this.cleanup(), this.readyState = "open", this.emit("open"); var t = this.engine; this.subs.push(s(t, "data", l(this, "ondata"))), this.subs.push(s(t, "ping", l(this, "onping"))), this.subs.push(s(t, "pong", l(this, "onpong"))), this.subs.push(s(t, "error", l(this, "onerror"))), this.subs.push(s(t, "close", l(this, "onclose"))), this.subs.push(s(this.decoder, "decoded", l(this, "ondecoded"))); }, h.prototype.onping = function () { this.lastPing = new Date, this.emitAll("ping"); }, h.prototype.onpong = function () { this.emitAll("pong", new Date - this.lastPing); }, h.prototype.ondata = function (t) { this.decoder.add(t); }, h.prototype.ondecoded = function (t) { this.emit("packet", t); }, h.prototype.onerror = function (t) { u("error", t), this.emitAll("error", t); }, h.prototype.socket = function (t, e) { var n = this.nsps[t]; if (!n) {
            n = new r(this, t, e), this.nsps[t] = n;
            var o = this;
            n.on("connecting", i), n.on("connect", (function () { n.id = o.generateId(t); })), this.autoConnect && i();
        } function i() { ~c(o.connecting, n) || o.connecting.push(n); } return n; }, h.prototype.destroy = function (t) { var e = c(this.connecting, t); ~e && this.connecting.splice(e, 1), this.connecting.length || this.close(); }, h.prototype.packet = function (t) { u("writing packet %j", t); var e = this; t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, (function (n) { for (var o = 0; o < n.length; o++)
            e.engine.write(n[o], t.options); e.encoding = !1, e.processPacketQueue(); }))); }, h.prototype.processPacketQueue = function () { if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift();
            this.packet(t);
        } }, h.prototype.cleanup = function () { u("cleanup"); for (var t = this.subs.length, e = 0; e < t; e++)
            this.subs.shift().destroy(); this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy(); }, h.prototype.close = h.prototype.disconnect = function () { u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close(); }, h.prototype.onclose = function (t) { u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect(); }, h.prototype.reconnect = function () { if (this.reconnecting || this.skipReconnect)
            return this; var t = this; if (this.backoff.attempts >= this._reconnectionAttempts)
            u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var e = this.backoff.duration();
            u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
            var n = setTimeout((function () { t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open((function (e) { e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect()); }))); }), e);
            this.subs.push({ destroy: function () { clearTimeout(n); } });
        } }, h.prototype.onreconnect = function () { var t = this.backoff.attempts; this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t); }; }, x7D4: function (t, e, n) { function o() { var t; try {
            t = e.storage.debug;
        }
        catch (n) { } return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t; } (e = t.exports = n("Q80o")).log = function () { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments); }, e.formatArgs = function (t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
            var o = "color: " + this.color;
            t.splice(1, 0, o, "color: inherit");
            var r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function (t) { "%%" !== t && (r++, "%c" === t && (i = r)); })), t.splice(i, 0, o);
        } }, e.save = function (t) { try {
            null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        }
        catch (n) { } }, e.load = o, e.useColors = function () { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () { try {
            return window.localStorage;
        }
        catch (t) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) { try {
            return JSON.stringify(t);
        }
        catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        } }, e.enable(o()); }, "xc6+": function (t, e) { var n = 1e3, o = 6e4, r = 36e5, i = 24 * r; function a(t, e, n, o) { var r = e >= 1.5 * n; return Math.round(t / n) + " " + o + (r ? "s" : ""); } t.exports = function (t, e) { e = e || {}; var s, l, u = typeof t; if ("string" === u && t.length > 0)
            return function (t) { if (!((t = String(t)).length > 100)) {
                var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var a = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y": return 315576e5 * a;
                        case "weeks":
                        case "week":
                        case "w": return 6048e5 * a;
                        case "days":
                        case "day":
                        case "d": return a * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h": return a * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m": return a * o;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s": return a * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms": return a;
                        default: return;
                    }
                }
            } }(t); if ("number" === u && isFinite(t))
            return e.long ? (s = t, (l = Math.abs(s)) >= i ? a(s, l, i, "day") : l >= r ? a(s, l, r, "hour") : l >= o ? a(s, l, o, "minute") : l >= n ? a(s, l, n, "second") : s + " ms") : function (t) { var e = Math.abs(t); return e >= i ? Math.round(t / i) + "d" : e >= r ? Math.round(t / r) + "h" : e >= o ? Math.round(t / o) + "m" : e >= n ? Math.round(t / n) + "s" : t + "ms"; }(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)); }; }, yeub: function (t, e) { try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
        }
        catch (n) {
            t.exports = !1;
        } }, ypnn: function (t, e) { t.exports = function (t, e, n) { var o = t.byteLength; if (e = e || 0, n = n || o, t.slice)
            return t.slice(e, n); if (e < 0 && (e += o), n < 0 && (n += o), n > o && (n = o), e >= o || e >= n || 0 === o)
            return new ArrayBuffer(0); for (var r = new Uint8Array(t), i = new Uint8Array(n - e), a = e, s = 0; a < n; a++, s++)
            i[s] = r[a]; return i.buffer; }; }, zJ60: function (t, e, n) { var o = n("Uxeu"), r = n("x7D4")("socket.io-client:url"); t.exports = function (t, e) { var n = t; e = e || global.location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (r("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), r("parse %s", t), n = o(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/"; var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host; return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port), n; }; }, zMFY: function (t, e) { function n() { } t.exports = function (t, e, o) { var r = !1; return o = o || n, i.count = t, 0 === t ? e() : i; function i(t, n) { if (i.count <= 0)
            throw new Error("after called too many times"); --i.count, t ? (r = !0, e(t), e = o) : 0 !== i.count || r || e(null, n); } }; }, zUnb: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = n("mrSG"), r = function () { return Array.isArray || function (t) { return t && "number" == typeof t.length; }; }();
            function i(t) { return null !== t && "object" == typeof t; }
            function a(t) { return "function" == typeof t; }
            var s = function () { function t(t) { return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function (t, e) { return e + 1 + ") " + t.toString(); })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this; } return t.prototype = Object.create(Error.prototype), t; }(), l = function () { function t(t) { this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t); } return t.prototype.unsubscribe = function () { var e; if (!this.closed) {
                var n = this._parentOrParents, o = this._unsubscribe, l = this._subscriptions;
                if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t)
                    n.remove(this);
                else if (null !== n)
                    for (var c = 0; c < n.length; ++c)
                        n[c].remove(this);
                if (a(o))
                    try {
                        o.call(this);
                    }
                    catch (h) {
                        e = h instanceof s ? u(h.errors) : [h];
                    }
                if (r(l)) {
                    c = -1;
                    for (var p = l.length; ++c < p;) {
                        var d = l[c];
                        if (i(d))
                            try {
                                d.unsubscribe();
                            }
                            catch (h) {
                                e = e || [], h instanceof s ? e = e.concat(u(h.errors)) : e.push(h);
                            }
                    }
                }
                if (e)
                    throw new s(e);
            } }, t.prototype.add = function (e) { var n = e; if (!e)
                return t.EMPTY; switch (typeof e) {
                case "function": n = new t(e);
                case "object":
                    if (n === this || n.closed || "function" != typeof n.unsubscribe)
                        return n;
                    if (this.closed)
                        return n.unsubscribe(), n;
                    if (!(n instanceof t)) {
                        var o = n;
                        (n = new t)._subscriptions = [o];
                    }
                    break;
                default: throw new Error("unrecognized teardown " + e + " added to Subscription.");
            } var r = n._parentOrParents; if (null === r)
                n._parentOrParents = this;
            else if (r instanceof t) {
                if (r === this)
                    return n;
                n._parentOrParents = [r, this];
            }
            else {
                if (-1 !== r.indexOf(this))
                    return n;
                r.push(this);
            } var i = this._subscriptions; return null === i ? this._subscriptions = [n] : i.push(n), n; }, t.prototype.remove = function (t) { var e = this._subscriptions; if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
            } }, t.EMPTY = function (t) { return t.closed = !0, t; }(new t), t; }();
            function u(t) { return t.reduce((function (t, e) { return t.concat(e instanceof s ? e.errors : e); }), []); }
            var c = !1, p = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) { c = t; }, get useDeprecatedSynchronousErrorHandling() { return c; } };
            function d(t) { setTimeout((function () { throw t; }), 0); }
            var h = { closed: !0, next: function (t) { }, error: function (t) { if (p.useDeprecatedSynchronousErrorHandling)
                    throw t; d(t); }, complete: function () { } }, f = function () { return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(); }(), m = function (t) { function e(n, o, r) { var i = t.call(this) || this; switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                case 0:
                    i.destination = h;
                    break;
                case 1:
                    if (!n) {
                        i.destination = h;
                        break;
                    }
                    if ("object" == typeof n) {
                        n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new g(i, n));
                        break;
                    }
                default: i.syncErrorThrowable = !0, i.destination = new g(i, n, o, r);
            } return i; } return o.__extends(e, t), e.prototype[f] = function () { return this; }, e.create = function (t, n, o) { var r = new e(t, n, o); return r.syncErrorThrowable = !1, r; }, e.prototype.next = function (t) { this.isStopped || this._next(t); }, e.prototype.error = function (t) { this.isStopped || (this.isStopped = !0, this._error(t)); }, e.prototype.complete = function () { this.isStopped || (this.isStopped = !0, this._complete()); }, e.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this)); }, e.prototype._next = function (t) { this.destination.next(t); }, e.prototype._error = function (t) { this.destination.error(t), this.unsubscribe(); }, e.prototype._complete = function () { this.destination.complete(), this.unsubscribe(); }, e.prototype._unsubscribeAndRecycle = function () { var t = this._parentOrParents; return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this; }, e; }(l), g = function (t) { function e(e, n, o, r) { var i, s = t.call(this) || this; s._parentSubscriber = e; var l = s; return a(n) ? i = n : n && (i = n.next, o = n.error, r = n.complete, n !== h && (a((l = Object.create(n)).unsubscribe) && s.add(l.unsubscribe.bind(l)), l.unsubscribe = s.unsubscribe.bind(s))), s._context = l, s._next = i, s._error = o, s._complete = r, s; } return o.__extends(e, t), e.prototype.next = function (t) { if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                p.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
            } }, e.prototype.error = function (t) { if (!this.isStopped) {
                var e = this._parentSubscriber, n = p.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                    n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                    n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : d(t), this.unsubscribe();
                else {
                    if (this.unsubscribe(), n)
                        throw t;
                    d(t);
                }
            } }, e.prototype.complete = function () { var t = this; if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                    var n = function () { return t._complete.call(t._context); };
                    p.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
                }
                else
                    this.unsubscribe();
            } }, e.prototype.__tryOrUnsub = function (t, e) { try {
                t.call(this._context, e);
            }
            catch (n) {
                if (this.unsubscribe(), p.useDeprecatedSynchronousErrorHandling)
                    throw n;
                d(n);
            } }, e.prototype.__tryOrSetError = function (t, e, n) { if (!p.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call"); try {
                e.call(this._context, n);
            }
            catch (o) {
                return p.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = o, t.syncErrorThrown = !0, !0) : (d(o), !0);
            } return !1; }, e.prototype._unsubscribe = function () { var t = this._parentSubscriber; this._context = null, this._parentSubscriber = null, t.unsubscribe(); }, e; }(m), y = function () { return "function" == typeof Symbol && Symbol.observable || "@@observable"; }();
            function b() { }
            function v(t) { return t ? 1 === t.length ? t[0] : function (e) { return t.reduce((function (t, e) { return e(t); }), e); } : b; }
            var _ = function () { function t(t) { this._isScalar = !1, t && (this._subscribe = t); } return t.prototype.lift = function (e) { var n = new t; return n.source = this, n.operator = e, n; }, t.prototype.subscribe = function (t, e, n) { var o = this.operator, r = function (t, e, n) { if (t) {
                if (t instanceof m)
                    return t;
                if (t[f])
                    return t[f]();
            } return t || e || n ? new m(t, e, n) : new m(h); }(t, e, n); if (r.add(o ? o.call(r, this.source) : this.source || p.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), p.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown))
                throw r.syncErrorValue; return r; }, t.prototype._trySubscribe = function (t) { try {
                return this._subscribe(t);
            }
            catch (e) {
                p.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) { for (; t;) {
                    var e = t.destination;
                    if (t.closed || t.isStopped)
                        return !1;
                    t = e && e instanceof m ? e : null;
                } return !0; }(t) ? t.error(e) : console.warn(e);
            } }, t.prototype.forEach = function (t, e) { var n = this; return new (e = w(e))((function (e, o) { var r; r = n.subscribe((function (e) { try {
                t(e);
            }
            catch (n) {
                o(n), r && r.unsubscribe();
            } }), o, e); })); }, t.prototype._subscribe = function (t) { var e = this.source; return e && e.subscribe(t); }, t.prototype[y] = function () { return this; }, t.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; return 0 === t.length ? this : v(t)(this); }, t.prototype.toPromise = function (t) { var e = this; return new (t = w(t))((function (t, n) { var o; e.subscribe((function (t) { return o = t; }), (function (t) { return n(t); }), (function () { return t(o); })); })); }, t.create = function (e) { return new t(e); }, t; }();
            function w(t) { if (t || (t = p.Promise || Promise), !t)
                throw new Error("no Promise impl found"); return t; }
            var k = function () { function t() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this; } return t.prototype = Object.create(Error.prototype), t; }(), C = function (t) { function e(e, n) { var o = t.call(this) || this; return o.subject = e, o.subscriber = n, o.closed = !1, o; } return o.__extends(e, t), e.prototype.unsubscribe = function () { if (!this.closed) {
                this.closed = !0;
                var t = this.subject, e = t.observers;
                if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                    var n = e.indexOf(this.subscriber);
                    -1 !== n && e.splice(n, 1);
                }
            } }, e; }(l), x = function (t) { function e(e) { var n = t.call(this, e) || this; return n.destination = e, n; } return o.__extends(e, t), e; }(m), E = function (t) { function e() { var e = t.call(this) || this; return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return o.__extends(e, t), e.prototype[f] = function () { return new x(this); }, e.prototype.lift = function (t) { var e = new S(this, this); return e.operator = t, e; }, e.prototype.next = function (t) { if (this.closed)
                throw new k; if (!this.isStopped)
                for (var e = this.observers, n = e.length, o = e.slice(), r = 0; r < n; r++)
                    o[r].next(t); }, e.prototype.error = function (t) { if (this.closed)
                throw new k; this.hasError = !0, this.thrownError = t, this.isStopped = !0; for (var e = this.observers, n = e.length, o = e.slice(), r = 0; r < n; r++)
                o[r].error(t); this.observers.length = 0; }, e.prototype.complete = function () { if (this.closed)
                throw new k; this.isStopped = !0; for (var t = this.observers, e = t.length, n = t.slice(), o = 0; o < e; o++)
                n[o].complete(); this.observers.length = 0; }, e.prototype.unsubscribe = function () { this.isStopped = !0, this.closed = !0, this.observers = null; }, e.prototype._trySubscribe = function (e) { if (this.closed)
                throw new k; return t.prototype._trySubscribe.call(this, e); }, e.prototype._subscribe = function (t) { if (this.closed)
                throw new k; return this.hasError ? (t.error(this.thrownError), l.EMPTY) : this.isStopped ? (t.complete(), l.EMPTY) : (this.observers.push(t), new C(this, t)); }, e.prototype.asObservable = function () { var t = new _; return t.source = this, t; }, e.create = function (t, e) { return new S(t, e); }, e; }(_), S = function (t) { function e(e, n) { var o = t.call(this) || this; return o.destination = e, o.source = n, o; } return o.__extends(e, t), e.prototype.next = function (t) { var e = this.destination; e && e.next && e.next(t); }, e.prototype.error = function (t) { var e = this.destination; e && e.error && this.destination.error(t); }, e.prototype.complete = function () { var t = this.destination; t && t.complete && this.destination.complete(); }, e.prototype._subscribe = function (t) { return this.source ? this.source.subscribe(t) : l.EMPTY; }, e; }(E);
            function T(t) { return t && "function" == typeof t.schedule; }
            var O = function (t) { function e(e, n, o) { var r = t.call(this) || this; return r.parent = e, r.outerValue = n, r.outerIndex = o, r.index = 0, r; } return o.__extends(e, t), e.prototype._next = function (t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this); }, e.prototype._error = function (t) { this.parent.notifyError(t, this), this.unsubscribe(); }, e.prototype._complete = function () { this.parent.notifyComplete(this), this.unsubscribe(); }, e; }(m), D = function (t) { return function (e) { for (var n = 0, o = t.length; n < o && !e.closed; n++)
                e.next(t[n]); e.complete(); }; };
            function A() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"; }
            var I = A(), P = function (t) { return t && "number" == typeof t.length && "function" != typeof t; };
            function N(t) { return !!t && "function" != typeof t.subscribe && "function" == typeof t.then; }
            var F = function (t) { if (t && "function" == typeof t[y])
                return o = t, function (t) { var e = o[y](); if ("function" != typeof e.subscribe)
                    throw new TypeError("Provided object does not correctly implement Symbol.observable"); return e.subscribe(t); }; if (P(t))
                return D(t); if (N(t))
                return n = t, function (t) { return n.then((function (e) { t.closed || (t.next(e), t.complete()); }), (function (e) { return t.error(e); })).then(null, d), t; }; if (t && "function" == typeof t[I])
                return e = t, function (t) { for (var n = e[I]();;) {
                    var o = n.next();
                    if (o.done) {
                        t.complete();
                        break;
                    }
                    if (t.next(o.value), t.closed)
                        break;
                } return "function" == typeof n.return && t.add((function () { n.return && n.return(); })), t; }; var e, n, o, r = i(t) ? "an invalid object" : "'" + t + "'"; throw new TypeError("You provided " + r + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."); };
            function R(t, e, n, o, r) { if (void 0 === r && (r = new O(t, n, o)), !r.closed)
                return e instanceof _ ? e.subscribe(r) : F(e)(r); }
            var M = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return o.__extends(e, t), e.prototype.notifyNext = function (t, e, n, o, r) { this.destination.next(e); }, e.prototype.notifyError = function (t, e) { this.destination.error(t); }, e.prototype.notifyComplete = function (t) { this.destination.complete(); }, e; }(m);
            function j(t, e) { return function (n) { if ("function" != typeof t)
                throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new B(t, e)); }; }
            var B = function () { function t(t, e) { this.project = t, this.thisArg = e; } return t.prototype.call = function (t, e) { return e.subscribe(new V(t, this.project, this.thisArg)); }, t; }(), V = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; return r.project = n, r.count = 0, r.thisArg = o || r, r; } return o.__extends(e, t), e.prototype._next = function (t) { var e; try {
                e = this.project.call(this.thisArg, t, this.count++);
            }
            catch (n) {
                return void this.destination.error(n);
            } this.destination.next(e); }, e; }(m);
            function L(t, e) { return new _((function (n) { var o = new l, r = 0; return o.add(e.schedule((function () { r !== t.length ? (n.next(t[r++]), n.closed || o.add(this.schedule())) : n.complete(); }))), o; })); }
            function H(t, e) { return e ? function (t, e) { if (null != t) {
                if (function (t) { return t && "function" == typeof t[y]; }(t))
                    return function (t, e) { return new _((function (n) { var o = new l; return o.add(e.schedule((function () { var r = t[y](); o.add(r.subscribe({ next: function (t) { o.add(e.schedule((function () { return n.next(t); }))); }, error: function (t) { o.add(e.schedule((function () { return n.error(t); }))); }, complete: function () { o.add(e.schedule((function () { return n.complete(); }))); } })); }))), o; })); }(t, e);
                if (N(t))
                    return function (t, e) { return new _((function (n) { var o = new l; return o.add(e.schedule((function () { return t.then((function (t) { o.add(e.schedule((function () { n.next(t), o.add(e.schedule((function () { return n.complete(); }))); }))); }), (function (t) { o.add(e.schedule((function () { return n.error(t); }))); })); }))), o; })); }(t, e);
                if (P(t))
                    return L(t, e);
                if (function (t) { return t && "function" == typeof t[I]; }(t) || "string" == typeof t)
                    return function (t, e) { if (!t)
                        throw new Error("Iterable cannot be null"); return new _((function (n) { var o, r = new l; return r.add((function () { o && "function" == typeof o.return && o.return(); })), r.add(e.schedule((function () { o = t[I](), r.add(e.schedule((function () { if (!n.closed) {
                        var t, e;
                        try {
                            var r = o.next();
                            t = r.value, e = r.done;
                        }
                        catch (i) {
                            return void n.error(i);
                        }
                        e ? n.complete() : (n.next(t), this.schedule());
                    } }))); }))), r; })); }(t, e);
            } throw new TypeError((null !== t && typeof t || t) + " is not observable"); }(t, e) : t instanceof _ ? t : new _(F(t)); }
            var q = function () { function t(t, e) { void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e; } return t.prototype.call = function (t, e) { return e.subscribe(new z(t, this.project, this.concurrent)); }, t; }(), z = function (t) { function e(e, n, o) { void 0 === o && (o = Number.POSITIVE_INFINITY); var r = t.call(this, e) || this; return r.project = n, r.concurrent = o, r.hasCompleted = !1, r.buffer = [], r.active = 0, r.index = 0, r; } return o.__extends(e, t), e.prototype._next = function (t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t); }, e.prototype._tryNext = function (t) { var e, n = this.index++; try {
                e = this.project(t, n);
            }
            catch (o) {
                return void this.destination.error(o);
            } this.active++, this._innerSub(e, t, n); }, e.prototype._innerSub = function (t, e, n) { var o = new O(this, e, n), r = this.destination; r.add(o); var i = R(this, t, void 0, void 0, o); i !== o && r.add(i); }, e.prototype._complete = function () { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe(); }, e.prototype.notifyNext = function (t, e, n, o, r) { this.destination.next(e); }, e.prototype.notifyComplete = function (t) { var e = this.buffer; this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete(); }, e; }(M);
            function U(t) { return t; }
            function W(t) { return void 0 === t && (t = Number.POSITIVE_INFINITY), function t(e, n, o) { return void 0 === o && (o = Number.POSITIVE_INFINITY), "function" == typeof n ? function (r) { return r.pipe(t((function (t, o) { return H(e(t, o)).pipe(j((function (e, r) { return n(t, e, o, r); }))); }), o)); } : ("number" == typeof n && (o = n), function (t) { return t.lift(new q(e, o)); }); }(U, t); }
            function K(t, e) { return e ? L(t, e) : new _(D(t)); }
            function $() { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; var n = Number.POSITIVE_INFINITY, o = null, r = t[t.length - 1]; return T(r) ? (o = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof r && (n = t.pop()), null === o && 1 === t.length && t[0] instanceof _ ? t[0] : W(n)(K(t, o)); }
            function G() { return function (t) { return t.lift(new Z(t)); }; }
            var Z = function () { function t(t) { this.connectable = t; } return t.prototype.call = function (t, e) { var n = this.connectable; n._refCount++; var o = new Q(t, n), r = e.subscribe(o); return o.closed || (o.connection = n.connect()), r; }, t; }(), Q = function (t) { function e(e, n) { var o = t.call(this, e) || this; return o.connectable = n, o; } return o.__extends(e, t), e.prototype._unsubscribe = function () { var t = this.connectable; if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0)
                    this.connection = null;
                else if (t._refCount = e - 1, e > 1)
                    this.connection = null;
                else {
                    var n = this.connection, o = t._connection;
                    this.connection = null, !o || n && o !== n || o.unsubscribe();
                }
            }
            else
                this.connection = null; }, e; }(m), Y = function (t) { function e(e, n) { var o = t.call(this) || this; return o.source = e, o.subjectFactory = n, o._refCount = 0, o._isComplete = !1, o; } return o.__extends(e, t), e.prototype._subscribe = function (t) { return this.getSubject().subscribe(t); }, e.prototype.getSubject = function () { var t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject; }, e.prototype.connect = function () { var t = this._connection; return t || (this._isComplete = !1, (t = this._connection = new l).add(this.source.subscribe(new J(this.getSubject(), this))), t.closed && (this._connection = null, t = l.EMPTY)), t; }, e.prototype.refCount = function () { return G()(this); }, e; }(_), X = function () { var t = Y.prototype; return { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: t._subscribe }, _isComplete: { value: t._isComplete, writable: !0 }, getSubject: { value: t.getSubject }, connect: { value: t.connect }, refCount: { value: t.refCount } }; }(), J = function (t) { function e(e, n) { var o = t.call(this, e) || this; return o.connectable = n, o; } return o.__extends(e, t), e.prototype._error = function (e) { this._unsubscribe(), t.prototype._error.call(this, e); }, e.prototype._complete = function () { this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this); }, e.prototype._unsubscribe = function () { var t = this.connectable; if (t) {
                this.connectable = null;
                var e = t._connection;
                t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe();
            } }, e; }(x);
            function tt() { return new E; }
            function et() { return function (t) { return G()((e = tt, function (t) { var n; n = "function" == typeof e ? e : function () { return e; }; var o = Object.create(t, X); return o.source = t, o.subjectFactory = n, o; })(t)); var e; }; }
            var nt = "__parameters__";
            function ot(t, e, n) { var r = function (t) { return function () { for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; if (t) {
                var r = t.apply(void 0, Object(o.__spread)(e));
                for (var i in r)
                    this[i] = r[i];
            } }; }(e); function i() { for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; if (this instanceof i)
                return r.apply(this, e), this; var a = new ((t = i).bind.apply(t, Object(o.__spread)([void 0], e))); return s.annotation = a, s; function s(t, e, n) { for (var o = t.hasOwnProperty(nt) ? t[nt] : Object.defineProperty(t, nt, { value: [] })[nt]; o.length <= n;)
                o.push(null); return (o[n] = o[n] || []).push(a), t; } } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i; }
            var rt = ot("Inject", (function (t) { return { token: t }; })), it = ot("Optional"), at = ot("Self"), st = ot("SkipSelf"), lt = function (t) { return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t; }({});
            function ut(t) { for (var e in t)
                if (t[e] === ut)
                    return e; throw Error("Could not find renamed property on target object."); }
            function ct(t) { return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 }; }
            function pt(t) { var e = t[dt]; return e && e.token === t ? e : null; }
            var dt = ut({ ngInjectableDef: ut });
            function ht(t) { if ("string" == typeof t)
                return t; if (t instanceof Array)
                return "[" + t.map(ht).join(", ") + "]"; if (null == t)
                return "" + t; if (t.overriddenName)
                return "" + t.overriddenName; if (t.name)
                return "" + t.name; var e = t.toString(); if (null == e)
                return "" + e; var n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n); }
            var ft = ut({ __forward_ref__: ut });
            function mt(t) { return t.__forward_ref__ = mt, t.toString = function () { return ht(this()); }, t; }
            function gt(t) { var e = t; return "function" == typeof e && e.hasOwnProperty(ft) && e.__forward_ref__ === mt ? e() : t; }
            var yt = "undefined" != typeof globalThis && globalThis, bt = "undefined" != typeof window && window, vt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, _t = "undefined" != typeof global && global, wt = yt || _t || bt || vt, kt = function () { function t(t, e) { this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.ngInjectableDef = ct({ token: this, providedIn: e.providedIn || "root", factory: e.factory })); } return t.prototype.toString = function () { return "InjectionToken " + this._desc; }, t; }(), Ct = new kt("INJECTOR", -1), xt = new Object, Et = /\n/gm, St = ut({ provide: String, useValue: ut }), Tt = void 0;
            function Ot(t) { var e = Tt; return Tt = t, e; }
            function Dt(t, e) { return void 0 === e && (e = lt.Default), function (t, e) { if (void 0 === e && (e = lt.Default), void 0 === Tt)
                throw new Error("inject() must be called from an injection context"); return null === Tt ? function (t, e, n) { var o = pt(t); if (o && "root" == o.providedIn)
                return void 0 === o.value ? o.value = o.factory() : o.value; if (n & lt.Optional)
                return null; throw new Error("Injector: NOT_FOUND [" + ht(t) + "]"); }(t, 0, e) : Tt.get(t, e & lt.Optional ? null : void 0, e); }(t, e); }
            var At = Dt, It = function () { function t() { } return t.prototype.get = function (t, e) { if (void 0 === e && (e = xt), e === xt) {
                var n = new Error("NullInjectorError: No provider for " + ht(t) + "!");
                throw n.name = "NullInjectorError", n;
            } return e; }, t; }();
            function Pt(t, e, n, o) { void 0 === o && (o = null), t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t; var r = ht(e); if (e instanceof Array)
                r = e.map(ht).join(" -> ");
            else if ("object" == typeof e) {
                var i = [];
                for (var a in e)
                    if (e.hasOwnProperty(a)) {
                        var s = e[a];
                        i.push(a + ":" + ("string" == typeof s ? JSON.stringify(s) : ht(s)));
                    }
                r = "{" + i.join(", ") + "}";
            } return n + (o ? "(" + o + ")" : "") + "[" + r + "]: " + t.replace(Et, "\n  "); }
            var Nt = function () { return function () { }; }(), Ft = function () { return function () { }; }();
            function Rt(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n); }
            function Mt(t, e) { return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]; }
            var jt = function (t) { return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t; }({}), Bt = function () { return ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(wt); }();
            function Vt(t) { return t.ngDebugContext; }
            function Lt(t) { return t.ngOriginalError; }
            function Ht(t) { for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]; t.error.apply(t, Object(o.__spread)(e)); }
            var qt = function () { function t() { this._console = console; } return t.prototype.handleError = function (t) { var e = this._findOriginalError(t), n = this._findContext(t), o = function (t) { return t.ngErrorLogger || Ht; }(t); o(this._console, "ERROR", t), e && o(this._console, "ORIGINAL ERROR", e), n && o(this._console, "ERROR CONTEXT", n); }, t.prototype._findContext = function (t) { return t ? Vt(t) ? Vt(t) : this._findContext(Lt(t)) : null; }, t.prototype._findOriginalError = function (t) { for (var e = Lt(t); e && Lt(e);)
                e = Lt(e); return e; }, t; }(), zt = !0, Ut = !1;
            function Wt() { return Ut = !0, zt; }
            var Kt = function () { function t(t) { if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                var e = this.inertDocument.createElement("html");
                this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement);
            } this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () { try {
                return !!window.DOMParser;
            }
            catch (t) {
                return !1;
            } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR; } return t.prototype.getInertBodyElement_XHR = function (t) { t = "<body><remove></remove>" + t + "</body>"; try {
                t = encodeURI(t);
            }
            catch (o) {
                return null;
            } var e = new XMLHttpRequest; e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0); var n = e.response.body; return n.removeChild(n.firstChild), n; }, t.prototype.getInertBodyElement_DOMParser = function (t) { t = "<body><remove></remove>" + t + "</body>"; try {
                var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                return e.removeChild(e.firstChild), e;
            }
            catch (n) {
                return null;
            } }, t.prototype.getInertBodyElement_InertDocument = function (t) { var e = this.inertDocument.createElement("template"); return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement); }, t.prototype.stripCustomNsAttrs = function (t) { for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                var o = e.item(n).name;
                "xmlns:ns1" !== o && 0 !== o.indexOf("ns1:") || t.removeAttribute(o);
            } for (var r = t.firstChild; r;)
                r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r), r = r.nextSibling; }, t; }(), $t = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, Gt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            function Zt(t) { return (t = String(t)).match($t) || t.match(Gt) ? t : (Wt() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t); }
            function Qt(t) { var e, n, r = {}; try {
                for (var i = Object(o.__values)(t.split(",")), a = i.next(); !a.done; a = i.next())
                    r[a.value] = !0;
            }
            catch (s) {
                e = { error: s };
            }
            finally {
                try {
                    a && !a.done && (n = i.return) && n.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } return r; }
            function Yt() { for (var t, e, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r]; var i = {}; try {
                for (var a = Object(o.__values)(n), s = a.next(); !s.done; s = a.next()) {
                    var l = s.value;
                    for (var u in l)
                        l.hasOwnProperty(u) && (i[u] = !0);
                }
            }
            catch (c) {
                t = { error: c };
            }
            finally {
                try {
                    s && !s.done && (e = a.return) && e.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return i; }
            var Xt, Jt = Qt("area,br,col,hr,img,wbr"), te = Qt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), ee = Qt("rp,rt"), ne = Yt(ee, te), oe = Yt(Jt, Yt(te, Qt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Yt(ee, Qt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ne), re = Qt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), ie = Qt("srcset"), ae = Yt(re, ie, Qt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Qt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")), se = Qt("script,style,template"), le = function () { function t() { this.sanitizedSomething = !1, this.buf = []; } return t.prototype.sanitizeChildren = function (t) { for (var e = t.firstChild, n = !0; e;)
                if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild)
                    e = e.firstChild;
                else
                    for (; e;) {
                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                        var o = this.checkClobberedElement(e, e.nextSibling);
                        if (o) {
                            e = o;
                            break;
                        }
                        e = this.checkClobberedElement(e, e.parentNode);
                    } return this.buf.join(""); }, t.prototype.startElement = function (t) { var e, n = t.nodeName.toLowerCase(); if (!oe.hasOwnProperty(n))
                return this.sanitizedSomething = !0, !se.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); for (var o = t.attributes, r = 0; r < o.length; r++) {
                var i = o.item(r), a = i.name, s = a.toLowerCase();
                if (ae.hasOwnProperty(s)) {
                    var l = i.value;
                    re[s] && (l = Zt(l)), ie[s] && (e = l, l = (e = String(e)).split(",").map((function (t) { return Zt(t.trim()); })).join(", ")), this.buf.push(" ", a, '="', pe(l), '"');
                }
                else
                    this.sanitizedSomething = !0;
            } return this.buf.push(">"), !0; }, t.prototype.endElement = function (t) { var e = t.nodeName.toLowerCase(); oe.hasOwnProperty(e) && !Jt.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">")); }, t.prototype.chars = function (t) { this.buf.push(pe(t)); }, t.prototype.checkClobberedElement = function (t, e) { if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
                throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML); return e; }, t; }(), ue = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ce = /([^\#-~ |!])/g;
            function pe(t) { return t.replace(/&/g, "&amp;").replace(ue, (function (t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"; })).replace(ce, (function (t) { return "&#" + t.charCodeAt(0) + ";"; })).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
            function de(t) { return "content" in t && function (t) { return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName; }(t) ? t.content : null; }
            var he = function (t) { return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t; }({}), fe = function () { return function () { }; }(), me = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"), ge = /^url\(([^)]+)\)$/, ye = /([A-Z])/g;
            function be(t) { try {
                return null != t ? t.toString().slice(0, 30) : t;
            }
            catch (e) {
                return "[ERROR] Exception while trying to serialize the value";
            } }
            var ve = function () { function t() { } return t.__NG_ELEMENT_ID__ = function () { return _e(); }, t; }(), _e = function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; }, we = new kt("The presence of this token marks an injector as being the root injector."), ke = function (t, e, n) { return new Oe(t, e, n); }, Ce = function () { function t() { } return t.create = function (t, e) { return Array.isArray(t) ? ke(t, e, "") : ke(t.providers, t.parent, t.name || ""); }, t.THROW_IF_NOT_FOUND = xt, t.NULL = new It, t.ngInjectableDef = ct({ token: t, providedIn: "any", factory: function () { return Dt(Ct); } }), t.__NG_ELEMENT_ID__ = -1, t; }(), xe = function (t) { return t; }, Ee = [], Se = xe, Te = function () { return Array.prototype.slice.call(arguments); }, Oe = function () { function t(t, e, n) { void 0 === e && (e = Ce.NULL), void 0 === n && (n = null), this.parent = e, this.source = n; var o = this._records = new Map; o.set(Ce, { token: Ce, fn: xe, deps: Ee, value: this, useNew: !1 }), o.set(Ct, { token: Ct, fn: xe, deps: Ee, value: this, useNew: !1 }), function t(e, n) { if (n)
                if ((n = gt(n)) instanceof Array)
                    for (var o = 0; o < n.length; o++)
                        t(e, n[o]);
                else {
                    if ("function" == typeof n)
                        throw Ae("Function/Class not supported", n);
                    if (!n || "object" != typeof n || !n.provide)
                        throw Ae("Unexpected provider", n);
                    var r = gt(n.provide), i = function (t) { var e = function (t) { var e = Ee, n = t.deps; if (n && n.length) {
                        e = [];
                        for (var o = 0; o < n.length; o++) {
                            var r = 6;
                            if ((l = gt(n[o])) instanceof Array)
                                for (var i = 0, a = l; i < a.length; i++) {
                                    var s = a[i];
                                    s instanceof it || s == it ? r |= 1 : s instanceof st || s == st ? r &= -3 : s instanceof at || s == at ? r &= -5 : l = s instanceof rt ? s.token : gt(s);
                                }
                            e.push({ token: l, options: r });
                        }
                    }
                    else if (t.useExisting) {
                        var l = gt(t.useExisting);
                        e = [{ token: l, options: 6 }];
                    }
                    else if (!(n || St in t))
                        throw Ae("'deps' required", t); return e; }(t), n = xe, o = Ee, r = !1, i = gt(t.provide); if (St in t)
                        o = t.useValue;
                    else if (t.useFactory)
                        n = t.useFactory;
                    else if (t.useExisting)
                        ;
                    else if (t.useClass)
                        r = !0, n = gt(t.useClass);
                    else {
                        if ("function" != typeof i)
                            throw Ae("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                        r = !0, n = i;
                    } return { deps: e, fn: n, useNew: r, value: o }; }(n);
                    if (!0 === n.multi) {
                        var a = e.get(r);
                        if (a) {
                            if (a.fn !== Te)
                                throw De(r);
                        }
                        else
                            e.set(r, a = { token: n.provide, deps: [], useNew: !1, fn: Te, value: Ee });
                        a.deps.push({ token: r = n, options: 6 });
                    }
                    var s = e.get(r);
                    if (s && s.fn == Te)
                        throw De(r);
                    e.set(r, i);
                } }(o, t); } return t.prototype.get = function (t, e, n) { void 0 === n && (n = lt.Default); var r = this._records.get(t); try {
                return function t(e, n, r, i, a, s) { try {
                    return function (e, n, r, i, a, s) { var l, u; if (!n || s & lt.SkipSelf)
                        s & lt.Self || (u = i.get(e, a, lt.Default));
                    else {
                        if ((u = n.value) == Se)
                            throw Error("\u0275Circular dependency");
                        if (u === Ee) {
                            n.value = Se;
                            var c = n.useNew, p = n.fn, d = n.deps, h = Ee;
                            if (d.length) {
                                h = [];
                                for (var f = 0; f < d.length; f++) {
                                    var m = d[f], g = m.options, y = 2 & g ? r.get(m.token) : void 0;
                                    h.push(t(m.token, y, r, y || 4 & g ? i : Ce.NULL, 1 & g ? null : Ce.THROW_IF_NOT_FOUND, lt.Default));
                                }
                            }
                            n.value = u = c ? new ((l = p).bind.apply(l, Object(o.__spread)([void 0], h))) : p.apply(void 0, h);
                        }
                    } return u; }(e, n, r, i, a, s);
                }
                catch (l) {
                    throw l instanceof Error || (l = new Error(l)), (l.ngTempTokenPath = l.ngTempTokenPath || []).unshift(e), n && n.value == Se && (n.value = Ee), l;
                } }(t, r, this._records, this.parent, e, n);
            }
            catch (i) {
                return function (t, e, n, o) { var r = t.ngTempTokenPath; throw e.__source && r.unshift(e.__source), t.message = Pt("\n" + t.message, r, "StaticInjectorError", o), t.ngTokenPath = r, t.ngTempTokenPath = null, t; }(i, t, 0, this.source);
            } }, t.prototype.toString = function () { var t = []; return this._records.forEach((function (e, n) { return t.push(ht(n)); })), "StaticInjector[" + t.join(", ") + "]"; }, t; }();
            function De(t) { return Ae("Cannot mix multi providers and regular providers", t); }
            function Ae(t, e) { return new Error(Pt(t, e, "StaticInjectorError")); }
            var Ie = null;
            function Pe() { if (!Ie) {
                var t = wt.Symbol;
                if (t && t.iterator)
                    Ie = t.iterator;
                else
                    for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                        var o = e[n];
                        "entries" !== o && "size" !== o && Map.prototype[o] === Map.prototype.entries && (Ie = o);
                    }
            } return Ie; }
            function Ne(t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e); }
            function Fe(t, e) { var n = Me(t), o = Me(e); return n && o ? function (t, e, n) { for (var o = t[Pe()](), r = e[Pe()]();;) {
                var i = o.next(), a = r.next();
                if (i.done && a.done)
                    return !0;
                if (i.done || a.done)
                    return !1;
                if (!n(i.value, a.value))
                    return !1;
            } }(t, e, Fe) : !(n || !t || "object" != typeof t && "function" != typeof t || o || !e || "object" != typeof e && "function" != typeof e) || Ne(t, e); }
            var Re = function () { function t(t) { this.wrapped = t; } return t.wrap = function (e) { return new t(e); }, t.unwrap = function (e) { return t.isWrapped(e) ? e.wrapped : e; }, t.isWrapped = function (e) { return e instanceof t; }, t; }();
            function Me(t) { return !!je(t) && (Array.isArray(t) || !(t instanceof Map) && Pe() in t); }
            function je(t) { return null !== t && ("function" == typeof t || "object" == typeof t); }
            function Be(t) { return !!t && "function" == typeof t.then; }
            function Ve(t) { return !!t && "function" == typeof t.subscribe; }
            var Le = function () { function t(t, e, n) { this.previousValue = t, this.currentValue = e, this.firstChange = n; } return t.prototype.isFirstChange = function () { return this.firstChange; }, t; }(), He = function () { return function () { }; }(), qe = function () { return function () { }; }();
            function ze(t) { var e = Error("No component factory found for " + ht(t) + ". Did you add it to @NgModule.entryComponents?"); return e[Ue] = t, e; }
            var Ue = "ngComponent", We = function () { function t() { } return t.prototype.resolveComponentFactory = function (t) { throw ze(t); }, t; }(), Ke = function () { function t() { } return t.NULL = new We, t; }(), $e = function () { function t(t, e, n) { this._parent = e, this._ngModule = n, this._factories = new Map; for (var o = 0; o < t.length; o++) {
                var r = t[o];
                this._factories.set(r.componentType, r);
            } } return t.prototype.resolveComponentFactory = function (t) { var e = this._factories.get(t); if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e)
                throw ze(t); return new Ge(e, this._ngModule); }, t; }(), Ge = function (t) { function e(e, n) { var o = t.call(this) || this; return o.factory = e, o.ngModule = n, o.selector = e.selector, o.componentType = e.componentType, o.ngContentSelectors = e.ngContentSelectors, o.inputs = e.inputs, o.outputs = e.outputs, o; } return Object(o.__extends)(e, t), e.prototype.create = function (t, e, n, o) { return this.factory.create(t, e, n, o || this.ngModule); }, e; }(qe);
            function Ze() { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; }
            var Qe = function () { function t(t) { this.nativeElement = t; } return t.__NG_ELEMENT_ID__ = function () { return Ye(t); }, t; }(), Ye = Ze, Xe = function () { return function () { }; }(), Je = function () { return function () { }; }(), tn = function (t) { return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t; }({}), en = function () { function t() { } return t.__NG_ELEMENT_ID__ = function () { return nn(); }, t; }(), nn = Ze, on = function () { return function (t) { this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join("."); }; }(), rn = new on("8.2.14"), an = function () { function t() { } return t.prototype.supports = function (t) { return Me(t); }, t.prototype.create = function (t) { return new ln(t); }, t; }(), sn = function (t, e) { return e; }, ln = function () { function t(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || sn; } return t.prototype.forEachItem = function (t) { var e; for (e = this._itHead; null !== e; e = e._next)
                t(e); }, t.prototype.forEachOperation = function (t) { for (var e = this._itHead, n = this._removalsHead, o = 0, r = null; e || n;) {
                var i = !n || e && e.currentIndex < dn(n, o, r) ? e : n, a = dn(i, o, r), s = i.currentIndex;
                if (i === n)
                    o--, n = n._nextRemoved;
                else if (e = e._next, null == i.previousIndex)
                    o++;
                else {
                    r || (r = []);
                    var l = a - o, u = s - o;
                    if (l != u) {
                        for (var c = 0; c < l; c++) {
                            var p = c < r.length ? r[c] : r[c] = 0, d = p + c;
                            u <= d && d < l && (r[c] = p + 1);
                        }
                        r[i.previousIndex] = u - l;
                    }
                }
                a !== s && t(i, a, s);
            } }, t.prototype.forEachPreviousItem = function (t) { var e; for (e = this._previousItHead; null !== e; e = e._nextPrevious)
                t(e); }, t.prototype.forEachAddedItem = function (t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded)
                t(e); }, t.prototype.forEachMovedItem = function (t) { var e; for (e = this._movesHead; null !== e; e = e._nextMoved)
                t(e); }, t.prototype.forEachRemovedItem = function (t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                t(e); }, t.prototype.forEachIdentityChange = function (t) { var e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange)
                t(e); }, t.prototype.diff = function (t) { if (null == t && (t = []), !Me(t))
                throw new Error("Error trying to diff '" + ht(t) + "'. Only arrays and iterables are allowed"); return this.check(t) ? this : null; }, t.prototype.onDestroy = function () { }, t.prototype.check = function (t) { var e = this; this._reset(); var n, o, r, i = this._itHead, a = !1; if (Array.isArray(t)) {
                this.length = t.length;
                for (var s = 0; s < this.length; s++)
                    r = this._trackByFn(s, o = t[s]), null !== i && Ne(i.trackById, r) ? (a && (i = this._verifyReinsertion(i, o, r, s)), Ne(i.item, o) || this._addIdentityChange(i, o)) : (i = this._mismatch(i, o, r, s), a = !0), i = i._next;
            }
            else
                n = 0, function (t, e) { if (Array.isArray(t))
                    for (var n = 0; n < t.length; n++)
                        e(t[n]);
                else
                    for (var o = t[Pe()](), r = void 0; !(r = o.next()).done;)
                        e(r.value); }(t, (function (t) { r = e._trackByFn(n, t), null !== i && Ne(i.trackById, r) ? (a && (i = e._verifyReinsertion(i, t, r, n)), Ne(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, r, n), a = !0), i = i._next, n++; })), this.length = n; return this._truncate(i), this.collection = t, this.isDirty; }, Object.defineProperty(t.prototype, "isDirty", { get: function () { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead; }, enumerable: !0, configurable: !0 }), t.prototype._reset = function () { if (this.isDirty) {
                var t = void 0, e = void 0;
                for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                    t._nextPrevious = t._next;
                for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    t.previousIndex = t.currentIndex;
                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
                    t.previousIndex = t.currentIndex, e = t._nextMoved;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
            } }, t.prototype._mismatch = function (t, e, n, o) { var r; return null === t ? r = this._itTail : (r = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, o)) ? (Ne(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, r, o)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ne(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, r, o)) : t = this._addAfter(new un(e, n), r, o), t; }, t.prototype._verifyReinsertion = function (t, e, n, o) { var r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== r ? t = this._reinsertAfter(r, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t; }, t.prototype._truncate = function (t) { for (; null !== t;) {
                var e = t._next;
                this._addToRemovals(this._unlink(t)), t = e;
            } null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null); }, t.prototype._reinsertAfter = function (t, e, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); var o = t._prevRemoved, r = t._nextRemoved; return null === o ? this._removalsHead = r : o._nextRemoved = r, null === r ? this._removalsTail = o : r._prevRemoved = o, this._insertAfter(t, e, n), this._addToMoves(t, n), t; }, t.prototype._moveAfter = function (t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t; }, t.prototype._addAfter = function (t, e, n) { return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t; }, t.prototype._insertAfter = function (t, e, n) { var o = null === e ? this._itHead : e._next; return t._next = o, t._prev = e, null === o ? this._itTail = t : o._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new pn), this._linkedRecords.put(t), t.currentIndex = n, t; }, t.prototype._remove = function (t) { return this._addToRemovals(this._unlink(t)); }, t.prototype._unlink = function (t) { null !== this._linkedRecords && this._linkedRecords.remove(t); var e = t._prev, n = t._next; return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t; }, t.prototype._addToMoves = function (t, e) { return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t); }, t.prototype._addToRemovals = function (t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new pn), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }, t.prototype._addIdentityChange = function (t, e) { return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t; }, t; }(), un = function () { return function (t, e) { this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null; }; }(), cn = function () { function t() { this._head = null, this._tail = null; } return t.prototype.add = function (t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }, t.prototype.get = function (t, e) { var n; for (n = this._head; null !== n; n = n._nextDup)
                if ((null === e || e <= n.currentIndex) && Ne(n.trackById, t))
                    return n; return null; }, t.prototype.remove = function (t) { var e = t._prevDup, n = t._nextDup; return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head; }, t; }(), pn = function () { function t() { this.map = new Map; } return t.prototype.put = function (t) { var e = t.trackById, n = this.map.get(e); n || (n = new cn, this.map.set(e, n)), n.add(t); }, t.prototype.get = function (t, e) { var n = this.map.get(t); return n ? n.get(t, e) : null; }, t.prototype.remove = function (t) { var e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t; }, Object.defineProperty(t.prototype, "isEmpty", { get: function () { return 0 === this.map.size; }, enumerable: !0, configurable: !0 }), t.prototype.clear = function () { this.map.clear(); }, t; }();
            function dn(t, e, n) { var o = t.previousIndex; if (null === o)
                return o; var r = 0; return n && o < n.length && (r = n[o]), o + e + r; }
            var hn = function () { function t() { } return t.prototype.supports = function (t) { return t instanceof Map || je(t); }, t.prototype.create = function () { return new fn; }, t; }(), fn = function () { function t() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null; } return Object.defineProperty(t.prototype, "isDirty", { get: function () { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead; }, enumerable: !0, configurable: !0 }), t.prototype.forEachItem = function (t) { var e; for (e = this._mapHead; null !== e; e = e._next)
                t(e); }, t.prototype.forEachPreviousItem = function (t) { var e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
                t(e); }, t.prototype.forEachChangedItem = function (t) { var e; for (e = this._changesHead; null !== e; e = e._nextChanged)
                t(e); }, t.prototype.forEachAddedItem = function (t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded)
                t(e); }, t.prototype.forEachRemovedItem = function (t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                t(e); }, t.prototype.diff = function (t) { if (t) {
                if (!(t instanceof Map || je(t)))
                    throw new Error("Error trying to diff '" + ht(t) + "'. Only maps and objects are allowed");
            }
            else
                t = new Map; return this.check(t) ? this : null; }, t.prototype.onDestroy = function () { }, t.prototype.check = function (t) { var e = this; this._reset(); var n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (function (t, o) { if (n && n.key === o)
                e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
            else {
                var r = e._getOrCreateRecordForKey(o, t);
                n = e._insertBeforeOrAppend(n, r);
            } })), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (var o = n; null !== o; o = o._nextRemoved)
                    o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
            } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }, t.prototype._insertBeforeOrAppend = function (t, e) { if (t) {
                var n = t._prev;
                return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t;
            } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null; }, t.prototype._getOrCreateRecordForKey = function (t, e) { if (this._records.has(t)) {
                var n = this._records.get(t);
                this._maybeAddToChanges(n, e);
                var o = n._prev, r = n._next;
                return o && (o._next = r), r && (r._prev = o), n._next = null, n._prev = null, n;
            } var i = new mn(t); return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i; }, t.prototype._reset = function () { if (this.isDirty) {
                var t = void 0;
                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
                    t._nextPrevious = t._next;
                for (t = this._changesHead; null !== t; t = t._nextChanged)
                    t.previousValue = t.currentValue;
                for (t = this._additionsHead; null != t; t = t._nextAdded)
                    t.previousValue = t.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
            } }, t.prototype._maybeAddToChanges = function (t, e) { Ne(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)); }, t.prototype._addToAdditions = function (t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }, t.prototype._addToChanges = function (t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }, t.prototype._forEach = function (t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach((function (n) { return e(t[n], n); })); }, t; }(), mn = function () { return function (t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null; }; }(), gn = function () { function t(t) { this.factories = t; } return t.create = function (e, n) { if (null != n) {
                var o = n.factories.slice();
                e = e.concat(o);
            } return new t(e); }, t.extend = function (e) { return { provide: t, useFactory: function (n) { if (!n)
                    throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n); }, deps: [[t, new st, new it]] }; }, t.prototype.find = function (t) { var e, n = this.factories.find((function (e) { return e.supports(t); })); if (null != n)
                return n; throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'"); }, t.ngInjectableDef = ct({ token: t, providedIn: "root", factory: function () { return new t([new an]); } }), t; }(), yn = function () { function t(t) { this.factories = t; } return t.create = function (e, n) { if (n) {
                var o = n.factories.slice();
                e = e.concat(o);
            } return new t(e); }, t.extend = function (e) { return { provide: t, useFactory: function (n) { if (!n)
                    throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n); }, deps: [[t, new st, new it]] }; }, t.prototype.find = function (t) { var e = this.factories.find((function (e) { return e.supports(t); })); if (e)
                return e; throw new Error("Cannot find a differ supporting object '" + t + "'"); }, t.ngInjectableDef = ct({ token: t, providedIn: "root", factory: function () { return new t([new hn]); } }), t; }(), bn = [new hn], vn = new gn([new an]), _n = new yn(bn), wn = function () { function t() { } return t.__NG_ELEMENT_ID__ = function () { return kn(t, Qe); }, t; }(), kn = Ze, Cn = function () { function t() { } return t.__NG_ELEMENT_ID__ = function () { return xn(t, Qe); }, t; }(), xn = Ze;
            function En(t, e, n, o) { var r = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'."; return o && (r += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (t, e) { var n = new Error(t); return Sn(n, e), n; }(r, t); }
            function Sn(t, e) { t.ngDebugContext = e, t.ngErrorLogger = e.logError.bind(e); }
            function Tn(t) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t); }
            function On(t, e, n) { var o = t.state, r = 1792 & o; return r === e ? (t.state = -1793 & o | n, t.initIndex = -1, !0) : r === n; }
            function Dn(t, e, n) { return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0); }
            function An(t, e) { return t.nodes[e]; }
            function In(t, e) { return t.nodes[e]; }
            function Pn(t, e) { return t.nodes[e]; }
            function Nn(t, e) { return t.nodes[e]; }
            function Fn(t, e) { return t.nodes[e]; }
            var Rn = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 }, Mn = function () { }, jn = new Map;
            function Bn(t) { var e = jn.get(t); return e || (e = ht(t) + "_" + jn.size, jn.set(t, e)), e; }
            function Vn(t, e, n, o) { if (Re.isWrapped(o)) {
                o = Re.unwrap(o);
                var r = t.def.nodes[e].bindingIndex + n, i = Re.unwrap(t.oldValues[r]);
                t.oldValues[r] = new Re(i);
            } return o; }
            function Ln(t) { return { id: "$$undefined", styles: t.styles, encapsulation: t.encapsulation, data: t.data }; }
            var Hn = 0;
            function qn(t, e, n, o) { return !(!(2 & t.state) && Ne(t.oldValues[e.bindingIndex + n], o)); }
            function zn(t, e, n, o) { return !!qn(t, e, n, o) && (t.oldValues[e.bindingIndex + n] = o, !0); }
            function Un(t, e, n, o) { var r = t.oldValues[e.bindingIndex + n]; if (1 & t.state || !Fe(r, o)) {
                var i = e.bindings[n].name;
                throw En(Rn.createDebugContext(t, e.nodeIndex), i + ": " + r, i + ": " + o, 0 != (1 & t.state));
            } }
            function Wn(t) { for (var e = t; e;)
                2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent; }
            function Kn(t, e) { for (var n = t; n && n !== e;)
                n.state |= 64, n = n.viewContainerParent || n.parent; }
            function $n(t, e, n, o) { try {
                return Wn(33554432 & t.def.nodes[e].flags ? In(t, e).componentView : t), Rn.handleEvent(t, e, n, o);
            }
            catch (r) {
                t.root.errorHandler.handleError(r);
            } }
            function Gn(t) { return t.parent ? In(t.parent, t.parentNodeDef.nodeIndex) : null; }
            function Zn(t) { return t.parent ? t.parentNodeDef.parent : null; }
            function Qn(t, e) { switch (201347067 & e.flags) {
                case 1: return In(t, e.nodeIndex).renderElement;
                case 2: return An(t, e.nodeIndex).renderText;
            } }
            function Yn(t) { return !!t.parent && !!(32768 & t.parentNodeDef.flags); }
            function Xn(t) { return !(!t.parent || 32768 & t.parentNodeDef.flags); }
            function Jn(t) { return 1 << t % 32; }
            function to(t) { var e = {}, n = 0, r = {}; return t && t.forEach((function (t) { var i = Object(o.__read)(t, 2), a = i[0], s = i[1]; "number" == typeof a ? (e[a] = s, n |= Jn(a)) : r[a] = s; })), { matchedQueries: e, references: r, matchedQueryIds: n }; }
            function eo(t, e) { return t.map((function (t) { var n, r, i; return Array.isArray(t) ? (i = (n = Object(o.__read)(t, 2))[0], r = n[1]) : (i = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, "__source", { value: e, configurable: !0 }), { flags: i, token: r, tokenKey: Bn(r) }; })); }
            function no(t, e, n) { var o = n.renderParent; return o ? 0 == (1 & o.flags) || 0 == (33554432 & o.flags) || o.element.componentRendererType && o.element.componentRendererType.encapsulation === jt.Native ? In(t, n.renderParent.nodeIndex).renderElement : void 0 : e; }
            var oo = new WeakMap;
            function ro(t) { var e = oo.get(t); return e || ((e = t((function () { return Mn; }))).factory = t, oo.set(t, e)), e; }
            function io(t, e, n, o, r) { 3 === e && (n = t.renderer.parentNode(Qn(t, t.def.lastRenderRootNode))), ao(t, e, 0, t.def.nodes.length - 1, n, o, r); }
            function ao(t, e, n, o, r, i, a) { for (var s = n; s <= o; s++) {
                var l = t.def.nodes[s];
                11 & l.flags && lo(t, l, e, r, i, a), s += l.childCount;
            } }
            function so(t, e, n, o, r, i) { for (var a = t; a && !Yn(a);)
                a = a.parent; for (var s = a.parent, l = Zn(a), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
                var p = s.def.nodes[c];
                p.ngContentIndex === e && lo(s, p, n, o, r, i), c += p.childCount;
            } if (!s.parent) {
                var d = t.root.projectableNodes[e];
                if (d)
                    for (c = 0; c < d.length; c++)
                        uo(t, d[c], n, o, r, i);
            } }
            function lo(t, e, n, o, r, i) { if (8 & e.flags)
                so(t, e.ngContent.index, n, o, r, i);
            else {
                var a = Qn(t, e);
                if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && uo(t, a, n, o, r, i), 32 & e.bindingFlags && uo(In(t, e.nodeIndex).componentView, a, n, o, r, i)) : uo(t, a, n, o, r, i), 16777216 & e.flags)
                    for (var s = In(t, e.nodeIndex).viewContainer._embeddedViews, l = 0; l < s.length; l++)
                        io(s[l], n, o, r, i);
                1 & e.flags && !e.element.name && ao(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, o, r, i);
            } }
            function uo(t, e, n, o, r, i) { var a = t.renderer; switch (n) {
                case 1:
                    a.appendChild(o, e);
                    break;
                case 2:
                    a.insertBefore(o, e, r);
                    break;
                case 3:
                    a.removeChild(o, e);
                    break;
                case 0: i.push(e);
            } }
            var co = /^:([^:]+):(.+)$/;
            function po(t) { if (":" === t[0]) {
                var e = t.match(co);
                return [e[1], e[2]];
            } return ["", t]; }
            function ho(t) { for (var e = 0, n = 0; n < t.length; n++)
                e |= t[n].flags; return e; }
            var fo = new Object, mo = Bn(Ce), go = Bn(Ct), yo = Bn(Nt);
            function bo(t, e, n, o) { return n = gt(n), { index: -1, deps: eo(o, ht(e)), flags: t, token: e, value: n }; }
            function vo(t, e, n) { void 0 === n && (n = Ce.THROW_IF_NOT_FOUND); var o, r, i = Ot(t); try {
                if (8 & e.flags)
                    return e.token;
                if (2 & e.flags && (n = null), 1 & e.flags)
                    return t._parent.get(e.token, n);
                var a = e.tokenKey;
                switch (a) {
                    case mo:
                    case go:
                    case yo: return t;
                }
                var s, l = t._def.providersByKey[a];
                if (l) {
                    var u = t._providers[l.index];
                    return void 0 === u && (u = t._providers[l.index] = _o(t, l)), u === fo ? void 0 : u;
                }
                if ((s = pt(e.token)) && (o = t, null != (r = s).providedIn && (function (t, e) { return t._def.modules.indexOf(e) > -1; }(o, r.providedIn) || "root" === r.providedIn && o._def.isRoot))) {
                    var c = t._providers.length;
                    return t._def.providers[c] = t._def.providersByKey[e.tokenKey] = { flags: 5120, value: s.factory, deps: [], index: c, token: e.token }, t._providers[c] = fo, t._providers[c] = _o(t, t._def.providersByKey[e.tokenKey]);
                }
                return 4 & e.flags ? n : t._parent.get(e.token, n);
            }
            finally {
                Ot(i);
            } }
            function _o(t, e) { var n; switch (201347067 & e.flags) {
                case 512:
                    n = function (t, e, n) { var r = n.length; switch (r) {
                        case 0: return new e;
                        case 1: return new e(vo(t, n[0]));
                        case 2: return new e(vo(t, n[0]), vo(t, n[1]));
                        case 3: return new e(vo(t, n[0]), vo(t, n[1]), vo(t, n[2]));
                        default:
                            for (var i = new Array(r), a = 0; a < r; a++)
                                i[a] = vo(t, n[a]);
                            return new (e.bind.apply(e, Object(o.__spread)([void 0], i)));
                    } }(t, e.value, e.deps);
                    break;
                case 1024:
                    n = function (t, e, n) { var r = n.length; switch (r) {
                        case 0: return e();
                        case 1: return e(vo(t, n[0]));
                        case 2: return e(vo(t, n[0]), vo(t, n[1]));
                        case 3: return e(vo(t, n[0]), vo(t, n[1]), vo(t, n[2]));
                        default:
                            for (var i = Array(r), a = 0; a < r; a++)
                                i[a] = vo(t, n[a]);
                            return e.apply(void 0, Object(o.__spread)(i));
                    } }(t, e.value, e.deps);
                    break;
                case 2048:
                    n = vo(t, e.deps[0]);
                    break;
                case 256: n = e.value;
            } return n === fo || null === n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? fo : n; }
            function wo(t, e) { var n = t.viewContainer._embeddedViews; if ((null == e || e >= n.length) && (e = n.length - 1), e < 0)
                return null; var o = n[e]; return o.viewContainerParent = null, Mt(n, e), Rn.dirtyParentQueries(o), Co(o), o; }
            function ko(t, e, n) { var o = e ? Qn(e, e.def.lastRenderRootNode) : t.renderElement, r = n.renderer.parentNode(o), i = n.renderer.nextSibling(o); io(n, 2, r, i, void 0); }
            function Co(t) { io(t, 3, null, null, void 0); }
            var xo = new Object;
            function Eo(t, e, n, o, r, i) { return new So(t, e, n, o, r, i); }
            var So = function (t) { function e(e, n, o, r, i, a) { var s = t.call(this) || this; return s.selector = e, s.componentType = n, s._inputs = r, s._outputs = i, s.ngContentSelectors = a, s.viewDefFactory = o, s; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "inputs", { get: function () { var t = [], e = this._inputs; for (var n in e)
                    t.push({ propName: n, templateName: e[n] }); return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "outputs", { get: function () { var t = []; for (var e in this._outputs)
                    t.push({ propName: e, templateName: this._outputs[e] }); return t; }, enumerable: !0, configurable: !0 }), e.prototype.create = function (t, e, n, o) { if (!o)
                throw new Error("ngModule should be provided"); var r = ro(this.viewDefFactory), i = r.nodes[0].element.componentProvider.nodeIndex, a = Rn.createRootView(t, e || [], n, r, o, xo), s = Pn(a, i).instance; return n && a.renderer.setAttribute(In(a, 0).renderElement, "ng-version", rn.full), new To(a, new Io(a), s); }, e; }(qe), To = function (t) { function e(e, n, o) { var r = t.call(this) || this; return r._view = e, r._viewRef = n, r._component = o, r._elDef = r._view.def.nodes[0], r.hostView = n, r.changeDetectorRef = n, r.instance = o, r; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "location", { get: function () { return new Qe(In(this._view, this._elDef.nodeIndex).renderElement); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "injector", { get: function () { return new Ro(this._view, this._elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "componentType", { get: function () { return this._component.constructor; }, enumerable: !0, configurable: !0 }), e.prototype.destroy = function () { this._viewRef.destroy(); }, e.prototype.onDestroy = function (t) { this._viewRef.onDestroy(t); }, e; }(He);
            function Oo(t, e, n) { return new Do(t, e, n); }
            var Do = function () { function t(t, e, n) { this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []; } return Object.defineProperty(t.prototype, "element", { get: function () { return new Qe(this._data.renderElement); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function () { return new Ro(this._view, this._elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parentInjector", { get: function () { for (var t = this._view, e = this._elDef.parent; !e && t;)
                    e = Zn(t), t = t.parent; return t ? new Ro(t, e) : new Ro(this._view, null); }, enumerable: !0, configurable: !0 }), t.prototype.clear = function () { for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                var e = wo(this._data, t);
                Rn.destroyView(e);
            } }, t.prototype.get = function (t) { var e = this._embeddedViews[t]; if (e) {
                var n = new Io(e);
                return n.attachToViewContainerRef(this), n;
            } return null; }, Object.defineProperty(t.prototype, "length", { get: function () { return this._embeddedViews.length; }, enumerable: !0, configurable: !0 }), t.prototype.createEmbeddedView = function (t, e, n) { var o = t.createEmbeddedView(e || {}); return this.insert(o, n), o; }, t.prototype.createComponent = function (t, e, n, o, r) { var i = n || this.parentInjector; r || t instanceof Ge || (r = i.get(Nt)); var a = t.create(i, o, void 0, r); return this.insert(a.hostView, e), a; }, t.prototype.insert = function (t, e) { if (t.destroyed)
                throw new Error("Cannot insert a destroyed View in a ViewContainer!"); var n, o, r, i, a = t; return i = (n = this._data).viewContainer._embeddedViews, null == (o = e) && (o = i.length), (r = a._view).viewContainerParent = this._view, Rt(i, o, r), function (t, e) { var n = Gn(e); if (n && n !== t && !(16 & e.state)) {
                e.state |= 16;
                var o = n.template._projectedViews;
                o || (o = n.template._projectedViews = []), o.push(e), function (t, e) { if (!(4 & e.flags)) {
                    t.nodeFlags |= 4, e.flags |= 4;
                    for (var n = e.parent; n;)
                        n.childFlags |= 4, n = n.parent;
                } }(e.parent.def, e.parentNodeDef);
            } }(n, r), Rn.dirtyParentQueries(r), ko(n, o > 0 ? i[o - 1] : null, r), a.attachToViewContainerRef(this), t; }, t.prototype.move = function (t, e) { if (t.destroyed)
                throw new Error("Cannot move a destroyed View in a ViewContainer!"); var n, o, r, i, a, s = this._embeddedViews.indexOf(t._view); return r = e, a = (i = (n = this._data).viewContainer._embeddedViews)[o = s], Mt(i, o), null == r && (r = i.length), Rt(i, r, a), Rn.dirtyParentQueries(a), Co(a), ko(n, r > 0 ? i[r - 1] : null, a), t; }, t.prototype.indexOf = function (t) { return this._embeddedViews.indexOf(t._view); }, t.prototype.remove = function (t) { var e = wo(this._data, t); e && Rn.destroyView(e); }, t.prototype.detach = function (t) { var e = wo(this._data, t); return e ? new Io(e) : null; }, t; }();
            function Ao(t) { return new Io(t); }
            var Io = function () { function t(t) { this._view = t, this._viewContainerRef = null, this._appRef = null; } return Object.defineProperty(t.prototype, "rootNodes", { get: function () { return io(this._view, 0, void 0, void 0, t = []), t; var t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this._view.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "destroyed", { get: function () { return 0 != (128 & this._view.state); }, enumerable: !0, configurable: !0 }), t.prototype.markForCheck = function () { Wn(this._view); }, t.prototype.detach = function () { this._view.state &= -5; }, t.prototype.detectChanges = function () { var t = this._view.root.rendererFactory; t.begin && t.begin(); try {
                Rn.checkAndUpdateView(this._view);
            }
            finally {
                t.end && t.end();
            } }, t.prototype.checkNoChanges = function () { Rn.checkNoChangesView(this._view); }, t.prototype.reattach = function () { this._view.state |= 4; }, t.prototype.onDestroy = function (t) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t); }, t.prototype.destroy = function () { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Rn.destroyView(this._view); }, t.prototype.detachFromAppRef = function () { this._appRef = null, Co(this._view), Rn.dirtyParentQueries(this._view); }, t.prototype.attachToAppRef = function (t) { if (this._viewContainerRef)
                throw new Error("This view is already attached to a ViewContainer!"); this._appRef = t; }, t.prototype.attachToViewContainerRef = function (t) { if (this._appRef)
                throw new Error("This view is already attached directly to the ApplicationRef!"); this._viewContainerRef = t; }, t; }();
            function Po(t, e) { return new No(t, e); }
            var No = function (t) { function e(e, n) { var o = t.call(this) || this; return o._parentView = e, o._def = n, o; } return Object(o.__extends)(e, t), e.prototype.createEmbeddedView = function (t) { return new Io(Rn.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)); }, Object.defineProperty(e.prototype, "elementRef", { get: function () { return new Qe(In(this._parentView, this._def.nodeIndex).renderElement); }, enumerable: !0, configurable: !0 }), e; }(wn);
            function Fo(t, e) { return new Ro(t, e); }
            var Ro = function () { function t(t, e) { this.view = t, this.elDef = e; } return t.prototype.get = function (t, e) { return void 0 === e && (e = Ce.THROW_IF_NOT_FOUND), Rn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: t, tokenKey: Bn(t) }, e); }, t; }();
            function Mo(t, e) { var n = t.def.nodes[e]; if (1 & n.flags) {
                var o = In(t, n.nodeIndex);
                return n.element.template ? o.template : o.renderElement;
            } if (2 & n.flags)
                return An(t, n.nodeIndex).renderText; if (20240 & n.flags)
                return Pn(t, n.nodeIndex).instance; throw new Error("Illegal state: read nodeValue for node index " + e); }
            function jo(t) { return new Bo(t.renderer); }
            var Bo = function () { function t(t) { this.delegate = t; } return t.prototype.selectRootElement = function (t) { return this.delegate.selectRootElement(t); }, t.prototype.createElement = function (t, e) { var n = Object(o.__read)(po(e), 2), r = this.delegate.createElement(n[1], n[0]); return t && this.delegate.appendChild(t, r), r; }, t.prototype.createViewRoot = function (t) { return t; }, t.prototype.createTemplateAnchor = function (t) { var e = this.delegate.createComment(""); return t && this.delegate.appendChild(t, e), e; }, t.prototype.createText = function (t, e) { var n = this.delegate.createText(e); return t && this.delegate.appendChild(t, n), n; }, t.prototype.projectNodes = function (t, e) { for (var n = 0; n < e.length; n++)
                this.delegate.appendChild(t, e[n]); }, t.prototype.attachViewAfter = function (t, e) { for (var n = this.delegate.parentNode(t), o = this.delegate.nextSibling(t), r = 0; r < e.length; r++)
                this.delegate.insertBefore(n, e[r], o); }, t.prototype.detachView = function (t) { for (var e = 0; e < t.length; e++) {
                var n = t[e], o = this.delegate.parentNode(n);
                this.delegate.removeChild(o, n);
            } }, t.prototype.destroyView = function (t, e) { for (var n = 0; n < e.length; n++)
                this.delegate.destroyNode(e[n]); }, t.prototype.listen = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.listenGlobal = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.setElementProperty = function (t, e, n) { this.delegate.setProperty(t, e, n); }, t.prototype.setElementAttribute = function (t, e, n) { var r = Object(o.__read)(po(e), 2), i = r[0], a = r[1]; null != n ? this.delegate.setAttribute(t, a, n, i) : this.delegate.removeAttribute(t, a, i); }, t.prototype.setBindingDebugInfo = function (t, e, n) { }, t.prototype.setElementClass = function (t, e, n) { n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e); }, t.prototype.setElementStyle = function (t, e, n) { null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e); }, t.prototype.invokeElementMethod = function (t, e, n) { t[e].apply(t, n); }, t.prototype.setText = function (t, e) { this.delegate.setValue(t, e); }, t.prototype.animate = function () { throw new Error("Renderer.animate is no longer supported!"); }, t; }();
            function Vo(t, e, n, o) { return new Lo(t, e, n, o); }
            var Lo = function () { function t(t, e, n, o) { this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = o, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (t) { for (var e = t._def, n = t._providers = new Array(e.providers.length), o = 0; o < e.providers.length; o++) {
                var r = e.providers[o];
                4096 & r.flags || void 0 === n[o] && (n[o] = _o(t, r));
            } }(this); } return t.prototype.get = function (t, e, n) { void 0 === e && (e = Ce.THROW_IF_NOT_FOUND), void 0 === n && (n = lt.Default); var o = 0; return n & lt.SkipSelf ? o |= 1 : n & lt.Self && (o |= 4), vo(this, { token: t, tokenKey: Bn(t), flags: o }, e); }, Object.defineProperty(t.prototype, "instance", { get: function () { return this.get(this._moduleType); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentFactoryResolver", { get: function () { return this.get(Ke); }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function () { if (this._destroyed)
                throw new Error("The ng module " + ht(this.instance.constructor) + " has already been destroyed."); this._destroyed = !0, function (t, e) { for (var n = t._def, o = new Set, r = 0; r < n.providers.length; r++)
                if (131072 & n.providers[r].flags) {
                    var i = t._providers[r];
                    if (i && i !== fo) {
                        var a = i.ngOnDestroy;
                        "function" != typeof a || o.has(i) || (a.apply(i), o.add(i));
                    }
                } }(this), this._destroyListeners.forEach((function (t) { return t(); })); }, t.prototype.onDestroy = function (t) { this._destroyListeners.push(t); }, t; }(), Ho = Bn(Xe), qo = Bn(en), zo = Bn(Qe), Uo = Bn(Cn), Wo = Bn(wn), Ko = Bn(ve), $o = Bn(Ce), Go = Bn(Ct);
            function Zo(t, e, n, r, i, a, s, l) { var u = []; if (s)
                for (var c in s) {
                    var p = Object(o.__read)(s[c], 2);
                    u[p[0]] = { flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null };
                } var d = []; if (l)
                for (var h in l)
                    d.push({ type: 1, propName: h, target: null, eventName: l[h] }); return Xo(t, e |= 16384, n, r, i, i, a, u, d); }
            function Qo(t, e, n) { return Xo(-1, t |= 16, null, 0, e, e, n); }
            function Yo(t, e, n, o, r) { return Xo(-1, t, e, 0, n, o, r); }
            function Xo(t, e, n, o, r, i, a, s, l) { var u = to(n), c = u.matchedQueries, p = u.references, d = u.matchedQueryIds; l || (l = []), s || (s = []), i = gt(i); var h = eo(a, ht(r)); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: d, references: p, ngContentIndex: -1, childCount: o, bindings: s, bindingFlags: ho(s), outputs: l, element: null, provider: { token: r, value: i, deps: h }, text: null, query: null, ngContent: null }; }
            function Jo(t, e) { return or(t, e); }
            function tr(t, e) { for (var n = t; n.parent && !Yn(n);)
                n = n.parent; return rr(n.parent, Zn(n), !0, e.provider.value, e.provider.deps); }
            function er(t, e) { var n = rr(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps); if (e.outputs.length)
                for (var o = 0; o < e.outputs.length; o++) {
                    var r = e.outputs[o], i = n[r.propName];
                    if (!Ve(i))
                        throw new Error("@Output " + r.propName + " not initialized in '" + n.constructor.name + "'.");
                    var a = i.subscribe(nr(t, e.parent.nodeIndex, r.eventName));
                    t.disposables[e.outputIndex + o] = a.unsubscribe.bind(a);
                } return n; }
            function nr(t, e, n) { return function (o) { return $n(t, e, n, o); }; }
            function or(t, e) { var n = (8192 & e.flags) > 0, r = e.provider; switch (201347067 & e.flags) {
                case 512: return rr(t, e.parent, n, r.value, r.deps);
                case 1024: return function (t, e, n, r, i) { var a = i.length; switch (a) {
                    case 0: return r();
                    case 1: return r(ar(t, e, n, i[0]));
                    case 2: return r(ar(t, e, n, i[0]), ar(t, e, n, i[1]));
                    case 3: return r(ar(t, e, n, i[0]), ar(t, e, n, i[1]), ar(t, e, n, i[2]));
                    default:
                        for (var s = Array(a), l = 0; l < a; l++)
                            s[l] = ar(t, e, n, i[l]);
                        return r.apply(void 0, Object(o.__spread)(s));
                } }(t, e.parent, n, r.value, r.deps);
                case 2048: return ar(t, e.parent, n, r.deps[0]);
                case 256: return r.value;
            } }
            function rr(t, e, n, r, i) { var a = i.length; switch (a) {
                case 0: return new r;
                case 1: return new r(ar(t, e, n, i[0]));
                case 2: return new r(ar(t, e, n, i[0]), ar(t, e, n, i[1]));
                case 3: return new r(ar(t, e, n, i[0]), ar(t, e, n, i[1]), ar(t, e, n, i[2]));
                default:
                    for (var s = new Array(a), l = 0; l < a; l++)
                        s[l] = ar(t, e, n, i[l]);
                    return new (r.bind.apply(r, Object(o.__spread)([void 0], s)));
            } }
            var ir = {};
            function ar(t, e, n, o, r) { if (void 0 === r && (r = Ce.THROW_IF_NOT_FOUND), 8 & o.flags)
                return o.token; var i = t; 2 & o.flags && (r = null); var a = o.tokenKey; a === Ko && (n = !(!e || !e.element.componentView)), e && 1 & o.flags && (n = !1, e = e.parent); for (var s = t; s;) {
                if (e)
                    switch (a) {
                        case Ho: return jo(sr(s, e, n));
                        case qo: return sr(s, e, n).renderer;
                        case zo: return new Qe(In(s, e.nodeIndex).renderElement);
                        case Uo: return In(s, e.nodeIndex).viewContainer;
                        case Wo:
                            if (e.element.template)
                                return In(s, e.nodeIndex).template;
                            break;
                        case Ko: return Ao(sr(s, e, n));
                        case $o:
                        case Go: return Fo(s, e);
                        default:
                            var l = (n ? e.element.allProviders : e.element.publicProviders)[a];
                            if (l) {
                                var u = Pn(s, l.nodeIndex);
                                return u || (u = { instance: or(s, l) }, s.nodes[l.nodeIndex] = u), u.instance;
                            }
                    }
                n = Yn(s), e = Zn(s), s = s.parent, 4 & o.flags && (s = null);
            } var c = i.root.injector.get(o.token, ir); return c !== ir || r === ir ? c : i.root.ngModule.injector.get(o.token, r); }
            function sr(t, e, n) { var o; if (n)
                o = In(t, e.nodeIndex).componentView;
            else
                for (o = t; o.parent && !Yn(o);)
                    o = o.parent; return o; }
            function lr(t, e, n, o, r, i) { if (32768 & n.flags) {
                var a = In(t, n.parent.nodeIndex).componentView;
                2 & a.def.flags && (a.state |= 8);
            } if (e.instance[n.bindings[o].name] = r, 524288 & n.flags) {
                i = i || {};
                var s = Re.unwrap(t.oldValues[n.bindingIndex + o]);
                i[n.bindings[o].nonMinifiedName] = new Le(s, r, 0 != (2 & t.state));
            } return t.oldValues[n.bindingIndex + o] = r, i; }
            function ur(t, e) { if (t.def.nodeFlags & e)
                for (var n = t.def.nodes, o = 0, r = 0; r < n.length; r++) {
                    var i = n[r], a = i.parent;
                    for (!a && i.flags & e && pr(t, r, i.flags & e, o++), 0 == (i.childFlags & e) && (r += i.childCount); a && 1 & a.flags && r === a.nodeIndex + a.childCount;)
                        a.directChildFlags & e && (o = cr(t, a, e, o)), a = a.parent;
                } }
            function cr(t, e, n, o) { for (var r = e.nodeIndex + 1; r <= e.nodeIndex + e.childCount; r++) {
                var i = t.def.nodes[r];
                i.flags & n && pr(t, r, i.flags & n, o++), r += i.childCount;
            } return o; }
            function pr(t, e, n, o) { var r = Pn(t, e); if (r) {
                var i = r.instance;
                i && (Rn.setCurrentNode(t, e), 1048576 & n && Dn(t, 512, o) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Dn(t, 768, o) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy());
            } }
            var dr = new kt("SCHEDULER_TOKEN", { providedIn: "root", factory: function () { return Bt; } }), hr = {}, fr = function (t) { return t[t.LocaleId = 0] = "LocaleId", t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat", t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", t[t.DaysFormat = 3] = "DaysFormat", t[t.DaysStandalone = 4] = "DaysStandalone", t[t.MonthsFormat = 5] = "MonthsFormat", t[t.MonthsStandalone = 6] = "MonthsStandalone", t[t.Eras = 7] = "Eras", t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek", t[t.WeekendRange = 9] = "WeekendRange", t[t.DateFormat = 10] = "DateFormat", t[t.TimeFormat = 11] = "TimeFormat", t[t.DateTimeFormat = 12] = "DateTimeFormat", t[t.NumberSymbols = 13] = "NumberSymbols", t[t.NumberFormats = 14] = "NumberFormats", t[t.CurrencySymbol = 15] = "CurrencySymbol", t[t.CurrencyName = 16] = "CurrencyName", t[t.Currencies = 17] = "Currencies", t[t.PluralCase = 18] = "PluralCase", t[t.ExtraData = 19] = "ExtraData", t; }({}), mr = void 0, gr = ["en", [["a", "p"], ["AM", "PM"], mr], [["AM", "PM"], mr, mr], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], mr, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], mr, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", mr, "{1} 'at' {0}", mr], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {}, function (t) { var e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length; return 1 === e && 0 === n ? 1 : 5; }];
            function yr(t) { var e = t.toLowerCase().replace(/_/g, "-"), n = hr[e]; if (n)
                return n; var o = e.split("-")[0]; if (n = hr[o])
                return n; if ("en" === o)
                return gr; throw new Error('Missing locale data for the locale "' + t + '".'); }
            var br = function (t) { function e(e) { void 0 === e && (e = !1); var n = t.call(this) || this; return n.__isAsync = e, n; } return Object(o.__extends)(e, t), e.prototype.emit = function (e) { t.prototype.next.call(this, e); }, e.prototype.subscribe = function (e, n, o) { var r, i = function (t) { return null; }, a = function () { return null; }; e && "object" == typeof e ? (r = this.__isAsync ? function (t) { setTimeout((function () { return e.next(t); })); } : function (t) { e.next(t); }, e.error && (i = this.__isAsync ? function (t) { setTimeout((function () { return e.error(t); })); } : function (t) { e.error(t); }), e.complete && (a = this.__isAsync ? function () { setTimeout((function () { return e.complete(); })); } : function () { e.complete(); })) : (r = this.__isAsync ? function (t) { setTimeout((function () { return e(t); })); } : function (t) { e(t); }, n && (i = this.__isAsync ? function (t) { setTimeout((function () { return n(t); })); } : function (t) { n(t); }), o && (a = this.__isAsync ? function () { setTimeout((function () { return o(); })); } : function () { o(); })); var s = t.prototype.subscribe.call(this, r, i, a); return e instanceof l && e.add(s), s; }, e; }(E);
            function vr() { return this._results[Pe()](); }
            var _r = function () { function t() { this.dirty = !0, this._results = [], this.changes = new br, this.length = 0; var e = Pe(), n = t.prototype; n[e] || (n[e] = vr); } return t.prototype.map = function (t) { return this._results.map(t); }, t.prototype.filter = function (t) { return this._results.filter(t); }, t.prototype.find = function (t) { return this._results.find(t); }, t.prototype.reduce = function (t, e) { return this._results.reduce(t, e); }, t.prototype.forEach = function (t) { this._results.forEach(t); }, t.prototype.some = function (t) { return this._results.some(t); }, t.prototype.toArray = function () { return this._results.slice(); }, t.prototype.toString = function () { return this._results.toString(); }, t.prototype.reset = function (t) { this._results = function t(e, n) { void 0 === n && (n = e); for (var o = 0; o < e.length; o++) {
                var r = e[o];
                Array.isArray(r) ? (n === e && (n = e.slice(0, o)), t(r, n)) : n !== e && n.push(r);
            } return n; }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]; }, t.prototype.notifyOnChanges = function () { this.changes.emit(this); }, t.prototype.setDirty = function () { this.dirty = !0; }, t.prototype.destroy = function () { this.changes.complete(), this.changes.unsubscribe(); }, t; }(), wr = new kt("Application Initializer"), kr = function () { function t(t) { var e = this; this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function (t, n) { e.resolve = t, e.reject = n; })); } return t.prototype.runInitializers = function () { var t = this; if (!this.initialized) {
                var e = [], n = function () { t.done = !0, t.resolve(); };
                if (this.appInits)
                    for (var o = 0; o < this.appInits.length; o++) {
                        var r = this.appInits[o]();
                        Be(r) && e.push(r);
                    }
                Promise.all(e).then((function () { n(); })).catch((function (e) { t.reject(e); })), 0 === e.length && n(), this.initialized = !0;
            } }, t; }(), Cr = new kt("AppId");
            function xr() { return "" + Er() + Er() + Er(); }
            function Er() { return String.fromCharCode(97 + Math.floor(25 * Math.random())); }
            var Sr = new kt("Platform Initializer"), Tr = new kt("Platform ID"), Or = new kt("appBootstrapListener"), Dr = function () { function t() { } return t.prototype.log = function (t) { console.log(t); }, t.prototype.warn = function (t) { console.warn(t); }, t; }(), Ar = new kt("LocaleId");
            function Ir() { throw new Error("Runtime compiler is not loaded"); }
            var Pr, Nr, Fr = Ir, Rr = Ir, Mr = Ir, jr = Ir, Br = function () { function t() { this.compileModuleSync = Fr, this.compileModuleAsync = Rr, this.compileModuleAndAllComponentsSync = Mr, this.compileModuleAndAllComponentsAsync = jr; } return t.prototype.clearCache = function () { }, t.prototype.clearCacheFor = function (t) { }, t.prototype.getModuleId = function (t) { }, t; }(), Vr = function () { return function () { }; }();
            function Lr() { var t = wt.wtf; return !(!t || !(Pr = t.trace) || (Nr = Pr.events, 0)); }
            var Hr = Lr();
            function qr(t, e) { return null; }
            var zr = Hr ? function (t, e) { return void 0 === e && (e = null), Nr.createScope(t, e); } : function (t, e) { return qr; }, Ur = Hr ? function (t, e) { return Pr.leaveScope(t, e), e; } : function (t, e) { return e; }, Wr = function () { return Promise.resolve(0); }();
            function Kr(t) { "undefined" == typeof Zone ? Wr.then((function () { t && t.apply(null, null); })) : Zone.current.scheduleMicroTask("scheduleMicrotask", t); }
            var $r = function () { function t(t) { var e, n = t.enableLongStackTrace, o = void 0 !== n && n; if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new br(!1), this.onMicrotaskEmpty = new br(!1), this.onStable = new br(!1), this.onError = new br(!1), "undefined" == typeof Zone)
                throw new Error("In this configuration Angular requires Zone.js"); Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), o && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function (t, n, o, r, i, a) { try {
                    return Yr(e), t.invokeTask(o, r, i, a);
                }
                finally {
                    Xr(e);
                } }, onInvoke: function (t, n, o, r, i, a, s) { try {
                    return Yr(e), t.invoke(o, r, i, a, s);
                }
                finally {
                    Xr(e);
                } }, onHasTask: function (t, n, o, r) { t.hasTask(o, r), n === o && ("microTask" == r.change ? (e.hasPendingMicrotasks = r.microTask, Qr(e)) : "macroTask" == r.change && (e.hasPendingMacrotasks = r.macroTask)); }, onHandleError: function (t, n, o, r) { return t.handleError(o, r), e.runOutsideAngular((function () { return e.onError.emit(r); })), !1; } }); } return t.isInAngularZone = function () { return !0 === Zone.current.get("isAngularZone"); }, t.assertInAngularZone = function () { if (!t.isInAngularZone())
                throw new Error("Expected to be in Angular Zone, but it is not!"); }, t.assertNotInAngularZone = function () { if (t.isInAngularZone())
                throw new Error("Expected to not be in Angular Zone, but it is!"); }, t.prototype.run = function (t, e, n) { return this._inner.run(t, e, n); }, t.prototype.runTask = function (t, e, n, o) { var r = this._inner, i = r.scheduleEventTask("NgZoneEvent: " + o, t, Zr, Gr, Gr); try {
                return r.runTask(i, e, n);
            }
            finally {
                r.cancelTask(i);
            } }, t.prototype.runGuarded = function (t, e, n) { return this._inner.runGuarded(t, e, n); }, t.prototype.runOutsideAngular = function (t) { return this._outer.run(t); }, t; }();
            function Gr() { }
            var Zr = {};
            function Qr(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
                try {
                    t._nesting++, t.onMicrotaskEmpty.emit(null);
                }
                finally {
                    if (t._nesting--, !t.hasPendingMicrotasks)
                        try {
                            t.runOutsideAngular((function () { return t.onStable.emit(null); }));
                        }
                        finally {
                            t.isStable = !0;
                        }
                } }
            function Yr(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)); }
            function Xr(t) { t._nesting--, Qr(t); }
            var Jr, ti = function () { function t() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new br, this.onMicrotaskEmpty = new br, this.onStable = new br, this.onError = new br; } return t.prototype.run = function (t) { return t(); }, t.prototype.runGuarded = function (t) { return t(); }, t.prototype.runOutsideAngular = function (t) { return t(); }, t.prototype.runTask = function (t) { return t(); }, t; }(), ei = function () { function t(t) { var e = this; this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function () { e.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone"); })); } return t.prototype._watchAngularEvents = function () { var t = this; this._ngZone.onUnstable.subscribe({ next: function () { t._didWork = !0, t._isZoneStable = !1; } }), this._ngZone.runOutsideAngular((function () { t._ngZone.onStable.subscribe({ next: function () { $r.assertNotInAngularZone(), Kr((function () { t._isZoneStable = !0, t._runCallbacksIfReady(); })); } }); })); }, t.prototype.increasePendingRequestCount = function () { return this._pendingCount += 1, this._didWork = !0, this._pendingCount; }, t.prototype.decreasePendingRequestCount = function () { if (this._pendingCount -= 1, this._pendingCount < 0)
                throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount; }, t.prototype.isStable = function () { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks; }, t.prototype._runCallbacksIfReady = function () { var t = this; if (this.isStable())
                Kr((function () { for (; 0 !== t._callbacks.length;) {
                    var e = t._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                } t._didWork = !1; }));
            else {
                var e = this.getPendingTasks();
                this._callbacks = this._callbacks.filter((function (t) { return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1); })), this._didWork = !0;
            } }, t.prototype.getPendingTasks = function () { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function (t) { return { source: t.source, creationLocation: t.creationLocation, data: t.data }; })) : []; }, t.prototype.addCallback = function (t, e, n) { var o = this, r = -1; e && e > 0 && (r = setTimeout((function () { o._callbacks = o._callbacks.filter((function (t) { return t.timeoutId !== r; })), t(o._didWork, o.getPendingTasks()); }), e)), this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n }); }, t.prototype.whenStable = function (t, e, n) { if (n && !this.taskTrackingZone)
                throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'); this.addCallback(t, e, n), this._runCallbacksIfReady(); }, t.prototype.getPendingRequestCount = function () { return this._pendingCount; }, t.prototype.findProviders = function (t, e, n) { return []; }, t; }(), ni = function () { function t() { this._applications = new Map, oi.addToWindow(this); } return t.prototype.registerApplication = function (t, e) { this._applications.set(t, e); }, t.prototype.unregisterApplication = function (t) { this._applications.delete(t); }, t.prototype.unregisterAllApplications = function () { this._applications.clear(); }, t.prototype.getTestability = function (t) { return this._applications.get(t) || null; }, t.prototype.getAllTestabilities = function () { return Array.from(this._applications.values()); }, t.prototype.getAllRootElements = function () { return Array.from(this._applications.keys()); }, t.prototype.findTestabilityInTree = function (t, e) { return void 0 === e && (e = !0), oi.findTestabilityInTree(this, t, e); }, Object(o.__decorate)([Object(o.__metadata)("design:paramtypes", [])], t); }(), oi = new (function () { function t() { } return t.prototype.addToWindow = function (t) { }, t.prototype.findTestabilityInTree = function (t, e, n) { return null; }, t; }()), ri = new kt("AllowMultipleToken"), ii = function () { return function (t, e) { this.name = t, this.token = e; }; }();
            function ai(t, e, n) { void 0 === n && (n = []); var o = "Platform: " + e, r = new kt(o); return function (e) { void 0 === e && (e = []); var i = si(); if (!i || i.injector.get(ri, !1))
                if (t)
                    t(n.concat(e).concat({ provide: r, useValue: !0 }));
                else {
                    var a = n.concat(e).concat({ provide: r, useValue: !0 });
                    !function (t) { if (Jr && !Jr.destroyed && !Jr.injector.get(ri, !1))
                        throw new Error("There can be only one platform. Destroy the previous one to create a new one."); Jr = t.get(li); var e = t.get(Sr, null); e && e.forEach((function (t) { return t(); })); }(Ce.create({ providers: a, name: o }));
                } return function (t) { var e = si(); if (!e)
                throw new Error("No platform exists!"); if (!e.injector.get(t, null))
                throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e; }(r); }; }
            function si() { return Jr && !Jr.destroyed ? Jr : null; }
            var li = function () { function t(t) { this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1; } return t.prototype.bootstrapModuleFactory = function (t, e) { var n, o = this, r = "noop" === (n = e ? e.ngZone : void 0) ? new ti : ("zone.js" === n ? void 0 : n) || new $r({ enableLongStackTrace: Wt() }), i = [{ provide: $r, useValue: r }]; return r.run((function () { var e = Ce.create({ providers: i, parent: o.injector, name: t.moduleType.name }), n = t.create(e), a = n.injector.get(qt, null); if (!a)
                throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return n.onDestroy((function () { return pi(o._modules, n); })), r.runOutsideAngular((function () { return r.onError.subscribe({ next: function (t) { a.handleError(t); } }); })), function (t, e, r) { try {
                var i = ((a = n.injector.get(kr)).runInitializers(), a.donePromise.then((function () { return o._moduleDoBootstrap(n), n; })));
                return Be(i) ? i.catch((function (n) { throw e.runOutsideAngular((function () { return t.handleError(n); })), n; })) : i;
            }
            catch (s) {
                throw e.runOutsideAngular((function () { return t.handleError(s); })), s;
            } var a; }(a, r); })); }, t.prototype.bootstrapModule = function (t, e) { var n = this; void 0 === e && (e = []); var o = ui({}, e); return function (t, e, n) { return t.get(Vr).createCompiler([e]).compileModuleAsync(n); }(this.injector, o, t).then((function (t) { return n.bootstrapModuleFactory(t, o); })); }, t.prototype._moduleDoBootstrap = function (t) { var e = t.injector.get(ci); if (t._bootstrapComponents.length > 0)
                t._bootstrapComponents.forEach((function (t) { return e.bootstrap(t); }));
            else {
                if (!t.instance.ngDoBootstrap)
                    throw new Error("The module " + ht(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                t.instance.ngDoBootstrap(e);
            } this._modules.push(t); }, t.prototype.onDestroy = function (t) { this._destroyListeners.push(t); }, Object.defineProperty(t.prototype, "injector", { get: function () { return this._injector; }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function () { if (this._destroyed)
                throw new Error("The platform has already been destroyed!"); this._modules.slice().forEach((function (t) { return t.destroy(); })), this._destroyListeners.forEach((function (t) { return t(); })), this._destroyed = !0; }, Object.defineProperty(t.prototype, "destroyed", { get: function () { return this._destroyed; }, enumerable: !0, configurable: !0 }), t; }();
            function ui(t, e) { return Array.isArray(e) ? e.reduce(ui, t) : Object(o.__assign)({}, t, e); }
            var ci = function () { function t(t, e, n, o, r, i) { var a = this; this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = o, this._componentFactoryResolver = r, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Wt(), this._zone.onMicrotaskEmpty.subscribe({ next: function () { a._zone.run((function () { a.tick(); })); } }); var s = new _((function (t) { a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular((function () { t.next(a._stable), t.complete(); })); })), l = new _((function (t) { var e; a._zone.runOutsideAngular((function () { e = a._zone.onStable.subscribe((function () { $r.assertNotInAngularZone(), Kr((function () { a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0)); })); })); })); var n = a._zone.onUnstable.subscribe((function () { $r.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular((function () { t.next(!1); }))); })); return function () { e.unsubscribe(), n.unsubscribe(); }; })); this.isStable = $(s, l.pipe(et())); } var e; return e = t, t.prototype.bootstrap = function (t, e) { var n, o = this; if (!this._initStatus.done)
                throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."); n = t instanceof qe ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType); var r = n instanceof Ge ? null : this._injector.get(Nt), i = n.create(Ce.NULL, [], e || n.selector, r); i.onDestroy((function () { o._unloadComponent(i); })); var a = i.injector.get(ei, null); return a && i.injector.get(ni).registerApplication(i.location.nativeElement, a), this._loadComponent(i), Wt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i; }, t.prototype.tick = function () { var t, n, r, i, a = this; if (this._runningTick)
                throw new Error("ApplicationRef.tick is called recursively"); var s = e._tickScope(); try {
                this._runningTick = !0;
                try {
                    for (var l = Object(o.__values)(this._views), u = l.next(); !u.done; u = l.next())
                        u.value.detectChanges();
                }
                catch (d) {
                    t = { error: d };
                }
                finally {
                    try {
                        u && !u.done && (n = l.return) && n.call(l);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                if (this._enforceNoNewChanges)
                    try {
                        for (var c = Object(o.__values)(this._views), p = c.next(); !p.done; p = c.next())
                            p.value.checkNoChanges();
                    }
                    catch (h) {
                        r = { error: h };
                    }
                    finally {
                        try {
                            p && !p.done && (i = c.return) && i.call(c);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
            }
            catch (f) {
                this._zone.runOutsideAngular((function () { return a._exceptionHandler.handleError(f); }));
            }
            finally {
                this._runningTick = !1, Ur(s);
            } }, t.prototype.attachView = function (t) { var e = t; this._views.push(e), e.attachToAppRef(this); }, t.prototype.detachView = function (t) { var e = t; pi(this._views, e), e.detachFromAppRef(); }, t.prototype._loadComponent = function (t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Or, []).concat(this._bootstrapListeners).forEach((function (e) { return e(t); })); }, t.prototype._unloadComponent = function (t) { this.detachView(t.hostView), pi(this.components, t); }, t.prototype.ngOnDestroy = function () { this._views.slice().forEach((function (t) { return t.destroy(); })); }, Object.defineProperty(t.prototype, "viewCount", { get: function () { return this._views.length; }, enumerable: !0, configurable: !0 }), t._tickScope = zr("ApplicationRef#tick()"), t; }();
            function pi(t, e) { var n = t.indexOf(e); n > -1 && t.splice(n, 1); }
            var di = function () { return function (t, e) { this.name = t, this.callback = e; }; }(), hi = function () { function t(t, e, n) { this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = t, e && e instanceof fi && e.addChild(this); } return Object.defineProperty(t.prototype, "injector", { get: function () { return this._debugContext.injector; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentInstance", { get: function () { return this._debugContext.component; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this._debugContext.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function () { return this._debugContext.references; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function () { return this._debugContext.providerTokens; }, enumerable: !0, configurable: !0 }), t; }(), fi = function (t) { function e(e, n, o) { var r = t.call(this, e, n, o) || this; return r.properties = {}, r.attributes = {}, r.classes = {}, r.styles = {}, r.childNodes = [], r.nativeElement = e, r; } return Object(o.__extends)(e, t), e.prototype.addChild = function (t) { t && (this.childNodes.push(t), t.parent = this); }, e.prototype.removeChild = function (t) { var e = this.childNodes.indexOf(t); -1 !== e && (t.parent = null, this.childNodes.splice(e, 1)); }, e.prototype.insertChildrenAfter = function (t, e) { var n, r = this, i = this.childNodes.indexOf(t); -1 !== i && ((n = this.childNodes).splice.apply(n, Object(o.__spread)([i + 1, 0], e)), e.forEach((function (e) { e.parent && e.parent.removeChild(e), t.parent = r; }))); }, e.prototype.insertBefore = function (t, e) { var n = this.childNodes.indexOf(t); -1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e)); }, e.prototype.query = function (t) { return this.queryAll(t)[0] || null; }, e.prototype.queryAll = function (t) { var e = []; return function t(e, n, o) { e.childNodes.forEach((function (e) { e instanceof fi && (n(e) && o.push(e), t(e, n, o)); })); }(this, t, e), e; }, e.prototype.queryAllNodes = function (t) { var e = []; return function t(e, n, o) { e instanceof fi && e.childNodes.forEach((function (e) { n(e) && o.push(e), e instanceof fi && t(e, n, o); })); }(this, t, e), e; }, Object.defineProperty(e.prototype, "children", { get: function () { return this.childNodes.filter((function (t) { return t instanceof e; })); }, enumerable: !0, configurable: !0 }), e.prototype.triggerEventHandler = function (t, e) { this.listeners.forEach((function (n) { n.name == t && n.callback(e); })); }, e; }(hi), mi = new Map, gi = function (t) { return mi.get(t) || null; };
            function yi(t) { mi.set(t.nativeNode, t); }
            var bi = ai(null, "core", [{ provide: Tr, useValue: "unknown" }, { provide: li, deps: [Ce] }, { provide: ni, deps: [] }, { provide: Dr, deps: [] }]);
            function vi() { return vn; }
            function _i() { return _n; }
            function wi(t) { return t || "en-US"; }
            function ki(t) { var e = []; return t.onStable.subscribe((function () { for (; e.length;)
                e.pop()(); })), function (t) { e.push(t); }; }
            var Ci = function () { return function (t) { }; }();
            function xi(t, e, n, o, r, i) { t |= 1; var a = to(e); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, checkIndex: -1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: a.matchedQueries, matchedQueryIds: a.matchedQueryIds, references: a.references, ngContentIndex: n, childCount: o, bindings: [], bindingFlags: 0, outputs: [], element: { ns: null, name: null, attrs: null, template: i ? ro(i) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: r || Mn }, provider: null, text: null, query: null, ngContent: null }; }
            function Ei(t, e, n, r, i, a, s, l, u, c, p, d) { var h; void 0 === s && (s = []), c || (c = Mn); var f = to(n), m = f.matchedQueries, g = f.references, y = f.matchedQueryIds, b = null, v = null; a && (b = (h = Object(o.__read)(po(a), 2))[0], v = h[1]), l = l || []; for (var _ = new Array(l.length), w = 0; w < l.length; w++) {
                var k = Object(o.__read)(l[w], 3), C = k[0], x = k[1], E = k[2], S = Object(o.__read)(po(x), 2), T = S[0], O = S[1], D = void 0, A = void 0;
                switch (15 & C) {
                    case 4:
                        A = E;
                        break;
                    case 1:
                    case 8: D = E;
                }
                _[w] = { flags: C, ns: T, name: O, nonMinifiedName: O, securityContext: D, suffix: A };
            } u = u || []; var I = new Array(u.length); for (w = 0; w < u.length; w++) {
                var P = Object(o.__read)(u[w], 2);
                I[w] = { type: 0, target: P[0], eventName: P[1], propName: null };
            } var N = (s = s || []).map((function (t) { var e = Object(o.__read)(t, 2), n = e[0], r = e[1], i = Object(o.__read)(po(n), 2); return [i[0], i[1], r]; })); return d = function (t) { if (t && "$$undefined" === t.id) {
                var e = null != t.encapsulation && t.encapsulation !== jt.None || t.styles.length || Object.keys(t.data).length;
                t.id = e ? "c" + Hn++ : "$$empty";
            } return t && "$$empty" === t.id && (t = null), t || null; }(d), p && (e |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: m, matchedQueryIds: y, references: g, ngContentIndex: r, childCount: i, bindings: _, bindingFlags: ho(_), outputs: I, element: { ns: b, name: v, attrs: N, template: null, componentProvider: null, componentView: p || null, componentRendererType: d, publicProviders: null, allProviders: null, handleEvent: c || Mn }, provider: null, text: null, query: null, ngContent: null }; }
            function Si(t, e, n) { var r, i = n.element, a = t.root.selectorOrNode, s = t.renderer; if (t.parent || !a) {
                r = i.name ? s.createElement(i.name, i.ns) : s.createComment("");
                var l = no(t, e, n);
                l && s.appendChild(l, r);
            }
            else
                r = s.selectRootElement(a, !!i.componentRendererType && i.componentRendererType.encapsulation === jt.ShadowDom); if (i.attrs)
                for (var u = 0; u < i.attrs.length; u++) {
                    var c = Object(o.__read)(i.attrs[u], 3);
                    s.setAttribute(r, c[1], c[2], c[0]);
                } return r; }
            function Ti(t, e, n, o) { for (var r = 0; r < n.outputs.length; r++) {
                var i = n.outputs[r], a = Oi(t, n.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)), s = i.target, l = t;
                "component" === i.target && (s = null, l = e);
                var u = l.renderer.listen(s || o, i.eventName, a);
                t.disposables[n.outputIndex + r] = u;
            } var c, p; }
            function Oi(t, e, n) { return function (o) { return $n(t, e, n, o); }; }
            function Di(t, e, n, o) { if (!zn(t, e, n, o))
                return !1; var r = e.bindings[n], i = In(t, e.nodeIndex), a = i.renderElement, s = r.name; switch (15 & r.flags) {
                case 1:
                    !function (t, e, n, o, r, i) { var a = e.securityContext, s = a ? t.root.sanitizer.sanitize(a, i) : i; s = null != s ? s.toString() : null; var l = t.renderer; null != i ? l.setAttribute(n, r, s, o) : l.removeAttribute(n, r, o); }(t, r, a, r.ns, s, o);
                    break;
                case 2:
                    !function (t, e, n, o) { var r = t.renderer; o ? r.addClass(e, n) : r.removeClass(e, n); }(t, a, s, o);
                    break;
                case 4:
                    !function (t, e, n, o, r) { var i = t.root.sanitizer.sanitize(he.STYLE, r); if (null != i) {
                        i = i.toString();
                        var a = e.suffix;
                        null != a && (i += a);
                    }
                    else
                        i = null; var s = t.renderer; null != i ? s.setStyle(n, o, i) : s.removeStyle(n, o); }(t, r, a, s, o);
                    break;
                case 8: !function (t, e, n, o, r) { var i = e.securityContext, a = i ? t.root.sanitizer.sanitize(i, r) : r; t.renderer.setProperty(n, o, a); }(33554432 & e.flags && 32 & r.flags ? i.componentView : t, r, a, s, o);
            } return !0; }
            function Ai(t, e, n) { var o = []; for (var r in n)
                o.push({ propName: r, bindingType: n[r] }); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, ngContentIndex: -1, matchedQueries: {}, matchedQueryIds: 0, references: {}, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: { id: e, filterId: Jn(e), bindings: o }, ngContent: null }; }
            function Ii(t) { for (var e = t.def.nodeMatchedQueries; t.parent && Xn(t);) {
                var n = t.parentNodeDef;
                t = t.parent;
                for (var o = n.nodeIndex + n.childCount, r = 0; r <= o; r++)
                    67108864 & (i = t.def.nodes[r]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && Fn(t, r).setDirty(), !(1 & i.flags && r + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (r += i.childCount);
            } if (134217728 & t.def.nodeFlags)
                for (r = 0; r < t.def.nodes.length; r++) {
                    var i;
                    134217728 & (i = t.def.nodes[r]).flags && 536870912 & i.flags && Fn(t, r).setDirty(), r += i.childCount;
                } }
            function Pi(t, e) { var n = Fn(t, e.nodeIndex); if (n.dirty) {
                var o, r = void 0;
                if (67108864 & e.flags) {
                    var i = e.parent.parent;
                    r = Ni(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), o = Pn(t, e.parent.nodeIndex).instance;
                }
                else
                    134217728 & e.flags && (r = Ni(t, 0, t.def.nodes.length - 1, e.query, []), o = t.component);
                n.reset(r);
                for (var a = e.query.bindings, s = !1, l = 0; l < a.length; l++) {
                    var u = a[l], c = void 0;
                    switch (u.bindingType) {
                        case 0:
                            c = n.first;
                            break;
                        case 1: c = n, s = !0;
                    }
                    o[u.propName] = c;
                }
                s && n.notifyOnChanges();
            } }
            function Ni(t, e, n, o, r) { for (var i = e; i <= n; i++) {
                var a = t.def.nodes[i], s = a.matchedQueries[o.id];
                if (null != s && r.push(Fi(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & o.filterId) === o.filterId) {
                    var l = In(t, i);
                    if ((a.childMatchedQueries & o.filterId) === o.filterId && (Ni(t, i + 1, i + a.childCount, o, r), i += a.childCount), 16777216 & a.flags)
                        for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                            var p = u[c], d = Gn(p);
                            d && d === l && Ni(p, 0, p.def.nodes.length - 1, o, r);
                        }
                    var h = l.template._projectedViews;
                    if (h)
                        for (c = 0; c < h.length; c++) {
                            var f = h[c];
                            Ni(f, 0, f.def.nodes.length - 1, o, r);
                        }
                }
                (a.childMatchedQueries & o.filterId) !== o.filterId && (i += a.childCount);
            } return r; }
            function Fi(t, e, n) { if (null != n)
                switch (n) {
                    case 1: return In(t, e.nodeIndex).renderElement;
                    case 0: return new Qe(In(t, e.nodeIndex).renderElement);
                    case 2: return In(t, e.nodeIndex).template;
                    case 3: return In(t, e.nodeIndex).viewContainer;
                    case 4: return Pn(t, e.nodeIndex).instance;
                } }
            function Ri(t, e) { return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: -1, flags: 8, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: t, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: null, ngContent: { index: e } }; }
            function Mi(t, e, n) { var o = no(t, e, n); o && so(t, n.ngContent.index, 1, o, null, void 0); }
            function ji(t, e) { for (var n = Object.keys(e), o = n.length, r = new Array(o), i = 0; i < o; i++) {
                var a = n[i];
                r[e[a]] = a;
            } return Bi(64, t, r); }
            function Bi(t, e, n) { for (var o = new Array(n.length), r = 0; r < n.length; r++) {
                var i = n[r];
                o[r] = { flags: 8, name: i, ns: null, nonMinifiedName: i, securityContext: null, suffix: null };
            } return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: o, bindingFlags: ho(o), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null }; }
            function Vi(t, e, n) { for (var o = new Array(n.length - 1), r = 1; r < n.length; r++)
                o[r - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[r] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: e, childCount: 0, bindings: o, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: n[0] }, query: null, ngContent: null }; }
            function Li(t, e, n) { var o, r = t.renderer; o = r.createText(n.text.prefix); var i = no(t, e, n); return i && r.appendChild(i, o), { renderText: o }; }
            function Hi(t, e) { return (null != t ? t.toString() : "") + e.suffix; }
            function qi(t, e, n, o) { for (var r = 0, i = 0, a = 0, s = 0, l = 0, u = null, c = null, p = !1, d = !1, h = null, f = 0; f < e.length; f++) {
                var m = e[f];
                if (m.nodeIndex = f, m.parent = u, m.bindingIndex = r, m.outputIndex = i, m.renderParent = c, a |= m.flags, l |= m.matchedQueryIds, m.element) {
                    var g = m.element;
                    g.publicProviders = u ? u.element.publicProviders : Object.create(null), g.allProviders = g.publicProviders, p = !1, d = !1, m.element.template && (l |= m.element.template.nodeMatchedQueries);
                }
                if (Ui(u, m, e.length), r += m.bindings.length, i += m.outputs.length, !c && 3 & m.flags && (h = m), 20224 & m.flags) {
                    p || (p = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                    var y = 0 != (32768 & m.flags);
                    0 == (8192 & m.flags) || y ? u.element.publicProviders[Bn(m.provider.token)] = m : (d || (d = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Bn(m.provider.token)] = m), y && (u.element.componentProvider = m);
                }
                if (u ? (u.childFlags |= m.flags, u.directChildFlags |= m.flags, u.childMatchedQueries |= m.matchedQueryIds, m.element && m.element.template && (u.childMatchedQueries |= m.element.template.nodeMatchedQueries)) : s |= m.flags, m.childCount > 0)
                    u = m, zi(m) || (c = m);
                else
                    for (; u && f === u.nodeIndex + u.childCount;) {
                        var b = u.parent;
                        b && (b.childFlags |= u.childFlags, b.childMatchedQueries |= u.childMatchedQueries), c = (u = b) && zi(u) ? u.renderParent : u;
                    }
            } return { factory: null, nodeFlags: a, rootNodeFlags: s, nodeMatchedQueries: l, flags: t, nodes: e, updateDirectives: n || Mn, updateRenderer: o || Mn, handleEvent: function (t, n, o, r) { return e[n].element.handleEvent(t, o, r); }, bindingCount: r, outputCount: i, lastRenderRootNode: h }; }
            function zi(t) { return 0 != (1 & t.flags) && null === t.element.name; }
            function Ui(t, e, n) { var o = e.element && e.element.template; if (o) {
                if (!o.lastRenderRootNode)
                    throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                if (o.lastRenderRootNode && 16777216 & o.lastRenderRootNode.flags)
                    throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!");
            } if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0)))
                throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!"); if (e.query) {
                if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
                    throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                if (134217728 & e.flags && t)
                    throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!");
            } if (e.childCount) {
                var r = t ? t.nodeIndex + t.childCount : n - 1;
                if (e.nodeIndex <= r && e.nodeIndex + e.childCount > r)
                    throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!");
            } }
            function Wi(t, e, n, o) { var r = Gi(t.root, t.renderer, t, e, n); return Zi(r, t.component, o), Qi(r), r; }
            function Ki(t, e, n) { var o = Gi(t, t.renderer, null, null, e); return Zi(o, n, n), Qi(o), o; }
            function $i(t, e, n, o) { var r, i = e.element.componentRendererType; return r = i ? t.root.rendererFactory.createRenderer(o, i) : t.root.renderer, Gi(t.root, r, t, e.element.componentProvider, n); }
            function Gi(t, e, n, o, r) { var i = new Array(r.nodes.length), a = r.outputCount ? new Array(r.outputCount) : null; return { def: r, parent: n, viewContainerParent: null, parentNodeDef: o, context: null, component: null, nodes: i, state: 13, root: t, renderer: e, oldValues: new Array(r.bindingCount), disposables: a, initIndex: -1 }; }
            function Zi(t, e, n) { t.component = e, t.context = n; }
            function Qi(t) { var e; Yn(t) && (e = In(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement); for (var n = t.def, o = t.nodes, r = 0; r < n.nodes.length; r++) {
                var i = n.nodes[r];
                Rn.setCurrentNode(t, r);
                var a = void 0;
                switch (201347067 & i.flags) {
                    case 1:
                        var s = Si(t, e, i), l = void 0;
                        if (33554432 & i.flags) {
                            var u = ro(i.element.componentView);
                            l = Rn.createComponentView(t, i, u, s);
                        }
                        Ti(t, l, i, s), a = { renderElement: s, componentView: l, viewContainer: null, template: i.element.template ? Po(t, i) : void 0 }, 16777216 & i.flags && (a.viewContainer = Oo(t, i, a));
                        break;
                    case 2:
                        a = Li(t, e, i);
                        break;
                    case 512:
                    case 1024:
                    case 2048:
                    case 256:
                        (a = o[r]) || 4096 & i.flags || (a = { instance: Jo(t, i) });
                        break;
                    case 16:
                        a = { instance: tr(t, i) };
                        break;
                    case 16384:
                        (a = o[r]) || (a = { instance: er(t, i) }), 32768 & i.flags && Zi(In(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
                        break;
                    case 32:
                    case 64:
                    case 128:
                        a = { value: void 0 };
                        break;
                    case 67108864:
                    case 134217728:
                        a = new _r;
                        break;
                    case 8: Mi(t, e, i), a = void 0;
                }
                o[r] = a;
            } ia(t, ra.CreateViewNodes), ua(t, 201326592, 268435456, 0); }
            function Yi(t) { ta(t), Rn.updateDirectives(t, 1), aa(t, ra.CheckNoChanges), Rn.updateRenderer(t, 1), ia(t, ra.CheckNoChanges), t.state &= -97; }
            function Xi(t) { 1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, On(t, 0, 256), ta(t), Rn.updateDirectives(t, 0), aa(t, ra.CheckAndUpdate), ua(t, 67108864, 536870912, 0); var e = On(t, 256, 512); ur(t, 2097152 | (e ? 1048576 : 0)), Rn.updateRenderer(t, 0), ia(t, ra.CheckAndUpdate), ua(t, 134217728, 536870912, 0), ur(t, 8388608 | ((e = On(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, On(t, 768, 1024); }
            function Ji(t, e, n, r, i, a, s, l, u, c, p, d, h) { return 0 === n ? function (t, e, n, o, r, i, a, s, l, u, c, p) { switch (201347067 & e.flags) {
                case 1: return function (t, e, n, o, r, i, a, s, l, u, c, p) { var d = e.bindings.length, h = !1; return d > 0 && Di(t, e, 0, n) && (h = !0), d > 1 && Di(t, e, 1, o) && (h = !0), d > 2 && Di(t, e, 2, r) && (h = !0), d > 3 && Di(t, e, 3, i) && (h = !0), d > 4 && Di(t, e, 4, a) && (h = !0), d > 5 && Di(t, e, 5, s) && (h = !0), d > 6 && Di(t, e, 6, l) && (h = !0), d > 7 && Di(t, e, 7, u) && (h = !0), d > 8 && Di(t, e, 8, c) && (h = !0), d > 9 && Di(t, e, 9, p) && (h = !0), h; }(t, e, n, o, r, i, a, s, l, u, c, p);
                case 2: return function (t, e, n, o, r, i, a, s, l, u, c, p) { var d = !1, h = e.bindings, f = h.length; if (f > 0 && zn(t, e, 0, n) && (d = !0), f > 1 && zn(t, e, 1, o) && (d = !0), f > 2 && zn(t, e, 2, r) && (d = !0), f > 3 && zn(t, e, 3, i) && (d = !0), f > 4 && zn(t, e, 4, a) && (d = !0), f > 5 && zn(t, e, 5, s) && (d = !0), f > 6 && zn(t, e, 6, l) && (d = !0), f > 7 && zn(t, e, 7, u) && (d = !0), f > 8 && zn(t, e, 8, c) && (d = !0), f > 9 && zn(t, e, 9, p) && (d = !0), d) {
                    var m = e.text.prefix;
                    f > 0 && (m += Hi(n, h[0])), f > 1 && (m += Hi(o, h[1])), f > 2 && (m += Hi(r, h[2])), f > 3 && (m += Hi(i, h[3])), f > 4 && (m += Hi(a, h[4])), f > 5 && (m += Hi(s, h[5])), f > 6 && (m += Hi(l, h[6])), f > 7 && (m += Hi(u, h[7])), f > 8 && (m += Hi(c, h[8])), f > 9 && (m += Hi(p, h[9]));
                    var g = An(t, e.nodeIndex).renderText;
                    t.renderer.setValue(g, m);
                } return d; }(t, e, n, o, r, i, a, s, l, u, c, p);
                case 16384: return function (t, e, n, o, r, i, a, s, l, u, c, p) { var d = Pn(t, e.nodeIndex), h = d.instance, f = !1, m = void 0, g = e.bindings.length; return g > 0 && qn(t, e, 0, n) && (f = !0, m = lr(t, d, e, 0, n, m)), g > 1 && qn(t, e, 1, o) && (f = !0, m = lr(t, d, e, 1, o, m)), g > 2 && qn(t, e, 2, r) && (f = !0, m = lr(t, d, e, 2, r, m)), g > 3 && qn(t, e, 3, i) && (f = !0, m = lr(t, d, e, 3, i, m)), g > 4 && qn(t, e, 4, a) && (f = !0, m = lr(t, d, e, 4, a, m)), g > 5 && qn(t, e, 5, s) && (f = !0, m = lr(t, d, e, 5, s, m)), g > 6 && qn(t, e, 6, l) && (f = !0, m = lr(t, d, e, 6, l, m)), g > 7 && qn(t, e, 7, u) && (f = !0, m = lr(t, d, e, 7, u, m)), g > 8 && qn(t, e, 8, c) && (f = !0, m = lr(t, d, e, 8, c, m)), g > 9 && qn(t, e, 9, p) && (f = !0, m = lr(t, d, e, 9, p, m)), m && h.ngOnChanges(m), 65536 & e.flags && Dn(t, 256, e.nodeIndex) && h.ngOnInit(), 262144 & e.flags && h.ngDoCheck(), f; }(t, e, n, o, r, i, a, s, l, u, c, p);
                case 32:
                case 64:
                case 128: return function (t, e, n, o, r, i, a, s, l, u, c, p) { var d = e.bindings, h = !1, f = d.length; if (f > 0 && zn(t, e, 0, n) && (h = !0), f > 1 && zn(t, e, 1, o) && (h = !0), f > 2 && zn(t, e, 2, r) && (h = !0), f > 3 && zn(t, e, 3, i) && (h = !0), f > 4 && zn(t, e, 4, a) && (h = !0), f > 5 && zn(t, e, 5, s) && (h = !0), f > 6 && zn(t, e, 6, l) && (h = !0), f > 7 && zn(t, e, 7, u) && (h = !0), f > 8 && zn(t, e, 8, c) && (h = !0), f > 9 && zn(t, e, 9, p) && (h = !0), h) {
                    var m = Nn(t, e.nodeIndex), g = void 0;
                    switch (201347067 & e.flags) {
                        case 32:
                            g = new Array(d.length), f > 0 && (g[0] = n), f > 1 && (g[1] = o), f > 2 && (g[2] = r), f > 3 && (g[3] = i), f > 4 && (g[4] = a), f > 5 && (g[5] = s), f > 6 && (g[6] = l), f > 7 && (g[7] = u), f > 8 && (g[8] = c), f > 9 && (g[9] = p);
                            break;
                        case 64:
                            g = {}, f > 0 && (g[d[0].name] = n), f > 1 && (g[d[1].name] = o), f > 2 && (g[d[2].name] = r), f > 3 && (g[d[3].name] = i), f > 4 && (g[d[4].name] = a), f > 5 && (g[d[5].name] = s), f > 6 && (g[d[6].name] = l), f > 7 && (g[d[7].name] = u), f > 8 && (g[d[8].name] = c), f > 9 && (g[d[9].name] = p);
                            break;
                        case 128:
                            var y = n;
                            switch (f) {
                                case 1:
                                    g = y.transform(n);
                                    break;
                                case 2:
                                    g = y.transform(o);
                                    break;
                                case 3:
                                    g = y.transform(o, r);
                                    break;
                                case 4:
                                    g = y.transform(o, r, i);
                                    break;
                                case 5:
                                    g = y.transform(o, r, i, a);
                                    break;
                                case 6:
                                    g = y.transform(o, r, i, a, s);
                                    break;
                                case 7:
                                    g = y.transform(o, r, i, a, s, l);
                                    break;
                                case 8:
                                    g = y.transform(o, r, i, a, s, l, u);
                                    break;
                                case 9:
                                    g = y.transform(o, r, i, a, s, l, u, c);
                                    break;
                                case 10: g = y.transform(o, r, i, a, s, l, u, c, p);
                            }
                    }
                    m.value = g;
                } return h; }(t, e, n, o, r, i, a, s, l, u, c, p);
                default: throw "unreachable";
            } }(t, e, r, i, a, s, l, u, c, p, d, h) : function (t, e, n) { switch (201347067 & e.flags) {
                case 1: return function (t, e, n) { for (var o = !1, r = 0; r < n.length; r++)
                    Di(t, e, r, n[r]) && (o = !0); return o; }(t, e, n);
                case 2: return function (t, e, n) { for (var o = e.bindings, r = !1, i = 0; i < n.length; i++)
                    zn(t, e, i, n[i]) && (r = !0); if (r) {
                    var a = "";
                    for (i = 0; i < n.length; i++)
                        a += Hi(n[i], o[i]);
                    a = e.text.prefix + a;
                    var s = An(t, e.nodeIndex).renderText;
                    t.renderer.setValue(s, a);
                } return r; }(t, e, n);
                case 16384: return function (t, e, n) { for (var o = Pn(t, e.nodeIndex), r = o.instance, i = !1, a = void 0, s = 0; s < n.length; s++)
                    qn(t, e, s, n[s]) && (i = !0, a = lr(t, o, e, s, n[s], a)); return a && r.ngOnChanges(a), 65536 & e.flags && Dn(t, 256, e.nodeIndex) && r.ngOnInit(), 262144 & e.flags && r.ngDoCheck(), i; }(t, e, n);
                case 32:
                case 64:
                case 128: return function (t, e, n) { for (var r = e.bindings, i = !1, a = 0; a < n.length; a++)
                    zn(t, e, a, n[a]) && (i = !0); if (i) {
                    var s = Nn(t, e.nodeIndex), l = void 0;
                    switch (201347067 & e.flags) {
                        case 32:
                            l = n;
                            break;
                        case 64:
                            for (l = {}, a = 0; a < n.length; a++)
                                l[r[a].name] = n[a];
                            break;
                        case 128:
                            var u = n[0], c = n.slice(1);
                            l = u.transform.apply(u, Object(o.__spread)(c));
                    }
                    s.value = l;
                } return i; }(t, e, n);
                default: throw "unreachable";
            } }(t, e, r); }
            function ta(t) { var e = t.def; if (4 & e.nodeFlags)
                for (var n = 0; n < e.nodes.length; n++) {
                    var o = e.nodes[n];
                    if (4 & o.flags) {
                        var r = In(t, n).template._projectedViews;
                        if (r)
                            for (var i = 0; i < r.length; i++) {
                                var a = r[i];
                                a.state |= 32, Kn(a, t);
                            }
                    }
                    else
                        0 == (4 & o.childFlags) && (n += o.childCount);
                } }
            function ea(t, e, n, o, r, i, a, s, l, u, c, p, d) { return 0 === n ? function (t, e, n, o, r, i, a, s, l, u, c, p) { var d = e.bindings.length; d > 0 && Un(t, e, 0, n), d > 1 && Un(t, e, 1, o), d > 2 && Un(t, e, 2, r), d > 3 && Un(t, e, 3, i), d > 4 && Un(t, e, 4, a), d > 5 && Un(t, e, 5, s), d > 6 && Un(t, e, 6, l), d > 7 && Un(t, e, 7, u), d > 8 && Un(t, e, 8, c), d > 9 && Un(t, e, 9, p); }(t, e, o, r, i, a, s, l, u, c, p, d) : function (t, e, n) { for (var o = 0; o < n.length; o++)
                Un(t, e, o, n[o]); }(t, e, o), !1; }
            function na(t, e) { if (Fn(t, e.nodeIndex).dirty)
                throw En(Rn.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state)); }
            function oa(t) { if (!(128 & t.state)) {
                if (aa(t, ra.Destroy), ia(t, ra.Destroy), ur(t, 131072), t.disposables)
                    for (var e = 0; e < t.disposables.length; e++)
                        t.disposables[e]();
                !function (t) { if (16 & t.state) {
                    var e = Gn(t);
                    if (e) {
                        var n = e.template._projectedViews;
                        n && (Mt(n, n.indexOf(t)), Rn.dirtyParentQueries(t));
                    }
                } }(t), t.renderer.destroyNode && function (t) { for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                    var o = t.def.nodes[n];
                    1 & o.flags ? t.renderer.destroyNode(In(t, n).renderElement) : 2 & o.flags ? t.renderer.destroyNode(An(t, n).renderText) : (67108864 & o.flags || 134217728 & o.flags) && Fn(t, n).destroy();
                } }(t), Yn(t) && t.renderer.destroy(), t.state |= 128;
            } }
            var ra = function (t) { return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t; }({});
            function ia(t, e) { var n = t.def; if (33554432 & n.nodeFlags)
                for (var o = 0; o < n.nodes.length; o++) {
                    var r = n.nodes[o];
                    33554432 & r.flags ? sa(In(t, o).componentView, e) : 0 == (33554432 & r.childFlags) && (o += r.childCount);
                } }
            function aa(t, e) { var n = t.def; if (16777216 & n.nodeFlags)
                for (var o = 0; o < n.nodes.length; o++) {
                    var r = n.nodes[o];
                    if (16777216 & r.flags)
                        for (var i = In(t, o).viewContainer._embeddedViews, a = 0; a < i.length; a++)
                            sa(i[a], e);
                    else
                        0 == (16777216 & r.childFlags) && (o += r.childCount);
                } }
            function sa(t, e) { var n = t.state; switch (e) {
                case ra.CheckNoChanges:
                    0 == (128 & n) && (12 == (12 & n) ? Yi(t) : 64 & n && la(t, ra.CheckNoChangesProjectedViews));
                    break;
                case ra.CheckNoChangesProjectedViews:
                    0 == (128 & n) && (32 & n ? Yi(t) : 64 & n && la(t, e));
                    break;
                case ra.CheckAndUpdate:
                    0 == (128 & n) && (12 == (12 & n) ? Xi(t) : 64 & n && la(t, ra.CheckAndUpdateProjectedViews));
                    break;
                case ra.CheckAndUpdateProjectedViews:
                    0 == (128 & n) && (32 & n ? Xi(t) : 64 & n && la(t, e));
                    break;
                case ra.Destroy:
                    oa(t);
                    break;
                case ra.CreateViewNodes: Qi(t);
            } }
            function la(t, e) { aa(t, e), ia(t, e); }
            function ua(t, e, n, o) { if (t.def.nodeFlags & e && t.def.nodeFlags & n)
                for (var r = t.def.nodes.length, i = 0; i < r; i++) {
                    var a = t.def.nodes[i];
                    if (a.flags & e && a.flags & n)
                        switch (Rn.setCurrentNode(t, a.nodeIndex), o) {
                            case 0:
                                Pi(t, a);
                                break;
                            case 1: na(t, a);
                        }
                    a.childFlags & e && a.childFlags & n || (i += a.childCount);
                } }
            var ca = !1;
            function pa(t, e, n, o, r, i) { var a = r.injector.get(Je); return Ki(ha(t, r, a, e, n), o, i); }
            function da(t, e, n, o, r, i) { var a = r.injector.get(Je), s = ha(t, r, new Ka(a), e, n), l = Ca(o); return Ua(Pa.create, Ki, null, [s, l, i]); }
            function ha(t, e, n, o, r) { var i = e.injector.get(fe), a = e.injector.get(qt), s = n.createRenderer(null, null); return { ngModule: e, injector: t, projectableNodes: o, selectorOrNode: r, sanitizer: i, rendererFactory: n, renderer: s, errorHandler: a }; }
            function fa(t, e, n, o) { var r = Ca(n); return Ua(Pa.create, Wi, null, [t, e, r, o]); }
            function ma(t, e, n, o) { return n = va.get(e.element.componentProvider.provider.token) || Ca(n), Ua(Pa.create, $i, null, [t, e, n, o]); }
            function ga(t, e, n, o) { return Vo(t, e, n, function (t) { var e = function (t) { var e = !1, n = !1; return 0 === ya.size ? { hasOverrides: e, hasDeprecatedOverrides: n } : (t.providers.forEach((function (t) { var o = ya.get(t.token); 3840 & t.flags && o && (e = !0, n = n || o.deprecatedBehavior); })), t.modules.forEach((function (t) { ba.forEach((function (o, r) { pt(r).providedIn === t && (e = !0, n = n || o.deprecatedBehavior); })); })), { hasOverrides: e, hasDeprecatedOverrides: n }); }(t), n = e.hasDeprecatedOverrides; return e.hasOverrides ? (function (t) { for (var e = 0; e < t.providers.length; e++) {
                var o = t.providers[e];
                n && (o.flags |= 4096);
                var r = ya.get(o.token);
                r && (o.flags = -3841 & o.flags | r.flags, o.deps = eo(r.deps), o.value = r.value);
            } if (ba.size > 0) {
                var i = new Set(t.modules);
                ba.forEach((function (e, o) { if (i.has(pt(o).providedIn)) {
                    var r = { token: o, flags: e.flags | (n ? 4096 : 0), deps: eo(e.deps), value: e.value, index: t.providers.length };
                    t.providers.push(r), t.providersByKey[Bn(o)] = r;
                } }));
            } }(t = t.factory((function () { return Mn; }))), t) : t; }(o)); }
            var ya = new Map, ba = new Map, va = new Map;
            function _a(t) { var e; ya.set(t.token, t), "function" == typeof t.token && (e = pt(t.token)) && "function" == typeof e.providedIn && ba.set(t.token, t); }
            function wa(t, e) { var n = ro(e.viewDefFactory), o = ro(n.nodes[0].element.componentView); va.set(t, o); }
            function ka() { ya.clear(), ba.clear(), va.clear(); }
            function Ca(t) { if (0 === ya.size)
                return t; var e = function (t) { for (var e = [], n = null, o = 0; o < t.nodes.length; o++) {
                var r = t.nodes[o];
                1 & r.flags && (n = r), n && 3840 & r.flags && ya.has(r.provider.token) && (e.push(n.nodeIndex), n = null);
            } return e; }(t); if (0 === e.length)
                return t; t = t.factory((function () { return Mn; })); for (var n = 0; n < e.length; n++)
                o(t, e[n]); return t; function o(t, e) { for (var n = e + 1; n < t.nodes.length; n++) {
                var o = t.nodes[n];
                if (1 & o.flags)
                    return;
                if (3840 & o.flags) {
                    var r = o.provider, i = ya.get(r.token);
                    i && (o.flags = -3841 & o.flags | i.flags, r.deps = eo(i.deps), r.value = i.value);
                }
            } } }
            function xa(t, e, n, o, r, i, a, s, l, u, c, p, d) { var h = t.def.nodes[e]; return Ji(t, h, n, o, r, i, a, s, l, u, c, p, d), 224 & h.flags ? Nn(t, e).value : void 0; }
            function Ea(t, e, n, o, r, i, a, s, l, u, c, p, d) { var h = t.def.nodes[e]; return ea(t, h, n, o, r, i, a, s, l, u, c, p, d), 224 & h.flags ? Nn(t, e).value : void 0; }
            function Sa(t) { return Ua(Pa.detectChanges, Xi, null, [t]); }
            function Ta(t) { return Ua(Pa.checkNoChanges, Yi, null, [t]); }
            function Oa(t) { return Ua(Pa.destroy, oa, null, [t]); }
            var Da, Aa, Ia, Pa = function (t) { return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t; }({});
            function Na(t, e) { Aa = t, Ia = e; }
            function Fa(t, e, n, o) { return Na(t, e), Ua(Pa.handleEvent, t.def.handleEvent, null, [t, e, n, o]); }
            function Ra(t, e) { if (128 & t.state)
                throw Tn(Pa[Da]); return Na(t, Va(t, 0)), t.def.updateDirectives((function (t, n, o) { for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i]; var a = t.def.nodes[n]; return 0 === e ? ja(t, a, o, r) : Ba(t, a, o, r), 16384 & a.flags && Na(t, Va(t, n)), 224 & a.flags ? Nn(t, a.nodeIndex).value : void 0; }), t); }
            function Ma(t, e) { if (128 & t.state)
                throw Tn(Pa[Da]); return Na(t, La(t, 0)), t.def.updateRenderer((function (t, n, o) { for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i]; var a = t.def.nodes[n]; return 0 === e ? ja(t, a, o, r) : Ba(t, a, o, r), 3 & a.flags && Na(t, La(t, n)), 224 & a.flags ? Nn(t, a.nodeIndex).value : void 0; }), t); }
            function ja(t, e, n, r) { if (Ji.apply(void 0, Object(o.__spread)([t, e, n], r))) {
                var i = 1 === n ? r[0] : r;
                if (16384 & e.flags) {
                    for (var a = {}, s = 0; s < e.bindings.length; s++) {
                        var l = e.bindings[s], u = i[s];
                        8 & l.flags && (a[(h = l.nonMinifiedName, "ng-reflect-" + h.replace(/[$@]/g, "_").replace(ye, (function () { for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e]; return "-" + t[1].toLowerCase(); })))] = be(u));
                    }
                    var c = e.parent, p = In(t, c.nodeIndex).renderElement;
                    if (c.element.name)
                        for (var d in a)
                            null != (u = a[d]) ? t.renderer.setAttribute(p, d, u) : t.renderer.removeAttribute(p, d);
                    else
                        t.renderer.setValue(p, "bindings=" + JSON.stringify(a, null, 2));
                }
            } var h; }
            function Ba(t, e, n, r) { ea.apply(void 0, Object(o.__spread)([t, e, n], r)); }
            function Va(t, e) { for (var n = e; n < t.def.nodes.length; n++) {
                var o = t.def.nodes[n];
                if (16384 & o.flags && o.bindings && o.bindings.length)
                    return n;
            } return null; }
            function La(t, e) { for (var n = e; n < t.def.nodes.length; n++) {
                var o = t.def.nodes[n];
                if (3 & o.flags && o.bindings && o.bindings.length)
                    return n;
            } return null; }
            var Ha = function () { function t(t, e) { this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e]; for (var n = this.nodeDef, o = t; n && 0 == (1 & n.flags);)
                n = n.parent; if (!n)
                for (; !n && o;)
                    n = Zn(o), o = o.parent; this.elDef = n, this.elView = o; } return Object.defineProperty(t.prototype, "elOrCompView", { get: function () { return In(this.elView, this.elDef.nodeIndex).componentView || this.view; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function () { return Fo(this.elView, this.elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function () { return this.elOrCompView.component; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this.elOrCompView.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function () { var t = []; if (this.elDef)
                    for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                        var n = this.elView.def.nodes[e];
                        20224 & n.flags && t.push(n.provider.token), e += n.childCount;
                    } return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function () { var t = {}; if (this.elDef) {
                    za(this.elView, this.elDef, t);
                    for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                        var n = this.elView.def.nodes[e];
                        20224 & n.flags && za(this.elView, n, t), e += n.childCount;
                    }
                } return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentRenderElement", { get: function () { var t = function (t) { for (; t && !Yn(t);)
                    t = t.parent; return t.parent ? In(t.parent, Zn(t).nodeIndex) : null; }(this.elOrCompView); return t ? t.renderElement : void 0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "renderNode", { get: function () { return 2 & this.nodeDef.flags ? Qn(this.view, this.nodeDef) : Qn(this.elView, this.elDef); }, enumerable: !0, configurable: !0 }), t.prototype.logError = function (t) { for (var e, n, r = [], i = 1; i < arguments.length; i++)
                r[i - 1] = arguments[i]; 2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex); var a = qa(e, n), s = -1, l = function () { var e; return ++s === a ? (e = t.error).bind.apply(e, Object(o.__spread)([t], r)) : Mn; }; e.factory(l), s < a && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, Object(o.__spread)(r))); }, t; }();
            function qa(t, e) { for (var n = -1, o = 0; o <= e; o++)
                3 & t.nodes[o].flags && n++; return n; }
            function za(t, e, n) { for (var o in e.references)
                n[o] = Fi(t, e, e.references[o]); }
            function Ua(t, e, n, o) { var r = Da, i = Aa, a = Ia; try {
                Da = t;
                var s = e.apply(n, o);
                return Aa = i, Ia = a, Da = r, s;
            }
            catch (l) {
                if (Vt(l) || !Aa)
                    throw l;
                throw function (t, e) { return t instanceof Error || (t = new Error(t.toString())), Sn(t, e), t; }(l, Wa());
            } }
            function Wa() { return Aa ? new Ha(Aa, Ia) : null; }
            var Ka = function () { function t(t) { this.delegate = t; } return t.prototype.createRenderer = function (t, e) { return new $a(this.delegate.createRenderer(t, e)); }, t.prototype.begin = function () { this.delegate.begin && this.delegate.begin(); }, t.prototype.end = function () { this.delegate.end && this.delegate.end(); }, t.prototype.whenRenderingDone = function () { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null); }, t; }(), $a = function () { function t(t) { this.delegate = t, this.debugContextFactory = Wa, this.data = this.delegate.data; } return t.prototype.createDebugContext = function (t) { return this.debugContextFactory(t); }, t.prototype.destroyNode = function (t) { var e = gi(t); !function (t) { mi.delete(t.nativeNode); }(e), e instanceof hi && (e.listeners.length = 0), this.delegate.destroyNode && this.delegate.destroyNode(t); }, t.prototype.destroy = function () { this.delegate.destroy(); }, t.prototype.createElement = function (t, e) { var n = this.delegate.createElement(t, e), o = this.createDebugContext(n); if (o) {
                var r = new fi(n, null, o);
                r.name = t, yi(r);
            } return n; }, t.prototype.createComment = function (t) { var e = this.delegate.createComment(t), n = this.createDebugContext(e); return n && yi(new hi(e, null, n)), e; }, t.prototype.createText = function (t) { var e = this.delegate.createText(t), n = this.createDebugContext(e); return n && yi(new hi(e, null, n)), e; }, t.prototype.appendChild = function (t, e) { var n = gi(t), o = gi(e); n && o && n instanceof fi && n.addChild(o), this.delegate.appendChild(t, e); }, t.prototype.insertBefore = function (t, e, n) { var o = gi(t), r = gi(e), i = gi(n); o && r && o instanceof fi && o.insertBefore(i, r), this.delegate.insertBefore(t, e, n); }, t.prototype.removeChild = function (t, e) { var n = gi(t), o = gi(e); n && o && n instanceof fi && n.removeChild(o), this.delegate.removeChild(t, e); }, t.prototype.selectRootElement = function (t, e) { var n = this.delegate.selectRootElement(t, e), o = Wa(); return o && yi(new fi(n, null, o)), n; }, t.prototype.setAttribute = function (t, e, n, o) { var r = gi(t); r && r instanceof fi && (r.attributes[o ? o + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, o); }, t.prototype.removeAttribute = function (t, e, n) { var o = gi(t); o && o instanceof fi && (o.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n); }, t.prototype.addClass = function (t, e) { var n = gi(t); n && n instanceof fi && (n.classes[e] = !0), this.delegate.addClass(t, e); }, t.prototype.removeClass = function (t, e) { var n = gi(t); n && n instanceof fi && (n.classes[e] = !1), this.delegate.removeClass(t, e); }, t.prototype.setStyle = function (t, e, n, o) { var r = gi(t); r && r instanceof fi && (r.styles[e] = n), this.delegate.setStyle(t, e, n, o); }, t.prototype.removeStyle = function (t, e, n) { var o = gi(t); o && o instanceof fi && (o.styles[e] = null), this.delegate.removeStyle(t, e, n); }, t.prototype.setProperty = function (t, e, n) { var o = gi(t); o && o instanceof fi && (o.properties[e] = n), this.delegate.setProperty(t, e, n); }, t.prototype.listen = function (t, e, n) { if ("string" != typeof t) {
                var o = gi(t);
                o && o.listeners.push(new di(e, n));
            } return this.delegate.listen(t, e, n); }, t.prototype.parentNode = function (t) { return this.delegate.parentNode(t); }, t.prototype.nextSibling = function (t) { return this.delegate.nextSibling(t); }, t.prototype.setValue = function (t, e) { return this.delegate.setValue(t, e); }, t; }();
            function Ga(t, e, n) { return new Za(t, e, n); }
            var Za = function (t) { function e(e, n, o) { var r = t.call(this) || this; return r.moduleType = e, r._bootstrapComponents = n, r._ngModuleDefFactory = o, r; } return Object(o.__extends)(e, t), e.prototype.create = function (t) { !function () { if (!ca) {
                ca = !0;
                var t = Wt() ? { setCurrentNode: Na, createRootView: da, createEmbeddedView: fa, createComponentView: ma, createNgModuleRef: ga, overrideProvider: _a, overrideComponentView: wa, clearOverrides: ka, checkAndUpdateView: Sa, checkNoChangesView: Ta, destroyView: Oa, createDebugContext: function (t, e) { return new Ha(t, e); }, handleEvent: Fa, updateDirectives: Ra, updateRenderer: Ma } : { setCurrentNode: function () { }, createRootView: pa, createEmbeddedView: Wi, createComponentView: $i, createNgModuleRef: Vo, overrideProvider: Mn, overrideComponentView: Mn, clearOverrides: Mn, checkAndUpdateView: Xi, checkNoChangesView: Yi, destroyView: oa, createDebugContext: function (t, e) { return new Ha(t, e); }, handleEvent: function (t, e, n, o) { return t.def.handleEvent(t, e, n, o); }, updateDirectives: function (t, e) { return t.def.updateDirectives(0 === e ? xa : Ea, t); }, updateRenderer: function (t, e) { return t.def.updateRenderer(0 === e ? xa : Ea, t); } };
                Rn.setCurrentNode = t.setCurrentNode, Rn.createRootView = t.createRootView, Rn.createEmbeddedView = t.createEmbeddedView, Rn.createComponentView = t.createComponentView, Rn.createNgModuleRef = t.createNgModuleRef, Rn.overrideProvider = t.overrideProvider, Rn.overrideComponentView = t.overrideComponentView, Rn.clearOverrides = t.clearOverrides, Rn.checkAndUpdateView = t.checkAndUpdateView, Rn.checkNoChangesView = t.checkNoChangesView, Rn.destroyView = t.destroyView, Rn.resolveDep = ar, Rn.createDebugContext = t.createDebugContext, Rn.handleEvent = t.handleEvent, Rn.updateDirectives = t.updateDirectives, Rn.updateRenderer = t.updateRenderer, Rn.dirtyParentQueries = Ii;
            } }(); var e = function (t) { var e = Array.from(t.providers), n = Array.from(t.modules), o = {}; for (var r in t.providersByKey)
                o[r] = t.providersByKey[r]; return { factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: o }; }(ro(this._ngModuleDefFactory)); return Rn.createNgModuleRef(this.moduleType, t || Ce.NULL, this._bootstrapComponents, e); }, e; }(Ft), Qa = function () { return function () { }; }(), Ya = function () { function t() { this._darkTheme = new E, this.isDarkTheme = this._darkTheme.asObservable(); } return t.prototype.setDarkTheme = function (t) { this._darkTheme.next(t); }, t.prototype.getTheme = function () { return this._darkTheme.next(!0), this._darkTheme; }, t; }(), Xa = function () { function t(t) { this.themeService = t; } return t.prototype.ngOnInit = function () { this.isDarkTheme = this.themeService.isDarkTheme; }, t; }(), Ja = function () { return function () { }; }(), ts = function (t) { return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t; }({}), es = function (t) { return t[t.Format = 0] = "Format", t[t.Standalone = 1] = "Standalone", t; }({}), ns = function (t) { return t[t.Narrow = 0] = "Narrow", t[t.Abbreviated = 1] = "Abbreviated", t[t.Wide = 2] = "Wide", t[t.Short = 3] = "Short", t; }({}), os = function (t) { return t[t.Short = 0] = "Short", t[t.Medium = 1] = "Medium", t[t.Long = 2] = "Long", t[t.Full = 3] = "Full", t; }({}), rs = function (t) { return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t; }({});
            function is(t, e, n) { var o = yr(t), r = ds([o[fr.DaysFormat], o[fr.DaysStandalone]], e); return ds(r, n); }
            function as(t, e, n) { var o = yr(t), r = ds([o[fr.MonthsFormat], o[fr.MonthsStandalone]], e); return ds(r, n); }
            function ss(t, e) { return ds(yr(t)[fr.DateFormat], e); }
            function ls(t, e) { return ds(yr(t)[fr.TimeFormat], e); }
            function us(t, e) { return ds(yr(t)[fr.DateTimeFormat], e); }
            function cs(t, e) { var n = yr(t), o = n[fr.NumberSymbols][e]; if (void 0 === o) {
                if (e === rs.CurrencyDecimal)
                    return n[fr.NumberSymbols][rs.Decimal];
                if (e === rs.CurrencyGroup)
                    return n[fr.NumberSymbols][rs.Group];
            } return o; }
            function ps(t) { if (!t[fr.ExtraData])
                throw new Error('Missing extra locale data for the locale "' + t[fr.LocaleId] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.'); }
            function ds(t, e) { for (var n = e; n > -1; n--)
                if (void 0 !== t[n])
                    return t[n]; throw new Error("Locale data API: locale data undefined"); }
            function hs(t) { var e = Object(o.__read)(t.split(":"), 2); return { hours: +e[0], minutes: +e[1] }; }
            var fs = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, ms = {}, gs = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/, ys = function (t) { return t[t.Short = 0] = "Short", t[t.ShortGMT = 1] = "ShortGMT", t[t.Long = 2] = "Long", t[t.Extended = 3] = "Extended", t; }({}), bs = function (t) { return t[t.FullYear = 0] = "FullYear", t[t.Month = 1] = "Month", t[t.Date = 2] = "Date", t[t.Hours = 3] = "Hours", t[t.Minutes = 4] = "Minutes", t[t.Seconds = 5] = "Seconds", t[t.FractionalSeconds = 6] = "FractionalSeconds", t[t.Day = 7] = "Day", t; }({}), vs = function (t) { return t[t.DayPeriods = 0] = "DayPeriods", t[t.Days = 1] = "Days", t[t.Months = 2] = "Months", t[t.Eras = 3] = "Eras", t; }({});
            function _s(t, e) { return e && (t = t.replace(/\{([^}]+)}/g, (function (t, n) { return null != e && n in e ? e[n] : t; }))), t; }
            function ws(t, e, n, o, r) { void 0 === n && (n = "-"); var i = ""; (t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, i = n)); for (var a = String(t); a.length < e;)
                a = "0" + a; return o && (a = a.substr(a.length - e)), i + a; }
            function ks(t, e, n, o, r) { return void 0 === n && (n = 0), void 0 === o && (o = !1), void 0 === r && (r = !1), function (i, a) { var s, l = function (t, e) { switch (t) {
                case bs.FullYear: return e.getFullYear();
                case bs.Month: return e.getMonth();
                case bs.Date: return e.getDate();
                case bs.Hours: return e.getHours();
                case bs.Minutes: return e.getMinutes();
                case bs.Seconds: return e.getSeconds();
                case bs.FractionalSeconds: return e.getMilliseconds();
                case bs.Day: return e.getDay();
                default: throw new Error('Unknown DateType value "' + t + '".');
            } }(t, i); if ((n > 0 || l > -n) && (l += n), t === bs.Hours)
                0 === l && -12 === n && (l = 12);
            else if (t === bs.FractionalSeconds)
                return s = e, ws(l, 3).substr(0, s); var u = cs(a, rs.MinusSign); return ws(l, e, u, o, r); }; }
            function Cs(t, e, n, o) { return void 0 === n && (n = es.Format), void 0 === o && (o = !1), function (r, i) { return function (t, e, n, o, r, i) { switch (n) {
                case vs.Months: return as(e, r, o)[t.getMonth()];
                case vs.Days: return is(e, r, o)[t.getDay()];
                case vs.DayPeriods:
                    var a = t.getHours(), s = t.getMinutes();
                    if (i) {
                        var l, u = function (t) { var e = yr(t); return ps(e), (e[fr.ExtraData][2] || []).map((function (t) { return "string" == typeof t ? hs(t) : [hs(t[0]), hs(t[1])]; })); }(e), c = function (t, e, n) { var o = yr(t); ps(o); var r = ds([o[fr.ExtraData][0], o[fr.ExtraData][1]], e) || []; return ds(r, n) || []; }(e, r, o);
                        if (u.forEach((function (t, e) { if (Array.isArray(t)) {
                            var n = t[0], o = t[1], r = o.hours;
                            a >= n.hours && s >= n.minutes && (a < r || a === r && s < o.minutes) && (l = c[e]);
                        }
                        else
                            t.hours === a && t.minutes === s && (l = c[e]); })), l)
                            return l;
                    }
                    return function (t, e, n) { var o = yr(t), r = ds([o[fr.DayPeriodsFormat], o[fr.DayPeriodsStandalone]], e); return ds(r, n); }(e, r, o)[a < 12 ? 0 : 1];
                case vs.Eras: return function (t, e) { return ds(yr(t)[fr.Eras], e); }(e, o)[t.getFullYear() <= 0 ? 0 : 1];
                default: throw new Error("unexpected translation type " + n);
            } }(r, i, t, e, n, o); }; }
            function xs(t) { return function (e, n, o) { var r = -1 * o, i = cs(n, rs.MinusSign), a = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60); switch (t) {
                case ys.Short: return (r >= 0 ? "+" : "") + ws(a, 2, i) + ws(Math.abs(r % 60), 2, i);
                case ys.ShortGMT: return "GMT" + (r >= 0 ? "+" : "") + ws(a, 1, i);
                case ys.Long: return "GMT" + (r >= 0 ? "+" : "") + ws(a, 2, i) + ":" + ws(Math.abs(r % 60), 2, i);
                case ys.Extended: return 0 === o ? "Z" : (r >= 0 ? "+" : "") + ws(a, 2, i) + ":" + ws(Math.abs(r % 60), 2, i);
                default: throw new Error('Unknown zone width "' + t + '"');
            } }; }
            function Es(t, e) { return void 0 === e && (e = !1), function (n, o) { var r, i, a, s; if (e) {
                var l = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1, u = n.getDate();
                r = 1 + Math.floor((u + l) / 7);
            }
            else {
                var c = (a = n.getFullYear(), s = new Date(a, 0, 1).getDay(), new Date(a, 0, 1 + (s <= 4 ? 4 : 11) - s)), p = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() - c.getTime();
                r = 1 + Math.round(p / 6048e5);
            } return ws(r, t, cs(o, rs.MinusSign)); }; }
            var Ss = {};
            function Ts(t, e) { t = t.replace(/:/g, ""); var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4; return isNaN(n) ? e : n; }
            function Os(t) { return t instanceof Date && !isNaN(t.valueOf()); }
            var Ds = new kt("UseV4Plurals"), As = function () { return function () { }; }(), Is = function (t) { function e(e, n) { var o = t.call(this) || this; return o.locale = e, o.deprecatedPluralFn = n, o; } return Object(o.__extends)(e, t), e.prototype.getPluralCategory = function (t, e) { switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function (t) { return yr(t)[fr.PluralCase]; }(e || this.locale)(t)) {
                case ts.Zero: return "zero";
                case ts.One: return "one";
                case ts.Two: return "two";
                case ts.Few: return "few";
                case ts.Many: return "many";
                default: return "other";
            } }, e; }(As), Ps = function () { return function () { }; }(), Ns = function () { function t(t, e, n, o) { this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = o, this._initialClasses = []; } return t.prototype.getValue = function () { return null; }, t.prototype.setClass = function (t) { this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass); }, t.prototype.setNgClass = function (t) { this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Me(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()); }, t.prototype.applyChanges = function () { if (this._iterableDiffer) {
                var t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t);
            }
            else if (this._keyValueDiffer) {
                var e = this._keyValueDiffer.diff(this._rawClass);
                e && this._applyKeyValueChanges(e);
            } }, t.prototype._applyKeyValueChanges = function (t) { var e = this; t.forEachAddedItem((function (t) { return e._toggleClass(t.key, t.currentValue); })), t.forEachChangedItem((function (t) { return e._toggleClass(t.key, t.currentValue); })), t.forEachRemovedItem((function (t) { t.previousValue && e._toggleClass(t.key, !1); })); }, t.prototype._applyIterableChanges = function (t) { var e = this; t.forEachAddedItem((function (t) { if ("string" != typeof t.item)
                throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + ht(t.item)); e._toggleClass(t.item, !0); })), t.forEachRemovedItem((function (t) { return e._toggleClass(t.item, !1); })); }, t.prototype._applyClasses = function (t) { var e = this; t && (Array.isArray(t) || t instanceof Set ? t.forEach((function (t) { return e._toggleClass(t, !0); })) : Object.keys(t).forEach((function (n) { return e._toggleClass(n, !!t[n]); }))); }, t.prototype._removeClasses = function (t) { var e = this; t && (Array.isArray(t) || t instanceof Set ? t.forEach((function (t) { return e._toggleClass(t, !1); })) : Object.keys(t).forEach((function (t) { return e._toggleClass(t, !1); }))); }, t.prototype._toggleClass = function (t, e) { var n = this; (t = t.trim()) && t.split(/\s+/g).forEach((function (t) { e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t); })); }, t; }(), Fs = function (t) { function e(e) { return t.call(this, e) || this; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "klass", { set: function (t) { this._delegate.setClass(t); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "ngClass", { set: function (t) { this._delegate.setNgClass(t); }, enumerable: !0, configurable: !0 }), e.prototype.ngDoCheck = function () { this._delegate.applyChanges(); }, e; }(function () { function t(t) { this._delegate = t; } return t.prototype.getValue = function () { return this._delegate.getValue(); }, t.ngDirectiveDef = void 0, t; }()), Rs = function () { function t(t, e, n, o) { this.$implicit = t, this.ngForOf = e, this.index = n, this.count = o; } return Object.defineProperty(t.prototype, "first", { get: function () { return 0 === this.index; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "last", { get: function () { return this.index === this.count - 1; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "even", { get: function () { return this.index % 2 == 0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "odd", { get: function () { return !this.even; }, enumerable: !0, configurable: !0 }), t; }(), Ms = function () { function t(t, e, n) { this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null; } return Object.defineProperty(t.prototype, "ngForOf", { set: function (t) { this._ngForOf = t, this._ngForOfDirty = !0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngForTrackBy", { get: function () { return this._trackByFn; }, set: function (t) { Wt() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngForTemplate", { set: function (t) { t && (this._template = t); }, enumerable: !0, configurable: !0 }), t.prototype.ngDoCheck = function () { if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                var t = this._ngForOf;
                if (!this._differ && t)
                    try {
                        this._differ = this._differs.find(t).create(this.ngForTrackBy);
                    }
                    catch (o) {
                        throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
            } var e; if (this._differ) {
                var n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n);
            } }, t.prototype._applyChanges = function (t) { var e = this, n = []; t.forEachOperation((function (t, o, r) { if (null == t.previousIndex) {
                var i = e._viewContainer.createEmbeddedView(e._template, new Rs(null, e._ngForOf, -1, -1), null === r ? void 0 : r), a = new js(t, i);
                n.push(a);
            }
            else
                null == r ? e._viewContainer.remove(null === o ? void 0 : o) : null !== o && (i = e._viewContainer.get(o), e._viewContainer.move(i, r), a = new js(t, i), n.push(a)); })); for (var o = 0; o < n.length; o++)
                this._perViewChange(n[o].view, n[o].record); o = 0; for (var r = this._viewContainer.length; o < r; o++) {
                var i = this._viewContainer.get(o);
                i.context.index = o, i.context.count = r, i.context.ngForOf = this._ngForOf;
            } t.forEachIdentityChange((function (t) { e._viewContainer.get(t.currentIndex).context.$implicit = t.item; })); }, t.prototype._perViewChange = function (t, e) { t.context.$implicit = e.item; }, t.ngTemplateContextGuard = function (t, e) { return !0; }, t; }(), js = function () { return function (t, e) { this.record = t, this.view = e; }; }(), Bs = function () { function t(t, e) { this._viewContainer = t, this._context = new Vs, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e; } return Object.defineProperty(t.prototype, "ngIf", { set: function (t) { this._context.$implicit = this._context.ngIf = t, this._updateView(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfThen", { set: function (t) { Ls("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfElse", { set: function (t) { Ls("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView(); }, enumerable: !0, configurable: !0 }), t.prototype._updateView = function () { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))); }, t; }(), Vs = function () { return function () { this.$implicit = null, this.ngIf = null; }; }();
            function Ls(t, e) { if (e && !e.createEmbeddedView)
                throw new Error(t + " must be a TemplateRef, but received '" + ht(e) + "'."); }
            var Hs = function () { return function () { }; }(), qs = function () { function t(t, e, n) { this._ngEl = t, this._differs = e, this._renderer = n; } return t.prototype.getValue = function () { return null; }, t.prototype.setNgStyle = function (t) { this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create()); }, t.prototype.applyChanges = function () { if (this._differ) {
                var t = this._differ.diff(this._ngStyle);
                t && this._applyChanges(t);
            } }, t.prototype._applyChanges = function (t) { var e = this; t.forEachRemovedItem((function (t) { return e._setStyle(t.key, null); })), t.forEachAddedItem((function (t) { return e._setStyle(t.key, t.currentValue); })), t.forEachChangedItem((function (t) { return e._setStyle(t.key, t.currentValue); })); }, t.prototype._setStyle = function (t, e) { var n = Object(o.__read)(t.split("."), 2), r = n[0], i = n[1]; null != (e = null != e && i ? "" + e + i : e) ? this._renderer.setStyle(this._ngEl.nativeElement, r, e) : this._renderer.removeStyle(this._ngEl.nativeElement, r); }, t; }(), zs = function (t) { function e(e) { return t.call(this, e) || this; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "ngStyle", { set: function (t) { this._delegate.setNgStyle(t); }, enumerable: !0, configurable: !0 }), e.prototype.ngDoCheck = function () { this._delegate.applyChanges(); }, e; }(function () { function t(t) { this._delegate = t; } return t.prototype.getValue = function () { return this._delegate.getValue(); }, t.ngDirectiveDef = void 0, t; }()), Us = function () { function t(t) { this._viewContainerRef = t, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null; } return t.prototype.ngOnChanges = function (t) { this._shouldRecreateView(t) ? (this._viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)), this.ngTemplateOutlet && (this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext))) : this._viewRef && this.ngTemplateOutletContext && this._updateExistingContext(this.ngTemplateOutletContext); }, t.prototype._shouldRecreateView = function (t) { var e = t.ngTemplateOutletContext; return !!t.ngTemplateOutlet || e && this._hasContextShapeChanged(e); }, t.prototype._hasContextShapeChanged = function (t) { var e, n, r = Object.keys(t.previousValue || {}), i = Object.keys(t.currentValue || {}); if (r.length === i.length) {
                try {
                    for (var a = Object(o.__values)(i), s = a.next(); !s.done; s = a.next())
                        if (-1 === r.indexOf(s.value))
                            return !0;
                }
                catch (l) {
                    e = { error: l };
                }
                finally {
                    try {
                        s && !s.done && (n = a.return) && n.call(a);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return !1;
            } return !0; }, t.prototype._updateExistingContext = function (t) { var e, n; try {
                for (var r = Object(o.__values)(Object.keys(t)), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value;
                    this._viewRef.context[a] = this.ngTemplateOutletContext[a];
                }
            }
            catch (s) {
                e = { error: s };
            }
            finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } }, t; }(), Ws = function () { function t() { } return t.prototype.createSubscription = function (t, e) { return t.subscribe({ next: e, error: function (t) { throw t; } }); }, t.prototype.dispose = function (t) { t.unsubscribe(); }, t.prototype.onDestroy = function (t) { t.unsubscribe(); }, t; }(), Ks = new (function () { function t() { } return t.prototype.createSubscription = function (t, e) { return t.then(e, (function (t) { throw t; })); }, t.prototype.dispose = function (t) { }, t.prototype.onDestroy = function (t) { }, t; }()), $s = new Ws, Gs = function () { function t(t) { this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null; } var e; return e = t, t.prototype.ngOnDestroy = function () { this._subscription && this._dispose(); }, t.prototype.transform = function (t) { return this._obj ? t !== this._obj ? (this._dispose(), this.transform(t)) : Ne(this._latestValue, this._latestReturnedValue) ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, Re.wrap(this._latestValue)) : (t && this._subscribe(t), this._latestReturnedValue = this._latestValue, this._latestValue); }, t.prototype._subscribe = function (t) { var e = this; this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, (function (n) { return e._updateLatestValue(t, n); })); }, t.prototype._selectStrategy = function (t) { if (Be(t))
                return Ks; if (Ve(t))
                return $s; throw Error("InvalidPipeArgument: '" + t + "' for pipe '" + ht(e) + "'"); }, t.prototype._dispose = function () { this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null; }, t.prototype._updateLatestValue = function (t, e) { t === this._obj && (this._latestValue = e, this._ref.markForCheck()); }, t; }(), Zs = function () { return function () { }; }(), Qs = new kt("DocumentToken");
            function Ys(t) { return "browser" === t; }
            var Xs = null;
            function Js() { return Xs; }
            var tl, el = function (t) { function e() { var e = t.call(this) || this; e._animationPrefix = null, e._transitionEnd = null; try {
                var n = e.createElement("div", document);
                if (null != e.getStyle(n, "animationName"))
                    e._animationPrefix = "";
                else
                    for (var o = ["Webkit", "Moz", "O", "ms"], r = 0; r < o.length; r++)
                        if (null != e.getStyle(n, o[r] + "AnimationName")) {
                            e._animationPrefix = "-" + o[r].toLowerCase() + "-";
                            break;
                        }
                var i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                Object.keys(i).forEach((function (t) { null != e.getStyle(n, t) && (e._transitionEnd = i[t]); }));
            }
            catch (a) {
                e._animationPrefix = null, e._transitionEnd = null;
            } return e; } return Object(o.__extends)(e, t), e.prototype.getDistributedNodes = function (t) { return t.getDistributedNodes(); }, e.prototype.resolveAndSetHref = function (t, e, n) { t.href = null == n ? e : e + "/../" + n; }, e.prototype.supportsDOMEvents = function () { return !0; }, e.prototype.supportsNativeShadowDOM = function () { return "function" == typeof document.body.createShadowRoot; }, e.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ""; }, e.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ""; }, e.prototype.supportsAnimation = function () { return null != this._animationPrefix && null != this._transitionEnd; }, e; }(function () { function t() { this.resourceLoaderType = null; } return Object.defineProperty(t.prototype, "attrToPropMap", { get: function () { return this._attrToPropMap; }, set: function (t) { this._attrToPropMap = t; }, enumerable: !0, configurable: !0 }), t; }()), nl = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }, ol = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, rl = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" }, il = function () { if (wt.Node)
                return wt.Node.prototype.contains || function (t) { return !!(16 & this.compareDocumentPosition(t)); }; }(), al = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.parse = function (t) { throw new Error("parse not implemented"); }, e.makeCurrent = function () { var t; t = new e, Xs || (Xs = t); }, e.prototype.hasProperty = function (t, e) { return e in t; }, e.prototype.setProperty = function (t, e, n) { t[e] = n; }, e.prototype.getProperty = function (t, e) { return t[e]; }, e.prototype.invoke = function (t, e, n) { var r; (r = t)[e].apply(r, Object(o.__spread)(n)); }, e.prototype.logError = function (t) { window.console && (console.error ? console.error(t) : console.log(t)); }, e.prototype.log = function (t) { window.console && window.console.log && window.console.log(t); }, e.prototype.logGroup = function (t) { window.console && window.console.group && window.console.group(t); }, e.prototype.logGroupEnd = function () { window.console && window.console.groupEnd && window.console.groupEnd(); }, Object.defineProperty(e.prototype, "attrToPropMap", { get: function () { return nl; }, enumerable: !0, configurable: !0 }), e.prototype.contains = function (t, e) { return il.call(t, e); }, e.prototype.querySelector = function (t, e) { return t.querySelector(e); }, e.prototype.querySelectorAll = function (t, e) { return t.querySelectorAll(e); }, e.prototype.on = function (t, e, n) { t.addEventListener(e, n, !1); }, e.prototype.onAndCancel = function (t, e, n) { return t.addEventListener(e, n, !1), function () { t.removeEventListener(e, n, !1); }; }, e.prototype.dispatchEvent = function (t, e) { t.dispatchEvent(e); }, e.prototype.createMouseEvent = function (t) { var e = this.getDefaultDocument().createEvent("MouseEvent"); return e.initEvent(t, !0, !0), e; }, e.prototype.createEvent = function (t) { var e = this.getDefaultDocument().createEvent("Event"); return e.initEvent(t, !0, !0), e; }, e.prototype.preventDefault = function (t) { t.preventDefault(), t.returnValue = !1; }, e.prototype.isPrevented = function (t) { return t.defaultPrevented || null != t.returnValue && !t.returnValue; }, e.prototype.getInnerHTML = function (t) { return t.innerHTML; }, e.prototype.getTemplateContent = function (t) { return "content" in t && this.isTemplateElement(t) ? t.content : null; }, e.prototype.getOuterHTML = function (t) { return t.outerHTML; }, e.prototype.nodeName = function (t) { return t.nodeName; }, e.prototype.nodeValue = function (t) { return t.nodeValue; }, e.prototype.type = function (t) { return t.type; }, e.prototype.content = function (t) { return this.hasProperty(t, "content") ? t.content : t; }, e.prototype.firstChild = function (t) { return t.firstChild; }, e.prototype.nextSibling = function (t) { return t.nextSibling; }, e.prototype.parentElement = function (t) { return t.parentNode; }, e.prototype.childNodes = function (t) { return t.childNodes; }, e.prototype.childNodesAsList = function (t) { for (var e = t.childNodes, n = new Array(e.length), o = 0; o < e.length; o++)
                n[o] = e[o]; return n; }, e.prototype.clearNodes = function (t) { for (; t.firstChild;)
                t.removeChild(t.firstChild); }, e.prototype.appendChild = function (t, e) { t.appendChild(e); }, e.prototype.removeChild = function (t, e) { t.removeChild(e); }, e.prototype.replaceChild = function (t, e, n) { t.replaceChild(e, n); }, e.prototype.remove = function (t) { return t.parentNode && t.parentNode.removeChild(t), t; }, e.prototype.insertBefore = function (t, e, n) { t.insertBefore(n, e); }, e.prototype.insertAllBefore = function (t, e, n) { n.forEach((function (n) { return t.insertBefore(n, e); })); }, e.prototype.insertAfter = function (t, e, n) { t.insertBefore(n, e.nextSibling); }, e.prototype.setInnerHTML = function (t, e) { t.innerHTML = e; }, e.prototype.getText = function (t) { return t.textContent; }, e.prototype.setText = function (t, e) { t.textContent = e; }, e.prototype.getValue = function (t) { return t.value; }, e.prototype.setValue = function (t, e) { t.value = e; }, e.prototype.getChecked = function (t) { return t.checked; }, e.prototype.setChecked = function (t, e) { t.checked = e; }, e.prototype.createComment = function (t) { return this.getDefaultDocument().createComment(t); }, e.prototype.createTemplate = function (t) { var e = this.getDefaultDocument().createElement("template"); return e.innerHTML = t, e; }, e.prototype.createElement = function (t, e) { return (e = e || this.getDefaultDocument()).createElement(t); }, e.prototype.createElementNS = function (t, e, n) { return (n = n || this.getDefaultDocument()).createElementNS(t, e); }, e.prototype.createTextNode = function (t, e) { return (e = e || this.getDefaultDocument()).createTextNode(t); }, e.prototype.createScriptTag = function (t, e, n) { var o = (n = n || this.getDefaultDocument()).createElement("SCRIPT"); return o.setAttribute(t, e), o; }, e.prototype.createStyleElement = function (t, e) { var n = (e = e || this.getDefaultDocument()).createElement("style"); return this.appendChild(n, this.createTextNode(t, e)), n; }, e.prototype.createShadowRoot = function (t) { return t.createShadowRoot(); }, e.prototype.getShadowRoot = function (t) { return t.shadowRoot; }, e.prototype.getHost = function (t) { return t.host; }, e.prototype.clone = function (t) { return t.cloneNode(!0); }, e.prototype.getElementsByClassName = function (t, e) { return t.getElementsByClassName(e); }, e.prototype.getElementsByTagName = function (t, e) { return t.getElementsByTagName(e); }, e.prototype.classList = function (t) { return Array.prototype.slice.call(t.classList, 0); }, e.prototype.addClass = function (t, e) { t.classList.add(e); }, e.prototype.removeClass = function (t, e) { t.classList.remove(e); }, e.prototype.hasClass = function (t, e) { return t.classList.contains(e); }, e.prototype.setStyle = function (t, e, n) { t.style[e] = n; }, e.prototype.removeStyle = function (t, e) { t.style[e] = ""; }, e.prototype.getStyle = function (t, e) { return t.style[e]; }, e.prototype.hasStyle = function (t, e, n) { var o = this.getStyle(t, e) || ""; return n ? o == n : o.length > 0; }, e.prototype.tagName = function (t) { return t.tagName; }, e.prototype.attributeMap = function (t) { for (var e = new Map, n = t.attributes, o = 0; o < n.length; o++) {
                var r = n.item(o);
                e.set(r.name, r.value);
            } return e; }, e.prototype.hasAttribute = function (t, e) { return t.hasAttribute(e); }, e.prototype.hasAttributeNS = function (t, e, n) { return t.hasAttributeNS(e, n); }, e.prototype.getAttribute = function (t, e) { return t.getAttribute(e); }, e.prototype.getAttributeNS = function (t, e, n) { return t.getAttributeNS(e, n); }, e.prototype.setAttribute = function (t, e, n) { t.setAttribute(e, n); }, e.prototype.setAttributeNS = function (t, e, n, o) { t.setAttributeNS(e, n, o); }, e.prototype.removeAttribute = function (t, e) { t.removeAttribute(e); }, e.prototype.removeAttributeNS = function (t, e, n) { t.removeAttributeNS(e, n); }, e.prototype.templateAwareRoot = function (t) { return this.isTemplateElement(t) ? this.content(t) : t; }, e.prototype.createHtmlDocument = function () { return document.implementation.createHTMLDocument("fakeTitle"); }, e.prototype.getDefaultDocument = function () { return document; }, e.prototype.getBoundingClientRect = function (t) { try {
                return t.getBoundingClientRect();
            }
            catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            } }, e.prototype.getTitle = function (t) { return t.title; }, e.prototype.setTitle = function (t, e) { t.title = e || ""; }, e.prototype.elementMatches = function (t, e) { return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e)); }, e.prototype.isTemplateElement = function (t) { return this.isElementNode(t) && "TEMPLATE" === t.nodeName; }, e.prototype.isTextNode = function (t) { return t.nodeType === Node.TEXT_NODE; }, e.prototype.isCommentNode = function (t) { return t.nodeType === Node.COMMENT_NODE; }, e.prototype.isElementNode = function (t) { return t.nodeType === Node.ELEMENT_NODE; }, e.prototype.hasShadowRoot = function (t) { return null != t.shadowRoot && t instanceof HTMLElement; }, e.prototype.isShadowRoot = function (t) { return t instanceof DocumentFragment; }, e.prototype.importIntoDoc = function (t) { return document.importNode(this.templateAwareRoot(t), !0); }, e.prototype.adoptNode = function (t) { return document.adoptNode(t); }, e.prototype.getHref = function (t) { return t.getAttribute("href"); }, e.prototype.getEventKey = function (t) { var e = t.key; if (null == e) {
                if (null == (e = t.keyIdentifier))
                    return "Unidentified";
                e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && rl.hasOwnProperty(e) && (e = rl[e]));
            } return ol[e] || e; }, e.prototype.getGlobalEventTarget = function (t, e) { return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null; }, e.prototype.getHistory = function () { return window.history; }, e.prototype.getLocation = function () { return window.location; }, e.prototype.getBaseHref = function (t) { var e, n = sl || (sl = document.querySelector("base")) ? sl.getAttribute("href") : null; return null == n ? null : (e = n, tl || (tl = document.createElement("a")), tl.setAttribute("href", e), "/" === tl.pathname.charAt(0) ? tl.pathname : "/" + tl.pathname); }, e.prototype.resetBaseElement = function () { sl = null; }, e.prototype.getUserAgent = function () { return window.navigator.userAgent; }, e.prototype.setData = function (t, e, n) { this.setAttribute(t, "data-" + e, n); }, e.prototype.getData = function (t, e) { return this.getAttribute(t, "data-" + e); }, e.prototype.getComputedStyle = function (t) { return getComputedStyle(t); }, e.prototype.supportsWebAnimation = function () { return "function" == typeof Element.prototype.animate; }, e.prototype.performanceNow = function () { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime(); }, e.prototype.supportsCookies = function () { return !0; }, e.prototype.getCookie = function (t) { return function (t, e) { var n, r; e = encodeURIComponent(e); try {
                for (var i = Object(o.__values)(t.split(";")), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value, l = s.indexOf("="), u = Object(o.__read)(-1 == l ? [s, ""] : [s.slice(0, l), s.slice(l + 1)], 2), c = u[1];
                    if (u[0].trim() === e)
                        return decodeURIComponent(c);
                }
            }
            catch (p) {
                n = { error: p };
            }
            finally {
                try {
                    a && !a.done && (r = i.return) && r.call(i);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            } return null; }(document.cookie, t); }, e.prototype.setCookie = function (t, e) { document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e); }, e; }(el), sl = null;
            function ll() { return !!window.history.pushState; }
            var ul = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n._init(), n; } return Object(o.__extends)(e, t), e.prototype._init = function () { this.location = Js().getLocation(), this._history = Js().getHistory(); }, e.prototype.getBaseHrefFromDOM = function () { return Js().getBaseHref(this._doc); }, e.prototype.onPopState = function (t) { Js().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1); }, e.prototype.onHashChange = function (t) { Js().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1); }, Object.defineProperty(e.prototype, "href", { get: function () { return this.location.href; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "protocol", { get: function () { return this.location.protocol; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hostname", { get: function () { return this.location.hostname; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "port", { get: function () { return this.location.port; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "pathname", { get: function () { return this.location.pathname; }, set: function (t) { this.location.pathname = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "search", { get: function () { return this.location.search; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hash", { get: function () { return this.location.hash; }, enumerable: !0, configurable: !0 }), e.prototype.pushState = function (t, e, n) { ll() ? this._history.pushState(t, e, n) : this.location.hash = n; }, e.prototype.replaceState = function (t, e, n) { ll() ? this._history.replaceState(t, e, n) : this.location.hash = n; }, e.prototype.forward = function () { this._history.forward(); }, e.prototype.back = function () { this._history.back(); }, e.prototype.getState = function () { return this._history.state; }, Object(o.__decorate)([Object(o.__param)(0, rt(Qs)), Object(o.__metadata)("design:paramtypes", [Object])], e); }(Ja), cl = new kt("TRANSITION_ID"), pl = [{ provide: wr, useFactory: function (t, e, n) { return function () { n.get(kr).donePromise.then((function () { var n = Js(); Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter((function (e) { return n.getAttribute(e, "ng-transition") === t; })).forEach((function (t) { return n.remove(t); })); })); }; }, deps: [cl, Qs, Ce], multi: !0 }], dl = function () { function t() { } return t.init = function () { var e; e = new t, oi = e; }, t.prototype.addToWindow = function (t) { wt.getAngularTestability = function (e, n) { void 0 === n && (n = !0); var o = t.findTestabilityInTree(e, n); if (null == o)
                throw new Error("Could not find testability for element."); return o; }, wt.getAllAngularTestabilities = function () { return t.getAllTestabilities(); }, wt.getAllAngularRootElements = function () { return t.getAllRootElements(); }, wt.frameworkStabilizers || (wt.frameworkStabilizers = []), wt.frameworkStabilizers.push((function (t) { var e = wt.getAllAngularTestabilities(), n = e.length, o = !1, r = function (e) { o = o || e, 0 == --n && t(o); }; e.forEach((function (t) { t.whenStable(r); })); })); }, t.prototype.findTestabilityInTree = function (t, e, n) { if (null == e)
                return null; var o = t.getTestability(e); return null != o ? o : n ? Js().isShadowRoot(e) ? this.findTestabilityInTree(t, Js().getHost(e), !0) : this.findTestabilityInTree(t, Js().parentElement(e), !0) : null; }, t; }();
            function hl(t, e) { "undefined" != typeof COMPILED && COMPILED || ((wt.ng = wt.ng || {})[t] = e); }
            var fl = function () { return { ApplicationRef: ci, NgZone: $r }; }();
            function ml(t) { return gi(t); }
            var gl = new kt("EventManagerPlugins"), yl = function () { function t(t, e) { var n = this; this._zone = e, this._eventNameToPlugin = new Map, t.forEach((function (t) { return t.manager = n; })), this._plugins = t.slice().reverse(); } return t.prototype.addEventListener = function (t, e, n) { return this._findPluginFor(e).addEventListener(t, e, n); }, t.prototype.addGlobalEventListener = function (t, e, n) { return this._findPluginFor(e).addGlobalEventListener(t, e, n); }, t.prototype.getZone = function () { return this._zone; }, t.prototype._findPluginFor = function (t) { var e = this._eventNameToPlugin.get(t); if (e)
                return e; for (var n = this._plugins, o = 0; o < n.length; o++) {
                var r = n[o];
                if (r.supports(t))
                    return this._eventNameToPlugin.set(t, r), r;
            } throw new Error("No event manager plugin found for event " + t); }, t; }(), bl = function () { function t(t) { this._doc = t; } return t.prototype.addGlobalEventListener = function (t, e, n) { var o = Js().getGlobalEventTarget(this._doc, t); if (!o)
                throw new Error("Unsupported event target " + o + " for event " + e); return this.addEventListener(o, e, n); }, t; }(), vl = function () { function t() { this._stylesSet = new Set; } return t.prototype.addStyles = function (t) { var e = this, n = new Set; t.forEach((function (t) { e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t)); })), this.onStylesAdded(n); }, t.prototype.onStylesAdded = function (t) { }, t.prototype.getAllStyles = function () { return Array.from(this._stylesSet); }, t; }(), _l = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n; } return Object(o.__extends)(e, t), e.prototype._addStylesToHost = function (t, e) { var n = this; t.forEach((function (t) { var o = n._doc.createElement("style"); o.textContent = t, n._styleNodes.add(e.appendChild(o)); })); }, e.prototype.addHost = function (t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t); }, e.prototype.removeHost = function (t) { this._hostNodes.delete(t); }, e.prototype.onStylesAdded = function (t) { var e = this; this._hostNodes.forEach((function (n) { return e._addStylesToHost(t, n); })); }, e.prototype.ngOnDestroy = function () { this._styleNodes.forEach((function (t) { return Js().remove(t); })); }, e; }(vl), wl = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }, kl = /%COMP%/g;
            function Cl(t, e, n) { for (var o = 0; o < e.length; o++) {
                var r = e[o];
                Array.isArray(r) ? Cl(t, r, n) : (r = r.replace(kl, t), n.push(r));
            } return n; }
            function xl(t) { return function (e) { !1 === t(e) && (e.preventDefault(), e.returnValue = !1); }; }
            var El = function () { function t(t, e, n) { this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Sl(t); } return t.prototype.createRenderer = function (t, e) { if (!t || !e)
                return this.defaultRenderer; switch (e.encapsulation) {
                case jt.Emulated:
                    var n = this.rendererByCompId.get(e.id);
                    return n || (n = new Dl(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                case jt.Native:
                case jt.ShadowDom: return new Al(this.eventManager, this.sharedStylesHost, t, e);
                default:
                    if (!this.rendererByCompId.has(e.id)) {
                        var o = Cl(e.id, e.styles, []);
                        this.sharedStylesHost.addStyles(o), this.rendererByCompId.set(e.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
            } }, t.prototype.begin = function () { }, t.prototype.end = function () { }, t; }(), Sl = function () { function t(t) { this.eventManager = t, this.data = Object.create(null); } return t.prototype.destroy = function () { }, t.prototype.createElement = function (t, e) { return e ? document.createElementNS(wl[e] || e, t) : document.createElement(t); }, t.prototype.createComment = function (t) { return document.createComment(t); }, t.prototype.createText = function (t) { return document.createTextNode(t); }, t.prototype.appendChild = function (t, e) { t.appendChild(e); }, t.prototype.insertBefore = function (t, e, n) { t && t.insertBefore(e, n); }, t.prototype.removeChild = function (t, e) { t && t.removeChild(e); }, t.prototype.selectRootElement = function (t, e) { var n = "string" == typeof t ? document.querySelector(t) : t; if (!n)
                throw new Error('The selector "' + t + '" did not match any elements'); return e || (n.textContent = ""), n; }, t.prototype.parentNode = function (t) { return t.parentNode; }, t.prototype.nextSibling = function (t) { return t.nextSibling; }, t.prototype.setAttribute = function (t, e, n, o) { if (o) {
                e = o + ":" + e;
                var r = wl[o];
                r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n);
            }
            else
                t.setAttribute(e, n); }, t.prototype.removeAttribute = function (t, e, n) { if (n) {
                var o = wl[n];
                o ? t.removeAttributeNS(o, e) : t.removeAttribute(n + ":" + e);
            }
            else
                t.removeAttribute(e); }, t.prototype.addClass = function (t, e) { t.classList.add(e); }, t.prototype.removeClass = function (t, e) { t.classList.remove(e); }, t.prototype.setStyle = function (t, e, n, o) { o & tn.DashCase ? t.style.setProperty(e, n, o & tn.Important ? "important" : "") : t.style[e] = n; }, t.prototype.removeStyle = function (t, e, n) { n & tn.DashCase ? t.style.removeProperty(e) : t.style[e] = ""; }, t.prototype.setProperty = function (t, e, n) { Ol(e, "property"), t[e] = n; }, t.prototype.setValue = function (t, e) { t.nodeValue = e; }, t.prototype.listen = function (t, e, n) { return Ol(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, xl(n)) : this.eventManager.addEventListener(t, e, xl(n)); }, t; }(), Tl = function () { return "@".charCodeAt(0); }();
            function Ol(t, e) { if (t.charCodeAt(0) === Tl)
                throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'); }
            var Dl = function (t) { function e(e, n, o, r) { var i = t.call(this, e) || this; i.component = o; var a = Cl(r + "-" + o.id, o.styles, []); return n.addStyles(a), i.contentAttr = "_ngcontent-%COMP%".replace(kl, r + "-" + o.id), i.hostAttr = function (t) { return "_nghost-%COMP%".replace(kl, t); }(r + "-" + o.id), i; } return Object(o.__extends)(e, t), e.prototype.applyToHost = function (e) { t.prototype.setAttribute.call(this, e, this.hostAttr, ""); }, e.prototype.createElement = function (e, n) { var o = t.prototype.createElement.call(this, e, n); return t.prototype.setAttribute.call(this, o, this.contentAttr, ""), o; }, e; }(Sl), Al = function (t) { function e(e, n, o, r) { var i = t.call(this, e) || this; i.sharedStylesHost = n, i.hostEl = o, i.component = r, i.shadowRoot = r.encapsulation === jt.ShadowDom ? o.attachShadow({ mode: "open" }) : o.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot); for (var a = Cl(r.id, r.styles, []), s = 0; s < a.length; s++) {
                var l = document.createElement("style");
                l.textContent = a[s], i.shadowRoot.appendChild(l);
            } return i; } return Object(o.__extends)(e, t), e.prototype.nodeOrShadowRoot = function (t) { return t === this.hostEl ? this.shadowRoot : t; }, e.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); }, e.prototype.appendChild = function (e, n) { return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n); }, e.prototype.insertBefore = function (e, n, o) { return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, o); }, e.prototype.removeChild = function (e, n) { return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n); }, e.prototype.parentNode = function (e) { return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))); }, e; }(Sl), Il = function () { return "undefined" != typeof Zone && Zone.__symbol__ || function (t) { return "__zone_symbol__" + t; }; }(), Pl = Il("addEventListener"), Nl = Il("removeEventListener"), Fl = {}, Rl = "__zone_symbol__propagationStopped", Ml = function () { var t = "undefined" != typeof Zone && Zone[Il("BLACK_LISTED_EVENTS")]; if (t) {
                var e = {};
                return t.forEach((function (t) { e[t] = t; })), e;
            } }(), jl = function (t) { return !!Ml && Ml.hasOwnProperty(t); }, Bl = function (t) { var e = Fl[t.type]; if (e) {
                var n = this[e];
                if (n) {
                    var o = [t];
                    if (1 === n.length)
                        return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, o) : a.handler.apply(this, o);
                    for (var r = n.slice(), i = 0; i < r.length && !0 !== t[Rl]; i++) {
                        var a;
                        (a = r[i]).zone !== Zone.current ? a.zone.run(a.handler, this, o) : a.handler.apply(this, o);
                    }
                }
            } }, Vl = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; return r.ngZone = n, o && function (t) { return "server" === t; }(o) || r.patchEvent(), r; } return Object(o.__extends)(e, t), e.prototype.patchEvent = function () { if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                Event.prototype.stopImmediatePropagation = function () { this && (this[Rl] = !0), t && t.apply(this, arguments); };
            } }, e.prototype.supports = function (t) { return !0; }, e.prototype.addEventListener = function (t, e, n) { var o = this, r = n; if (!t[Pl] || $r.isInAngularZone() && !jl(e))
                t.addEventListener(e, r, !1);
            else {
                var i = Fl[e];
                i || (i = Fl[e] = Il("ANGULAR" + e + "FALSE"));
                var a = t[i], s = a && a.length > 0;
                a || (a = t[i] = []);
                var l = jl(e) ? Zone.root : Zone.current;
                if (0 === a.length)
                    a.push({ zone: l, handler: r });
                else {
                    for (var u = !1, c = 0; c < a.length; c++)
                        if (a[c].handler === r) {
                            u = !0;
                            break;
                        }
                    u || a.push({ zone: l, handler: r });
                }
                s || t[Pl](e, Bl, !1);
            } return function () { return o.removeEventListener(t, e, r); }; }, e.prototype.removeEventListener = function (t, e, n) { var o = t[Nl]; if (!o)
                return t.removeEventListener.apply(t, [e, n, !1]); var r = Fl[e], i = r && t[r]; if (!i)
                return t.removeEventListener.apply(t, [e, n, !1]); for (var a = !1, s = 0; s < i.length; s++)
                if (i[s].handler === n) {
                    a = !0, i.splice(s, 1);
                    break;
                } a ? 0 === i.length && o.apply(t, [e, Bl, !1]) : t.removeEventListener.apply(t, [e, n, !1]); }, e; }(bl), Ll = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 }, Hl = new kt("HammerGestureConfig"), ql = new kt("HammerLoader"), zl = function () { function t() { this.events = [], this.overrides = {}; } return t.prototype.buildHammer = function (t) { var e = new Hammer(t, this.options); for (var n in e.get("pinch").set({ enable: !0 }), e.get("rotate").set({ enable: !0 }), this.overrides)
                e.get(n).set(this.overrides[n]); return e; }, t; }(), Ul = function (t) { function e(e, n, o, r) { var i = t.call(this, e) || this; return i._config = n, i.console = o, i.loader = r, i; } return Object(o.__extends)(e, t), e.prototype.supports = function (t) { return !(!Ll.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1)); }, e.prototype.addEventListener = function (t, e, n) { var o = this, r = this.manager.getZone(); if (e = e.toLowerCase(), !window.Hammer && this.loader) {
                var i = !1, a = function () { i = !0; };
                return this.loader().then((function () { if (!window.Hammer)
                    return o.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void (a = function () { }); i || (a = o.addEventListener(t, e, n)); })).catch((function () { o.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), a = function () { }; })), function () { a(); };
            } return r.runOutsideAngular((function () { var i = o._config.buildHammer(t), a = function (t) { r.runGuarded((function () { n(t); })); }; return i.on(e, a), function () { i.off(e, a), "function" == typeof i.destroy && i.destroy(); }; })); }, e.prototype.isCustomEvent = function (t) { return this._config.events.indexOf(t) > -1; }, e; }(bl), Wl = ["alt", "control", "meta", "shift"], Kl = { alt: function (t) { return t.altKey; }, control: function (t) { return t.ctrlKey; }, meta: function (t) { return t.metaKey; }, shift: function (t) { return t.shiftKey; } }, $l = function (t) { function e(e) { return t.call(this, e) || this; } var n; return Object(o.__extends)(e, t), n = e, e.prototype.supports = function (t) { return null != n.parseEventName(t); }, e.prototype.addEventListener = function (t, e, o) { var r = n.parseEventName(e), i = n.eventCallback(r.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular((function () { return Js().onAndCancel(t, r.domEventName, i); })); }, e.parseEventName = function (t) { var e = t.toLowerCase().split("."), o = e.shift(); if (0 === e.length || "keydown" !== o && "keyup" !== o)
                return null; var r = n._normalizeKey(e.pop()), i = ""; if (Wl.forEach((function (t) { var n = e.indexOf(t); n > -1 && (e.splice(n, 1), i += t + "."); })), i += r, 0 != e.length || 0 === r.length)
                return null; var a = {}; return a.domEventName = o, a.fullKey = i, a; }, e.getEventFullKey = function (t) { var e = "", n = Js().getEventKey(t); return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Wl.forEach((function (o) { o != n && (0, Kl[o])(t) && (e += o + "."); })), e += n; }, e.eventCallback = function (t, e, o) { return function (r) { n.getEventFullKey(r) === t && o.runGuarded((function () { return e(r); })); }; }, e._normalizeKey = function (t) { switch (t) {
                case "esc": return "escape";
                default: return t;
            } }, e; }(bl), Gl = function () { return function () { }; }(), Zl = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n; } return Object(o.__extends)(e, t), e.prototype.sanitize = function (t, e) { if (null == e)
                return null; switch (t) {
                case he.NONE: return e;
                case he.HTML: return e instanceof Yl ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function (t, e) { var n = null; try {
                    Xt = Xt || new Kt(t);
                    var o = e ? String(e) : "";
                    n = Xt.getInertBodyElement(o);
                    var r = 5, i = o;
                    do {
                        if (0 === r)
                            throw new Error("Failed to sanitize html because the input is unstable");
                        r--, o = i, i = n.innerHTML, n = Xt.getInertBodyElement(o);
                    } while (o !== i);
                    var a = new le, s = a.sanitizeChildren(de(n) || n);
                    return Wt() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), s;
                }
                finally {
                    if (n)
                        for (var l = de(n) || n; l.firstChild;)
                            l.removeChild(l.firstChild);
                } }(this._doc, String(e)));
                case he.STYLE: return e instanceof Xl ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function (t) { if (!(t = String(t).trim()))
                    return ""; var e = t.match(ge); return e && Zt(e[1]) === e[1] || t.match(me) && function (t) { for (var e = !0, n = !0, o = 0; o < t.length; o++) {
                    var r = t.charAt(o);
                    "'" === r && n ? e = !e : '"' === r && e && (n = !n);
                } return e && n; }(t) ? t : (Wt() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe"); }(e));
                case he.SCRIPT:
                    if (e instanceof Jl)
                        return e.changingThisBreaksApplicationSecurity;
                    throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                case he.URL: return e instanceof eu || e instanceof tu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), Zt(String(e)));
                case he.RESOURCE_URL:
                    if (e instanceof eu)
                        return e.changingThisBreaksApplicationSecurity;
                    throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                default: throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)");
            } }, e.prototype.checkNotSafeValue = function (t, e) { if (t instanceof Ql)
                throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)"); }, e.prototype.bypassSecurityTrustHtml = function (t) { return new Yl(t); }, e.prototype.bypassSecurityTrustStyle = function (t) { return new Xl(t); }, e.prototype.bypassSecurityTrustScript = function (t) { return new Jl(t); }, e.prototype.bypassSecurityTrustUrl = function (t) { return new tu(t); }, e.prototype.bypassSecurityTrustResourceUrl = function (t) { return new eu(t); }, e; }(Gl), Ql = function () { function t(t) { this.changingThisBreaksApplicationSecurity = t; } return t.prototype.toString = function () { return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"; }, t; }(), Yl = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getTypeName = function () { return "HTML"; }, e; }(Ql), Xl = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getTypeName = function () { return "Style"; }, e; }(Ql), Jl = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getTypeName = function () { return "Script"; }, e; }(Ql), tu = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getTypeName = function () { return "URL"; }, e; }(Ql), eu = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getTypeName = function () { return "ResourceURL"; }, e; }(Ql), nu = ai(bi, "browser", [{ provide: Tr, useValue: "browser" }, { provide: Sr, useValue: function () { al.makeCurrent(), dl.init(); }, multi: !0 }, { provide: Ja, useClass: ul, deps: [Qs] }, { provide: Qs, useFactory: function () { return document; }, deps: [] }]);
            function ou() { return new qt; }
            var ru = function () { function t(t) { if (t)
                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."); } var e; return e = t, t.withServerTransition = function (t) { return { ngModule: e, providers: [{ provide: Cr, useValue: t.appId }, { provide: cl, useExisting: Cr }, pl] }; }, t; }();
            function iu(t, e) { return new _((function (n) { var o = t.length; if (0 !== o)
                for (var r = new Array(o), i = 0, a = 0, s = function (s) { var l = H(t[s]), u = !1; n.add(l.subscribe({ next: function (t) { u || (u = !0, a++), r[s] = t; }, error: function (t) { return n.error(t); }, complete: function () { ++i !== o && u || (a === o && n.next(e ? e.reduce((function (t, e, n) { return t[e] = r[n], t; }), {}) : r), n.complete()); } })); }, l = 0; l < o; l++)
                    s(l);
            else
                n.complete(); })); }
            "undefined" != typeof window && window;
            var au = new kt("NgValueAccessor"), su = function () { function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function (t) { }, this.onTouched = function () { }; } return t.prototype.writeValue = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "checked", t); }, t.prototype.registerOnChange = function (t) { this.onChange = t; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t; }(), lu = new kt("CompositionEventMode"), uu = function () { function t(t, e, n) { var o; this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = function (t) { }, this.onTouched = function () { }, this._composing = !1, null == this._compositionMode && (this._compositionMode = (o = Js() ? Js().getUserAgent() : "", !/android (\d+)/.test(o.toLowerCase()))); } return t.prototype.writeValue = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t); }, t.prototype.registerOnChange = function (t) { this.onChange = t; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t.prototype._handleInput = function (t) { (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t); }, t.prototype._compositionStart = function () { this._composing = !0; }, t.prototype._compositionEnd = function (t) { this._composing = !1, this._compositionMode && this.onChange(t); }, t; }(), cu = function () { function t() { } return Object.defineProperty(t.prototype, "value", { get: function () { return this.control ? this.control.value : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function () { return this.control ? this.control.valid : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function () { return this.control ? this.control.invalid : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function () { return this.control ? this.control.pending : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function () { return this.control ? this.control.disabled : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function () { return this.control ? this.control.enabled : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errors", { get: function () { return this.control ? this.control.errors : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pristine", { get: function () { return this.control ? this.control.pristine : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function () { return this.control ? this.control.dirty : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "touched", { get: function () { return this.control ? this.control.touched : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "status", { get: function () { return this.control ? this.control.status : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function () { return this.control ? this.control.untouched : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "statusChanges", { get: function () { return this.control ? this.control.statusChanges : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valueChanges", { get: function () { return this.control ? this.control.valueChanges : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "path", { get: function () { return null; }, enumerable: !0, configurable: !0 }), t.prototype.reset = function (t) { void 0 === t && (t = void 0), this.control && this.control.reset(t); }, t.prototype.hasError = function (t, e) { return !!this.control && this.control.hasError(t, e); }, t.prototype.getError = function (t, e) { return this.control ? this.control.getError(t, e) : null; }, t; }(), pu = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "formDirective", { get: function () { return null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function () { return null; }, enumerable: !0, configurable: !0 }), e; }(cu);
            function du() { throw new Error("unimplemented"); }
            var hu = function (t) { function e() { var e = null !== t && t.apply(this, arguments) || this; return e._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "validator", { get: function () { return du(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function () { return du(); }, enumerable: !0, configurable: !0 }), e; }(cu), fu = function () { function t(t) { this._cd = t; } return Object.defineProperty(t.prototype, "ngClassUntouched", { get: function () { return !!this._cd.control && this._cd.control.untouched; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassTouched", { get: function () { return !!this._cd.control && this._cd.control.touched; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPristine", { get: function () { return !!this._cd.control && this._cd.control.pristine; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassDirty", { get: function () { return !!this._cd.control && this._cd.control.dirty; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassValid", { get: function () { return !!this._cd.control && this._cd.control.valid; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassInvalid", { get: function () { return !!this._cd.control && this._cd.control.invalid; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPending", { get: function () { return !!this._cd.control && this._cd.control.pending; }, enumerable: !0, configurable: !0 }), t; }(), mu = function (t) { function e(e) { return t.call(this, e) || this; } return Object(o.__extends)(e, t), e; }(fu), gu = function (t) { function e(e) { return t.call(this, e) || this; } return Object(o.__extends)(e, t), e; }(fu);
            function yu(t) { return null == t || 0 === t.length; }
            var bu = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, vu = function () { function t() { } return t.min = function (t) { return function (e) { if (yu(e.value) || yu(t))
                return null; var n = parseFloat(e.value); return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null; }; }, t.max = function (t) { return function (e) { if (yu(e.value) || yu(t))
                return null; var n = parseFloat(e.value); return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null; }; }, t.required = function (t) { return yu(t.value) ? { required: !0 } : null; }, t.requiredTrue = function (t) { return !0 === t.value ? null : { required: !0 }; }, t.email = function (t) { return yu(t.value) ? null : bu.test(t.value) ? null : { email: !0 }; }, t.minLength = function (t) { return function (e) { if (yu(e.value))
                return null; var n = e.value ? e.value.length : 0; return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null; }; }, t.maxLength = function (t) { return function (e) { var n = e.value ? e.value.length : 0; return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null; }; }, t.pattern = function (e) { return e ? ("string" == typeof e ? (o = "", "^" !== e.charAt(0) && (o += "^"), o += e, "$" !== e.charAt(e.length - 1) && (o += "$"), n = new RegExp(o)) : (o = e.toString(), n = e), function (t) { if (yu(t.value))
                return null; var e = t.value; return n.test(e) ? null : { pattern: { requiredPattern: o, actualValue: e } }; }) : t.nullValidator; var n, o; }, t.nullValidator = function (t) { return null; }, t.compose = function (t) { if (!t)
                return null; var e = t.filter(_u); return 0 == e.length ? null : function (t) { return ku(function (t, e) { return e.map((function (e) { return e(t); })); }(t, e)); }; }, t.composeAsync = function (t) { if (!t)
                return null; var e = t.filter(_u); return 0 == e.length ? null : function (t) { return function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; if (1 === t.length) {
                var n = t[0];
                if (r(n))
                    return iu(n, null);
                if (i(n) && Object.getPrototypeOf(n) === Object.prototype) {
                    var o = Object.keys(n);
                    return iu(o.map((function (t) { return n[t]; })), o);
                }
            } if ("function" == typeof t[t.length - 1]) {
                var a = t.pop();
                return iu(t = 1 === t.length && r(t[0]) ? t[0] : t, null).pipe(j((function (t) { return a.apply(void 0, t); })));
            } return iu(t, null); }(function (t, e) { return e.map((function (e) { return e(t); })); }(t, e).map(wu)).pipe(j(ku)); }; }, t; }();
            function _u(t) { return null != t; }
            function wu(t) { var e = Be(t) ? H(t) : t; if (!Ve(e))
                throw new Error("Expected validator to return Promise or Observable."); return e; }
            function ku(t) { var e = t.reduce((function (t, e) { return null != e ? Object(o.__assign)({}, t, e) : t; }), {}); return 0 === Object.keys(e).length ? null : e; }
            function Cu(t) { return t.validate ? function (e) { return t.validate(e); } : t; }
            function xu(t) { return t.validate ? function (e) { return t.validate(e); } : t; }
            var Eu = function () { function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function (t) { }, this.onTouched = function () { }; } return t.prototype.writeValue = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t); }, t.prototype.registerOnChange = function (t) { this.onChange = function (e) { t("" == e ? null : parseFloat(e)); }; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t; }(), Su = function () { function t() { this._accessors = []; } return t.prototype.add = function (t, e) { this._accessors.push([t, e]); }, t.prototype.remove = function (t) { for (var e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t)
                    return void this._accessors.splice(e, 1); }, t.prototype.select = function (t) { var e = this; this._accessors.forEach((function (n) { e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value); })); }, t.prototype._isSameGroup = function (t, e) { return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name; }, t; }(), Tu = function () { function t(t, e, n, o) { this._renderer = t, this._elementRef = e, this._registry = n, this._injector = o, this.onChange = function () { }, this.onTouched = function () { }; } return t.prototype.ngOnInit = function () { this._control = this._injector.get(hu), this._checkName(), this._registry.add(this._control, this); }, t.prototype.ngOnDestroy = function () { this._registry.remove(this); }, t.prototype.writeValue = function (t) { this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state); }, t.prototype.registerOnChange = function (t) { var e = this; this._fn = t, this.onChange = function () { t(e.value), e._registry.select(e); }; }, t.prototype.fireUncheck = function (t) { this.writeValue(t); }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t.prototype._checkName = function () { this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName); }, t.prototype._throwNameError = function () { throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '); }, t; }(), Ou = function () { function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function (t) { }, this.onTouched = function () { }; } return t.prototype.writeValue = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t)); }, t.prototype.registerOnChange = function (t) { this.onChange = function (e) { t("" == e ? null : parseFloat(e)); }; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t; }(), Du = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });', Au = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
            function Iu(t, e) { return null == t ? "" + e : (e && "object" == typeof e && (e = "Object"), (t + ": " + e).slice(0, 50)); }
            var Pu = function () { function t(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) { }, this.onTouched = function () { }, this._compareWith = Ne; } return Object.defineProperty(t.prototype, "compareWith", { set: function (t) { if ("function" != typeof t)
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(t)); this._compareWith = t; }, enumerable: !0, configurable: !0 }), t.prototype.writeValue = function (t) { this.value = t; var e = this._getOptionId(t); null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1); var n = Iu(e, t); this._renderer.setProperty(this._elementRef.nativeElement, "value", n); }, t.prototype.registerOnChange = function (t) { var e = this; this.onChange = function (n) { e.value = e._getOptionValue(n), t(e.value); }; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t.prototype._registerOption = function () { return (this._idCounter++).toString(); }, t.prototype._getOptionId = function (t) { var e, n; try {
                for (var r = Object(o.__values)(Array.from(this._optionMap.keys())), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value;
                    if (this._compareWith(this._optionMap.get(a), t))
                        return a;
                }
            }
            catch (s) {
                e = { error: s };
            }
            finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } return null; }, t.prototype._getOptionValue = function (t) { var e = function (t) { return t.split(":")[0]; }(t); return this._optionMap.has(e) ? this._optionMap.get(e) : t; }, t; }(), Nu = function () { function t(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption()); } return Object.defineProperty(t.prototype, "ngValue", { set: function (t) { null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(Iu(this.id, t)), this._select.writeValue(this._select.value)); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "value", { set: function (t) { this._setElementValue(t), this._select && this._select.writeValue(this._select.value); }, enumerable: !0, configurable: !0 }), t.prototype._setElementValue = function (t) { this._renderer.setProperty(this._element.nativeElement, "value", t); }, t.prototype.ngOnDestroy = function () { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)); }, t; }();
            function Fu(t, e) { return null == t ? "" + e : ("string" == typeof e && (e = "'" + e + "'"), e && "object" == typeof e && (e = "Object"), (t + ": " + e).slice(0, 50)); }
            var Ru = function () { function t(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) { }, this.onTouched = function () { }, this._compareWith = Ne; } return Object.defineProperty(t.prototype, "compareWith", { set: function (t) { if ("function" != typeof t)
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(t)); this._compareWith = t; }, enumerable: !0, configurable: !0 }), t.prototype.writeValue = function (t) { var e, n = this; if (this.value = t, Array.isArray(t)) {
                var o = t.map((function (t) { return n._getOptionId(t); }));
                e = function (t, e) { t._setSelected(o.indexOf(e.toString()) > -1); };
            }
            else
                e = function (t, e) { t._setSelected(!1); }; this._optionMap.forEach(e); }, t.prototype.registerOnChange = function (t) { var e = this; this.onChange = function (n) { var o = []; if (n.hasOwnProperty("selectedOptions"))
                for (var r = n.selectedOptions, i = 0; i < r.length; i++) {
                    var a = r.item(i), s = e._getOptionValue(a.value);
                    o.push(s);
                }
            else
                for (r = n.options, i = 0; i < r.length; i++)
                    (a = r.item(i)).selected && (s = e._getOptionValue(a.value), o.push(s)); e.value = o, t(o); }; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t); }, t.prototype._registerOption = function (t) { var e = (this._idCounter++).toString(); return this._optionMap.set(e, t), e; }, t.prototype._getOptionId = function (t) { var e, n; try {
                for (var r = Object(o.__values)(Array.from(this._optionMap.keys())), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value;
                    if (this._compareWith(this._optionMap.get(a)._value, t))
                        return a;
                }
            }
            catch (s) {
                e = { error: s };
            }
            finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } return null; }, t.prototype._getOptionValue = function (t) { var e = function (t) { return t.split(":")[0]; }(t); return this._optionMap.has(e) ? this._optionMap.get(e)._value : t; }, t; }(), Mu = function () { function t(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this)); } return Object.defineProperty(t.prototype, "ngValue", { set: function (t) { null != this._select && (this._value = t, this._setElementValue(Fu(this.id, t)), this._select.writeValue(this._select.value)); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "value", { set: function (t) { this._select ? (this._value = t, this._setElementValue(Fu(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t); }, enumerable: !0, configurable: !0 }), t.prototype._setElementValue = function (t) { this._renderer.setProperty(this._element.nativeElement, "value", t); }, t.prototype._setSelected = function (t) { this._renderer.setProperty(this._element.nativeElement, "selected", t); }, t.prototype.ngOnDestroy = function () { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)); }, t; }();
            function ju(t, e) { return Object(o.__spread)(e.path, [t]); }
            function Bu(t, e) { t || Lu(e, "Cannot find control with"), e.valueAccessor || Lu(e, "No value accessor for form control with"), t.validator = vu.compose([t.validator, e.validator]), t.asyncValidator = vu.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value), function (t, e) { e.valueAccessor.registerOnChange((function (n) { t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && Vu(t, e); })); }(t, e), function (t, e) { t.registerOnChange((function (t, n) { e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t); })); }(t, e), function (t, e) { e.valueAccessor.registerOnTouched((function () { t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && Vu(t, e), "submit" !== t.updateOn && t.markAsTouched(); })); }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange((function (t) { e.valueAccessor.setDisabledState(t); })), e._rawValidators.forEach((function (e) { e.registerOnValidatorChange && e.registerOnValidatorChange((function () { return t.updateValueAndValidity(); })); })), e._rawAsyncValidators.forEach((function (e) { e.registerOnValidatorChange && e.registerOnValidatorChange((function () { return t.updateValueAndValidity(); })); })); }
            function Vu(t, e) { t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1; }
            function Lu(t, e) { var n; throw n = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute", new Error(e + " " + n); }
            function Hu(t) { return null != t ? vu.compose(t.map(Cu)) : null; }
            function qu(t) { return null != t ? vu.composeAsync(t.map(xu)) : null; }
            var zu = [su, Ou, Eu, Pu, Ru, Tu];
            function Uu(t) { var e = Ku(t) ? t.validators : t; return Array.isArray(e) ? Hu(e) : e || null; }
            function Wu(t, e) { var n = Ku(e) ? e.asyncValidators : t; return Array.isArray(n) ? qu(n) : n || null; }
            function Ku(t) { return null != t && !Array.isArray(t) && "object" == typeof t; }
            var $u = function () { function t(t, e) { this.validator = t, this.asyncValidator = e, this._onCollectionChange = function () { }, this.pristine = !0, this.touched = !1, this._onDisabledChange = []; } return Object.defineProperty(t.prototype, "parent", { get: function () { return this._parent; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function () { return "VALID" === this.status; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function () { return "INVALID" === this.status; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function () { return "PENDING" == this.status; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function () { return "DISABLED" === this.status; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function () { return "DISABLED" !== this.status; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function () { return !this.pristine; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function () { return !this.touched; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "updateOn", { get: function () { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"; }, enumerable: !0, configurable: !0 }), t.prototype.setValidators = function (t) { this.validator = Uu(t); }, t.prototype.setAsyncValidators = function (t) { this.asyncValidator = Wu(t); }, t.prototype.clearValidators = function () { this.validator = null; }, t.prototype.clearAsyncValidators = function () { this.asyncValidator = null; }, t.prototype.markAsTouched = function (t) { void 0 === t && (t = {}), this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t); }, t.prototype.markAllAsTouched = function () { this.markAsTouched({ onlySelf: !0 }), this._forEachChild((function (t) { return t.markAllAsTouched(); })); }, t.prototype.markAsUntouched = function (t) { void 0 === t && (t = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild((function (t) { t.markAsUntouched({ onlySelf: !0 }); })), this._parent && !t.onlySelf && this._parent._updateTouched(t); }, t.prototype.markAsDirty = function (t) { void 0 === t && (t = {}), this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t); }, t.prototype.markAsPristine = function (t) { void 0 === t && (t = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild((function (t) { t.markAsPristine({ onlySelf: !0 }); })), this._parent && !t.onlySelf && this._parent._updatePristine(t); }, t.prototype.markAsPending = function (t) { void 0 === t && (t = {}), this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t); }, t.prototype.disable = function (t) { void 0 === t && (t = {}); var e = this._parentMarkedDirty(t.onlySelf); this.status = "DISABLED", this.errors = null, this._forEachChild((function (e) { e.disable(Object(o.__assign)({}, t, { onlySelf: !0 })); })), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object(o.__assign)({}, t, { skipPristineCheck: e })), this._onDisabledChange.forEach((function (t) { return t(!0); })); }, t.prototype.enable = function (t) { void 0 === t && (t = {}); var e = this._parentMarkedDirty(t.onlySelf); this.status = "VALID", this._forEachChild((function (e) { e.enable(Object(o.__assign)({}, t, { onlySelf: !0 })); })), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(Object(o.__assign)({}, t, { skipPristineCheck: e })), this._onDisabledChange.forEach((function (t) { return t(!1); })); }, t.prototype._updateAncestors = function (t) { this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched()); }, t.prototype.setParent = function (t) { this._parent = t; }, t.prototype.updateValueAndValidity = function (t) { void 0 === t && (t = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t); }, t.prototype._updateTreeValidity = function (t) { void 0 === t && (t = { emitEvent: !0 }), this._forEachChild((function (e) { return e._updateTreeValidity(t); })), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }); }, t.prototype._setInitialStatus = function () { this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"; }, t.prototype._runValidator = function () { return this.validator ? this.validator(this) : null; }, t.prototype._runAsyncValidator = function (t) { var e = this; if (this.asyncValidator) {
                this.status = "PENDING";
                var n = wu(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe((function (n) { return e.setErrors(n, { emitEvent: t }); }));
            } }, t.prototype._cancelExistingSubscription = function () { this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe(); }, t.prototype.setErrors = function (t, e) { void 0 === e && (e = {}), this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent); }, t.prototype.get = function (t) { return function (t, e, n) { return null == e ? null : (e instanceof Array || (e = e.split(".")), e instanceof Array && 0 === e.length ? null : e.reduce((function (t, e) { return t instanceof Zu ? t.controls.hasOwnProperty(e) ? t.controls[e] : null : t instanceof Qu && t.at(e) || null; }), t)); }(this, t); }, t.prototype.getError = function (t, e) { var n = e ? this.get(e) : this; return n && n.errors ? n.errors[t] : null; }, t.prototype.hasError = function (t, e) { return !!this.getError(t, e); }, Object.defineProperty(t.prototype, "root", { get: function () { for (var t = this; t._parent;)
                    t = t._parent; return t; }, enumerable: !0, configurable: !0 }), t.prototype._updateControlsErrors = function (t) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t); }, t.prototype._initObservables = function () { this.valueChanges = new br, this.statusChanges = new br; }, t.prototype._calculateStatus = function () { return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"; }, t.prototype._anyControlsHaveStatus = function (t) { return this._anyControls((function (e) { return e.status === t; })); }, t.prototype._anyControlsDirty = function () { return this._anyControls((function (t) { return t.dirty; })); }, t.prototype._anyControlsTouched = function () { return this._anyControls((function (t) { return t.touched; })); }, t.prototype._updatePristine = function (t) { void 0 === t && (t = {}), this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t); }, t.prototype._updateTouched = function (t) { void 0 === t && (t = {}), this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t); }, t.prototype._isBoxedValue = function (t) { return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t; }, t.prototype._registerOnCollectionChange = function (t) { this._onCollectionChange = t; }, t.prototype._setUpdateStrategy = function (t) { Ku(t) && null != t.updateOn && (this._updateOn = t.updateOn); }, t.prototype._parentMarkedDirty = function (t) { return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty(); }, t; }(), Gu = function (t) { function e(e, n, o) { void 0 === e && (e = null); var r = t.call(this, Uu(n), Wu(o, n)) || this; return r._onChange = [], r._applyFormState(e), r._setUpdateStrategy(n), r.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), r._initObservables(), r; } return Object(o.__extends)(e, t), e.prototype.setValue = function (t, e) { var n = this; void 0 === e && (e = {}), this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach((function (t) { return t(n.value, !1 !== e.emitViewToModelChange); })), this.updateValueAndValidity(e); }, e.prototype.patchValue = function (t, e) { void 0 === e && (e = {}), this.setValue(t, e); }, e.prototype.reset = function (t, e) { void 0 === t && (t = null), void 0 === e && (e = {}), this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1; }, e.prototype._updateValue = function () { }, e.prototype._anyControls = function (t) { return !1; }, e.prototype._allControlsDisabled = function () { return this.disabled; }, e.prototype.registerOnChange = function (t) { this._onChange.push(t); }, e.prototype._clearChangeFns = function () { this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function () { }; }, e.prototype.registerOnDisabledChange = function (t) { this._onDisabledChange.push(t); }, e.prototype._forEachChild = function (t) { }, e.prototype._syncPendingControls = function () { return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)); }, e.prototype._applyFormState = function (t) { this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t; }, e; }($u), Zu = function (t) { function e(e, n, o) { var r = t.call(this, Uu(n), Wu(o, n)) || this; return r.controls = e, r._initObservables(), r._setUpdateStrategy(n), r._setUpControls(), r.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), r; } return Object(o.__extends)(e, t), e.prototype.registerControl = function (t, e) { return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e); }, e.prototype.addControl = function (t, e) { this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange(); }, e.prototype.removeControl = function (t) { this.controls[t] && this.controls[t]._registerOnCollectionChange((function () { })), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange(); }, e.prototype.setControl = function (t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange((function () { })), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange(); }, e.prototype.contains = function (t) { return this.controls.hasOwnProperty(t) && this.controls[t].enabled; }, e.prototype.setValue = function (t, e) { var n = this; void 0 === e && (e = {}), this._checkAllValuesPresent(t), Object.keys(t).forEach((function (o) { n._throwIfControlMissing(o), n.controls[o].setValue(t[o], { onlySelf: !0, emitEvent: e.emitEvent }); })), this.updateValueAndValidity(e); }, e.prototype.patchValue = function (t, e) { var n = this; void 0 === e && (e = {}), Object.keys(t).forEach((function (o) { n.controls[o] && n.controls[o].patchValue(t[o], { onlySelf: !0, emitEvent: e.emitEvent }); })), this.updateValueAndValidity(e); }, e.prototype.reset = function (t, e) { void 0 === t && (t = {}), void 0 === e && (e = {}), this._forEachChild((function (n, o) { n.reset(t[o], { onlySelf: !0, emitEvent: e.emitEvent }); })), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e); }, e.prototype.getRawValue = function () { return this._reduceChildren({}, (function (t, e, n) { return t[n] = e instanceof Gu ? e.value : e.getRawValue(), t; })); }, e.prototype._syncPendingControls = function () { var t = this._reduceChildren(!1, (function (t, e) { return !!e._syncPendingControls() || t; })); return t && this.updateValueAndValidity({ onlySelf: !0 }), t; }, e.prototype._throwIfControlMissing = function (t) { if (!Object.keys(this.controls).length)
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.controls[t])
                throw new Error("Cannot find form control with name: " + t + "."); }, e.prototype._forEachChild = function (t) { var e = this; Object.keys(this.controls).forEach((function (n) { return t(e.controls[n], n); })); }, e.prototype._setUpControls = function () { var t = this; this._forEachChild((function (e) { e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange); })); }, e.prototype._updateValue = function () { this.value = this._reduceValue(); }, e.prototype._anyControls = function (t) { var e = this, n = !1; return this._forEachChild((function (o, r) { n = n || e.contains(r) && t(o); })), n; }, e.prototype._reduceValue = function () { var t = this; return this._reduceChildren({}, (function (e, n, o) { return (n.enabled || t.disabled) && (e[o] = n.value), e; })); }, e.prototype._reduceChildren = function (t, e) { var n = t; return this._forEachChild((function (t, o) { n = e(n, t, o); })), n; }, e.prototype._allControlsDisabled = function () { var t, e; try {
                for (var n = Object(o.__values)(Object.keys(this.controls)), r = n.next(); !r.done; r = n.next())
                    if (this.controls[r.value].enabled)
                        return !1;
            }
            catch (i) {
                t = { error: i };
            }
            finally {
                try {
                    r && !r.done && (e = n.return) && e.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return Object.keys(this.controls).length > 0 || this.disabled; }, e.prototype._checkAllValuesPresent = function (t) { this._forEachChild((function (e, n) { if (void 0 === t[n])
                throw new Error("Must supply a value for form control with name: '" + n + "'."); })); }, e; }($u), Qu = function (t) { function e(e, n, o) { var r = t.call(this, Uu(n), Wu(o, n)) || this; return r.controls = e, r._initObservables(), r._setUpdateStrategy(n), r._setUpControls(), r.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), r; } return Object(o.__extends)(e, t), e.prototype.at = function (t) { return this.controls[t]; }, e.prototype.push = function (t) { this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange(); }, e.prototype.insert = function (t, e) { this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity(); }, e.prototype.removeAt = function (t) { this.controls[t] && this.controls[t]._registerOnCollectionChange((function () { })), this.controls.splice(t, 1), this.updateValueAndValidity(); }, e.prototype.setControl = function (t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange((function () { })), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange(); }, Object.defineProperty(e.prototype, "length", { get: function () { return this.controls.length; }, enumerable: !0, configurable: !0 }), e.prototype.setValue = function (t, e) { var n = this; void 0 === e && (e = {}), this._checkAllValuesPresent(t), t.forEach((function (t, o) { n._throwIfControlMissing(o), n.at(o).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent }); })), this.updateValueAndValidity(e); }, e.prototype.patchValue = function (t, e) { var n = this; void 0 === e && (e = {}), t.forEach((function (t, o) { n.at(o) && n.at(o).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent }); })), this.updateValueAndValidity(e); }, e.prototype.reset = function (t, e) { void 0 === t && (t = []), void 0 === e && (e = {}), this._forEachChild((function (n, o) { n.reset(t[o], { onlySelf: !0, emitEvent: e.emitEvent }); })), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e); }, e.prototype.getRawValue = function () { return this.controls.map((function (t) { return t instanceof Gu ? t.value : t.getRawValue(); })); }, e.prototype.clear = function () { this.controls.length < 1 || (this._forEachChild((function (t) { return t._registerOnCollectionChange((function () { })); })), this.controls.splice(0), this.updateValueAndValidity()); }, e.prototype._syncPendingControls = function () { var t = this.controls.reduce((function (t, e) { return !!e._syncPendingControls() || t; }), !1); return t && this.updateValueAndValidity({ onlySelf: !0 }), t; }, e.prototype._throwIfControlMissing = function (t) { if (!this.controls.length)
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.at(t))
                throw new Error("Cannot find form control at index " + t); }, e.prototype._forEachChild = function (t) { this.controls.forEach((function (e, n) { t(e, n); })); }, e.prototype._updateValue = function () { var t = this; this.value = this.controls.filter((function (e) { return e.enabled || t.disabled; })).map((function (t) { return t.value; })); }, e.prototype._anyControls = function (t) { return this.controls.some((function (e) { return e.enabled && t(e); })); }, e.prototype._setUpControls = function () { var t = this; this._forEachChild((function (e) { return t._registerControl(e); })); }, e.prototype._checkAllValuesPresent = function (t) { this._forEachChild((function (e, n) { if (void 0 === t[n])
                throw new Error("Must supply a value for form control at index: " + n + "."); })); }, e.prototype._allControlsDisabled = function () { var t, e; try {
                for (var n = Object(o.__values)(this.controls), r = n.next(); !r.done; r = n.next())
                    if (r.value.enabled)
                        return !1;
            }
            catch (i) {
                t = { error: i };
            }
            finally {
                try {
                    r && !r.done && (e = n.return) && e.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return this.controls.length > 0 || this.disabled; }, e.prototype._registerControl = function (t) { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange); }, e; }($u), Yu = function () { return Promise.resolve(null); }(), Xu = function (t) { function e(e, n) { var o = t.call(this) || this; return o.submitted = !1, o._directives = [], o.ngSubmit = new br, o.form = new Zu({}, Hu(e), qu(n)), o; } return Object(o.__extends)(e, t), e.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); }, Object.defineProperty(e.prototype, "formDirective", { get: function () { return this; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "control", { get: function () { return this.form; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function () { return []; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "controls", { get: function () { return this.form.controls; }, enumerable: !0, configurable: !0 }), e.prototype.addControl = function (t) { var e = this; Yu.then((function () { var n = e._findContainer(t.path); t.control = n.registerControl(t.name, t.control), Bu(t.control, t), t.control.updateValueAndValidity({ emitEvent: !1 }), e._directives.push(t); })); }, e.prototype.getControl = function (t) { return this.form.get(t.path); }, e.prototype.removeControl = function (t) { var e = this; Yu.then((function () { var n, o, r = e._findContainer(t.path); r && r.removeControl(t.name), (o = (n = e._directives).indexOf(t)) > -1 && n.splice(o, 1); })); }, e.prototype.addFormGroup = function (t) { var e = this; Yu.then((function () { var n = e._findContainer(t.path), o = new Zu({}); (function (t, e) { null == t && Lu(e, "Cannot find control with"), t.validator = vu.compose([t.validator, e.validator]), t.asyncValidator = vu.composeAsync([t.asyncValidator, e.asyncValidator]); })(o, t), n.registerControl(t.name, o), o.updateValueAndValidity({ emitEvent: !1 }); })); }, e.prototype.removeFormGroup = function (t) { var e = this; Yu.then((function () { var n = e._findContainer(t.path); n && n.removeControl(t.name); })); }, e.prototype.getFormGroup = function (t) { return this.form.get(t.path); }, e.prototype.updateModel = function (t, e) { var n = this; Yu.then((function () { n.form.get(t.path).setValue(e); })); }, e.prototype.setValue = function (t) { this.control.setValue(t); }, e.prototype.onSubmit = function (t) { return this.submitted = !0, e = this._directives, this.form._syncPendingControls(), e.forEach((function (t) { var e = t.control; "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1); })), this.ngSubmit.emit(t), !1; var e; }, e.prototype.onReset = function () { this.resetForm(); }, e.prototype.resetForm = function (t) { void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1; }, e.prototype._setUpdateStrategy = function () { this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn); }, e.prototype._findContainer = function (t) { return t.pop(), t.length ? this.form.get(t) : this.form; }, e; }(pu), Ju = function () { function t() { } return t.modelParentException = function () { throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '); }, t.formGroupNameException = function () { throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Du + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Au); }, t.missingNameException = function () { throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'); }, t.modelGroupParentException = function () { throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Du + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Au); }, t.ngFormWarning = function () { console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "); }, t; }(), tc = new kt("NgFormSelectorWarning"), ec = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.ngOnInit = function () { this._checkParentType(), this.formDirective.addFormGroup(this); }, e.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeFormGroup(this); }, Object.defineProperty(e.prototype, "control", { get: function () { return this.formDirective.getFormGroup(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function () { return ju(this.name, this._parent); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "formDirective", { get: function () { return this._parent ? this._parent.formDirective : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "validator", { get: function () { return Hu(this._validators); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function () { return qu(this._asyncValidators); }, enumerable: !0, configurable: !0 }), e.prototype._checkParentType = function () { }, e; }(pu), nc = function (t) { function e(e, n, o) { var r = t.call(this) || this; return r._parent = e, r._validators = n, r._asyncValidators = o, r; } var n; return Object(o.__extends)(e, t), n = e, e.prototype._checkParentType = function () { this._parent instanceof n || this._parent instanceof Xu || Ju.modelGroupParentException(); }, e; }(ec), oc = function () { return Promise.resolve(null); }(), rc = function (t) { function e(e, n, o, r) { var i = t.call(this) || this; return i.control = new Gu, i._registered = !1, i.update = new br, i._parent = e, i._rawValidators = n || [], i._rawAsyncValidators = o || [], i.valueAccessor = function (t, e) { if (!e)
                return null; Array.isArray(e) || Lu(t, "Value accessor was not provided as an array for form control with"); var n = void 0, o = void 0, r = void 0; return e.forEach((function (e) { var i; e.constructor === uu ? n = e : (i = e, zu.some((function (t) { return i.constructor === t; })) ? (o && Lu(t, "More than one built-in value accessor matches form control with"), o = e) : (r && Lu(t, "More than one custom value accessor matches form control with"), r = e)); })), r || o || n || (Lu(t, "No valid value accessor for form control with"), null); }(i, r), i; } return Object(o.__extends)(e, t), e.prototype.ngOnChanges = function (t) { this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t), function (t, e) { if (!t.hasOwnProperty("model"))
                return !1; var n = t.model; return !!n.isFirstChange() || !Ne(e, n.currentValue); }(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model); }, e.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); }, Object.defineProperty(e.prototype, "path", { get: function () { return this._parent ? ju(this.name, this._parent) : [this.name]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "formDirective", { get: function () { return this._parent ? this._parent.formDirective : null; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "validator", { get: function () { return Hu(this._rawValidators); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function () { return qu(this._rawAsyncValidators); }, enumerable: !0, configurable: !0 }), e.prototype.viewToModelUpdate = function (t) { this.viewModel = t, this.update.emit(t); }, e.prototype._setUpControl = function () { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0; }, e.prototype._setUpdateStrategy = function () { this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn); }, e.prototype._isStandalone = function () { return !this._parent || !(!this.options || !this.options.standalone); }, e.prototype._setUpStandalone = function () { Bu(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 }); }, e.prototype._checkForErrors = function () { this._isStandalone() || this._checkParentType(), this._checkName(); }, e.prototype._checkParentType = function () { !(this._parent instanceof nc) && this._parent instanceof ec ? Ju.formGroupNameException() : this._parent instanceof nc || this._parent instanceof Xu || Ju.modelParentException(); }, e.prototype._checkName = function () { this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Ju.missingNameException(); }, e.prototype._updateValue = function (t) { var e = this; oc.then((function () { e.control.setValue(t, { emitViewToModelChange: !1 }); })); }, e.prototype._updateDisabled = function (t) { var e = this, n = t.isDisabled.currentValue, o = "" === n || n && "false" !== n; oc.then((function () { o && !e.control.disabled ? e.control.disable() : !o && e.control.disabled && e.control.enable(); })); }, e; }(hu), ic = function () { return function () { }; }(), ac = new kt("NgModelWithFormControlWarning"), sc = function () { return function () { }; }(), lc = function () { function t() { } return t.prototype.group = function (t, e) { void 0 === e && (e = null); var n = this._reduceControls(t), o = null, r = null, i = void 0; return null != e && (function (t) { return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn; }(e) ? (o = null != e.validators ? e.validators : null, r = null != e.asyncValidators ? e.asyncValidators : null, i = null != e.updateOn ? e.updateOn : void 0) : (o = null != e.validator ? e.validator : null, r = null != e.asyncValidator ? e.asyncValidator : null)), new Zu(n, { asyncValidators: r, updateOn: i, validators: o }); }, t.prototype.control = function (t, e, n) { return new Gu(t, e, n); }, t.prototype.array = function (t, e, n) { var o = this, r = t.map((function (t) { return o._createControl(t); })); return new Qu(r, e, n); }, t.prototype._reduceControls = function (t) { var e = this, n = {}; return Object.keys(t).forEach((function (o) { n[o] = e._createControl(t[o]); })), n; }, t.prototype._createControl = function (t) { return t instanceof Gu || t instanceof Zu || t instanceof Qu ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t); }, t; }(), uc = function () { function t() { } var e; return e = t, t.withConfig = function (t) { return { ngModule: e, providers: [{ provide: tc, useValue: t.warnOnDeprecatedNgFormSelector }] }; }, t; }(), cc = function () { function t() { } var e; return e = t, t.withConfig = function (t) { return { ngModule: e, providers: [{ provide: ac, useValue: t.warnOnNgModelWithFormControl }] }; }, t; }(), pc = n("gFX4"), dc = function () { function t() { this.tab = [], this.url = "http://localhost:3000", this.socket = pc(this.url); for (var t = 0; t < 60; t++)
                this.tab.push({ _id: "id " + t, lastname: "lastname" + t, birthname: "birthname" + t, ssn: "ssn" + t, commune: "commune" + t, departement: "departement" + t, pays: "pays" + t, naissance: "naissance" + t }); } return t.prototype.getTab = function () { return this.tab; }, t.prototype.sendMessage = function (t) { this.socket.emit("sending message", t); }, t.prototype.getMessage = function () { var t = this; return _.create((function (e) { t.socket.on("new message", (function (t) { e.next(t); })); })); }, t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }(), hc = function () { function t(t) { this.buildService = t, this.messages = []; } return t.prototype.ngOnInit = function () { var t = this; this.buildService.getMessage().subscribe((function (e) { t.messages.push(e); })); }, t.prototype.sendMessage = function () { this.buildService.sendMessage(this.message), this.message = ""; }, t.prototype.getMessage = function () { }, t; }(), fc = Ln({ encapsulation: 0, styles: [[""]], data: {} });
            function mc(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 1, "div", [["class", "alert alert-primary"], ["role", "alert"]], null, null, null, null, null)), (t()(), Vi(2, null, [" ", " "]))], null, (function (t, e) { t(e, 2, 0, e.context.$implicit.message); })); }
            function gc(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 10, "div", [["class", "container-fluid"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, mc)), Zo(2, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null), (t()(), Ei(3, 0, null, null, 5, "input", [["aria-describedby", "addon-wrapping"], ["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (t, e, n) { var o = !0, r = t.component; return "input" === e && (o = !1 !== Mo(t, 4)._handleInput(n.target.value) && o), "blur" === e && (o = !1 !== Mo(t, 4).onTouched() && o), "compositionstart" === e && (o = !1 !== Mo(t, 4)._compositionStart() && o), "compositionend" === e && (o = !1 !== Mo(t, 4)._compositionEnd(n.target.value) && o), "ngModelChange" === e && (o = !1 !== (r.message = n) && o), o; }), null, null)), Zo(4, 16384, null, 0, uu, [en, Qe, [2, lu]], null, null), Yo(1024, null, au, (function (t) { return [t]; }), [uu]), Zo(6, 671744, null, 0, rc, [[8, null], [8, null], [8, null], [6, au]], { model: [0, "model"] }, { update: "ngModelChange" }), Yo(2048, null, hu, null, [rc]), Zo(8, 16384, null, 0, mu, [[4, hu]], null, null), (t()(), Ei(9, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.sendMessage() && o), o; }), null, null)), (t()(), Vi(-1, null, ["Send "]))], (function (t, e) { var n = e.component; t(e, 2, 0, n.messages), t(e, 6, 0, n.message); }), (function (t, e) { t(e, 3, 0, Mo(e, 8).ngClassUntouched, Mo(e, 8).ngClassTouched, Mo(e, 8).ngClassPristine, Mo(e, 8).ngClassDirty, Mo(e, 8).ngClassValid, Mo(e, 8).ngClassInvalid, Mo(e, 8).ngClassPending); })); }
            function yc(t) { return null != t && "" + t != "false"; }
            function bc(t) { return t instanceof Qe ? t.nativeElement : t; }
            var vc, _c = function () { function t() { this._vertical = !1, this._inset = !1; } return Object.defineProperty(t.prototype, "vertical", { get: function () { return this._vertical; }, set: function (t) { this._vertical = yc(t); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "inset", { get: function () { return this._inset; }, set: function (t) { this._inset = yc(t); }, enumerable: !0, configurable: !0 }), t; }(), wc = function () { return function () { }; }(), kc = new kt("cdk-dir-doc", { providedIn: "root", factory: function () { return At(Qs); } }), Cc = function () { function t(t) { if (this.value = "ltr", this.change = new br, t) {
                var e = (t.body ? t.body.dir : null) || (t.documentElement ? t.documentElement.dir : null);
                this.value = "ltr" === e || "rtl" === e ? e : "ltr";
            } } return t.prototype.ngOnDestroy = function () { this.change.complete(); }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(kc, 8)); }, token: t, providedIn: "root" }), t; }(), xc = function () { return function () { }; }(), Ec = new on("8.2.3");
            try {
                vc = "undefined" != typeof Intl && Intl.v8BreakIterator;
            }
            catch (Nv) {
                vc = !1;
            }
            var Sc, Tc = function () { function t(t) { this._platformId = t, this.isBrowser = this._platformId ? Ys(this._platformId) : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !vc) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT; } return t.ngInjectableDef = ct({ factory: function () { return new t(Dt(Tr, 8)); }, token: t, providedIn: "root" }), t; }(), Oc = function () { return function () { }; }();
            function Dc(t) { return function () { if (null == Sc && "undefined" != typeof window)
                try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { return Sc = !0; } }));
                }
                finally {
                    Sc = Sc || !1;
                } return Sc; }() ? t : !!t.capture; }
            function Ac() { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; var n = t[t.length - 1]; return T(n) ? (t.pop(), L(t, n)) : K(t); }
            var Ic = function () { function t(t, e, n) { this.nextOrObserver = t, this.error = e, this.complete = n; } return t.prototype.call = function (t, e) { return e.subscribe(new Pc(t, this.nextOrObserver, this.error, this.complete)); }, t; }(), Pc = function (t) { function e(e, n, o, r) { var i = t.call(this, e) || this; return i._tapNext = b, i._tapError = b, i._tapComplete = b, i._tapError = o || b, i._tapComplete = r || b, a(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || b, i._tapError = n.error || b, i._tapComplete = n.complete || b), i; } return o.__extends(e, t), e.prototype._next = function (t) { try {
                this._tapNext.call(this._context, t);
            }
            catch (e) {
                return void this.destination.error(e);
            } this.destination.next(t); }, e.prototype._error = function (t) { try {
                this._tapError.call(this._context, t);
            }
            catch (t) {
                return void this.destination.error(t);
            } this.destination.error(t); }, e.prototype._complete = function () { try {
                this._tapComplete.call(this._context);
            }
            catch (t) {
                return void this.destination.error(t);
            } return this.destination.complete(); }, e; }(m), Nc = function (t) { function e(e, n) { var o = t.call(this, e, n) || this; return o.scheduler = e, o.work = n, o.pending = !1, o; } return o.__extends(e, t), e.prototype.schedule = function (t, e) { if (void 0 === e && (e = 0), this.closed)
                return this; this.state = t; var n = this.id, o = this.scheduler; return null != n && (this.id = this.recycleAsyncId(o, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(o, this.id, e), this; }, e.prototype.requestAsyncId = function (t, e, n) { return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n); }, e.prototype.recycleAsyncId = function (t, e, n) { if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending)
                return e; clearInterval(e); }, e.prototype.execute = function (t, e) { if (this.closed)
                return new Error("executing a cancelled action"); this.pending = !1; var n = this._execute(t, e); if (n)
                return n; !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }, e.prototype._execute = function (t, e) { var n = !1, o = void 0; try {
                this.work(t);
            }
            catch (r) {
                n = !0, o = !!r && r || new Error(r);
            } if (n)
                return this.unsubscribe(), o; }, e.prototype._unsubscribe = function () { var t = this.id, e = this.scheduler, n = e.actions, o = n.indexOf(this); this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== o && n.splice(o, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null; }, e; }(function (t) { function e(e, n) { return t.call(this) || this; } return o.__extends(e, t), e.prototype.schedule = function (t, e) { return void 0 === e && (e = 0), this; }, e; }(l)), Fc = function () { function t(e, n) { void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n; } return t.prototype.schedule = function (t, e, n) { return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e); }, t.now = function () { return Date.now(); }, t; }(), Rc = function (t) { function e(n, o) { void 0 === o && (o = Fc.now); var r = t.call(this, n, (function () { return e.delegate && e.delegate !== r ? e.delegate.now() : o(); })) || this; return r.actions = [], r.active = !1, r.scheduled = void 0, r; } return o.__extends(e, t), e.prototype.schedule = function (n, o, r) { return void 0 === o && (o = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, o, r) : t.prototype.schedule.call(this, n, o, r); }, e.prototype.flush = function (t) { var e = this.actions; if (this.active)
                e.push(t);
            else {
                var n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay))
                        break;
                } while (t = e.shift());
                if (this.active = !1, n) {
                    for (; t = e.shift();)
                        t.unsubscribe();
                    throw n;
                }
            } }, e; }(Fc), Mc = new Rc(Nc), jc = function () { function t(t, e) { this.dueTime = t, this.scheduler = e; } return t.prototype.call = function (t, e) { return e.subscribe(new Bc(t, this.dueTime, this.scheduler)); }, t; }(), Bc = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; return r.dueTime = n, r.scheduler = o, r.debouncedSubscription = null, r.lastValue = null, r.hasValue = !1, r; } return o.__extends(e, t), e.prototype._next = function (t) { this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Vc, this.dueTime, this)); }, e.prototype._complete = function () { this.debouncedNext(), this.destination.complete(); }, e.prototype.debouncedNext = function () { if (this.clearDebounce(), this.hasValue) {
                var t = this.lastValue;
                this.lastValue = null, this.hasValue = !1, this.destination.next(t);
            } }, e.prototype.clearDebounce = function () { var t = this.debouncedSubscription; null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null); }, e; }(m);
            function Vc(t) { t.debouncedNext(); }
            function Lc(t, e) { return function (n) { return n.lift(new Hc(t, e)); }; }
            var Hc = function () { function t(t, e) { this.predicate = t, this.thisArg = e; } return t.prototype.call = function (t, e) { return e.subscribe(new qc(t, this.predicate, this.thisArg)); }, t; }(), qc = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; return r.predicate = n, r.thisArg = o, r.count = 0, r; } return o.__extends(e, t), e.prototype._next = function (t) { var e; try {
                e = this.predicate.call(this.thisArg, t, this.count++);
            }
            catch (n) {
                return void this.destination.error(n);
            } e && this.destination.next(t); }, e; }(m), zc = function () { function t() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this; } return t.prototype = Object.create(Error.prototype), t; }(), Uc = new _((function (t) { return t.complete(); }));
            function Wc(t) { return function (e) { return 0 === t ? Uc : e.lift(new Kc(t)); }; }
            var Kc = function () { function t(t) { if (this.total = t, this.total < 0)
                throw new zc; } return t.prototype.call = function (t, e) { return e.subscribe(new $c(t, this.total)); }, t; }(), $c = function (t) { function e(e, n) { var o = t.call(this, e) || this; return o.total = n, o.count = 0, o; } return o.__extends(e, t), e.prototype._next = function (t) { var e = this.total, n = ++this.count; n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe())); }, e; }(m), Gc = Dc({ passive: !0, capture: !0 }), Zc = function () { function t(t, e) { var n = this; this._ngZone = t, this._platform = e, this._origin = null, this._windowFocused = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._documentKeydownListener = function () { n._lastTouchTarget = null, n._setOriginForCurrentEventQueue("keyboard"); }, this._documentMousedownListener = function () { n._lastTouchTarget || n._setOriginForCurrentEventQueue("mouse"); }, this._documentTouchstartListener = function (t) { null != n._touchTimeoutId && clearTimeout(n._touchTimeoutId), n._lastTouchTarget = t.composedPath ? t.composedPath()[0] : t.target, n._touchTimeoutId = setTimeout((function () { return n._lastTouchTarget = null; }), 650); }, this._windowFocusListener = function () { n._windowFocused = !0, n._windowFocusTimeoutId = setTimeout((function () { return n._windowFocused = !1; })); }; } return t.prototype.monitor = function (t, e) { var n = this; if (void 0 === e && (e = !1), !this._platform.isBrowser)
                return Ac(null); var o = bc(t); if (this._elementInfo.has(o)) {
                var r = this._elementInfo.get(o);
                return r.checkChildren = e, r.subject.asObservable();
            } var i = { unlisten: function () { }, checkChildren: e, subject: new E }; this._elementInfo.set(o, i), this._incrementMonitoredElementCount(); var a = function (t) { return n._onFocus(t, o); }, s = function (t) { return n._onBlur(t, o); }; return this._ngZone.runOutsideAngular((function () { o.addEventListener("focus", a, !0), o.addEventListener("blur", s, !0); })), i.unlisten = function () { o.removeEventListener("focus", a, !0), o.removeEventListener("blur", s, !0); }, i.subject.asObservable(); }, t.prototype.stopMonitoring = function (t) { var e = bc(t), n = this._elementInfo.get(e); n && (n.unlisten(), n.subject.complete(), this._setClasses(e), this._elementInfo.delete(e), this._decrementMonitoredElementCount()); }, t.prototype.focusVia = function (t, e, n) { var o = bc(t); this._setOriginForCurrentEventQueue(e), "function" == typeof o.focus && o.focus(n); }, t.prototype.ngOnDestroy = function () { var t = this; this._elementInfo.forEach((function (e, n) { return t.stopMonitoring(n); })); }, t.prototype._toggleClass = function (t, e, n) { n ? t.classList.add(e) : t.classList.remove(e); }, t.prototype._setClasses = function (t, e) { this._elementInfo.get(t) && (this._toggleClass(t, "cdk-focused", !!e), this._toggleClass(t, "cdk-touch-focused", "touch" === e), this._toggleClass(t, "cdk-keyboard-focused", "keyboard" === e), this._toggleClass(t, "cdk-mouse-focused", "mouse" === e), this._toggleClass(t, "cdk-program-focused", "program" === e)); }, t.prototype._setOriginForCurrentEventQueue = function (t) { var e = this; this._ngZone.runOutsideAngular((function () { e._origin = t, e._originTimeoutId = setTimeout((function () { return e._origin = null; }), 1); })); }, t.prototype._wasCausedByTouch = function (t) { var e = t.target; return this._lastTouchTarget instanceof Node && e instanceof Node && (e === this._lastTouchTarget || e.contains(this._lastTouchTarget)); }, t.prototype._onFocus = function (t, e) { var n = this._elementInfo.get(e); if (n && (n.checkChildren || e === t.target)) {
                var o = this._origin;
                o || (o = this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : this._wasCausedByTouch(t) ? "touch" : "program"), this._setClasses(e, o), this._emitOrigin(n.subject, o), this._lastFocusOrigin = o;
            } }, t.prototype._onBlur = function (t, e) { var n = this._elementInfo.get(e); !n || n.checkChildren && t.relatedTarget instanceof Node && e.contains(t.relatedTarget) || (this._setClasses(e), this._emitOrigin(n.subject, null)); }, t.prototype._emitOrigin = function (t, e) { this._ngZone.run((function () { return t.next(e); })); }, t.prototype._incrementMonitoredElementCount = function () { var t = this; 1 == ++this._monitoredElementCount && this._platform.isBrowser && this._ngZone.runOutsideAngular((function () { document.addEventListener("keydown", t._documentKeydownListener, Gc), document.addEventListener("mousedown", t._documentMousedownListener, Gc), document.addEventListener("touchstart", t._documentTouchstartListener, Gc), window.addEventListener("focus", t._windowFocusListener); })); }, t.prototype._decrementMonitoredElementCount = function () { --this._monitoredElementCount || (document.removeEventListener("keydown", this._documentKeydownListener, Gc), document.removeEventListener("mousedown", this._documentMousedownListener, Gc), document.removeEventListener("touchstart", this._documentTouchstartListener, Gc), window.removeEventListener("focus", this._windowFocusListener), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._touchTimeoutId), clearTimeout(this._originTimeoutId)); }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt($r), Dt(Tc)); }, token: t, providedIn: "root" }), t; }(), Qc = new on("8.2.3"), Yc = new kt("mat-sanity-checks", { providedIn: "root", factory: function () { return !0; } }), Xc = function () { function t(t, e) { this._sanityChecksEnabled = t, this._hammerLoader = e, this._hasDoneGlobalChecks = !1, this._hasCheckedHammer = !1, this._document = "object" == typeof document && document ? document : null, this._window = "object" == typeof window && window ? window : null, this._areChecksEnabled() && !this._hasDoneGlobalChecks && (this._checkDoctypeIsDefined(), this._checkThemeIsPresent(), this._checkCdkVersionMatch(), this._hasDoneGlobalChecks = !0); } return t.prototype._areChecksEnabled = function () { return this._sanityChecksEnabled && Wt() && !this._isTestEnv(); }, t.prototype._isTestEnv = function () { var t = this._window; return t && (t.__karma__ || t.jasmine); }, t.prototype._checkDoctypeIsDefined = function () { this._document && !this._document.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected."); }, t.prototype._checkThemeIsPresent = function () { if (this._document && this._document.body && "function" == typeof getComputedStyle) {
                var t = this._document.createElement("div");
                t.classList.add("mat-theme-loaded-marker"), this._document.body.appendChild(t);
                var e = getComputedStyle(t);
                e && "none" !== e.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"), this._document.body.removeChild(t);
            } }, t.prototype._checkCdkVersionMatch = function () { Qc.full !== Ec.full && console.warn("The Angular Material version (" + Qc.full + ") does not match the Angular CDK version (" + Ec.full + ").\nPlease ensure the versions of these two packages exactly match."); }, t.prototype._checkHammerIsAvailable = function () { !this._hasCheckedHammer && this._window && (!this._areChecksEnabled() || this._window.Hammer || this._hammerLoader || console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."), this._hasCheckedHammer = !0); }, t; }();
            function Jc(t) { return function (t) { function e() { for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; var o = t.apply(this, e) || this; return o._disabled = !1, o; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "disabled", { get: function () { return this._disabled; }, set: function (t) { this._disabled = yc(t); }, enumerable: !0, configurable: !0 }), e; }(t); }
            function tp(t, e) { return function (t) { function n() { for (var n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o]; var r = t.apply(this, n) || this; return r.color = e, r; } return Object(o.__extends)(n, t), Object.defineProperty(n.prototype, "color", { get: function () { return this._color; }, set: function (t) { var n = t || e; n !== this._color && (this._color && this._elementRef.nativeElement.classList.remove("mat-" + this._color), n && this._elementRef.nativeElement.classList.add("mat-" + n), this._color = n); }, enumerable: !0, configurable: !0 }), n; }(t); }
            function ep(t) { return function (t) { function e() { for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; var o = t.apply(this, e) || this; return o._disableRipple = !1, o; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "disableRipple", { get: function () { return this._disableRipple; }, set: function (t) { this._disableRipple = yc(t); }, enumerable: !0, configurable: !0 }), e; }(t); }
            function np(t, e) { return void 0 === e && (e = 0), function (t) { function n() { for (var n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o]; var r = t.apply(this, n) || this; return r._tabIndex = e, r; } return Object(o.__extends)(n, t), Object.defineProperty(n.prototype, "tabIndex", { get: function () { return this.disabled ? -1 : this._tabIndex; }, set: function (t) { this._tabIndex = null != t ? t : e; }, enumerable: !0, configurable: !0 }), n; }(t); }
            var op = function () { var t = { FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3 }; return t[t.FADING_IN] = "FADING_IN", t[t.VISIBLE] = "VISIBLE", t[t.FADING_OUT] = "FADING_OUT", t[t.HIDDEN] = "HIDDEN", t; }(), rp = function () { function t(t, e, n) { this._renderer = t, this.element = e, this.config = n, this.state = op.HIDDEN; } return t.prototype.fadeOut = function () { this._renderer.fadeOutRipple(this); }, t; }(), ip = { enterDuration: 450, exitDuration: 400 }, ap = Dc({ passive: !0 }), sp = function () { function t(t, e, n, o) { var r = this; this._target = t, this._ngZone = e, this._isPointerDown = !1, this._triggerEvents = new Map, this._activeRipples = new Set, this._onMousedown = function (t) { var e = function (t) { return 0 === t.buttons; }(t), n = r._lastTouchStartEvent && Date.now() < r._lastTouchStartEvent + 800; r._target.rippleDisabled || e || n || (r._isPointerDown = !0, r.fadeInRipple(t.clientX, t.clientY, r._target.rippleConfig)); }, this._onTouchStart = function (t) { if (!r._target.rippleDisabled) {
                r._lastTouchStartEvent = Date.now(), r._isPointerDown = !0;
                for (var e = t.changedTouches, n = 0; n < e.length; n++)
                    r.fadeInRipple(e[n].clientX, e[n].clientY, r._target.rippleConfig);
            } }, this._onPointerUp = function () { r._isPointerDown && (r._isPointerDown = !1, r._activeRipples.forEach((function (t) { !t.config.persistent && (t.state === op.VISIBLE || t.config.terminateOnPointerUp && t.state === op.FADING_IN) && t.fadeOut(); }))); }, o.isBrowser && (this._containerElement = bc(n), this._triggerEvents.set("mousedown", this._onMousedown).set("mouseup", this._onPointerUp).set("mouseleave", this._onPointerUp).set("touchstart", this._onTouchStart).set("touchend", this._onPointerUp).set("touchcancel", this._onPointerUp)); } return t.prototype.fadeInRipple = function (t, e, n) { var r = this; void 0 === n && (n = {}); var i = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(), a = Object(o.__assign)({}, ip, n.animation); n.centered && (t = i.left + i.width / 2, e = i.top + i.height / 2); var s = n.radius || function (t, e, n) { var o = Math.max(Math.abs(t - n.left), Math.abs(t - n.right)), r = Math.max(Math.abs(e - n.top), Math.abs(e - n.bottom)); return Math.sqrt(o * o + r * r); }(t, e, i), l = t - i.left, u = e - i.top, c = a.enterDuration, p = document.createElement("div"); p.classList.add("mat-ripple-element"), p.style.left = l - s + "px", p.style.top = u - s + "px", p.style.height = 2 * s + "px", p.style.width = 2 * s + "px", p.style.backgroundColor = n.color || null, p.style.transitionDuration = c + "ms", this._containerElement.appendChild(p), window.getComputedStyle(p).getPropertyValue("opacity"), p.style.transform = "scale(1)"; var d = new rp(this, p, n); return d.state = op.FADING_IN, this._activeRipples.add(d), n.persistent || (this._mostRecentTransientRipple = d), this._runTimeoutOutsideZone((function () { var t = d === r._mostRecentTransientRipple; d.state = op.VISIBLE, n.persistent || t && r._isPointerDown || d.fadeOut(); }), c), d; }, t.prototype.fadeOutRipple = function (t) { var e = this._activeRipples.delete(t); if (t === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), this._activeRipples.size || (this._containerRect = null), e) {
                var n = t.element, r = Object(o.__assign)({}, ip, t.config.animation);
                n.style.transitionDuration = r.exitDuration + "ms", n.style.opacity = "0", t.state = op.FADING_OUT, this._runTimeoutOutsideZone((function () { t.state = op.HIDDEN, n.parentNode.removeChild(n); }), r.exitDuration);
            } }, t.prototype.fadeOutAll = function () { this._activeRipples.forEach((function (t) { return t.fadeOut(); })); }, t.prototype.setupTriggerEvents = function (t) { var e = this, n = bc(t); n && n !== this._triggerElement && (this._removeTriggerEvents(), this._ngZone.runOutsideAngular((function () { e._triggerEvents.forEach((function (t, e) { n.addEventListener(e, t, ap); })); })), this._triggerElement = n); }, t.prototype._runTimeoutOutsideZone = function (t, e) { void 0 === e && (e = 0), this._ngZone.runOutsideAngular((function () { return setTimeout(t, e); })); }, t.prototype._removeTriggerEvents = function () { var t = this; this._triggerElement && this._triggerEvents.forEach((function (e, n) { t._triggerElement.removeEventListener(n, e, ap); })); }, t; }(), lp = new kt("mat-ripple-global-options"), up = function () { function t(t, e, n, o, r) { this._elementRef = t, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = o || {}, this._rippleRenderer = new sp(this, e, t, n), "NoopAnimations" === r && (this._globalOptions.animation = { enterDuration: 0, exitDuration: 0 }); } return Object.defineProperty(t.prototype, "disabled", { get: function () { return this._disabled; }, set: function (t) { this._disabled = t, this._setupTriggerEventsIfEnabled(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "trigger", { get: function () { return this._trigger || this._elementRef.nativeElement; }, set: function (t) { this._trigger = t, this._setupTriggerEventsIfEnabled(); }, enumerable: !0, configurable: !0 }), t.prototype.ngOnInit = function () { this._isInitialized = !0, this._setupTriggerEventsIfEnabled(); }, t.prototype.ngOnDestroy = function () { this._rippleRenderer._removeTriggerEvents(); }, t.prototype.fadeOutAll = function () { this._rippleRenderer.fadeOutAll(); }, Object.defineProperty(t.prototype, "rippleConfig", { get: function () { return { centered: this.centered, radius: this.radius, color: this.color, animation: Object(o.__assign)({}, this._globalOptions.animation, this.animation), terminateOnPointerUp: this._globalOptions.terminateOnPointerUp }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "rippleDisabled", { get: function () { return this.disabled || !!this._globalOptions.disabled; }, enumerable: !0, configurable: !0 }), t.prototype._setupTriggerEventsIfEnabled = function () { !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger); }, t.prototype.launch = function (t, e, n) { return void 0 === e && (e = 0), "number" == typeof t ? this._rippleRenderer.fadeInRipple(t, e, Object(o.__assign)({}, this.rippleConfig, n)) : this._rippleRenderer.fadeInRipple(0, 0, Object(o.__assign)({}, this.rippleConfig, t)); }, t; }(), cp = function () { return function () { }; }(), pp = Ln({ encapsulation: 2, styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"], data: {} });
            function dp(t) { return qi(2, [], null, null); }
            var hp = function () { function t() { } return t.prototype.transform = function (t, e) { if (!t)
                return []; if (!e)
                return t; var n = []; return t.length > 0 && (e = e.toLowerCase(), t.forEach((function (t) { for (var o = Object.values(t), r = 0; r < o.length; r++)
                if (o[r] && o[r].toString().toLowerCase().indexOf(e) > -1) {
                    n.push(t);
                    break;
                } }))), n; }, t; }(), fp = new kt("mat-slide-toggle-default-options", { providedIn: "root", factory: function () { return { disableToggleValue: !1, disableDragValue: !1 }; } }), mp = 0, gp = function () { return function (t, e) { this.source = t, this.checked = e; }; }(), yp = function (t) { function e(e, n, o, r, i, a, s, l) { var u = t.call(this, e) || this; return u._focusMonitor = n, u._changeDetectorRef = o, u._ngZone = i, u.defaults = a, u._animationMode = s, u._dir = l, u._onChange = function (t) { }, u._onTouched = function () { }, u._uniqueId = "mat-slide-toggle-" + ++mp, u._required = !1, u._checked = !1, u._dragging = !1, u.name = null, u.id = u._uniqueId, u.labelPosition = "after", u.ariaLabel = null, u.ariaLabelledby = null, u.change = new br, u.toggleChange = new br, u.dragChange = new br, u.tabIndex = parseInt(r) || 0, u; } return Object(o.__extends)(e, t), Object.defineProperty(e.prototype, "required", { get: function () { return this._required; }, set: function (t) { this._required = yc(t); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "checked", { get: function () { return this._checked; }, set: function (t) { this._checked = yc(t), this._changeDetectorRef.markForCheck(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "inputId", { get: function () { return (this.id || this._uniqueId) + "-input"; }, enumerable: !0, configurable: !0 }), e.prototype.ngAfterContentInit = function () { var t = this; this._focusMonitor.monitor(this._elementRef, !0).subscribe((function (e) { e || Promise.resolve().then((function () { return t._onTouched(); })); })); }, e.prototype.ngOnDestroy = function () { this._focusMonitor.stopMonitoring(this._elementRef); }, e.prototype._onChangeEvent = function (t) { t.stopPropagation(), this._dragging || this.toggleChange.emit(), this._dragging || this.defaults.disableToggleValue ? this._inputElement.nativeElement.checked = this.checked : (this.checked = this._inputElement.nativeElement.checked, this._emitChangeEvent()); }, e.prototype._onInputClick = function (t) { t.stopPropagation(); }, e.prototype.writeValue = function (t) { this.checked = !!t; }, e.prototype.registerOnChange = function (t) { this._onChange = t; }, e.prototype.registerOnTouched = function (t) { this._onTouched = t; }, e.prototype.setDisabledState = function (t) { this.disabled = t, this._changeDetectorRef.markForCheck(); }, e.prototype.focus = function (t) { this._focusMonitor.focusVia(this._inputElement, "keyboard", t); }, e.prototype.toggle = function () { this.checked = !this.checked, this._onChange(this.checked); }, e.prototype._emitChangeEvent = function () { this._onChange(this.checked), this.change.emit(new gp(this, this.checked)); }, e.prototype._getDragPercentage = function (t) { var e = t / this._thumbBarWidth * 100; return this._previousChecked && (e += 100), Math.max(0, Math.min(e, 100)); }, e.prototype._onDragStart = function () { if (!this.disabled && !this._dragging) {
                var t = this._thumbEl.nativeElement;
                this._thumbBarWidth = this._thumbBarEl.nativeElement.clientWidth - t.clientWidth, t.classList.add("mat-dragging"), this._previousChecked = this.checked, this._dragging = !0;
            } }, e.prototype._onDrag = function (t) { if (this._dragging) {
                var e = this._dir && "rtl" === this._dir.value ? -1 : 1;
                this._dragPercentage = this._getDragPercentage(t.deltaX * e), this._thumbEl.nativeElement.style.transform = "translate3d(" + this._dragPercentage / 100 * this._thumbBarWidth * e + "px, 0, 0)";
            } }, e.prototype._onDragEnd = function () { var t = this; if (this._dragging) {
                var e = this._dragPercentage > 50;
                e !== this.checked && (this.dragChange.emit(), this.defaults.disableDragValue || (this.checked = e, this._emitChangeEvent())), this._ngZone.runOutsideAngular((function () { return setTimeout((function () { t._dragging && (t._dragging = !1, t._thumbEl.nativeElement.classList.remove("mat-dragging"), t._thumbEl.nativeElement.style.transform = ""); })); }));
            } }, e.prototype._onLabelTextChange = function () { this._changeDetectorRef.detectChanges(); }, e; }(np(tp(ep(Jc(function () { return function (t) { this._elementRef = t; }; }())), "accent"))), bp = function () { return function () { }; }(), vp = function () { return function () { }; }(), _p = function () { function t() { } return t.prototype.create = function (t) { return "undefined" == typeof MutationObserver ? null : new MutationObserver(t); }, t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }(), wp = function () { function t(t) { this._mutationObserverFactory = t, this._observedElements = new Map; } return t.prototype.ngOnDestroy = function () { var t = this; this._observedElements.forEach((function (e, n) { return t._cleanupObserver(n); })); }, t.prototype.observe = function (t) { var e = this, n = bc(t); return new _((function (t) { var o = e._observeElement(n).subscribe(t); return function () { o.unsubscribe(), e._unobserveElement(n); }; })); }, t.prototype._observeElement = function (t) { if (this._observedElements.has(t))
                this._observedElements.get(t).count++;
            else {
                var e = new E, n = this._mutationObserverFactory.create((function (t) { return e.next(t); }));
                n && n.observe(t, { characterData: !0, childList: !0, subtree: !0 }), this._observedElements.set(t, { observer: n, stream: e, count: 1 });
            } return this._observedElements.get(t).stream; }, t.prototype._unobserveElement = function (t) { this._observedElements.has(t) && (this._observedElements.get(t).count--, this._observedElements.get(t).count || this._cleanupObserver(t)); }, t.prototype._cleanupObserver = function (t) { if (this._observedElements.has(t)) {
                var e = this._observedElements.get(t), n = e.observer, o = e.stream;
                n && n.disconnect(), o.complete(), this._observedElements.delete(t);
            } }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(_p)); }, token: t, providedIn: "root" }), t; }(), kp = function () { function t(t, e, n) { this._contentObserver = t, this._elementRef = e, this._ngZone = n, this.event = new br, this._disabled = !1, this._currentSubscription = null; } return Object.defineProperty(t.prototype, "disabled", { get: function () { return this._disabled; }, set: function (t) { this._disabled = yc(t), this._disabled ? this._unsubscribe() : this._subscribe(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "debounce", { get: function () { return this._debounce; }, set: function (t) { this._debounce = function (t, e) { return void 0 === e && (e = 0), function (t) { return !isNaN(parseFloat(t)) && !isNaN(Number(t)); }(t) ? Number(t) : e; }(t), this._subscribe(); }, enumerable: !0, configurable: !0 }), t.prototype.ngAfterContentInit = function () { this._currentSubscription || this.disabled || this._subscribe(); }, t.prototype.ngOnDestroy = function () { this._unsubscribe(); }, t.prototype._subscribe = function () { var t = this; this._unsubscribe(); var e = this._contentObserver.observe(this._elementRef); this._ngZone.runOutsideAngular((function () { var n, o; t._currentSubscription = (t.debounce ? e.pipe((n = t.debounce, void 0 === o && (o = Mc), function (t) { return t.lift(new jc(n, o)); })) : e).subscribe(t.event); })); }, t.prototype._unsubscribe = function () { this._currentSubscription && this._currentSubscription.unsubscribe(); }, t; }(), Cp = function () { return function () { }; }(), xp = function () { return function () { }; }(), Ep = function () { return function () { }; }();
            function Sp(t, e) { return void 0 === e && (e = null), { type: 2, steps: t, options: e }; }
            function Tp(t) { return { type: 6, styles: t, offset: null }; }
            function Op(t) { Promise.resolve(null).then(t); }
            var Dp = function () { function t(t, e) { void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e; } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) { return t(); })), this._onDoneFns = []); }, t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.init = function () { }, t.prototype.play = function () { this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0; }, t.prototype.triggerMicrotask = function () { var t = this; Op((function () { return t._onFinish(); })); }, t.prototype._onStart = function () { this._onStartFns.forEach((function (t) { return t(); })), this._onStartFns = []; }, t.prototype.pause = function () { }, t.prototype.restart = function () { }, t.prototype.finish = function () { this._onFinish(); }, t.prototype.destroy = function () { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach((function (t) { return t(); })), this._onDestroyFns = []); }, t.prototype.reset = function () { }, t.prototype.setPosition = function (t) { }, t.prototype.getPosition = function () { return 0; }, t.prototype.triggerCallback = function (t) { var e = "start" == t ? this._onStartFns : this._onDoneFns; e.forEach((function (t) { return t(); })), e.length = 0; }, t; }(), Ap = function () { function t(t) { var e = this; this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t; var n = 0, o = 0, r = 0, i = this.players.length; 0 == i ? Op((function () { return e._onFinish(); })) : this.players.forEach((function (t) { t.onDone((function () { ++n == i && e._onFinish(); })), t.onDestroy((function () { ++o == i && e._onDestroy(); })), t.onStart((function () { ++r == i && e._onStart(); })); })), this.totalTime = this.players.reduce((function (t, e) { return Math.max(t, e.totalTime); }), 0); } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) { return t(); })), this._onDoneFns = []); }, t.prototype.init = function () { this.players.forEach((function (t) { return t.init(); })); }, t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype._onStart = function () { this.hasStarted() || (this._started = !0, this._onStartFns.forEach((function (t) { return t(); })), this._onStartFns = []); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.play = function () { this.parentPlayer || this.init(), this._onStart(), this.players.forEach((function (t) { return t.play(); })); }, t.prototype.pause = function () { this.players.forEach((function (t) { return t.pause(); })); }, t.prototype.restart = function () { this.players.forEach((function (t) { return t.restart(); })); }, t.prototype.finish = function () { this._onFinish(), this.players.forEach((function (t) { return t.finish(); })); }, t.prototype.destroy = function () { this._onDestroy(); }, t.prototype._onDestroy = function () { this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach((function (t) { return t.destroy(); })), this._onDestroyFns.forEach((function (t) { return t(); })), this._onDestroyFns = []); }, t.prototype.reset = function () { this.players.forEach((function (t) { return t.reset(); })), this._destroyed = !1, this._finished = !1, this._started = !1; }, t.prototype.setPosition = function (t) { var e = t * this.totalTime; this.players.forEach((function (t) { var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1; t.setPosition(n); })); }, t.prototype.getPosition = function () { var t = 0; return this.players.forEach((function (e) { var n = e.getPosition(); t = Math.min(n, t); })), t; }, t.prototype.beforeDestroy = function () { this.players.forEach((function (t) { t.beforeDestroy && t.beforeDestroy(); })); }, t.prototype.triggerCallback = function (t) { var e = "start" == t ? this._onStartFns : this._onDoneFns; e.forEach((function (t) { return t(); })), e.length = 0; }, t; }();
            function Ip() { return "undefined" != typeof process; }
            function Pp(t) { switch (t.length) {
                case 0: return new Dp;
                case 1: return t[0];
                default: return new Ap(t);
            } }
            function Np(t, e, n, o, r, i) { void 0 === r && (r = {}), void 0 === i && (i = {}); var a = [], s = [], l = -1, u = null; if (o.forEach((function (t) { var n = t.offset, o = n == l, c = o && u || {}; Object.keys(t).forEach((function (n) { var o = n, s = t[n]; if ("offset" !== n)
                switch (o = e.normalizePropertyName(o, a), s) {
                    case "!":
                        s = r[n];
                        break;
                    case "*":
                        s = i[n];
                        break;
                    default: s = e.normalizeStyleValue(n, o, s, a);
                } c[o] = s; })), o || s.push(c), u = c, l = n; })), a.length)
                throw new Error("Unable to animate due to the following errors:\n - " + a.join("\n - ")); return s; }
            function Fp(t, e, n, o) { switch (e) {
                case "start":
                    t.onStart((function () { return o(n && Rp(n, "start", t)); }));
                    break;
                case "done":
                    t.onDone((function () { return o(n && Rp(n, "done", t)); }));
                    break;
                case "destroy": t.onDestroy((function () { return o(n && Rp(n, "destroy", t)); }));
            } }
            function Rp(t, e, n) { var o = n.totalTime, r = Mp(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == o ? t.totalTime : o, !!n.disabled), i = t._data; return null != i && (r._data = i), r; }
            function Mp(t, e, n, o, r, i, a) { return void 0 === r && (r = ""), void 0 === i && (i = 0), { element: t, triggerName: e, fromState: n, toState: o, phaseName: r, totalTime: i, disabled: !!a }; }
            function jp(t, e, n) { var o; return t instanceof Map ? (o = t.get(e)) || t.set(e, o = n) : (o = t[e]) || (o = t[e] = n), o; }
            function Bp(t) { var e = t.indexOf(":"); return [t.substring(1, e), t.substr(e + 1)]; }
            var Vp = function (t, e) { return !1; }, Lp = function (t, e) { return !1; }, Hp = function (t, e, n) { return []; }, qp = Ip();
            (qp || "undefined" != typeof Element) && (Vp = function (t, e) { return t.contains(e); }, Lp = function () { if (qp || Element.prototype.matches)
                return function (t, e) { return t.matches(e); }; var t = Element.prototype, e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector; return e ? function (t, n) { return e.apply(t, [n]); } : Lp; }(), Hp = function (t, e, n) { var r = []; if (n)
                r.push.apply(r, Object(o.__spread)(t.querySelectorAll(e)));
            else {
                var i = t.querySelector(e);
                i && r.push(i);
            } return r; });
            var zp = null, Up = !1;
            function Wp(t) { zp || (zp = ("undefined" != typeof document ? document.body : null) || {}, Up = !!zp.style && "WebkitAppearance" in zp.style); var e = !0; return zp.style && !function (t) { return "ebkit" == t.substring(1, 6); }(t) && !(e = t in zp.style) && Up && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in zp.style), e; }
            var Kp = Lp, $p = Vp, Gp = Hp;
            function Zp(t) { var e = {}; return Object.keys(t).forEach((function (n) { var o = n.replace(/([a-z])([A-Z])/g, "$1-$2"); e[o] = t[n]; })), e; }
            var Qp = function () { function t() { } return t.prototype.validateStyleProperty = function (t) { return Wp(t); }, t.prototype.matchesElement = function (t, e) { return Kp(t, e); }, t.prototype.containsElement = function (t, e) { return $p(t, e); }, t.prototype.query = function (t, e, n) { return Gp(t, e, n); }, t.prototype.computeStyle = function (t, e, n) { return n || ""; }, t.prototype.animate = function (t, e, n, o, r, i, a) { return void 0 === i && (i = []), new Dp(n, o); }, t; }(), Yp = function () { function t() { } return t.NOOP = new Qp, t; }();
            function Xp(t) { if ("number" == typeof t)
                return t; var e = t.match(/^(-?[\.\d]+)(m?s)/); return !e || e.length < 2 ? 0 : Jp(parseFloat(e[1]), e[2]); }
            function Jp(t, e) { switch (e) {
                case "s": return 1e3 * t;
                default: return t;
            } }
            function td(t, e, n) { return t.hasOwnProperty("duration") ? t : function (t, e, n) { var o, r = 0, i = ""; if ("string" == typeof t) {
                var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                if (null === a)
                    return e.push('The provided timing value "' + t + '" is invalid.'), { duration: 0, delay: 0, easing: "" };
                o = Jp(parseFloat(a[1]), a[2]);
                var s = a[3];
                null != s && (r = Jp(parseFloat(s), a[4]));
                var l = a[5];
                l && (i = l);
            }
            else
                o = t; if (!n) {
                var u = !1, c = e.length;
                o < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), r < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.');
            } return { duration: o, delay: r, easing: i }; }(t, e, n); }
            function ed(t, e) { return void 0 === e && (e = {}), Object.keys(t).forEach((function (n) { e[n] = t[n]; })), e; }
            function nd(t, e, n) { if (void 0 === n && (n = {}), e)
                for (var o in t)
                    n[o] = t[o];
            else
                ed(t, n); return n; }
            function od(t, e, n) { return n ? e + ":" + n + ";" : ""; }
            function rd(t) { for (var e = "", n = 0; n < t.style.length; n++)
                e += od(0, o = t.style.item(n), t.style.getPropertyValue(o)); for (var o in t.style)
                t.style.hasOwnProperty(o) && !o.startsWith("_") && (e += od(0, o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[o])); t.setAttribute("style", e); }
            function id(t, e, n) { t.style && (Object.keys(e).forEach((function (o) { var r = hd(o); n && !n.hasOwnProperty(o) && (n[o] = t.style[r]), t.style[r] = e[o]; })), Ip() && rd(t)); }
            function ad(t, e) { t.style && (Object.keys(e).forEach((function (e) { var n = hd(e); t.style[n] = ""; })), Ip() && rd(t)); }
            function sd(t) { return Array.isArray(t) ? 1 == t.length ? t[0] : Sp(t) : t; }
            var ld = new RegExp("{{\\s*(.+?)\\s*}}", "g");
            function ud(t) { var e = []; if ("string" == typeof t) {
                for (var n = t.toString(), o = void 0; o = ld.exec(n);)
                    e.push(o[1]);
                ld.lastIndex = 0;
            } return e; }
            function cd(t, e, n) { var o = t.toString(), r = o.replace(ld, (function (t, o) { var r = e[o]; return e.hasOwnProperty(o) || (n.push("Please provide a value for the animation param " + o), r = ""), r.toString(); })); return r == o ? t : r; }
            function pd(t) { for (var e = [], n = t.next(); !n.done;)
                e.push(n.value), n = t.next(); return e; }
            var dd = /-+([a-z0-9])/g;
            function hd(t) { return t.replace(dd, (function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; return t[1].toUpperCase(); })); }
            function fd(t, e) { return 0 === t || 0 === e; }
            function md(t, e, n) { var o = Object.keys(n); if (o.length && e.length) {
                var r = e[0], i = [];
                if (o.forEach((function (t) { r.hasOwnProperty(t) || i.push(t), r[t] = n[t]; })), i.length)
                    for (var a = function () { var n = e[s]; i.forEach((function (e) { n[e] = yd(t, e); })); }, s = 1; s < e.length; s++)
                        a();
            } return e; }
            function gd(t, e, n) { switch (e.type) {
                case 7: return t.visitTrigger(e, n);
                case 0: return t.visitState(e, n);
                case 1: return t.visitTransition(e, n);
                case 2: return t.visitSequence(e, n);
                case 3: return t.visitGroup(e, n);
                case 4: return t.visitAnimate(e, n);
                case 5: return t.visitKeyframes(e, n);
                case 6: return t.visitStyle(e, n);
                case 8: return t.visitReference(e, n);
                case 9: return t.visitAnimateChild(e, n);
                case 10: return t.visitAnimateRef(e, n);
                case 11: return t.visitQuery(e, n);
                case 12: return t.visitStagger(e, n);
                default: throw new Error("Unable to resolve animation metadata node #" + e.type);
            } }
            function yd(t, e) { return window.getComputedStyle(t)[e]; }
            var bd = new Set(["true", "1"]), vd = new Set(["false", "0"]);
            function _d(t, e) { var n = bd.has(t) || vd.has(t), o = bd.has(e) || vd.has(e); return function (r, i) { var a = "*" == t || t == r, s = "*" == e || e == i; return !a && n && "boolean" == typeof r && (a = r ? bd.has(t) : vd.has(t)), !s && o && "boolean" == typeof i && (s = i ? bd.has(e) : vd.has(e)), a && s; }; }
            var wd = new RegExp("s*:selfs*,?", "g");
            function kd(t, e, n) { return new Cd(t).build(e, n); }
            var Cd = function () { function t(t) { this._driver = t; } return t.prototype.build = function (t, e) { var n = new xd(e); return this._resetContextStyleTimingState(n), gd(this, sd(t), n); }, t.prototype._resetContextStyleTimingState = function (t) { t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0; }, t.prototype.visitTrigger = function (t, e) { var n = this, o = e.queryCount = 0, r = e.depCount = 0, i = [], a = []; return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach((function (t) { if (n._resetContextStyleTimingState(e), 0 == t.type) {
                var s = t, l = s.name;
                l.toString().split(/\s*,\s*/).forEach((function (t) { s.name = t, i.push(n.visitState(s, e)); })), s.name = l;
            }
            else if (1 == t.type) {
                var u = n.visitTransition(t, e);
                o += u.queryCount, r += u.depCount, a.push(u);
            }
            else
                e.errors.push("only state() and transition() definitions can sit inside of a trigger()"); })), { type: 7, name: t.name, states: i, transitions: a, queryCount: o, depCount: r, options: null }; }, t.prototype.visitState = function (t, e) { var n = this.visitStyle(t.styles, e), o = t.options && t.options.params || null; if (n.containsDynamicStyles) {
                var r = new Set, i = o || {};
                if (n.styles.forEach((function (t) { if (Ed(t)) {
                    var e = t;
                    Object.keys(e).forEach((function (t) { ud(e[t]).forEach((function (t) { i.hasOwnProperty(t) || r.add(t); })); }));
                } })), r.size) {
                    var a = pd(r.values());
                    e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + a.join(", "));
                }
            } return { type: 0, name: t.name, style: n, options: o ? { params: o } : null }; }, t.prototype.visitTransition = function (t, e) { e.queryCount = 0, e.depCount = 0; var n, o, r, i = gd(this, sd(t.animation), e); return { type: 1, matchers: (n = t.expr, o = e.errors, r = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach((function (t) { return function (t, e, n) { if (":" == t[0]) {
                    var o = function (t, e) { switch (t) {
                        case ":enter": return "void => *";
                        case ":leave": return "* => void";
                        case ":increment": return function (t, e) { return parseFloat(e) > parseFloat(t); };
                        case ":decrement": return function (t, e) { return parseFloat(e) < parseFloat(t); };
                        default: return e.push('The transition alias value "' + t + '" is not supported'), "* => *";
                    } }(t, n);
                    if ("function" == typeof o)
                        return void e.push(o);
                    t = o;
                } var r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/); if (null == r || r.length < 4)
                    return n.push('The provided transition expression "' + t + '" is not supported'), e; var i = r[1], a = r[2], s = r[3]; e.push(_d(i, s)), "<" != a[0] || "*" == i && "*" == s || e.push(_d(s, i)); }(t, r, o); })) : r.push(n), r), animation: i, queryCount: e.queryCount, depCount: e.depCount, options: Sd(t.options) }; }, t.prototype.visitSequence = function (t, e) { var n = this; return { type: 2, steps: t.steps.map((function (t) { return gd(n, t, e); })), options: Sd(t.options) }; }, t.prototype.visitGroup = function (t, e) { var n = this, o = e.currentTime, r = 0, i = t.steps.map((function (t) { e.currentTime = o; var i = gd(n, t, e); return r = Math.max(r, e.currentTime), i; })); return e.currentTime = r, { type: 3, steps: i, options: Sd(t.options) }; }, t.prototype.visitAnimate = function (t, e) { var n, o = function (t, e) { var n = null; if (t.hasOwnProperty("duration"))
                n = t;
            else if ("number" == typeof t)
                return Td(td(t, e).duration, 0, ""); var o = t; if (o.split(/\s+/).some((function (t) { return "{" == t.charAt(0) && "{" == t.charAt(1); }))) {
                var r = Td(0, 0, "");
                return r.dynamic = !0, r.strValue = o, r;
            } return Td((n = n || td(o, e)).duration, n.delay, n.easing); }(t.timings, e.errors); e.currentAnimateTimings = o; var r = t.styles ? t.styles : Tp({}); if (5 == r.type)
                n = this.visitKeyframes(r, e);
            else {
                var i = t.styles, a = !1;
                if (!i) {
                    a = !0;
                    var s = {};
                    o.easing && (s.easing = o.easing), i = Tp(s);
                }
                e.currentTime += o.duration + o.delay;
                var l = this.visitStyle(i, e);
                l.isEmptyStep = a, n = l;
            } return e.currentAnimateTimings = null, { type: 4, timings: o, style: n, options: null }; }, t.prototype.visitStyle = function (t, e) { var n = this._makeStyleAst(t, e); return this._validateStyleAst(n, e), n; }, t.prototype._makeStyleAst = function (t, e) { var n = []; Array.isArray(t.styles) ? t.styles.forEach((function (t) { "string" == typeof t ? "*" == t ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t); })) : n.push(t.styles); var o = !1, r = null; return n.forEach((function (t) { if (Ed(t)) {
                var e = t, n = e.easing;
                if (n && (r = n, delete e.easing), !o)
                    for (var i in e)
                        if (e[i].toString().indexOf("{{") >= 0) {
                            o = !0;
                            break;
                        }
            } })), { type: 6, styles: n, easing: r, offset: t.offset, containsDynamicStyles: o, options: null }; }, t.prototype._validateStyleAst = function (t, e) { var n = this, o = e.currentAnimateTimings, r = e.currentTime, i = e.currentTime; o && i > 0 && (i -= o.duration + o.delay), t.styles.forEach((function (t) { "string" != typeof t && Object.keys(t).forEach((function (o) { if (n._driver.validateStyleProperty(o)) {
                var a, s, l, u = e.collectedStyles[e.currentQuerySelector], c = u[o], p = !0;
                c && (i != r && i >= c.startTime && r <= c.endTime && (e.errors.push('The CSS property "' + o + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + i + 'ms" and "' + r + 'ms"'), p = !1), i = c.startTime), p && (u[o] = { startTime: i, endTime: r }), e.options && (a = e.errors, s = e.options.params || {}, (l = ud(t[o])).length && l.forEach((function (t) { s.hasOwnProperty(t) || a.push("Unable to resolve the local animation param " + t + " in the given list of values"); })));
            }
            else
                e.errors.push('The provided animation property "' + o + '" is not a supported CSS property for animations'); })); })); }, t.prototype.visitKeyframes = function (t, e) { var n = this, o = { type: 5, styles: [], options: null }; if (!e.currentAnimateTimings)
                return e.errors.push("keyframes() must be placed inside of a call to animate()"), o; var r = 0, i = [], a = !1, s = !1, l = 0, u = t.steps.map((function (t) { var o = n._makeStyleAst(t, e), u = null != o.offset ? o.offset : function (t) { if ("string" == typeof t)
                return null; var e = null; if (Array.isArray(t))
                t.forEach((function (t) { if (Ed(t) && t.hasOwnProperty("offset")) {
                    var n = t;
                    e = parseFloat(n.offset), delete n.offset;
                } }));
            else if (Ed(t) && t.hasOwnProperty("offset")) {
                var n = t;
                e = parseFloat(n.offset), delete n.offset;
            } return e; }(o.styles), c = 0; return null != u && (r++, c = o.offset = u), s = s || c < 0 || c > 1, a = a || c < l, l = c, i.push(c), o; })); s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order"); var c = t.steps.length, p = 0; r > 0 && r < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == r && (p = 1 / (c - 1)); var d = c - 1, h = e.currentTime, f = e.currentAnimateTimings, m = f.duration; return u.forEach((function (t, r) { var a = p > 0 ? r == d ? 1 : p * r : i[r], s = a * m; e.currentTime = h + f.delay + s, f.duration = s, n._validateStyleAst(t, e), t.offset = a, o.styles.push(t); })), o; }, t.prototype.visitReference = function (t, e) { return { type: 8, animation: gd(this, sd(t.animation), e), options: Sd(t.options) }; }, t.prototype.visitAnimateChild = function (t, e) { return e.depCount++, { type: 9, options: Sd(t.options) }; }, t.prototype.visitAnimateRef = function (t, e) { return { type: 10, animation: this.visitReference(t.animation, e), options: Sd(t.options) }; }, t.prototype.visitQuery = function (t, e) { var n = e.currentQuerySelector, r = t.options || {}; e.queryCount++, e.currentQuery = t; var i = Object(o.__read)(function (t) { var e = !!t.split(/\s*,\s*/).find((function (t) { return ":self" == t; })); return e && (t = t.replace(wd, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, (function (t) { return ".ng-trigger-" + t.substr(1); })).replace(/:animating/g, ".ng-animating"), e]; }(t.selector), 2), a = i[0], s = i[1]; e.currentQuerySelector = n.length ? n + " " + a : a, jp(e.collectedStyles, e.currentQuerySelector, {}); var l = gd(this, sd(t.animation), e); return e.currentQuery = null, e.currentQuerySelector = n, { type: 11, selector: a, limit: r.limit || 0, optional: !!r.optional, includeSelf: s, animation: l, originalSelector: t.selector, options: Sd(t.options) }; }, t.prototype.visitStagger = function (t, e) { e.currentQuery || e.errors.push("stagger() can only be used inside of query()"); var n = "full" === t.timings ? { duration: 0, delay: 0, easing: "full" } : td(t.timings, e.errors, !0); return { type: 12, animation: gd(this, sd(t.animation), e), timings: n, options: null }; }, t; }(), xd = function () { return function (t) { this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null; }; }();
            function Ed(t) { return !Array.isArray(t) && "object" == typeof t; }
            function Sd(t) { var e; return t ? (t = ed(t)).params && (t.params = (e = t.params) ? ed(e) : null) : t = {}, t; }
            function Td(t, e, n) { return { duration: t, delay: e, easing: n }; }
            function Od(t, e, n, o, r, i, a, s) { return void 0 === a && (a = null), void 0 === s && (s = !1), { type: 1, element: t, keyframes: e, preStyleProps: n, postStyleProps: o, duration: r, delay: i, totalTime: r + i, easing: a, subTimeline: s }; }
            var Dd = function () { function t() { this._map = new Map; } return t.prototype.consume = function (t) { var e = this._map.get(t); return e ? this._map.delete(t) : e = [], e; }, t.prototype.append = function (t, e) { var n = this._map.get(t); n || this._map.set(t, n = []), n.push.apply(n, Object(o.__spread)(e)); }, t.prototype.has = function (t) { return this._map.has(t); }, t.prototype.clear = function () { this._map.clear(); }, t; }(), Ad = new RegExp(":enter", "g"), Id = new RegExp(":leave", "g");
            function Pd(t, e, n, o, r, i, a, s, l, u) { return void 0 === i && (i = {}), void 0 === a && (a = {}), void 0 === u && (u = []), (new Nd).buildKeyframes(t, e, n, o, r, i, a, s, l, u); }
            var Nd = function () { function t() { } return t.prototype.buildKeyframes = function (t, e, n, o, r, i, a, s, l, u) { void 0 === u && (u = []), l = l || new Dd; var c = new Rd(t, e, l, o, r, u, []); c.options = s, c.currentTimeline.setStyles([i], null, c.errors, s), gd(this, n, c); var p = c.timelines.filter((function (t) { return t.containsAnimation(); })); if (p.length && Object.keys(a).length) {
                var d = p[p.length - 1];
                d.allowOnlyTimelineStyles() || d.setStyles([a], null, c.errors, s);
            } return p.length ? p.map((function (t) { return t.buildKeyframes(); })) : [Od(e, [], [], [], 0, 0, "", !1)]; }, t.prototype.visitTrigger = function (t, e) { }, t.prototype.visitState = function (t, e) { }, t.prototype.visitTransition = function (t, e) { }, t.prototype.visitAnimateChild = function (t, e) { var n = e.subInstructions.consume(e.element); if (n) {
                var o = e.createSubContext(t.options), r = e.currentTimeline.currentTime, i = this._visitSubInstructions(n, o, o.options);
                r != i && e.transformIntoNewTimeline(i);
            } e.previousNode = t; }, t.prototype.visitAnimateRef = function (t, e) { var n = e.createSubContext(t.options); n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t; }, t.prototype._visitSubInstructions = function (t, e, n) { var o = e.currentTimeline.currentTime, r = null != n.duration ? Xp(n.duration) : null, i = null != n.delay ? Xp(n.delay) : null; return 0 !== r && t.forEach((function (t) { var n = e.appendInstructionToTimeline(t, r, i); o = Math.max(o, n.duration + n.delay); })), o; }, t.prototype.visitReference = function (t, e) { e.updateOptions(t.options, !0), gd(this, t.animation, e), e.previousNode = t; }, t.prototype.visitSequence = function (t, e) { var n = this, o = e.subContextCount, r = e, i = t.options; if (i && (i.params || i.delay) && ((r = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)) {
                6 == r.previousNode.type && (r.currentTimeline.snapshotCurrentStyles(), r.previousNode = Fd);
                var a = Xp(i.delay);
                r.delayNextStep(a);
            } t.steps.length && (t.steps.forEach((function (t) { return gd(n, t, r); })), r.currentTimeline.applyStylesToKeyframe(), r.subContextCount > o && r.transformIntoNewTimeline()), e.previousNode = t; }, t.prototype.visitGroup = function (t, e) { var n = this, o = [], r = e.currentTimeline.currentTime, i = t.options && t.options.delay ? Xp(t.options.delay) : 0; t.steps.forEach((function (a) { var s = e.createSubContext(t.options); i && s.delayNextStep(i), gd(n, a, s), r = Math.max(r, s.currentTimeline.currentTime), o.push(s.currentTimeline); })), o.forEach((function (t) { return e.currentTimeline.mergeTimelineCollectedStyles(t); })), e.transformIntoNewTimeline(r), e.previousNode = t; }, t.prototype._visitTiming = function (t, e) { if (t.dynamic) {
                var n = t.strValue;
                return td(e.params ? cd(n, e.params, e.errors) : n, e.errors);
            } return { duration: t.duration, delay: t.delay, easing: t.easing }; }, t.prototype.visitAnimate = function (t, e) { var n = e.currentAnimateTimings = this._visitTiming(t.timings, e), o = e.currentTimeline; n.delay && (e.incrementTime(n.delay), o.snapshotCurrentStyles()); var r = t.style; 5 == r.type ? this.visitKeyframes(r, e) : (e.incrementTime(n.duration), this.visitStyle(r, e), o.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t; }, t.prototype.visitStyle = function (t, e) { var n = e.currentTimeline, o = e.currentAnimateTimings; !o && n.getCurrentStyleProperties().length && n.forwardFrame(); var r = o && o.easing || t.easing; t.isEmptyStep ? n.applyEmptyStep(r) : n.setStyles(t.styles, r, e.errors, e.options), e.previousNode = t; }, t.prototype.visitKeyframes = function (t, e) { var n = e.currentAnimateTimings, o = e.currentTimeline.duration, r = n.duration, i = e.createSubContext().currentTimeline; i.easing = n.easing, t.styles.forEach((function (t) { i.forwardTime((t.offset || 0) * r), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe(); })), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(o + r), e.previousNode = t; }, t.prototype.visitQuery = function (t, e) { var n = this, o = e.currentTimeline.currentTime, r = t.options || {}, i = r.delay ? Xp(r.delay) : 0; i && (6 === e.previousNode.type || 0 == o && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = Fd); var a = o, s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!r.optional, e.errors); e.currentQueryTotal = s.length; var l = null; s.forEach((function (o, r) { e.currentQueryIndex = r; var s = e.createSubContext(t.options, o); i && s.delayNextStep(i), o === e.element && (l = s.currentTimeline), gd(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime); })), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t; }, t.prototype.visitStagger = function (t, e) { var n = e.parentContext, o = e.currentTimeline, r = t.timings, i = Math.abs(r.duration), a = i * (e.currentQueryTotal - 1), s = i * e.currentQueryIndex; switch (r.duration < 0 ? "reverse" : r.easing) {
                case "reverse":
                    s = a - s;
                    break;
                case "full": s = n.currentStaggerTime;
            } var l = e.currentTimeline; s && l.delayNextStep(s); var u = l.currentTime; gd(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = o.currentTime - u + (o.startTime - n.currentTimeline.startTime); }, t; }(), Fd = {}, Rd = function () { function t(t, e, n, o, r, i, a, s) { this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = o, this._leaveClassName = r, this.errors = i, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Fd, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = s || new Md(this._driver, e, 0), a.push(this.currentTimeline); } return Object.defineProperty(t.prototype, "params", { get: function () { return this.options.params; }, enumerable: !0, configurable: !0 }), t.prototype.updateOptions = function (t, e) { var n = this; if (t) {
                var o = t, r = this.options;
                null != o.duration && (r.duration = Xp(o.duration)), null != o.delay && (r.delay = Xp(o.delay));
                var i = o.params;
                if (i) {
                    var a = r.params;
                    a || (a = this.options.params = {}), Object.keys(i).forEach((function (t) { e && a.hasOwnProperty(t) || (a[t] = cd(i[t], a, n.errors)); }));
                }
            } }, t.prototype._copyOptions = function () { var t = {}; if (this.options) {
                var e = this.options.params;
                if (e) {
                    var n = t.params = {};
                    Object.keys(e).forEach((function (t) { n[t] = e[t]; }));
                }
            } return t; }, t.prototype.createSubContext = function (e, n, o) { void 0 === e && (e = null); var r = n || this.element, i = new t(this._driver, r, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(r, o || 0)); return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i; }, t.prototype.transformIntoNewTimeline = function (t) { return this.previousNode = Fd, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline; }, t.prototype.appendInstructionToTimeline = function (t, e, n) { var o = { duration: null != e ? e : t.duration, delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay, easing: "" }, r = new jd(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, o, t.stretchStartingKeyframe); return this.timelines.push(r), o; }, t.prototype.incrementTime = function (t) { this.currentTimeline.forwardTime(this.currentTimeline.duration + t); }, t.prototype.delayNextStep = function (t) { t > 0 && this.currentTimeline.delayNextStep(t); }, t.prototype.invokeQuery = function (t, e, n, r, i, a) { var s = []; if (r && s.push(this.element), t.length > 0) {
                t = (t = t.replace(Ad, "." + this._enterClassName)).replace(Id, "." + this._leaveClassName);
                var l = this._driver.query(this.element, t, 1 != n);
                0 !== n && (l = n < 0 ? l.slice(l.length + n, l.length) : l.slice(0, n)), s.push.apply(s, Object(o.__spread)(l));
            } return i || 0 != s.length || a.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), s; }, t; }(), Md = function () { function t(t, e, n, o) { this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = o, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe(); } return t.prototype.containsAnimation = function () { switch (this._keyframes.size) {
                case 0: return !1;
                case 1: return this.getCurrentStyleProperties().length > 0;
                default: return !0;
            } }, t.prototype.getCurrentStyleProperties = function () { return Object.keys(this._currentKeyframe); }, Object.defineProperty(t.prototype, "currentTime", { get: function () { return this.startTime + this.duration; }, enumerable: !0, configurable: !0 }), t.prototype.delayNextStep = function (t) { var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length; this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t; }, t.prototype.fork = function (e, n) { return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup); }, t.prototype._loadKeyframe = function () { this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe)); }, t.prototype.forwardFrame = function () { this.duration += 1, this._loadKeyframe(); }, t.prototype.forwardTime = function (t) { this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe(); }, t.prototype._updateStyle = function (t, e) { this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = { time: this.currentTime, value: e }; }, t.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; }, t.prototype.applyEmptyStep = function (t) { var e = this; t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach((function (t) { e._backFill[t] = e._globalTimelineStyles[t] || "*", e._currentKeyframe[t] = "*"; })), this._currentEmptyStepKeyframe = this._currentKeyframe; }, t.prototype.setStyles = function (t, e, n, o) { var r = this; e && (this._previousKeyframe.easing = e); var i = o && o.params || {}, a = function (t, e) { var n, o = {}; return t.forEach((function (t) { "*" === t ? (n = n || Object.keys(e)).forEach((function (t) { o[t] = "*"; })) : nd(t, !1, o); })), o; }(t, this._globalTimelineStyles); Object.keys(a).forEach((function (t) { var e = cd(a[t], i, n); r._pendingStyles[t] = e, r._localTimelineStyles.hasOwnProperty(t) || (r._backFill[t] = r._globalTimelineStyles.hasOwnProperty(t) ? r._globalTimelineStyles[t] : "*"), r._updateStyle(t, e); })); }, t.prototype.applyStylesToKeyframe = function () { var t = this, e = this._pendingStyles, n = Object.keys(e); 0 != n.length && (this._pendingStyles = {}, n.forEach((function (n) { t._currentKeyframe[n] = e[n]; })), Object.keys(this._localTimelineStyles).forEach((function (e) { t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e]); }))); }, t.prototype.snapshotCurrentStyles = function () { var t = this; Object.keys(this._localTimelineStyles).forEach((function (e) { var n = t._localTimelineStyles[e]; t._pendingStyles[e] = n, t._updateStyle(e, n); })); }, t.prototype.getFinalKeyframe = function () { return this._keyframes.get(this.duration); }, Object.defineProperty(t.prototype, "properties", { get: function () { var t = []; for (var e in this._currentKeyframe)
                    t.push(e); return t; }, enumerable: !0, configurable: !0 }), t.prototype.mergeTimelineCollectedStyles = function (t) { var e = this; Object.keys(t._styleSummary).forEach((function (n) { var o = e._styleSummary[n], r = t._styleSummary[n]; (!o || r.time > o.time) && e._updateStyle(n, r.value); })); }, t.prototype.buildKeyframes = function () { var t = this; this.applyStylesToKeyframe(); var e = new Set, n = new Set, o = 1 === this._keyframes.size && 0 === this.duration, r = []; this._keyframes.forEach((function (i, a) { var s = nd(i, !0); Object.keys(s).forEach((function (t) { var o = s[t]; "!" == o ? e.add(t) : "*" == o && n.add(t); })), o || (s.offset = a / t.duration), r.push(s); })); var i = e.size ? pd(e.values()) : [], a = n.size ? pd(n.values()) : []; if (o) {
                var s = r[0], l = ed(s);
                s.offset = 0, l.offset = 1, r = [s, l];
            } return Od(this.element, r, i, a, this.duration, this.startTime, this.easing, !1); }, t; }(), jd = function (t) { function e(e, n, o, r, i, a, s) { void 0 === s && (s = !1); var l = t.call(this, e, n, a.delay) || this; return l.element = n, l.keyframes = o, l.preStyleProps = r, l.postStyleProps = i, l._stretchStartingKeyframe = s, l.timings = { duration: a.duration, delay: a.delay, easing: a.easing }, l; } return Object(o.__extends)(e, t), e.prototype.containsAnimation = function () { return this.keyframes.length > 1; }, e.prototype.buildKeyframes = function () { var t = this.keyframes, e = this.timings, n = e.delay, o = e.duration, r = e.easing; if (this._stretchStartingKeyframe && n) {
                var i = [], a = o + n, s = n / a, l = nd(t[0], !1);
                l.offset = 0, i.push(l);
                var u = nd(t[0], !1);
                u.offset = Bd(s), i.push(u);
                for (var c = t.length - 1, p = 1; p <= c; p++) {
                    var d = nd(t[p], !1);
                    d.offset = Bd((n + d.offset * o) / a), i.push(d);
                }
                o = a, n = 0, r = "", t = i;
            } return Od(this.element, t, this.preStyleProps, this.postStyleProps, o, n, r, !0); }, e; }(Md);
            function Bd(t, e) { void 0 === e && (e = 3); var n = Math.pow(10, e - 1); return Math.round(t * n) / n; }
            var Vd = function () { return function () { }; }(), Ld = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.normalizePropertyName = function (t, e) { return hd(t); }, e.prototype.normalizeStyleValue = function (t, e, n, o) { var r = "", i = n.toString().trim(); if (Hd[e] && 0 !== n && "0" !== n)
                if ("number" == typeof n)
                    r = "px";
                else {
                    var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    a && 0 == a[1].length && o.push("Please provide a CSS unit value for " + t + ":" + n);
                } return i + r; }, e; }(Vd), Hd = function () { return t = "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","), e = {}, t.forEach((function (t) { return e[t] = !0; })), e; var t, e; }();
            function qd(t, e, n, o, r, i, a, s, l, u, c, p, d) { return { type: 0, element: t, triggerName: e, isRemovalTransition: r, fromState: n, fromStyles: i, toState: o, toStyles: a, timelines: s, queriedElements: l, preStyleProps: u, postStyleProps: c, totalTime: p, errors: d }; }
            var zd = {}, Ud = function () { function t(t, e, n) { this._triggerName = t, this.ast = e, this._stateStyles = n; } return t.prototype.match = function (t, e, n, o) { return function (t, e, n, o, r) { return t.some((function (t) { return t(e, n, o, r); })); }(this.ast.matchers, t, e, n, o); }, t.prototype.buildStyles = function (t, e, n) { var o = this._stateStyles["*"], r = this._stateStyles[t], i = o ? o.buildStyles(e, n) : {}; return r ? r.buildStyles(e, n) : i; }, t.prototype.build = function (t, e, n, r, i, a, s, l, u, c) { var p = [], d = this.ast.options && this.ast.options.params || zd, h = this.buildStyles(n, s && s.params || zd, p), f = l && l.params || zd, m = this.buildStyles(r, f, p), g = new Set, y = new Map, b = new Map, v = "void" === r, _ = { params: Object(o.__assign)({}, d, f) }, w = c ? [] : Pd(t, e, this.ast.animation, i, a, h, m, _, u, p), k = 0; if (w.forEach((function (t) { k = Math.max(t.duration + t.delay, k); })), p.length)
                return qd(e, this._triggerName, n, r, v, h, m, [], [], y, b, k, p); w.forEach((function (t) { var n = t.element, o = jp(y, n, {}); t.preStyleProps.forEach((function (t) { return o[t] = !0; })); var r = jp(b, n, {}); t.postStyleProps.forEach((function (t) { return r[t] = !0; })), n !== e && g.add(n); })); var C = pd(g.values()); return qd(e, this._triggerName, n, r, v, h, m, w, C, y, b, k); }, t; }(), Wd = function () { function t(t, e) { this.styles = t, this.defaultParams = e; } return t.prototype.buildStyles = function (t, e) { var n = {}, o = ed(this.defaultParams); return Object.keys(t).forEach((function (e) { var n = t[e]; null != n && (o[e] = n); })), this.styles.styles.forEach((function (t) { if ("string" != typeof t) {
                var r = t;
                Object.keys(r).forEach((function (t) { var i = r[t]; i.length > 1 && (i = cd(i, o, e)), n[t] = i; }));
            } })), n; }, t; }(), Kd = function () { function t(t, e) { var n = this; this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach((function (t) { n.states[t.name] = new Wd(t.style, t.options && t.options.params || {}); })), $d(this.states, "true", "1"), $d(this.states, "false", "0"), e.transitions.forEach((function (e) { n.transitionFactories.push(new Ud(t, e, n.states)); })), this.fallbackTransition = new Ud(t, { type: 1, animation: { type: 2, steps: [], options: null }, matchers: [function (t, e) { return !0; }], options: null, queryCount: 0, depCount: 0 }, this.states); } return Object.defineProperty(t.prototype, "containsQueries", { get: function () { return this.ast.queryCount > 0; }, enumerable: !0, configurable: !0 }), t.prototype.matchTransition = function (t, e, n, o) { return this.transitionFactories.find((function (r) { return r.match(t, e, n, o); })) || null; }, t.prototype.matchStyles = function (t, e, n) { return this.fallbackTransition.buildStyles(t, e, n); }, t; }();
            function $d(t, e, n) { t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n]); }
            var Gd = new Dd, Zd = function () { function t(t, e, n) { this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []; } return t.prototype.register = function (t, e) { var n = [], o = kd(this._driver, e, n); if (n.length)
                throw new Error("Unable to build the animation due to the following errors: " + n.join("\n")); this._animations[t] = o; }, t.prototype._buildPlayer = function (t, e, n) { var o = t.element, r = Np(0, this._normalizer, 0, t.keyframes, e, n); return this._driver.animate(o, r, t.duration, t.delay, t.easing, [], !0); }, t.prototype.create = function (t, e, n) { var o = this; void 0 === n && (n = {}); var r, i = [], a = this._animations[t], s = new Map; if (a ? (r = Pd(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, n, Gd, i)).forEach((function (t) { var e = jp(s, t.element, {}); t.postStyleProps.forEach((function (t) { return e[t] = null; })); })) : (i.push("The requested animation doesn't exist or has already been destroyed"), r = []), i.length)
                throw new Error("Unable to create the animation due to the following errors: " + i.join("\n")); s.forEach((function (t, e) { Object.keys(t).forEach((function (n) { t[n] = o._driver.computeStyle(e, n, "*"); })); })); var l = Pp(r.map((function (t) { var e = s.get(t.element); return o._buildPlayer(t, {}, e); }))); return this._playersById[t] = l, l.onDestroy((function () { return o.destroy(t); })), this.players.push(l), l; }, t.prototype.destroy = function (t) { var e = this._getPlayer(t); e.destroy(), delete this._playersById[t]; var n = this.players.indexOf(e); n >= 0 && this.players.splice(n, 1); }, t.prototype._getPlayer = function (t) { var e = this._playersById[t]; if (!e)
                throw new Error("Unable to find the timeline player referenced by " + t); return e; }, t.prototype.listen = function (t, e, n, o) { var r = Mp(e, "", "", ""); return Fp(this._getPlayer(t), n, r, o), function () { }; }, t.prototype.command = function (t, e, n, o) { if ("register" != n)
                if ("create" != n) {
                    var r = this._getPlayer(t);
                    switch (n) {
                        case "play":
                            r.play();
                            break;
                        case "pause":
                            r.pause();
                            break;
                        case "reset":
                            r.reset();
                            break;
                        case "restart":
                            r.restart();
                            break;
                        case "finish":
                            r.finish();
                            break;
                        case "init":
                            r.init();
                            break;
                        case "setPosition":
                            r.setPosition(parseFloat(o[0]));
                            break;
                        case "destroy": this.destroy(t);
                    }
                }
                else
                    this.create(t, e, o[0] || {});
            else
                this.register(t, o[0]); }, t; }(), Qd = [], Yd = { namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 }, Xd = { namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 }, Jd = function () { function t(t, e) { void 0 === e && (e = ""), this.namespaceId = e; var n, o = t && t.hasOwnProperty("value"); if (this.value = null != (n = o ? t.value : t) ? n : null, o) {
                var r = ed(t);
                delete r.value, this.options = r;
            }
            else
                this.options = {}; this.options.params || (this.options.params = {}); } return Object.defineProperty(t.prototype, "params", { get: function () { return this.options.params; }, enumerable: !0, configurable: !0 }), t.prototype.absorbOptions = function (t) { var e = t.params; if (e) {
                var n = this.options.params;
                Object.keys(e).forEach((function (t) { null == n[t] && (n[t] = e[t]); }));
            } }, t; }(), th = new Jd("void"), eh = function () { function t(t, e, n) { this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, lh(e, this._hostClassName); } return t.prototype.listen = function (t, e, n, o) { var r, i = this; if (!this._triggers.hasOwnProperty(e))
                throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!"); if (null == n || 0 == n.length)
                throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!'); if ("start" != (r = n) && "done" != r)
                throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!'); var a = jp(this._elementListeners, t, []), s = { name: e, phase: n, callback: o }; a.push(s); var l = jp(this._engine.statesByElement, t, {}); return l.hasOwnProperty(e) || (lh(t, "ng-trigger"), lh(t, "ng-trigger-" + e), l[e] = th), function () { i._engine.afterFlush((function () { var t = a.indexOf(s); t >= 0 && a.splice(t, 1), i._triggers[e] || delete l[e]; })); }; }, t.prototype.register = function (t, e) { return !this._triggers[t] && (this._triggers[t] = e, !0); }, t.prototype._getTrigger = function (t) { var e = this._triggers[t]; if (!e)
                throw new Error('The provided animation trigger "' + t + '" has not been registered!'); return e; }, t.prototype.trigger = function (t, e, n, o) { var r = this; void 0 === o && (o = !0); var i = this._getTrigger(e), a = new oh(this.id, e, t), s = this._engine.statesByElement.get(t); s || (lh(t, "ng-trigger"), lh(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {})); var l = s[e], u = new Jd(n, this.id); if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l || (l = th), "void" === u.value || l.value !== u.value) {
                var c = jp(this._engine.playersByElement, t, []);
                c.forEach((function (t) { t.namespaceId == r.id && t.triggerName == e && t.queued && t.destroy(); }));
                var p = i.matchTransition(l.value, u.value, t, u.params), d = !1;
                if (!p) {
                    if (!o)
                        return;
                    p = i.fallbackTransition, d = !0;
                }
                return this._engine.totalQueuedPlayers++, this._queue.push({ element: t, triggerName: e, transition: p, fromState: l, toState: u, player: a, isFallbackTransition: d }), d || (lh(t, "ng-animate-queued"), a.onStart((function () { uh(t, "ng-animate-queued"); }))), a.onDone((function () { var e = r.players.indexOf(a); e >= 0 && r.players.splice(e, 1); var n = r._engine.playersByElement.get(t); if (n) {
                    var o = n.indexOf(a);
                    o >= 0 && n.splice(o, 1);
                } })), this.players.push(a), c.push(a), a;
            } if (!function (t, e) { var n = Object.keys(t), o = Object.keys(e); if (n.length != o.length)
                return !1; for (var r = 0; r < n.length; r++) {
                var i = n[r];
                if (!e.hasOwnProperty(i) || t[i] !== e[i])
                    return !1;
            } return !0; }(l.params, u.params)) {
                var h = [], f = i.matchStyles(l.value, l.params, h), m = i.matchStyles(u.value, u.params, h);
                h.length ? this._engine.reportError(h) : this._engine.afterFlush((function () { ad(t, f), id(t, m); }));
            } }, t.prototype.deregister = function (t) { var e = this; delete this._triggers[t], this._engine.statesByElement.forEach((function (e, n) { delete e[t]; })), this._elementListeners.forEach((function (n, o) { e._elementListeners.set(o, n.filter((function (e) { return e.name != t; }))); })); }, t.prototype.clearElementCache = function (t) { this._engine.statesByElement.delete(t), this._elementListeners.delete(t); var e = this._engine.playersByElement.get(t); e && (e.forEach((function (t) { return t.destroy(); })), this._engine.playersByElement.delete(t)); }, t.prototype._signalRemovalForInnerTriggers = function (t, e, n) { var o = this; void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach((function (t) { if (!t.__ng_removed) {
                var n = o._engine.fetchNamespacesByElement(t);
                n.size ? n.forEach((function (n) { return n.triggerLeaveAnimation(t, e, !1, !0); })) : o.clearElementCache(t);
            } })); }, t.prototype.triggerLeaveAnimation = function (t, e, n, o) { var r = this, i = this._engine.statesByElement.get(t); if (i) {
                var a = [];
                if (Object.keys(i).forEach((function (e) { if (r._triggers[e]) {
                    var n = r.trigger(t, e, "void", o);
                    n && a.push(n);
                } })), a.length)
                    return this._engine.markElementAsRemoved(this.id, t, !0, e), n && Pp(a).onDone((function () { return r._engine.processLeaveNode(t); })), !0;
            } return !1; }, t.prototype.prepareLeaveAnimationListeners = function (t) { var e = this, n = this._elementListeners.get(t); if (n) {
                var o = new Set;
                n.forEach((function (n) { var r = n.name; if (!o.has(r)) {
                    o.add(r);
                    var i = e._triggers[r].fallbackTransition, a = e._engine.statesByElement.get(t)[r] || th, s = new Jd("void"), l = new oh(e.id, r, t);
                    e._engine.totalQueuedPlayers++, e._queue.push({ element: t, triggerName: r, transition: i, fromState: a, toState: s, player: l, isFallbackTransition: !0 });
                } }));
            } }, t.prototype.removeNode = function (t, e) { var n = this, o = this._engine; if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
                var r = !1;
                if (o.totalAnimations) {
                    var i = o.players.length ? o.playersByQueriedElement.get(t) : [];
                    if (i && i.length)
                        r = !0;
                    else
                        for (var a = t; a = a.parentNode;)
                            if (o.statesByElement.get(a)) {
                                r = !0;
                                break;
                            }
                }
                this.prepareLeaveAnimationListeners(t), r ? o.markElementAsRemoved(this.id, t, !1, e) : (o.afterFlush((function () { return n.clearElementCache(t); })), o.destroyInnerAnimations(t), o._onRemovalComplete(t, e));
            } }, t.prototype.insertNode = function (t, e) { lh(t, this._hostClassName); }, t.prototype.drainQueuedTransitions = function (t) { var e = this, n = []; return this._queue.forEach((function (o) { var r = o.player; if (!r.destroyed) {
                var i = o.element, a = e._elementListeners.get(i);
                a && a.forEach((function (e) { if (e.name == o.triggerName) {
                    var n = Mp(i, o.triggerName, o.fromState.value, o.toState.value);
                    n._data = t, Fp(o.player, e.phase, n, e.callback);
                } })), r.markedForDestroy ? e._engine.afterFlush((function () { r.destroy(); })) : n.push(o);
            } })), this._queue = [], n.sort((function (t, n) { var o = t.transition.ast.depCount, r = n.transition.ast.depCount; return 0 == o || 0 == r ? o - r : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1; })); }, t.prototype.destroy = function (t) { this.players.forEach((function (t) { return t.destroy(); })), this._signalRemovalForInnerTriggers(this.hostElement, t); }, t.prototype.elementContainsData = function (t) { var e = !1; return this._elementListeners.has(t) && (e = !0), !!this._queue.find((function (e) { return e.element === t; })) || e; }, t; }(), nh = function () { function t(t, e, n) { this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) { }; } return t.prototype._onRemovalComplete = function (t, e) { this.onRemovalComplete(t, e); }, Object.defineProperty(t.prototype, "queuedPlayers", { get: function () { var t = []; return this._namespaceList.forEach((function (e) { e.players.forEach((function (e) { e.queued && t.push(e); })); })), t; }, enumerable: !0, configurable: !0 }), t.prototype.createNamespace = function (t, e) { var n = new eh(t, e, this); return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n; }, t.prototype._balanceNamespaceList = function (t, e) { var n = this._namespaceList.length - 1; if (n >= 0) {
                for (var o = !1, r = n; r >= 0; r--)
                    if (this.driver.containsElement(this._namespaceList[r].hostElement, e)) {
                        this._namespaceList.splice(r + 1, 0, t), o = !0;
                        break;
                    }
                o || this._namespaceList.splice(0, 0, t);
            }
            else
                this._namespaceList.push(t); return this.namespacesByHostElement.set(e, t), t; }, t.prototype.register = function (t, e) { var n = this._namespaceLookup[t]; return n || (n = this.createNamespace(t, e)), n; }, t.prototype.registerTrigger = function (t, e, n) { var o = this._namespaceLookup[t]; o && o.register(e, n) && this.totalAnimations++; }, t.prototype.destroy = function (t, e) { var n = this; if (t) {
                var o = this._fetchNamespace(t);
                this.afterFlush((function () { n.namespacesByHostElement.delete(o.hostElement), delete n._namespaceLookup[t]; var e = n._namespaceList.indexOf(o); e >= 0 && n._namespaceList.splice(e, 1); })), this.afterFlushAnimationsDone((function () { return o.destroy(e); }));
            } }, t.prototype._fetchNamespace = function (t) { return this._namespaceLookup[t]; }, t.prototype.fetchNamespacesByElement = function (t) { var e = new Set, n = this.statesByElement.get(t); if (n)
                for (var o = Object.keys(n), r = 0; r < o.length; r++) {
                    var i = n[o[r]].namespaceId;
                    if (i) {
                        var a = this._fetchNamespace(i);
                        a && e.add(a);
                    }
                } return e; }, t.prototype.trigger = function (t, e, n, o) { if (rh(e)) {
                var r = this._fetchNamespace(t);
                if (r)
                    return r.trigger(e, n, o), !0;
            } return !1; }, t.prototype.insertNode = function (t, e, n, o) { if (rh(e)) {
                var r = e.__ng_removed;
                if (r && r.setForRemoval) {
                    r.setForRemoval = !1, r.setForMove = !0;
                    var i = this.collectedLeaveElements.indexOf(e);
                    i >= 0 && this.collectedLeaveElements.splice(i, 1);
                }
                if (t) {
                    var a = this._fetchNamespace(t);
                    a && a.insertNode(e, n);
                }
                o && this.collectEnterElement(e);
            } }, t.prototype.collectEnterElement = function (t) { this.collectedEnterElements.push(t); }, t.prototype.markElementAsDisabled = function (t, e) { e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), lh(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), uh(t, "ng-animate-disabled")); }, t.prototype.removeNode = function (t, e, n, o) { if (rh(e)) {
                var r = t ? this._fetchNamespace(t) : null;
                if (r ? r.removeNode(e, o) : this.markElementAsRemoved(t, e, !1, o), n) {
                    var i = this.namespacesByHostElement.get(e);
                    i && i.id !== t && i.removeNode(e, o);
                }
            }
            else
                this._onRemovalComplete(e, o); }, t.prototype.markElementAsRemoved = function (t, e, n, o) { this.collectedLeaveElements.push(e), e.__ng_removed = { namespaceId: t, setForRemoval: o, hasAnimation: n, removedBeforeQueried: !1 }; }, t.prototype.listen = function (t, e, n, o, r) { return rh(e) ? this._fetchNamespace(t).listen(e, n, o, r) : function () { }; }, t.prototype._buildInstruction = function (t, e, n, o, r) { return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, o, t.fromState.options, t.toState.options, e, r); }, t.prototype.destroyInnerAnimations = function (t) { var e = this, n = this.driver.query(t, ".ng-trigger", !0); n.forEach((function (t) { return e.destroyActiveAnimationsForElement(t); })), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach((function (t) { return e.finishActiveQueriedAnimationOnElement(t); })); }, t.prototype.destroyActiveAnimationsForElement = function (t) { var e = this.playersByElement.get(t); e && e.forEach((function (t) { t.queued ? t.markedForDestroy = !0 : t.destroy(); })); }, t.prototype.finishActiveQueriedAnimationOnElement = function (t) { var e = this.playersByQueriedElement.get(t); e && e.forEach((function (t) { return t.finish(); })); }, t.prototype.whenRenderingDone = function () { var t = this; return new Promise((function (e) { if (t.players.length)
                return Pp(t.players).onDone((function () { return e(); })); e(); })); }, t.prototype.processLeaveNode = function (t) { var e = this, n = t.__ng_removed; if (n && n.setForRemoval) {
                if (t.__ng_removed = Yd, n.namespaceId) {
                    this.destroyInnerAnimations(t);
                    var o = this._fetchNamespace(n.namespaceId);
                    o && o.clearElementCache(t);
                }
                this._onRemovalComplete(t, n.setForRemoval);
            } this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach((function (t) { e.markElementAsDisabled(t, !1); })); }, t.prototype.flush = function (t) { var e = this; void 0 === t && (t = -1); var n = []; if (this.newHostElements.size && (this.newHostElements.forEach((function (t, n) { return e._balanceNamespaceList(t, n); })), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                for (var o = 0; o < this.collectedEnterElements.length; o++)
                    lh(this.collectedEnterElements[o], "ng-star-inserted"); if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                var r = [];
                try {
                    n = this._flushAnimations(r, t);
                }
                finally {
                    for (o = 0; o < r.length; o++)
                        r[o]();
                }
            }
            else
                for (o = 0; o < this.collectedLeaveElements.length; o++)
                    this.processLeaveNode(this.collectedLeaveElements[o]); if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach((function (t) { return t(); })), this._flushFns = [], this._whenQuietFns.length) {
                var i = this._whenQuietFns;
                this._whenQuietFns = [], n.length ? Pp(n).onDone((function () { i.forEach((function (t) { return t(); })); })) : i.forEach((function (t) { return t(); }));
            } }, t.prototype.reportError = function (t) { throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n")); }, t.prototype._flushAnimations = function (t, e) { var n = this, r = new Dd, i = [], a = new Map, s = [], l = new Map, u = new Map, c = new Map, p = new Set; this.disabledNodes.forEach((function (t) { p.add(t); for (var e = n.driver.query(t, ".ng-animate-queued", !0), o = 0; o < e.length; o++)
                p.add(e[o]); })); var d = this.bodyNode, h = Array.from(this.statesByElement.keys()), f = sh(h, this.collectedEnterElements), m = new Map, g = 0; f.forEach((function (t, e) { var n = "ng-enter" + g++; m.set(e, n), t.forEach((function (t) { return lh(t, n); })); })); for (var y = [], b = new Set, v = new Set, _ = 0; _ < this.collectedLeaveElements.length; _++)
                (j = (M = this.collectedLeaveElements[_]).__ng_removed) && j.setForRemoval && (y.push(M), b.add(M), j.hasAnimation ? this.driver.query(M, ".ng-star-inserted", !0).forEach((function (t) { return b.add(t); })) : v.add(M)); var w = new Map, k = sh(h, Array.from(b)); k.forEach((function (t, e) { var n = "ng-leave" + g++; w.set(e, n), t.forEach((function (t) { return lh(t, n); })); })), t.push((function () { f.forEach((function (t, e) { var n = m.get(e); t.forEach((function (t) { return uh(t, n); })); })), k.forEach((function (t, e) { var n = w.get(e); t.forEach((function (t) { return uh(t, n); })); })), y.forEach((function (t) { n.processLeaveNode(t); })); })); for (var C = [], x = [], E = this._namespaceList.length - 1; E >= 0; E--)
                this._namespaceList[E].drainQueuedTransitions(e).forEach((function (t) { var e = t.player, o = t.element; if (C.push(e), n.collectedEnterElements.length) {
                    var a = o.__ng_removed;
                    if (a && a.setForMove)
                        return void e.destroy();
                } var p = !d || !n.driver.containsElement(d, o), h = w.get(o), f = m.get(o), g = n._buildInstruction(t, r, f, h, p); if (g.errors && g.errors.length)
                    x.push(g);
                else {
                    if (p)
                        return e.onStart((function () { return ad(o, g.fromStyles); })), e.onDestroy((function () { return id(o, g.toStyles); })), void i.push(e);
                    if (t.isFallbackTransition)
                        return e.onStart((function () { return ad(o, g.fromStyles); })), e.onDestroy((function () { return id(o, g.toStyles); })), void i.push(e);
                    g.timelines.forEach((function (t) { return t.stretchStartingKeyframe = !0; })), r.append(o, g.timelines), s.push({ instruction: g, player: e, element: o }), g.queriedElements.forEach((function (t) { return jp(l, t, []).push(e); })), g.preStyleProps.forEach((function (t, e) { var n = Object.keys(t); if (n.length) {
                        var o = u.get(e);
                        o || u.set(e, o = new Set), n.forEach((function (t) { return o.add(t); }));
                    } })), g.postStyleProps.forEach((function (t, e) { var n = Object.keys(t), o = c.get(e); o || c.set(e, o = new Set), n.forEach((function (t) { return o.add(t); })); }));
                } })); if (x.length) {
                var S = [];
                x.forEach((function (t) { S.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach((function (t) { return S.push("- " + t + "\n"); })); })), C.forEach((function (t) { return t.destroy(); })), this.reportError(S);
            } var T = new Map, O = new Map; s.forEach((function (t) { var e = t.element; r.has(e) && (O.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, T)); })), i.forEach((function (t) { var e = t.element; n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach((function (t) { jp(T, e, []).push(t), t.destroy(); })); })); var D = y.filter((function (t) { return ph(t, u, c); })), A = new Map; ah(A, this.driver, v, c, "*").forEach((function (t) { ph(t, u, c) && D.push(t); })); var I = new Map; f.forEach((function (t, e) { ah(I, n.driver, new Set(t), u, "!"); })), D.forEach((function (t) { var e = A.get(t), n = I.get(t); A.set(t, Object(o.__assign)({}, e, n)); })); var P = [], N = [], F = {}; s.forEach((function (t) { var e = t.element, o = t.player, s = t.instruction; if (r.has(e)) {
                if (p.has(e))
                    return o.onDestroy((function () { return id(e, s.toStyles); })), o.disabled = !0, o.overrideTotalTime(s.totalTime), void i.push(o);
                var l = F;
                if (O.size > 1) {
                    for (var u = e, c = []; u = u.parentNode;) {
                        var d = O.get(u);
                        if (d) {
                            l = d;
                            break;
                        }
                        c.push(u);
                    }
                    c.forEach((function (t) { return O.set(t, l); }));
                }
                var h = n._buildAnimation(o.namespaceId, s, T, a, I, A);
                if (o.setRealPlayer(h), l === F)
                    P.push(o);
                else {
                    var f = n.playersByElement.get(l);
                    f && f.length && (o.parentPlayer = Pp(f)), i.push(o);
                }
            }
            else
                ad(e, s.fromStyles), o.onDestroy((function () { return id(e, s.toStyles); })), N.push(o), p.has(e) && i.push(o); })), N.forEach((function (t) { var e = a.get(t.element); if (e && e.length) {
                var n = Pp(e);
                t.setRealPlayer(n);
            } })), i.forEach((function (t) { t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy(); })); for (var R = 0; R < y.length; R++) {
                var M, j = (M = y[R]).__ng_removed;
                if (uh(M, "ng-leave"), !j || !j.hasAnimation) {
                    var B = [];
                    if (l.size) {
                        var V = l.get(M);
                        V && V.length && B.push.apply(B, Object(o.__spread)(V));
                        for (var L = this.driver.query(M, ".ng-animating", !0), H = 0; H < L.length; H++) {
                            var q = l.get(L[H]);
                            q && q.length && B.push.apply(B, Object(o.__spread)(q));
                        }
                    }
                    var z = B.filter((function (t) { return !t.destroyed; }));
                    z.length ? ch(this, M, z) : this.processLeaveNode(M);
                }
            } return y.length = 0, P.forEach((function (t) { n.players.push(t), t.onDone((function () { t.destroy(); var e = n.players.indexOf(t); n.players.splice(e, 1); })), t.play(); })), P; }, t.prototype.elementContainsData = function (t, e) { var n = !1, o = e.__ng_removed; return o && o.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n; }, t.prototype.afterFlush = function (t) { this._flushFns.push(t); }, t.prototype.afterFlushAnimationsDone = function (t) { this._whenQuietFns.push(t); }, t.prototype._getPreviousPlayers = function (t, e, n, o, r) { var i = []; if (e) {
                var a = this.playersByQueriedElement.get(t);
                a && (i = a);
            }
            else {
                var s = this.playersByElement.get(t);
                if (s) {
                    var l = !r || "void" == r;
                    s.forEach((function (t) { t.queued || (l || t.triggerName == o) && i.push(t); }));
                }
            } return (n || o) && (i = i.filter((function (t) { return !(n && n != t.namespaceId || o && o != t.triggerName); }))), i; }, t.prototype._beforeAnimationBuild = function (t, e, n) { var r, i, a = e.element, s = e.isRemovalTransition ? void 0 : t, l = e.isRemovalTransition ? void 0 : e.triggerName, u = function (t) { var o = t.element, r = o !== a, i = jp(n, o, []); c._getPreviousPlayers(o, r, s, l, e.toState).forEach((function (t) { var e = t.getRealPlayer(); e.beforeDestroy && e.beforeDestroy(), t.destroy(), i.push(t); })); }, c = this; try {
                for (var p = Object(o.__values)(e.timelines), d = p.next(); !d.done; d = p.next())
                    u(d.value);
            }
            catch (h) {
                r = { error: h };
            }
            finally {
                try {
                    d && !d.done && (i = p.return) && i.call(p);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            } ad(a, e.fromStyles); }, t.prototype._buildAnimation = function (t, e, n, o, r, i) { var a = this, s = e.triggerName, l = e.element, u = [], c = new Set, p = new Set, d = e.timelines.map((function (e) { var d = e.element; c.add(d); var h = d.__ng_removed; if (h && h.removedBeforeQueried)
                return new Dp(e.duration, e.delay); var f, m, g = d !== l, y = (f = (n.get(d) || Qd).map((function (t) { return t.getRealPlayer(); })), m = [], function t(e, n) { for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r instanceof Ap ? t(r.players, n) : n.push(r);
            } }(f, m), m).filter((function (t) { return !!t.element && t.element === d; })), b = r.get(d), v = i.get(d), _ = Np(0, a._normalizer, 0, e.keyframes, b, v), w = a._buildPlayer(e, _, y); if (e.subTimeline && o && p.add(d), g) {
                var k = new oh(t, s, d);
                k.setRealPlayer(w), u.push(k);
            } return w; })); u.forEach((function (t) { jp(a.playersByQueriedElement, t.element, []).push(t), t.onDone((function () { return function (t, e, n) { var o; if (t instanceof Map) {
                if (o = t.get(e)) {
                    if (o.length) {
                        var r = o.indexOf(n);
                        o.splice(r, 1);
                    }
                    0 == o.length && t.delete(e);
                }
            }
            else
                (o = t[e]) && (o.length && (r = o.indexOf(n), o.splice(r, 1)), 0 == o.length && delete t[e]); return o; }(a.playersByQueriedElement, t.element, t); })); })), c.forEach((function (t) { return lh(t, "ng-animating"); })); var h = Pp(d); return h.onDestroy((function () { c.forEach((function (t) { return uh(t, "ng-animating"); })), id(l, e.toStyles); })), p.forEach((function (t) { jp(o, t, []).push(h); })), h; }, t.prototype._buildPlayer = function (t, e, n) { return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new Dp(t.duration, t.delay); }, t; }(), oh = function () { function t(t, e, n) { this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new Dp, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0; } return t.prototype.setRealPlayer = function (t) { var e = this; this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach((function (n) { e._queuedCallbacks[n].forEach((function (e) { return Fp(t, n, void 0, e); })); })), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1); }, t.prototype.getRealPlayer = function () { return this._player; }, t.prototype.overrideTotalTime = function (t) { this.totalTime = t; }, t.prototype.syncPlayerEvents = function (t) { var e = this, n = this._player; n.triggerCallback && t.onStart((function () { return n.triggerCallback("start"); })), t.onDone((function () { return e.finish(); })), t.onDestroy((function () { return e.destroy(); })); }, t.prototype._queueEvent = function (t, e) { jp(this._queuedCallbacks, t, []).push(e); }, t.prototype.onDone = function (t) { this.queued && this._queueEvent("done", t), this._player.onDone(t); }, t.prototype.onStart = function (t) { this.queued && this._queueEvent("start", t), this._player.onStart(t); }, t.prototype.onDestroy = function (t) { this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t); }, t.prototype.init = function () { this._player.init(); }, t.prototype.hasStarted = function () { return !this.queued && this._player.hasStarted(); }, t.prototype.play = function () { !this.queued && this._player.play(); }, t.prototype.pause = function () { !this.queued && this._player.pause(); }, t.prototype.restart = function () { !this.queued && this._player.restart(); }, t.prototype.finish = function () { this._player.finish(); }, t.prototype.destroy = function () { this.destroyed = !0, this._player.destroy(); }, t.prototype.reset = function () { !this.queued && this._player.reset(); }, t.prototype.setPosition = function (t) { this.queued || this._player.setPosition(t); }, t.prototype.getPosition = function () { return this.queued ? 0 : this._player.getPosition(); }, t.prototype.triggerCallback = function (t) { var e = this._player; e.triggerCallback && e.triggerCallback(t); }, t; }();
            function rh(t) { return t && 1 === t.nodeType; }
            function ih(t, e) { var n = t.style.display; return t.style.display = null != e ? e : "none", n; }
            function ah(t, e, n, o, r) { var i = []; n.forEach((function (t) { return i.push(ih(t)); })); var a = []; o.forEach((function (n, o) { var i = {}; n.forEach((function (t) { var n = i[t] = e.computeStyle(o, t, r); n && 0 != n.length || (o.__ng_removed = Xd, a.push(o)); })), t.set(o, i); })); var s = 0; return n.forEach((function (t) { return ih(t, i[s++]); })), a; }
            function sh(t, e) { var n = new Map; if (t.forEach((function (t) { return n.set(t, []); })), 0 == e.length)
                return n; var o = new Set(e), r = new Map; return e.forEach((function (t) { var e = function t(e) { if (!e)
                return 1; var i = r.get(e); if (i)
                return i; var a = e.parentNode; return i = n.has(a) ? a : o.has(a) ? 1 : t(a), r.set(e, i), i; }(t); 1 !== e && n.get(e).push(t); })), n; }
            function lh(t, e) { if (t.classList)
                t.classList.add(e);
            else {
                var n = t.$$classes;
                n || (n = t.$$classes = {}), n[e] = !0;
            } }
            function uh(t, e) { if (t.classList)
                t.classList.remove(e);
            else {
                var n = t.$$classes;
                n && delete n[e];
            } }
            function ch(t, e, n) { Pp(n).onDone((function () { return t.processLeaveNode(e); })); }
            function ph(t, e, n) { var o = n.get(t); if (!o)
                return !1; var r = e.get(t); return r ? o.forEach((function (t) { return r.add(t); })) : e.set(t, o), n.delete(t), !0; }
            var dh = function () { function t(t, e, n) { var o = this; this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = function (t, e) { }, this._transitionEngine = new nh(t, e, n), this._timelineEngine = new Zd(t, e, n), this._transitionEngine.onRemovalComplete = function (t, e) { return o.onRemovalComplete(t, e); }; } return t.prototype.registerTrigger = function (t, e, n, o, r) { var i = t + "-" + o, a = this._triggerCache[i]; if (!a) {
                var s = [], l = kd(this._driver, r, s);
                if (s.length)
                    throw new Error('The animation trigger "' + o + '" has failed to build due to the following errors:\n - ' + s.join("\n - "));
                a = function (t, e) { return new Kd(t, e); }(o, l), this._triggerCache[i] = a;
            } this._transitionEngine.registerTrigger(e, o, a); }, t.prototype.register = function (t, e) { this._transitionEngine.register(t, e); }, t.prototype.destroy = function (t, e) { this._transitionEngine.destroy(t, e); }, t.prototype.onInsert = function (t, e, n, o) { this._transitionEngine.insertNode(t, e, n, o); }, t.prototype.onRemove = function (t, e, n, o) { this._transitionEngine.removeNode(t, e, o || !1, n); }, t.prototype.disableAnimations = function (t, e) { this._transitionEngine.markElementAsDisabled(t, e); }, t.prototype.process = function (t, e, n, r) { if ("@" == n.charAt(0)) {
                var i = Object(o.__read)(Bp(n), 2);
                this._timelineEngine.command(i[0], e, i[1], r);
            }
            else
                this._transitionEngine.trigger(t, e, n, r); }, t.prototype.listen = function (t, e, n, r, i) { if ("@" == n.charAt(0)) {
                var a = Object(o.__read)(Bp(n), 2);
                return this._timelineEngine.listen(a[0], e, a[1], i);
            } return this._transitionEngine.listen(t, e, n, r, i); }, t.prototype.flush = function (t) { void 0 === t && (t = -1), this._transitionEngine.flush(t); }, Object.defineProperty(t.prototype, "players", { get: function () { return this._transitionEngine.players.concat(this._timelineEngine.players); }, enumerable: !0, configurable: !0 }), t.prototype.whenRenderingDone = function () { return this._transitionEngine.whenRenderingDone(); }, t; }();
            function hh(t, e) { var n = null, o = null; return Array.isArray(e) && e.length ? (n = mh(e[0]), e.length > 1 && (o = mh(e[e.length - 1]))) : e && (n = mh(e)), n || o ? new fh(t, n, o) : null; }
            var fh = function () { function t(e, n, o) { this._element = e, this._startStyles = n, this._endStyles = o, this._state = 0; var r = t.initialStylesByElement.get(e); r || t.initialStylesByElement.set(e, r = {}), this._initialStyles = r; } return t.prototype.start = function () { this._state < 1 && (this._startStyles && id(this._element, this._startStyles, this._initialStyles), this._state = 1); }, t.prototype.finish = function () { this.start(), this._state < 2 && (id(this._element, this._initialStyles), this._endStyles && (id(this._element, this._endStyles), this._endStyles = null), this._state = 1); }, t.prototype.destroy = function () { this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (ad(this._element, this._startStyles), this._endStyles = null), this._endStyles && (ad(this._element, this._endStyles), this._endStyles = null), id(this._element, this._initialStyles), this._state = 3); }, t.initialStylesByElement = new WeakMap, t; }();
            function mh(t) { for (var e = null, n = Object.keys(t), o = 0; o < n.length; o++) {
                var r = n[o];
                gh(r) && ((e = e || {})[r] = t[r]);
            } return e; }
            function gh(t) { return "display" === t || "position" === t; }
            var yh = function () { function t(t, e, n, o, r, i, a) { var s = this; this._element = t, this._name = e, this._duration = n, this._delay = o, this._easing = r, this._fillMode = i, this._onDoneFn = a, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) { return s._handleCallback(t); }; } return t.prototype.apply = function () { var t, e, n; e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = Ch(t = this._element, "").trim()).length && (function (t, e) { for (var n = 0; n < t.length; n++)
                "," === t.charAt(n) && 0; }(n), e = n + ", " + e), kh(t, "", e), wh(this._element, this._eventFn, !1), this._startTime = Date.now(); }, t.prototype.pause = function () { bh(this._element, this._name, "paused"); }, t.prototype.resume = function () { bh(this._element, this._name, "running"); }, t.prototype.setPosition = function (t) { var e = vh(this._element, this._name); this._position = t * this._duration, kh(this._element, "Delay", "-" + this._position + "ms", e); }, t.prototype.getPosition = function () { return this._position; }, t.prototype._handleCallback = function (t) { var e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3)); t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish(); }, t.prototype.finish = function () { this._finished || (this._finished = !0, this._onDoneFn(), wh(this._element, this._eventFn, !0)); }, t.prototype.destroy = function () { var t, e, n, o; this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (o = _h(n = Ch(t = this._element, "").split(","), e)) >= 0 && (n.splice(o, 1), kh(t, "", n.join(",")))); }, t; }();
            function bh(t, e, n) { kh(t, "PlayState", n, vh(t, e)); }
            function vh(t, e) { var n = Ch(t, ""); return n.indexOf(",") > 0 ? _h(n.split(","), e) : _h([n], e); }
            function _h(t, e) { for (var n = 0; n < t.length; n++)
                if (t[n].indexOf(e) >= 0)
                    return n; return -1; }
            function wh(t, e, n) { n ? t.removeEventListener("animationend", e) : t.addEventListener("animationend", e); }
            function kh(t, e, n, o) { var r = "animation" + e; if (null != o) {
                var i = t.style[r];
                if (i.length) {
                    var a = i.split(",");
                    a[o] = n, n = a.join(",");
                }
            } t.style[r] = n; }
            function Ch(t, e) { return t.style["animation" + e]; }
            var xh = function () { function t(t, e, n, o, r, i, a, s) { this.element = t, this.keyframes = e, this.animationName = n, this._duration = o, this._delay = r, this._finalStyles = a, this._specialStyles = s, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = i || "linear", this.totalTime = o + r, this._buildStyler(); } return t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.destroy = function () { this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function (t) { return t(); })), this._onDestroyFns = []); }, t.prototype._flushDoneFns = function () { this._onDoneFns.forEach((function (t) { return t(); })), this._onDoneFns = []; }, t.prototype._flushStartFns = function () { this._onStartFns.forEach((function (t) { return t(); })), this._onStartFns = []; }, t.prototype.finish = function () { this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns()); }, t.prototype.setPosition = function (t) { this._styler.setPosition(t); }, t.prototype.getPosition = function () { return this._styler.getPosition(); }, t.prototype.hasStarted = function () { return this._state >= 2; }, t.prototype.init = function () { this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause()); }, t.prototype.play = function () { this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume(); }, t.prototype.pause = function () { this.init(), this._styler.pause(); }, t.prototype.restart = function () { this.reset(), this.play(); }, t.prototype.reset = function () { this._styler.destroy(), this._buildStyler(), this._styler.apply(); }, t.prototype._buildStyler = function () { var t = this; this._styler = new yh(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", (function () { return t.finish(); })); }, t.prototype.triggerCallback = function (t) { var e = "start" == t ? this._onStartFns : this._onDoneFns; e.forEach((function (t) { return t(); })), e.length = 0; }, t.prototype.beforeDestroy = function () { var t = this; this.init(); var e = {}; if (this.hasStarted()) {
                var n = this._state >= 3;
                Object.keys(this._finalStyles).forEach((function (o) { "offset" != o && (e[o] = n ? t._finalStyles[o] : yd(t.element, o)); }));
            } this.currentSnapshot = e; }, t; }(), Eh = function (t) { function e(e, n) { var o = t.call(this) || this; return o.element = e, o._startingStyles = {}, o.__initialized = !1, o._styles = Zp(n), o; } return Object(o.__extends)(e, t), e.prototype.init = function () { var e = this; !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach((function (t) { e._startingStyles[t] = e.element.style[t]; })), t.prototype.init.call(this)); }, e.prototype.play = function () { var e = this; this._startingStyles && (this.init(), Object.keys(this._styles).forEach((function (t) { return e.element.style.setProperty(t, e._styles[t]); })), t.prototype.play.call(this)); }, e.prototype.destroy = function () { var e = this; this._startingStyles && (Object.keys(this._startingStyles).forEach((function (t) { var n = e._startingStyles[t]; n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t); })), this._startingStyles = null, t.prototype.destroy.call(this)); }, e; }(Dp), Sh = function () { function t() { this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1; } return t.prototype.validateStyleProperty = function (t) { return Wp(t); }, t.prototype.matchesElement = function (t, e) { return Kp(t, e); }, t.prototype.containsElement = function (t, e) { return $p(t, e); }, t.prototype.query = function (t, e, n) { return Gp(t, e, n); }, t.prototype.computeStyle = function (t, e, n) { return window.getComputedStyle(t)[e]; }, t.prototype.buildKeyframeElement = function (t, e, n) { n = n.map((function (t) { return Zp(t); })); var o = "@keyframes " + e + " {\n", r = ""; n.forEach((function (t) { r = " "; var e = parseFloat(t.offset); o += "" + r + 100 * e + "% {\n", r += " ", Object.keys(t).forEach((function (e) { var n = t[e]; switch (e) {
                case "offset": return;
                case "easing": return void (n && (o += r + "animation-timing-function: " + n + ";\n"));
                default: return void (o += "" + r + e + ": " + n + ";\n");
            } })), o += r + "}\n"; })), o += "}\n"; var i = document.createElement("style"); return i.innerHTML = o, i; }, t.prototype.animate = function (t, e, n, o, r, i, a) { void 0 === i && (i = []), a && this._notifyFaultyScrubber(); var s = i.filter((function (t) { return t instanceof xh; })), l = {}; fd(n, o) && s.forEach((function (t) { var e = t.currentSnapshot; Object.keys(e).forEach((function (t) { return l[t] = e[t]; })); })); var u = function (t) { var e = {}; return t && (Array.isArray(t) ? t : [t]).forEach((function (t) { Object.keys(t).forEach((function (n) { "offset" != n && "easing" != n && (e[n] = t[n]); })); })), e; }(e = md(t, e, l)); if (0 == n)
                return new Eh(t, u); var c = "gen_css_kf_" + this._count++, p = this.buildKeyframeElement(t, c, e); document.querySelector("head").appendChild(p); var d = hh(t, e), h = new xh(t, e, c, n, o, r, u, d); return h.onDestroy((function () { var t; (t = p).parentNode.removeChild(t); })), h; }, t.prototype._notifyFaultyScrubber = function () { this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0); }, t; }(), Th = function () { function t(t, e, n, o) { this.element = t, this.keyframes = e, this.options = n, this._specialStyles = o, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay; } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) { return t(); })), this._onDoneFns = []); }, t.prototype.init = function () { this._buildPlayer(), this._preparePlayerBeforeStart(); }, t.prototype._buildPlayer = function () { var t = this; if (!this._initialized) {
                this._initialized = !0;
                var e = this.keyframes;
                this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", (function () { return t._onFinish(); }));
            } }, t.prototype._preparePlayerBeforeStart = function () { this._delay ? this._resetDomPlayerState() : this.domPlayer.pause(); }, t.prototype._triggerWebAnimation = function (t, e, n) { return t.animate(e, n); }, t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.play = function () { this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach((function (t) { return t(); })), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play(); }, t.prototype.pause = function () { this.init(), this.domPlayer.pause(); }, t.prototype.finish = function () { this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish(); }, t.prototype.reset = function () { this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1; }, t.prototype._resetDomPlayerState = function () { this.domPlayer && this.domPlayer.cancel(); }, t.prototype.restart = function () { this.reset(), this.play(); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.destroy = function () { this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function (t) { return t(); })), this._onDestroyFns = []); }, t.prototype.setPosition = function (t) { this.domPlayer.currentTime = t * this.time; }, t.prototype.getPosition = function () { return this.domPlayer.currentTime / this.time; }, Object.defineProperty(t.prototype, "totalTime", { get: function () { return this._delay + this._duration; }, enumerable: !0, configurable: !0 }), t.prototype.beforeDestroy = function () { var t = this, e = {}; this.hasStarted() && Object.keys(this._finalKeyframe).forEach((function (n) { "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : yd(t.element, n)); })), this.currentSnapshot = e; }, t.prototype.triggerCallback = function (t) { var e = "start" == t ? this._onStartFns : this._onDoneFns; e.forEach((function (t) { return t(); })), e.length = 0; }, t; }(), Oh = function () { function t() { this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(Dh().toString()), this._cssKeyframesDriver = new Sh; } return t.prototype.validateStyleProperty = function (t) { return Wp(t); }, t.prototype.matchesElement = function (t, e) { return Kp(t, e); }, t.prototype.containsElement = function (t, e) { return $p(t, e); }, t.prototype.query = function (t, e, n) { return Gp(t, e, n); }, t.prototype.computeStyle = function (t, e, n) { return window.getComputedStyle(t)[e]; }, t.prototype.overrideWebAnimationsSupport = function (t) { this._isNativeImpl = t; }, t.prototype.animate = function (t, e, n, o, r, i, a) { if (void 0 === i && (i = []), !a && !this._isNativeImpl)
                return this._cssKeyframesDriver.animate(t, e, n, o, r, i); var s = { duration: n, delay: o, fill: 0 == o ? "both" : "forwards" }; r && (s.easing = r); var l = {}, u = i.filter((function (t) { return t instanceof Th; })); fd(n, o) && u.forEach((function (t) { var e = t.currentSnapshot; Object.keys(e).forEach((function (t) { return l[t] = e[t]; })); })); var c = hh(t, e = md(t, e = e.map((function (t) { return nd(t, !1); })), l)); return new Th(t, e, s, c); }, t; }();
            function Dh() { return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}; }
            var Ah = function (t) { function e(e, n) { var o = t.call(this) || this; return o._nextAnimationId = 0, o._renderer = e.createRenderer(n.body, { id: "0", encapsulation: jt.None, styles: [], data: { animation: [] } }), o; } return Object(o.__extends)(e, t), e.prototype.build = function (t) { var e = this._nextAnimationId.toString(); this._nextAnimationId++; var n = Array.isArray(t) ? Sp(t) : t; return Nh(this._renderer, null, e, "register", [n]), new Ih(e, this._renderer); }, e; }(xp), Ih = function (t) { function e(e, n) { var o = t.call(this) || this; return o._id = e, o._renderer = n, o; } return Object(o.__extends)(e, t), e.prototype.create = function (t, e) { return new Ph(this._id, t, e || {}, this._renderer); }, e; }(Ep), Ph = function () { function t(t, e, n, o) { this.id = t, this.element = e, this._renderer = o, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n); } return t.prototype._listen = function (t, e) { return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e); }, t.prototype._command = function (t) { for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]; return Nh(this._renderer, this.element, this.id, t, e); }, t.prototype.onDone = function (t) { this._listen("done", t); }, t.prototype.onStart = function (t) { this._listen("start", t); }, t.prototype.onDestroy = function (t) { this._listen("destroy", t); }, t.prototype.init = function () { this._command("init"); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.play = function () { this._command("play"), this._started = !0; }, t.prototype.pause = function () { this._command("pause"); }, t.prototype.restart = function () { this._command("restart"); }, t.prototype.finish = function () { this._command("finish"); }, t.prototype.destroy = function () { this._command("destroy"); }, t.prototype.reset = function () { this._command("reset"); }, t.prototype.setPosition = function (t) { this._command("setPosition", t); }, t.prototype.getPosition = function () { return 0; }, t; }();
            function Nh(t, e, n, o, r) { return t.setProperty(e, "@@" + n + ":" + o, r); }
            var Fh = function () { function t(t, e, n) { this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function (t, e) { e && e.parentNode(t) && e.removeChild(t.parentNode, t); }; } return t.prototype.createRenderer = function (t, e) { var n = this, o = this.delegate.createRenderer(t, e); if (!(t && e && e.data && e.data.animation)) {
                var r = this._rendererCache.get(o);
                return r || (r = new Rh("", o, this.engine), this._rendererCache.set(o, r)), r;
            } var i = e.id, a = e.id + "-" + this._currentId; return this._currentId++, this.engine.register(a, t), e.data.animation.forEach((function (e) { return n.engine.registerTrigger(i, a, t, e.name, e); })), new Mh(this, a, o, this.engine); }, t.prototype.begin = function () { this._cdRecurDepth++, this.delegate.begin && this.delegate.begin(); }, t.prototype._scheduleCountTask = function () { var t = this; this.promise.then((function () { t._microtaskId++; })); }, t.prototype.scheduleListenerCallback = function (t, e, n) { var r = this; t >= 0 && t < this._microtaskId ? this._zone.run((function () { return e(n); })) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then((function () { r._zone.run((function () { r._animationCallbacksBuffer.forEach((function (t) { var e = Object(o.__read)(t, 2); (0, e[0])(e[1]); })), r._animationCallbacksBuffer = []; })); })), this._animationCallbacksBuffer.push([e, n])); }, t.prototype.end = function () { var t = this; this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular((function () { t._scheduleCountTask(), t.engine.flush(t._microtaskId); })), this.delegate.end && this.delegate.end(); }, t.prototype.whenRenderingDone = function () { return this.engine.whenRenderingDone(); }, t; }(), Rh = function () { function t(t, e, n) { this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function (t) { return e.destroyNode(t); } : null; } return Object.defineProperty(t.prototype, "data", { get: function () { return this.delegate.data; }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function () { this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy(); }, t.prototype.createElement = function (t, e) { return this.delegate.createElement(t, e); }, t.prototype.createComment = function (t) { return this.delegate.createComment(t); }, t.prototype.createText = function (t) { return this.delegate.createText(t); }, t.prototype.appendChild = function (t, e) { this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1); }, t.prototype.insertBefore = function (t, e, n) { this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0); }, t.prototype.removeChild = function (t, e, n) { this.engine.onRemove(this.namespaceId, e, this.delegate, n); }, t.prototype.selectRootElement = function (t, e) { return this.delegate.selectRootElement(t, e); }, t.prototype.parentNode = function (t) { return this.delegate.parentNode(t); }, t.prototype.nextSibling = function (t) { return this.delegate.nextSibling(t); }, t.prototype.setAttribute = function (t, e, n, o) { this.delegate.setAttribute(t, e, n, o); }, t.prototype.removeAttribute = function (t, e, n) { this.delegate.removeAttribute(t, e, n); }, t.prototype.addClass = function (t, e) { this.delegate.addClass(t, e); }, t.prototype.removeClass = function (t, e) { this.delegate.removeClass(t, e); }, t.prototype.setStyle = function (t, e, n, o) { this.delegate.setStyle(t, e, n, o); }, t.prototype.removeStyle = function (t, e, n) { this.delegate.removeStyle(t, e, n); }, t.prototype.setProperty = function (t, e, n) { "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n); }, t.prototype.setValue = function (t, e) { this.delegate.setValue(t, e); }, t.prototype.listen = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.disableAnimations = function (t, e) { this.engine.disableAnimations(t, e); }, t; }(), Mh = function (t) { function e(e, n, o, r) { var i = t.call(this, n, o, r) || this; return i.factory = e, i.namespaceId = n, i; } return Object(o.__extends)(e, t), e.prototype.setProperty = function (t, e, n) { "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n); }, e.prototype.listen = function (t, e, n) { var r, i, a, s = this; if ("@" == e.charAt(0)) {
                var l = function (t) { switch (t) {
                    case "body": return document.body;
                    case "document": return document;
                    case "window": return window;
                    default: return t;
                } }(t), u = e.substr(1), c = "";
                return "@" != u.charAt(0) && (u = (r = Object(o.__read)((i = u, a = i.indexOf("."), [i.substring(0, a), i.substr(a + 1)]), 2))[0], c = r[1]), this.engine.listen(this.namespaceId, l, u, c, (function (t) { s.factory.scheduleListenerCallback(t._data || -1, n, t); }));
            } return this.delegate.listen(t, e, n); }, e; }(Rh), jh = function (t) { function e(e, n, o) { return t.call(this, e.body, n, o) || this; } return Object(o.__extends)(e, t), e; }(dh), Bh = new kt("AnimationModuleType"), Vh = [{ provide: xp, useClass: Ah }, { provide: Vd, useFactory: function () { return new Ld; } }, { provide: dh, useClass: jh }, { provide: Je, useFactory: function (t, e, n) { return new Fh(t, e, n); }, deps: [El, dh, $r] }], Lh = (Object(o.__spread)([{ provide: Yp, useFactory: function () { return "function" == typeof Dh() ? new Oh : new Sh; } }, { provide: Bh, useValue: "BrowserAnimations" }], Vh), Object(o.__spread)([{ provide: Yp, useClass: Qp }, { provide: Bh, useValue: "NoopAnimations" }], Vh), Ln({ encapsulation: 2, styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}"], data: {} }));
            function Hh(t) { return qi(2, [Ai(671088640, 1, { _thumbEl: 0 }), Ai(671088640, 2, { _thumbBarEl: 0 }), Ai(671088640, 3, { _inputElement: 0 }), (t()(), Ei(3, 0, [["label", 1]], null, 13, "label", [["class", "mat-slide-toggle-label"]], [[1, "for", 0]], null, null, null, null)), (t()(), Ei(4, 0, [[2, 0], ["toggleBar", 1]], null, 7, "div", [["class", "mat-slide-toggle-bar"]], [[2, "mat-slide-toggle-bar-no-side-margin", null]], null, null, null, null)), (t()(), Ei(5, 0, [[3, 0], ["input", 1]], null, 0, "input", [["class", "mat-slide-toggle-input cdk-visually-hidden"], ["role", "switch"], ["type", "checkbox"]], [[8, "id", 0], [8, "required", 0], [8, "tabIndex", 0], [8, "checked", 0], [8, "disabled", 0], [1, "name", 0], [1, "aria-checked", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0]], [[null, "change"], [null, "click"]], (function (t, e, n) { var o = !0, r = t.component; return "change" === e && (o = !1 !== r._onChangeEvent(n) && o), "click" === e && (o = !1 !== r._onInputClick(n) && o), o; }), null, null)), (t()(), Ei(6, 0, [[1, 0], ["thumbContainer", 1]], null, 5, "div", [["class", "mat-slide-toggle-thumb-container"]], null, [[null, "slidestart"], [null, "slide"], [null, "slideend"]], (function (t, e, n) { var o = !0, r = t.component; return "slidestart" === e && (o = !1 !== r._onDragStart() && o), "slide" === e && (o = !1 !== r._onDrag(n) && o), "slideend" === e && (o = !1 !== r._onDragEnd() && o), o; }), null, null)), (t()(), Ei(7, 0, null, null, 0, "div", [["class", "mat-slide-toggle-thumb"]], null, null, null, null, null)), (t()(), Ei(8, 0, null, null, 3, "div", [["class", "mat-slide-toggle-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), Zo(9, 212992, null, 0, up, [Qe, $r, Tc, [2, lp], [2, Bh]], { centered: [0, "centered"], radius: [1, "radius"], animation: [2, "animation"], disabled: [3, "disabled"], trigger: [4, "trigger"] }, null), ji(10, { enterDuration: 0 }), (t()(), Ei(11, 0, null, null, 0, "div", [["class", "mat-ripple-element mat-slide-toggle-persistent-ripple"]], null, null, null, null, null)), (t()(), Ei(12, 0, [["labelContent", 1]], null, 4, "span", [["class", "mat-slide-toggle-content"]], null, [[null, "cdkObserveContent"]], (function (t, e, n) { var o = !0; return "cdkObserveContent" === e && (o = !1 !== t.component._onLabelTextChange() && o), o; }), null, null)), Zo(13, 1196032, null, 0, kp, [wp, Qe, $r], null, { event: "cdkObserveContent" }), (t()(), Ei(14, 0, null, null, 1, "span", [["style", "display:none"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\xa0"])), Ri(null, 0)], (function (t, e) { var n = e.component, o = t(e, 10, 0, 150); t(e, 9, 0, !0, 20, o, n.disableRipple || n.disabled, Mo(e, 3)); }), (function (t, e) { var n = e.component; t(e, 3, 0, n.inputId), t(e, 4, 0, !Mo(e, 12).textContent || !Mo(e, 12).textContent.trim()), t(e, 5, 0, n.inputId, n.required, n.tabIndex, n.checked, n.disabled, n.name, n.checked.toString(), n.ariaLabel, n.ariaLabelledby), t(e, 8, 0, Mo(e, 9).unbounded); })); }
            function qh(t, e, n, o) { return a(n) && (o = n, n = void 0), o ? qh(t, e, n).pipe(j((function (t) { return r(t) ? o.apply(void 0, t) : o(t); }))) : new _((function (o) { !function t(e, n, o, r, i) { var a; if (function (t) { return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener; }(e)) {
                var s = e;
                e.addEventListener(n, o, i), a = function () { return s.removeEventListener(n, o, i); };
            }
            else if (function (t) { return t && "function" == typeof t.on && "function" == typeof t.off; }(e)) {
                var l = e;
                e.on(n, o), a = function () { return l.off(n, o); };
            }
            else if (function (t) { return t && "function" == typeof t.addListener && "function" == typeof t.removeListener; }(e)) {
                var u = e;
                e.addListener(n, o), a = function () { return u.removeListener(n, o); };
            }
            else {
                if (!e || !e.length)
                    throw new TypeError("Invalid event target");
                for (var c = 0, p = e.length; c < p; c++)
                    t(e[c], n, o, r, i);
            } r.add(a); }(t, e, (function (t) { o.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t); }), o, n); })); }
            var zh = function () { function t(t) { this.project = t; } return t.prototype.call = function (t, e) { return e.subscribe(new Uh(t, this.project)); }, t; }(), Uh = function (t) { function e(e, n) { var o = t.call(this, e) || this; return o.project = n, o.index = 0, o; } return o.__extends(e, t), e.prototype._next = function (t) { var e, n = this.index++; try {
                e = this.project(t, n);
            }
            catch (o) {
                return void this.destination.error(o);
            } this._innerSub(e, t, n); }, e.prototype._innerSub = function (t, e, n) { var o = this.innerSubscription; o && o.unsubscribe(); var r = new O(this, e, n), i = this.destination; i.add(r), this.innerSubscription = R(this, t, void 0, void 0, r), this.innerSubscription !== r && i.add(this.innerSubscription); }, e.prototype._complete = function () { var e = this.innerSubscription; e && !e.closed || t.prototype._complete.call(this), this.unsubscribe(); }, e.prototype._unsubscribe = function () { this.innerSubscription = null; }, e.prototype.notifyComplete = function (e) { this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this); }, e.prototype.notifyNext = function (t, e, n, o, r) { this.destination.next(e); }, e; }(M);
            function Wh(t) { return function (e) { return e.lift(new Kh(t)); }; }
            var Kh = function () { function t(t) { this.notifier = t; } return t.prototype.call = function (t, e) { var n = new $h(t), o = R(n, this.notifier); return o && !n.seenValue ? (n.add(o), e.subscribe(n)) : n; }, t; }(), $h = function (t) { function e(e) { var n = t.call(this, e) || this; return n.seenValue = !1, n; } return o.__extends(e, t), e.prototype.notifyNext = function (t, e, n, o, r) { this.seenValue = !0, this.complete(); }, e.prototype.notifyComplete = function () { }, e; }(M);
            function Gh() { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; return function (e) { var n; return "function" == typeof t[t.length - 1] && (n = t.pop()), e.lift(new Zh(t, n)); }; }
            var Zh = function () { function t(t, e) { this.observables = t, this.project = e; } return t.prototype.call = function (t, e) { return e.subscribe(new Qh(t, this.observables, this.project)); }, t; }(), Qh = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; r.observables = n, r.project = o, r.toRespond = []; var i = n.length; r.values = new Array(i); for (var a = 0; a < i; a++)
                r.toRespond.push(a); for (a = 0; a < i; a++) {
                var s = n[a];
                r.add(R(r, s, s, a));
            } return r; } return o.__extends(e, t), e.prototype.notifyNext = function (t, e, n, o, r) { this.values[n] = e; var i = this.toRespond; if (i.length > 0) {
                var a = i.indexOf(n);
                -1 !== a && i.splice(a, 1);
            } }, e.prototype.notifyComplete = function () { }, e.prototype._next = function (t) { if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e);
            } }, e.prototype._tryProject = function (t) { var e; try {
                e = this.project.apply(this, t);
            }
            catch (n) {
                return void this.destination.error(n);
            } this.destination.next(e); }, e; }(M);
            function Yh(t) { return parseInt("" + t, 10); }
            function Xh(t) { return null != t ? "" + t : ""; }
            function Jh(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t; }
            function tf(t) { return null != t; }
            function ef(t, e) { return t && t.className && t.className.split && t.className.split(/\s+/).indexOf(e) >= 0; }
            "undefined" == typeof Element || Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (t) { var e = this; if (!document.documentElement.contains(e))
                return null; do {
                if (e.matches(t))
                    return e;
                e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType); return null; });
            var nf = function () { return function () { }; }(), of = function () { function t() { this.dismissible = !0, this.type = "warning"; } return t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }(), rf = function () { function t(t, e, n) { this._renderer = e, this._element = n, this.close = new br, this.dismissible = t.dismissible, this.type = t.type; } return t.prototype.closeHandler = function () { this.close.emit(null); }, t.prototype.ngOnChanges = function (t) { var e = t.type; e && !e.firstChange && (this._renderer.removeClass(this._element.nativeElement, "alert-" + e.previousValue), this._renderer.addClass(this._element.nativeElement, "alert-" + e.currentValue)); }, t.prototype.ngOnInit = function () { this._renderer.addClass(this._element.nativeElement, "alert-" + this.type); }, t; }(), af = function () { return function () { }; }(), sf = function () { return function () { }; }(), lf = function () { return function () { }; }(), uf = function () { return function () { }; }(), cf = function () { function t(t, e, n) { this.year = Jh(t) ? t : null, this.month = Jh(e) ? e : null, this.day = Jh(n) ? n : null; } return t.from = function (e) { return e instanceof t ? e : e ? new t(e.year, e.month, e.day) : null; }, t.prototype.equals = function (t) { return t && this.year === t.year && this.month === t.month && this.day === t.day; }, t.prototype.before = function (t) { return !!t && (this.year === t.year ? this.month === t.month ? this.day !== t.day && this.day < t.day : this.month < t.month : this.year < t.year); }, t.prototype.after = function (t) { return !!t && (this.year === t.year ? this.month === t.month ? this.day !== t.day && this.day > t.day : this.month > t.month : this.year > t.year); }, t; }();
            function pf(t) { return new cf(t.getFullYear(), t.getMonth() + 1, t.getDate()); }
            function df(t) { var e = new Date(t.year, t.month - 1, t.day, 12); return isNaN(e.getTime()) || e.setFullYear(t.year), e; }
            function hf() { return new mf; }
            var ff = function () { function t() { } return t.ngInjectableDef = ct({ factory: hf, token: t, providedIn: "root" }), t; }(), mf = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.getDaysPerWeek = function () { return 7; }, e.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }, e.prototype.getWeeksPerMonth = function () { return 6; }, e.prototype.getNext = function (t, e, n) { void 0 === e && (e = "d"), void 0 === n && (n = 1); var o = df(t), r = !0, i = o.getMonth(); switch (e) {
                case "y":
                    o.setFullYear(o.getFullYear() + n);
                    break;
                case "m":
                    o.setMonth(i += n), (i %= 12) < 0 && (i += 12);
                    break;
                case "d":
                    o.setDate(o.getDate() + n), r = !1;
                    break;
                default: return t;
            } return r && o.getMonth() !== i && o.setDate(0), pf(o); }, e.prototype.getPrev = function (t, e, n) { return void 0 === e && (e = "d"), void 0 === n && (n = 1), this.getNext(t, e, -n); }, e.prototype.getWeekday = function (t) { var e = df(t).getDay(); return 0 === e ? 7 : e; }, e.prototype.getWeekNumber = function (t, e) { 7 === e && (e = 0); var n = df(t[(11 - e) % 7]); n.setDate(n.getDate() + 4 - (n.getDay() || 7)); var o = n.getTime(); return n.setMonth(0), n.setDate(1), Math.floor(Math.round((o - n.getTime()) / 864e5) / 7) + 1; }, e.prototype.getToday = function () { return pf(new Date); }, e.prototype.isValid = function (t) { if (!(t && Jh(t.year) && Jh(t.month) && Jh(t.day)))
                return !1; if (0 === t.year)
                return !1; var e = df(t); return !isNaN(e.getTime()) && e.getFullYear() === t.year && e.getMonth() + 1 === t.month && e.getDate() === t.day; }, e; }(ff);
            function gf(t, e) { return !function (t, e) { return !t && !e || !!t && !!e && t.equals(e); }(t, e); }
            function yf(t, e) { return !(!t && !e || t && e && t.year === e.year && t.month === e.month); }
            function bf(t, e, n) { return t && e && t.before(e) ? e : t && n && t.after(n) ? n : t; }
            function vf(t, e) { var n = e.minDate, o = e.maxDate, r = e.disabled, i = e.markDisabled; return !(!tf(t) || r || i && i(t, { year: t.year, month: t.month }) || n && t.before(n) || o && t.after(o)); }
            var _f = function () { function t() { } return t.prototype.getDayNumerals = function (t) { return "" + t.day; }, t.prototype.getWeekNumerals = function (t) { return "" + t; }, t.prototype.getYearNumerals = function (t) { return "" + t; }, t.ngInjectableDef = ct({ factory: function () { return t = Dt(Ar), new wf(t); var t; }, token: t, providedIn: "root" }), t; }(), wf = function (t) { function e(e) { var n = t.call(this) || this; n._locale = e; var o = is(e, es.Standalone, ns.Short); return n._weekdaysShort = o.map((function (t, e) { return o[(e + 1) % 7]; })), n._monthsShort = as(e, es.Standalone, ns.Abbreviated), n._monthsFull = as(e, es.Standalone, ns.Wide), n; } return Object(o.__extends)(e, t), e.prototype.getWeekdayShortName = function (t) { return this._weekdaysShort[t - 1]; }, e.prototype.getMonthShortName = function (t) { return this._monthsShort[t - 1]; }, e.prototype.getMonthFullName = function (t) { return this._monthsFull[t - 1]; }, e.prototype.getDayAriaLabel = function (t) { return function (t, e, n, r) { var i = function (t) { if (Os(t))
                return t; if ("number" == typeof t && !isNaN(t))
                return new Date(t); if ("string" == typeof t) {
                t = t.trim();
                var e, n = parseFloat(t);
                if (!isNaN(t - n))
                    return new Date(n);
                if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                    var r = Object(o.__read)(t.split("-").map((function (t) { return +t; })), 3);
                    return new Date(r[0], r[1] - 1, r[2]);
                }
                if (e = t.match(fs))
                    return function (t) { var e = new Date(0), n = 0, o = 0, r = t[8] ? e.setUTCFullYear : e.setFullYear, i = t[8] ? e.setUTCHours : e.setHours; t[9] && (n = Number(t[9] + t[10]), o = Number(t[9] + t[11])), r.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3])); var a = Number(t[4] || 0) - n, s = Number(t[5] || 0) - o, l = Number(t[6] || 0), u = Math.round(1e3 * parseFloat("0." + (t[7] || 0))); return i.call(e, a, s, l, u), e; }(e);
            } var i = new Date(t); if (!Os(i))
                throw new Error('Unable to convert "' + t + '" into a date'); return i; }(t); e = function t(e, n) { var o = function (t) { return yr(t)[fr.LocaleId]; }(e); if (ms[o] = ms[o] || {}, ms[o][n])
                return ms[o][n]; var r = ""; switch (n) {
                case "shortDate":
                    r = ss(e, os.Short);
                    break;
                case "mediumDate":
                    r = ss(e, os.Medium);
                    break;
                case "longDate":
                    r = ss(e, os.Long);
                    break;
                case "fullDate":
                    r = ss(e, os.Full);
                    break;
                case "shortTime":
                    r = ls(e, os.Short);
                    break;
                case "mediumTime":
                    r = ls(e, os.Medium);
                    break;
                case "longTime":
                    r = ls(e, os.Long);
                    break;
                case "fullTime":
                    r = ls(e, os.Full);
                    break;
                case "short":
                    var i = t(e, "shortTime"), a = t(e, "shortDate");
                    r = _s(us(e, os.Short), [i, a]);
                    break;
                case "medium":
                    var s = t(e, "mediumTime"), l = t(e, "mediumDate");
                    r = _s(us(e, os.Medium), [s, l]);
                    break;
                case "long":
                    var u = t(e, "longTime"), c = t(e, "longDate");
                    r = _s(us(e, os.Long), [u, c]);
                    break;
                case "full":
                    var p = t(e, "fullTime"), d = t(e, "fullDate");
                    r = _s(us(e, os.Full), [p, d]);
            } return r && (ms[o][n] = r), r; }(n, e) || e; for (var a, s = []; e;) {
                if (!(a = gs.exec(e))) {
                    s.push(e);
                    break;
                }
                var l = (s = s.concat(a.slice(1))).pop();
                if (!l)
                    break;
                e = l;
            } var u = i.getTimezoneOffset(); r && (u = Ts(r, u), i = function (t, e, n) { var o = t.getTimezoneOffset(); return function (t, e) { return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t; }(t, -1 * (Ts(e, o) - o)); }(i, r)); var c = ""; return s.forEach((function (t) { var e = function (t) { if (Ss[t])
                return Ss[t]; var e; switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    e = Cs(vs.Eras, ns.Abbreviated);
                    break;
                case "GGGG":
                    e = Cs(vs.Eras, ns.Wide);
                    break;
                case "GGGGG":
                    e = Cs(vs.Eras, ns.Narrow);
                    break;
                case "y":
                    e = ks(bs.FullYear, 1, 0, !1, !0);
                    break;
                case "yy":
                    e = ks(bs.FullYear, 2, 0, !0, !0);
                    break;
                case "yyy":
                    e = ks(bs.FullYear, 3, 0, !1, !0);
                    break;
                case "yyyy":
                    e = ks(bs.FullYear, 4, 0, !1, !0);
                    break;
                case "M":
                case "L":
                    e = ks(bs.Month, 1, 1);
                    break;
                case "MM":
                case "LL":
                    e = ks(bs.Month, 2, 1);
                    break;
                case "MMM":
                    e = Cs(vs.Months, ns.Abbreviated);
                    break;
                case "MMMM":
                    e = Cs(vs.Months, ns.Wide);
                    break;
                case "MMMMM":
                    e = Cs(vs.Months, ns.Narrow);
                    break;
                case "LLL":
                    e = Cs(vs.Months, ns.Abbreviated, es.Standalone);
                    break;
                case "LLLL":
                    e = Cs(vs.Months, ns.Wide, es.Standalone);
                    break;
                case "LLLLL":
                    e = Cs(vs.Months, ns.Narrow, es.Standalone);
                    break;
                case "w":
                    e = Es(1);
                    break;
                case "ww":
                    e = Es(2);
                    break;
                case "W":
                    e = Es(1, !0);
                    break;
                case "d":
                    e = ks(bs.Date, 1);
                    break;
                case "dd":
                    e = ks(bs.Date, 2);
                    break;
                case "E":
                case "EE":
                case "EEE":
                    e = Cs(vs.Days, ns.Abbreviated);
                    break;
                case "EEEE":
                    e = Cs(vs.Days, ns.Wide);
                    break;
                case "EEEEE":
                    e = Cs(vs.Days, ns.Narrow);
                    break;
                case "EEEEEE":
                    e = Cs(vs.Days, ns.Short);
                    break;
                case "a":
                case "aa":
                case "aaa":
                    e = Cs(vs.DayPeriods, ns.Abbreviated);
                    break;
                case "aaaa":
                    e = Cs(vs.DayPeriods, ns.Wide);
                    break;
                case "aaaaa":
                    e = Cs(vs.DayPeriods, ns.Narrow);
                    break;
                case "b":
                case "bb":
                case "bbb":
                    e = Cs(vs.DayPeriods, ns.Abbreviated, es.Standalone, !0);
                    break;
                case "bbbb":
                    e = Cs(vs.DayPeriods, ns.Wide, es.Standalone, !0);
                    break;
                case "bbbbb":
                    e = Cs(vs.DayPeriods, ns.Narrow, es.Standalone, !0);
                    break;
                case "B":
                case "BB":
                case "BBB":
                    e = Cs(vs.DayPeriods, ns.Abbreviated, es.Format, !0);
                    break;
                case "BBBB":
                    e = Cs(vs.DayPeriods, ns.Wide, es.Format, !0);
                    break;
                case "BBBBB":
                    e = Cs(vs.DayPeriods, ns.Narrow, es.Format, !0);
                    break;
                case "h":
                    e = ks(bs.Hours, 1, -12);
                    break;
                case "hh":
                    e = ks(bs.Hours, 2, -12);
                    break;
                case "H":
                    e = ks(bs.Hours, 1);
                    break;
                case "HH":
                    e = ks(bs.Hours, 2);
                    break;
                case "m":
                    e = ks(bs.Minutes, 1);
                    break;
                case "mm":
                    e = ks(bs.Minutes, 2);
                    break;
                case "s":
                    e = ks(bs.Seconds, 1);
                    break;
                case "ss":
                    e = ks(bs.Seconds, 2);
                    break;
                case "S":
                    e = ks(bs.FractionalSeconds, 1);
                    break;
                case "SS":
                    e = ks(bs.FractionalSeconds, 2);
                    break;
                case "SSS":
                    e = ks(bs.FractionalSeconds, 3);
                    break;
                case "Z":
                case "ZZ":
                case "ZZZ":
                    e = xs(ys.Short);
                    break;
                case "ZZZZZ":
                    e = xs(ys.Extended);
                    break;
                case "O":
                case "OO":
                case "OOO":
                case "z":
                case "zz":
                case "zzz":
                    e = xs(ys.ShortGMT);
                    break;
                case "OOOO":
                case "ZZZZ":
                case "zzzz":
                    e = xs(ys.Long);
                    break;
                default: return null;
            } return Ss[t] = e, e; }(t); c += e ? e(i, n, u) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'"); })), c; }(new Date(t.year, t.month - 1, t.day), "fullDate", this._locale); }, e; }(_f), kf = function () { function t(t, e) { this._calendar = t, this._i18n = e, this._model$ = new E, this._select$ = new E, this._state = { disabled: !1, displayMonths: 1, firstDayOfWeek: 1, focusVisible: !1, months: [], navigation: "select", outsideDays: "visible", prevDisabled: !1, nextDisabled: !1, selectBoxes: { years: [], months: [] }, selectedDate: null }; } return Object.defineProperty(t.prototype, "model$", { get: function () { return this._model$.pipe(Lc((function (t) { return t.months.length > 0; }))); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "select$", { get: function () { return this._select$.pipe(Lc((function (t) { return null !== t; }))); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dayTemplateData", { set: function (t) { this._state.dayTemplateData !== t && this._nextState({ dayTemplateData: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { set: function (t) { this._state.disabled !== t && this._nextState({ disabled: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "displayMonths", { set: function (t) { Jh(t = Yh(t)) && t > 0 && this._state.displayMonths !== t && this._nextState({ displayMonths: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "firstDayOfWeek", { set: function (t) { Jh(t = Yh(t)) && t >= 0 && this._state.firstDayOfWeek !== t && this._nextState({ firstDayOfWeek: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "focusVisible", { set: function (t) { this._state.focusVisible === t || this._state.disabled || this._nextState({ focusVisible: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "maxDate", { set: function (t) { var e = this.toValidDate(t, null); gf(this._state.maxDate, e) && this._nextState({ maxDate: e }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "markDisabled", { set: function (t) { this._state.markDisabled !== t && this._nextState({ markDisabled: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "minDate", { set: function (t) { var e = this.toValidDate(t, null); gf(this._state.minDate, e) && this._nextState({ minDate: e }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "navigation", { set: function (t) { this._state.navigation !== t && this._nextState({ navigation: t }); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "outsideDays", { set: function (t) { this._state.outsideDays !== t && this._nextState({ outsideDays: t }); }, enumerable: !0, configurable: !0 }), t.prototype.focus = function (t) { !this._state.disabled && this._calendar.isValid(t) && gf(this._state.focusDate, t) && this._nextState({ focusDate: t }); }, t.prototype.focusMove = function (t, e) { this.focus(this._calendar.getNext(this._state.focusDate, t, e)); }, t.prototype.focusSelect = function () { vf(this._state.focusDate, this._state) && this.select(this._state.focusDate, { emitEvent: !0 }); }, t.prototype.open = function (t) { var e = this.toValidDate(t, this._calendar.getToday()); this._state.disabled || this._state.firstDate && !yf(this._state.firstDate, t) || this._nextState({ firstDate: e }); }, t.prototype.select = function (t, e) { void 0 === e && (e = {}); var n = this.toValidDate(t, null); this._state.disabled || (gf(this._state.selectedDate, n) && this._nextState({ selectedDate: n }), e.emitEvent && vf(n, this._state) && this._select$.next(n)); }, t.prototype.toValidDate = function (t, e) { var n = cf.from(t); return void 0 === e && (e = this._calendar.getToday()), this._calendar.isValid(n) ? n : e; }, t.prototype._nextState = function (t) { var e = this._updateState(t); this._patchContexts(e), this._state = e, this._model$.next(this._state); }, t.prototype._patchContexts = function (t) { var e = t.months, n = t.displayMonths, o = t.selectedDate, r = t.focusDate, i = t.focusVisible, a = t.disabled, s = t.outsideDays; t.months.forEach((function (t) { t.weeks.forEach((function (l) { l.days.forEach((function (l) { r && (l.context.focused = r.equals(l.date) && i), l.tabindex = !a && l.date.equals(r) && r.month === t.number ? 0 : -1, !0 === a && (l.context.disabled = !0), void 0 !== o && (l.context.selected = null !== o && o.equals(l.date)), t.number !== l.date.month && (l.hidden = "hidden" === s || "collapsed" === s || n > 1 && l.date.after(e[0].firstDate) && l.date.before(e[n - 1].lastDate)); })); })); })); }, t.prototype._updateState = function (t) { var e, n, o = Object.assign({}, this._state, t), r = o.firstDate; if (("minDate" in t || "maxDate" in t) && (function (t, e) { if (e && t && e.before(t))
                throw new Error("'maxDate' " + e + " should be greater than 'minDate' " + t); }(o.minDate, o.maxDate), o.focusDate = bf(o.focusDate, o.minDate, o.maxDate), o.firstDate = bf(o.firstDate, o.minDate, o.maxDate), r = o.focusDate), "disabled" in t && (o.focusVisible = !1), "selectedDate" in t && 0 === this._state.months.length && (r = o.selectedDate), "focusVisible" in t)
                return o; if ("focusDate" in t && (o.focusDate = bf(o.focusDate, o.minDate, o.maxDate), r = o.focusDate, 0 !== o.months.length && !o.focusDate.before(o.firstDate) && !o.focusDate.after(o.lastDate)))
                return o; if ("firstDate" in t && (o.firstDate = bf(o.firstDate, o.minDate, o.maxDate), r = o.firstDate), r) {
                var i = function (t, e, n, o, r) { var i = n.displayMonths, a = n.months, s = a.splice(0, a.length); return Array.from({ length: i }, (function (n, o) { var i = Object.assign(t.getNext(e, "m", o), { day: 1 }); if (a[o] = null, !r) {
                    var l = s.findIndex((function (t) { return t.firstDate.equals(i); }));
                    -1 !== l && (a[o] = s.splice(l, 1)[0]);
                } return i; })).forEach((function (e, r) { null === a[r] && (a[r] = function (t, e, n, o, r) { void 0 === r && (r = {}); var i = n.dayTemplateData, a = n.minDate, s = n.maxDate, l = n.firstDayOfWeek, u = n.markDisabled, c = n.outsideDays, p = t.getToday(); r.firstDate = null, r.lastDate = null, r.number = e.month, r.year = e.year, r.weeks = r.weeks || [], r.weekdays = r.weekdays || [], e = function (t, e, n) { var o = t.getDaysPerWeek(), r = new cf(e.year, e.month, 1), i = t.getWeekday(r) % o; return t.getPrev(r, "d", (o + i - n) % o); }(t, e, l); for (var d = 0; d < t.getWeeksPerMonth(); d++) {
                    var h = r.weeks[d];
                    h || (h = r.weeks[d] = { number: 0, days: [], collapsed: !0 });
                    for (var f = h.days, m = 0; m < t.getDaysPerWeek(); m++) {
                        0 === d && (r.weekdays[m] = t.getWeekday(e));
                        var g = new cf(e.year, e.month, e.day), y = t.getNext(g), b = o.getDayAriaLabel(g), v = !!(a && g.before(a) || s && g.after(s));
                        !v && u && (v = u(g, { month: r.number, year: r.year }));
                        var _ = g.equals(p), w = i ? i(g, { month: r.number, year: r.year }) : void 0;
                        null === r.firstDate && g.month === r.number && (r.firstDate = g), g.month === r.number && y.month !== r.number && (r.lastDate = g);
                        var k = f[m];
                        k || (k = f[m] = {}), k.date = g, k.context = Object.assign(k.context || {}, { $implicit: g, date: g, data: w, currentMonth: r.number, disabled: v, focused: !1, selected: !1, today: _ }), k.tabindex = -1, k.ariaLabel = b, k.hidden = !1, e = y;
                    }
                    h.number = t.getWeekNumber(f.map((function (t) { return t.date; })), l), h.collapsed = "collapsed" === c && f[0].date.month !== r.number && f[f.length - 1].date.month !== r.number;
                } return r; }(t, e, n, o, s.shift() || {})); })), a; }(this._calendar, r, o, this._i18n, "dayTemplateData" in t || "firstDayOfWeek" in t || "markDisabled" in t || "minDate" in t || "maxDate" in t || "disabled" in t || "outsideDays" in t);
                o.months = i, o.firstDate = i.length > 0 ? i[0].firstDate : void 0, o.lastDate = i.length > 0 ? i[i.length - 1].lastDate : void 0, "selectedDate" in t && !vf(o.selectedDate, o) && (o.selectedDate = null), "firstDate" in t && (void 0 === o.focusDate || o.focusDate.before(o.firstDate) || o.focusDate.after(o.lastDate)) && (o.focusDate = r);
                var a = !this._state.firstDate || this._state.firstDate.year !== o.firstDate.year, s = !this._state.firstDate || this._state.firstDate.month !== o.firstDate.month;
                "select" === o.navigation ? (("minDate" in t || "maxDate" in t || 0 === o.selectBoxes.years.length || a) && (o.selectBoxes.years = function (t, e, n) { if (!t)
                    return []; for (var o = e ? Math.max(e.year, t.year - 500) : t.year - 10, r = (n ? Math.min(n.year, t.year + 500) : t.year + 10) - o + 1, i = Array(r), a = 0; a < r; a++)
                    i[a] = o + a; return i; }(o.firstDate, o.minDate, o.maxDate)), ("minDate" in t || "maxDate" in t || 0 === o.selectBoxes.months.length || a) && (o.selectBoxes.months = function (t, e, n, o) { if (!e)
                    return []; var r = t.getMonths(e.year); if (n && e.year === n.year) {
                    var i = r.findIndex((function (t) { return t === n.month; }));
                    r = r.slice(i);
                } return o && e.year === o.year && (i = r.findIndex((function (t) { return t === o.month; })), r = r.slice(0, i + 1)), r; }(this._calendar, o.firstDate, o.minDate, o.maxDate))) : o.selectBoxes = { years: [], months: [] }, "arrows" !== o.navigation && "select" !== o.navigation || !(s || a || "minDate" in t || "maxDate" in t || "disabled" in t) || (o.prevDisabled = o.disabled || (e = o.minDate, n = Object.assign(this._calendar.getPrev(o.firstDate, "m"), { day: 1 }), e && (n.year === e.year && n.month < e.month || n.year < e.year && 1 === e.month)), o.nextDisabled = o.disabled || function (t, e, n) { var o = Object.assign(t.getNext(e, "m"), { day: 1 }); return n && o.after(n); }(this._calendar, o.lastDate, o.maxDate));
            } return o; }, t; }(), Cf = function () { var t = { Tab: 9, Enter: 13, Escape: 27, Space: 32, PageUp: 33, PageDown: 34, End: 35, Home: 36, ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39, ArrowDown: 40 }; return t[t.Tab] = "Tab", t[t.Enter] = "Enter", t[t.Escape] = "Escape", t[t.Space] = "Space", t[t.PageUp] = "PageUp", t[t.PageDown] = "PageDown", t[t.End] = "End", t[t.Home] = "Home", t[t.ArrowLeft] = "ArrowLeft", t[t.ArrowUp] = "ArrowUp", t[t.ArrowRight] = "ArrowRight", t[t.ArrowDown] = "ArrowDown", t; }(), xf = function () { function t(t, e) { var n = this; this._service = t, this._calendar = e, t.model$.subscribe((function (t) { n._minDate = t.minDate, n._maxDate = t.maxDate, n._firstViewDate = t.firstDate, n._lastViewDate = t.lastDate; })); } return t.prototype.processKey = function (t) { switch (t.which) {
                case Cf.PageUp:
                    this._service.focusMove(t.shiftKey ? "y" : "m", -1);
                    break;
                case Cf.PageDown:
                    this._service.focusMove(t.shiftKey ? "y" : "m", 1);
                    break;
                case Cf.End:
                    this._service.focus(t.shiftKey ? this._maxDate : this._lastViewDate);
                    break;
                case Cf.Home:
                    this._service.focus(t.shiftKey ? this._minDate : this._firstViewDate);
                    break;
                case Cf.ArrowLeft:
                    this._service.focusMove("d", -1);
                    break;
                case Cf.ArrowUp:
                    this._service.focusMove("d", -this._calendar.getDaysPerWeek());
                    break;
                case Cf.ArrowRight:
                    this._service.focusMove("d", 1);
                    break;
                case Cf.ArrowDown:
                    this._service.focusMove("d", this._calendar.getDaysPerWeek());
                    break;
                case Cf.Enter:
                case Cf.Space:
                    this._service.focusSelect();
                    break;
                default: return;
            } t.preventDefault(), t.stopPropagation(); }, t; }(), Ef = function () { var t = { PREV: 0, NEXT: 1 }; return t[t.PREV] = "PREV", t[t.NEXT] = "NEXT", t; }(), Sf = function () { function t() { this.displayMonths = 1, this.firstDayOfWeek = 1, this.navigation = "select", this.outsideDays = "visible", this.showWeekdays = !0, this.showWeekNumbers = !1; } return t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }();
            function Tf() { return new Df; }
            var Of = function () { function t() { } return t.ngInjectableDef = ct({ factory: Tf, token: t, providedIn: "root" }), t; }(), Df = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Object(o.__extends)(e, t), e.prototype.fromModel = function (t) { return t && Jh(t.year) && Jh(t.month) && Jh(t.day) ? { year: t.year, month: t.month, day: t.day } : null; }, e.prototype.toModel = function (t) { return t && Jh(t.year) && Jh(t.month) && Jh(t.day) ? { year: t.year, month: t.month, day: t.day } : null; }, e; }(Of), Af = function () { function t(t, e, n, o, r, i, a, s, l) { var u = this; this._keyMapService = t, this._service = e, this._calendar = n, this.i18n = o, this._cd = i, this._elementRef = a, this._ngbDateAdapter = s, this._ngZone = l, this._destroyed$ = new E, this.navigate = new br, this.select = new br, this.onChange = function (t) { }, this.onTouched = function () { }, ["dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showWeekdays", "showWeekNumbers", "startDate"].forEach((function (t) { return u[t] = r[t]; })), e.select$.pipe(Wh(this._destroyed$)).subscribe((function (t) { u.select.emit(t); })), e.model$.pipe(Wh(this._destroyed$)).subscribe((function (t) { var e = t.firstDate, n = u.model ? u.model.firstDate : null, o = !1; if (e.equals(n) || (u.navigate.emit({ current: n ? { year: n.year, month: n.month } : null, next: { year: e.year, month: e.month }, preventDefault: function () { return o = !0; } }), !o || null === n)) {
                var r = t.selectedDate, a = t.focusDate, s = u.model ? u.model.focusDate : null;
                u.model = t, gf(r, u._controlValue) && (u._controlValue = r, u.onTouched(), u.onChange(u._ngbDateAdapter.toModel(r))), gf(a, s) && s && t.focusVisible && u.focus(), i.markForCheck();
            }
            else
                u._service.open(n); })); } return t.prototype.focus = function () { var t = this; this._ngZone.onStable.asObservable().pipe(Wc(1)).subscribe((function () { var e = t._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]'); e && e.focus(); })); }, t.prototype.navigateTo = function (t) { this._service.open(cf.from(t ? t.day ? t : Object(o.__assign)({}, t, { day: 1 }) : null)); }, t.prototype.ngAfterViewInit = function () { var t = this; this._ngZone.runOutsideAngular((function () { $(qh(t._monthsEl.nativeElement, "focusin"), qh(t._monthsEl.nativeElement, "focusout")).pipe(Lc((function (t) { var e = t.relatedTarget; return !(ef(t.target, "ngb-dp-day") && ef(e, "ngb-dp-day")); })), Wh(t._destroyed$)).subscribe((function (e) { var n = e.type; return t._ngZone.run((function () { return t._service.focusVisible = "focusin" === n; })); })); })); }, t.prototype.ngOnDestroy = function () { this._destroyed$.next(); }, t.prototype.ngOnInit = function () { var t = this; void 0 === this.model && (["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays"].forEach((function (e) { return t._service[e] = t[e]; })), this.navigateTo(this.startDate)); }, t.prototype.ngOnChanges = function (t) { var e = this; if (["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays"].filter((function (e) { return e in t; })).forEach((function (t) { return e._service[t] = e[t]; })), "startDate" in t) {
                var n = t.startDate;
                yf(n.previousValue, n.currentValue) && this.navigateTo(this.startDate);
            } }, t.prototype.onDateSelect = function (t) { this._service.focus(t), this._service.select(t, { emitEvent: !0 }); }, t.prototype.onKeyDown = function (t) { this._keyMapService.processKey(t); }, t.prototype.onNavigateDateSelect = function (t) { this._service.open(t); }, t.prototype.onNavigateEvent = function (t) { switch (t) {
                case Ef.PREV:
                    this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1));
                    break;
                case Ef.NEXT: this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1));
            } }, t.prototype.registerOnChange = function (t) { this.onChange = t; }, t.prototype.registerOnTouched = function (t) { this.onTouched = t; }, t.prototype.setDisabledState = function (t) { this._service.disabled = t; }, t.prototype.writeValue = function (t) { this._controlValue = cf.from(this._ngbDateAdapter.fromModel(t)), this._service.select(this._controlValue); }, t; }(), If = function () { function t(t) { this.i18n = t, this.select = new br; } return t.prototype.doSelect = function (t) { t.context.disabled || t.hidden || this.select.emit(t.date); }, t; }(), Pf = function () { function t(t) { this.i18n = t, this.navigation = Ef, this.months = [], this.navigate = new br, this.select = new br; } return t.prototype.onClickPrev = function (t) { t.currentTarget.focus(), this.navigate.emit(this.navigation.PREV); }, t.prototype.onClickNext = function (t) { t.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT); }, t; }();
            "undefined" != typeof navigator && navigator.userAgent && navigator;
            var Nf = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");
            function Ff(t) { var e = Array.from(t.querySelectorAll(Nf)).filter((function (t) { return -1 !== t.tabIndex; })); return [e[0], e[e.length - 1]]; }
            var Rf = function () { function t(t) { this.i18n = t; } return t.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }, t; }(), Mf = function () { function t(t, e) { this.i18n = t, this._renderer = e, this.select = new br, this._month = -1, this._year = -1; } return t.prototype.changeMonth = function (t) { this.select.emit(new cf(this.date.year, Yh(t), 1)); }, t.prototype.changeYear = function (t) { this.select.emit(new cf(Yh(t), this.date.month, 1)); }, t.prototype.ngAfterViewChecked = function () { this.date && (this.date.month !== this._month && (this._month = this.date.month, this._renderer.setProperty(this.monthSelect.nativeElement, "value", this._month)), this.date.year !== this._year && (this._year = this.date.year, this._renderer.setProperty(this.yearSelect.nativeElement, "value", this._year))); }, t; }(), jf = function () { return function () { }; }(), Bf = function () { return function () { }; }(), Vf = function () { function t() { this.backdrop = !0, this.keyboard = !0; } return t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }(), Lf = function () { return function (t, e, n) { this.nodes = t, this.viewRef = e, this.componentRef = n; }; }(), Hf = function () { }, qf = function () { function t(t) { this._document = t; } return t.prototype.compensate = function () { var t = this._getWidth(); return this._isPresent(t) ? this._adjustBody(t) : Hf; }, t.prototype._adjustBody = function (t) { var e = this._document.body, n = e.style.paddingRight, o = parseFloat(window.getComputedStyle(e)["padding-right"]); return e.style["padding-right"] = o + t + "px", function () { return e.style["padding-right"] = n; }; }, t.prototype._isPresent = function (t) { var e = this._document.body.getBoundingClientRect(); return window.innerWidth - (e.left + e.right) >= t - .1 * t; }, t.prototype._getWidth = function () { var t = this._document.createElement("div"); t.className = "modal-scrollbar-measure"; var e = this._document.body; e.appendChild(t); var n = t.getBoundingClientRect().width - t.clientWidth; return e.removeChild(t), n; }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(Qs)); }, token: t, providedIn: "root" }), t; }(), zf = function () { return function () { }; }(), Uf = function () { function t() { } return t.prototype.close = function (t) { }, t.prototype.dismiss = function (t) { }, t; }(), Wf = function () { function t(t, e, n, o) { var r = this; this._windowCmptRef = t, this._contentRef = e, this._backdropCmptRef = n, this._beforeDismiss = o, t.instance.dismissEvent.subscribe((function (t) { r.dismiss(t); })), this.result = new Promise((function (t, e) { r._resolve = t, r._reject = e; })), this.result.then(null, (function () { })); } return Object.defineProperty(t.prototype, "componentInstance", { get: function () { if (this._contentRef && this._contentRef.componentRef)
                    return this._contentRef.componentRef.instance; }, enumerable: !0, configurable: !0 }), t.prototype.close = function (t) { this._windowCmptRef && (this._resolve(t), this._removeModalElements()); }, t.prototype._dismiss = function (t) { this._reject(t), this._removeModalElements(); }, t.prototype.dismiss = function (t) { var e = this; if (this._windowCmptRef)
                if (this._beforeDismiss) {
                    var n = this._beforeDismiss();
                    n && n.then ? n.then((function (n) { !1 !== n && e._dismiss(t); }), (function () { })) : !1 !== n && this._dismiss(t);
                }
                else
                    this._dismiss(t); }, t.prototype._removeModalElements = function () { var t = this._windowCmptRef.location.nativeElement; if (t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef) {
                var e = this._backdropCmptRef.location.nativeElement;
                e.parentNode.removeChild(e), this._backdropCmptRef.destroy();
            } this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(), this._windowCmptRef = null, this._backdropCmptRef = null, this._contentRef = null; }, t; }(), Kf = function () { var t = { BACKDROP_CLICK: 0, ESC: 1 }; return t[t.BACKDROP_CLICK] = "BACKDROP_CLICK", t[t.ESC] = "ESC", t; }(), $f = function () { function t(t, e, n) { this._document = t, this._elRef = e, this._zone = n, this._closed$ = new E, this.backdrop = !0, this.keyboard = !0, this.dismissEvent = new br; } return t.prototype.dismiss = function (t) { this.dismissEvent.emit(t); }, t.prototype.ngOnInit = function () { this._elWithFocus = this._document.activeElement; }, t.prototype.ngAfterViewInit = function () { var t = this, e = this._elRef.nativeElement; if (this._zone.runOutsideAngular((function () { qh(e, "keydown").pipe(Wh(t._closed$), Lc((function (e) { return e.which === Cf.Escape && t.keyboard; }))).subscribe((function (e) { return requestAnimationFrame((function () { e.defaultPrevented || t._zone.run((function () { return t.dismiss(Kf.ESC); })); })); })); var n, o = !1; qh(t._dialogEl.nativeElement, "mousedown").pipe(Wh(t._closed$), (n = function () { return o = !1; }, function (t) { return t.lift(new Ic(n, void 0, void 0)); }), function t(e, n) { return "function" == typeof n ? function (o) { return o.pipe(t((function (t, o) { return H(e(t, o)).pipe(j((function (e, r) { return n(t, e, o, r); }))); }))); } : function (t) { return t.lift(new zh(e)); }; }((function () { return qh(e, "mouseup").pipe(Wh(t._closed$), Wc(1)); })), Lc((function (t) { return e === t.target; }))).subscribe((function () { o = !0; })), qh(e, "click").pipe(Wh(t._closed$)).subscribe((function (n) { !0 !== t.backdrop || e !== n.target || o || t._zone.run((function () { return t.dismiss(Kf.BACKDROP_CLICK); })), o = !1; })); })), !e.contains(document.activeElement)) {
                var n = e.querySelector("[ngbAutofocus]"), o = Ff(e)[0];
                (n || o || e).focus();
            } }, t.prototype.ngOnDestroy = function () { var t, e = this, n = this._document.body, o = this._elWithFocus; t = o && o.focus && n.contains(o) ? o : n, this._zone.runOutsideAngular((function () { setTimeout((function () { return t.focus(); })), e._elWithFocus = null; })), this._closed$.next(); }, t; }(), Gf = function () { function t(t, e, n, r, i, a) { var s = this; this._applicationRef = t, this._injector = e, this._document = n, this._scrollBar = r, this._rendererFactory = i, this._ngZone = a, this._activeWindowCmptHasChanged = new E, this._ariaHiddenValues = new Map, this._backdropAttributes = ["backdropClass"], this._modalRefs = [], this._windowAttributes = ["ariaLabelledBy", "backdrop", "centered", "keyboard", "scrollable", "size", "windowClass"], this._windowCmpts = [], this._activeWindowCmptHasChanged.subscribe((function () { if (s._windowCmpts.length) {
                var t = s._windowCmpts[s._windowCmpts.length - 1];
                e = t.location.nativeElement, n = s._activeWindowCmptHasChanged, void 0 === r && (r = !1), s._ngZone.runOutsideAngular((function () { var t = qh(e, "focusin").pipe(Wh(n), j((function (t) { return t.target; }))); qh(e, "keydown").pipe(Wh(n), Lc((function (t) { return t.which === Cf.Tab; })), Gh(t)).subscribe((function (t) { var n = Object(o.__read)(t, 2), r = n[0], i = n[1], a = Object(o.__read)(Ff(e), 2), s = a[0], l = a[1]; i !== s && i !== e || !r.shiftKey || (l.focus(), r.preventDefault()), i !== l || r.shiftKey || (s.focus(), r.preventDefault()); })), r && qh(e, "click").pipe(Wh(n), Gh(t), j((function (t) { return t[1]; }))).subscribe((function (t) { return t.focus(); })); })), s._revertAriaHidden(), s._setAriaHidden(t.location.nativeElement);
            } var e, n, r; })); } return t.prototype.open = function (t, e, n, o) { var r = this, i = tf(o.container) ? this._document.querySelector(o.container) : this._document.body, a = this._rendererFactory.createRenderer(null, null), s = this._scrollBar.compensate(), l = function () { r._modalRefs.length || (a.removeClass(r._document.body, "modal-open"), r._revertAriaHidden()); }; if (!i)
                throw new Error('The specified modal container "' + (o.container || "body") + '" was not found in the DOM.'); var u = new Uf, c = this._getContentRef(t, o.injector || e, n, u, o), p = !1 !== o.backdrop ? this._attachBackdrop(t, i) : null, d = this._attachWindowComponent(t, i, c), h = new Wf(d, c, p, o.beforeDismiss); return this._registerModalRef(h), this._registerWindowCmpt(d), h.result.then(s, s), h.result.then(l, l), u.close = function (t) { h.close(t); }, u.dismiss = function (t) { h.dismiss(t); }, this._applyWindowOptions(d.instance, o), 1 === this._modalRefs.length && a.addClass(this._document.body, "modal-open"), p && p.instance && this._applyBackdropOptions(p.instance, o), h; }, t.prototype.dismissAll = function (t) { this._modalRefs.forEach((function (e) { return e.dismiss(t); })); }, t.prototype.hasOpenModals = function () { return this._modalRefs.length > 0; }, t.prototype._attachBackdrop = function (t, e) { var n = t.resolveComponentFactory(zf).create(this._injector); return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n; }, t.prototype._attachWindowComponent = function (t, e, n) { var o = t.resolveComponentFactory($f).create(this._injector, n.nodes); return this._applicationRef.attachView(o.hostView), e.appendChild(o.location.nativeElement), o; }, t.prototype._applyWindowOptions = function (t, e) { this._windowAttributes.forEach((function (n) { tf(e[n]) && (t[n] = e[n]); })); }, t.prototype._applyBackdropOptions = function (t, e) { this._backdropAttributes.forEach((function (n) { tf(e[n]) && (t[n] = e[n]); })); }, t.prototype._getContentRef = function (t, e, n, o, r) { return n ? n instanceof wn ? this._createFromTemplateRef(n, o) : "string" == typeof n ? this._createFromString(n) : this._createFromComponent(t, e, n, o, r) : new Lf([]); }, t.prototype._createFromTemplateRef = function (t, e) { var n = t.createEmbeddedView({ $implicit: e, close: function (t) { e.close(t); }, dismiss: function (t) { e.dismiss(t); } }); return this._applicationRef.attachView(n), new Lf([n.rootNodes], n); }, t.prototype._createFromString = function (t) { var e = this._document.createTextNode("" + t); return new Lf([[e]]); }, t.prototype._createFromComponent = function (t, e, n, o, r) { var i = t.resolveComponentFactory(n), a = Ce.create({ providers: [{ provide: Uf, useValue: o }], parent: e }), s = i.create(a), l = s.location.nativeElement; return r.scrollable && l.classList.add("component-host-scrollable"), this._applicationRef.attachView(s.hostView), new Lf([[l]], s.hostView, s); }, t.prototype._setAriaHidden = function (t) { var e = this, n = t.parentElement; n && t !== this._document.body && (Array.from(n.children).forEach((function (n) { n !== t && "SCRIPT" !== n.nodeName && (e._ariaHiddenValues.set(n, n.getAttribute("aria-hidden")), n.setAttribute("aria-hidden", "true")); })), this._setAriaHidden(n)); }, t.prototype._revertAriaHidden = function () { this._ariaHiddenValues.forEach((function (t, e) { t ? e.setAttribute("aria-hidden", t) : e.removeAttribute("aria-hidden"); })), this._ariaHiddenValues.clear(); }, t.prototype._registerModalRef = function (t) { var e = this, n = function () { var n = e._modalRefs.indexOf(t); n > -1 && e._modalRefs.splice(n, 1); }; this._modalRefs.push(t), t.result.then(n, n); }, t.prototype._registerWindowCmpt = function (t) { var e = this; this._windowCmpts.push(t), this._activeWindowCmptHasChanged.next(), t.onDestroy((function () { var n = e._windowCmpts.indexOf(t); n > -1 && (e._windowCmpts.splice(n, 1), e._activeWindowCmptHasChanged.next()); })); }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(ci), Dt(Ct), Dt(Qs), Dt(qf), Dt(Je), Dt($r)); }, token: t, providedIn: "root" }), t; }(), Zf = function () { function t(t, e, n, o) { this._moduleCFR = t, this._injector = e, this._modalStack = n, this._config = o; } return t.prototype.open = function (t, e) { void 0 === e && (e = {}); var n = Object.assign({}, this._config, e); return this._modalStack.open(this._moduleCFR, this._injector, t, n); }, t.prototype.dismissAll = function (t) { this._modalStack.dismissAll(t); }, t.prototype.hasOpenModals = function () { return this._modalStack.hasOpenModals(); }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(Ke), Dt(Ct), Dt(Gf), Dt(Vf)); }, token: t, providedIn: "root" }), t; }(), Qf = function () { return function () { }; }(), Yf = function () { return function () { }; }(), Xf = function () { function t() { } return t.prototype.isTitleTemplate = function () { return this.title instanceof wn; }, t; }(), Jf = function () { return function () { }; }(), tm = function () { return function () { }; }(), em = function () { return function () { }; }(), nm = function () { return function () { }; }(), om = function () { return function () { }; }(), rm = function () { return function () { }; }(), im = function () { return function () { }; }(), am = function () { return function () { }; }(), sm = function () { function t() { this.highlightClass = "ngb-highlight"; } return t.prototype.ngOnChanges = function (t) { var e = Xh(this.result), n = (Array.isArray(this.term) ? this.term : [this.term]).map((function (t) { return Xh(t).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); })).filter((function (t) { return t; })); this.parts = n.length ? e.split(new RegExp("(" + n.join("|") + ")", "gmi")) : [e]; }, t; }(), lm = function () { function t() { this.activeIdx = 0, this.focusFirst = !0, this.formatter = Xh, this.selectEvent = new br, this.activeChangeEvent = new br; } return t.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; }, t.prototype.getActive = function () { return this.results[this.activeIdx]; }, t.prototype.markActive = function (t) { this.activeIdx = t, this._activeChanged(); }, t.prototype.next = function () { this.activeIdx === this.results.length - 1 ? this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1 : this.activeIdx++, this._activeChanged(); }, t.prototype.prev = function () { this.activeIdx < 0 ? this.activeIdx = this.results.length - 1 : 0 === this.activeIdx ? this.activeIdx = this.focusFirst ? this.results.length - 1 : -1 : this.activeIdx--, this._activeChanged(); }, t.prototype.resetActive = function () { this.activeIdx = this.focusFirst ? 0 : -1, this._activeChanged(); }, t.prototype.select = function (t) { this.selectEvent.emit(t); }, t.prototype.ngOnInit = function () { this.resetActive(); }, t.prototype._activeChanged = function () { this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0); }, t; }(), um = function () { return function () { }; }(), cm = function () { return function () { }; }(), pm = function () { function t(t, e, n, o, r, i) { var a = this; this.themeService = t, this.buildService = e, this.toastr = n, this.modalService = r, this.modalService2 = i, this.queue = [], this.tab = [], this.showCompare = !1, this.numberShow = 20, this.buildService.getTab().forEach((function (t) { a.tab.push(t); })), o.backdrop = "static", o.keyboard = !1; } return t.prototype.open = function (t, e) { this.activeBuild = this.tab.find((function (t) { return t.Build == e; })), this.modalService.open(t, { windowClass: "dark-modal", size: "xl", centered: !0, scrollable: !0 }); }, t.prototype.open2 = function (t) { this.modalService2.open(t, { windowClass: "dark-modal", size: "xl", centered: !0, scrollable: !0 }); }, t.prototype.ngOnInit = function () { this.toggleDarkTheme(!0); }, t.prototype.addRows = function () { this.numberShow += 10; }, t.prototype.removeRows = function () { this.numberShow -= 10; }, t.prototype.getDark = function () { return this.themeService.isDarkTheme; }, t.prototype.toggleDarkTheme = function (t) { this.themeService.setDarkTheme(t); }, t.prototype.getBrancheClass = function (t) { return t.includes("RELEASE"); }, t.prototype.showSuccess = function (t) { if (this.queue[0] == t)
                return this.toastr.error("Bad Request", this.queue[0] + " x " + t, { timeOut: 1500 }), this.showCompare = !1, void this.queue.shift(); this.queue.push(t), this.tab.forEach((function (e) { e.Build == t && (e.checked = !0); })), 2 == this.queue.length ? (this.tab.forEach((function (e) { e.Build == t && (e.checked = !0); })), this.showCompare = !0, this.toastr.success("GOOD Request", this.queue[0] + " x " + t, { timeOut: 1500 }), this.oldAndnewBuild = this.queue[0] + " and " + t, this.queue.shift(), this.queue.shift()) : this.showCompare = !1; }, t.prototype.clearAll = function () { this.tab.forEach((function (t) { t.checked = !1; })), this.showCompare = !1; }, t; }(), dm = function () { function t(t, e, n, o, r, i) { var a = this; this.toastId = t, this.config = e, this.message = n, this.title = o, this.toastType = r, this.toastRef = i, this._onTap = new E, this._onAction = new E, this.toastRef.afterClosed().subscribe((function () { a._onAction.complete(), a._onTap.complete(); })); } return t.prototype.triggerTap = function () { this._onTap.next(), this.config.tapToDismiss && this._onTap.complete(); }, t.prototype.onTap = function () { return this._onTap.asObservable(); }, t.prototype.triggerAction = function (t) { this._onAction.next(t); }, t.prototype.onAction = function () { return this._onAction.asObservable(); }, t; }(), hm = { maxOpened: 0, autoDismiss: !1, newestOnTop: !0, preventDuplicates: !1, countDuplicates: !1, resetTimeoutOnDuplicate: !1, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, closeButton: !1, disableTimeOut: !1, timeOut: 5e3, extendedTimeOut: 1e3, enableHtml: !1, progressBar: !1, toastClass: "ngx-toastr", positionClass: "toast-top-right", titleClass: "toast-title", messageClass: "toast-message", easing: "ease-in", easeTime: 300, tapToDismiss: !0, onActivateTick: !1, progressAnimation: "decreasing" }, fm = new kt("ToastConfig"), mm = function () { function t(t, e) { this.component = t, this.injector = e; } return t.prototype.attach = function (t, e) { return this._attachedHost = t, t.attach(this, e); }, t.prototype.detach = function () { var t = this._attachedHost; if (t)
                return this._attachedHost = void 0, t.detach(); }, Object.defineProperty(t.prototype, "isAttached", { get: function () { return null != this._attachedHost; }, enumerable: !0, configurable: !0 }), t.prototype.setAttachedHost = function (t) { this._attachedHost = t; }, t; }(), gm = function (t) { function e(e, n, o) { var r = t.call(this) || this; return r._hostDomElement = e, r._componentFactoryResolver = n, r._appRef = o, r; } return Object(o.__extends)(e, t), e.prototype.attachComponentPortal = function (t, e) { var n, o = this, r = this._componentFactoryResolver.resolveComponentFactory(t.component); return n = r.create(t.injector), this._appRef.attachView(n.hostView), this.setDisposeFn((function () { o._appRef.detachView(n.hostView), n.destroy(); })), e ? this._hostDomElement.insertBefore(this._getComponentRootNode(n), this._hostDomElement.firstChild) : this._hostDomElement.appendChild(this._getComponentRootNode(n)), n; }, e.prototype._getComponentRootNode = function (t) { return t.hostView.rootNodes[0]; }, e; }(function () { function t() { } return t.prototype.attach = function (t, e) { return this._attachedPortal = t, this.attachComponentPortal(t, e); }, t.prototype.detach = function () { this._attachedPortal && this._attachedPortal.setAttachedHost(), this._attachedPortal = void 0, this._disposeFn && (this._disposeFn(), this._disposeFn = void 0); }, t.prototype.setDisposeFn = function (t) { this._disposeFn = t; }, t; }()), ym = function () { function t(t) { this._document = t; } return t.prototype.ngOnDestroy = function () { this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement); }, t.prototype.getContainerElement = function () { return this._containerElement || this._createContainer(), this._containerElement; }, t.prototype._createContainer = function () { var t = this._document.createElement("div"); t.classList.add("overlay-container"), this._document.body.appendChild(t), this._containerElement = t; }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(Qs)); }, token: t, providedIn: "root" }), t; }(), bm = function () { function t(t) { this._portalHost = t; } return t.prototype.attach = function (t, e) { return void 0 === e && (e = !0), this._portalHost.attach(t, e); }, t.prototype.detach = function () { return this._portalHost.detach(); }, t; }(), vm = function () { function t(t, e, n, o) { this._overlayContainer = t, this._componentFactoryResolver = e, this._appRef = n, this._document = o, this._paneElements = new Map; } return t.prototype.create = function (t, e) { return this._createOverlayRef(this.getPaneElement(t, e)); }, t.prototype.getPaneElement = function (t, e) { return void 0 === t && (t = ""), this._paneElements.get(e) || this._paneElements.set(e, {}), this._paneElements.get(e)[t] || (this._paneElements.get(e)[t] = this._createPaneElement(t, e)), this._paneElements.get(e)[t]; }, t.prototype._createPaneElement = function (t, e) { var n = this._document.createElement("div"); return n.id = "toast-container", n.classList.add(t), n.classList.add("toast-container"), e ? e.getContainerElement().appendChild(n) : this._overlayContainer.getContainerElement().appendChild(n), n; }, t.prototype._createPortalHost = function (t) { return new gm(t, this._componentFactoryResolver, this._appRef); }, t.prototype._createOverlayRef = function (t) { return new bm(this._createPortalHost(t)); }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(ym), Dt(Ke), Dt(ci), Dt(Qs)); }, token: t, providedIn: "root" }), t; }(), _m = function () { function t(t) { this._overlayRef = t, this.duplicatesCount = 0, this._afterClosed = new E, this._activate = new E, this._manualClose = new E, this._resetTimeout = new E, this._countDuplicate = new E; } return t.prototype.manualClose = function () { this._manualClose.next(), this._manualClose.complete(); }, t.prototype.manualClosed = function () { return this._manualClose.asObservable(); }, t.prototype.timeoutReset = function () { return this._resetTimeout.asObservable(); }, t.prototype.countDuplicate = function () { return this._countDuplicate.asObservable(); }, t.prototype.close = function () { this._overlayRef.detach(), this._afterClosed.next(), this._manualClose.next(), this._afterClosed.complete(), this._manualClose.complete(), this._activate.complete(), this._resetTimeout.complete(), this._countDuplicate.complete(); }, t.prototype.afterClosed = function () { return this._afterClosed.asObservable(); }, t.prototype.isInactive = function () { return this._activate.isStopped; }, t.prototype.activate = function () { this._activate.next(), this._activate.complete(); }, t.prototype.afterActivate = function () { return this._activate.asObservable(); }, t.prototype.onDuplicate = function (t, e) { t && this._resetTimeout.next(), e && this._countDuplicate.next(++this.duplicatesCount); }, t; }(), wm = function () { function t(t, e) { this._toastPackage = t, this._parentInjector = e; } return t.prototype.get = function (t, e, n) { return t === dm ? this._toastPackage : this._parentInjector.get(t, e, n); }, t; }(), km = function () { function t(t, e, n, r, i) { this.overlay = e, this._injector = n, this.sanitizer = r, this.ngZone = i, this.currentlyActive = 0, this.toasts = [], this.index = 0, this.toastrConfig = Object(o.__assign)({}, t.default, t.config), t.config.iconClasses && (this.toastrConfig.iconClasses = Object(o.__assign)({}, t.default.iconClasses, t.config.iconClasses)); } return t.prototype.show = function (t, e, n, o) { return void 0 === n && (n = {}), void 0 === o && (o = ""), this._preBuildNotification(o, t, e, this.applyConfig(n)); }, t.prototype.success = function (t, e, n) { return void 0 === n && (n = {}), this._preBuildNotification(this.toastrConfig.iconClasses.success || "", t, e, this.applyConfig(n)); }, t.prototype.error = function (t, e, n) { return void 0 === n && (n = {}), this._preBuildNotification(this.toastrConfig.iconClasses.error || "", t, e, this.applyConfig(n)); }, t.prototype.info = function (t, e, n) { return void 0 === n && (n = {}), this._preBuildNotification(this.toastrConfig.iconClasses.info || "", t, e, this.applyConfig(n)); }, t.prototype.warning = function (t, e, n) { return void 0 === n && (n = {}), this._preBuildNotification(this.toastrConfig.iconClasses.warning || "", t, e, this.applyConfig(n)); }, t.prototype.clear = function (t) { var e, n; try {
                for (var r = Object(o.__values)(this.toasts), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value;
                    if (void 0 !== t) {
                        if (a.toastId === t)
                            return void a.toastRef.manualClose();
                    }
                    else
                        a.toastRef.manualClose();
                }
            }
            catch (s) {
                e = { error: s };
            }
            finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } }, t.prototype.remove = function (t) { var e = this._findToast(t); if (!e)
                return !1; if (e.activeToast.toastRef.close(), this.toasts.splice(e.index, 1), this.currentlyActive = this.currentlyActive - 1, !this.toastrConfig.maxOpened || !this.toasts.length)
                return !1; if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
                var n = this.toasts[this.currentlyActive].toastRef;
                n.isInactive() || (this.currentlyActive = this.currentlyActive + 1, n.activate());
            } return !0; }, t.prototype.findDuplicate = function (t, e, n) { var r, i; try {
                for (var a = Object(o.__values)(this.toasts), s = a.next(); !s.done; s = a.next()) {
                    var l = s.value;
                    if (l.message === t)
                        return l.toastRef.onDuplicate(e, n), l;
                }
            }
            catch (u) {
                r = { error: u };
            }
            finally {
                try {
                    s && !s.done && (i = a.return) && i.call(a);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            } return null; }, t.prototype.applyConfig = function (t) { return void 0 === t && (t = {}), Object(o.__assign)({}, this.toastrConfig, t); }, t.prototype._findToast = function (t) { for (var e = 0; e < this.toasts.length; e++)
                if (this.toasts[e].toastId === t)
                    return { index: e, activeToast: this.toasts[e] }; return null; }, t.prototype._preBuildNotification = function (t, e, n, o) { var r = this; return o.onActivateTick ? this.ngZone.run((function () { return r._buildNotification(t, e, n, o); })) : this._buildNotification(t, e, n, o); }, t.prototype._buildNotification = function (t, e, n, o) { if (!o.toastComponent)
                throw new Error("toastComponent required"); var r = this.findDuplicate(e, this.toastrConfig.resetTimeoutOnDuplicate && o.timeOut > 0, this.toastrConfig.countDuplicates); if (e && this.toastrConfig.preventDuplicates && null !== r)
                return r; this.previousToastMessage = e; var i = !1; this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened && (i = !0, this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId)); var a = this.overlay.create(o.positionClass, this.overlayContainer); this.index = this.index + 1; var s = e; e && o.enableHtml && (s = this.sanitizer.sanitize(he.HTML, e)); var l = new _m(a), u = new dm(this.index, o, s, n, t, l), c = new wm(u, this._injector), p = new mm(o.toastComponent, c), d = a.attach(p, this.toastrConfig.newestOnTop); l.componentInstance = d._component; var h = { toastId: this.index, message: e || "", toastRef: l, onShown: l.afterActivate(), onHidden: l.afterClosed(), onTap: u.onTap(), onAction: u.onAction(), portal: d }; return i || (h.toastRef.activate(), this.currentlyActive = this.currentlyActive + 1), this.toasts.push(h), h; }, t.ngInjectableDef = ct({ factory: function () { return new t(Dt(fm), Dt(vm), Dt(Ct), Dt(Gl), Dt($r)); }, token: t, providedIn: "root" }), t; }(), Cm = function () { function t(t, e, n) { var o = this; this.toastrService = t, this.toastPackage = e, this.ngZone = n, this.width = -1, this.toastClasses = "", this.state = { value: "inactive", params: { easeTime: this.toastPackage.config.easeTime, easing: "ease-in" } }, this.message = e.message, this.title = e.title, this.options = e.config, this.originalTimeout = e.config.timeOut, this.toastClasses = e.toastType + " " + e.config.toastClass, this.sub = e.toastRef.afterActivate().subscribe((function () { o.activateToast(); })), this.sub1 = e.toastRef.manualClosed().subscribe((function () { o.remove(); })), this.sub2 = e.toastRef.timeoutReset().subscribe((function () { o.resetTimeout(); })), this.sub3 = e.toastRef.countDuplicate().subscribe((function (t) { o.duplicatesCount = t; })); } return Object.defineProperty(t.prototype, "displayStyle", { get: function () { if ("inactive" === this.state.value)
                    return "none"; }, enumerable: !0, configurable: !0 }), t.prototype.ngOnDestroy = function () { this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout); }, t.prototype.activateToast = function () { var t = this; this.state = Object(o.__assign)({}, this.state, { value: "active" }), !0 !== this.options.disableTimeOut && "timeOut" !== this.options.disableTimeOut && this.options.timeOut && (this.outsideTimeout((function () { return t.remove(); }), this.options.timeOut), this.hideTime = (new Date).getTime() + this.options.timeOut, this.options.progressBar && this.outsideInterval((function () { return t.updateProgress(); }), 10)); }, t.prototype.updateProgress = function () { if (0 !== this.width && 100 !== this.width && this.options.timeOut) {
                var t = (new Date).getTime();
                this.width = (this.hideTime - t) / this.options.timeOut * 100, "increasing" === this.options.progressAnimation && (this.width = 100 - this.width), this.width <= 0 && (this.width = 0), this.width >= 100 && (this.width = 100);
            } }, t.prototype.resetTimeout = function () { var t = this; clearTimeout(this.timeout), clearInterval(this.intervalId), this.state = Object(o.__assign)({}, this.state, { value: "active" }), this.outsideTimeout((function () { return t.remove(); }), this.originalTimeout), this.options.timeOut = this.originalTimeout, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && this.outsideInterval((function () { return t.updateProgress(); }), 10); }, t.prototype.remove = function () { var t = this; "removed" !== this.state.value && (clearTimeout(this.timeout), this.state = Object(o.__assign)({}, this.state, { value: "removed" }), this.outsideTimeout((function () { return t.toastrService.remove(t.toastPackage.toastId); }), +this.toastPackage.config.easeTime)); }, t.prototype.tapToast = function () { "removed" !== this.state.value && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove()); }, t.prototype.stickAround = function () { "removed" !== this.state.value && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width = 0); }, t.prototype.delayedHideToast = function () { var t = this; !0 !== this.options.disableTimeOut && "extendedTimeOut" !== this.options.disableTimeOut && 0 !== this.options.extendedTimeOut && "removed" !== this.state.value && (this.outsideTimeout((function () { return t.remove(); }), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && this.outsideInterval((function () { return t.updateProgress(); }), 10)); }, t.prototype.outsideTimeout = function (t, e) { var n = this; this.ngZone ? this.ngZone.runOutsideAngular((function () { return n.timeout = setTimeout((function () { return n.runInsideAngular(t); }), e); })) : this.timeout = setTimeout((function () { return t(); }), e); }, t.prototype.outsideInterval = function (t, e) { var n = this; this.ngZone ? this.ngZone.runOutsideAngular((function () { return n.intervalId = setInterval((function () { return n.runInsideAngular(t); }), e); })) : this.intervalId = setInterval((function () { return t(); }), e); }, t.prototype.runInsideAngular = function (t) { this.ngZone ? this.ngZone.run((function () { return t(); })) : t(); }, t; }(), xm = Object(o.__assign)({}, hm, { toastComponent: Cm }), Em = function () { function t() { } var e; return e = t, t.forRoot = function (t) { return void 0 === t && (t = {}), { ngModule: e, providers: [{ provide: fm, useValue: { default: xm, config: t } }] }; }, t; }(), Sm = function () { function t(t, e, n) { var o = this; this.toastrService = t, this.toastPackage = e, this.appRef = n, this.width = -1, this.toastClasses = "", this.state = "inactive", this.message = e.message, this.title = e.title, this.options = e.config, this.originalTimeout = e.config.timeOut, this.toastClasses = e.toastType + " " + e.config.toastClass, this.sub = e.toastRef.afterActivate().subscribe((function () { o.activateToast(); })), this.sub1 = e.toastRef.manualClosed().subscribe((function () { o.remove(); })), this.sub2 = e.toastRef.timeoutReset().subscribe((function () { o.resetTimeout(); })), this.sub3 = e.toastRef.countDuplicate().subscribe((function (t) { o.duplicatesCount = t; })); } return Object.defineProperty(t.prototype, "displayStyle", { get: function () { if ("inactive" === this.state)
                    return "none"; }, enumerable: !0, configurable: !0 }), t.prototype.ngOnDestroy = function () { this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout); }, t.prototype.activateToast = function () { var t = this; this.state = "active", !0 !== this.options.disableTimeOut && "timeOut" !== this.options.disableTimeOut && this.options.timeOut && (this.timeout = setTimeout((function () { t.remove(); }), this.options.timeOut), this.hideTime = (new Date).getTime() + this.options.timeOut, this.options.progressBar && (this.intervalId = setInterval((function () { return t.updateProgress(); }), 10))), this.options.onActivateTick && this.appRef.tick(); }, t.prototype.updateProgress = function () { if (0 !== this.width && 100 !== this.width && this.options.timeOut) {
                var t = (new Date).getTime();
                this.width = (this.hideTime - t) / this.options.timeOut * 100, "increasing" === this.options.progressAnimation && (this.width = 100 - this.width), this.width <= 0 && (this.width = 0), this.width >= 100 && (this.width = 100);
            } }, t.prototype.resetTimeout = function () { var t = this; clearTimeout(this.timeout), clearInterval(this.intervalId), this.state = "active", this.options.timeOut = this.originalTimeout, this.timeout = setTimeout((function () { return t.remove(); }), this.originalTimeout), this.hideTime = (new Date).getTime() + (this.originalTimeout || 0), this.width = -1, this.options.progressBar && (this.intervalId = setInterval((function () { return t.updateProgress(); }), 10)); }, t.prototype.remove = function () { var t = this; "removed" !== this.state && (clearTimeout(this.timeout), this.state = "removed", this.timeout = setTimeout((function () { return t.toastrService.remove(t.toastPackage.toastId); }))); }, t.prototype.tapToast = function () { "removed" !== this.state && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove()); }, t.prototype.stickAround = function () { "removed" !== this.state && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width = 0); }, t.prototype.delayedHideToast = function () { var t = this; !0 !== this.options.disableTimeOut && "extendedTimeOut" !== this.options.disableTimeOut && 0 !== this.options.extendedTimeOut && "removed" !== this.state && (this.timeout = setTimeout((function () { return t.remove(); }), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && (this.intervalId = setInterval((function () { return t.updateProgress(); }), 10))); }, t; }(), Tm = (Object(o.__assign)({}, hm, { toastComponent: Sm }), Ln({ encapsulation: 0, styles: [["h1[_ngcontent-%COMP%]{font-weight:200}header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.flex-content[_ngcontent-%COMP%]   td-tile[_ngcontent-%COMP%]{flex:30%;margin:0 10px 10px 0}mat-slide-toggle[_ngcontent-%COMP%]{margin-bottom:10px}.dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:#292b2c;color:#fff}.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff}.light-blue-backdrop[_ngcontent-%COMP%]{background-color:#5cb3fd}"]], data: {} }));
            function Om(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 34, "tr", [], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 5, "th", [["scope", "row"]], null, null, null, null, null)), (t()(), Ei(2, 0, null, null, 4, "span", [["class", "badge badge-primary"]], null, [[null, "click"]], (function (t, e, n) { var o = !0, r = t.component; return "click" === e && (o = !1 !== r.open(r.content, t.context.$implicit.Build) && o), o; }), null, null)), Yo(512, null, Hs, qs, [Qe, yn, en]), Zo(4, 278528, null, 0, zs, [Hs], { ngStyle: [0, "ngStyle"] }, null), ji(5, { "font-size.px": 0 }), (t()(), Vi(6, null, [" ", " "])), (t()(), Ei(7, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), Vi(8, null, ["", ""])), (t()(), Ei(9, 0, null, null, 2, "td", [], null, null, null, null, null)), (t()(), Ei(10, 0, null, null, 1, "a", [["class", "badge badge-pill badge-light"], ["href", "https://google.fr"], ["target", "_blank"]], null, null, null, null, null)), (t()(), Vi(11, null, ["", ""])), (t()(), Ei(12, 0, null, null, 4, "td", [], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(14, 278528, null, 0, Fs, [Ps], { ngClass: [0, "ngClass"] }, null), ji(15, { "text-danger": 0 }), (t()(), Vi(16, null, ["", ""])), (t()(), Ei(17, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), Vi(18, null, ["", ""])), (t()(), Ei(19, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), Vi(20, null, ["", ""])), (t()(), Ei(21, 0, null, null, 5, "td", [], null, null, null, null, null)), (t()(), Ei(22, 0, null, null, 4, "span", [["class", "badge badge-light"]], null, null, null, null, null)), Yo(512, null, Hs, qs, [Qe, yn, en]), Zo(24, 278528, null, 0, zs, [Hs], { ngStyle: [0, "ngStyle"] }, null), ji(25, { "font-size.px": 0 }), (t()(), Vi(26, null, [" ", " "])), (t()(), Ei(27, 0, null, null, 5, "td", [], null, null, null, null, null)), (t()(), Ei(28, 0, null, null, 4, "span", [["class", "badge badge-success"]], null, null, null, null, null)), Yo(512, null, Hs, qs, [Qe, yn, en]), Zo(30, 278528, null, 0, zs, [Hs], { ngStyle: [0, "ngStyle"] }, null), ji(31, { "font-size.px": 0 }), (t()(), Vi(32, null, [" ", " "])), (t()(), Ei(33, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), Ei(34, 0, null, null, 0, "input", [["class", "form-check-input"], ["id", "defaultCheck1"], ["style", "width: 20px; height: 20px; margin-left:auto; margin-right:auto; "], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], (function (t, e, n) { var o = !0; return "change" === e && (o = !1 !== t.component.showSuccess(t.context.$implicit.Build) && o), o; }), null, null))], (function (t, e) { var n = t(e, 5, 0, 15); t(e, 4, 0, n); var o = t(e, 15, 0, "RELEASE" === e.context.$implicit.Branche); t(e, 14, 0, o); var r = t(e, 25, 0, 15); t(e, 24, 0, r); var i = t(e, 31, 0, 15); t(e, 30, 0, i); }), (function (t, e) { t(e, 6, 0, e.context.$implicit._id), t(e, 8, 0, e.context.$implicit.lastname), t(e, 11, 0, e.context.$implicit.birthname), t(e, 16, 0, e.context.$implicit.ssn), t(e, 18, 0, e.context.$implicit.commune), t(e, 20, 0, e.context.$implicit.departement), t(e, 26, 0, e.context.$implicit.pays), t(e, 32, 0, e.context.$implicit.naissance), t(e, 34, 0, e.context.$implicit.checked); })); }
            function Dm(t) { return qi(2, [Qo(0, hp, []), (t()(), Ei(1, 0, null, null, 65, "div", [["class", "container-fluid"]], null, null, null, null, null)), (t()(), Ei(2, 0, null, null, 2, "header", [], null, null, null, null, null)), (t()(), Ei(3, 0, null, null, 1, "h1", [["class", "mat-display-2"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["Dashboard"])), (t()(), Ei(5, 0, null, null, 4, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"], [null, "focus"]], (function (t, e, n) { var o = !0, r = t.component; return "focus" === e && (o = !1 !== Mo(t, 7)._inputElement.nativeElement.focus() && o), "change" === e && (o = !1 !== r.toggleDarkTheme(n.checked) && o), o; }), Hh, Lh)), Yo(5120, null, au, (function (t) { return [t]; }), [yp]), Zo(7, 1228800, null, 0, yp, [Qe, Zc, ve, [8, null], $r, fp, [2, Bh], [2, Cc]], { checked: [0, "checked"] }, { change: "change" }), Qo(131072, Gs, [ve]), (t()(), Vi(-1, 0, ["Dark theme "])), (t()(), Ei(10, 0, null, null, 14, "form", [["class", "form-inline my-2 my-lg-0"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], (function (t, e, n) { var o = !0; return "submit" === e && (o = !1 !== Mo(t, 12).onSubmit(n) && o), "reset" === e && (o = !1 !== Mo(t, 12).onReset() && o), o; }), null, null)), Zo(11, 16384, null, 0, ic, [], null, null), Zo(12, 4210688, null, 0, Xu, [[8, null], [8, null]], null, null), Yo(2048, null, pu, null, [Xu]), Zo(14, 16384, null, 0, gu, [[4, pu]], null, null), (t()(), Ei(15, 0, null, null, 5, "input", [["class", "form-control mr-sm-2"], ["id", "input3-group2"], ["name", "input3-group2"], ["placeholder", "Rechercher"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (t, e, n) { var o = !0, r = t.component; return "input" === e && (o = !1 !== Mo(t, 16)._handleInput(n.target.value) && o), "blur" === e && (o = !1 !== Mo(t, 16).onTouched() && o), "compositionstart" === e && (o = !1 !== Mo(t, 16)._compositionStart() && o), "compositionend" === e && (o = !1 !== Mo(t, 16)._compositionEnd(n.target.value) && o), "ngModelChange" === e && (o = !1 !== (r.searchKeyword = n) && o), o; }), null, null)), Zo(16, 16384, null, 0, uu, [en, Qe, [2, lu]], null, null), Yo(1024, null, au, (function (t) { return [t]; }), [uu]), Zo(18, 671744, null, 0, rc, [[2, pu], [8, null], [8, null], [6, au]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), Yo(2048, null, hu, null, [rc]), Zo(20, 16384, null, 0, mu, [[4, hu]], null, null), (t()(), Ei(21, 0, null, null, 1, "button", [["class", "btn btn-primary btn-sm"], ["style", " position: relative; text-align: right;\n left: 81.5%;"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.addRows() && o), o; }), null, null)), (t()(), Vi(-1, null, ["More"])), (t()(), Ei(23, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-sm"], ["style", " position: relative; text-align: right;\n left: 74.5%;"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.removeRows() && o), o; }), null, null)), (t()(), Vi(-1, null, ["Less"])), (t()(), Ei(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ei(26, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, dp, pp)), Zo(27, 49152, null, 0, _c, [], null, null), (t()(), Ei(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ei(29, 0, null, null, 25, "table", [["class", "table table-hover table-dark"]], null, null, null, null, null)), (t()(), Ei(30, 0, null, null, 20, "thead", [], null, null, null, null, null)), (t()(), Ei(31, 0, null, null, 19, "tr", [], null, null, null, null, null)), (t()(), Ei(32, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["_id"])), (t()(), Ei(34, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Last Name"])), (t()(), Ei(36, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Birth Name"])), (t()(), Ei(38, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["SSN"])), (t()(), Ei(40, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Commune"])), (t()(), Ei(42, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Departement"])), (t()(), Ei(44, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Pays"])), (t()(), Ei(46, 0, null, null, 1, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, ["Naissance"])), (t()(), Ei(48, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), Vi(-1, null, [" ClearAll "])), (t()(), Ei(50, 0, null, null, 0, "input", [["class", "form-check-input"], ["id", "defaultCheck1"], ["style", "width: 20px; height: 20px; margin-left:10px; margin-right:auto; "], ["type", "checkbox"]], null, [[null, "change"]], (function (t, e, n) { var o = !0; return "change" === e && (o = !1 !== t.component.clearAll() && o), o; }), null, null)), (t()(), Ei(51, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (t()(), xi(16777216, null, null, 2, null, Om)), Zo(53, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null), Bi(128, 54, new Array(3)), (t()(), Ei(55, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ei(56, 0, null, null, 8, "form", [["class", "form-inline my-2 my-lg-0"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], (function (t, e, n) { var o = !0; return "submit" === e && (o = !1 !== Mo(t, 58).onSubmit(n) && o), "reset" === e && (o = !1 !== Mo(t, 58).onReset() && o), o; }), null, null)), Zo(57, 16384, null, 0, ic, [], null, null), Zo(58, 4210688, null, 0, Xu, [[8, null], [8, null]], null, null), Yo(2048, null, pu, null, [Xu]), Zo(60, 16384, null, 0, gu, [[4, pu]], null, null), (t()(), Ei(61, 0, null, null, 1, "button", [["class", "btn btn-primary btn-sm"], ["style", " position: relative; text-align: right;\n left: 96.5%;"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.addRows() && o), o; }), null, null)), (t()(), Vi(-1, null, ["More"])), (t()(), Ei(63, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-sm"], ["style", " position: relative; text-align: right;\n left: 89.5%;"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.removeRows() && o), o; }), null, null)), (t()(), Vi(-1, null, ["Less"])), (t()(), Ei(65, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ei(66, 0, null, null, 0, "br", [], null, null, null, null, null))], (function (t, e) { var n = e.component; t(e, 7, 0, Vn(e, 7, 0, Mo(e, 8).transform(n.isDarkTheme))), t(e, 18, 0, "input3-group2", n.searchKeyword); var o = Vn(e, 53, 0, t(e, 54, 0, Mo(e, 0), n.tab.slice(0, n.numberShow), n.searchKeyword)); t(e, 53, 0, o); }), (function (t, e) { t(e, 5, 0, Mo(e, 7).id, Mo(e, 7).disabled ? null : -1, null, null, Mo(e, 7).checked, Mo(e, 7).disabled, "before" == Mo(e, 7).labelPosition, "NoopAnimations" === Mo(e, 7)._animationMode), t(e, 10, 0, Mo(e, 14).ngClassUntouched, Mo(e, 14).ngClassTouched, Mo(e, 14).ngClassPristine, Mo(e, 14).ngClassDirty, Mo(e, 14).ngClassValid, Mo(e, 14).ngClassInvalid, Mo(e, 14).ngClassPending), t(e, 15, 0, Mo(e, 20).ngClassUntouched, Mo(e, 20).ngClassTouched, Mo(e, 20).ngClassPristine, Mo(e, 20).ngClassDirty, Mo(e, 20).ngClassValid, Mo(e, 20).ngClassInvalid, Mo(e, 20).ngClassPending), t(e, 26, 0, Mo(e, 27).vertical ? "vertical" : "horizontal", Mo(e, 27).vertical, !Mo(e, 27).vertical, Mo(e, 27).inset), t(e, 56, 0, Mo(e, 60).ngClassUntouched, Mo(e, 60).ngClassTouched, Mo(e, 60).ngClassPristine, Mo(e, 60).ngClassDirty, Mo(e, 60).ngClassValid, Mo(e, 60).ngClassInvalid, Mo(e, 60).ngClassPending); })); }
            var Am = function () { function t(t, e, n, o, r, i) { var a = this; this.themeService = t, this.buildService = e, this.toastr = n, this.modalService = r, this.modalService2 = i, this.queue = [], this.tab = [], this.showCompare = !1, this.buildService.getTab().forEach((function (t) { a.tab.push(t); })), o.backdrop = "static", o.keyboard = !1; } return t.prototype.open = function (t, e) { this.activeBuild = this.tab.find((function (t) { return t.Build == e; })), this.modalService.open(t, { windowClass: "dark-modal", size: "xl", centered: !0, scrollable: !0 }); }, t.prototype.open2 = function (t) { this.modalService2.open(t, { windowClass: "dark-modal", size: "xl", centered: !0, scrollable: !0 }); }, t.prototype.ngOnInit = function () { this.toggleDarkTheme(!0); }, t.prototype.getDark = function () { return this.themeService.isDarkTheme; }, t.prototype.toggleDarkTheme = function (t) { this.themeService.setDarkTheme(t); }, t.prototype.getBrancheClass = function (t) { return t.includes("RELEASE"); }, t.prototype.showSuccess = function (t) { if (this.queue[0] == t)
                return this.toastr.error("Bad Request", this.queue[0] + " x " + t, { timeOut: 1500 }), this.showCompare = !1, void this.queue.shift(); this.queue.push(t), this.tab.forEach((function (e) { e.Build == t && (e.checked = !0); })), 2 == this.queue.length ? (this.tab.forEach((function (e) { e.Build == t && (e.checked = !0); })), this.showCompare = !0, this.toastr.success("GOOD Request", this.queue[0] + " x " + t, { timeOut: 1500 }), this.oldAndnewBuild = this.queue[0] + " and " + t, this.queue.shift(), this.queue.shift()) : this.showCompare = !1; }, t.prototype.clearAll = function () { this.tab.forEach((function (t) { t.checked = !1; })), this.showCompare = !1; }, t; }(), Im = Ln({ encapsulation: 0, styles: [["h1[_ngcontent-%COMP%]{font-weight:200}header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.flex-content[_ngcontent-%COMP%]   td-tile[_ngcontent-%COMP%]{flex:30%;margin:0 10px 10px 0}mat-slide-toggle[_ngcontent-%COMP%]{margin-bottom:10px}.dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:#292b2c;color:#fff}.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff}.light-blue-backdrop[_ngcontent-%COMP%]{background-color:#5cb3fd}"]], data: {} });
            function Pm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 10, "div", [["class", "container-fluid"]], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 1, "td-extract", [], null, null, null, gc, fc)), Zo(2, 114688, null, 0, hc, [dc], null, null), (t()(), Ei(3, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, dp, pp)), Zo(4, 49152, null, 0, _c, [], null, null), (t()(), Ei(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ei(6, 0, null, null, 4, "td-tile", [], null, null, null, Dm, Tm)), Yo(4608, null, hp, hp, []), Yo(512, null, Vf, Vf, []), Yo(512, null, Zf, Zf, [Ke, Ce, Gf, Vf]), Zo(10, 114688, null, 0, pm, [Ya, dc, km, Vf, Zf, Zf], null, null)], (function (t, e) { t(e, 2, 0), t(e, 10, 0); }), (function (t, e) { t(e, 3, 0, Mo(e, 4).vertical ? "vertical" : "horizontal", Mo(e, 4).vertical, !Mo(e, 4).vertical, Mo(e, 4).inset); })); }
            function Nm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 4, "td-dashboard", [], null, null, null, Pm, Im)), Yo(4608, null, hp, hp, []), Yo(512, null, Vf, Vf, []), Yo(512, null, Zf, Zf, [Ke, Ce, Gf, Vf]), Zo(4, 114688, null, 0, Am, [Ya, dc, km, Vf, Zf, Zf], null, null)], (function (t, e) { t(e, 4, 0); }), null); }
            var Fm = Eo("td-dashboard", Am, Nm, {}, {}, []), Rm = Ln({ encapsulation: 2, styles: ["ngb-alert{display:block}"], data: {} });
            function Mm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.closeHandler() && o), o; }), null, null)), (t()(), Ei(1, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\xd7"]))], null, null); }
            function jm(t) { return qi(2, [Ri(null, 0), (t()(), xi(16777216, null, null, 1, null, Mm)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null)], (function (t, e) { t(e, 2, 0, e.component.dismissible); }), null); }
            function Bm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-alert", [["class", "alert"], ["role", "alert"]], [[2, "alert-dismissible", null]], null, null, jm, Rm)), Zo(1, 638976, null, 0, rf, [of, en, Qe], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).dismissible); })); }
            var Vm = Eo("ngb-alert", rf, Bm, { dismissible: "dismissible", type: "type" }, { close: "close" }, ["*"]), Lm = Ln({ encapsulation: 2, styles: ['ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex="0"]{z-index:1}'], data: {} });
            function Hm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 0, "div", [["class", "ngb-dp-weekday ngb-dp-showweek"]], null, null, null, null, null))], null, null); }
            function qm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["class", "ngb-dp-weekday small"], ["role", "columnheader"]], null, null, null, null, null)), (t()(), Vi(1, null, [" ", " "]))], null, (function (t, e) { t(e, 1, 0, e.component.i18n.getWeekdayShortName(e.context.$implicit)); })); }
            function zm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 4, "div", [["class", "ngb-dp-week ngb-dp-weekdays"], ["role", "row"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, Hm)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, qm)), Zo(4, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { var n = e.component; t(e, 2, 0, n.showWeekNumbers), t(e, 4, 0, n.month.weekdays); }), null); }
            function Um(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["class", "ngb-dp-week-number small text-muted"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", ""]))], null, (function (t, e) { t(e, 1, 0, e.component.i18n.getWeekNumerals(e.parent.parent.context.$implicit.number)); })); }
            function Wm(t) { return qi(0, [(t()(), xi(0, null, null, 0))], null, null); }
            function Km(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, Wm)), Zo(1, 540672, null, 0, Us, [Cn], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (t()(), xi(0, null, null, 0))], (function (t, e) { t(e, 1, 0, e.parent.context.$implicit.context, e.component.dayTemplate); }), null); }
            function $m(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 2, "div", [["class", "ngb-dp-day"], ["role", "gridcell"]], [[2, "disabled", null], [8, "tabIndex", 0], [2, "hidden", null], [2, "ngb-dp-today", null], [1, "aria-label", 0]], [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.doSelect(t.context.$implicit) && o), o; }), null, null)), (t()(), xi(16777216, null, null, 1, null, Km)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null)], (function (t, e) { t(e, 2, 0, !e.context.$implicit.hidden); }), (function (t, e) { t(e, 0, 0, e.context.$implicit.context.disabled, e.context.$implicit.tabindex, e.context.$implicit.hidden, e.context.$implicit.context.today, e.context.$implicit.ariaLabel); })); }
            function Gm(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 4, "div", [["class", "ngb-dp-week"], ["role", "row"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, Um)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, $m)), Zo(4, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { t(e, 2, 0, e.component.showWeekNumbers), t(e, 4, 0, e.parent.context.$implicit.days); }), null); }
            function Zm(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, Gm)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(0, null, null, 0))], (function (t, e) { t(e, 1, 0, !e.context.$implicit.collapsed); }), null); }
            function Qm(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, zm)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, Zm)), Zo(3, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { var n = e.component; t(e, 1, 0, n.showWeekdays), t(e, 3, 0, n.month.weeks); }), null); }
            var Ym = Ln({ encapsulation: 2, styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"], data: {} });
            function Xm(t) { return qi(2, [(t()(), Vi(0, null, ["", ""]))], null, (function (t, e) { var n = e.component; t(e, 0, 0, n.i18n.getDayNumerals(n.date)); })); }
            var Jm = Ln({ encapsulation: 2, styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"], data: {} });
            function tg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-datepicker-navigation-select", [["class", "ngb-dp-navigation-select"]], null, [[null, "select"]], (function (t, e, n) { var o = !0; return "select" === e && (o = !1 !== t.component.select.emit(n) && o), o; }), ug, ag)), Zo(1, 8437760, null, 0, Mf, [_f, en], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], years: [3, "years"] }, { select: "select" })], (function (t, e) { var n = e.component; t(e, 1, 0, n.date, n.disabled, n.selectBoxes.months, n.selectBoxes.years); }), null); }
            function eg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
            function ng(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
            function og(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, eg)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(2, 0, null, null, 1, "div", [["class", "ngb-dp-month-name"]], null, null, null, null, null)), (t()(), Vi(3, null, [" ", " ", " "])), (t()(), xi(16777216, null, null, 1, null, ng)), Zo(5, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(0, null, null, 0))], (function (t, e) { var n = e.component; t(e, 1, 0, e.context.index > 0), t(e, 5, 0, e.context.index !== n.months.length - 1); }), (function (t, e) { var n = e.component; t(e, 3, 0, n.i18n.getMonthFullName(e.context.$implicit.number, e.context.$implicit.year), n.i18n.getYearNumerals(e.context.$implicit.year)); })); }
            function rg(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, og)), Zo(1, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null), (t()(), xi(0, null, null, 0))], (function (t, e) { t(e, 1, 0, e.component.months); }), null); }
            function ig(t) { return qi(2, [(t()(), Ei(0, 0, null, null, 2, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 1, "button", [["aria-label", "Previous month"], ["class", "btn btn-link ngb-dp-arrow-btn"], ["title", "Previous month"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.onClickPrev(n) && o), o; }), null, null)), (t()(), Ei(2, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, tg)), Zo(4, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, rg)), Zo(6, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(7, 0, null, null, 2, "div", [["class", "ngb-dp-arrow right"]], null, null, null, null, null)), (t()(), Ei(8, 0, null, null, 1, "button", [["aria-label", "Next month"], ["class", "btn btn-link ngb-dp-arrow-btn"], ["title", "Next month"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.onClickNext(n) && o), o; }), null, null)), (t()(), Ei(9, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null))], (function (t, e) { var n = e.component; t(e, 4, 0, n.showSelect), t(e, 6, 0, !n.showSelect); }), (function (t, e) { var n = e.component; t(e, 1, 0, n.prevDisabled), t(e, 8, 0, n.nextDisabled); })); }
            var ag = Ln({ encapsulation: 2, styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"], data: {} });
            function sg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "option", [], [[1, "aria-label", 0]], null, null, null, null)), Zo(1, 147456, null, 0, Nu, [Qe, en, [8, null]], { value: [0, "value"] }, null), Zo(2, 147456, null, 0, Mu, [Qe, en, [8, null]], { value: [0, "value"] }, null), (t()(), Vi(3, null, ["", ""]))], (function (t, e) { t(e, 1, 0, e.context.$implicit), t(e, 2, 0, e.context.$implicit); }), (function (t, e) { var n = e.component; t(e, 0, 0, n.i18n.getMonthFullName(e.context.$implicit, null == n.date ? null : n.date.year)), t(e, 3, 0, n.i18n.getMonthShortName(e.context.$implicit, null == n.date ? null : n.date.year)); })); }
            function lg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "option", [], null, null, null, null, null)), Zo(1, 147456, null, 0, Nu, [Qe, en, [8, null]], { value: [0, "value"] }, null), Zo(2, 147456, null, 0, Mu, [Qe, en, [8, null]], { value: [0, "value"] }, null), (t()(), Vi(3, null, ["", ""]))], (function (t, e) { t(e, 1, 0, e.context.$implicit), t(e, 2, 0, e.context.$implicit); }), (function (t, e) { t(e, 3, 0, e.component.i18n.getYearNumerals(e.context.$implicit)); })); }
            function ug(t) { return qi(2, [Ai(402653184, 1, { monthSelect: 0 }), Ai(402653184, 2, { yearSelect: 0 }), (t()(), Ei(2, 0, [[1, 0], ["month", 1]], null, 2, "select", [["aria-label", "Select month"], ["class", "custom-select"], ["title", "Select month"]], [[8, "disabled", 0]], [[null, "change"]], (function (t, e, n) { var o = !0; return "change" === e && (o = !1 !== t.component.changeMonth(n.target.value) && o), o; }), null, null)), (t()(), xi(16777216, null, null, 1, null, sg)), Zo(4, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null), (t()(), Ei(5, 0, [[2, 0], ["year", 1]], null, 2, "select", [["aria-label", "Select year"], ["class", "custom-select"], ["title", "Select year"]], [[8, "disabled", 0]], [[null, "change"]], (function (t, e, n) { var o = !0; return "change" === e && (o = !1 !== t.component.changeYear(n.target.value) && o), o; }), null, null)), (t()(), xi(16777216, null, null, 1, null, lg)), Zo(7, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { var n = e.component; t(e, 4, 0, n.months), t(e, 7, 0, n.years); }), (function (t, e) { var n = e.component; t(e, 2, 0, n.disabled), t(e, 5, 0, n.disabled); })); }
            var cg = Ln({ encapsulation: 2, styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"], data: {} });
            function pg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, Xm, Ym)), Zo(1, 49152, null, 0, Rf, [_f], { currentMonth: [0, "currentMonth"], date: [1, "date"], disabled: [2, "disabled"], focused: [3, "focused"], selected: [4, "selected"] }, null)], (function (t, e) { t(e, 1, 0, e.context.currentMonth, e.context.date, e.context.disabled, e.context.focused, e.context.selected); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).selected, Mo(e, 1).selected, Mo(e, 1).isMuted(), Mo(e, 1).isMuted(), Mo(e, 1).focused); })); }
            function dg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-datepicker-navigation", [], null, [[null, "navigate"], [null, "select"]], (function (t, e, n) { var o = !0, r = t.component; return "navigate" === e && (o = !1 !== r.onNavigateEvent(n) && o), "select" === e && (o = !1 !== r.onNavigateDateSelect(n) && o), o; }), ig, Jm)), Zo(1, 49152, null, 0, Pf, [_f], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], showSelect: [3, "showSelect"], prevDisabled: [4, "prevDisabled"], nextDisabled: [5, "nextDisabled"], selectBoxes: [6, "selectBoxes"] }, { navigate: "navigate", select: "select" })], (function (t, e) { var n = e.component; t(e, 1, 0, n.model.firstDate, n.model.disabled, n.model.months, "select" === n.model.navigation, n.model.prevDisabled, n.model.nextDisabled, n.model.selectBoxes); }), null); }
            function hg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["class", "ngb-dp-month-name"]], null, null, null, null, null)), (t()(), Vi(1, null, [" ", " ", " "]))], null, (function (t, e) { var n = e.component; t(e, 1, 0, n.i18n.getMonthFullName(e.parent.context.$implicit.number, e.parent.context.$implicit.year), n.i18n.getYearNumerals(e.parent.context.$implicit.year)); })); }
            function fg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 4, "div", [["class", "ngb-dp-month"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, hg)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(3, 0, null, null, 1, "ngb-datepicker-month-view", [["role", "grid"]], null, [[null, "select"]], (function (t, e, n) { var o = !0; return "select" === e && (o = !1 !== t.component.onDateSelect(n) && o), o; }), Qm, Lm)), Zo(4, 49152, null, 0, If, [_f], { dayTemplate: [0, "dayTemplate"], month: [1, "month"], showWeekdays: [2, "showWeekdays"], showWeekNumbers: [3, "showWeekNumbers"] }, { select: "select" })], (function (t, e) { var n = e.component; t(e, 2, 0, "none" === n.navigation || n.displayMonths > 1 && "select" === n.navigation), t(e, 4, 0, n.dayTemplate || Mo(e.parent, 1), e.context.$implicit, n.showWeekdays, n.showWeekNumbers); }), null); }
            function mg(t) { return qi(0, [(t()(), xi(0, null, null, 0))], null, null); }
            function gg(t) { return qi(2, [Ai(402653184, 1, { _monthsEl: 0 }), (t()(), xi(0, [["dt", 2]], null, 0, null, pg)), (t()(), Ei(2, 0, null, null, 2, "div", [["class", "ngb-dp-header"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, dg)), Zo(4, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(5, 0, [[1, 0], ["months", 1]], null, 2, "div", [["class", "ngb-dp-months"]], null, [[null, "keydown"]], (function (t, e, n) { var o = !0; return "keydown" === e && (o = !1 !== t.component.onKeyDown(n) && o), o; }), null, null)), (t()(), xi(16777216, null, null, 1, null, fg)), Zo(7, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null), (t()(), xi(16777216, null, null, 1, null, mg)), Zo(9, 540672, null, 0, Us, [Cn], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], (function (t, e) { var n = e.component; t(e, 4, 0, "none" !== n.navigation), t(e, 7, 0, n.model.months), t(e, 9, 0, n.footerTemplate); }), null); }
            function yg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 4, "ngb-datepicker", [], null, null, null, gg, cg)), Yo(5120, null, au, (function (t) { return [t]; }), [Af]), Yo(512, null, kf, kf, [ff, _f]), Yo(512, null, xf, xf, [kf, ff]), Zo(4, 4964352, null, 0, Af, [xf, kf, ff, _f, Sf, ve, Qe, Of, $r], null, null)], (function (t, e) { t(e, 4, 0); }), null); }
            var bg = Eo("ngb-datepicker", Af, yg, { dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate" }, { navigate: "navigate", select: "select" }, []), vg = Ln({ encapsulation: 2, styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"], data: {} });
            function _g(t) { return qi(0, [(t()(), Vi(0, null, ["", ""]))], null, (function (t, e) { t(e, 0, 0, e.component.title); })); }
            function wg(t) { return qi(0, [(t()(), xi(0, null, null, 0))], null, null); }
            function kg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "h3", [["class", "popover-header"]], null, null, null, null, null)), (t()(), xi(0, [["simpleTitle", 2]], null, 0, null, _g)), (t()(), xi(16777216, null, null, 1, null, wg)), Zo(3, 540672, null, 0, Us, [Cn], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null)], (function (t, e) { var n = e.component; t(e, 3, 0, n.context, n.isTitleTemplate() ? n.title : Mo(e, 1)); }), null); }
            function Cg(t) { return qi(2, [(t()(), Ei(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (t()(), xi(16777216, null, null, 1, null, kg)), Zo(2, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(3, 0, null, null, 1, "div", [["class", "popover-body"]], null, null, null, null, null)), Ri(null, 0)], (function (t, e) { t(e, 2, 0, null != e.component.title); }), null); }
            function xg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-popover-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, Cg, vg)), Zo(1, 49152, null, 0, Xf, [], null, null)], null, (function (t, e) { t(e, 0, 0, "popover" + (Mo(e, 1).popoverClass ? " " + Mo(e, 1).popoverClass : ""), Mo(e, 1).id); })); }
            var Eg = Eo("ngb-popover-window", Xf, xg, { title: "title", id: "id", popoverClass: "popoverClass", context: "context" }, {}, ["*"]), Sg = Ln({ encapsulation: 2, styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"], data: {} });
            function Tg(t) { return qi(2, [(t()(), Ei(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 1, "div", [["class", "tooltip-inner"]], null, null, null, null, null)), Ri(null, 0)], null, null); }
            function Og(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-tooltip-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, Tg, Sg)), Zo(1, 49152, null, 0, im, [], null, null)], null, (function (t, e) { t(e, 0, 0, "tooltip show" + (Mo(e, 1).tooltipClass ? " " + Mo(e, 1).tooltipClass : ""), Mo(e, 1).id); })); }
            var Dg = Eo("ngb-tooltip-window", im, Og, { id: "id", tooltipClass: "tooltipClass" }, {}, ["*"]), Ag = Ln({ encapsulation: 2, styles: [], data: {} });
            function Ig(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-highlight", [], null, null, null, Hg, jg)), Zo(1, 573440, null, 0, sm, [], { result: [0, "result"], term: [1, "term"] }, null)], (function (t, e) { var n = e.context.formatter(e.context.result); t(e, 1, 0, n, e.context.term); }), null); }
            function Pg(t) { return qi(0, [(t()(), xi(0, null, null, 0))], null, null); }
            function Ng(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "button", [["class", "dropdown-item"], ["role", "option"], ["type", "button"]], [[8, "id", 0], [2, "active", null]], [[null, "mouseenter"], [null, "click"]], (function (t, e, n) { var o = !0, r = t.component; return "mouseenter" === e && (o = !1 !== r.markActive(t.context.index) && o), "click" === e && (o = !1 !== r.select(t.context.$implicit) && o), o; }), null, null)), (t()(), xi(16777216, null, null, 2, null, Pg)), Zo(2, 540672, null, 0, Us, [Cn], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), ji(3, { result: 0, term: 1, formatter: 2 })], (function (t, e) { var n = e.component, o = t(e, 3, 0, e.context.$implicit, n.term, n.formatter); t(e, 2, 0, o, n.resultTemplate || Mo(e.parent, 0)); }), (function (t, e) { var n = e.component; t(e, 0, 0, n.id + "-" + e.context.index, e.context.index === n.activeIdx); })); }
            function Fg(t) { return qi(0, [(t()(), xi(0, [["rt", 2]], null, 0, null, Ig)), (t()(), xi(16777216, null, null, 1, null, Ng)), Zo(2, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { t(e, 2, 0, e.component.results); }), null); }
            function Rg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-typeahead-window", [["class", "dropdown-menu show"], ["role", "listbox"]], [[8, "id", 0]], [[null, "mousedown"]], (function (t, e, n) { var o = !0; return "mousedown" === e && (o = !1 !== n.preventDefault() && o), o; }), Fg, Ag)), Zo(1, 114688, null, 0, lm, [], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).id); })); }
            var Mg = Eo("ngb-typeahead-window", lm, Rg, { id: "id", focusFirst: "focusFirst", results: "results", term: "term", formatter: "formatter", resultTemplate: "resultTemplate" }, { selectEvent: "select", activeChangeEvent: "activeChange" }, []), jg = Ln({ encapsulation: 2, styles: [".ngb-highlight{font-weight:700}"], data: {} });
            function Bg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (t()(), Vi(1, null, ["", ""]))], null, (function (t, e) { t(e, 0, 0, e.component.highlightClass), t(e, 1, 0, e.parent.context.$implicit); })); }
            function Vg(t) { return qi(0, [(t()(), Vi(0, null, ["", ""]))], null, (function (t, e) { t(e, 0, 0, e.parent.context.$implicit); })); }
            function Lg(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, Bg)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (t()(), xi(0, [["even", 2]], null, 0, null, Vg))], (function (t, e) { t(e, 1, 0, e.context.odd, Mo(e, 2)); }), null); }
            function Hg(t) { return qi(2, [(t()(), xi(16777216, null, null, 1, null, Lg)), Zo(1, 278528, null, 0, Ms, [Cn, wn, gn], { ngForOf: [0, "ngForOf"] }, null)], (function (t, e) { t(e, 1, 0, e.component.parts); }), null); }
            var qg = Ln({ encapsulation: 2, styles: [], data: {} });
            function zg(t) { return qi(0, [], null, null); }
            function Ug(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-modal-backdrop", [["style", "z-index: 1050"]], [[8, "className", 0]], null, null, zg, qg)), Zo(1, 49152, null, 0, zf, [], null, null)], null, (function (t, e) { t(e, 0, 0, "modal-backdrop fade show" + (Mo(e, 1).backdropClass ? " " + Mo(e, 1).backdropClass : "")); })); }
            var Wg = Eo("ngb-modal-backdrop", zf, Ug, { backdropClass: "backdropClass" }, {}, []), Kg = Ln({ encapsulation: 2, styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"], data: {} });
            function $g(t) { return qi(0, [Ai(402653184, 1, { _dialogEl: 0 }), (t()(), Ei(1, 0, [[1, 0], ["dialog", 1]], null, 2, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (t()(), Ei(2, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), Ri(null, 0)], null, (function (t, e) { var n = e.component; t(e, 1, 0, "modal-dialog" + (n.size ? " modal-" + n.size : "") + (n.centered ? " modal-dialog-centered" : "") + (n.scrollable ? " modal-dialog-scrollable" : "")); })); }
            function Gg(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "ngb-modal-window", [["role", "dialog"], ["tabindex", "-1"]], [[8, "className", 0], [1, "aria-modal", 0], [1, "aria-labelledby", 0]], null, null, $g, Kg)), Zo(1, 4440064, null, 0, $f, [Qs, Qe, $r], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, "modal fade show d-block" + (Mo(e, 1).windowClass ? " " + Mo(e, 1).windowClass : ""), !0, Mo(e, 1).ariaLabelledBy); })); }
            var Zg = Eo("ngb-modal-window", $f, Gg, { ariaLabelledBy: "ariaLabelledBy", backdrop: "backdrop", centered: "centered", keyboard: "keyboard", scrollable: "scrollable", size: "size", windowClass: "windowClass" }, { dismissEvent: "dismiss" }, ["*"]), Qg = function (t) { function e(e, n) { var o = t.call(this, e, n) || this; return o.scheduler = e, o.work = n, o; } return o.__extends(e, t), e.prototype.requestAsyncId = function (e, n, o) { return void 0 === o && (o = 0), null !== o && o > 0 ? t.prototype.requestAsyncId.call(this, e, n, o) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame((function () { return e.flush(null); })))); }, e.prototype.recycleAsyncId = function (e, n, o) { if (void 0 === o && (o = 0), null !== o && o > 0 || null === o && this.delay > 0)
                return t.prototype.recycleAsyncId.call(this, e, n, o); 0 === e.actions.length && (cancelAnimationFrame(n), e.scheduled = void 0); }, e; }(Nc), Yg = new (function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return o.__extends(e, t), e.prototype.flush = function (t) { this.active = !0, this.scheduled = void 0; var e, n = this.actions, o = -1, r = n.length; t = t || n.shift(); do {
                if (e = t.execute(t.state, t.delay))
                    break;
            } while (++o < r && (t = n.shift())); if (this.active = !1, e) {
                for (; ++o < r && (t = n.shift());)
                    t.unsubscribe();
                throw e;
            } }, e; }(Rc))(Qg), Xg = function () { return function () { }; }(), Jg = function () { return function () { }; }(), ty = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), ey = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), ny = "undefined" != typeof window && window || {}, oy = ny.document;
            function ry() { return "bs4" === ny.__theme; }
            var iy = function () { return function () { this.interval = 5e3, this.noPause = !1, this.noWrap = !1, this.keyboard = !1; }; }(), ay = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), sy = function () { return function () { }; }(), ly = function () { return function () { }; }(), uy = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), cy = function () { function t(t, e) { this.open = t, this.close = e || t; } return t.prototype.isManual = function () { return "manual" === this.open || "manual" === this.close; }, t; }(), py = { hover: ["mouseover", "mouseout"], focus: ["focusin", "focusout"] };
            "undefined" != typeof window && window;
            var dy = function () { return function (t, e, n) { this.nodes = t, this.viewRef = e, this.componentRef = n; }; }(), hy = function () { function t(t, e, n, o, r, i, a, s) { this._viewContainerRef = t, this._renderer = e, this._elementRef = n, this._injector = o, this._componentFactoryResolver = r, this._ngZone = i, this._applicationRef = a, this._posService = s, this.onBeforeShow = new br, this.onShown = new br, this.onBeforeHide = new br, this.onHidden = new br, this.shown = new br, this.hidden = new br, this._providers = [], this._isHiding = !1, this.containerDefaultSelector = "body", this._listenOpts = {}, this._globalListener = Function.prototype; } return Object.defineProperty(t.prototype, "isShown", { get: function () { return !this._isHiding && !!this._componentRef; }, enumerable: !0, configurable: !0 }), t.prototype.attach = function (t) { return this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(t), this; }, t.prototype.to = function (t) { return this.container = t || this.container, this; }, t.prototype.position = function (t) { return this.attachment = t.attachment || this.attachment, this._elementRef = t.target || this._elementRef, this; }, t.prototype.provide = function (t) { return this._providers.push(t), this; }, t.prototype.show = function (t) { if (void 0 === t && (t = {}), this._subscribePositioning(), this._innerComponent = null, !this._componentRef) {
                this.onBeforeShow.emit(), this._contentRef = this._getContentRef(t.content, t.data);
                var e = Ce.create({ providers: this._providers, parent: this._injector });
                if (this._componentRef = this._componentFactory.create(e, this._contentRef.nodes), this._applicationRef.attachView(this._componentRef.hostView), this.instance = this._componentRef.instance, Object.assign(this._componentRef.instance, t), this.container instanceof Qe && this.container.nativeElement.appendChild(this._componentRef.location.nativeElement), "string" == typeof this.container && "undefined" != typeof document) {
                    var n = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
                    n && n.appendChild(this._componentRef.location.nativeElement);
                }
                !this.container && this._elementRef && this._elementRef.nativeElement.parentElement && this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement), this._contentRef.componentRef && (this._innerComponent = this._contentRef.componentRef.instance, this._contentRef.componentRef.changeDetectorRef.markForCheck(), this._contentRef.componentRef.changeDetectorRef.detectChanges()), this._componentRef.changeDetectorRef.markForCheck(), this._componentRef.changeDetectorRef.detectChanges(), this.onShown.emit(this._componentRef.instance);
            } return this._registerOutsideClick(), this._componentRef; }, t.prototype.hide = function () { if (!this._componentRef)
                return this; this._posService.deletePositionElement(this._componentRef.location), this.onBeforeHide.emit(this._componentRef.instance); var t = this._componentRef.location.nativeElement; return t.parentNode.removeChild(t), this._contentRef.componentRef && this._contentRef.componentRef.destroy(), this._componentRef.destroy(), this._viewContainerRef && this._contentRef.viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef)), this._contentRef.viewRef && this._contentRef.viewRef.destroy(), this._contentRef = null, this._componentRef = null, this._removeGlobalListener(), this.onHidden.emit(), this; }, t.prototype.toggle = function () { this.isShown ? this.hide() : this.show(); }, t.prototype.dispose = function () { this.isShown && this.hide(), this._unsubscribePositioning(), this._unregisterListenersFn && this._unregisterListenersFn(); }, t.prototype.listen = function (t) { var e = this; this.triggers = t.triggers || this.triggers, this._listenOpts.outsideClick = t.outsideClick, this._listenOpts.outsideEsc = t.outsideEsc, t.target = t.target || this._elementRef.nativeElement; var n = this._listenOpts.hide = function () { return t.hide ? t.hide() : void e.hide(); }, o = this._listenOpts.show = function (n) { t.show ? t.show(n) : e.show(n), n(); }; return this._unregisterListenersFn = function (t, e) { var n = function (t, e) { void 0 === e && (e = py); var n = (t || "").trim(); if (0 === n.length)
                return []; var o = n.split(/\s+/).map((function (t) { return t.split(":"); })).map((function (t) { var n = e[t[0]] || t; return new cy(n[0], n[1]); })), r = o.filter((function (t) { return t.isManual(); })); if (r.length > 1)
                throw new Error("Triggers parse error: only one manual trigger is allowed"); if (1 === r.length && o.length > 1)
                throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers"); return o; }(e.triggers), o = e.target; if (1 === n.length && n[0].isManual())
                return Function.prototype; var r = [], i = [], a = function () { i.forEach((function (t) { return r.push(t()); })), i.length = 0; }; return n.forEach((function (n) { var s = n.open === n.close, l = s ? e.toggle : e.show; s || i.push((function () { return t.listen(o, n.close, e.hide); })), r.push(t.listen(o, n.open, (function () { return l(a); }))); })), function () { r.forEach((function (t) { return t(); })); }; }(this._renderer, { target: t.target, triggers: t.triggers, show: o, hide: n, toggle: function (t) { e.isShown ? n() : o(t); } }), this; }, t.prototype._removeGlobalListener = function () { this._globalListener && (this._globalListener(), this._globalListener = null); }, t.prototype.attachInline = function (t, e) { return this._inlineViewRef = t.createEmbeddedView(e), this; }, t.prototype._registerOutsideClick = function () { var t = this; if (this._componentRef && this._componentRef.location) {
                if (this._listenOpts && this._listenOpts.outsideClick) {
                    var e = this._componentRef.location.nativeElement;
                    setTimeout((function () { var n; t._globalListener = (n = { targets: [e, t._elementRef.nativeElement], outsideClick: t._listenOpts.outsideClick, hide: function () { return t._listenOpts.hide(); } }).outsideClick ? t._renderer.listen("document", "click", (function (t) { n.target && n.target.contains(t.target) || n.targets && n.targets.some((function (e) { return e.contains(t.target); })) || n.hide(); })) : Function.prototype; }));
                }
                var n;
                this._listenOpts.outsideEsc && (this._globalListener = (n = { targets: [this._componentRef.location.nativeElement, this._elementRef.nativeElement], outsideEsc: this._listenOpts.outsideEsc, hide: function () { return t._listenOpts.hide(); } }).outsideEsc ? this._renderer.listen("document", "keyup.esc", (function (t) { n.target && n.target.contains(t.target) || n.targets && n.targets.some((function (e) { return e.contains(t.target); })) || n.hide(); })) : Function.prototype);
            } }, t.prototype.getInnerComponent = function () { return this._innerComponent; }, t.prototype._subscribePositioning = function () { var t = this; !this._zoneSubscription && this.attachment && (this.onShown.subscribe((function () { t._posService.position({ element: t._componentRef.location, target: t._elementRef, attachment: t.attachment, appendToBody: "body" === t.container }); })), this._zoneSubscription = this._ngZone.onStable.subscribe((function () { t._componentRef && t._posService.calcPosition(); }))); }, t.prototype._unsubscribePositioning = function () { this._zoneSubscription && (this._zoneSubscription.unsubscribe(), this._zoneSubscription = null); }, t.prototype._getContentRef = function (t, e) { if (!t)
                return new dy([]); if (t instanceof wn) {
                if (this._viewContainerRef) {
                    var n = this._viewContainerRef.createEmbeddedView(t);
                    return n.markForCheck(), new dy([n.rootNodes], n);
                }
                var o = t.createEmbeddedView({});
                return this._applicationRef.attachView(o), new dy([o.rootNodes], o);
            } if ("function" == typeof t) {
                var r = this._componentFactoryResolver.resolveComponentFactory(t), i = Ce.create({ providers: this._providers, parent: this._injector }), a = r.create(i);
                return Object.assign(a.instance, e), this._applicationRef.attachView(a.hostView), new dy([[a.location.nativeElement]], a.hostView, a);
            } return new dy([[this._renderer.createText("" + t)]]); }, t; }();
            function fy(t, e) { if (1 !== t.nodeType)
                return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n; }
            function my(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host; }
            function gy(t) { if (!t)
                return document.body; switch (t.nodeName) {
                case "HTML":
                case "BODY": return t.ownerDocument.body;
                case "#document": return t.body;
            } var e = fy(t), n = e.overflowX, o = e.overflowY; return /(auto|scroll|overlay)/.test(String(e.overflow) + String(o) + String(n)) ? t : gy(my(t)); }
            var yy = "undefined" != typeof window && "undefined" != typeof document, by = yy && !(!window.MSInputMethodContext || !document.documentMode), vy = yy && !(!window.MSInputMethodContext || !/MSIE 10/.test(navigator.userAgent));
            function _y(t) { return 11 === t ? by : 10 === t ? vy : by || vy; }
            function wy(t) { if (!t)
                return document.documentElement; for (var e, n = _y(10) ? document.body : null, o = t.offsetParent || null; o === n && t.nextElementSibling && "BODY" !== t.nodeName;)
                o = (e = t.nextElementSibling).offsetParent; var r = o && o.nodeName; return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(o.nodeName) && "static" === fy(o, "position") ? wy(o) : o : e ? e.ownerDocument.documentElement : document.documentElement; }
            function ky(t) { return null !== t.parentNode ? ky(t.parentNode) : t; }
            function Cy(t, e) { if (!(t && t.nodeType && e && e.nodeType))
                return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, o = n ? t : e, r = n ? e : t, i = document.createRange(); i.setStart(o, 0), i.setEnd(r, 0); var a, s, l = i.commonAncestorContainer; if (t !== l && e !== l || o.contains(r))
                return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && wy(a.firstElementChild) !== a ? wy(l) : l; var u = ky(t); return u.host ? Cy(u.host, e) : Cy(t, ky(e).host); }
            function xy(t, e) { var n = "x" === e ? "Left" : "Top", o = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + o + "Width"]); }
            function Ey(t, e, n, o) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], _y(10) ? parseInt(n["offset" + t], 10) + parseInt(o["margin" + ("Height" === t ? "Top" : "Left")], 10) + parseInt(o["margin" + ("Height" === t ? "Bottom" : "Right")], 10) : 0); }
            function Sy(t) { var e = t.body, n = t.documentElement, o = _y(10) && getComputedStyle(n); return { height: Ey("Height", e, n, o), width: Ey("Width", e, n, o) }; }
            function Ty(t, e) { void 0 === e && (e = "top"); var n = "top" === e ? "scrollTop" : "scrollLeft", o = t.nodeName; return "BODY" === o || "HTML" === o ? (t.ownerDocument.scrollingElement || t.ownerDocument.documentElement)[n] : t[n]; }
            function Oy(t) { return Object(o.__assign)({}, t, { right: t.left + t.width, bottom: t.top + t.height }); }
            function Dy(t) { var e = {}; try {
                if (_y(10)) {
                    e = t.getBoundingClientRect();
                    var n = Ty(t, "top"), o = Ty(t, "left");
                    e.top += n, e.left += o, e.bottom += n, e.right += o;
                }
                else
                    e = t.getBoundingClientRect();
            }
            catch (u) {
                return;
            } var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top }, i = "HTML" === t.nodeName ? Sy(t.ownerDocument) : {}, a = t.offsetWidth - (i.width || t.clientWidth || r.right - r.left), s = t.offsetHeight - (i.height || t.clientHeight || r.bottom - r.top); if (a || s) {
                var l = fy(t);
                a -= xy(l, "x"), s -= xy(l, "y"), r.width -= a, r.height -= s;
            } return Oy(r); }
            function Ay(t, e, n) { void 0 === n && (n = !1); var o = _y(10), r = "HTML" === e.nodeName, i = Dy(t), a = Dy(e), s = gy(t), l = fy(e), u = parseFloat(l.borderTopWidth), c = parseFloat(l.borderLeftWidth); n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0)); var p = Oy({ top: i.top - a.top - u, left: i.left - a.left - c, width: i.width, height: i.height }); if (p.marginTop = 0, p.marginLeft = 0, !o && r) {
                var d = parseFloat(l.marginTop), h = parseFloat(l.marginLeft);
                p.top -= u - d, p.bottom -= u - d, p.left -= c - h, p.right -= c - h, p.marginTop = d, p.marginLeft = h;
            } return (o && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (p = function (t, e, n) { void 0 === n && (n = !1); var o = Ty(e, "top"), r = Ty(e, "left"), i = n ? -1 : 1; return t.top += o * i, t.bottom += o * i, t.left += r * i, t.right += r * i, t; }(p, e)), p; }
            function Iy(t) { if (!t || !t.parentElement || _y())
                return document.documentElement; for (var e = t.parentElement; e && "none" === fy(e, "transform");)
                e = e.parentElement; return e || document.documentElement; }
            function Py(t, e, n, o, r) { void 0 === n && (n = 0), void 0 === r && (r = !1); var i = { top: 0, left: 0 }, a = r ? Iy(t) : Cy(t, e); if ("viewport" === o)
                i = function (t, e) { void 0 === e && (e = !1); var n = t.ownerDocument.documentElement, o = Ay(t, n), r = Math.max(n.clientWidth, window.innerWidth || 0), i = Math.max(n.clientHeight, window.innerHeight || 0), a = e ? 0 : Ty(n), s = e ? 0 : Ty(n, "left"); return Oy({ top: a - Number(o.top) + Number(o.marginTop), left: s - Number(o.left) + Number(o.marginLeft), width: r, height: i }); }(a, r);
            else {
                var s = void 0;
                "scrollParent" === o ? "BODY" === (s = gy(my(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === o ? t.ownerDocument.documentElement : o;
                var l = Ay(s, a, r);
                if ("HTML" !== s.nodeName || function t(e) { var n = e.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === fy(e, "position") || t(my(e))); }(a))
                    i = l;
                else {
                    var u = Sy(t.ownerDocument), c = u.height, p = u.width;
                    i.top += l.top - l.marginTop, i.bottom = Number(c) + Number(l.top), i.left += l.left - l.marginLeft, i.right = Number(p) + Number(l.left);
                }
            } return i.left += n, i.top += n, i.right -= n, i.bottom -= n, i; }
            function Ny(t, e, n, r, i, a, s) { if (void 0 === i && (i = ["top", "left", "bottom", "right"]), void 0 === a && (a = "viewport"), void 0 === s && (s = 0), -1 === t.indexOf("auto"))
                return t; var l = Py(n, r, s, a), u = { top: { width: l.width, height: e.top - l.top }, right: { width: l.right - e.right, height: l.height }, bottom: { width: l.width, height: l.bottom - e.bottom }, left: { width: e.left - l.left, height: l.height } }, c = Object.keys(u).map((function (t) { return Object(o.__assign)({ key: t }, u[t], { area: (e = u[t], e.width * e.height) }); var e; })).sort((function (t, e) { return e.area - t.area; })), p = c.filter((function (t) { return t.width >= n.clientWidth && t.height >= n.clientHeight; })), d = (p = i.reduce((function (t, e) { var n; return Object(o.__assign)({}, t, ((n = {})[e] = p[e], n)); }), {})).length > 0 ? p[0].key : c[0].key, h = t.split(" ")[1]; return n.className = n.className.replace(/auto/g, d), d + (h ? "-" + h : ""); }
            function Fy(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t), n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), o = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: Number(t.offsetWidth) + o, height: Number(t.offsetHeight) + n }; }
            function Ry(t, e, n) { return void 0 === n && (n = null), Ay(e, n ? Iy(t) : Cy(t, e), n); }
            function My(t, e, n) { var o = n.split(" ")[0], r = Fy(t), i = { width: r.width, height: r.height }, a = -1 !== ["right", "left"].indexOf(o), s = a ? "top" : "left", l = a ? "left" : "top", u = a ? "height" : "width", c = a ? "width" : "height"; return i[s] = e[s] + e[u] / 2 - r[u] / 2, i[l] = o === l ? e[l] - r[c] : e[function (t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function (t) { return e[t]; })); }(l)], i; }
            function jy(t, e) { return t && t.modifiers && t.modifiers[e] && t.modifiers[e].enabled; }
            function By(t, e, n) { Object.keys(e).forEach((function (o) { var r, i = ""; -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && "" !== (r = e[o]) && !isNaN(parseFloat(r)) && isFinite(r) && (i = "px"), n ? n.setStyle(t, o, "" + String(e[o]) + i) : t.style[o] = String(e[o]) + i; })); }
            function Vy(t) { var e, n = t.offsets.target, o = t.instance.target.querySelector(".arrow"); if (!o)
                return t; var r = -1 !== ["left", "right"].indexOf(t.placement), i = r ? "height" : "width", a = r ? "Top" : "Left", s = a.toLowerCase(), l = r ? "left" : "top", u = r ? "bottom" : "right", c = Fy(o)[i]; t.offsets.host[u] - c < n[s] && (n[s] -= n[s] - (t.offsets.host[u] - c)), Number(t.offsets.host[s]) + Number(c) > n[u] && (n[s] += Number(t.offsets.host[s]) + Number(c) - Number(n[u])), n = Oy(n); var p = Number(t.offsets.host[s]) + Number(t.offsets.host[i] / 2 - c / 2), d = fy(t.instance.target), h = parseFloat(d["margin" + a]), f = parseFloat(d["border" + a + "Width"]), m = p - n[s] - h - f; return m = Math.max(Math.min(n[i] - c, m), 0), t.offsets.arrow = ((e = {})[s] = Math.round(m), e[l] = "", e), t.instance.arrow = o, t; }
            function Ly(t) { if (t.offsets.target = Oy(t.offsets.target), !jy(t.options, "flip"))
                return t.offsets.target = Object(o.__assign)({}, t.offsets.target, My(t.instance.target, t.offsets.host, t.placement)), t; var e = Py(t.instance.target, t.instance.host, 0, "viewport", !1), n = t.placement.split(" ")[0], r = t.placement.split(" ")[1] || "", i = t.offsets.host, a = t.instance.target, s = t.instance.host, l = r ? Ny("auto", i, a, s, ["top", "bottom"]) : Ny("auto", i, a, s), u = [n, l]; return u.forEach((function (i, a) { if (n !== i || u.length === a + 1)
                return t; var s = "left" === (n = t.placement.split(" ")[0]) && Math.floor(t.offsets.target.right) > Math.floor(t.offsets.host.left) || "right" === n && Math.floor(t.offsets.target.left) < Math.floor(t.offsets.host.right) || "top" === n && Math.floor(t.offsets.target.bottom) > Math.floor(t.offsets.host.top) || "bottom" === n && Math.floor(t.offsets.target.top) < Math.floor(t.offsets.host.bottom), l = Math.floor(t.offsets.target.left) < Math.floor(e.left), c = Math.floor(t.offsets.target.right) > Math.floor(e.right), p = Math.floor(t.offsets.target.top) < Math.floor(e.top), d = Math.floor(t.offsets.target.bottom) > Math.floor(e.bottom), h = "left" === n && l || "right" === n && c || "top" === n && p || "bottom" === n && d, f = -1 !== ["top", "bottom"].indexOf(n), m = f && "left" === r && l || f && "right" === r && c || !f && "left" === r && p || !f && "right" === r && d; (s || h || m) && ((s || h) && (n = u[a + 1]), m && (r = function (t) { return "right" === t ? "left" : "left" === t ? "right" : t; }(r)), t.placement = n + (r ? " " + r : ""), t.offsets.target = Object(o.__assign)({}, t.offsets.target, My(t.instance.target, t.offsets.host, t.placement))); })), t; }
            function Hy(t) { if (!jy(t.options, "preventOverflow"))
                return t; var e = t.instance.target.style, n = e.top, r = e.left, i = e.transform; e.top = "", e.left = "", e.transform = ""; var a = Py(t.instance.target, t.instance.host, 0, "scrollParent", !1); e.top = n, e.left = r, e.transform = i; var s, l = { primary: function (e) { var n, o = t.offsets.target[e]; return t.offsets.target[e] < a[e] && (o = Math.max(t.offsets.target[e], a[e])), (n = {})[e] = o, n; }, secondary: function (e) { var n, o = "right" === e ? "left" : "top", r = t.offsets.target[o]; return t.offsets.target[e] > a[e] && (r = Math.min(t.offsets.target[o], a[e] - ("right" === e ? t.offsets.target.width : t.offsets.target.height))), (n = {})[o] = r, n; } }; return ["left", "right", "top", "bottom"].forEach((function (e) { s = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary", t.offsets.target = Object(o.__assign)({}, t.offsets.target, l[s](e)); })), t; }
            function qy(t) { var e, n, r = t.placement, i = r.split(" ")[0], a = r.split(" ")[1]; if (a) {
                var s = t.offsets, l = s.host, u = s.target, c = -1 !== ["bottom", "top"].indexOf(i), p = c ? "left" : "top", d = c ? "width" : "height", h = { left: (e = {}, e[p] = l[p], e), right: (n = {}, n[p] = l[p] + l[d] - l[d], n) };
                t.offsets.target = Object(o.__assign)({}, u, h[a]);
            } return t; }
            var zy = new (function () { function t() { } return t.prototype.position = function (t, e) { return this.offset(t, e); }, t.prototype.offset = function (t, e) { return Ry(e, t); }, t.prototype.positionElements = function (t, e, n, o, r) { return [Ly, qy, Hy, Vy].reduce((function (t, e) { return e(t); }), function (t, e, n, o) { var r = Ry(t, e), i = !!n.match(/auto/g), a = n.match(/auto\s(left|right|top|bottom)/g) ? n.split(" ")[1] || "" : n; return { options: o, instance: { target: t, host: e, arrow: null }, offsets: { target: My(t, r, a), host: r, arrow: null }, positionFixed: !1, placement: a = Ny(a, r, t, e), placementAuto: i }; }(e, t, n, r)); }, t; }()), Uy = function () { function t(t, e, n) { var o = this; this._ngZone = n, this.update$$ = new E, this.positionElements = new Map, Ys(e) && this._ngZone.runOutsideAngular((function () { $(qh(window, "scroll"), qh(window, "resize"), Ac(0, Yg), o.update$$).subscribe((function () { o.positionElements.forEach((function (e) { var n, r, i, a, s, l; n = Wy(e.target), r = Wy(e.element), i = e.attachment, a = e.appendToBody, s = o.options, l = t.createRenderer(null, null), function (t, e) { var n = t.instance.target, o = function (t) { return { width: t.offsets.target.width, height: t.offsets.target.height, left: Math.floor(t.offsets.target.left), top: Math.round(t.offsets.target.top), bottom: Math.round(t.offsets.target.bottom), right: Math.floor(t.offsets.target.right) }; }(t); By(n, { "will-change": "transform", top: "0px", left: "0px", transform: "translate3d(" + o.left + "px, " + o.top + "px, 0px)" }, e), t.instance.arrow && By(t.instance.arrow, t.offsets.arrow, e), t.placementAuto && (e ? (e.setAttribute(n, "class", n.className.replace(/bs-popover-auto/g, "bs-popover-" + t.placement)), e.setAttribute(n, "class", n.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + t.placement)), e.setAttribute(n, "class", n.className.replace(/\sauto/g, "s" + t.placement)), n.className.match(/popover/g) && e.addClass(n, "popover-auto"), n.className.match(/tooltip/g) && e.addClass(n, "tooltip-auto")) : (n.className = n.className.replace(/bs-popover-auto/g, "bs-popover-" + t.placement), n.className = n.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + t.placement), n.className = n.className.replace(/\sauto/g, "s" + t.placement), n.className.match(/popover/g) && n.classList.add("popover-auto"), n.className.match(/tooltip/g) && n.classList.add("tooltip-auto"))), e ? e.setAttribute(n, "class", n.className.replace(/left|right|top|bottom/g, "" + t.placement.split(" ")[0])) : n.className = n.className.replace(/left|right|top|bottom/g, "" + t.placement.split(" ")[0]); }(zy.positionElements(n, r, i, a, s), l); })); })); })); } return t.prototype.position = function (t) { this.addPositionElement(t); }, t.prototype.addPositionElement = function (t) { this.positionElements.set(Wy(t.element), t); }, t.prototype.calcPosition = function () { this.update$$.next(); }, t.prototype.deletePositionElement = function (t) { this.positionElements.delete(Wy(t)); }, t.prototype.setOptions = function (t) { this.options = t; }, t; }();
            function Wy(t) { return t && "string" == typeof t ? document.querySelector(t) : t instanceof Qe ? t.nativeElement : t; }
            var Ky = function () { function t(t, e, n, o, r) { this._componentFactoryResolver = t, this._ngZone = e, this._injector = n, this._posService = o, this._applicationRef = r; } return t.prototype.createLoader = function (t, e, n) { return new hy(e, n, t, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService); }, t; }(), $y = function () { return function () { this.autoClose = !0; }; }(), Gy = function () { return function () { var t = this; this.direction = "down", this.isOpenChange = new br, this.isDisabledChange = new br, this.toggleClick = new br, this.dropdownMenu = new Promise((function (e) { t.resolveDropdownMenu = e; })); }; }(), Zy = function () { function t(t) { var e = this; this._state = t, this.isOpen = !1, this.display = "block", this.position = "absolute", this._subscription = t.isOpenChange.subscribe((function (t) { e.isOpen = t; })); } return Object.defineProperty(t.prototype, "direction", { get: function () { return this._state.direction; }, enumerable: !0, configurable: !0 }), t.prototype.ngOnDestroy = function () { this._subscription.unsubscribe(); }, t; }(), Qy = function () { function t() { } return t.forRoot = function (e) { return { ngModule: t, providers: [Ky, Uy, Gy, { provide: $y, useValue: e || { autoClose: !0 } }] }; }, t; }(), Yy = function () { function t() { } return t.reflow = function (t) { }, t.getStyles = function (t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = ny), e.getComputedStyle(t); }, t.prototype.focusTrapModal = function (t, e) { var n, o, r; o = (n = e.nativeElement.querySelectorAll("a[href], button, textarea, input, select, form, mdb-select, mdb-auto-completer, mdb-checkbox, mdb-range-input"))[0], r = n[n.length - 1], "Tab" !== t.key && 9 !== t.keyCode || (t.shiftKey ? oy && oy.activeElement === o && (r.focus(), t.preventDefault()) : oy && oy.activeElement === r && (o.focus(), t.preventDefault())); }, t.prototype.getClosestEl = function (t, e) { for (; t && t !== oy; t = t.parentNode)
                if (t.matches && t.matches(e))
                    return t; return null; }, t.prototype.getCoords = function (t) { var e = t.getBoundingClientRect(), n = oy.body, o = oy.documentElement, r = e.left + (ny.pageXOffset || o.scrollLeft || n.scrollLeft) - (o.clientLeft || n.clientLeft || 0); return { top: Math.round(e.top + (ny.pageYOffset || o.scrollTop || n.scrollTop) - (o.clientTop || n.clientTop || 0)), left: Math.round(r) }; }, t; }(), Xy = function () { return function () { }; }(), Jy = function () { return function () { }; }(), tb = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), eb = function () { return function () { }; }(), nb = function () { function t() { } return t.prototype.hide = function () { }, t; }(), ob = { backdrop: !0, keyboard: !0, focus: !0, show: !1, ignoreBackdropClick: !1, class: "", containerClass: "", animated: !0, scroll: !1, data: {} }, rb = function () { function t(t, e) { this.element = t, this.renderer = e, this.classNameBackDrop = !0, this._isShown = !1; } return Object.defineProperty(t.prototype, "isAnimated", { get: function () { return this._isAnimated; }, set: function (t) { this._isAnimated = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isShown", { get: function () { return this._isShown; }, set: function (t) { this._isShown = t, t ? (this.renderer.addClass(this.element.nativeElement, "in"), ry() || this.renderer.addClass(this.element.nativeElement, "show")) : (this.renderer.removeClass(this.element.nativeElement, "in"), ry() || this.renderer.removeClass(this.element.nativeElement, "show")); }, enumerable: !0, configurable: !0 }), t.prototype.ngOnInit = function () { this.renderer.addClass(this.element.nativeElement, "fade"), Yy.reflow(this.element.nativeElement), this.isShown = !0; }, t; }(), ib = function () { function t(t, e, n) { this._renderer = n, this.modalClass = "modal", this.tabindex = -1, this.role = "dialog", this.modal = !0, this.isShown = !1, this.isModalHiding = !1, this.utils = new Yy, this._element = e, this.config = Object.assign({}, t); } return t.prototype.onClick = function (t) { this.config.ignoreBackdropClick || "static" === this.config.backdrop || t.target !== this._element.nativeElement || (this.mdbModalService.setDismissReason("backdrop-click"), this.hide()); }, t.prototype.onEsc = function () { this.config.keyboard && this.level === this.mdbModalService.getModalsCount() && (this.mdbModalService.setDismissReason("esc"), this.hide()); }, t.prototype.onKeyDown = function (t) { this.utils.focusTrapModal(t, this._element); }, t.prototype.ngOnInit = function () { var t = this; this.config.animated && this._renderer.addClass(this._element.nativeElement, "fade"), this._renderer.setStyle(this._element.nativeElement, "display", "block"), window && -1 !== window.navigator.userAgent.indexOf("Edge") && this.config && -1 === this.config.toString().indexOf("side-modal") || window && -1 !== window.navigator.userAgent.indexOf("Edge") && this.config && -1 === this.config.toString().indexOf("modal-full-height") ? (this.isShown = !0, this._renderer.addClass(this._element.nativeElement, ry() ? "in" : "show"), this._renderer.setStyle(this._element.nativeElement, "transition", "transform 0.3s ease-out"), this._renderer.setStyle(this._element.nativeElement, "transform", "translate(0, 25px)")) : setTimeout((function () { t.isShown = !0, t._renderer.addClass(t._element.nativeElement, ry() ? "in" : "show"); }), this.isAnimated ? 150 : 0), document && document.body && (1 === this.mdbModalService.getModalsCount() && (this.mdbModalService.checkScrollbar(), this.mdbModalService.setScrollbar()), this._renderer.addClass(document.body, "modal-open")), this.config.containerClass && this.updateContainerClass(), this.config.scroll && this._renderer.setStyle(this._element.nativeElement, "overflow-y", "auto"); }, t.prototype.focusModalElement = function () { this.config.focus && this._element.nativeElement.focus(); }, t.prototype.updateContainerClass = function () { if (this.config.containerClass)
                for (var t = this.config.containerClass.split(" "), e = 0; e < t.length; e++)
                    this._renderer.addClass(this._element.nativeElement, t[e]); }, t.prototype.ngOnDestroy = function () { this.isShown && this.hide(); }, t.prototype.hide = function () { var t = this; if (!this.isModalHiding && this.isShown) {
                this.isModalHiding = !0, this._renderer.removeClass(this._element.nativeElement, ry() ? "in" : "show");
                var e = Array.from(this._element.nativeElement.querySelectorAll("iframe")), n = Array.from(this._element.nativeElement.querySelectorAll("video"));
                e.forEach((function (e) { var n = e.getAttribute("src"); t._renderer.setAttribute(e, "src", n); })), n.forEach((function (t) { t.pause(); })), setTimeout((function () { t.isShown = !1, document && document.body && 1 === t.mdbModalService.getModalsCount() && t._renderer.removeClass(document.body, "modal-open"), t.mdbModalService.hide(t.level), t.isModalHiding = !1; }), this.isAnimated ? 300 : 0);
            } }, t; }(), ab = function () { function t(t, e) { this.clf = e, this.config = ob, this.open = new br, this.opened = new br, this.close = new br, this.closed = new br, this.isBodyOverflowing = !1, this.originalBodyPadding = 0, this.scrollbarWidth = 0, this.modalsCount = 0, this.lastDismissReason = "", this.loaders = [], this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer), this.renderer = t.createRenderer(null, null); } return t.prototype.show = function (t, e) { return this.modalsCount++, this._createLoaders(), this.config = Object.assign({}, ob, e), this._showBackdrop(), this.lastDismissReason = null, this._showModal(t); }, t.prototype.hide = function (t) { var e = this; 1 === this.modalsCount && (this._hideBackdrop(), this.resetScrollbar()), this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0, setTimeout((function () { e._hideModal(t), e.removeLoaders(t); }), this.config.animated ? 150 : 0); }, t.prototype._showBackdrop = function () { var t = this.config.backdrop || "static" === this.config.backdrop, e = !this.backdropRef || !this.backdropRef.instance.isShown; 1 === this.modalsCount && (this.removeBackdrop(), t && e && (this._backdropLoader.attach(rb).to("body").show({ isAnimated: this.config.animated }), this.backdropRef = this._backdropLoader._componentRef)); }, t.prototype._hideBackdrop = function () { var t = this; this.backdropRef && (this.backdropRef.instance.isShown = !1, setTimeout((function () { return t.removeBackdrop(); }), this.config.animated ? 150 : 0)); }, t.prototype._showModal = function (t) { var e = this.loaders[this.loaders.length - 1], n = new nb, o = e.provide({ provide: eb, useValue: this.config }).provide({ provide: nb, useValue: n }).attach(ib).to("body").show({ content: t, isAnimated: this.config.animated, data: this.config.data, mdbModalService: this }); return o.instance.focusModalElement(), o.instance.level = this.getModalsCount(), n.hide = function () { o.instance.hide(); }, n.content = e.getInnerComponent() || null, n; }, t.prototype._hideModal = function (t) { var e = this.loaders[t - 1]; e && e.hide(); }, t.prototype.getModalsCount = function () { return this.modalsCount; }, t.prototype.setDismissReason = function (t) { this.lastDismissReason = t; }, t.prototype.removeBackdrop = function () { this._backdropLoader.hide(), this.backdropRef = null; }, t.prototype.checkScrollbar = function () { this.isBodyOverflowing = document.body.clientWidth < window.innerWidth, this.scrollbarWidth = this.getScrollbarWidth(); }, t.prototype.setScrollbar = function () { document && (this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right") || "0", 10)); }, t.prototype.resetScrollbar = function () { document.body.style.paddingRight = this.originalBodyPadding + "px"; }, t.prototype.getScrollbarWidth = function () { var t = this.renderer.createElement("div"); this.renderer.addClass(t, "modal-scrollbar-measure"), this.renderer.appendChild(document.body, t); var e = t.offsetWidth - t.clientWidth; return this.renderer.removeChild(document.body, t), e; }, t.prototype._createLoaders = function () { var t = this.clf.createLoader(this.el, this.vcr, this.renderer); this.copyEvent(t.onBeforeShow, this.open), this.copyEvent(t.onShown, this.opened), this.copyEvent(t.onBeforeHide, this.close), this.copyEvent(t.onHidden, this.closed), this.loaders.push(t); }, t.prototype.removeLoaders = function (t) { this.loaders.splice(t - 1, 1), this.loaders.forEach((function (t, e) { t.instance.level = e + 1; })); }, t.prototype.copyEvent = function (t, e) { var n = this; t.subscribe((function () { e.emit(n.lastDismissReason); })); }, t; }(), sb = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [ab, Ky, Uy] }; }, t; }(), lb = function () { function t() { this.navbarLinkClicks = new E; } return t.prototype.getNavbarLinkClicks = function () { return this.navbarLinkClicks.asObservable(); }, t.prototype.setNavbarLinkClicks = function () { this.navbarLinkClicks.next(); }, t; }(), ub = function () { return function () { }; }(), cb = function () { return function () { this.placement = "top", this.triggers = "click"; }; }(), pb = function () { function t(t) { this.show = "!isBs3", this.role = "tooltip", Object.assign(this, t); } return Object.defineProperty(t.prototype, "isBs3", { get: function () { return ry(); }, enumerable: !0, configurable: !0 }), t.prototype.ngOnInit = function () { this.class = "popover-fadeIn popover in popover-" + this.placement + " " + this.placement + " bs-popover-" + this.placement + " " + this.containerClass; }, t; }(), db = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [cb, Ky, Uy] }; }, t; }(), hb = function () { function t() { this._dataSource = [], this._dataSourceChanged = new E; } return t.prototype.addRow = function (t) { this.getDataSource().push(t); }, t.prototype.addRowAfter = function (t, e) { this.getDataSource().splice(t, 0, e); }, t.prototype.removeRow = function (t) { this.getDataSource().splice(t, 1); }, t.prototype.rowRemoved = function () { return new _((function (t) { t.next(!0); })); }, t.prototype.removeLastRow = function () { this.getDataSource().pop(); }, t.prototype.getDataSource = function () { return this._dataSource; }, t.prototype.setDataSource = function (t) { this._dataSource = t, this._dataSourceChanged.next(this.getDataSource()); }, t.prototype.dataSourceChange = function () { return this._dataSourceChanged; }, t.prototype.filterLocalDataBy = function (t) { return this.getDataSource().filter((function (e) { return Object.keys(e).some((function (n) { if (e[n])
                return e[n].toString().toLowerCase().includes(t); })); })); }, t.prototype.searchLocalDataBy = function (t) { return t ? t ? this.filterLocalDataBy(t.toLowerCase()) : void 0 : this.getDataSource(); }, t.prototype.searchDataObservable = function (t) { var e = this; return new _((function (n) { n.next(e.searchLocalDataBy(t)); })); }, t.ngInjectableDef = ct({ factory: function () { return new t; }, token: t, providedIn: "root" }), t; }(), fb = function () { function t(t) { this.cdRef = t, this.searchPagination = !1, this.searchDataSource = null, this.ofKeyword = "of", this.dashKeyword = "-", this.paginationAlign = "", this.hideDescription = !1, this._destroy$ = new E, this.maxVisibleItems = 10, this.firstItemIndex = 0, this.lastItemIndex = this.maxVisibleItems, this.lastVisibleItemIndex = 5, this.activePageNumber = 1, this.allItemsLength = 0, this.nextShouldBeDisabled = !1, this.previousShouldBeDisabled = !0, this.searchText = "", this.pagination = new E, this.nextPageClick = new br, this.previousPageClick = new br, this.firstPageClick = new br, this.lastPageClick = new br; } return t.prototype.ngOnInit = function () { this.tableEl && (this.allItemsLength = this.tableEl.getDataSource().length); }, t.prototype.ngAfterViewInit = function () { var t = this; this.tableEl && this.tableEl.dataSourceChange().pipe(Wh(this._destroy$)).subscribe((function (e) { t.allItemsLength = e.length, t.lastVisibleItemIndex = e.length, t.calculateFirstItemIndex(), t.calculateLastItemIndex(), t.disableNextButton(e), t.searchDataSource && setTimeout((function () { t.searchDataSource.length !== e.length && (t.activePageNumber = 1, t.firstItemIndex = 1); }), 0); })), this.paginationChange().pipe(Wh(this._destroy$)).subscribe((function (e) { t.firstItemIndex = e.first, t.lastVisibleItemIndex = e.last; })); }, t.prototype.ngOnChanges = function (t) { var e = t.searchDataSource; 0 !== e.currentValue.length && (this.allItemsLength = e.currentValue.length), this.lastVisibleItemIndex > this.allItemsLength && (this.lastVisibleItemIndex = this.allItemsLength), 0 === e.currentValue.length && (this.firstItemIndex = 0, this.lastItemIndex = 0, this.lastVisibleItemIndex = 0, this.allItemsLength = 0), !e.isFirstChange() && e.currentValue.length <= this.maxVisibleItems ? (this.nextShouldBeDisabled = !0, this.lastVisibleItemIndex = e.currentValue.length) : this.nextShouldBeDisabled = !1; }, t.prototype.setMaxVisibleItemsNumberTo = function (t) { this.lastItemIndex = t, this.lastVisibleItemIndex = t, this.maxVisibleItems = t, this.cdRef.detectChanges(); }, t.prototype.searchTextObs = function () { var t = this; return new _((function (e) { e.next(t.searchText); })); }, t.prototype.disableNextButton = function (t) { this.nextShouldBeDisabled = t.length <= this.maxVisibleItems; }, t.prototype.calculateFirstItemIndex = function () { this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1, this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.calculateLastItemIndex = function () { this.lastItemIndex = this.activePageNumber * this.maxVisibleItems, this.lastVisibleItemIndex = this.lastItemIndex, this.searchDataSource && this.lastItemIndex > this.searchDataSource.length ? this.lastVisibleItemIndex = this.searchDataSource.length : this.searchDataSource || (this.lastVisibleItemIndex = this.lastItemIndex), this.lastItemIndex > this.tableEl.getDataSource().length && (this.lastItemIndex = this.tableEl.getDataSource().length, this.lastVisibleItemIndex = this.tableEl.getDataSource().length), this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.paginationChange = function () { return this.pagination; }, t.prototype.calculateHowManyPagesShouldBe = function () { return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems); }, t.prototype.previousPage = function () { this.activePageNumber--, this.calculateFirstItemIndex(), this.calculateLastItemIndex(), this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.nextPage = function () { this.activePageNumber++, this.calculateFirstItemIndex(), this.calculateLastItemIndex(), this.lastItemIndex > this.tableEl.getDataSource().length && (this.lastItemIndex = this.tableEl.getDataSource().length), this.lastVisibleItemIndex > this.allItemsLength && (this.lastVisibleItemIndex = this.allItemsLength), this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.firstPage = function () { this.activePageNumber = 1, this.calculateFirstItemIndex(), this.calculateLastItemIndex(), this.firstPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.lastPage = function () { var t = Math.ceil(this.allItemsLength / this.maxVisibleItems); this.activePageNumber = t, this.calculateFirstItemIndex(), this.calculateLastItemIndex(), this.lastPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex }); }, t.prototype.nextPageObservable = function () { var t = this; return new _((function (e) { e.next(t.firstItemIndex); })); }, t.prototype.previousPageObservable = function () { var t = this; return new _((function (e) { e.next(t.lastVisibleItemIndex); })); }, t.prototype.checkIfNextShouldBeDisabled = function () { return !(!this.searchDataSource || this.lastVisibleItemIndex !== this.searchDataSource.length) || this.activePageNumber >= this.calculateHowManyPagesShouldBe() || (this.nextShouldBeDisabled ? this.nextShouldBeDisabled : void 0); }, t.prototype.checkIfPreviousShouldBeDisabled = function () { if (1 === this.activePageNumber)
                return !0; }, t.prototype.ngOnDestroy = function () { this._destroy$.next(), this._destroy$.complete(); }, t; }(), mb = function () { return function () { }; }(), gb = function () { return function () { this.placement = "top", this.triggers = "hover focus"; }; }(), yb = function () { function t(t, e) { this.elem = e, this.containerClass = "", this.show = !this.isBs3, Object.assign(this, t); } return Object.defineProperty(t.prototype, "tooltipClasses", { get: function () { return "tooltip-fadeIn tooltip in tooltip-" + this.placement + " bs-tooltip-" + this.placement + " " + this.placement + " " + this.containerClass; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isBs3", { get: function () { return ry(); }, enumerable: !0, configurable: !0 }), t.prototype.ngAfterViewInit = function () { this.classMap = { in: !1, fade: !1 }, this.classMap[this.placement] = !0, this.classMap["tooltip-" + this.placement] = !0, this.classMap.in = !0, this.animation && (this.classMap.fade = !0), this.popupClass && (this.classMap[this.popupClass] = !0); }, t; }(), bb = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [gb, Ky, Uy] }; }, t; }(), vb = function () { function t() { } return t.forRoot = function () { return { ngModule: t, providers: [] }; }, t; }(), _b = function () { return function () { }; }(), wb = function () { return function () { }; }(), kb = Ln({ encapsulation: 2, styles: [], data: {} });
            function Cb(t) { return qi(2, [(t()(), Ei(0, 0, null, null, 1, "div", [], [[2, "dropup", null], [2, "dropdown", null], [2, "show", null], [2, "open", null]], null, null, null, null)), Ri(null, 0)], null, (function (t, e) { var n = e.component; t(e, 0, 0, "up" === n.direction, "down" === n.direction, n.isOpen, n.isOpen); })); }
            function xb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-dropdown-container", [], [[4, "display", null], [4, "position", null]], null, null, Cb, kb)), Zo(1, 180224, null, 0, Zy, [Gy], null, null)], null, (function (t, e) { t(e, 0, 0, Mo(e, 1).display, Mo(e, 1).position); })); }
            var Eb = Eo("mdb-dropdown-container", Zy, xb, {}, {}, ["*"]), Sb = Ln({ encapsulation: 2, styles: [], data: {} });
            function Tb(t) { return qi(0, [], null, null); }
            function Ob(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-modal-backdrop", [], [[2, "modal-backdrop", null]], null, null, Tb, Sb)), Zo(1, 114688, null, 0, rb, [Qe, en], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).classNameBackDrop); })); }
            var Db = Eo("mdb-modal-backdrop", rb, Ob, {}, {}, []), Ab = Ln({ encapsulation: 2, styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset;padding:1.7rem 0 0}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto;width:130px}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;min-height:100%;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem;border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}.modal-sm{max-width:300px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{-webkit-transform:translate3d(0,-25%,0);transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{-webkit-transform:translate3d(-25%,0,0);transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{-webkit-transform:translate3d(0,25%,0);transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 2rem -1rem}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"], data: {} });
            function Ib(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 2, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (t()(), Ei(1, 0, null, null, 1, "div", [["class", "modal-content modal-dynamic"]], null, null, null, null, null)), Ri(null, 0)], null, (function (t, e) { var n = e.component; t(e, 0, 0, "modal-dialog" + (n.config.class ? " " + n.config.class : "")); })); }
            function Pb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-modal-container", [], [[8, "tabIndex", 0], [8, "role", 0], [2, "modal", null]], [[null, "click"], ["window", "keydown.esc"], [null, "keydown"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== Mo(t, 1).onClick(n) && o), "window:keydown.esc" === e && (o = !1 !== Mo(t, 1).onEsc() && o), "keydown" === e && (o = !1 !== Mo(t, 1).onKeyDown(n) && o), o; }), Ib, Ab)), Zo(1, 245760, null, 0, ib, [eb, Qe, en], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).tabindex, Mo(e, 1).role, Mo(e, 1).modal); })); }
            var Nb = Eo("mdb-modal-container", ib, Pb, {}, {}, ["*"]), Fb = Ln({ encapsulation: 2, styles: [".popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:'';border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:'';border-width:11px}.popover::after{content:'';border-width:10px}@-webkit-keyframes fadeInPopover{from{opacity:0}to{opacity:1}}@keyframes fadeInPopover{from{opacity:0}to{opacity:1}}.popover-fadeIn{-webkit-animation-name:fadeInPopover;animation-name:fadeInPopover;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}"], data: {} });
            function Rb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "h3", [["class", "popover-header"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(2, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (t()(), Vi(3, null, ["", ""]))], (function (t, e) { t(e, 2, 0, "popover-header", e.component.headerClass); }), (function (t, e) { t(e, 3, 0, e.component.title); })); }
            function Mb(t) { return qi(2, [(t()(), xi(16777216, null, null, 1, null, Rb)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(2, 0, null, null, 3, "div", [["class", "popover-body"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(4, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), Ri(null, 0)], (function (t, e) { var n = e.component; t(e, 1, 0, n.title), t(e, 4, 0, "popover-body", n.bodyClass); }), null); }
            function jb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-popover-container", [], [[2, "show", null], [1, "role", 0], [8, "className", 0]], null, null, Mb, Fb)), Zo(1, 114688, null, 0, pb, [cb], null, null)], (function (t, e) { t(e, 1, 0); }), (function (t, e) { t(e, 0, 0, Mo(e, 1).show, Mo(e, 1).role, Mo(e, 1).class); })); }
            var Bb = Eo("mdb-popover-container", pb, jb, { placement: "placement", title: "title" }, {}, ["*"]), Vb = Ln({ encapsulation: 2, styles: [], data: {} });
            function Lb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (t()(), Vi(1, null, [" ", " ", " ", " ", " ", " "]))], null, (function (t, e) { var n = e.component; t(e, 1, 0, n.firstItemIndex, n.dashKeyword, n.lastVisibleItemIndex, n.ofKeyword, n.allItemsLength); })); }
            function Hb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 34, "nav", [], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 33, "ul", [["class", "pagination pagination-circle pg-blue d-flex flex-center"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(3, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ji(4, { "justify-content-end": 0, "justify-content-start": 1 }), (t()(), xi(16777216, null, null, 1, null, Lb)), Zo(6, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), Ei(7, 0, null, null, 6, "li", [["class", "page-item"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(9, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ji(10, { disabled: 0 }), (t()(), Ei(11, 0, null, null, 2, "a", [["aria-label", "Previous"], ["class", "page-link"], ["mdbWavesEffect", ""]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.firstPage() && o), o; }), null, null)), (t()(), Ei(12, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\xab"])), (t()(), Ei(14, 0, null, null, 6, "li", [["class", "page-item"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(16, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ji(17, { disabled: 0 }), (t()(), Ei(18, 0, null, null, 2, "a", [["aria-label", "Previous"], ["class", "page-link"], ["mdbWavesEffect", ""]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.previousPage() && o), o; }), null, null)), (t()(), Ei(19, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\u2039"])), (t()(), Ei(21, 0, null, null, 6, "li", [["class", "page-item"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(23, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ji(24, { disabled: 0 }), (t()(), Ei(25, 0, null, null, 2, "a", [["aria-label", "Previous"], ["class", "page-link"], ["mdbWavesEffect", ""]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.nextPage() && o), o; }), null, null)), (t()(), Ei(26, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\u203a"])), (t()(), Ei(28, 0, null, null, 6, "li", [["class", "page-item"]], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(30, 278528, null, 0, Fs, [Ps], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ji(31, { disabled: 0 }), (t()(), Ei(32, 0, null, null, 2, "a", [["aria-label", "Next"], ["class", "page-link"], ["mdbWavesEffect", ""]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.lastPage() && o), o; }), null, null)), (t()(), Ei(33, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\xbb"]))], (function (t, e) { var n = e.component, o = t(e, 4, 0, "end" == n.paginationAlign, "start" == n.paginationAlign); t(e, 3, 0, "pagination pagination-circle pg-blue d-flex flex-center", o), t(e, 6, 0, !n.hideDescription); var r = t(e, 10, 0, n.checkIfPreviousShouldBeDisabled()); t(e, 9, 0, "page-item", r); var i = t(e, 17, 0, n.checkIfPreviousShouldBeDisabled()); t(e, 16, 0, "page-item", i); var a = t(e, 24, 0, n.checkIfNextShouldBeDisabled()); t(e, 23, 0, "page-item", a); var s = t(e, 31, 0, n.checkIfNextShouldBeDisabled()); t(e, 30, 0, "page-item", s); }), null); }
            function qb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-table-pagination", [], null, null, null, Hb, Vb)), Zo(1, 4964352, null, 0, fb, [ve], null, null)], (function (t, e) { t(e, 1, 0); }), null); }
            var zb = Eo("mdb-table-pagination", fb, qb, { tableEl: "tableEl", searchPagination: "searchPagination", searchDataSource: "searchDataSource", ofKeyword: "ofKeyword", dashKeyword: "dashKeyword", paginationAlign: "paginationAlign", hideDescription: "hideDescription" }, { nextPageClick: "nextPageClick", previousPageClick: "previousPageClick", firstPageClick: "firstPageClick", lastPageClick: "lastPageClick" }, []), Ub = Ln({ encapsulation: 2, styles: ['.mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.tooltip-inner,.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,a .tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-.8rem;content:\'\';border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner::before,a .tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-.8rem;content:\'\';border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner::before,a .tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-.8rem;content:\'\';border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner::before,a .tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-.8rem;content:\'\';border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;padding:.2rem .4rem;text-align:center;border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}'], data: {} });
            function Wb(t) { return qi(2, [Ai(402653184, 1, { tooltipInner: 0 }), Ai(402653184, 2, { tooltipArrow: 0 }), (t()(), Ei(2, 0, [[2, 0], ["tooltipArrow", 1]], null, 0, "div", [["class", "tooltip-arrow arrow"]], null, null, null, null, null)), (t()(), Ei(3, 0, [[1, 0], ["tooltipInner", 1]], null, 1, "div", [["class", "tooltip-inner"]], null, null, null, null, null)), Ri(null, 0)], null, null); }
            function Kb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "mdb-tooltip-container", [], [[2, "show", null], [8, "className", 0]], null, null, Wb, Ub)), Zo(1, 4243456, null, 0, yb, [gb, Qe], null, null)], null, (function (t, e) { t(e, 0, 0, Mo(e, 1).show, Mo(e, 1).tooltipClasses); })); }
            var $b = Eo("mdb-tooltip-container", yb, Kb, { containerClass: "containerClass" }, {}, ["*"]), Gb = Ln({ encapsulation: 2, styles: [], data: { animation: [{ type: 7, name: "flyInOut", definitions: [{ type: 0, name: "inactive", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: void 0 }, { type: 0, name: "active", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: void 0 }, { type: 0, name: "removed", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: void 0 }, { type: 1, expr: "inactive => active", animation: { type: 4, styles: null, timings: "{{ easeTime }}ms {{ easing }}" }, options: null }, { type: 1, expr: "active => removed", animation: { type: 4, styles: null, timings: "{{ easeTime }}ms {{ easing }}" }, options: null }], options: {} }] } });
            function Zb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "toast-close-button"]], null, [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== t.component.remove() && o), o; }), null, null)), (t()(), Ei(1, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (t()(), Vi(-1, null, ["\xd7"]))], null, null); }
            function Qb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, null, null, null, null, null, null, null)), (t()(), Vi(1, null, ["[", "]"]))], null, (function (t, e) { t(e, 1, 0, e.component.duplicatesCount + 1); })); }
            function Yb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 3, "div", [], [[8, "className", 0], [1, "aria-label", 0]], null, null, null, null)), (t()(), Vi(1, null, [" ", " "])), (t()(), xi(16777216, null, null, 1, null, Qb)), Zo(3, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null)], (function (t, e) { t(e, 3, 0, e.component.duplicatesCount); }), (function (t, e) { var n = e.component; t(e, 0, 0, n.options.titleClass, n.title), t(e, 1, 0, n.title); })); }
            function Xb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 0, "div", [["aria-live", "polite"], ["role", "alertdialog"]], [[8, "className", 0], [8, "innerHTML", 1]], null, null, null, null))], null, (function (t, e) { var n = e.component; t(e, 0, 0, n.options.messageClass, n.message); })); }
            function Jb(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["aria-live", "polite"], ["role", "alertdialog"]], [[8, "className", 0], [1, "aria-label", 0]], null, null, null, null)), (t()(), Vi(1, null, [" ", " "]))], null, (function (t, e) { var n = e.component; t(e, 0, 0, n.options.messageClass, n.message), t(e, 1, 0, n.message); })); }
            function tv(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), Ei(1, 0, null, null, 0, "div", [["class", "toast-progress"]], [[4, "width", null]], null, null, null, null))], null, (function (t, e) { t(e, 1, 0, e.component.width + "%"); })); }
            function ev(t) { return qi(0, [(t()(), xi(16777216, null, null, 1, null, Zb)), Zo(1, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, Yb)), Zo(3, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, Xb)), Zo(5, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, Jb)), Zo(7, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null), (t()(), xi(16777216, null, null, 1, null, tv)), Zo(9, 16384, null, 0, Bs, [Cn, wn], { ngIf: [0, "ngIf"] }, null)], (function (t, e) { var n = e.component; t(e, 1, 0, n.options.closeButton), t(e, 3, 0, n.title), t(e, 5, 0, n.message && n.options.enableHtml), t(e, 7, 0, n.message && !n.options.enableHtml), t(e, 9, 0, n.options.progressBar); }), null); }
            function nv(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "div", [["toast-component", ""]], [[8, "className", 0], [40, "@flyInOut", 0], [4, "display", null]], [[null, "click"], [null, "mouseenter"], [null, "mouseleave"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== Mo(t, 1).tapToast() && o), "mouseenter" === e && (o = !1 !== Mo(t, 1).stickAround() && o), "mouseleave" === e && (o = !1 !== Mo(t, 1).delayedHideToast() && o), o; }), ev, Gb)), Zo(1, 180224, null, 0, Cm, [km, dm, $r], null, null)], null, (function (t, e) { t(e, 0, 0, Mo(e, 1).toastClasses, Mo(e, 1).state, Mo(e, 1).displayStyle); })); }
            var ov = Eo("[toast-component]", Cm, nv, {}, {}, []), rv = tp(function () { return function (t) { this._elementRef = t; }; }()), iv = function () { return function () { }; }(), av = function (t) { function e(e, n, o) { var r = t.call(this, e) || this; return r._platform = n, r._document = o, r; } return Object(o.__extends)(e, t), e.prototype.ngAfterViewInit = function () { var t = this; Wt() && this._platform.isBrowser && (this._checkToolbarMixedModes(), this._toolbarRows.changes.subscribe((function () { return t._checkToolbarMixedModes(); }))); }, e.prototype._checkToolbarMixedModes = function () { var t = this; this._toolbarRows.length && Array.from(this._elementRef.nativeElement.childNodes).filter((function (t) { return !(t.classList && t.classList.contains("mat-toolbar-row")); })).filter((function (e) { return e.nodeType !== (t._document ? t._document.COMMENT_NODE : 8); })).some((function (t) { return !(!t.textContent || !t.textContent.trim()); })) && function () { throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row."); }(); }, e; }(rv), sv = function () { return function () { }; }(), lv = Ln({ encapsulation: 2, styles: ["@media (-ms-high-contrast:active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width:599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}"], data: {} });
            function uv(t) { return qi(2, [Ri(null, 0), Ri(null, 1)], null, null); }
            var cv = ["mat-button", "mat-flat-button", "mat-icon-button", "mat-raised-button", "mat-stroked-button", "mat-mini-fab", "mat-fab"], pv = function (t) { function e(e, n, o) { return t.call(this, n, e, o) || this; } return Object(o.__extends)(e, t), e.prototype._haltDisabledEvents = function (t) { this.disabled && (t.preventDefault(), t.stopImmediatePropagation()); }, e; }(function (t) { function e(e, n, o) { var r = t.call(this, e) || this; r._focusMonitor = n, r._animationMode = o, r.isRoundButton = r._hasHostAttributes("mat-fab", "mat-mini-fab"), r.isIconButton = r._hasHostAttributes("mat-icon-button"); for (var i = 0, a = cv; i < a.length; i++) {
                var s = a[i];
                r._hasHostAttributes(s) && r._getHostElement().classList.add(s);
            } return e.nativeElement.classList.add("mat-button-base"), r._focusMonitor.monitor(r._elementRef, !0), r.isRoundButton && (r.color = "accent"), r; } return Object(o.__extends)(e, t), e.prototype.ngOnDestroy = function () { this._focusMonitor.stopMonitoring(this._elementRef); }, e.prototype.focus = function (t, e) { void 0 === t && (t = "program"), this._focusMonitor.focusVia(this._getHostElement(), t, e); }, e.prototype._getHostElement = function () { return this._elementRef.nativeElement; }, e.prototype._isRippleDisabled = function () { return this.disableRipple || this.disabled; }, e.prototype._hasHostAttributes = function () { for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; return e.some((function (e) { return t._getHostElement().hasAttribute(e); })); }, e; }(tp(Jc(ep(function () { return function (t) { this._elementRef = t; }; }()))))), dv = function () { return function () { }; }(), hv = Ln({ encapsulation: 2, styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"], data: {} });
            function fv(t) { return qi(2, [Ai(671088640, 1, { ripple: 0 }), (t()(), Ei(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), Ri(null, 0), (t()(), Ei(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), Zo(4, 212992, [[1, 4]], 0, up, [Qe, $r, Tc, [2, lp], [2, Bh]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (t()(), Ei(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], (function (t, e) { var n = e.component; t(e, 4, 0, n.isIconButton, n._isRippleDisabled(), n._getHostElement()); }), (function (t, e) { var n = e.component; t(e, 3, 0, n.isRoundButton || n.isIconButton, Mo(e, 4).unbounded); })); }
            var mv = function () { function t(t) { this.themeService = t; } return t.prototype.ngOnInit = function () { this.isDarkTheme = this.themeService.isDarkTheme; }, t.prototype.toggleDarkTheme = function (t) { this.themeService.setDarkTheme(t); }, t; }(), gv = Ln({ encapsulation: 0, styles: [["mat-toolbar-row[_ngcontent-%COMP%]{justify-content:space-between}mat-slide-toggle[_ngcontent-%COMP%]{font-size:.875rem;margin-left:20px}"]], data: {} });
            function yv(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 17, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, uv, lv)), Zo(1, 4243456, null, 1, av, [Qe, Tc, Qs], { color: [0, "color"] }, null), Ai(603979776, 1, { _toolbarRows: 1 }), (t()(), Ei(3, 0, null, 1, 14, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), Zo(4, 16384, [[1, 4]], 0, iv, [], null, null), (t()(), Ei(5, 0, null, null, 0, "h1", [], null, null, null, null, null)), (t()(), Ei(6, 0, null, null, 11, "div", [], null, null, null, null, null)), (t()(), Ei(7, 0, null, null, 2, "a", [["href", "https://google.fr"], ["mat-button", ""], ["target", "_blank"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== Mo(t, 8)._haltDisabledEvents(n) && o), o; }), fv, hv)), Zo(8, 180224, null, 0, pv, [Zc, Qe, [2, Bh]], null, null), (t()(), Vi(-1, 0, ["TD2 API "])), (t()(), Ei(10, 0, null, null, 2, "a", [["href", "link"], ["mat-button", ""], ["target", "_blank"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], (function (t, e, n) { var o = !0; return "click" === e && (o = !1 !== Mo(t, 11)._haltDisabledEvents(n) && o), o; }), fv, hv)), Zo(11, 180224, null, 0, pv, [Zc, Qe, [2, Bh]], null, null), (t()(), Vi(-1, 0, [" TD3 API "])), (t()(), Ei(13, 0, null, null, 4, "mat-slide-toggle", [["class", "mat-slide-toggle"], ["labelPosition", "before"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"], [null, "focus"]], (function (t, e, n) { var o = !0, r = t.component; return "focus" === e && (o = !1 !== Mo(t, 15)._inputElement.nativeElement.focus() && o), "change" === e && (o = !1 !== r.toggleDarkTheme(n.checked) && o), o; }), Hh, Lh)), Yo(5120, null, au, (function (t) { return [t]; }), [yp]), Zo(15, 1228800, null, 0, yp, [Qe, Zc, ve, [8, null], $r, fp, [2, Bh], [2, Cc]], { labelPosition: [0, "labelPosition"], checked: [1, "checked"] }, { change: "change" }), Qo(131072, Gs, [ve]), (t()(), Vi(-1, 0, ["Dark theme"]))], (function (t, e) { var n = e.component; t(e, 1, 0, "primary"), t(e, 15, 0, "before", Vn(e, 15, 1, Mo(e, 16).transform(n.isDarkTheme))); }), (function (t, e) { t(e, 0, 0, Mo(e, 1)._toolbarRows.length > 0, 0 === Mo(e, 1)._toolbarRows.length), t(e, 7, 0, Mo(e, 8).disabled ? -1 : Mo(e, 8).tabIndex || 0, Mo(e, 8).disabled || null, Mo(e, 8).disabled.toString(), "NoopAnimations" === Mo(e, 8)._animationMode), t(e, 10, 0, Mo(e, 11).disabled ? -1 : Mo(e, 11).tabIndex || 0, Mo(e, 11).disabled || null, Mo(e, 11).disabled.toString(), "NoopAnimations" === Mo(e, 11)._animationMode), t(e, 13, 0, Mo(e, 15).id, Mo(e, 15).disabled ? null : -1, null, null, Mo(e, 15).checked, Mo(e, 15).disabled, "before" == Mo(e, 15).labelPosition, "NoopAnimations" === Mo(e, 15)._animationMode); })); }
            var bv = Ln({ encapsulation: 0, styles: [["td-toolbar[_ngcontent-%COMP%]{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);display:block}.content[_ngcontent-%COMP%]{padding:1rem 6px;display:flex}aside[_ngcontent-%COMP%]{flex:1}td-dashboard[_ngcontent-%COMP%]{flex:8}@media only screen and (max-width:800px){aside[_ngcontent-%COMP%]{flex:0}}"]], data: {} });
            function vv(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 15, "div", [], null, null, null, null, null)), Yo(512, null, Ps, Ns, [gn, yn, Qe, en]), Zo(2, 278528, null, 0, Fs, [Ps], { ngClass: [0, "ngClass"] }, null), Qo(131072, Gs, [ve]), ji(4, { "dark-theme": 0 }), (t()(), Ei(5, 0, null, null, 10, "div", [["class", "mat-app-background"]], null, null, null, null, null)), (t()(), Ei(6, 0, null, null, 1, "td-toolbar", [], null, null, null, yv, gv)), Zo(7, 114688, null, 0, mv, [Ya], null, null), (t()(), Ei(8, 0, null, null, 7, "div", [["class", "content mat-typography"]], null, null, null, null, null)), (t()(), Ei(9, 0, null, null, 0, "aside", [], null, null, null, null, null)), (t()(), Ei(10, 0, null, null, 4, "td-dashboard", [], null, null, null, Pm, Im)), Yo(4608, null, hp, hp, []), Yo(512, null, Vf, Vf, []), Yo(512, null, Zf, Zf, [Ke, Ce, Gf, Vf]), Zo(14, 114688, null, 0, Am, [Ya, dc, km, Vf, Zf, Zf], null, null), (t()(), Ei(15, 0, null, null, 0, "aside", [], null, null, null, null, null))], (function (t, e) { var n = e.component, o = t(e, 4, 0, Vn(e, 2, 0, Mo(e, 3).transform(n.isDarkTheme))); t(e, 2, 0, o), t(e, 7, 0), t(e, 14, 0); }), null); }
            function _v(t) { return qi(0, [(t()(), Ei(0, 0, null, null, 1, "td-root", [], null, null, null, vv, bv)), Zo(1, 114688, null, 0, Xa, [Ya], null, null)], (function (t, e) { t(e, 1, 0); }), null); }
            var wv = Eo("td-root", Xa, _v, {}, {}, []), kv = n("pqID"), Cv = n.n(kv), xv = function () { function t(t) { this.config = t, this.subscribersCounter = 0, this.emptyConfig = { url: "", options: {} }, void 0 === t && (t = this.emptyConfig), this.ioSocket = (Cv.a ? Cv.a : kv)(t.url, t.options); } return t.prototype.of = function (t) { this.ioSocket.of(t); }, t.prototype.on = function (t, e) { this.ioSocket.on(t, e); }, t.prototype.once = function (t, e) { this.ioSocket.once(t, e); }, t.prototype.connect = function () { return this.ioSocket.connect(); }, t.prototype.disconnect = function (t) { return this.ioSocket.disconnect.apply(this.ioSocket, arguments); }, t.prototype.emit = function (t, e, n) { return this.ioSocket.emit.apply(this.ioSocket, arguments); }, t.prototype.removeListener = function (t, e) { return this.ioSocket.removeListener.apply(this.ioSocket, arguments); }, t.prototype.removeAllListeners = function (t) { return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments); }, t.prototype.fromEvent = function (t) { var e = this; return this.subscribersCounter++, _.create((function (n) { return e.ioSocket.on(t, (function (t) { n.next(t); })), function () { 1 === e.subscribersCounter && e.ioSocket.removeListener(t); }; })).pipe(et()); }, t.prototype.fromOneTimeEvent = function (t) { var e = this; return new Promise((function (n) { return e.once(t, n); })); }, t; }();
            function Ev(t) { return new xv(t); }
            var Sv = new kt("__SOCKET_IO_CONFIG__"), Tv = function () { function t() { } var e; return e = t, t.forRoot = function (t) { return { ngModule: e, providers: [{ provide: Sv, useValue: t }, { provide: xv, useFactory: Ev, deps: [Sv] }] }; }, t; }(), Ov = function () { return function () { }; }(), Dv = function () { return function () { }; }(), Av = function () { return function () { }; }(), Iv = function () { return function () { }; }(), Pv = Ga(Qa, [Xa], (function (t) { return function (t) { for (var e = {}, n = [], o = !1, r = 0; r < t.length; r++) {
                var i = t[r];
                i.token === we && !0 === i.value && (o = !0), 1073741824 & i.flags && n.push(i.token), i.index = r, e[Bn(i.token)] = i;
            } return { factory: null, providersByKey: e, providers: t, modules: n, isRoot: o }; }([bo(512, Ke, $e, [[8, [Fm, Vm, bg, Wg, Zg, Eg, Dg, Mg, zb, Eb, Db, Nb, $b, Bb, ov, wv]], [3, Ke], Nt]), bo(5120, Ar, wi, [[3, Ar]]), bo(4608, As, Is, [Ar, [2, Ds]]), bo(4608, _p, _p, []), bo(4608, Hl, zl, []), bo(4608, Su, Su, []), bo(5120, xv, Ev, [Sv]), bo(4608, Ya, Ya, []), bo(4608, Zf, Zf, [Ke, Ce, Gf, Vf]), bo(4608, hb, hb, []), bo(4608, lb, lb, []), bo(4608, iy, iy, []), bo(5120, gl, (function (t, e, n, o, r, i, a, s) { return [new Vl(t, e, n), new $l(o), new Ul(r, i, a, s)]; }), [Qs, $r, Tr, Qs, Qs, Hl, Dr, [2, ql]]), bo(4608, yl, yl, [gl, $r]), bo(135680, _l, _l, [Qs]), bo(5120, Cr, xr, []), bo(4608, El, El, [yl, _l, Cr]), bo(6144, Je, null, [El]), bo(4608, Uy, Uy, [Je, Tr, $r]), bo(4608, Ky, Ky, [Ke, $r, Ce, Uy, ci]), bo(4608, Gy, Gy, []), bo(4608, ab, ab, [Je, Ky]), bo(4608, gb, gb, []), bo(4608, cb, cb, []), bo(4608, lc, lc, []), bo(5120, dr, ki, [$r]), bo(4608, Br, Br, []), bo(5120, gn, vi, []), bo(5120, yn, _i, []), bo(4608, Gl, Zl, [Qs]), bo(6144, fe, null, [Gl]), bo(6144, vl, null, [_l]), bo(4608, ei, ei, [$r]), bo(1073742336, Zs, Zs, []), bo(1073742336, xc, xc, []), bo(1073742336, Xc, Xc, [[2, Yc], [2, ql]]), bo(1073742336, sv, sv, []), bo(1073742336, bp, bp, []), bo(1073742336, Oc, Oc, []), bo(1073742336, cp, cp, []), bo(1073742336, Cp, Cp, []), bo(1073742336, vp, vp, []), bo(1073742336, dv, dv, []), bo(1073742336, Ov, Ov, []), bo(1073742336, Dv, Dv, []), bo(1073742336, sc, sc, []), bo(1073742336, uc, uc, []), bo(1073742336, Av, Av, []), bo(1073742336, wc, wc, []), bo(1073742336, Tv, Tv, []), bo(1073742336, Iv, Iv, []), bo(1073742336, nf, nf, []), bo(1073742336, af, af, []), bo(1073742336, sf, sf, []), bo(1073742336, lf, lf, []), bo(1073742336, uf, uf, []), bo(1073742336, jf, jf, []), bo(1073742336, Bf, Bf, []), bo(1073742336, Qf, Qf, []), bo(1073742336, Yf, Yf, []), bo(1073742336, Jf, Jf, []), bo(1073742336, tm, tm, []), bo(1073742336, em, em, []), bo(1073742336, nm, nm, []), bo(1073742336, om, om, []), bo(1073742336, rm, rm, []), bo(1073742336, am, am, []), bo(1073742336, um, um, []), bo(1073742336, cm, cm, []), bo(1073742336, vb, vb, []), bo(1073742336, mb, mb, []), bo(1073742336, ty, ty, []), bo(1073742336, tb, tb, []), bo(1073742336, ub, ub, []), bo(1073742336, Qy, Qy, []), bo(1073742336, ay, ay, []), bo(1073742336, sy, sy, []), bo(1073742336, uy, uy, []), bo(1073742336, sb, sb, []), bo(1073742336, bb, bb, []), bo(1073742336, db, db, []), bo(1073742336, Xy, Xy, []), bo(1073742336, ey, ey, []), bo(1073742336, ly, ly, []), bo(1073742336, Xg, Xg, []), bo(1073742336, Jg, Jg, []), bo(1073742336, Jy, Jy, []), bo(1073742336, _b, _b, []), bo(1073742336, wb, wb, []), bo(1073742336, cc, cc, []), bo(1024, qt, ou, []), bo(1024, wr, (function (t) { return [(e = t, hl("probe", ml), hl("coreTokens", Object(o.__assign)({}, fl, (e || []).reduce((function (t, e) { return t[e.name] = e.token, t; }), {}))), function () { return ml; })]; var e; }), [[2, ii]]), bo(512, kr, kr, [[2, wr]]), bo(131584, ci, ci, [$r, Dr, Ce, qt, Ke, kr]), bo(1073742336, Ci, Ci, [ci]), bo(1073742336, ru, ru, [[3, ru]]), bo(1073742336, Em, Em, []), bo(1073742336, Qa, Qa, []), bo(256, Sv, { url: "http://localhost:3000", options: {} }, []), bo(256, $y, { autoClose: !0 }, []), bo(256, we, !0, []), bo(256, fm, { default: xm, config: {} }, [])]); }));
            (function () { if (Ut)
                throw new Error("Cannot enable prod mode after platform setup."); zt = !1; })(), nu().bootstrapModuleFactory(Pv).catch((function (t) { return console.log(t); }));
        } }, [[0, 0]]]);
