var _$$headroom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      i = e.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      f = c.hasOwnProperty,
      h = f.toString,
      d = h.call(Object),
      p = {},
      g = function g(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      m = function m(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var o,
        r = (t = t || i).createElement("script");if (r.text = e, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }t.head.appendChild(r).parentNode.removeChild(r);
  }function _(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = function b(e, t) {
    return new b.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(e) {
    var t = !!e && "length" in e && e.length,
        n = _(e);return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }b.fn = b.prototype = { jquery: "3.3.1", constructor: b, length: 0, toArray: function toArray() {
      return r.call(this);
    }, get: function get(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = b.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return b.each(this, e);
    }, map: function map(e) {
      return this.pushStack(b.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, b.extend = b.fn.extend = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (b.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && b.isPlainObject(n) ? n : {}, s[t] = b.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, b.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== u.call(e)) && (!(t = o(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (E(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
        !t(e[o], o) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          o,
          r = 0,
          a = [];if (E(e)) for (i = e.length; r < i; r++) {
        null != (o = t(e[r], r, n)) && a.push(o);
      } else for (r in e) {
        null != (o = t(e[r], r, n)) && a.push(o);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var w = function (e) {
    var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        f,
        h,
        d,
        p,
        g,
        m,
        v,
        y,
        _,
        b = "sizzle" + 1 * new Date(),
        T = e.document,
        E = 0,
        w = 0,
        C = se(),
        x = se(),
        S = se(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        A = {}.hasOwnProperty,
        N = [],
        I = N.pop,
        k = N.push,
        O = N.push,
        L = N.slice,
        j = function j(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        R = "\\[" + P + "*(" + q + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + P + "*\\]",
        M = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        F = new RegExp(P + "+", "g"),
        W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        B = new RegExp("^" + P + "*," + P + "*"),
        $ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        U = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        V = new RegExp(M),
        K = new RegExp("^" + q + "$"),
        Q = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), TAG: new RegExp("^(" + q + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + M), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: new RegExp("^(?:" + H + ")$", "i"), needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        z = /^h\d$/i,
        X = /^[^{]+\{\s*\[native \w/,
        G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      h();
    },
        oe = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      O.apply(N = L.call(T.childNodes), T.childNodes), N[T.childNodes.length].nodeType;
    } catch (e) {
      O = { apply: N.length ? function (e, t) {
          k.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function re(e, t, i, o) {
      var r,
          a,
          c,
          u,
          f,
          p,
          v,
          y = t && t.ownerDocument,
          E = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;if (!o && ((t ? t.ownerDocument || t : T) !== d && h(t), t = t || d, g)) {
        if (11 !== E && (f = G.exec(e))) if (r = f[1]) {
          if (9 === E) {
            if (!(c = t.getElementById(r))) return i;if (c.id === r) return i.push(c), i;
          } else if (y && (c = y.getElementById(r)) && _(t, c) && c.id === r) return i.push(c), i;
        } else {
          if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;if ((r = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i;
        }if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
          if (1 !== E) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = b), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === b && t.removeAttribute("id");
          }
        }
      }return l(e.replace(W, "$1"), t, i, o);
    }function se() {
      var e = [];return function t(n, o) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
      };
    }function ae(e) {
      return e[b] = !0, e;
    }function le(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ce(e, t) {
      for (var n = e.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = t;
      }
    }function ue(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = re.support = {}, r = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, h = re.setDocument = function (e) {
      var t,
          o,
          s = e ? e.ownerDocument || e : T;return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !r(d), T !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = X.test(d.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n,
              i,
              o,
              r = t.getElementById(e);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], m = [], (n.qsa = X.test(d.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = X.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M);
      }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = X.test(p.compareDocumentPosition), _ = t || X.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === T && _(T, e) ? -1 : t === d || t.ownerDocument === T && _(T, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            a = [t];if (!o || !r) return e === d ? -1 : t === d ? 1 : o ? -1 : r ? 1 : u ? j(u, e) - j(u, t) : 0;if (o === r) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === T ? -1 : a[i] === T ? 1 : 0;
      }, d) : d;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return re(t, d, null, [e]).length > 0;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && h(e), _(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== d && h(e);var o = i.attrHandle[t.toLowerCase()],
          r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, re.escape = function (e) {
      return (e + "").replace(te, ne);
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
          i = [],
          o = 0,
          r = 0;if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), f) {
        for (; t = e[r++];) {
          t === e[r] && (o = i.push(r));
        }for (; o--;) {
          e.splice(i[o], 1);
        }
      }return u = null, e;
    }, o = re.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += o(t);
      }return n;
    }, (i = re.selectors = { cacheLength: 50, createPseudo: ae, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = C[e + " "];return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var o = re.attr(i, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                u,
                f,
                h,
                d,
                p,
                g = r !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                _ = !1;if (m) {
              if (r) {
                for (; g;) {
                  for (h = t; h = h[g];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = g = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? m.firstChild : m.lastChild], s && y) {
                for (_ = (d = (c = (u = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop();) {
                  if (1 === h.nodeType && ++_ && h === t) {
                    u[e] = [E, d, _];break;
                  }
                }
              } else if (y && (_ = d = (c = (u = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === _) for (; (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((u = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, _]), h !== t));) {}return (_ -= o) === i || _ % i == 0 && _ / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, r = o(e, t), s = r.length; s--;) {
              e[i = j(e, r[s])] = !(n[i] = r[s]);
            }
          }) : function (e) {
            return o(e, 0, n);
          }) : o;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(W, "$1"));return i[b] ? ae(function (e, t, n, o) {
            for (var r, s = i(e, null, o, []), a = e.length; a--;) {
              (r = s[a]) && (e[a] = !(t[a] = r));
            }
          }) : function (e, o, r) {
            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return K.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, header: function header(e) {
          return z.test(e.nodeName);
        }, input: function input(e) {
          return Y.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      i.pseudos[t] = he(t);
    }function me() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = w++;return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }return !1;
      } : function (t, n, l) {
        var c,
            u,
            f,
            h = [E, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[r]) && c[0] === E && c[1] === a) return h[2] = c[2];if (u[r] = h, h[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function _e(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      }return s;
    }function Te(e, t, n, i, o, r) {
      return i && !i[b] && (i = Te(i)), o && !o[b] && (o = Te(o, r)), ae(function (r, s, a, l) {
        var c,
            u,
            f,
            h = [],
            d = [],
            p = s.length,
            g = r || function (e, t, n) {
          for (var i = 0, o = t.length; i < o; i++) {
            re(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !r && t ? g : be(g, h, e, a, l),
            v = n ? o || (r ? e : p || i) ? [] : s : m;if (n && n(m, v, a, l), i) for (c = be(v, d), i(c, [], a, l), u = c.length; u--;) {
          (f = c[u]) && (v[d[u]] = !(m[d[u]] = f));
        }if (r) {
          if (o || e) {
            if (o) {
              for (c = [], u = v.length; u--;) {
                (f = v[u]) && c.push(m[u] = f);
              }o(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (f = v[u]) && (c = o ? j(r, f) : h[u]) > -1 && (r[c] = !(s[c] = f));
            }
          }
        } else v = be(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : O.apply(s, v);
      });
    }function Ee(e) {
      for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), f = ye(function (e) {
        return j(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));return t = null, o;
      }]; l < r; l++) {
        if (n = i.relative[e[l].type]) h = [ye(_e(h), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++) {}return Te(l > 1 && _e(h), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < o && Ee(e.slice(l, o)), o < r && Ee(e = e.slice(o)), o < r && ve(e));
          }h.push(n);
        }
      }return _e(h);
    }return me.prototype = i.filters = i.pseudos, i.setFilters = new me(), s = re.tokenize = function (e, t) {
      var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = x[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = $.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(W, " ") }), a = a.slice(n.length)), i.filter) {
          !(o = Q[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? re.error(e) : x(e, l).slice(0);
    }, a = re.compile = function (e, t) {
      var n,
          o = [],
          r = [],
          a = S[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = Ee(t[n]))[b] ? o.push(a) : r.push(a);
        }(a = S(e, function (e, t) {
          var n = t.length > 0,
              o = e.length > 0,
              r = function r(_r, s, a, l, u) {
            var f,
                p,
                m,
                v = 0,
                y = "0",
                _ = _r && [],
                b = [],
                T = c,
                w = _r || o && i.find.TAG("*", u),
                C = E += null == T ? 1 : Math.random() || .1,
                x = w.length;for (u && (c = s === d || s || u); y !== x && null != (f = w[y]); y++) {
              if (o && f) {
                for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];) {
                  if (m(f, s || d, a)) {
                    l.push(f);break;
                  }
                }u && (E = C);
              }n && ((f = !m && f) && v--, _r && _.push(f));
            }if (v += y, n && y !== v) {
              for (p = 0; m = t[p++];) {
                m(_, b, s, a);
              }if (_r) {
                if (v > 0) for (; y--;) {
                  _[y] || b[y] || (b[y] = I.call(l));
                }b = be(b);
              }O.apply(l, b), u && !_r && b.length > 0 && v + t.length > 1 && re.uniqueSort(l);
            }return u && (E = C, c = T), _;
          };return n ? ae(r) : r;
        }(r, o))).selector = e;
      }return a;
    }, l = re.select = function (e, t, n, o) {
      var r,
          l,
          c,
          u,
          f,
          h = "function" == typeof e && e,
          d = !o && s(e = h.selector || e);if (n = n || [], 1 === d.length) {
        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (r = Q.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
          if ((f = i.find[u]) && (o = f(c.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
            if (l.splice(r, 1), !(e = o.length && ve(l))) return O.apply(n, o), n;break;
          }
        }
      }return (h || a(e, d))(o, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ce(H, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(e);b.find = w, b.expr = w.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = w.uniqueSort, b.text = w.getText, b.isXMLDoc = w.isXML, b.contains = w.contains, b.escapeSelector = w.escape;var C = function C(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && b(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      x = function x(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      S = b.expr.match.needsContext;function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e, t, n) {
    return g(t) ? b.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? b.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? b.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : b.filter(t, e, n);
  }b.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, b.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          o = this;if ("string" != typeof e) return this.pushStack(b(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (b.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        b.find(e, o[t], n);
      }return i > 1 ? b.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(N(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(N(this, e || [], !0));
    }, is: function is(e) {
      return !!N(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length;
    } });var I,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(b.fn.init = function (e, t, n) {
    var o, r;if (!e) return this;if (n = n || I, "string" == typeof e) {
      if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (o[1]) {
        if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(o[1]) && b.isPlainObject(t)) for (o in t) {
          g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        }return this;
      }return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this);
  }).prototype = b.fn, I = b(i);var O = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };function j(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }b.fn.extend({ has: function has(e) {
      var t = b(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (b.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && b(e);if (!S.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? b.uniqueSort(r) : r);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(b(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), b.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return C(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return C(e, "parentNode", n);
    }, next: function next(e) {
      return j(e, "nextSibling");
    }, prev: function prev(e) {
      return j(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return C(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return C(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return C(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return C(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return x((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x(e.firstChild);
    }, contents: function contents(e) {
      return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), b.merge([], e.childNodes));
    } }, function (e, t) {
    b.fn[e] = function (n, i) {
      var o = b.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = b.filter(i, o)), this.length > 1 && (L[e] || b.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o);
    };
  });var H = /[^\x20\t\r\n\f]+/g;function P(e) {
    return e;
  }function q(e) {
    throw e;
  }function R(e, t, n, i) {
    var o;try {
      e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }b.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return b.each(e.match(H) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : b.extend({}, e);var t,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function l() {
      for (o = o || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < r.length;) {
          !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
    },
        c = { add: function add() {
        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
          b.each(n, function (n, i) {
            g(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== _(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return b.each(arguments, function (e, t) {
          for (var n; (n = b.inArray(t, r, n)) > -1;) {
            r.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? b.inArray(e, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = s = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = s = [], n || t || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(e, n) {
        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, b.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return b.Deferred(function (t) {
            b.each(n, function (n, i) {
              var o = g(e[i[4]]) && e[i[4]];r[i[1]](function () {
                var e = o && o.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, o) {
          var r = 0;function s(t, n, i, o) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < r)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(c) ? o ? c.call(e, s(r, n, P, o), s(r, n, q, o)) : (r++, c.call(e, s(r, n, P, o), s(r, n, q, o), s(r, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (o || n.resolveWith)(a, l));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (e) {
                  b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (i !== q && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (b.Deferred.getStackHook && (u.stackTrace = b.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return b.Deferred(function (e) {
            n[0][3].add(s(0, e, g(o) ? o : P, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : P)), n[2][3].add(s(0, e, g(i) ? i : q));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? b.extend(e, o) : o;
        } },
          r = {};return b.each(n, function (e, t) {
        var s = t[2],
            a = t[5];o[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = s.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = b.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o);
        };
      };if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(o[n] && o[n].then))) return s.then();for (; n--;) {
        R(o[n], a(n), s.reject);
      }return s.promise();
    } });var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;b.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, b.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = b.Deferred();function W() {
    i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), b.ready();
  }b.fn.ready = function (e) {
    return F.then(e).catch(function (e) {
      b.readyException(e);
    }), this;
  }, b.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || F.resolveWith(i, [b]));
    } }), b.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));var B = function B(e, t, n, i, o, r, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === _(n)) for (a in o = !0, n) {
      B(e, t, a, n[a], !0, r, s);
    } else if (void 0 !== i && (o = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(b(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  },
      $ = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function K(e) {
    return e.replace($, "ms-").replace(U, V);
  }var Q = function Q(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Y() {
    this.expando = b.expando + Y.uid++;
  }Y.uid = 1, Y.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          o = this.cache(e);if ("string" == typeof t) o[K(t)] = n;else for (i in t) {
        o[K(i)] = t[i];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(H) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !b.isEmptyObject(t);
    } };var z = new Y(),
      X = new Y(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}X.set(e, t, n);
    } else n = void 0;return n;
  }b.extend({ hasData: function hasData(e) {
      return X.hasData(e) || z.hasData(e);
    }, data: function data(e, t, n) {
      return X.access(e, t, n);
    }, removeData: function removeData(e, t) {
      X.remove(e, t);
    }, _data: function _data(e, t, n) {
      return z.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      z.remove(e, t);
    } }), b.fn.extend({ data: function data(e, t) {
      var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 === e) {
        if (this.length && (o = X.get(r), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), Z(r, i, o[i]));
          }z.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        X.set(this, e);
      }) : B(this, function (t) {
        var n;if (r && void 0 === t) return void 0 !== (n = X.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;this.each(function () {
          X.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        X.remove(this, e);
      });
    } }), b.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = z.get(e, t), n && (!i || Array.isArray(n) ? i = z.access(e, t, b.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = b.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = b._queueHooks(e, t);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        b.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return z.get(e, n) || z.access(e, n, { empty: b.Callbacks("once memory").add(function () {
          z.remove(e, [t + "queue", n]);
        }) });
    } }), b.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = b.queue(this, e, t);b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        b.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          o = b.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = z.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), o.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display");
  },
      oe = function oe(e, t, n, i) {
    var o,
        r,
        s = {};for (r in t) {
      s[r] = e.style[r], e.style[r] = t[r];
    }for (r in o = n.apply(e, i || []), t) {
      e.style[r] = s[r];
    }return o;
  };function re(e, t, n, i) {
    var o,
        r,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return b.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (b.cssNumber[t] ? "" : "px"),
        u = (b.cssNumber[t] || "px" !== c && +l) && te.exec(b.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        b.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
      }u *= 2, b.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = se[i];return o || (t = n.body.appendChild(n.createElement(i)), o = b.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), se[i] = o, o);
  }function le(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
      (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = z.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = ae(i))) : "none" !== n && (o[r] = "none", z.set(i, "display", n)));
    }for (r = 0; r < s; r++) {
      null != o[r] && (e[r].style.display = o[r]);
    }return e;
  }b.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? b(this).show() : b(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fe = /^$|^module$|\/(?:java|ecma)script/i,
      he = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function de(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? b.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"));
    }
  }he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;var ge,
      me,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, o) {
    for (var r, s, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++) {
      if ((r = e[d]) || 0 === r) if ("object" === _(r)) b.merge(h, r.nodeType ? [r] : r);else if (ve.test(r)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + b.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }b.merge(h, s.childNodes), (s = f.firstChild).textContent = "";
      } else h.push(t.createTextNode(r));
    }for (f.textContent = "", d = 0; r = h[d++];) {
      if (i && b.inArray(r, i) > -1) o && o.push(r);else if (c = b.contains(r.ownerDocument, r), s = de(f.appendChild(r), "script"), c && pe(s), n) for (u = 0; r = s[u++];) {
        fe.test(r.type || "") && n.push(r);
      }
    }return f;
  }ge = i.createDocumentFragment().appendChild(i.createElement("div")), (me = i.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;var _e = i.documentElement,
      be = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;function we() {
    return !0;
  }function Ce() {
    return !1;
  }function xe() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function Se(e, t, n, i, o, r) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        Se(e, a, n, i, t[a], r);
      }return e;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ce;else if (!o) return e;return 1 === r && (s = o, (o = function o(e) {
      return b().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = b.guid++)), e.each(function () {
      b.event.add(this, t, o, i, n);
    });
  }b.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          f,
          h,
          d,
          p,
          g,
          m = z.get(e);if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && b.find.matchesSelector(_e, o), n.guid || (n.guid = b.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(H) || [""]).length; c--;) {
        d = g = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, u = b.extend({ type: d, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && b.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), b.event.global[d] = !0);
      }
    }, remove: function remove(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          f,
          h,
          d,
          p,
          g,
          m = z.hasData(e) && z.get(e);if (m && (l = m.events)) {
        for (c = (t = (t || "").match(H) || [""]).length; c--;) {
          if (d = g = (a = Ee.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
            for (f = b.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) {
              u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(e, u));
            }s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || b.removeEvent(e, d, m.handle), delete l[d]);
          } else for (d in l) {
            b.event.remove(e, d + t[c], n, i, !0);
          }
        }b.isEmptyObject(l) && z.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = b.event.fix(e),
          l = new Array(arguments.length),
          c = (z.get(this, "events") || {})[a.type] || [],
          u = b.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = b.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((b.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? b(o, this).index(c) > -1 : b.find(o, this, null, [c]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: c, handlers: r });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(b.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[b.expando] ? e : new b.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xe() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xe() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return D(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, b.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, b.Event = function (e, t) {
    if (!(this instanceof b.Event)) return new b.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0;
  }, b.Event.prototype = { constructor: b.Event, isDefaultPrevented: Ce, isPropagationStopped: Ce, isImmediatePropagationStopped: Ce, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, b.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, b.event.addProp), b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    b.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === this || b.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), b.fn.extend({ on: function on(e, t, n, i) {
      return Se(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        b.event.remove(this, e, n, t);
      });
    } });var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ke(e, t) {
    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e;
  }function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function je(e, t) {
    var n, i, o, r, s, a, l, c;if (1 === t.nodeType) {
      if (z.hasData(e) && (r = z.access(e), s = z.set(t, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[o].length; n < i; n++) {
          b.event.add(t, o, c[o][n]);
        }
      }X.hasData(e) && (a = X.access(e), l = b.extend({}, a), X.set(t, l));
    }
  }function He(e, t, n, i) {
    t = s.apply([], t);var o,
        r,
        a,
        l,
        c,
        u,
        f = 0,
        h = e.length,
        d = h - 1,
        m = t[0],
        v = g(m);if (v || h > 1 && "string" == typeof m && !p.checkClone && Ne.test(m)) return e.each(function (o) {
      var r = e.eq(o);v && (t[0] = m.call(this, o, r.html())), He(r, t, n, i);
    });if (h && (r = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (a = b.map(de(o, "script"), Oe)).length; f < h; f++) {
        c = o, f !== d && (c = b.clone(c, !0, !0), l && b.merge(a, de(c, "script"))), n.call(e[f], c, f);
      }if (l) for (u = a[a.length - 1].ownerDocument, b.map(a, Le), f = 0; f < l; f++) {
        c = a[f], fe.test(c.type || "") && !z.access(c, "globalEval") && b.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c));
      }
    }return e;
  }function Pe(e, t, n) {
    for (var i, o = t ? b.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || b.cleanData(de(i)), i.parentNode && (n && b.contains(i.ownerDocument, i) && pe(de(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }b.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(De, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          f = b.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (s = de(u), i = 0, o = (r = de(e)).length; i < o; i++) {
        a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (r = r || de(e), s = s || de(u), i = 0, o = r.length; i < o; i++) {
        je(r[i], s[i]);
      } else je(e, u);return (s = de(u, "script")).length > 0 && pe(s, !f && de(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, o = b.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (Q(n)) {
          if (t = n[z.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
            }n[z.expando] = void 0;
          }n[X.expando] && (n[X.expando] = void 0);
        }
      }
    } }), b.fn.extend({ detach: function detach(e) {
      return Pe(this, e, !0);
    }, remove: function remove(e) {
      return Pe(this, e);
    }, text: function text(e) {
      return B(this, function (e) {
        return void 0 === e ? b.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ke(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (b.cleanData(de(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return b.clone(this, e, t);
      });
    }, html: function html(e) {
      return B(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = b.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (b.cleanData(de(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return He(this, arguments, function (t) {
        var n = this.parentNode;b.inArray(this, e) < 0 && (b.cleanData(de(this)), n && n.replaceChild(t, this));
      }, e);
    } }), b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    b.fn[e] = function (e) {
      for (var n, i = [], o = b(e), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), b(o[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Me = new RegExp(ne.join("|"), "i");function Fe(e, t, n) {
    var i,
        o,
        r,
        s,
        a = e.style;return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (s = b.style(e, t)), !p.pixelBoxStyles() && qe.test(s) && Me.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function We(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", _e.removeChild(c), u = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var o,
        r,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, b.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), r;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), s;
      } }));
  }();var Be = /^(none|table(?!-c[ea]).+)/,
      $e = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ke = ["Webkit", "Moz", "ms"],
      Qe = i.createElement("div").style;function Ye(e) {
    var t = b.cssProps[e];return t || (t = b.cssProps[e] = function (e) {
      if (e in Qe) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;) {
        if ((e = Ke[n] + t) in Qe) return e;
      }
    }(e) || e), t;
  }function ze(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Xe(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += b.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= b.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= b.css(e, "border" + ne[s] + "Width", !0, o))) : (l += b.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += b.css(e, "border" + ne[s] + "Width", !0, o) : a += b.css(e, "border" + ne[s] + "Width", !0, o));
    }return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l;
  }function Ge(e, t, n) {
    var i = Re(e),
        o = Fe(e, t, i),
        r = "border-box" === b.css(e, "boxSizing", !1, i),
        s = r;if (qe.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (p.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === b.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + Xe(e, t, n || (r ? "border" : "content"), s, i, o) + "px";
  }function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }b.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            s,
            a = K(t),
            l = $e.test(t),
            c = e.style;if (l || (t = Ye(a)), s = b.cssHooks[t] || b.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (b.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var o,
          r,
          s,
          a = K(t);return $e.test(t) || (t = Ye(a)), (s = b.cssHooks[t] || b.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Fe(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), b.each(["height", "width"], function (e, t) {
    b.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !Be.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : oe(e, Ue, function () {
          return Ge(e, t, i);
        });
      }, set: function set(e, n, i) {
        var o,
            r = Re(e),
            s = "border-box" === b.css(e, "boxSizing", !1, r),
            a = i && Xe(e, t, i, s, r);return s && p.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Xe(e, t, "border", !1, r) - .5)), a && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = b.css(e, t)), ze(0, n, a);
      } };
  }), b.cssHooks.marginLeft = We(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    b.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, "margin" !== e && (b.cssHooks[e + t].set = ze);
  }), b.fn.extend({ css: function css(e, t) {
      return B(this, function (e, t, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(t)) {
          for (i = Re(e), o = t.length; s < o; s++) {
            r[t[s]] = b.css(e, t[s], !1, i);
          }return r;
        }return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
      }, e, t, arguments.length > 1);
    } }), b.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (b.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    } }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit);
      } } }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, b.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, b.fx = Je.prototype.init, b.fx.step = {};var Ze,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, b.fx.interval), b.fx.tick());
  }function ot() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function rt(e, t) {
    var n,
        i = 0,
        o = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function st(e, t, n) {
    for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        o,
        r = 0,
        s = at.prefilters.length,
        a = b.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var t = Ze || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
        c.tweens[r].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: b.extend({}, t), opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || ot(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = b.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, o, r, s;for (n in e) {
        if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = b.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete e[i], r) {
          (n in e) || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
      }
    }(u, c.opts.specialEasing); r < s; r++) {
      if (i = at.prefilters[r].call(c, e, u, c.opts)) return g(i.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return b.map(u, st, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), b.fx.timer(b.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }b.Animation = b.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return re(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(H);for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          f = "width" in t || "height" in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && ie(e),
          m = z.get(e, "fxshow");for (i in n.queue || (null == (s = b._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, b.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (o = t[i], tt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
            if ("show" !== o || !m || void 0 === m[i]) continue;g = !0;
          }d[i] = m && m[i] || b.style(e, i);
        }
      }if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(d)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = z.get(e, "display")), "none" === (u = b.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = b.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === b.css(e, "float") && (l || (h.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, d) {
        l || (m ? "hidden" in m && (g = m.hidden) : m = z.access(e, "fxshow", { display: c }), r && (m.hidden = !g), g && le([e], !0), h.done(function () {
          for (i in g || le([e]), z.remove(e, "fxshow"), d) {
            b.style(e, i, d[i]);
          }
        })), l = st(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), b.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
    }, i;
  }, b.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var o = b.isEmptyObject(e),
          r = b.speed(t, n, i),
          s = function s() {
        var t = at(this, b.extend({}, e), r);(o || z.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = b.timers,
            s = z.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && nt.test(o) && i(s[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }!t && n || b.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = z.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = b.timers,
            s = i ? i.length : 0;for (n.finish = !0, b.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), b.each(["toggle", "show", "hide"], function (e, t) {
    var n = b.fn[t];b.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, o);
    };
  }), b.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    b.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), b.timers = [], b.fx.tick = function () {
    var e,
        t = 0,
        n = b.timers;for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || b.fx.stop(), Ze = void 0;
  }, b.fx.timer = function (e) {
    b.timers.push(e), b.fx.start();
  }, b.fx.interval = 13, b.fx.start = function () {
    et || (et = !0, it());
  }, b.fx.stop = function () {
    et = null;
  }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fn.delay = function (t, n) {
    return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = b.expr.attrHandle;b.fn.extend({ attr: function attr(e, t) {
      return B(this, b.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    } }), b.extend({ attr: function attr(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === r && b.isXMLDoc(e) || (o = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = b.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && D(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(H);if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || b.find.attr;ct[t] = function (e, t, i) {
      var o,
          r,
          s = t.toLowerCase();return i || (r = ct[s], ct[s] = o, o = null != n(e, t, i) ? s : null, ct[s] = r), o;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;function ht(e) {
    return (e.match(H) || []).join(" ");
  }function dt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
  }b.fn.extend({ prop: function prop(e, t) {
      return B(this, b.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    } }), b.extend({ prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && b.isXMLDoc(e) || (t = b.propFix[t] || t, o = b.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = b.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ut.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (b.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    b.propFix[this.toLowerCase()] = this;
  }), b.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (g(e)) return this.each(function (t) {
        b(this).addClass(e.call(this, t, dt(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = dt(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (g(e)) return this.each(function (t) {
        b(this).removeClass(e.call(this, t, dt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = dt(n), i = 1 === n.nodeType && " " + ht(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (a = ht(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        b(this).toggleClass(e.call(this, n, dt(this), t), t);
      }) : this.each(function () {
        var t, o, r, s;if (i) for (o = 0, r = b(this), s = pt(e); t = s[o++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = dt(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + ht(dt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var gt = /\r/g;b.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          o = this[0];return arguments.length ? (i = g(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? e.call(this, n, b(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = b.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(gt, "") : null == n ? "" : n : void 0;
    } }), b.extend({ valHooks: { option: { get: function get(e) {
          var t = b.find.attr(e, "value");return null != t ? t : ht(b.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (t = b(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, o = e.options, r = b.makeArray(t), s = o.length; s--;) {
            ((i = o[s]).selected = b.inArray(b.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), r;
        } } } }), b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1;
      } }, p.checkOn || (b.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var mt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };b.extend(b.event, { trigger: function trigger(t, n, o, r) {
      var s,
          a,
          l,
          c,
          u,
          h,
          d,
          p,
          v = [o || i],
          y = f.call(t, "type") ? t.type : t,
          _ = f.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !mt.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (y = (_ = y.split(".")).shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[b.expando] ? t : new b.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = r ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : b.makeArray(n, [t]), d = b.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(o, n))) {
        if (!r && !d.noBubble && !m(o)) {
          for (c = d.delegateType || y, mt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : d.bindType || y, (h = (z.get(a, "events") || {})[t.type] && z.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && Q(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Q(o) || u && g(o[y]) && !m(o) && ((l = o[u]) && (o[u] = null), b.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), b.event.triggered = void 0, l && (o[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });b.event.trigger(i, null, t);
    } }), b.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        b.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return b.event.trigger(e, t, n, !0);
    } }), p.focusin || b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      b.event.simulate(t, e.target, b.event.fix(e));
    };b.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            o = z.access(i, t);o || i.addEventListener(e, n, !0), z.access(i, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = z.access(i, t) - 1;o ? z.access(i, t, o) : (i.removeEventListener(e, n, !0), z.remove(i, t));
      } };
  });var yt = e.location,
      _t = Date.now(),
      bt = /\?/;b.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n;
  };var Tt = /\[\]$/,
      Et = /\r?\n/g,
      wt = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;function xt(e, t, n, i) {
    var o;if (Array.isArray(t)) b.each(t, function (t, o) {
      n || Tt.test(e) ? i(e, o) : xt(e + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i);
    });else if (n || "object" !== _(t)) i(e, t);else for (o in t) {
      xt(e + "[" + o + "]", t[o], n, i);
    }
  }b.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = g(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      xt(n, e[n], t, o);
    }return i.join("&");
  }, b.fn.extend({ serialize: function serialize() {
      return b.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = b.prop(this, "elements");return e ? b.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !b(this).is(":disabled") && Ct.test(this.nodeName) && !wt.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = b(this).val();return null == n ? null : Array.isArray(n) ? b.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var St = /%20/g,
      Dt = /#.*$/,
      At = /([?&])_=[^&]*/,
      Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      kt = /^\/\//,
      Ot = {},
      Lt = {},
      jt = "*/".concat("*"),
      Ht = i.createElement("a");function Pt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          o = 0,
          r = t.toLowerCase().match(H) || [];if (g(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function qt(e, t, n, i) {
    var o = {},
        r = e === Lt;function s(a) {
      var l;return o[a] = !0, b.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !o["*"] && s("*");
  }function Rt(e, t) {
    var n,
        i,
        o = b.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && b.extend(!0, e, i), e;
  }Ht.href = yt.href, b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": jt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Rt(Rt(e, b.ajaxSettings), t) : Rt(b.ajaxSettings, e);
    }, ajaxPrefilter: Pt(Ot), ajaxTransport: Pt(Lt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var o,
          r,
          s,
          a,
          l,
          c,
          u,
          f,
          h,
          d,
          p = b.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? b(g) : b.event,
          v = b.Deferred(),
          y = b.Callbacks("once memory"),
          _ = p.statusCode || {},
          T = {},
          E = {},
          w = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = Nt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, T[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) C.always(e[C.status]);else for (t in e) {
            _[t] = [_[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || w;return o && o.abort(t), x(0, t), this;
        } };if (v.promise(C), p.url = ((t || p.url || yt.href) + "").replace(kt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qt(Ot, p, n, C), u) return C;for (h in (f = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), r = p.url.replace(Dt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(St, "+")) : (d = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (bt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(At, "$1"), d = (bt.test(r) ? "&" : "?") + "_=" + _t++ + d), p.url = r + d), p.ifModified && (b.lastModified[r] && C.setRequestHeader("If-Modified-Since", b.lastModified[r]), b.etag[r] && C.setRequestHeader("If-None-Match", b.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        C.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || u)) return C.abort();if (w = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = qt(Lt, p, n, C)) {
        if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), u) return C;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          u = !1, o.send(T, x);
        } catch (e) {
          if (u) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");function x(t, n, i, a) {
        var c,
            h,
            d,
            T,
            E,
            w = n;u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (T = function (e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (o in a) {
            if (a[o] && a[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;break;
              }s || (s = o);
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, C, i)), T = function (e, t, n, i) {
          var o,
              r,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (r = u.shift(); r;) {
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: t };
        }(p, T, C, c), c ? (p.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (b.lastModified[r] = E), (E = C.getResponseHeader("etag")) && (b.etag[r] = E)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = T.state, h = T.data, c = !(d = T.error))) : (d = w, !t && w || (w = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || w) + "", c ? v.resolveWith(g, [h, w, C]) : v.rejectWith(g, [C, w, d]), C.statusCode(_), _ = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? h : d]), y.fireWith(g, [C, w]), f && (m.trigger("ajaxComplete", [C, p]), --b.active || b.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return b.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return b.get(e, void 0, t, "script");
    } }), b.each(["get", "post"], function (e, t) {
    b[t] = function (e, n, i, o) {
      return g(n) && (o = o || i, i = n, n = void 0), b.ajax(b.extend({ url: e, type: t, dataType: o, data: n, success: i }, b.isPlainObject(e) && e));
    };
  }), b._evalUrl = function (e) {
    return b.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, b.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        b(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = b(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        b(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        b(this).replaceWith(this.childNodes);
      }), this;
    } }), b.expr.pseudos.hidden = function (e) {
    return !b.expr.pseudos.visible(e);
  }, b.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, b.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Mt = { 0: 200, 1223: 204 },
      Ft = b.ajaxSettings.xhr();p.cors = !!Ft && "withCredentials" in Ft, p.ajax = Ft = !!Ft, b.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Ft && !t.crossDomain) return { send: function send(o, r) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          a.setRequestHeader(s, o[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), b.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return b.globalEval(e), e;
      } } }), b.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), b.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(o, r) {
        t = b("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Wt,
      Bt = [],
      $t = /(=)\?(?=&|$)|\?\?/;b.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Bt.pop() || b.expando + "_" + _t++;return this[e] = !0, e;
    } }), b.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        s,
        a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($t, "$1" + o) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || b.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? b(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && g(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Wt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), b.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = A.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = ye([e], t, s), s && s.length && b(s).remove(), b.merge([], r.childNodes)));var o, r, s;
  }, b.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = ht(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && b.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      r = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    b.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), b.expr.pseudos.animated = function (e) {
    return b.grep(b.timers, function (t) {
      return e === t.elem;
    }).length;
  }, b.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c = b.css(e, "position"),
          u = b(e),
          f = {};"static" === c && (e.style.position = "relative"), a = u.offset(), r = b.css(e, "top"), l = b.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, b.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : u.css(f);
    } }, b.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        b.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((o = b(e).offset()).top += b.css(e, "borderTopWidth", !0), o.left += b.css(e, "borderLeftWidth", !0));
        }return { top: t.top - o.top - b.css(i, "marginTop", !0), left: t.left - o.left - b.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === b.css(e, "position");) {
          e = e.offsetParent;
        }return e || _e;
      });
    } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;b.fn[e] = function (i) {
      return B(this, function (e, i, o) {
        var r;if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), b.each(["top", "left"], function (e, t) {
    b.cssHooks[t] = We(p.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), qe.test(n) ? b(e).position()[t] + "px" : n;
    });
  }), b.each({ Height: "height", Width: "width" }, function (e, t) {
    b.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      b.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");return B(this, function (t, n, o) {
          var r;return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? b.css(t, n, a) : b.style(t, n, o, a);
        }, t, s ? o : void 0, s);
      };
    });
  }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    b.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), b.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), b.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), b.proxy = function (e, t) {
    var n, i, o;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (o = function o() {
      return e.apply(t || this, i.concat(r.call(arguments)));
    }).guid = e.guid = e.guid || b.guid++, o;
  }, b.holdReady = function (e) {
    e ? b.readyWait++ : b.ready(!0);
  }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = D, b.isFunction = g, b.isWindow = m, b.camelCase = K, b.type = _, b.now = Date.now, b.isNumeric = function (e) {
    var t = b.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return b;
  });var Ut = e.jQuery,
      Vt = e.$;return b.noConflict = function (t) {
    return e.$ === b && (e.$ = Vt), t && e.jQuery === b && (e.jQuery = Ut), b;
  }, t || (e.jQuery = e.$ = b), b;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function (t) {
        r(e, t, n[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;var a = "transitionend";function l(e) {
    var n = this,
        i = !1;return t(this).one(c.TRANSITION_END, function () {
      i = !0;
    }), setTimeout(function () {
      i || c.triggerTransitionEnd(n);
    }, e), this;
  }var c = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
      do {
        e += ~~(1e6 * Math.random());
      } while (document.getElementById(e));return e;
    }, getSelectorFromElement: function getSelectorFromElement(e) {
      var t = e.getAttribute("data-target");if (!t || "#" === t) {
        var n = e.getAttribute("href");t = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
      if (!e) return 0;var n = t(e).css("transition-duration"),
          i = t(e).css("transition-delay"),
          o = parseFloat(n),
          r = parseFloat(i);return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
    }, reflow: function reflow(e) {
      return e.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(e) {
      t(e).trigger(a);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(a);
    }, isElement: function isElement(e) {
      return (e[0] || e).nodeType;
    }, typeCheckConfig: function typeCheckConfig(e, t, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = t[i],
              s = r && c.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }var a;
    }, findShadowRoot: function findShadowRoot(e) {
      if (!document.documentElement.attachShadow) return null;if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();return t instanceof ShadowRoot ? t : null;
      }return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null;
    } };t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = { bindType: a, delegateType: a, handle: function handle(e) {
      if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    } };var u = t.fn.alert,
      f = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
      h = "alert",
      d = "fade",
      p = "show",
      g = function () {
    function e(e) {
      this._element = e;
    }var n = e.prototype;return n.close = function (e) {
      var t = this._element;e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, n.dispose = function () {
      t.removeData(this._element, "bs.alert"), this._element = null;
    }, n._getRootElement = function (e) {
      var n = c.getSelectorFromElement(e),
          i = !1;return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + h)[0]), i;
    }, n._triggerCloseEvent = function (e) {
      var n = t.Event(f.CLOSE);return t(e).trigger(n), n;
    }, n._removeElement = function (e) {
      var n = this;if (t(e).removeClass(p), t(e).hasClass(d)) {
        var i = c.getTransitionDurationFromElement(e);t(e).one(c.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(i);
      } else this._destroyElement(e);
    }, n._destroyElement = function (e) {
      t(e).detach().trigger(f.CLOSED).remove();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            o = i.data("bs.alert");o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), e;
  }();t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), t.fn.alert = g._jQueryInterface, t.fn.alert.Constructor = g, t.fn.alert.noConflict = function () {
    return t.fn.alert = u, g._jQueryInterface;
  };var m = t.fn.button,
      v = "active",
      y = "btn",
      _ = "focus",
      b = '[data-toggle^="button"]',
      T = '[data-toggle="buttons"]',
      E = 'input:not([type="hidden"])',
      w = ".active",
      C = ".btn",
      x = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
      S = function () {
    function e(e) {
      this._element = e;
    }var n = e.prototype;return n.toggle = function () {
      var e = !0,
          n = !0,
          i = t(this._element).closest(T)[0];if (i) {
        var o = this._element.querySelector(E);if (o) {
          if ("radio" === o.type) if (o.checked && this._element.classList.contains(v)) e = !1;else {
            var r = i.querySelector(w);r && t(r).removeClass(v);
          }if (e) {
            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;o.checked = !this._element.classList.contains(v), t(o).trigger("change");
          }o.focus(), n = !1;
        }
      }n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && t(this._element).toggleClass(v);
    }, n.dispose = function () {
      t.removeData(this._element, "bs.button"), this._element = null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data("bs.button");i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]();
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), e;
  }();t(document).on(x.CLICK_DATA_API, b, function (e) {
    e.preventDefault();var n = e.target;t(n).hasClass(y) || (n = t(n).closest(C)), S._jQueryInterface.call(t(n), "toggle");
  }).on(x.FOCUS_BLUR_DATA_API, b, function (e) {
    var n = t(e.target).closest(C)[0];t(n).toggleClass(_, /^focus(in)?$/.test(e.type));
  }), t.fn.button = S._jQueryInterface, t.fn.button.Constructor = S, t.fn.button.noConflict = function () {
    return t.fn.button = m, S._jQueryInterface;
  };var D = "carousel",
      A = ".bs.carousel",
      N = t.fn[D],
      I = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      k = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      O = "next",
      L = "prev",
      j = "left",
      H = "right",
      P = { SLIDE: "slide.bs.carousel", SLID: "slid.bs.carousel", KEYDOWN: "keydown.bs.carousel", MOUSEENTER: "mouseenter.bs.carousel", MOUSELEAVE: "mouseleave.bs.carousel", TOUCHSTART: "touchstart.bs.carousel", TOUCHMOVE: "touchmove.bs.carousel", TOUCHEND: "touchend.bs.carousel", POINTERDOWN: "pointerdown.bs.carousel", POINTERUP: "pointerup.bs.carousel", DRAG_START: "dragstart.bs.carousel", LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
      q = "carousel",
      R = "active",
      M = "slide",
      F = "carousel-item-right",
      W = "carousel-item-left",
      B = "carousel-item-next",
      $ = "carousel-item-prev",
      U = "pointer-event",
      V = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", ITEM_IMG: ".carousel-item img", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
      K = { TOUCH: "touch", PEN: "pen" },
      Q = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(V.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var n = e.prototype;return n.next = function () {
      this._isSliding || this._slide(O);
    }, n.nextWhenVisible = function () {
      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(L);
    }, n.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(V.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (e) {
      var n = this;this._activeElement = this._element.querySelector(V.ACTIVE_ITEM);var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(P.SLID, function () {
        return n.to(e);
      });else {
        if (i === e) return this.pause(), void this.cycle();var o = e > i ? O : L;this._slide(o, this._items[e]);
      }
    }, n.dispose = function () {
      t(this._element).off(A), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (e) {
      return e = s({}, I, e), c.typeCheckConfig(D, e, k), e;
    }, n._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);if (!(e <= 40)) {
        var t = e / this.touchDeltaX;t > 0 && this.prev(), t < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var e = this;this._config.keyboard && t(this._element).on(P.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && t(this._element).on(P.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(P.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var e = this;if (this._touchSupported) {
        var n = function n(t) {
          e._pointerEvent && K[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          e._pointerEvent && K[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };t(this._element.querySelectorAll(V.ITEM_IMG)).on(P.DRAG_START, function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (t(this._element).on(P.POINTERDOWN, function (e) {
          return n(e);
        }), t(this._element).on(P.POINTERUP, function (e) {
          return i(e);
        }), this._element.classList.add(U)) : (t(this._element).on(P.TOUCHSTART, function (e) {
          return n(e);
        }), t(this._element).on(P.TOUCHMOVE, function (t) {
          return function (t) {
            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), t(this._element).on(P.TOUCHEND, function (e) {
          return i(e);
        }));
      }
    }, n._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
          e.preventDefault(), this.prev();break;case 39:
          e.preventDefault(), this.next();}
    }, n._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(V.ITEM)) : [], this._items.indexOf(e);
    }, n._getItemByDirection = function (e, t) {
      var n = e === O,
          i = e === L,
          o = this._getItemIndex(t),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;var s = (o + (e === L ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, n._triggerSlideEvent = function (e, n) {
      var i = this._getItemIndex(e),
          o = this._getItemIndex(this._element.querySelector(V.ACTIVE_ITEM)),
          r = t.Event(P.SLIDE, { relatedTarget: e, direction: n, from: o, to: i });return t(this._element).trigger(r), r;
    }, n._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var n = [].slice.call(this._indicatorsElement.querySelectorAll(V.ACTIVE));t(n).removeClass(R);var i = this._indicatorsElement.children[this._getItemIndex(e)];i && t(i).addClass(R);
      }
    }, n._slide = function (e, n) {
      var i,
          o,
          r,
          s = this,
          a = this._element.querySelector(V.ACTIVE_ITEM),
          l = this._getItemIndex(a),
          u = n || a && this._getItemByDirection(e, a),
          f = this._getItemIndex(u),
          h = Boolean(this._interval);if (e === O ? (i = W, o = B, r = j) : (i = F, o = $, r = H), u && t(u).hasClass(R)) this._isSliding = !1;else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);var d = t.Event(P.SLID, { relatedTarget: u, direction: r, from: l, to: f });if (t(this._element).hasClass(M)) {
          t(u).addClass(o), c.reflow(u), t(a).addClass(i), t(u).addClass(i);var p = parseInt(u.getAttribute("data-interval"), 10);p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;var g = c.getTransitionDurationFromElement(a);t(a).one(c.TRANSITION_END, function () {
            t(u).removeClass(i + " " + o).addClass(R), t(a).removeClass(R + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
              return t(s._element).trigger(d);
            }, 0);
          }).emulateTransitionEnd(g);
        } else t(a).removeClass(R), t(u).addClass(R), this._isSliding = !1, t(this._element).trigger(d);h && this.cycle();
      }
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data("bs.carousel"),
            o = s({}, I, t(this).data());"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = s({}, o, n));var r = "string" == typeof n ? n : o.slide;if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);else if ("string" == typeof r) {
          if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');i[r]();
        } else o.interval && o.ride && (i.pause(), i.cycle());
      });
    }, e._dataApiClickHandler = function (n) {
      var i = c.getSelectorFromElement(this);if (i) {
        var o = t(i)[0];if (o && t(o).hasClass(q)) {
          var r = s({}, t(o).data(), t(this).data()),
              a = this.getAttribute("data-slide-to");a && (r.interval = !1), e._jQueryInterface.call(t(o), r), a && t(o).data("bs.carousel").to(a), n.preventDefault();
        }
      }
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return I;
      } }]), e;
  }();t(document).on(P.CLICK_DATA_API, V.DATA_SLIDE, Q._dataApiClickHandler), t(window).on(P.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(V.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
      var o = t(e[n]);Q._jQueryInterface.call(o, o.data());
    }
  }), t.fn[D] = Q._jQueryInterface, t.fn[D].Constructor = Q, t.fn[D].noConflict = function () {
    return t.fn[D] = N, Q._jQueryInterface;
  };var Y = "collapse",
      z = t.fn[Y],
      X = { toggle: !0, parent: "" },
      G = { toggle: "boolean", parent: "(string|element)" },
      J = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
      Z = "show",
      ee = "collapse",
      te = "collapsing",
      ne = "collapsed",
      ie = "width",
      oe = "height",
      re = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
      se = function () {
    function e(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(re.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = c.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var n = e.prototype;return n.toggle = function () {
      t(this._element).hasClass(Z) ? this.hide() : this.show();
    }, n.show = function () {
      var n,
          i,
          o = this;if (!this._isTransitioning && !t(this._element).hasClass(Z) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(re.ACTIVES)).filter(function (e) {
        return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(ee);
      })).length && (n = null), !(n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
        var r = t.Event(J.SHOW);if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
          n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));var s = this._getDimension();t(this._element).removeClass(ee).addClass(te), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              l = c.getTransitionDurationFromElement(this._element);t(this._element).one(c.TRANSITION_END, function () {
            t(o._element).removeClass(te).addClass(ee).addClass(Z), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger(J.SHOWN);
          }).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px";
        }
      }
    }, n.hide = function () {
      var e = this;if (!this._isTransitioning && t(this._element).hasClass(Z)) {
        var n = t.Event(J.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
          var i = this._getDimension();this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(Z);var o = this._triggerArray.length;if (o > 0) for (var r = 0; r < o; r++) {
            var s = this._triggerArray[r],
                a = c.getSelectorFromElement(s);if (null !== a) t([].slice.call(document.querySelectorAll(a))).hasClass(Z) || t(s).addClass(ne).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[i] = "";var l = c.getTransitionDurationFromElement(this._element);t(this._element).one(c.TRANSITION_END, function () {
            e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(J.HIDDEN);
          }).emulateTransitionEnd(l);
        }
      }
    }, n.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, n.dispose = function () {
      t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (e) {
      return (e = s({}, X, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(Y, e, G), e;
    }, n._getDimension = function () {
      return t(this._element).hasClass(ie) ? ie : oe;
    }, n._getParent = function () {
      var n,
          i = this;c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(n.querySelectorAll(o));return t(r).each(function (t, n) {
        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
      }), n;
    }, n._addAriaAndCollapsedClass = function (e, n) {
      var i = t(e).hasClass(Z);n.length && t(n).toggleClass(ne, !i).attr("aria-expanded", i);
    }, e._getTargetFromElement = function (e) {
      var t = c.getSelectorFromElement(e);return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            o = i.data("bs.collapse"),
            r = s({}, X, i.data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new e(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
        }
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return X;
      } }]), e;
  }();t(document).on(J.CLICK_DATA_API, re.DATA_TOGGLE, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();var n = t(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));t(o).each(function () {
      var e = t(this),
          i = e.data("bs.collapse") ? "toggle" : n.data();se._jQueryInterface.call(e, i);
    });
  }), t.fn[Y] = se._jQueryInterface, t.fn[Y].Constructor = se, t.fn[Y].noConflict = function () {
    return t.fn[Y] = z, se._jQueryInterface;
  };var ae = "dropdown",
      le = t.fn[ae],
      ce = new RegExp("38|40|27"),
      ue = { HIDE: "hide.bs.dropdown", HIDDEN: "hidden.bs.dropdown", SHOW: "show.bs.dropdown", SHOWN: "shown.bs.dropdown", CLICK: "click.bs.dropdown", CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
      fe = "disabled",
      he = "show",
      de = "dropup",
      pe = "dropright",
      ge = "dropleft",
      me = "dropdown-menu-right",
      ve = "position-static",
      ye = '[data-toggle="dropdown"]',
      _e = ".dropdown form",
      be = ".dropdown-menu",
      Te = ".navbar-nav",
      Ee = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      we = "top-start",
      Ce = "top-end",
      xe = "bottom-start",
      Se = "bottom-end",
      De = "right-start",
      Ae = "left-start",
      Ne = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
      Ie = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
      ke = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var i = e.prototype;return i.toggle = function () {
      if (!this._element.disabled && !t(this._element).hasClass(fe)) {
        var i = e._getParentFromElement(this._element),
            o = t(this._menu).hasClass(he);if (e._clearMenus(), !o) {
          var r = { relatedTarget: this._element },
              s = t.Event(ue.SHOW, r);if (t(i).trigger(s), !s.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a = this._element;"parent" === this._config.reference ? a = i : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass(ve), this._popper = new n(a, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === t(i).closest(Te).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ue.SHOWN, r));
          }
        }
      }
    }, i.show = function () {
      if (!(this._element.disabled || t(this._element).hasClass(fe) || t(this._menu).hasClass(he))) {
        var n = { relatedTarget: this._element },
            i = t.Event(ue.SHOW, n),
            o = e._getParentFromElement(this._element);t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.SHOWN, n)));
      }
    }, i.hide = function () {
      if (!this._element.disabled && !t(this._element).hasClass(fe) && t(this._menu).hasClass(he)) {
        var n = { relatedTarget: this._element },
            i = t.Event(ue.HIDE, n),
            o = e._getParentFromElement(this._element);t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.HIDDEN, n)));
      }
    }, i.dispose = function () {
      t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, i.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, i._addEventListeners = function () {
      var e = this;t(this._element).on(ue.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, i._getConfig = function (e) {
      return e = s({}, this.constructor.Default, t(this._element).data(), e), c.typeCheckConfig(ae, e, this.constructor.DefaultType), e;
    }, i._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);t && (this._menu = t.querySelector(be));
      }return this._menu;
    }, i._getPlacement = function () {
      var e = t(this._element.parentNode),
          n = xe;return e.hasClass(de) ? (n = we, t(this._menu).hasClass(me) && (n = Ce)) : e.hasClass(pe) ? n = De : e.hasClass(ge) ? n = Ae : t(this._menu).hasClass(me) && (n = Se), n;
    }, i._detectNavbar = function () {
      return t(this._element).closest(".navbar").length > 0;
    }, i._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, i._getPopperConfig = function () {
      var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data("bs.dropdown");if (i || (i = new e(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, e._clearMenus = function (n) {
      if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(ye)), o = 0, r = i.length; o < r; o++) {
        var s = e._getParentFromElement(i[o]),
            a = t(i[o]).data("bs.dropdown"),
            l = { relatedTarget: i[o] };if (n && "click" === n.type && (l.clickEvent = n), a) {
          var c = a._menu;if (t(s).hasClass(he) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
            var u = t.Event(ue.HIDE, l);t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), t(c).removeClass(he), t(s).removeClass(he).trigger(t.Event(ue.HIDDEN, l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t,
          n = c.getSelectorFromElement(e);return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (n) {
      if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(be).length)) : ce.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(fe))) {
        var i = e._getParentFromElement(this),
            o = t(i).hasClass(he);if (o && (!o || 27 !== n.which && 32 !== n.which)) {
          var r = [].slice.call(i.querySelectorAll(Ee));if (0 !== r.length) {
            var s = r.indexOf(n.target);38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
          }
        } else {
          if (27 === n.which) {
            var a = i.querySelector(ye);t(a).trigger("focus");
          }t(this).trigger("click");
        }
      }
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return Ne;
      } }, { key: "DefaultType", get: function get() {
        return Ie;
      } }]), e;
  }();t(document).on(ue.KEYDOWN_DATA_API, ye, ke._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, be, ke._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, ke._clearMenus).on(ue.CLICK_DATA_API, ye, function (e) {
    e.preventDefault(), e.stopPropagation(), ke._jQueryInterface.call(t(this), "toggle");
  }).on(ue.CLICK_DATA_API, _e, function (e) {
    e.stopPropagation();
  }), t.fn[ae] = ke._jQueryInterface, t.fn[ae].Constructor = ke, t.fn[ae].noConflict = function () {
    return t.fn[ae] = le, ke._jQueryInterface;
  };var Oe = t.fn.modal,
      Le = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      je = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      He = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
      Pe = "modal-dialog-scrollable",
      qe = "modal-scrollbar-measure",
      Re = "modal-backdrop",
      Me = "modal-open",
      Fe = "fade",
      We = "show",
      Be = { DIALOG: ".modal-dialog", MODAL_BODY: ".modal-body", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
      $e = function () {
    function e(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Be.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var n = e.prototype;return n.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, n.show = function (e) {
      var n = this;if (!this._isShown && !this._isTransitioning) {
        t(this._element).hasClass(Fe) && (this._isTransitioning = !0);var i = t.Event(He.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(He.CLICK_DISMISS, Be.DATA_DISMISS, function (e) {
          return n.hide(e);
        }), t(this._dialog).on(He.MOUSEDOWN_DISMISS, function () {
          t(n._element).one(He.MOUSEUP_DISMISS, function (e) {
            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return n._showElement(e);
        }));
      }
    }, n.hide = function (e) {
      var n = this;if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var i = t.Event(He.HIDE);if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
          this._isShown = !1;var o = t(this._element).hasClass(Fe);if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(He.FOCUSIN), t(this._element).removeClass(We), t(this._element).off(He.CLICK_DISMISS), t(this._dialog).off(He.MOUSEDOWN_DISMISS), o) {
            var r = c.getTransitionDurationFromElement(this._element);t(this._element).one(c.TRANSITION_END, function (e) {
              return n._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return t(e).off(".bs.modal");
      }), t(document).off(He.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (e) {
      return e = s({}, Le, e), c.typeCheckConfig("modal", e, je), e;
    }, n._showElement = function (e) {
      var n = this,
          i = t(this._element).hasClass(Fe);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(Pe) ? this._dialog.querySelector(Be.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass(We), this._config.focus && this._enforceFocus();var o = t.Event(He.SHOWN, { relatedTarget: e }),
          r = function r() {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
      };if (i) {
        var s = c.getTransitionDurationFromElement(this._dialog);t(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
      } else r();
    }, n._enforceFocus = function () {
      var e = this;t(document).off(He.FOCUSIN).on(He.FOCUSIN, function (n) {
        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? t(this._element).on(He.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || t(this._element).off(He.KEYDOWN_DISMISS);
    }, n._setResizeEvent = function () {
      var e = this;this._isShown ? t(window).on(He.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : t(window).off(He.RESIZE);
    }, n._hideModal = function () {
      var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        t(document.body).removeClass(Me), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(He.HIDDEN);
      });
    }, n._removeBackdrop = function () {
      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
    }, n._showBackdrop = function (e) {
      var n = this,
          i = t(this._element).hasClass(Fe) ? Fe : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = Re, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(He.CLICK_DISMISS, function (e) {
          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
        }), i && c.reflow(this._backdrop), t(this._backdrop).addClass(We), !e) return;if (!i) return void e();var o = c.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(o);
      } else if (!this._isShown && this._backdrop) {
        t(this._backdrop).removeClass(We);var r = function r() {
          n._removeBackdrop(), e && e();
        };if (t(this._element).hasClass(Fe)) {
          var s = c.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else e && e();
    }, n._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var e = this;if (this._isBodyOverflowing) {
        var n = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT)),
            i = [].slice.call(document.querySelectorAll(Be.STICKY_CONTENT));t(n).each(function (n, i) {
          var o = i.style.paddingRight,
              r = t(i).css("padding-right");t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
        }), t(i).each(function (n, i) {
          var o = i.style.marginRight,
              r = t(i).css("margin-right");t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
        });var o = document.body.style.paddingRight,
            r = t(document.body).css("padding-right");t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }t(document.body).addClass(Me);
    }, n._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT));t(e).each(function (e, n) {
        var i = t(n).data("padding-right");t(n).removeData("padding-right"), n.style.paddingRight = i || "";
      });var n = [].slice.call(document.querySelectorAll("" + Be.STICKY_CONTENT));t(n).each(function (e, n) {
        var i = t(n).data("margin-right");void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
      });var i = t(document.body).data("padding-right");t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
    }, n._getScrollbarWidth = function () {
      var e = document.createElement("div");e.className = qe, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (n, i) {
      return this.each(function () {
        var o = t(this).data("bs.modal"),
            r = s({}, Le, t(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (o || (o = new e(this, r), t(this).data("bs.modal", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n](i);
        } else r.show && o.show(i);
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return Le;
      } }]), e;
  }();t(document).on(He.CLICK_DATA_API, Be.DATA_TOGGLE, function (e) {
    var n,
        i = this,
        o = c.getSelectorFromElement(this);o && (n = document.querySelector(o));var r = t(n).data("bs.modal") ? "toggle" : s({}, t(n).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var a = t(n).one(He.SHOW, function (e) {
      e.isDefaultPrevented() || a.one(He.HIDDEN, function () {
        t(i).is(":visible") && i.focus();
      });
    });$e._jQueryInterface.call(t(n), r, this);
  }), t.fn.modal = $e._jQueryInterface, t.fn.modal.Constructor = $e, t.fn.modal.noConflict = function () {
    return t.fn.modal = Oe, $e._jQueryInterface;
  };var Ue = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ve = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      Ke = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Qe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Ye(e, t, n) {
    if (0 === e.length) return e;if (n && "function" == typeof n) return n(e);for (var i = new window.DOMParser().parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function s(e, n) {
      var i = r[e],
          s = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var a = [].slice.call(i.attributes),
          l = [].concat(t["*"] || [], t[s] || []);a.forEach(function (e) {
        (function (e, t) {
          var n = e.nodeName.toLowerCase();if (-1 !== t.indexOf(n)) return -1 === Ue.indexOf(n) || Boolean(e.nodeValue.match(Ke) || e.nodeValue.match(Qe));for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }return !1;
        })(e, l) || i.removeAttribute(e.nodeName);
      });
    }, a = 0, l = r.length; a < l; a++) {
      s(a);
    }return i.body.innerHTML;
  }var ze = "tooltip",
      Xe = t.fn.tooltip,
      Ge = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Je = ["sanitize", "whiteList", "sanitizeFn"],
      Ze = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
      et = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      tt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ve },
      nt = "show",
      it = "out",
      ot = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
      rt = "fade",
      st = "show",
      at = ".tooltip-inner",
      lt = ".arrow",
      ct = "hover",
      ut = "focus",
      ft = "click",
      ht = "manual",
      dt = function () {
    function e(e, t) {
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }var i = e.prototype;return i.enable = function () {
      this._isEnabled = !0;
    }, i.disable = function () {
      this._isEnabled = !1;
    }, i.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, i.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var n = this.constructor.DATA_KEY,
            i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
      } else {
        if (t(this.getTipElement()).hasClass(st)) return void this._leave(null, this);this._enter(null, this);
      }
    }, i.dispose = function () {
      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, i.show = function () {
      var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var i = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        t(this.element).trigger(i);var o = c.findShadowRoot(this.element),
            r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var s = this.getTipElement(),
            a = c.getUID(this.constructor.NAME);s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(rt);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
            u = this._getAttachment(l);this.addAttachmentClass(u);var f = this._getContainer();t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, { placement: u, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: lt }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          } }), t(s).addClass(st), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);var h = function h() {
          e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === it && e._leave(null, e);
        };if (t(this.tip).hasClass(rt)) {
          var d = c.getTransitionDurationFromElement(this.tip);t(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(d);
        } else h();
      }
    }, i.hide = function (e) {
      var n = this,
          i = this.getTipElement(),
          o = t.Event(this.constructor.Event.HIDE),
          r = function r() {
        n._hoverState !== nt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      };if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (t(i).removeClass(st), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ft] = !1, this._activeTrigger[ut] = !1, this._activeTrigger[ct] = !1, t(this.tip).hasClass(rt)) {
          var s = c.getTransitionDurationFromElement(i);t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();this._hoverState = "";
      }
    }, i.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, i.isWithContent = function () {
      return Boolean(this.getTitle());
    }, i.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-tooltip-" + e);
    }, i.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, i.setContent = function () {
      var e = this.getTipElement();this.setElementContent(t(e.querySelectorAll(at)), this.getTitle()), t(e).removeClass(rt + " " + st);
    }, i.setElementContent = function (e, n) {
      "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ye(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text());
    }, i.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, i._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, i._getContainer = function () {
      return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container);
    }, i._getAttachment = function (e) {
      return et[e.toUpperCase()];
    }, i._setListeners = function () {
      var e = this;this.config.trigger.split(" ").forEach(function (n) {
        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        });else if (n !== ht) {
          var i = n === ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              o = n === ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
            return e._enter(t);
          }).on(o, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), t(this.element).closest(".modal").on("hide.bs.modal", function () {
        e.element && e.hide();
      }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, i._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, i._enter = function (e, n) {
      var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ut : ct] = !0), t(n.getTipElement()).hasClass(st) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
        n._hoverState === nt && n.show();
      }, n.config.delay.show) : n.show());
    }, i._leave = function (e, n) {
      var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ut : ct] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = it, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
        n._hoverState === it && n.hide();
      }, n.config.delay.hide) : n.hide());
    }, i._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }return !1;
    }, i._getConfig = function (e) {
      var n = t(this.element).data();return Object.keys(n).forEach(function (e) {
        -1 !== Je.indexOf(e) && delete n[e];
      }), "number" == typeof (e = s({}, this.constructor.Default, n, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(ze, e, this.constructor.DefaultType), e.sanitize && (e.template = Ye(e.template, e.whiteList, e.sanitizeFn)), e;
    }, i._getDelegateConfig = function () {
      var e = {};if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }return e;
    }, i._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(Ge);null !== n && n.length && e.removeClass(n.join(""));
    }, i._handlePopperPlacementChange = function (e) {
      var t = e.instance;this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, i._fixTransition = function () {
      var e = this.getTipElement(),
          n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(rt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data("bs.tooltip"),
            o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return tt;
      } }, { key: "NAME", get: function get() {
        return ze;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.tooltip";
      } }, { key: "Event", get: function get() {
        return ot;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.tooltip";
      } }, { key: "DefaultType", get: function get() {
        return Ze;
      } }]), e;
  }();t.fn.tooltip = dt._jQueryInterface, t.fn.tooltip.Constructor = dt, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = Xe, dt._jQueryInterface;
  };var pt = "popover",
      gt = t.fn.popover,
      mt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      vt = s({}, dt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      yt = s({}, dt.DefaultType, { content: "(string|element|function)" }),
      _t = "fade",
      bt = "show",
      Tt = ".popover-header",
      Et = ".popover-body",
      wt = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
      Ct = function (e) {
    var n, i;function r() {
      return e.apply(this, arguments) || this;
    }i = e, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;var s = r.prototype;return s.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, s.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-popover-" + e);
    }, s.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, s.setContent = function () {
      var e = t(this.getTipElement());this.setElementContent(e.find(Tt), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(Et), n), e.removeClass(_t + " " + bt);
    }, s._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, s._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(mt);null !== n && n.length > 0 && e.removeClass(n.join(""));
    }, r._jQueryInterface = function (e) {
      return this.each(function () {
        var n = t(this).data("bs.popover"),
            i = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
        }
      });
    }, o(r, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return vt;
      } }, { key: "NAME", get: function get() {
        return pt;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.popover";
      } }, { key: "Event", get: function get() {
        return wt;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.popover";
      } }, { key: "DefaultType", get: function get() {
        return yt;
      } }]), r;
  }(dt);t.fn.popover = Ct._jQueryInterface, t.fn.popover.Constructor = Ct, t.fn.popover.noConflict = function () {
    return t.fn.popover = gt, Ct._jQueryInterface;
  };var xt = "scrollspy",
      St = t.fn[xt],
      Dt = { offset: 10, method: "auto", target: "" },
      At = { offset: "number", method: "string", target: "(string|element)" },
      Nt = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
      It = "dropdown-item",
      kt = "active",
      Ot = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
      Lt = "offset",
      jt = "position",
      Ht = function () {
    function e(e, n) {
      var i = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Ot.NAV_LINKS + "," + this._config.target + " " + Ot.LIST_ITEMS + "," + this._config.target + " " + Ot.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(Nt.SCROLL, function (e) {
        return i._process(e);
      }), this.refresh(), this._process();
    }var n = e.prototype;return n.refresh = function () {
      var e = this,
          n = this._scrollElement === this._scrollElement.window ? Lt : jt,
          i = "auto" === this._config.method ? n : this._config.method,
          o = i === jt ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var n,
            r = c.getSelectorFromElement(e);if (r && (n = document.querySelector(r)), n) {
          var s = n.getBoundingClientRect();if (s.width || s.height) return [t(n)[i]().top + o, r];
        }return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, n.dispose = function () {
      t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (e) {
      if ("string" != typeof (e = s({}, Dt, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).target) {
        var n = t(e.target).attr("id");n || (n = c.getUID(xt), t(e.target).attr("id", n)), e.target = "#" + n;
      }return c.typeCheckConfig(xt, e, At), e;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (e) {
      this._activeTarget = e, this._clear();var n = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          i = t([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(It) ? (i.closest(Ot.DROPDOWN).find(Ot.DROPDOWN_TOGGLE).addClass(kt), i.addClass(kt)) : (i.addClass(kt), i.parents(Ot.NAV_LIST_GROUP).prev(Ot.NAV_LINKS + ", " + Ot.LIST_ITEMS).addClass(kt), i.parents(Ot.NAV_LIST_GROUP).prev(Ot.NAV_ITEMS).children(Ot.NAV_LINKS).addClass(kt)), t(this._scrollElement).trigger(Nt.ACTIVATE, { relatedTarget: e });
    }, n._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains(kt);
      }).forEach(function (e) {
        return e.classList.remove(kt);
      });
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data("bs.scrollspy");if (i || (i = new e(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return Dt;
      } }]), e;
  }();t(window).on(Nt.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(Ot.DATA_SPY)), n = e.length; n--;) {
      var i = t(e[n]);Ht._jQueryInterface.call(i, i.data());
    }
  }), t.fn[xt] = Ht._jQueryInterface, t.fn[xt].Constructor = Ht, t.fn[xt].noConflict = function () {
    return t.fn[xt] = St, Ht._jQueryInterface;
  };var Pt = t.fn.tab,
      qt = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
      Rt = "dropdown-menu",
      Mt = "active",
      Ft = "disabled",
      Wt = "fade",
      Bt = "show",
      $t = ".dropdown",
      Ut = ".nav, .list-group",
      Vt = ".active",
      Kt = "> li > .active",
      Qt = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Yt = ".dropdown-toggle",
      zt = "> .dropdown-menu .active",
      Xt = function () {
    function e(e) {
      this._element = e;
    }var n = e.prototype;return n.show = function () {
      var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Mt) || t(this._element).hasClass(Ft))) {
        var n,
            i,
            o = t(this._element).closest(Ut)[0],
            r = c.getSelectorFromElement(this._element);if (o) {
          var s = "UL" === o.nodeName || "OL" === o.nodeName ? Kt : Vt;i = (i = t.makeArray(t(o).find(s)))[i.length - 1];
        }var a = t.Event(qt.HIDE, { relatedTarget: this._element }),
            l = t.Event(qt.SHOW, { relatedTarget: i });if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
          r && (n = document.querySelector(r)), this._activate(this._element, o);var u = function u() {
            var n = t.Event(qt.HIDDEN, { relatedTarget: e._element }),
                o = t.Event(qt.SHOWN, { relatedTarget: i });t(i).trigger(n), t(e._element).trigger(o);
          };n ? this._activate(n, n.parentNode, u) : u();
        }
      }
    }, n.dispose = function () {
      t.removeData(this._element, "bs.tab"), this._element = null;
    }, n._activate = function (e, n, i) {
      var o = this,
          r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Vt) : t(n).find(Kt))[0],
          s = i && r && t(r).hasClass(Wt),
          a = function a() {
        return o._transitionComplete(e, r, i);
      };if (r && s) {
        var l = c.getTransitionDurationFromElement(r);t(r).removeClass(Bt).one(c.TRANSITION_END, a).emulateTransitionEnd(l);
      } else a();
    }, n._transitionComplete = function (e, n, i) {
      if (n) {
        t(n).removeClass(Mt);var o = t(n.parentNode).find(zt)[0];o && t(o).removeClass(Mt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
      }if (t(e).addClass(Mt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(Wt) && e.classList.add(Bt), e.parentNode && t(e.parentNode).hasClass(Rt)) {
        var r = t(e).closest($t)[0];if (r) {
          var s = [].slice.call(r.querySelectorAll(Yt));t(s).addClass(Mt);
        }e.setAttribute("aria-expanded", !0);
      }i && i();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            o = i.data("bs.tab");if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
        }
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), e;
  }();t(document).on(qt.CLICK_DATA_API, Qt, function (e) {
    e.preventDefault(), Xt._jQueryInterface.call(t(this), "show");
  }), t.fn.tab = Xt._jQueryInterface, t.fn.tab.Constructor = Xt, t.fn.tab.noConflict = function () {
    return t.fn.tab = Pt, Xt._jQueryInterface;
  };var Gt = t.fn.toast,
      Jt = { CLICK_DISMISS: "click.dismiss.bs.toast", HIDE: "hide.bs.toast", HIDDEN: "hidden.bs.toast", SHOW: "show.bs.toast", SHOWN: "shown.bs.toast" },
      Zt = "fade",
      en = "hide",
      tn = "show",
      nn = "showing",
      on = { animation: "boolean", autohide: "boolean", delay: "number" },
      rn = { animation: !0, autohide: !0, delay: 500 },
      sn = '[data-dismiss="toast"]',
      an = function () {
    function e(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }var n = e.prototype;return n.show = function () {
      var e = this;t(this._element).trigger(Jt.SHOW), this._config.animation && this._element.classList.add(Zt);var n = function n() {
        e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Jt.SHOWN), e._config.autohide && e.hide();
      };if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
        var i = c.getTransitionDurationFromElement(this._element);t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, n.hide = function (e) {
      var n = this;this._element.classList.contains(tn) && (t(this._element).trigger(Jt.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
        n._close();
      }, this._config.delay));
    }, n.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Jt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, n._getConfig = function (e) {
      return e = s({}, rn, t(this._element).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
    }, n._setListeners = function () {
      var e = this;t(this._element).on(Jt.CLICK_DISMISS, sn, function () {
        return e.hide(!0);
      });
    }, n._close = function () {
      var e = this,
          n = function n() {
        e._element.classList.add(en), t(e._element).trigger(Jt.HIDDEN);
      };if (this._element.classList.remove(tn), this._config.animation) {
        var i = c.getTransitionDurationFromElement(this._element);t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            o = i.data("bs.toast");if (o || (o = new e(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), i.data("bs.toast", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n](this);
        }
      });
    }, o(e, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "DefaultType", get: function get() {
        return on;
      } }, { key: "Default", get: function get() {
        return rn;
      } }]), e;
  }();t.fn.toast = an._jQueryInterface, t.fn.toast.Constructor = an, t.fn.toast.noConflict = function () {
    return t.fn.toast = Gt, an._jQueryInterface;
  }, function () {
    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), e.Util = c, e.Alert = g, e.Button = S, e.Carousel = Q, e.Collapse = se, e.Dropdown = ke, e.Modal = $e, e.Popover = Ct, e.Scrollspy = Ht, e.Tab = Xt, e.Toast = an, e.Tooltip = dt, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e) {
  "use strict";
  function t(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!e('[name="' + t.attr("name") + '"]:checked').length : t.is("select[multiple]") ? (t.val() || []).length : t.val();
  }var n = function n(i, o) {
    this.options = o, this.validators = e.extend({}, n.VALIDATORS, o.custom), this.$element = e(i), this.$btn = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", e.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = e(this),
          i = n.attr("data-match");e(i).on("input.bs.validator", function (e) {
        t(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return t(e(this)) && !e(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(t) {
    return this.each(function () {
      var i = e(this),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t),
          r = i.data("bs.validator");(r || "destroy" != t) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof t && r[t]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(e) {
      var t = e[0];if (t.checkValidity) return !t.checkValidity() && !t.validity.valid && (t.validationMessage || "error!");
    }, match: function match(t) {
      var i = t.attr("data-match");return t.val() !== e(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(e) {
      var t = e.attr("data-minlength");return e.val().length < t && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var t = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      t.clearErrors(e(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (t) {
    var n = this,
        i = e(t.target),
        o = "focusout" !== t.type;this.$inputs.is(i) && this.validateInput(i, o).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    t(n);var o = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var r = e.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var s = this;return this.runValidators(n).done(function (t) {
        n.data("bs.validator.errors", t), t.length ? i ? s.defer(n, s.showErrors) : s.showErrors(n) : s.clearErrors(n), o && t.toString() === o.toString() || (r = t.length ? e.Event("invalid.bs.validator", { relatedTarget: n[0], detail: t }) : e.Event("valid.bs.validator", { relatedTarget: n[0], detail: o }), s.$element.trigger(r)), s.toggleSubmit(), s.$element.trigger(e.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        o = e.Deferred();function r(e) {
      return function (e) {
        return n.attr("data-" + e + "-error");
      }(e) || ((t = n[0].validity).typeMismatch ? n.attr("data-type-error") : t.patternMismatch ? n.attr("data-pattern-error") : t.stepMismatch ? n.attr("data-step-error") : t.rangeOverflow ? n.attr("data-max-error") : t.rangeUnderflow ? n.attr("data-min-error") : t.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var t;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", o), e.each(this.validators, e.proxy(function (e, o) {
      var s = null;!t(n) && !n.attr("required") || void 0 === n.attr("data-" + e) && "native" != e || !(s = o.call(this, n)) || (s = r(e) || s, !~i.indexOf(s) && i.push(s));
    }, this)), !i.length && t(n) && n.attr("data-remote") ? this.defer(n, function () {
      var s = {};s[n.attr("name")] = t(n), e.get(n.attr("data-remote"), s).fail(function (e, t, n) {
        i.push(r("remote") || n);
      }).always(function () {
        o.resolve(i);
      });
    }) : o.resolve(i), o.promise();
  }, n.prototype.validate = function () {
    var t = this;return e.when(this.$inputs.map(function (n) {
      return t.validateInput(e(this), !1);
    })).then(function () {
      t.toggleSubmit(), t.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var t = this.$element.find(".has-error:first :input");0 !== t.length && (e("html, body").animate({ scrollTop: t.offset().top - n.FOCUS_OFFSET }, 250), t.focus());
    }
  }, n.prototype.showErrors = function (t) {
    var n = this.options.html ? "html" : "text",
        i = t.data("bs.validator.errors"),
        o = t.closest(".form-group"),
        r = o.find(".help-block.with-errors"),
        s = o.find(".form-control-feedback");i.length && (i = e("<ul/>").addClass("list-unstyled").append(e.map(i, function (t) {
      return e("<li/>")[n](t);
    })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(i), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && o.removeClass("has-success"));
  }, n.prototype.clearErrors = function (e) {
    var n = e.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        o = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && t(e) && o.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(e(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = t(e(this));return !("string" == typeof n ? e.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (e) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (t, n) {
    if (n = e.proxy(n, this, t), !this.options.delay) return n();window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var t = e(this),
          n = t.data("bs.validator.timeout");window.clearTimeout(n) && t.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var t = e(this),
          n = t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var o = e.fn.validator;e.fn.validator = i, e.fn.validator.Constructor = n, e.fn.validator.noConflict = function () {
    return e.fn.validator = o, this;
  }, e(window).on("load", function () {
    e('form[data-toggle="validator"]').each(function () {
      var t = e(this);i.call(t, t.data());
    });
  });
}(jQuery), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.Headroom = t();
}(this, function () {
  "use strict";
  var e = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function t(e) {
    this.callback = e, this.ticking = !1;
  }function n(e, t) {
    var i;t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = t || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = e(r[n], s[n]);
        }
      }return r;
    }(t, n.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (i = t.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = { constructor: t, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var e = this.classes;for (var t in this.initialised = !1, e) {
        e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var e = this.elem.classList,
          t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(e) {
      return Math.max(e.offsetHeight, e.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var e = document.body,
          t = document.documentElement;return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
    }, getElementHeight: function getElementHeight(e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(e) {
      var t = e < 0,
          n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return t || n;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var n = e > this.lastKnownScrollY,
          i = e >= this.offset;return n && i && t;
    }, shouldPin: function shouldPin(e, t) {
      var n = e < this.lastKnownScrollY,
          i = e <= this.offset;return n && t || i;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList, n;
}), function (e) {
  e && (e.fn.headroom = function (t) {
    return this.each(function () {
      var n = e(this),
          i = n.data("headroom"),
          o = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;o = e.extend(!0, {}, Headroom.options, o), i || ((i = new Headroom(this, o)).init(), n.data("headroom", i)), "string" == typeof t && (i[t](), "destroy" === t && n.removeData("headroom"));
    });
  }, e("[data-headroom]").each(function () {
    var t = e(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = e.scrollTo = function (t, n, i) {
    return e(window).scrollTo(t, n, i);
  };function n(t) {
    return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(t) {
    return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (o, r, s) {
    "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (s = r, r = 0), "function" == typeof s && (s = { onAfter: s }), "max" === o && (o = 9e9), s = e.extend({}, t.defaults, s), r = r || s.duration;var a = s.queue && s.axis.length > 1;return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== o) {
        var l,
            c = n(this),
            u = c ? this.contentWindow || window : this,
            f = e(u),
            h = o,
            d = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);break;
            }h = c ? e(h) : e(h, u);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = e(h)).offset());}var p = e.isFunction(s.offset) && s.offset(u, h) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              m = f[r](),
              v = t.max(u, n);if (l) d[r] = l[o] + (c ? 0 : m - f.offset()[o]), s.margin && (d[r] -= parseInt(h.css("margin" + i), 10) || 0, d[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), d[r] += p[o] || 0, s.over[o] && (d[r] += h["x" === n ? "width" : "height"]() * s.over[o]);else {
            var y = h[o];d[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(d[r]) && (d[r] = d[r] <= 0 ? 0 : Math.min(d[r], v)), !e && s.axis.length > 1 && (m === d[r] ? d = {} : a && (g(s.onAfterFirst), d = {}));
        }), g(s.onAfter);
      }function g(t) {
        var n = e.extend({}, s, { queue: !0, duration: r, complete: t && function () {
            t.call(u, h, s);
          } });f.animate(d, n);
      }
    });
  }, t.max = function (t, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(t)) return t[r] - e(t)[o.toLowerCase()]();var s = "client" + o,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[r], c[r]) - Math.min(l[s], c[s]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function get(t) {
      return e(t.elem)[t.prop]();
    }, set: function set(t) {
      var n = this.get(t);if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();var i = Math.round(t.now);n !== i && (e(t.elem)[t.prop](i), t._last = this.get(t));
    } }, t;
}), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o = e(window).width(),
        r = e(window).height();o < t.sm && (i = "xs"), o >= t.sm && o < t.md && (i = "sm"), o >= t.md && o < t.lg && (i = "md"), o >= t.lg && o < t.xl && (i = "lg"), o >= t.xl && o < t.xxl && (i = "xl"), o >= t.xxl && (i = "xxl"), e(".lv-screen-data").html(o + " x " + r + "<br>" + i).css({ position: "fixed", top: 0, padding: "10px 20px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < r.length; s++) {
      t[n[s]] = Number(r[s].replace("px", "")), o += "<tr><td>" + n[s] + "</td><td>" + r[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery), function (e) {
  "use strict";
  var t = e("[data-match-height]"),
      n = function n(_n3) {
    if (e(window).width() >= 768) {
      var i,
          o = 0,
          r = 0,
          s = [],
          a = 0;e(_n3).each(function () {
        if (i = e(this), e(i).height("auto"), a = i.position().top, r != a) {
          for (var t = 0; t < s.length; t++) {
            s[t].height(o);
          }s.length = 0, r = a, o = i.height(), s.push(i);
        } else s.push(i), o = o < i.height() ? i.height() : o;for (t = 0; t < s.length; t++) {
          s[t].height(o);
        }
      });
    } else t.height("auto");
  };e(window).on("load", function () {
    n(t);
  }), e(window).resize(function () {
    n(t);
  });
}(jQuery), function (e) {
  "use strict";
  var t = e("html"),
      n = e(".lv-off-canvas .dropdown"),
      i = e(".lv-page"),
      o = e(".lv-off-canvas"),
      r = e('a[href*="#"]:not([href="#"])', o),
      s = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (n) {
    e(".has-open-menu").length || (t.removeClass("has-closed-menu").addClass("has-open-menu"), setTimeout(function () {
      i.click(function (n) {
        n.stopPropagation(), e(".has-open-menu").length && (t.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), r.click(function (e) {
    e.preventDefault(), e.stopPropagation(), t.removeClass("has-open-menu").addClass("has-closed-menu"), i.unbind("click");
  }), s.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), n.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  }), e(".lv-off-canvas .has-dropdown > a").append(s);
}(jQuery), $("[data-search-trigger]").click(function (e) {
  var t = $("[data-search]");return t.removeClass("is-hidden"), $(document).on("scroll", function () {
    t.addClass("is-hidden"), document.activeElement.blur();
  }), !1;
}), $("[data-search] .close").on("click", function () {
  $("[data-search]").addClass("is-hidden"), document.activeElement.blur();
}), $(window).on("load", function () {
  $("html").addClass("has-loaded");
}), $('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function () {
  var e = $(this).attr("href"),
      t = $(e);t.length && $.scrollTo(t.offset().top - 50, 500);
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
}), $('a[href="#sitemap"]').length && $('a[href="#sitemap"]').click(function () {
  var e = $(this).attr("href"),
      t = $(e);$(".fa-angle-down").toggleClass("is-active"), setTimeout(function () {
    $.scrollTo(t.offset().top, 300);
  }, 300);
}), $(".global-header, .btn-back-top").headroom((_$$headroom = { offset: 378, tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", function onTop() {}), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
