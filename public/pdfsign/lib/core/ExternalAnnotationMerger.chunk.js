/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([[7], {
    364: function (ha, da, h) {
      h.r(da); var ca = h(3), aa = h(388), fa = h(389), ea; (function (h) { h[h.EXTERNAL_XFDF_NOT_REQUESTED = 0] = "EXTERNAL_XFDF_NOT_REQUESTED"; h[h.EXTERNAL_XFDF_NOT_AVAILABLE = 1] = "EXTERNAL_XFDF_NOT_AVAILABLE"; h[h.EXTERNAL_XFDF_AVAILABLE = 2] = "EXTERNAL_XFDF_AVAILABLE" })(ea || (ea = {})); ha = function () {
        function h(h) { this.N = h; this.state = ea.EXTERNAL_XFDF_NOT_REQUESTED } h.prototype.w3 = function () {
          var h = this; return function (f, e, x) {
            return Object(ca.b)(h,
              void 0, void 0, function () {
                var h, n, w, y, z, aa, da, fa = this, ha; return Object(ca.d)(this, function (r) {
                  switch (r.label) {
                    case 0: if (this.state !== ea.EXTERNAL_XFDF_NOT_REQUESTED) return [3, 2]; h = this.N.getDocument().mq(); return [4, this.d2(h)]; case 1: n = r.la(), w = this.HZ(n), this.fE = null !== (ha = null === w || void 0 === w ? void 0 : w.parse()) && void 0 !== ha ? ha : null, this.state = null === this.fE ? ea.EXTERNAL_XFDF_NOT_AVAILABLE : ea.EXTERNAL_XFDF_AVAILABLE, r.label = 2; case 2: if (this.state === ea.EXTERNAL_XFDF_NOT_AVAILABLE) return x(f), [2]; y = new DOMParser;
                      z = y.parseFromString(f, "text/xml"); e.forEach(function (e) { fa.merge(z, fa.fE, e) }); aa = new XMLSerializer; da = aa.serializeToString(z); x(da); return [2]
                  }
                })
              })
          }
        }; h.prototype.DH = function (h) { this.d2 = h }; h.prototype.Zd = function () { this.fE = void 0; this.state = ea.EXTERNAL_XFDF_NOT_REQUESTED }; h.prototype.HZ = function (h) { return h ? Array.isArray(h) ? new aa.a(h) : "string" !== typeof h ? null : (new DOMParser).parseFromString(h, "text/xml").querySelector("xfdf > add") ? new aa.a(h) : new fa.a(h) : null }; h.prototype.merge = function (h, f, e) {
          var x =
            this; 0 === e && (this.I5(h, f.qn), this.K5(h, f.OD)); var r = f.aa[e]; r && (this.L5(h, r.Al), this.N5(h, r.gU, f.At), this.M5(h, r.page, e), this.J5(h, r.PM)); r = this.N.fc(); if (e === r - 1) { var n = f.At; Object.keys(n).forEach(function (e) { n[e].lF || x.aQ(h, e, n[e]) }) }
        }; h.prototype.I5 = function (h, f) { null !== f && (h = this.Ks(h), this.Go(h, "calculation-order", f)) }; h.prototype.K5 = function (h, f) { null !== f && (h = this.Ks(h), this.Go(h, "document-actions", f)) }; h.prototype.L5 = function (h, f) {
          var e = this, x = this.Js(h.querySelector("xfdf"), "annots"); Object.keys(f).forEach(function (h) {
            e.Go(x,
              '[name="' + h + '"]', f[h])
          })
        }; h.prototype.N5 = function (h, f, e) { var x = this; if (0 !== f.length) { var r = this.Ks(h); f.forEach(function (f) { var n = f.getAttribute("field"), y = e[n]; y && (x.aQ(h, n, y), x.Go(r, "null", f)) }) } }; h.prototype.aQ = function (h, f, e) { var x = this.Ks(h); null !== e.zy && this.Go(x, 'ffield [name="' + f + '"]', e.zy); h = this.Js(h.querySelector("xfdf"), "fields"); f = f.split("."); this.PG(h, f, 0, e.value); e.lF = !0 }; h.prototype.M5 = function (h, f, e) { null !== f && (h = this.Ks(h), h = this.Js(h, "pages"), this.Go(h, '[number="' + (e + 1) + '"]', f)) };
        h.prototype.J5 = function (h, f) { Object.keys(f).forEach(function (e) { (e = h.querySelector('annots [name="' + e + '"]')) && e.parentElement.removeChild(e) }) }; h.prototype.PG = function (h, f, e, y) { if (e === f.length) f = document.createElementNS("", "value"), f.textContent = y, this.Go(h, "value", f); else { var r = f[e]; this.Js(h, '[name="' + r + '"]', "field").setAttribute("name", r); h = h.querySelectorAll('[name="' + r + '"]'); 1 === h.length ? this.PG(h[0], f, e + 1, y) : (r = this.e1(h), this.PG(e === f.length - 1 ? r : this.Taa(h, r), f, e + 1, y)) } }; h.prototype.e1 = function (h) {
          for (var f =
            null, e = 0; e < h.length; e++) { var x = h[e]; if (0 === x.childElementCount || 1 === x.childElementCount && "value" === x.children[0].tagName) { f = x; break } } return f
        }; h.prototype.Taa = function (h, f) { for (var e = 0; e < h.length; e++)if (h[e] !== f) return h[e]; return null }; h.prototype.Go = function (h, f, e) { f = h.querySelector(f); null !== f && h.removeChild(f); h.appendChild(e) }; h.prototype.Ks = function (h) {
          var f = h.querySelector("pdf-info"); if (null !== f) return f; f = this.Js(h.querySelector("xfdf"), "pdf-info"); f.setAttribute("xmlns", "http://www.pdftron.com/pdfinfo");
          f.setAttribute("version", "2"); f.setAttribute("import-version", "3"); return f
        }; h.prototype.Js = function (h, f, e) { var x = h.querySelector(f); if (null !== x) return x; x = document.createElementNS("", e || f); h.appendChild(x); return x }; return h
      }(); da["default"] = ha
    }, 374: function (ha, da) {
      ha = function () {
        function h() { } h.prototype.jx = function (h) {
          var aa = { qn: null, OD: null, At: {}, aa: {} }; h = (new DOMParser).parseFromString(h, "text/xml"); aa.qn = h.querySelector("pdf-info calculation-order"); aa.OD = h.querySelector("pdf-info document-actions");
          aa.At = this.D6(h); aa.aa = this.P6(h); return aa
        }; h.prototype.D6 = function (h) { var aa = h.querySelector("fields"); h = h.querySelectorAll("pdf-info > ffield"); if (null === aa && null === h) return {}; var ca = {}; this.KX(ca, aa); this.IX(ca, h); return ca }; h.prototype.KX = function (h, aa) {
          if (null !== aa && aa.children) {
            for (var ca = [], da = 0; da < aa.children.length; da++) { var z = aa.children[da]; ca.push({ name: z.getAttribute("name"), element: z }) } for (; 0 !== ca.length;)for (aa = ca.shift(), da = 0; da < aa.element.children.length; da++)z = aa.element.children[da],
              "value" === z.tagName ? h[aa.name] = { value: z.textContent, zy: null, lF: !1 } : z.children && ca.push({ name: aa.name + "." + z.getAttribute("name"), element: z })
          }
        }; h.prototype.IX = function (h, aa) { aa.forEach(function (aa) { var ca = aa.getAttribute("name"); h[ca] ? h[ca].zy = aa : h[ca] = { value: null, zy: aa, lF: !1 } }) }; h.prototype.P6 = function (h) {
          var aa = this, ca = {}; h.querySelectorAll("pdf-info widget").forEach(function (h) { var z = parseInt(h.getAttribute("page"), 10) - 1; aa.rz(ca, z); ca[z].gU.push(h) }); h.querySelectorAll("pdf-info page").forEach(function (h) {
            var z =
              parseInt(h.getAttribute("number"), 10) - 1; aa.rz(ca, z); ca[z].page = h
          }); this.eO(h).forEach(function (h) { var z = parseInt(h.getAttribute("page"), 10), x = h.getAttribute("name"); aa.rz(ca, z); ca[z].Al[x] = h }); this.PN(h).forEach(function (h) { var z = parseInt(h.getAttribute("page"), 10); h = h.textContent; aa.rz(ca, z); ca[z].PM[h] = !0 }); return ca
        }; h.prototype.rz = function (h, aa) { h[aa] || (h[aa] = { Al: {}, PM: {}, gU: [], page: null }) }; return h
      }(); da.a = ha
    }, 388: function (ha, da, h) {
      var ca = h(3), aa = h(0); h.n(aa); ha = function (h) {
        function da(z) {
          var x =
            h.call(this) || this; x.U0 = Array.isArray(z) ? z : [z]; return x
        } Object(ca.c)(da, h); da.prototype.parse = function () { var h = this, x = { qn: null, OD: null, At: {}, aa: {} }; this.U0.forEach(function (f) { x = Object(aa.merge)(x, h.jx(f)) }); return x }; da.prototype.eO = function (h) { var x = []; h.querySelectorAll("add > *").forEach(function (f) { x.push(f) }); h.querySelectorAll("modify > *").forEach(function (f) { x.push(f) }); return x }; da.prototype.PN = function (h) { return h.querySelectorAll("delete > *") }; return da
      }(h(374).a); da.a = ha
    }, 389: function (ha,
      da, h) { var ca = h(3); ha = function (h) { function aa(aa) { var z = h.call(this) || this; z.V0 = aa; return z } Object(ca.c)(aa, h); aa.prototype.parse = function () { return this.jx(this.V0) }; aa.prototype.eO = function (h) { return h.querySelectorAll("annots > *") }; aa.prototype.PN = function () { return [] }; return aa }(h(374).a); da.a = ha }
  }]);
}).call(this || window)
