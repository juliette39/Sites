/*!For license information please see jquery.rgpd-cookies.js.LICENSE.txt*/ 
! function(e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(o, r, function(t) {
        return e[t]
      }.bind(null, r));
    return o
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 13)
}([function(e, t, n) {
  (function(t) {
    var o;
    o = function() {
      return function(e) {
        var t = {};

        function n(o) {
          if (t[o]) return t[o].exports;
          var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
          n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
          })
        }, n.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.t = function(e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {
              enumerable: !0,
              value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
              return e[t]
            }.bind(null, r));
          return o
        }, n.n = function(e) {
          var t = e && e.__esModule ? function() {
            return e.default
          } : function() {
            return e
          };
          return n.d(t, "a", t), t
        }, n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 7)
      }([function(e, t) {
        e.exports = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
      }, function(e, t) {
        function n(t) {
          return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
          } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, n(t)
        }
        e.exports = n
      }, function(e, t) {
        e.exports = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
      }, function(e, t) {
        e.exports = function(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
          return o
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function() {
          var e = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g,
            t = arguments,
            n = 0,
            o = t[n++],
            r = function(e, t, n, o) {
              n || (n = " ");
              var r = e.length >= t ? "" : new Array(1 + t - e.length >>> 0).join(n);
              return o ? e + r : r + e
            },
            i = function(e, t, n, o, i) {
              var s = o - e.length;
              return s > 0 && (e = n || "0" !== i ? r(e, o, i, n) : [e.slice(0, t.length), r("", s, "0", !0), e.slice(t.length)].join("")), e
            },
            s = function(e, t, n, o, s, a) {
              return e = r((e >>> 0).toString(t), s || 0, "0", !1), i(e, "", n, o, a)
            },
            a = function(e, t, n, o, r) {
              return null != o && (e = e.slice(0, o)), i(e, "", t, n, r)
            },
            c = function(e, o, c, p, l, u) {
              var d, f, h, g, m;
              if ("%%" === e) return "%";
              var y, b, k = " ",
                x = !1,
                v = "";
              for (y = 0, b = c.length; y < b; y++) switch (c.charAt(y)) {
                case " ":
                case "0":
                  k = c.charAt(y);
                  break;
                case "+":
                  v = "+";
                  break;
                case "-":
                  x = !0;
                  break;
                case "'":
                  y + 1 < b && (k = c.charAt(y + 1), y++)
              }
              if (p = p ? +p : 0, !isFinite(p)) throw new Error("Width must be finite");
              if (l = l ? +l : "d" === u ? 0 : "fFeE".indexOf(u) > -1 ? 6 : void 0, o && 0 == +o) throw new Error("Argument number must be greater than zero");
              if (o && +o >= t.length) throw new Error("Too few arguments");
              switch (m = o ? t[+o] : t[n++], u) {
                case "%":
                  return "%";
                case "s":
                  return a(m + "", x, p, l, k);
                case "c":
                  return a(String.fromCharCode(+m), x, p, l, k);
                case "b":
                  return s(m, 2, x, p, l, k);
                case "o":
                  return s(m, 8, x, p, l, k);
                case "x":
                  return s(m, 16, x, p, l, k);
                case "X":
                  return s(m, 16, x, p, l, k).toUpperCase();
                case "u":
                  return s(m, 10, x, p, l, k);
                case "i":
                case "d":
                  return d = +m || 0, m = (f = (d = Math.round(d - d % 1)) < 0 ? "-" : v) + r(String(Math.abs(d)), l, "0", !1), x && "0" === k && (k = " "), i(m, f, x, p, k);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                  return f = (d = +m) < 0 ? "-" : v, h = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(u.toLowerCase())], g = ["toString", "toUpperCase"]["eEfFgG".indexOf(u) % 2], m = f + Math.abs(d)[h](l), i(m, f, x, p, k)[g]();
                default:
                  return ""
              }
            };
          try {
            return o.replace(e, c)
          } catch (e) {
            return !1
          }
        }
      }, function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = function(e) {
          switch (void 0 === e ? "undefined" : o(e)) {
            case "number":
              return isNaN(e) || !isFinite(e) ? 0 : e < 0 ? Math.ceil(e) : Math.floor(e);
            case "string":
              return parseInt(e, 10) || 0;
            case "boolean":
            default:
              return +!!e
          }
        }
      }, function(e, t) {
        e.exports = n(5)
      }, function(e, t, n) {
        "use strict";
        e.exports = n(8)()
      }, function(e, t, n) {
        "use strict";
        e.exports = function e() {
          var t = {
            VERSION: "1.14.0"
          };
          return n(9)(t), n(10)(t), n(11)(t), n(18)(t), n(19)(t), n(20)(t), n(31)(t), n(32)(t), n(34)(t), n(35)(t), n(36)(t), n(37)(t), n(38)(t), n(39)(t), n(40)(t), t.exports.factory = e, t.exports
        }
      }, function(e, t, n) {
        "use strict";
        var o = n(0)(n(2));

        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function(t) {
              (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        e.exports = function(e) {
          function t(t, n) {
            if (t.template.options.rethrow) throw "string" == typeof n && (n = new e.Error(n)), "TwigException" !== n.type || n.file || (n.file = t.template.id), n;
            if (e.log.error("Error parsing twig template " + t.template.id + ": "), n.stack ? e.log.error(n.stack) : e.log.error(n.toString()), e.debug) return n.toString()
          }
          return e.trace = !1, e.debug = !1, e.cache = !0, e.noop = function() {}, e.merge = function(e, t, n) {
            return Object.keys(t).forEach((function(o) {
              n && !(o in e) || (e[o] = t[o])
            })), e
          }, e.Error = function(e, t) {
            this.message = e, this.name = "TwigException", this.type = "TwigException", this.file = t
          }, e.Error.prototype.toString = function() {
            return this.name + ": " + this.message
          }, e.log = {
            trace: function() {
              if (e.trace && console) {
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                console.log(Array.prototype.slice.call(n))
              }
            },
            debug: function() {
              if (e.debug && console) {
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                console.log(Array.prototype.slice.call(n))
              }
            }
          }, "undefined" == typeof console ? e.log.error = function() {} : void 0 !== console.error ? e.log.error = function() {
            var e;
            (e = console).error.apply(e, arguments)
          } : void 0 !== console.log && (e.log.error = function() {
            var e;
            (e = console).log.apply(e, arguments)
          }), e.token = {}, e.token.type = {
            output: "output",
            logic: "logic",
            comment: "comment",
            raw: "raw",
            outputWhitespacePre: "output_whitespace_pre",
            outputWhitespacePost: "output_whitespace_post",
            outputWhitespaceBoth: "output_whitespace_both",
            logicWhitespacePre: "logic_whitespace_pre",
            logicWhitespacePost: "logic_whitespace_post",
            logicWhitespaceBoth: "logic_whitespace_both"
          }, e.token.definitions = [{
            type: e.token.type.raw,
            open: "{% raw %}",
            close: "{% endraw %}"
          }, {
            type: e.token.type.raw,
            open: "{% verbatim %}",
            close: "{% endverbatim %}"
          }, {
            type: e.token.type.outputWhitespacePre,
            open: "{{-",
            close: "}}"
          }, {
            type: e.token.type.outputWhitespacePost,
            open: "{{",
            close: "-}}"
          }, {
            type: e.token.type.outputWhitespaceBoth,
            open: "{{-",
            close: "-}}"
          }, {
            type: e.token.type.logicWhitespacePre,
            open: "{%-",
            close: "%}"
          }, {
            type: e.token.type.logicWhitespacePost,
            open: "{%",
            close: "-%}"
          }, {
            type: e.token.type.logicWhitespaceBoth,
            open: "{%-",
            close: "-%}"
          }, {
            type: e.token.type.output,
            open: "{{",
            close: "}}"
          }, {
            type: e.token.type.logic,
            open: "{%",
            close: "%}"
          }, {
            type: e.token.type.comment,
            open: "{#",
            close: "#}"
          }], e.token.strings = ['"', "'"], e.token.findStart = function(t) {
            var n, o, r, i, s = {
                position: null,
                def: null
              },
              a = null,
              c = e.token.definitions.length;
            for (n = 0; n < c; n++) o = e.token.definitions[n], r = t.indexOf(o.open), i = t.indexOf(o.close), e.log.trace("Twig.token.findStart: ", "Searching for ", o.open, " found at ", r), r >= 0 && o.open.length !== o.close.length && i < 0 || (r >= 0 && (null === s.position || r < s.position) ? (s.position = r, s.def = o, a = i) : r >= 0 && null !== s.position && r === s.position && (o.open.length > s.def.open.length ? (s.position = r, s.def = o, a = i) : o.open.length === s.def.open.length && (o.close.length, s.def.close.length, i >= 0 && i < a && (s.position = r, s.def = o, a = i))));
            return s
          }, e.token.findEnd = function(t, n, o) {
            for (var r, i, s = null, a = !1, c = 0, p = null, l = null, u = null, d = null, f = null, h = null; !a;) {
              if (p = null, l = null, !((u = t.indexOf(n.close, c)) >= 0)) throw new e.Error("Unable to find closing bracket '" + n.close + "' opened near template position " + o);
              if (s = u, a = !0, n.type === e.token.type.comment) break;
              if (n.type === e.token.type.raw) break;
              for (i = e.token.strings.length, r = 0; r < i; r += 1)(f = t.indexOf(e.token.strings[r], c)) > 0 && f < u && (null === p || f < p) && (p = f, l = e.token.strings[r]);
              if (null !== p)
                for (d = p + 1, s = null, a = !1;;) {
                  if ((h = t.indexOf(l, d)) < 0) throw e.Error("Unclosed string in template");
                  if ("\\" !== t.slice(h - 1, h)) {
                    c = h + 1;
                    break
                  }
                  d = h + 1
                }
            }
            return s
          }, e.tokenize = function(t) {
            for (var n = [], o = 0, r = null, i = null; t.length > 0;)
              if (r = e.token.findStart(t), e.log.trace("Twig.tokenize: ", "Found token: ", r), null === r.position) n.push({
                type: e.token.type.raw,
                value: t
              }), t = "";
              else {
                if (r.position > 0 && n.push({
                    type: e.token.type.raw,
                    value: t.slice(0, Math.max(0, r.position))
                  }), t = t.slice(r.position + r.def.open.length), o += r.position + r.def.open.length, i = e.token.findEnd(t, r.def, o), e.log.trace("Twig.tokenize: ", "Token ends at ", i), n.push({
                    type: r.def.type,
                    value: t.slice(0, Math.max(0, i)).trim()
                  }), "\n" === t.slice(i + r.def.close.length, i + r.def.close.length + 1)) switch (r.def.type) {
                  case "logic_whitespace_pre":
                  case "logic_whitespace_post":
                  case "logic_whitespace_both":
                  case "logic":
                    i += 1
                }
                t = t.slice(i + r.def.close.length), o += i + r.def.close.length
              } return n
          }, e.compile = function(t) {
            var n = this;
            try {
              for (var o = [], r = [], i = [], s = null, a = null, c = null, p = null, l = null, u = null, d = null, f = null, h = null, g = null, m = null, y = function(t) {
                  e.expression.compile.call(n, t), r.length > 0 ? i.push(t) : o.push(t)
                }, b = function(t) {
                  if (a = e.logic.compile.call(n, t), h = a.type, g = e.logic.handler[h].open, m = e.logic.handler[h].next, e.log.trace("Twig.compile: ", "Compiled logic token to ", a, " next is: ", m, " open is : ", g), void 0 !== g && !g) {
                    if (p = r.pop(), !e.logic.handler[p.type].next.includes(h)) throw new Error(h + " not expected after a " + p.type);
                    p.output = p.output || [], p.output = p.output.concat(i), i = [], f = {
                      type: e.token.type.logic,
                      token: p
                    }, r.length > 0 ? i.push(f) : o.push(f)
                  }
                  void 0 !== m && m.length > 0 ? (e.log.trace("Twig.compile: ", "Pushing ", a, " to logic stack."), r.length > 0 && ((p = r.pop()).output = p.output || [], p.output = p.output.concat(i), r.push(p), i = []), r.push(a)) : void 0 !== g && g && (f = {
                    type: e.token.type.logic,
                    token: a
                  }, r.length > 0 ? i.push(f) : o.push(f))
                }; t.length > 0;) {
                switch (s = t.shift(), l = o[o.length - 1], u = i[i.length - 1], d = t[0], e.log.trace("Compiling token ", s), s.type) {
                  case e.token.type.raw:
                    r.length > 0 ? i.push(s) : o.push(s);
                    break;
                  case e.token.type.logic:
                    b.call(n, s);
                    break;
                  case e.token.type.comment:
                    break;
                  case e.token.type.output:
                    y.call(n, s);
                    break;
                  case e.token.type.logicWhitespacePre:
                  case e.token.type.logicWhitespacePost:
                  case e.token.type.logicWhitespaceBoth:
                  case e.token.type.outputWhitespacePre:
                  case e.token.type.outputWhitespacePost:
                  case e.token.type.outputWhitespaceBoth:
                    switch (s.type !== e.token.type.outputWhitespacePost && s.type !== e.token.type.logicWhitespacePost && (l && l.type === e.token.type.raw && (o.pop(), l.value = l.value.trimEnd(), o.push(l)), u && u.type === e.token.type.raw && (i.pop(), u.value = u.value.trimEnd(), i.push(u))), s.type) {
                      case e.token.type.outputWhitespacePre:
                      case e.token.type.outputWhitespacePost:
                      case e.token.type.outputWhitespaceBoth:
                        y.call(n, s);
                        break;
                      case e.token.type.logicWhitespacePre:
                      case e.token.type.logicWhitespacePost:
                      case e.token.type.logicWhitespaceBoth:
                        b.call(n, s)
                    }
                    s.type !== e.token.type.outputWhitespacePre && s.type !== e.token.type.logicWhitespacePre && d && d.type === e.token.type.raw && (t.shift(), d.value = d.value.trimStart(), t.unshift(d))
                }
                e.log.trace("Twig.compile: ", " Output: ", o, " Logic Stack: ", r, " Pending Output: ", i)
              }
              if (r.length > 0) throw c = r.pop(), new Error("Unable to find an end tag for " + c.type + ", expecting one of " + c.next);
              return o
            } catch (t) {
              if (n.options.rethrow) throw "TwigException" !== t.type || t.file || (t.file = n.id), t;
              e.log.error("Error compiling twig template " + n.id + ": "), t.stack ? e.log.error(t.stack) : e.log.error(t.toString())
            }
          }, e.prepare = function(t) {
            e.log.debug("Twig.prepare: ", "Tokenizing ", t);
            var n = e.tokenize.call(this, t);
            e.log.debug("Twig.prepare: ", "Compiling ", n);
            var o = e.compile.call(this, n);
            return e.log.debug("Twig.prepare: ", "Compiled ", o), o
          }, e.output = function(t) {
            var n = this.options.autoescape;
            if (!n) return t.join("");
            var o = "string" == typeof n ? n : "html",
              r = t.map((function(t) {
                return !t || !0 === t.twigMarkup || t.twigMarkup === o || "html" === o && "html_attr" === t.twigMarkup || (t = e.filters.escape(t, [o])), t
              }));
            if (0 === r.length) return "";
            var i = r.join("");
            return 0 === i.length ? "" : new e.Markup(i, !0)
          }, e.Templates = {
            loaders: {},
            parsers: {},
            registry: {}
          }, e.validateId = function(t) {
            if ("prototype" === t) throw new e.Error(t + " is not a valid twig identifier");
            if (e.cache && Object.hasOwnProperty.call(e.Templates.registry, t)) throw new e.Error("There is already a template with the ID " + t);
            return !0
          }, e.Templates.registerLoader = function(t, n, o) {
            if ("function" != typeof n) throw new e.Error("Unable to add loader for " + t + ": Invalid function reference given.");
            o && (n = n.bind(o)), this.loaders[t] = n
          }, e.Templates.unRegisterLoader = function(e) {
            this.isRegisteredLoader(e) && delete this.loaders[e]
          }, e.Templates.isRegisteredLoader = function(e) {
            return Object.hasOwnProperty.call(this.loaders, e)
          }, e.Templates.registerParser = function(t, n, o) {
            if ("function" != typeof n) throw new e.Error("Unable to add parser for " + t + ": Invalid function regerence given.");
            o && (n = n.bind(o)), this.parsers[t] = n
          }, e.Templates.unRegisterParser = function(e) {
            this.isRegisteredParser(e) && delete this.parsers[e]
          }, e.Templates.isRegisteredParser = function(e) {
            return Object.hasOwnProperty.call(this.parsers, e)
          }, e.Templates.save = function(t) {
            if (void 0 === t.id) throw new e.Error("Unable to save template with no id");
            e.Templates.registry[t.id] = t
          }, e.Templates.load = function(t) {
            return Object.hasOwnProperty.call(e.Templates.registry, t) ? e.Templates.registry[t] : null
          }, e.Templates.loadRemote = function(t, n, o, r) {
            var i = void 0 === n.id ? t : n.id,
              s = e.Templates.registry[i];
            return e.cache && void 0 !== s ? ("function" == typeof o && o(s), s) : (n.parser = n.parser || "twig", n.id = i, void 0 === n.async && (n.async = !0), (this.loaders[n.method] || this.loaders.fs).call(this, t, n, o, r))
          }, e.Block = function(e, t) {
            this.template = e, this.token = t
          }, e.Block.prototype.render = function(t, n) {
            var o = t.template;
            return t.template = this.template, (this.token.expression ? e.expression.parseAsync.call(t, this.token.output, n) : t.parseAsync(this.token.output, n)).then((function(o) {
              return e.expression.parseAsync.call(t, {
                type: e.expression.type.string,
                value: o
              }, n)
            })).then((function(e) {
              return t.template = o, e
            }))
          }, e.ParseState = function(e, t) {
            this.renderedBlocks = {}, this.overrideBlocks = void 0 === t ? {} : t, this.context = {}, this.macros = {}, this.nestingStack = [], this.template = e
          }, e.ParseState.prototype.getBlock = function(e, t) {
            var n;
            return !0 !== t && (n = this.overrideBlocks[e]), void 0 === n && (n = this.template.getBlock(e, t)), void 0 === n && null !== this.template.parentTemplate && (n = this.template.parentTemplate.getBlock(e)), n
          }, e.ParseState.prototype.getBlocks = function(e) {
            var t = {};
            return !1 !== e && null !== this.template.parentTemplate && this.template.parentTemplate !== this.template && (t = this.template.parentTemplate.getBlocks()), t = i(i(i({}, t), this.template.getBlocks()), this.overrideBlocks)
          }, e.ParseState.prototype.getNestingStackToken = function(e) {
            var t;
            return this.nestingStack.forEach((function(n) {
              void 0 === t && n.type === e && (t = n)
            })), t
          }, e.ParseState.prototype.parse = function(n, o, r) {
            var i, s = this,
              a = [],
              c = null,
              p = !0,
              l = !0;

            function u(e) {
              a.push(e)
            }

            function d(e) {
              void 0 !== e.chain && (l = e.chain), void 0 !== e.context && (s.context = e.context), void 0 !== e.output && a.push(e.output)
            }
            if (o && (s.context = o), i = e.async.forEach(n, (function(t) {
                switch (e.log.debug("Twig.ParseState.parse: ", "Parsing token: ", t), t.type) {
                  case e.token.type.raw:
                    a.push(e.filters.raw(t.value));
                    break;
                  case e.token.type.logic:
                    return e.logic.parseAsync.call(s, t.token, s.context, l).then(d);
                  case e.token.type.comment:
                    break;
                  case e.token.type.outputWhitespacePre:
                  case e.token.type.outputWhitespacePost:
                  case e.token.type.outputWhitespaceBoth:
                  case e.token.type.output:
                    return e.log.debug("Twig.ParseState.parse: ", "Output token: ", t.stack), e.expression.parseAsync.call(s, t.stack, s.context).then(u)
                }
              })).then((function() {
                return a = e.output.call(s.template, a), p = !1, a
              })).catch((function(e) {
                r && t(s, e), c = e
              })), r) return i;
            if (null !== c) return t(s, c);
            if (p) throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");
            return a
          }, e.Template = function(t) {
            var n, o, r, i = t.data,
              s = t.id,
              a = t.base,
              c = t.path,
              p = t.url,
              l = t.name,
              u = t.method,
              d = t.options;
            this.base = a, this.blocks = {
              defined: {},
              imported: {}
            }, this.id = s, this.method = u, this.name = l, this.options = d, this.parentTemplate = null, this.path = c, this.url = p, n = "String", o = i, r = Object.prototype.toString.call(o).slice(8, -1), this.tokens = null != o && r === n ? e.prepare.call(this, i) : i, void 0 !== s && e.Templates.save(this)
          }, e.Template.prototype.getBlock = function(e, t) {
            var n, o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return !0 !== t && (n = this.blocks.defined[e]), o && void 0 === n && (n = this.blocks.imported[e]), void 0 === n && null !== this.parentTemplate && (n = this.parentTemplate.getBlock(e, t, o = !1)), n
          }, e.Template.prototype.getBlocks = function() {
            var e = {};
            return e = i(i(i({}, e), this.blocks.imported), this.blocks.defined)
          }, e.Template.prototype.render = function(t, n, o) {
            var r = this;
            return n = n || {}, e.async.potentiallyAsync(r, o, (function() {
              var o = new e.ParseState(r, n.blocks);
              return o.parseAsync(r.tokens, t).then((function(t) {
                var i, s;
                return null !== r.parentTemplate ? (r.options.allowInlineIncludes && (i = e.Templates.load(r.parentTemplate)) && (i.options = r.options), i || (s = e.path.parsePath(r, r.parentTemplate), i = e.Templates.loadRemote(s, {
                  method: r.getLoaderMethod(),
                  base: r.base,
                  async: !1,
                  id: s,
                  options: r.options
                })), r.parentTemplate = i, r.parentTemplate.renderAsync(o.context, {
                  blocks: o.getBlocks(!1),
                  isInclude: !0
                })) : !0 === n.isInclude ? t : t.valueOf()
              }))
            }))
          }, e.Template.prototype.importFile = function(t) {
            var n, o = null;
            if (!this.url && this.options.allowInlineIncludes) {
              if (t = this.path ? e.path.parsePath(this, t) : t, !(n = e.Templates.load(t)) && !(n = e.Templates.loadRemote(o, {
                  id: t,
                  method: this.getLoaderMethod(),
                  async: !1,
                  path: t,
                  options: this.options
                }))) throw new e.Error("Unable to find the template " + t);
              return n.options = this.options, n
            }
            return o = e.path.parsePath(this, t), n = e.Templates.loadRemote(o, {
              method: this.getLoaderMethod(),
              base: this.base,
              async: !1,
              options: this.options,
              id: o
            })
          }, e.Template.prototype.getLoaderMethod = function() {
            return this.path ? "fs" : this.url ? "ajax" : this.method || "fs"
          }, e.Template.prototype.compile = function(t) {
            return e.compiler.compile(this, t)
          }, e.Markup = function(e, t) {
            if ("string" != typeof e) return e;
            var n = new String(e);
            return n.twigMarkup = void 0 === t || t, n
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return e.compiler = {
            module: {}
          }, e.compiler.compile = function(t, n) {
            var o = JSON.stringify(t.tokens),
              r = t.id,
              i = null;
            if (n.module) {
              if (void 0 === e.compiler.module[n.module]) throw new e.Error("Unable to find module type " + n.module);
              i = e.compiler.module[n.module](r, o, n.twig)
            } else i = e.compiler.wrap(r, o);
            return i
          }, e.compiler.module = {
            amd: function(t, n, o) {
              return 'define(["' + o + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + e.compiler.wrap(t, n) + "\n\treturn templates;\n});"
            },
            node: function(t, n) {
              return 'var twig = require("twig").twig;\nexports.template = ' + e.compiler.wrap(t, n)
            },
            cjs2: function(t, n, o) {
              return 'module.declare([{ twig: "' + o + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + e.compiler.wrap(t, n) + "\n});"
            }
          }, e.compiler.wrap = function(e, t) {
            return 'twig({id:"' + e.replace('"', '\\"') + '", data:' + t + ", precompiled: true});\n"
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        var o = n(0),
          r = o(n(1)),
          i = o(n(12));
        e.exports = function(e) {
          function t(t, n, o) {
            return n ? e.expression.parseAsync.call(t, n, o) : e.Promise.resolve(!1)
          }
          for (e.expression = {}, n(17)(e), e.expression.reservedWords = ["true", "false", "null", "TRUE", "FALSE", "NULL", "_context", "and", "b-and", "or", "b-or", "b-xor", "in", "not in", "if", "matches", "starts", "ends", "with"], e.expression.type = {
              comma: "Twig.expression.type.comma",
              operator: {
                unary: "Twig.expression.type.operator.unary",
                binary: "Twig.expression.type.operator.binary"
              },
              string: "Twig.expression.type.string",
              bool: "Twig.expression.type.bool",
              slice: "Twig.expression.type.slice",
              array: {
                start: "Twig.expression.type.array.start",
                end: "Twig.expression.type.array.end"
              },
              object: {
                start: "Twig.expression.type.object.start",
                end: "Twig.expression.type.object.end"
              },
              parameter: {
                start: "Twig.expression.type.parameter.start",
                end: "Twig.expression.type.parameter.end"
              },
              subexpression: {
                start: "Twig.expression.type.subexpression.start",
                end: "Twig.expression.type.subexpression.end"
              },
              key: {
                period: "Twig.expression.type.key.period",
                brackets: "Twig.expression.type.key.brackets"
              },
              filter: "Twig.expression.type.filter",
              _function: "Twig.expression.type._function",
              variable: "Twig.expression.type.variable",
              number: "Twig.expression.type.number",
              _null: "Twig.expression.type.null",
              context: "Twig.expression.type.context",
              test: "Twig.expression.type.test"
            }, e.expression.set = {
              operations: [e.expression.type.filter, e.expression.type.operator.unary, e.expression.type.operator.binary, e.expression.type.array.end, e.expression.type.object.end, e.expression.type.parameter.end, e.expression.type.subexpression.end, e.expression.type.comma, e.expression.type.test],
              expressions: [e.expression.type._function, e.expression.type.bool, e.expression.type.string, e.expression.type.variable, e.expression.type.number, e.expression.type._null, e.expression.type.context, e.expression.type.parameter.start, e.expression.type.array.start, e.expression.type.object.start, e.expression.type.subexpression.start, e.expression.type.operator.unary]
            }, e.expression.set.operationsExtended = e.expression.set.operations.concat([e.expression.type.key.period, e.expression.type.key.brackets, e.expression.type.slice]), e.expression.fn = {
              compile: {
                push: function(e, t, n) {
                  n.push(e)
                },
                pushBoth: function(e, t, n) {
                  n.push(e), t.push(e)
                }
              },
              parse: {
                push: function(e, t) {
                  t.push(e)
                },
                pushValue: function(e, t) {
                  t.push(e.value)
                }
              }
            }, e.expression.definitions = [{
              type: e.expression.type.test,
              regex: /^is\s+(not)?\s*([a-zA-Z_]\w*(\s?as)?)/,
              next: e.expression.set.operations.concat([e.expression.type.parameter.start]),
              compile: function(e, t, n) {
                e.filter = e.match[2], e.modifier = e.match[1], delete e.match, delete e.value, n.push(e)
              },
              parse: function(n, o, r) {
                var i = o.pop();
                return t(this, n.params, r).then((function(t) {
                  var r = e.test(n.filter, i, t);
                  "not" === n.modifier ? o.push(!r) : o.push(r)
                }))
              }
            }, {
              type: e.expression.type.comma,
              regex: /^,/,
              next: e.expression.set.expressions.concat([e.expression.type.array.end, e.expression.type.object.end]),
              compile: function(t, n, o) {
                var r, i = n.length - 1;
                for (delete t.match, delete t.value; i >= 0; i--) {
                  if ((r = n.pop()).type === e.expression.type.object.start || r.type === e.expression.type.parameter.start || r.type === e.expression.type.array.start) {
                    n.push(r);
                    break
                  }
                  o.push(r)
                }
                o.push(t)
              }
            }, {
              type: e.expression.type.number,
              regex: /^-?\d+(\.\d+)?/,
              next: e.expression.set.operations,
              compile: function(e, t, n) {
                e.value = Number(e.value), n.push(e)
              },
              parse: e.expression.fn.parse.pushValue
            }, {
              type: e.expression.type.operator.binary,
              regex: /(^\?\?|^\?:|^(b-and)|^(b-or)|^(b-xor)|^[+\-~%?]|^[:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[(|\s+]|^(or)[(|\s+]|^(in)[(|\s+]|^(not in)[(|\s+]|^(matches)|^(starts with)|^(ends with)|^\.\.)/,
              next: e.expression.set.expressions,
              transform: function(e, t) {
                switch (e[0]) {
                  case "and(":
                  case "or(":
                  case "in(":
                  case "not in(":
                    return t[t.length - 1].value = e[2], e[0];
                  default:
                    return ""
                }
              },
              compile: function(t, n, o) {
                delete t.match, t.value = t.value.trim();
                var r = t.value,
                  i = e.expression.operator.lookup(r, t);
                for (e.log.trace("Twig.expression.compile: ", "Operator: ", i, " from ", r); n.length > 0 && (n[n.length - 1].type === e.expression.type.operator.unary || n[n.length - 1].type === e.expression.type.operator.binary) && (i.associativity === e.expression.operator.leftToRight && i.precidence >= n[n.length - 1].precidence || i.associativity === e.expression.operator.rightToLeft && i.precidence > n[n.length - 1].precidence);) {
                  var s = n.pop();
                  o.push(s)
                }
                if (":" === r)
                  if (n[n.length - 1] && "?" === n[n.length - 1].value);
                  else {
                    var a = o.pop();
                    if (a.type === e.expression.type.string || a.type === e.expression.type.variable) t.key = a.value;
                    else if (a.type === e.expression.type.number) t.key = a.value.toString();
                    else {
                      if (!a.expression || a.type !== e.expression.type.parameter.end && a.type !== e.expression.type.subexpression.end) throw new e.Error("Unexpected value before ':' of " + a.type + " = " + a.value);
                      t.params = a.params
                    }
                    o.push(t)
                  }
                else n.push(i)
              },
              parse: function(t, n, o) {
                if (t.key) n.push(t);
                else {
                  if (t.params) return e.expression.parseAsync.call(this, t.params, o).then((function(e) {
                    t.key = e, n.push(t), o.loop || delete t.params
                  }));
                  e.expression.operator.parse(t.value, n)
                }
              }
            }, {
              type: e.expression.type.operator.unary,
              regex: /(^not\s+)/,
              next: e.expression.set.expressions,
              compile: function(t, n, o) {
                delete t.match, t.value = t.value.trim();
                var r = t.value,
                  i = e.expression.operator.lookup(r, t);
                for (e.log.trace("Twig.expression.compile: ", "Operator: ", i, " from ", r); n.length > 0 && (n[n.length - 1].type === e.expression.type.operator.unary || n[n.length - 1].type === e.expression.type.operator.binary) && (i.associativity === e.expression.operator.leftToRight && i.precidence >= n[n.length - 1].precidence || i.associativity === e.expression.operator.rightToLeft && i.precidence > n[n.length - 1].precidence);) {
                  var s = n.pop();
                  o.push(s)
                }
                n.push(i)
              },
              parse: function(t, n) {
                e.expression.operator.parse(t.value, n)
              }
            }, {
              type: e.expression.type.string,
              regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
              next: e.expression.set.operationsExtended,
              compile: function(t, n, o) {
                var r = t.value;
                delete t.match, r = '"' === r.slice(0, 1) ? r.replace('\\"', '"') : r.replace("\\'", "'"), t.value = r.slice(1, -1).replace(/\\n/g, "\n").replace(/\\r/g, "\r"), e.log.trace("Twig.expression.compile: ", "String value: ", t.value), o.push(t)
              },
              parse: e.expression.fn.parse.pushValue
            }, {
              type: e.expression.type.subexpression.start,
              regex: /^\(/,
              next: e.expression.set.expressions.concat([e.expression.type.subexpression.end]),
              compile: function(e, t, n) {
                e.value = "(", n.push(e), t.push(e)
              },
              parse: e.expression.fn.parse.push
            }, {
              type: e.expression.type.subexpression.end,
              regex: /^\)/,
              next: e.expression.set.operationsExtended,
              validate: function(t, n) {
                for (var o = n.length - 1, r = !1, i = !1, s = 0; !r && o >= 0;) {
                  var a = n[o];
                  (r = a.type === e.expression.type.subexpression.start) && i && (i = !1, r = !1), a.type === e.expression.type.parameter.start ? s++ : a.type === e.expression.type.parameter.end ? s-- : a.type === e.expression.type.subexpression.end && (i = !0), o--
                }
                return r && 0 === s
              },
              compile: function(t, n, o) {
                var r, i = t;
                for (r = n.pop(); n.length > 0 && r.type !== e.expression.type.subexpression.start;) o.push(r), r = n.pop();
                for (var s = []; t.type !== e.expression.type.subexpression.start;) s.unshift(t), t = o.pop();
                s.unshift(t), void 0 === (r = n[n.length - 1]) || r.type !== e.expression.type._function && r.type !== e.expression.type.filter && r.type !== e.expression.type.test && r.type !== e.expression.type.key.brackets ? (i.expression = !0, s.pop(), s.shift(), i.params = s, o.push(i)) : (i.expression = !1, r.params = s)
              },
              parse: function(t, n, o) {
                if (t.expression) return e.expression.parseAsync.call(this, t.params, o).then((function(e) {
                  n.push(e)
                }));
                throw new e.Error("Unexpected subexpression end when token is not marked as an expression")
              }
            }, {
              type: e.expression.type.parameter.start,
              regex: /^\(/,
              next: e.expression.set.expressions.concat([e.expression.type.parameter.end]),
              validate: function(t, n) {
                var o = n[n.length - 1];
                return o && !e.expression.reservedWords.includes(o.value.trim())
              },
              compile: e.expression.fn.compile.pushBoth,
              parse: e.expression.fn.parse.push
            }, {
              type: e.expression.type.parameter.end,
              regex: /^\)/,
              next: e.expression.set.operationsExtended,
              compile: function(t, n, o) {
                var r, i = t;
                for (r = n.pop(); n.length > 0 && r.type !== e.expression.type.parameter.start;) o.push(r), r = n.pop();
                for (var s = []; t.type !== e.expression.type.parameter.start;) s.unshift(t), t = o.pop();
                s.unshift(t), void 0 === (t = o[o.length - 1]) || t.type !== e.expression.type._function && t.type !== e.expression.type.filter && t.type !== e.expression.type.test && t.type !== e.expression.type.key.brackets ? (i.expression = !0, s.pop(), s.shift(), i.params = s, o.push(i)) : (i.expression = !1, t.params = s)
              },
              parse: function(t, n, o) {
                var r = [],
                  i = !1,
                  s = null;
                if (t.expression) return e.expression.parseAsync.call(this, t.params, o).then((function(e) {
                  n.push(e)
                }));
                for (; n.length > 0;) {
                  if ((s = n.pop()) && s.type && s.type === e.expression.type.parameter.start) {
                    i = !0;
                    break
                  }
                  r.unshift(s)
                }
                if (!i) throw new e.Error("Expected end of parameter set.");
                n.push(r)
              }
            }, {
              type: e.expression.type.slice,
              regex: /^\[(\d*:\d*)\]/,
              next: e.expression.set.operationsExtended,
              compile: function(e, t, n) {
                var o = e.match[1].split(":"),
                  r = o[0] ? parseInt(o[0], 10) : void 0,
                  i = o[1] ? parseInt(o[1], 10) : void 0;
                e.value = "slice", e.params = [r, i], i || (e.params = [r]), n.push(e)
              },
              parse: function(t, n) {
                var o = n.pop(),
                  r = t.params;
                n.push(e.filter.call(this, t.value, o, r))
              }
            }, {
              type: e.expression.type.array.start,
              regex: /^\[/,
              next: e.expression.set.expressions.concat([e.expression.type.array.end]),
              compile: e.expression.fn.compile.pushBoth,
              parse: e.expression.fn.parse.push
            }, {
              type: e.expression.type.array.end,
              regex: /^\]/,
              next: e.expression.set.operationsExtended,
              compile: function(t, n, o) {
                for (var r, i = n.length - 1; i >= 0 && (r = n.pop()).type !== e.expression.type.array.start; i--) o.push(r);
                o.push(t)
              },
              parse: function(t, n) {
                for (var o = [], r = !1, i = null; n.length > 0;) {
                  if ((i = n.pop()) && i.type && i.type === e.expression.type.array.start) {
                    r = !0;
                    break
                  }
                  o.unshift(i)
                }
                if (!r) throw new e.Error("Expected end of array.");
                n.push(o)
              }
            }, {
              type: e.expression.type.object.start,
              regex: /^\{/,
              next: e.expression.set.expressions.concat([e.expression.type.object.end]),
              compile: e.expression.fn.compile.pushBoth,
              parse: e.expression.fn.parse.push
            }, {
              type: e.expression.type.object.end,
              regex: /^\}/,
              next: e.expression.set.operationsExtended,
              compile: function(t, n, o) {
                for (var r, i = n.length - 1; i >= 0 && (!(r = n.pop()) || r.type !== e.expression.type.object.start); i--) o.push(r);
                o.push(t)
              },
              parse: function(t, n) {
                for (var o = {}, r = !1, i = null, s = !1, a = null; n.length > 0;) {
                  if ((i = n.pop()) && i.type && i.type === e.expression.type.object.start) {
                    r = !0;
                    break
                  }
                  if (i && i.type && (i.type === e.expression.type.operator.binary || i.type === e.expression.type.operator.unary) && i.key) {
                    if (!s) throw new e.Error("Missing value for key '" + i.key + "' in object definition.");
                    o[i.key] = a, void 0 === o._keys && (o._keys = []), o._keys.unshift(i.key), a = null, s = !1
                  } else s = !0, a = i
                }
                if (!r) throw new e.Error("Unexpected end of object.");
                n.push(o)
              }
            }, {
              type: e.expression.type.filter,
              regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_-]*)/,
              next: e.expression.set.operationsExtended.concat([e.expression.type.parameter.start]),
              compile: function(e, t, n) {
                e.value = e.match[1], n.push(e)
              },
              parse: function(n, o, r) {
                var i = o.pop(),
                  s = this;
                return t(s, n.params, r).then((function(t) {
                  return e.filter.call(s, n.value, i, t)
                })).then((function(e) {
                  o.push(e)
                }))
              }
            }, {
              type: e.expression.type._function,
              regex: /^([a-zA-Z_]\w*)\s*\(/,
              next: e.expression.type.parameter.start,
              validate: function(t) {
                return t[1] && !e.expression.reservedWords.includes(t[1])
              },
              transform: function() {
                return "("
              },
              compile: function(e, t, n) {
                var o = e.match[1];
                e.fn = o, delete e.match, delete e.value, n.push(e)
              },
              parse: function(n, o, r) {
                var s, a = this,
                  c = n.fn;
                return t(a, n.params, r).then((function(t) {
                  if (e.functions[c]) s = e.functions[c].apply(a, t);
                  else {
                    if ("function" != typeof r[c]) throw new e.Error(c + " function does not exist and is not defined in the context");
                    s = r[c].apply(r, (0, i.default)(t))
                  }
                  return s
                })).then((function(e) {
                  o.push(e)
                }))
              }
            }, {
              type: e.expression.type.variable,
              regex: /^[a-zA-Z_]\w*/,
              next: e.expression.set.operationsExtended.concat([e.expression.type.parameter.start]),
              compile: e.expression.fn.compile.push,
              validate: function(t) {
                return !e.expression.reservedWords.includes(t[0])
              },
              parse: function(t, n, o) {
                var r = this;
                return e.expression.resolveAsync.call(r, o[t.value], o).then((function(o) {
                  if (r.template.options.strictVariables && void 0 === o) throw new e.Error('Variable "' + t.value + '" does not exist.');
                  n.push(o)
                }))
              }
            }, {
              type: e.expression.type.key.period,
              regex: /^\.(\w+)/,
              next: e.expression.set.operationsExtended.concat([e.expression.type.parameter.start]),
              compile: function(e, t, n) {
                e.key = e.match[1], delete e.match, delete e.value, n.push(e)
              },
              parse: function(n, o, i, s) {
                var a, c = this,
                  p = n.key,
                  l = o.pop();
                if (l && !Object.prototype.hasOwnProperty.call(l, p) && c.template.options.strictVariables) throw Object.keys(l).length > 0 ? new e.Error('Key "' + p + '" for object with keys "' + Object.keys(l).join(", ") + '" does not exist.') : new e.Error('Key "' + p + '" does not exist as the object is empty.');
                return t(c, n.params, i).then((function(t) {
                  if (null == l) a = void 0;
                  else {
                    var n = function(e) {
                      return e.slice(0, 1).toUpperCase() + e.slice(1)
                    };
                    a = "object" === (0, r.default)(l) && p in l ? l[p] : l["get" + n(p)] ? l["get" + n(p)] : l["is" + n(p)] ? l["is" + n(p)] : void 0
                  }
                  return e.expression.resolveAsync.call(c, a, i, t, s, l)
                })).then((function(e) {
                  o.push(e)
                }))
              }
            }, {
              type: e.expression.type.key.brackets,
              regex: /^\[([^\]:]*)\]/,
              next: e.expression.set.operationsExtended.concat([e.expression.type.parameter.start]),
              compile: function(t, n, o) {
                var r = t.match[1];
                delete t.value, delete t.match, t.stack = e.expression.compile({
                  value: r
                }).stack, o.push(t)
              },
              parse: function(n, o, i, s) {
                var a, c, p = this,
                  l = null;
                return t(p, n.params, i).then((function(t) {
                  return l = t, e.expression.parseAsync.call(p, n.stack, i)
                })).then((function(t) {
                  if ((a = o.pop()) && !Object.prototype.hasOwnProperty.call(a, t) && p.template.options.strictVariables) {
                    var n = Object.keys(a);
                    throw n.length > 0 ? new e.Error('Key "' + t + '" for array with keys "' + n.join(", ") + '" does not exist.') : new e.Error('Key "' + t + '" does not exist as the array is empty.')
                  }
                  return null == a ? null : (c = "object" === (0, r.default)(a) && t in a ? a[t] : null, e.expression.resolveAsync.call(p, c, a, l, s))
                })).then((function(e) {
                  o.push(e)
                }))
              }
            }, {
              type: e.expression.type._null,
              regex: /^(null|NULL|none|NONE)/,
              next: e.expression.set.operations,
              compile: function(e, t, n) {
                delete e.match, e.value = null, n.push(e)
              },
              parse: e.expression.fn.parse.pushValue
            }, {
              type: e.expression.type.context,
              regex: /^_context/,
              next: e.expression.set.operationsExtended.concat([e.expression.type.parameter.start]),
              compile: e.expression.fn.compile.push,
              parse: function(e, t, n) {
                t.push(n)
              }
            }, {
              type: e.expression.type.bool,
              regex: /^(true|TRUE|false|FALSE)/,
              next: e.expression.set.operations,
              compile: function(e, t, n) {
                e.value = "true" === e.match[0].toLowerCase(), delete e.match, n.push(e)
              },
              parse: e.expression.fn.parse.pushValue
            }], e.expression.resolveAsync = function(t, n, o, r, i) {
              var s = this;
              if ("function" != typeof t) return e.Promise.resolve(t);
              var a = e.Promise.resolve(o);
              return r && r.type === e.expression.type.parameter.end && (a = a.then((function() {
                return r.params && e.expression.parseAsync.call(s, r.params, n, !0)
              })).then((function(e) {
                return r.cleanup = !0, e
              }))), a.then((function(e) {
                return t.apply(i || n, e || [])
              }))
            }, e.expression.resolve = function(t, n, o, r, i) {
              return e.async.potentiallyAsync(this, !1, (function() {
                return e.expression.resolveAsync.call(this, t, n, o, r, i)
              }))
            }, e.expression.handler = {}, e.expression.extendType = function(t) {
              e.expression.type[t] = "Twig.expression.type." + t
            }, e.expression.extend = function(t) {
              if (!t.type) throw new e.Error("Unable to extend logic definition. No type provided for " + t);
              e.expression.handler[t.type] = t
            }; e.expression.definitions.length > 0;) e.expression.extend(e.expression.definitions.shift());
          return e.expression.tokenize = function(t) {
            var n, o, r, i, s, a = [],
              c = 0,
              p = null,
              l = [],
              u = function() {
                for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                for (var u = arguments.length - 2, d = new Array(u); u-- > 0;) d[u] = o[u];
                if (e.log.trace("Twig.expression.tokenize", "Matched a ", n, " regular expression of ", d), p && !p.includes(n)) return l.push(n + " cannot follow a " + a[a.length - 1].type + " at template:" + c + " near '" + d[0].slice(0, 20) + "...'"), d[0];
                var f = e.expression.handler[n];
                return f.validate && !f.validate(d, a) ? d[0] : (l = [], a.push({
                  type: n,
                  value: d[0],
                  match: d
                }), s = !0, p = i, c += d[0].length, f.transform ? f.transform(d, a) : "")
              };
            for (e.log.debug("Twig.expression.tokenize", "Tokenizing expression ", t); t.length > 0;) {
              for (n in t = t.trim(), e.expression.handler)
                if (Object.hasOwnProperty.call(e.expression.handler, n)) {
                  if (i = e.expression.handler[n].next, o = e.expression.handler[n].regex, e.log.trace("Checking type ", n, " on ", t), s = !1, Array.isArray(o))
                    for (r = o.length; r-- > 0;) t = t.replace(o[r], u);
                  else t = t.replace(o, u);
                  if (s) break
                } if (!s) throw l.length > 0 ? new e.Error(l.join(" OR ")) : new e.Error("Unable to parse '" + t + "' at template position" + c)
            }
            return e.log.trace("Twig.expression.tokenize", "Tokenized to ", a), a
          }, e.expression.compile = function(t) {
            var n = t.value,
              o = e.expression.tokenize(n),
              r = null,
              i = [],
              s = [],
              a = null;
            for (e.log.trace("Twig.expression.compile: ", "Compiling ", n); o.length > 0;) r = o.shift(), a = e.expression.handler[r.type], e.log.trace("Twig.expression.compile: ", "Compiling ", r), a.compile(r, s, i), e.log.trace("Twig.expression.compile: ", "Stack is", s), e.log.trace("Twig.expression.compile: ", "Output is", i);
            for (; s.length > 0;) i.push(s.pop());
            return e.log.trace("Twig.expression.compile: ", "Final output is", i), t.stack = i, delete t.value, t
          }, e.expression.parse = function(t, n, o, r) {
            var i = this;
            Array.isArray(t) || (t = [t]);
            var s = [],
              a = [],
              c = e.expression.type.operator.binary;
            return e.async.potentiallyAsync(i, r, (function() {
              return e.async.forEach(t, (function(o, r) {
                var p, l = null,
                  u = null;
                if (!o.cleanup) return t.length > r + 1 && (u = t[r + 1]), (l = e.expression.handler[o.type]).parse && (p = l.parse.call(i, o, s, n, u)), o.type === c && n.loop && a.push(o), p
              })).then((function() {
                for (var e = a.length, t = null; e-- > 0;)(t = a[e]).params && t.key && delete t.key;
                if (o) {
                  var n = s.splice(0);
                  s.push(n)
                }
                return s.pop()
              }))
            }))
          }, e
        }
      }, function(e, t, n) {
        var o = n(13),
          r = n(14),
          i = n(15),
          s = n(16);
        e.exports = function(e) {
          return o(e) || r(e) || i(e) || s()
        }
      }, function(e, t, n) {
        var o = n(3);
        e.exports = function(e) {
          if (Array.isArray(e)) return o(e)
        }
      }, function(e, t) {
        e.exports = function(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }
      }, function(e, t, n) {
        var o = n(3);
        e.exports = function(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
          }
        }
      }, function(e, t) {
        e.exports = function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          e.expression.operator = {
            leftToRight: "leftToRight",
            rightToLeft: "rightToLeft"
          };
          var t = function(e, t) {
            if (null == t) return null;
            if (void 0 !== t.indexOf) return (e === t || "" !== e) && t.includes(e);
            var n;
            for (n in t)
              if (Object.hasOwnProperty.call(t, n) && t[n] === e) return !0;
            return !1
          };
          return e.expression.operator.lookup = function(t, n) {
            switch (t) {
              case "..":
                n.precidence = 20, n.associativity = e.expression.operator.leftToRight;
                break;
              case ",":
                n.precidence = 18, n.associativity = e.expression.operator.leftToRight;
                break;
              case "?:":
              case "?":
              case ":":
                n.precidence = 16, n.associativity = e.expression.operator.rightToLeft;
                break;
              case "??":
                n.precidence = 15, n.associativity = e.expression.operator.rightToLeft;
                break;
              case "or":
                n.precidence = 14, n.associativity = e.expression.operator.leftToRight;
                break;
              case "and":
                n.precidence = 13, n.associativity = e.expression.operator.leftToRight;
                break;
              case "b-or":
                n.precidence = 12, n.associativity = e.expression.operator.leftToRight;
                break;
              case "b-xor":
                n.precidence = 11, n.associativity = e.expression.operator.leftToRight;
                break;
              case "b-and":
                n.precidence = 10, n.associativity = e.expression.operator.leftToRight;
                break;
              case "==":
              case "!=":
                n.precidence = 9, n.associativity = e.expression.operator.leftToRight;
                break;
              case "<":
              case "<=":
              case ">":
              case ">=":
              case "not in":
              case "in":
                n.precidence = 8, n.associativity = e.expression.operator.leftToRight;
                break;
              case "~":
              case "+":
              case "-":
                n.precidence = 6, n.associativity = e.expression.operator.leftToRight;
                break;
              case "//":
              case "**":
              case "*":
              case "/":
              case "%":
                n.precidence = 5, n.associativity = e.expression.operator.leftToRight;
                break;
              case "not":
                n.precidence = 3, n.associativity = e.expression.operator.rightToLeft;
                break;
              case "matches":
              case "starts with":
              case "ends with":
                n.precidence = 8, n.associativity = e.expression.operator.leftToRight;
                break;
              default:
                throw new e.Error("Failed to lookup operator: " + t + " is an unknown operator.")
            }
            return n.operator = t, n
          }, e.expression.operator.parse = function(n, o) {
            var r, i, s;
            if (e.log.trace("Twig.expression.operator.parse: ", "Handling ", n), "?" === n && (s = o.pop()), i = o.pop(), "not" !== n && (r = o.pop()), "in" !== n && "not in" !== n && "??" !== n && (r && Array.isArray(r) && (r = r.length), "?" !== n && i && Array.isArray(i) && (i = i.length)), "matches" === n && i && "string" == typeof i) {
              var a = i.match(/^\/(.*)\/([gims]?)$/),
                c = a[1],
                p = a[2];
              i = new RegExp(c, p)
            }
            switch (n) {
              case ":":
                break;
              case "??":
                void 0 === r && (r = i, i = s, s = void 0), null != r ? o.push(r) : o.push(i);
                break;
              case "?:":
                e.lib.boolval(r) ? o.push(r) : o.push(i);
                break;
              case "?":
                void 0 === r && (r = i, i = s, s = void 0), e.lib.boolval(r) ? o.push(i) : o.push(s);
                break;
              case "+":
                i = parseFloat(i), r = parseFloat(r), o.push(r + i);
                break;
              case "-":
                i = parseFloat(i), r = parseFloat(r), o.push(r - i);
                break;
              case "*":
                i = parseFloat(i), r = parseFloat(r), o.push(r * i);
                break;
              case "/":
                i = parseFloat(i), r = parseFloat(r), o.push(r / i);
                break;
              case "//":
                i = parseFloat(i), r = parseFloat(r), o.push(Math.floor(r / i));
                break;
              case "%":
                i = parseFloat(i), r = parseFloat(r), o.push(r % i);
                break;
              case "~":
                o.push((null != r ? r.toString() : "") + (null != i ? i.toString() : ""));
                break;
              case "not":
              case "!":
                o.push(!e.lib.boolval(i));
                break;
              case "<":
                o.push(r < i);
                break;
              case "<=":
                o.push(r <= i);
                break;
              case ">":
                o.push(r > i);
                break;
              case ">=":
                o.push(r >= i);
                break;
              case "===":
                o.push(r === i);
                break;
              case "==":
                o.push(r == i);
                break;
              case "!==":
                o.push(r !== i);
                break;
              case "!=":
                o.push(r != i);
                break;
              case "or":
                o.push(e.lib.boolval(r) || e.lib.boolval(i));
                break;
              case "b-or":
                o.push(r | i);
                break;
              case "b-xor":
                o.push(r ^ i);
                break;
              case "and":
                o.push(e.lib.boolval(r) && e.lib.boolval(i));
                break;
              case "b-and":
                o.push(r & i);
                break;
              case "**":
                o.push(Math.pow(r, i));
                break;
              case "not in":
                o.push(!t(r, i));
                break;
              case "in":
                o.push(t(r, i));
                break;
              case "matches":
                o.push(i.test(r));
                break;
              case "starts with":
                o.push("string" == typeof r && 0 === r.indexOf(i));
                break;
              case "ends with":
                o.push("string" == typeof r && r.includes(i, r.length - i.length));
                break;
              case "..":
                o.push(e.functions.range(r, i));
                break;
              default:
                throw new e.Error("Failed to parse operator: " + n + " is an unknown operator.")
            }
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        e.exports = function(e) {
          function t(e, t) {
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return null != t && n === e
          }
          return e.filters = {
            upper: function(e) {
              return "string" != typeof e ? e : e.toUpperCase()
            },
            lower: function(e) {
              return "string" != typeof e ? e : e.toLowerCase()
            },
            capitalize: function(e) {
              return "string" != typeof e ? e : e.slice(0, 1).toUpperCase() + e.toLowerCase().slice(1)
            },
            title: function(e) {
              return "string" != typeof e ? e : e.toLowerCase().replace(/(^|\s)([a-z])/g, (function(e, t, n) {
                return t + n.toUpperCase()
              }))
            },
            length: function(t) {
              return e.lib.is("Array", t) || "string" == typeof t ? t.length : e.lib.is("Object", t) ? void 0 === t._keys ? Object.keys(t).length : t._keys.length : 0
            },
            reverse: function(e) {
              if (t("Array", e)) return e.reverse();
              if (t("String", e)) return e.split("").reverse().join("");
              if (t("Object", e)) {
                var n = e._keys || Object.keys(e).reverse();
                return e._keys = n, e
              }
            },
            sort: function(e) {
              if (t("Array", e)) return e.sort();
              if (t("Object", e)) {
                delete e._keys;
                var n = Object.keys(e).sort((function(t, n) {
                  var o, r;
                  return e[t] > e[n] == !(e[t] <= e[n]) ? e[t] > e[n] ? 1 : e[t] < e[n] ? -1 : 0 : isNaN(o = parseFloat(e[t])) || isNaN(r = parseFloat(e[n])) ? "string" == typeof e[t] ? e[t] > e[n].toString() ? 1 : e[t] < e[n].toString() ? -1 : 0 : "string" == typeof e[n] ? e[t].toString() > e[n] ? 1 : e[t].toString() < e[n] ? -1 : 0 : null : o > r ? 1 : o < r ? -1 : 0
                }));
                return e._keys = n, e
              }
            },
            keys: function(e) {
              if (null != e) {
                var t = e._keys || Object.keys(e),
                  n = [];
                return t.forEach((function(t) {
                  "_keys" !== t && Object.hasOwnProperty.call(e, t) && n.push(t)
                })), n
              }
            },
            url_encode: function(t) {
              if (null != t) {
                if (e.lib.is("Object", t)) return function t(n, o) {
                  var r = [];
                  return (n._keys || Object.keys(n)).forEach((function(i) {
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                      var s = o ? o + "[" + i + "]" : i,
                        a = n[i];
                      r.push(e.lib.is("Object", a) || Array.isArray(a) ? t(a, s) : encodeURIComponent(s) + "=" + encodeURIComponent(a))
                    }
                  })), r.join("&amp;")
                }(t);
                var n = encodeURIComponent(t);
                return n = n.replace("'", "%27")
              }
            },
            join: function(e, n) {
              if (null != e) {
                var o = "",
                  r = [];
                return n && n[0] && (o = n[0]), t("Array", e) ? r = e : (e._keys || Object.keys(e)).forEach((function(t) {
                  "_keys" !== t && Object.hasOwnProperty.call(e, t) && r.push(e[t])
                })), r.join(o)
              }
            },
            default: function(t, n) {
              if (void 0 !== n && n.length > 1) throw new e.Error("default filter expects one argument");
              return null == t || "" === t ? void 0 === n ? "" : n[0] : t
            },
            json_encode: function(n) {
              if (null == n) return "null";
              if ("object" === (0, o.default)(n) && t("Array", n)) {
                var r = [];
                return n.forEach((function(t) {
                  r.push(e.filters.json_encode(t))
                })), "[" + r.join(",") + "]"
              }
              if ("object" === (0, o.default)(n) && t("Date", n)) return '"' + n.toISOString() + '"';
              if ("object" === (0, o.default)(n)) {
                var i = n._keys || Object.keys(n),
                  s = [];
                return i.forEach((function(t) {
                  s.push(JSON.stringify(t) + ":" + e.filters.json_encode(n[t]))
                })), "{" + s.join(",") + "}"
              }
              return JSON.stringify(n)
            },
            merge: function(n, o) {
              var r = [],
                i = 0;
              if (t("Array", n) ? o.forEach((function(e) {
                  t("Array", e) || (r = {})
                })) : r = {}, t("Array", r) || (r._keys = []), t("Array", n) ? n.forEach((function(e) {
                  r._keys && r._keys.push(i), r[i] = e, i++
                })) : (n._keys || Object.keys(n)).forEach((function(e) {
                  r[e] = n[e], r._keys.push(e);
                  var t = parseInt(e, 10);
                  !isNaN(t) && t >= i && (i = t + 1)
                })), o.forEach((function(e) {
                  t("Array", e) ? e.forEach((function(e) {
                    r._keys && r._keys.push(i), r[i] = e, i++
                  })) : (e._keys || Object.keys(e)).forEach((function(t) {
                    r[t] || r._keys.push(t), r[t] = e[t];
                    var n = parseInt(t, 10);
                    !isNaN(n) && n >= i && (i = n + 1)
                  }))
                })), 0 === o.length) throw new e.Error("Filter merge expects at least one parameter");
              return r
            },
            date: function(t, n) {
              var o = e.functions.date(t),
                r = n && Boolean(n.length) ? n[0] : "F j, Y H:i";
              return e.lib.date(r.replace(/\\\\/g, "\\"), o)
            },
            date_modify: function(t, n) {
              if (null != t) {
                if (void 0 === n || 1 !== n.length) throw new e.Error("date_modify filter expects 1 argument");
                var o, r = n[0];
                return e.lib.is("Date", t) && (o = e.lib.strtotime(r, t.getTime() / 1e3)), e.lib.is("String", t) && (o = e.lib.strtotime(r, e.lib.strtotime(t))), e.lib.is("Number", t) && (o = e.lib.strtotime(r, t)), new Date(1e3 * o)
              }
            },
            replace: function(t, n) {
              if (null != t) {
                var o, r = n[0];
                for (o in r) Object.hasOwnProperty.call(r, o) && "_keys" !== o && (t = e.lib.replaceAll(t, o, r[o]));
                return t
              }
            },
            format: function(t, n) {
              if (null != t) return e.lib.vsprintf(t, n)
            },
            striptags: function(t, n) {
              if (null != t) return e.lib.stripTags(t, n)
            },
            escape: function(t, n) {
              if (null != t && "" !== t) {
                var o = "html";
                if (n && Boolean(n.length) && !0 !== n[0] && (o = n[0]), "html" === o) {
                  var r = t.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                  return new e.Markup(r, "html")
                }
                if ("js" === o) {
                  for (var i = t.toString(), s = "", a = 0; a < i.length; a++)
                    if (i[a].match(/^[a-zA-Z0-9,._]$/)) s += i[a];
                    else {
                      var c = i.charAt(a),
                        p = i.charCodeAt(a),
                        l = {
                          "\\": "\\\\",
                          "/": "\\/",
                          "\b": "\\b",
                          "\f": "\\f",
                          "\n": "\\n",
                          "\r": "\\r",
                          "\t": "\\t"
                        };
                      s += l[c] ? l[c] : e.lib.sprintf("\\u%04s", p.toString(16).toUpperCase())
                    } return new e.Markup(s, "js")
                }
                if ("css" === o) {
                  for (var u = t.toString(), d = "", f = 0; f < u.length; f++) u[f].match(/^[a-zA-Z0-9]$/) ? d += u[f] : d += "\\" + u.charCodeAt(f).toString(16).toUpperCase() + " ";
                  return new e.Markup(d, "css")
                }
                if ("url" === o) {
                  var h = e.filters.url_encode(t);
                  return new e.Markup(h, "url")
                }
                if ("html_attr" === o) {
                  for (var g = t.toString(), m = "", y = 0; y < g.length; y++)
                    if (g[y].match(/^[a-zA-Z0-9,.\-_]$/)) m += g[y];
                    else if (g[y].match(/^[&<>"]$/)) m += g[y].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                  else {
                    var b = g.charCodeAt(y);
                    m += b <= 31 && 9 !== b && 10 !== b && 13 !== b ? "&#xFFFD;" : b < 128 ? e.lib.sprintf("&#x%02s;", b.toString(16).toUpperCase()) : e.lib.sprintf("&#x%04s;", b.toString(16).toUpperCase())
                  }
                  return new e.Markup(m, "html_attr")
                }
                throw new e.Error("escape strategy unsupported")
              }
            },
            e: function(t, n) {
              return e.filters.escape(t, n)
            },
            nl2br: function(t) {
              if (null != t && "" !== t) {
                var n = "<br />BACKSLASH_n_replace";
                return t = e.filters.escape(t).replace(/\r\n/g, n).replace(/\r/g, n).replace(/\n/g, n), t = e.lib.replaceAll(t, "BACKSLASH_n_replace", "\n"), new e.Markup(t)
              }
            },
            number_format: function(e, t) {
              var n = e,
                o = t && t[0] ? t[0] : void 0,
                r = t && void 0 !== t[1] ? t[1] : ".",
                i = t && void 0 !== t[2] ? t[2] : ",";
              n = String(n).replace(/[^0-9+\-Ee.]/g, "");
              var s = isFinite(Number(n)) ? Number(n) : 0,
                a = isFinite(Number(o)) ? Math.abs(o) : 0,
                c = "";
              return (c = (a ? function(e, t) {
                var n = Math.pow(10, t);
                return String(Math.round(e * n) / n)
              }(s, a) : String(Math.round(s))).split("."))[0].length > 3 && (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, i)), (c[1] || "").length < a && (c[1] = c[1] || "", c[1] += new Array(a - c[1].length + 1).join("0")), c.join(r)
            },
            trim: function(e, t) {
              if (null != e) {
                var n, o = String(e);
                n = t && t[0] ? String(t[0]) : " \n\r\t\f\v            ​\u2028\u2029　";
                for (var r = 0; r < o.length; r++)
                  if (!n.includes(o.charAt(r))) {
                    o = o.slice(Math.max(0, r));
                    break
                  } for (var i = o.length - 1; i >= 0; i--)
                  if (!n.includes(o.charAt(i))) {
                    o = o.slice(0, Math.max(0, i + 1));
                    break
                  } return n.includes(o.charAt(0)) ? "" : o
              }
            },
            truncate: function(e, t) {
              var n = 30,
                o = !1,
                r = "...";
              if (e = String(e), t && (t[0] && (n = t[0]), t[1] && (o = t[1]), t[2] && (r = t[2])), e.length > n) {
                if (o && -1 === (n = e.indexOf(" ", n))) return e;
                e = e.slice(0, n) + r
              }
              return e
            },
            slice: function(t, n) {
              if (null != t) {
                if (void 0 === n || 0 === n.length) throw new e.Error("slice filter expects at least 1 argument");
                var o = n[0] || 0,
                  r = n.length > 1 ? n[1] : t.length,
                  i = o >= 0 ? o : Math.max(t.length + o, 0);
                if (e.lib.is("Array", t)) {
                  for (var s = [], a = i; a < i + r && a < t.length; a++) s.push(t[a]);
                  return s
                }
                if (e.lib.is("String", t)) return t.slice(i, i + r);
                throw new e.Error("slice filter expects value to be an array or string")
              }
            },
            abs: function(e) {
              if (null != e) return Math.abs(e)
            },
            first: function(e) {
              if (t("Array", e)) return e[0];
              if (t("Object", e)) {
                if ("_keys" in e) return e[e._keys[0]]
              } else if ("string" == typeof e) return e.slice(0, 1)
            },
            split: function(t, n) {
              if (null != t) {
                if (void 0 === n || 0 === n.length || n.length > 2) throw new e.Error("split filter expects 1 or 2 argument");
                if (e.lib.is("String", t)) {
                  var o = n[0],
                    r = n[1],
                    i = t.split(o);
                  if (void 0 === r) return i;
                  if (r < 0) return t.split(o, i.length + r);
                  var s = [];
                  if ("" === o)
                    for (; i.length > 0;) {
                      for (var a = "", c = 0; c < r && i.length > 0; c++) a += i.shift();
                      s.push(a)
                    } else {
                      for (var p = 0; p < r - 1 && i.length > 0; p++) s.push(i.shift());
                      i.length > 0 && s.push(i.join(o))
                    }
                  return s
                }
                throw new e.Error("split filter expects value to be a string")
              }
            },
            last: function(t) {
              var n;
              return e.lib.is("Object", t) ? t[(n = void 0 === t._keys ? Object.keys(t) : t._keys)[n.length - 1]] : e.lib.is("Number", t) ? t.toString().slice(-1) : t[t.length - 1]
            },
            raw: function(t) {
              return new e.Markup(t || "")
            },
            batch: function(t, n) {
              var o, r, i = n.shift(),
                s = n.shift();
              if (!e.lib.is("Array", t)) throw new e.Error("batch filter expects items to be an array");
              if (!e.lib.is("Number", i)) throw new e.Error("batch filter expects size to be a number");
              i = Math.ceil(i);
              var a = e.lib.chunkArray(t, i);
              if (s && t.length % i != 0) {
                for (r = i - (o = a.pop()).length; r--;) o.push(s);
                a.push(o)
              }
              return a
            },
            round: function(t, n) {
              var o = (n = n || []).length > 0 ? n[0] : 0,
                r = n.length > 1 ? n[1] : "common";
              if (t = parseFloat(t), o && !e.lib.is("Number", o)) throw new e.Error("round filter expects precision to be a number");
              if ("common" === r) return e.lib.round(t, o);
              if (!e.lib.is("Function", Math[r])) throw new e.Error("round filter expects method to be 'floor', 'ceil', or 'common'");
              return Math[r](t * Math.pow(10, o)) / Math.pow(10, o)
            },
            spaceless: function(e) {
              return e.replace(/>\s+</g, "><").trim()
            }
          }, e.filter = function(t, n, o) {
            if (!e.filters[t]) throw new e.Error("Unable to find filter " + t);
            return e.filters[t].call(this, n, o)
          }, e.filter.extend = function(t, n) {
            e.filters[t] = n
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        e.exports = function(t) {
          return t.functions = {
            range: function(e, t, n) {
              var o, r, i = [],
                s = n || 1,
                a = !1;
              if (isNaN(e) || isNaN(t) ? isNaN(e) && isNaN(t) ? (a = !0, o = e.charCodeAt(0), r = t.charCodeAt(0)) : (o = isNaN(e) ? 0 : e, r = isNaN(t) ? 0 : t) : (o = parseInt(e, 10), r = parseInt(t, 10)), o > r)
                for (; o >= r;) i.push(a ? String.fromCharCode(o) : o), o -= s;
              else
                for (; o <= r;) i.push(a ? String.fromCharCode(o) : o), o += s;
              return i
            },
            cycle: function(e, t) {
              return e[t % e.length]
            },
            dump: function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = [].concat(t),
                i = this,
                s = "\n",
                a = "  ",
                c = 0,
                p = "",
                l = function(e) {
                  for (var t = ""; e > 0;) e--, t += a;
                  return t
                },
                u = function(e) {
                  p += l(c), "object" === (0, o.default)(e) ? d(e) : "function" == typeof e ? p += "function()" + s : "string" == typeof e ? p += "string(" + e.length + ') "' + e + '"' + s : "number" == typeof e ? p += "number(" + e + ")" + s : "boolean" == typeof e && (p += "bool(" + e + ")" + s)
                },
                d = function(e) {
                  var t;
                  if (null === e) p += "NULL" + s;
                  else if (void 0 === e) p += "undefined" + s;
                  else if ("object" === (0, o.default)(e)) {
                    for (t in p += l(c) + (0, o.default)(e), c++, p += "(" + function(e) {
                        var t, n = 0;
                        for (t in e) Object.hasOwnProperty.call(e, t) && n++;
                        return n
                      }(e) + ") {" + s, e) Object.hasOwnProperty.call(e, t) && (p += l(c) + "[" + t + "]=> " + s, u(e[t]));
                    c--, p += l(c) + "}" + s
                  } else u(e)
                };
              return 0 === r.length && r.push(i.context), r.forEach((function(e) {
                d(e)
              })), p
            },
            date: function(e) {
              var n;
              if (null == e || "" === e) n = new Date;
              else if (t.lib.is("Date", e)) n = e;
              else if (t.lib.is("String", e)) n = e.match(/^\d+$/) ? new Date(1e3 * e) : new Date(1e3 * t.lib.strtotime(e));
              else {
                if (!t.lib.is("Number", e)) throw new t.Error("Unable to parse date " + e);
                n = new Date(1e3 * e)
              }
              return n
            },
            block: function(e) {
              var t = this.getBlock(e);
              if (void 0 !== t) return t.render(this, this.context)
            },
            parent: function() {
              return this.getBlock(this.getNestingStackToken(t.logic.type.block).blockName, !0).render(this, this.context)
            },
            attribute: function(e, n, o) {
              return t.lib.is("Object", e) && Object.hasOwnProperty.call(e, n) ? "function" == typeof e[n] ? e[n].apply(void 0, o) : e[n] : e && e[n] || void 0
            },
            max: function(e) {
              if (t.lib.is("Object", e)) return delete e._keys, t.lib.max(e);
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
              return Reflect.apply(t.lib.max, null, [e].concat(o))
            },
            min: function(e) {
              if (t.lib.is("Object", e)) return delete e._keys, t.lib.min(e);
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
              return Reflect.apply(t.lib.min, null, [e].concat(o))
            },
            template_from_string: function(e) {
              return void 0 === e && (e = ""), t.Templates.parsers.twig({
                options: this.template.options,
                data: e
              })
            },
            random: function(e) {
              function n(e) {
                var t = Math.floor(2147483648 * Math.random()),
                  n = Math.min.call(null, 0, e),
                  o = Math.max.call(null, 0, e);
                return n + Math.floor((o - n + 1) * t / 2147483648)
              }
              if (t.lib.is("Number", e)) return n(e);
              if (t.lib.is("String", e)) return e.charAt(n(e.length - 1));
              if (t.lib.is("Array", e)) return e[n(e.length - 1)];
              if (t.lib.is("Object", e)) {
                var o = Object.keys(e);
                return e[o[n(o.length - 1)]]
              }
              return n(2147483647)
            },
            source: function(n, o) {
              var r, i = !1,
                s = {
                  id: n,
                  path: n,
                  method: void 0 !== e.exports && "undefined" == typeof window ? "fs" : "ajax",
                  parser: "source",
                  async: !1,
                  fetchTemplateSource: !0
                };
              void 0 === o && (o = !1);
              try {
                null == (r = t.Templates.loadRemote(n, s)) ? r = "" : i = !0
              } catch (e) {
                t.log.debug("Twig.functions.source: ", "Problem loading template  ", e)
              }
              return i || o ? r : 'Template "{name}" is not defined.'.replace("{name}", n)
            }
          }, t._function = function(e, n, o) {
            if (!t.functions[e]) throw new t.Error("Unable to find function " + e);
            return t.functions[e](n, o)
          }, t._function.extend = function(e, n) {
            t.functions[e] = n
          }, t
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return e.lib = {}, e.lib.sprintf = n(4), e.lib.vsprintf = n(21), e.lib.round = n(22), e.lib.max = n(24), e.lib.min = n(25), e.lib.stripTags = n(26), e.lib.strtotime = n(28), e.lib.date = n(29), e.lib.boolval = n(30), e.lib.is = function(e, t) {
            if (null == t) return !1;
            switch (e) {
              case "Array":
                return Array.isArray(t);
              case "Date":
                return t instanceof Date;
              case "String":
                return "string" == typeof t || t instanceof String;
              case "Number":
                return "number" == typeof t || t instanceof Number;
              case "Function":
                return "function" == typeof t;
              case "Object":
                return t instanceof Object;
              default:
                return !1
            }
          }, e.lib.replaceAll = function(e, t, n) {
            var o = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            return e.replace(new RegExp(o, "g"), n)
          }, e.lib.chunkArray = function(e, t) {
            var n = [],
              o = 0,
              r = e.length;
            if (t < 1 || !Array.isArray(e)) return [];
            for (; o < r;) n.push(e.slice(o, o += t));
            return n
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
          return n(4).apply(this, [e].concat(t))
        }
      }, function(e, t, n) {
        "use strict";

        function o(e, t) {
          var n = Math.floor(Math.abs(e) + .5);
          return ("PHP_ROUND_HALF_DOWN" === t && e === n - .5 || "PHP_ROUND_HALF_EVEN" === t && e === .5 + 2 * Math.floor(n / 2) || "PHP_ROUND_HALF_ODD" === t && e === .5 + 2 * Math.floor(n / 2) - 1) && (n -= 1), e < 0 ? -n : n
        }
        e.exports = function(e) {
          var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "PHP_ROUND_HALF_UP",
            s = n(23),
            a = n(5);
          if (e = s(e), r = a(r), t = Math.pow(10, r), isNaN(e) || !isFinite(e)) return e;
          if (Math.trunc(e) === e && r >= 0) return e;
          var c = 14 - Math.floor(Math.log10(Math.abs(e)));
          return c > r && c - 15 < r ? (e = o(e * Math.pow(10, c), i), e /= Math.pow(10, Math.abs(r - c))) : e *= t, (e = o(e, i)) / t
        }
      }, function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = function(e) {
          switch (void 0 === e ? "undefined" : o(e)) {
            case "number":
              return e;
            case "string":
              return parseFloat(e) || 0;
            case "boolean":
            default:
              return n(5)(e)
          }
        }
      }, function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = function() {
          var e, t, n = 0,
            r = 0,
            i = arguments,
            s = i.length,
            a = function(e) {
              if ("[object Array]" === Object.prototype.toString.call(e)) return e;
              var t = [];
              for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
              return t
            },
            c = function e(t, n) {
              var r = 0,
                i = 0,
                s = 0,
                c = 0,
                p = 0;
              if (t === n) return 0;
              if ("object" === (void 0 === t ? "undefined" : o(t))) {
                if ("object" === (void 0 === n ? "undefined" : o(n))) {
                  if (t = a(t), n = a(n), p = t.length, (c = n.length) > p) return 1;
                  if (c < p) return -1;
                  for (r = 0, i = p; r < i; ++r) {
                    if (1 === (s = e(t[r], n[r]))) return 1;
                    if (-1 === s) return -1
                  }
                  return 0
                }
                return -1
              }
              return "object" === (void 0 === n ? "undefined" : o(n)) ? 1 : isNaN(n) && !isNaN(t) ? 0 === t ? 0 : t < 0 ? 1 : -1 : isNaN(t) && !isNaN(n) ? 0 === n ? 0 : n > 0 ? 1 : -1 : n === t ? 0 : n > t ? 1 : -1
            };
          if (0 === s) throw new Error("At least one value should be passed to max()");
          if (1 === s) {
            if ("object" !== o(i[0])) throw new Error("Wrong parameter count for max()");
            if (0 === (e = a(i[0])).length) throw new Error("Array must contain at least one element for max()")
          } else e = i;
          for (t = e[0], n = 1, r = e.length; n < r; ++n) 1 === c(t, e[n]) && (t = e[n]);
          return t
        }
      }, function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = function() {
          var e, t, n = 0,
            r = 0,
            i = arguments,
            s = i.length,
            a = function(e) {
              if ("[object Array]" === Object.prototype.toString.call(e)) return e;
              var t = [];
              for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
              return t
            },
            c = function e(t, n) {
              var r = 0,
                i = 0,
                s = 0,
                c = 0,
                p = 0;
              if (t === n) return 0;
              if ("object" === (void 0 === t ? "undefined" : o(t))) {
                if ("object" === (void 0 === n ? "undefined" : o(n))) {
                  if (t = a(t), n = a(n), p = t.length, (c = n.length) > p) return 1;
                  if (c < p) return -1;
                  for (r = 0, i = p; r < i; ++r) {
                    if (1 === (s = e(t[r], n[r]))) return 1;
                    if (-1 === s) return -1
                  }
                  return 0
                }
                return -1
              }
              return "object" === (void 0 === n ? "undefined" : o(n)) ? 1 : isNaN(n) && !isNaN(t) ? 0 === t ? 0 : t < 0 ? 1 : -1 : isNaN(t) && !isNaN(n) ? 0 === n ? 0 : n > 0 ? 1 : -1 : n === t ? 0 : n > t ? 1 : -1
            };
          if (0 === s) throw new Error("At least one value should be passed to min()");
          if (1 === s) {
            if ("object" !== o(i[0])) throw new Error("Wrong parameter count for min()");
            if (0 === (e = a(i[0])).length) throw new Error("Array must contain at least one element for min()")
          } else e = i;
          for (t = e[0], n = 1, r = e.length; n < r; ++n) - 1 === c(t, e[n]) && (t = e[n]);
          return t
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
          var o = n(27);
          t = (((t || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
          var r = /<\/?([a-z0-9]*)\b[^>]*>?/gi,
            i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,
            s = o(e);
          for (s = "<" === s.substring(s.length - 1) ? s.substring(0, s.length - 1) : s;;) {
            var a = s;
            if (s = a.replace(i, "").replace(r, (function(e, n) {
                return t.indexOf("<" + n.toLowerCase() + ">") > -1 ? e : ""
              })), a === s) return s
          }
        }
      }, function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = function(e) {
          switch (void 0 === e ? "undefined" : o(e)) {
            case "boolean":
              return e ? "1" : "";
            case "string":
              return e;
            case "number":
              return isNaN(e) ? "NAN" : isFinite(e) ? e + "" : (e < 0 ? "-" : "") + "INF";
            case "undefined":
              return "";
            case "object":
              return Array.isArray(e) ? "Array" : null !== e ? "Object" : "";
            case "function":
            default:
              throw new Error("Unsupported value type")
          }
        }
      }, function(e, t, n) {
        "use strict";
        var o = "(?:([ap])\\.?m\\.?([\\t ]|$))",
          r = "(2[0-4]|[01]?[0-9])",
          i = "([01][0-9]|2[0-4])",
          s = "(0?[1-9]|1[0-2])",
          a = "([0-5]?[0-9])",
          c = "([0-5][0-9])",
          p = "(60|[0-5]?[0-9])",
          l = "(60|[0-5][0-9])",
          u = "sunday|monday|tuesday|wednesday|thursday|friday|saturday",
          d = u + "|sun|mon|tue|wed|thu|fri|sat|weekdays?",
          f = "first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth",
          h = "(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|" + d,
          g = "([0-9]{1,4})",
          m = "([0-9]{4})",
          y = "(1[0-2]|0?[0-9])",
          b = "(0[0-9]|1[0-2])",
          k = "(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)",
          x = "(0[0-9]|[1-2][0-9]|3[01])",
          v = "january|february|march|april|may|june|july|august|september|october|november|december",
          w = "jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec",
          T = "(" + v + "|" + w + "|i[vx]|vi{0,3}|xi{0,2}|i{1,3})",
          _ = "((?:GMT)?([+-])" + r + ":?" + a + "?)",
          O = T + "[ .\\t-]*" + k + "[,.stndrh\\t ]*";

        function j(e, t) {
          switch (t = t && t.toLowerCase()) {
            case "a":
              e += 12 === e ? -12 : 0;
              break;
            case "p":
              e += 12 !== e ? 12 : 0
          }
          return e
        }

        function S(e) {
          var t = +e;
          return e.length < 4 && t < 100 && (t += t < 70 ? 2e3 : 1900), t
        }

        function E(e) {
          return {
            jan: 0,
            january: 0,
            i: 0,
            feb: 1,
            february: 1,
            ii: 1,
            mar: 2,
            march: 2,
            iii: 2,
            apr: 3,
            april: 3,
            iv: 3,
            may: 4,
            v: 4,
            jun: 5,
            june: 5,
            vi: 5,
            jul: 6,
            july: 6,
            vii: 6,
            aug: 7,
            august: 7,
            viii: 7,
            sep: 8,
            sept: 8,
            september: 8,
            ix: 8,
            oct: 9,
            october: 9,
            x: 9,
            nov: 10,
            november: 10,
            xi: 10,
            dec: 11,
            december: 11,
            xii: 11
          } [e.toLowerCase()]
        }

        function A(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = {
              mon: 1,
              monday: 1,
              tue: 2,
              tuesday: 2,
              wed: 3,
              wednesday: 3,
              thu: 4,
              thursday: 4,
              fri: 5,
              friday: 5,
              sat: 6,
              saturday: 6,
              sun: 0,
              sunday: 0
            };
          return n[e.toLowerCase()] || t
        }

        function N(e, t) {
          if (!(e = e && e.match(/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i))) return t;
          var n = "-" === e[1] ? 1 : -1,
            o = +e[2],
            r = +e[4];
          return e[4] || e[3] || (r = Math.floor(o % 100), o = Math.floor(o / 100)), n * (60 * o + r)
        }
        var C = {
            yesterday: {
              regex: /^yesterday/i,
              name: "yesterday",
              callback: function() {
                return this.rd -= 1, this.resetTime()
              }
            },
            now: {
              regex: /^now/i,
              name: "now"
            },
            noon: {
              regex: /^noon/i,
              name: "noon",
              callback: function() {
                return this.resetTime() && this.time(12, 0, 0, 0)
              }
            },
            midnightOrToday: {
              regex: /^(midnight|today)/i,
              name: "midnight | today",
              callback: function() {
                return this.resetTime()
              }
            },
            tomorrow: {
              regex: /^tomorrow/i,
              name: "tomorrow",
              callback: function() {
                return this.rd += 1, this.resetTime()
              }
            },
            timestamp: {
              regex: /^@(-?\d+)/i,
              name: "timestamp",
              callback: function(e, t) {
                return this.rs += +t, this.y = 1970, this.m = 0, this.d = 1, this.dates = 0, this.resetTime() && this.zone(0)
              }
            },
            firstOrLastDay: {
              regex: /^(first|last) day of/i,
              name: "firstdayof | lastdayof",
              callback: function(e, t) {
                "first" === t.toLowerCase() ? this.firstOrLastDayOfMonth = 1 : this.firstOrLastDayOfMonth = -1
              }
            },
            backOrFrontOf: {
              regex: RegExp("^(back|front) of " + r + "[ \\t]*" + o + "?", "i"),
              name: "backof | frontof",
              callback: function(e, t, n, o) {
                var r = +n,
                  i = 15;
                return "back" === t.toLowerCase() || (r -= 1, i = 45), r = j(r, o), this.resetTime() && this.time(r, i, 0, 0)
              }
            },
            weekdayOf: {
              regex: RegExp("^(" + f + "|next|last|previous|this)[ \\t]+(" + u + "|sun|mon|tue|wed|thu|fri|sat)[ \\t]+of", "i"),
              name: "weekdayof"
            },
            mssqltime: {
              regex: RegExp("^" + s + ":" + c + ":" + l + "[:.]([0-9]+)" + o, "i"),
              name: "mssqltime",
              callback: function(e, t, n, o, r, i) {
                return this.time(j(+t, i), +n, +o, +r.substr(0, 3))
              }
            },
            timeLong12: {
              regex: RegExp("^" + s + "[:.]" + a + "[:.]" + l + "[ \\t]*" + o, "i"),
              name: "timelong12",
              callback: function(e, t, n, o, r) {
                return this.time(j(+t, r), +n, +o, 0)
              }
            },
            timeShort12: {
              regex: RegExp("^" + s + "[:.]" + c + "[ \\t]*" + o, "i"),
              name: "timeshort12",
              callback: function(e, t, n, o) {
                return this.time(j(+t, o), +n, 0, 0)
              }
            },
            timeTiny12: {
              regex: RegExp("^" + s + "[ \\t]*" + o, "i"),
              name: "timetiny12",
              callback: function(e, t, n) {
                return this.time(j(+t, n), 0, 0, 0)
              }
            },
            soap: {
              regex: RegExp("^" + m + "-" + b + "-" + x + "T" + i + ":" + c + ":" + l + "(?:\\.([0-9]+))" + _ + "?", "i"),
              name: "soap",
              callback: function(e, t, n, o, r, i, s, a, c) {
                return this.ymd(+t, n - 1, +o) && this.time(+r, +i, +s, +a.substr(0, 3)) && this.zone(N(c))
              }
            },
            wddx: {
              regex: RegExp("^" + m + "-" + y + "-" + k + "T" + r + ":" + a + ":" + p),
              name: "wddx",
              callback: function(e, t, n, o, r, i, s) {
                return this.ymd(+t, n - 1, +o) && this.time(+r, +i, +s, 0)
              }
            },
            exif: {
              regex: RegExp("^" + m + ":" + b + ":" + x + " " + i + ":" + c + ":" + l, "i"),
              name: "exif",
              callback: function(e, t, n, o, r, i, s) {
                return this.ymd(+t, n - 1, +o) && this.time(+r, +i, +s, 0)
              }
            },
            xmlRpc: {
              regex: RegExp("^" + m + b + x + "T" + r + ":" + c + ":" + l),
              name: "xmlrpc",
              callback: function(e, t, n, o, r, i, s) {
                return this.ymd(+t, n - 1, +o) && this.time(+r, +i, +s, 0)
              }
            },
            xmlRpcNoColon: {
              regex: RegExp("^" + m + b + x + "[Tt]" + r + c + l),
              name: "xmlrpcnocolon",
              callback: function(e, t, n, o, r, i, s) {
                return this.ymd(+t, n - 1, +o) && this.time(+r, +i, +s, 0)
              }
            },
            clf: {
              regex: RegExp("^" + k + "/(" + w + ")/" + m + ":" + i + ":" + c + ":" + l + "[ \\t]+" + _, "i"),
              name: "clf",
              callback: function(e, t, n, o, r, i, s, a) {
                return this.ymd(+o, E(n), +t) && this.time(+r, +i, +s, 0) && this.zone(N(a))
              }
            },
            iso8601long: {
              regex: RegExp("^t?" + r + "[:.]" + a + "[:.]" + p + "(?:\\.([0-9]+))", "i"),
              name: "iso8601long",
              callback: function(e, t, n, o, r) {
                return this.time(+t, +n, +o, +r.substr(0, 3))
              }
            },
            dateTextual: {
              regex: RegExp("^" + T + "[ .\\t-]*" + k + "[,.stndrh\\t ]+" + g, "i"),
              name: "datetextual",
              callback: function(e, t, n, o) {
                return this.ymd(S(o), E(t), +n)
              }
            },
            pointedDate4: {
              regex: RegExp("^" + k + "[.\\t-]" + y + "[.-]" + m),
              name: "pointeddate4",
              callback: function(e, t, n, o) {
                return this.ymd(+o, n - 1, +t)
              }
            },
            pointedDate2: {
              regex: RegExp("^" + k + "[.\\t]" + y + "\\.([0-9]{2})"),
              name: "pointeddate2",
              callback: function(e, t, n, o) {
                return this.ymd(S(o), n - 1, +t)
              }
            },
            timeLong24: {
              regex: RegExp("^t?" + r + "[:.]" + a + "[:.]" + p),
              name: "timelong24",
              callback: function(e, t, n, o) {
                return this.time(+t, +n, +o, 0)
              }
            },
            dateNoColon: {
              regex: RegExp("^" + m + b + x),
              name: "datenocolon",
              callback: function(e, t, n, o) {
                return this.ymd(+t, n - 1, +o)
              }
            },
            pgydotd: {
              regex: RegExp("^" + m + "\\.?(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])"),
              name: "pgydotd",
              callback: function(e, t, n) {
                return this.ymd(+t, 0, +n)
              }
            },
            timeShort24: {
              regex: RegExp("^t?" + r + "[:.]" + a, "i"),
              name: "timeshort24",
              callback: function(e, t, n) {
                return this.time(+t, +n, 0, 0)
              }
            },
            iso8601noColon: {
              regex: RegExp("^t?" + i + c + l, "i"),
              name: "iso8601nocolon",
              callback: function(e, t, n, o) {
                return this.time(+t, +n, +o, 0)
              }
            },
            iso8601dateSlash: {
              regex: RegExp("^" + m + "/" + b + "/" + x + "/"),
              name: "iso8601dateslash",
              callback: function(e, t, n, o) {
                return this.ymd(+t, n - 1, +o)
              }
            },
            dateSlash: {
              regex: RegExp("^" + m + "/" + y + "/" + k),
              name: "dateslash",
              callback: function(e, t, n, o) {
                return this.ymd(+t, n - 1, +o)
              }
            },
            american: {
              regex: RegExp("^" + y + "/" + k + "/" + g),
              name: "american",
              callback: function(e, t, n, o) {
                return this.ymd(S(o), t - 1, +n)
              }
            },
            americanShort: {
              regex: RegExp("^" + y + "/" + k),
              name: "americanshort",
              callback: function(e, t, n) {
                return this.ymd(this.y, t - 1, +n)
              }
            },
            gnuDateShortOrIso8601date2: {
              regex: RegExp("^" + g + "-" + y + "-" + k),
              name: "gnudateshort | iso8601date2",
              callback: function(e, t, n, o) {
                return this.ymd(S(t), n - 1, +o)
              }
            },
            iso8601date4: {
              regex: RegExp("^([+-]?[0-9]{4})-" + b + "-" + x),
              name: "iso8601date4",
              callback: function(e, t, n, o) {
                return this.ymd(+t, n - 1, +o)
              }
            },
            gnuNoColon: {
              regex: RegExp("^t?" + i + c, "i"),
              name: "gnunocolon",
              callback: function(e, t, n) {
                switch (this.times) {
                  case 0:
                    return this.time(+t, +n, 0, this.f);
                  case 1:
                    return this.y = 100 * t + +n, this.times++, !0;
                  default:
                    return !1
                }
              }
            },
            gnuDateShorter: {
              regex: RegExp("^" + m + "-" + y),
              name: "gnudateshorter",
              callback: function(e, t, n) {
                return this.ymd(+t, n - 1, 1)
              }
            },
            pgTextReverse: {
              regex: RegExp("^(\\d{3,4}|[4-9]\\d|3[2-9])-(" + w + ")-" + x, "i"),
              name: "pgtextreverse",
              callback: function(e, t, n, o) {
                return this.ymd(S(t), E(n), +o)
              }
            },
            dateFull: {
              regex: RegExp("^" + k + "[ \\t.-]*" + T + "[ \\t.-]*" + g, "i"),
              name: "datefull",
              callback: function(e, t, n, o) {
                return this.ymd(S(o), E(n), +t)
              }
            },
            dateNoDay: {
              regex: RegExp("^" + T + "[ .\\t-]*" + m, "i"),
              name: "datenoday",
              callback: function(e, t, n) {
                return this.ymd(+n, E(t), 1)
              }
            },
            dateNoDayRev: {
              regex: RegExp("^" + m + "[ .\\t-]*" + T, "i"),
              name: "datenodayrev",
              callback: function(e, t, n) {
                return this.ymd(+t, E(n), 1)
              }
            },
            pgTextShort: {
              regex: RegExp("^(" + w + ")-" + x + "-" + g, "i"),
              name: "pgtextshort",
              callback: function(e, t, n, o) {
                return this.ymd(S(o), E(t), +n)
              }
            },
            dateNoYear: {
              regex: RegExp("^" + O, "i"),
              name: "datenoyear",
              callback: function(e, t, n) {
                return this.ymd(this.y, E(t), +n)
              }
            },
            dateNoYearRev: {
              regex: RegExp("^" + k + "[ .\\t-]*" + T, "i"),
              name: "datenoyearrev",
              callback: function(e, t, n) {
                return this.ymd(this.y, E(n), +t)
              }
            },
            isoWeekDay: {
              regex: RegExp("^" + m + "-?W(0[1-9]|[1-4][0-9]|5[0-3])(?:-?([0-7]))?"),
              name: "isoweekday | isoweek",
              callback: function(e, t, n, o) {
                if (o = o ? +o : 1, !this.ymd(+t, 0, 1)) return !1;
                var r = new Date(this.y, this.m, this.d).getDay();
                r = 0 - (r > 4 ? r - 7 : r), this.rd += r + 7 * (n - 1) + o
              }
            },
            relativeText: {
              regex: RegExp("^(" + f + "|next|last|previous|this)[ \\t]+(" + h + ")", "i"),
              name: "relativetext",
              callback: function(e, t, n) {
                var o, r = {
                    amount: {
                      last: -1,
                      previous: -1,
                      this: 0,
                      first: 1,
                      next: 1,
                      second: 2,
                      third: 3,
                      fourth: 4,
                      fifth: 5,
                      sixth: 6,
                      seventh: 7,
                      eight: 8,
                      eighth: 8,
                      ninth: 9,
                      tenth: 10,
                      eleventh: 11,
                      twelfth: 12
                    } [o = t.toLowerCase()],
                    behavior: {
                      this: 1
                    } [o] || 0
                  },
                  i = r.amount;
                switch (n.toLowerCase()) {
                  case "sec":
                  case "secs":
                  case "second":
                  case "seconds":
                    this.rs += i;
                    break;
                  case "min":
                  case "mins":
                  case "minute":
                  case "minutes":
                    this.ri += i;
                    break;
                  case "hour":
                  case "hours":
                    this.rh += i;
                    break;
                  case "day":
                  case "days":
                    this.rd += i;
                    break;
                  case "fortnight":
                  case "fortnights":
                  case "forthnight":
                  case "forthnights":
                    this.rd += 14 * i;
                    break;
                  case "week":
                  case "weeks":
                    this.rd += 7 * i;
                    break;
                  case "month":
                  case "months":
                    this.rm += i;
                    break;
                  case "year":
                  case "years":
                    this.ry += i;
                    break;
                  case "mon":
                  case "monday":
                  case "tue":
                  case "tuesday":
                  case "wed":
                  case "wednesday":
                  case "thu":
                  case "thursday":
                  case "fri":
                  case "friday":
                  case "sat":
                  case "saturday":
                  case "sun":
                  case "sunday":
                    this.resetTime(), this.weekday = A(n, 7), this.weekdayBehavior = 1, this.rd += 7 * (i > 0 ? i - 1 : i)
                }
              }
            },
            relative: {
              regex: RegExp("^([+-]*)[ \\t]*(\\d+)[ \\t]*(" + h + "|week)", "i"),
              name: "relative",
              callback: function(e, t, n, o) {
                var r = t.replace(/[^-]/g, "").length,
                  i = +n * Math.pow(-1, r);
                switch (o.toLowerCase()) {
                  case "sec":
                  case "secs":
                  case "second":
                  case "seconds":
                    this.rs += i;
                    break;
                  case "min":
                  case "mins":
                  case "minute":
                  case "minutes":
                    this.ri += i;
                    break;
                  case "hour":
                  case "hours":
                    this.rh += i;
                    break;
                  case "day":
                  case "days":
                    this.rd += i;
                    break;
                  case "fortnight":
                  case "fortnights":
                  case "forthnight":
                  case "forthnights":
                    this.rd += 14 * i;
                    break;
                  case "week":
                  case "weeks":
                    this.rd += 7 * i;
                    break;
                  case "month":
                  case "months":
                    this.rm += i;
                    break;
                  case "year":
                  case "years":
                    this.ry += i;
                    break;
                  case "mon":
                  case "monday":
                  case "tue":
                  case "tuesday":
                  case "wed":
                  case "wednesday":
                  case "thu":
                  case "thursday":
                  case "fri":
                  case "friday":
                  case "sat":
                  case "saturday":
                  case "sun":
                  case "sunday":
                    this.resetTime(), this.weekday = A(o, 7), this.weekdayBehavior = 1, this.rd += 7 * (i > 0 ? i - 1 : i)
                }
              }
            },
            dayText: {
              regex: RegExp("^(" + d + ")", "i"),
              name: "daytext",
              callback: function(e, t) {
                this.resetTime(), this.weekday = A(t, 0), 2 !== this.weekdayBehavior && (this.weekdayBehavior = 1)
              }
            },
            relativeTextWeek: {
              regex: RegExp("^(next|last|previous|this)[ \\t]+week", "i"),
              name: "relativetextweek",
              callback: function(e, t) {
                switch (this.weekdayBehavior = 2, t.toLowerCase()) {
                  case "this":
                    this.rd += 0;
                    break;
                  case "next":
                    this.rd += 7;
                    break;
                  case "last":
                  case "previous":
                    this.rd -= 7
                }
                isNaN(this.weekday) && (this.weekday = 1)
              }
            },
            monthFullOrMonthAbbr: {
              regex: RegExp("^(" + v + "|" + w + ")", "i"),
              name: "monthfull | monthabbr",
              callback: function(e, t) {
                return this.ymd(this.y, E(t), this.d)
              }
            },
            tzCorrection: {
              regex: RegExp("^" + _, "i"),
              name: "tzcorrection",
              callback: function(e) {
                return this.zone(N(e))
              }
            },
            ago: {
              regex: /^ago/i,
              name: "ago",
              callback: function() {
                this.ry = -this.ry, this.rm = -this.rm, this.rd = -this.rd, this.rh = -this.rh, this.ri = -this.ri, this.rs = -this.rs, this.rf = -this.rf
              }
            },
            year4: {
              regex: RegExp("^" + m),
              name: "year4",
              callback: function(e, t) {
                return this.y = +t, !0
              }
            },
            whitespace: {
              regex: /^[ .,\t]+/,
              name: "whitespace"
            },
            dateShortWithTimeLong: {
              regex: RegExp("^" + O + "t?" + r + "[:.]" + a + "[:.]" + p, "i"),
              name: "dateshortwithtimelong",
              callback: function(e, t, n, o, r, i) {
                return this.ymd(this.y, E(t), +n) && this.time(+o, +r, +i, 0)
              }
            },
            dateShortWithTimeLong12: {
              regex: RegExp("^" + O + s + "[:.]" + a + "[:.]" + l + "[ \\t]*" + o, "i"),
              name: "dateshortwithtimelong12",
              callback: function(e, t, n, o, r, i, s) {
                return this.ymd(this.y, E(t), +n) && this.time(j(+o, s), +r, +i, 0)
              }
            },
            dateShortWithTimeShort: {
              regex: RegExp("^" + O + "t?" + r + "[:.]" + a, "i"),
              name: "dateshortwithtimeshort",
              callback: function(e, t, n, o, r) {
                return this.ymd(this.y, E(t), +n) && this.time(+o, +r, 0, 0)
              }
            },
            dateShortWithTimeShort12: {
              regex: RegExp("^" + O + s + "[:.]" + c + "[ \\t]*" + o, "i"),
              name: "dateshortwithtimeshort12",
              callback: function(e, t, n, o, r, i) {
                return this.ymd(this.y, E(t), +n) && this.time(j(+o, i), +r, 0, 0)
              }
            }
          },
          P = {
            y: NaN,
            m: NaN,
            d: NaN,
            h: NaN,
            i: NaN,
            s: NaN,
            f: NaN,
            ry: 0,
            rm: 0,
            rd: 0,
            rh: 0,
            ri: 0,
            rs: 0,
            rf: 0,
            weekday: NaN,
            weekdayBehavior: 0,
            firstOrLastDayOfMonth: 0,
            z: NaN,
            dates: 0,
            times: 0,
            zones: 0,
            ymd: function(e, t, n) {
              return !(this.dates > 0 || (this.dates++, this.y = e, this.m = t, this.d = n, 0))
            },
            time: function(e, t, n, o) {
              return !(this.times > 0 || (this.times++, this.h = e, this.i = t, this.s = n, this.f = o, 0))
            },
            resetTime: function() {
              return this.h = 0, this.i = 0, this.s = 0, this.f = 0, this.times = 0, !0
            },
            zone: function(e) {
              return this.zones <= 1 && (this.zones++, this.z = e, !0)
            },
            toDate: function(e) {
              switch (this.dates && !this.times && (this.h = this.i = this.s = this.f = 0), isNaN(this.y) && (this.y = e.getFullYear()), isNaN(this.m) && (this.m = e.getMonth()), isNaN(this.d) && (this.d = e.getDate()), isNaN(this.h) && (this.h = e.getHours()), isNaN(this.i) && (this.i = e.getMinutes()), isNaN(this.s) && (this.s = e.getSeconds()), isNaN(this.f) && (this.f = e.getMilliseconds()), this.firstOrLastDayOfMonth) {
                case 1:
                  this.d = 1;
                  break;
                case -1:
                  this.d = 0, this.m += 1
              }
              if (!isNaN(this.weekday)) {
                var t = new Date(e.getTime());
                t.setFullYear(this.y, this.m, this.d), t.setHours(this.h, this.i, this.s, this.f);
                var n = t.getDay();
                if (2 === this.weekdayBehavior) 0 === n && 0 !== this.weekday && (this.weekday = -6), 0 === this.weekday && 0 !== n && (this.weekday = 7), this.d -= n, this.d += this.weekday;
                else {
                  var o = this.weekday - n;
                  (this.rd < 0 && o < 0 || this.rd >= 0 && o <= -this.weekdayBehavior) && (o += 7), this.weekday >= 0 ? this.d += o : this.d -= 7 - (Math.abs(this.weekday) - n), this.weekday = NaN
                }
              }
              this.y += this.ry, this.m += this.rm, this.d += this.rd, this.h += this.rh, this.i += this.ri, this.s += this.rs, this.f += this.rf, this.ry = this.rm = this.rd = 0, this.rh = this.ri = this.rs = this.rf = 0;
              var r = new Date(e.getTime());
              switch (r.setFullYear(this.y, this.m, this.d), r.setHours(this.h, this.i, this.s, this.f), this.firstOrLastDayOfMonth) {
                case 1:
                  r.setDate(1);
                  break;
                case -1:
                  r.setMonth(r.getMonth() + 1, 0)
              }
              return isNaN(this.z) || r.getTimezoneOffset() === this.z || (r.setUTCFullYear(r.getFullYear(), r.getMonth(), r.getDate()), r.setUTCHours(r.getHours(), r.getMinutes() + this.z, r.getSeconds(), r.getMilliseconds())), r
            }
          };
        e.exports = function(e, t) {
          null == t && (t = Math.floor(Date.now() / 1e3));
          for (var n = [C.yesterday, C.now, C.noon, C.midnightOrToday, C.tomorrow, C.timestamp, C.firstOrLastDay, C.backOrFrontOf, C.timeTiny12, C.timeShort12, C.timeLong12, C.mssqltime, C.timeShort24, C.timeLong24, C.iso8601long, C.gnuNoColon, C.iso8601noColon, C.americanShort, C.american, C.iso8601date4, C.iso8601dateSlash, C.dateSlash, C.gnuDateShortOrIso8601date2, C.gnuDateShorter, C.dateFull, C.pointedDate4, C.pointedDate2, C.dateNoDay, C.dateNoDayRev, C.dateTextual, C.dateNoYear, C.dateNoYearRev, C.dateNoColon, C.xmlRpc, C.xmlRpcNoColon, C.soap, C.wddx, C.exif, C.pgydotd, C.isoWeekDay, C.pgTextShort, C.pgTextReverse, C.clf, C.year4, C.ago, C.dayText, C.relativeTextWeek, C.relativeText, C.monthFullOrMonthAbbr, C.tzCorrection, C.dateShortWithTimeShort12, C.dateShortWithTimeLong12, C.dateShortWithTimeShort, C.dateShortWithTimeLong, C.relative, C.whitespace], o = Object.create(P); e.length;) {
            for (var r = null, i = null, s = 0, a = n.length; s < a; s++) {
              var c = n[s],
                p = e.match(c.regex);
              p && (!r || p[0].length > r[0].length) && (r = p, i = c)
            }
            if (!i || i.callback && !1 === i.callback.apply(o, r)) return !1;
            e = e.substr(r[0].length), i = null, r = null
          }
          return Math.floor(o.toDate(new Date(1e3 * t)) / 1e3)
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
          var n, o, r = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            i = /\\?(.?)/gi,
            s = function(e, t) {
              return o[e] ? o[e]() : t
            },
            a = function(e, t) {
              for (e = String(e); e.length < t;) e = "0" + e;
              return e
            };
          return o = {
              d: function() {
                return a(o.j(), 2)
              },
              D: function() {
                return o.l().slice(0, 3)
              },
              j: function() {
                return n.getDate()
              },
              l: function() {
                return r[o.w()] + "day"
              },
              N: function() {
                return o.w() || 7
              },
              S: function() {
                var e = o.j(),
                  t = e % 10;
                return t <= 3 && 1 === parseInt(e % 100 / 10, 10) && (t = 0), ["st", "nd", "rd"][t - 1] || "th"
              },
              w: function() {
                return n.getDay()
              },
              z: function() {
                var e = new Date(o.Y(), o.n() - 1, o.j()),
                  t = new Date(o.Y(), 0, 1);
                return Math.round((e - t) / 864e5)
              },
              W: function() {
                var e = new Date(o.Y(), o.n() - 1, o.j() - o.N() + 3),
                  t = new Date(e.getFullYear(), 0, 4);
                return a(1 + Math.round((e - t) / 864e5 / 7), 2)
              },
              F: function() {
                return r[6 + o.n()]
              },
              m: function() {
                return a(o.n(), 2)
              },
              M: function() {
                return o.F().slice(0, 3)
              },
              n: function() {
                return n.getMonth() + 1
              },
              t: function() {
                return new Date(o.Y(), o.n(), 0).getDate()
              },
              L: function() {
                var e = o.Y();
                return e % 4 == 0 & e % 100 != 0 | e % 400 == 0
              },
              o: function() {
                var e = o.n(),
                  t = o.W();
                return o.Y() + (12 === e && t < 9 ? 1 : 1 === e && t > 9 ? -1 : 0)
              },
              Y: function() {
                return n.getFullYear()
              },
              y: function() {
                return o.Y().toString().slice(-2)
              },
              a: function() {
                return n.getHours() > 11 ? "pm" : "am"
              },
              A: function() {
                return o.a().toUpperCase()
              },
              B: function() {
                var e = 3600 * n.getUTCHours(),
                  t = 60 * n.getUTCMinutes(),
                  o = n.getUTCSeconds();
                return a(Math.floor((e + t + o + 3600) / 86.4) % 1e3, 3)
              },
              g: function() {
                return o.G() % 12 || 12
              },
              G: function() {
                return n.getHours()
              },
              h: function() {
                return a(o.g(), 2)
              },
              H: function() {
                return a(o.G(), 2)
              },
              i: function() {
                return a(n.getMinutes(), 2)
              },
              s: function() {
                return a(n.getSeconds(), 2)
              },
              u: function() {
                return a(1e3 * n.getMilliseconds(), 6)
              },
              e: function() {
                throw new Error("Not supported (see source code of date() for timezone on how to add support)")
              },
              I: function() {
                return new Date(o.Y(), 0) - Date.UTC(o.Y(), 0) != new Date(o.Y(), 6) - Date.UTC(o.Y(), 6) ? 1 : 0
              },
              O: function() {
                var e = n.getTimezoneOffset(),
                  t = Math.abs(e);
                return (e > 0 ? "-" : "+") + a(100 * Math.floor(t / 60) + t % 60, 4)
              },
              P: function() {
                var e = o.O();
                return e.substr(0, 3) + ":" + e.substr(3, 2)
              },
              T: function() {
                return "UTC"
              },
              Z: function() {
                return 60 * -n.getTimezoneOffset()
              },
              c: function() {
                return "Y-m-d\\TH:i:sP".replace(i, s)
              },
              r: function() {
                return "D, d M Y H:i:s O".replace(i, s)
              },
              U: function() {
                return n / 1e3 | 0
              }
            },
            function(e, t) {
              return n = void 0 === t ? new Date : t instanceof Date ? new Date(t) : new Date(1e3 * t), e.replace(i, s)
            }(e, t)
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return !1 !== e && 0 !== e && 0 !== e && "" !== e && "0" !== e && (!Array.isArray(e) || 0 !== e.length) && null != e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          e.Templates.registerLoader("ajax", (function(t, n, o, r) {
            var i, s = n.precompiled,
              a = this.parsers[n.parser] || this.parser.twig;
            if ("undefined" == typeof XMLHttpRequest) throw new e.Error('Unsupported platform: Unable to do ajax requests because there is no "XMLHTTPRequest" implementation');
            var c = new XMLHttpRequest;
            return c.onreadystatechange = function() {
              var p = null;
              4 === c.readyState && (200 === c.status || window.cordova && 0 === c.status ? (e.log.debug("Got template ", c.responseText), p = !0 === s ? JSON.parse(c.responseText) : c.responseText, n.url = t, n.data = p, i = a.call(this, n), "function" == typeof o && o(i)) : "function" == typeof r && r(c))
            }, c.open("GET", t, Boolean(n.async)), c.overrideMimeType("text/plain"), c.send(), !!n.async || i
          }))
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          var t, o;
          try {
            t = n(33), o = n(6)
          } catch (e) {
            console.warn("Missing fs and path modules. " + e)
          }
          e.Templates.registerLoader("fs", (function(n, r, i, s) {
            var a, c, p = r.precompiled,
              l = this.parsers[r.parser] || this.parser.twig;
            if (!t || !o) throw new e.Error('Unsupported platform: Unable to load from file because there is no "fs" or "path" implementation');
            var u = function(e, t) {
              e ? "function" == typeof s && s(e) : (!0 === p && (t = JSON.parse(t)), r.data = t, r.path = r.path || n, a = l.call(this, r), "function" == typeof i && i(a))
            };
            if (r.path = r.path || n, r.async) return t.stat(r.path, (function(n, o) {
              !n && o.isFile() ? t.readFile(r.path, "utf8", u) : "function" == typeof s && s(new e.Error("Unable to find template file " + r.path))
            })), !0;
            try {
              if (!t.statSync(r.path).isFile()) throw new e.Error("Unable to find template file " + r.path)
            } catch (t) {
              throw new e.Error("Unable to find template file " + r.path + ". " + t)
            }
            return c = t.readFileSync(r.path, "utf8"), u(void 0, c), a
          }))
        }
      }, function(e, t) {
        e.exports = n(7)
      }, function(e, t, n) {
        "use strict";
        var o = n(0)(n(2));

        function r(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (e) {
                  if ("string" == typeof e) return i(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
              }(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var o = 0,
                r = function() {};
              return {
                s: r,
                n: function() {
                  return o >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[o++]
                  }
                },
                e: function(e) {
                  throw e
                },
                f: r
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var s, a = !0,
            c = !1;
          return {
            s: function() {
              n = e[Symbol.iterator]()
            },
            n: function() {
              var e = n.next();
              return a = e.done, e
            },
            e: function(e) {
              c = !0, s = e
            },
            f: function() {
              try {
                a || null == n.return || n.return()
              } finally {
                if (c) throw s
              }
            }
          }
        }

        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
          return o
        }

        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function(t) {
              (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        e.exports = function(e) {
          for (e.logic = {}, e.logic.type = {
              if_: "Twig.logic.type.if",
              endif: "Twig.logic.type.endif",
              for_: "Twig.logic.type.for",
              endfor: "Twig.logic.type.endfor",
              else_: "Twig.logic.type.else",
              elseif: "Twig.logic.type.elseif",
              set: "Twig.logic.type.set",
              setcapture: "Twig.logic.type.setcapture",
              endset: "Twig.logic.type.endset",
              filter: "Twig.logic.type.filter",
              endfilter: "Twig.logic.type.endfilter",
              apply: "Twig.logic.type.apply",
              endapply: "Twig.logic.type.endapply",
              do: "Twig.logic.type.do",
              shortblock: "Twig.logic.type.shortblock",
              block: "Twig.logic.type.block",
              endblock: "Twig.logic.type.endblock",
              extends_: "Twig.logic.type.extends",
              use: "Twig.logic.type.use",
              include: "Twig.logic.type.include",
              spaceless: "Twig.logic.type.spaceless",
              endspaceless: "Twig.logic.type.endspaceless",
              macro: "Twig.logic.type.macro",
              endmacro: "Twig.logic.type.endmacro",
              import_: "Twig.logic.type.import",
              from: "Twig.logic.type.from",
              embed: "Twig.logic.type.embed",
              endembed: "Twig.logic.type.endembed",
              with: "Twig.logic.type.with",
              endwith: "Twig.logic.type.endwith",
              deprecated: "Twig.logic.type.deprecated"
            }, e.logic.definitions = [{
              type: e.logic.type.if_,
              regex: /^if\s?([\s\S]+)$/,
              next: [e.logic.type.else_, e.logic.type.elseif, e.logic.type.endif],
              open: !0,
              compile: function(t) {
                var n = t.match[1];
                return t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, delete t.match, t
              },
              parse: function(t, n, o) {
                var r = this;
                return e.expression.parseAsync.call(r, t.stack, n).then((function(i) {
                  return o = !0, e.lib.boolval(i) ? (o = !1, r.parseAsync(t.output, n)) : ""
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.elseif,
              regex: /^elseif\s?([^\s].*)$/,
              next: [e.logic.type.else_, e.logic.type.elseif, e.logic.type.endif],
              open: !1,
              compile: function(t) {
                var n = t.match[1];
                return t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, delete t.match, t
              },
              parse: function(t, n, o) {
                var r = this;
                return e.expression.parseAsync.call(r, t.stack, n).then((function(i) {
                  return o && e.lib.boolval(i) ? (o = !1, r.parseAsync(t.output, n)) : ""
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.else_,
              regex: /^else$/,
              next: [e.logic.type.endif, e.logic.type.endfor],
              open: !1,
              parse: function(t, n, o) {
                var r = e.Promise.resolve("");
                return o && (r = this.parseAsync(t.output, n)), r.then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.endif,
              regex: /^endif$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.for_,
              regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,
              next: [e.logic.type.else_, e.logic.type.endfor],
              open: !0,
              compile: function(t) {
                var n = t.match[1],
                  o = t.match[2],
                  r = t.match[3],
                  i = null;
                if (t.keyVar = null, t.valueVar = null, n.includes(",")) {
                  if (2 !== (i = n.split(",")).length) throw new e.Error("Invalid expression in for loop: " + n);
                  t.keyVar = i[0].trim(), t.valueVar = i[1].trim()
                } else t.valueVar = n.trim();
                return t.expression = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: o
                }).stack, r && (t.conditional = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: r
                }).stack), delete t.match, t
              },
              parse: function(t, n, o) {
                var r, i, s = [],
                  c = 0,
                  p = this,
                  l = t.conditional,
                  u = function(o, i) {
                    var u = a({}, n);
                    return u[t.valueVar] = i, t.keyVar && (u[t.keyVar] = o), u.loop = function(e, t) {
                      var o = void 0 !== l;
                      return {
                        index: e + 1,
                        index0: e,
                        revindex: o ? void 0 : t - e,
                        revindex0: o ? void 0 : t - e - 1,
                        first: 0 === e,
                        last: o ? void 0 : e === t - 1,
                        length: o ? void 0 : t,
                        parent: n
                      }
                    }(c, r), (void 0 === l ? e.Promise.resolve(!0) : e.expression.parseAsync.call(p, l, u)).then((function(e) {
                      if (e) return p.parseAsync(t.output, u).then((function(e) {
                        s.push(e), c += 1
                      }))
                    })).then((function() {
                      delete u.loop, delete u[t.valueVar], delete u[t.keyVar], e.merge(n, u, !0)
                    }))
                  };
                return e.expression.parseAsync.call(p, t.expression, n).then((function(t) {
                  return Array.isArray(t) ? (r = t.length, e.async.forEach(t, (function(e) {
                    return u(c, e)
                  }))) : e.lib.is("Object", t) ? (i = void 0 === t._keys ? Object.keys(t) : t._keys, r = i.length, e.async.forEach(i, (function(e) {
                    if ("_keys" !== e) return u(e, t[e])
                  }))) : void 0
                })).then((function() {
                  return {
                    chain: 0 === s.length,
                    context: n,
                    output: e.output.call(p.template, s)
                  }
                }))
              }
            }, {
              type: e.logic.type.endfor,
              regex: /^endfor$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.set,
              regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match[1].trim(),
                  o = t.match[2],
                  r = e.expression.compile.call(this, {
                    type: e.expression.type.expression,
                    value: o
                  }).stack;
                return t.key = n, t.expression = r, delete t.match, t
              },
              parse: function(t, n, o) {
                var r = t.key;
                return e.expression.parseAsync.call(this, t.expression, n).then((function(e) {
                  return e === n && (e = a({}, e)), n[r] = e, {
                    chain: o,
                    context: n
                  }
                }))
              }
            }, {
              type: e.logic.type.setcapture,
              regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
              next: [e.logic.type.endset],
              open: !0,
              compile: function(e) {
                var t = e.match[1].trim();
                return e.key = t, delete e.match, e
              },
              parse: function(e, t, n) {
                var o = this,
                  r = e.key;
                return o.parseAsync(e.output, t).then((function(e) {
                  return o.context[r] = e, t[r] = e, {
                    chain: n,
                    context: t
                  }
                }))
              }
            }, {
              type: e.logic.type.endset,
              regex: /^endset$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.filter,
              regex: /^filter\s+(.+)$/,
              next: [e.logic.type.endfilter],
              open: !0,
              compile: function(t) {
                var n = "|" + t.match[1].trim();
                return t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, delete t.match, t
              },
              parse: function(t, n, o) {
                var r = this;
                return r.parseAsync(t.output, n).then((function(o) {
                  var i = [{
                    type: e.expression.type.string,
                    value: o
                  }].concat(t.stack);
                  return e.expression.parseAsync.call(r, i, n)
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.endfilter,
              regex: /^endfilter$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.apply,
              regex: /^apply\s+(.+)$/,
              next: [e.logic.type.endapply],
              open: !0,
              compile: function(t) {
                var n = "|" + t.match[1].trim();
                return t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, delete t.match, t
              },
              parse: function(t, n, o) {
                var r = this;
                return r.parseAsync(t.output, n).then((function(o) {
                  var i = [{
                    type: e.expression.type.string,
                    value: o
                  }].concat(t.stack);
                  return e.expression.parseAsync.call(r, i, n)
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.endapply,
              regex: /^endapply$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.do,
              regex: /^do\s+([\S\s]+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match[1],
                  o = e.expression.compile.call(this, {
                    type: e.expression.type.expression,
                    value: n
                  }).stack;
                return t.expression = o, delete t.match, t
              },
              parse: function(t, n, o) {
                return e.expression.parseAsync.call(this, t.expression, n).then((function() {
                  return {
                    chain: o,
                    context: n
                  }
                }))
              }
            }, {
              type: e.logic.type.block,
              regex: /^block\s+(\w+)$/,
              next: [e.logic.type.endblock],
              open: !0,
              compile: function(e) {
                return e.blockName = e.match[1].trim(), delete e.match, e
              },
              parse: function(t, n, o) {
                var r = e.Promise.resolve();
                return this.template.blocks.defined[t.blockName] = new e.Block(this.template, t), (null === this.template.parentTemplate || this.template.parentTemplate instanceof e.Template) && (r = this.getBlock(t.blockName).render(this, n)), r.then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.shortblock,
              regex: /^block\s+(\w+)\s+(.+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                return t.expression = t.match[2].trim(), t.output = e.expression.compile({
                  type: e.expression.type.expression,
                  value: t.expression
                }).stack, e.logic.handler[e.logic.type.block].compile.apply(this, [t])
              },
              parse: function() {
                for (var t = this, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return e.logic.handler[e.logic.type.block].parse.apply(t, o)
              }
            }, {
              type: e.logic.type.endblock,
              regex: /^endblock(?:\s+(\w+))?$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.extends_,
              regex: /^extends\s+(.+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match[1].trim();
                return delete t.match, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, t
              },
              parse: function(t, n, o) {
                var r = this;
                return e.expression.parseAsync.call(r, t.stack, n).then((function(e) {
                  if (Array.isArray(e)) {
                    var t = e.reverse().reduce((function(e, t) {
                      try {
                        return {
                          render: r.template.importFile(t),
                          fileName: t
                        }
                      } catch (t) {
                        return e
                      }
                    }), {
                      render: null,
                      fileName: null
                    });
                    null !== t.fileName && (r.template.parentTemplate = t.fileName)
                  } else r.template.parentTemplate = e;
                  return {
                    chain: o,
                    output: ""
                  }
                }))
              }
            }, {
              type: e.logic.type.use,
              regex: /^use\s+(.+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match[1].trim();
                return delete t.match, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, t
              },
              parse: function(t, n, o) {
                var r = this;
                return e.expression.parseAsync.call(r, t.stack, n).then((function(t) {
                  var n = r.template.importFile(t),
                    o = new e.ParseState(n);
                  return o.parseAsync(n.tokens).then((function() {
                    r.template.blocks.imported = a(a({}, r.template.blocks.imported), o.getBlocks())
                  }))
                })).then((function() {
                  return {
                    chain: o,
                    output: ""
                  }
                }))
              }
            }, {
              type: e.logic.type.include,
              regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match,
                  o = n[1].trim(),
                  r = void 0 !== n[2],
                  i = n[3],
                  s = void 0 !== n[4] && n[4].length;
                return delete t.match, t.only = s, t.ignoreMissing = r, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: o
                }).stack, void 0 !== i && (t.withStack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: i.trim()
                }).stack), t
              },
              parse: function(t, n, o) {
                var r = t.only ? {} : a({}, n),
                  i = t.ignoreMissing,
                  s = this,
                  c = {
                    chain: o,
                    output: ""
                  };
                return (void 0 === t.withStack ? e.Promise.resolve() : e.expression.parseAsync.call(s, t.withStack, n).then((function(e) {
                  r = a(a({}, r), e)
                }))).then((function() {
                  return e.expression.parseAsync.call(s, t.stack, n)
                })).then((function(t) {
                  var n = (Array.isArray(t) ? t : [t]).reduce((function(t, n) {
                    if (null === t.render) {
                      if (n instanceof e.Template) return {
                        render: n.renderAsync(r, {
                          isInclude: !0
                        }),
                        lastError: null
                      };
                      try {
                        return {
                          render: s.template.importFile(n).renderAsync(r, {
                            isInclude: !0
                          }),
                          lastError: null
                        }
                      } catch (e) {
                        return {
                          render: null,
                          lastError: e
                        }
                      }
                    }
                    return t
                  }), {
                    render: null,
                    lastError: null
                  });
                  if (null !== n.render) return n.render;
                  if (null === n.render && i) return "";
                  throw n.lastError
                })).then((function(e) {
                  return "" !== e && (c.output = e), c
                }))
              }
            }, {
              type: e.logic.type.spaceless,
              regex: /^spaceless$/,
              next: [e.logic.type.endspaceless],
              open: !0,
              parse: function(t, n, o) {
                return this.parseAsync(t.output, n).then((function(t) {
                  var n = t.replace(/>\s+</g, "><").trim();
                  return n = new e.Markup(n), {
                    chain: o,
                    output: n
                  }
                }))
              }
            }, {
              type: e.logic.type.endspaceless,
              regex: /^endspaceless$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.macro,
              regex: /^macro\s+(\w+)\s*\(\s*((?:\w+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,
              next: [e.logic.type.endmacro],
              open: !0,
              compile: function(t) {
                var n = t.match[1],
                  o = t.match[2].split(/\s*,\s*/),
                  r = o.map((function(e) {
                    return e.split(/\s*=\s*/)[0]
                  })),
                  i = r.length;
                if (i > 1)
                  for (var s = {}, a = 0; a < i; a++) {
                    var c = r[a];
                    if (s[c]) throw new e.Error("Duplicate arguments for parameter: " + c);
                    s[c] = 1
                  }
                return t.macroName = n, t.parameters = r, t.defaults = o.reduce((function(t, n) {
                  var o = n.split(/\s*=\s*/),
                    r = o[0],
                    i = o[1];
                  return t[r] = i ? e.expression.compile.call(this, {
                    type: e.expression.type.expression,
                    value: i
                  }).stack : void 0, t
                }), {}), delete t.match, t
              },
              parse: function(t, n, o) {
                var r = this;
                return r.macros[t.macroName] = function() {
                  for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                  var c = a(a({}, n), {}, {
                    _self: r.macros
                  });
                  return e.async.forEach(t.parameters, (function(o, r) {
                    return void 0 !== i[r] ? (c[o] = i[r], !0) : void 0 !== t.defaults[o] ? e.expression.parseAsync.call(this, t.defaults[o], n).then((function(t) {
                      return c[o] = t, e.Promise.resolve()
                    })) : (c[o] = void 0, !0)
                  })).then((function() {
                    return r.parseAsync(t.output, c)
                  }))
                }, {
                  chain: o,
                  output: ""
                }
              }
            }, {
              type: e.logic.type.endmacro,
              regex: /^endmacro$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.import_,
              regex: /^import\s+(.+)\s+as\s+(\w+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n = t.match[1].trim(),
                  o = t.match[2].trim();
                return delete t.match, t.expression = n, t.contextName = o, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: n
                }).stack, t
              },
              parse: function(t, n, o) {
                var r = this,
                  i = {
                    chain: o,
                    output: ""
                  };
                return "_self" === t.expression ? (n[t.contextName] = r.macros, i) : e.expression.parseAsync.call(r, t.stack, n).then((function(e) {
                  return r.template.importFile(e || t.expression)
                })).then((function(o) {
                  var r = new e.ParseState(o);
                  return r.parseAsync(o.tokens).then((function() {
                    return n[t.contextName] = r.macros, i
                  }))
                }))
              }
            }, {
              type: e.logic.type.from,
              regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
              next: [],
              open: !0,
              compile: function(t) {
                var n, o = t.match[1].trim(),
                  i = {},
                  s = r(t.match[2].trim().split(/\s*,\s*/));
                try {
                  for (s.s(); !(n = s.n()).done;) {
                    var a = n.value,
                      c = a.match(/^(\w+)\s+as\s+(\w+)$/);
                    c ? i[c[1].trim()] = c[2].trim() : a.match(/^(\w+)$/) && (i[a] = a)
                  }
                } catch (e) {
                  s.e(e)
                } finally {
                  s.f()
                }
                return delete t.match, t.expression = o, t.macroNames = i, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: o
                }).stack, t
              },
              parse: function(t, n, o) {
                var r = this;
                return ("_self" === t.expression ? e.Promise.resolve(r.macros) : e.expression.parseAsync.call(r, t.stack, n).then((function(e) {
                  return r.template.importFile(e || t.expression)
                })).then((function(t) {
                  var n = new e.ParseState(t);
                  return n.parseAsync(t.tokens).then((function() {
                    return n.macros
                  }))
                }))).then((function(e) {
                  for (var r in t.macroNames) void 0 !== e[r] && (n[t.macroNames[r]] = e[r]);
                  return {
                    chain: o,
                    output: ""
                  }
                }))
              }
            }, {
              type: e.logic.type.embed,
              regex: /^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,
              next: [e.logic.type.endembed],
              open: !0,
              compile: function(t) {
                var n = t.match,
                  o = n[1].trim(),
                  r = void 0 !== n[2],
                  i = n[3],
                  s = void 0 !== n[4] && n[4].length;
                return delete t.match, t.only = s, t.ignoreMissing = r, t.stack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: o
                }).stack, void 0 !== i && (t.withStack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: i.trim()
                }).stack), t
              },
              parse: function(t, n, o) {
                var r = {},
                  i = e.Promise.resolve(),
                  s = this;
                return t.only || (r = a({}, n)), void 0 !== t.withStack && (i = e.expression.parseAsync.call(s, t.withStack, n).then((function(e) {
                  r = a(a({}, r), e)
                }))), i.then((function() {
                  return e.expression.parseAsync.call(s, t.stack, r)
                })).then((function(n) {
                  var o = new e.Template({
                    data: t.output,
                    id: s.template.id,
                    base: s.template.base,
                    path: s.template.path,
                    url: s.template.url,
                    name: s.template.name,
                    method: s.template.method,
                    options: s.template.options
                  });
                  try {
                    o.importFile(n)
                  } catch (e) {
                    if (t.ignoreMissing) return "";
                    throw s = null, e
                  }
                  return o.parentTemplate = n, o.renderAsync(r, {
                    isInclude: !0
                  })
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.endembed,
              regex: /^endembed$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.with,
              regex: /^(?:with\s+([\S\s]+?))(?:\s|$)(only)?$/,
              next: [e.logic.type.endwith],
              open: !0,
              compile: function(t) {
                var n = t.match,
                  o = n[1],
                  r = void 0 !== n[2] && n[2].length;
                return delete t.match, t.only = r, void 0 !== o && (t.withStack = e.expression.compile.call(this, {
                  type: e.expression.type.expression,
                  value: o.trim()
                }).stack), t
              },
              parse: function(t, n, o) {
                var r, i = {},
                  s = this,
                  c = e.Promise.resolve();
                return t.only || (i = a({}, n)), void 0 !== t.withStack && (c = e.expression.parseAsync.call(s, t.withStack, n).then((function(e) {
                  for (r in e) Object.hasOwnProperty.call(e, r) && (i[r] = e[r])
                }))), c.then((function() {
                  return s.parseAsync(t.output, i)
                })).then((function(e) {
                  return {
                    chain: o,
                    output: e
                  }
                }))
              }
            }, {
              type: e.logic.type.endwith,
              regex: /^endwith$/,
              next: [],
              open: !1
            }, {
              type: e.logic.type.deprecated,
              regex: /^deprecated\s+(.+)$/,
              next: [],
              open: !0,
              compile: function(e) {
                return console.warn("Deprecation notice: " + e.match[1]), e
              },
              parse: function() {
                return {}
              }
            }], e.logic.handler = {}, e.logic.extendType = function(t, n) {
              n = n || "Twig.logic.type" + t, e.logic.type[t] = n
            }, e.logic.extend = function(t) {
              if (!t.type) throw new e.Error("Unable to extend logic definition. No type provided for " + t);
              e.logic.extendType(t.type), e.logic.handler[t.type] = t
            }; e.logic.definitions.length > 0;) e.logic.extend(e.logic.definitions.shift());
          return e.logic.compile = function(t) {
            var n = t.value.trim(),
              o = e.logic.tokenize.call(this, n),
              r = e.logic.handler[o.type];
            return r.compile && (o = r.compile.call(this, o), e.log.trace("Twig.logic.compile: ", "Compiled logic token to ", o)), o
          }, e.logic.tokenize = function(t) {
            var n = null,
              o = null,
              r = null,
              i = null,
              s = null,
              a = null,
              c = null;
            for (n in t = t.trim(), e.logic.handler)
              if (Object.hasOwnProperty.call(e.logic.handler, n))
                for (o = e.logic.handler[n].type, i = r = e.logic.handler[n].regex, Array.isArray(r) || (i = [r]), s = i.length, a = 0; a < s; a++)
                  if (null !== (c = i[a].exec(t))) return e.log.trace("Twig.logic.tokenize: ", "Matched a ", o, " regular expression of ", c), {
                    type: o,
                    match: c
                  };
            throw new e.Error("Unable to parse '" + t.trim() + "'")
          }, e.logic.parse = function(t, n, o, r) {
            return e.async.potentiallyAsync(this, r, (function() {
              e.log.debug("Twig.logic.parse: ", "Parsing logic token ", t);
              var r, i = e.logic.handler[t.type],
                s = this;
              return i.parse ? (s.nestingStack.unshift(t), r = i.parse.call(s, t, n || {}, o), e.isPromise(r) ? r = r.then((function(e) {
                return s.nestingStack.shift(), e
              })) : s.nestingStack.shift(), r) : ""
            }))
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          e.Templates.registerParser("source", (function(e) {
            return e.data || ""
          }))
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          e.Templates.registerParser("twig", (function(t) {
            return new e.Template(t)
          }))
        }
      }, function(e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        e.exports = function(e) {
          return e.path = {}, e.path.parsePath = function(t, n) {
            var r = null,
              i = t.options.namespaces,
              s = n || "";
            if (i && "object" === (0, o.default)(i))
              for (r in i)
                if (s.includes(r)) {
                  var a = new RegExp("^" + r + "::"),
                    c = new RegExp("^@" + r + "/"),
                    p = i[r].replace(/([^/])$/, "$1/");
                  if (a.test(s)) return s = s.replace(a, p);
                  if (c.test(s)) return s = s.replace(c, p)
                } return e.path.relativePath(t, s)
          }, e.path.relativePath = function(t, o) {
            var r, i, s, a = "/",
              c = [],
              p = o || "";
            if (t.url) r = void 0 === t.base ? t.url : t.base.replace(/([^/])$/, "$1/");
            else if (t.path) {
              var l = n(6),
                u = l.sep || a,
                d = new RegExp("^\\.{1,2}" + u.replace("\\", "\\\\"));
              p = p.replace(/\//g, u), void 0 !== t.base && null === p.match(d) ? (p = p.replace(t.base, ""), r = t.base + u) : r = l.normalize(t.path), r = r.replace(u + u, u), a = u
            } else {
              if (!t.name && !t.id || !t.method || "fs" === t.method || "ajax" === t.method) throw new e.Error("Cannot extend an inline template.");
              r = t.base || t.name || t.id
            }
            for ((i = r.split(a)).pop(), i = i.concat(p.split(a)); i.length > 0;) "." === (s = i.shift()) || (".." === s && c.length > 0 && ".." !== c[c.length - 1] ? c.pop() : c.push(s));
            return c.join(a)
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return e.tests = {
            empty: function(e) {
              if (null == e) return !0;
              if ("number" == typeof e) return !1;
              if (e.length > 0) return !1;
              for (var t in e)
                if (Object.hasOwnProperty.call(e, t)) return !1;
              return !0
            },
            odd: function(e) {
              return e % 2 == 1
            },
            even: function(e) {
              return e % 2 == 0
            },
            divisibleby: function(e, t) {
              return e % t[0] == 0
            },
            defined: function(e) {
              return void 0 !== e
            },
            none: function(e) {
              return null === e
            },
            null: function(e) {
              return this.none(e)
            },
            "same as": function(e, t) {
              return e === t[0]
            },
            sameas: function(t, n) {
              return console.warn("`sameas` is deprecated use `same as`"), e.tests["same as"](t, n)
            },
            iterable: function(t) {
              return t && (e.lib.is("Array", t) || e.lib.is("Object", t))
            }
          }, e.test = function(t, n, o) {
            if (!e.tests[t]) throw e.Error("Test " + t + " is not defined.");
            return e.tests[t](n, o)
          }, e.test.extend = function(t, n) {
            e.tests[t] = n
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return e.ParseState.prototype.parseAsync = function(e, t) {
            return this.parse(e, t, !0)
          }, e.expression.parseAsync = function(t, n, o) {
            return e.expression.parse.call(this, t, n, o, !0)
          }, e.logic.parseAsync = function(t, n, o) {
            return e.logic.parse.call(this, t, n, o, !0)
          }, e.Template.prototype.renderAsync = function(e, t) {
            return this.render(e, t, !0)
          }, e.async = {}, e.isPromise = function(e) {
            return e && e.then && "function" == typeof e.then
          }, e.async.potentiallyAsync = function(t, n, o) {
            return n ? e.Promise.resolve(o.call(t)) : function(t, n, o) {
              var r = o.call(t),
                i = null,
                s = !0;
              if (!e.isPromise(r)) return r;
              if (r.then((function(e) {
                  r = e, s = !1
                })).catch((function(e) {
                  i = e
                })), null !== i) throw i;
              if (s) throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");
              return r
            }(t, 0, o)
          }, e.Thenable = function(e, t, n) {
            this.then = e, this._value = n ? t : null, this._state = n || 0
          }, e.Thenable.prototype.catch = function(e) {
            return 1 === this._state ? this : this.then(null, e)
          }, e.Thenable.resolvedThen = function(t) {
            try {
              return e.Promise.resolve(t(this._value))
            } catch (t) {
              return e.Promise.reject(t)
            }
          }, e.Thenable.rejectedThen = function(t, n) {
            if (!n || "function" != typeof n) return this;
            var o, r = this._value;
            try {
              o = n(r)
            } catch (t) {
              o = e.Promise.reject(t)
            }
            return e.Promise.resolve(o)
          }, e.Promise = function(t) {
            var n = 0,
              o = null,
              r = function(e, t) {
                n = e, o = t
              };
            return function(e, t, n) {
              try {
                e(t, n)
              } catch (e) {
                n(e)
              }
            }(t, (function(e) {
              r(1, e)
            }), (function(e) {
              r(2, e)
            })), 1 === n ? e.Promise.resolve(o) : 2 === n ? e.Promise.reject(o) : (r = new e.FullPromise).promise
          }, e.FullPromise = function() {
            var t = null;

            function n(e) {
              e(s._value)
            }

            function o(e, t) {
              t(s._value)
            }
            var r = function(e, n) {
              t = function(e, t, n) {
                var o = [t, n, -2];
                return e ? -2 === e[2] ? e = [e, o] : e.push(o) : e = o, e
              }(t, e, n)
            };

            function i(e, i) {
              if (!s._state && (s._value = i, s._state = e, r = 1 === e ? n : o, t)) {
                if (-2 === t[2]) return r(t[0], t[1]), void(t = null);
                t.forEach((function(e) {
                  r(e[0], e[1])
                })), t = null
              }
            }
            var s = new e.Thenable((function(t, n) {
              var o = "function" == typeof t;
              if (1 === s._state && !o) return e.Promise.resolve(s._value);
              if (1 === s._state) try {
                return e.Promise.resolve(t(s._value))
              } catch (t) {
                return e.Promise.reject(t)
              }
              var i = "function" == typeof n;
              return new e.Promise((function(e, s) {
                r(o ? function(n) {
                  try {
                    e(t(n))
                  } catch (e) {
                    s(e)
                  }
                } : e, i ? function(t) {
                  try {
                    e(n(t))
                  } catch (e) {
                    s(e)
                  }
                } : s)
              }))
            }));
            return i.promise = s, i
          }, e.Promise.defaultResolved = new e.Thenable(e.Thenable.resolvedThen, void 0, 1), e.Promise.emptyStringResolved = new e.Thenable(e.Thenable.resolvedThen, "", 1), e.Promise.resolve = function(t) {
            return 0 === arguments.length || void 0 === t ? e.Promise.defaultResolved : e.isPromise(t) ? t : "" === t ? e.Promise.emptyStringResolved : new e.Thenable(e.Thenable.resolvedThen, t, 1)
          }, e.Promise.reject = function(t) {
            return new e.Thenable(e.Thenable.rejectedThen, t, 2)
          }, e.Promise.all = function(t) {
            var n = new Array(t.length);
            return e.async.forEach(t, (function(t, o) {
              if (e.isPromise(t)) {
                if (1 !== t._state) return t.then((function(e) {
                  n[o] = e
                }));
                n[o] = t._value
              } else n[o] = t
            })).then((function() {
              return n
            }))
          }, e.async.forEach = function(t, n) {
            var o = t ? t.length : 0,
              r = 0;
            return function i() {
              var s = null;
              do {
                if (r === o) return e.Promise.resolve();
                s = n(t[r], r), r++
              } while (!s || !e.isPromise(s) || 1 === s._state);
              return s.then(i)
            }()
          }, e
        }
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
          return e.exports = {
            VERSION: e.VERSION
          }, e.exports.twig = function(t) {
            var n = t.id,
              o = {
                strictVariables: t.strict_variables || !1,
                autoescape: null !== t.autoescape && t.autoescape || !1,
                allowInlineIncludes: t.allowInlineIncludes || !1,
                rethrow: t.rethrow || !1,
                namespaces: t.namespaces
              };
            if (e.cache && n && e.validateId(n), void 0 !== t.debug && (e.debug = t.debug), void 0 !== t.trace && (e.trace = t.trace), void 0 !== t.data) return e.Templates.parsers.twig({
              data: t.data,
              path: Object.hasOwnProperty.call(t, "path") ? t.path : void 0,
              module: t.module,
              id: n,
              options: o
            });
            if (void 0 !== t.ref) {
              if (void 0 !== t.id) throw new e.Error("Both ref and id cannot be set on a twig.js template.");
              return e.Templates.load(t.ref)
            }
            if (void 0 !== t.method) {
              if (!e.Templates.isRegisteredLoader(t.method)) throw new e.Error('Loader for "' + t.method + '" is not defined.');
              return e.Templates.loadRemote(t.name || t.href || t.path || n || void 0, {
                id: n,
                method: t.method,
                parser: t.parser || "twig",
                base: t.base,
                module: t.module,
                precompiled: t.precompiled,
                async: t.async,
                options: o
              }, t.load, t.error)
            }
            return void 0 !== t.href ? e.Templates.loadRemote(t.href, {
              id: n,
              method: "ajax",
              parser: t.parser || "twig",
              base: t.base,
              module: t.module,
              precompiled: t.precompiled,
              async: t.async,
              options: o
            }, t.load, t.error) : void 0 !== t.path ? e.Templates.loadRemote(t.path, {
              id: n,
              method: "fs",
              parser: t.parser || "twig",
              base: t.base,
              module: t.module,
              precompiled: t.precompiled,
              async: t.async,
              options: o
            }, t.load, t.error) : void 0
          }, e.exports.extendFilter = function(t, n) {
            e.filter.extend(t, n)
          }, e.exports.extendFunction = function(t, n) {
            e._function.extend(t, n)
          }, e.exports.extendTest = function(t, n) {
            e.test.extend(t, n)
          }, e.exports.extendTag = function(t) {
            e.logic.extend(t)
          }, e.exports.extend = function(t) {
            t(e)
          }, e.exports.compile = function(t, n) {
            var o = n.filename,
              r = n.filename,
              i = new e.Template({
                data: t,
                path: r,
                id: o,
                options: n.settings["twig options"]
              });
            return function(e) {
              return i.render(e)
            }
          }, e.exports.renderFile = function(t, n, o) {
            "function" == typeof n && (o = n, n = {});
            var r = (n = n || {}).settings || {},
              i = r["twig options"],
              s = {
                path: t,
                base: r.views,
                load: function(e) {
                  i && i.allowAsync ? e.renderAsync(n).then((function(e) {
                    return o(null, e)
                  }), o) : o(null, String(e.render(n)))
                },
                error: function(e) {
                  o(e)
                }
              };
            if (i)
              for (var a in i) Object.hasOwnProperty.call(i, a) && (s[a] = i[a]);
            e.exports.twig(s)
          }, e.exports.__express = e.exports.renderFile, e.exports.cache = function(t) {
            e.cache = t
          }, e.exports.path = e.path, e.exports.filters = e.filters, e.exports.tests = e.tests, e.exports.functions = e.functions, e.exports.Promise = e.Promise, e
        }
      }])
    }, e.exports = o()
  }).call(this, n(4))
}, function(e, t) {
  e.exports = function(e) {
    var t = [];
    return t.toString = function() {
      return this.map((function(t) {
        var n = function(e, t) {
          var n = e[1] || "",
            o = e[3];
          if (!o) return n;
          if (t && "function" == typeof btoa) {
            var r = (s = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
              i = o.sources.map((function(e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */"
              }));
            return [n].concat(i).concat([r]).join("\n")
          }
          var s;
          return [n].join("\n")
        }(t, e);
        return t[2] ? "@media " + t[2] + "{" + n + "}" : n
      })).join("")
    }, t.i = function(e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var o = {}, r = 0; r < this.length; r++) {
        var i = this[r][0];
        "number" == typeof i && (o[i] = !0)
      }
      for (r = 0; r < e.length; r++) {
        var s = e[r];
        "number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
      }
    }, t
  }
}, function(e, t, n) {
  var o, r, i = {},
    s = (o = function() {
      return window && document && document.all && !window.atob
    }, function() {
      return void 0 === r && (r = o.apply(this, arguments)), r
    }),
    a = function(e, t) {
      return t ? t.querySelector(e) : document.querySelector(e)
    },
    c = function(e) {
      var t = {};
      return function(e, n) {
        if ("function" == typeof e) return e();
        if (void 0 === t[e]) {
          var o = a.call(this, e, n);
          if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
            o = o.contentDocument.head
          } catch (e) {
            o = null
          }
          t[e] = o
        }
        return t[e]
      }
    }(),
    p = null,
    l = 0,
    u = [],
    d = n(8);

  function f(e, t) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        r = i[o.id];
      if (r) {
        r.refs++;
        for (var s = 0; s < r.parts.length; s++) r.parts[s](o.parts[s]);
        for (; s < o.parts.length; s++) r.parts.push(k(o.parts[s], t))
      } else {
        var a = [];
        for (s = 0; s < o.parts.length; s++) a.push(k(o.parts[s], t));
        i[o.id] = {
          id: o.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function h(e, t) {
    for (var n = [], o = {}, r = 0; r < e.length; r++) {
      var i = e[r],
        s = t.base ? i[0] + t.base : i[0],
        a = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
      o[s] ? o[s].parts.push(a) : n.push(o[s] = {
        id: s,
        parts: [a]
      })
    }
    return n
  }

  function g(e, t) {
    var n = c(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var o = u[u.length - 1];
    if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
    else if ("bottom" === e.insertAt) n.appendChild(t);
    else {
      if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var r = c(e.insertAt.before, n);
      n.insertBefore(t, r)
    }
  }

  function m(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = u.indexOf(e);
    t >= 0 && u.splice(t, 1)
  }

  function y(e) {
    var t = document.createElement("style");
    if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
      var o = function() {
        0;
        return n.nc
      }();
      o && (e.attrs.nonce = o)
    }
    return b(t, e.attrs), g(e, t), t
  }

  function b(e, t) {
    Object.keys(t).forEach((function(n) {
      e.setAttribute(n, t[n])
    }))
  }

  function k(e, t) {
    var n, o, r, i;
    if (t.transform && e.css) {
      if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
      e.css = i
    }
    if (t.singleton) {
      var s = l++;
      n = p || (p = y(t)), o = w.bind(null, n, s, !1), r = w.bind(null, n, s, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
      var t = document.createElement("link");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), g(e, t), t
    }(t), o = _.bind(null, n, t), r = function() {
      m(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = y(t), o = T.bind(null, n), r = function() {
      m(n)
    });
    return o(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          o(e = t)
        } else r()
      }
  }
  e.exports = function(e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = h(e, t);
    return f(n, t),
      function(e) {
        for (var o = [], r = 0; r < n.length; r++) {
          var s = n[r];
          (a = i[s.id]).refs--, o.push(a)
        }
        e && f(h(e, t), t);
        for (r = 0; r < o.length; r++) {
          var a;
          if (0 === (a = o[r]).refs) {
            for (var c = 0; c < a.parts.length; c++) a.parts[c]();
            delete i[a.id]
          }
        }
      }
  };
  var x, v = (x = [], function(e, t) {
    return x[e] = t, x.filter(Boolean).join("\n")
  });

  function w(e, t, n, o) {
    var r = n ? "" : o.css;
    if (e.styleSheet) e.styleSheet.cssText = v(t, r);
    else {
      var i = document.createTextNode(r),
        s = e.childNodes;
      s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
    }
  }

  function T(e, t) {
    var n = t.css,
      o = t.media;
    if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(n))
    }
  }

  function _(e, t, n) {
    var o = n.css,
      r = n.sourceMap,
      i = void 0 === t.convertToAbsoluteUrls && r;
    (t.convertToAbsoluteUrls || i) && (o = d(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
    var s = new Blob([o], {
        type: "text/css"
      }),
      a = e.href;
    e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
  }
}, function(e, t, n) {
  e.exports = function() {
    "use strict";

    function e(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) e[o] = n[o]
      }
      return e
    }
    return function t(n, o) {
      function r(t, r, i) {
        if ("undefined" != typeof document) {
          "number" == typeof(i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
          var s = "";
          for (var a in i) i[a] && (s += "; " + a, !0 !== i[a] && (s += "=" + i[a].split(";")[0]));
          return document.cookie = t + "=" + n.write(r, t) + s
        }
      }
      return Object.create({
        set: r,
        get: function(e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) {
              var i = t[r].split("="),
                s = i.slice(1).join("=");
              try {
                var a = decodeURIComponent(i[0]);
                if (o[a] = n.read(s, a), e === a) break
              } catch (e) {}
            }
            return e ? o[e] : o
          }
        },
        remove: function(t, n) {
          r(t, "", e({}, n, {
            expires: -1
          }))
        },
        withAttributes: function(n) {
          return t(this.converter, e({}, this.attributes, n))
        },
        withConverter: function(n) {
          return t(e({}, this.converter, n), this.attributes)
        }
      }, {
        attributes: {
          value: Object.freeze(o)
        },
        converter: {
          value: Object.freeze(n)
        }
      })
    }({
      read: function(e) {
        return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      },
      write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
      }
    }, {
      path: "/"
    })
  }()
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  (function(e) {
    function n(e, t) {
      for (var n = 0, o = e.length - 1; o >= 0; o--) {
        var r = e[o];
        "." === r ? e.splice(o, 1) : ".." === r ? (e.splice(o, 1), n++) : n && (e.splice(o, 1), n--)
      }
      if (t)
        for (; n--; n) e.unshift("..");
      return e
    }

    function o(e, t) {
      if (e.filter) return e.filter(t);
      for (var n = [], o = 0; o < e.length; o++) t(e[o], o, e) && n.push(e[o]);
      return n
    }
    t.resolve = function() {
      for (var t = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
        var s = i >= 0 ? arguments[i] : e.cwd();
        if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
        s && (t = s + "/" + t, r = "/" === s.charAt(0))
      }
      return (r ? "/" : "") + (t = n(o(t.split("/"), (function(e) {
        return !!e
      })), !r).join("/")) || "."
    }, t.normalize = function(e) {
      var i = t.isAbsolute(e),
        s = "/" === r(e, -1);
      return (e = n(o(e.split("/"), (function(e) {
        return !!e
      })), !i).join("/")) || i || (e = "."), e && s && (e += "/"), (i ? "/" : "") + e
    }, t.isAbsolute = function(e) {
      return "/" === e.charAt(0)
    }, t.join = function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return t.normalize(o(e, (function(e, t) {
        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
        return e
      })).join("/"))
    }, t.relative = function(e, n) {
      function o(e) {
        for (var t = 0; t < e.length && "" === e[t]; t++);
        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1)
      }
      e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
      for (var r = o(e.split("/")), i = o(n.split("/")), s = Math.min(r.length, i.length), a = s, c = 0; c < s; c++)
        if (r[c] !== i[c]) {
          a = c;
          break
        } var p = [];
      for (c = a; c < r.length; c++) p.push("..");
      return (p = p.concat(i.slice(a))).join("/")
    }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
      if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
      for (var t = e.charCodeAt(0), n = 47 === t, o = -1, r = !0, i = e.length - 1; i >= 1; --i)
        if (47 === (t = e.charCodeAt(i))) {
          if (!r) {
            o = i;
            break
          }
        } else r = !1;
      return -1 === o ? n ? "/" : "." : n && 1 === o ? "/" : e.slice(0, o)
    }, t.basename = function(e, t) {
      var n = function(e) {
        "string" != typeof e && (e += "");
        var t, n = 0,
          o = -1,
          r = !0;
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!r) {
              n = t + 1;
              break
            }
          } else -1 === o && (r = !1, o = t + 1);
        return -1 === o ? "" : e.slice(n, o)
      }(e);
      return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
    }, t.extname = function(e) {
      "string" != typeof e && (e += "");
      for (var t = -1, n = 0, o = -1, r = !0, i = 0, s = e.length - 1; s >= 0; --s) {
        var a = e.charCodeAt(s);
        if (47 !== a) - 1 === o && (r = !1, o = s + 1), 46 === a ? -1 === t ? t = s : 1 !== i && (i = 1) : -1 !== t && (i = -1);
        else if (!r) {
          n = s + 1;
          break
        }
      }
      return -1 === t || -1 === o || 0 === i || 1 === i && t === o - 1 && t === n + 1 ? "" : e.slice(t, o)
    };
    var r = "b" === "ab".substr(-1) ? function(e, t, n) {
      return e.substr(t, n)
    } : function(e, t, n) {
      return t < 0 && (t = e.length + t), e.substr(t, n)
    }
  }).call(this, n(6))
}, function(e, t) {
  var n, o, r = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function s() {
    throw new Error("clearTimeout has not been defined")
  }

  function a(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      n = i
    }
    try {
      o = "function" == typeof clearTimeout ? clearTimeout : s
    } catch (e) {
      o = s
    }
  }();
  var c, p = [],
    l = !1,
    u = -1;

  function d() {
    l && c && (l = !1, c.length ? p = c.concat(p) : u = -1, p.length && f())
  }

  function f() {
    if (!l) {
      var e = a(d);
      l = !0;
      for (var t = p.length; t;) {
        for (c = p, p = []; ++u < t;) c && c[u].run();
        u = -1, t = p.length
      }
      c = null, l = !1,
        function(e) {
          if (o === clearTimeout) return clearTimeout(e);
          if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
          try {
            o(e)
          } catch (t) {
            try {
              return o.call(null, e)
            } catch (t) {
              return o.call(this, e)
            }
          }
        }(e)
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t
  }

  function g() {}
  r.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    p.push(new h(e, t)), 1 !== p.length || l || a(f)
  }, h.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(e) {
    return []
  }, r.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, r.cwd = function() {
    return "/"
  }, r.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, r.umask = function() {
    return 0
  }
}, function(e, t) {}, function(e, t) {
  e.exports = function(e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
      o = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
      var r, i = t.trim().replace(/^"(.*)"$/, (function(e, t) {
        return t
      })).replace(/^'(.*)'$/, (function(e, t) {
        return t
      }));
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
    }))
  }
}, function(e, t, n) {
  var o = (0, n(0).twig)({
    allowInlineIncludes: !0,
    data: [{
      type: "raw",
      value: '<div id="rgpd-cookies-modal" class="closed">\n    <button id="open-cookies-modal">\n        <svg width="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n            <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n            <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n            <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n            <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n            <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>\n    </button>\n    <div id="rgpd-cookies-modal-wrapper">\n        <div class="rgpd-cookies-modal-title pb-0 mb-3">\n            <p class="h2 mb-0"><svg class="mr-2" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n                    <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n                    <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n                    <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n                    <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n                    <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_title",
        match: ["modal_title"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div class="rgpd-cookies-modal-description pt-0 pb-0 mb-3">\n            <p><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "site",
        match: ["site"]
      }]
    }, {
      type: "raw",
      value: "</strong> "
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_description",
        match: ["modal_description"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div id="rgpd-cookies-modal-cookies" class="mb-3" style="display: none">\n            '
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.set",
        key: "allChecked",
        expression: [{
          type: "Twig.expression.type.bool",
          value: !0
        }]
      }
    }, {
      type: "raw",
      value: "            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: "                "
        }, {
          type: "logic",
          token: {
            type: "Twig.logic.type.if",
            stack: [{
              type: "Twig.expression.type.variable",
              value: "cookie",
              match: ["cookie"]
            }, {
              type: "Twig.expression.type.key.period",
              key: "checked"
            }, {
              type: "Twig.expression.type.operator.unary",
              value: "not",
              precidence: 3,
              associativity: "rightToLeft",
              operator: "not"
            }],
            output: [{
              type: "logic",
              token: {
                type: "Twig.logic.type.set",
                key: "allChecked",
                expression: [{
                  type: "Twig.expression.type.bool",
                  value: !1
                }]
              }
            }]
          }
        }, {
          type: "raw",
          value: "            "
        }]
      }
    }, {
      type: "raw",
      value: '            <div class="rgpd-cookies-modal-cookie mb-3">\n                <div class="rgpd-cookies-modal-cookie-title switch-custom">\n                    <input type="checkbox" id="rgpd-cookies-check-all"'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "allChecked",
        match: ["allChecked"]
      }, {
        type: "Twig.expression.type.string",
        value: " checked"
      }, {
        type: "Twig.expression.type.string",
        value: ""
      }, {
        type: "Twig.expression.type.operator.binary",
        value: "?",
        precidence: 16,
        associativity: "rightToLeft",
        operator: "?"
      }]
    }, {
      type: "raw",
      value: '>\n                    <label class="rgpd-cookies-modal-cookie-title" for="rgpd-cookies-check-all"><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "check_all_label",
        match: ["check_all_label"]
      }]
    }, {
      type: "raw",
      value: "</strong></label>\n                </div>\n            </div>\n            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: '                <div class="rgpd-cookies-modal-cookie mb-2">\n                    <div class="rgpd-cookies-modal-cookie-title switch-custom mb-1">\n                        <input type="checkbox" id="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "checked"
          }, {
            type: "Twig.expression.type.string",
            value: " checked"
          }, {
            type: "Twig.expression.type.string",
            value: ""
          }, {
            type: "Twig.expression.type.operator.binary",
            value: "?",
            precidence: 16,
            associativity: "rightToLeft",
            operator: "?"
          }]
        }, {
          type: "raw",
          value: '>\n                        <label for="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"><strong>'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "title"
          }]
        }, {
          type: "raw",
          value: '</strong></label>\n                    </div>\n                    <p class="rgpd-cookies-modal-cookie-help mb-3">\n                        <a href="'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "privacy_policy_url"
          }]
        }, {
          type: "raw",
          value: '">?</a>\n                        <small class="rgpd-cookies-modal-cookie-short-description">'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "short_description"
          }]
        }, {
          type: "raw",
          value: "</small>\n                    </p>\n                </div>\n            "
        }]
      }
    }, {
      type: "raw",
      value: '        </div>\n        <div class="rgpd-cookies-modal-privacy-policy mb-4">\n            <a href="'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_link",
        match: ["privacy_policy_link"]
      }]
    }, {
      type: "raw",
      value: '">'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_label",
        match: ["privacy_policy_label"]
      }]
    }, {
      type: "raw",
      value: '</a>\n        </div>\n        <div class="rgpd-cookies-modal-buttons pt-0 d-flex">\n            <button id="rgpd-cookies-refuse" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "refuse_button",
        match: ["refuse_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-settings" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "settings_button",
        match: ["settings_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-accept" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "accept_button",
        match: ["accept_button"]
      }]
    }, {
      type: "raw",
      value: "\n            </button>\n        </div>\n    </div>\n</div>\n"
    }],
    id: "js/src/rgpd-cookies/templates/modal.default.twig",
    rethrow: !0
  });
  e.exports = function(e) {
    return o.render(e)
  }, e.exports.id = "js/src/rgpd-cookies/templates/modal.default.twig", e.exports.default = e.exports
}, function(e, t, n) {
  var o = n(22);
  "string" == typeof o && (o = [
    [e.i, o, ""]
  ]);
  var r = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(2)(o, r);
  o.locals && (e.exports = o.locals)
}, , , function(e, t, n) {
  e.exports = n(14)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var o, r = n(3),
    i = n.n(r);
  (o = jQuery).RGPDCookies = function(e) {
    var t = this;
    e = o.extend({
      modal_title: "Gestion des cookies",
      modal_description: "dépose des cookies pour améliorer votre expérience de navigation, \nmesurer l'audience du site internet, afficher des publicités personnalisées, \nréaliser des campagnes ciblées et personnaliser l'interface du site.",
      privacy_policy_label: "Consulter la politique de confidentialité",
      check_all_label: "Tout cocher",
      refuse_button: "Refuser",
      settings_button: "Paramétrer",
      accept_button: "Accepter",
      theme: "default"
    }, e), ["site", "privacy_policy_link", "cookies"].forEach((function(t) {
      if (!e.hasOwnProperty(t)) throw new Error("".concat(t, " option is required"))
    }));
    var r = !1,
      s = !0;
    e.cookies.forEach((function(e) {
      e.checked = !1, void 0 === i.a.get("rgpd-cookie-".concat(e.slug)) ? r = !0 : (s = !1, "1" === i.a.get("rgpd-cookie-".concat(e.slug)) && (e.checked = !0))
    })), window.RGPDCookies = {
      options: e,
      newCookies: r,
      neverAnswered: s,
      settingsOpened: !1
    }, this._loadTemplate = function(t) {
      try {
        return n(15)("./".concat(t, ".").concat(e.theme, ".twig"))
      } catch (o) {
        return console.warn("./templates/".concat(t, ".").concat(e.theme, ".twig not found, using default theme")), n(18)("./".concat(t, ".default.twig"))
      }
    }, this._loadStyle = function(t) {
      try {
        n(19)("./".concat(t, ".").concat(e.theme, ".scss"))
      } catch (o) {
        console.warn("./sass/".concat(t, ".").concat(e.theme, ".scss not found, using default theme")), n(25)("./".concat(t, ".default.scss"))
      }
    };
    var a = this._loadTemplate("modal");
    this._loadStyle("modal"), o("body").append(a(e)), o("#open-cookies-modal").click((function() {
      o("#rgpd-cookies-modal").removeClass("closed"), o("#rgpd-cookies-modal-cookies").hide(), o("#rgpd-cookies-settings").click()
    })), o("#rgpd-cookies-refuse").click((function() {
      o("#rgpd-cookies-check-all").prop("checked", !1), e.cookies.forEach((function(e) {
        o("#rgpd-cookies-check-".concat(e.slug)).prop("checked", !1)
      })), e.cookies.forEach((function(e) {
        i.a.set("rgpd-cookie-".concat(e.slug), "0", {
          expires: 182
        })
      })), o("#rgpd-cookies-modal").addClass("closed"), window.location.reload()
    })), o("#rgpd-cookies-settings").click((function() {
      o("#rgpd-cookies-modal").fadeTo(0, 1), o("#rgpd-cookies-modal-cookies").show(), o("#rgpd-cookies-settings").prop("disabled", !0), window.RGPDCookies.settingsOpened = !0
    })), o("#rgpd-cookies-check-all").click((function() {
      o("#rgpd-cookies-check-all").is(":checked") ? e.cookies.forEach((function(e) {
        o("#rgpd-cookies-check-".concat(e.slug)).prop("checked", !0)
      })) : e.cookies.forEach((function(e) {
        o("#rgpd-cookies-check-".concat(e.slug)).prop("checked", !1)
      }))
    })), o("#rgpd-cookies-accept").click((function() {
      window.RGPDCookies.settingsOpened || (o("#rgpd-cookies-check-all").prop("checked", !0), e.cookies.forEach((function(e) {
        o("#rgpd-cookies-check-".concat(e.slug)).prop("checked", !0)
      }))), e.cookies.forEach((function(e) {
        i.a.set("rgpd-cookie-".concat(e.slug), o("#rgpd-cookies-check-".concat(e.slug)).is(":checked") ? "1" : "0", {
          expires: 182
        })
      })), o("#rgpd-cookies-modal").addClass("closed"), window.location.reload()
    })), window.RGPDCookies.neverAnswered ? o("#rgpd-cookies-modal").removeClass("closed") : window.RGPDCookies.newCookies && (o("#rgpd-cookies-settings").click(), o("#rgpd-cookies-modal").removeClass("closed")), this._fadeScrollLimit = 450, this._fadingDuration = 300, this._fadingDistance = 100, o(window).on("scroll", (function() {
      o(window).scrollTop() < t._fadeScrollLimit ? o("#rgpd-cookies-modal.closed").stop(!0, !0).fadeTo(t._fadingDuration, 1) : o(window).scrollTop() >= t._fadeScrollLimit && o(window).scrollTop() < t._fadeScrollLimit + t._fadingDistance ? o("#rgpd-cookies-modal.closed").stop(!0, !0).fadeTo(t._fadingDuration, 1 - (o(window).scrollTop() - t._fadeScrollLimit) / t._fadingDistance) : o("#rgpd-cookies-modal.closed").stop(!0, !0).fadeTo(t._fadingDuration, 0)
    })), o(window).scrollTop() >= this._fadeScrollLimit ? o("#rgpd-cookies-modal.closed").hide() : o("#rgpd-cookies-modal.closed").show()
  }
}, function(e, t, n) {
  var o = {
    "./modal.bootstrap_v4.twig": 16,
    "./modal.default.twig": 9,
    "./modal.ems_framework.twig": 17
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
    return Object.keys(o)
  }, r.resolve = i, e.exports = r, r.id = 15
}, function(e, t, n) {
  var o = (0, n(0).twig)({
    allowInlineIncludes: !0,
    data: [{
      type: "raw",
      value: '<div id="rgpd-cookies-modal" class="closed">\n    <button id="open-cookies-modal">\n        <svg width="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n        <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n        <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n        <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n        <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n        <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>\n    </button>\n    <div id="rgpd-cookies-modal-wrapper">\n        <div class="rgpd-cookies-modal-title pb-0 mb-3">\n        <p class="h2 mb-0"><svg class="mr-2" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n        <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n        <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n        <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n        <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n        <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_title",
        match: ["modal_title"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div class="rgpd-cookies-modal-description pt-0 pb-0 mb-3">\n            <p><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "site",
        match: ["site"]
      }]
    }, {
      type: "raw",
      value: "</strong> "
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_description",
        match: ["modal_description"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div id="rgpd-cookies-modal-cookies" class="mb-3" style="display: none">\n            '
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.set",
        key: "allChecked",
        expression: [{
          type: "Twig.expression.type.bool",
          value: !0
        }]
      }
    }, {
      type: "raw",
      value: "            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: "                "
        }, {
          type: "logic",
          token: {
            type: "Twig.logic.type.if",
            stack: [{
              type: "Twig.expression.type.variable",
              value: "cookie",
              match: ["cookie"]
            }, {
              type: "Twig.expression.type.key.period",
              key: "checked"
            }, {
              type: "Twig.expression.type.operator.unary",
              value: "not",
              precidence: 3,
              associativity: "rightToLeft",
              operator: "not"
            }],
            output: [{
              type: "logic",
              token: {
                type: "Twig.logic.type.set",
                key: "allChecked",
                expression: [{
                  type: "Twig.expression.type.bool",
                  value: !1
                }]
              }
            }]
          }
        }, {
          type: "raw",
          value: "            "
        }]
      }
    }, {
      type: "raw",
      value: '            <div class="rgpd-cookies-modal-cookie mb-3">\n                <div class="rgpd-cookies-modal-cookie-title switch-custom">\n                    <input type="checkbox" id="rgpd-cookies-check-all"'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "allChecked",
        match: ["allChecked"]
      }, {
        type: "Twig.expression.type.string",
        value: " checked"
      }, {
        type: "Twig.expression.type.string",
        value: ""
      }, {
        type: "Twig.expression.type.operator.binary",
        value: "?",
        precidence: 16,
        associativity: "rightToLeft",
        operator: "?"
      }]
    }, {
      type: "raw",
      value: '>\n                    <label class="rgpd-cookies-modal-cookie-title" for="rgpd-cookies-check-all"><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "check_all_label",
        match: ["check_all_label"]
      }]
    }, {
      type: "raw",
      value: "</strong></label>\n                </div>\n            </div>\n            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: '                <div class="rgpd-cookies-modal-cookie mb-2">\n                    <div class="rgpd-cookies-modal-cookie-title switch-custom mb-1">\n                        <input type="checkbox" id="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "checked"
          }, {
            type: "Twig.expression.type.string",
            value: " checked"
          }, {
            type: "Twig.expression.type.string",
            value: ""
          }, {
            type: "Twig.expression.type.operator.binary",
            value: "?",
            precidence: 16,
            associativity: "rightToLeft",
            operator: "?"
          }]
        }, {
          type: "raw",
          value: '>\n                        <label for="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"><strong>'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "title"
          }]
        }, {
          type: "raw",
          value: '</strong></label>\n                    </div>\n                    <p class="rgpd-cookies-modal-cookie-help mb-3">\n                        <a href="'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "privacy_policy_url"
          }]
        }, {
          type: "raw",
          value: '">?</a>\n                        <small class="rgpd-cookies-modal-cookie-short-description">'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "short_description"
          }]
        }, {
          type: "raw",
          value: "</small>\n                    </p>\n                </div>\n            "
        }]
      }
    }, {
      type: "raw",
      value: '        </div>\n        <div class="rgpd-cookies-modal-privacy-policy mb-4">\n            <a href="'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_link",
        match: ["privacy_policy_link"]
      }]
    }, {
      type: "raw",
      value: '">'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_label",
        match: ["privacy_policy_label"]
      }]
    }, {
      type: "raw",
      value: '</a>\n        </div>\n        <div class="rgpd-cookies-modal-buttons pt-0 d-flex">\n            <button id="rgpd-cookies-refuse" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "refuse_button",
        match: ["refuse_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-settings" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "settings_button",
        match: ["settings_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-accept" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "accept_button",
        match: ["accept_button"]
      }]
    }, {
      type: "raw",
      value: "\n            </button>\n        </div>\n    </div>\n</div>\n"
    }],
    id: "js/src/rgpd-cookies/templates/modal.bootstrap_v4.twig",
    rethrow: !0
  });
  e.exports = function(e) {
    return o.render(e)
  }, e.exports.id = "js/src/rgpd-cookies/templates/modal.bootstrap_v4.twig", e.exports.default = e.exports
}, function(e, t, n) {
  var o = (0, n(0).twig)({
    allowInlineIncludes: !0,
    data: [{
      type: "raw",
      value: '<div id="rgpd-cookies-modal" class="closed">\n    <button id="open-cookies-modal">\n        <svg width="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n        <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n        <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n        <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n        <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n        <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>\n    </button>\n    <div id="rgpd-cookies-modal-wrapper">\n        <div class="rgpd-cookies-modal-title pb-0 mb-3">\n            <p class="h2"><svg class="mr-2" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        <path class="dough" d="M23.6,48.7l1.7-5.6l1,5.7c5.5-0.1,11.5-1.8,15.2-5.3c5.8-5.4,9.1-15.8,7.9-21.3c-0.4-1.6-0.8-3.1-1.4-4.5\n            l-5.5,0.3l3.4-4.5c-1.4-2.3-3.1-4.4-5.1-6c-4.2-3.4-9.8-4.8-11.5-5.3C20.7,0,10,6.2,7.7,8.8C2.1,15.2,1,24,1.9,29.5l4.8,0.9\n            c0,0-2,1.2-3.9,2.3C5,37.8,11.9,45.5,18,47.6C19.7,48.2,21.6,48.5,23.6,48.7z"/>\n        <circle class="choco" cx="36" cy="34.7" r="3.4"/>\n        <circle class="choco" cx="28.7" cy="10.5" r="3.6"/>\n        <circle class="choco" cx="13.2" cy="34.1" r="3.8"/>\n        <circle class="choco" cx="27.4" cy="24.8" r="2.7"/>\n        <circle class="choco" cx="13.8" cy="18.4" r="2.7"/>\n        </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_title",
        match: ["modal_title"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div class="rgpd-cookies-modal-description pt-0 pb-0 mb-3">\n            <p class="mb-0"><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "site",
        match: ["site"]
      }]
    }, {
      type: "raw",
      value: "</strong> "
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "modal_description",
        match: ["modal_description"]
      }]
    }, {
      type: "raw",
      value: '</p>\n        </div>\n        <div id="rgpd-cookies-modal-cookies" class="mb-3" style="display: none">\n            '
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.set",
        key: "allChecked",
        expression: [{
          type: "Twig.expression.type.bool",
          value: !0
        }]
      }
    }, {
      type: "raw",
      value: "            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: "                "
        }, {
          type: "logic",
          token: {
            type: "Twig.logic.type.if",
            stack: [{
              type: "Twig.expression.type.variable",
              value: "cookie",
              match: ["cookie"]
            }, {
              type: "Twig.expression.type.key.period",
              key: "checked"
            }, {
              type: "Twig.expression.type.operator.unary",
              value: "not",
              precidence: 3,
              associativity: "rightToLeft",
              operator: "not"
            }],
            output: [{
              type: "logic",
              token: {
                type: "Twig.logic.type.set",
                key: "allChecked",
                expression: [{
                  type: "Twig.expression.type.bool",
                  value: !1
                }]
              }
            }]
          }
        }, {
          type: "raw",
          value: "            "
        }]
      }
    }, {
      type: "raw",
      value: '            <div class="rgpd-cookies-modal-cookie mb-3">\n                <div class="rgpd-cookies-modal-cookie-title switch-custom">\n                    <input type="checkbox" id="rgpd-cookies-check-all"'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "allChecked",
        match: ["allChecked"]
      }, {
        type: "Twig.expression.type.string",
        value: " checked"
      }, {
        type: "Twig.expression.type.string",
        value: ""
      }, {
        type: "Twig.expression.type.operator.binary",
        value: "?",
        precidence: 16,
        associativity: "rightToLeft",
        operator: "?"
      }]
    }, {
      type: "raw",
      value: '>\n                    <label class="rgpd-cookies-modal-cookie-title" for="rgpd-cookies-check-all"><strong>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "check_all_label",
        match: ["check_all_label"]
      }]
    }, {
      type: "raw",
      value: "</strong></label>\n                </div>\n            </div>\n            "
    }, {
      type: "logic",
      token: {
        type: "Twig.logic.type.for",
        keyVar: null,
        valueVar: "cookie",
        expression: [{
          type: "Twig.expression.type.variable",
          value: "cookies",
          match: ["cookies"]
        }],
        output: [{
          type: "raw",
          value: '                <div class="rgpd-cookies-modal-cookie mb-2">\n                    <div class="rgpd-cookies-modal-cookie-title switch-custom mb-1">\n                        <input type="checkbox" id="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "checked"
          }, {
            type: "Twig.expression.type.string",
            value: " checked"
          }, {
            type: "Twig.expression.type.string",
            value: ""
          }, {
            type: "Twig.expression.type.operator.binary",
            value: "?",
            precidence: 16,
            associativity: "rightToLeft",
            operator: "?"
          }]
        }, {
          type: "raw",
          value: '>\n                        <label for="rgpd-cookies-check-'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "slug"
          }]
        }, {
          type: "raw",
          value: '"><strong>'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "title"
          }]
        }, {
          type: "raw",
          value: '</strong></label>\n                    </div>\n                    <p class="rgpd-cookies-modal-cookie-help mb-3">\n                        <a href="'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "privacy_policy_url"
          }]
        }, {
          type: "raw",
          value: '">?</a>\n                        <small class="rgpd-cookies-modal-cookie-short-description">'
        }, {
          type: "output",
          stack: [{
            type: "Twig.expression.type.variable",
            value: "cookie",
            match: ["cookie"]
          }, {
            type: "Twig.expression.type.key.period",
            key: "short_description"
          }]
        }, {
          type: "raw",
          value: "</small>\n                    </p>\n                </div>\n            "
        }]
      }
    }, {
      type: "raw",
      value: '        </div>\n        <div class="rgpd-cookies-modal-privacy-policy mb-4">\n            <a href="'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_link",
        match: ["privacy_policy_link"]
      }]
    }, {
      type: "raw",
      value: '">'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "privacy_policy_label",
        match: ["privacy_policy_label"]
      }]
    }, {
      type: "raw",
      value: '</a>\n        </div>\n        <div class="rgpd-cookies-modal-buttons pt-0 d-flex">\n            <button id="rgpd-cookies-refuse" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "refuse_button",
        match: ["refuse_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-settings" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "settings_button",
        match: ["settings_button"]
      }]
    }, {
      type: "raw",
      value: '\n            </button>\n            <button id="rgpd-cookies-accept" class="btn btn-outline-dark">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n                </svg>'
    }, {
      type: "output",
      stack: [{
        type: "Twig.expression.type.variable",
        value: "accept_button",
        match: ["accept_button"]
      }]
    }, {
      type: "raw",
      value: "\n            </button>\n        </div>\n    </div>\n</div>\n"
    }],
    id: "js/src/rgpd-cookies/templates/modal.ems_framework.twig",
    rethrow: !0
  });
  e.exports = function(e) {
    return o.render(e)
  }, e.exports.id = "js/src/rgpd-cookies/templates/modal.ems_framework.twig", e.exports.default = e.exports
}, function(e, t, n) {
  var o = {
    "./modal.default.twig": 9
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
    return Object.keys(o)
  }, r.resolve = i, e.exports = r, r.id = 18
}, function(e, t, n) {
  var o = {
    "./modal.bootstrap_v4.scss": 20,
    "./modal.default.scss": 10,
    "./modal.ems_framework.scss": 23
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
    return Object.keys(o)
  }, r.resolve = i, e.exports = r, r.id = 19
}, function(e, t, n) {
  var o = n(21);
  "string" == typeof o && (o = [
    [e.i, o, ""]
  ]);
  var r = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(2)(o, r);
  o.locals && (e.exports = o.locals)
}, function(e, t, n) {
  (t = e.exports = n(1)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);", ""]), t.push([e.i, '#rgpd-cookies-modal {\n  bottom: 1.5em;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  color: #696a72;\n  font-family: "Open Sans", sans-serif;\n  font-size: 14px !important;\n  font-weight: normal;\n  left: 1.5em;\n  line-height: normal;\n  max-width: 600px;\n  position: fixed;\n  transition: all 0.3s;\n  text-align: left;\n  width: calc(100% - 3em);\n  z-index: 1999;\n}\n#rgpd-cookies-modal h1, #rgpd-cookies-modal .h1, #rgpd-cookies-modal h2, #rgpd-cookies-modal .h2, #rgpd-cookies-modal p, #rgpd-cookies-modal strong, #rgpd-cookies-modal small, #rgpd-cookies-modal a {\n  font-family: "Open Sans", sans-serif;\n}\n#rgpd-cookies-modal.closed {\n  width: auto;\n  box-shadow: none;\n}\n#rgpd-cookies-modal #rgpd-cookies-modal-wrapper {\n  background: #fff;\n  border-radius: 0.2em;\n}\n#rgpd-cookies-modal.closed #rgpd-cookies-modal-wrapper {\n  display: none;\n  width: 0;\n}\n#rgpd-cookies-modal:not(.closed) #rgpd-cookies-modal-wrapper {\n  overflow-y: auto;\n  max-height: 90vh;\n}\n#rgpd-cookies-modal:not(.closed) #open-cookies-modal {\n  display: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  justify-content: center;\n  align-items: center;\n}\n#rgpd-cookies-modal.closed #open-cookies-modal {\n  display: inline-flex;\n}\n#rgpd-cookies-modal .h2 {\n  color: #1d1d20;\n  display: inline-flex;\n  font-size: 22px;\n  font-weight: bold;\n  text-shadow: none;\n}\n#rgpd-cookies-modal strong {\n  color: #1d1d20;\n}\n#rgpd-cookies-modal a {\n  color: #ff7756;\n  text-decoration: underline;\n}\n#rgpd-cookies-modal a:hover, #rgpd-cookies-modal a:focus, #rgpd-cookies-modal a:active {\n  color: #cb3425;\n  text-decoration: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  transition: none;\n}\n#rgpd-cookies-modal #open-cookies-modal:focus,\n#rgpd-cookies-modal #open-cookies-modal:focus-visible,\n#rgpd-cookies-modal #open-cookies-modal:active {\n  outline: 4px auto #f9c485;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a {\n  align-items: center;\n  border: 1px solid #ff7756;\n  border-radius: 50%;\n  display: inline-flex;\n  font-size: 12px;\n  height: 1.4em;\n  justify-content: center;\n  text-decoration: none;\n  width: 1.4em;\n  transition: none;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:hover, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:focus, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:active {\n  background-color: #ff7756;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-title {\n  background-color: #fff !important;\n  border-bottom: 0;\n  border-top-right-radius: 0.2em;\n  border-top-left-radius: 0.2em;\n  padding-top: 2em;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-description, .rgpd-cookies-modal-privacy-policy, .rgpd-cookies-modal-buttons, #rgpd-cookies-modal-cookies {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-cookie:first-child {\n  border-bottom: 1px solid #d9dbe7;\n  padding-bottom: 1em;\n}\n\n.rgpd-cookies-modal-buttons {\n  background-color: #fff;\n  border-bottom-right-radius: 0.5em;\n  border-bottom-left-radius: 0.5em;\n  border-top: 0;\n  padding-bottom: 2em;\n}\n.rgpd-cookies-modal-buttons .btn {\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.6em 1.3em;\n  font-size: 14px;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark {\n  align-items: center;\n  background-color: transparent;\n  border: 1px solid #6f737e;\n  border-radius: 0.2em;\n  box-shadow: none;\n  color: #6f737e;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:hover {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled):active, .rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled).active {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .show > .btn-outline-dark.dropdown-toggle {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-cookie-short-description {\n  font-size: 13px;\n  padding: 5px;\n}\n\n.rgpd-cookies-modal-buttons > button:not(:last-child) {\n  margin-right: 1em;\n}\n\n#rgpd-cookies-modal .dough {\n  fill: #F9C485;\n}\n#rgpd-cookies-modal .choco {\n  fill: #281815;\n}\n\n/* switch-custom */\n.switch-custom input[type=checkbox] {\n  height: 0;\n  visibility: hidden;\n  width: 0;\n}\n.switch-custom label {\n  padding-left: 3em;\n  position: relative;\n}\n.switch-custom label:before {\n  background: #babec7;\n  border-radius: 100px;\n  content: "";\n  cursor: pointer;\n  display: block;\n  height: 1.4em;\n  left: 0;\n  position: absolute;\n  text-indent: -9999px;\n  width: 2.4em;\n}\n.switch-custom label:after {\n  background: #fff;\n  border-radius: 50%;\n  content: "";\n  cursor: pointer;\n  height: 1.1em;\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: 0.3s;\n  width: 1.1em;\n}\n.switch-custom input:checked + label:before {\n  background: #db863e;\n}\n.switch-custom input:checked + label:after {\n  left: calc(2.4em - 1.1em - 2px);\n}\n.switch-custom label:active:after {\n  width: 1.4em;\n}\n\n/* bootstrap-utilities */\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25em !important;\n}\n\n.mb-3 {\n  margin-bottom: 1em !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5em !important;\n}\n\n.mr-2 {\n  margin-right: 0.5em !important;\n}\n\n@media (max-width: 575.98px) {\n  #rgpd-cookies-modal {\n    font-size: 13px !important;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title {\n    padding-top: 1.5em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title .h2 {\n    font-size: 18px;\n  }\n\n  .rgpd-cookies-modal-cookie-short-description {\n    font-size: 12px;\n  }\n\n  .rgpd-cookies-modal-description, .rgpd-cookies-modal-cookies, .rgpd-cookies-modal-privacy-policy {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n\n  .rgpd-cookies-modal-buttons {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n    justify-content: space-between;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark {\n    flex-grow: 1;\n    font-size: 0.9em;\n    font-weight: bold;\n    padding: 0.5em;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark svg {\n    display: none;\n  }\n  .rgpd-cookies-modal-buttons > button:not(:last-child) {\n    margin-right: 0.5em;\n  }\n}', ""])
}, function(e, t, n) {
  (t = e.exports = n(1)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);", ""]), t.push([e.i, '#rgpd-cookies-modal {\n  bottom: 1.5em;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  color: #696a72;\n  font-family: "Open Sans", sans-serif;\n  font-size: 14px !important;\n  font-weight: normal;\n  left: 1.5em;\n  line-height: normal;\n  max-width: 600px;\n  position: fixed;\n  transition: all 0.3s;\n  text-align: left;\n  width: calc(100% - 3em);\n  z-index: 1999;\n}\n#rgpd-cookies-modal h1, #rgpd-cookies-modal .h1, #rgpd-cookies-modal h2, #rgpd-cookies-modal .h2, #rgpd-cookies-modal p, #rgpd-cookies-modal strong, #rgpd-cookies-modal small, #rgpd-cookies-modal a {\n  font-family: "Open Sans", sans-serif;\n}\n#rgpd-cookies-modal.closed {\n  width: auto;\n  box-shadow: none;\n}\n#rgpd-cookies-modal #rgpd-cookies-modal-wrapper {\n  background: #fff;\n  border-radius: 0.2em;\n}\n#rgpd-cookies-modal.closed #rgpd-cookies-modal-wrapper {\n  display: none;\n  width: 0;\n}\n#rgpd-cookies-modal:not(.closed) #rgpd-cookies-modal-wrapper {\n  overflow-y: auto;\n  max-height: 90vh;\n}\n#rgpd-cookies-modal:not(.closed) #open-cookies-modal {\n  display: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  justify-content: center;\n  align-items: center;\n}\n#rgpd-cookies-modal.closed #open-cookies-modal {\n  display: inline-flex;\n}\n#rgpd-cookies-modal .h2 {\n  color: #1d1d20;\n  display: inline-flex;\n  font-size: 22px;\n  margin: 0;\n  font-weight: bold;\n  text-shadow: none;\n}\n#rgpd-cookies-modal strong {\n  color: #1d1d20;\n}\n#rgpd-cookies-modal a {\n  color: #ff7756;\n  text-decoration: underline;\n}\n#rgpd-cookies-modal a:hover, #rgpd-cookies-modal a:focus, #rgpd-cookies-modal a:active {\n  color: #cb3425;\n  text-decoration: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  transition: none;\n}\n#rgpd-cookies-modal #open-cookies-modal:focus,\n#rgpd-cookies-modal #open-cookies-modal:focus-visible,\n#rgpd-cookies-modal #open-cookies-modal:active {\n  outline: 4px auto #f9c485;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a {\n  align-items: center;\n  border: 1px solid #ff7756;\n  border-radius: 50%;\n  display: inline-flex;\n  font-size: 12px;\n  height: 1.4em;\n  justify-content: center;\n  text-decoration: none;\n  width: 1.4em;\n  transition: none;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:hover, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:focus, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:active {\n  background-color: #ff7756;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-title {\n  background-color: #fff !important;\n  border-bottom: 0 !important;\n  border-top-right-radius: 0.2em;\n  border-top-left-radius: 0.2em;\n  padding-top: 2em;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-description, .rgpd-cookies-modal-privacy-policy, .rgpd-cookies-modal-buttons, #rgpd-cookies-modal-cookies {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-privacy-policy {\n  font-size: 13px;\n}\n\n.rgpd-cookies-modal-cookie:first-child {\n  border-bottom: 1px solid #d9dbe7;\n  padding-bottom: 1em;\n}\n\n.rgpd-cookies-modal-buttons {\n  background-color: #fff;\n  border-bottom-right-radius: 0.5em;\n  border-bottom-left-radius: 0.5em;\n  border-top: 0;\n  display: flex;\n  padding-bottom: 2em;\n}\n.rgpd-cookies-modal-buttons .btn {\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.6em 1.3em;\n  font-size: 14px;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark {\n  align-items: center;\n  background-color: transparent;\n  border: 1px solid #6f737e;\n  border-radius: 0.2em;\n  box-shadow: none;\n  color: #6f737e;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:hover {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled):active, .rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled).active {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .show > .btn-outline-dark.dropdown-toggle {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-cookie-short-description {\n  font-size: 13px;\n  padding: 5px;\n}\n\n.rgpd-cookies-modal-buttons > button:not(:last-child) {\n  margin-right: 1em;\n}\n\n#rgpd-cookies-modal .dough {\n  fill: #F9C485;\n}\n#rgpd-cookies-modal .choco {\n  fill: #281815;\n}\n\n/* switch-custom */\n.switch-custom input[type=checkbox] {\n  height: 0;\n  visibility: hidden;\n  width: 0;\n  display: block;\n}\n.switch-custom label {\n  padding-left: 3em;\n  position: relative;\n  margin-bottom: 0.5em;\n}\n.switch-custom label:before {\n  background: #babec7;\n  border-radius: 100px;\n  content: "";\n  cursor: pointer;\n  display: block;\n  height: 1.4em;\n  left: 0;\n  position: absolute;\n  text-indent: -9999px;\n  width: 2.4em;\n}\n.switch-custom label:after {\n  background: #fff;\n  border-radius: 50%;\n  content: "";\n  cursor: pointer;\n  height: 1.1em;\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: 0.3s;\n  width: 1.1em;\n}\n.switch-custom input:checked + label:before {\n  background: #db863e;\n}\n.switch-custom input:checked + label:after {\n  left: calc(2.4em - 1.1em - 2px);\n}\n.switch-custom label:active:after {\n  width: 1.4em;\n}\n\n/* bootstrap-utilities */\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25em !important;\n}\n\n.mb-3 {\n  margin-bottom: 1em !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5em !important;\n}\n\n.mr-2 {\n  margin-right: 0.5em !important;\n}\n\n@media (max-width: 575.98px) {\n  #rgpd-cookies-modal {\n    font-size: 13px !important;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title {\n    padding-top: 1.5em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title .h2 {\n    font-size: 18px;\n  }\n\n  .rgpd-cookies-modal-cookie-short-description {\n    font-size: 12px;\n  }\n\n  .rgpd-cookies-modal-description, .rgpd-cookies-modal-cookies, .rgpd-cookies-modal-privacy-policy {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n\n  .rgpd-cookies-modal-buttons {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n    justify-content: space-between;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark {\n    flex-grow: 1;\n    font-size: 0.9em;\n    font-weight: bold;\n    padding: 0.5em;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark svg {\n    display: none;\n  }\n  .rgpd-cookies-modal-buttons > button:not(:last-child) {\n    margin-right: 0.5em;\n  }\n}', ""])
}, function(e, t, n) {
  var o = n(24);
  "string" == typeof o && (o = [
    [e.i, o, ""]
  ]);
  var r = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(2)(o, r);
  o.locals && (e.exports = o.locals)
}, function(e, t, n) {
  (t = e.exports = n(1)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);", ""]), t.push([e.i, '#rgpd-cookies-modal {\n  bottom: 1.5em;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  color: #696a72;\n  font-family: "Open Sans", sans-serif;\n  font-size: 14px !important;\n  font-weight: normal;\n  left: 1.5em;\n  line-height: normal;\n  max-width: 600px;\n  position: fixed;\n  transition: all 0.3s;\n  text-align: left;\n  width: calc(100% - 3em);\n  z-index: 1999;\n}\n#rgpd-cookies-modal h1, #rgpd-cookies-modal .h1, #rgpd-cookies-modal h2, #rgpd-cookies-modal .h2, #rgpd-cookies-modal p, #rgpd-cookies-modal strong, #rgpd-cookies-modal small, #rgpd-cookies-modal a {\n  font-family: "Open Sans", sans-serif;\n}\n#rgpd-cookies-modal.closed {\n  width: auto;\n  box-shadow: none;\n}\n#rgpd-cookies-modal #rgpd-cookies-modal-wrapper {\n  background: #fff;\n  border-radius: 0.2em;\n}\n#rgpd-cookies-modal.closed #rgpd-cookies-modal-wrapper {\n  display: none;\n  width: 0;\n}\n#rgpd-cookies-modal:not(.closed) #rgpd-cookies-modal-wrapper {\n  overflow-y: auto;\n  max-height: 90vh;\n}\n#rgpd-cookies-modal:not(.closed) #open-cookies-modal {\n  display: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.24);\n  justify-content: center;\n  align-items: center;\n}\n#rgpd-cookies-modal.closed #open-cookies-modal {\n  display: inline-flex;\n}\n#rgpd-cookies-modal .h2 {\n  color: #1d1d20;\n  display: inline-flex;\n  font-size: 22px;\n  margin: 0;\n  font-weight: bold;\n  text-shadow: none;\n}\n#rgpd-cookies-modal strong {\n  color: #1d1d20;\n}\n#rgpd-cookies-modal a {\n  color: #ff7756;\n  text-decoration: underline;\n}\n#rgpd-cookies-modal a:hover, #rgpd-cookies-modal a:focus, #rgpd-cookies-modal a:active {\n  color: #cb3425;\n  text-decoration: none;\n}\n#rgpd-cookies-modal #open-cookies-modal {\n  transition: none;\n}\n#rgpd-cookies-modal #open-cookies-modal:focus,\n#rgpd-cookies-modal #open-cookies-modal:focus-visible,\n#rgpd-cookies-modal #open-cookies-modal:active {\n  outline: 4px auto #f9c485;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a {\n  align-items: center;\n  border: 1px solid #ff7756;\n  border-radius: 50%;\n  display: inline-flex;\n  font-size: 12px;\n  height: 1.4em;\n  justify-content: center;\n  text-decoration: none;\n  width: 1.4em;\n  transition: none;\n}\n#rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:hover, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:focus, #rgpd-cookies-modal .rgpd-cookies-modal-cookie-help a:active {\n  background-color: #ff7756;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-title {\n  background-color: #fff !important;\n  border-bottom: 0 !important;\n  border-top-right-radius: 0.2em;\n  border-top-left-radius: 0.2em;\n  padding-top: 2em;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-description, .rgpd-cookies-modal-privacy-policy, .rgpd-cookies-modal-buttons, #rgpd-cookies-modal-cookies {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.rgpd-cookies-modal-privacy-policy {\n  font-size: 13px;\n}\n\n.rgpd-cookies-modal-cookie:first-child {\n  border-bottom: 1px solid #d9dbe7;\n  padding-bottom: 1em;\n}\n\n.rgpd-cookies-modal-buttons {\n  background-color: #fff;\n  border-bottom-right-radius: 0.5em;\n  border-bottom-left-radius: 0.5em;\n  border-top: 0;\n  display: flex;\n  padding-bottom: 2em;\n}\n.rgpd-cookies-modal-buttons .btn {\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.6em 1.3em;\n  font-size: 14px;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark {\n  align-items: center;\n  background-color: transparent;\n  border: 1px solid #6f737e;\n  border-radius: 0.2em;\n  box-shadow: none;\n  color: #6f737e;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:hover {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled):active, .rgpd-cookies-modal-buttons .btn.btn-outline-dark:not(:disabled):not(.disabled).active {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n.rgpd-cookies-modal-buttons .show > .btn-outline-dark.dropdown-toggle {\n  background-color: #6f737e;\n  border-color: #6f737e;\n  color: #fff;\n}\n\n.rgpd-cookies-modal-cookie-short-description {\n  font-size: 13px;\n  padding: 5px;\n}\n\n.rgpd-cookies-modal-buttons > button:not(:last-child) {\n  margin-right: 1em;\n}\n\n#rgpd-cookies-modal .dough {\n  fill: #F9C485;\n}\n#rgpd-cookies-modal .choco {\n  fill: #281815;\n}\n\n/* switch-custom */\n.switch-custom input[type=checkbox] {\n  height: 0;\n  visibility: hidden;\n  width: 0;\n  display: block;\n}\n.switch-custom label {\n  padding-left: 3em;\n  position: relative;\n  margin-bottom: 0.5em;\n}\n.switch-custom label:before {\n  background: #babec7;\n  border-radius: 100px;\n  content: "";\n  cursor: pointer;\n  display: block;\n  height: 1.4em;\n  left: 0;\n  position: absolute;\n  text-indent: -9999px;\n  width: 2.4em;\n}\n.switch-custom label:after {\n  background: #fff;\n  border-radius: 50%;\n  content: "";\n  cursor: pointer;\n  height: 1.1em;\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: 0.3s;\n  width: 1.1em;\n}\n.switch-custom input:checked + label:before {\n  background: #db863e;\n}\n.switch-custom input:checked + label:after {\n  left: calc(2.4em - 1.1em - 2px);\n}\n.switch-custom label:active:after {\n  width: 1.4em;\n}\n\n/* bootstrap-utilities */\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25em !important;\n}\n\n.mb-3 {\n  margin-bottom: 1em !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5em !important;\n}\n\n.mr-2 {\n  margin-right: 0.5em !important;\n}\n\n@media (max-width: 575.98px) {\n  #rgpd-cookies-modal {\n    font-size: 13px !important;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title {\n    padding-top: 1.5em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  #rgpd-cookies-modal .rgpd-cookies-modal-title .h2 {\n    font-size: 18px;\n  }\n\n  .rgpd-cookies-modal-cookie-short-description {\n    font-size: 12px;\n  }\n\n  .rgpd-cookies-modal-description, .rgpd-cookies-modal-cookies, .rgpd-cookies-modal-privacy-policy {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n\n  .rgpd-cookies-modal-buttons {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n    justify-content: space-between;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark {\n    flex-grow: 1;\n    font-size: 0.9em;\n    font-weight: bold;\n    padding: 0.5em;\n  }\n  .rgpd-cookies-modal-buttons .btn-outline-dark svg {\n    display: none;\n  }\n  .rgpd-cookies-modal-buttons > button:not(:last-child) {\n    margin-right: 0.5em;\n  }\n}', ""])
}, function(e, t, n) {
  var o = {
    "./modal.default.scss": 10
  };

  function r(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  r.keys = function() {
    return Object.keys(o)
  }, r.resolve = i, e.exports = r, r.id = 25
}]);