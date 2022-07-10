(function(r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = f.fancybox = function() {
      b.open.apply(this, arguments)
    },
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function(a) {
      return a && a.hasOwnProperty && a instanceof f
    },
    q = function(a) {
      return a && "string" === f.type(a)
    },
    E = function(a) {
      return q(a) && 0 < a.indexOf("%")
    },
    l = function(a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e)
    },
    w = function(a, b) {
      return l(a, b) + "px"
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Fermer" class="fancybox-item fancybox-close" href="javascript:;"><i class="fa fa-times"></i></a>',
        next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-chevron-right"></i></span></a>',
        prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-chevron-left"></i></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
        var k = {},
          g, h, j, m, l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    },
    cancel: function() {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
    },
    close: function(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
    },
    play: function(a) {
      var d = function() {
          clearTimeout(b.player.timer)
        },
        e = function() {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
        },
        c = function() {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd")
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart")
      } else c()
    },
    next: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
    },
    prev: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    },
    jumpto: function(a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
    },
    reposition: function(a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
    },
    update: function(a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function() {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
      }, e && !s ? 0 : 300))
    },
    toggle: function(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
    },
    hideLoading: function() {
      p.unbind(".loading");
      f("#fancybox-loading").remove()
    },
    showLoading: function() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div><i class="fa fa-spinner fa-spin"></i></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function(a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }))
    },
    getViewport: function() {
      var a = b.current && b.current.locked || !1,
        d = {
          x: n.scrollLeft(),
          y: n.scrollTop()
        };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d
    },
    unbindEvents: function() {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb")
    },
    bindEvents: function() {
      var a = b.current,
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
        var c = e.which || e.keyCode,
          k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
        })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
          else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault()
        }
      }))
    },
    trigger: function(a, d) {
      var e, c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function(d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
        });
        p.trigger(a)
      }
    },
    isImage: function(a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function(a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(a) {
      var d = {},
        e, c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
          d.skin.css("padding" + b, w(d.padding[a]))
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content")
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    },
    _error: function(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad()
    },
    _loadImage: function() {
      var a = b.imgPreload = new Image;
      a.onload = function() {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad()
      };
      a.onerror = function() {
        this.onload = this.onerror = null;
        b._error("image")
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading()
    },
    _loadAjax: function() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
        },
        success: function(d, e) {
          "success" === e && (a.content = d, b._afterLoad())
        }
      }))
    },
    _loadIframe: function() {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function() {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function() {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad()
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad()
    },
    _preloadImages: function() {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f, g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    },
    _afterLoad: function() {
      var a = b.coming,
        d = b.current,
        e, c, k, g, h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
        else {
          d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                e += '<param name="' + a + '" value="' + b + '"></param>';
                h += " " + a + '="' + b + '"'
              }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
          }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]()
          } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages()
        }
    },
    _setDimension: function() {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v, z, t, C, A, F, B, D, H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;
      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView)
        if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
          for (;
            (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
        else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && ("auto" === s && j < A && c + x + q < z) && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    },
    _getPosition: function(a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c
    },
    _afterZoomIn: function() {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
        a.preventDefault();
        b.close()
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    },
    _afterZoomOut: function(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a)
    }
  });
  b.transitions = {
    getOrigPosition: function() {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      }
    },
    step: function(a, d) {
      var e, c, f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
    },
    zoomIn: function() {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({
          opacity: 1
        }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      })
    },
    zoomOut: function() {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      })
    },
    changeIn: function() {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      })
    },
    changeOut: function() {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function() {
          f(this).trigger("onReset").remove()
        }
      })
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function(a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function(a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
      });
      this.overlay.css(a.css).show()
    },
    close: function() {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function() {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height())
    },
    onReady: function(a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function(a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function() {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a)
    },
    onUpdate: function() {
      this.fixed || this.update()
    },
    afterClose: function(a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function(a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c)
      }
    }
  };
  f.fn.fancybox = function(a) {
    var d, e = f(this),
      c = this.selector || "",
      k = function(g) {
        var h = f(this).blur(),
          j = d,
          k, l;
        !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this
  };
  p.ready(function() {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function() {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b
    });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);
(function(t, e) {
  function n(e) {
    t.extend(!0, ye, e)
  }

  function r(n, r, l) {
    function u(t) {
      G ? (S(), C(), R(), b(t)) : f()
    }

    function f() {
      K = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), r.theme && n.addClass("ui-widget"), G = t("<div class='fc-content' style='position:relative'/>").prependTo(n), $ = new a(Z, r), Q = $.render(), Q && n.prepend(Q), y(r.defaultView), t(window).resize(x), m() || v()
    }

    function v() {
      setTimeout(function() {
        !te.start && m() && b()
      }, 0)
    }

    function h() {
      t(window).unbind("resize", x), $.destroy(), G.remove(), n.removeClass("fc fc-rtl ui-widget")
    }

    function g() {
      return 0 !== se.offsetWidth
    }

    function m() {
      return 0 !== t("body")[0].offsetWidth
    }

    function y(e) {
      if (!te || e != te.name) {
        ue++, W();
        var n, r = te;
        r ? ((r.beforeHide || I)(), q(G, G.height()), r.element.hide()) : q(G, 1), G.css("overflow", "hidden"), te = ce[e], te ? te.element.show() : te = ce[e] = new De[e](n = re = t("<div class='fc-view fc-view-" + e + "' style='position:absolute'/>").appendTo(G), Z), r && $.deactivateButton(r.name), $.activateButton(e), b(), G.css("overflow", ""), r && q(G, 1), n || (te.afterShow || I)(), ue--
      }
    }

    function b(t) {
      if (g()) {
        ue++, W(), ne === e && S();
        var r = !1;
        !te.start || t || te.start > fe || fe >= te.end ? (te.render(fe, t || 0), E(!0), r = !0) : te.sizeDirty ? (te.clearEvents(), E(), r = !0) : te.eventsDirty && (te.clearEvents(), r = !0), te.sizeDirty = !1, te.eventsDirty = !1, T(r), ee = n.outerWidth(), $.updateTitle(te.title);
        var a = new Date;
        a >= te.start && te.end > a ? $.disableButton("today") : $.enableButton("today"), ue--, te.trigger("viewDisplay", se)
      }
    }

    function M() {
      C(), g() && (S(), E(), W(), te.clearEvents(), te.renderEvents(de), te.sizeDirty = !1)
    }

    function C() {
      t.each(ce, function(t, e) {
        e.sizeDirty = !0
      })
    }

    function S() {
      ne = r.contentHeight ? r.contentHeight : r.height ? r.height - (Q ? Q.height() : 0) - L(G) : Math.round(G.width() / Math.max(r.aspectRatio, .5))
    }

    function E(t) {
      ue++, te.setHeight(ne, t), re && (re.css("position", "relative"), re = null), te.setWidth(G.width(), t), ue--
    }

    function x() {
      if (!ue)
        if (te.start) {
          var t = ++le;
          setTimeout(function() {
            t == le && !ue && g() && ee != (ee = n.outerWidth()) && (ue++, M(), te.trigger("windowResize", se), ue--)
          }, 200)
        } else v()
    }

    function T(t) {
      !r.lazyFetching || oe(te.visStart, te.visEnd) ? k() : t && F()
    }

    function k() {
      ie(te.visStart, te.visEnd)
    }

    function H(t) {
      de = t, F()
    }

    function z(t) {
      F(t)
    }

    function F(t) {
      R(), g() && (te.clearEvents(), te.renderEvents(de, t), te.eventsDirty = !1)
    }

    function R() {
      t.each(ce, function(t, e) {
        e.eventsDirty = !0
      })
    }

    function N(t, n, r) {
      te.select(t, n, r === e ? !0 : r)
    }

    function W() {
      te && te.unselect()
    }

    function A() {
      b(-1)
    }

    function _() {
      b(1)
    }

    function O() {
      i(fe, -1), b()
    }

    function B() {
      i(fe, 1), b()
    }

    function Y() {
      fe = new Date, b()
    }

    function j(t, e, n) {
      t instanceof Date ? fe = d(t) : p(fe, t, e, n), b()
    }

    function P(t, n, r) {
      t !== e && i(fe, t), n !== e && s(fe, n), r !== e && c(fe, r), b()
    }

    function J() {
      return d(fe)
    }

    function V() {
      return te
    }

    function X(t, n) {
      return n === e ? r[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (r[t] = n, M()), e)
    }

    function U(t, n) {
      return r[t] ? r[t].apply(n || se, Array.prototype.slice.call(arguments, 2)) : e
    }
    var Z = this;
    Z.options = r, Z.render = u, Z.destroy = h, Z.refetchEvents = k, Z.reportEvents = H, Z.reportEventChange = z, Z.rerenderEvents = F, Z.changeView = y, Z.select = N, Z.unselect = W, Z.prev = A, Z.next = _, Z.prevYear = O, Z.nextYear = B, Z.today = Y, Z.gotoDate = j, Z.incrementDate = P, Z.formatDate = function(t, e) {
      return w(t, e, r)
    }, Z.formatDates = function(t, e, n) {
      return D(t, e, n, r)
    }, Z.getDate = J, Z.getView = V, Z.option = X, Z.trigger = U, o.call(Z, r, l);
    var $, Q, G, K, te, ee, ne, re, ae, oe = Z.isFetchNeeded,
      ie = Z.fetchEvents,
      se = n[0],
      ce = {},
      le = 0,
      ue = 0,
      fe = new Date,
      de = [];
    p(fe, r.year, r.month, r.date), r.droppable && t(document).bind("dragstart", function(e, n) {
      var a = e.target,
        o = t(a);
      if (!o.parents(".fc").length) {
        var i = r.dropAccept;
        (t.isFunction(i) ? i.call(a, o) : o.is(i)) && (ae = a, te.dragStart(ae, e, n))
      }
    }).bind("dragstop", function(t, e) {
      ae && (te.dragStop(ae, t, e), ae = null)
    })
  }

  function a(n, r) {
    function a() {
      v = r.theme ? "ui" : "fc";
      var n = r.header;
      return n ? h = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))) : e
    }

    function o() {
      h.remove()
    }

    function i(e) {
      var a = t("<td class='fc-header-" + e + "'/>"),
        o = r.header[e];
      return o && t.each(o.split(" "), function(e) {
        var o;
        t.each(this.split(","), function(e, i) {
          if ("title" == i) a.append("<span class='h4 fc-header-title'>&nbsp;</span>"), o && o.addClass(v + "-corner-right"), o = null;
          else {
            var s;
            if (n[i] ? s = n[i] : De[i] && (s = function() {
                u.removeClass(v + "-state-hover"), n.changeView(i)
              }), s) {
              var c = r.theme ? J(r.buttonIcons, i) : null,
                l = J(r.buttonText, i),
                u = t("<span class='btn btn-default fc-button fc-button-" + i + " " + v + "-state-default'>" + (c ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + c + "'/>" + "</span>" : l) + "</span>").click(function() {
                  u.hasClass(v + "-state-disabled") || s()
                }).mousedown(function() {
                  u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-down")
                }).mouseup(function() {
                  u.removeClass(v + "-state-down")
                }).hover(function() {
                  u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-hover")
                }, function() {
                  u.removeClass(v + "-state-hover").removeClass(v + "-state-down")
                }).appendTo(a);
              U(u), o || u.addClass(v + "-corner-left"), o = u
            }
          }
        }), o && o.addClass(v + "-corner-right")
      }), a
    }

    function s(t) {
      h.find(".h4").html(t)
    }

    function c(t) {
      h.find(".fc-header-right").wrapInner("<div class='btn-group'></div>");
      h.find("span.fc-button-" + t).addClass(v + "-state-active")
    }

    function l(t) {
      h.find("span.fc-button-" + t).removeClass(v + "-state-active")
    }

    function u(t) {
      h.find("span.fc-button-" + t).addClass(v + "-state-disabled disabled")
    }

    function f(t) {
      h.find("span.fc-button-" + t).removeClass(v + "-state-disabled disabled")
    }
    var d = this;
    d.render = a, d.destroy = o, d.updateTitle = s, d.activateButton = c, d.deactivateButton = l, d.disableButton = u, d.enableButton = f;
    var v, h = t([])
  }

  function o(n, r) {
    function a(t, e) {
      return !S || S > t || e > E
    }

    function o(t, e) {
      S = t, E = e, W = [];
      var n = ++F,
        r = z.length;
      R = r;
      for (var a = 0; r > a; a++) i(z[a], n)
    }

    function i(e, r) {
      s(e, function(a) {
        if (r == F) {
          if (a) {
            n.eventDataTransform && (a = t.map(a, n.eventDataTransform)), e.eventDataTransform && (a = t.map(a, e.eventDataTransform));
            for (var o = 0; a.length > o; o++) a[o].source = e, b(a[o]);
            W = W.concat(a)
          }
          R--, R || k(W)
        }
      })
    }

    function s(r, a) {
      var o, i, c = we.sourceFetchers;
      for (o = 0; c.length > o; o++) {
        if (i = c[o](r, S, E, a), i === !0) return;
        if ("object" == typeof i) return s(i, a), e
      }
      var l = r.events;
      if (l) t.isFunction(l) ? (p(), l(d(S), d(E), function(t) {
        a(t), y()
      })) : t.isArray(l) ? a(l) : a();
      else {
        var u = r.url;
        if (u) {
          var f = r.success,
            v = r.error,
            h = r.complete,
            g = t.extend({}, r.data || {}),
            m = K(r.startParam, n.startParam),
            b = K(r.endParam, n.endParam);
          m && (g[m] = Math.round(+S / 1e3)), b && (g[b] = Math.round(+E / 1e3)), p(), t.ajax(t.extend({}, Me, r, {
            data: g,
            success: function(e) {
              e = e || [];
              var n = G(f, this, arguments);
              t.isArray(n) && (e = n), a(e)
            },
            error: function() {
              G(v, this, arguments), a()
            },
            complete: function() {
              G(h, this, arguments), y()
            }
          }))
        } else a()
      }
    }

    function c(t) {
      t = l(t), t && (R++, i(t, F))
    }

    function l(n) {
      return t.isFunction(n) || t.isArray(n) ? n = {
        events: n
      } : "string" == typeof n && (n = {
        url: n
      }), "object" == typeof n ? (w(n), z.push(n), n) : e
    }

    function u(e) {
      z = t.grep(z, function(t) {
        return !D(t, e)
      }), W = t.grep(W, function(t) {
        return !D(t.source, e)
      }), k(W)
    }

    function f(t) {
      var e, n, r = W.length,
        a = T().defaultEventEnd,
        o = t.start - t._start,
        i = t.end ? t.end - (t._end || a(t)) : 0;
      for (e = 0; r > e; e++) n = W[e], n._id == t._id && n != t && (n.start = new Date(+n.start + o), n.end = t.end ? n.end ? new Date(+n.end + i) : new Date(+a(n) + i) : null, n.title = t.title, n.url = t.url, n.allDay = t.allDay, n.className = t.className, n.editable = t.editable, n.color = t.color, n.backgroudColor = t.backgroudColor, n.borderColor = t.borderColor, n.textColor = t.textColor, b(n));
      b(t), k(W)
    }

    function v(t, e) {
      b(t), t.source || (e && (H.events.push(t), t.source = H), W.push(t)), k(W)
    }

    function h(e) {
      if (e) {
        if (!t.isFunction(e)) {
          var n = e + "";
          e = function(t) {
            return t._id == n
          }
        }
        W = t.grep(W, e, !0);
        for (var r = 0; z.length > r; r++) t.isArray(z[r].events) && (z[r].events = t.grep(z[r].events, e, !0))
      } else {
        W = [];
        for (var r = 0; z.length > r; r++) t.isArray(z[r].events) && (z[r].events = [])
      }
      k(W)
    }

    function g(e) {
      return t.isFunction(e) ? t.grep(W, e) : e ? (e += "", t.grep(W, function(t) {
        return t._id == e
      })) : W
    }

    function p() {
      N++ || x("loading", null, !0)
    }

    function y() {
      --N || x("loading", null, !1)
    }

    function b(t) {
      var r = t.source || {},
        a = K(r.ignoreTimezone, n.ignoreTimezone);
      t._id = t._id || (t.id === e ? "_fc" + Ce++ : t.id + ""), t.date && (t.start || (t.start = t.date), delete t.date), t._start = d(t.start = m(t.start, a)), t.end = m(t.end, a), t.end && t.end <= t.start && (t.end = null), t._end = t.end ? d(t.end) : null, t.allDay === e && (t.allDay = K(r.allDayDefault, n.allDayDefault)), t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = []
    }

    function w(t) {
      t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = [];
      for (var e = we.sourceNormalizers, n = 0; e.length > n; n++) e[n](t)
    }

    function D(t, e) {
      return t && e && M(t) == M(e)
    }

    function M(t) {
      return ("object" == typeof t ? t.events || t.url : "") || t
    }
    var C = this;
    C.isFetchNeeded = a, C.fetchEvents = o, C.addEventSource = c, C.removeEventSource = u, C.updateEvent = f, C.renderEvent = v, C.removeEvents = h, C.clientEvents = g, C.normalizeEvent = b;
    for (var S, E, x = C.trigger, T = C.getView, k = C.reportEvents, H = {
        events: []
      }, z = [H], F = 0, R = 0, N = 0, W = [], A = 0; r.length > A; A++) l(r[A])
  }

  function i(t, e, n) {
    return t.setFullYear(t.getFullYear() + e), n || f(t), t
  }

  function s(t, e, n) {
    if (+t) {
      var r = t.getMonth() + e,
        a = d(t);
      for (a.setDate(1), a.setMonth(r), t.setMonth(r), n || f(t); t.getMonth() != a.getMonth();) t.setDate(t.getDate() + (a > t ? 1 : -1))
    }
    return t
  }

  function c(t, e, n) {
    if (+t) {
      var r = t.getDate() + e,
        a = d(t);
      a.setHours(9), a.setDate(r), t.setDate(r), n || f(t), l(t, a)
    }
    return t
  }

  function l(t, e) {
    if (+t)
      for (; t.getDate() != e.getDate();) t.setTime(+t + (e > t ? 1 : -1) * xe)
  }

  function u(t, e) {
    return t.setMinutes(t.getMinutes() + e), t
  }

  function f(t) {
    return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
  }

  function d(t, e) {
    return e ? f(new Date(+t)) : new Date(+t)
  }

  function v() {
    var t, e = 0;
    do t = new Date(1970, e++, 1); while (t.getHours());
    return t
  }

  function h(t, e, n) {
    for (e = e || 1; !t.getDay() || n && 1 == t.getDay() || !n && 6 == t.getDay();) c(t, e);
    return t
  }

  function g(t, e) {
    return Math.round((d(t, !0) - d(e, !0)) / Ee)
  }

  function p(t, n, r, a) {
    n !== e && n != t.getFullYear() && (t.setDate(1), t.setMonth(0), t.setFullYear(n)), r !== e && r != t.getMonth() && (t.setDate(1), t.setMonth(r)), a !== e && t.setDate(a)
  }

  function m(t, n) {
    return "object" == typeof t ? t : "number" == typeof t ? new Date(1e3 * t) : "string" == typeof t ? t.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(t)) : (n === e && (n = !0), y(t, n) || (t ? new Date(t) : null)) : null
  }

  function y(t, e) {
    var n = t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
    if (!n) return null;
    var r = new Date(n[1], 0, 1);
    if (e || !n[13]) {
      var a = new Date(n[1], 0, 1, 9, 0);
      n[3] && (r.setMonth(n[3] - 1), a.setMonth(n[3] - 1)), n[5] && (r.setDate(n[5]), a.setDate(n[5])), l(r, a), n[7] && r.setHours(n[7]), n[8] && r.setMinutes(n[8]), n[10] && r.setSeconds(n[10]), n[12] && r.setMilliseconds(1e3 * Number("0." + n[12])), l(r, a)
    } else if (r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), r.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
      var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
      o *= "-" == n[15] ? 1 : -1, r = new Date(+r + 1e3 * 60 * o)
    }
    return r
  }

  function b(t) {
    if ("number" == typeof t) return 60 * t;
    if ("object" == typeof t) return 60 * t.getHours() + t.getMinutes();
    var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
    if (e) {
      var n = parseInt(e[1], 10);
      return e[3] && (n %= 12, "p" == e[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (e[2] ? parseInt(e[2], 10) : 0)
    }
  }

  function w(t, e, n) {
    return D(t, null, e, n)
  }

  function D(t, e, n, r) {
    r = r || ye;
    var a, o, i, s, c = t,
      l = e,
      u = n.length,
      f = "";
    for (a = 0; u > a; a++)
      if (o = n.charAt(a), "'" == o) {
        for (i = a + 1; u > i; i++)
          if ("'" == n.charAt(i)) {
            c && (f += i == a + 1 ? "'" : n.substring(a + 1, i), a = i);
            break
          }
      } else if ("(" == o) {
      for (i = a + 1; u > i; i++)
        if (")" == n.charAt(i)) {
          var d = w(c, n.substring(a + 1, i), r);
          parseInt(d.replace(/\D/, ""), 10) && (f += d), a = i;
          break
        }
    } else if ("[" == o) {
      for (i = a + 1; u > i; i++)
        if ("]" == n.charAt(i)) {
          var v = n.substring(a + 1, i),
            d = w(c, v, r);
          d != w(l, v, r) && (f += d), a = i;
          break
        }
    } else if ("{" == o) c = e, l = t;
    else if ("}" == o) c = t, l = e;
    else {
      for (i = u; i > a; i--)
        if (s = ke[n.substring(a, i)]) {
          c && (f += s(c, r)), a = i - 1;
          break
        } i == a && c && (f += o)
    }
    return f
  }

  function M(t) {
    var e, n = new Date(t.getTime());
    return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
  }

  function C(t) {
    return t.end ? S(t.end, t.allDay) : c(d(t.start), 1)
  }

  function S(t, e) {
    return t = d(t), e || t.getHours() || t.getMinutes() ? c(t, 1) : f(t)
  }

  function E(t, e) {
    return 100 * (e.msLength - t.msLength) + (t.event.start - e.event.start)
  }

  function x(t, e) {
    return t.end > e.start && t.start < e.end
  }

  function T(t, e, n, r) {
    var a, o, i, s, c, l, u, f, v = [],
      h = t.length;
    for (a = 0; h > a; a++) o = t[a], i = o.start, s = e[a], s > n && r > i && (n > i ? (c = d(n), u = !1) : (c = i, u = !0), s > r ? (l = d(r), f = !1) : (l = s, f = !0), v.push({
      event: o,
      start: c,
      end: l,
      isStart: u,
      isEnd: f,
      msLength: l - c
    }));
    return v.sort(E)
  }

  function k(t) {
    var e, n, r, a, o, i = [],
      s = t.length;
    for (e = 0; s > e; e++) {
      for (n = t[e], r = 0;;) {
        if (a = !1, i[r])
          for (o = 0; i[r].length > o; o++)
            if (x(i[r][o], n)) {
              a = !0;
              break
            } if (!a) break;
        r++
      }
      i[r] ? i[r].push(n) : i[r] = [n]
    }
    return i
  }

  function H(n, r, a) {
    n.unbind("mouseover").mouseover(function(n) {
      for (var o, i, s, c = n.target; c != this;) o = c, c = c.parentNode;
      (i = o._fci) !== e && (o._fci = e, s = r[i], a(s.event, s.element, s), t(n.target).trigger(n)), n.stopPropagation()
    })
  }

  function z(e, n, r) {
    for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.width(Math.max(0, n - R(a, r)))
  }

  function F(e, n, r) {
    for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.height(Math.max(0, n - L(a, r)))
  }

  function R(t, e) {
    return N(t) + A(t) + (e ? W(t) : 0)
  }

  function N(e) {
    return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
  }

  function W(e) {
    return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
  }

  function A(e) {
    return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
  }

  function L(t, e) {
    return _(t) + B(t) + (e ? O(t) : 0)
  }

  function _(e) {
    return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
  }

  function O(e) {
    return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
  }

  function B(e) {
    return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
  }

  function q(t, e) {
    e = "number" == typeof e ? e + "px" : e, t.each(function(t, n) {
      n.style.cssText += ";min-height:" + e + ";_height:" + e
    })
  }

  function I() {}

  function Y(t, e) {
    return t - e
  }

  function j(t) {
    return Math.max.apply(Math, t)
  }

  function P(t) {
    return (10 > t ? "0" : "") + t
  }

  function J(t, n) {
    if (t[n] !== e) return t[n];
    for (var r, a = n.split(/(?=[A-Z])/), o = a.length - 1; o >= 0; o--)
      if (r = t[a[o].toLowerCase()], r !== e) return r;
    return t[""]
  }

  function V(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }

  function X(t) {
    return t.id + "/" + t.className + "/" + t.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, "")
  }

  function U(t) {
    t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return !1
    })
  }

  function Z(t) {
    t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
  }

  function $(t, e) {
    t.each(function(t, n) {
      n.className = n.className.replace(/^fc-\w*/, "fc-" + Se[e.getDay()])
    })
  }

  function Q(t, e) {
    var n = t.source || {},
      r = t.color,
      a = n.color,
      o = e("eventColor"),
      i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o,
      s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o,
      c = t.textColor || n.textColor || e("eventTextColor"),
      l = [];
    return i && l.push("background-color:" + i), s && l.push("border-color:" + s), c && l.push("color:" + c), l.join(";")
  }

  function G(e, n, r) {
    if (t.isFunction(e) && (e = [e]), e) {
      var a, o;
      for (a = 0; e.length > a; a++) o = e[a].apply(n, r) || o;
      return o
    }
  }

  function K() {
    for (var t = 0; arguments.length > t; t++)
      if (arguments[t] !== e) return arguments[t]
  }

  function te(t, e) {
    function n(t, e) {
      e && (s(t, e), t.setDate(1));
      var n = d(t, !0);
      n.setDate(1);
      var l = s(d(n), 1),
        u = d(n),
        f = d(l),
        v = a("firstDay"),
        g = a("weekends") ? 0 : 1;
      g && (h(u), h(f, -1, !0)), c(u, -((u.getDay() - Math.max(v, g) + 7) % 7)), c(f, (7 - f.getDay() + Math.max(v, g)) % 7);
      var p = Math.round((f - u) / (7 * Ee));
      "fixed" == a("weekMode") && (c(f, 7 * (6 - p)), p = 6), r.title = i(n, a("titleFormat")), r.start = n, r.end = l, r.visStart = u, r.visEnd = f, o(p, g ? 5 : 7, !0)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "month");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDate
  }

  function ee(t, e) {
    function n(t, e) {
      e && c(t, 7 * e);
      var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
        s = c(d(n), 7),
        l = d(n),
        u = d(s),
        f = a("weekends");
      f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(1, f ? 7 : 5, !1)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "basicWeek");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDates
  }

  function ne(t, e) {
    function n(t, e) {
      e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1)), r.title = i(t, a("titleFormat")), r.start = r.visStart = d(t, !0), r.end = r.visEnd = c(d(r.start), 1), o(1, 1, !1)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "basicDay");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDate
  }

  function re(e, n, r) {
    function a(t, e, n) {
      ne = t, re = e, o();
      var r = !P;
      r ? i() : Te(), s(n)
    }

    function o() {
      ce = Ee("isRTL"), ce ? (le = -1, fe = re - 1) : (le = 1, fe = 0), pe = Ee("firstDay"), ye = Ee("weekends") ? 0 : 1, be = Ee("theme") ? "ui" : "fc", we = Ee("columnFormat"), De = Ee("weekNumbers"), Me = Ee("weekNumberTitle"), Ce = "iso" != Ee("weekNumberCalculation") ? "w" : "W"
    }

    function i() {
      Q = t("<div style='position:absolute;z-index:3;top:0;left:0'/>").appendTo(e)
    }

    function s(n) {
      var r, a, o, i, s = "",
        c = be + "-widget-header",
        l = be + "-widget-content",
        u = B.start.getMonth(),
        d = f(new Date);
      for (s += "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", De && (s += "<th class='fc-week-number " + c + "'/>"), r = 0; re > r; r++) s += "<th class='fc-day-header fc-" + Se[r] + " " + c + "'/>";
      for (s += "</tr></thead><tbody>", r = 0; ne > r; r++) {
        for (s += "<tr class='fc-week'>", De && (s += "<td class='fc-week-number " + l + "'>" + "<div/>" + "</td>"), a = 0; re > a; a++) o = F(r, a), i = ["fc-day", "fc-" + Se[o.getDay()], l], o.getMonth() != u && i.push("fc-other-month"), +o == +d && (i.push("fc-today"), i.push(be + "-state-highlight")), s += "<td class='" + i.join(" ") + "'" + " data-date='" + Fe(o, "yyyy-MM-dd") + "'" + ">" + "<div>", n && (s += "<div class='fc-day-number'>" + o.getDate() + "</div>"), s += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
        s += "</tr>"
      }
      s += "</tbody></table>", _(), I && I.remove(), I = t(s).appendTo(e), Y = I.find("thead"), j = Y.find(".fc-day-header"), P = I.find("tbody"), J = P.find("tr"), V = P.find(".fc-day"), X = J.find("td:first-child"), $ = J.eq(0).find(".fc-day-content > div"), Z(Y.add(Y.find("tr"))), Z(J), J.eq(0).addClass("fc-first"), J.filter(":last").addClass("fc-last"), De && Y.find(".fc-week-number").text(Me), j.each(function(e, n) {
        var r = R(e);
        t(n).text(Fe(r, we))
      }), De && P.find(".fc-week-number > div").each(function(e, n) {
        var r = F(e, 0);
        t(n).text(Fe(r, Ce))
      }), V.each(function(e, n) {
        var r = R(e);
        xe("dayRender", B, r, t(n))
      }), v(V)
    }

    function l(e) {
      K = e;
      var n, r, a, o = K - Y.height();
      "variable" == Ee("weekMode") ? n = r = Math.floor(o / (1 == ne ? 2 : 6)) : (n = Math.floor(o / ne), r = o - n * (ne - 1)), X.each(function(e, o) {
        ne > e && (a = t(o), q(a.find("> div"), (e == ne - 1 ? r : n) - L(a)))
      }), O()
    }

    function u(t) {
      G = t, se.clear(), ee = 0, De && (ee = Y.find("th.fc-week-number").outerWidth()), te = Math.floor((G - ee) / re), z(j.slice(0, -1), te)
    }

    function v(t) {
      t.click(h).mousedown(ze)
    }

    function h(e) {
      if (!Ee("selectable")) {
        var n = y(t(this).data("date"));
        xe("dayClick", this, n, !0, e)
      }
    }

    function p(t, e, n) {
      n && oe.build();
      for (var r = d(B.visStart), a = c(d(r), re), o = 0; ne > o; o++) {
        var i = new Date(Math.max(r, t)),
          s = new Date(Math.min(a, e));
        if (s > i) {
          var l, u;
          ce ? (l = g(s, r) * le + fe + 1, u = g(i, r) * le + fe + 1) : (l = g(i, r), u = g(s, r)), v(m(o, l, o, u - 1))
        }
        c(r, 7), c(a, 7)
      }
    }

    function m(t, n, r, a) {
      var o = oe.rect(t, n, r, a, e);
      return ke(o, e)
    }

    function b(t) {
      return d(t)
    }

    function w(t, e) {
      p(t, c(d(e), 1), !0)
    }

    function D() {
      He()
    }

    function M(t, e, n) {
      var r = k(t),
        a = V[r.row * re + r.col];
      xe("dayClick", a, t, e, n)
    }

    function C(t, e) {
      ie.start(function(t) {
        He(), t && m(t.row, t.col, t.row, t.col)
      }, e)
    }

    function S(t, e, n) {
      var r = ie.stop();
      if (He(), r) {
        var a = H(r);
        xe("drop", t, a, !0, e, n)
      }
    }

    function E(t) {
      return d(t.start)
    }

    function x(t) {
      return se.left(t)
    }

    function T(t) {
      return se.right(t)
    }

    function k(t) {
      return {
        row: Math.floor(g(t, B.visStart) / 7),
        col: N(t.getDay())
      }
    }

    function H(t) {
      return F(t.row, t.col)
    }

    function F(t, e) {
      return c(d(B.visStart), 7 * t + e * le + fe)
    }

    function R(t) {
      return F(Math.floor(t / re), t % re)
    }

    function N(t) {
      return (t - Math.max(pe, ye) + re) % re * le + fe
    }

    function W(t) {
      return J.eq(t)
    }

    function A() {
      var t = 0;
      return De && (t += ee), {
        left: t,
        right: G
      }
    }

    function _() {
      q(e, e.height())
    }

    function O() {
      q(e, 1)
    }
    var B = this;
    B.renderBasic = a, B.setHeight = l, B.setWidth = u, B.renderDayOverlay = p, B.defaultSelectionEnd = b, B.renderSelection = w, B.clearSelection = D, B.reportDayClick = M, B.dragStart = C, B.dragStop = S, B.defaultEventEnd = E, B.getHoverListener = function() {
      return ie
    }, B.colContentLeft = x, B.colContentRight = T, B.dayOfWeekCol = N, B.dateCell = k, B.cellDate = H, B.cellIsAllDay = function() {
      return !0
    }, B.allDayRow = W, B.allDayBounds = A, B.getRowCnt = function() {
      return ne
    }, B.getColCnt = function() {
      return re
    }, B.getColWidth = function() {
      return te
    }, B.getDaySegmentContainer = function() {
      return Q
    }, ue.call(B, e, n, r), ve.call(B), de.call(B), ae.call(B);
    var I, Y, j, P, J, V, X, $, Q, G, K, te, ee, ne, re, oe, ie, se, ce, le, fe, pe, ye, be, we, De, Me, Ce, Ee = B.opt,
      xe = B.trigger,
      Te = B.clearEvents,
      ke = B.renderOverlay,
      He = B.clearOverlays,
      ze = B.daySelectionMousedown,
      Fe = n.formatDate;
    U(e.addClass("fc-grid")), oe = new he(function(e, n) {
      var r, a, o;
      j.each(function(e, i) {
        r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
      }), o[1] = a + r.outerWidth(), J.each(function(n, i) {
        ne > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
      }), o[1] = a + r.outerHeight()
    }), ie = new ge(oe), se = new me(function(t) {
      return $.eq(t)
    })
  }

  function ae() {
    function e(t, e) {
      v(t), x(r(t), e), l("eventAfterAllRender")
    }

    function n() {
      h(), b().empty()
    }

    function r(e) {
      var n, r, a, o, s, l, u = S(),
        f = E(),
        v = d(i.visStart),
        h = c(d(v), f),
        g = t.map(e, C),
        p = [];
      for (n = 0; u > n; n++) {
        for (r = k(T(e, g, v, h)), a = 0; r.length > a; a++)
          for (o = r[a], s = 0; o.length > s; s++) l = o[s], l.row = n, l.level = a, p.push(l);
        c(v, 7), c(h, 7)
      }
      return p
    }

    function a(t, e, n) {
      u(t) && o(t, e), n.isEnd && f(t) && H(t, e, n), g(t, e)
    }

    function o(t, e) {
      var n, r = w();
      e.draggable({
        zIndex: 9,
        delay: 50,
        opacity: s("dragOpacity"),
        revertDuration: s("dragRevertDuration"),
        start: function(a, o) {
          l("eventDragStart", e, t, a, o), m(t, e), r.start(function(r, a, o, i) {
            e.draggable("option", "revert", !r || !o && !i), M(), r ? (n = 7 * o + i * (s("isRTL") ? -1 : 1), D(c(d(t.start), n), c(C(t), n))) : n = 0
          }, a, "drag")
        },
        stop: function(a, o) {
          r.stop(), M(), l("eventDragStop", e, t, a, o), n ? y(this, t, n, 0, t.allDay, a, o) : (e.css("filter", ""), p(t, e))
        }
      })
    }
    var i = this;
    i.renderEvents = e, i.compileDaySegs = r, i.clearEvents = n, i.bindDaySeg = a, fe.call(i);
    var s = i.opt,
      l = i.trigger,
      u = i.isEventDraggable,
      f = i.isEventResizable,
      v = i.reportEvents,
      h = i.reportEventClear,
      g = i.eventElementHandlers,
      p = i.showEvents,
      m = i.hideEvents,
      y = i.eventDrop,
      b = i.getDaySegmentContainer,
      w = i.getHoverListener,
      D = i.renderDayOverlay,
      M = i.clearOverlays,
      S = i.getRowCnt,
      E = i.getColCnt,
      x = i.renderDaySegs,
      H = i.resizableDayEvent
  }

  function oe(t, e) {
    function n(t, e) {
      e && c(t, 7 * e);
      var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
        s = c(d(n), 7),
        l = d(n),
        u = d(s),
        f = a("weekends");
      f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(f ? 7 : 5)
    }
    var r = this;
    r.render = n, se.call(r, t, e, "agendaWeek");
    var a = r.opt,
      o = r.renderAgenda,
      i = e.formatDates
  }

  function ie(t, e) {
    function n(t, e) {
      e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1));
      var n = d(t, !0),
        s = c(d(n), 1);
      r.title = i(t, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = s, o(1)
    }
    var r = this;
    r.render = n, se.call(r, t, e, "agendaDay");
    var a = r.opt,
      o = r.renderAgenda,
      i = e.formatDate
  }

  function se(n, r, a) {
    function o(t) {
      Le = t, i(), te ? nn() : s(), l()
    }

    function i() {
      Ye = tn("theme") ? "ui" : "fc", Pe = tn("weekends") ? 0 : 1, je = tn("firstDay"), (Je = tn("isRTL")) ? (Ve = -1, Xe = Le - 1) : (Ve = 1, Xe = 0), Ue = b(tn("minTime")), Ze = b(tn("maxTime")), $e = tn("columnFormat"), Qe = tn("weekNumbers"), Ge = tn("weekNumberTitle"), Ke = "iso" != tn("weekNumberCalculation") ? "w" : "W", Ne = tn("snapMinutes") || tn("slotMinutes")
    }

    function s() {
      var e, r, a, o, i, s = Ye + "-widget-header",
        c = Ye + "-widget-content",
        l = 0 == tn("slotMinutes") % 15;
      for (e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>", e += Qe ? "<th class='fc-agenda-axis fc-week-number " + s + "'/>" : "<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++) e += "<th class='fc- fc-col" + r + " " + s + "'/>";
      for (e += "<th class='fc-agenda-gutter " + s + "'>&nbsp;</th>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + "<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++) e += "<td class='fc- fc-col" + r + " " + c + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>";
      for (e += "<td class='fc-agenda-gutter " + c + "'>&nbsp;</td>" + "</tr>" + "</tbody>" + "</table>", te = t(e).appendTo(n), ee = te.find("thead"), ne = ee.find("th").slice(1, -1), re = te.find("tbody"), ae = re.find("td").slice(0, -1), oe = ae.find("div.fc-day-content div"), ie = ae.eq(0), se = ie.find("> div"), Z(ee.add(ee.find("tr"))), Z(re.add(re.find("tr"))), Se = ee.find("th:first"), Ee = te.find(".fc-agenda-gutter"), le = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), tn("allDaySlot") ? (fe = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(le), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + tn("allDayText") + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", pe = t(e).appendTo(le), ye = pe.find("tr"), D(ye.find("td")), Se = Se.add(pe.find("th:first")), Ee = Ee.add(pe.find("th.fc-agenda-gutter")), le.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : fe = t([]), be = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(le), we = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(be), De = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", a = v(), o = u(d(a), Ze), u(a, Ue), _e = 0, r = 0; o > a; r++) i = a.getMinutes(), e += "<tr class='fc-slot" + r + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (l && i ? "&nbsp;" : un(a, tn("axisFormat"))) + "</th>" + "<td class='" + c + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", u(a, tn("slotMinutes")), _e++;
      e += "</tbody></table>", Me = t(e).appendTo(we), Ce = Me.find("div:first"), M(Me.find("td")), Se = Se.add(Me.find("th:first"))
    }

    function l() {
      var t, e, n, r, a = f(new Date);
      if (Qe) {
        var o = un(N(0), Ke);
        Je ? o += Ge : o = Ge + o, ee.find(".fc-week-number").text(o)
      }
      for (t = 0; Le > t; t++) r = N(t), e = ne.eq(t), e.html(un(r, $e)), n = ae.eq(t), +r == +a ? n.addClass(Ye + "-state-highlight fc-today") : n.removeClass(Ye + "-state-highlight fc-today"), $(e.add(n), r)
    }

    function h(t, n) {
      t === e && (t = ke), ke = t, fn = {};
      var r = re.position().top,
        a = be.position().top,
        o = Math.min(t - r, Me.height() + a + 1);
      se.height(o - L(ie)), le.css("top", r), be.height(o - a - 1), Re = Ce.height() + 1, We = tn("slotMinutes") / Ne, Ae = Re / We, n && m()
    }

    function p(e) {
      Te = e, qe.clear(), He = 0, z(Se.width("").each(function(e, n) {
        He = Math.max(He, t(n).outerWidth())
      }), He);
      var n = be[0].clientWidth;
      Fe = be.width() - n, Fe ? (z(Ee, Fe), Ee.show().prev().removeClass("fc-last")) : Ee.hide().prev().addClass("fc-last"), ze = Math.floor((n - He) / Le), z(ne.slice(0, -1), ze)
    }

    function m() {
      function t() {
        be.scrollTop(r)
      }
      var e = v(),
        n = d(e);
      n.setHours(tn("firstHour"));
      var r = _(e, n) + 1;
      t(), setTimeout(t, 0)
    }

    function y() {
      Ie = be.scrollTop()
    }

    function w() {
      be.scrollTop(Ie)
    }

    function D(t) {
      t.click(C).mousedown(cn)
    }

    function M(t) {
      t.click(C).mousedown(V)
    }

    function C(t) {
      if (!tn("selectable")) {
        var e = Math.min(Le - 1, Math.floor((t.pageX - te.offset().left - He) / ze)),
          n = N(e),
          r = this.parentNode.className.match(/fc-slot(\d+)/);
        if (r) {
          var a = parseInt(r[1]) * tn("slotMinutes"),
            o = Math.floor(a / 60);
          n.setHours(o), n.setMinutes(a % 60 + Ue), en("dayClick", ae[e], n, !1, t)
        } else en("dayClick", ae[e], n, !0, t)
      }
    }

    function S(t, e, n) {
      n && Oe.build();
      var r, a, o = d(K.visStart);
      Je ? (r = g(e, o) * Ve + Xe + 1, a = g(t, o) * Ve + Xe + 1) : (r = g(t, o), a = g(e, o)), r = Math.max(0, r), a = Math.min(Le, a), a > r && D(E(0, r, 0, a - 1))
    }

    function E(t, e, n, r) {
      var a = Oe.rect(t, e, n, r, le);
      return rn(a, le)
    }

    function x(t, e) {
      for (var n = d(K.visStart), r = c(d(n), 1), a = 0; Le > a; a++) {
        var o = new Date(Math.max(n, t)),
          i = new Date(Math.min(r, e));
        if (i > o) {
          var s = a * Ve + Xe,
            l = Oe.rect(0, s, 0, s, we),
            u = _(n, o),
            f = _(n, i);
          l.top = u, l.height = f - u, M(rn(l, we))
        }
        c(n, 1), c(r, 1)
      }
    }

    function T(t) {
      return qe.left(t)
    }

    function k(t) {
      return qe.right(t)
    }

    function H(t) {
      return {
        row: Math.floor(g(t, K.visStart) / 7),
        col: A(t.getDay())
      }
    }

    function R(t) {
      var e = N(t.col),
        n = t.row;
      return tn("allDaySlot") && n--, n >= 0 && u(e, Ue + n * Ne), e
    }

    function N(t) {
      return c(d(K.visStart), t * Ve + Xe)
    }

    function W(t) {
      return tn("allDaySlot") && !t.row
    }

    function A(t) {
      return (t - Math.max(je, Pe) + Le) % Le * Ve + Xe
    }

    function _(t, n) {
      if (t = d(t, !0), u(d(t), Ue) > n) return 0;
      if (n >= u(d(t), Ze)) return Me.height();
      var r = tn("slotMinutes"),
        a = 60 * n.getHours() + n.getMinutes() - Ue,
        o = Math.floor(a / r),
        i = fn[o];
      return i === e && (i = fn[o] = Me.find("tr:eq(" + o + ") td div")[0].offsetTop), Math.max(0, Math.round(i - 1 + Re * (a % r / r)))
    }

    function O() {
      return {
        left: He,
        right: Te - Fe
      }
    }

    function B() {
      return ye
    }

    function q(t) {
      var e = d(t.start);
      return t.allDay ? e : u(e, tn("defaultEventMinutes"))
    }

    function I(t, e) {
      return e ? d(t) : u(d(t), tn("slotMinutes"))
    }

    function j(t, e, n) {
      n ? tn("allDaySlot") && S(t, c(d(e), 1), !0) : P(t, e)
    }

    function P(e, n) {
      var r = tn("selectHelper");
      if (Oe.build(), r) {
        var a = g(e, K.visStart) * Ve + Xe;
        if (a >= 0 && Le > a) {
          var o = Oe.rect(0, a, 0, a, we),
            i = _(e, e),
            s = _(e, n);
          if (s > i) {
            if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
              var c = r(e, n);
              c && (o.position = "absolute", o.zIndex = 8, xe = t(c).css(o).appendTo(we))
            } else o.isStart = !0, o.isEnd = !0, xe = t(ln({
              title: "",
              start: e,
              end: n,
              className: ["fc-select-helper"],
              editable: !1
            }, o)), xe.css("opacity", tn("dragOpacity"));
            xe && (M(xe), we.append(xe), z(xe, o.width, !0), F(xe, o.height, !0))
          }
        }
      } else x(e, n)
    }

    function J() {
      an(), xe && (xe.remove(), xe = null)
    }

    function V(e) {
      if (1 == e.which && tn("selectable")) {
        sn(e);
        var n;
        Be.start(function(t, e) {
          if (J(), t && t.col == e.col && !W(t)) {
            var r = R(e),
              a = R(t);
            n = [r, u(d(r), Ne), a, u(d(a), Ne)].sort(Y), P(n[0], n[3])
          } else n = null
        }, e), t(document).one("mouseup", function(t) {
          Be.stop(), n && (+n[0] == +n[1] && X(n[0], !1, t), on(n[0], n[3], !1, t))
        })
      }
    }

    function X(t, e, n) {
      en("dayClick", ae[A(t.getDay())], t, e, n)
    }

    function Q(t, e) {
      Be.start(function(t) {
        if (an(), t)
          if (W(t)) E(t.row, t.col, t.row, t.col);
          else {
            var e = R(t),
              n = u(d(e), tn("defaultEventMinutes"));
            x(e, n)
          }
      }, e)
    }

    function G(t, e, n) {
      var r = Be.stop();
      an(), r && en("drop", t, R(r), W(r), e, n)
    }
    var K = this;
    K.renderAgenda = o, K.setWidth = p, K.setHeight = h, K.beforeHide = y, K.afterShow = w, K.defaultEventEnd = q, K.timePosition = _, K.dayOfWeekCol = A, K.dateCell = H, K.cellDate = R, K.cellIsAllDay = W, K.allDayRow = B, K.allDayBounds = O, K.getHoverListener = function() {
      return Be
    }, K.colContentLeft = T, K.colContentRight = k, K.getDaySegmentContainer = function() {
      return fe
    }, K.getSlotSegmentContainer = function() {
      return De
    }, K.getMinMinute = function() {
      return Ue
    }, K.getMaxMinute = function() {
      return Ze
    }, K.getBodyContent = function() {
      return we
    }, K.getRowCnt = function() {
      return 1
    }, K.getColCnt = function() {
      return Le
    }, K.getColWidth = function() {
      return ze
    }, K.getSnapHeight = function() {
      return Ae
    }, K.getSnapMinutes = function() {
      return Ne
    }, K.defaultSelectionEnd = I, K.renderDayOverlay = S, K.renderSelection = j, K.clearSelection = J, K.reportDayClick = X, K.dragStart = Q, K.dragStop = G, ue.call(K, n, r, a), ve.call(K), de.call(K), ce.call(K);
    var te, ee, ne, re, ae, oe, ie, se, le, fe, pe, ye, be, we, De, Me, Ce, Se, Ee, xe, Te, ke, He, ze, Fe, Re, Ne, We, Ae, Le, _e, Oe, Be, qe, Ie, Ye, je, Pe, Je, Ve, Xe, Ue, Ze, $e, Qe, Ge, Ke, tn = K.opt,
      en = K.trigger,
      nn = K.clearEvents,
      rn = K.renderOverlay,
      an = K.clearOverlays,
      on = K.reportSelection,
      sn = K.unselect,
      cn = K.daySelectionMousedown,
      ln = K.slotSegHtml,
      un = r.formatDate,
      fn = {};
    U(n.addClass("fc-agenda")), Oe = new he(function(e, n) {
      function r(t) {
        return Math.max(c, Math.min(l, t))
      }
      var a, o, i;
      ne.each(function(e, r) {
        a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
      }), i[1] = o + a.outerWidth(), tn("allDaySlot") && (a = ye, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
      for (var s = we.offset().top, c = be.offset().top, l = c + be.outerHeight(), u = 0; _e * We > u; u++) e.push([r(s + Ae * u), r(s + Ae * (u + 1))])
    }), Be = new ge(Oe), qe = new me(function(t) {
      return oe.eq(t)
    })
  }

  function ce() {
    function n(t, e) {
      S(t);
      var n, r = t.length,
        i = [],
        c = [];
      for (n = 0; r > n; n++) t[n].allDay ? i.push(t[n]) : c.push(t[n]);
      y("allDaySlot") && (Y(a(i), e), z()), s(o(c), e), b("eventAfterAllRender")
    }

    function r() {
      E(), N().empty(), W().empty()
    }

    function a(e) {
      var n, r, a, o, i = k(T(e, t.map(e, C), m.visStart, m.visEnd)),
        s = i.length,
        c = [];
      for (n = 0; s > n; n++)
        for (r = i[n], a = 0; r.length > a; a++) o = r[a], o.row = 0, o.level = n, c.push(o);
      return c
    }

    function o(e) {
      var n, r, a, o, s, l, f = P(),
        v = O(),
        h = _(),
        g = u(d(m.visStart), v),
        p = t.map(e, i),
        y = [];
      for (n = 0; f > n; n++) {
        for (r = k(T(e, p, g, u(d(g), h - v))), le(r), a = 0; r.length > a; a++)
          for (o = r[a], s = 0; o.length > s; s++) l = o[s], l.col = n, l.level = a, y.push(l);
        c(g, 1, !0)
      }
      return y
    }

    function i(t) {
      return t.end ? d(t.end) : u(d(t.start), y("defaultEventMinutes"))
    }

    function s(n, r) {
      var a, o, i, s, c, u, f, d, h, g, p, m, w, D, M, C, S, E, x, T, k, z, F = n.length,
        N = "",
        A = {},
        _ = {},
        O = W(),
        Y = P();
      for ((T = y("isRTL")) ? (k = -1, z = Y - 1) : (k = 1, z = 0), a = 0; F > a; a++) o = n[a], i = o.event, s = B(o.start, o.start), c = B(o.start, o.end), u = o.col, f = o.level, d = o.forward || 0, h = q(u * k + z), g = I(u * k + z) - h, g = Math.min(g - 6, .95 * g), p = f ? g / (f + d + 1) : d ? 2 * (g / (d + 1) - 6) : g, m = h + g / (f + d + 1) * f * k + (T ? g - p : 0), o.top = s, o.left = m, o.outerWidth = p, o.outerHeight = c - s, N += l(i, o);
      for (O[0].innerHTML = N, w = O.children(), a = 0; F > a; a++) o = n[a], i = o.event, D = t(w[a]), M = b("eventRender", i, i, D), M === !1 ? D.remove() : (M && M !== !0 && (D.remove(), D = t(M).css({
        position: "absolute",
        top: o.top,
        left: o.left
      }).appendTo(O)), o.element = D, i._id === r ? v(i, D, o) : D[0]._fci = a, G(i, D));
      for (H(O, n, v), a = 0; F > a; a++) o = n[a], (D = o.element) && (S = A[C = o.key = X(D[0])], o.vsides = S === e ? A[C] = L(D, !0) : S, S = _[C], o.hsides = S === e ? _[C] = R(D, !0) : S, E = D.find(".fc-event-title"), E.length && (o.contentTop = E[0].offsetTop));
      for (a = 0; F > a; a++) o = n[a], (D = o.element) && (D[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", x = Math.max(0, o.outerHeight - o.vsides), D[0].style.height = x + "px", i = o.event, o.contentTop !== e && 10 > x - o.contentTop && (D.find("div.fc-event-time").text(ie(i.start, y("timeFormat")) + " " + i.title), D.find("div.fc-event-title").remove()), b("eventAfterRender", i, i, D))
    }

    function l(t, e) {
      var n = "<",
        r = t.url,
        a = Q(t, y),
        o = ["fc-event", "fc-event-vert"];
      return w(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + V(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;top:" + e.top + "px;left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + V(se(t.start, t.end, y("timeFormat"))) + "</div>" + "<div class='fc-event-title'>" + V(t.title) + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && D(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
    }

    function f(t, e, n) {
      w(t) && h(t, e, n.isStart), n.isEnd && D(t) && j(t, e, n), x(t, e)
    }

    function v(t, e, n) {
      var r = e.find("div.fc-event-time");
      w(t) && g(t, e, r), n.isEnd && D(t) && p(t, e, r), x(t, e)
    }

    function h(t, e, n) {
      function r() {
        s || (e.width(a).height("").draggable("option", "grid", null), s = !0)
      }
      var a, o, i, s = !0,
        l = y("isRTL") ? -1 : 1,
        u = A(),
        f = J(),
        v = U(),
        h = Z(),
        g = O();
      e.draggable({
        zIndex: 9,
        opacity: y("dragOpacity", "month"),
        revertDuration: y("dragRevertDuration"),
        start: function(g, p) {
          b("eventDragStart", e, t, g, p), te(t, e), a = e.width(), u.start(function(a, u, g, p) {
            ae(), a ? (o = !1, i = p * l, a.row ? n ? s && (e.width(f - 10), F(e, v * Math.round((t.end ? (t.end - t.start) / Te : y("defaultEventMinutes")) / h)), e.draggable("option", "grid", [f, 1]), s = !1) : o = !0 : (re(c(d(t.start), i), c(C(t), i)), r()), o = o || s && !i) : (r(), o = !0), e.draggable("option", "revert", o)
          }, g, "drag")
        },
        stop: function(n, a) {
          if (u.stop(), ae(), b("eventDragStop", e, t, n, a), o) r(), e.css("filter", ""), K(t, e);
          else {
            var c = 0;
            s || (c = Math.round((e.offset().top - $().offset().top) / v) * h + g - (60 * t.start.getHours() + t.start.getMinutes())), ee(this, t, i, c, s, n, a)
          }
        }
      })
    }

    function g(t, e, n) {
      function r(e) {
        var r, a = u(d(t.start), e);
        t.end && (r = u(d(t.end), e)), n.text(se(a, r, y("timeFormat")))
      }

      function a() {
        f && (n.css("display", ""), e.draggable("option", "grid", [p, m]), f = !1)
      }
      var o, i, s, l, f = !1,
        v = y("isRTL") ? -1 : 1,
        h = A(),
        g = P(),
        p = J(),
        m = U(),
        w = Z();
      e.draggable({
        zIndex: 9,
        scroll: !1,
        grid: [p, m],
        axis: 1 == g ? "y" : !1,
        opacity: y("dragOpacity"),
        revertDuration: y("dragRevertDuration"),
        start: function(r, u) {
          b("eventDragStart", e, t, r, u), te(t, e), o = e.position(), s = l = 0, h.start(function(r, o, s, l) {
            e.draggable("option", "revert", !r), ae(), r && (i = l * v, y("allDaySlot") && !r.row ? (f || (f = !0, n.hide(), e.draggable("option", "grid", null)), re(c(d(t.start), i), c(C(t), i))) : a())
          }, r, "drag")
        },
        drag: function(t, e) {
          s = Math.round((e.position.top - o.top) / m) * w, s != l && (f || r(s), l = s)
        },
        stop: function(n, c) {
          var l = h.stop();
          ae(), b("eventDragStop", e, t, n, c), l && (i || s || f) ? ee(this, t, i, f ? 0 : s, f, n, c) : (a(), e.css("filter", ""), e.css(o), r(0), K(t, e))
        }
      })
    }

    function p(t, e, n) {
      var r, a, o = U(),
        i = Z();
      e.resizable({
        handles: {
          s: ".ui-resizable-handle"
        },
        grid: o,
        start: function(n, o) {
          r = a = 0, te(t, e), e.css("z-index", 9), b("eventResizeStart", this, t, n, o)
        },
        resize: function(s, c) {
          r = Math.round((Math.max(o, e.height()) - c.originalSize.height) / o), r != a && (n.text(se(t.start, r || t.end ? u(M(t), i * r) : null, y("timeFormat"))), a = r)
        },
        stop: function(n, a) {
          b("eventResizeStop", this, t, n, a), r ? ne(this, t, 0, i * r, n, a) : (e.css("z-index", 8), K(t, e))
        }
      })
    }
    var m = this;
    m.renderEvents = n, m.compileDaySegs = a, m.clearEvents = r, m.slotSegHtml = l, m.bindDaySeg = f, fe.call(m);
    var y = m.opt,
      b = m.trigger,
      w = m.isEventDraggable,
      D = m.isEventResizable,
      M = m.eventEnd,
      S = m.reportEvents,
      E = m.reportEventClear,
      x = m.eventElementHandlers,
      z = m.setHeight,
      N = m.getDaySegmentContainer,
      W = m.getSlotSegmentContainer,
      A = m.getHoverListener,
      _ = m.getMaxMinute,
      O = m.getMinMinute,
      B = m.timePosition,
      q = m.colContentLeft,
      I = m.colContentRight,
      Y = m.renderDaySegs,
      j = m.resizableDayEvent,
      P = m.getColCnt,
      J = m.getColWidth,
      U = m.getSnapHeight,
      Z = m.getSnapMinutes,
      $ = m.getBodyContent,
      G = m.reportEventElement,
      K = m.showEvents,
      te = m.hideEvents,
      ee = m.eventDrop,
      ne = m.eventResize,
      re = m.renderDayOverlay,
      ae = m.clearOverlays,
      oe = m.calendar,
      ie = oe.formatDate,
      se = oe.formatDates
  }

  function le(t) {
    var e, n, r, a, o, i;
    for (e = t.length - 1; e > 0; e--)
      for (a = t[e], n = 0; a.length > n; n++)
        for (o = a[n], r = 0; t[e - 1].length > r; r++) i = t[e - 1][r], x(o, i) && (i.forward = Math.max(i.forward || 0, (o.forward || 0) + 1))
  }

  function ue(t, n, r) {
    function a(t, e) {
      var n = F[t];
      return "object" == typeof n ? J(n, e || r) : n
    }

    function o(t, e) {
      return n.trigger.apply(n, [t, e || S].concat(Array.prototype.slice.call(arguments, 2), [S]))
    }

    function i(t) {
      return l(t) && !a("disableDragging")
    }

    function s(t) {
      return l(t) && !a("disableResizing")
    }

    function l(t) {
      return K(t.editable, (t.source || {}).editable, a("editable"))
    }

    function f(t) {
      k = {};
      var e, n, r = t.length;
      for (e = 0; r > e; e++) n = t[e], k[n._id] ? k[n._id].push(n) : k[n._id] = [n]
    }

    function v(t) {
      return t.end ? d(t.end) : E(t)
    }

    function h(t, e) {
      H.push(e), z[t._id] ? z[t._id].push(e) : z[t._id] = [e]
    }

    function g() {
      H = [], z = {}
    }

    function p(t, n) {
      n.click(function(r) {
        return n.hasClass("ui-draggable-dragging") || n.hasClass("ui-resizable-resizing") ? e : o("eventClick", this, t, r)
      }).hover(function(e) {
        o("eventMouseover", this, t, e)
      }, function(e) {
        o("eventMouseout", this, t, e)
      })
    }

    function m(t, e) {
      b(t, e, "show")
    }

    function y(t, e) {
      b(t, e, "hide")
    }

    function b(t, e, n) {
      var r, a = z[t._id],
        o = a.length;
      for (r = 0; o > r; r++) e && a[r][0] == e[0] || a[r][n]()
    }

    function w(t, e, n, r, a, i, s) {
      var c = e.allDay,
        l = e._id;
      M(k[l], n, r, a), o("eventDrop", t, e, n, r, a, function() {
        M(k[l], -n, -r, c), T(l)
      }, i, s), T(l)
    }

    function D(t, e, n, r, a, i) {
      var s = e._id;
      C(k[s], n, r), o("eventResize", t, e, n, r, function() {
        C(k[s], -n, -r), T(s)
      }, a, i), T(s)
    }

    function M(t, n, r, a) {
      r = r || 0;
      for (var o, i = t.length, s = 0; i > s; s++) o = t[s], a !== e && (o.allDay = a), u(c(o.start, n, !0), r), o.end && (o.end = u(c(o.end, n, !0), r)), x(o, F)
    }

    function C(t, e, n) {
      n = n || 0;
      for (var r, a = t.length, o = 0; a > o; o++) r = t[o], r.end = u(c(v(r), e, !0), n), x(r, F)
    }
    var S = this;
    S.element = t, S.calendar = n, S.name = r, S.opt = a, S.trigger = o, S.isEventDraggable = i, S.isEventResizable = s, S.reportEvents = f, S.eventEnd = v, S.reportEventElement = h, S.reportEventClear = g, S.eventElementHandlers = p, S.showEvents = m, S.hideEvents = y, S.eventDrop = w, S.eventResize = D;
    var E = S.defaultEventEnd,
      x = n.normalizeEvent,
      T = n.reportEventChange,
      k = {},
      H = [],
      z = {},
      F = n.options
  }

  function fe() {
    function n(t, e) {
      var n, r, c, d, p, m, y, b, w = B(),
        D = T(),
        M = k(),
        C = 0,
        S = t.length;
      for (w[0].innerHTML = a(t), o(t, w.children()), i(t), s(t, w, e), l(t), u(t), f(t), n = v(), r = 0; D > r; r++) {
        for (c = 0, d = [], p = 0; M > p; p++) d[p] = 0;
        for (; S > C && (m = t[C]).row == r;) {
          for (y = j(d.slice(m.startCol, m.endCol)), m.top = y, y += m.outerHeight, b = m.startCol; m.endCol > b; b++) d[b] = y;
          C++
        }
        n[r].height(j(d))
      }
      g(t, h(n))
    }

    function r(e, n, r) {
      var i, s, c, d = t("<div/>"),
        p = B(),
        m = e.length;
      for (d[0].innerHTML = a(e), i = d.children(), p.append(i), o(e, i), l(e), u(e), f(e), g(e, h(v())), i = [], s = 0; m > s; s++) c = e[s].element, c && (e[s].row === n && c.css("top", r), i.push(c[0]));
      return t(i)
    }

    function a(t) {
      var e, n, r, a, o, i, s, c, l, u, f = y("isRTL"),
        d = t.length,
        v = F(),
        h = v.left,
        g = v.right,
        p = "";
      for (e = 0; d > e; e++) n = t[e], r = n.event, o = ["fc-event", "fc-event-hori"], w(r) && o.push("fc-event-draggable"), n.isStart && o.push("fc-event-start"), n.isEnd && o.push("fc-event-end"), f ? (i = A(n.end.getDay() - 1), s = A(n.start.getDay()), c = n.isEnd ? N(i) : h, l = n.isStart ? W(s) : g) : (i = A(n.start.getDay()), s = A(n.end.getDay() - 1), c = n.isStart ? N(i) : h, l = n.isEnd ? W(s) : g), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || [])), a = r.url, u = Q(r, y), p += a ? "<a href='" + V(a) + "'" : "<div", p += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;left:" + c + "px;" + u + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && n.isStart && (p += "<span class='fc-event-time'>" + V(I(r.start, r.end, y("timeFormat"))) + "</span>"), p += "<span class='fc-event-title'>" + V(r.title) + "</span>" + "</div>", n.isEnd && D(r) && (p += "<div class='ui-resizable-handle ui-resizable-" + (f ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), p += "</" + (a ? "a" : "div") + ">", n.left = c, n.outerWidth = l - c, n.startCol = i, n.endCol = s + 1;
      return p
    }

    function o(e, n) {
      var r, a, o, i, s, c = e.length;
      for (r = 0; c > r; r++) a = e[r], o = a.event, i = t(n[r]), s = b("eventRender", o, o, i), s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({
        position: "absolute",
        left: a.left
      }), i.replaceWith(s), i = s), a.element = i)
    }

    function i(t) {
      var e, n, r, a = t.length;
      for (e = 0; a > e; e++) n = t[e], r = n.element, r && C(n.event, r)
    }

    function s(t, e, n) {
      var r, a, o, i, s = t.length;
      for (r = 0; s > r; r++) a = t[r], o = a.element, o && (i = a.event, i._id === n ? q(i, o, a) : o[0]._fci = r);
      H(e, t, q)
    }

    function l(t) {
      var n, r, a, o, i, s = t.length,
        c = {};
      for (n = 0; s > n; n++) r = t[n], a = r.element, a && (o = r.key = X(a[0]), i = c[o], i === e && (i = c[o] = R(a, !0)), r.hsides = i)
    }

    function u(t) {
      var e, n, r, a = t.length;
      for (e = 0; a > e; e++) n = t[e], r = n.element, r && (r[0].style.width = Math.max(0, n.outerWidth - n.hsides) + "px")
    }

    function f(t) {
      var n, r, a, o, i, s = t.length,
        c = {};
      for (n = 0; s > n; n++) r = t[n], a = r.element, a && (o = r.key, i = c[o], i === e && (i = c[o] = O(a)), r.outerHeight = a[0].offsetHeight + i)
    }

    function v() {
      var t, e = T(),
        n = [];
      for (t = 0; e > t; t++) n[t] = z(t).find("div.fc-day-content > div");
      return n
    }

    function h(t) {
      var e, n = t.length,
        r = [];
      for (e = 0; n > e; e++) r[e] = t[e][0].offsetTop;
      return r
    }

    function g(t, e) {
      var n, r, a, o, i = t.length;
      for (n = 0; i > n; n++) r = t[n], a = r.element, a && (a[0].style.top = e[r.row] + (r.top || 0) + "px", o = r.event, b("eventAfterRender", o, o, a))
    }

    function p(e, n, a) {
      var o = y("isRTL"),
        i = o ? "w" : "e",
        s = n.find(".ui-resizable-" + i),
        l = !1;
      U(n), n.mousedown(function(t) {
        t.preventDefault()
      }).click(function(t) {
        l && (t.preventDefault(), t.stopImmediatePropagation())
      }), s.mousedown(function(s) {
        function u(n) {
          b("eventResizeStop", this, e, n), t("body").css("cursor", ""), h.stop(), P(), f && x(this, e, f, 0, n), setTimeout(function() {
            l = !1
          }, 0)
        }
        if (1 == s.which) {
          l = !0;
          var f, v, h = m.getHoverListener(),
            g = T(),
            p = k(),
            y = o ? -1 : 1,
            w = o ? p - 1 : 0,
            D = n.css("top"),
            C = t.extend({}, e),
            H = L(e.start);
          J(), t("body").css("cursor", i + "-resize").one("mouseup", u), b("eventResizeStart", this, e, s), h.start(function(t, n) {
            if (t) {
              var s = Math.max(H.row, t.row),
                l = t.col;
              1 == g && (s = 0), s == H.row && (l = o ? Math.min(H.col, l) : Math.max(H.col, l)), f = 7 * s + l * y + w - (7 * n.row + n.col * y + w);
              var u = c(M(e), f, !0);
              if (f) {
                C.end = u;
                var h = v;
                v = r(_([C]), a.row, D), v.find("*").css("cursor", i + "-resize"), h && h.remove(), E(e)
              } else v && (S(e), v.remove(), v = null);
              P(), Y(e.start, c(d(u), 1))
            }
          }, s)
        }
      })
    }
    var m = this;
    m.renderDaySegs = n, m.resizableDayEvent = p;
    var y = m.opt,
      b = m.trigger,
      w = m.isEventDraggable,
      D = m.isEventResizable,
      M = m.eventEnd,
      C = m.reportEventElement,
      S = m.showEvents,
      E = m.hideEvents,
      x = m.eventResize,
      T = m.getRowCnt,
      k = m.getColCnt;
    m.getColWidth;
    var z = m.allDayRow,
      F = m.allDayBounds,
      N = m.colContentLeft,
      W = m.colContentRight,
      A = m.dayOfWeekCol,
      L = m.dateCell,
      _ = m.compileDaySegs,
      B = m.getDaySegmentContainer,
      q = m.bindDaySeg,
      I = m.calendar.formatDates,
      Y = m.renderDayOverlay,
      P = m.clearOverlays,
      J = m.clearSelection
  }

  function de() {
    function e(t, e, a) {
      n(), e || (e = c(t, a)), l(t, e, a), r(t, e, a)
    }

    function n(t) {
      f && (f = !1, u(), s("unselect", null, t))
    }

    function r(t, e, n, r) {
      f = !0, s("select", null, t, e, n, r)
    }

    function a(e) {
      var a = o.cellDate,
        s = o.cellIsAllDay,
        c = o.getHoverListener(),
        f = o.reportDayClick;
      if (1 == e.which && i("selectable")) {
        n(e);
        var d;
        c.start(function(t, e) {
          u(), t && s(t) ? (d = [a(e), a(t)].sort(Y), l(d[0], d[1], !0)) : d = null
        }, e), t(document).one("mouseup", function(t) {
          c.stop(), d && (+d[0] == +d[1] && f(d[0], !0, t), r(d[0], d[1], !0, t))
        })
      }
    }
    var o = this;
    o.select = e, o.unselect = n, o.reportSelection = r, o.daySelectionMousedown = a;
    var i = o.opt,
      s = o.trigger,
      c = o.defaultSelectionEnd,
      l = o.renderSelection,
      u = o.clearSelection,
      f = !1;
    i("selectable") && i("unselectAuto") && t(document).mousedown(function(e) {
      var r = i("unselectCancel");
      r && t(e.target).parents(r).length || n(e)
    })
  }

  function ve() {
    function e(e, n) {
      var r = o.shift();
      return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
    }

    function n() {
      for (var t; t = a.shift();) o.push(t.hide().unbind())
    }
    var r = this;
    r.renderOverlay = e, r.clearOverlays = n;
    var a = [],
      o = []
  }

  function he(t) {
    var e, n, r = this;
    r.build = function() {
      e = [], n = [], t(e, n)
    }, r.cell = function(t, r) {
      var a, o = e.length,
        i = n.length,
        s = -1,
        c = -1;
      for (a = 0; o > a; a++)
        if (r >= e[a][0] && e[a][1] > r) {
          s = a;
          break
        } for (a = 0; i > a; a++)
        if (t >= n[a][0] && n[a][1] > t) {
          c = a;
          break
        } return s >= 0 && c >= 0 ? {
        row: s,
        col: c
      } : null
    }, r.rect = function(t, r, a, o, i) {
      var s = i.offset();
      return {
        top: e[t][0] - s.top,
        left: n[r][0] - s.left,
        width: n[o][1] - n[r][0],
        height: e[a][1] - e[t][0]
      }
    }
  }

  function ge(e) {
    function n(t) {
      pe(t);
      var n = e.cell(t.pageX, t.pageY);
      (!n != !i || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
    }
    var r, a, o, i, s = this;
    s.start = function(s, c, l) {
      a = s, o = i = null, e.build(), n(c), r = l || "mousemove", t(document).bind(r, n)
    }, s.stop = function() {
      return t(document).unbind(r, n), i
    }
  }

  function pe(t) {
    t.pageX === e && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
  }

  function me(t) {
    function n(e) {
      return a[e] = a[e] || t(e)
    }
    var r = this,
      a = {},
      o = {},
      i = {};
    r.left = function(t) {
      return o[t] = o[t] === e ? n(t).position().left : o[t]
    }, r.right = function(t) {
      return i[t] = i[t] === e ? r.left(t) + n(t).width() : i[t]
    }, r.clear = function() {
      a = {}, o = {}, i = {}
    }
  }
  var ye = {
      defaultView: "month",
      aspectRatio: 1.35,
      header: {
        left: "title",
        center: "",
        right: "today prev,next"
      },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: "iso",
      weekNumberTitle: "W",
      allDayDefault: !0,
      ignoreTimezone: !0,
      lazyFetching: !0,
      startParam: "start",
      endParam: "end",
      titleFormat: {
        month: "MMMM yyyy",
        week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
        day: "dddd, MMM d, yyyy"
      },
      columnFormat: {
        month: "ddd",
        week: "ddd M/d",
        day: "dddd M/d"
      },
      timeFormat: {
        "": "h(:mm)t"
      },
      isRTL: !1,
      firstDay: 0,
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      buttonText: {
        prev: "<i class='fa fa-chevron-left'></i>",
        next: "<i class='fa fa-chevron-right'></i>",
        prevYear: "<i class='fa fa-chevron-left'></i>",
        nextYear: "<i class='fa fa-chevron-right'></i>",
        today: "today",
        month: "month",
        week: "week",
        day: "day"
      },
      theme: !1,
      buttonIcons: {
        prev: "circle-triangle-w",
        next: "circle-triangle-e"
      },
      unselectAuto: !0,
      dropAccept: "*"
    },
    be = {
      header: {
        left: "next,prev today",
        center: "",
        right: "title"
      },
      buttonText: {
        prev: "<i class='fa fa-chevron-left'></i>",
        next: "<i class='fa fa-chevron-right'></i>",
        prevYear: "<i class='fa fa-chevron-left'></i>",
        nextYear: "<i class='fa fa-chevron-right'></i"
      },
      buttonIcons: {
        prev: "circle-triangle-e",
        next: "circle-triangle-w"
      }
    },
    we = t.fullCalendar = {
      version: "1.6.0"
    },
    De = we.views = {};
  t.fn.fullCalendar = function(n) {
    if ("string" == typeof n) {
      var a, o = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var r = t.data(this, "fullCalendar");
        if (r && t.isFunction(r[n])) {
          var i = r[n].apply(r, o);
          a === e && (a = i), "destroy" == n && t.removeData(this, "fullCalendar")
        }
      }), a !== e ? a : this
    }
    var i = n.eventSources || [];
    return delete n.eventSources, n.events && (i.push(n.events), delete n.events), n = t.extend(!0, {}, ye, n.isRTL || n.isRTL === e && ye.isRTL ? be : {}, n), this.each(function(e, a) {
      var o = t(a),
        s = new r(o, n, i);
      o.data("fullCalendar", s), s.render()
    }), this
  }, we.sourceNormalizers = [], we.sourceFetchers = [];
  var Me = {
      dataType: "json",
      cache: !1
    },
    Ce = 1;
  we.addDays = c, we.cloneDate = d, we.parseDate = m, we.parseISO8601 = y, we.parseTime = b, we.formatDate = w, we.formatDates = D;
  var Se = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    Ee = 864e5,
    xe = 36e5,
    Te = 6e4,
    ke = {
      s: function(t) {
        return t.getSeconds()
      },
      ss: function(t) {
        return P(t.getSeconds())
      },
      m: function(t) {
        return t.getMinutes()
      },
      mm: function(t) {
        return P(t.getMinutes())
      },
      h: function(t) {
        return t.getHours() % 12 || 12
      },
      hh: function(t) {
        return P(t.getHours() % 12 || 12)
      },
      H: function(t) {
        return t.getHours()
      },
      HH: function(t) {
        return P(t.getHours())
      },
      d: function(t) {
        return t.getDate()
      },
      dd: function(t) {
        return P(t.getDate())
      },
      ddd: function(t, e) {
        return e.dayNamesShort[t.getDay()]
      },
      dddd: function(t, e) {
        return e.dayNames[t.getDay()]
      },
      M: function(t) {
        return t.getMonth() + 1
      },
      MM: function(t) {
        return P(t.getMonth() + 1)
      },
      MMM: function(t, e) {
        return e.monthNamesShort[t.getMonth()]
      },
      MMMM: function(t, e) {
        return e.monthNames[t.getMonth()]
      },
      yy: function(t) {
        return (t.getFullYear() + "").substring(2)
      },
      yyyy: function(t) {
        return t.getFullYear()
      },
      t: function(t) {
        return 12 > t.getHours() ? "a" : "p"
      },
      tt: function(t) {
        return 12 > t.getHours() ? "am" : "pm"
      },
      T: function(t) {
        return 12 > t.getHours() ? "A" : "P"
      },
      TT: function(t) {
        return 12 > t.getHours() ? "AM" : "PM"
      },
      u: function(t) {
        return w(t, "yyyy-MM-dd'T'HH:mm:ss'Z'")
      },
      S: function(t) {
        var e = t.getDate();
        return e > 10 && 20 > e ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
      },
      w: function(t, e) {
        return e.weekNumberCalculation(t)
      },
      W: function(t) {
        return M(t)
      }
    };
  we.dateFormatters = ke, we.applyAll = G, De.month = te, De.basicWeek = ee, De.basicDay = ne, n({
    weekMode: "fixed"
  }), De.agendaWeek = oe, De.agendaDay = ie, n({
    allDaySlot: !0,
    allDayText: "all-day",
    firstHour: 6,
    slotMinutes: 30,
    defaultEventMinutes: 120,
    axisFormat: "h(:mm)tt",
    timeFormat: {
      agenda: "h:mm{ - h:mm}"
    },
    dragOpacity: {
      agenda: .5
    },
    minTime: 0,
    maxTime: 24
  })
})(jQuery);
var $fullCalendarTrads = {
  'ca': {
    'monthNames': ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
    'monthNamesShort': ['Gen.', 'Feb.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Des.'],
    'dayNames': ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
    'dayNamesShort': ['Diu.', 'Dil.', 'Dima.', 'Dime.', 'Dij.', 'Div.', 'Dis.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Avui',
      month: 'Mes',
      week: 'Setmana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'de': {
    'monthNames': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    'monthNamesShort': ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    'dayNames': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    'dayNamesShort': ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      day: 'Tag'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'en': {
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'es': {
    'monthNames': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    'monthNamesShort': ['Ener.', 'Febr.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agos.', 'Sept.', 'Octu.', 'Novi.', 'Dici.'],
    'dayNames': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    'dayNamesShort': ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'fr': {
    'monthNames': ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    'monthNamesShort': ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jui', 'Août', 'Sep', 'Oct', 'Nov', 'Dec'],
    'dayNames': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    'dayNamesShort': ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Aujourd\'hui',
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'it': {
    'monthNames': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    'monthNamesShort': ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    'dayNames': ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    'dayNamesShort': ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Oggi',
      month: 'Mese',
      week: 'Settimana',
      day: 'Giorno'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'nl': {
    'monthNames': ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Dezember'],
    'monthNamesShort': ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    'dayNames': ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    'dayNamesShort': ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Het',
      month: 'Maand',
      week: 'Week',
      day: 'Dag'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'pt': {
    'monthNames': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    'monthNamesShort': ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    'dayNames': ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    'dayNamesShort': ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  }
};
(function(e, t) {
  function i(t, i) {
    var a, n, r, o = t.nodeName.toLowerCase();
    return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
  }

  function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility")
    }).length
  }
  var a = 0,
    n = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.10.2",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: function(t) {
      return function(i, s) {
        return "number" == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus),
    scrollParent: function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0) : this.parents().filter(function() {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    },
    zIndex: function(i) {
      if (i !== t) return this.css("zIndex", i);
      if (this.length)
        for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
          if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
          n = n.parent()
        }
      return 0
    },
    uniqueId: function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++a)
      })
    },
    removeUniqueId: function() {
      return this.each(function() {
        n.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t)
      }
    }) : function(t, i, s) {
      return !!e.data(t, s[3])
    },
    focusable: function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")))
    },
    tabbable: function(t) {
      var s = e.attr(t, "tabindex"),
        a = isNaN(s);
      return (a || s >= 0) && i(t, !a)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
    function a(t, i, s, a) {
      return e.each(n, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
      r = s.toLowerCase(),
      o = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + s] = function(i) {
      return i === t ? o["inner" + s].call(this) : this.each(function() {
        e(this).css(r, a(this, i) + "px")
      })
    }, e.fn["outer" + s] = function(t, i) {
      return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
        e(this).css(r, a(this, t, !0, i) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault()
      })
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function(t, i, s) {
        var a, n = e.ui[t].prototype;
        for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
      },
      call: function(e, t, i) {
        var s, a = e.plugins[t];
        if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
          for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
      }
    },
    hasScroll: function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        a = !1;
      return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
    }
  })
})(jQuery);
(function(t, e) {
  function i() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function s(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.delegate(i, "mouseout", function() {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
    }).delegate(i, "mouseover", function() {
      t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    })
  }

  function n(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e
  }
  t.extend(t.ui, {
    datepicker: {
      version: "1.10.2"
    }
  });
  var a, r = "datepicker",
    o = (new Date).getTime();
  t.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(t) {
      return n(this._defaults, t || {}), this
    },
    _attachDatepicker: function(e, i) {
      var s, n, a;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
    },
    _newInst: function(e, i) {
      var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function(e, i) {
      var s, n, a, r = this._get(i, "appendText"),
        o = this._get(i, "isRTL");
      i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: a,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
        src: a,
        alt: n,
        title: n
      }) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
    },
    _autoSize: function(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, s, n, a = new Date(2009, 11, 20),
          r = this._get(t, "dateFormat");
        r.match(/[DM]/) && (e = function(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
          return s
        }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", 7)
      }
    },
    _inlineDatepicker: function(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(e, i, s, a, o) {
      var h, l, c, u, d, p = this._dialogInst;
      return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
    },
    _destroyDatepicker: function(e) {
      var i, s = t(e),
        n = t.data(e, r);
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
    },
    _enableDatepicker: function(e) {
      var i, s, n = t(e),
        a = t.data(e, r);
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function(e) {
      var i, s, n = t(e),
        a = t.data(e, r);
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function(e) {
      try {
        return t.data(e, r)
      } catch (i) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(i, s, a) {
      var r, o, h, l, c = this._getInst(i);
      return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
    },
    _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function(e) {
      var i, s, n, a = t.datepicker._getInst(e.target),
        r = !0,
        o = a.dpDiv.is(".ui-datepicker-rtl");
      if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), r = !1;
          break;
        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        default:
          r = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
      r && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(i) {
      var s, n, a = t.datepicker._getInst(i.target);
      return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
    },
    _doKeyUp: function(e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
      } catch (n) {}
      return !0
    },
    _showDatepicker: function(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var i, s, a, r, o, h, l;
        i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
          return r |= "fixed" === t(this).css("position"), !r
        }), o = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: o.left + "px",
          top: o.top + "px"
        }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), t.datepicker._curInst = i))
      }
    },
    _updateDatepicker: function(e) {
      this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var i, s = this._getNumberOfMonths(e),
        n = s[1],
        r = 17;
      e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
    },
    _getBorders: function(t) {
      var e = function(t) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        } [t] || t
      };
      return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
    },
    _checkOffset: function(e, i, s) {
      var n = e.dpDiv.outerWidth(),
        a = e.dpDiv.outerHeight(),
        r = e.input ? e.input.outerWidth() : 0,
        o = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
    },
    _findPos: function(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top]
    },
    _hideDatepicker: function(e) {
      var i, s, n, a, o = this._curInst;
      !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
        t.datepicker._tidyDialog(o)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
    },
    _gotoToday: function(e) {
      var i, s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
    },
    _selectMonthYear: function(e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
    },
    _selectDay: function(e, i, s, n) {
      var a, r = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
    },
    _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, "")
    },
    _selectDate: function(e, i) {
      var s, n = t(e),
        a = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function(e) {
      var i, s, n, a = this._get(e, "altField");
      a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
        t(this).val(n)
      }))
    },
    noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
    },
    iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
    },
    parseDate: function(i, s, n) {
      if (null == i || null == s) throw "Invalid arguments";
      if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
      var a, r, o, h, l = 0,
        c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
        d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        p = (n ? n.dayNames : null) || this._defaults.dayNames,
        f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        m = (n ? n.monthNames : null) || this._defaults.monthNames,
        g = -1,
        v = -1,
        _ = -1,
        b = -1,
        y = !1,
        w = function(t) {
          var e = i.length > a + 1 && i.charAt(a + 1) === t;
          return e && a++, e
        },
        k = function(t) {
          var e = w(t),
            i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = RegExp("^\\d{1," + i + "}"),
            a = s.substring(l).match(n);
          if (!a) throw "Missing number at position " + l;
          return l += a[0].length, parseInt(a[0], 10)
        },
        x = function(i, n, a) {
          var r = -1,
            o = t.map(w(i) ? a : n, function(t, e) {
              return [
                [e, t]
              ]
            }).sort(function(t, e) {
              return -(t[1].length - e[1].length)
            });
          if (t.each(o, function(t, i) {
              var n = i[1];
              return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
            }), -1 !== r) return r + 1;
          throw "Unknown name at position " + l
        },
        D = function() {
          if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l;
          l++
        };
      for (a = 0; i.length > a; a++)
        if (y) "'" !== i.charAt(a) || w("'") ? D() : y = !1;
        else switch (i.charAt(a)) {
          case "d":
            _ = k("d");
            break;
          case "D":
            x("D", d, p);
            break;
          case "o":
            b = k("o");
            break;
          case "m":
            v = k("m");
            break;
          case "M":
            v = x("M", f, m);
            break;
          case "y":
            g = k("y");
            break;
          case "@":
            h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
            break;
          case "!":
            h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
            break;
          case "'":
            w("'") ? D() : y = !0;
            break;
          default:
            D()
        }
      if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
        for (v = 1, _ = b;;) {
          if (r = this._getDaysInMonth(g, v - 1), r >= _) break;
          v++, _ -= r
        }
      if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
      return h
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(t, e, i) {
      if (!e) return "";
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        a = (i ? i.dayNames : null) || this._defaults.dayNames,
        r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        o = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function(e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i
        },
        l = function(t, e, i) {
          var s = "" + e;
          if (h(t))
            for (; i > s.length;) s = "0" + s;
          return s
        },
        c = function(t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case "d":
              u += l("d", e.getDate(), 2);
              break;
            case "D":
              u += c("D", e.getDay(), n, a);
              break;
            case "o":
              u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              u += l("m", e.getMonth() + 1, 2);
              break;
            case "M":
              u += c("M", e.getMonth(), r, o);
              break;
            case "y":
              u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
              break;
            case "@":
              u += e.getTime();
              break;
            case "!":
              u += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? u += "'" : d = !0;
              break;
            default:
              u += t.charAt(s)
          }
      return u
    },
    _possibleChars: function(t) {
      var e, i = "",
        s = !1,
        n = function(i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
      return i
    },
    _get: function(t, i) {
      return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
    },
    _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = t.lastVal = t.input ? t.input.val() : null,
          n = this._getDefaultDate(t),
          a = n,
          r = this._getFormatConfig(t);
        try {
          a = this.parseDate(i, s, r) || n
        } catch (o) {
          s = e ? "" : s
        }
        t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function(e, i, s) {
      var n = function(t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        },
        a = function(i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (s) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                o += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                o += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                break;
              case "y":
              case "Y":
                a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
            }
            l = h.exec(i)
          }
          return new Date(a, r, o)
        },
        r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
      return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
    },
    _daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function(t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        a = t.selectedYear,
        r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
    },
    _getDate: function(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e
    },
    _attachHandlers: function(e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function() {
        var e = {
          prev: function() {
            window["DP_jQuery_" + o].datepicker._adjustDate(s, -i, "M")
          },
          next: function() {
            window["DP_jQuery_" + o].datepicker._adjustDate(s, +i, "M")
          },
          hide: function() {
            window["DP_jQuery_" + o].datepicker._hideDatepicker()
          },
          today: function() {
            window["DP_jQuery_" + o].datepicker._gotoToday(s)
          },
          selectDay: function() {
            return window["DP_jQuery_" + o].datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "M"), !1
          },
          selectYear: function() {
            return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "Y"), !1
          }
        };
        t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(t) {
      var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, w, k, x, D, T, C, S, M, N, I, P, A, z, H, E, F, O, W, j, R = new Date,
        L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        B = this._get(t, "showButtonPanel"),
        J = this._get(t, "hideIfNoPrevNext"),
        Q = this._get(t, "navigationAsDateFormat"),
        K = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        U = this._get(t, "stepMonths"),
        q = 1 !== K[0] || 1 !== K[1],
        X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        G = this._getMinMaxDate(t, "min"),
        $ = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if (0 > Z && (Z += 12, te--), $)
        for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = Q ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; K[0] > k; k++) {
        for (x = "", this.maxRows = 4, D = 0; K[1] > D; D++) {
          if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", S = "", q) {
            if (S += "<div class='ui-datepicker-group", K[1] > 1) switch (D) {
              case 0:
                S += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
                break;
              case K[1] - 1:
                S += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                S += " ui-datepicker-group-middle", C = ""
            }
            S += "'>"
          }
          for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) N = (w + c) % 7, M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
          for (S += M + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
            for (S += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
            S += F + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (q ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
        }
        y += x
      }
      return y += l, t._keyEvent = !1, y
    },
    _generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
      var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
        v = this._get(t, "changeYear"),
        _ = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
        y += "</select>"
      }
      if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
        if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
              var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
              return isNaN(e) ? d : e
            }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
        } return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
    },
    _adjustInstDate: function(t, e, i) {
      var s = t.drawYear + ("Y" === i ? e : 0),
        n = t.drawMonth + ("M" === i ? e : 0),
        a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
      t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
    },
    _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n
    },
    _notifyChange: function(t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function(t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
    },
    _isInRange: function(t, e) {
      var i, s, n = this._getMinMaxDate(t, "min"),
        a = this._getMinMaxDate(t, "max"),
        r = null,
        o = null,
        h = this._get(t, "yearRange");
      return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
    },
    _getFormatConfig: function(t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
    }
  }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.2", window["DP_jQuery_" + o] = t
})(jQuery);
jQuery(function($) {
  $.datepicker.regional.fr = {
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.regional.es = {
    closeText: 'Cerrar',
    prevText: 'Anterior',
    nextText: 'Siguiente',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ener.', 'Febr.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agos.', 'Sept.', 'Octu.', 'Novi.', 'Dici.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.regional.de = {
    closeText: 'Schließen',
    prevText: '&#x3C;Zurück',
    nextText: 'Vor&#x3E;',
    currentText: 'Heute',
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    weekHeader: 'KW',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.setDefaults({
    autoclose: !0,
    autoSize: !0,
    beforeShow: function(input, inst) {
      if ($.isMobile()) {
        $(input).prop('readonly', !0);
        var calendar = inst.dpDiv;
        calendar.wrap('<div class="ui-datepicker-overlay"></div>')
      }
      $('.control-group.has-focus').removeClass('has-focus');
      $(input).closest('.control-type-datepicker').addClass('has-focus')
    },
    onClose: function(date, inst) {
      if ($.isMobile()) {
        $(this).prop('readonly', !1);
        var calendar = inst.dpDiv;
        setTimeout(function() {
          calendar.unwrap()
        }, 240)
      }
      $(this).closest('.control-type-datepicker').removeClass('has-focus')
    }
  });
  $.datepicker.setDefaults($.datepicker.regional.fr)
});
forms.advancedTextarea = {};
forms.advancedTextarea.init = function() {
  $('.control-type-textarea').find('.control-text-format').each(function() {
    var $textFormat = $(this);
    var $textarea = $('#' + $textFormat.data('target'));
    $textarea.data('insText', '');
    $textarea.on('mouseup keyup cut paste', function() {
      $(this).data({
        'start': $textarea.prop('selectionStart'),
        'end': $textarea.prop('selectionEnd'),
        'insText': $textarea.val() ? $textarea.val().substring($textarea.prop('selectionStart'), $textarea.prop('selectionEnd')) : ''
      })
    });
    $textFormat.find('.control-text-format-colors').each(function() {
      var $colors = $(this);
      $(this).find('span[style]').each(function() {
        $(this).on('click', function() {
          var $color = $(this).css('background-color');
          $colors.trigger('changeColor', [$color])
        })
      });
      $(this).find('button').on('click', function() {
        var $color = $colors.find('.control-text-format-colors-input').val();
        if (/(^#[0-9a-f]{6}$)|(^#[0-9a-f]{3}$)/gi.test($color)) {
          $colors.find('.control-group').removeClass('has-error');
          $colors.trigger('changeColor', [$color])
        } else {
          $colors.find('.control-group').addClass('has-error')
        }
      });
      $(this).on('changeColor', function(e, color) {
        forms.advancedTextarea.addTag($textarea, '[color=' + color + ']', '[/color]');
        $(this).closest('.dropdown').find('[data-toggle="dropdown"]').dropdown('hide')
      })
    });
    $textFormat.find('[data-modal]').each(function() {
      $(this).on({
        'click': function() {
          var $tag = $(this).data('modal');
          switch ($tag) {
            case 'img':
              var $title = 'Insérer une image';
              var $options = [{
                'label': 'Titre',
                'name': 'title',
                'type': 'text',
                'value': $textarea.data('insText')
              }, {
                'label': 'Largeur',
                'name': 'width',
                'type': 'number'
              }, {
                'label': 'URL',
                'name': 'url',
                'placeholder': 'http://',
                'required': !0,
                'type': 'url'
              }];
              break;
            case 'quote':
              var $title = 'Citer';
              var $options = [{
                'label': 'Auteur',
                'name': 'author',
                'type': 'text'
              }, {
                'label': 'Citation',
                'name': 'cite',
                'required': !0,
                'type': 'textarea',
                'value': $textarea.data('insText')
              }];
              break;
            case 'size':
              var $title = 'Taille du texte';
              var $options = [{
                'label': 'Taille en pixels',
                'name': 'size',
                'required': !0,
                'type': 'number'
              }];
              break;
            case 'spoiler':
              var $title = 'Texte caché';
              var $options = [{
                'label': 'Intitulé',
                'name': 'label',
                'type': 'text',
                'value': 'spoiler'
              }, {
                'label': 'Texte',
                'name': 'content',
                'required': !0,
                'type': 'textarea',
                'value': $textarea.data('insText')
              }];
              break;
            case 'url':
              var $title = 'Insérer un lien';
              var $options = [{
                'label': 'Texte',
                'name': 'title',
                'type': 'text',
                'value': $textarea.data('insText')
              }, {
                'label': 'URL',
                'name': 'url',
                'placeholder': 'http://',
                'required': !0,
                'type': 'url'
              }];
              break;
            case 'video':
              var $title = 'Insérer une vidéo';
              var $options = [{
                'label': 'Hébergeur',
                'name': 'host',
                'type': 'select',
                'options': [{
                  'value': 'youtube',
                  'label': 'Youtube'
                }, {
                  'value': 'dailymotion',
                  'label': 'Dailymotion'
                }]
              }, {
                'label': 'URL',
                'name': 'id',
                'placeholder': 'Ex: https://youtu.be/YPaZAVEaTYM',
                'required': !0,
                'type': 'text',
                'value': $textarea.data('insText')
              }]
          }
          var $content = '';
          for (var $i = 0; $i < $options.length; $i++) {
            $content += '<div class="control-group control-type-' + $options[$i].type + ($options[$i].required ? ' has-required' : '') + '">' + '<label for="' + $options[$i].name + '">' + $options[$i].label + '</label>' + '<div class="controls">';
            if ($options[$i].type == 'textarea') {
              $content += '<textarea name="' + $options[$i].name + '" id="' + $options[$i].name + '">' + ($options[$i].value ? $options[$i].value : '') + '</textarea>'
            } else if ($options[$i].type == 'select') {
              $content += '<select name="' + $options[$i].name + '" id="' + $options[$i].name + '">';
              for (var $o = 0; $o < $options[$i].options.length; $o++) {
                $content += '<option value="' + $options[$i].options[$o].value + '">' + $options[$i].options[$o].label + '</option>'
              }
              $content += '</select>'
            } else {
              $content += '<input type="' + $options[$i].type + '" name="' + $options[$i].name + '" id="' + $options[$i].name + '" value="' + ($options[$i].value ? $options[$i].value : '') + '"' + ($options[$i].placeholder ? ' placeholder="' + $options[$i].placeholder + '"' : '') + '>'
            }
            $content += '</div>' + '</div>'
          }
          $.modal({
            buttonCancel: 'Annuler',
            buttonConfirm: 'Insérer',
            content: '<form>' + $content + '</form>',
            title: $title,
            type: 'primary'
          }).on({
            'on.confirm.modal': function() {
              switch ($tag) {
                case 'img':
                  var $bbOpen = '[img=' + $('.modal').find('#url').val() + ' alt=' + ($('.modal').find('#title').val() ? $('.modal').find('#title').val() : $('.modal').find('#url').val()) + ($('.modal').find('#title').val() ? ' title=' + $('.modal').find('#title').val() : '') + ($('.modal').find('#width').val() ? ' width=' + $('.modal').find('#width').val() : '') + ']';
                  var $bbClose = '';
                  $textarea.data('insText', '');
                  break;
                case 'quote':
                  var $bbOpen = '[quote' + ($('.modal').find('#author').val() ? '=' + $('.modal').find('#author').val() : '') + ']';
                  var $bbClose = '[/quote]';
                  $textarea.data('insText', $('.modal').find('#cite').val());
                  break;
                case 'size':
                  var $bbOpen = '[size=' + $('.modal').find('#size').val() + ']';
                  var $bbClose = '[/size]';
                  break;
                case 'spoiler':
                  var $bbOpen = '[spoiler=' + ($('.modal').find('#label').val() ? $('.modal').find('#label').val() : 'spoiler') + ']';
                  var $bbClose = '[/spoiler]';
                  $textarea.data('insText', $('.modal').find('#content').val());
                  break;
                case 'url':
                  var $bbOpen = '[url=' + $('.modal').find('#url').val() + ']';
                  var $bbClose = '[/url]';
                  $textarea.data('insText', $('.modal').find('#title').val() ? $('.modal').find('#title').val() : $('.modal').find('#url').val());
                  break;
                case 'video':
                  var $bbOpen = '[' + $('.modal').find('#host').val() + ']';
                  var $bbClose = '[/' + $('.modal').find('#host').val() + ']';
                  $textarea.data('insText', $('.modal').find('#id').val())
              }
              forms.advancedTextarea.addTag($textarea, $bbOpen, $bbClose)
            }
          })
        }
      })
    });
    $textFormat.find('[data-tag]').each(function() {
      $(this).on({
        'click': function() {
          forms.advancedTextarea.addTag($textarea, $(this).data('tag'))
        }
      })
    });
    $textFormat.find('a[data-toggle="smileys"]').on('click', function() {
      $(this).toggleClass('active');
      $(this).closest('.controls').find('.control-smileys').toggleClass('hide')
    });
    var $preview = $('<div class="bbcode-preview">').insertBefore($textarea);
    $textFormat.find('a[data-toggle="preview"]').on('click', function() {
      if (!$preview.hasClass('open')) {
        $.ajax({
          url: '/themes/do/preview/',
          type: 'post',
          data: {
            'message': $textarea.val()
          },
          dataType: 'json'
        }).done(function(json) {
          $preview.css({
            'top': $textarea.position().top + 'px',
            'left': $textarea.position().left + 'px',
            'width': $textarea.outerWidth() + 'px',
            'height': $textarea.outerHeight() + 'px',
            'padding': $textarea.css('padding')
          }).html(json.content);
          $preview.find('.spoiler-btn').on('click', function() {
            forms.advancedTextarea.toggleSpoiler($(this))
          })
        });
        $(this).removeClass('btn-default').addClass('active btn-primary').find('.fa').removeClass('fa-check').addClass('fa-times')
      } else {
        $preview.html('');
        $textarea.focus();
        $(this).removeClass('active btn-primary').addClass('btn-default').find('.fa').removeClass('fa-times').addClass('fa-check')
      }
      $preview.toggleClass('open');
      $textFormat.find('.btn-link').not(this).toggleClass('disabled')
    })
  });
  $('.spoiler-btn').on('click', function() {
    forms.advancedTextarea.toggleSpoiler($(this))
  })
};
forms.advancedTextarea.addTag = function($textarea, $bbOpen, $bbClose) {
  $textarea.trigger('focus');
  $bbClose = $bbClose === undefined ? $bbOpen.replace('[', '[\/') : $bbClose;
  var $start = $textarea.data('start');
  var $end = $textarea.data('end');
  var $insText = $textarea.data('insText');
  if ($insText) {
    var $pos = $start + $bbOpen.length + $insText.length + $bbClose.length
  } else {
    var $pos = $start + $bbOpen.length
  }
  $textarea.val($textarea.val().substr(0, $start) + $bbOpen + $insText + $bbClose + $textarea.val().substr($end));
  $textarea.prop('selectionStart', $pos);
  $textarea.prop('selectionEnd', $pos);
  $textarea.trigger('keyup')
};
forms.advancedTextarea.toggleSpoiler = function($spoilerBtn) {
  $spoilerBtn.next('.spoiler-content').toggleClass('hide');
  $spoilerBtn.blur()
};
forms.inputDatepicker = {};
forms.inputDatepicker.init = function() {
  $('.control-type-datepicker').find('[type="text"]').each(function() {
    var input = $(this);
    if (!input.val()) {
      input.closest('.control-type-datepicker').addClass('has-empty')
    }
    if (input.prop('disabled')) {
      input.closest('.control-type-datepicker').addClass('has-disabled')
    }
    input.datepicker()
  })
};
var modules = {};
modules.init = function() {
  for (var i in modules) {
    if (modules[i].init) {
      modules[i].init()
    }
  }
};
modules.album = {};
modules.album.init = function() {
  $('[data-role="paginated-widget-list"][data-addon="album"]').each(function() {
    var wrapper = $(this);
    var pagination = wrapper.next('[data-role="paginated-widget-pagination"]');
    if (pagination.length) {
      pagination.on('on.content.loaded', function() {
        wrapper.find('.fancybox').fancybox({
          live: !1
        })
      })
    }
  })
};
modules.pages = {};
modules.pages.cssVars = function() {
  var style = [];
  var cssVars = {
    '--vw': $(window).width() + 'px',
    '--view-width': $('.view').width() + 'px'
  };
  if ($('#bottom-site').length) {
    cssVars['--bottom-width'] = $('#bottom-site').width() + 'px'
  }
  $.each(cssVars, function(key, value) {
    style.push(key + ':' + value)
  });
  $('html').attr('style', style.join(';'))
};
modules.pages.changepage = function(page) {
  $('.rows .row-container').addClass('hide');
  $('.pagination').find('.disabled').removeClass('disabled');
  if (page == 'prev') {
    current_page = current_page == 1 ? current_page : current_page - 1
  } else if (page == 'next') {
    current_page = current_page == total_page ? current_page : current_page + 1
  } else if (page == 'last') {
    current_page = total_page
  } else {
    current_page = page
  }
  $('.pagination').find('.active').removeClass('active');
  $('.pagination').find('.btn:contains("' + page + '")').addClass('active');
  if (current_page == 1) {
    $('.pagination').find('.prev').find('.btn').addClass('disabled')
  }
  if (current_page == total_page) {
    $('.pagination').find('.next').find('.btn').addClass('disabled')
  }
  if (current_page + 4 >= total_page) {
    $('.pagination').find('.nb-pages').addClass('hide')
  } else {
    $('.pagination').find('.nb-pages').removeClass('hide')
  }
  $('.rows .page_' + current_page).removeClass('hide');
  $('#pagination-pages span').text(current_page + ' / ' + total_page);
  modules.pages.updatePagelinks(current_page);
  $('html, body').animate({
    scrollTop: $('.view-pages').offset().top
  });
  $('.rows .page_' + current_page + ' .cls-mobile-flash').css('width', '100%');
  $('.rows .page_' + current_page + ' .cls-mobile-flash object').css('width', '100%');
  return !1
};
modules.pages.updatePagelinks = function() {
  $('.pagination').find('.prev').find('.btn').attr('href', '#page' + (current_page));
  $('.pagination').find('.next').find('.btn').attr('href', '#page' + (current_page))
};
$(document).ready(function() {
  if (typeof(total_page) != 'undefined') {
    var hash = window.location.hash;
    if (hash.substring(1, 5) == 'page') {
      current_page = parseInt(hash.substring(5, hash.length), 10);
      modules.pages.changepage(current_page)
    }
    var dom = '';
    for ($i = 0; $i < total_page - 1; $i++) {
      dom += '<li>' + '<a class="btn btn-default' + (current_page == $i + 1 ? ' active' : '') + '"' + (current_page == $i + 1 ? ' onclick="modules.pages.changepage(' + ($i + 1) + ')"' : '') + '>' + ($i + 1) + '</a>' + '</li>'
    }
    $('.pagination').find('.prev').after(dom);
    modules.pages.updatePagelinks()
  }
});
$(window).on('load resize', function() {
  modules.pages.cssVars()
});
modules.member = {};
modules.member.orderUpdate = function() {
  $('#order_form_task').val('update');
  $('#order_form').submit()
};
modules.member.orderSubmit = function() {
  $('#order_form_task').val('create');
  $('#order_form').submit()
};
modules.member.onPaymeanChange = function() {
  modules.member.orderUpdate()
};
var plugins = {};
plugins.init = function() {
  for (var i in plugins) {
    if (plugins[i].init) {
      plugins[i].init()
    }
  }
};
plugins.comment = {};
plugins.comment.init = function() {
  $('.more-comments').click(function() {
    var nb_comments = $(this).data('limit');
    $(this).closest('.plugin').find('.media.hide:lt(' + nb_comments + ')').removeClass('hide');
    if ($(this).closest('.plugin').find('.media.hide').length === 0) {
      $(this).parents('p').remove()
    }
    $(this).closest('.plugin').trigger('on.comments.loaded')
  })
};
plugins.rating = {};
plugins.rating.init = function() {
  $('ul.rating-list').has('input').each(function() {
    $(this).on('mouseout', function() {
      $(this).children('li').removeClass('text-warning');
      $(this).children('.note-always').removeClass('note-off').addClass('text-warning')
    }).find('li:not(.rating-infos)').each(function() {
      $(this).on('mouseover', function() {
        $(this).nextAll('li:not(.rating-infos)').removeClass('text-warning');
        $(this).prevAll('li:not(.rating-infos)').addClass('text-warning');
        $(this).addClass('text-warning')
      }).find('input').each(function() {
        $(this).on('click', function() {
          $(this).closest('.rating-list').find('li:not(.rating-infos)').removeClass('text-warning');
          $(this).parent('li').addClass('text-warning');
          $(this).closest('form').submit()
        })
      })
    })
  })
};
plugins.smileys = {};
plugins.smileys.init = function() {
  $('.control-smileys').find('a').each(function() {
    $(this).on({
      'click': function(e) {
        e.preventDefault();
        var smiley = $(this).attr('rel');
        var msg = $(this).closest('form').find('textarea');
        msg.val(msg.val() + smiley).focus()
      }
    })
  })
};
var layout = {};
layout.init = function() {
  $('body').on('click', function(e) {
    var $trigger = $('.navbar');
    var navbar = $('.navbar').find('.collapse');
    if (navbar.hasClass('in') && $trigger !== e.target && !$trigger.has(e.target).length) {
      navbar.collapse('hide')
    }
  });
  $('.navbar-nav').find('[data-toggle="subnav"]').each(function() {
    if ($.isMobile() && ($(this).attr('href') != 'javascript:void(0)') && ($(this).nextAll('.subnav-menu').find('li:last').find('a').attr('href') != $(this).attr('href'))) {
      $(this).nextAll('.subnav-menu').append('<li class="category-root"><a href="' + $(this).attr('href') + '">' + $(this).text() + '</a></li>')
    }
  });
  $('.widget .nav-list, .column-content .nav-list').find('li').each(function() {
    var url = location.href;
    var link = $(this).find('> a');
    if (link.length) {
      var link_url = link.attr('href');
      url = url.indexOf('?') != -1 ? url.split('?')[0] : url;
      url = url.indexOf('#') != -1 ? url.split('#')[0] : url;
      link_url = link_url.indexOf('?') != -1 ? link_url.split('?')[0] : link_url;
      link_url = link_url.indexOf('#') != -1 ? link_url.split('#')[0] : link_url;
      if (url == link_url) {
        $(this).addClass('active')
      }
    }
  });
  var mediaView = sessionStorage.getItem('mediaView') ? sessionStorage.getItem('mediaView') : 'thumbnails';
  $('[data-role="listing_switching"]').each(function() {
    var switching = $(this);
    var target = switching.closest('[data-role="media-toolbar"]').next('.media-list');
    if (mediaView == 'listing') {
      $(target).addClass('media-stacked').removeClass('media-thumbnails')
    }
    $(this).find('.btn').each(function() {
      var display = $(this).data('view');
      if (display === mediaView) {
        $(this).addClass('active')
      }
      $(this).on('click', function() {
        if (display == 'thumbnails') {
          $(target).addClass('media-thumbnails').removeClass('media-stacked')
        } else {
          $(target).removeClass('media-thumbnails').addClass('media-stacked')
        }
        $(this).addClass('active').closest('.btn-group').find('.active').not(this).removeClass('active');
        sessionStorage.setItem('mediaView', display);
        switching.trigger('on.listing.switched')
      })
    })
  });
  $('iframe[src*="youtube.com"], iframe[src*="dailymotion.com"], iframe[src*="player.vimeo.com"], object:has(param[name="movie"]):not([name="peckplayer"])').each(function() {
    if (!$(this).hasClass('fixSize') && !$(this).parent().hasClass('video-container')) {
      $(this).wrap('<span class="video-container"></span>')
    }
  });
  $('a.mb').removeAttr('rel', '');
  $('a.mb[href^="http://www.youtube.com/v/"], a.mb[href^="http://www.dailymotion.com/"]').addClass('fancybox').attr('data-fancybox-type', 'swf');
  $('a.mb img').parent().addClass('fancybox').attr('data-fancybox-type', 'image');
  $('a.mb[href$=".jpg"],a.mb[href$=".gif"],a.mb[href$=".png"],a.mb[href$=".jpeg"]').addClass('fancybox').attr('data-fancybox-type', 'image');
  $('a.lightbox, a.mb2, a.mb3, a[rel="iframe"]').addClass('fancybox').attr('data-fancybox-type', 'image');
  $('.iframe').addClass('fancybox').attr('data-fancybox-type', 'iframe');
  $('.fancybox').fancybox({
    live: !1
  });
  $('.alert').each(function() {
    if ($(this).hasClass('alert-error')) {
      var type = 'error'
    } else if ($(this).hasClass('alert-success') || $(this).hasClass('alert-info')) {
      var type = 'success'
    } else if ($(this).hasClass('alert-warning')) {
      var type = 'warning'
    } else if ($(this).data('type') != undefined) {
      var type = $(this).data('type')
    } else {
      var type = null
    }
    var content = $(this).html();
    $(this).remove();
    $.modal({
      content: content,
      type: type
    })
  });
  $('form').each(function() {
    $(this).validate().on({
      'on.error.validate': function(e, controls) {
        var errorMsg = '';
        for ($i = 0; $i < controls.length; $i++) {
          if (!controls[$i].isvalid) {
            errorMsg += '<li>' + controls[$i].label + '</li>'
          }
        }
        $.modal({
          buttonCancel: 'Fermer',
          content: '<ul class="list-unstyled">' + errorMsg + '</ul>',
          id: 'form-validation-errors',
          title: 'Merci de compléter les champs suivants :',
          type: 'error'
        })
      },
      'on.success.validate': function() {
        $(this).find('[type="submit"]').addClass('disabled')
      }
    })
  });
  $('[data-role="listing_ordering"]').find('select').on('change', function() {
    var $el = this;
    var $url = $el.options[$el.selectedIndex].value;
    window.location.href = $url != '' ? '?orderby=' + $url : window.location.origin + window.location.pathname
  });
  $('[data-widget="image"][class*="align-"]').each(function() {
    var $addClass = $(this).hasClass('align-center') ? 'cd-justify-content-center' : 'cd-justify-content-end';
    var $removeClass = $(this).hasClass('align-center') ? 'align-center' : 'align-bottom';
    $(this).removeClass($removeClass).closest('.column').addClass($addClass)
  })
};
var $zoomIn = {
  'init': function($img, $currentWidth) {
    var $f = new Image();
    $f.src = ($img.get(0).getAttribute ? $img.get(0).getAttribute('src') : !1) || $img.get(0).src;
    if ($f.src) {
      $img.data('width', $f.width);
      $zoomIn.mode($img, $currentWidth)
    }
    $(window).on('resize', function() {
      $zoomIn.mode($img, $currentWidth)
    })
  },
  'mode': function($img, $currentWidth) {
    $img.data('zoomIn', $img.data('width') > $currentWidth).unbind('click.zoomIn').parent().trigger('zoom.destroy');
    if ($img.data('zoomIn')) {
      if ($.isMobile()) {
        $img.on('click.zoomIn', function() {
          window.location.href = $img.attr('src')
        })
      } else {
        $img.parent().zoom()
      }
    }
  }
}
$(document).ready(function() {
  var blocks = {};
  blocks.change_page = function(page, $blocks_rows) {
    var current_page = Number(blocks_rows.attr('data-current-page'));
    var total_page = Number(blocks_rows.attr('data-total-pages'));
    var $pagination_ul = blocks_rows.nextAll('.pagination:first');
    blocks_rows.find('.row-container').addClass('hide');
    $pagination_ul.find('.disabled').removeClass('disabled');
    $pagination_ul.find('.active').removeClass('active');
    if (page == 'prev') {
      current_page = current_page == 1 ? current_page : current_page - 1
    } else if (page == 'next') {
      current_page = current_page == total_page ? current_page : current_page + 1
    } else if (page == 'last') {
      current_page = total_page
    } else {
      current_page = page
    }
    if (page == 'last') {
      $pagination_ul.find('.nb-pages').find('a').addClass('active')
    } else {
      $pagination_ul.find('[data-page="' + current_page + '"]').find('span').addClass('active')
    }
    $pagination_ul.find('.nb-pages').find('span').text(current_page + ' / ' + total_page);
    if (current_page == 1)
      $pagination_ul.find('li:first').find('a').addClass('disabled');
    if (current_page == total_page)
      $pagination_ul.find('li:last').find('a').addClass('disabled');
    blocks_rows.find('.page_' + current_page).removeClass('hide');
    blocks_rows.find('.page_' + current_page + ' .cls-mobile-flash').css('width', '100%');
    blocks_rows.find('.page_' + current_page + ' .cls-mobile-flash object').css('width', '100%');
    $pagination_ul.find('[data-page="' + current_page + '"]').find('span').addClass('active');
    $pagination_ul.find('.prev, .next').find('a').attr('href', '#page' + current_page);
    $('html, body').animate({
      scrollTop: blocks_rows.parents('.view:first').offset().top
    }, 'slow');
    blocks_rows.attr('data-current-page', current_page);
    location.hash = 'page' + current_page;
    $pagination_ul.trigger('on.pagination.changed');
    return !1
  };
  var blocks_rows = $('.rows[data-total-pages]');
  var $this, $pagination_ul;
  blocks_rows.each(function() {
    if ($(this).attr('data-total-pages') > 1) {
      $this = $(this);
      $pagination_ul = $this.nextAll('.pagination:first');
      $pagination_ul.find('.prev').find('a').click($.proxy(blocks.change_page, blocks, 'prev', $this));
      $pagination_ul.find('.next').find('a').click($.proxy(blocks.change_page, blocks, 'next', $this));
      $pagination_ul.find('.nb-pages').find('a').click($.proxy(blocks.change_page, blocks, 'last', $this));
      $pagination_ul.find('[data-page]').find('span').click(function() {
        var goto = $(this).parent().data('page');
        blocks.change_page(goto, $this)
      });
      var hash = window.location.hash;
      if (hash.substring(1, 5) == 'page') {
        current_page = parseInt(hash.substring(5, hash.length));
        blocks.change_page(current_page, $this)
      }
    }
  })
});
var paymeans = {};
paymeans.pbx = {};
paymeans.pbx.cmd1 = null;
paymeans.pbx.cmd3 = null;
paymeans.pbx.total1 = null;
paymeans.pbx.total3 = null;
paymeans.pbx.hmac1 = null;
paymeans.pbx.hmac3 = null;
paymeans.pbx.datevalmax1 = null;
paymeans.pbx.datevalmax3 = null;
paymeans.pbx.selectCard = function(type) {
  $('#PBX_TYPECARTE').val(type);
  if ($('input[name=pbx_3fois]:checked').val() == '3fois') {
    $('#PBX_CMD').val(this.cmd3);
    $('#PBX_TOTAL').val(this.total3);
    $('#PBX_HMAC').val(this.hmac3);
    $('#PBX_DATEVALMAX').val(this.datevalmax3)
  } else {
    $('#PBX_CMD').val(this.cmd1);
    $('#PBX_TOTAL').val(this.total1);
    $('#PBX_HMAC').val(this.hmac1);
    $('#PBX_DATEVALMAX').val(this.datevalmax1)
  }
  $('input[name=pbx_3fois]').remove();
  $('#PBX_FORM').submit()
};
var theme = {
  classes: {
    disabled: 'disabled',
    danger: 'text-error',
    success: 'text-success',
    hide: 'hide',
    tableWarning: 'table-warning',
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
};
$(document).ready(function() {
  layout.init();
  modules.init();
  plugins.init()
});
(function($) {
  var PaginatedWidget = function(elem) {
    this.elem = elem;
    this.$elem = $(elem);
    this.$ordering = this.$elem.find('[data-role="paginated-widget-ordering"]');
    this.$pagination = this.$elem.find('[data-role="paginated-widget-pagination"]');
    this.$list = this.$elem.find('[data-role="paginated-widget-list"]');
    this.categoryModelId = this.$elem.data('category-model');
    this.itemsPerPage = parseInt(this.$elem.data('items-per-page'));
    this.itemsTotal = parseInt(this.$elem.data('items-total'));
    this.maxChoices = this.$elem.data('max-choices') ? parseInt(this.$elem.data('max-choices')) : 10;
    this.ajaxUrl = this.$elem.data('ajax-url');
    this.currentPage = 1;
    if (this.categoryModelId === 'product') {
      this.currentOrderBy = parseInt(this.$elem.data('default-order-by'));
      this.currentOrderWay = parseInt(this.$elem.data('default-order-way'))
    }
    this.pages = Math.ceil(this.itemsTotal / this.itemsPerPage);
    if (this.itemsTotal > this.itemsPerPage) {
      this.$pagination.find('.first').on('click', $.proxy(this, 'onFirstPageClick'));
      this.$pagination.find('.prev').on('click', $.proxy(this, 'onPrevPageClick'));
      this.$pagination.find('.next').on('click', $.proxy(this, 'onNextPageClick'));
      this.$pagination.find('.last').on('click', $.proxy(this, 'onLastPageClick'));
      var currentPaginatedWidget = this;
      this.$pagination.find('.page-choice').each(function(index, element) {
        $(element).on('click', $.proxy(currentPaginatedWidget, 'onPageSelect', parseInt($(this).attr('data-page'))))
      });
      this.$pagination.removeClass('hide')
    }
    this.$ordering.find('select').on('change', $.proxy(this, 'onOrderingChange'))
  };
  PaginatedWidget.prototype.onPageSelect = function(page) {
    this.currentPage = page;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onFirstPageClick = function() {
    this.currentPage = 1;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onPrevPageClick = function() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onNextPageClick = function() {
    if (this.currentPage < this.pages) {
      this.currentPage++
    }
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onLastPageClick = function() {
    this.currentPage = this.pages;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onOrderingChange = function() {
    this.disableControls();
    switch (this.$ordering.find('select').val()) {
      case 'p_0':
        this.currentOrderBy = 1;
        this.currentOrderWay = 0;
        break;
      case 'p_1':
        this.currentOrderBy = 1;
        this.currentOrderWay = 1;
        break;
      case 'n':
        this.currentOrderBy = 4;
        this.currentOrderWay = 1;
        break;
      case 'b':
        this.currentOrderBy = 6;
        this.currentOrderWay = 1;
        break;
      default:
        this.currentOrderBy = 2;
        this.currentOrderWay = 0;
        break
    }
    this.currentPage = 1;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.requestPageRefresh = function() {
    var url = this.ajaxUrl + (this.ajaxUrl.indexOf('?') !== -1 ? '&' : '?') + 'page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage;
    if (this.categoryModelId === 'product') {
      url += '&order_by=' + this.currentOrderBy + '&order_way=' + this.currentOrderWay
    }
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      success: $.proxy(this, 'applyPageRefresh')
    })
  };
  PaginatedWidget.prototype.applyPageRefresh = function(result) {
    this.$list.html(result);
    this.$pagination.find('.page-choice.active').removeClass('active');
    this.$pagination.find('.page-choice[data-page="' + this.currentPage + '"]').addClass('active');
    this.reenableControls();
    var currentPaginatedWidget = this;
    this.$pagination.find('.page-choice').each(function(index, element) {
      if (parseInt($(element).attr('data-page')) <= (currentPaginatedWidget.currentPage - (currentPaginatedWidget.maxChoices) / 2) || parseInt($(element).attr('data-page')) >= (currentPaginatedWidget.currentPage + (currentPaginatedWidget.maxChoices) / 2)) {
        $(element).parent().addClass('hide')
      } else {
        $(element).parent().removeClass('hide')
      }
    });
    this.$pagination.find('.first').find('.btn').toggleClass('disabled', this.currentPage === 1);
    this.$pagination.find('.prev').find('.btn').toggleClass('disabled', this.currentPage === 1);
    this.$pagination.find('.next').find('.btn').toggleClass('disabled', this.currentPage === this.pages);
    this.$pagination.find('.last').find('.btn').toggleClass('disabled', this.currentPage === this.pages);
    $("html, body").animate({
      scrollTop: this.$elem.offset().top - 100
    }, 500);
    this.$pagination.trigger('on.content.loaded')
  };
  PaginatedWidget.prototype.disableControls = function() {
    this.$pagination.find('.btn').addClass('disabled');
    this.$ordering.find('select').prop('disabled', !0)
  };
  PaginatedWidget.prototype.reenableControls = function() {
    this.$pagination.find('.btn').removeClass('disabled');
    this.$ordering.find('select').prop('disabled', !1)
  };
  $.fn.paginatedWidget = function() {
    return this.each(function() {
      new PaginatedWidget(this)
    })
  }
}(jQuery));
$(document).ready(function() {
  $('[data-role="paginated-widget"]').paginatedWidget()
});
var emsChromeExtension = {
  init: function(type, id, domain) {
    var chromeExtensionDom = document.createElement("div");
    chromeExtensionDom.id = 'emsChromeExtension';
    chromeExtensionDom.setAttribute('data-type', type);
    chromeExtensionDom.setAttribute('data-id', id);
    chromeExtensionDom.setAttribute('data-domain', domain);
    document.body.appendChild(chromeExtensionDom)
  }
}(function(r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = f.fancybox = function() {
      b.open.apply(this, arguments)
    },
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function(a) {
      return a && a.hasOwnProperty && a instanceof f
    },
    q = function(a) {
      return a && "string" === f.type(a)
    },
    E = function(a) {
      return q(a) && 0 < a.indexOf("%")
    },
    l = function(a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e)
    },
    w = function(a, b) {
      return l(a, b) + "px"
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Fermer" class="fancybox-item fancybox-close" href="javascript:;"><i class="fa fa-times"></i></a>',
        next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-chevron-right"></i></span></a>',
        prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-chevron-left"></i></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
        var k = {},
          g, h, j, m, l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    },
    cancel: function() {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
    },
    close: function(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
    },
    play: function(a) {
      var d = function() {
          clearTimeout(b.player.timer)
        },
        e = function() {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
        },
        c = function() {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd")
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart")
      } else c()
    },
    next: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
    },
    prev: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    },
    jumpto: function(a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
    },
    reposition: function(a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
    },
    update: function(a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function() {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
      }, e && !s ? 0 : 300))
    },
    toggle: function(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
    },
    hideLoading: function() {
      p.unbind(".loading");
      f("#fancybox-loading").remove()
    },
    showLoading: function() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div><i class="fa fa-spinner fa-spin"></i></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function(a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }))
    },
    getViewport: function() {
      var a = b.current && b.current.locked || !1,
        d = {
          x: n.scrollLeft(),
          y: n.scrollTop()
        };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d
    },
    unbindEvents: function() {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb")
    },
    bindEvents: function() {
      var a = b.current,
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
        var c = e.which || e.keyCode,
          k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
        })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
          else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault()
        }
      }))
    },
    trigger: function(a, d) {
      var e, c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function(d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
        });
        p.trigger(a)
      }
    },
    isImage: function(a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function(a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(a) {
      var d = {},
        e, c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
          d.skin.css("padding" + b, w(d.padding[a]))
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content")
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    },
    _error: function(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad()
    },
    _loadImage: function() {
      var a = b.imgPreload = new Image;
      a.onload = function() {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad()
      };
      a.onerror = function() {
        this.onload = this.onerror = null;
        b._error("image")
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading()
    },
    _loadAjax: function() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
        },
        success: function(d, e) {
          "success" === e && (a.content = d, b._afterLoad())
        }
      }))
    },
    _loadIframe: function() {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function() {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function() {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad()
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad()
    },
    _preloadImages: function() {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f, g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    },
    _afterLoad: function() {
      var a = b.coming,
        d = b.current,
        e, c, k, g, h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
        else {
          d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                e += '<param name="' + a + '" value="' + b + '"></param>';
                h += " " + a + '="' + b + '"'
              }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
          }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]()
          } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages()
        }
    },
    _setDimension: function() {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v, z, t, C, A, F, B, D, H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;
      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView)
        if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
          for (;
            (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
        else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && ("auto" === s && j < A && c + x + q < z) && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    },
    _getPosition: function(a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c
    },
    _afterZoomIn: function() {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
        a.preventDefault();
        b.close()
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    },
    _afterZoomOut: function(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a)
    }
  });
  b.transitions = {
    getOrigPosition: function() {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      }
    },
    step: function(a, d) {
      var e, c, f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
    },
    zoomIn: function() {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({
          opacity: 1
        }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      })
    },
    zoomOut: function() {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      })
    },
    changeIn: function() {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      })
    },
    changeOut: function() {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function() {
          f(this).trigger("onReset").remove()
        }
      })
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function(a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function(a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
      });
      this.overlay.css(a.css).show()
    },
    close: function() {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function() {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height())
    },
    onReady: function(a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function(a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function() {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a)
    },
    onUpdate: function() {
      this.fixed || this.update()
    },
    afterClose: function(a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function(a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c)
      }
    }
  };
  f.fn.fancybox = function(a) {
    var d, e = f(this),
      c = this.selector || "",
      k = function(g) {
        var h = f(this).blur(),
          j = d,
          k, l;
        !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this
  };
  p.ready(function() {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function() {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b
    });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);
(function(t, e) {
  function n(e) {
    t.extend(!0, ye, e)
  }

  function r(n, r, l) {
    function u(t) {
      G ? (S(), C(), R(), b(t)) : f()
    }

    function f() {
      K = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), r.theme && n.addClass("ui-widget"), G = t("<div class='fc-content' style='position:relative'/>").prependTo(n), $ = new a(Z, r), Q = $.render(), Q && n.prepend(Q), y(r.defaultView), t(window).resize(x), m() || v()
    }

    function v() {
      setTimeout(function() {
        !te.start && m() && b()
      }, 0)
    }

    function h() {
      t(window).unbind("resize", x), $.destroy(), G.remove(), n.removeClass("fc fc-rtl ui-widget")
    }

    function g() {
      return 0 !== se.offsetWidth
    }

    function m() {
      return 0 !== t("body")[0].offsetWidth
    }

    function y(e) {
      if (!te || e != te.name) {
        ue++, W();
        var n, r = te;
        r ? ((r.beforeHide || I)(), q(G, G.height()), r.element.hide()) : q(G, 1), G.css("overflow", "hidden"), te = ce[e], te ? te.element.show() : te = ce[e] = new De[e](n = re = t("<div class='fc-view fc-view-" + e + "' style='position:absolute'/>").appendTo(G), Z), r && $.deactivateButton(r.name), $.activateButton(e), b(), G.css("overflow", ""), r && q(G, 1), n || (te.afterShow || I)(), ue--
      }
    }

    function b(t) {
      if (g()) {
        ue++, W(), ne === e && S();
        var r = !1;
        !te.start || t || te.start > fe || fe >= te.end ? (te.render(fe, t || 0), E(!0), r = !0) : te.sizeDirty ? (te.clearEvents(), E(), r = !0) : te.eventsDirty && (te.clearEvents(), r = !0), te.sizeDirty = !1, te.eventsDirty = !1, T(r), ee = n.outerWidth(), $.updateTitle(te.title);
        var a = new Date;
        a >= te.start && te.end > a ? $.disableButton("today") : $.enableButton("today"), ue--, te.trigger("viewDisplay", se)
      }
    }

    function M() {
      C(), g() && (S(), E(), W(), te.clearEvents(), te.renderEvents(de), te.sizeDirty = !1)
    }

    function C() {
      t.each(ce, function(t, e) {
        e.sizeDirty = !0
      })
    }

    function S() {
      ne = r.contentHeight ? r.contentHeight : r.height ? r.height - (Q ? Q.height() : 0) - L(G) : Math.round(G.width() / Math.max(r.aspectRatio, .5))
    }

    function E(t) {
      ue++, te.setHeight(ne, t), re && (re.css("position", "relative"), re = null), te.setWidth(G.width(), t), ue--
    }

    function x() {
      if (!ue)
        if (te.start) {
          var t = ++le;
          setTimeout(function() {
            t == le && !ue && g() && ee != (ee = n.outerWidth()) && (ue++, M(), te.trigger("windowResize", se), ue--)
          }, 200)
        } else v()
    }

    function T(t) {
      !r.lazyFetching || oe(te.visStart, te.visEnd) ? k() : t && F()
    }

    function k() {
      ie(te.visStart, te.visEnd)
    }

    function H(t) {
      de = t, F()
    }

    function z(t) {
      F(t)
    }

    function F(t) {
      R(), g() && (te.clearEvents(), te.renderEvents(de, t), te.eventsDirty = !1)
    }

    function R() {
      t.each(ce, function(t, e) {
        e.eventsDirty = !0
      })
    }

    function N(t, n, r) {
      te.select(t, n, r === e ? !0 : r)
    }

    function W() {
      te && te.unselect()
    }

    function A() {
      b(-1)
    }

    function _() {
      b(1)
    }

    function O() {
      i(fe, -1), b()
    }

    function B() {
      i(fe, 1), b()
    }

    function Y() {
      fe = new Date, b()
    }

    function j(t, e, n) {
      t instanceof Date ? fe = d(t) : p(fe, t, e, n), b()
    }

    function P(t, n, r) {
      t !== e && i(fe, t), n !== e && s(fe, n), r !== e && c(fe, r), b()
    }

    function J() {
      return d(fe)
    }

    function V() {
      return te
    }

    function X(t, n) {
      return n === e ? r[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (r[t] = n, M()), e)
    }

    function U(t, n) {
      return r[t] ? r[t].apply(n || se, Array.prototype.slice.call(arguments, 2)) : e
    }
    var Z = this;
    Z.options = r, Z.render = u, Z.destroy = h, Z.refetchEvents = k, Z.reportEvents = H, Z.reportEventChange = z, Z.rerenderEvents = F, Z.changeView = y, Z.select = N, Z.unselect = W, Z.prev = A, Z.next = _, Z.prevYear = O, Z.nextYear = B, Z.today = Y, Z.gotoDate = j, Z.incrementDate = P, Z.formatDate = function(t, e) {
      return w(t, e, r)
    }, Z.formatDates = function(t, e, n) {
      return D(t, e, n, r)
    }, Z.getDate = J, Z.getView = V, Z.option = X, Z.trigger = U, o.call(Z, r, l);
    var $, Q, G, K, te, ee, ne, re, ae, oe = Z.isFetchNeeded,
      ie = Z.fetchEvents,
      se = n[0],
      ce = {},
      le = 0,
      ue = 0,
      fe = new Date,
      de = [];
    p(fe, r.year, r.month, r.date), r.droppable && t(document).bind("dragstart", function(e, n) {
      var a = e.target,
        o = t(a);
      if (!o.parents(".fc").length) {
        var i = r.dropAccept;
        (t.isFunction(i) ? i.call(a, o) : o.is(i)) && (ae = a, te.dragStart(ae, e, n))
      }
    }).bind("dragstop", function(t, e) {
      ae && (te.dragStop(ae, t, e), ae = null)
    })
  }

  function a(n, r) {
    function a() {
      v = r.theme ? "ui" : "fc";
      var n = r.header;
      return n ? h = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))) : e
    }

    function o() {
      h.remove()
    }

    function i(e) {
      var a = t("<td class='fc-header-" + e + "'/>"),
        o = r.header[e];
      return o && t.each(o.split(" "), function(e) {
        var o;
        t.each(this.split(","), function(e, i) {
          if ("title" == i) a.append("<span class='h4 fc-header-title'>&nbsp;</span>"), o && o.addClass(v + "-corner-right"), o = null;
          else {
            var s;
            if (n[i] ? s = n[i] : De[i] && (s = function() {
                u.removeClass(v + "-state-hover"), n.changeView(i)
              }), s) {
              var c = r.theme ? J(r.buttonIcons, i) : null,
                l = J(r.buttonText, i),
                u = t("<span class='btn btn-default fc-button fc-button-" + i + " " + v + "-state-default'>" + (c ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + c + "'/>" + "</span>" : l) + "</span>").click(function() {
                  u.hasClass(v + "-state-disabled") || s()
                }).mousedown(function() {
                  u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-down")
                }).mouseup(function() {
                  u.removeClass(v + "-state-down")
                }).hover(function() {
                  u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-hover")
                }, function() {
                  u.removeClass(v + "-state-hover").removeClass(v + "-state-down")
                }).appendTo(a);
              U(u), o || u.addClass(v + "-corner-left"), o = u
            }
          }
        }), o && o.addClass(v + "-corner-right")
      }), a
    }

    function s(t) {
      h.find(".h4").html(t)
    }

    function c(t) {
      h.find(".fc-header-right").wrapInner("<div class='btn-group'></div>");
      h.find("span.fc-button-" + t).addClass(v + "-state-active")
    }

    function l(t) {
      h.find("span.fc-button-" + t).removeClass(v + "-state-active")
    }

    function u(t) {
      h.find("span.fc-button-" + t).addClass(v + "-state-disabled disabled")
    }

    function f(t) {
      h.find("span.fc-button-" + t).removeClass(v + "-state-disabled disabled")
    }
    var d = this;
    d.render = a, d.destroy = o, d.updateTitle = s, d.activateButton = c, d.deactivateButton = l, d.disableButton = u, d.enableButton = f;
    var v, h = t([])
  }

  function o(n, r) {
    function a(t, e) {
      return !S || S > t || e > E
    }

    function o(t, e) {
      S = t, E = e, W = [];
      var n = ++F,
        r = z.length;
      R = r;
      for (var a = 0; r > a; a++) i(z[a], n)
    }

    function i(e, r) {
      s(e, function(a) {
        if (r == F) {
          if (a) {
            n.eventDataTransform && (a = t.map(a, n.eventDataTransform)), e.eventDataTransform && (a = t.map(a, e.eventDataTransform));
            for (var o = 0; a.length > o; o++) a[o].source = e, b(a[o]);
            W = W.concat(a)
          }
          R--, R || k(W)
        }
      })
    }

    function s(r, a) {
      var o, i, c = we.sourceFetchers;
      for (o = 0; c.length > o; o++) {
        if (i = c[o](r, S, E, a), i === !0) return;
        if ("object" == typeof i) return s(i, a), e
      }
      var l = r.events;
      if (l) t.isFunction(l) ? (p(), l(d(S), d(E), function(t) {
        a(t), y()
      })) : t.isArray(l) ? a(l) : a();
      else {
        var u = r.url;
        if (u) {
          var f = r.success,
            v = r.error,
            h = r.complete,
            g = t.extend({}, r.data || {}),
            m = K(r.startParam, n.startParam),
            b = K(r.endParam, n.endParam);
          m && (g[m] = Math.round(+S / 1e3)), b && (g[b] = Math.round(+E / 1e3)), p(), t.ajax(t.extend({}, Me, r, {
            data: g,
            success: function(e) {
              e = e || [];
              var n = G(f, this, arguments);
              t.isArray(n) && (e = n), a(e)
            },
            error: function() {
              G(v, this, arguments), a()
            },
            complete: function() {
              G(h, this, arguments), y()
            }
          }))
        } else a()
      }
    }

    function c(t) {
      t = l(t), t && (R++, i(t, F))
    }

    function l(n) {
      return t.isFunction(n) || t.isArray(n) ? n = {
        events: n
      } : "string" == typeof n && (n = {
        url: n
      }), "object" == typeof n ? (w(n), z.push(n), n) : e
    }

    function u(e) {
      z = t.grep(z, function(t) {
        return !D(t, e)
      }), W = t.grep(W, function(t) {
        return !D(t.source, e)
      }), k(W)
    }

    function f(t) {
      var e, n, r = W.length,
        a = T().defaultEventEnd,
        o = t.start - t._start,
        i = t.end ? t.end - (t._end || a(t)) : 0;
      for (e = 0; r > e; e++) n = W[e], n._id == t._id && n != t && (n.start = new Date(+n.start + o), n.end = t.end ? n.end ? new Date(+n.end + i) : new Date(+a(n) + i) : null, n.title = t.title, n.url = t.url, n.allDay = t.allDay, n.className = t.className, n.editable = t.editable, n.color = t.color, n.backgroudColor = t.backgroudColor, n.borderColor = t.borderColor, n.textColor = t.textColor, b(n));
      b(t), k(W)
    }

    function v(t, e) {
      b(t), t.source || (e && (H.events.push(t), t.source = H), W.push(t)), k(W)
    }

    function h(e) {
      if (e) {
        if (!t.isFunction(e)) {
          var n = e + "";
          e = function(t) {
            return t._id == n
          }
        }
        W = t.grep(W, e, !0);
        for (var r = 0; z.length > r; r++) t.isArray(z[r].events) && (z[r].events = t.grep(z[r].events, e, !0))
      } else {
        W = [];
        for (var r = 0; z.length > r; r++) t.isArray(z[r].events) && (z[r].events = [])
      }
      k(W)
    }

    function g(e) {
      return t.isFunction(e) ? t.grep(W, e) : e ? (e += "", t.grep(W, function(t) {
        return t._id == e
      })) : W
    }

    function p() {
      N++ || x("loading", null, !0)
    }

    function y() {
      --N || x("loading", null, !1)
    }

    function b(t) {
      var r = t.source || {},
        a = K(r.ignoreTimezone, n.ignoreTimezone);
      t._id = t._id || (t.id === e ? "_fc" + Ce++ : t.id + ""), t.date && (t.start || (t.start = t.date), delete t.date), t._start = d(t.start = m(t.start, a)), t.end = m(t.end, a), t.end && t.end <= t.start && (t.end = null), t._end = t.end ? d(t.end) : null, t.allDay === e && (t.allDay = K(r.allDayDefault, n.allDayDefault)), t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = []
    }

    function w(t) {
      t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = [];
      for (var e = we.sourceNormalizers, n = 0; e.length > n; n++) e[n](t)
    }

    function D(t, e) {
      return t && e && M(t) == M(e)
    }

    function M(t) {
      return ("object" == typeof t ? t.events || t.url : "") || t
    }
    var C = this;
    C.isFetchNeeded = a, C.fetchEvents = o, C.addEventSource = c, C.removeEventSource = u, C.updateEvent = f, C.renderEvent = v, C.removeEvents = h, C.clientEvents = g, C.normalizeEvent = b;
    for (var S, E, x = C.trigger, T = C.getView, k = C.reportEvents, H = {
        events: []
      }, z = [H], F = 0, R = 0, N = 0, W = [], A = 0; r.length > A; A++) l(r[A])
  }

  function i(t, e, n) {
    return t.setFullYear(t.getFullYear() + e), n || f(t), t
  }

  function s(t, e, n) {
    if (+t) {
      var r = t.getMonth() + e,
        a = d(t);
      for (a.setDate(1), a.setMonth(r), t.setMonth(r), n || f(t); t.getMonth() != a.getMonth();) t.setDate(t.getDate() + (a > t ? 1 : -1))
    }
    return t
  }

  function c(t, e, n) {
    if (+t) {
      var r = t.getDate() + e,
        a = d(t);
      a.setHours(9), a.setDate(r), t.setDate(r), n || f(t), l(t, a)
    }
    return t
  }

  function l(t, e) {
    if (+t)
      for (; t.getDate() != e.getDate();) t.setTime(+t + (e > t ? 1 : -1) * xe)
  }

  function u(t, e) {
    return t.setMinutes(t.getMinutes() + e), t
  }

  function f(t) {
    return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
  }

  function d(t, e) {
    return e ? f(new Date(+t)) : new Date(+t)
  }

  function v() {
    var t, e = 0;
    do t = new Date(1970, e++, 1); while (t.getHours());
    return t
  }

  function h(t, e, n) {
    for (e = e || 1; !t.getDay() || n && 1 == t.getDay() || !n && 6 == t.getDay();) c(t, e);
    return t
  }

  function g(t, e) {
    return Math.round((d(t, !0) - d(e, !0)) / Ee)
  }

  function p(t, n, r, a) {
    n !== e && n != t.getFullYear() && (t.setDate(1), t.setMonth(0), t.setFullYear(n)), r !== e && r != t.getMonth() && (t.setDate(1), t.setMonth(r)), a !== e && t.setDate(a)
  }

  function m(t, n) {
    return "object" == typeof t ? t : "number" == typeof t ? new Date(1e3 * t) : "string" == typeof t ? t.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(t)) : (n === e && (n = !0), y(t, n) || (t ? new Date(t) : null)) : null
  }

  function y(t, e) {
    var n = t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
    if (!n) return null;
    var r = new Date(n[1], 0, 1);
    if (e || !n[13]) {
      var a = new Date(n[1], 0, 1, 9, 0);
      n[3] && (r.setMonth(n[3] - 1), a.setMonth(n[3] - 1)), n[5] && (r.setDate(n[5]), a.setDate(n[5])), l(r, a), n[7] && r.setHours(n[7]), n[8] && r.setMinutes(n[8]), n[10] && r.setSeconds(n[10]), n[12] && r.setMilliseconds(1e3 * Number("0." + n[12])), l(r, a)
    } else if (r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), r.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
      var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
      o *= "-" == n[15] ? 1 : -1, r = new Date(+r + 1e3 * 60 * o)
    }
    return r
  }

  function b(t) {
    if ("number" == typeof t) return 60 * t;
    if ("object" == typeof t) return 60 * t.getHours() + t.getMinutes();
    var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
    if (e) {
      var n = parseInt(e[1], 10);
      return e[3] && (n %= 12, "p" == e[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (e[2] ? parseInt(e[2], 10) : 0)
    }
  }

  function w(t, e, n) {
    return D(t, null, e, n)
  }

  function D(t, e, n, r) {
    r = r || ye;
    var a, o, i, s, c = t,
      l = e,
      u = n.length,
      f = "";
    for (a = 0; u > a; a++)
      if (o = n.charAt(a), "'" == o) {
        for (i = a + 1; u > i; i++)
          if ("'" == n.charAt(i)) {
            c && (f += i == a + 1 ? "'" : n.substring(a + 1, i), a = i);
            break
          }
      } else if ("(" == o) {
      for (i = a + 1; u > i; i++)
        if (")" == n.charAt(i)) {
          var d = w(c, n.substring(a + 1, i), r);
          parseInt(d.replace(/\D/, ""), 10) && (f += d), a = i;
          break
        }
    } else if ("[" == o) {
      for (i = a + 1; u > i; i++)
        if ("]" == n.charAt(i)) {
          var v = n.substring(a + 1, i),
            d = w(c, v, r);
          d != w(l, v, r) && (f += d), a = i;
          break
        }
    } else if ("{" == o) c = e, l = t;
    else if ("}" == o) c = t, l = e;
    else {
      for (i = u; i > a; i--)
        if (s = ke[n.substring(a, i)]) {
          c && (f += s(c, r)), a = i - 1;
          break
        } i == a && c && (f += o)
    }
    return f
  }

  function M(t) {
    var e, n = new Date(t.getTime());
    return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
  }

  function C(t) {
    return t.end ? S(t.end, t.allDay) : c(d(t.start), 1)
  }

  function S(t, e) {
    return t = d(t), e || t.getHours() || t.getMinutes() ? c(t, 1) : f(t)
  }

  function E(t, e) {
    return 100 * (e.msLength - t.msLength) + (t.event.start - e.event.start)
  }

  function x(t, e) {
    return t.end > e.start && t.start < e.end
  }

  function T(t, e, n, r) {
    var a, o, i, s, c, l, u, f, v = [],
      h = t.length;
    for (a = 0; h > a; a++) o = t[a], i = o.start, s = e[a], s > n && r > i && (n > i ? (c = d(n), u = !1) : (c = i, u = !0), s > r ? (l = d(r), f = !1) : (l = s, f = !0), v.push({
      event: o,
      start: c,
      end: l,
      isStart: u,
      isEnd: f,
      msLength: l - c
    }));
    return v.sort(E)
  }

  function k(t) {
    var e, n, r, a, o, i = [],
      s = t.length;
    for (e = 0; s > e; e++) {
      for (n = t[e], r = 0;;) {
        if (a = !1, i[r])
          for (o = 0; i[r].length > o; o++)
            if (x(i[r][o], n)) {
              a = !0;
              break
            } if (!a) break;
        r++
      }
      i[r] ? i[r].push(n) : i[r] = [n]
    }
    return i
  }

  function H(n, r, a) {
    n.unbind("mouseover").mouseover(function(n) {
      for (var o, i, s, c = n.target; c != this;) o = c, c = c.parentNode;
      (i = o._fci) !== e && (o._fci = e, s = r[i], a(s.event, s.element, s), t(n.target).trigger(n)), n.stopPropagation()
    })
  }

  function z(e, n, r) {
    for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.width(Math.max(0, n - R(a, r)))
  }

  function F(e, n, r) {
    for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.height(Math.max(0, n - L(a, r)))
  }

  function R(t, e) {
    return N(t) + A(t) + (e ? W(t) : 0)
  }

  function N(e) {
    return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
  }

  function W(e) {
    return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
  }

  function A(e) {
    return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
  }

  function L(t, e) {
    return _(t) + B(t) + (e ? O(t) : 0)
  }

  function _(e) {
    return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
  }

  function O(e) {
    return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
  }

  function B(e) {
    return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
  }

  function q(t, e) {
    e = "number" == typeof e ? e + "px" : e, t.each(function(t, n) {
      n.style.cssText += ";min-height:" + e + ";_height:" + e
    })
  }

  function I() {}

  function Y(t, e) {
    return t - e
  }

  function j(t) {
    return Math.max.apply(Math, t)
  }

  function P(t) {
    return (10 > t ? "0" : "") + t
  }

  function J(t, n) {
    if (t[n] !== e) return t[n];
    for (var r, a = n.split(/(?=[A-Z])/), o = a.length - 1; o >= 0; o--)
      if (r = t[a[o].toLowerCase()], r !== e) return r;
    return t[""]
  }

  function V(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }

  function X(t) {
    return t.id + "/" + t.className + "/" + t.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, "")
  }

  function U(t) {
    t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return !1
    })
  }

  function Z(t) {
    t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
  }

  function $(t, e) {
    t.each(function(t, n) {
      n.className = n.className.replace(/^fc-\w*/, "fc-" + Se[e.getDay()])
    })
  }

  function Q(t, e) {
    var n = t.source || {},
      r = t.color,
      a = n.color,
      o = e("eventColor"),
      i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o,
      s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o,
      c = t.textColor || n.textColor || e("eventTextColor"),
      l = [];
    return i && l.push("background-color:" + i), s && l.push("border-color:" + s), c && l.push("color:" + c), l.join(";")
  }

  function G(e, n, r) {
    if (t.isFunction(e) && (e = [e]), e) {
      var a, o;
      for (a = 0; e.length > a; a++) o = e[a].apply(n, r) || o;
      return o
    }
  }

  function K() {
    for (var t = 0; arguments.length > t; t++)
      if (arguments[t] !== e) return arguments[t]
  }

  function te(t, e) {
    function n(t, e) {
      e && (s(t, e), t.setDate(1));
      var n = d(t, !0);
      n.setDate(1);
      var l = s(d(n), 1),
        u = d(n),
        f = d(l),
        v = a("firstDay"),
        g = a("weekends") ? 0 : 1;
      g && (h(u), h(f, -1, !0)), c(u, -((u.getDay() - Math.max(v, g) + 7) % 7)), c(f, (7 - f.getDay() + Math.max(v, g)) % 7);
      var p = Math.round((f - u) / (7 * Ee));
      "fixed" == a("weekMode") && (c(f, 7 * (6 - p)), p = 6), r.title = i(n, a("titleFormat")), r.start = n, r.end = l, r.visStart = u, r.visEnd = f, o(p, g ? 5 : 7, !0)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "month");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDate
  }

  function ee(t, e) {
    function n(t, e) {
      e && c(t, 7 * e);
      var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
        s = c(d(n), 7),
        l = d(n),
        u = d(s),
        f = a("weekends");
      f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(1, f ? 7 : 5, !1)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "basicWeek");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDates
  }

  function ne(t, e) {
    function n(t, e) {
      e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1)), r.title = i(t, a("titleFormat")), r.start = r.visStart = d(t, !0), r.end = r.visEnd = c(d(r.start), 1), o(1, 1, !1)
    }
    var r = this;
    r.render = n, re.call(r, t, e, "basicDay");
    var a = r.opt,
      o = r.renderBasic,
      i = e.formatDate
  }

  function re(e, n, r) {
    function a(t, e, n) {
      ne = t, re = e, o();
      var r = !P;
      r ? i() : Te(), s(n)
    }

    function o() {
      ce = Ee("isRTL"), ce ? (le = -1, fe = re - 1) : (le = 1, fe = 0), pe = Ee("firstDay"), ye = Ee("weekends") ? 0 : 1, be = Ee("theme") ? "ui" : "fc", we = Ee("columnFormat"), De = Ee("weekNumbers"), Me = Ee("weekNumberTitle"), Ce = "iso" != Ee("weekNumberCalculation") ? "w" : "W"
    }

    function i() {
      Q = t("<div style='position:absolute;z-index:3;top:0;left:0'/>").appendTo(e)
    }

    function s(n) {
      var r, a, o, i, s = "",
        c = be + "-widget-header",
        l = be + "-widget-content",
        u = B.start.getMonth(),
        d = f(new Date);
      for (s += "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", De && (s += "<th class='fc-week-number " + c + "'/>"), r = 0; re > r; r++) s += "<th class='fc-day-header fc-" + Se[r] + " " + c + "'/>";
      for (s += "</tr></thead><tbody>", r = 0; ne > r; r++) {
        for (s += "<tr class='fc-week'>", De && (s += "<td class='fc-week-number " + l + "'>" + "<div/>" + "</td>"), a = 0; re > a; a++) o = F(r, a), i = ["fc-day", "fc-" + Se[o.getDay()], l], o.getMonth() != u && i.push("fc-other-month"), +o == +d && (i.push("fc-today"), i.push(be + "-state-highlight")), s += "<td class='" + i.join(" ") + "'" + " data-date='" + Fe(o, "yyyy-MM-dd") + "'" + ">" + "<div>", n && (s += "<div class='fc-day-number'>" + o.getDate() + "</div>"), s += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
        s += "</tr>"
      }
      s += "</tbody></table>", _(), I && I.remove(), I = t(s).appendTo(e), Y = I.find("thead"), j = Y.find(".fc-day-header"), P = I.find("tbody"), J = P.find("tr"), V = P.find(".fc-day"), X = J.find("td:first-child"), $ = J.eq(0).find(".fc-day-content > div"), Z(Y.add(Y.find("tr"))), Z(J), J.eq(0).addClass("fc-first"), J.filter(":last").addClass("fc-last"), De && Y.find(".fc-week-number").text(Me), j.each(function(e, n) {
        var r = R(e);
        t(n).text(Fe(r, we))
      }), De && P.find(".fc-week-number > div").each(function(e, n) {
        var r = F(e, 0);
        t(n).text(Fe(r, Ce))
      }), V.each(function(e, n) {
        var r = R(e);
        xe("dayRender", B, r, t(n))
      }), v(V)
    }

    function l(e) {
      K = e;
      var n, r, a, o = K - Y.height();
      "variable" == Ee("weekMode") ? n = r = Math.floor(o / (1 == ne ? 2 : 6)) : (n = Math.floor(o / ne), r = o - n * (ne - 1)), X.each(function(e, o) {
        ne > e && (a = t(o), q(a.find("> div"), (e == ne - 1 ? r : n) - L(a)))
      }), O()
    }

    function u(t) {
      G = t, se.clear(), ee = 0, De && (ee = Y.find("th.fc-week-number").outerWidth()), te = Math.floor((G - ee) / re), z(j.slice(0, -1), te)
    }

    function v(t) {
      t.click(h).mousedown(ze)
    }

    function h(e) {
      if (!Ee("selectable")) {
        var n = y(t(this).data("date"));
        xe("dayClick", this, n, !0, e)
      }
    }

    function p(t, e, n) {
      n && oe.build();
      for (var r = d(B.visStart), a = c(d(r), re), o = 0; ne > o; o++) {
        var i = new Date(Math.max(r, t)),
          s = new Date(Math.min(a, e));
        if (s > i) {
          var l, u;
          ce ? (l = g(s, r) * le + fe + 1, u = g(i, r) * le + fe + 1) : (l = g(i, r), u = g(s, r)), v(m(o, l, o, u - 1))
        }
        c(r, 7), c(a, 7)
      }
    }

    function m(t, n, r, a) {
      var o = oe.rect(t, n, r, a, e);
      return ke(o, e)
    }

    function b(t) {
      return d(t)
    }

    function w(t, e) {
      p(t, c(d(e), 1), !0)
    }

    function D() {
      He()
    }

    function M(t, e, n) {
      var r = k(t),
        a = V[r.row * re + r.col];
      xe("dayClick", a, t, e, n)
    }

    function C(t, e) {
      ie.start(function(t) {
        He(), t && m(t.row, t.col, t.row, t.col)
      }, e)
    }

    function S(t, e, n) {
      var r = ie.stop();
      if (He(), r) {
        var a = H(r);
        xe("drop", t, a, !0, e, n)
      }
    }

    function E(t) {
      return d(t.start)
    }

    function x(t) {
      return se.left(t)
    }

    function T(t) {
      return se.right(t)
    }

    function k(t) {
      return {
        row: Math.floor(g(t, B.visStart) / 7),
        col: N(t.getDay())
      }
    }

    function H(t) {
      return F(t.row, t.col)
    }

    function F(t, e) {
      return c(d(B.visStart), 7 * t + e * le + fe)
    }

    function R(t) {
      return F(Math.floor(t / re), t % re)
    }

    function N(t) {
      return (t - Math.max(pe, ye) + re) % re * le + fe
    }

    function W(t) {
      return J.eq(t)
    }

    function A() {
      var t = 0;
      return De && (t += ee), {
        left: t,
        right: G
      }
    }

    function _() {
      q(e, e.height())
    }

    function O() {
      q(e, 1)
    }
    var B = this;
    B.renderBasic = a, B.setHeight = l, B.setWidth = u, B.renderDayOverlay = p, B.defaultSelectionEnd = b, B.renderSelection = w, B.clearSelection = D, B.reportDayClick = M, B.dragStart = C, B.dragStop = S, B.defaultEventEnd = E, B.getHoverListener = function() {
      return ie
    }, B.colContentLeft = x, B.colContentRight = T, B.dayOfWeekCol = N, B.dateCell = k, B.cellDate = H, B.cellIsAllDay = function() {
      return !0
    }, B.allDayRow = W, B.allDayBounds = A, B.getRowCnt = function() {
      return ne
    }, B.getColCnt = function() {
      return re
    }, B.getColWidth = function() {
      return te
    }, B.getDaySegmentContainer = function() {
      return Q
    }, ue.call(B, e, n, r), ve.call(B), de.call(B), ae.call(B);
    var I, Y, j, P, J, V, X, $, Q, G, K, te, ee, ne, re, oe, ie, se, ce, le, fe, pe, ye, be, we, De, Me, Ce, Ee = B.opt,
      xe = B.trigger,
      Te = B.clearEvents,
      ke = B.renderOverlay,
      He = B.clearOverlays,
      ze = B.daySelectionMousedown,
      Fe = n.formatDate;
    U(e.addClass("fc-grid")), oe = new he(function(e, n) {
      var r, a, o;
      j.each(function(e, i) {
        r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
      }), o[1] = a + r.outerWidth(), J.each(function(n, i) {
        ne > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
      }), o[1] = a + r.outerHeight()
    }), ie = new ge(oe), se = new me(function(t) {
      return $.eq(t)
    })
  }

  function ae() {
    function e(t, e) {
      v(t), x(r(t), e), l("eventAfterAllRender")
    }

    function n() {
      h(), b().empty()
    }

    function r(e) {
      var n, r, a, o, s, l, u = S(),
        f = E(),
        v = d(i.visStart),
        h = c(d(v), f),
        g = t.map(e, C),
        p = [];
      for (n = 0; u > n; n++) {
        for (r = k(T(e, g, v, h)), a = 0; r.length > a; a++)
          for (o = r[a], s = 0; o.length > s; s++) l = o[s], l.row = n, l.level = a, p.push(l);
        c(v, 7), c(h, 7)
      }
      return p
    }

    function a(t, e, n) {
      u(t) && o(t, e), n.isEnd && f(t) && H(t, e, n), g(t, e)
    }

    function o(t, e) {
      var n, r = w();
      e.draggable({
        zIndex: 9,
        delay: 50,
        opacity: s("dragOpacity"),
        revertDuration: s("dragRevertDuration"),
        start: function(a, o) {
          l("eventDragStart", e, t, a, o), m(t, e), r.start(function(r, a, o, i) {
            e.draggable("option", "revert", !r || !o && !i), M(), r ? (n = 7 * o + i * (s("isRTL") ? -1 : 1), D(c(d(t.start), n), c(C(t), n))) : n = 0
          }, a, "drag")
        },
        stop: function(a, o) {
          r.stop(), M(), l("eventDragStop", e, t, a, o), n ? y(this, t, n, 0, t.allDay, a, o) : (e.css("filter", ""), p(t, e))
        }
      })
    }
    var i = this;
    i.renderEvents = e, i.compileDaySegs = r, i.clearEvents = n, i.bindDaySeg = a, fe.call(i);
    var s = i.opt,
      l = i.trigger,
      u = i.isEventDraggable,
      f = i.isEventResizable,
      v = i.reportEvents,
      h = i.reportEventClear,
      g = i.eventElementHandlers,
      p = i.showEvents,
      m = i.hideEvents,
      y = i.eventDrop,
      b = i.getDaySegmentContainer,
      w = i.getHoverListener,
      D = i.renderDayOverlay,
      M = i.clearOverlays,
      S = i.getRowCnt,
      E = i.getColCnt,
      x = i.renderDaySegs,
      H = i.resizableDayEvent
  }

  function oe(t, e) {
    function n(t, e) {
      e && c(t, 7 * e);
      var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
        s = c(d(n), 7),
        l = d(n),
        u = d(s),
        f = a("weekends");
      f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(f ? 7 : 5)
    }
    var r = this;
    r.render = n, se.call(r, t, e, "agendaWeek");
    var a = r.opt,
      o = r.renderAgenda,
      i = e.formatDates
  }

  function ie(t, e) {
    function n(t, e) {
      e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1));
      var n = d(t, !0),
        s = c(d(n), 1);
      r.title = i(t, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = s, o(1)
    }
    var r = this;
    r.render = n, se.call(r, t, e, "agendaDay");
    var a = r.opt,
      o = r.renderAgenda,
      i = e.formatDate
  }

  function se(n, r, a) {
    function o(t) {
      Le = t, i(), te ? nn() : s(), l()
    }

    function i() {
      Ye = tn("theme") ? "ui" : "fc", Pe = tn("weekends") ? 0 : 1, je = tn("firstDay"), (Je = tn("isRTL")) ? (Ve = -1, Xe = Le - 1) : (Ve = 1, Xe = 0), Ue = b(tn("minTime")), Ze = b(tn("maxTime")), $e = tn("columnFormat"), Qe = tn("weekNumbers"), Ge = tn("weekNumberTitle"), Ke = "iso" != tn("weekNumberCalculation") ? "w" : "W", Ne = tn("snapMinutes") || tn("slotMinutes")
    }

    function s() {
      var e, r, a, o, i, s = Ye + "-widget-header",
        c = Ye + "-widget-content",
        l = 0 == tn("slotMinutes") % 15;
      for (e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>", e += Qe ? "<th class='fc-agenda-axis fc-week-number " + s + "'/>" : "<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++) e += "<th class='fc- fc-col" + r + " " + s + "'/>";
      for (e += "<th class='fc-agenda-gutter " + s + "'>&nbsp;</th>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + "<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++) e += "<td class='fc- fc-col" + r + " " + c + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>";
      for (e += "<td class='fc-agenda-gutter " + c + "'>&nbsp;</td>" + "</tr>" + "</tbody>" + "</table>", te = t(e).appendTo(n), ee = te.find("thead"), ne = ee.find("th").slice(1, -1), re = te.find("tbody"), ae = re.find("td").slice(0, -1), oe = ae.find("div.fc-day-content div"), ie = ae.eq(0), se = ie.find("> div"), Z(ee.add(ee.find("tr"))), Z(re.add(re.find("tr"))), Se = ee.find("th:first"), Ee = te.find(".fc-agenda-gutter"), le = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), tn("allDaySlot") ? (fe = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(le), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + tn("allDayText") + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", pe = t(e).appendTo(le), ye = pe.find("tr"), D(ye.find("td")), Se = Se.add(pe.find("th:first")), Ee = Ee.add(pe.find("th.fc-agenda-gutter")), le.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : fe = t([]), be = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(le), we = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(be), De = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", a = v(), o = u(d(a), Ze), u(a, Ue), _e = 0, r = 0; o > a; r++) i = a.getMinutes(), e += "<tr class='fc-slot" + r + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (l && i ? "&nbsp;" : un(a, tn("axisFormat"))) + "</th>" + "<td class='" + c + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", u(a, tn("slotMinutes")), _e++;
      e += "</tbody></table>", Me = t(e).appendTo(we), Ce = Me.find("div:first"), M(Me.find("td")), Se = Se.add(Me.find("th:first"))
    }

    function l() {
      var t, e, n, r, a = f(new Date);
      if (Qe) {
        var o = un(N(0), Ke);
        Je ? o += Ge : o = Ge + o, ee.find(".fc-week-number").text(o)
      }
      for (t = 0; Le > t; t++) r = N(t), e = ne.eq(t), e.html(un(r, $e)), n = ae.eq(t), +r == +a ? n.addClass(Ye + "-state-highlight fc-today") : n.removeClass(Ye + "-state-highlight fc-today"), $(e.add(n), r)
    }

    function h(t, n) {
      t === e && (t = ke), ke = t, fn = {};
      var r = re.position().top,
        a = be.position().top,
        o = Math.min(t - r, Me.height() + a + 1);
      se.height(o - L(ie)), le.css("top", r), be.height(o - a - 1), Re = Ce.height() + 1, We = tn("slotMinutes") / Ne, Ae = Re / We, n && m()
    }

    function p(e) {
      Te = e, qe.clear(), He = 0, z(Se.width("").each(function(e, n) {
        He = Math.max(He, t(n).outerWidth())
      }), He);
      var n = be[0].clientWidth;
      Fe = be.width() - n, Fe ? (z(Ee, Fe), Ee.show().prev().removeClass("fc-last")) : Ee.hide().prev().addClass("fc-last"), ze = Math.floor((n - He) / Le), z(ne.slice(0, -1), ze)
    }

    function m() {
      function t() {
        be.scrollTop(r)
      }
      var e = v(),
        n = d(e);
      n.setHours(tn("firstHour"));
      var r = _(e, n) + 1;
      t(), setTimeout(t, 0)
    }

    function y() {
      Ie = be.scrollTop()
    }

    function w() {
      be.scrollTop(Ie)
    }

    function D(t) {
      t.click(C).mousedown(cn)
    }

    function M(t) {
      t.click(C).mousedown(V)
    }

    function C(t) {
      if (!tn("selectable")) {
        var e = Math.min(Le - 1, Math.floor((t.pageX - te.offset().left - He) / ze)),
          n = N(e),
          r = this.parentNode.className.match(/fc-slot(\d+)/);
        if (r) {
          var a = parseInt(r[1]) * tn("slotMinutes"),
            o = Math.floor(a / 60);
          n.setHours(o), n.setMinutes(a % 60 + Ue), en("dayClick", ae[e], n, !1, t)
        } else en("dayClick", ae[e], n, !0, t)
      }
    }

    function S(t, e, n) {
      n && Oe.build();
      var r, a, o = d(K.visStart);
      Je ? (r = g(e, o) * Ve + Xe + 1, a = g(t, o) * Ve + Xe + 1) : (r = g(t, o), a = g(e, o)), r = Math.max(0, r), a = Math.min(Le, a), a > r && D(E(0, r, 0, a - 1))
    }

    function E(t, e, n, r) {
      var a = Oe.rect(t, e, n, r, le);
      return rn(a, le)
    }

    function x(t, e) {
      for (var n = d(K.visStart), r = c(d(n), 1), a = 0; Le > a; a++) {
        var o = new Date(Math.max(n, t)),
          i = new Date(Math.min(r, e));
        if (i > o) {
          var s = a * Ve + Xe,
            l = Oe.rect(0, s, 0, s, we),
            u = _(n, o),
            f = _(n, i);
          l.top = u, l.height = f - u, M(rn(l, we))
        }
        c(n, 1), c(r, 1)
      }
    }

    function T(t) {
      return qe.left(t)
    }

    function k(t) {
      return qe.right(t)
    }

    function H(t) {
      return {
        row: Math.floor(g(t, K.visStart) / 7),
        col: A(t.getDay())
      }
    }

    function R(t) {
      var e = N(t.col),
        n = t.row;
      return tn("allDaySlot") && n--, n >= 0 && u(e, Ue + n * Ne), e
    }

    function N(t) {
      return c(d(K.visStart), t * Ve + Xe)
    }

    function W(t) {
      return tn("allDaySlot") && !t.row
    }

    function A(t) {
      return (t - Math.max(je, Pe) + Le) % Le * Ve + Xe
    }

    function _(t, n) {
      if (t = d(t, !0), u(d(t), Ue) > n) return 0;
      if (n >= u(d(t), Ze)) return Me.height();
      var r = tn("slotMinutes"),
        a = 60 * n.getHours() + n.getMinutes() - Ue,
        o = Math.floor(a / r),
        i = fn[o];
      return i === e && (i = fn[o] = Me.find("tr:eq(" + o + ") td div")[0].offsetTop), Math.max(0, Math.round(i - 1 + Re * (a % r / r)))
    }

    function O() {
      return {
        left: He,
        right: Te - Fe
      }
    }

    function B() {
      return ye
    }

    function q(t) {
      var e = d(t.start);
      return t.allDay ? e : u(e, tn("defaultEventMinutes"))
    }

    function I(t, e) {
      return e ? d(t) : u(d(t), tn("slotMinutes"))
    }

    function j(t, e, n) {
      n ? tn("allDaySlot") && S(t, c(d(e), 1), !0) : P(t, e)
    }

    function P(e, n) {
      var r = tn("selectHelper");
      if (Oe.build(), r) {
        var a = g(e, K.visStart) * Ve + Xe;
        if (a >= 0 && Le > a) {
          var o = Oe.rect(0, a, 0, a, we),
            i = _(e, e),
            s = _(e, n);
          if (s > i) {
            if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
              var c = r(e, n);
              c && (o.position = "absolute", o.zIndex = 8, xe = t(c).css(o).appendTo(we))
            } else o.isStart = !0, o.isEnd = !0, xe = t(ln({
              title: "",
              start: e,
              end: n,
              className: ["fc-select-helper"],
              editable: !1
            }, o)), xe.css("opacity", tn("dragOpacity"));
            xe && (M(xe), we.append(xe), z(xe, o.width, !0), F(xe, o.height, !0))
          }
        }
      } else x(e, n)
    }

    function J() {
      an(), xe && (xe.remove(), xe = null)
    }

    function V(e) {
      if (1 == e.which && tn("selectable")) {
        sn(e);
        var n;
        Be.start(function(t, e) {
          if (J(), t && t.col == e.col && !W(t)) {
            var r = R(e),
              a = R(t);
            n = [r, u(d(r), Ne), a, u(d(a), Ne)].sort(Y), P(n[0], n[3])
          } else n = null
        }, e), t(document).one("mouseup", function(t) {
          Be.stop(), n && (+n[0] == +n[1] && X(n[0], !1, t), on(n[0], n[3], !1, t))
        })
      }
    }

    function X(t, e, n) {
      en("dayClick", ae[A(t.getDay())], t, e, n)
    }

    function Q(t, e) {
      Be.start(function(t) {
        if (an(), t)
          if (W(t)) E(t.row, t.col, t.row, t.col);
          else {
            var e = R(t),
              n = u(d(e), tn("defaultEventMinutes"));
            x(e, n)
          }
      }, e)
    }

    function G(t, e, n) {
      var r = Be.stop();
      an(), r && en("drop", t, R(r), W(r), e, n)
    }
    var K = this;
    K.renderAgenda = o, K.setWidth = p, K.setHeight = h, K.beforeHide = y, K.afterShow = w, K.defaultEventEnd = q, K.timePosition = _, K.dayOfWeekCol = A, K.dateCell = H, K.cellDate = R, K.cellIsAllDay = W, K.allDayRow = B, K.allDayBounds = O, K.getHoverListener = function() {
      return Be
    }, K.colContentLeft = T, K.colContentRight = k, K.getDaySegmentContainer = function() {
      return fe
    }, K.getSlotSegmentContainer = function() {
      return De
    }, K.getMinMinute = function() {
      return Ue
    }, K.getMaxMinute = function() {
      return Ze
    }, K.getBodyContent = function() {
      return we
    }, K.getRowCnt = function() {
      return 1
    }, K.getColCnt = function() {
      return Le
    }, K.getColWidth = function() {
      return ze
    }, K.getSnapHeight = function() {
      return Ae
    }, K.getSnapMinutes = function() {
      return Ne
    }, K.defaultSelectionEnd = I, K.renderDayOverlay = S, K.renderSelection = j, K.clearSelection = J, K.reportDayClick = X, K.dragStart = Q, K.dragStop = G, ue.call(K, n, r, a), ve.call(K), de.call(K), ce.call(K);
    var te, ee, ne, re, ae, oe, ie, se, le, fe, pe, ye, be, we, De, Me, Ce, Se, Ee, xe, Te, ke, He, ze, Fe, Re, Ne, We, Ae, Le, _e, Oe, Be, qe, Ie, Ye, je, Pe, Je, Ve, Xe, Ue, Ze, $e, Qe, Ge, Ke, tn = K.opt,
      en = K.trigger,
      nn = K.clearEvents,
      rn = K.renderOverlay,
      an = K.clearOverlays,
      on = K.reportSelection,
      sn = K.unselect,
      cn = K.daySelectionMousedown,
      ln = K.slotSegHtml,
      un = r.formatDate,
      fn = {};
    U(n.addClass("fc-agenda")), Oe = new he(function(e, n) {
      function r(t) {
        return Math.max(c, Math.min(l, t))
      }
      var a, o, i;
      ne.each(function(e, r) {
        a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
      }), i[1] = o + a.outerWidth(), tn("allDaySlot") && (a = ye, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
      for (var s = we.offset().top, c = be.offset().top, l = c + be.outerHeight(), u = 0; _e * We > u; u++) e.push([r(s + Ae * u), r(s + Ae * (u + 1))])
    }), Be = new ge(Oe), qe = new me(function(t) {
      return oe.eq(t)
    })
  }

  function ce() {
    function n(t, e) {
      S(t);
      var n, r = t.length,
        i = [],
        c = [];
      for (n = 0; r > n; n++) t[n].allDay ? i.push(t[n]) : c.push(t[n]);
      y("allDaySlot") && (Y(a(i), e), z()), s(o(c), e), b("eventAfterAllRender")
    }

    function r() {
      E(), N().empty(), W().empty()
    }

    function a(e) {
      var n, r, a, o, i = k(T(e, t.map(e, C), m.visStart, m.visEnd)),
        s = i.length,
        c = [];
      for (n = 0; s > n; n++)
        for (r = i[n], a = 0; r.length > a; a++) o = r[a], o.row = 0, o.level = n, c.push(o);
      return c
    }

    function o(e) {
      var n, r, a, o, s, l, f = P(),
        v = O(),
        h = _(),
        g = u(d(m.visStart), v),
        p = t.map(e, i),
        y = [];
      for (n = 0; f > n; n++) {
        for (r = k(T(e, p, g, u(d(g), h - v))), le(r), a = 0; r.length > a; a++)
          for (o = r[a], s = 0; o.length > s; s++) l = o[s], l.col = n, l.level = a, y.push(l);
        c(g, 1, !0)
      }
      return y
    }

    function i(t) {
      return t.end ? d(t.end) : u(d(t.start), y("defaultEventMinutes"))
    }

    function s(n, r) {
      var a, o, i, s, c, u, f, d, h, g, p, m, w, D, M, C, S, E, x, T, k, z, F = n.length,
        N = "",
        A = {},
        _ = {},
        O = W(),
        Y = P();
      for ((T = y("isRTL")) ? (k = -1, z = Y - 1) : (k = 1, z = 0), a = 0; F > a; a++) o = n[a], i = o.event, s = B(o.start, o.start), c = B(o.start, o.end), u = o.col, f = o.level, d = o.forward || 0, h = q(u * k + z), g = I(u * k + z) - h, g = Math.min(g - 6, .95 * g), p = f ? g / (f + d + 1) : d ? 2 * (g / (d + 1) - 6) : g, m = h + g / (f + d + 1) * f * k + (T ? g - p : 0), o.top = s, o.left = m, o.outerWidth = p, o.outerHeight = c - s, N += l(i, o);
      for (O[0].innerHTML = N, w = O.children(), a = 0; F > a; a++) o = n[a], i = o.event, D = t(w[a]), M = b("eventRender", i, i, D), M === !1 ? D.remove() : (M && M !== !0 && (D.remove(), D = t(M).css({
        position: "absolute",
        top: o.top,
        left: o.left
      }).appendTo(O)), o.element = D, i._id === r ? v(i, D, o) : D[0]._fci = a, G(i, D));
      for (H(O, n, v), a = 0; F > a; a++) o = n[a], (D = o.element) && (S = A[C = o.key = X(D[0])], o.vsides = S === e ? A[C] = L(D, !0) : S, S = _[C], o.hsides = S === e ? _[C] = R(D, !0) : S, E = D.find(".fc-event-title"), E.length && (o.contentTop = E[0].offsetTop));
      for (a = 0; F > a; a++) o = n[a], (D = o.element) && (D[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", x = Math.max(0, o.outerHeight - o.vsides), D[0].style.height = x + "px", i = o.event, o.contentTop !== e && 10 > x - o.contentTop && (D.find("div.fc-event-time").text(ie(i.start, y("timeFormat")) + " " + i.title), D.find("div.fc-event-title").remove()), b("eventAfterRender", i, i, D))
    }

    function l(t, e) {
      var n = "<",
        r = t.url,
        a = Q(t, y),
        o = ["fc-event", "fc-event-vert"];
      return w(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + V(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;top:" + e.top + "px;left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + V(se(t.start, t.end, y("timeFormat"))) + "</div>" + "<div class='fc-event-title'>" + V(t.title) + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && D(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
    }

    function f(t, e, n) {
      w(t) && h(t, e, n.isStart), n.isEnd && D(t) && j(t, e, n), x(t, e)
    }

    function v(t, e, n) {
      var r = e.find("div.fc-event-time");
      w(t) && g(t, e, r), n.isEnd && D(t) && p(t, e, r), x(t, e)
    }

    function h(t, e, n) {
      function r() {
        s || (e.width(a).height("").draggable("option", "grid", null), s = !0)
      }
      var a, o, i, s = !0,
        l = y("isRTL") ? -1 : 1,
        u = A(),
        f = J(),
        v = U(),
        h = Z(),
        g = O();
      e.draggable({
        zIndex: 9,
        opacity: y("dragOpacity", "month"),
        revertDuration: y("dragRevertDuration"),
        start: function(g, p) {
          b("eventDragStart", e, t, g, p), te(t, e), a = e.width(), u.start(function(a, u, g, p) {
            ae(), a ? (o = !1, i = p * l, a.row ? n ? s && (e.width(f - 10), F(e, v * Math.round((t.end ? (t.end - t.start) / Te : y("defaultEventMinutes")) / h)), e.draggable("option", "grid", [f, 1]), s = !1) : o = !0 : (re(c(d(t.start), i), c(C(t), i)), r()), o = o || s && !i) : (r(), o = !0), e.draggable("option", "revert", o)
          }, g, "drag")
        },
        stop: function(n, a) {
          if (u.stop(), ae(), b("eventDragStop", e, t, n, a), o) r(), e.css("filter", ""), K(t, e);
          else {
            var c = 0;
            s || (c = Math.round((e.offset().top - $().offset().top) / v) * h + g - (60 * t.start.getHours() + t.start.getMinutes())), ee(this, t, i, c, s, n, a)
          }
        }
      })
    }

    function g(t, e, n) {
      function r(e) {
        var r, a = u(d(t.start), e);
        t.end && (r = u(d(t.end), e)), n.text(se(a, r, y("timeFormat")))
      }

      function a() {
        f && (n.css("display", ""), e.draggable("option", "grid", [p, m]), f = !1)
      }
      var o, i, s, l, f = !1,
        v = y("isRTL") ? -1 : 1,
        h = A(),
        g = P(),
        p = J(),
        m = U(),
        w = Z();
      e.draggable({
        zIndex: 9,
        scroll: !1,
        grid: [p, m],
        axis: 1 == g ? "y" : !1,
        opacity: y("dragOpacity"),
        revertDuration: y("dragRevertDuration"),
        start: function(r, u) {
          b("eventDragStart", e, t, r, u), te(t, e), o = e.position(), s = l = 0, h.start(function(r, o, s, l) {
            e.draggable("option", "revert", !r), ae(), r && (i = l * v, y("allDaySlot") && !r.row ? (f || (f = !0, n.hide(), e.draggable("option", "grid", null)), re(c(d(t.start), i), c(C(t), i))) : a())
          }, r, "drag")
        },
        drag: function(t, e) {
          s = Math.round((e.position.top - o.top) / m) * w, s != l && (f || r(s), l = s)
        },
        stop: function(n, c) {
          var l = h.stop();
          ae(), b("eventDragStop", e, t, n, c), l && (i || s || f) ? ee(this, t, i, f ? 0 : s, f, n, c) : (a(), e.css("filter", ""), e.css(o), r(0), K(t, e))
        }
      })
    }

    function p(t, e, n) {
      var r, a, o = U(),
        i = Z();
      e.resizable({
        handles: {
          s: ".ui-resizable-handle"
        },
        grid: o,
        start: function(n, o) {
          r = a = 0, te(t, e), e.css("z-index", 9), b("eventResizeStart", this, t, n, o)
        },
        resize: function(s, c) {
          r = Math.round((Math.max(o, e.height()) - c.originalSize.height) / o), r != a && (n.text(se(t.start, r || t.end ? u(M(t), i * r) : null, y("timeFormat"))), a = r)
        },
        stop: function(n, a) {
          b("eventResizeStop", this, t, n, a), r ? ne(this, t, 0, i * r, n, a) : (e.css("z-index", 8), K(t, e))
        }
      })
    }
    var m = this;
    m.renderEvents = n, m.compileDaySegs = a, m.clearEvents = r, m.slotSegHtml = l, m.bindDaySeg = f, fe.call(m);
    var y = m.opt,
      b = m.trigger,
      w = m.isEventDraggable,
      D = m.isEventResizable,
      M = m.eventEnd,
      S = m.reportEvents,
      E = m.reportEventClear,
      x = m.eventElementHandlers,
      z = m.setHeight,
      N = m.getDaySegmentContainer,
      W = m.getSlotSegmentContainer,
      A = m.getHoverListener,
      _ = m.getMaxMinute,
      O = m.getMinMinute,
      B = m.timePosition,
      q = m.colContentLeft,
      I = m.colContentRight,
      Y = m.renderDaySegs,
      j = m.resizableDayEvent,
      P = m.getColCnt,
      J = m.getColWidth,
      U = m.getSnapHeight,
      Z = m.getSnapMinutes,
      $ = m.getBodyContent,
      G = m.reportEventElement,
      K = m.showEvents,
      te = m.hideEvents,
      ee = m.eventDrop,
      ne = m.eventResize,
      re = m.renderDayOverlay,
      ae = m.clearOverlays,
      oe = m.calendar,
      ie = oe.formatDate,
      se = oe.formatDates
  }

  function le(t) {
    var e, n, r, a, o, i;
    for (e = t.length - 1; e > 0; e--)
      for (a = t[e], n = 0; a.length > n; n++)
        for (o = a[n], r = 0; t[e - 1].length > r; r++) i = t[e - 1][r], x(o, i) && (i.forward = Math.max(i.forward || 0, (o.forward || 0) + 1))
  }

  function ue(t, n, r) {
    function a(t, e) {
      var n = F[t];
      return "object" == typeof n ? J(n, e || r) : n
    }

    function o(t, e) {
      return n.trigger.apply(n, [t, e || S].concat(Array.prototype.slice.call(arguments, 2), [S]))
    }

    function i(t) {
      return l(t) && !a("disableDragging")
    }

    function s(t) {
      return l(t) && !a("disableResizing")
    }

    function l(t) {
      return K(t.editable, (t.source || {}).editable, a("editable"))
    }

    function f(t) {
      k = {};
      var e, n, r = t.length;
      for (e = 0; r > e; e++) n = t[e], k[n._id] ? k[n._id].push(n) : k[n._id] = [n]
    }

    function v(t) {
      return t.end ? d(t.end) : E(t)
    }

    function h(t, e) {
      H.push(e), z[t._id] ? z[t._id].push(e) : z[t._id] = [e]
    }

    function g() {
      H = [], z = {}
    }

    function p(t, n) {
      n.click(function(r) {
        return n.hasClass("ui-draggable-dragging") || n.hasClass("ui-resizable-resizing") ? e : o("eventClick", this, t, r)
      }).hover(function(e) {
        o("eventMouseover", this, t, e)
      }, function(e) {
        o("eventMouseout", this, t, e)
      })
    }

    function m(t, e) {
      b(t, e, "show")
    }

    function y(t, e) {
      b(t, e, "hide")
    }

    function b(t, e, n) {
      var r, a = z[t._id],
        o = a.length;
      for (r = 0; o > r; r++) e && a[r][0] == e[0] || a[r][n]()
    }

    function w(t, e, n, r, a, i, s) {
      var c = e.allDay,
        l = e._id;
      M(k[l], n, r, a), o("eventDrop", t, e, n, r, a, function() {
        M(k[l], -n, -r, c), T(l)
      }, i, s), T(l)
    }

    function D(t, e, n, r, a, i) {
      var s = e._id;
      C(k[s], n, r), o("eventResize", t, e, n, r, function() {
        C(k[s], -n, -r), T(s)
      }, a, i), T(s)
    }

    function M(t, n, r, a) {
      r = r || 0;
      for (var o, i = t.length, s = 0; i > s; s++) o = t[s], a !== e && (o.allDay = a), u(c(o.start, n, !0), r), o.end && (o.end = u(c(o.end, n, !0), r)), x(o, F)
    }

    function C(t, e, n) {
      n = n || 0;
      for (var r, a = t.length, o = 0; a > o; o++) r = t[o], r.end = u(c(v(r), e, !0), n), x(r, F)
    }
    var S = this;
    S.element = t, S.calendar = n, S.name = r, S.opt = a, S.trigger = o, S.isEventDraggable = i, S.isEventResizable = s, S.reportEvents = f, S.eventEnd = v, S.reportEventElement = h, S.reportEventClear = g, S.eventElementHandlers = p, S.showEvents = m, S.hideEvents = y, S.eventDrop = w, S.eventResize = D;
    var E = S.defaultEventEnd,
      x = n.normalizeEvent,
      T = n.reportEventChange,
      k = {},
      H = [],
      z = {},
      F = n.options
  }

  function fe() {
    function n(t, e) {
      var n, r, c, d, p, m, y, b, w = B(),
        D = T(),
        M = k(),
        C = 0,
        S = t.length;
      for (w[0].innerHTML = a(t), o(t, w.children()), i(t), s(t, w, e), l(t), u(t), f(t), n = v(), r = 0; D > r; r++) {
        for (c = 0, d = [], p = 0; M > p; p++) d[p] = 0;
        for (; S > C && (m = t[C]).row == r;) {
          for (y = j(d.slice(m.startCol, m.endCol)), m.top = y, y += m.outerHeight, b = m.startCol; m.endCol > b; b++) d[b] = y;
          C++
        }
        n[r].height(j(d))
      }
      g(t, h(n))
    }

    function r(e, n, r) {
      var i, s, c, d = t("<div/>"),
        p = B(),
        m = e.length;
      for (d[0].innerHTML = a(e), i = d.children(), p.append(i), o(e, i), l(e), u(e), f(e), g(e, h(v())), i = [], s = 0; m > s; s++) c = e[s].element, c && (e[s].row === n && c.css("top", r), i.push(c[0]));
      return t(i)
    }

    function a(t) {
      var e, n, r, a, o, i, s, c, l, u, f = y("isRTL"),
        d = t.length,
        v = F(),
        h = v.left,
        g = v.right,
        p = "";
      for (e = 0; d > e; e++) n = t[e], r = n.event, o = ["fc-event", "fc-event-hori"], w(r) && o.push("fc-event-draggable"), n.isStart && o.push("fc-event-start"), n.isEnd && o.push("fc-event-end"), f ? (i = A(n.end.getDay() - 1), s = A(n.start.getDay()), c = n.isEnd ? N(i) : h, l = n.isStart ? W(s) : g) : (i = A(n.start.getDay()), s = A(n.end.getDay() - 1), c = n.isStart ? N(i) : h, l = n.isEnd ? W(s) : g), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || [])), a = r.url, u = Q(r, y), p += a ? "<a href='" + V(a) + "'" : "<div", p += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;left:" + c + "px;" + u + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && n.isStart && (p += "<span class='fc-event-time'>" + V(I(r.start, r.end, y("timeFormat"))) + "</span>"), p += "<span class='fc-event-title'>" + V(r.title) + "</span>" + "</div>", n.isEnd && D(r) && (p += "<div class='ui-resizable-handle ui-resizable-" + (f ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), p += "</" + (a ? "a" : "div") + ">", n.left = c, n.outerWidth = l - c, n.startCol = i, n.endCol = s + 1;
      return p
    }

    function o(e, n) {
      var r, a, o, i, s, c = e.length;
      for (r = 0; c > r; r++) a = e[r], o = a.event, i = t(n[r]), s = b("eventRender", o, o, i), s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({
        position: "absolute",
        left: a.left
      }), i.replaceWith(s), i = s), a.element = i)
    }

    function i(t) {
      var e, n, r, a = t.length;
      for (e = 0; a > e; e++) n = t[e], r = n.element, r && C(n.event, r)
    }

    function s(t, e, n) {
      var r, a, o, i, s = t.length;
      for (r = 0; s > r; r++) a = t[r], o = a.element, o && (i = a.event, i._id === n ? q(i, o, a) : o[0]._fci = r);
      H(e, t, q)
    }

    function l(t) {
      var n, r, a, o, i, s = t.length,
        c = {};
      for (n = 0; s > n; n++) r = t[n], a = r.element, a && (o = r.key = X(a[0]), i = c[o], i === e && (i = c[o] = R(a, !0)), r.hsides = i)
    }

    function u(t) {
      var e, n, r, a = t.length;
      for (e = 0; a > e; e++) n = t[e], r = n.element, r && (r[0].style.width = Math.max(0, n.outerWidth - n.hsides) + "px")
    }

    function f(t) {
      var n, r, a, o, i, s = t.length,
        c = {};
      for (n = 0; s > n; n++) r = t[n], a = r.element, a && (o = r.key, i = c[o], i === e && (i = c[o] = O(a)), r.outerHeight = a[0].offsetHeight + i)
    }

    function v() {
      var t, e = T(),
        n = [];
      for (t = 0; e > t; t++) n[t] = z(t).find("div.fc-day-content > div");
      return n
    }

    function h(t) {
      var e, n = t.length,
        r = [];
      for (e = 0; n > e; e++) r[e] = t[e][0].offsetTop;
      return r
    }

    function g(t, e) {
      var n, r, a, o, i = t.length;
      for (n = 0; i > n; n++) r = t[n], a = r.element, a && (a[0].style.top = e[r.row] + (r.top || 0) + "px", o = r.event, b("eventAfterRender", o, o, a))
    }

    function p(e, n, a) {
      var o = y("isRTL"),
        i = o ? "w" : "e",
        s = n.find(".ui-resizable-" + i),
        l = !1;
      U(n), n.mousedown(function(t) {
        t.preventDefault()
      }).click(function(t) {
        l && (t.preventDefault(), t.stopImmediatePropagation())
      }), s.mousedown(function(s) {
        function u(n) {
          b("eventResizeStop", this, e, n), t("body").css("cursor", ""), h.stop(), P(), f && x(this, e, f, 0, n), setTimeout(function() {
            l = !1
          }, 0)
        }
        if (1 == s.which) {
          l = !0;
          var f, v, h = m.getHoverListener(),
            g = T(),
            p = k(),
            y = o ? -1 : 1,
            w = o ? p - 1 : 0,
            D = n.css("top"),
            C = t.extend({}, e),
            H = L(e.start);
          J(), t("body").css("cursor", i + "-resize").one("mouseup", u), b("eventResizeStart", this, e, s), h.start(function(t, n) {
            if (t) {
              var s = Math.max(H.row, t.row),
                l = t.col;
              1 == g && (s = 0), s == H.row && (l = o ? Math.min(H.col, l) : Math.max(H.col, l)), f = 7 * s + l * y + w - (7 * n.row + n.col * y + w);
              var u = c(M(e), f, !0);
              if (f) {
                C.end = u;
                var h = v;
                v = r(_([C]), a.row, D), v.find("*").css("cursor", i + "-resize"), h && h.remove(), E(e)
              } else v && (S(e), v.remove(), v = null);
              P(), Y(e.start, c(d(u), 1))
            }
          }, s)
        }
      })
    }
    var m = this;
    m.renderDaySegs = n, m.resizableDayEvent = p;
    var y = m.opt,
      b = m.trigger,
      w = m.isEventDraggable,
      D = m.isEventResizable,
      M = m.eventEnd,
      C = m.reportEventElement,
      S = m.showEvents,
      E = m.hideEvents,
      x = m.eventResize,
      T = m.getRowCnt,
      k = m.getColCnt;
    m.getColWidth;
    var z = m.allDayRow,
      F = m.allDayBounds,
      N = m.colContentLeft,
      W = m.colContentRight,
      A = m.dayOfWeekCol,
      L = m.dateCell,
      _ = m.compileDaySegs,
      B = m.getDaySegmentContainer,
      q = m.bindDaySeg,
      I = m.calendar.formatDates,
      Y = m.renderDayOverlay,
      P = m.clearOverlays,
      J = m.clearSelection
  }

  function de() {
    function e(t, e, a) {
      n(), e || (e = c(t, a)), l(t, e, a), r(t, e, a)
    }

    function n(t) {
      f && (f = !1, u(), s("unselect", null, t))
    }

    function r(t, e, n, r) {
      f = !0, s("select", null, t, e, n, r)
    }

    function a(e) {
      var a = o.cellDate,
        s = o.cellIsAllDay,
        c = o.getHoverListener(),
        f = o.reportDayClick;
      if (1 == e.which && i("selectable")) {
        n(e);
        var d;
        c.start(function(t, e) {
          u(), t && s(t) ? (d = [a(e), a(t)].sort(Y), l(d[0], d[1], !0)) : d = null
        }, e), t(document).one("mouseup", function(t) {
          c.stop(), d && (+d[0] == +d[1] && f(d[0], !0, t), r(d[0], d[1], !0, t))
        })
      }
    }
    var o = this;
    o.select = e, o.unselect = n, o.reportSelection = r, o.daySelectionMousedown = a;
    var i = o.opt,
      s = o.trigger,
      c = o.defaultSelectionEnd,
      l = o.renderSelection,
      u = o.clearSelection,
      f = !1;
    i("selectable") && i("unselectAuto") && t(document).mousedown(function(e) {
      var r = i("unselectCancel");
      r && t(e.target).parents(r).length || n(e)
    })
  }

  function ve() {
    function e(e, n) {
      var r = o.shift();
      return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
    }

    function n() {
      for (var t; t = a.shift();) o.push(t.hide().unbind())
    }
    var r = this;
    r.renderOverlay = e, r.clearOverlays = n;
    var a = [],
      o = []
  }

  function he(t) {
    var e, n, r = this;
    r.build = function() {
      e = [], n = [], t(e, n)
    }, r.cell = function(t, r) {
      var a, o = e.length,
        i = n.length,
        s = -1,
        c = -1;
      for (a = 0; o > a; a++)
        if (r >= e[a][0] && e[a][1] > r) {
          s = a;
          break
        } for (a = 0; i > a; a++)
        if (t >= n[a][0] && n[a][1] > t) {
          c = a;
          break
        } return s >= 0 && c >= 0 ? {
        row: s,
        col: c
      } : null
    }, r.rect = function(t, r, a, o, i) {
      var s = i.offset();
      return {
        top: e[t][0] - s.top,
        left: n[r][0] - s.left,
        width: n[o][1] - n[r][0],
        height: e[a][1] - e[t][0]
      }
    }
  }

  function ge(e) {
    function n(t) {
      pe(t);
      var n = e.cell(t.pageX, t.pageY);
      (!n != !i || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
    }
    var r, a, o, i, s = this;
    s.start = function(s, c, l) {
      a = s, o = i = null, e.build(), n(c), r = l || "mousemove", t(document).bind(r, n)
    }, s.stop = function() {
      return t(document).unbind(r, n), i
    }
  }

  function pe(t) {
    t.pageX === e && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
  }

  function me(t) {
    function n(e) {
      return a[e] = a[e] || t(e)
    }
    var r = this,
      a = {},
      o = {},
      i = {};
    r.left = function(t) {
      return o[t] = o[t] === e ? n(t).position().left : o[t]
    }, r.right = function(t) {
      return i[t] = i[t] === e ? r.left(t) + n(t).width() : i[t]
    }, r.clear = function() {
      a = {}, o = {}, i = {}
    }
  }
  var ye = {
      defaultView: "month",
      aspectRatio: 1.35,
      header: {
        left: "title",
        center: "",
        right: "today prev,next"
      },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: "iso",
      weekNumberTitle: "W",
      allDayDefault: !0,
      ignoreTimezone: !0,
      lazyFetching: !0,
      startParam: "start",
      endParam: "end",
      titleFormat: {
        month: "MMMM yyyy",
        week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
        day: "dddd, MMM d, yyyy"
      },
      columnFormat: {
        month: "ddd",
        week: "ddd M/d",
        day: "dddd M/d"
      },
      timeFormat: {
        "": "h(:mm)t"
      },
      isRTL: !1,
      firstDay: 0,
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      buttonText: {
        prev: "<i class='fa fa-chevron-left'></i>",
        next: "<i class='fa fa-chevron-right'></i>",
        prevYear: "<i class='fa fa-chevron-left'></i>",
        nextYear: "<i class='fa fa-chevron-right'></i>",
        today: "today",
        month: "month",
        week: "week",
        day: "day"
      },
      theme: !1,
      buttonIcons: {
        prev: "circle-triangle-w",
        next: "circle-triangle-e"
      },
      unselectAuto: !0,
      dropAccept: "*"
    },
    be = {
      header: {
        left: "next,prev today",
        center: "",
        right: "title"
      },
      buttonText: {
        prev: "<i class='fa fa-chevron-left'></i>",
        next: "<i class='fa fa-chevron-right'></i>",
        prevYear: "<i class='fa fa-chevron-left'></i>",
        nextYear: "<i class='fa fa-chevron-right'></i"
      },
      buttonIcons: {
        prev: "circle-triangle-e",
        next: "circle-triangle-w"
      }
    },
    we = t.fullCalendar = {
      version: "1.6.0"
    },
    De = we.views = {};
  t.fn.fullCalendar = function(n) {
    if ("string" == typeof n) {
      var a, o = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var r = t.data(this, "fullCalendar");
        if (r && t.isFunction(r[n])) {
          var i = r[n].apply(r, o);
          a === e && (a = i), "destroy" == n && t.removeData(this, "fullCalendar")
        }
      }), a !== e ? a : this
    }
    var i = n.eventSources || [];
    return delete n.eventSources, n.events && (i.push(n.events), delete n.events), n = t.extend(!0, {}, ye, n.isRTL || n.isRTL === e && ye.isRTL ? be : {}, n), this.each(function(e, a) {
      var o = t(a),
        s = new r(o, n, i);
      o.data("fullCalendar", s), s.render()
    }), this
  }, we.sourceNormalizers = [], we.sourceFetchers = [];
  var Me = {
      dataType: "json",
      cache: !1
    },
    Ce = 1;
  we.addDays = c, we.cloneDate = d, we.parseDate = m, we.parseISO8601 = y, we.parseTime = b, we.formatDate = w, we.formatDates = D;
  var Se = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    Ee = 864e5,
    xe = 36e5,
    Te = 6e4,
    ke = {
      s: function(t) {
        return t.getSeconds()
      },
      ss: function(t) {
        return P(t.getSeconds())
      },
      m: function(t) {
        return t.getMinutes()
      },
      mm: function(t) {
        return P(t.getMinutes())
      },
      h: function(t) {
        return t.getHours() % 12 || 12
      },
      hh: function(t) {
        return P(t.getHours() % 12 || 12)
      },
      H: function(t) {
        return t.getHours()
      },
      HH: function(t) {
        return P(t.getHours())
      },
      d: function(t) {
        return t.getDate()
      },
      dd: function(t) {
        return P(t.getDate())
      },
      ddd: function(t, e) {
        return e.dayNamesShort[t.getDay()]
      },
      dddd: function(t, e) {
        return e.dayNames[t.getDay()]
      },
      M: function(t) {
        return t.getMonth() + 1
      },
      MM: function(t) {
        return P(t.getMonth() + 1)
      },
      MMM: function(t, e) {
        return e.monthNamesShort[t.getMonth()]
      },
      MMMM: function(t, e) {
        return e.monthNames[t.getMonth()]
      },
      yy: function(t) {
        return (t.getFullYear() + "").substring(2)
      },
      yyyy: function(t) {
        return t.getFullYear()
      },
      t: function(t) {
        return 12 > t.getHours() ? "a" : "p"
      },
      tt: function(t) {
        return 12 > t.getHours() ? "am" : "pm"
      },
      T: function(t) {
        return 12 > t.getHours() ? "A" : "P"
      },
      TT: function(t) {
        return 12 > t.getHours() ? "AM" : "PM"
      },
      u: function(t) {
        return w(t, "yyyy-MM-dd'T'HH:mm:ss'Z'")
      },
      S: function(t) {
        var e = t.getDate();
        return e > 10 && 20 > e ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
      },
      w: function(t, e) {
        return e.weekNumberCalculation(t)
      },
      W: function(t) {
        return M(t)
      }
    };
  we.dateFormatters = ke, we.applyAll = G, De.month = te, De.basicWeek = ee, De.basicDay = ne, n({
    weekMode: "fixed"
  }), De.agendaWeek = oe, De.agendaDay = ie, n({
    allDaySlot: !0,
    allDayText: "all-day",
    firstHour: 6,
    slotMinutes: 30,
    defaultEventMinutes: 120,
    axisFormat: "h(:mm)tt",
    timeFormat: {
      agenda: "h:mm{ - h:mm}"
    },
    dragOpacity: {
      agenda: .5
    },
    minTime: 0,
    maxTime: 24
  })
})(jQuery);
var $fullCalendarTrads = {
  'ca': {
    'monthNames': ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
    'monthNamesShort': ['Gen.', 'Feb.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Des.'],
    'dayNames': ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
    'dayNamesShort': ['Diu.', 'Dil.', 'Dima.', 'Dime.', 'Dij.', 'Div.', 'Dis.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Avui',
      month: 'Mes',
      week: 'Setmana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'de': {
    'monthNames': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    'monthNamesShort': ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    'dayNames': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    'dayNamesShort': ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      day: 'Tag'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'en': {
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'es': {
    'monthNames': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    'monthNamesShort': ['Ener.', 'Febr.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agos.', 'Sept.', 'Octu.', 'Novi.', 'Dici.'],
    'dayNames': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    'dayNamesShort': ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'fr': {
    'monthNames': ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    'monthNamesShort': ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jui', 'Août', 'Sep', 'Oct', 'Nov', 'Dec'],
    'dayNames': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    'dayNamesShort': ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Aujourd\'hui',
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'it': {
    'monthNames': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    'monthNamesShort': ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    'dayNames': ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    'dayNamesShort': ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Oggi',
      month: 'Mese',
      week: 'Settimana',
      day: 'Giorno'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'nl': {
    'monthNames': ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Dezember'],
    'monthNamesShort': ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    'dayNames': ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    'dayNamesShort': ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Het',
      month: 'Maand',
      week: 'Week',
      day: 'Dag'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  },
  'pt': {
    'monthNames': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    'monthNamesShort': ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    'dayNames': ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    'dayNamesShort': ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    'columnFormat': {
      month: 'ddd',
      week: 'ddd dd',
      day: 'ddd dd/MM/yyyy'
    },
    'titleFormat': {
      month: 'MMMM yyyy',
      week: "d MMMM[ yyyy] - { d MMMM [ yyyy]}",
      day: 'dddd d MMMM yyyy'
    },
    'buttonText': {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia'
    },
    'timeFormat': "HH':'mm",
    'axisFormat': "HH':'mm"
  }
};
(function(e, t) {
  function i(t, i) {
    var a, n, r, o = t.nodeName.toLowerCase();
    return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
  }

  function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility")
    }).length
  }
  var a = 0,
    n = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.10.2",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: function(t) {
      return function(i, s) {
        return "number" == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus),
    scrollParent: function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0) : this.parents().filter(function() {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    },
    zIndex: function(i) {
      if (i !== t) return this.css("zIndex", i);
      if (this.length)
        for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
          if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
          n = n.parent()
        }
      return 0
    },
    uniqueId: function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++a)
      })
    },
    removeUniqueId: function() {
      return this.each(function() {
        n.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t)
      }
    }) : function(t, i, s) {
      return !!e.data(t, s[3])
    },
    focusable: function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")))
    },
    tabbable: function(t) {
      var s = e.attr(t, "tabindex"),
        a = isNaN(s);
      return (a || s >= 0) && i(t, !a)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
    function a(t, i, s, a) {
      return e.each(n, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
      r = s.toLowerCase(),
      o = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + s] = function(i) {
      return i === t ? o["inner" + s].call(this) : this.each(function() {
        e(this).css(r, a(this, i) + "px")
      })
    }, e.fn["outer" + s] = function(t, i) {
      return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
        e(this).css(r, a(this, t, !0, i) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault()
      })
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function(t, i, s) {
        var a, n = e.ui[t].prototype;
        for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
      },
      call: function(e, t, i) {
        var s, a = e.plugins[t];
        if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
          for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
      }
    },
    hasScroll: function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        a = !1;
      return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
    }
  })
})(jQuery);
(function(t, e) {
  function i() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function s(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.delegate(i, "mouseout", function() {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
    }).delegate(i, "mouseover", function() {
      t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    })
  }

  function n(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e
  }
  t.extend(t.ui, {
    datepicker: {
      version: "1.10.2"
    }
  });
  var a, r = "datepicker",
    o = (new Date).getTime();
  t.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(t) {
      return n(this._defaults, t || {}), this
    },
    _attachDatepicker: function(e, i) {
      var s, n, a;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
    },
    _newInst: function(e, i) {
      var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function(e, i) {
      var s, n, a, r = this._get(i, "appendText"),
        o = this._get(i, "isRTL");
      i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: a,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
        src: a,
        alt: n,
        title: n
      }) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
    },
    _autoSize: function(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, s, n, a = new Date(2009, 11, 20),
          r = this._get(t, "dateFormat");
        r.match(/[DM]/) && (e = function(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
          return s
        }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", 7)
      }
    },
    _inlineDatepicker: function(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(e, i, s, a, o) {
      var h, l, c, u, d, p = this._dialogInst;
      return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
    },
    _destroyDatepicker: function(e) {
      var i, s = t(e),
        n = t.data(e, r);
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
    },
    _enableDatepicker: function(e) {
      var i, s, n = t(e),
        a = t.data(e, r);
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function(e) {
      var i, s, n = t(e),
        a = t.data(e, r);
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function(e) {
      try {
        return t.data(e, r)
      } catch (i) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(i, s, a) {
      var r, o, h, l, c = this._getInst(i);
      return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
    },
    _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function(e) {
      var i, s, n, a = t.datepicker._getInst(e.target),
        r = !0,
        o = a.dpDiv.is(".ui-datepicker-rtl");
      if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), r = !1;
          break;
        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        default:
          r = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
      r && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(i) {
      var s, n, a = t.datepicker._getInst(i.target);
      return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
    },
    _doKeyUp: function(e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
      } catch (n) {}
      return !0
    },
    _showDatepicker: function(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var i, s, a, r, o, h, l;
        i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
          return r |= "fixed" === t(this).css("position"), !r
        }), o = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: o.left + "px",
          top: o.top + "px"
        }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), t.datepicker._curInst = i))
      }
    },
    _updateDatepicker: function(e) {
      this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var i, s = this._getNumberOfMonths(e),
        n = s[1],
        r = 17;
      e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
    },
    _getBorders: function(t) {
      var e = function(t) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        } [t] || t
      };
      return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
    },
    _checkOffset: function(e, i, s) {
      var n = e.dpDiv.outerWidth(),
        a = e.dpDiv.outerHeight(),
        r = e.input ? e.input.outerWidth() : 0,
        o = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
    },
    _findPos: function(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top]
    },
    _hideDatepicker: function(e) {
      var i, s, n, a, o = this._curInst;
      !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
        t.datepicker._tidyDialog(o)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
    },
    _gotoToday: function(e) {
      var i, s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
    },
    _selectMonthYear: function(e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
    },
    _selectDay: function(e, i, s, n) {
      var a, r = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
    },
    _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, "")
    },
    _selectDate: function(e, i) {
      var s, n = t(e),
        a = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function(e) {
      var i, s, n, a = this._get(e, "altField");
      a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
        t(this).val(n)
      }))
    },
    noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
    },
    iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
    },
    parseDate: function(i, s, n) {
      if (null == i || null == s) throw "Invalid arguments";
      if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
      var a, r, o, h, l = 0,
        c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
        d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        p = (n ? n.dayNames : null) || this._defaults.dayNames,
        f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        m = (n ? n.monthNames : null) || this._defaults.monthNames,
        g = -1,
        v = -1,
        _ = -1,
        b = -1,
        y = !1,
        w = function(t) {
          var e = i.length > a + 1 && i.charAt(a + 1) === t;
          return e && a++, e
        },
        k = function(t) {
          var e = w(t),
            i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = RegExp("^\\d{1," + i + "}"),
            a = s.substring(l).match(n);
          if (!a) throw "Missing number at position " + l;
          return l += a[0].length, parseInt(a[0], 10)
        },
        x = function(i, n, a) {
          var r = -1,
            o = t.map(w(i) ? a : n, function(t, e) {
              return [
                [e, t]
              ]
            }).sort(function(t, e) {
              return -(t[1].length - e[1].length)
            });
          if (t.each(o, function(t, i) {
              var n = i[1];
              return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
            }), -1 !== r) return r + 1;
          throw "Unknown name at position " + l
        },
        D = function() {
          if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l;
          l++
        };
      for (a = 0; i.length > a; a++)
        if (y) "'" !== i.charAt(a) || w("'") ? D() : y = !1;
        else switch (i.charAt(a)) {
          case "d":
            _ = k("d");
            break;
          case "D":
            x("D", d, p);
            break;
          case "o":
            b = k("o");
            break;
          case "m":
            v = k("m");
            break;
          case "M":
            v = x("M", f, m);
            break;
          case "y":
            g = k("y");
            break;
          case "@":
            h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
            break;
          case "!":
            h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
            break;
          case "'":
            w("'") ? D() : y = !0;
            break;
          default:
            D()
        }
      if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
        for (v = 1, _ = b;;) {
          if (r = this._getDaysInMonth(g, v - 1), r >= _) break;
          v++, _ -= r
        }
      if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
      return h
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(t, e, i) {
      if (!e) return "";
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        a = (i ? i.dayNames : null) || this._defaults.dayNames,
        r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        o = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function(e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i
        },
        l = function(t, e, i) {
          var s = "" + e;
          if (h(t))
            for (; i > s.length;) s = "0" + s;
          return s
        },
        c = function(t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case "d":
              u += l("d", e.getDate(), 2);
              break;
            case "D":
              u += c("D", e.getDay(), n, a);
              break;
            case "o":
              u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              u += l("m", e.getMonth() + 1, 2);
              break;
            case "M":
              u += c("M", e.getMonth(), r, o);
              break;
            case "y":
              u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
              break;
            case "@":
              u += e.getTime();
              break;
            case "!":
              u += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? u += "'" : d = !0;
              break;
            default:
              u += t.charAt(s)
          }
      return u
    },
    _possibleChars: function(t) {
      var e, i = "",
        s = !1,
        n = function(i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
      return i
    },
    _get: function(t, i) {
      return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
    },
    _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = t.lastVal = t.input ? t.input.val() : null,
          n = this._getDefaultDate(t),
          a = n,
          r = this._getFormatConfig(t);
        try {
          a = this.parseDate(i, s, r) || n
        } catch (o) {
          s = e ? "" : s
        }
        t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function(e, i, s) {
      var n = function(t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        },
        a = function(i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (s) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                o += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                o += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                break;
              case "y":
              case "Y":
                a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
            }
            l = h.exec(i)
          }
          return new Date(a, r, o)
        },
        r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
      return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
    },
    _daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function(t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        a = t.selectedYear,
        r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
    },
    _getDate: function(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e
    },
    _attachHandlers: function(e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function() {
        var e = {
          prev: function() {
            window["DP_jQuery_" + o].datepicker._adjustDate(s, -i, "M")
          },
          next: function() {
            window["DP_jQuery_" + o].datepicker._adjustDate(s, +i, "M")
          },
          hide: function() {
            window["DP_jQuery_" + o].datepicker._hideDatepicker()
          },
          today: function() {
            window["DP_jQuery_" + o].datepicker._gotoToday(s)
          },
          selectDay: function() {
            return window["DP_jQuery_" + o].datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "M"), !1
          },
          selectYear: function() {
            return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "Y"), !1
          }
        };
        t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(t) {
      var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, w, k, x, D, T, C, S, M, N, I, P, A, z, H, E, F, O, W, j, R = new Date,
        L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        B = this._get(t, "showButtonPanel"),
        J = this._get(t, "hideIfNoPrevNext"),
        Q = this._get(t, "navigationAsDateFormat"),
        K = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        U = this._get(t, "stepMonths"),
        q = 1 !== K[0] || 1 !== K[1],
        X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        G = this._getMinMaxDate(t, "min"),
        $ = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if (0 > Z && (Z += 12, te--), $)
        for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = Q ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; K[0] > k; k++) {
        for (x = "", this.maxRows = 4, D = 0; K[1] > D; D++) {
          if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", S = "", q) {
            if (S += "<div class='ui-datepicker-group", K[1] > 1) switch (D) {
              case 0:
                S += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
                break;
              case K[1] - 1:
                S += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                S += " ui-datepicker-group-middle", C = ""
            }
            S += "'>"
          }
          for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) N = (w + c) % 7, M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
          for (S += M + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
            for (S += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
            S += F + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (q ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
        }
        y += x
      }
      return y += l, t._keyEvent = !1, y
    },
    _generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
      var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
        v = this._get(t, "changeYear"),
        _ = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
        y += "</select>"
      }
      if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
        if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
              var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
              return isNaN(e) ? d : e
            }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
        } return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
    },
    _adjustInstDate: function(t, e, i) {
      var s = t.drawYear + ("Y" === i ? e : 0),
        n = t.drawMonth + ("M" === i ? e : 0),
        a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
      t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
    },
    _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n
    },
    _notifyChange: function(t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function(t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
    },
    _isInRange: function(t, e) {
      var i, s, n = this._getMinMaxDate(t, "min"),
        a = this._getMinMaxDate(t, "max"),
        r = null,
        o = null,
        h = this._get(t, "yearRange");
      return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
    },
    _getFormatConfig: function(t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
    }
  }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.2", window["DP_jQuery_" + o] = t
})(jQuery);
jQuery(function($) {
  $.datepicker.regional.fr = {
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.regional.es = {
    closeText: 'Cerrar',
    prevText: 'Anterior',
    nextText: 'Siguiente',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ener.', 'Febr.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agos.', 'Sept.', 'Octu.', 'Novi.', 'Dici.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.regional.de = {
    closeText: 'Schließen',
    prevText: '&#x3C;Zurück',
    nextText: 'Vor&#x3E;',
    currentText: 'Heute',
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    weekHeader: 'KW',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ''
  };
  $.datepicker.setDefaults({
    autoclose: !0,
    autoSize: !0,
    beforeShow: function(input, inst) {
      if ($.isMobile()) {
        $(input).prop('readonly', !0);
        var calendar = inst.dpDiv;
        calendar.wrap('<div class="ui-datepicker-overlay"></div>')
      }
      $('.control-group.has-focus').removeClass('has-focus');
      $(input).closest('.control-type-datepicker').addClass('has-focus')
    },
    onClose: function(date, inst) {
      if ($.isMobile()) {
        $(this).prop('readonly', !1);
        var calendar = inst.dpDiv;
        setTimeout(function() {
          calendar.unwrap()
        }, 240)
      }
      $(this).closest('.control-type-datepicker').removeClass('has-focus')
    }
  });
  $.datepicker.setDefaults($.datepicker.regional.fr)
});
forms.advancedTextarea = {};
forms.advancedTextarea.init = function() {
  $('.control-type-textarea').find('.control-text-format').each(function() {
    var $textFormat = $(this);
    var $textarea = $('#' + $textFormat.data('target'));
    $textarea.data('insText', '');
    $textarea.on('mouseup keyup cut paste', function() {
      $(this).data({
        'start': $textarea.prop('selectionStart'),
        'end': $textarea.prop('selectionEnd'),
        'insText': $textarea.val() ? $textarea.val().substring($textarea.prop('selectionStart'), $textarea.prop('selectionEnd')) : ''
      })
    });
    $textFormat.find('.control-text-format-colors').each(function() {
      var $colors = $(this);
      $(this).find('span[style]').each(function() {
        $(this).on('click', function() {
          var $color = $(this).css('background-color');
          $colors.trigger('changeColor', [$color])
        })
      });
      $(this).find('button').on('click', function() {
        var $color = $colors.find('.control-text-format-colors-input').val();
        if (/(^#[0-9a-f]{6}$)|(^#[0-9a-f]{3}$)/gi.test($color)) {
          $colors.find('.control-group').removeClass('has-error');
          $colors.trigger('changeColor', [$color])
        } else {
          $colors.find('.control-group').addClass('has-error')
        }
      });
      $(this).on('changeColor', function(e, color) {
        forms.advancedTextarea.addTag($textarea, '[color=' + color + ']', '[/color]');
        $(this).closest('.dropdown').find('[data-toggle="dropdown"]').dropdown('hide')
      })
    });
    $textFormat.find('[data-modal]').each(function() {
      $(this).on({
        'click': function() {
          var $tag = $(this).data('modal');
          switch ($tag) {
            case 'img':
              var $title = 'Insérer une image';
              var $options = [{
                'label': 'Titre',
                'name': 'title',
                'type': 'text',
                'value': $textarea.data('insText')
              }, {
                'label': 'Largeur',
                'name': 'width',
                'type': 'number'
              }, {
                'label': 'URL',
                'name': 'url',
                'placeholder': 'http://',
                'required': !0,
                'type': 'url'
              }];
              break;
            case 'quote':
              var $title = 'Citer';
              var $options = [{
                'label': 'Auteur',
                'name': 'author',
                'type': 'text'
              }, {
                'label': 'Citation',
                'name': 'cite',
                'required': !0,
                'type': 'textarea',
                'value': $textarea.data('insText')
              }];
              break;
            case 'size':
              var $title = 'Taille du texte';
              var $options = [{
                'label': 'Taille en pixels',
                'name': 'size',
                'required': !0,
                'type': 'number'
              }];
              break;
            case 'spoiler':
              var $title = 'Texte caché';
              var $options = [{
                'label': 'Intitulé',
                'name': 'label',
                'type': 'text',
                'value': 'spoiler'
              }, {
                'label': 'Texte',
                'name': 'content',
                'required': !0,
                'type': 'textarea',
                'value': $textarea.data('insText')
              }];
              break;
            case 'url':
              var $title = 'Insérer un lien';
              var $options = [{
                'label': 'Texte',
                'name': 'title',
                'type': 'text',
                'value': $textarea.data('insText')
              }, {
                'label': 'URL',
                'name': 'url',
                'placeholder': 'http://',
                'required': !0,
                'type': 'url'
              }];
              break;
            case 'video':
              var $title = 'Insérer une vidéo';
              var $options = [{
                'label': 'Hébergeur',
                'name': 'host',
                'type': 'select',
                'options': [{
                  'value': 'youtube',
                  'label': 'Youtube'
                }, {
                  'value': 'dailymotion',
                  'label': 'Dailymotion'
                }]
              }, {
                'label': 'URL',
                'name': 'id',
                'placeholder': 'Ex: https://youtu.be/YPaZAVEaTYM',
                'required': !0,
                'type': 'text',
                'value': $textarea.data('insText')
              }]
          }
          var $content = '';
          for (var $i = 0; $i < $options.length; $i++) {
            $content += '<div class="control-group control-type-' + $options[$i].type + ($options[$i].required ? ' has-required' : '') + '">' + '<label for="' + $options[$i].name + '">' + $options[$i].label + '</label>' + '<div class="controls">';
            if ($options[$i].type == 'textarea') {
              $content += '<textarea name="' + $options[$i].name + '" id="' + $options[$i].name + '">' + ($options[$i].value ? $options[$i].value : '') + '</textarea>'
            } else if ($options[$i].type == 'select') {
              $content += '<select name="' + $options[$i].name + '" id="' + $options[$i].name + '">';
              for (var $o = 0; $o < $options[$i].options.length; $o++) {
                $content += '<option value="' + $options[$i].options[$o].value + '">' + $options[$i].options[$o].label + '</option>'
              }
              $content += '</select>'
            } else {
              $content += '<input type="' + $options[$i].type + '" name="' + $options[$i].name + '" id="' + $options[$i].name + '" value="' + ($options[$i].value ? $options[$i].value : '') + '"' + ($options[$i].placeholder ? ' placeholder="' + $options[$i].placeholder + '"' : '') + '>'
            }
            $content += '</div>' + '</div>'
          }
          $.modal({
            buttonCancel: 'Annuler',
            buttonConfirm: 'Insérer',
            content: '<form>' + $content + '</form>',
            title: $title,
            type: 'primary'
          }).on({
            'on.confirm.modal': function() {
              switch ($tag) {
                case 'img':
                  var $bbOpen = '[img=' + $('.modal').find('#url').val() + ' alt=' + ($('.modal').find('#title').val() ? $('.modal').find('#title').val() : $('.modal').find('#url').val()) + ($('.modal').find('#title').val() ? ' title=' + $('.modal').find('#title').val() : '') + ($('.modal').find('#width').val() ? ' width=' + $('.modal').find('#width').val() : '') + ']';
                  var $bbClose = '';
                  $textarea.data('insText', '');
                  break;
                case 'quote':
                  var $bbOpen = '[quote' + ($('.modal').find('#author').val() ? '=' + $('.modal').find('#author').val() : '') + ']';
                  var $bbClose = '[/quote]';
                  $textarea.data('insText', $('.modal').find('#cite').val());
                  break;
                case 'size':
                  var $bbOpen = '[size=' + $('.modal').find('#size').val() + ']';
                  var $bbClose = '[/size]';
                  break;
                case 'spoiler':
                  var $bbOpen = '[spoiler=' + ($('.modal').find('#label').val() ? $('.modal').find('#label').val() : 'spoiler') + ']';
                  var $bbClose = '[/spoiler]';
                  $textarea.data('insText', $('.modal').find('#content').val());
                  break;
                case 'url':
                  var $bbOpen = '[url=' + $('.modal').find('#url').val() + ']';
                  var $bbClose = '[/url]';
                  $textarea.data('insText', $('.modal').find('#title').val() ? $('.modal').find('#title').val() : $('.modal').find('#url').val());
                  break;
                case 'video':
                  var $bbOpen = '[' + $('.modal').find('#host').val() + ']';
                  var $bbClose = '[/' + $('.modal').find('#host').val() + ']';
                  $textarea.data('insText', $('.modal').find('#id').val())
              }
              forms.advancedTextarea.addTag($textarea, $bbOpen, $bbClose)
            }
          })
        }
      })
    });
    $textFormat.find('[data-tag]').each(function() {
      $(this).on({
        'click': function() {
          forms.advancedTextarea.addTag($textarea, $(this).data('tag'))
        }
      })
    });
    $textFormat.find('a[data-toggle="smileys"]').on('click', function() {
      $(this).toggleClass('active');
      $(this).closest('.controls').find('.control-smileys').toggleClass('hide')
    });
    var $preview = $('<div class="bbcode-preview">').insertBefore($textarea);
    $textFormat.find('a[data-toggle="preview"]').on('click', function() {
      if (!$preview.hasClass('open')) {
        $.ajax({
          url: '/themes/do/preview/',
          type: 'post',
          data: {
            'message': $textarea.val()
          },
          dataType: 'json'
        }).done(function(json) {
          $preview.css({
            'top': $textarea.position().top + 'px',
            'left': $textarea.position().left + 'px',
            'width': $textarea.outerWidth() + 'px',
            'height': $textarea.outerHeight() + 'px',
            'padding': $textarea.css('padding')
          }).html(json.content);
          $preview.find('.spoiler-btn').on('click', function() {
            forms.advancedTextarea.toggleSpoiler($(this))
          })
        });
        $(this).removeClass('btn-default').addClass('active btn-primary').find('.fa').removeClass('fa-check').addClass('fa-times')
      } else {
        $preview.html('');
        $textarea.focus();
        $(this).removeClass('active btn-primary').addClass('btn-default').find('.fa').removeClass('fa-times').addClass('fa-check')
      }
      $preview.toggleClass('open');
      $textFormat.find('.btn-link').not(this).toggleClass('disabled')
    })
  });
  $('.spoiler-btn').on('click', function() {
    forms.advancedTextarea.toggleSpoiler($(this))
  })
};
forms.advancedTextarea.addTag = function($textarea, $bbOpen, $bbClose) {
  $textarea.trigger('focus');
  $bbClose = $bbClose === undefined ? $bbOpen.replace('[', '[\/') : $bbClose;
  var $start = $textarea.data('start');
  var $end = $textarea.data('end');
  var $insText = $textarea.data('insText');
  if ($insText) {
    var $pos = $start + $bbOpen.length + $insText.length + $bbClose.length
  } else {
    var $pos = $start + $bbOpen.length
  }
  $textarea.val($textarea.val().substr(0, $start) + $bbOpen + $insText + $bbClose + $textarea.val().substr($end));
  $textarea.prop('selectionStart', $pos);
  $textarea.prop('selectionEnd', $pos);
  $textarea.trigger('keyup')
};
forms.advancedTextarea.toggleSpoiler = function($spoilerBtn) {
  $spoilerBtn.next('.spoiler-content').toggleClass('hide');
  $spoilerBtn.blur()
};
forms.inputDatepicker = {};
forms.inputDatepicker.init = function() {
  $('.control-type-datepicker').find('[type="text"]').each(function() {
    var input = $(this);
    if (!input.val()) {
      input.closest('.control-type-datepicker').addClass('has-empty')
    }
    if (input.prop('disabled')) {
      input.closest('.control-type-datepicker').addClass('has-disabled')
    }
    input.datepicker()
  })
};
var modules = {};
modules.init = function() {
  for (var i in modules) {
    if (modules[i].init) {
      modules[i].init()
    }
  }
};
modules.album = {};
modules.album.init = function() {
  $('[data-role="paginated-widget-list"][data-addon="album"]').each(function() {
    var wrapper = $(this);
    var pagination = wrapper.next('[data-role="paginated-widget-pagination"]');
    if (pagination.length) {
      pagination.on('on.content.loaded', function() {
        wrapper.find('.fancybox').fancybox({
          live: !1
        })
      })
    }
  })
};
modules.pages = {};
modules.pages.cssVars = function() {
  var style = [];
  var cssVars = {
    '--vw': $(window).width() + 'px',
    '--view-width': $('.view').width() + 'px'
  };
  if ($('#bottom-site').length) {
    cssVars['--bottom-width'] = $('#bottom-site').width() + 'px'
  }
  $.each(cssVars, function(key, value) {
    style.push(key + ':' + value)
  });
  $('html').attr('style', style.join(';'))
};
modules.pages.changepage = function(page) {
  $('.rows .row-container').addClass('hide');
  $('.pagination').find('.disabled').removeClass('disabled');
  if (page == 'prev') {
    current_page = current_page == 1 ? current_page : current_page - 1
  } else if (page == 'next') {
    current_page = current_page == total_page ? current_page : current_page + 1
  } else if (page == 'last') {
    current_page = total_page
  } else {
    current_page = page
  }
  $('.pagination').find('.active').removeClass('active');
  $('.pagination').find('.btn:contains("' + page + '")').addClass('active');
  if (current_page == 1) {
    $('.pagination').find('.prev').find('.btn').addClass('disabled')
  }
  if (current_page == total_page) {
    $('.pagination').find('.next').find('.btn').addClass('disabled')
  }
  if (current_page + 4 >= total_page) {
    $('.pagination').find('.nb-pages').addClass('hide')
  } else {
    $('.pagination').find('.nb-pages').removeClass('hide')
  }
  $('.rows .page_' + current_page).removeClass('hide');
  $('#pagination-pages span').text(current_page + ' / ' + total_page);
  modules.pages.updatePagelinks(current_page);
  $('html, body').animate({
    scrollTop: $('.view-pages').offset().top
  });
  $('.rows .page_' + current_page + ' .cls-mobile-flash').css('width', '100%');
  $('.rows .page_' + current_page + ' .cls-mobile-flash object').css('width', '100%');
  return !1
};
modules.pages.updatePagelinks = function() {
  $('.pagination').find('.prev').find('.btn').attr('href', '#page' + (current_page));
  $('.pagination').find('.next').find('.btn').attr('href', '#page' + (current_page))
};
$(document).ready(function() {
  if (typeof(total_page) != 'undefined') {
    var hash = window.location.hash;
    if (hash.substring(1, 5) == 'page') {
      current_page = parseInt(hash.substring(5, hash.length), 10);
      modules.pages.changepage(current_page)
    }
    var dom = '';
    for ($i = 0; $i < total_page - 1; $i++) {
      dom += '<li>' + '<a class="btn btn-default' + (current_page == $i + 1 ? ' active' : '') + '"' + (current_page == $i + 1 ? ' onclick="modules.pages.changepage(' + ($i + 1) + ')"' : '') + '>' + ($i + 1) + '</a>' + '</li>'
    }
    $('.pagination').find('.prev').after(dom);
    modules.pages.updatePagelinks()
  }
});
$(window).on('load resize', function() {
  modules.pages.cssVars()
});
modules.member = {};
modules.member.orderUpdate = function() {
  $('#order_form_task').val('update');
  $('#order_form').submit()
};
modules.member.orderSubmit = function() {
  $('#order_form_task').val('create');
  $('#order_form').submit()
};
modules.member.onPaymeanChange = function() {
  modules.member.orderUpdate()
};
var plugins = {};
plugins.init = function() {
  for (var i in plugins) {
    if (plugins[i].init) {
      plugins[i].init()
    }
  }
};
plugins.comment = {};
plugins.comment.init = function() {
  $('.more-comments').click(function() {
    var nb_comments = $(this).data('limit');
    $(this).closest('.plugin').find('.media.hide:lt(' + nb_comments + ')').removeClass('hide');
    if ($(this).closest('.plugin').find('.media.hide').length === 0) {
      $(this).parents('p').remove()
    }
    $(this).closest('.plugin').trigger('on.comments.loaded')
  })
};
plugins.rating = {};
plugins.rating.init = function() {
  $('ul.rating-list').has('input').each(function() {
    $(this).on('mouseout', function() {
      $(this).children('li').removeClass('text-warning');
      $(this).children('.note-always').removeClass('note-off').addClass('text-warning')
    }).find('li:not(.rating-infos)').each(function() {
      $(this).on('mouseover', function() {
        $(this).nextAll('li:not(.rating-infos)').removeClass('text-warning');
        $(this).prevAll('li:not(.rating-infos)').addClass('text-warning');
        $(this).addClass('text-warning')
      }).find('input').each(function() {
        $(this).on('click', function() {
          $(this).closest('.rating-list').find('li:not(.rating-infos)').removeClass('text-warning');
          $(this).parent('li').addClass('text-warning');
          $(this).closest('form').submit()
        })
      })
    })
  })
};
plugins.smileys = {};
plugins.smileys.init = function() {
  $('.control-smileys').find('a').each(function() {
    $(this).on({
      'click': function(e) {
        e.preventDefault();
        var smiley = $(this).attr('rel');
        var msg = $(this).closest('form').find('textarea');
        msg.val(msg.val() + smiley).focus()
      }
    })
  })
};
var layout = {};
layout.init = function() {
  $('body').on('click', function(e) {
    var $trigger = $('.navbar');
    var navbar = $('.navbar').find('.collapse');
    if (navbar.hasClass('in') && $trigger !== e.target && !$trigger.has(e.target).length) {
      navbar.collapse('hide')
    }
  });
  $('.navbar-nav').find('[data-toggle="subnav"]').each(function() {
    if ($.isMobile() && ($(this).attr('href') != 'javascript:void(0)') && ($(this).nextAll('.subnav-menu').find('li:last').find('a').attr('href') != $(this).attr('href'))) {
      $(this).nextAll('.subnav-menu').append('<li class="category-root"><a href="' + $(this).attr('href') + '">' + $(this).text() + '</a></li>')
    }
  });
  $('.widget .nav-list, .column-content .nav-list').find('li').each(function() {
    var url = location.href;
    var link = $(this).find('> a');
    if (link.length) {
      var link_url = link.attr('href');
      url = url.indexOf('?') != -1 ? url.split('?')[0] : url;
      url = url.indexOf('#') != -1 ? url.split('#')[0] : url;
      link_url = link_url.indexOf('?') != -1 ? link_url.split('?')[0] : link_url;
      link_url = link_url.indexOf('#') != -1 ? link_url.split('#')[0] : link_url;
      if (url == link_url) {
        $(this).addClass('active')
      }
    }
  });
  var mediaView = sessionStorage.getItem('mediaView') ? sessionStorage.getItem('mediaView') : 'thumbnails';
  $('[data-role="listing_switching"]').each(function() {
    var switching = $(this);
    var target = switching.closest('[data-role="media-toolbar"]').next('.media-list');
    if (mediaView == 'listing') {
      $(target).addClass('media-stacked').removeClass('media-thumbnails')
    }
    $(this).find('.btn').each(function() {
      var display = $(this).data('view');
      if (display === mediaView) {
        $(this).addClass('active')
      }
      $(this).on('click', function() {
        if (display == 'thumbnails') {
          $(target).addClass('media-thumbnails').removeClass('media-stacked')
        } else {
          $(target).removeClass('media-thumbnails').addClass('media-stacked')
        }
        $(this).addClass('active').closest('.btn-group').find('.active').not(this).removeClass('active');
        sessionStorage.setItem('mediaView', display);
        switching.trigger('on.listing.switched')
      })
    })
  });
  $('iframe[src*="youtube.com"], iframe[src*="dailymotion.com"], iframe[src*="player.vimeo.com"], object:has(param[name="movie"]):not([name="peckplayer"])').each(function() {
    if (!$(this).hasClass('fixSize') && !$(this).parent().hasClass('video-container')) {
      $(this).wrap('<span class="video-container"></span>')
    }
  });
  $('a.mb').removeAttr('rel', '');
  $('a.mb[href^="http://www.youtube.com/v/"], a.mb[href^="http://www.dailymotion.com/"]').addClass('fancybox').attr('data-fancybox-type', 'swf');
  $('a.mb img').parent().addClass('fancybox').attr('data-fancybox-type', 'image');
  $('a.mb[href$=".jpg"],a.mb[href$=".gif"],a.mb[href$=".png"],a.mb[href$=".jpeg"]').addClass('fancybox').attr('data-fancybox-type', 'image');
  $('a.lightbox, a.mb2, a.mb3, a[rel="iframe"]').addClass('fancybox').attr('data-fancybox-type', 'image');
  $('.iframe').addClass('fancybox').attr('data-fancybox-type', 'iframe');
  $('.fancybox').fancybox({
    live: !1
  });
  $('.alert').each(function() {
    if ($(this).hasClass('alert-error')) {
      var type = 'error'
    } else if ($(this).hasClass('alert-success') || $(this).hasClass('alert-info')) {
      var type = 'success'
    } else if ($(this).hasClass('alert-warning')) {
      var type = 'warning'
    } else if ($(this).data('type') != undefined) {
      var type = $(this).data('type')
    } else {
      var type = null
    }
    var content = $(this).html();
    $(this).remove();
    $.modal({
      content: content,
      type: type
    })
  });
  $('form').each(function() {
    $(this).validate().on({
      'on.error.validate': function(e, controls) {
        var errorMsg = '';
        for ($i = 0; $i < controls.length; $i++) {
          if (!controls[$i].isvalid) {
            errorMsg += '<li>' + controls[$i].label + '</li>'
          }
        }
        $.modal({
          buttonCancel: 'Fermer',
          content: '<ul class="list-unstyled">' + errorMsg + '</ul>',
          id: 'form-validation-errors',
          title: 'Merci de compléter les champs suivants :',
          type: 'error'
        })
      },
      'on.success.validate': function() {
        $(this).find('[type="submit"]').addClass('disabled')
      }
    })
  });
  $('[data-role="listing_ordering"]').find('select').on('change', function() {
    var $el = this;
    var $url = $el.options[$el.selectedIndex].value;
    window.location.href = $url != '' ? '?orderby=' + $url : window.location.origin + window.location.pathname
  });
  $('[data-widget="image"][class*="align-"]').each(function() {
    var $addClass = $(this).hasClass('align-center') ? 'cd-justify-content-center' : 'cd-justify-content-end';
    var $removeClass = $(this).hasClass('align-center') ? 'align-center' : 'align-bottom';
    $(this).removeClass($removeClass).closest('.column').addClass($addClass)
  })
};
var $zoomIn = {
  'init': function($img, $currentWidth) {
    var $f = new Image();
    $f.src = ($img.get(0).getAttribute ? $img.get(0).getAttribute('src') : !1) || $img.get(0).src;
    if ($f.src) {
      $img.data('width', $f.width);
      $zoomIn.mode($img, $currentWidth)
    }
    $(window).on('resize', function() {
      $zoomIn.mode($img, $currentWidth)
    })
  },
  'mode': function($img, $currentWidth) {
    $img.data('zoomIn', $img.data('width') > $currentWidth).unbind('click.zoomIn').parent().trigger('zoom.destroy');
    if ($img.data('zoomIn')) {
      if ($.isMobile()) {
        $img.on('click.zoomIn', function() {
          window.location.href = $img.attr('src')
        })
      } else {
        $img.parent().zoom()
      }
    }
  }
}
$(document).ready(function() {
  var blocks = {};
  blocks.change_page = function(page, $blocks_rows) {
    var current_page = Number(blocks_rows.attr('data-current-page'));
    var total_page = Number(blocks_rows.attr('data-total-pages'));
    var $pagination_ul = blocks_rows.nextAll('.pagination:first');
    blocks_rows.find('.row-container').addClass('hide');
    $pagination_ul.find('.disabled').removeClass('disabled');
    $pagination_ul.find('.active').removeClass('active');
    if (page == 'prev') {
      current_page = current_page == 1 ? current_page : current_page - 1
    } else if (page == 'next') {
      current_page = current_page == total_page ? current_page : current_page + 1
    } else if (page == 'last') {
      current_page = total_page
    } else {
      current_page = page
    }
    if (page == 'last') {
      $pagination_ul.find('.nb-pages').find('a').addClass('active')
    } else {
      $pagination_ul.find('[data-page="' + current_page + '"]').find('span').addClass('active')
    }
    $pagination_ul.find('.nb-pages').find('span').text(current_page + ' / ' + total_page);
    if (current_page == 1)
      $pagination_ul.find('li:first').find('a').addClass('disabled');
    if (current_page == total_page)
      $pagination_ul.find('li:last').find('a').addClass('disabled');
    blocks_rows.find('.page_' + current_page).removeClass('hide');
    blocks_rows.find('.page_' + current_page + ' .cls-mobile-flash').css('width', '100%');
    blocks_rows.find('.page_' + current_page + ' .cls-mobile-flash object').css('width', '100%');
    $pagination_ul.find('[data-page="' + current_page + '"]').find('span').addClass('active');
    $pagination_ul.find('.prev, .next').find('a').attr('href', '#page' + current_page);
    $('html, body').animate({
      scrollTop: blocks_rows.parents('.view:first').offset().top
    }, 'slow');
    blocks_rows.attr('data-current-page', current_page);
    location.hash = 'page' + current_page;
    $pagination_ul.trigger('on.pagination.changed');
    return !1
  };
  var blocks_rows = $('.rows[data-total-pages]');
  var $this, $pagination_ul;
  blocks_rows.each(function() {
    if ($(this).attr('data-total-pages') > 1) {
      $this = $(this);
      $pagination_ul = $this.nextAll('.pagination:first');
      $pagination_ul.find('.prev').find('a').click($.proxy(blocks.change_page, blocks, 'prev', $this));
      $pagination_ul.find('.next').find('a').click($.proxy(blocks.change_page, blocks, 'next', $this));
      $pagination_ul.find('.nb-pages').find('a').click($.proxy(blocks.change_page, blocks, 'last', $this));
      $pagination_ul.find('[data-page]').find('span').click(function() {
        var goto = $(this).parent().data('page');
        blocks.change_page(goto, $this)
      });
      var hash = window.location.hash;
      if (hash.substring(1, 5) == 'page') {
        current_page = parseInt(hash.substring(5, hash.length));
        blocks.change_page(current_page, $this)
      }
    }
  })
});
var paymeans = {};
paymeans.pbx = {};
paymeans.pbx.cmd1 = null;
paymeans.pbx.cmd3 = null;
paymeans.pbx.total1 = null;
paymeans.pbx.total3 = null;
paymeans.pbx.hmac1 = null;
paymeans.pbx.hmac3 = null;
paymeans.pbx.datevalmax1 = null;
paymeans.pbx.datevalmax3 = null;
paymeans.pbx.selectCard = function(type) {
  $('#PBX_TYPECARTE').val(type);
  if ($('input[name=pbx_3fois]:checked').val() == '3fois') {
    $('#PBX_CMD').val(this.cmd3);
    $('#PBX_TOTAL').val(this.total3);
    $('#PBX_HMAC').val(this.hmac3);
    $('#PBX_DATEVALMAX').val(this.datevalmax3)
  } else {
    $('#PBX_CMD').val(this.cmd1);
    $('#PBX_TOTAL').val(this.total1);
    $('#PBX_HMAC').val(this.hmac1);
    $('#PBX_DATEVALMAX').val(this.datevalmax1)
  }
  $('input[name=pbx_3fois]').remove();
  $('#PBX_FORM').submit()
};
var theme = {
  classes: {
    disabled: 'disabled',
    danger: 'text-error',
    success: 'text-success',
    hide: 'hide',
    tableWarning: 'table-warning',
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
};
$(document).ready(function() {
  layout.init();
  modules.init();
  plugins.init()
});
(function($) {
  var PaginatedWidget = function(elem) {
    this.elem = elem;
    this.$elem = $(elem);
    this.$ordering = this.$elem.find('[data-role="paginated-widget-ordering"]');
    this.$pagination = this.$elem.find('[data-role="paginated-widget-pagination"]');
    this.$list = this.$elem.find('[data-role="paginated-widget-list"]');
    this.categoryModelId = this.$elem.data('category-model');
    this.itemsPerPage = parseInt(this.$elem.data('items-per-page'));
    this.itemsTotal = parseInt(this.$elem.data('items-total'));
    this.maxChoices = this.$elem.data('max-choices') ? parseInt(this.$elem.data('max-choices')) : 10;
    this.ajaxUrl = this.$elem.data('ajax-url');
    this.currentPage = 1;
    if (this.categoryModelId === 'product') {
      this.currentOrderBy = parseInt(this.$elem.data('default-order-by'));
      this.currentOrderWay = parseInt(this.$elem.data('default-order-way'))
    }
    this.pages = Math.ceil(this.itemsTotal / this.itemsPerPage);
    if (this.itemsTotal > this.itemsPerPage) {
      this.$pagination.find('.first').on('click', $.proxy(this, 'onFirstPageClick'));
      this.$pagination.find('.prev').on('click', $.proxy(this, 'onPrevPageClick'));
      this.$pagination.find('.next').on('click', $.proxy(this, 'onNextPageClick'));
      this.$pagination.find('.last').on('click', $.proxy(this, 'onLastPageClick'));
      var currentPaginatedWidget = this;
      this.$pagination.find('.page-choice').each(function(index, element) {
        $(element).on('click', $.proxy(currentPaginatedWidget, 'onPageSelect', parseInt($(this).attr('data-page'))))
      });
      this.$pagination.removeClass('hide')
    }
    this.$ordering.find('select').on('change', $.proxy(this, 'onOrderingChange'))
  };
  PaginatedWidget.prototype.onPageSelect = function(page) {
    this.currentPage = page;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onFirstPageClick = function() {
    this.currentPage = 1;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onPrevPageClick = function() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onNextPageClick = function() {
    if (this.currentPage < this.pages) {
      this.currentPage++
    }
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onLastPageClick = function() {
    this.currentPage = this.pages;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.onOrderingChange = function() {
    this.disableControls();
    switch (this.$ordering.find('select').val()) {
      case 'p_0':
        this.currentOrderBy = 1;
        this.currentOrderWay = 0;
        break;
      case 'p_1':
        this.currentOrderBy = 1;
        this.currentOrderWay = 1;
        break;
      case 'n':
        this.currentOrderBy = 4;
        this.currentOrderWay = 1;
        break;
      case 'b':
        this.currentOrderBy = 6;
        this.currentOrderWay = 1;
        break;
      default:
        this.currentOrderBy = 2;
        this.currentOrderWay = 0;
        break
    }
    this.currentPage = 1;
    this.requestPageRefresh()
  };
  PaginatedWidget.prototype.requestPageRefresh = function() {
    var url = this.ajaxUrl + (this.ajaxUrl.indexOf('?') !== -1 ? '&' : '?') + 'page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage;
    if (this.categoryModelId === 'product') {
      url += '&order_by=' + this.currentOrderBy + '&order_way=' + this.currentOrderWay
    }
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      success: $.proxy(this, 'applyPageRefresh')
    })
  };
  PaginatedWidget.prototype.applyPageRefresh = function(result) {
    this.$list.html(result);
    this.$pagination.find('.page-choice.active').removeClass('active');
    this.$pagination.find('.page-choice[data-page="' + this.currentPage + '"]').addClass('active');
    this.reenableControls();
    var currentPaginatedWidget = this;
    this.$pagination.find('.page-choice').each(function(index, element) {
      if (parseInt($(element).attr('data-page')) <= (currentPaginatedWidget.currentPage - (currentPaginatedWidget.maxChoices) / 2) || parseInt($(element).attr('data-page')) >= (currentPaginatedWidget.currentPage + (currentPaginatedWidget.maxChoices) / 2)) {
        $(element).parent().addClass('hide')
      } else {
        $(element).parent().removeClass('hide')
      }
    });
    this.$pagination.find('.first').find('.btn').toggleClass('disabled', this.currentPage === 1);
    this.$pagination.find('.prev').find('.btn').toggleClass('disabled', this.currentPage === 1);
    this.$pagination.find('.next').find('.btn').toggleClass('disabled', this.currentPage === this.pages);
    this.$pagination.find('.last').find('.btn').toggleClass('disabled', this.currentPage === this.pages);
    $("html, body").animate({
      scrollTop: this.$elem.offset().top - 100
    }, 500);
    this.$pagination.trigger('on.content.loaded')
  };
  PaginatedWidget.prototype.disableControls = function() {
    this.$pagination.find('.btn').addClass('disabled');
    this.$ordering.find('select').prop('disabled', !0)
  };
  PaginatedWidget.prototype.reenableControls = function() {
    this.$pagination.find('.btn').removeClass('disabled');
    this.$ordering.find('select').prop('disabled', !1)
  };
  $.fn.paginatedWidget = function() {
    return this.each(function() {
      new PaginatedWidget(this)
    })
  }
}(jQuery));
$(document).ready(function() {
  $('[data-role="paginated-widget"]').paginatedWidget()
});
var emsChromeExtension = {
  init: function(type, id, domain) {
    var chromeExtensionDom = document.createElement("div");
    chromeExtensionDom.id = 'emsChromeExtension';
    chromeExtensionDom.setAttribute('data-type', type);
    chromeExtensionDom.setAttribute('data-id', id);
    chromeExtensionDom.setAttribute('data-domain', domain);
    document.body.appendChild(chromeExtensionDom)
  }
}