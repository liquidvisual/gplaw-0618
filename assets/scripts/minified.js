var _$$headroom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function launchGallery() {
  $("[data-lightbox-group]").each(function () {
    var t = $(this),
        e = t.attr("data-lightbox-group");t.magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function titleSrc(t) {
          return '<div class="mb-1">' + t.el.attr("title") + "</div><small>" + e + "</small>";
        } }, callbacks: { elementParse: function elementParse(t) {
          (-1 != t.src.indexOf("youtube") || -1 != t.src.indexOf("vimeo") || -1 != t.src.indexOf("maps")) && (t.type = "iframe");
        } } });
  });
}function launchSlider() {
  $("[data-hero-slider]").each(function () {
    var t = $(this),
        e = $(".lv-hero", t),
        n = $(".lv-hero-item-caption", t),
        i = $(".lv-hero-item", e).length,
        o = $(".lv-hero-slider-prev-btn", t),
        r = $(".lv-hero-slider-next-btn", t);i > 1 && (o.on("click", function () {
      e.flickity("previous");
    }), r.on("click", function () {
      e.flickity("next");
    }), e.on("ready.flickity change.flickity", function () {
      $(window).width() > 576 && (n.hide(), setTimeout(function () {
        n.show();
      }, 500));
    }));
  });
}!function (t, e) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  var n = [],
      i = t.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      h = d.toString,
      f = h.call(Object),
      p = {},
      m = function m(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      g = function g(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(t, e, n) {
    var o,
        r = (e = e || i).createElement("script");if (r.text = t, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }e.head.appendChild(r).parentNode.removeChild(r);
  }function b(t) {
    return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? c[u.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
  }var _ = function _(t, e) {
    return new _.fn.init(t, e);
  },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(t) {
    var e = !!t && "length" in t && t.length,
        n = b(t);return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }_.fn = _.prototype = { jquery: "3.3.1", constructor: _, length: 0, toArray: function toArray() {
      return r.call(this);
    }, get: function get(t) {
      return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
    }, pushStack: function pushStack(t) {
      var e = _.merge(this.constructor(), t);return e.prevObject = this, e;
    }, each: function each(t) {
      return _.each(this, t);
    }, map: function map(t) {
      return this.pushStack(_.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    }, slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, _.extend = _.fn.extend = function () {
    var t,
        e,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (t = arguments[a])) for (e in t) {
        n = s[e], s !== (i = t[e]) && (c && i && (_.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && _.isPlainObject(n) ? n : {}, s[e] = _.extend(c, r, i)) : void 0 !== i && (s[e] = i));
      }
    }return s;
  }, _.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(t) {
      throw new Error(t);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(t) {
      var e, n;return !(!t || "[object Object]" !== u.call(t)) && (!(e = o(t)) || "function" == typeof (n = d.call(e, "constructor") && e.constructor) && h.call(n) === f);
    }, isEmptyObject: function isEmptyObject(t) {
      var e;for (e in t) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(t) {
      y(t);
    }, each: function each(t, e) {
      var n,
          i = 0;if (E(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {} else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }return t;
    }, trim: function trim(t) {
      return null == t ? "" : (t + "").replace(w, "");
    }, makeArray: function makeArray(t, e) {
      var n = e || [];return null != t && (E(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n;
    }, inArray: function inArray(t, e, n) {
      return null == e ? -1 : l.call(e, t, n);
    }, merge: function merge(t, e) {
      for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
        t[o++] = e[i];
      }return t.length = o, t;
    }, grep: function grep(t, e, n) {
      for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) {
        !e(t[o], o) !== s && i.push(t[o]);
      }return i;
    }, map: function map(t, e, n) {
      var i,
          o,
          r = 0,
          a = [];if (E(t)) for (i = t.length; r < i; r++) {
        null != (o = e(t[r], r, n)) && a.push(o);
      } else for (r in t) {
        null != (o = e(t[r], r, n)) && a.push(o);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    c["[object " + e + "]"] = e.toLowerCase();
  });var C = function (t) {
    var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        f,
        p,
        m,
        g,
        v,
        y,
        b,
        _ = "sizzle" + 1 * new Date(),
        w = t.document,
        E = 0,
        C = 0,
        x = st(),
        T = st(),
        S = st(),
        D = function D(t, e) {
      return t === e && (d = !0), 0;
    },
        k = {}.hasOwnProperty,
        A = [],
        I = A.pop,
        N = A.push,
        P = A.push,
        O = A.slice,
        L = function L(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        if (t[n] === e) return n;
      }return -1;
    },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
        z = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        q = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        W = new RegExp("^" + M + "*," + M + "*"),
        R = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        $ = new RegExp(z),
        V = new RegExp("^" + H + "$"),
        K = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + z), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + j + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        Q = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        tt = function tt(t, e, n) {
      var i = "0x" + e - 65536;return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function nt(t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        it = function it() {
      h();
    },
        ot = yt(function (t) {
      return !0 === t.disabled && ("form" in t || "label" in t);
    }, { dir: "parentNode", next: "legend" });try {
      P.apply(A = O.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (t) {
      P = { apply: A.length ? function (t, e) {
          N.apply(t, O.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {}t.length = n - 1;
        } };
    }function rt(t, e, i, o) {
      var r,
          a,
          c,
          u,
          d,
          p,
          v,
          y = e && e.ownerDocument,
          E = e ? e.nodeType : 9;if (i = i || [], "string" != typeof t || !t || 1 !== E && 9 !== E && 11 !== E) return i;if (!o && ((e ? e.ownerDocument || e : w) !== f && h(e), e = e || f, m)) {
        if (11 !== E && (d = X.exec(t))) if (r = d[1]) {
          if (9 === E) {
            if (!(c = e.getElementById(r))) return i;if (c.id === r) return i.push(c), i;
          } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i;
        } else {
          if (d[2]) return P.apply(i, e.getElementsByTagName(t)), i;if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(i, e.getElementsByClassName(r)), i;
        }if (n.qsa && !S[t + " "] && (!g || !g.test(t))) {
          if (1 !== E) y = e, v = t;else if ("object" !== e.nodeName.toLowerCase()) {
            for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = _), a = (p = s(t)).length; a--;) {
              p[a] = "#" + u + " " + vt(p[a]);
            }v = p.join(","), y = Z.test(t) && mt(e.parentNode) || e;
          }if (v) try {
            return P.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {} finally {
            u === _ && e.removeAttribute("id");
          }
        }
      }return l(t.replace(B, "$1"), e, i, o);
    }function st() {
      var t = [];return function e(n, o) {
        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
      };
    }function at(t) {
      return t[_] = !0, t;
    }function lt(t) {
      var e = f.createElement("fieldset");try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }function ct(t, e) {
      for (var n = t.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = e;
      }
    }function ut(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }return t ? 1 : -1;
    }function dt(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }function ht(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();return ("input" === n || "button" === n) && e.type === t;
      };
    }function ft(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }function pt(t) {
      return at(function (e) {
        return e = +e, at(function (n, i) {
          for (var o, r = t([], n.length, e), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }for (e in n = rt.support = {}, r = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
    }, h = rt.setDocument = function (t) {
      var e,
          o,
          s = t ? t.ownerDocument || t : w;return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !r(f), w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), n.getElementsByTagName = lt(function (t) {
        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
      }), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = lt(function (t) {
        return p.appendChild(t).id = _, !f.getElementsByName || !f.getElementsByName(_).length;
      }), n.getById ? (i.filter.ID = function (t) {
        var e = t.replace(J, tt);return function (t) {
          return t.getAttribute("id") === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && m) {
          var n = e.getElementById(t);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (t) {
        var e = t.replace(J, tt);return function (t) {
          var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");return n && n.value === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && m) {
          var n,
              i,
              o,
              r = e.getElementById(t);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            o = 0,
            r = e.getElementsByTagName(t);if ("*" === t) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
      }, v = [], g = [], (n.qsa = G.test(f.querySelectorAll)) && (lt(function (t) {
        p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]");
      }), lt(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e = f.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (t) {
        n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", z);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(p.compareDocumentPosition), b = e || G.test(p.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }return !1;
      }, D = e ? function (t, e) {
        if (t === e) return d = !0, 0;var i = !t.compareDocumentPosition - !e.compareDocumentPosition;return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && b(w, t) ? -1 : e === f || e.ownerDocument === w && b(w, e) ? 1 : u ? L(u, t) - L(u, e) : 0 : 4 & i ? -1 : 1);
      } : function (t, e) {
        if (t === e) return d = !0, 0;var n,
            i = 0,
            o = t.parentNode,
            r = e.parentNode,
            s = [t],
            a = [e];if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : u ? L(u, t) - L(u, e) : 0;if (o === r) return ut(t, e);for (n = t; n = n.parentNode;) {
          s.unshift(n);
        }for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ut(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
      }, f) : f;
    }, rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }, rt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== f && h(t), e = e.replace(U, "='$1']"), n.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
        var i = y.call(t, e);if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
      } catch (t) {}return rt(e, f, null, [t]).length > 0;
    }, rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== f && h(t), b(t, e);
    }, rt.attr = function (t, e) {
      (t.ownerDocument || t) !== f && h(t);var o = i.attrHandle[e.toLowerCase()],
          r = o && k.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
    }, rt.escape = function (t) {
      return (t + "").replace(et, nt);
    }, rt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, rt.uniqueSort = function (t) {
      var e,
          i = [],
          o = 0,
          r = 0;if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(D), d) {
        for (; e = t[r++];) {
          e === t[r] && (o = i.push(r));
        }for (; o--;) {
          t.splice(i[o], 1);
        }
      }return u = null, t;
    }, o = rt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          r = t.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) {
            n += o(t);
          }
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += o(e);
      }return n;
    }, (i = rt.selectors = { cacheLength: 50, createPseudo: at, match: K, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(t) {
          return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        }, CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
        }, PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[6] && t[2];return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        } }, filter: { TAG: function TAG(t) {
          var e = t.replace(J, tt).toLowerCase();return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        }, CLASS: function CLASS(t) {
          var e = x[t + " "];return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && x(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(t, e, n) {
          return function (i) {
            var o = rt.attr(i, t);return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(t, e, n, i, o) {
          var r = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;return 1 === i && 0 === o ? function (t) {
            return !!t.parentNode;
          } : function (e, n, l) {
            var c,
                u,
                d,
                h,
                f,
                p,
                m = r !== s ? "nextSibling" : "previousSibling",
                g = e.parentNode,
                v = a && e.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (g) {
              if (r) {
                for (; m;) {
                  for (h = e; h = h[m];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = m = "only" === t && !p && "nextSibling";
                }return !0;
              }if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (f = (c = (u = (d = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === E && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === e) {
                    u[t] = [E, f, b];break;
                  }
                }
              } else if (y && (b = f = (c = (u = (d = (h = e)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === E && c[1]), !1 === b) for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [E, b]), h !== e));) {}return (b -= o) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(t, e) {
          var n,
              o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);return o[_] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, n) {
            for (var i, r = o(t, e), s = r.length; s--;) {
              t[i = L(t, r[s])] = !(n[i] = r[s]);
            }
          }) : function (t) {
            return o(t, 0, n);
          }) : o;
        } }, pseudos: { not: at(function (t) {
          var e = [],
              n = [],
              i = a(t.replace(B, "$1"));return i[_] ? at(function (t, e, n, o) {
            for (var r, s = i(t, null, o, []), a = t.length; a--;) {
              (r = s[a]) && (t[a] = !(e[a] = r));
            }
          }) : function (t, o, r) {
            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
          };
        }), has: at(function (t) {
          return function (e) {
            return rt(t, e).length > 0;
          };
        }), contains: at(function (t) {
          return t = t.replace(J, tt), function (e) {
            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
          };
        }), lang: at(function (t) {
          return V.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
            var n;do {
              if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
          };
        }), target: function target(e) {
          var n = t.location && t.location.hash;return n && n.slice(1) === e.id;
        }, root: function root(t) {
          return t === p;
        }, focus: function focus(t) {
          return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        }, enabled: ft(!1), disabled: ft(!0), checked: function checked(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
        }, selected: function selected(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        }, empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(t) {
          return !i.pseudos.empty(t);
        }, header: function header(t) {
          return Y.test(t.nodeName);
        }, input: function input(t) {
          return Q.test(t.nodeName);
        }, button: function button(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
        }, text: function text(t) {
          var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        }, first: pt(function () {
          return [0];
        }), last: pt(function (t, e) {
          return [e - 1];
        }), eq: pt(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }), even: pt(function (t, e) {
          for (var n = 0; n < e; n += 2) {
            t.push(n);
          }return t;
        }), odd: pt(function (t, e) {
          for (var n = 1; n < e; n += 2) {
            t.push(n);
          }return t;
        }), lt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; --i >= 0;) {
            t.push(i);
          }return t;
        }), gt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) {
            t.push(i);
          }return t;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[e] = dt(e);
    }for (e in { submit: !0, reset: !0 }) {
      i.pseudos[e] = ht(e);
    }function gt() {}function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) {
        i += t[e].value;
      }return i;
    }function yt(t, e, n) {
      var i = e.dir,
          o = e.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = C++;return e.first ? function (e, n, o) {
        for (; e = e[i];) {
          if (1 === e.nodeType || s) return t(e, n, o);
        }return !1;
      } : function (e, n, l) {
        var c,
            u,
            d,
            h = [E, a];if (l) {
          for (; e = e[i];) {
            if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
          }
        } else for (; e = e[i];) {
          if (1 === e.nodeType || s) if (u = (d = e[_] || (e[_] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
            if ((c = u[r]) && c[0] === E && c[1] === a) return h[2] = c[2];if (u[r] = h, h[2] = t(e, n, l)) return !0;
          }
        }return !1;
      };
    }function bt(t) {
      return t.length > 1 ? function (e, n, i) {
        for (var o = t.length; o--;) {
          if (!t[o](e, n, i)) return !1;
        }return !0;
      } : t[0];
    }function _t(t, e, n, i, o) {
      for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) {
        (r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
      }return s;
    }function wt(t, e, n, i, o, r) {
      return i && !i[_] && (i = wt(i)), o && !o[_] && (o = wt(o, r)), at(function (r, s, a, l) {
        var c,
            u,
            d,
            h = [],
            f = [],
            p = s.length,
            m = r || function (t, e, n) {
          for (var i = 0, o = e.length; i < o; i++) {
            rt(t, e[i], n);
          }return n;
        }(e || "*", a.nodeType ? [a] : a, []),
            g = !t || !r && e ? m : _t(m, h, t, a, l),
            v = n ? o || (r ? t : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = _t(v, f), i(c, [], a, l), u = c.length; u--;) {
          (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
        }if (r) {
          if (o || t) {
            if (o) {
              for (c = [], u = v.length; u--;) {
                (d = v[u]) && c.push(g[u] = d);
              }o(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (d = v[u]) && (c = o ? L(r, d) : h[u]) > -1 && (r[c] = !(s[c] = d));
            }
          }
        } else v = _t(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : P.apply(s, v);
      });
    }function Et(t) {
      for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = yt(function (t) {
        return t === e;
      }, a, !0), d = yt(function (t) {
        return L(e, t) > -1;
      }, a, !0), h = [function (t, n, i) {
        var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));return e = null, o;
      }]; l < r; l++) {
        if (n = i.relative[t[l].type]) h = [yt(bt(h), n)];else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
            for (o = ++l; o < r && !i.relative[t[o].type]; o++) {}return wt(l > 1 && bt(h), l > 1 && vt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(B, "$1"), n, l < o && Et(t.slice(l, o)), o < r && Et(t = t.slice(o)), o < r && vt(t));
          }h.push(n);
        }
      }return bt(h);
    }return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt(), s = rt.tokenize = function (t, e) {
      var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = T[t + " "];if (u) return e ? 0 : u.slice(0);for (a = t, l = [], c = i.preFilter; a;) {
        for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = R.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(B, " ") }), a = a.slice(n.length)), i.filter) {
          !(o = K[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
        }if (!n) break;
      }return e ? a.length : a ? rt.error(t) : T(t, l).slice(0);
    }, a = rt.compile = function (t, e) {
      var n,
          o = [],
          r = [],
          a = S[t + " "];if (!a) {
        for (e || (e = s(t)), n = e.length; n--;) {
          (a = Et(e[n]))[_] ? o.push(a) : r.push(a);
        }(a = S(t, function (t, e) {
          var n = e.length > 0,
              o = t.length > 0,
              r = function r(_r, s, a, l, u) {
            var d,
                p,
                g,
                v = 0,
                y = "0",
                b = _r && [],
                _ = [],
                w = c,
                C = _r || o && i.find.TAG("*", u),
                x = E += null == w ? 1 : Math.random() || .1,
                T = C.length;for (u && (c = s === f || s || u); y !== T && null != (d = C[y]); y++) {
              if (o && d) {
                for (p = 0, s || d.ownerDocument === f || (h(d), a = !m); g = t[p++];) {
                  if (g(d, s || f, a)) {
                    l.push(d);break;
                  }
                }u && (E = x);
              }n && ((d = !g && d) && v--, _r && b.push(d));
            }if (v += y, n && y !== v) {
              for (p = 0; g = e[p++];) {
                g(b, _, s, a);
              }if (_r) {
                if (v > 0) for (; y--;) {
                  b[y] || _[y] || (_[y] = I.call(l));
                }_ = _t(_);
              }P.apply(l, _), u && !_r && _.length > 0 && v + e.length > 1 && rt.uniqueSort(l);
            }return u && (E = x, c = w), b;
          };return n ? at(r) : r;
        }(r, o))).selector = t;
      }return a;
    }, l = rt.select = function (t, e, n, o) {
      var r,
          l,
          c,
          u,
          d,
          h = "function" == typeof t && t,
          f = !o && s(t = h.selector || t);if (n = n || [], 1 === f.length) {
        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
          if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;h && (e = e.parentNode), t = t.slice(l.shift().value.length);
        }for (r = K.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
          if ((d = i.find[u]) && (o = d(c.matches[0].replace(J, tt), Z.test(l[0].type) && mt(e.parentNode) || e))) {
            if (l.splice(r, 1), !(t = o.length && vt(l))) return P.apply(n, o), n;break;
          }
        }
      }return (h || a(t, f))(o, e, !m, n, !e || Z.test(t) && mt(e.parentNode) || e), n;
    }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!d, h(), n.sortDetached = lt(function (t) {
      return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
    }), lt(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), n.attributes && lt(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || ct("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
    }), lt(function (t) {
      return null == t.getAttribute("disabled");
    }) || ct(j, function (t, e, n) {
      var i;if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), rt;
  }(t);_.find = C, _.expr = C.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = C.uniqueSort, _.text = C.getText, _.isXMLDoc = C.isXML, _.contains = C.contains, _.escapeSelector = C.escape;var x = function x(t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
      if (1 === t.nodeType) {
        if (o && _(t).is(n)) break;i.push(t);
      }
    }return i;
  },
      T = function T(t, e) {
    for (var n = []; t; t = t.nextSibling) {
      1 === t.nodeType && t !== e && n.push(t);
    }return n;
  },
      S = _.expr.match.needsContext;function D(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(t, e, n) {
    return m(e) ? _.grep(t, function (t, i) {
      return !!e.call(t, i, t) !== n;
    }) : e.nodeType ? _.grep(t, function (t) {
      return t === e !== n;
    }) : "string" != typeof e ? _.grep(t, function (t) {
      return l.call(e, t) > -1 !== n;
    }) : _.filter(e, t, n);
  }_.filter = function (t, e, n) {
    var i = e[0];return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? _.find.matchesSelector(i, t) ? [i] : [] : _.find.matches(t, _.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, _.fn.extend({ find: function find(t) {
      var e,
          n,
          i = this.length,
          o = this;if ("string" != typeof t) return this.pushStack(_(t).filter(function () {
        for (e = 0; e < i; e++) {
          if (_.contains(o[e], this)) return !0;
        }
      }));for (n = this.pushStack([]), e = 0; e < i; e++) {
        _.find(t, o[e], n);
      }return i > 1 ? _.uniqueSort(n) : n;
    }, filter: function filter(t) {
      return this.pushStack(A(this, t || [], !1));
    }, not: function not(t) {
      return this.pushStack(A(this, t || [], !0));
    }, is: function is(t) {
      return !!A(this, "string" == typeof t && S.test(t) ? _(t) : t || [], !1).length;
    } });var I,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init = function (t, e, n) {
    var o, r;if (!t) return this;if (n = n || I, "string" == typeof t) {
      if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : N.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);if (o[1]) {
        if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), k.test(o[1]) && _.isPlainObject(e)) for (o in e) {
          m(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
        }return this;
      }return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this);
  }).prototype = _.fn, I = _(i);var P = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };function L(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {}return t;
  }_.fn.extend({ has: function has(t) {
      var e = _(t, this),
          n = e.length;return this.filter(function () {
        for (var t = 0; t < n; t++) {
          if (_.contains(this, e[t])) return !0;
        }
      });
    }, closest: function closest(t, e) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof t && _(t);if (!S.test(t)) for (; i < o; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r);
    }, index: function index(t) {
      return t ? "string" == typeof t ? l.call(_(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(t, e) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))));
    }, addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    } }), _.each({ parent: function parent(t) {
      var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
    }, parents: function parents(t) {
      return x(t, "parentNode");
    }, parentsUntil: function parentsUntil(t, e, n) {
      return x(t, "parentNode", n);
    }, next: function next(t) {
      return L(t, "nextSibling");
    }, prev: function prev(t) {
      return L(t, "previousSibling");
    }, nextAll: function nextAll(t) {
      return x(t, "nextSibling");
    }, prevAll: function prevAll(t) {
      return x(t, "previousSibling");
    }, nextUntil: function nextUntil(t, e, n) {
      return x(t, "nextSibling", n);
    }, prevUntil: function prevUntil(t, e, n) {
      return x(t, "previousSibling", n);
    }, siblings: function siblings(t) {
      return T((t.parentNode || {}).firstChild, t);
    }, children: function children(t) {
      return T(t.firstChild);
    }, contents: function contents(t) {
      return D(t, "iframe") ? t.contentDocument : (D(t, "template") && (t = t.content || t), _.merge([], t.childNodes));
    } }, function (t, e) {
    _.fn[t] = function (n, i) {
      var o = _.map(this, e, n);return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), this.length > 1 && (O[t] || _.uniqueSort(o), P.test(t) && o.reverse()), this.pushStack(o);
    };
  });var j = /[^\x20\t\r\n\f]+/g;function M(t) {
    return t;
  }function H(t) {
    throw t;
  }function F(t, e, n, i) {
    var o;try {
      t && m(o = t.promise) ? o.call(t).done(e).fail(n) : t && m(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }_.Callbacks = function (t) {
    t = "string" == typeof t ? function (t) {
      var e = {};return _.each(t.match(j) || [], function (t, n) {
        e[n] = !0;
      }), e;
    }(t) : _.extend({}, t);var e,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function l() {
      for (o = o || t.once, i = e = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < r.length;) {
          !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
        }
      }t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
    },
        c = { add: function add() {
        return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
          _.each(n, function (n, i) {
            m(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && e(i);
          });
        }(arguments), n && !e && l()), this;
      }, remove: function remove() {
        return _.each(arguments, function (t, e) {
          for (var n; (n = _.inArray(e, r, n)) > -1;) {
            r.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(t) {
        return t ? _.inArray(t, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = s = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = s = [], n || e || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(t, n) {
        return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, _.extend({ Deferred: function Deferred(e) {
      var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(t) {
          return o.then(null, t);
        }, pipe: function pipe() {
          var t = arguments;return _.Deferred(function (e) {
            _.each(n, function (n, i) {
              var o = m(t[i[4]]) && t[i[4]];r[i[1]](function () {
                var t = o && o.apply(this, arguments);t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments);
              });
            }), t = null;
          }).promise();
        }, then: function then(e, i, o) {
          var r = 0;function s(e, n, i, o) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var t, c;if (!(e < r)) {
                  if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t) && t.then, m(c) ? o ? c.call(t, s(r, n, M, o), s(r, n, H, o)) : (r++, c.call(t, s(r, n, M, o), s(r, n, H, o), s(r, n, M, n.notifyWith))) : (i !== M && (a = void 0, l = [t]), (o || n.resolveWith)(a, l));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (t) {
                  _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (i !== H && (a = void 0, l = [t]), n.rejectWith(a, l));
                }
              };e ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), t.setTimeout(u));
            };
          }return _.Deferred(function (t) {
            n[0][3].add(s(0, t, m(o) ? o : M, t.notifyWith)), n[1][3].add(s(0, t, m(e) ? e : M)), n[2][3].add(s(0, t, m(i) ? i : H));
          }).promise();
        }, promise: function promise(t) {
          return null != t ? _.extend(t, o) : o;
        } },
          r = {};return _.each(n, function (t, e) {
        var s = e[2],
            a = e[5];o[e[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), r[e[0]] = function () {
          return r[e[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[e[0] + "With"] = s.fireWith;
      }), o.promise(r), e && e.call(r, r), r;
    }, when: function when(t) {
      var e = arguments.length,
          n = e,
          i = Array(n),
          o = r.call(arguments),
          s = _.Deferred(),
          a = function a(t) {
        return function (n) {
          i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o);
        };
      };if (e <= 1 && (F(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();for (; n--;) {
        F(o[n], a(n), s.reject);
      }return s.promise();
    } });var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook = function (e, n) {
    t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }, _.readyException = function (e) {
    t.setTimeout(function () {
      throw e;
    });
  };var q = _.Deferred();function B() {
    i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), _.ready();
  }_.fn.ready = function (t) {
    return q.then(t).catch(function (t) {
      _.readyException(t);
    }), this;
  }, _.extend({ isReady: !1, readyWait: 1, ready: function ready(t) {
      (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== t && --_.readyWait > 0 || q.resolveWith(i, [_]));
    } }), _.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));var W = function W(t, e, n, i, o, r, s) {
    var a = 0,
        l = t.length,
        c = null == n;if ("object" === b(n)) for (a in o = !0, n) {
      W(t, e, a, n[a], !0, r, s);
    } else if (void 0 !== i && (o = !0, m(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function e(t, _e2, n) {
      return c.call(_(t), n);
    })), e)) for (; a < l; a++) {
      e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
    }return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
  },
      R = /^-ms-/,
      U = /-([a-z])/g;function $(t, e) {
    return e.toUpperCase();
  }function V(t) {
    return t.replace(R, "ms-").replace(U, $);
  }var K = function K(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };function Q() {
    this.expando = _.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(t) {
      var e = t[this.expando];return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
    }, set: function set(t, e, n) {
      var i,
          o = this.cache(t);if ("string" == typeof e) o[V(e)] = n;else for (i in e) {
        o[V(i)] = e[i];
      }return o;
    }, get: function get(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)];
    }, access: function access(t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    }, remove: function remove(t, e) {
      var n,
          i = t[this.expando];if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in i ? [e] : e.match(j) || []).length;for (; n--;) {
            delete i[e[n]];
          }
        }(void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    }, hasData: function hasData(t) {
      var e = t[this.expando];return void 0 !== e && !_.isEmptyObject(e);
    } };var Y = new Q(),
      G = new Q(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function J(t, e, n) {
    var i;if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
      try {
        n = function (t) {
          return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : X.test(t) ? JSON.parse(t) : t);
        }(n);
      } catch (t) {}G.set(t, e, n);
    } else n = void 0;return n;
  }_.extend({ hasData: function hasData(t) {
      return G.hasData(t) || Y.hasData(t);
    }, data: function data(t, e, n) {
      return G.access(t, e, n);
    }, removeData: function removeData(t, e) {
      G.remove(t, e);
    }, _data: function _data(t, e, n) {
      return Y.access(t, e, n);
    }, _removeData: function _removeData(t, e) {
      Y.remove(t, e);
    } }), _.fn.extend({ data: function data(t, e) {
      var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 === t) {
        if (this.length && (o = G.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), J(r, i, o[i]));
          }Y.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? this.each(function () {
        G.set(this, t);
      }) : W(this, function (e) {
        var n;if (r && void 0 === e) return void 0 !== (n = G.get(r, t)) ? n : void 0 !== (n = J(r, t)) ? n : void 0;this.each(function () {
          G.set(this, t, e);
        });
      }, null, e, arguments.length > 1, null, !0);
    }, removeData: function removeData(t) {
      return this.each(function () {
        G.remove(this, t);
      });
    } }), _.extend({ queue: function queue(t, e, n) {
      var i;if (t) return e = (e || "fx") + "queue", i = Y.get(t, e), n && (!i || Array.isArray(n) ? i = Y.access(t, e, _.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(t, e) {
      e = e || "fx";var n = _.queue(t, e),
          i = n.length,
          o = n.shift(),
          r = _._queueHooks(t, e);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
        _.dequeue(t, e);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";return Y.get(t, n) || Y.access(t, n, { empty: _.Callbacks("once memory").add(function () {
          Y.remove(t, [e + "queue", n]);
        }) });
    } }), _.fn.extend({ queue: function queue(t, e) {
      var n = 2;return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? _.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var n = _.queue(this, t, e);_._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t);
      });
    }, dequeue: function dequeue(t) {
      return this.each(function () {
        _.dequeue(this, t);
      });
    }, clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    }, promise: function promise(t, e) {
      var n,
          i = 1,
          o = _.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) {
        (n = Y.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), o.promise(e);
    } });var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      nt = ["Top", "Right", "Bottom", "Left"],
      it = function it(t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && _.contains(t.ownerDocument, t) && "none" === _.css(t, "display");
  },
      ot = function ot(t, e, n, i) {
    var o,
        r,
        s = {};for (r in e) {
      s[r] = t.style[r], t.style[r] = e[r];
    }for (r in o = n.apply(t, i || []), e) {
      t.style[r] = s[r];
    }return o;
  };function rt(t, e, n, i) {
    var o,
        r,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return _.css(t, e, "");
    },
        l = a(),
        c = n && n[3] || (_.cssNumber[e] ? "" : "px"),
        u = (_.cssNumber[e] || "px" !== c && +l) && et.exec(_.css(t, e));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        _.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
      }u *= 2, _.style(t, e, u + c), n = n || [];
    }return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
  }var st = {};function at(t) {
    var e,
        n = t.ownerDocument,
        i = t.nodeName,
        o = st[i];return o || (e = n.body.appendChild(n.createElement(i)), o = _.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), st[i] = o, o);
  }function lt(t, e) {
    for (var n, i, o = [], r = 0, s = t.length; r < s; r++) {
      (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = Y.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && it(i) && (o[r] = at(i))) : "none" !== n && (o[r] = "none", Y.set(i, "display", n)));
    }for (r = 0; r < s; r++) {
      null != o[r] && (t[r].style.display = o[r]);
    }return t;
  }_.fn.extend({ show: function show() {
      return lt(this, !0);
    }, hide: function hide() {
      return lt(this);
    }, toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        it(this) ? _(this).show() : _(this).hide();
      });
    } });var ct = /^(?:checkbox|radio)$/i,
      ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      dt = /^$|^module$|\/(?:java|ecma)script/i,
      ht = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ft(t, e) {
    var n;return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? _.merge([t], n) : n;
  }function pt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) {
      Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"));
    }
  }ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;var mt,
      gt,
      vt = /<|&#?\w+;/;function yt(t, e, n, i, o) {
    for (var r, s, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++) {
      if ((r = t[f]) || 0 === r) if ("object" === b(r)) _.merge(h, r.nodeType ? [r] : r);else if (vt.test(r)) {
        for (s = s || d.appendChild(e.createElement("div")), a = (ut.exec(r) || ["", ""])[1].toLowerCase(), l = ht[a] || ht._default, s.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }_.merge(h, s.childNodes), (s = d.firstChild).textContent = "";
      } else h.push(e.createTextNode(r));
    }for (d.textContent = "", f = 0; r = h[f++];) {
      if (i && _.inArray(r, i) > -1) o && o.push(r);else if (c = _.contains(r.ownerDocument, r), s = ft(d.appendChild(r), "script"), c && pt(s), n) for (u = 0; r = s[u++];) {
        dt.test(r.type || "") && n.push(r);
      }
    }return d;
  }mt = i.createDocumentFragment().appendChild(i.createElement("div")), (gt = i.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), mt.appendChild(gt), p.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;var bt = i.documentElement,
      _t = /^key/,
      wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Et = /^([^.]*)(?:\.(.+)|)/;function Ct() {
    return !0;
  }function xt() {
    return !1;
  }function Tt() {
    try {
      return i.activeElement;
    } catch (t) {}
  }function St(t, e, n, i, o, r) {
    var s, a;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), e) {
        St(t, a, n, i, e[a], r);
      }return t;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = xt;else if (!o) return t;return 1 === r && (s = o, (o = function o(t) {
      return _().off(t), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = _.guid++)), t.each(function () {
      _.event.add(this, e, o, i, n);
    });
  }_.event = { global: {}, add: function add(t, e, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p,
          m,
          g = Y.get(t);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(bt, o), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0;
      }), c = (e = (e || "").match(j) || [""]).length; c--;) {
        f = m = (a = Et.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, u = _.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && _.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[f] = !0);
      }
    }, remove: function remove(t, e, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p,
          m,
          g = Y.hasData(t) && Y.get(t);if (g && (l = g.events)) {
        for (c = (e = (e || "").match(j) || [""]).length; c--;) {
          if (f = m = (a = Et.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) {
              u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
            }s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || _.removeEvent(t, f, g.handle), delete l[f]);
          } else for (f in l) {
            _.event.remove(t, f + e[c], n, i, !0);
          }
        }_.isEmptyObject(l) && Y.remove(t, "handle events");
      }
    }, dispatch: function dispatch(t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a = _.event.fix(t),
          l = new Array(arguments.length),
          c = (Y.get(this, "events") || {})[a.type] || [],
          u = _.event.special[a.type] || {};for (l[0] = a, e = 1; e < arguments.length; e++) {
        l[e] = arguments[e];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = _.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(t, e) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = e.delegateCount,
          c = t.target;if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? _(o, this).index(c) > -1 : _.find(o, this, null, [c]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: c, handlers: r });
        }
      }return c = this, l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
    }, addProp: function addProp(t, e) {
      Object.defineProperty(_.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        }, set: function set(e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        } });
    }, fix: function fix(t) {
      return t[_.expando] ? t : new _.Event(t);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Tt() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Tt() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
        }, _default: function _default(t) {
          return D(t.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        } } } }, _.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, _.Event = function (t, e) {
    if (!(this instanceof _.Event)) return new _.Event(t, e);t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0;
  }, _.Event.prototype = { constructor: _.Event, isDefaultPrevented: xt, isPropagationStopped: xt, isImmediatePropagationStopped: xt, isSimulated: !1, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    } }, _.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(t) {
      var e = t.button;return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    } }, _.event.addProp), _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
    _.event.special[t] = { delegateType: e, bindType: e, handle: function handle(t) {
        var n,
            i = t.relatedTarget,
            o = t.handleObj;return i && (i === this || _.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
      } };
  }), _.fn.extend({ on: function on(t, e, n, i) {
      return St(this, t, e, n, i);
    }, one: function one(t, e, n, i) {
      return St(this, t, e, n, i, 1);
    }, off: function off(t, e, n) {
      var i, o;if (t && t.preventDefault && t.handleObj) return i = t.handleObj, _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (o in t) {
          this.off(o, e, t[o]);
        }return this;
      }return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each(function () {
        _.event.remove(this, t, n, e);
      });
    } });var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      kt = /<script|<style|<link/i,
      At = /checked\s*(?:[^=]|=\s*.checked.)/i,
      It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Nt(t, e) {
    return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t;
  }function Pt(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }function Ot(t) {
    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
  }function Lt(t, e) {
    var n, i, o, r, s, a, l, c;if (1 === e.nodeType) {
      if (Y.hasData(t) && (r = Y.access(t), s = Y.set(e, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[o].length; n < i; n++) {
          _.event.add(e, o, c[o][n]);
        }
      }G.hasData(t) && (a = G.access(t), l = _.extend({}, a), G.set(e, l));
    }
  }function jt(t, e, n, i) {
    e = s.apply([], e);var o,
        r,
        a,
        l,
        c,
        u,
        d = 0,
        h = t.length,
        f = h - 1,
        g = e[0],
        v = m(g);if (v || h > 1 && "string" == typeof g && !p.checkClone && At.test(g)) return t.each(function (o) {
      var r = t.eq(o);v && (e[0] = g.call(this, o, r.html())), jt(r, e, n, i);
    });if (h && (r = (o = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (a = _.map(ft(o, "script"), Pt)).length; d < h; d++) {
        c = o, d !== f && (c = _.clone(c, !0, !0), l && _.merge(a, ft(c, "script"))), n.call(t[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, _.map(a, Ot), d = 0; d < l; d++) {
        c = a[d], dt.test(c.type || "") && !Y.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : y(c.textContent.replace(It, ""), u, c));
      }
    }return t;
  }function Mt(t, e, n) {
    for (var i, o = e ? _.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || _.cleanData(ft(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
    }return t;
  }_.extend({ htmlPrefilter: function htmlPrefilter(t) {
      return t.replace(Dt, "<$1></$2>");
    }, clone: function clone(t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = t.cloneNode(!0),
          d = _.contains(t.ownerDocument, t);if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t))) for (s = ft(u), i = 0, o = (r = ft(t)).length; i < o; i++) {
        a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (e) if (n) for (r = r || ft(t), s = s || ft(u), i = 0, o = r.length; i < o; i++) {
        Lt(r[i], s[i]);
      } else Lt(t, u);return (s = ft(u, "script")).length > 0 && pt(s, !d && ft(t, "script")), u;
    }, cleanData: function cleanData(t) {
      for (var e, n, i, o = _.event.special, r = 0; void 0 !== (n = t[r]); r++) {
        if (K(n)) {
          if (e = n[Y.expando]) {
            if (e.events) for (i in e.events) {
              o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
            }n[Y.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      }
    } }), _.fn.extend({ detach: function detach(t) {
      return Mt(this, t, !0);
    }, remove: function remove(t) {
      return Mt(this, t);
    }, text: function text(t) {
      return W(this, function (t) {
        return void 0 === t ? _.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append: function append() {
      return jt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t);
      });
    }, prepend: function prepend() {
      return jt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = Nt(this, t);e.insertBefore(t, e.firstChild);
        }
      });
    }, before: function before() {
      return jt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after: function after() {
      return jt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (_.cleanData(ft(t, !1)), t.textContent = "");
      }return this;
    }, clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return _.clone(this, t, e);
      });
    }, html: function html(t) {
      return W(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === t && 1 === e.nodeType) return e.innerHTML;if ("string" == typeof t && !kt.test(t) && !ht[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = _.htmlPrefilter(t);try {
            for (; n < i; n++) {
              1 === (e = this[n] || {}).nodeType && (_.cleanData(ft(e, !1)), e.innerHTML = t);
            }e = 0;
          } catch (t) {}
        }e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function replaceWith() {
      var t = [];return jt(this, arguments, function (e) {
        var n = this.parentNode;_.inArray(this, t) < 0 && (_.cleanData(ft(this)), n && n.replaceChild(e, this));
      }, t);
    } }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
    _.fn[t] = function (t) {
      for (var n, i = [], o = _(t), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), _(o[s])[e](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var Ht = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Ft = function Ft(e) {
    var n = e.ownerDocument.defaultView;return n && n.opener || (n = t), n.getComputedStyle(e);
  },
      zt = new RegExp(nt.join("|"), "i");function qt(t, e, n) {
    var i,
        o,
        r,
        s,
        a = t.style;return (n = n || Ft(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || _.contains(t.ownerDocument, t) || (s = _.style(t, e)), !p.pixelBoxStyles() && Ht.test(s) && zt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function Bt(t, e) {
    return { get: function get() {
        if (!t()) return (this.get = e).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function e() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(c).appendChild(u);var e = t.getComputedStyle(u);o = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", bt.removeChild(c), u = null;
      }
    }function n(t) {
      return Math.round(parseFloat(t));
    }var o,
        r,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return e(), a;
      }, pixelPosition: function pixelPosition() {
        return e(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return e(), l;
      }, scrollboxSize: function scrollboxSize() {
        return e(), s;
      } }));
  }();var Wt = /^(none|table(?!-c[ea]).+)/,
      Rt = /^--/,
      Ut = { position: "absolute", visibility: "hidden", display: "block" },
      $t = { letterSpacing: "0", fontWeight: "400" },
      Vt = ["Webkit", "Moz", "ms"],
      Kt = i.createElement("div").style;function Qt(t) {
    var e = _.cssProps[t];return e || (e = _.cssProps[t] = function (t) {
      if (t in Kt) return t;for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;) {
        if ((t = Vt[n] + e) in Kt) return t;
      }
    }(t) || t), e;
  }function Yt(t, e, n) {
    var i = et.exec(e);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }function Gt(t, e, n, i, o, r) {
    var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += _.css(t, n + nt[s], !0, o)), i ? ("content" === n && (l -= _.css(t, "padding" + nt[s], !0, o)), "margin" !== n && (l -= _.css(t, "border" + nt[s] + "Width", !0, o))) : (l += _.css(t, "padding" + nt[s], !0, o), "padding" !== n ? l += _.css(t, "border" + nt[s] + "Width", !0, o) : a += _.css(t, "border" + nt[s] + "Width", !0, o));
    }return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l;
  }function Xt(t, e, n) {
    var i = Ft(t),
        o = qt(t, e, i),
        r = "border-box" === _.css(t, "boxSizing", !1, i),
        s = r;if (Ht.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (p.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === _.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Gt(t, e, n || (r ? "border" : "content"), s, i, o) + "px";
  }function Zt(t, e, n, i, o) {
    return new Zt.prototype.init(t, e, n, i, o);
  }_.extend({ cssHooks: { opacity: { get: function get(t, e) {
          if (e) {
            var n = qt(t, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            r,
            s,
            a = V(e),
            l = Rt.test(e),
            c = t.style;if (l || (e = Qt(a)), s = _.cssHooks[e] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = et.exec(n)) && o[1] && (n = rt(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
      }
    }, css: function css(t, e, n, i) {
      var o,
          r,
          s,
          a = V(e);return Rt.test(e) || (e = Qt(a)), (s = _.cssHooks[e] || _.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = qt(t, e, i)), "normal" === o && e in $t && (o = $t[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), _.each(["height", "width"], function (t, e) {
    _.cssHooks[e] = { get: function get(t, n, i) {
        if (n) return !Wt.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, e, i) : ot(t, Ut, function () {
          return Xt(t, e, i);
        });
      }, set: function set(t, n, i) {
        var o,
            r = Ft(t),
            s = "border-box" === _.css(t, "boxSizing", !1, r),
            a = i && Gt(t, e, i, s, r);return s && p.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Gt(t, e, "border", !1, r) - .5)), a && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = _.css(t, e)), Yt(0, n, a);
      } };
  }), _.cssHooks.marginLeft = Bt(p.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, { marginLeft: 0 }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), _.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
    _.cssHooks[t + e] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[t + nt[i] + e] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, "margin" !== t && (_.cssHooks[t + e].set = Yt);
  }), _.fn.extend({ css: function css(t, e) {
      return W(this, function (t, e, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(e)) {
          for (i = Ft(t), o = e.length; s < o; s++) {
            r[e[s]] = _.css(t, e[s], !1, i);
          }return r;
        }return void 0 !== n ? _.style(t, e, n) : _.css(t, e);
      }, t, e, arguments.length > 1);
    } }), _.Tween = Zt, Zt.prototype = { constructor: Zt, init: function init(t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var t = Zt.propHooks[this.prop];return t && t.get ? t.get(this) : Zt.propHooks._default.get(this);
    }, run: function run(t) {
      var e,
          n = Zt.propHooks[this.prop];return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this;
    } }, Zt.prototype.init.prototype = Zt.prototype, Zt.propHooks = { _default: { get: function get(t) {
        var e;return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      }, set: function set(t) {
        _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[_.cssProps[t.prop]] && !_.cssHooks[t.prop] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit);
      } } }, Zt.propHooks.scrollTop = Zt.propHooks.scrollLeft = { set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    } }, _.easing = { linear: function linear(t) {
      return t;
    }, swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default: "swing" }, _.fx = Zt.prototype.init, _.fx.step = {};var Jt,
      te,
      ee = /^(?:toggle|show|hide)$/,
      ne = /queueHooks$/;function ie() {
    te && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, _.fx.interval), _.fx.tick());
  }function oe() {
    return t.setTimeout(function () {
      Jt = void 0;
    }), Jt = Date.now();
  }function re(t, e) {
    var n,
        i = 0,
        o = { height: t };for (e = e ? 1 : 0; i < 4; i += 2 - e) {
      o["margin" + (n = nt[i])] = o["padding" + n] = t;
    }return e && (o.opacity = o.width = t), o;
  }function se(t, e, n) {
    for (var i, o = (ae.tweeners[e] || []).concat(ae.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, e, t)) return i;
    }
  }function ae(t, e, n) {
    var i,
        o,
        r = 0,
        s = ae.prefilters.length,
        a = _.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var e = Jt || oe(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
        c.tweens[r].run(i);
      }return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
    },
        c = a.promise({ elem: t, props: _.extend({}, e), opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n), originalProperties: e, originalOptions: n, startTime: Jt || oe(), duration: n.duration, tweens: [], createTween: function createTween(e, n) {
        var i = _.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(e) {
        var n = 0,
            i = e ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
      } }),
        u = c.props;for (!function (t, e) {
      var n, i, o, r, s;for (n in t) {
        if (o = e[i = V(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = _.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete t[i], r) {
          (n in t) || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
      }
    }(u, c.opts.specialEasing); r < s; r++) {
      if (i = ae.prefilters[r].call(c, t, u, c.opts)) return m(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return _.map(u, se, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c;
  }_.Animation = _.extend(ae, { tweeners: { "*": [function (t, e) {
        var n = this.createTween(t, e);return rt(n.elem, t, et.exec(e), n), n;
      }] }, tweener: function tweener(t, e) {
      m(t) ? (e = t, t = ["*"]) : t = t.match(j);for (var n, i = 0, o = t.length; i < o; i++) {
        n = t[i], ae.tweeners[n] = ae.tweeners[n] || [], ae.tweeners[n].unshift(e);
      }
    }, prefilters: [function (t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = "width" in e || "height" in e,
          h = this,
          f = {},
          p = t.style,
          m = t.nodeType && it(t),
          g = Y.get(t, "fxshow");for (i in n.queue || (null == (s = _._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, _.queue(t, "fx").length || s.empty.fire();
        });
      })), e) {
        if (o = e[i], ee.test(o)) {
          if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
          }f[i] = g && g[i] || _.style(t, i);
        }
      }if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(f)) for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Y.get(t, "display")), "none" === (u = _.css(t, "display")) && (c ? u = c : (lt([t], !0), c = t.style.display || c, u = _.css(t, "display"), lt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(t, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, f) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(t, "fxshow", { display: c }), r && (g.hidden = !m), m && lt([t], !0), h.done(function () {
          for (i in m || lt([t]), Y.remove(t, "fxshow"), f) {
            _.style(t, i, f[i]);
          }
        })), l = se(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(t, e) {
      e ? ae.prefilters.unshift(t) : ae.prefilters.push(t);
    } }), _.speed = function (t, e, n) {
    var i = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? _.extend({}, t) : { complete: n || !n && e || m(t) && t, duration: t, easing: n && e || e && !m(e) && e };return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
    }, i;
  }, _.fn.extend({ fadeTo: function fadeTo(t, e, n, i) {
      return this.filter(it).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
    }, animate: function animate(t, e, n, i) {
      var o = _.isEmptyObject(t),
          r = _.speed(e, n, i),
          s = function s() {
        var e = ae(this, _.extend({}, t), r);(o || Y.get(this, "finish")) && e.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function stop(t, e, n) {
      var i = function i(t) {
        var e = t.stop;delete t.stop, e(n);
      };return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
        var e = !0,
            o = null != t && t + "queueHooks",
            r = _.timers,
            s = Y.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && ne.test(o) && i(s[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
        }!e && n || _.dequeue(this, t);
      });
    }, finish: function finish(t) {
      return !1 !== t && (t = t || "fx"), this.each(function () {
        var e,
            n = Y.get(this),
            i = n[t + "queue"],
            o = n[t + "queueHooks"],
            r = _.timers,
            s = i ? i.length : 0;for (n.finish = !0, _.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
          r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
        }for (e = 0; e < s; e++) {
          i[e] && i[e].finish && i[e].finish.call(this);
        }delete n.finish;
      });
    } }), _.each(["toggle", "show", "hide"], function (t, e) {
    var n = _.fn[e];_.fn[e] = function (t, i, o) {
      return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(re(e, !0), t, i, o);
    };
  }), _.each({ slideDown: re("show"), slideUp: re("hide"), slideToggle: re("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
    _.fn[t] = function (t, n, i) {
      return this.animate(e, t, n, i);
    };
  }), _.timers = [], _.fx.tick = function () {
    var t,
        e = 0,
        n = _.timers;for (Jt = Date.now(); e < n.length; e++) {
      (t = n[e])() || n[e] !== t || n.splice(e--, 1);
    }n.length || _.fx.stop(), Jt = void 0;
  }, _.fx.timer = function (t) {
    _.timers.push(t), _.fx.start();
  }, _.fx.interval = 13, _.fx.start = function () {
    te || (te = !0, ie());
  }, _.fx.stop = function () {
    te = null;
  }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function (e, n) {
    return e = _.fx && _.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
      var o = t.setTimeout(n, e);i.stop = function () {
        t.clearTimeout(o);
      };
    });
  }, function () {
    var t = i.createElement("input"),
        e = i.createElement("select").appendChild(i.createElement("option"));t.type = "checkbox", p.checkOn = "" !== t.value, p.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", p.radioValue = "t" === t.value;
  }();var le,
      ce = _.expr.attrHandle;_.fn.extend({ attr: function attr(t, e) {
      return W(this, _.attr, t, e, arguments.length > 1);
    }, removeAttr: function removeAttr(t) {
      return this.each(function () {
        _.removeAttr(this, t);
      });
    } }), _.extend({ attr: function attr(t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === r && _.isXMLDoc(t) || (o = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = _.find.attr(t, e)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(t, e) {
          if (!p.radioValue && "radio" === e && D(t, "input")) {
            var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
          }
        } } }, removeAttr: function removeAttr(t, e) {
      var n,
          i = 0,
          o = e && e.match(j);if (o && 1 === t.nodeType) for (; n = o[i++];) {
        t.removeAttribute(n);
      }
    } }), le = { set: function set(t, e, n) {
      return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n;
    } }, _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var n = ce[e] || _.find.attr;ce[e] = function (t, e, i) {
      var o,
          r,
          s = e.toLowerCase();return i || (r = ce[s], ce[s] = o, o = null != n(t, e, i) ? s : null, ce[s] = r), o;
    };
  });var ue = /^(?:input|select|textarea|button)$/i,
      de = /^(?:a|area)$/i;function he(t) {
    return (t.match(j) || []).join(" ");
  }function fe(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }function pe(t) {
    return Array.isArray(t) ? t : "string" == typeof t && t.match(j) || [];
  }_.fn.extend({ prop: function prop(t, e) {
      return W(this, _.prop, t, e, arguments.length > 1);
    }, removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[_.propFix[t] || t];
      });
    } }), _.extend({ prop: function prop(t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(t) || (e = _.propFix[e] || e, o = _.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
    }, propHooks: { tabIndex: { get: function get(t) {
          var e = _.find.attr(t, "tabindex");return e ? parseInt(e, 10) : ue.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (_.propHooks.selected = { get: function get(t) {
      var e = t.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set: function set(t) {
      var e = t.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    } }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _.propFix[this.toLowerCase()] = this;
  }), _.fn.extend({ addClass: function addClass(t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (m(t)) return this.each(function (e) {
        _(this).addClass(t.call(this, e, fe(this)));
      });if ((e = pe(t)).length) for (; n = this[l++];) {
        if (o = fe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
          for (s = 0; r = e[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (a = he(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (m(t)) return this.each(function (e) {
        _(this).removeClass(t.call(this, e, fe(this)));
      });if (!arguments.length) return this.attr("class", "");if ((e = pe(t)).length) for (; n = this[l++];) {
        if (o = fe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
          for (s = 0; r = e[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (a = he(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(t, e) {
      var n = typeof t === "undefined" ? "undefined" : _typeof(t),
          i = "string" === n || Array.isArray(t);return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function (n) {
        _(this).toggleClass(t.call(this, n, fe(this), e), e);
      }) : this.each(function () {
        var e, o, r, s;if (i) for (o = 0, r = _(this), s = pe(t); e = s[o++];) {
          r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
        } else void 0 !== t && "boolean" !== n || ((e = fe(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(t) {
      var e,
          n,
          i = 0;for (e = " " + t + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + he(fe(n)) + " ").indexOf(e) > -1) return !0;
      }return !1;
    } });var me = /\r/g;_.fn.extend({ val: function val(t) {
      var e,
          n,
          i,
          o = this[0];return arguments.length ? (i = m(t), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? t.call(this, n, _(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, function (t) {
          return null == t ? "" : t + "";
        })), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
      })) : o ? (e = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(me, "") : null == n ? "" : n : void 0;
    } }), _.extend({ valHooks: { option: { get: function get(t) {
          var e = _.find.attr(t, "value");return null != e ? e : he(_.text(t));
        } }, select: { get: function get(t) {
          var e,
              n,
              i,
              o = t.options,
              r = t.selectedIndex,
              s = "select-one" === t.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (e = _(n).val(), s) return e;a.push(e);
            }
          }return a;
        }, set: function set(t, e) {
          for (var n, i, o = t.options, r = _.makeArray(e), s = o.length; s--;) {
            ((i = o[s]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (t.selectedIndex = -1), r;
        } } } }), _.each(["radio", "checkbox"], function () {
    _.valHooks[this] = { set: function set(t, e) {
        if (Array.isArray(e)) return t.checked = _.inArray(_(t).val(), e) > -1;
      } }, p.checkOn || (_.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), p.focusin = "onfocusin" in t;var ge = /^(?:focusinfocus|focusoutblur)$/,
      ve = function ve(t) {
    t.stopPropagation();
  };_.extend(_.event, { trigger: function trigger(e, n, o, r) {
      var s,
          a,
          l,
          c,
          u,
          h,
          f,
          p,
          v = [o || i],
          y = d.call(e, "type") ? e.type : e,
          b = d.call(e, "namespace") ? e.namespace.split(".") : [];if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !ge.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : _.makeArray(n, [e]), f = _.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
        if (!r && !f.noBubble && !g(o)) {
          for (c = f.delegateType || y, ge.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t);
        }for (s = 0; (a = v[s++]) && !e.isPropagationStopped();) {
          p = a, e.type = s > 1 ? c : f.bindType || y, (h = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && K(a) && (e.result = h.apply(a, n), !1 === e.result && e.preventDefault());
        }return e.type = y, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !K(o) || u && m(o[y]) && !g(o) && ((l = o[u]) && (o[u] = null), _.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, ve), o[y](), e.isPropagationStopped() && p.removeEventListener(y, ve), _.event.triggered = void 0, l && (o[u] = l)), e.result;
      }
    }, simulate: function simulate(t, e, n) {
      var i = _.extend(new _.Event(), n, { type: t, isSimulated: !0 });_.event.trigger(i, null, e);
    } }), _.fn.extend({ trigger: function trigger(t, e) {
      return this.each(function () {
        _.event.trigger(t, e, this);
      });
    }, triggerHandler: function triggerHandler(t, e) {
      var n = this[0];if (n) return _.event.trigger(t, e, n, !0);
    } }), p.focusin || _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
    var n = function n(t) {
      _.event.simulate(e, t.target, _.event.fix(t));
    };_.event.special[e] = { setup: function setup() {
        var i = this.ownerDocument || this,
            o = Y.access(i, e);o || i.addEventListener(t, n, !0), Y.access(i, e, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = Y.access(i, e) - 1;o ? Y.access(i, e, o) : (i.removeEventListener(t, n, !0), Y.remove(i, e));
      } };
  });var ye = t.location,
      be = Date.now(),
      _e = /\?/;_.parseXML = function (e) {
    var n;if (!e || "string" != typeof e) return null;try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), n;
  };var we = /\[\]$/,
      Ee = /\r?\n/g,
      Ce = /^(?:submit|button|image|reset|file)$/i,
      xe = /^(?:input|select|textarea|keygen)/i;function Te(t, e, n, i) {
    var o;if (Array.isArray(e)) _.each(e, function (e, o) {
      n || we.test(t) ? i(t, o) : Te(t + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? e : "") + "]", o, n, i);
    });else if (n || "object" !== b(e)) i(t, e);else for (o in e) {
      Te(t + "[" + o + "]", e[o], n, i);
    }
  }_.param = function (t, e) {
    var n,
        i = [],
        o = function o(t, e) {
      var n = m(e) ? e() : e;i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, function () {
      o(this.name, this.value);
    });else for (n in t) {
      Te(n, t[n], e, o);
    }return i.join("&");
  }, _.fn.extend({ serialize: function serialize() {
      return _.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var t = _.prop(this, "elements");return t ? _.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;return this.name && !_(this).is(":disabled") && xe.test(this.nodeName) && !Ce.test(t) && (this.checked || !ct.test(t));
      }).map(function (t, e) {
        var n = _(this).val();return null == n ? null : Array.isArray(n) ? _.map(n, function (t) {
          return { name: e.name, value: t.replace(Ee, "\r\n") };
        }) : { name: e.name, value: n.replace(Ee, "\r\n") };
      }).get();
    } });var Se = /%20/g,
      De = /#.*$/,
      ke = /([?&])_=[^&]*/,
      Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ie = /^(?:GET|HEAD)$/,
      Ne = /^\/\//,
      Pe = {},
      Oe = {},
      Le = "*/".concat("*"),
      je = i.createElement("a");function Me(t) {
    return function (e, n) {
      "string" != typeof e && (n = e, e = "*");var i,
          o = 0,
          r = e.toLowerCase().match(j) || [];if (m(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
      }
    };
  }function He(t, e, n, i) {
    var o = {},
        r = t === Oe;function s(a) {
      var l;return o[a] = !0, _.each(t[a] || [], function (t, a) {
        var c = a(e, n, i);return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(e.dataTypes[0]) || !o["*"] && s("*");
  }function Fe(t, e) {
    var n,
        i,
        o = _.ajaxSettings.flatOptions || {};for (n in e) {
      void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    }return i && _.extend(!0, t, i), t;
  }je.href = ye.href, _.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ye.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Le, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, e) {
      return e ? Fe(Fe(t, _.ajaxSettings), e) : Fe(_.ajaxSettings, t);
    }, ajaxPrefilter: Me(Pe), ajaxTransport: Me(Oe), ajax: function ajax(e, n) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (n = e, e = void 0), n = n || {};var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          p = _.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          v = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = p.statusCode || {},
          w = {},
          E = {},
          C = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(t) {
          var e;if (u) {
            if (!a) for (a = {}; e = Ae.exec(s);) {
              a[e[1].toLowerCase()] = e[2];
            }e = a[t.toLowerCase()];
          }return null == e ? null : e;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(t, e) {
          return null == u && (t = E[t.toLowerCase()] = E[t.toLowerCase()] || t, w[t] = e), this;
        }, overrideMimeType: function overrideMimeType(t) {
          return null == u && (p.mimeType = t), this;
        }, statusCode: function statusCode(t) {
          var e;if (t) if (u) x.always(t[x.status]);else for (e in t) {
            b[e] = [b[e], t[e]];
          }return this;
        }, abort: function abort(t) {
          var e = t || C;return o && o.abort(e), T(0, e), this;
        } };if (v.promise(x), p.url = ((e || p.url || ye.href) + "").replace(Ne, ye.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = je.protocol + "//" + je.host != c.protocol + "//" + c.host;
        } catch (t) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), He(Pe, p, n, x), u) return x;for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), r = p.url.replace(De, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Se, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (_e.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(ke, "$1"), f = (_e.test(r) ? "&" : "?") + "_=" + be++ + f), p.url = r + f), p.ifModified && (_.lastModified[r] && x.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && x.setRequestHeader("If-None-Match", _.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        x.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || u)) return x.abort();if (C = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), o = He(Oe, p, n, x)) {
        if (x.readyState = 1, d && g.trigger("ajaxSend", [x, p]), u) return x;p.async && p.timeout > 0 && (l = t.setTimeout(function () {
          x.abort("timeout");
        }, p.timeout));try {
          u = !1, o.send(w, T);
        } catch (t) {
          if (u) throw t;T(-1, t);
        }
      } else T(-1, "No Transport");function T(e, n, i, a) {
        var c,
            h,
            f,
            w,
            E,
            C = n;u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = function (t, e, n) {
          for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          }if (i) for (o in a) {
            if (a[o] && a[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                r = o;break;
              }s || (s = o);
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, x, i)), w = function (t, e, n, i) {
          var o,
              r,
              s,
              a,
              l,
              c = {},
              u = t.dataTypes.slice();if (u[1]) for (s in t.converters) {
            c[s.toLowerCase()] = t.converters[s];
          }for (r = u.shift(); r;) {
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && t.throws) e = s(e);else try {
                e = s(e);
              } catch (t) {
                return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: e };
        }(p, w, x, c), c ? (p.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (_.lastModified[r] = E), (E = x.getResponseHeader("etag")) && (_.etag[r] = E)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, h = w.data, c = !(f = w.error))) : (f = C, !e && C || (C = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (n || C) + "", c ? v.resolveWith(m, [h, C, x]) : v.rejectWith(m, [x, C, f]), x.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : f]), y.fireWith(m, [x, C]), d && (g.trigger("ajaxComplete", [x, p]), --_.active || _.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(t, e, n) {
      return _.get(t, e, n, "json");
    }, getScript: function getScript(t, e) {
      return _.get(t, void 0, e, "script");
    } }), _.each(["get", "post"], function (t, e) {
    _[e] = function (t, n, i, o) {
      return m(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({ url: t, type: e, dataType: o, data: n, success: i }, _.isPlainObject(t) && t));
    };
  }), _._evalUrl = function (t) {
    return _.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, _.fn.extend({ wrapAll: function wrapAll(t) {
      var e;return this[0] && (m(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }return t;
      }).append(this)), this;
    }, wrapInner: function wrapInner(t) {
      return m(t) ? this.each(function (e) {
        _(this).wrapInner(t.call(this, e));
      }) : this.each(function () {
        var e = _(this),
            n = e.contents();n.length ? n.wrapAll(t) : e.append(t);
      });
    }, wrap: function wrap(t) {
      var e = m(t);return this.each(function (n) {
        _(this).wrapAll(e ? t.call(this, n) : t);
      });
    }, unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        _(this).replaceWith(this.childNodes);
      }), this;
    } }), _.expr.pseudos.hidden = function (t) {
    return !_.expr.pseudos.visible(t);
  }, _.expr.pseudos.visible = function (t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }, _.ajaxSettings.xhr = function () {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  };var ze = { 0: 200, 1223: 204 },
      qe = _.ajaxSettings.xhr();p.cors = !!qe && "withCredentials" in qe, p.ajax = qe = !!qe, _.ajaxTransport(function (e) {
    var _n, i;if (p.cors || qe && !e.crossDomain) return { send: function send(o, r) {
        var s,
            a = e.xhr();if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
          a[s] = e.xhrFields[s];
        }for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          a.setRequestHeader(s, o[s]);
        }_n = function n(t) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && t.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(e.hasContent && e.data || null);
        } catch (t) {
          if (_n) throw t;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), _.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(t) {
        return _.globalEval(t), t;
      } } }), _.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), _.ajaxTransport("script", function (t) {
    var e, _n2;if (t.crossDomain) return { send: function send(o, r) {
        e = _("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", _n2 = function n(t) {
          e.remove(), _n2 = null, t && r("error" === t.type ? 404 : 200, t.type);
        }), i.head.appendChild(e[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Be,
      We = [],
      Re = /(=)\?(?=&|$)|\?\?/;_.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var t = We.pop() || _.expando + "_" + be++;return this[t] = !0, t;
    } }), _.ajaxPrefilter("json jsonp", function (e, n, i) {
    var o,
        r,
        s,
        a = !1 !== e.jsonp && (Re.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + o) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
      return s || _.error(o + " was not called"), s[0];
    }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? _(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, We.push(o)), s && m(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Be = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Be.childNodes.length), _.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), r = k.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = yt([t], e, s), s && s.length && _(s).remove(), _.merge([], r.childNodes)));var o, r, s;
  }, _.fn.load = function (t, e, n) {
    var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");return a > -1 && (i = he(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = "POST"), s.length > 0 && _.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function (t) {
      r = arguments, s.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t);
    }).always(n && function (t, e) {
      s.each(function () {
        n.apply(this, r || [t.responseText, e, t]);
      });
    }), this;
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    _.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), _.expr.pseudos.animated = function (t) {
    return _.grep(_.timers, function (e) {
      return t === e.elem;
    }).length;
  }, _.offset = { setOffset: function setOffset(t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c = _.css(t, "position"),
          u = _(t),
          d = {};"static" === c && (t.style.position = "relative"), a = u.offset(), r = _.css(t, "top"), l = _.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), m(e) && (e = e.call(t, n, _.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d);
    } }, _.fn.extend({ offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        _.offset.setOffset(this, t, e);
      });var e,
          n,
          i = this[0];return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var t,
            e,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === _.css(i, "position")) e = i.getBoundingClientRect();else {
          for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) {
            t = t.parentNode;
          }t && t !== i && 1 === t.nodeType && ((o = _(t).offset()).top += _.css(t, "borderTopWidth", !0), o.left += _.css(t, "borderLeftWidth", !0));
        }return { top: e.top - o.top - _.css(i, "marginTop", !0), left: e.left - o.left - _.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === _.css(t, "position");) {
          t = t.offsetParent;
        }return t || bt;
      });
    } }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
    var n = "pageYOffset" === e;_.fn[t] = function (i) {
      return W(this, function (t, i, o) {
        var r;if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
      }, t, i, arguments.length);
    };
  }), _.each(["top", "left"], function (t, e) {
    _.cssHooks[e] = Bt(p.pixelPosition, function (t, n) {
      if (n) return n = qt(t, e), Ht.test(n) ? _(t).position()[e] + "px" : n;
    });
  }), _.each({ Height: "height", Width: "width" }, function (t, e) {
    _.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
      _.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");return W(this, function (e, n, o) {
          var r;return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? _.css(e, n, a) : _.style(e, n, o, a);
        }, e, s ? o : void 0, s);
      };
    });
  }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
    _.fn[e] = function (t, n) {
      return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
    };
  }), _.fn.extend({ hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    } }), _.fn.extend({ bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    }, unbind: function unbind(t, e) {
      return this.off(t, null, e);
    }, delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    }, undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    } }), _.proxy = function (t, e) {
    var n, i, o;if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = r.call(arguments, 2), (o = function o() {
      return t.apply(e || this, i.concat(r.call(arguments)));
    }).guid = t.guid = t.guid || _.guid++, o;
  }, _.holdReady = function (t) {
    t ? _.readyWait++ : _.ready(!0);
  }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = D, _.isFunction = m, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function (t) {
    var e = _.type(t);return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _;
  });var Ue = t.jQuery,
      $e = t.$;return _.noConflict = function (e) {
    return t.$ === _ && (t.$ = $e), e && t.jQuery === _ && (t.jQuery = Ue), _;
  }, e || (t.jQuery = t.$ = _), _;
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e();
}(this, function () {
  "use strict";
  for (var t = "undefined" != typeof window && "undefined" != typeof document, e = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < e.length; i += 1) {
    if (t && navigator.userAgent.indexOf(e[i]) >= 0) {
      n = 1;break;
    }
  }var o = t && window.Promise ? function (t) {
    var e = !1;return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, n));
    };
  };function r(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }function s(t, e) {
    if (1 !== t.nodeType) return [];var n = getComputedStyle(t, null);return e ? n[e] : n;
  }function a(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }function l(t) {
    if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
        return t.ownerDocument.body;case "#document":
        return t.body;}var e = s(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;return (/(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t))
    );
  }var c = t && !(!window.MSInputMethodContext || !document.documentMode),
      u = t && /MSIE 10/.test(navigator.userAgent);function d(t) {
    return 11 === t ? c : 10 === t ? u : c || u;
  }function h(t) {
    if (!t) return document.documentElement;for (var e = d(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }function f(t) {
    return null !== t.parentNode ? f(t.parentNode) : t;
  }function p(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var s,
        a,
        l = r.commonAncestorContainer;if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;var c = f(t);return c.host ? p(c.host, e) : p(t, f(e).host);
  }function m(t) {
    var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;return (t.ownerDocument.scrollingElement || i)[e];
    }return t[e];
  }function g(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }function v(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], d(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
  }function y() {
    var t = document.body,
        e = document.documentElement,
        n = d(10) && getComputedStyle(e);return { height: v("Height", t, e, n), width: v("Width", t, e, n) };
  }var b = function b(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      _ = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      w = function w(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  },
      E = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }return t;
  };function C(t) {
    return E({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }function x(t) {
    var e = {};try {
      if (d(10)) {
        e = t.getBoundingClientRect();var n = m(t, "top"),
            i = m(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
        r = "HTML" === t.nodeName ? y() : {},
        a = r.width || t.clientWidth || o.right - o.left,
        l = r.height || t.clientHeight || o.bottom - o.top,
        c = t.offsetWidth - a,
        u = t.offsetHeight - l;if (c || u) {
      var h = s(t);c -= g(h, "x"), u -= g(h, "y"), o.width -= c, o.height -= u;
    }return C(o);
  }function T(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = d(10),
        o = "HTML" === e.nodeName,
        r = x(t),
        a = x(e),
        c = l(t),
        u = s(e),
        h = parseFloat(u.borderTopWidth, 10),
        f = parseFloat(u.borderLeftWidth, 10);n && "HTML" === e.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = C({ top: r.top - a.top - h, left: r.left - a.left - f, width: r.width, height: r.height });if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(e, "top"),
          o = m(e, "left"),
          r = n ? -1 : 1;return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
    }(p, e)), p;
  }function S(t) {
    if (!t || !t.parentElement || d()) return document.documentElement;for (var e = t.parentElement; e && "none" === s(e, "transform");) {
      e = e.parentElement;
    }return e || document.documentElement;
  }function D(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = { top: 0, left: 0 },
        c = o ? S(t) : p(t, e);if ("viewport" === i) r = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = T(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : m(n),
          a = e ? 0 : m(n, "left");return C({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r });
    }(c, o);else {
      var u = void 0;"scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === i ? t.ownerDocument.documentElement : i;var d = T(u, c, o);if ("HTML" !== u.nodeName || function t(e) {
        var n = e.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === s(e, "position") || t(a(e)));
      }(c)) r = d;else {
        var h = y(),
            f = h.height,
            g = h.width;r.top += d.top - d.marginTop, r.bottom = f + d.top, r.left += d.left - d.marginLeft, r.right = g + d.left;
      }
    }return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r;
  }function k(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var s = D(n, i, r, o),
        a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (t) {
      return E({ key: t }, a[t], { area: (e = a[t], e.width * e.height) });var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          i = t.height;return e >= n.clientWidth && i >= n.clientHeight;
    }),
        u = c.length > 0 ? c[0].key : l[0].key,
        d = t.split("-")[1];return u + (d ? "-" + d : "");
  }function A(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return T(n, i ? S(e) : p(e, n), i);
  }function I(t) {
    var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }function N(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }function P(t, e, n) {
    n = n.split("-")[0];var i = I(t),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[N(a)], o;
  }function O(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }function L(t, e, n) {
    return (void 0 === n ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });var i = O(t, function (t) {
        return t[e] === n;
      });return t.indexOf(i);
    }(t, "name", n))).forEach(function (t) {
      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = t.function || t.fn;t.enabled && r(n) && (e.offsets.popper = C(e.offsets.popper), e.offsets.reference = C(e.offsets.reference), e = n(e, t));
    }), e;
  }function j(t, e) {
    return t.some(function (t) {
      var n = t.name;return t.enabled && n === e;
    });
  }function M(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var o = e[i],
          r = o ? "" + o + n : t;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function H(t) {
    var e = t.ownerDocument;return e ? e.defaultView : window;
  }function F(t, e, n, i) {
    n.updateBound = i, H(t).addEventListener("resize", n.updateBound, { passive: !0 });var o = l(t);return function t(e, n, i, o) {
      var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;s.addEventListener(n, i, { passive: !0 }), r || t(l(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }function z() {
    var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, H(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }function q(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }function B(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(e[n]) && (i = "px"), t.style[n] = e[n] + i;
    });
  }function W(t, e, n) {
    var i = O(t, function (t) {
      return t.name === e;
    }),
        o = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });if (!o) {
      var r = "`" + e + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }return o;
  }var R = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = R.slice(3);function $(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(t),
        i = U.slice(n + 1).concat(U.slice(0, n));return e ? i.reverse() : i;
  }var V = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function K(t, e, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        a = s.indexOf(O(s, function (t) {
      return -1 !== t.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (t, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];if (!r) return t;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return C(a)[e] / 100 * r;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;return r;
        }(t, o, e, n);
      });
    })).forEach(function (t, e) {
      t.forEach(function (n, i) {
        q(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
      });
    }), o;
  }var Q = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];if (i) {
            var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: w({}, l, r[l]), end: w({}, l, r[l] + r[c] - s[c]) };t.offsets.popper = E({}, s, u[i]);
          }return t;
        } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;return l = q(+n) ? [+n, 0] : K(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, e) {
          var n = e.boundariesElement || h(t.instance.popper);t.instance.reference === n && (n = h(n));var i = M("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];o.top = "", o.left = "", o[i] = "";var l = D(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);o.top = r, o.left = s, o[i] = a, e.boundaries = l;var c = e.priority,
              u = t.offsets.popper,
              d = { primary: function primary(t) {
              var n = u[t];return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), w({}, t, n);
            }, secondary: function secondary(t) {
              var n = "right" === t ? "left" : "top",
                  i = u[n];return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), w({}, n, i);
            } };return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";u = E({}, u, d[e](t));
          }), t.offsets.popper = u, t;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
          var n;if (!W(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              l = r.reference,
              c = -1 !== ["left", "right"].indexOf(o),
              u = c ? "height" : "width",
              d = c ? "Top" : "Left",
              h = d.toLowerCase(),
              f = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = I(i)[u];l[p] - m < a[h] && (t.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (t.offsets.popper[h] += l[h] + m - a[p]), t.offsets.popper = C(t.offsets.popper);var g = l[h] + l[u] / 2 - m / 2,
              v = s(t.instance.popper),
              y = parseFloat(v["margin" + d], 10),
              b = parseFloat(v["border" + d + "Width"], 10),
              _ = g - t.offsets.popper[h] - y - b;return _ = Math.max(Math.min(a[u] - m, _), 0), t.arrowElement = i, t.offsets.arrow = (w(n = {}, h, Math.round(_)), w(n, f, ""), n), t;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(t, e) {
          if (j(t.instance.modifiers, "inner")) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var n = D(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
              i = t.placement.split("-")[0],
              o = N(i),
              r = t.placement.split("-")[1] || "",
              s = [];switch (e.behavior) {case V.FLIP:
              s = [i, o];break;case V.CLOCKWISE:
              s = $(i);break;case V.COUNTERCLOCKWISE:
              s = $(i, !0);break;default:
              s = e.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return t;i = t.placement.split("-")[0], o = N(i);var c = t.offsets.popper,
                u = t.offsets.reference,
                d = Math.floor,
                h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                f = d(c.left) < d(n.left),
                p = d(c.right) > d(n.right),
                m = d(c.top) < d(n.top),
                g = d(c.bottom) > d(n.bottom),
                v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!e.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g);(h || v || b) && (t.flipped = !0, (h || v) && (i = s[l + 1]), b && (r = function (t) {
              return "end" === t ? "start" : "start" === t ? "end" : t;
            }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = E({}, t.offsets.popper, P(t.instance.popper, t.offsets.reference, t.placement)), t = L(t.instance.modifiers, t, "flip"));
          }), t;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = N(e), t.offsets.popper = C(o), t;
        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
          if (!W(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
              n = O(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }return t;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = O(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== r ? r : e.gpuAcceleration,
              a = x(h(t.instance.popper)),
              l = { position: o.position },
              c = { left: Math.floor(o.left), top: Math.round(o.top), bottom: Math.round(o.bottom), right: Math.floor(o.right) },
              u = "bottom" === n ? "top" : "bottom",
              d = "right" === i ? "left" : "right",
              f = M("transform"),
              p = void 0,
              m = void 0;if (m = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === d ? -a.width + c.right : c.left, s && f) l[f] = "translate3d(" + p + "px, " + m + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";else {
            var g = "bottom" === u ? -1 : 1,
                v = "right" === d ? -1 : 1;l[u] = m * g, l[d] = p * v, l.willChange = u + ", " + d;
          }var y = { "x-placement": t.placement };return t.attributes = E({}, y, t.attributes), t.styles = E({}, l, t.styles), t.arrowStyles = E({}, t.offsets.arrow, t.arrowStyles), t;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
          var e, n;return B(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && B(t.arrowElement, t.arrowStyles), t;
        }, onLoad: function onLoad(t, e, n, i, o) {
          var r = A(o, e, t, n.positionFixed),
              s = k(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", s), B(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      Y = function () {
    function t(e, n) {
      var i = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = o(this.update.bind(this)), this.options = E({}, t.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, t.Defaults.modifiers, s.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = E({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return E({ name: t }, i.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return _(t, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = k(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = P(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = L(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return z.call(this);
      } }]), t;
  }();return Y.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Y.placements = R, Y.Defaults = Q, Y;
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  }function s(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      }))), i.forEach(function (e) {
        r(t, e, n[e]);
      });
    }return t;
  }e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;var a = function (t) {
    var e = "transitionend";function n(e) {
      var n = this,
          o = !1;return t(this).one(i.TRANSITION_END, function () {
        o = !0;
      }), setTimeout(function () {
        o || i.triggerTransitionEnd(n);
      }, e), this;
    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function getSelectorFromElement(e) {
        var n = e.getAttribute("data-target");n && "#" !== n || (n = e.getAttribute("href") || "");try {
          return t(document).find(n).length > 0 ? n : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
        if (!e) return 0;var n = t(e).css("transition-duration");return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var o in n) {
          if (Object.prototype.hasOwnProperty.call(n, o)) {
            var r = n[o],
                s = e[o],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".');
          }
        }var l;
      } };return t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      } }, i;
  }(e),
      l = function (t) {
    var e = t.fn.alert,
        n = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        i = "alert",
        r = "fade",
        s = "show",
        l = function () {
      function e(t) {
        this._element = t;
      }var l = e.prototype;return l.close = function (t) {
        t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, l.dispose = function () {
        t.removeData(this._element, "bs.alert"), this._element = null;
      }, l._getRootElement = function (e) {
        var n = a.getSelectorFromElement(e),
            o = !1;return n && (o = t(n)[0]), o || (o = t(e).closest("." + i)[0]), o;
      }, l._triggerCloseEvent = function (e) {
        var i = t.Event(n.CLOSE);return t(e).trigger(i), i;
      }, l._removeElement = function (e) {
        var n = this;if (t(e).removeClass(s), t(e).hasClass(r)) {
          var i = a.getTransitionDurationFromElement(e);t(e).one(a.TRANSITION_END, function (t) {
            return n._destroyElement(e, t);
          }).emulateTransitionEnd(i);
        } else this._destroyElement(e);
      }, l._destroyElement = function (e) {
        t(e).detach().trigger(n.CLOSED).remove();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data("bs.alert");o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this);
        });
      }, e._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), e;
    }();return t(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())), t.fn.alert = l._jQueryInterface, t.fn.alert.Constructor = l, t.fn.alert.noConflict = function () {
      return t.fn.alert = e, l._jQueryInterface;
    }, l;
  }(e),
      c = function (t) {
    var e = "button",
        n = t.fn[e],
        i = "active",
        r = "btn",
        s = "focus",
        a = '[data-toggle^="button"]',
        l = '[data-toggle="buttons"]',
        c = "input",
        u = ".active",
        d = ".btn",
        h = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        f = function () {
      function e(t) {
        this._element = t;
      }var n = e.prototype;return n.toggle = function () {
        var e = !0,
            n = !0,
            o = t(this._element).closest(l)[0];if (o) {
          var r = t(this._element).find(c)[0];if (r) {
            if ("radio" === r.type) if (r.checked && t(this._element).hasClass(i)) e = !1;else {
              var s = t(o).find(u)[0];s && t(s).removeClass(i);
            }if (e) {
              if (r.hasAttribute("disabled") || o.hasAttribute("disabled") || r.classList.contains("disabled") || o.classList.contains("disabled")) return;r.checked = !t(this._element).hasClass(i), t(r).trigger("change");
            }r.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i)), e && t(this._element).toggleClass(i);
      }, n.dispose = function () {
        t.removeData(this._element, "bs.button"), this._element = null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data("bs.button");i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), e;
    }();return t(document).on(h.CLICK_DATA_API, a, function (e) {
      e.preventDefault();var n = e.target;t(n).hasClass(r) || (n = t(n).closest(d)), f._jQueryInterface.call(t(n), "toggle");
    }).on(h.FOCUS_BLUR_DATA_API, a, function (e) {
      var n = t(e.target).closest(d)[0];t(n).toggleClass(s, /^focus(in)?$/.test(e.type));
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
      return t.fn[e] = n, f._jQueryInterface;
    }, f;
  }(e),
      u = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        r = t.fn[e],
        l = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        u = "next",
        d = "prev",
        h = "left",
        f = "right",
        p = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        m = "carousel",
        g = "active",
        v = "slide",
        y = "carousel-item-right",
        b = "carousel-item-left",
        _ = "carousel-item-next",
        w = "carousel-item-prev",
        E = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        C = function () {
      function r(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(E.INDICATORS)[0], this._addEventListeners();
      }var C = r.prototype;return C.next = function () {
        this._isSliding || this._slide(u);
      }, C.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(d);
      }, C.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(E.NEXT_PREV)[0] && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (e) {
        var n = this;this._activeElement = t(this._element).find(E.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(p.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();var o = e > i ? u : d;this._slide(o, this._items[e]);
        }
      }, C.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (t) {
        return t = s({}, l, t), a.typeCheckConfig(e, t, c), t;
      }, C._addEventListeners = function () {
        var e = this;this._config.keyboard && t(this._element).on(p.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(p.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(p.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(p.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, C._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();}
      }, C._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(E.ITEM)), this._items.indexOf(e);
      }, C._getItemByDirection = function (t, e) {
        var n = t === u,
            i = t === d,
            o = this._getItemIndex(e),
            r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === d ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, C._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            o = this._getItemIndex(t(this._element).find(E.ACTIVE_ITEM)[0]),
            r = t.Event(p.SLIDE, { relatedTarget: e, direction: n, from: o, to: i });return t(this._element).trigger(r), r;
      }, C._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(E.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(g);
        }
      }, C._slide = function (e, n) {
        var i,
            o,
            r,
            s = this,
            l = t(this._element).find(E.ACTIVE_ITEM)[0],
            c = this._getItemIndex(l),
            d = n || l && this._getItemByDirection(e, l),
            m = this._getItemIndex(d),
            C = Boolean(this._interval);if (e === u ? (i = b, o = _, r = h) : (i = y, o = w, r = f), d && t(d).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(d);var x = t.Event(p.SLID, { relatedTarget: d, direction: r, from: c, to: m });if (t(this._element).hasClass(v)) {
            t(d).addClass(o), a.reflow(d), t(l).addClass(i), t(d).addClass(i);var T = a.getTransitionDurationFromElement(l);t(l).one(a.TRANSITION_END, function () {
              t(d).removeClass(i + " " + o).addClass(g), t(l).removeClass(g + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                return t(s._element).trigger(x);
              }, 0);
            }).emulateTransitionEnd(T);
          } else t(l).removeClass(g), t(d).addClass(g), this._isSliding = !1, t(this._element).trigger(x);C && this.cycle();
        }
      }, r._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              o = s({}, l, t(this).data());"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = s({}, o, e));var a = "string" == typeof e ? e : o.slide;if (i || (i = new r(this, o), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof a) {
            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');i[a]();
          } else o.interval && (i.pause(), i.cycle());
        });
      }, r._dataApiClickHandler = function (e) {
        var i = a.getSelectorFromElement(this);if (i) {
          var o = t(i)[0];if (o && t(o).hasClass(m)) {
            var l = s({}, t(o).data(), t(this).data()),
                c = this.getAttribute("data-slide-to");c && (l.interval = !1), r._jQueryInterface.call(t(o), l), c && t(o).data(n).to(c), e.preventDefault();
          }
        }
      }, o(r, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), r;
    }();return t(document).on(p.CLICK_DATA_API, E.DATA_SLIDE, C._dataApiClickHandler), t(window).on(p.LOAD_DATA_API, function () {
      t(E.DATA_RIDE).each(function () {
        var e = t(this);C._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = r, C._jQueryInterface;
    }, C;
  }(e),
      d = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = t.fn[e],
        r = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        c = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        u = "show",
        d = "collapse",
        h = "collapsing",
        f = "collapsed",
        p = "width",
        m = "height",
        g = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        v = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var i = t(g.DATA_TOGGLE), o = 0; o < i.length; o++) {
          var r = i[o],
              s = a.getSelectorFromElement(r);null !== s && t(s).filter(e).length > 0 && (this._selector = s, this._triggerArray.push(r));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        t(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var e,
            o,
            r = this;if (!this._isTransitioning && !t(this._element).hasClass(u) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (o = t(e).not(this._selector).data(n)) && o._isTransitioning))) {
          var s = t.Event(c.SHOW);if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
            e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), o || t(e).data(n, null));var l = this._getDimension();t(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END, function () {
              t(r._element).removeClass(h).addClass(d).addClass(u), r._element.style[l] = "", r.setTransitioning(!1), t(r._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var e = this;if (!this._isTransitioning && t(this._element).hasClass(u)) {
          var n = t.Event(c.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(h).removeClass(d).removeClass(u), this._triggerArray.length > 0) for (var o = 0; o < this._triggerArray.length; o++) {
              var r = this._triggerArray[o],
                  s = a.getSelectorFromElement(r);if (null !== s) t(s).hasClass(u) || t(r).addClass(f).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[i] = "";var l = a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END, function () {
              e.setTransitioning(!1), t(e._element).removeClass(h).addClass(d).trigger(c.HIDDEN);
            }).emulateTransitionEnd(l);
          }
        }
      }, v.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, v.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, v._getConfig = function (t) {
        return (t = s({}, r, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(e, t, l), t;
      }, v._getDimension = function () {
        return t(this._element).hasClass(p) ? p : m;
      }, v._getParent = function () {
        var e = this,
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(o).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, v._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(u);n.length > 0 && t(n).toggleClass(f, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = a.getSelectorFromElement(e);return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var o = t(this),
              a = o.data(n),
              l = s({}, r, o.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);if (!a && l.toggle && /show|hide/.test(e) && (l.toggle = !1), a || (a = new i(this, l), o.data(n, a)), "string" == typeof e) {
            if (void 0 === a[e]) throw new TypeError('No method named "' + e + '"');a[e]();
          }
        });
      }, o(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return r;
        } }]), i;
    }();return t(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();var i = t(this),
          o = a.getSelectorFromElement(this);t(o).each(function () {
        var e = t(this),
            o = e.data(n) ? "toggle" : i.data();v._jQueryInterface.call(e, o);
      });
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = i, v._jQueryInterface;
    }, v;
  }(e),
      h = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        r = "." + i,
        l = t.fn[e],
        c = new RegExp("38|40|27"),
        u = { HIDE: "hide" + r, HIDDEN: "hidden" + r, SHOW: "show" + r, SHOWN: "shown" + r, CLICK: "click" + r, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        d = "disabled",
        h = "show",
        f = "dropup",
        p = "dropright",
        m = "dropleft",
        g = "dropdown-menu-right",
        v = "position-static",
        y = '[data-toggle="dropdown"]',
        b = ".dropdown form",
        _ = ".dropdown-menu",
        w = ".navbar-nav",
        E = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        C = "top-start",
        x = "top-end",
        T = "bottom-start",
        S = "bottom-end",
        D = "right-start",
        k = "left-start",
        A = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        N = function () {
      function l(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var b = l.prototype;return b.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(d)) {
          var e = l._getParentFromElement(this._element),
              i = t(this._menu).hasClass(h);if (l._clearMenus(), !i) {
            var o = { relatedTarget: this._element },
                r = t.Event(u.SHOW, o);if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = e : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === t(e).closest(w).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(h), t(e).toggleClass(h).trigger(t.Event(u.SHOWN, o));
            }
          }
        }
      }, b.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, b.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, b._addEventListeners = function () {
        var e = this;t(this._element).on(u.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, b._getConfig = function (n) {
        return n = s({}, this.constructor.Default, t(this._element).data(), n), a.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, b._getMenuElement = function () {
        if (!this._menu) {
          var e = l._getParentFromElement(this._element);this._menu = t(e).find(_)[0];
        }return this._menu;
      }, b._getPlacement = function () {
        var e = t(this._element).parent(),
            n = T;return e.hasClass(f) ? (n = C, t(this._menu).hasClass(g) && (n = x)) : e.hasClass(p) ? n = D : e.hasClass(m) ? n = k : t(this._menu).hasClass(g) && (n = S), n;
      }, b._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, b._getPopperConfig = function () {
        var t = this,
            e = {};"function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);if (n || (n = new l(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, l._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(y)), o = 0; o < n.length; o++) {
          var r = l._getParentFromElement(n[o]),
              s = t(n[o]).data(i),
              a = { relatedTarget: n[o] };if (s) {
            var c = s._menu;if (t(r).hasClass(h) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var d = t.Event(u.HIDE, a);t(r).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[o].setAttribute("aria-expanded", "false"), t(c).removeClass(h), t(r).removeClass(h).trigger(t.Event(u.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (e) {
        var n,
            i = a.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
      }, l._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(_).length)) : c.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(d))) {
          var n = l._getParentFromElement(this),
              i = t(n).hasClass(h);if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var o = t(n).find(E).get();if (0 !== o.length) {
              var r = o.indexOf(e.target);38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
            }
          } else {
            if (27 === e.which) {
              var s = t(n).find(y)[0];t(s).trigger("focus");
            }t(this).trigger("click");
          }
        }
      }, o(l, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return A;
        } }, { key: "DefaultType", get: function get() {
          return I;
        } }]), l;
    }();return t(document).on(u.KEYDOWN_DATA_API, y, N._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, N._clearMenus).on(u.CLICK_DATA_API, y, function (e) {
      e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle");
    }).on(u.CLICK_DATA_API, b, function (t) {
      t.stopPropagation();
    }), t.fn[e] = N._jQueryInterface, t.fn[e].Constructor = N, t.fn[e].noConflict = function () {
      return t.fn[e] = l, N._jQueryInterface;
    }, N;
  }(e),
      f = function (t) {
    var e = "modal",
        n = ".bs.modal",
        i = t.fn.modal,
        r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        c = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        u = "modal-scrollbar-measure",
        d = "modal-backdrop",
        h = "modal-open",
        f = "fade",
        p = "show",
        m = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        g = function () {
      function i(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }var g = i.prototype;return g.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, g.show = function (e) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          t(this._element).hasClass(f) && (this._isTransitioning = !0);var i = t.Event(c.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, g.hide = function (e) {
        var n = this;if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(c.HIDE);if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var o = t(this._element).hasClass(f);if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(p), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), o) {
              var r = a.getTransitionDurationFromElement(this._element);t(this._element).one(a.TRANSITION_END, function (t) {
                return n._hideModal(t);
              }).emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }, g.dispose = function () {
        t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, g.handleUpdate = function () {
        this._adjustDialog();
      }, g._getConfig = function (t) {
        return t = s({}, r, t), a.typeCheckConfig(e, t, l), t;
      }, g._showElement = function (e) {
        var n = this,
            i = t(this._element).hasClass(f);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(p), this._config.focus && this._enforceFocus();var o = t.Event(c.SHOWN, { relatedTarget: e }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
        };if (i) {
          var s = a.getTransitionDurationFromElement(this._element);t(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      }, g._enforceFocus = function () {
        var e = this;t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, g._setEscapeEvent = function () {
        var e = this;this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
      }, g._setResizeEvent = function () {
        var e = this;this._isShown ? t(window).on(c.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(c.RESIZE);
      }, g._hideModal = function () {
        var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(h), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN);
        });
      }, g._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, g._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(f) ? f : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), i && a.reflow(this._backdrop), t(this._backdrop).addClass(p), !e) return;if (!i) return void e();var o = a.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(o);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(p);var r = function r() {
            n._removeBackdrop(), e && e();
          };if (t(this._element).hasClass(f)) {
            var s = a.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();
        } else e && e();
      }, g._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, g._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, g._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, g._setScrollbar = function () {
        var e = this;if (this._isBodyOverflowing) {
          t(m.FIXED_CONTENT).each(function (n, i) {
            var o = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(m.STICKY_CONTENT).each(function (n, i) {
            var o = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(m.NAVBAR_TOGGLER).each(function (n, i) {
            var o = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = t(document.body).css("padding-right");t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, g._resetScrollbar = function () {
        t(m.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");void 0 !== i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
        });var e = t(document.body).data("padding-right");void 0 !== e && t(document.body).css("padding-right", e).removeData("padding-right");
      }, g._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = u, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, i._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = t(this).data("bs.modal"),
              r = s({}, i.Default, t(this).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);if (o || (o = new i(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');o[e](n);
          } else r.show && o.show(n);
        });
      }, o(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return r;
        } }]), i;
    }();return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
      var n,
          i = this,
          o = a.getSelectorFromElement(this);o && (n = t(o)[0]);var r = t(n).data("bs.modal") ? "toggle" : s({}, t(n).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var l = t(n).one(c.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(c.HIDDEN, function () {
          t(i).is(":visible") && i.focus();
        });
      });g._jQueryInterface.call(t(n), r, this);
    }), t.fn.modal = g._jQueryInterface, t.fn.modal.Constructor = g, t.fn.modal.noConflict = function () {
      return t.fn.modal = i, g._jQueryInterface;
    }, g;
  }(e),
      p = function (t) {
    var e = "tooltip",
        i = ".bs.tooltip",
        r = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        u = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        d = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        h = "show",
        f = "out",
        p = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        m = "fade",
        g = "show",
        v = ".tooltip-inner",
        y = ".arrow",
        b = "hover",
        _ = "focus",
        w = "click",
        E = "manual",
        C = function () {
      function r(t, e) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }var C = r.prototype;return C.enable = function () {
        this._isEnabled = !0;
      }, C.disable = function () {
        this._isEnabled = !1;
      }, C.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, C.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
        }
      }, C.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, C.show = function () {
        var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var i = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);var o = t.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !o) return;var r = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(r).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : t(this.config.container);t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            }, onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            } }), t(r).addClass(g), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);var d = function d() {
            e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === f && e._leave(null, e);
          };if (t(this.tip).hasClass(m)) {
            var h = a.getTransitionDurationFromElement(this.tip);t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
          } else d();
        }
      }, C.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            o = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
          if (t(i).removeClass(g), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[w] = !1, this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, t(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(i);t(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();this._hoverState = "";
        }
      }, C.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, C.isWithContent = function () {
        return Boolean(this.getTitle());
      }, C.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, C.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, C.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(v), this.getTitle()), e.removeClass(m + " " + g);
      }, C.setElementContent = function (e, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, C.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, C._getAttachment = function (t) {
        return u[t.toUpperCase()];
      }, C._setListeners = function () {
        var e = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== E) {
            var i = n === b ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = n === b ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(o, e.config.selector, function (t) {
              return e._leave(t);
            });
          }t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, C._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, C._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? _ : b] = !0), t(n.getTipElement()).hasClass(g) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.show();
        }, n.config.delay.show) : n.show());
      }, C._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? _ : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, C._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }return !1;
      }, C._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, C._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }return t;
      }, C._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, C._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, C._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, r._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data("bs.tooltip"),
              i = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, o(r, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return d;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return c;
        } }]), r;
    }();return t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = r, C._jQueryInterface;
    }, C;
  }(e),
      m = function (t) {
    var e = "popover",
        n = ".bs.popover",
        i = t.fn[e],
        r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = s({}, p.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = s({}, p.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        d = ".popover-header",
        h = ".popover-body",
        f = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
        m = function (i) {
      var s, p;function m() {
        return i.apply(this, arguments) || this;
      }p = i, (s = m).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;var g = m.prototype;return g.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, g.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, g.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, g.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(d), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(h), n), e.removeClass(c + " " + u);
      }, g._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, g._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(r);null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, m._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data("bs.popover"),
              i = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((n || !/destroy|hide/.test(e)) && (n || (n = new m(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, o(m, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return f;
        } }, { key: "EVENT_KEY", get: function get() {
          return n;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), m;
    }(p);return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = i, m._jQueryInterface;
    }, m;
  }(e),
      g = function (t) {
    var e = "scrollspy",
        n = t.fn[e],
        i = { offset: 10, method: "auto", target: "" },
        r = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = "dropdown-item",
        u = "active",
        d = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        h = "offset",
        f = "position",
        p = function () {
      function n(e, n) {
        var i = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(l.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }var p = n.prototype;return p.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? h : f,
            i = "auto" === this._config.method ? n : this._config.method,
            o = i === f ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = a.getSelectorFromElement(e);if (r && (n = t(r)[0]), n) {
            var s = n.getBoundingClientRect();if (s.width || s.height) return [t(n)[i]().top + o, r];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, p.dispose = function () {
        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, p._getConfig = function (n) {
        if ("string" != typeof (n = s({}, i, n)).target) {
          var o = t(n.target).attr("id");o || (o = a.getUID(e), t(n.target).attr("id", o)), n.target = "#" + o;
        }return a.typeCheckConfig(e, n, r), n;
      }, p._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, p._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, p._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, p._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
          }
        }
      }, p._activate = function (e) {
        this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });var i = t(n.join(","));i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: e });
      }, p._clear = function () {
        t(this._selector).filter(d.ACTIVE).removeClass(u);
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data("bs.scrollspy");if (i || (i = new n(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, o(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return t(window).on(l.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);p._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
      return t.fn[e] = n, p._jQueryInterface;
    }, p;
  }(e),
      v = function (t) {
    var e = t.fn.tab,
        n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        i = "dropdown-menu",
        r = "active",
        s = "disabled",
        l = "fade",
        c = "show",
        u = ".dropdown",
        d = ".nav, .list-group",
        h = ".active",
        f = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        m = ".dropdown-toggle",
        g = "> .dropdown-menu .active",
        v = function () {
      function e(t) {
        this._element = t;
      }var p = e.prototype;return p.show = function () {
        var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(r) || t(this._element).hasClass(s))) {
          var i,
              o,
              l = t(this._element).closest(d)[0],
              c = a.getSelectorFromElement(this._element);if (l) {
            var u = "UL" === l.nodeName ? f : h;o = (o = t.makeArray(t(l).find(u)))[o.length - 1];
          }var p = t.Event(n.HIDE, { relatedTarget: this._element }),
              m = t.Event(n.SHOW, { relatedTarget: o });if (o && t(o).trigger(p), t(this._element).trigger(m), !m.isDefaultPrevented() && !p.isDefaultPrevented()) {
            c && (i = t(c)[0]), this._activate(this._element, l);var g = function g() {
              var i = t.Event(n.HIDDEN, { relatedTarget: e._element }),
                  r = t.Event(n.SHOWN, { relatedTarget: o });t(o).trigger(i), t(e._element).trigger(r);
            };i ? this._activate(i, i.parentNode, g) : g();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (e, n, i) {
        var o = this,
            r = ("UL" === n.nodeName ? t(n).find(f) : t(n).children(h))[0],
            s = i && r && t(r).hasClass(l),
            c = function c() {
          return o._transitionComplete(e, r, i);
        };if (r && s) {
          var u = a.getTransitionDurationFromElement(r);t(r).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
        } else c();
      }, p._transitionComplete = function (e, n, o) {
        if (n) {
          t(n).removeClass(c + " " + r);var s = t(n.parentNode).find(g)[0];s && t(s).removeClass(r), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (t(e).addClass(r), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(i)) {
          var l = t(e).closest(u)[0];l && t(l).find(m).addClass(r), e.setAttribute("aria-expanded", !0);
        }o && o();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data("bs.tab");if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
          }
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), e;
    }();return t(document).on(n.CLICK_DATA_API, p, function (e) {
      e.preventDefault(), v._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
      return t.fn.tab = e, v._jQueryInterface;
    }, v;
  }(e);!function (t) {
    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = a, t.Alert = l, t.Button = c, t.Carousel = u, t.Collapse = d, t.Dropdown = h, t.Modal = f, t.Popover = m, t.Scrollspy = g, t.Tab = v, t.Tooltip = p, Object.defineProperty(t, "__esModule", { value: !0 });
}), function (t) {
  "use strict";
  function e(e) {
    return e.is('[type="checkbox"]') ? e.prop("checked") : e.is('[type="radio"]') ? !!t('[name="' + e.attr("name") + '"]:checked').length : e.is("select[multiple]") ? (e.val() || []).length : e.val();
  }var n = function n(i, o) {
    this.options = o, this.validators = t.extend({}, n.VALIDATORS, o.custom), this.$element = t(i), this.$btn = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", t.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = t(this),
          i = n.attr("data-match");t(i).on("input.bs.validator", function (t) {
        e(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return e(t(this)) && !t(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(e) {
    return this.each(function () {
      var i = t(this),
          o = t.extend({}, n.DEFAULTS, i.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e),
          r = i.data("bs.validator");(r || "destroy" != e) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof e && r[e]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(t) {
      var e = t[0];if (e.checkValidity) return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!");
    }, match: function match(e) {
      var i = e.attr("data-match");return e.val() !== t(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(t) {
      var e = t.attr("data-minlength");return t.val().length < e && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var e = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      e.clearErrors(t(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (e) {
    var n = this,
        i = t(e.target),
        o = "focusout" !== e.type;this.$inputs.is(i) && this.validateInput(i, o).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    e(n);var o = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var r = t.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var s = this;return this.runValidators(n).done(function (e) {
        n.data("bs.validator.errors", e), e.length ? i ? s.defer(n, s.showErrors) : s.showErrors(n) : s.clearErrors(n), o && e.toString() === o.toString() || (r = e.length ? t.Event("invalid.bs.validator", { relatedTarget: n[0], detail: e }) : t.Event("valid.bs.validator", { relatedTarget: n[0], detail: o }), s.$element.trigger(r)), s.toggleSubmit(), s.$element.trigger(t.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        o = t.Deferred();function r(t) {
      return function (t) {
        return n.attr("data-" + t + "-error");
      }(t) || ((e = n[0].validity).typeMismatch ? n.attr("data-type-error") : e.patternMismatch ? n.attr("data-pattern-error") : e.stepMismatch ? n.attr("data-step-error") : e.rangeOverflow ? n.attr("data-max-error") : e.rangeUnderflow ? n.attr("data-min-error") : e.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var e;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", o), t.each(this.validators, t.proxy(function (t, o) {
      var s = null;!e(n) && !n.attr("required") || void 0 === n.attr("data-" + t) && "native" != t || !(s = o.call(this, n)) || (s = r(t) || s, !~i.indexOf(s) && i.push(s));
    }, this)), !i.length && e(n) && n.attr("data-remote") ? this.defer(n, function () {
      var s = {};s[n.attr("name")] = e(n), t.get(n.attr("data-remote"), s).fail(function (t, e, n) {
        i.push(r("remote") || n);
      }).always(function () {
        o.resolve(i);
      });
    }) : o.resolve(i), o.promise();
  }, n.prototype.validate = function () {
    var e = this;return t.when(this.$inputs.map(function (n) {
      return e.validateInput(t(this), !1);
    })).then(function () {
      e.toggleSubmit(), e.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var e = this.$element.find(".has-error:first :input");0 !== e.length && (t("html, body").animate({ scrollTop: e.offset().top - n.FOCUS_OFFSET }, 250), e.focus());
    }
  }, n.prototype.showErrors = function (e) {
    var n = this.options.html ? "html" : "text",
        i = e.data("bs.validator.errors"),
        o = e.closest(".form-group"),
        r = o.find(".help-block.with-errors"),
        s = o.find(".form-control-feedback");i.length && (i = t("<ul/>").addClass("list-unstyled").append(t.map(i, function (e) {
      return t("<li/>")[n](e);
    })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(i), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && o.removeClass("has-success"));
  }, n.prototype.clearErrors = function (t) {
    var n = t.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        o = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && e(t) && o.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(t(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = e(t(this));return !("string" == typeof n ? t.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (t) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (e, n) {
    if (n = t.proxy(n, this, e), !this.options.delay) return n();window.clearTimeout(e.data("bs.validator.timeout")), e.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var e = t(this),
          n = e.data("bs.validator.timeout");window.clearTimeout(n) && e.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var e = t(this),
          n = e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var o = t.fn.validator;t.fn.validator = i, t.fn.validator.Constructor = n, t.fn.validator.noConflict = function () {
    return t.fn.validator = o, this;
  }, t(window).on("load", function () {
    t('form[data-toggle="validator"]').each(function () {
      var e = t(this);i.call(e, e.data());
    });
  });
}(jQuery), function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";
  var n = Array.prototype.slice,
      i = t.console,
      o = void 0 === i ? function () {} : function (t) {
    i.error(t);
  };function r(i, r, a) {
    (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      var e;return "string" == typeof t ? function (t, e, n) {
        var r,
            s = "$()." + i + '("' + e + '")';return t.each(function (t, l) {
          var c = a.data(l, i);if (c) {
            var u = c[e];if (u && "_" != e.charAt(0)) {
              var d = u.apply(c, n);r = void 0 === r ? d : r;
            } else o(s + " is not a valid method");
          } else o(i + " not initialized. Cannot call methods, i.e. " + s);
        }), void 0 !== r ? r : t;
      }(this, t, n.call(arguments, 1)) : (e = t, this.each(function (t, n) {
        var o = a.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
      }), this);
    }, s(a));
  }function s(t) {
    !t || t && t.bridget || (t.bridget = r);
  }return s(e || t.jQuery), r;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var n = this._events = this._events || {},
          i = n[t] = n[t] || [];return -1 == i.indexOf(e) && i.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var n = this._onceEvents = this._onceEvents || {};return (n[t] = n[t] || {})[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      var i = n.indexOf(e);return -1 != i && n.splice(i, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      n = n.slice(0), e = e || [];for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
        var r = n[o];i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
      }return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return e();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";
  function t(t) {
    var e = parseFloat(t);return -1 == t.indexOf("%") && !isNaN(e) && e;
  }var e = "undefined" == typeof console ? function () {} : function (t) {
    console.error(t);
  },
      n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      i = n.length;function o(t) {
    var n = getComputedStyle(t);return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n;
  }var r,
      s = !1;function a(e) {
    if (function () {
      if (!s) {
        s = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(e);var i = o(e);a.isBoxSizeOuter = r = 200 == t(i.width), n.removeChild(e);
      }
    }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
      var l = o(e);if ("none" == l.display) return function () {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < i; e++) {
          t[n[e]] = 0;
        }return t;
      }();var c = {};c.width = e.offsetWidth, c.height = e.offsetHeight;for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < i; d++) {
        var h = n[d],
            f = l[h],
            p = parseFloat(f);c[h] = isNaN(p) ? 0 : p;
      }var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          _ = c.borderTopWidth + c.borderBottomWidth,
          w = u && r,
          E = t(l.width);!1 !== E && (c.width = E + (w ? 0 : m + b));var C = t(l.height);return !1 !== C && (c.height = C + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
    }
  }return a;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
      var i = e[n] + "MatchesSelector";if (t[i]) return i;
    }
  }();return function (e, n) {
    return e[t](n);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var n = { extend: function extend(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }return t;
    }, modulo: function modulo(t, e) {
      return (t % e + e) % e;
    } },
      i = Array.prototype.slice;n.makeArray = function (t) {
    return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length ? i.call(t) : [t];
  }, n.removeFrom = function (t, e) {
    var n = t.indexOf(e);-1 != n && t.splice(n, 1);
  }, n.getParent = function (t, n) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, n)) return t;
    }
  }, n.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, n.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, n.filterFindElements = function (t, i) {
    var o = [];return (t = n.makeArray(t)).forEach(function (t) {
      if (t instanceof HTMLElement) if (i) {
        e(t, i) && o.push(t);for (var n = t.querySelectorAll(i), r = 0; r < n.length; r++) {
          o.push(n[r]);
        }
      } else o.push(t);
    }), o;
  }, n.debounceMethod = function (t, e, n) {
    n = n || 100;var i = t.prototype[e],
        o = e + "Timeout";t.prototype[e] = function () {
      var t = this[o];clearTimeout(t);var e = arguments,
          r = this;this[o] = setTimeout(function () {
        i.apply(r, e), delete r[o];
      }, n);
    };
  }, n.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, n.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, n) {
      return e + "-" + n;
    }).toLowerCase();
  };var o = t.console;return n.htmlInit = function (e, i) {
    n.docReady(function () {
      var r = n.toDashed(i),
          s = "data-" + r,
          a = document.querySelectorAll("[" + s + "]"),
          l = document.querySelectorAll(".js-" + r),
          c = n.makeArray(a).concat(n.makeArray(l)),
          u = s + "-options",
          d = t.jQuery;c.forEach(function (t) {
        var n,
            r = t.getAttribute(s) || t.getAttribute(u);try {
          n = r && JSON.parse(r);
        } catch (e) {
          return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + e));
        }var a = new e(t, n);d && d.data(t, i, a);
      });
    });
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize));
}(window, function (t, e) {
  function n(t, e) {
    this.element = t, this.parent = e, this.create();
  }var i = n.prototype;return i.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-selected", "false"), this.x = 0, this.shift = 0;
  }, i.destroy = function () {
    this.element.style.position = "";var t = this.parent.originSide;this.element.removeAttribute("aria-selected"), this.element.style[t] = "";
  }, i.getSize = function () {
    this.size = e(this.element);
  }, i.setPosition = function (t) {
    this.x = t, this.updateTarget(), this.renderPosition(t);
  }, i.updateTarget = i.setDefaultTarget = function () {
    var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  }, i.renderPosition = function (t) {
    var e = this.parent.originSide;this.element.style[e] = this.parent.getPositionValue(t);
  }, i.wrapShift = function (t) {
    this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t);
  }, i.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e());
}(window, function () {
  "use strict";
  function t(t) {
    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0;
  }var e = t.prototype;return e.addCell = function (t) {
    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = t.x;var e = this.isOriginLeft ? "marginLeft" : "marginRight";this.firstMargin = t.size[e];
    }
  }, e.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
        e = this.getLastCell(),
        n = e ? e.size[t] : 0,
        i = this.outerWidth - (this.firstMargin + n);this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
  }, e.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, e.select = function () {
    this.changeSelected(!0);
  }, e.unselect = function () {
    this.changeSelected(!1);
  }, e.changeSelected = function (t) {
    var e = t ? "add" : "remove";this.cells.forEach(function (n) {
      n.element.classList[e]("is-selected"), n.element.setAttribute("aria-selected", t.toString());
    });
  }, e.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils));
}(window, function (t, e) {
  var n = { startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();var t = this.x;if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;requestAnimationFrame(function () {
          e.animate();
        });
      }
    }, positionSlider: function positionSlider() {
      var t = this.x;this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;var n = this.getPositionValue(t);this.slider.style.transform = this.isAnimating ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";var i = this.slides[0];if (i) {
        var o = -this.x - i.target,
            r = o / this.slidesWidth;this.dispatchEvent("scroll", null, [r, o]);
      }
    }, positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    }, getPositionValue: function getPositionValue(t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px";
    }, settle: function settle(t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    }, shiftWrapCells: function shiftWrapCells(t) {
      var e = this.cursorPosition + t;this._shiftCells(this.beforeShiftCells, e, -1);var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);this._shiftCells(this.afterShiftCells, n, 1);
    }, _shiftCells: function _shiftCells(t, e, n) {
      for (var i = 0; i < t.length; i++) {
        var o = t[i],
            r = e > 0 ? n : 0;o.wrapShift(r), e -= o.size.outerWidth;
      }
    }, _unshiftCells: function _unshiftCells(t) {
      if (t && t.length) for (var e = 0; e < t.length; e++) {
        t[e].wrapShift(0);
      }
    }, integratePhysics: function integratePhysics() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    }, applyForce: function applyForce(t) {
      this.velocity += t;
    }, getFrictionFactor: function getFrictionFactor() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    }, getRestingPosition: function getRestingPosition() {
      return this.x + this.velocity / (1 - this.getFrictionFactor());
    }, applyDragForce: function applyDragForce() {
      if (this.isDraggable && this.isPointerDown) {
        var t = this.dragX - this.x - this.velocity;this.applyForce(t);
      }
    }, applySelectedAttraction: function applySelectedAttraction() {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;this.applyForce(t);
      }
    } };return n;
}), function (t, e) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (n, i, o, r, s, a) {
    return e(t, n, i, o, r, s, a);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var n = t.Flickity;t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
  }
}(window, function (t, e, n, i, o, r, s) {
  var a = t.jQuery,
      l = t.getComputedStyle,
      c = t.console;function u(t, e) {
    for (t = i.makeArray(t); t.length;) {
      e.appendChild(t.shift());
    }
  }var d = 0,
      h = {};function f(t, e) {
    var n = i.getQueryElement(t);if (n) {
      if (this.element = n, this.element.flickityGUID) {
        var o = h[this.element.flickityGUID];return o.option(e), o;
      }a && (this.$element = a(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e), this._create();
    } else c && c.error("Bad element for Flickity: " + (n || t));
  }f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, f.createMethods = [];var p = f.prototype;i.extend(p, e.prototype), p._create = function () {
    var e = this.guid = ++d;for (var n in this.element.flickityGUID = e, h[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[n];this.on(n, i);
    }f.createMethods.forEach(function (t) {
      this[t]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (t) {
    i.extend(this.options, t);
  }, p.activate = function () {
    if (!this.isActive) {
      var t;this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");var e = this.options.initialIndex;t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0, this.select(t, !1, !0), this.isInitActivated = !0, this.dispatchEvent("ready");
    }
  }, p._createSlider = function () {
    var t = document.createElement("div");t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t;
  }, p._filterFindCellElements = function (t) {
    return i.filterFindElements(t, this.options.cellSelector);
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
  }, p._makeCells = function (t) {
    return this._filterFindCellElements(t).map(function (t) {
      return new o(t, this);
    }, this);
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0);
  }, p._positionCells = function (t) {
    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;var e = 0;if (t > 0) {
      var n = this.cells[t - 1];e = n.x + n.size.outerWidth;
    }for (var i = this.cells.length, o = t; o < i; o++) {
      var r = this.cells[o];r.setPosition(e), e += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var t = new r(this);this.slides.push(t);var e = "left" == this.originSide ? "marginRight" : "marginLeft",
          n = this._getCanCellFit();this.cells.forEach(function (i, o) {
        if (t.cells.length) {
          var s = t.outerWidth - t.firstMargin + (i.size.outerWidth - i.size[e]);n.call(this, o, s) ? t.addCell(i) : (t.updateTarget(), t = new r(this), this.slides.push(t), t.addCell(i));
        } else t.addCell(i);
      }, this), t.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var t = this.options.groupCells;if (!t) return function () {
      return !1;
    };if ("number" == typeof t) {
      var e = parseInt(t, 10);return function (t) {
        return t % e != 0;
      };
    }var n = "string" == typeof t && t.match(/^(\d+)%$/),
        i = n ? parseInt(n[1], 10) / 100 : 1;return function (t, e) {
      return e <= (this.size.innerWidth + 1) * i;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };var m = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };return p.setCellAlign = function () {
    var t = m[this.options.cellAlign];this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;this.viewport.style.height = t + "px";
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);var t = this.cursorPosition,
          e = this.cells.length - 1;this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1);
    }
  }, p._getGapCells = function (t, e, n) {
    for (var i = []; t > 0;) {
      var o = this.cells[e];if (!o) break;i.push(o), e += n, t -= o.size.outerWidth;
    }return i;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var t = this.options.rightToLeft,
          e = t ? "marginRight" : "marginLeft",
          n = t ? "marginLeft" : "marginRight",
          i = this.slideableWidth - this.getLastCell().size[n],
          o = i < this.size.innerWidth,
          r = this.cursorPosition + this.cells[0].size[e],
          s = i - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (t) {
        o ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, s));
      }, this);
    }
  }, p.dispatchEvent = function (t, e, n) {
    var i = e ? [e].concat(n) : n;if (this.emitEvent(t, i), a && this.$element) {
      var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";if (e) {
        var r = a.Event(e);r.type = t, o = r;
      }this.$element.trigger(o, n);
    }
  }, p.select = function (t, e, n) {
    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = i.modulo(t, this.slides.length)), this.slides[t])) {
      var o = this.selectedIndex;this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != o && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (t) {
    var e = this.slides.length;if (!(this.options.wrapAround && e > 1)) return t;var n = i.modulo(t, e),
        o = Math.abs(n - this.selectedIndex),
        r = Math.abs(n + e - this.selectedIndex),
        s = Math.abs(n - e - this.selectedIndex);!this.isDragSelect && r < o ? t += e : !this.isDragSelect && s < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth);
  }, p.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  }, p.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  }, p.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectCell = function (t, e, n) {
    var i = this.queryCell(t);if (i) {
      var o = this.getCellSlideIndex(i);this.select(o, e, n);
    }
  }, p.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      if (-1 != this.slides[e].cells.indexOf(t)) return e;
    }
  }, p.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var n = this.cells[e];if (n.element == t) return n;
    }
  }, p.getCells = function (t) {
    var e = [];return (t = i.makeArray(t)).forEach(function (t) {
      var n = this.getCell(t);n && e.push(n);
    }, this), e;
  }, p.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, p.getParentCell = function (t) {
    var e = this.getCell(t);return e || (t = i.getParent(t, ".flickity-slider > *"), this.getCell(t));
  }, p.getAdjacentCellElements = function (t, e) {
    if (!t) return this.selectedSlide.getCellElements();e = void 0 === e ? this.selectedIndex : e;var n = this.slides.length;if (1 + 2 * t >= n) return this.getCellElements();for (var o = [], r = e - t; r <= e + t; r++) {
      var s = this.options.wrapAround ? i.modulo(r, n) : r,
          a = this.slides[s];a && (o = o.concat(a.getCellElements()));
    }return o;
  }, p.queryCell = function (t) {
    return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), this.getCell(t));
  }, p.uiChange = function () {
    this.emitEvent("uiChange");
  }, p.childUIPointerDown = function (t) {
    this.emitEvent("childUIPointerDown", [t]);
  }, p.onresize = function () {
    this.watchCSS(), this.resize();
  }, i.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");var t = this.selectedElements && this.selectedElements[0];this.selectCell(t, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;if (this.options.accessibility && !e) {
      var n = f.keyboardHandlers[t.keyCode];n && n.call(this);
    }
  }, f.keyboardHandlers = { 37: function _() {
      var t = this.options.rightToLeft ? "next" : "previous";this.uiChange(), this[t]();
    }, 39: function _() {
      var t = this.options.rightToLeft ? "previous" : "next";this.uiChange(), this[t]();
    } }, p.focus = function () {
    var e = t.pageYOffset;this.element.focus(), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
      t.destroy();
    }), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"));
  }, p.destroy = function () {
    this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid];
  }, i.extend(p, s), f.data = function (t) {
    var e = (t = i.getQueryElement(t)) && t.flickityGUID;return e && h[e];
  }, i.htmlInit(f, "flickity"), a && a.bridget && a.bridget("flickity", f), f.setJQuery = function (t) {
    a = t;
  }, f.Cell = o, f;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter);
}(window, function (t, e) {
  function n() {}var i = n.prototype = Object.create(e.prototype);i.bindStartEvent = function (t) {
    this._bindStartEvent(t, !0);
  }, i.unbindStartEvent = function (t) {
    this._bindStartEvent(t, !1);
  }, i._bindStartEvent = function (e, n) {
    var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
        o = "mousedown";t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"), e[i](o, this);
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, i.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var n = t[e];if (n.identifier == this.pointerIdentifier) return n;
    }
  }, i.onmousedown = function (t) {
    var e = t.button;e && 0 !== e && 1 !== e || this._pointerDown(t, t);
  }, i.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  }, i.onpointerdown = function (t) {
    this._pointerDown(t, t);
  }, i._pointerDown = function (t, e) {
    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e));
  }, i.pointerDown = function (t, e) {
    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
  };var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return i._bindPostStartEvents = function (e) {
    if (e) {
      var n = o[e.type];n.forEach(function (e) {
        t.addEventListener(e, this);
      }, this), this._boundPointerEvents = n;
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (e) {
      t.removeEventListener(e, this);
    }, this), delete this._boundPointerEvents);
  }, i.onmousemove = function (t) {
    this._pointerMove(t, t);
  }, i.onpointermove = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
  }, i.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerMove(t, e);
  }, i._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  }, i.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e]);
  }, i.onmouseup = function (t) {
    this._pointerUp(t, t);
  }, i.onpointerup = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
  }, i.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerUp(t, e);
  }, i._pointerUp = function (t, e) {
    this._pointerDone(), this.pointerUp(t, e);
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, i.pointerDone = function () {}, i.onpointercancel = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
  }, i.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerCancel(t, e);
  }, i._pointerCancel = function (t, e) {
    this._pointerDone(), this.pointerCancel(t, e);
  }, i.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e]);
  }, n.getPointerPoint = function (t) {
    return { x: t.pageX, y: t.pageY };
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer);
}(window, function (t, e) {
  function n() {}var i = n.prototype = Object.create(e.prototype);i.bindHandles = function () {
    this._bindHandles(!0);
  }, i.unbindHandles = function () {
    this._bindHandles(!1);
  }, i._bindHandles = function (e) {
    for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
      var r = this.handles[o];this._bindStartEvent(r, e), r[n]("click", this), t.PointerEvent && (r.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
    this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]));
  };var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return i.okayPointerDown = function (t) {
    var e = o[t.target.nodeName],
        n = r[t.target.type],
        i = !e || n;return i || this._pointerReset(), i;
  }, i.pointerDownBlur = function () {
    var t = document.activeElement;t && t.blur && t != document.body && t.blur();
  }, i.pointerMove = function (t, e) {
    var n = this._dragPointerMove(t, e);this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n);
  }, i._dragPointerMove = function (t, e) {
    var n = { x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY };return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n;
  }, i.hasDragStarted = function (t) {
    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
  }, i._dragPointerUp = function (t, e) {
    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
  }, i._dragStart = function (t, e) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e);
  }, i.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e]);
  }, i._dragMove = function (t, e, n) {
    this.isDragging && this.dragMove(t, e, n);
  }, i.dragMove = function (t, e, n) {
    t.preventDefault(), this.emitEvent("dragMove", [t, e, n]);
  }, i._dragEnd = function (t, e) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(t, e);
  }, i.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e]);
  }, i.onclick = function (t) {
    this.isPreventingClicks && t.preventDefault();
  }, i._staticClick = function (t, e) {
    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, i.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e]);
  }, n.getPointerPoint = e.getPointerPoint, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  i.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }), e.createMethods.push("_createDrag");var o = e.prototype;i.extend(o, n.prototype), o._touchActionValue = "pan-y";var r = "createTouch" in document,
      s = !1;o._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), this.on("cellChange", this.updateDraggable), r && !s && (t.addEventListener("touchmove", function () {}), s = !0);
  }, o.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, o.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, o.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, o.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, o.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, o._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, o._childUIPointerDownDrag = function (t) {
    t.preventDefault(), this.pointerDownFocus(t);
  }, o.pointerDown = function (e, n) {
    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n);
  }, o._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = e, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]);
  };var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: t.pageXOffset, y: t.pageYOffset };
  }return o.pointerDownFocus = function (t) {
    a[t.target.nodeName] || this.focus();
  }, o._pointerDownPreventDefault = function (t) {
    var e = "touchstart" == t.type,
        n = "touch" == t.pointerType,
        i = a[t.target.nodeName];e || n || i || t.preventDefault();
  }, o.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  }, o.pointerUp = function (t, e) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
  }, o.pointerDone = function () {
    t.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, o.dragStart = function (e, n) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]));
  }, o.pointerMove = function (t, e) {
    var n = this._dragPointerMove(t, e);this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n);
  }, o.dragMove = function (t, e, n) {
    if (this.isDraggable) {
      t.preventDefault(), this.previousDragX = this.dragX;var i = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (n.x = n.x % this.slideableWidth);var o = this.dragStartPosition + n.x * i;if (!this.options.wrapAround && this.slides.length) {
        var r = Math.max(-this.slides[0].target, this.dragStartPosition);o = o > r ? .5 * (o + r) : o;var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);o = o < s ? .5 * (o + s) : o;
      }this.dragX = o, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", t, [e, n]);
    }
  }, o.dragEnd = function (t, e) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var n = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var i = this.getRestingPosition();this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
      } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
    }
  }, o.dragEndRestingSelect = function () {
    var t = this.getRestingPosition(),
        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
        n = this._getClosestResting(t, e, 1),
        i = this._getClosestResting(t, e, -1);return n.distance < i.distance ? n.index : i.index;
  }, o._getClosestResting = function (t, e, n) {
    for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (t, e) {
      return t <= e;
    } : function (t, e) {
      return t < e;
    }; r(e, o) && (i += n, o = e, null !== (e = this.getSlideDistance(-t, i)));) {
      e = Math.abs(e);
    }return { distance: o, index: i - n };
  }, o.getSlideDistance = function (t, e) {
    var n = this.slides.length,
        o = this.options.wrapAround && n > 1,
        r = o ? i.modulo(e, n) : e,
        s = this.slides[r];if (!s) return null;var a = o ? this.slideableWidth * Math.floor(e / n) : 0;return t - (s.target + a);
  }, o.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
        e = this.previousDragX - this.dragX;return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
  }, o.staticClick = function (t, e) {
    var n = this.getParentCell(t.target),
        i = n && n.element,
        o = n && this.cells.indexOf(n);this.dispatchEvent("staticClick", t, [e, i, o]);
  }, o.onscroll = function () {
    var t = l(),
        e = this.pointerDownScroll.x - t.x,
        n = this.pointerDownScroll.y - t.y;(Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone();
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer);
}(window, function (t, e) {
  function n(t) {
    this.bindTap(t);
  }var i = n.prototype = Object.create(e.prototype);return i.bindTap = function (t) {
    t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0));
  }, i.unbindTap = function () {
    this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
  }, i.pointerUp = function (n, i) {
    if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
      var o = e.getPointerPoint(i),
          r = this.tapElement.getBoundingClientRect(),
          s = t.pageXOffset,
          a = t.pageYOffset;if (o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a && this.emitEvent("tap", [n, i]), "mouseup" != n.type) {
        this.isIgnoringMouseUp = !0;var l = this;setTimeout(function () {
          delete l.isIgnoringMouseUp;
        }, 400);
      }
    }
  }, i.destroy = function () {
    this.pointerDone(), this.unbindTap();
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  "use strict";
  var o = "http://www.w3.org/2000/svg";function r(t, e) {
    this.direction = t, this.parent = e, this._create();
  }r.prototype = Object.create(n.prototype), r.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var t = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == t;var e = this.element = document.createElement("button");e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var n = this.createSVG();e.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this);
  }, r.prototype.createSVG = function () {
    var t = document.createElementNS(o, "svg");t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");var e = document.createElementNS(o, "path"),
        n = function (t) {
      if ("string" == typeof t) return t;return "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
    }(this.parent.options.arrowShape);return e.setAttribute("d", n), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
  }, r.prototype.onTap = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var t = this.isPrevious ? "previous" : "next";this.parent[t]();
    }
  }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function (t) {
    var e = document.activeElement;e && e == this.element && this.onTap(t, t);
  }, r.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, r.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, r.prototype.update = function () {
    var t = this.parent.slides;if (this.parent.options.wrapAround && t.length > 1) this.enable();else {
      var e = t.length ? t.length - 1 : 0,
          n = this.isPrevious ? 0 : e;this[this.parent.selectedIndex == n ? "disable" : "enable"]();
    }
  }, r.prototype.destroy = function () {
    this.deactivate();
  }, i.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), e.createMethods.push("_createPrevNextButtons");var s = e.prototype;return s._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons));
  }, s.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, s.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, e.PrevNextButton = r, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  function o(t) {
    this.parent = t, this._create();
  }o.prototype = new n(), o.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this);
  }, o.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
  }, o.prototype.addDots = function (t) {
    for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + t, r = i; r < o; r++) {
      var s = document.createElement("li");s.className = "dot", s.setAttribute("aria-label", "Page dot " + (r + 1)), e.appendChild(s), n.push(s);
    }this.holder.appendChild(e), this.dots = this.dots.concat(n);
  }, o.prototype.removeDots = function (t) {
    this.dots.splice(this.dots.length - t, t).forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  }, o.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, o.prototype.onTap = function (t) {
    var e = t.target;if ("LI" == e.nodeName) {
      this.parent.uiChange();var n = this.dots.indexOf(e);this.parent.select(n);
    }
  }, o.prototype.destroy = function () {
    this.deactivate();
  }, e.PageDots = o, i.extend(e.defaults, { pageDots: !0 }), e.createMethods.push("_createPageDots");var r = e.prototype;return r._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, r.activatePageDots = function () {
    this.pageDots.activate();
  }, r.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, r.updatePageDots = function () {
    this.pageDots.setDots();
  }, r.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, e.PageDots = o, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
}(window, function (t, e, n) {
  function i(t) {
    this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }i.prototype = Object.create(t.prototype), i.prototype.play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, i.prototype.tick = function () {
    if ("playing" == this.state) {
      var t = this.parent.options.autoPlay;t = "number" == typeof t ? t : 3e3;var e = this;this.clear(), this.timeout = setTimeout(function () {
        e.parent.next(!0), e.tick();
      }, t);
    }
  }, i.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, i.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, i.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, i.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, i.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, i.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, e.extend(n.defaults, { pauseAutoPlayOnHover: !0 }), n.createMethods.push("_createPlayer");var o = n.prototype;return o._createPlayer = function () {
    this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, o.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, o.playPlayer = function () {
    this.player.play();
  }, o.stopPlayer = function () {
    this.player.stop();
  }, o.pausePlayer = function () {
    this.player.pause();
  }, o.unpausePlayer = function () {
    this.player.unpause();
  }, o.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, o.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, o.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, n.Player = i, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function (t, e, n) {
  var i = e.prototype;return i.insert = function (t, e) {
    var n = this._makeCells(t);if (n && n.length) {
      var i = this.cells.length;e = void 0 === e ? i : e;var o = function (t) {
        var e = document.createDocumentFragment();return t.forEach(function (t) {
          e.appendChild(t.element);
        }), e;
      }(n),
          r = e == i;if (r) this.slider.appendChild(o);else {
        var s = this.cells[e].element;this.slider.insertBefore(o, s);
      }if (0 === e) this.cells = n.concat(this.cells);else if (r) this.cells = this.cells.concat(n);else {
        var a = this.cells.splice(e, i - e);this.cells = this.cells.concat(n).concat(a);
      }this._sizeCells(n), this.cellChange(e, !0);
    }
  }, i.append = function (t) {
    this.insert(t, this.cells.length);
  }, i.prepend = function (t) {
    this.insert(t, 0);
  }, i.remove = function (t) {
    var e = this.getCells(t);if (e && e.length) {
      var i = this.cells.length - 1;e.forEach(function (t) {
        t.remove();var e = this.cells.indexOf(t);i = Math.min(e, i), n.removeFrom(this.cells, t);
      }, this), this.cellChange(i, !0);
    }
  }, i.cellSizeChange = function (t) {
    var e = this.getCell(t);if (e) {
      e.getSize();var n = this.cells.indexOf(e);this.cellChange(n);
    }
  }, i.cellChange = function (t, e) {
    var n = this.selectedElement;this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();var i = this.getCell(n);i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected();
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function (t, e, n) {
  "use strict";
  e.createMethods.push("_createLazyload");var i = e.prototype;function o(t, e) {
    this.img = t, this.flickity = e, this.load();
  }return i._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, i.lazyLoad = function () {
    var t = this.options.lazyLoad;if (t) {
      var e = "number" == typeof t ? t : 0,
          i = [];this.getAdjacentCellElements(e).forEach(function (t) {
        var e = function (t) {
          if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
                i = t.getAttribute("data-flickity-lazyload-src"),
                o = t.getAttribute("data-flickity-lazyload-srcset");if (e || i || o) return [t];
          }var r = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return n.makeArray(r);
        }(t);i = i.concat(e);
      }), i.forEach(function (t) {
        new o(t, this);
      }, this);
    }
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        e = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, o.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded");
  }, o.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror");
  }, o.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var n = this.flickity.getParentCell(this.img),
        i = n && n.element;this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i);
  }, e.LazyLoader = o, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (t) {
  return t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils);
}(window, function (t, e) {
  t.createMethods.push("_createAsNavFor");var n = t.prototype;return n._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);var t = this.options.asNavFor;if (t) {
      var e = this;setTimeout(function () {
        e.setNavCompanion(t);
      });
    }
  }, n.setNavCompanion = function (n) {
    n = e.getQueryElement(n);var i = t.data(n);if (i && i != this) {
      this.navCompanion = i;var o = this;this.onNavCompanionSelect = function () {
        o.navCompanionSelect();
      }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, n.navCompanionSelect = function (t) {
    if (this.navCompanion) {
      var e,
          n,
          i,
          o = this.navCompanion.selectedCells[0],
          r = this.navCompanion.cells.indexOf(o),
          s = r + this.navCompanion.selectedCells.length - 1,
          a = Math.floor((e = r, n = s, i = this.navCompanion.cellAlign, (n - e) * i + e));if (this.selectCell(a, !1, t), this.removeNavSelectedElements(), !(a >= this.cells.length)) {
        var l = this.cells.slice(r, s + 1);this.navSelectedElements = l.map(function (t) {
          return t.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, n.changeNavSelectedClass = function (t) {
    this.navSelectedElements.forEach(function (e) {
      e.classList[t]("is-nav-selected");
    });
  }, n.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, n.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, n.onNavStaticClick = function (t, e, n, i) {
    "number" == typeof i && this.navCompanion.selectCell(i);
  }, n.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, n.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : this, function (t, e) {
  var n = t.jQuery,
      i = t.console;function o(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }return t;
  }var r = Array.prototype.slice;function s(t, e, a) {
    if (!(this instanceof s)) return new s(t, e, a);var l,
        c = t;("string" == typeof t && (c = document.querySelectorAll(t)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof e ? a = e : o(this.options, e), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred()), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || t));
  }s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, s.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);var e = t.nodeType;if (e && a[e]) {
      for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var o = n[i];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);for (i = 0; i < r.length; i++) {
          var s = r[i];this.addElementBackgroundImages(s);
        }
      }
    }
  };var a = { 1: !0, 9: !0, 11: !0 };function l(t) {
    this.img = t;
  }function c(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }return s.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);if (e) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
      var o = i && i[2];o && this.addBackground(o, t), i = n.exec(e.backgroundImage);
    }
  }, s.prototype.addImage = function (t) {
    var e = new l(t);this.images.push(e);
  }, s.prototype.addBackground = function (t, e) {
    var n = new c(t, e);this.images.push(n);
  }, s.prototype.check = function () {
    var t = this;function e(e, n, i) {
      setTimeout(function () {
        t.progress(e, n, i);
      });
    }this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : this.complete();
  }, s.prototype.progress = function (t, e, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, t, e);
  }, s.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[e](this);
    }
  }, l.prototype = Object.create(e.prototype), l.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, l.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, l.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, l.prototype.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, l.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, l.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, l.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, c.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, s.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function (t, e) {
      return new s(this, t, e).jqDeferred.promise(n(this));
    });
  }, s.makeJQueryPlugin(), s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded);
}(window, function (t, e, n) {
  "use strict";
  e.createMethods.push("_createImagesLoaded");var i = e.prototype;return i._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, i.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var t = this;n(this.slider).on("progress", function (e, n) {
        var i = t.getParentCell(n.img);t.cellSizeChange(i && i.element), t.options.freeScroll || t.positionSliderAtSelected();
      });
    }
  }, e;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.Headroom = e();
}(this, function () {
  "use strict";
  var t = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function e(t) {
    this.callback = t, this.ticking = !1;
  }function n(t, e) {
    var i;e = function t(e) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = e || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = t(r[n], s[n]);
        }
      }return r;
    }(e, n.options), this.lastKnownScrollY = 0, this.elem = t, this.tolerance = (i = e.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop, this.onBottom = e.onBottom, this.onNotBottom = e.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, e.prototype = { constructor: e, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new e(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var t = this.classes;for (var e in this.initialised = !1, t) {
        t.hasOwnProperty(e) && this.elem.classList.remove(t[e]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var t = this.elem.classList,
          e = this.classes;!t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.bottom) || (t.add(e.bottom), t.remove(e.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notBottom) || (t.add(e.notBottom), t.remove(e.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(t) {
      return Math.max(t.offsetHeight, t.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var t = document.body,
          e = document.documentElement;return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight);
    }, getElementHeight: function getElementHeight(t) {
      return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(t) {
      var e = t < 0,
          n = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return e || n;
    }, toleranceExceeded: function toleranceExceeded(t, e) {
      return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e];
    }, shouldUnpin: function shouldUnpin(t, e) {
      var n = t > this.lastKnownScrollY,
          i = t >= this.offset;return n && i && e;
    }, shouldPin: function shouldPin(t, e) {
      var n = t < this.lastKnownScrollY,
          i = t <= this.offset;return n && e || i;
    }, update: function update() {
      var t = this.getScrollY(),
          e = t > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(t, e);this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== t && t.rAF && t.bind && t.classList, n;
}), function (t) {
  t && (t.fn.headroom = function (e) {
    return this.each(function () {
      var n = t(this),
          i = n.data("headroom"),
          o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;o = t.extend(!0, {}, Headroom.options, o), i || ((i = new Headroom(this, o)).init(), n.data("headroom", i)), "string" == typeof e && (i[e](), "destroy" === e && n.removeData("headroom"));
    });
  }, t("[data-headroom]").each(function () {
    var e = t(this);e.headroom(e.data());
  }));
}(window.Zepto || window.jQuery), function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  "use strict";
  var e = t.scrollTo = function (e, n, i) {
    return t(window).scrollTo(e, n, i);
  };function n(e) {
    return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(e) {
    return t.isFunction(e) || t.isPlainObject(e) ? e : { top: e, left: e };
  }return e.defaults = { axis: "xy", duration: 0, limit: !0 }, t.fn.scrollTo = function (o, r, s) {
    "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (s = r, r = 0), "function" == typeof s && (s = { onAfter: s }), "max" === o && (o = 9e9), s = t.extend({}, e.defaults, s), r = r || s.duration;var a = s.queue && s.axis.length > 1;return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== o) {
        var l,
            c = n(this),
            u = c ? this.contentWindow || window : this,
            d = t(u),
            h = o,
            f = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);break;
            }h = c ? t(h) : t(h, u);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = t(h)).offset());}var p = t.isFunction(s.offset) && s.offset(u, h) || s.offset;t.each(s.axis.split(""), function (t, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              g = d[r](),
              v = e.max(u, n);if (l) f[r] = l[o] + (c ? 0 : g - d.offset()[o]), s.margin && (f[r] -= parseInt(h.css("margin" + i), 10) || 0, f[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), f[r] += p[o] || 0, s.over[o] && (f[r] += h["x" === n ? "width" : "height"]() * s.over[o]);else {
            var y = h[o];f[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(f[r]) && (f[r] = f[r] <= 0 ? 0 : Math.min(f[r], v)), !t && s.axis.length > 1 && (g === f[r] ? f = {} : a && (m(s.onAfterFirst), f = {}));
        }), m(s.onAfter);
      }function m(e) {
        var n = t.extend({}, s, { queue: !0, duration: r, complete: e && function () {
            e.call(u, h, s);
          } });d.animate(f, n);
      }
    });
  }, e.max = function (e, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(e)) return e[r] - t(e)[o.toLowerCase()]();var s = "client" + o,
        a = e.ownerDocument || e.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[r], c[r]) - Math.min(l[s], c[s]);
  }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = { get: function get(e) {
      return t(e.elem)[e.prop]();
    }, set: function set(e) {
      var n = this.get(e);if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();var i = Math.round(e.now);n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e));
    } }, e;
}), function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? t(require("jquery")) : t(window.jQuery || window.Zepto);
}(function (t) {
  var e,
      n,
      i,
      o,
      r,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = t(window),
      u = function u(t, n) {
    e.ev.on("mfp" + t + ".mfp", n);
  },
      d = function d(e, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r;
  },
      h = function h(n, i) {
    e.ev.triggerHandler("mfp" + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]));
  },
      f = function f(n) {
    return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn;
  },
      p = function p() {
    t.magnificPopup.instance || ((e = new a()).init(), t.magnificPopup.instance = e);
  };a.prototype = { constructor: a, init: function init() {
      var n = navigator.appVersion;e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = function () {
        var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];if (void 0 !== t.transition) return !0;for (; e.length;) {
          if (e.pop() + "Transition" in t) return !0;
        }return !1;
      }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {};
    }, open: function open(n) {
      var o;if (!1 === n.isObj) {
        e.items = n.items.toArray(), e.index = 0;var s,
            a = n.items;for (o = 0; o < a.length; o++) {
          if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
            e.index = o;break;
          }
        }
      } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;if (!e.isOpen) {
        e.types = [], r = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = d("bg").on("click.mfp", function () {
          e.close();
        }), e.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (t) {
          e._checkIfClose(t.target) && e.close();
        }), e.container = d("container", e.wrap)), e.contentContainer = d("content"), e.st.preloader && (e.preloader = d("preloader", e.container, e.st.tLoading));var l = t.magnificPopup.modules;for (o = 0; o < l.length; o++) {
          var p = l[o];p = p.charAt(0).toUpperCase() + p.slice(1), e["init" + p].call(e);
        }h("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (u("MarkupParse", function (t, e, n, i) {
          n.close_replaceWith = f(i.type);
        }), r += " mfp-close-btn-in") : e.wrap.append(f())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: i.height(), position: "absolute" }), e.st.enableEscapeKey && i.on("keyup.mfp", function (t) {
          27 === t.keyCode && e.close();
        }), c.on("resize.mfp", function () {
          e.updateSize();
        }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);var m = e.wH = c.height(),
            g = {};if (e.fixedContentPos && e._hasScrollBar(m)) {
          var v = e._getScrollbarSize();v && (g.marginRight = v);
        }e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = e.st.mainClass;return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), h("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
          e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", e._onFocusIn);
        }, 16), e.isOpen = !0, e.updateSize(m), h("Open"), n;
      }e.updateItemHTML();
    }, close: function close() {
      e.isOpen && (h("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function () {
        e._close();
      }, e.st.removalDelay)) : e._close());
    }, _close: function _close() {
      h("Close");var n = "mfp-removing mfp-ready ";if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
        var o = { marginRight: "" };e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o);
      }i.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(t) {
      if (e.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;e.wrap.css("height", i), e.wH = i;
      } else e.wH = t || c.height();e.fixedContentPos || e.wrap.css("height", e.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = e.items[e.index];e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));var i = n.type;if (h("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
        var r = !!e.st[i] && e.st[i].markup;h("FirstMarkupParse", r), e.currTemplate[i] = !r || t(r);
      }o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);e.appendContent(s, i), n.preloaded = !0, h("Change", n), o = n.type, e.container.prepend(e.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(t, n) {
      e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[n] ? e.content.find(".mfp-close").length || e.content.append(f()) : e.content = t : e.content = "", h("BeforeAppend"), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content);
    }, parseEl: function parseEl(n) {
      var i,
          o = e.items[n];if (o.tagName ? o = { el: t(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
        for (var r = e.types, s = 0; s < r.length; s++) {
          if (o.el.hasClass("mfp-" + r[s])) {
            i = r[s];break;
          }
        }o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, h("ElementParse", o), e.items[n];
    }, addGroup: function addGroup(t, n) {
      var i = function i(_i) {
        _i.mfpEl = this, e._openClick(_i, t, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;if (r) if (t.isFunction(r)) {
          if (!r.call(e)) return !0;
        } else if (c.width() < r) return !0;n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o);
      }
    }, updateStatus: function updateStatus(t, i) {
      if (e.preloader) {
        n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);var o = { status: t, text: i };h("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
          t.stopImmediatePropagation();
        }), e.container.addClass("mfp-s-" + t), n = t;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!t(n).hasClass("mfp-prevent-close")) {
        var i = e.st.closeOnContentClick,
            o = e.st.closeOnBgClick;if (i && o) return !0;if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;if (n === e.content[0] || t.contains(e.content[0], n)) {
          if (i) return !0;
        } else if (o && t.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(t) {
      e.bgOverlay.addClass(t), e.wrap.addClass(t);
    }, _removeClassFromMFP: function _removeClassFromMFP(t) {
      this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
    }, _hasScrollBar: function _hasScrollBar(t) {
      return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || c.height());
    }, _setFocus: function _setFocus() {
      (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target)) return e._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(e, n, i) {
      var o;i.data && (n = t.extend(i.data, n)), h("MarkupParse", [e, n, i]), t.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((o = n.split("_")).length > 1) {
          var r = e.find(".mfp-" + o[0]);if (r.length > 0) {
            var s = o[1];"replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(t("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i);
          }
        } else e.find(".mfp-" + n).html(i);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === e.scrollbarSize) {
        var t = document.createElement("div");t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
      }return e.scrollbarSize;
    } }, t.magnificPopup = { instance: null, proto: a.prototype, modules: [], open: function open(e, n) {
      return p(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = n || 0, this.instance.open(e);
    }, close: function close() {
      return t.magnificPopup.instance && t.magnificPopup.instance.close();
    }, registerModule: function registerModule(e, n) {
      n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function (n) {
    p();var i = t(this);if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = l ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({ mfpEl: o }, i, r);
      } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
    } else n = t.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);return i;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };t.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        e.types.push("inline"), u("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(n, i) {
        if (y(), n.src) {
          var o = e.st.inline,
              r = t(n.src);if (r.length) {
            var s = r[0].parentNode;s && s.tagName && (g || (m = o.hiddenClass, g = d(m), m = "mfp-" + m), v = r.after(g).detach().removeClass(m)), e.updateStatus("ready");
          } else e.updateStatus("error", o.tNotFound), r = t("<div>");return n.inlineElement = r, r;
        }return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i;
      } } });var b,
      _ = function _() {
    b && t(document.body).removeClass(b);
  },
      w = function w() {
    _(), e.req && e.req.abort();
  };t.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        e.types.push("ajax"), b = e.st.ajax.cursor, u("Close.ajax", w), u("BeforeChange.ajax", w);
      }, getAjax: function getAjax(n) {
        b && t(document.body).addClass(b), e.updateStatus("loading");var i = t.extend({ url: n.src, success: function success(i, o, r) {
            var s = { data: i, xhr: r };h("ParseAjax", s), e.appendContent(t(s.data), "ajax"), n.finished = !0, _(), e._setFocus(), setTimeout(function () {
              e.wrap.addClass("mfp-ready");
            }, 16), e.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            _(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src));
          } }, e.st.ajax.settings);return e.req = t.ajax(i), "";
      } } });var E;t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var n = e.st.image,
            i = ".image";e.types.push("image"), u("Open" + i, function () {
          "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor);
        }), u("Close" + i, function () {
          n.cursor && t(document.body).removeClass(n.cursor), c.off("resize.mfp");
        }), u("Resize" + i, e.resizeImage), e.isLowIE && u("AfterChange", e.resizeImage);
      }, resizeImage: function resizeImage() {
        var t = e.currItem;if (t && t.img && e.st.image.verticalFit) {
          var n = 0;e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(t) {
        t.img && (t.hasSize = !0, E && clearInterval(E), t.isCheckingImgSize = !1, h("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1));
      }, findImageSize: function findImageSize(t) {
        var n = 0,
            i = t.img[0],
            o = function o(r) {
          E && clearInterval(E), E = setInterval(function () {
            i.naturalWidth > 0 ? e._onImageHasSize(t) : (n > 200 && clearInterval(E), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, h("ImageLoadComplete")) : ++o < 200 ? setTimeout(r, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = e.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return e._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = e.st.image.titleSrc;if (i) {
              if (t.isFunction(i)) return i.call(e, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), e.resizeImage(), n.hasSize ? (E && clearInterval(E), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i);
      } } });var C;t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(t) {
        return t.is("img") ? t : t.find("img");
      } }, proto: { initZoom: function initZoom() {
        var t,
            n = e.st.zoom,
            i = ".zoom";if (n.enabled && e.supportsTransition) {
          var o,
              r,
              s = n.duration,
              a = function a(t) {
            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e;
          },
              l = function l() {
            e.content.css("visibility", "visible");
          };u("BuildControls" + i, function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();(r = a(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout(function () {
                r.css(e._getOffset(!0)), o = setTimeout(function () {
                  l(), setTimeout(function () {
                    r.remove(), t = r = null, h("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + i, function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.st.removalDelay = s, !t) {
                if (!(t = e._getItemToZoom())) return;r = a(t);
              }r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(e._getOffset());
              }, 16);
            }
          }), u("Close" + i, function () {
            e._allowZoom() && (l(), r && r.remove(), t = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === e.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!e.currItem.hasSize && e.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);o.top -= t(window).scrollTop() - r;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - r };return void 0 === C && (C = void 0 !== document.createElement("p").style.MozTransform), C ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a;
      } } });var x = function x(t) {
    if (e.currTemplate.iframe) {
      var n = e.currTemplate.iframe.find("iframe");n.length && (t || (n[0].src = "//about:blank"), e.isIE8 && n.css("display", t ? "block" : "none"));
    }
  };t.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        e.types.push("iframe"), u("BeforeChange", function (t, e, n) {
          e !== n && ("iframe" === e ? x() : "iframe" === n && x(!0));
        }), u("Close.iframe", function () {
          x();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = e.st.iframe;t.each(r.patterns, function () {
          if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1;
        });var s = {};return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(i, s, n), e.updateStatus("ready"), i;
      } } });var T = function T(t) {
    var n = e.items.length;return t > n - 1 ? t - n : t < 0 ? n + t : t;
  },
      S = function S(t, e, n) {
    return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
  };t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = e.st.gallery,
            o = ".mfp-gallery";if (e.direction = !0, !n || !n.enabled) return !1;r += " mfp-gallery", u("Open" + o, function () {
          n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function () {
            if (e.items.length > 1) return e.next(), !1;
          }), i.on("keydown" + o, function (t) {
            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
          });
        }), u("UpdateStatus" + o, function (t, n) {
          n.text && (n.text = S(n.text, e.currItem.index, e.items.length));
        }), u("MarkupParse" + o, function (t, i, o, r) {
          var s = e.items.length;o.counter = s > 1 ? S(n.tCounter, r.index, s) : "";
        }), u("BuildControls" + o, function () {
          if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
            var i = n.arrowMarkup,
                o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");o.click(function () {
              e.prev();
            }), r.click(function () {
              e.next();
            }), e.container.append(o.add(r));
          }
        }), u("Change" + o, function () {
          e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
            e.preloadNearbyImages(), e._preloadTimeout = null;
          }, 16);
        }), u("Close" + o, function () {
          i.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null;
        });
      }, next: function next() {
        e.direction = !0, e.index = T(e.index + 1), e.updateItemHTML();
      }, prev: function prev() {
        e.direction = !1, e.index = T(e.index - 1), e.updateItemHTML();
      }, goTo: function goTo(t) {
        e.direction = t >= e.index, e.index = t, e.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var t,
            n = e.st.gallery.preload,
            i = Math.min(n[0], e.items.length),
            o = Math.min(n[1], e.items.length);for (t = 1; t <= (e.direction ? o : i); t++) {
          e._preloadItem(e.index + t);
        }for (t = 1; t <= (e.direction ? i : o); t++) {
          e._preloadItem(e.index - t);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = T(n), !e.items[n].preloaded) {
          var i = e.items[n];i.parsed || (i = e.parseEl(n)), h("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, h("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });t.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(t) {
        return t.src.replace(/\.\w+$/, function (t) {
          return "@2x" + t;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var t = e.st.retina,
              n = t.ratio;(n = isNaN(n) ? n() : n) > 1 && (u("ImageHasSize.retina", function (t, e) {
            e.img.css({ "max-width": e.img[0].naturalWidth / n, width: "100%" });
          }), u("ElementParse.retina", function (e, i) {
            i.src = t.replaceSrc(i, n);
          }));
        }
      } } }), p();
}), function (t) {
  "use strict";
  var e = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = t("body");1 != t(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o = t(window).width(),
        r = t(window).height();o < e.sm && (i = "xs"), o >= e.sm && o < e.md && (i = "sm"), o >= e.md && o < e.lg && (i = "md"), o >= e.lg && o < e.xl && (i = "lg"), o >= e.xl && (i = "xl"), t(".lv-screen-data").html(o + " x " + r + "<br>" + i).css({ position: "fixed", top: 0, padding: "10px 20px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < r.length; s++) {
      e[n[s]] = Number(r[s].replace("px", "")), o += "<tr><td>" + n[s] + "</td><td>" + r[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", t('[data-js="lv-responsive-table"]').append(i);
  }(), t("html[development]").length && (i(), t(window).resize(function () {
    i();
  }));
}(jQuery), launchGallery(), launchSlider(), function (t) {
  "use strict";
  var e = t("html"),
      n = t(".lv-off-canvas .dropdown"),
      i = t(".lv-page"),
      o = t(".lv-off-canvas"),
      r = t('a[href*="#"]:not([href="#"])', o),
      s = t('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');t("[data-menu-toggle]").click(function (n) {
    t(".has-open-menu").length || (e.removeClass("has-closed-menu").addClass("has-open-menu"), setTimeout(function () {
      i.click(function (n) {
        n.stopPropagation(), t(".has-open-menu").length && (e.removeClass("has-open-menu").addClass("has-closed-menu"), t(this).unbind("click"));
      });
    }, 10));
  }), r.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e.removeClass("has-open-menu").addClass("has-closed-menu"), i.unbind("click");
  }), s.click(function (e) {
    e.preventDefault(), e.stopPropagation(), t(this).parent().next(".dropdown").addClass("is-open");
  }), n.click(function (e) {
    t(this).removeClass("is-open"), e.stopPropagation();
  }), t(".lv-off-canvas .has-dropdown > a").append(s);
}(jQuery), $("[data-search-trigger]").click(function (t) {
  var e = $("[data-search]");return e.removeClass("is-hidden"), $(document).on("scroll", function () {
    e.addClass("is-hidden"), document.activeElement.blur();
  }), !1;
}), $("[data-search] .close").on("click", function () {
  $("[data-search]").addClass("is-hidden"), document.activeElement.blur();
}), $(window).on("load", function () {
  $("html").addClass("has-loaded");
}), $(function () {
  $('[data-toggle="tooltip"]').tooltip();
}), $('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function () {
  var t = $(this).attr("href"),
      e = $(t);e.length && $.scrollTo(e.offset().top - 50, 500);
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
}), $('a[href="#sitemap"]').length && $('a[href="#sitemap"]').click(function () {
  var t = $(this).attr("href"),
      e = $(t);$(".fa-angle-down").toggleClass("is-active"), setTimeout(function () {
    $.scrollTo(e.offset().top, 300);
  }, 300);
}), $(".global-header, .btn-back-top").headroom((_$$headroom = { offset: 378, tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", function onTop() {}), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
