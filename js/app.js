(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, u = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, l = "src", s = "srcset", f = "sizes", d = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", h = "error", m = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, A = function(n) {
                    return y(n, I);
                }, k = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, L = function(n) {
                    return k(n, null);
                }, w = function(n) {
                    return null === A(n);
                }, O = function(n) {
                    return A(n) === m;
                }, x = [ v, b, p, h ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, D = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, V = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && D(e).forEach(t);
                }, F = function(n, t) {
                    D(n).forEach(t);
                }, j = [ l ], B = [ l, d ], J = [ l, s, f ], P = [ g ], S = function(n) {
                    return !!n[_];
                }, U = function(n) {
                    return n[_];
                }, $ = function(n) {
                    return delete n[_];
                }, q = function(n, t) {
                    if (!S(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, H = function(n, t) {
                    if (S(n)) {
                        var e = U(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_loading), k(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, Q = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, W = function(n, t) {
                    Q(n, f, y(n, t.data_sizes)), Q(n, s, y(n, t.data_srcset)), Q(n, l, y(n, t.data_src));
                }, X = {
                    IMG: function(n, t) {
                        V(n, (function(n) {
                            q(n, J), W(n, t);
                        })), q(n, J), W(n, t);
                    },
                    IFRAME: function(n, t) {
                        q(n, j), Q(n, l, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        F(n, (function(n) {
                            q(n, j), Q(n, l, y(n, t.data_src));
                        })), q(n, B), Q(n, d, y(n, t.data_poster)), Q(n, l, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        q(n, P), Q(n, g, y(n, t.data_src));
                    }
                }, Y = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], Z = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, nn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, tn = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, en = function(n) {
                    return !!n.llEvLisnrs;
                }, on = function(n) {
                    if (en(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            tn(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, an = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, rn = function(n, t, e) {
                    var i = z(n) || n;
                    en(i) || function(n, t, e) {
                        en(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        nn(n, i, t), nn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            an(t, e, i), N(t, e.class_loaded), k(t, b), C(e.callback_loaded, t, i), o || Z(e, i);
                        }(0, n, t, e), on(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            an(t, e, i), N(t, e.class_error), k(t, h), C(e.callback_error, t, i), o || Z(e, i);
                        }(0, n, t, e), on(i);
                    }));
                }, cn = function(n, t, e) {
                    !function(n) {
                        n.llTempImage = document.createElement("IMG");
                    }(n), rn(n, t, e), function(n) {
                        S(n) || (n[_] = {
                            backgroundImage: n.style.backgroundImage
                        });
                    }(n), function(n, t, e) {
                        var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                        r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(l, r), 
                        K(n, t, e));
                    }(n, t, e), function(n, t, e) {
                        var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                        r && (n.style.backgroundImage = r, function(n, t, e) {
                            N(n, t.class_applied), k(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                        }(n, t, e));
                    }(n, t, e);
                }, un = function(n, t, e) {
                    !function(n) {
                        return Y.indexOf(n.tagName) > -1;
                    }(n) ? cn(n, t, e) : function(n, t, e) {
                        rn(n, t, e), function(n, t, e) {
                            var i = X[n.tagName];
                            i && (i(n, t), K(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, ln = function(n) {
                    n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
                }, sn = function(n) {
                    V(n, (function(n) {
                        H(n, J);
                    })), H(n, J);
                }, fn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        H(n, j);
                    },
                    VIDEO: function(n) {
                        F(n, (function(n) {
                            H(n, j);
                        })), H(n, B), n.load();
                    },
                    OBJECT: function(n) {
                        H(n, P);
                    }
                }, dn = function(n, t) {
                    (function(n) {
                        var t = fn[n.tagName];
                        t ? t(n) : function(n) {
                            if (S(n)) {
                                var t = U(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        w(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), L(n), $(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(A(n)) >= 0;
                            }(n);
                            k(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || un(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            w(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return A(n) === v;
                                }(n) && "IMG" === n.tagName && (on(n), function(n) {
                                    V(n, (function(n) {
                                        ln(n);
                                    })), ln(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), L(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, hn = function(n) {
                    return function(n) {
                        return A(n) === h;
                    }(n);
                }, mn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(w);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && window.addEventListener("online", (function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(hn)).forEach((function(t) {
                                    M(t, n.class_error), L(t);
                                })), t.update();
                            }(n, e);
                        }));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = mn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), rn(n, t, e), function(n, t) {
                                        var e = X[n.tagName];
                                        e && e(n, t);
                                    }(n, t), k(n, m);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), pn(this._settings).forEach((function(n) {
                            $(n);
                        })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        mn(n, e).forEach((function(n) {
                            T(n, t), un(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            dn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    un(n, e);
                }, En.resetStatus = function(n) {
                    L(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) u(n, e); else u(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) ;
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function _slicedToArray(e, t) {
            return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(e, t) {
            if (e) {
                if ("string" == typeof e) return _arrayLikeToArray(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
            }
        }
        function _arrayLikeToArray(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function _iterableToArrayLimit(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == l.return || l.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
        }
        function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e;
        }
        !function() {
            function n(e) {
                return [ "elInY+elHeight", "elCenterY-".concat(e = 0 < arguments.length && void 0 !== e ? e : 30), "elCenterY", "elCenterY+".concat(e), "elOutY-elHeight" ];
            }
            var l, u, s, _, P, I, t = {
                fadeInOut: function(e, t) {
                    t = 1 < arguments.length && void 0 !== t ? t : 0;
                    return {
                        opacity: [ n(0 < arguments.length && void 0 !== e ? e : 30), [ t, 1, 1, 1, t ] ]
                    };
                },
                fadeIn: function(e, t) {
                    return {
                        opacity: [ [ "elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY" ], [ 1 < arguments.length && void 0 !== t ? t : 0, 1 ] ]
                    };
                },
                fadeOut: function(e, t) {
                    return {
                        opacity: [ [ 0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight" ], [ 1, 1 < arguments.length && void 0 !== t ? t : 0 ] ]
                    };
                },
                blurInOut: function(e, t) {
                    t = 1 < arguments.length && void 0 !== t ? t : 20;
                    return {
                        blur: [ n(0 < arguments.length && void 0 !== e ? e : 100), [ t, 0, 0, 0, t ] ]
                    };
                },
                blurIn: function(e, t) {
                    return {
                        blur: [ [ "elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY" ], [ 1 < arguments.length && void 0 !== t ? t : 20, 0 ] ]
                    };
                },
                blurOut: function(e, t) {
                    return {
                        opacity: [ [ 0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight" ], [ 0, 1 < arguments.length && void 0 !== t ? t : 20 ] ]
                    };
                },
                scaleInOut: function(e, t) {
                    t = 1 < arguments.length && void 0 !== t ? t : .6;
                    return {
                        scale: [ n(0 < arguments.length && void 0 !== e ? e : 100), [ t, 1, 1, 1, t ] ]
                    };
                },
                scaleIn: function(e, t) {
                    return {
                        scale: [ [ "elInY+elHeight", 0 < arguments.length && void 0 !== e ? e : "elCenterY" ], [ 1 < arguments.length && void 0 !== t ? t : .6, 1 ] ]
                    };
                },
                scaleOut: function(e, t) {
                    return {
                        scale: [ [ 0 < arguments.length && void 0 !== e ? e : "elCenterY", "elOutY-elHeight" ], [ 1, 1 < arguments.length && void 0 !== t ? t : .6 ] ]
                    };
                },
                slideX: function(e, t) {
                    return {
                        translateX: [ [ "elInY", 0 < arguments.length && void 0 !== e ? e : 0 ], [ 0, 1 < arguments.length && void 0 !== t ? t : 500 ] ]
                    };
                },
                slideY: function(e, t) {
                    return {
                        translateY: [ [ "elInY", 0 < arguments.length && void 0 !== e ? e : 0 ], [ 0, 1 < arguments.length && void 0 !== t ? t : 500 ] ]
                    };
                },
                spin: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 1e3;
                    return {
                        rotate: [ [ 0, e ], [ 0, 1 < arguments.length && void 0 !== t ? t : 360 ], {
                            modValue: e
                        } ]
                    };
                },
                flipX: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 1e3;
                    return {
                        rotateX: [ [ 0, e ], [ 0, 1 < arguments.length && void 0 !== t ? t : 360 ], {
                            modValue: e
                        } ]
                    };
                },
                flipY: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 1e3;
                    return {
                        rotateY: [ [ 0, e ], [ 0, 1 < arguments.length && void 0 !== t ? t : 360 ], {
                            modValue: e
                        } ]
                    };
                },
                jiggle: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 50, t = 1 < arguments.length && void 0 !== t ? t : 40;
                    return {
                        skewX: [ [ 0, +e, 2 * e, 3 * e, 4 * e ], [ 0, t, 0, -t, 0 ], {
                            modValue: 4 * e
                        } ]
                    };
                },
                seesaw: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 50, t = 1 < arguments.length && void 0 !== t ? t : 40;
                    return {
                        skewY: [ [ 0, +e, 2 * e, 3 * e, 4 * e ], [ 0, t, 0, -t, 0 ], {
                            modValue: 4 * e
                        } ]
                    };
                },
                zigzag: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 100, t = 1 < arguments.length && void 0 !== t ? t : 100;
                    return {
                        translateX: [ [ 0, +e, 2 * e, 3 * e, 4 * e ], [ 0, t, 0, -t, 0 ], {
                            modValue: 4 * e
                        } ]
                    };
                },
                hueRotate: function(e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : 600;
                    return {
                        "hue-rotate": [ [ 0, e ], [ 0, 1 < arguments.length && void 0 !== t ? t : 360 ], {
                            modValue: e
                        } ]
                    };
                }
            }, e = (l = [ "perspective", "scaleX", "scaleY", "scale", "skewX", "skewY", "skew", "rotateX", "rotateY", "rotate" ], 
            u = [ "blur", "hue-rotate", "brightness" ], s = [ "translateX", "translateY", "translateZ" ], 
            _ = [ "perspective", "border-radius", "blur", "translateX", "translateY", "translateZ" ], 
            P = [ "hue-rotate", "rotate", "rotateX", "rotateY", "skew", "skewX", "skewY" ], 
            I = {
                easeInQuad: function(e) {
                    return e * e;
                },
                easeOutQuad: function(e) {
                    return e * (2 - e);
                },
                easeInOutQuad: function(e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                },
                easeInCubic: function(e) {
                    return e * e * e;
                },
                easeOutCubic: function(e) {
                    return --e * e * e + 1;
                },
                easeInOutCubic: function(e) {
                    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                },
                easeInQuart: function(e) {
                    return e * e * e * e;
                },
                easeOutQuart: function(e) {
                    return 1 - --e * e * e * e;
                },
                easeInOutQuart: function(e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                },
                easeInQuint: function(e) {
                    return e * e * e * e * e;
                },
                easeOutQuint: function(e) {
                    return 1 + --e * e * e * e * e;
                },
                easeInOutQuint: function(e) {
                    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                },
                easeOutBounce: function(e) {
                    var t = 7.5625, n = 2.75;
                    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
                },
                easeInBounce: function(e) {
                    return 1 - I.easeOutBounce(1 - e);
                },
                easeOutBack: function(e) {
                    return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
                },
                easeInBack: function(e) {
                    return 2.70158 * e * e * e - 1.70158 * e * e;
                }
            }, new function e() {
                var o = this;
                _classCallCheck(this, e), _defineProperty(this, "drivers", []), _defineProperty(this, "elements", []), 
                _defineProperty(this, "frame", 0), _defineProperty(this, "debug", !1), _defineProperty(this, "windowWidth", 0), 
                _defineProperty(this, "windowHeight", 0), _defineProperty(this, "presets", t), _defineProperty(this, "debugData", {
                    frameLengths: []
                }), _defineProperty(this, "init", (function() {
                    o.findAndAddElements(), window.requestAnimationFrame(o.onAnimationFrame), o.windowWidth = document.body.clientWidth, 
                    o.windowHeight = document.body.clientHeight, window.onresize = o.onWindowResize;
                })), _defineProperty(this, "onWindowResize", (function() {
                    document.body.clientWidth === o.windowWidth && document.body.clientHeight === o.windowHeight || (o.windowWidth = document.body.clientWidth, 
                    o.windowHeight = document.body.clientHeight, o.elements.forEach((function(e) {
                        return e.calculateTransforms();
                    })));
                })), _defineProperty(this, "onAnimationFrame", (function(e) {
                    o.debug && (o.debugData.frameStart = Date.now());
                    var t, n = {};
                    o.drivers.forEach((function(e) {
                        n[e.name] = e.getValue(o.frame);
                    })), o.elements.forEach((function(e) {
                        e.update(n, o.frame);
                    })), o.debug && o.debugData.frameLengths.push(Date.now() - o.debugData.frameStart), 
                    o.frame % 60 == 0 && o.debug && (t = Math.ceil(o.debugData.frameLengths.reduce((function(e, t) {
                        return e + t;
                    }), 0) / 60), console.log("Average frame calculation time: ".concat(t, "ms")), o.debugData.frameLengths = []), 
                    o.frame++, window.requestAnimationFrame(o.onAnimationFrame);
                })), _defineProperty(this, "addDriver", (function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    o.drivers.push(new i(e, t, n));
                })), _defineProperty(this, "removeDriver", (function(t) {
                    o.drivers = o.drivers.filter((function(e) {
                        return e.name !== t;
                    }));
                })), _defineProperty(this, "findAndAddElements", (function() {
                    o.elements = [], document.querySelectorAll(".lax").forEach((function(e) {
                        var t = [];
                        e.classList.forEach((function(e) {
                            e.includes("lax_preset") && (e = e.replace("lax_preset_", ""), t.push(e));
                        }));
                        var n = _defineProperty({}, "scrollY", {
                            presets: t
                        });
                        o.elements.push(new f(".lax", o, e, n, 0, {}));
                    }));
                })), _defineProperty(this, "addElements", (function(n, r, i) {
                    document.querySelectorAll(n).forEach((function(e, t) {
                        o.elements.push(new f(n, o, e, r, t, i));
                    }));
                })), _defineProperty(this, "removeElements", (function(t) {
                    o.elements = o.elements.filter((function(e) {
                        return e.selector !== t;
                    }));
                })), _defineProperty(this, "addElement", (function(e, t, n) {
                    o.elements.push(new f("", o, e, t, 0, n));
                })), _defineProperty(this, "removeElement", (function(t) {
                    o.elements = o.elements.filter((function(e) {
                        return e.domElement !== t;
                    }));
                }));
            });
            function c(e, t) {
                if (Array.isArray(e)) return e;
                for (var n = Object.keys(e).map((function(e) {
                    return parseInt(e);
                })).sort((function(e, t) {
                    return t < e ? 1 : -1;
                })), r = n[n.length - 1], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t < o) {
                        r = o;
                        break;
                    }
                }
                return e[r];
            }
            function d(e, t, n) {
                var r = t.width, i = t.height, o = t.x, a = t.y;
                if ("number" == typeof e) return e;
                var l, u = document.body.scrollHeight, s = document.body.scrollWidth, c = window.innerWidth, d = window.innerHeight, f = _slicedToArray((l = void 0 !== window.pageXOffset, 
                f = "CSS1Compat" === (document.compatMode || ""), t = l ? window.pageXOffset : (f ? document.documentElement : document.body).scrollLeft, 
                [ l ? window.pageYOffset : (f ? document.documentElement : document.body).scrollTop, t ]), 2);
                t = f[0], o += f[1], f = o + r, a += t, t = a + i;
                return Function("return ".concat(e.replace(/screenWidth/g, c).replace(/screenHeight/g, d).replace(/pageHeight/g, u).replace(/pageWidth/g, s).replace(/elWidth/g, r).replace(/elHeight/g, i).replace(/elInY/g, a - d).replace(/elOutY/g, t).replace(/elCenterY/g, a + i / 2 - d / 2).replace(/elInX/g, o - c).replace(/elOutX/g, f).replace(/elCenterX/g, o + r / 2 - c / 2).replace(/index/g, n)))();
            }
            function i(e, t) {
                var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                _classCallCheck(this, i), _defineProperty(this, "getValueFn", void 0), _defineProperty(this, "name", ""), 
                _defineProperty(this, "lastValue", 0), _defineProperty(this, "frameStep", 1), _defineProperty(this, "m1", 0), 
                _defineProperty(this, "m2", 0), _defineProperty(this, "inertia", 0), _defineProperty(this, "inertiaEnabled", !1), 
                _defineProperty(this, "getValue", (function(e) {
                    var t = n.lastValue;
                    return e % n.frameStep == 0 && (t = n.getValueFn(e)), n.inertiaEnabled && (e = t - n.lastValue, 
                    n.m1 = .8 * n.m1 + e * (1 - .8), n.m2 = .8 * n.m2 + n.m1 * (1 - .8), n.inertia = Math.round(5e3 * n.m2) / 15e3), 
                    n.lastValue = t, [ n.lastValue, n.inertia ];
                })), this.name = e, this.getValueFn = t, Object.keys(r).forEach((function(e) {
                    n[e] = r[e];
                })), this.lastValue = this.getValueFn(0);
            }
            function f(e, t, n, r) {
                var b = this, i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
                _classCallCheck(this, f), _defineProperty(this, "domElement", void 0), _defineProperty(this, "transformsData", void 0), 
                _defineProperty(this, "styles", {}), _defineProperty(this, "selector", ""), _defineProperty(this, "groupIndex", 0), 
                _defineProperty(this, "laxInstance", void 0), _defineProperty(this, "onUpdate", void 0), 
                _defineProperty(this, "update", (function(e, t) {
                    var n, r = b.transforms, i = {};
                    for (n in r) {
                        var o = r[n];
                        e[n] || console.error("No lax driver with name: ", n);
                        var a, l = _slicedToArray(e[n], 2), u = l[0], s = l[1];
                        for (a in o) {
                            var c, d = _slicedToArray(o[a], 3), f = d[0], h = d[1], m = d[2], p = void 0 === m ? {} : m, g = p.modValue, y = p.frameStep, v = void 0 === y ? 1 : y, w = p.easing;
                            d = p.inertia, m = p.inertiaMode, y = p.cssFn, p = p.cssUnit, p = void 0 === p ? "" : p, 
                            w = I[w];
                            t % v == 0 && (w = function(e, t, n, r) {
                                var i = 0;
                                if (e.forEach((function(e) {
                                    e < n && i++;
                                })), i <= 0) return t[0];
                                if (i >= e.length) return t[e.length - 1];
                                var o, a = (a = e[o = i - 1], e = e[i], (n - a) / (e - a));
                                return r && (a = r(a)), o = t[o], t = t[i], o * (1 - (a = a)) + t * a;
                            }(f, h, g ? u % g : u, w), d && (c = s * d, "absolute" === m && (c = Math.abs(c)), 
                            w += c), c = "px" == (p || _.includes(a) ? "px" : P.includes(a) ? "deg" : "") ? 0 : 3, 
                            c = w.toFixed(c), i[a] = y ? y(c, b.domElement) : c + p);
                        }
                    }
                    b.applyStyles(i), b.onUpdate && b.onUpdate(e, b.domElement);
                })), _defineProperty(this, "calculateTransforms", (function() {
                    b.transforms = {};
                    var e, l = b.laxInstance.windowWidth;
                    for (e in b.transformsData) !function(e) {
                        var o = b.transformsData[e], a = {}, t = o.presets;
                        (void 0 === t ? [] : t).forEach((function(e) {
                            var t, n = _slicedToArray(e.split(":"), 3), r = n[0], i = n[1];
                            e = n[2], n = window.lax.presets[r];
                            n ? (t = n(i, e), Object.keys(t).forEach((function(e) {
                                o[e] = t[e];
                            }))) : console.error("Lax preset cannot be found with name: ", r);
                        })), delete o.presets;
                        for (var n in o) !function(e) {
                            var t = _slicedToArray(o[e], 3), n = t[0], r = void 0 === n ? [ -1e9, 1e9 ] : n, i = (n = t[1], 
                            n = void 0 === n ? [ -1e9, 1e9 ] : n, t = t[2], t = void 0 === t ? {} : t, b.domElement.getBoundingClientRect());
                            r = c(r, l).map((function(e) {
                                return d(e, i, b.groupIndex);
                            })), n = c(n, l).map((function(e) {
                                return d(e, i, b.groupIndex);
                            }));
                            a[e] = [ r, n, t ];
                        }(n);
                        b.transforms[e] = a;
                    }(e);
                })), _defineProperty(this, "applyStyles", (function(e) {
                    var r, i, o, t = (r = e, i = {
                        transform: "",
                        filter: ""
                    }, o = {
                        translateX: 1e-5,
                        translateY: 1e-5,
                        translateZ: 1e-5
                    }, Object.keys(r).forEach((function(e) {
                        var t = r[e], n = _.includes(e) ? "px" : P.includes(e) ? "deg" : "";
                        s.includes(e) ? o[e] = t : l.includes(e) ? i.transform += "".concat(e, "(").concat(t).concat(n, ") ") : u.includes(e) ? i.filter += "".concat(e, "(").concat(t).concat(n, ") ") : i[e] = "".concat(t).concat(n, " ");
                    })), i.transform = "translate3d(".concat(o.translateX, "px, ").concat(o.translateY, "px, ").concat(o.translateZ, "px) ").concat(i.transform), 
                    i);
                    Object.keys(t).forEach((function(e) {
                        b.domElement.style.setProperty(e, t[e]);
                    }));
                })), this.selector = e, this.laxInstance = t, this.domElement = n, this.transformsData = r, 
                this.groupIndex = i;
                var a = void 0 === (i = o.style) ? {} : i;
                o = o.onUpdate;
                Object.keys(a).forEach((function(e) {
                    n.style.setProperty(e, a[e]);
                })), o && (this.onUpdate = o), this.calculateTransforms();
            }
            "undefined" != typeof module && void 0 !== module.exports ? module.exports = e : window.lax = e;
        }();
        !function(t) {
            function n(r) {
                if (e[r]) return e[r].exports;
                var o = e[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
            }
            var e = {};
            return n.m = t, n.c = e, n.p = "/dist/", n(0);
        }([ function(t, n, e) {
            "use strict";
            var r = e(1);
            t.exports = r, window.Choreographer = r;
        }, function(t, n, e) {
            "use strict";
            function r(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }
            var o = function() {
                function t(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                        Object.defineProperty(t, r.key, r);
                    }
                }
                return function(n, e, r) {
                    return e && t(n.prototype, e), r && t(n, r), n;
                };
            }(), i = e(2), s = e(3), a = function() {}, u = function() {
                function t(n) {
                    var e = this;
                    r(this, t), this.customFunctions = n.customFunctions || {}, this.animations = n.animations.map((function(t) {
                        return t.fn = e.getAnimationFn(t.type), new i(t);
                    }));
                }
                return o(t, [ {
                    key: "getAnimationFn",
                    value: function(t) {
                        return s[t] || this.customFunctions[t] || a;
                    }
                }, {
                    key: "updateAnimations",
                    value: function(t) {
                        var n = this;
                        this.animations = t.map((function(t) {
                            return t.fn = n.getAnimationFn(t.type), new i(t);
                        }));
                    }
                }, {
                    key: "runAnimationsAt",
                    value: function(t) {
                        this.animations.forEach((function(t) {
                            t.nodes.forEach((function(t) {
                                return t.setAttribute("animated", "");
                            }));
                        })), this.animations.forEach((function(n) {
                            return n.runAt(t);
                        }));
                    }
                } ]), t;
            }();
            t.exports = u;
        }, function(t, n) {
            "use strict";
            function e(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t;
            }, o = function() {
                function t(t, n) {
                    var e = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (e.push(s.value), 
                        !n || e.length !== n); r = !0) ;
                    } catch (u) {
                        o = !0, i = u;
                    } finally {
                        try {
                            !r && a["return"] && a["return"]();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return e;
                }
                return function(n, e) {
                    if (Array.isArray(n)) return n;
                    if (Symbol.iterator in Object(n)) return t(n, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(), i = function() {
                function t(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                        Object.defineProperty(t, r.key, r);
                    }
                }
                return function(n, e, r) {
                    return e && t(n.prototype, e), r && t(n, r), n;
                };
            }(), s = function() {
                function t(n) {
                    e(this, t), this.config = n, this.storeNodes();
                }
                return i(t, [ {
                    key: "storeNodes",
                    value: function() {
                        var t = this;
                        this.config.selector && (this.nodes = Array.prototype.slice.call(document.querySelectorAll(this.config.selector))), 
                        this.config.selectors && (this.nodes = [], this.config.selectors.forEach((function(n) {
                            var e = Array.prototype.slice.call(document.querySelectorAll(n));
                            t.nodes = t.nodes.concat(e);
                        })));
                    }
                }, {
                    key: "getProgress",
                    value: function(t, n) {
                        var e = o(n, 2), r = e[0], i = e[1];
                        return (t - r) / (i - r);
                    }
                }, {
                    key: "getProgressAt",
                    value: function(t) {
                        if ("object" === r(this.config.range[0])) {
                            var n = void 0;
                            return this.config.range.forEach((function(t) {
                                isBetween(postion, t[0], t[1]) && (n = t);
                            })), n ? this.getProgress(t, n) : -1;
                        }
                        return this.getProgress(t, this.config.range);
                    }
                }, {
                    key: "runAt",
                    value: function(t) {
                        var n = this, e = this.getProgressAt(t);
                        if (e < 0 || e > 1) {
                            var r = void 0;
                            if (this.nodes.forEach((function(t) {
                                t.getAttribute("animated").indexOf(n.config.style) > -1 && (r = !0);
                            })), r) return;
                            "change" === this.config.type && (e = -1), "scale" === this.config.type && (e < 0 && (e = 0), 
                            e > 1 && (e = 1));
                        }
                        this.nodes.forEach((function(t) {
                            e > 0 && e < 1 && t.setAttribute("animated", t.getAttribute("animated") + "|" + n.config.style), 
                            n.config.fn({
                                node: t,
                                style: n.config.style,
                                from: n.config.from,
                                to: n.config.to,
                                unit: n.config.unit,
                                progress: e
                            });
                        }));
                    }
                } ]), t;
            }();
            t.exports = s;
        }, function(t, n, e) {
            "use strict";
            var r = e(4), o = function(t) {
                var n = (t.to - t.from) * t.progress + t.from, e = t.unit ? n + t.unit : n;
                if (1 === t.style.split(":").length) return void (t.node.style[t.style] = e);
                var o = t.style.split(":")[1];
                t.node.style.transform = r(t.node, o, e);
            }, i = function(t) {
                var n = t.progress < 0 ? null : t.to, e = n && t.unit ? n + t.unit : n;
                if (t.progress < 0 && "transition" === t.style) return void t.node.addEventListener("transitionend", (function(n) {
                    n.target === t.node && (t.node.style[t.style] = null);
                }));
                if (1 === t.style.split(":").length) return void (t.node.style[t.style] = e);
                var o = t.style.split(":")[1];
                t.node.style.transform = r(t.node, o, e);
            };
            t.exports = {
                scale: o,
                change: i
            };
        }, function(t, n) {
            "use strict";
            var e = {
                translateX: 0,
                translateY: 1,
                translateZ: 2
            }, r = {
                scaleX: 0,
                scaleY: 1,
                scaleZ: 2
            }, o = {
                transform: "transform",
                webkitTransform: "-webkit-transform",
                MozTransform: "-moz-transform",
                msTransform: "-ms-transform",
                OTransform: "-o-transform"
            }, i = function() {
                if (!window.getComputedStyle) return null;
                var t = document.createElement("div");
                document.body.insertBefore(t, null);
                for (var n in o) if (window.getComputedStyle(t)[n]) return document.body.removeChild(t), 
                n;
                return document.body.removeChild(t), null;
            }, s = function() {
                if (!a) return !1;
                var t = document.createElement("div");
                document.body.insertBefore(t, null), t.style[a] = "translate3d(1px,1px,1px)";
                var n = !!window.getComputedStyle(t).getPropertyValue(a);
                return document.body.removeChild(t), n;
            }, a = i(), u = s(), f = function(t, n, o) {
                if (a) {
                    var i = t.style[a] || "", s = void 0, f = void 0, c = void 0;
                    if (u && (void 0 !== e[n] ? (f = e[n], n = "translate3d", c = [ "0", "0", "0" ], 
                    null === o && (o = 0)) : void 0 !== r[n] && (f = r[n], n = "scale3d", c = [ "1", "1", "1" ], 
                    null === o && (o = 1)), void 0 !== f)) {
                        if (i.indexOf(n) > -1) {
                            var l = (i.split(n + "(")[0], i.split(n + "(")[1].split(")")[0]);
                            c = l.split(",");
                        }
                        c[f] = o, s = n + "(" + c.join(",") + ")";
                    }
                    var d = s || n + "(" + o + ")", m = i, y = i.indexOf(n) > -1;
                    if (y) {
                        var v = i.split(n)[0], p = i.split(n)[1].split(")")[1];
                        m = v + d + p;
                    } else m += " " + d;
                    return m;
                }
            };
            t.exports = f;
        } ]);
        let preloadAnim = () => {
            const preload = document.querySelector(".preload");
            if (preload) {
                const wrapper = document.querySelector(".wrapper");
                bodyLock();
                preload.classList.add("_active");
                const preloadItems = document.querySelectorAll(".preload__item");
                for (let index = 0; index < preloadItems.length; index++) setInterval((() => {
                    preloadItems[index].classList.add("_active");
                }), 300 * index);
                setTimeout((() => {
                    preload.classList.remove("_active");
                    wrapper.classList.add("_active");
                    bodyUnlock();
                }), 300 * preloadItems.length);
                setTimeout((() => {
                    const heroTitle = document.querySelector(".hero__title");
                    const heroLabel = document.querySelector(".hero__label");
                    heroTitle.classList.add("_active");
                    heroLabel.classList.add("_active");
                }), 2300);
            }
        };
        const iconMenu = document.querySelector(".icon-menu");
        const header = document.querySelector(".header");
        iconMenu.addEventListener("mouseenter", (() => {
            header.classList.add("_active");
        }));
        header.addEventListener("mouseleave", (() => {
            header.classList.remove("_active");
        }));
        const heroText = document.querySelector(".hero__text");
        let heroOverlayAnim = new Choreographer({
            animations: [ {
                range: [ 0, 900 ],
                selector: ".hero__overlay",
                type: "scale",
                style: "opacity",
                from: 0,
                to: .9
            } ]
        });
        heroText.addEventListener("scroll", (() => {
            heroOverlayAnim.runAnimationsAt(heroText.scrollTop);
        }));
        const screen_4 = document.querySelector(".screen-4");
        const screen_4Top = screen_4.getBoundingClientRect().top;
        const screen_4Bottom = screen_4Top + .4 * screen_4.offsetHeight;
        let screen_4Anim = new Choreographer({
            animations: [ {
                range: [ screen_4Top, screen_4Bottom ],
                selector: ".screen-4__image",
                type: "scale",
                style: "transform:rotate",
                from: 0,
                to: 720,
                unit: "deg"
            }, {
                range: [ screen_4Top, screen_4Bottom ],
                selector: ".screen-4__image",
                type: "scale",
                style: "top",
                from: 3,
                to: 70,
                unit: "vh"
            } ]
        });
        const screen_4Sm = document.querySelector(".screen-4");
        const screen_4TopSm = screen_4Sm.getBoundingClientRect().top;
        const screen_4BottomSm = screen_4TopSm + .4 * screen_4Sm.offsetHeight;
        let screen_4AnimSm = new Choreographer({
            animations: [ {
                range: [ screen_4TopSm, screen_4BottomSm ],
                selector: ".screen-4__image",
                type: "scale",
                style: "transform:rotate",
                from: 0,
                to: 720,
                unit: "deg"
            }, {
                range: [ screen_4Top, screen_4Bottom ],
                selector: ".screen-4__image",
                type: "scale",
                style: "top",
                from: 3,
                to: 65,
                unit: "vh"
            } ]
        });
        const screen_5 = document.querySelector(".screen-5");
        const screen_5Top = screen_5.getBoundingClientRect().top - .1 * screen_5.offsetHeight;
        const screen_5Bottom = screen_5Top + .1 * screen_5.offsetHeight;
        let screen_5Anim = new Choreographer({
            animations: [ {
                range: [ screen_5Top, screen_5Bottom ],
                selector: ".screen-5__compass",
                type: "scale",
                style: "transform:translateX",
                from: 50,
                to: 0,
                unit: "%"
            }, {
                range: [ screen_5Top, screen_5Bottom ],
                selector: ".screen-5__text",
                type: "scale",
                style: "transform:translateX",
                from: -50,
                to: 0,
                unit: "%"
            }, {
                range: [ screen_5Top, screen_5Bottom ],
                selector: ".screen-5__image_1",
                type: "scale",
                style: "transform:translateY",
                from: -5,
                to: 0,
                unit: "%"
            } ]
        });
        const screen_5Images = document.querySelector(".screen-5__images");
        const screen_5ImagesTop = screen_5Images.getBoundingClientRect().top + screen_5Images.offsetHeight;
        const screen_5ImagesBottom = screen_5Top + screen_5Images.offsetHeight;
        let screen_5ImagesAnim = new Choreographer({
            animations: [ {
                range: [ screen_5ImagesTop, screen_5ImagesBottom ],
                selector: ".screen-5__image_1",
                type: "scale",
                style: "transform:translateY",
                from: -4,
                to: -27,
                unit: "%"
            } ]
        });
        const screen_9 = document.querySelector(".screen-9");
        const screen_9Top = screen_9.getBoundingClientRect().top;
        const screen_9Bottom = screen_9Top + .6 * screen_9.offsetHeight;
        let screen_9Anim = new Choreographer({
            animations: [ {
                range: [ screen_9Top, screen_9Bottom ],
                selector: ".screen-9__compass",
                type: "scale",
                style: "transform:translateX",
                from: 50,
                to: 0,
                unit: "%"
            }, {
                range: [ screen_9Top, screen_9Bottom ],
                selector: ".screen-9__text",
                type: "scale",
                style: "transform:translateX",
                from: -50,
                to: 0,
                unit: "%"
            } ]
        });
        const screen_11Row_1 = document.querySelector(".screen-11__row_1");
        let screen_11Row_1Top = screen_11Row_1.getBoundingClientRect().top + 8 * screen_11Row_1.offsetHeight;
        let screen_11Row_1Bottom = screen_11Row_1Top + 12 * screen_11Row_1.offsetHeight;
        if (window.innerHeight < 750) {
            screen_11Row_1Top = screen_11Row_1.getBoundingClientRect().top + 5 * screen_11Row_1.offsetHeight;
            screen_11Row_1Bottom = screen_11Row_1Top + 9 * screen_11Row_1.offsetHeight;
        }
        let screen_11Row_1Anim = new Choreographer({
            animations: [ {
                range: [ screen_11Row_1Top, screen_11Row_1Bottom ],
                selector: ".screen-11__image_1",
                type: "scale",
                style: "transform:translateY",
                from: -33,
                to: 0,
                unit: "%"
            } ]
        });
        const screen_11Row_2 = document.querySelector(".screen-11__row_2");
        let screen_11Row_2Top = screen_11Row_2.getBoundingClientRect().top + 20 * screen_11Row_2.offsetHeight;
        let screen_11Row_2Bottom = screen_11Row_2Top + 21 * screen_11Row_2.offsetHeight;
        if (window.innerHeight < 750) {
            screen_11Row_2Top = screen_11Row_2.getBoundingClientRect().top + 13 * screen_11Row_2.offsetHeight;
            screen_11Row_2Bottom = screen_11Row_2Top + 15 * screen_11Row_2.offsetHeight;
        }
        let screen_11Row_2Anim = new Choreographer({
            animations: [ {
                range: [ screen_11Row_2Top, screen_11Row_2Bottom ],
                selector: ".screen-11__image_4",
                type: "scale",
                style: "transform:translateY",
                from: -72,
                to: 0,
                unit: "%"
            }, {
                range: [ screen_11Row_2Top, screen_11Row_2Bottom ],
                selector: ".screen-11__image_5",
                type: "scale",
                style: "transform:translateY",
                from: -72,
                to: 0,
                unit: "%"
            } ]
        });
        const imagesRow = document.querySelector(".screen-8__row");
        let imagesRowTop = imagesRow.getBoundingClientRect().top;
        let imagesRowBottom = imagesRowTop + .4 * imagesRow.offsetHeight;
        let imagesRowAnim = new Choreographer({
            animations: [ {
                range: [ imagesRowTop, imagesRowBottom ],
                selector: ".screen-8__row",
                type: "scale",
                style: "transform:translateX",
                from: 0,
                to: .739 * -imagesRow.scrollWidth,
                unit: "px"
            } ]
        });
        window.onload = function() {
            preloadAnim();
            lax.init();
            lax.addDriver("scrollY", (function() {
                return window.scrollY;
            }));
            lax.addElements(".screen-7__image-ibg img", {
                scrollY: {
                    scale: [ [ "elInY", "elOutY" ], [ 1, 1.3 ] ]
                }
            });
            lax.addElements(".screen-8__bg img", {
                scrollY: {
                    scale: [ [ "elInY", "elOutY" ], [ 1, 1.3 ] ]
                }
            });
            lax.addElements(".screen-13__bg img", {
                scrollY: {
                    scale: [ [ "elInY", "elCenterY" ], [ 1, 1.8 ] ]
                }
            });
        };
        window.addEventListener("scroll", (() => {
            const activeItems = document.querySelectorAll("[data-watch]");
            activeItems.forEach((item => {
                let itemClass = item.getAttribute("class");
                const itemLink = document.querySelector(`[data-goto=".${itemClass}"]`);
                const itemPos = item.getBoundingClientRect().top + item.offsetHeight;
                if (window.pageYOffset < itemPos) if (itemLink && itemLink.classList.contains("_navigator-active")) itemLink.classList.remove("_navigator-active");
            }));
            screen_5Anim.runAnimationsAt(window.pageYOffset);
            screen_9Anim.runAnimationsAt(window.pageYOffset);
            if (window.innerWidth > 991.98) {
                screen_5ImagesAnim.runAnimationsAt(window.pageYOffset);
                imagesRowAnim.runAnimationsAt(window.pageYOffset);
            }
            if (window.innerWidth > 991.98 && window.innerHeight > 880) ;
            if (window.innerWidth > 479.98) {
                screen_11Row_1Anim.runAnimationsAt(window.pageYOffset);
                screen_11Row_2Anim.runAnimationsAt(window.pageYOffset);
            }
            if (window.innerHeight > 770) screen_4Anim.runAnimationsAt(window.pageYOffset);
            if (window.innerHeight < 770) screen_4AnimSm.runAnimationsAt(window.pageYOffset);
        }));
        window["FLS"] = true;
        isWebp();
        menuInit();
        fullVHfix();
        pageNavigation();
    })();
})();