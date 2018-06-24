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
      r = Object.getPrototypeOf,
      o = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      u = {},
      c = u.toString,
      f = u.hasOwnProperty,
      d = f.toString,
      h = d.call(Object),
      p = {},
      g = function g(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      m = function m(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var r,
        o = (t = t || i).createElement("script");if (o.text = e, n) for (r in v) {
      n[r] && (o[r] = n[r]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? u[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var _ = function _(e, t) {
    return new _.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function w(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }_.fn = _.prototype = { jquery: "3.3.1", constructor: _, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = _.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return _.each(this, e);
    }, map: function map(e) {
      return this.pushStack(_.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, _.extend = _.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (u && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, s[t] = _.extend(u, o, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, _.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === h);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (w(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (w(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) {
        !t(e[r], r) !== s && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          r,
          o = 0,
          a = [];if (w(e)) for (i = e.length; o < i; o++) {
        null != (r = t(e[o], o, n)) && a.push(r);
      } else for (o in e) {
        null != (r = t(e[o], o, n)) && a.push(r);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    u["[object " + t + "]"] = t.toLowerCase();
  });var E = function (e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m,
        v,
        y,
        b,
        _ = "sizzle" + 1 * new Date(),
        T = e.document,
        w = 0,
        E = 0,
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
        j = N.slice,
        L = function L(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        q = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
        M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
        F = new RegExp(H + "+", "g"),
        W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        B = new RegExp("^" + H + "*," + H + "*"),
        $ = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        V = new RegExp(M),
        K = new RegExp("^" + R + "$"),
        Q = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + q), PSEUDO: new RegExp("^" + M), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        z = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      d();
    },
        re = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      O.apply(N = j.call(T.childNodes), T.childNodes), N[T.childNodes.length].nodeType;
    } catch (e) {
      O = { apply: N.length ? function (e, t) {
          k.apply(e, j.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function oe(e, t, i, r) {
      var o,
          a,
          u,
          c,
          f,
          p,
          v,
          y = t && t.ownerDocument,
          w = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;if (!r && ((t ? t.ownerDocument || t : T) !== h && d(t), t = t || h, g)) {
        if (11 !== w && (f = X.exec(e))) if (o = f[1]) {
          if (9 === w) {
            if (!(u = t.getElementById(o))) return i;if (u.id === o) return i.push(u), i;
          } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i;
        } else {
          if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(o)), i;
        }if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
          if (1 !== w) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = _), a = (p = s(e)).length; a--;) {
              p[a] = "#" + c + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            c === _ && t.removeAttribute("id");
          }
        }
      }return l(e.replace(W, "$1"), t, i, r);
    }function se() {
      var e = [];return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }function ae(e) {
      return e[_] = !0, e;
    }function le(e) {
      var t = h.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ue(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        i.attrHandle[n[r]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function he(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) {
            n[r = o[s]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, d = oe.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : T;return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), T !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = G.test(h.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length;
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
              r,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (r = t.getElementsByName(e), i = 0; o = r[i++];) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = o[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], m = [], (n.qsa = G.test(h.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = h.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M);
      }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === T && b(T, e) ? -1 : t === h || t.ownerDocument === T && b(T, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;if (r === o) return ce(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ce(s[i], a[i]) : s[i] === T ? -1 : a[i] === T ? 1 : 0;
      }, h) : h;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== h && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return oe(t, h, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== h && d(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== h && d(e);var r = i.attrHandle[t.toLowerCase()],
          o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        for (; t = e[o++];) {
          t === e[o] && (r = i.push(o));
        }for (; r--;) {
          e.splice(i[r], 1);
        }
      }return c = null, e;
    }, r = oe.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += r(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += r(t);
      }return n;
    }, (i = oe.selectors = { cacheLength: 50, createPseudo: ae, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
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
          var t = C[e + " "];return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var r = oe.attr(i, e);return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                f,
                d,
                h,
                p,
                g = o !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (m) {
              if (o) {
                for (; g;) {
                  for (d = t; d = d[g];) {
                    if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                  }p = g = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? m.firstChild : m.lastChild], s && y) {
                for (b = (h = (u = (c = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();) {
                  if (1 === d.nodeType && ++b && d === t) {
                    c[e] = [w, h, b];break;
                  }
                }
              } else if (y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === b) for (; (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [w, b]), d !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) {
              e[i = L(e, o[s])] = !(n[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(W, "$1"));return i[_] ? ae(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return K.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: he(!1), disabled: he(!0), checked: function checked(e) {
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
      i.pseudos[t] = de(t);
    }function me() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          r = t.next,
          o = r || i,
          s = n && "parentNode" === o,
          a = E++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, r);
        }return !1;
      } : function (t, n, l) {
        var u,
            c,
            f,
            d = [w, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((u = c[o]) && u[0] === w && u[1] === a) return d[2] = u[2];if (c[o] = d, d[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function _e(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) {
        (o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
      }return s;
    }function Te(e, t, n, i, r, o) {
      return i && !i[_] && (i = Te(i)), r && !r[_] && (r = Te(r, o)), ae(function (o, s, a, l) {
        var u,
            c,
            f,
            d = [],
            h = [],
            p = s.length,
            g = o || function (e, t, n) {
          for (var i = 0, r = t.length; i < r; i++) {
            oe(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : _e(g, d, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : m;if (n && n(m, v, a, l), i) for (u = _e(v, h), i(u, [], a, l), c = u.length; c--;) {
          (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
        }if (o) {
          if (r || e) {
            if (r) {
              for (u = [], c = v.length; c--;) {
                (f = v[c]) && u.push(m[c] = f);
              }r(null, v = [], u, l);
            }for (c = v.length; c--;) {
              (f = v[c]) && (u = r ? L(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f));
            }
          }
        } else v = _e(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v);
      });
    }function we(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = ye(function (e) {
        return e === t;
      }, a, !0), f = ye(function (e) {
        return L(t, e) > -1;
      }, a, !0), d = [function (e, n, i) {
        var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));return t = null, r;
      }]; l < o; l++) {
        if (n = i.relative[e[l].type]) d = [ye(be(d), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++) {}return Te(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < r && we(e.slice(l, r)), r < o && we(e = e.slice(r)), r < o && ve(e));
          }d.push(n);
        }
      }return be(d);
    }return me.prototype = i.filters = i.pseudos, i.setFilters = new me(), s = oe.tokenize = function (e, t) {
      var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c = x[e + " "];if (c) return t ? 0 : c.slice(0);for (a = e, l = [], u = i.preFilter; a;) {
        for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = $.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(W, " ") }), a = a.slice(n.length)), i.filter) {
          !(r = Q[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? oe.error(e) : x(e, l).slice(0);
    }, a = oe.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          a = S[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = we(t[n]))[_] ? r.push(a) : o.push(a);
        }(a = S(e, function (e, t) {
          var n = t.length > 0,
              r = e.length > 0,
              o = function o(_o, s, a, l, c) {
            var f,
                p,
                m,
                v = 0,
                y = "0",
                b = _o && [],
                _ = [],
                T = u,
                E = _o || r && i.find.TAG("*", c),
                C = w += null == T ? 1 : Math.random() || .1,
                x = E.length;for (c && (u = s === h || s || c); y !== x && null != (f = E[y]); y++) {
              if (r && f) {
                for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); m = e[p++];) {
                  if (m(f, s || h, a)) {
                    l.push(f);break;
                  }
                }c && (w = C);
              }n && ((f = !m && f) && v--, _o && b.push(f));
            }if (v += y, n && y !== v) {
              for (p = 0; m = t[p++];) {
                m(b, _, s, a);
              }if (_o) {
                if (v > 0) for (; y--;) {
                  b[y] || _[y] || (_[y] = I.call(l));
                }_ = _e(_);
              }O.apply(l, _), c && !_o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
            }return c && (w = C, u = T), b;
          };return n ? ae(o) : o;
        }(o, r))).selector = e;
      }return a;
    }, l = oe.select = function (e, t, n, r) {
      var o,
          l,
          u,
          c,
          f,
          d = "function" == typeof e && e,
          h = !r && s(e = d.selector || e);if (n = n || [], 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);) {
          if ((f = i.find[c]) && (r = f(u.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = r.length && ve(l))) return O.apply(n, r), n;break;
          }
        }
      }return (d || a(e, h))(r, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ue("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ue("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ue(P, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), oe;
  }(e);_.find = E, _.expr = E.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = E.uniqueSort, _.text = E.getText, _.isXMLDoc = E.isXML, _.contains = E.contains, _.escapeSelector = E.escape;var C = function C(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && _(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      x = function x(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      S = _.expr.match.needsContext;function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e, t, n) {
    return g(t) ? _.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? _.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? _.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : _.filter(t, e, n);
  }_.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, _.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (_.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        _.find(e, r[t], n);
      }return i > 1 ? _.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(N(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(N(this, e || [], !0));
    }, is: function is(e) {
      return !!N(this, "string" == typeof e && S.test(e) ? _(e) : e || [], !1).length;
    } });var I,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init = function (e, t, n) {
    var r, o;if (!e) return this;if (n = n || I, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && _.isPlainObject(t)) for (r in t) {
          g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }return this;
      }return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
  }).prototype = _.fn, I = _(i);var O = /^(?:parents|prev(?:Until|All))/,
      j = { children: !0, contents: !0, next: !0, prev: !0 };function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }_.fn.extend({ has: function has(e) {
      var t = _(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (_.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && _(e);if (!S.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), _.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return C(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return C(e, "parentNode", n);
    }, next: function next(e) {
      return L(e, "nextSibling");
    }, prev: function prev(e) {
      return L(e, "previousSibling");
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
      return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
    } }, function (e, t) {
    _.fn[e] = function (n, i) {
      var r = _.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (j[e] || _.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r);
    };
  });var P = /[^\x20\t\r\n\f]+/g;function H(e) {
    return e;
  }function R(e) {
    throw e;
  }function q(e, t, n, i) {
    var r;try {
      e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }_.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return _.each(e.match(P) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : _.extend({}, e);var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < o.length;) {
          !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
    },
        u = { add: function add() {
        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
          _.each(n, function (n, i) {
            g(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return _.each(arguments, function (e, t) {
          for (var n; (n = _.inArray(t, o, n)) > -1;) {
            o.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? _.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return r = s = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return r = s = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return u.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return u;
  }, _.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return _.Deferred(function (t) {
            _.each(n, function (n, i) {
              var r = g(e[i[4]]) && e[i[4]];o[i[1]](function () {
                var e = r && r.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          var o = 0;function s(t, n, i, r) {
            return function () {
              var a = this,
                  l = arguments,
                  u = function u() {
                var e, u;if (!(t < o)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");u = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(u) ? r ? u.call(e, s(o, n, H, r), s(o, n, R, r)) : (o++, u.call(e, s(o, n, H, r), s(o, n, R, r), s(o, n, H, n.notifyWith))) : (i !== H && (a = void 0, l = [e]), (r || n.resolveWith)(a, l));
                }
              },
                  c = r ? u : function () {
                try {
                  u();
                } catch (e) {
                  _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== R && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return _.Deferred(function (e) {
            n[0][3].add(s(0, e, g(r) ? r : H, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : H)), n[2][3].add(s(0, e, g(i) ? i : R));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? _.extend(e, r) : r;
        } },
          o = {};return _.each(n, function (e, t) {
        var s = t[2],
            a = t[5];r[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = s.fireWith;
      }), r.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = _.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (q(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();for (; n--;) {
        q(r[n], a(n), s.reject);
      }return s.promise();
    } });var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, _.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = _.Deferred();function W() {
    i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready();
  }_.fn.ready = function (e) {
    return F.then(e).catch(function (e) {
      _.readyException(e);
    }), this;
  }, _.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || F.resolveWith(i, [_]));
    } }), _.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));var B = function B(e, t, n, i, r, o, s) {
    var a = 0,
        l = e.length,
        u = null == n;if ("object" === b(n)) for (a in r = !0, n) {
      B(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== i && (r = !0, g(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function t(e, _t2, n) {
      return u.call(_(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
  },
      $ = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function K(e) {
    return e.replace($, "ms-").replace(U, V);
  }var Q = function Q(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Y() {
    this.expando = _.expando + Y.uid++;
  }Y.uid = 1, Y.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[K(t)] = n;else for (i in t) {
        r[K(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(P) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !_.isEmptyObject(t);
    } };var z = new Y(),
      G = new Y(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}G.set(e, t, n);
    } else n = void 0;return n;
  }_.extend({ hasData: function hasData(e) {
      return G.hasData(e) || z.hasData(e);
    }, data: function data(e, t, n) {
      return G.access(e, t, n);
    }, removeData: function removeData(e, t) {
      G.remove(e, t);
    }, _data: function _data(e, t, n) {
      return z.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      z.remove(e, t);
    } }), _.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;if (void 0 === e) {
        if (this.length && (r = G.get(o), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), Z(o, i, r[i]));
          }z.set(o, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        G.set(this, e);
      }) : B(this, function (t) {
        var n;if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;this.each(function () {
          G.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        G.remove(this, e);
      });
    } }), _.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = z.get(e, t), n && (!i || Array.isArray(n) ? i = z.access(e, t, _.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = _.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = _._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        _.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return z.get(e, n) || z.access(e, n, { empty: _.Callbacks("once memory").add(function () {
          z.remove(e, [t + "queue", n]);
        }) });
    } }), _.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = _.queue(this, e, t);_._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        _.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = _.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --i || r.resolveWith(o, [o]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = z.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display");
  },
      re = function re(e, t, n, i) {
    var r,
        o,
        s = {};for (o in t) {
      s[o] = e.style[o], e.style[o] = t[o];
    }for (o in r = n.apply(e, i || []), t) {
      e.style[o] = s[o];
    }return r;
  };function oe(e, t, n, i) {
    var r,
        o,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return _.css(e, t, "");
    },
        l = a(),
        u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
        c = (_.cssNumber[t] || "px" !== u && +l) && te.exec(_.css(e, t));if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--;) {
        _.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
      }c *= 2, _.style(e, t, c + u), n = n || [];
    }return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = se[i];return r || (t = n.body.appendChild(n.createElement(i)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r);
  }function le(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) {
      (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = z.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", z.set(i, "display", n)));
    }for (o = 0; o < s; o++) {
      null != r[o] && (e[o].style.display = r[o]);
    }return e;
  }_.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? _(this).show() : _(this).hide();
      });
    } });var ue = /^(?:checkbox|radio)$/i,
      ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fe = /^$|^module$|\/(?:java|ecma)script/i,
      de = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function he(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? _.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"));
    }
  }de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;var ge,
      me,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, r) {
    for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) {
      if ((o = e[h]) || 0 === o) if ("object" === b(o)) _.merge(d, o.nodeType ? [o] : o);else if (ve.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
          s = s.lastChild;
        }_.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
      } else d.push(t.createTextNode(o));
    }for (f.textContent = "", h = 0; o = d[h++];) {
      if (i && _.inArray(o, i) > -1) r && r.push(o);else if (u = _.contains(o.ownerDocument, o), s = he(f.appendChild(o), "script"), u && pe(s), n) for (c = 0; o = s[c++];) {
        fe.test(o.type || "") && n.push(o);
      }
    }return f;
  }ge = i.createDocumentFragment().appendChild(i.createElement("div")), (me = i.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      _e = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      we = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function Ce() {
    return !1;
  }function xe() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function Se(e, t, n, i, r, o) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        Se(e, a, n, i, t[a], o);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ce;else if (!r) return e;return 1 === o && (s = r, (r = function r(e) {
      return _().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = _.guid++)), e.each(function () {
      _.event.add(this, t, r, i, n);
    });
  }_.event = { global: {}, add: function add(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          g,
          m = z.get(e);if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(be, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(P) || [""]).length; u--;) {
        h = g = (a = we.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = _.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = _.event.special[h] || {}, c = _.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && _.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), _.event.global[h] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          g,
          m = z.hasData(e) && z.get(e);if (m && (l = m.events)) {
        for (u = (t = (t || "").match(P) || [""]).length; u--;) {
          if (h = g = (a = we.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
            for (f = _.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) {
              c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            }s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || _.removeEvent(e, h, m.handle), delete l[h]);
          } else for (h in l) {
            _.event.remove(e, h + t[u], n, i, !0);
          }
        }_.isEmptyObject(l) && z.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = _.event.fix(e),
          l = new Array(arguments.length),
          u = (z.get(this, "events") || {})[a.type] || [],
          c = _.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (s = _.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          o,
          s,
          a = [],
          l = t.delegateCount,
          u = e.target;if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
          for (o = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), s[r] && o.push(i);
          }o.length && a.push({ elem: u, handlers: o });
        }
      }return u = this, l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(_.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[_.expando] ? e : new _.Event(e);
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
        } } } }, _.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, _.Event = function (e, t) {
    if (!(this instanceof _.Event)) return new _.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0;
  }, _.Event.prototype = { constructor: _.Event, isDefaultPrevented: Ce, isPropagationStopped: Ce, isImmediatePropagationStopped: Ce, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, _.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, _.event.addProp), _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    _.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            r = e.handleObj;return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      } };
  }), _.fn.extend({ on: function on(e, t, n, i) {
      return Se(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        _.event.remove(this, e, n, t);
      });
    } });var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ke(e, t) {
    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e;
  }function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function je(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Le(e, t) {
    var n, i, r, o, s, a, l, u;if (1 === t.nodeType) {
      if (z.hasData(e) && (o = z.access(e), s = z.set(t, o), u = o.events)) for (r in delete s.handle, s.events = {}, u) {
        for (n = 0, i = u[r].length; n < i; n++) {
          _.event.add(t, r, u[r][n]);
        }
      }G.hasData(e) && (a = G.access(e), l = _.extend({}, a), G.set(t, l));
    }
  }function Pe(e, t, n, i) {
    t = s.apply([], t);var r,
        o,
        a,
        l,
        u,
        c,
        f = 0,
        d = e.length,
        h = d - 1,
        m = t[0],
        v = g(m);if (v || d > 1 && "string" == typeof m && !p.checkClone && Ne.test(m)) return e.each(function (r) {
      var o = e.eq(r);v && (t[0] = m.call(this, r, o.html())), Pe(o, t, n, i);
    });if (d && (o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
      for (l = (a = _.map(he(r, "script"), Oe)).length; f < d; f++) {
        u = r, f !== h && (u = _.clone(u, !0, !0), l && _.merge(a, he(u, "script"))), n.call(e[f], u, f);
      }if (l) for (c = a[a.length - 1].ownerDocument, _.map(a, je), f = 0; f < l; f++) {
        u = a[f], fe.test(u.type || "") && !z.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(u.src) : y(u.textContent.replace(Ie, ""), c, u));
      }
    }return e;
  }function He(e, t, n) {
    for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
      n || 1 !== i.nodeType || _.cleanData(he(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }_.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(De, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c = e.cloneNode(!0),
          f = _.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (s = he(c), i = 0, r = (o = he(e)).length; i < r; i++) {
        a = o[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (o = o || he(e), s = s || he(c), i = 0, r = o.length; i < r; i++) {
        Le(o[i], s[i]);
      } else Le(e, c);return (s = he(c, "script")).length > 0 && pe(s, !f && he(e, "script")), c;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Q(n)) {
          if (t = n[z.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            }n[z.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      }
    } }), _.fn.extend({ detach: function detach(e) {
      return He(this, e, !0);
    }, remove: function remove(e) {
      return He(this, e);
    }, text: function text(e) {
      return B(this, function (e) {
        return void 0 === e ? _.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ke(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (_.cleanData(he(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return _.clone(this, e, t);
      });
    }, html: function html(e) {
      return B(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = _.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (_.cleanData(he(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Pe(this, arguments, function (t) {
        var n = this.parentNode;_.inArray(this, e) < 0 && (_.cleanData(he(this)), n && n.replaceChild(t, this));
      }, e);
    } }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    _.fn[e] = function (e) {
      for (var n, i = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++) {
        n = s === o ? this : this.clone(!0), _(r[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      qe = function qe(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Me = new RegExp(ne.join("|"), "i");function Fe(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !p.pixelBoxStyles() && Re.test(s) && Me.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }function We(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (c) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(u).appendChild(c);var t = e.getComputedStyle(c);r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", be.removeChild(u), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var r,
        o,
        s,
        a,
        l,
        u = i.createElement("div"),
        c = i.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), r;
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
    var t = _.cssProps[e];return t || (t = _.cssProps[e] = function (e) {
      if (e in Qe) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;) {
        if ((e = Ke[n] + t) in Qe) return e;
      }
    }(e) || e), t;
  }function ze(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Ge(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += _.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ne[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += _.css(e, "border" + ne[s] + "Width", !0, r) : a += _.css(e, "border" + ne[s] + "Width", !0, r));
    }return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
  }function Xe(e, t, n) {
    var i = qe(e),
        r = Fe(e, t, i),
        o = "border-box" === _.css(e, "boxSizing", !1, i),
        s = o;if (Re.test(r)) {
      if (!n) return r;r = "auto";
    }return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
  }function Je(e, t, n, i, r) {
    return new Je.prototype.init(e, t, n, i, r);
  }_.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = K(t),
            l = $e.test(t),
            u = e.style;if (l || (t = Ye(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var r,
          o,
          s,
          a = K(t);return $e.test(t) || (t = Ye(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    } }), _.each(["height", "width"], function (e, t) {
    _.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !Be.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : re(e, Ue, function () {
          return Xe(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            o = qe(e),
            s = "border-box" === _.css(e, "boxSizing", !1, o),
            a = i && Ge(e, t, i, s, o);return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ge(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), ze(0, n, a);
      } };
  }), _.cssHooks.marginLeft = We(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    _.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
        }return r;
      } }, "margin" !== e && (_.cssHooks[e + t].set = ze);
  }), _.fn.extend({ css: function css(e, t) {
      return B(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;if (Array.isArray(t)) {
          for (i = qe(e), r = t.length; s < r; s++) {
            o[t[s]] = _.css(e, t[s], !1, i);
          }return o;
        }return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
      }, e, t, arguments.length > 1);
    } }), _.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    } }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit);
      } } }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, _.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, _.fx = Je.prototype.init, _.fx.step = {};var Ze,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, _.fx.interval), _.fx.tick());
  }function rt() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function ot(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function st(e, t, n) {
    for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, s = r.length; o < s; o++) {
      if (i = r[o].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        r,
        o = 0,
        s = at.prefilters.length,
        a = _.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var t = Ze || rt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) {
        u.tweens[o].run(i);
      }return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
    },
        u = a.promise({ elem: e, props: _.extend({}, t), opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || rt(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? u.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          u.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (!function (e, t) {
      var n, i, r, o, s;for (n in e) {
        if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = _.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
          (n in e) || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
      }
    }(c, u.opts.specialEasing); o < s; o++) {
      if (i = at.prefilters[o].call(u, e, c, u.opts)) return g(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    }return _.map(c, st, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u;
  }_.Animation = _.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return oe(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(P);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          g = e.nodeType && ie(e),
          m = z.get(e, "fxshow");for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (r = t[i], tt.test(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;g = !0;
          }h[i] = m && m[i] || _.style(e, i);
        }
      }if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = z.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = _.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (d.done(function () {
        p.display = u;
      }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) {
        l || (m ? "hidden" in m && (g = m.hidden) : m = z.access(e, "fxshow", { display: u }), o && (m.hidden = !g), g && le([e], !0), d.done(function () {
          for (i in g || le([e]), z.remove(e, "fxshow"), h) {
            _.style(e, i, h[i]);
          }
        })), l = st(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), _.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? _.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
    }, i;
  }, _.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = _.isEmptyObject(e),
          o = _.speed(t, n, i),
          s = function s() {
        var t = at(this, _.extend({}, e), o);(r || z.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = _.timers,
            s = z.get(this);if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
          s[r] && s[r].stop && nt.test(r) && i(s[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        }!t && n || _.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = z.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = _.timers,
            s = i ? i.length : 0;for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), _.each(["toggle", "show", "hide"], function (e, t) {
    var n = _.fn[t];_.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
    };
  }), _.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    _.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), _.timers = [], _.fx.tick = function () {
    var e,
        t = 0,
        n = _.timers;for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || _.fx.stop(), Ze = void 0;
  }, _.fx.timer = function (e) {
    _.timers.push(e), _.fx.start();
  }, _.fx.interval = 13, _.fx.start = function () {
    et || (et = !0, it());
  }, _.fx.stop = function () {
    et = null;
  }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function (t, n) {
    return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ut = _.expr.attrHandle;_.fn.extend({ attr: function attr(e, t) {
      return B(this, _.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        _.removeAttr(this, e);
      });
    } }), _.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && D(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(P);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ut[t] || _.find.attr;ut[t] = function (e, t, i) {
      var r,
          o,
          s = t.toLowerCase();return i || (o = ut[s], ut[s] = r, r = null != n(e, t, i) ? s : null, ut[s] = o), r;
    };
  });var ct = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;function dt(e) {
    return (e.match(P) || []).join(" ");
  }function ht(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }_.fn.extend({ prop: function prop(e, t) {
      return B(this, _.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[_.propFix[e] || e];
      });
    } }), _.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = _.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (_.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _.propFix[this.toLowerCase()] = this;
  }), _.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (g(e)) return this.each(function (t) {
        _(this).addClass(e.call(this, t, ht(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
          for (s = 0; o = t[s++];) {
            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          }r !== (a = dt(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (g(e)) return this.each(function (t) {
        _(this).removeClass(e.call(this, t, ht(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
          for (s = 0; o = t[s++];) {
            for (; i.indexOf(" " + o + " ") > -1;) {
              i = i.replace(" " + o + " ", " ");
            }
          }r !== (a = dt(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        _(this).toggleClass(e.call(this, n, ht(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;if (i) for (r = 0, o = _(this), s = pt(e); t = s[r++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ht(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var gt = /\r/g;_.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = g(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(gt, "") : null == n ? "" : n : void 0;
    } }), _.extend({ valHooks: { option: { get: function get(e) {
          var t = _.find.attr(e, "value");return null != t ? t : dt(_.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;for (i = o < 0 ? l : s ? o : 0; i < l; i++) {
            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (t = _(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, o = _.makeArray(t), s = r.length; s--;) {
            ((i = r[s]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), _.each(["radio", "checkbox"], function () {
    _.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1;
      } }, p.checkOn || (_.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var mt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };_.extend(_.event, { trigger: function trigger(t, n, r, o) {
      var s,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          v = [r || i],
          y = f.call(t, "type") ? t.type : t,
          b = f.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), h = _.event.special[y] || {}, o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
        if (!o && !h.noBubble && !m(r)) {
          for (u = h.delegateType || y, mt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? u : h.bindType || y, (d = (z.get(a, "events") || {})[t.type] && z.get(a, "handle")) && d.apply(a, n), (d = c && a[c]) && d.apply && Q(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !Q(r) || c && g(r[y]) && !m(r) && ((l = r[c]) && (r[c] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), _.event.triggered = void 0, l && (r[c] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });_.event.trigger(i, null, t);
    } }), _.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        _.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return _.event.trigger(e, t, n, !0);
    } }), p.focusin || _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      _.event.simulate(t, e.target, _.event.fix(e));
    };_.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = z.access(i, t);r || i.addEventListener(e, n, !0), z.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = z.access(i, t) - 1;r ? z.access(i, t, r) : (i.removeEventListener(e, n, !0), z.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      _t = /\?/;_.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n;
  };var Tt = /\[\]$/,
      wt = /\r?\n/g,
      Et = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;function xt(e, t, n, i) {
    var r;if (Array.isArray(t)) _.each(t, function (t, r) {
      n || Tt.test(e) ? i(e, r) : xt(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (r in t) {
      xt(e + "[" + r + "]", t[r], n, i);
    }
  }_.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = g(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      xt(n, e[n], t, r);
    }return i.join("&");
  }, _.fn.extend({ serialize: function serialize() {
      return _.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = _.prop(this, "elements");return e ? _.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !_(this).is(":disabled") && Ct.test(this.nodeName) && !Et.test(e) && (this.checked || !ue.test(e));
      }).map(function (e, t) {
        var n = _(this).val();return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
          return { name: t.name, value: e.replace(wt, "\r\n") };
        }) : { name: t.name, value: n.replace(wt, "\r\n") };
      }).get();
    } });var St = /%20/g,
      Dt = /#.*$/,
      At = /([?&])_=[^&]*/,
      Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      kt = /^\/\//,
      Ot = {},
      jt = {},
      Lt = "*/".concat("*"),
      Pt = i.createElement("a");function Ht(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          o = t.toLowerCase().match(P) || [];if (g(n)) for (; i = o[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Rt(e, t, n, i) {
    var r = {},
        o = e === jt;function s(a) {
      var l;return r[a] = !0, _.each(e[a] || [], function (e, a) {
        var u = a(t, n, i);return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1);
      }), l;
    }return s(t.dataTypes[0]) || !r["*"] && s("*");
  }function qt(e, t) {
    var n,
        i,
        r = _.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && _.extend(!0, e, i), e;
  }Pt.href = yt.href, _.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Lt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? qt(qt(e, _.ajaxSettings), t) : qt(_.ajaxSettings, e);
    }, ajaxPrefilter: Ht(Ot), ajaxTransport: Ht(jt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          d,
          h,
          p = _.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
          v = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = p.statusCode || {},
          T = {},
          w = {},
          E = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!a) for (a = {}; t = Nt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, T[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) C.always(e[C.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || E;return r && r.abort(t), x(0, t), this;
        } };if (v.promise(C), p.url = ((t || p.url || yt.href) + "").replace(kt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
        u = i.createElement("a");try {
          u.href = p.url, u.href = u.href, p.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Rt(Ot, p, n, C), c) return C;for (d in (f = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(Dt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(St, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_t.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), h = (_t.test(o) ? "&" : "?") + "_=" + bt++ + h), p.url = o + h), p.ifModified && (_.lastModified[o] && C.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && C.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        C.setRequestHeader(d, p.headers[d]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = Rt(jt, p, n, C)) {
        if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), c) return C;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          c = !1, r.send(T, x);
        } catch (e) {
          if (c) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");function x(t, n, i, a) {
        var u,
            d,
            h,
            T,
            w,
            E = n;c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (T = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (r in a) {
            if (a[r] && a[r].test(i)) {
              l.unshift(r);break;
            }
          }if (l[0] in n) o = l[0];else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;break;
              }s || (s = r);
            }o = o || s;
          }if (o) return o !== l[0] && l.unshift(o), n[o];
        }(p, C, i)), T = function (e, t, n, i) {
          var r,
              o,
              s,
              a,
              l,
              u = {},
              c = e.dataTypes.slice();if (c[1]) for (s in e.converters) {
            u[s.toLowerCase()] = e.converters[s];
          }for (o = c.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) {
                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                  !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
              }
            }
          }return { state: "success", data: t };
        }(p, T, C, u), u ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (_.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (_.etag[o] = w)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = T.state, d = T.data, u = !(h = T.error))) : (h = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || E) + "", u ? v.resolveWith(g, [d, E, C]) : v.rejectWith(g, [C, E, h]), C.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? d : h]), y.fireWith(g, [C, E]), f && (m.trigger("ajaxComplete", [C, p]), --_.active || _.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return _.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return _.get(e, void 0, t, "script");
    } }), _.each(["get", "post"], function (e, t) {
    _[t] = function (e, n, i, r) {
      return g(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({ url: e, type: t, dataType: r, data: n, success: i }, _.isPlainObject(e) && e));
    };
  }), _._evalUrl = function (e) {
    return _.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, _.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        _(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = _(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        _(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        _(this).replaceWith(this.childNodes);
      }), this;
    } }), _.expr.pseudos.hidden = function (e) {
    return !_.expr.pseudos.visible(e);
  }, _.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, _.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Mt = { 0: 200, 1223: 204 },
      Ft = _.ajaxSettings.xhr();p.cors = !!Ft && "withCredentials" in Ft, p.ajax = Ft = !!Ft, _.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Ft && !t.crossDomain) return { send: function send(r, o) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
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
  }), _.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return _.globalEval(e), e;
      } } }), _.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), _.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(r, o) {
        t = _("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Wt,
      Bt = [],
      $t = /(=)\?(?=&|$)|\?\?/;_.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Bt.pop() || _.expando + "_" + bt++;return this[e] = !0, e;
    } }), _.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($t, "$1" + r) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || _.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), s && g(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Wt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), _.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));var r, o, s;
  }, _.fn.load = function (e, t, n) {
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = dt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && _.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    _.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), _.expr.pseudos.animated = function (e) {
    return _.grep(_.timers, function (t) {
      return e === t.elem;
    }).length;
  }, _.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          u = _.css(e, "position"),
          c = _(e),
          f = {};"static" === u && (e.style.position = "relative"), a = c.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f);
    } }, _.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        _.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0));
        }return { top: t.top - r.top - _.css(i, "marginTop", !0), left: t.left - r.left - _.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === _.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;_.fn[e] = function (i) {
      return B(this, function (e, i, r) {
        var o;if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), _.each(["top", "left"], function (e, t) {
    _.cssHooks[t] = We(p.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), Re.test(n) ? _(e).position()[t] + "px" : n;
    });
  }), _.each({ Height: "height", Width: "width" }, function (e, t) {
    _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      _.fn[i] = function (r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");return B(this, function (t, n, r) {
          var o;return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, a) : _.style(t, n, r, a);
        }, t, s ? r : void 0, s);
      };
    });
  }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    _.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), _.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), _.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), _.proxy = function (e, t) {
    var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function r() {
      return e.apply(t || this, i.concat(o.call(arguments)));
    }).guid = e.guid = e.guid || _.guid++, r;
  }, _.holdReady = function (e) {
    e ? _.readyWait++ : _.ready(!0);
  }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = D, _.isFunction = g, _.isWindow = m, _.camelCase = K, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
    var t = _.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _;
  });var Ut = e.jQuery,
      Vt = e.$;return _.noConflict = function (t) {
    return e.$ === _ && (e.$ = Vt), t && e.jQuery === _ && (e.jQuery = Ut), _;
  }, t || (e.jQuery = e.$ = _), _;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function (t) {
        o(e, t, n[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;var a = function (e) {
    var t = "transitionend";function n(t) {
      var n = this,
          r = !1;return e(this).one(i.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || i.triggerTransitionEnd(n);
      }, t), this;
    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));return e;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || "");try {
          return e(document).find(n).length > 0 ? n : null;
        } catch (e) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var n = e(t).css("transition-duration");return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
      }, reflow: function reflow(e) {
        return e.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        e(n).trigger(t);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      }, isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            var o = n[r],
                s = t[r],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }var l;
      } };return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = { bindType: t, delegateType: t, handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, i;
  }(t),
      l = function (e) {
    var t = e.fn.alert,
        n = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        i = "alert",
        o = "fade",
        s = "show",
        l = function () {
      function t(e) {
        this._element = e;
      }var l = t.prototype;return l.close = function (e) {
        e = e || this._element;var t = this._getRootElement(e);this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
      }, l.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, l._getRootElement = function (t) {
        var n = a.getSelectorFromElement(t),
            r = !1;return n && (r = e(n)[0]), r || (r = e(t).closest("." + i)[0]), r;
      }, l._triggerCloseEvent = function (t) {
        var i = e.Event(n.CLOSE);return e(t).trigger(i), i;
      }, l._removeElement = function (t) {
        var n = this;if (e(t).removeClass(s), e(t).hasClass(o)) {
          var i = a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END, function (e) {
            return n._destroyElement(t, e);
          }).emulateTransitionEnd(i);
        } else this._destroyElement(t);
      }, l._destroyElement = function (t) {
        e(t).detach().trigger(n.CLOSED).remove();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.alert");r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this);
        });
      }, t._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
      return e.fn.alert = t, l._jQueryInterface;
    }, l;
  }(t),
      u = function (e) {
    var t = "button",
        n = e.fn[t],
        i = "active",
        o = "btn",
        s = "focus",
        a = '[data-toggle^="button"]',
        l = '[data-toggle="buttons"]',
        u = "input",
        c = ".active",
        f = ".btn",
        d = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        h = function () {
      function t(e) {
        this._element = e;
      }var n = t.prototype;return n.toggle = function () {
        var t = !0,
            n = !0,
            r = e(this._element).closest(l)[0];if (r) {
          var o = e(this._element).find(u)[0];if (o) {
            if ("radio" === o.type) if (o.checked && e(this._element).hasClass(i)) t = !1;else {
              var s = e(r).find(c)[0];s && e(s).removeClass(i);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !e(this._element).hasClass(i), e(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i)), t && e(this._element).toggleClass(i);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(d.CLICK_DATA_API, a, function (t) {
      t.preventDefault();var n = t.target;e(n).hasClass(o) || (n = e(n).closest(f)), h._jQueryInterface.call(e(n), "toggle");
    }).on(d.FOCUS_BLUR_DATA_API, a, function (t) {
      var n = e(t.target).closest(f)[0];e(n).toggleClass(s, /^focus(in)?$/.test(t.type));
    }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
      return e.fn[t] = n, h._jQueryInterface;
    }, h;
  }(t),
      c = function (e) {
    var t = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = e.fn[t],
        l = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        u = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        c = "next",
        f = "prev",
        d = "left",
        h = "right",
        p = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        g = "carousel",
        m = "active",
        v = "slide",
        y = "carousel-item-right",
        b = "carousel-item-left",
        _ = "carousel-item-next",
        T = "carousel-item-prev",
        w = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        E = function () {
      function o(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(w.INDICATORS)[0], this._addEventListeners();
      }var E = o.prototype;return E.next = function () {
        this._isSliding || this._slide(c);
      }, E.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, E.prev = function () {
        this._isSliding || this._slide(f);
      }, E.pause = function (t) {
        t || (this._isPaused = !0), e(this._element).find(w.NEXT_PREV)[0] && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, E.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, E.to = function (t) {
        var n = this;this._activeElement = e(this._element).find(w.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var r = t > i ? c : f;this._slide(r, this._items[t]);
        }
      }, E.dispose = function () {
        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, E._getConfig = function (e) {
        return e = s({}, l, e), a.typeCheckConfig(t, e, u), e;
      }, E._addEventListeners = function () {
        var t = this;this._config.keyboard && e(this._element).on(p.KEYDOWN, function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function (e) {
          return t.pause(e);
        }).on(p.MOUSELEAVE, function (e) {
          return t.cycle(e);
        }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function () {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval);
        }));
      }, E._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
            e.preventDefault(), this.prev();break;case 39:
            e.preventDefault(), this.next();}
      }, E._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(w.ITEM)), this._items.indexOf(t);
      }, E._getItemByDirection = function (e, t) {
        var n = e === c,
            i = e === f,
            r = this._getItemIndex(t),
            o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;var s = (r + (e === f ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, E._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            r = this._getItemIndex(e(this._element).find(w.ACTIVE_ITEM)[0]),
            o = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });return e(this._element).trigger(o), o;
      }, E._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(w.ACTIVE).removeClass(m);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(m);
        }
      }, E._slide = function (t, n) {
        var i,
            r,
            o,
            s = this,
            l = e(this._element).find(w.ACTIVE_ITEM)[0],
            u = this._getItemIndex(l),
            f = n || l && this._getItemByDirection(t, l),
            g = this._getItemIndex(f),
            E = Boolean(this._interval);if (t === c ? (i = b, r = _, o = d) : (i = y, r = T, o = h), f && e(f).hasClass(m)) this._isSliding = !1;else if (!this._triggerSlideEvent(f, o).isDefaultPrevented() && l && f) {
          this._isSliding = !0, E && this.pause(), this._setActiveIndicatorElement(f);var C = e.Event(p.SLID, { relatedTarget: f, direction: o, from: u, to: g });if (e(this._element).hasClass(v)) {
            e(f).addClass(r), a.reflow(f), e(l).addClass(i), e(f).addClass(i);var x = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(f).removeClass(i + " " + r).addClass(m), e(l).removeClass(m + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(C);
              }, 0);
            }).emulateTransitionEnd(x);
          } else e(l).removeClass(m), e(f).addClass(m), this._isSliding = !1, e(this._element).trigger(C);E && this.cycle();
        }
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
              r = s({}, l, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = s({}, r, t));var a = "string" == typeof t ? t : r.slide;if (i || (i = new o(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof a) {
            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');i[a]();
          } else r.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (t) {
        var i = a.getSelectorFromElement(this);if (i) {
          var r = e(i)[0];if (r && e(r).hasClass(g)) {
            var l = s({}, e(r).data(), e(this).data()),
                u = this.getAttribute("data-slide-to");u && (l.interval = !1), o._jQueryInterface.call(e(r), l), u && e(r).data(n).to(u), t.preventDefault();
          }
        }
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), o;
    }();return e(document).on(p.CLICK_DATA_API, w.DATA_SLIDE, E._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
      e(w.DATA_RIDE).each(function () {
        var t = e(this);E._jQueryInterface.call(t, t.data());
      });
    }), e.fn[t] = E._jQueryInterface, e.fn[t].Constructor = E, e.fn[t].noConflict = function () {
      return e.fn[t] = o, E._jQueryInterface;
    }, E;
  }(t),
      f = function (e) {
    var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        o = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        u = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        c = "show",
        f = "collapse",
        d = "collapsing",
        h = "collapsed",
        p = "width",
        g = "height",
        m = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        v = function () {
      function i(t, n) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
          var o = i[r],
              s = a.getSelectorFromElement(o);null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        e(this._element).hasClass(c) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            r,
            o = this;if (!this._isTransitioning && !e(this._element).hasClass(c) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
          var s = e.Event(u.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));var l = this._getDimension();e(this._element).removeClass(f).addClass(d), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                g = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(o._element).removeClass(d).addClass(f).addClass(c), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN);
            }).emulateTransitionEnd(g), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(c)) {
          var n = e.Event(u.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(d).removeClass(f).removeClass(c), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
                  s = a.getSelectorFromElement(o);if (null !== s) e(s).hasClass(c) || e(o).addClass(h).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[i] = "";var l = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass(d).addClass(f).trigger(u.HIDDEN);
            }).emulateTransitionEnd(l);
          }
        }
      }, v.setTransitioning = function (e) {
        this._isTransitioning = e;
      }, v.dispose = function () {
        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, v._getConfig = function (e) {
        return (e = s({}, o, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
      }, v._getDimension = function () {
        return e(this._element).hasClass(p) ? p : g;
      }, v._getParent = function () {
        var t = this,
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(r).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, v._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(c);n.length > 0 && e(n).toggleClass(h, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (t) {
        var n = a.getSelectorFromElement(t);return n ? e(n)[0] : null;
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this),
              a = r.data(n),
              l = s({}, o, r.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          r = a.getSelectorFromElement(this);e(r).each(function () {
        var t = e(this),
            r = t.data(n) ? "toggle" : i.data();v._jQueryInterface.call(t, r);
      });
    }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
      return e.fn[t] = i, v._jQueryInterface;
    }, v;
  }(t),
      d = function (e) {
    var t = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        l = e.fn[t],
        u = new RegExp("38|40|27"),
        c = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        f = "disabled",
        d = "show",
        h = "dropup",
        p = "dropright",
        g = "dropleft",
        m = "dropdown-menu-right",
        v = "position-static",
        y = '[data-toggle="dropdown"]',
        b = ".dropdown form",
        _ = ".dropdown-menu",
        T = ".navbar-nav",
        w = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        E = "top-start",
        C = "top-end",
        x = "bottom-start",
        S = "bottom-end",
        D = "right-start",
        A = "left-start",
        N = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        k = function () {
      function l(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var b = l.prototype;return b.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass(f)) {
          var t = l._getParentFromElement(this._element),
              i = e(this._menu).hasClass(d);if (l._clearMenus(), !i) {
            var r = { relatedTarget: this._element },
                o = e.Event(c.SHOW, r);if (e(t).trigger(o), !o.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(T).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d), e(t).toggleClass(d).trigger(e.Event(c.SHOWN, r));
            }
          }
        }
      }, b.dispose = function () {
        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, b.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, b._addEventListeners = function () {
        var t = this;e(this._element).on(c.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, b._getConfig = function (n) {
        return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, b._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);this._menu = e(t).find(_)[0];
        }return this._menu;
      }, b._getPlacement = function () {
        var t = e(this._element).parent(),
            n = x;return t.hasClass(h) ? (n = E, e(this._menu).hasClass(m) && (n = C)) : t.hasClass(p) ? n = D : t.hasClass(g) ? n = A : e(this._menu).hasClass(m) && (n = S), n;
      }, b._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, b._getPopperConfig = function () {
        var e = this,
            t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
        } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
      }, l._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i);if (n || (n = new l(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), e(this).data(i, n)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(y)), r = 0; r < n.length; r++) {
          var o = l._getParentFromElement(n[r]),
              s = e(n[r]).data(i),
              a = { relatedTarget: n[r] };if (s) {
            var u = s._menu;if (e(o).hasClass(d) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
              var f = e.Event(c.HIDE, a);e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(u).removeClass(d), e(o).removeClass(d).trigger(e.Event(c.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var n,
            i = a.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(_).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
          var n = l._getParentFromElement(this),
              i = e(n).hasClass(d);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var r = e(n).find(w).get();if (0 !== r.length) {
              var o = r.indexOf(t.target);38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e(n).find(y)[0];e(s).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, r(l, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return N;
        } }, { key: "DefaultType", get: function get() {
          return I;
        } }]), l;
    }();return e(document).on(c.KEYDOWN_DATA_API, y, k._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, _, k._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, k._clearMenus).on(c.CLICK_DATA_API, y, function (t) {
      t.preventDefault(), t.stopPropagation(), k._jQueryInterface.call(e(this), "toggle");
    }).on(c.CLICK_DATA_API, b, function (e) {
      e.stopPropagation();
    }), e.fn[t] = k._jQueryInterface, e.fn[t].Constructor = k, e.fn[t].noConflict = function () {
      return e.fn[t] = l, k._jQueryInterface;
    }, k;
  }(t),
      h = function (e) {
    var t = "modal",
        n = ".bs.modal",
        i = e.fn.modal,
        o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        u = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        c = "modal-scrollbar-measure",
        f = "modal-backdrop",
        d = "modal-open",
        h = "fade",
        p = "show",
        g = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        m = function () {
      function i(t, n) {
        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }var m = i.prototype;return m.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e);
      }, m.show = function (t) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          e(this._element).hasClass(h) && (this._isTransitioning = !0);var i = e.Event(u.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(u.CLICK_DISMISS, g.DATA_DISMISS, function (e) {
            return n.hide(e);
          }), e(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
            e(n._element).one(u.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(t);
          }));
        }
      }, m.hide = function (t) {
        var n = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = e.Event(u.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var r = e(this._element).hasClass(h);if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(u.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(u.CLICK_DISMISS), e(this._dialog).off(u.MOUSEDOWN_DISMISS), r) {
              var o = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function (e) {
                return n._hideModal(e);
              }).emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }, m.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, m.handleUpdate = function () {
        this._adjustDialog();
      }, m._getConfig = function (e) {
        return e = s({}, o, e), a.typeCheckConfig(t, e, l), e;
      }, m._showElement = function (t) {
        var n = this,
            i = e(this._element).hasClass(h);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();var r = e.Event(u.SHOWN, { relatedTarget: t }),
            o = function o() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
        };if (i) {
          var s = a.getTransitionDurationFromElement(this._element);e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
        } else o();
      }, m._enforceFocus = function () {
        var t = this;e(document).off(u.FOCUSIN).on(u.FOCUSIN, function (n) {
          document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
        });
      }, m._setEscapeEvent = function () {
        var t = this;this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide());
        }) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS);
      }, m._setResizeEvent = function () {
        var t = this;this._isShown ? e(window).on(u.RESIZE, function (e) {
          return t.handleUpdate(e);
        }) : e(window).off(u.RESIZE);
      }, m._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          e(document.body).removeClass(d), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN);
        });
      }, m._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
      }, m._showBackdrop = function (t) {
        var n = this,
            i = e(this._element).hasClass(h) ? h : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = f, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(u.CLICK_DISMISS, function (e) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;if (!i) return void t();var r = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(p);var o = function o() {
            n._removeBackdrop(), t && t();
          };if (e(this._element).hasClass(h)) {
            var s = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        } else t && t();
      }, m._adjustDialog = function () {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, m._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, m._checkScrollbar = function () {
        var e = document.body.getBoundingClientRect();this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, m._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          e(g.FIXED_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.paddingRight,
                o = e(i).css("padding-right");e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
          }), e(g.STICKY_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
          }), e(g.NAVBAR_TOGGLER).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = e(document.body).css("padding-right");e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, m._resetScrollbar = function () {
        e(g.FIXED_CONTENT).each(function (t, n) {
          var i = e(n).data("padding-right");void 0 !== i && e(n).css("padding-right", i).removeData("padding-right");
        }), e(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (t, n) {
          var i = e(n).data("margin-right");void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
        });var t = e(document.body).data("padding-right");void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right");
      }, m._getScrollbarWidth = function () {
        var e = document.createElement("div");e.className = c, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
      }, i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var r = e(this).data("bs.modal"),
              o = s({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');r[t](n);
          } else o.show && r.show(n);
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          r = a.getSelectorFromElement(this);r && (n = e(r)[0]);var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(n).one(u.SHOW, function (t) {
        t.isDefaultPrevented() || l.one(u.HIDDEN, function () {
          e(i).is(":visible") && i.focus();
        });
      });m._jQueryInterface.call(e(n), o, this);
    }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function () {
      return e.fn.modal = i, m._jQueryInterface;
    }, m;
  }(t),
      p = function (e) {
    var t = "tooltip",
        i = ".bs.tooltip",
        o = e.fn[t],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        u = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        f = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        d = "show",
        h = "out",
        p = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        g = "fade",
        m = "show",
        v = ".tooltip-inner",
        y = ".arrow",
        b = "hover",
        _ = "focus",
        T = "click",
        w = "manual",
        E = function () {
      function o(e, t) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var E = o.prototype;return E.enable = function () {
        this._isEnabled = !0;
      }, E.disable = function () {
        this._isEnabled = !1;
      }, E.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, E.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
              i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);this._enter(null, this);
        }
      }, E.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, E.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(g);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              u = this._getAttachment(l);this.addAttachmentClass(u);var c = !1 === this.config.container ? document.body : e(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, { placement: u, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(o).addClass(m), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var f = function f() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === h && t._leave(null, t);
          };if (e(this.tip).hasClass(g)) {
            var d = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(d);
          } else f();
        }
      }, E.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
          if (e(i).removeClass(m), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[T] = !1, this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(g)) {
            var s = a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();this._hoverState = "";
        }
      }, E.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, E.isWithContent = function () {
        return Boolean(this.getTitle());
      }, E.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, E.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, E.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(v), this.getTitle()), t.removeClass(g + " " + m);
      }, E.setElementContent = function (t, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
      }, E.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, E._getAttachment = function (e) {
        return c[e.toUpperCase()];
      }, E._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (n !== w) {
            var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                r = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(r, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, E._fixTitle = function () {
        var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, E._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? _ : b] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.show();
        }, n.config.delay.show) : n.show());
      }, E._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? _ : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, E._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, E._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, E._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, E._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(l);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, E._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, E._fixTransition = function () {
        var t = this.getTipElement(),
            n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.tooltip"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return f;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return u;
        } }]), o;
    }();return e.fn[t] = E._jQueryInterface, e.fn[t].Constructor = E, e.fn[t].noConflict = function () {
      return e.fn[t] = o, E._jQueryInterface;
    }, E;
  }(t),
      g = function (e) {
    var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = s({}, p.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = s({}, p.DefaultType, { content: "(string|element|function)" }),
        u = "fade",
        c = "show",
        f = ".popover-header",
        d = ".popover-body",
        h = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
        g = function (i) {
      var s, p;function g() {
        return i.apply(this, arguments) || this;
      }p = i, (s = g).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;var m = g.prototype;return m.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, m.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, m.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(f), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(d), n), t.removeClass(u + " " + c);
      }, m._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, m._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(o);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, g._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.popover"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(g, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return h;
        } }, { key: "EVENT_KEY", get: function get() {
          return n;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), g;
    }(p);return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
      return e.fn[t] = i, g._jQueryInterface;
    }, g;
  }(t),
      m = function (e) {
    var t = "scrollspy",
        n = e.fn[t],
        i = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        u = "dropdown-item",
        c = "active",
        f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        d = "offset",
        h = "position",
        p = function () {
      function n(t, n) {
        var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
          return i._process(e);
        }), this.refresh(), this._process();
      }var p = n.prototype;return p.refresh = function () {
        var t = this,
            n = this._scrollElement === this._scrollElement.window ? d : h,
            i = "auto" === this._config.method ? n : this._config.method,
            r = i === h ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var n,
              o = a.getSelectorFromElement(t);if (o && (n = e(o)[0]), n) {
            var s = n.getBoundingClientRect();if (s.width || s.height) return [e(n)[i]().top + r, o];
          }return null;
        }).filter(function (e) {
          return e;
        }).sort(function (e, t) {
          return e[0] - t[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, p.dispose = function () {
        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, p._getConfig = function (n) {
        if ("string" != typeof (n = s({}, i, n)).target) {
          var r = e(n.target).attr("id");r || (r = a.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r;
        }return a.typeCheckConfig(t, n, o), n;
      }, p._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, p._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, p._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, p._process = function () {
        var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
          }
        }
      }, p._activate = function (t) {
        this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        });var i = e(n.join(","));i.hasClass(u) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
      }, p._clear = function () {
        e(this._selector).filter(f.ACTIVE).removeClass(c);
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.scrollspy");if (i || (i = new n(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return e(window).on(l.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
        var i = e(t[n]);p._jQueryInterface.call(i, i.data());
      }
    }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
      return e.fn[t] = n, p._jQueryInterface;
    }, p;
  }(t),
      v = function (e) {
    var t = e.fn.tab,
        n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        i = "dropdown-menu",
        o = "active",
        s = "disabled",
        l = "fade",
        u = "show",
        c = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        h = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        g = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
      function t(e) {
        this._element = e;
      }var p = t.prototype;return p.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(s))) {
          var i,
              r,
              l = e(this._element).closest(f)[0],
              u = a.getSelectorFromElement(this._element);if (l) {
            var c = "UL" === l.nodeName ? h : d;r = (r = e.makeArray(e(l).find(c)))[r.length - 1];
          }var p = e.Event(n.HIDE, { relatedTarget: this._element }),
              g = e.Event(n.SHOW, { relatedTarget: r });if (r && e(r).trigger(p), e(this._element).trigger(g), !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
            u && (i = e(u)[0]), this._activate(this._element, l);var m = function m() {
              var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                  o = e.Event(n.SHOWN, { relatedTarget: r });e(r).trigger(i), e(t._element).trigger(o);
            };i ? this._activate(i, i.parentNode, m) : m();
          }
        }
      }, p.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (t, n, i) {
        var r = this,
            o = ("UL" === n.nodeName ? e(n).find(h) : e(n).children(d))[0],
            s = i && o && e(o).hasClass(l),
            u = function u() {
          return r._transitionComplete(t, o, i);
        };if (o && s) {
          var c = a.getTransitionDurationFromElement(o);e(o).one(a.TRANSITION_END, u).emulateTransitionEnd(c);
        } else u();
      }, p._transitionComplete = function (t, n, r) {
        if (n) {
          e(n).removeClass(u + " " + o);var s = e(n.parentNode).find(m)[0];s && e(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(u), t.parentNode && e(t.parentNode).hasClass(i)) {
          var l = e(t).closest(c)[0];l && e(l).find(g).addClass(o), t.setAttribute("aria-expanded", !0);
        }r && r();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.tab");if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');r[n]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, p, function (t) {
      t.preventDefault(), v._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
      return e.fn.tab = t, v._jQueryInterface;
    }, v;
  }(t);!function (e) {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = a, e.Alert = l, e.Button = u, e.Carousel = c, e.Collapse = f, e.Dropdown = d, e.Modal = h, e.Popover = g, e.Scrollspy = m, e.Tab = v, e.Tooltip = p, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e) {
  "use strict";
  function t(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!e('[name="' + t.attr("name") + '"]:checked').length : t.is("select[multiple]") ? (t.val() || []).length : t.val();
  }var n = function n(i, r) {
    this.options = r, this.validators = e.extend({}, n.VALIDATORS, r.custom), this.$element = e(i), this.$btn = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", e.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
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
          r = e.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t),
          o = i.data("bs.validator");(o || "destroy" != t) && (o || i.data("bs.validator", o = new n(this, r)), "string" == typeof t && o[t]());
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
        r = "focusout" !== t.type;this.$inputs.is(i) && this.validateInput(i, r).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    t(n);var r = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var o = e.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(o), !o.isDefaultPrevented()) {
      var s = this;return this.runValidators(n).done(function (t) {
        n.data("bs.validator.errors", t), t.length ? i ? s.defer(n, s.showErrors) : s.showErrors(n) : s.clearErrors(n), r && t.toString() === r.toString() || (o = t.length ? e.Event("invalid.bs.validator", { relatedTarget: n[0], detail: t }) : e.Event("valid.bs.validator", { relatedTarget: n[0], detail: r }), s.$element.trigger(o)), s.toggleSubmit(), s.$element.trigger(e.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        r = e.Deferred();function o(e) {
      return function (e) {
        return n.attr("data-" + e + "-error");
      }(e) || ((t = n[0].validity).typeMismatch ? n.attr("data-type-error") : t.patternMismatch ? n.attr("data-pattern-error") : t.stepMismatch ? n.attr("data-step-error") : t.rangeOverflow ? n.attr("data-max-error") : t.rangeUnderflow ? n.attr("data-min-error") : t.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var t;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", r), e.each(this.validators, e.proxy(function (e, r) {
      var s = null;!t(n) && !n.attr("required") || void 0 === n.attr("data-" + e) && "native" != e || !(s = r.call(this, n)) || (s = o(e) || s, !~i.indexOf(s) && i.push(s));
    }, this)), !i.length && t(n) && n.attr("data-remote") ? this.defer(n, function () {
      var s = {};s[n.attr("name")] = t(n), e.get(n.attr("data-remote"), s).fail(function (e, t, n) {
        i.push(o("remote") || n);
      }).always(function () {
        r.resolve(i);
      });
    }) : r.resolve(i), r.promise();
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
        r = t.closest(".form-group"),
        o = r.find(".help-block.with-errors"),
        s = r.find(".form-control-feedback");i.length && (i = e("<ul/>").addClass("list-unstyled").append(e.map(i, function (t) {
      return e("<li/>")[n](t);
    })), void 0 === o.data("bs.validator.originalContent") && o.data("bs.validator.originalContent", o.html()), o.empty().append(i), r.addClass("has-error has-danger"), r.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && r.removeClass("has-success"));
  }, n.prototype.clearErrors = function (e) {
    var n = e.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        r = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && r.removeClass(this.options.feedback.error) && r.removeClass(this.options.feedback.success) && t(e) && r.addClass(this.options.feedback.success) && n.addClass("has-success");
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
  };var r = e.fn.validator;e.fn.validator = i, e.fn.validator.Constructor = n, e.fn.validator.noConflict = function () {
    return e.fn.validator = r, this;
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
          r,
          o = t || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(o[n]) || (r = o[n]) && "undefined" != typeof window && (r === window || r.nodeType) ? o[n] = o[n] || s[n] : o[n] = e(o[n], s[n]);
        }
      }return o;
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
          r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;r = e.extend(!0, {}, Headroom.options, r), i || ((i = new Headroom(this, r)).init(), n.data("headroom", i)), "string" == typeof t && (i[t](), "destroy" === t && n.removeData("headroom"));
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
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (r, o, s) {
    "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (s = o, o = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = e.extend({}, t.defaults, s), o = o || s.duration;var a = s.queue && s.axis.length > 1;return a && (o /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== r) {
        var l,
            u = n(this),
            c = u ? this.contentWindow || window : this,
            f = e(c),
            d = r,
            h = {};switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
              d = i(d);break;
            }d = u ? e(d) : e(d, c);case "object":
            if (0 === d.length) return;(d.is || d.style) && (l = (d = e(d)).offset());}var p = e.isFunction(s.offset) && s.offset(c, d) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              r = i.toLowerCase(),
              o = "scroll" + i,
              m = f[o](),
              v = t.max(c, n);if (l) h[o] = l[r] + (u ? 0 : m - f.offset()[r]), s.margin && (h[o] -= parseInt(d.css("margin" + i), 10) || 0, h[o] -= parseInt(d.css("border" + i + "Width"), 10) || 0), h[o] += p[r] || 0, s.over[r] && (h[o] += d["x" === n ? "width" : "height"]() * s.over[r]);else {
            var y = d[r];h[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(h[o]) && (h[o] = h[o] <= 0 ? 0 : Math.min(h[o], v)), !e && s.axis.length > 1 && (m === h[o] ? h = {} : a && (g(s.onAfterFirst), h = {}));
        }), g(s.onAfter);
      }function g(t) {
        var n = e.extend({}, s, { queue: !0, duration: o, complete: t && function () {
            t.call(c, d, s);
          } });f.animate(h, n);
      }
    });
  }, t.max = function (t, i) {
    var r = "x" === i ? "Width" : "Height",
        o = "scroll" + r;if (!n(t)) return t[o] - e(t)[r.toLowerCase()]();var s = "client" + r,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        u = a.body;return Math.max(l[o], u[o]) - Math.min(l[s], u[s]);
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
        r = e(window).width(),
        o = e(window).height();r < t.sm && (i = "xs"), r >= t.sm && r < t.md && (i = "sm"), r >= t.md && r < t.lg && (i = "md"), r >= t.lg && r < t.xl && (i = "lg"), r >= t.xl && r < t.xxl && (i = "xl"), r >= t.xxl && (i = "xxl"), e(".lv-screen-data").html(r + " x " + o + "<br>" + i).css({ position: "fixed", top: 0, padding: "10px 20px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, r = "", o = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < o.length; s++) {
      t[n[s]] = Number(o[s].replace("px", "")), r += "<tr><td>" + n[s] + "</td><td>" + o[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + r + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery), function (e) {
  "use strict";
  var t = e("[data-match-height]"),
      n = function n(_n3) {
    if (e(window).width() >= 768) {
      var i,
          r = 0,
          o = 0,
          s = [],
          a = 0;e(_n3).each(function () {
        if (i = e(this), e(i).height("auto"), a = i.position().top, o != a) {
          for (var t = 0; t < s.length; t++) {
            s[t].height(r);
          }s.length = 0, o = a, r = i.height(), s.push(i);
        } else s.push(i), r = r < i.height() ? i.height() : r;for (t = 0; t < s.length; t++) {
          s[t].height(r);
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
      r = e(".lv-off-canvas"),
      o = e('a[href*="#"]:not([href="#"])', r),
      s = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (n) {
    e(".has-open-menu").length || (t.removeClass("has-closed-menu").addClass("has-open-menu"), setTimeout(function () {
      i.click(function (n) {
        n.stopPropagation(), e(".has-open-menu").length && (t.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), o.click(function (e) {
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
