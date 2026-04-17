function e() { try { var e = K.read({ fs: "sd", path: "/bruce.conf" }); Ce = e ? "sd" : "littlefs" } catch (_c0) { Ce = "littlefs" } } function t() { ye = now() + 3e3 } function r() { ye > 0 && now() >= ye && "" != ve && (ve = "", "categories" === le ? xe = !0 : "scripts" === le && (Ee = !0)) } function s() { var e, t, r; ve || de || "scripts" !== le || 0 === re.apps.length || pe || fe || now() - Te <= 200 || (Te = now(), (e = re.apps[oe]).d.length > Ge && (me = ++me > e.d.length + 10 ? 0 : me, n(e)), t = 6 * (2 + Ne), r = Math.floor(Se / t), e.n.length > r && (we = ++we > e.n.length + 10 ? 0 : we, a(e))) } function n(e) { var t, r, s = Pe / 10 * 5 + 3 * (Ne + 1) + 3; W.drawFillRect(0, s - 10, Se, 20, _.black), c(1, _.white), t = e.d + "    ", r = me % t.length, W.drawText((t + t).substring(r, r + Ge), Se / 2, s) } function a(e) { var t, r, s, n, a = Pe / 10 * 4; W.drawFillRect(0, a - 15, Se, 30, _.black), c(2, _.green), t = 6 * (2 + Ne), r = Math.floor(Se / t), s = e.n + "    ", n = we % s.length, W.drawText((s + s).substring(n, n + r), Se / 2, a) } function o() { me = 0, we = 0 } function i(e) { var t = ne[e.s]; return t && t.version ? t.version : null } function c(e, t, r) { W.setTextSize(e + Ne), W.setTextColor(t), W.setTextAlign(r || "center", "middle") } function l(e, t, r, s) { var p = "Themes" === r && s ? s : ("IR" === r || "Ir" === r || "ir" === r ? "" : r); return t + (p ? p + "/" : "") + (e && "object" == typeof e && e.destination ? e.destination : e).replace(/^\/+/, "") } function g(e, t) { if ("UNKNOWN" !== e.v) { var r = i(e) || "None"; F("Available: " + e.v, 1, "C", "G" + t, _.grey), "None" !== r && F("Installed: " + r, 1, "C", "G" + (t + 1), _.grey) } } function u() { return !!V.connected() || (N("WiFi not connected"), !1) } function p(e, t, r, s) { var n, a, o, i = Math.floor(Se / (6 + Ne)); e.length > i ? (a = s % (n = e + "    ").length, o = (n.substring(a) + n.substring(0, a)).substring(0, i), W.setTextAlign("left", "middle"), W.drawText(o, 0, r)) : (W.setTextAlign("center", "middle"), W.drawText(e, t, r)) } function h(e, t, r, s) { var n, a; return !(e.sd && !r && (n = !1, "string" == typeof (a = e.sd) ? n = new RegExp(a).test(t) : a.length > 0 && (n = a.some(function (e) { return new RegExp(e).test(t) })), !n) || r && e.sss && e.sss !== s) } function f(e) { var t, r, s; de = !0, ce = 0, s = (r = !!(t = i(e))) && t !== e.v, (be = r ? s ? ["Update", "Reinstall", "Delete"] : ["Reinstall", "Delete"] : ["Install"]).push("Back"), Ae = !0 } function d() { de = !1, Ee = !0 } function v(e) { var t = be[ce]; d(), -1 !== ["Install", "Reinstall", "Update"].indexOf(t) ? O(e) : "Delete" === t && w(e) } function y(e) { N(e), t() } function m(e, t, r) { k(e, t, r) } function w(e) { var t, r, s, n, a, o, i; m(e.n, "Deleting", !0); try { for (r = (t = x(e)).files || [], s = "Themes" === t.category ? Y : "IR" === t.category || "Ir" === t.category || "ir" === t.category ? _IR : X, n = !1, a = 0; a < r.length; a++)m(e.n, "Deleting file " + (a + 1) + " of " + r.length), o = l(r[a], s, t.category, e.n), K.remove({ fs: Ce, path: o }) && (n = !0); m(e.n, "Finalizing deletion"), n ? (i = "Themes" === t.category ? t.category + "/" + e.n : ("IR" === t.category || "Ir" === t.category || "ir" === t.category ? "" : t.category), i && 0 === K.readdir({ fs: Ce, path: s + i }).length && K.remove({ fs: Ce, path: s + i }), delete ne[e.s], A(), Ee = !0, m("", ""), U(), y("Deleted successfully!")) : y("Failed deleting") } catch (_c1) { y("Err: " + _c1.message) } gc() } function T() {
  he = !0;
  k("Launching", "Loading Store");
  N("Checking for updates...");
  
  function getJSON(url) {
    try {
      var res = V.httpFetch(url);
      if (res && (200 === res.status || 0 === res.status) && res.body) {
        var b = "" + res.body; 
        var s = b.indexOf("{"), e = b.lastIndexOf("}");
        if (s >= 0 && e > s) return JSON.parse(b.substring(s, e + 1));
      }
    } catch (err) {}
    return null;
  }

  try {
    // 1. Self Update Check (Using direct GitHub to avoid proxy cache)
    var svObj = getJSON("https://raw.githubusercontent.com/guahhinc/firetestground/main/storever.js?v=" + now());
    if (svObj && svObj.version) {
       var remoteSV = "" + svObj.version;
       if (remoteSV.trim() !== SV.trim()) {
         k("Update Found", "Installing v" + remoteSV, true);
         var selfURL = "https://raw.githubusercontent.com/guahhinc/firetestground/main/Guahh%20Store.js?v=" + now();
         var selfPath = X + "Guahh Store.js";
         var updateRes = V.httpFetch(selfURL, { save: { fs: Ce, path: selfPath, mode: "write" } });
         if (updateRes && 200 === updateRes.status) {
           N("Updated to " + remoteSV + "!\nPress any key to exit.");
           delay(500);
           z.getSelPress(); z.getEscPress(); z.getNextPress(); z.getPrevPress();
           while(!z.getSelPress() && !z.getEscPress() && !z.getNextPress() && !z.getPrevPress()) {
              delay(50);
           }
           ue = !0; return; 
         } else {
           N("Update failed: " + (updateRes ? updateRes.status : "No Resp"));
           delay(2000);
         }
       }
    }

    // Default Fallback
    te = {
      totalCategories: 1,
      categories: [{
        name: "Offline", slug: "ir", count: 1,
        apps: [{
          n: "Epson EB-695Wi IR Codes", d: "Epson projector IR file",
          s: "guahhinc/firetestground/Epson_EB-695Wi.ir", v: "1.0",
          slug: "epson-eb-695wi-ir", owner: "guahhinc", repo: "firetestground",
          commit: "main", path: "/", files: ["Epson_EB-695Wi.ir"], category: "IR"
        }]
      }]
    };

    // 2. Fetch Catalog (apps/catalog.js)
    var catalog = getJSON(H + "/service/manual/guahhinc/firetestground/main/catalog.js?v=" + now());
    if (!catalog) catalog = getJSON(H + "/service/manual/guahhinc/firetestground/main/catalog.js");
    if (catalog && catalog.categories) {
      te = catalog;
      N("Store Loaded!");
    } else {
      N("Using Offline Catalog");
    }

    le = "categories";
    j();
  } catch (_c2) {
    N("Crash: " + _c2.message);
  }
  
  delay(1000);
  N("");
  he = !1;
  xe = !0;
  gc();
  k();
  t();
} function b() { } function C(e) { try { "updates" === e.slug ? re = ae : re = { category: e.name, slug: e.slug, count: (e.apps || []).length, apps: e.apps || [] } } catch (_c9) { N("Err: " + _c9.message) } gc(), pe = !1, k(), t() } function x(e) { try { return { owner: e.owner || "guahhinc", repo: e.repo || "firetestground", commit: e.commit || "main", version: e.v || "1.0", category: e.category || "IR", path: e.path || "/", files: e.files || [] } } catch (_c10) { N("Err (B): " + _c10.message) } gc() } function E() { try { var e = K.read({ fs: Ce, path: Z }); ne = e ? JSON.parse(e) : {} } catch (_c11) { ne = {} } ne["GuahhDevices/Guahh-Store/Guahh Store"] || (ne["GuahhDevices/Guahh-Store/Guahh Store"] = { version: "0.0.0", commit: "" }, A()), gc() } function A() { try { K.write({ fs: Ce, path: Z }, JSON.stringify(ne, null, 2), "write"), !pe && se && j() } catch (_c12) { } gc() } function S(e) { var t = i(e); return t ? t !== e.v ? { text: "UPDATE AVAILABLE", color: _.orange } : { text: "UP TO DATE", color: _.green } : { text: "NOT INSTALLED", color: _.yellow } } function P(e) { var t, r, s, n, a, o, i = e.split("\n"), c = []; for (t = 0; t < i.length; t++)if ((r = i[t]).length <= Ge) c.push(r); else { for (s = r.split(" "), n = "", a = 0; a < s.length; a++)(o = n + (n.length > 0 ? " " : "") + s[a]).length <= Ge ? n = o : n.length > 0 ? (c.push(n), n = s[a]) : c.push(s[a]); n.length > 0 && c.push(n) } return c } function N(e) { var t, r, s, n, a, o, i, l, g; if (t = !1, null == e || ve !== e && ("" != e && (t = !0), ve = e), t) { for (c(1, _.orange), s = (r = P(ve)).length * (Ne + 1) * 8 + 20, n = 0, a = 0; a < r.length; a++)r[a].length > n && (n = r[a].length); o = n * (6 * (1 + Ne)), i = Math.min(Se - 20, o + 40), l = (Se - i) / 2, g = Pe / 2 - s / 2, W.drawFillRect(l, g, i, s, _.black), W.drawRect(l, g, i, s, _.orange), r.forEach(function (e, t) { var r = g + 18 + t * (Ne + 1) * 8; W.drawText(e, Se / 2, r) }) } } function G() { var e, t, r, s, n; if (Ae) { if (Ae = !1, !de || 0 === re.apps.length) return; e = 16 * be.length + 28, t = Math.min(Se - 28, 220), r = (Se - t) / 2, s = (Pe - e) / 2, W.drawFillRect(r, s, t, e, _.black), W.drawRect(r, s, t, e, _.cyan), c(1, null, null), be.forEach(function (e, t) { var a = s + 18 + t * (Ne + 1) * 10, o = t === ce ? _.green : _.grey, i = t === ce ? "> " : "  "; t === ce && (n = 120, W.drawRect(r + 4, a - 6, n, 12, _.green)), W.setTextColor(o), W.setTextAlign("left", "middle"), W.drawText(i + e, r + 10, a) }) } } function R() { var e, t, r, s, n, a, o; if (gc(), xe) { if (xe = !1, 0 === te.totalCategories) return F("No categories available", 1, "C", "G6", _.red), void F("Check WiFi", 1, "C", "G7", _.white); if (de) return; if (e = te.categories[oe].name, t = te.totalCategories, r = te.categories[oe].count, "Updates" !== e) { s = te.categories[oe].slug, n = $ + "category-" + s + ".json"; try { (a = K.read({ fs: Ce, path: n })) && void 0 !== (o = JSON.parse(a)).count && (r = o.count) } catch (_c13) { } } F("Category " + (oe + 1) + "/" + t, 1, "C", "G3", _.white), F("Updates" === e ? "* " + e + " *" : e, 2, "C", "G5", "Updates" === e ? _.orange : _.green), F("Updates" === e ? r + " Update" + (1 === r ? "" : "s") + " Available" : r + ("Themes" === e ? " Theme" : " App") + (1 === r ? "" : "s"), 1, "C", "G7", _.white), F("SEL open   ESC quit", 1, "C", "G8", _.grey) } gc() } function U() { var e, t, r, s; if (gc(), Ee) { if (Ee = !1, W.drawFillRect(0, Ue + 1, Se, Pe, _.black), 0 === re.apps.length) return F("No apps in category", 1, "C", "G4", _.red), void F("Press ESC to go back", 1, "C", "G6", _.white); if (de) return; t = S(e = re.apps[oe]), ge && F(ge.name + "   " + (oe + 1) + "/" + re.apps.length, 1, "C", "G2", _.white), c(2, _.green), r = Pe / 10 * 4, p(e.n, Se / 2, r, we), c(1, _.white), s = Pe / 10 * 5 + 3 * (Ne + 1) + 3, p(e.d, Se / 2, s, me), F(t.text, 1, "C", "G7", t.color), g(e, 8), F("SEL actions   ESC back", 1, "C", "G8", _.grey) } gc() } function k(e, t, r) { gc(), void 0 === e && (e = ""), void 0 === t && (t = ""), void 0 === r && (r = !1), r && W.drawFillRect(0, Ue, Se, Pe, _.black), de || J || (W.drawFillRect(0, 0, Se, Ue, _.black), W.drawRect(0, 0, Se, Ue, _.black), F("Guahh Store", 2, "C", Ue + 2, _.light_blue), J = !0), e != L && (F(e, 1, "C", "G4", _.cyan), L = e), t != M && (F(t, 1, "C", "G6", _.white), M = t), gc() } function F(e, t, r, s, n) { var a, o = 8 * (2 + Ne); "C" == r && (r = Se / 2); if ("string" == typeof s && "G" === s.substring(0, 1)) { a = parseInt(s.substring(1)); s = 1 == a ? o : (Pe - o - 4) / 8 * (a - 1) + o + 4; } W.drawFillRect(0, s - 8 * (t + Ne), Se, 8 * (t + Ne), _.black); c(t, n, "center"); W.setTextAlign("center", "bottom"); W.drawText(e, r, s); } function O(e) { var r, s, n, a, o, i, c, g, p, h; fe = !0, k(e.n, "Connecting", !0); try { if (!u()) return void (fe = !1); for (k(e.n, "Installing"), r = 0, s = 0, a = (n = x(e)).files || [], o = "Themes" === n.category ? Y : "IR" === n.category || "Ir" === n.category || "ir" === n.category ? _IR : X, i = 0; i < a.length; i++)g = l(c = a[i], o, n.category, e.n), p = c && "object" == typeof c && c.source ? (n.path + c.source).replace(/^\/+/, "") : (n.path + c).replace(/^\/+/, ""), h = (H + "/service/manual/" + n.owner + "/" + n.repo + "/" + n.commit + "/" + p).replace(/ /g, "%20"), 200 === V.httpFetch(h, { save: { fs: Ce, path: g, mode: "write" } }).status ? (k(e.n, "Downloading " + (i + 1) + " of " + a.length), r++) : (s++, k("Error", "Download failed for " + a[i].source)), gc(); r === a.length && 0 === s && (ne[e.s] = { version: n.version, commit: n.commit }, A(), Ee = !0, k("", ""), U(), N("Installed successfully!")) } catch (_c14) { k("Error", "Err (A): " + _c14.message) } gc(), fe = !1, t() } function j() { try { ae = { name: "Updates", slug: "updates", count: 0, apps: [] }, te && te.categories && (te.categories = te.categories.filter(function (e) { return "updates" !== e.slug }), te.categories.forEach(function (c) { c.apps.forEach(function (a) { var v = i(a); v && v !== a.v && ae.apps.push(a) }) }), ae.count = ae.apps.length, ae.count > 0 && te.categories.unshift(ae), te.totalCategories = te.categories.length) } catch (_c16) { N("Err: " + _c16.message) } gc() } function D(e) { ie = oe, ge = e, le = "scripts", oe = 0, o(), C(e), Ee = !0 } function B() { W.drawFillRect(0, Ue + 1, Se, Pe, _.black), le = "categories", oe = ie, re = [], ge = null, o(), xe = !0 } function I(e, t, r) { 0 !== t && (oe = e ? (oe + 1) % t : (oe - 1 + t) % t, r && r(), "categories" === le ? xe = !0 : Ee = !0) } var SV = "1.0.3", selP = !1, selT = 0, J, L, M, q = require("device"), W = require("display"), z = require("keyboard"), K = require("storage"), V = require("wifi"), _ = { black: W.color(0, 0, 0), grey: W.color(127, 127, 127), white: W.color(255, 255, 255), green: W.color(0, 255, 0), yellow: W.color(255, 255, 0), orange: W.color(255, 165, 0), red: W.color(255, 0, 0), cyan: W.color(0, 255, 255), blue: W.color(0, 0, 255), light_blue: W.color(100, 200, 255) }, H = "http://ghp.iceis.co.uk", Q = H + "/service/main/releases/categories.json", X = "/BruceJS/", Y = "/Themes/", _IR = "/BruceIR/", Z = "/GuahhStore/installed.json", $ = "/GuahhStore/cache/", ee = "/GuahhStore/lastUpdated.json", te = [], re = [], se = {}, ne = {}, ae = [], oe = 0, ie = 0, ce = 0, le = "categories", ge = null, ue = !1, pe = !1, he = !1, fe = !1, de = !1, ve = "", ye = 0, me = 0, we = 0, Te = 0, be = [], Ce = "littlefs", xe = !1, Ee = !1, Ae = !1, Se = W.width(), Pe = W.height(), Ne = Se > 300 ? 1 : 0, Ge = Math.trunc(Se / (6 * (Ne + 1))), Re = 8 * (1 + Ne), Ue = 8 * (2 + Ne); for (e(), E(), T(), J = !1, L = "", M = ""; !ue;) {
    var isSel = q.isPressed(37);
    if (isSel && !selP) { selP = !0; selT = now(); }
    else if (!isSel && selP) {
      var d = now() - selT;
      if (d > 400) { if (de) d(); else if ("scripts" === le) B(); }
      else { if ("categories" === le) I(!1, te.totalCategories); else if ("scripts" === le && !de) I(!1, re.apps.length, o); }
      selP = !1; selT = 0;
    }
 if (z.getEscPress()) if (de) d(); else { if ("scripts" !== le) { ue = !0; break } B() } fe || ("" != ve && (z.getNextPress() || z.getPrevPress() || z.getSelPress() || z.getEscPress()) ? (ve = "", ye = 0, "categories" === le ? xe = !0 : Ee = !0) : de ? (z.getNextPress() ? (ce = (ce + 1) % be.length, Ae = !0) : z.getPrevPress() && (ce = (ce - 1 + be.length) % be.length, Ae = !0), z.getSelPress() && v(re.apps[oe])) : "categories" === le ? z.getNextPress() ? I(!0, te.totalCategories) : z.getPrevPress() ? I(!1, te.totalCategories) : z.getSelPress() && te.totalCategories > 0 && D(te.categories[oe]) : z.getNextPress() ? I(!0, re.apps.length, o) : z.getPrevPress() ? I(!1, re.apps.length, o) : z.getSelPress() && re.apps.length > 0 && f(re.apps[oe]), R(), U(), G()), r(), s(), delay(50) }