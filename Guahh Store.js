var SV = "1.0.5", selP = !1, selT = 0, J, L, M, q = require("device"), W = require("display"), z = require("keyboard"), K = require("storage"), V = require("wifi"), _Cls = { black: W.color(0, 0, 0), grey: W.color(127, 127, 127), white: W.color(255, 255, 255), green: W.color(0, 255, 0), yellow: W.color(255, 255, 0), orange: W.color(255, 165, 0), red: W.color(255, 0, 0), cyan: W.color(0, 255, 255), blue: W.color(0, 0, 255), light_blue: W.color(100, 200, 255) }, H = "http://ghp.iceis.co.uk", Q = H + "/service/main/releases/categories.json", X = "/BruceJS/", Y = "/Themes/", _IR = "/BruceIR/", Z = "/GuahhStore/installed.json", $ = "/GuahhStore/cache/", ee = "/GuahhStore/lastUpdated.json", te = [], re = [], se = {}, ne = {}, ae = [], oe = 0, ie = 0, ce = 0, le = "categories", ge = null, ue = !1, pe = !1, he = !1, fe = !1, de = !1, ve = "", ye = 0, me = 0, we = 0, Te = 0, be = [], Ce = "littlefs", xe = !1, Ee = !1, Ae = !1, Se = W.width(), Pe = W.height(), Ne = Se > 300 ? 1 : 0, Ge = Math.trunc(Se / (6 * (Ne + 1))), Re = 8 * (1 + Ne), Ue = 12 * (2 + Ne); 

for (fn_e(), fn_E(), fn_T(), J = !1, L = "", M = ""; !ue;) {
  var isSel = (q.isPressed && q.isPressed(37)) || (q.getButton && q.getButton(37));
  if (isSel && !selP) { selP = !0; selT = now(); }
  else if (!isSel && selP) {
    var dTime = now() - selT;
    if (dTime > 400) { if (de) fn_d(); else if ("scripts" === le) fn_B(); }
    else { if ("categories" === le) fn_I(!1, te.totalCategories); else if ("scripts" === le && !de) fn_I(!1, re.apps.length, fn_o); }
    selP = !1; selT = 0;
  }
  if (z.getEscPress()) if (de) fn_d(); else { if ("scripts" !== le) { ue = !0; break; } fn_B(); }
  if (!fe) {
    if ("" != ve && (z.getNextPress() || z.getPrevPress() || z.getSelPress() || z.getEscPress())) { ve = ""; ye = 0; if ("categories" === le) xe = !0; else Ee = !0; }
    else if (de) {
        if (z.getNextPress()) { ce = (ce + 1) % be.length; Ae = !0; }
        else if (z.getPrevPress()) { ce = (ce - 1 + be.length) % be.length; Ae = !0; }
        if (z.getSelPress()) { if (re.apps && re.apps[oe]) fn_v(re.apps[oe]); }
    } else if ("categories" === le) {
        if (z.getNextPress()) fn_I(!0, te.totalCategories);
        else if (z.getPrevPress()) fn_I(!1, te.totalCategories);
        if (z.getSelPress() && te.totalCategories > 0) { if (te.categories && te.categories[oe]) fn_D(te.categories[oe]); }
    } else {
        if (z.getNextPress()) fn_I(!0, re.apps.length, fn_o);
        else if (z.getPrevPress()) fn_I(!1, re.apps.length, fn_o);
        if (z.getSelPress() && re.apps.length > 0) { if (re.apps && re.apps[oe]) fn_f(re.apps[oe]); }
    }
    fn_R(); fn_U(); fn_G();
  }
  fn_r(); fn_s(); delay(50);
}

function fn_e() { try { var fileRes = K.read({ fs: "sd", path: "/bruce.conf" }); Ce = fileRes ? "sd" : "littlefs" } catch (ex) { Ce = "littlefs" } }
function fn_t() { ye = now() + 3000 }
function fn_r() { if (ye > 0 && now() >= ye && "" != ve) { ve = ""; if ("categories" === le) xe = !0; else Ee = !0; } }
function fn_s() { if (!ve && !de && "scripts" === le && 0 !== re.apps.length && !pe && !fe && now() - Te > 200) { Te = now(); var curApp = re.apps[oe]; if (curApp.d.length > Ge) { me = ++me > curApp.d.length + 10 ? 0 : me; fn_n(curApp) } var tS = 6 * (2 + Ne); var rW = Math.floor(Se / tS); if (curApp.n.length > rW) { we = ++we > curApp.n.length + 10 ? 0 : we; fn_a(curApp) } } }
function fn_n(app) { var sY = Pe / 10 * 5 + 3 * (Ne + 1) + 3; W.drawFillRect(0, sY - 10, Se, 20, _Cls.black); fn_c(1, _Cls.white); var txt = app.d + "    "; var rP = me % txt.length; W.drawText((txt + txt).substring(rP, rP + Ge), Se / 2, sY) }
function fn_a(app) { var aY = Pe / 10 * 4; W.drawFillRect(0, aY - 15, Se, 30, _Cls.black); fn_c(2, _Cls.green); var tS = 6 * (2 + Ne); var rW = Math.floor(Se / tS); var sN = app.n + "    "; var nI = we % sN.length; W.drawText((sN + sN).substring(nI, nI + rW), Se / 2, aY) }
function fn_o() { me = 0; we = 0 }
function fn_i(app) { var ver = ne[app.s]; return ver && ver.version ? ver.version : null }
function fn_c(sz, clr, algn) { W.setTextSize(sz + Ne); W.setTextColor(clr); W.setTextAlign(algn || "center", "middle") }
function fn_l(fl, bP, cat, aN) { var pth = "Themes" === cat && aN ? aN : (_IR.indexOf(cat) !== -1 ? "" : cat); return bP + (pth ? pth + "/" : "") + (fl && "object" == typeof fl && fl.destination ? fl.destination : fl).replace(/^\/+/, "") }
function fn_g(app, tY) { if ("UNKNOWN" !== app.v) { var iV = fn_i(app) || "None"; fn_F("Available: " + app.v, 1, "C", "G" + tY, _Cls.grey); if ("None" !== iV) fn_F("Installed: " + iV, 1, "C", "G" + (tY + 1), _Cls.grey) } }
function fn_u() { if (V.connected()) return !0; fn_N("WiFi not connected"); return !1; }
function fn_p(txt, x, y, sl) { var iW = Math.floor(Se / (6 + Ne)); if (txt.length > iW) { var aI = sl % (txt + "    ").length; var oT = (txt + "    ").substring(aI) + (txt + "    ").substring(0, aI); W.setTextAlign("left", "middle"); W.drawText(oT.substring(0, iW), 0, y) } else { W.setTextAlign("center", "middle"); W.drawText(txt, x, y) } }
function fn_h(app, fl, isS, cat) { if (app.sd && !isS) { var match = !1; var sdP = app.sd; if ("string" == typeof sdP) match = new RegExp(sdP).test(fl); else if (sdP.length > 0) match = sdP.some(function (v) { return new RegExp(v).test(fl) }); if (!match) return !1 } if (isS && app.sss && app.sss !== cat) return !1; return !0 }
function fn_f(app) { de = !0; ce = 0; var iV = fn_i(app); var hasU = !!iV && iV !== app.v; be = iV ? (hasU ? ["Update", "Reinstall", "Delete"] : ["Reinstall", "Delete"]) : ["Install"]; be.push("Back"); Ae = !0 }
function fn_d() { de = !1; Ee = !0 }
function fn_v(app) { var act = be[ce]; fn_d(); if (-1 !== ["Install", "Reinstall", "Update"].indexOf(act)) fn_O(app); else if ("Delete" === act) fn_w(app) }
function fn_y(msg) { fn_N(msg); fn_t() }
function fn_m(app, act, bL) { fn_k(app, act, bL) }
function fn_w(app) { fn_m(app.n, "Deleting", !0); try { var meta = fn_x(app); var fls = meta.files || []; var bP = "Themes" === meta.category ? Y : (_IR.indexOf(meta.category) !== -1 ? _IR : X); for (var i = 0; i < fls.length; i++) { fn_m(app.n, "Deleting file " + (i + 1) + " of " + fls.length); var pth = fn_l(fls[i], bP, meta.category, app.n); K.remove({ fs: Ce, path: pth }) } fn_m(app.n, "Finalizing deletion"); var vP = "Themes" === meta.category ? meta.category + "/" + app.n : (_IR.indexOf(meta.category) !== -1 ? "" : meta.category); if (vP && 0 === K.readdir({ fs: Ce, path: bP + vP }).length) K.remove({ fs: Ce, path: bP + vP }); delete ne[app.s]; fn_A(); Ee = !0; fn_m("", ""); fn_U(); fn_y("Deleted successfully!") } catch (ex) { fn_y("Err: " + ex.message) } gc() }
function fn_T() {
  he = !0; fn_k("Launching", "Loading Store"); fn_N("Connecting to Server...");
  function getJSON(url) {
    try {
      var res = V.httpFetch(url);
      if (res && (200 === res.status || 0 === res.status) && res.body) {
        var str = "" + res.body, sI = str.indexOf("{"), eI = str.lastIndexOf("}");
        if (sI >= 0 && eI > sI) return JSON.parse(str.substring(sI, eI + 1));
      }
    } catch (err) {}
    return null;
  }
  try {
    var uURL = "https://raw.githubusercontent.com/guahhinc/firetestground/main/storever.js";
    var svObj = getJSON(uURL + "?v=" + now());
    if (!svObj) svObj = getJSON(uURL);
    if (!svObj) svObj = getJSON(H + "/service/manual/guahhinc/firetestground/main/storever.js");
    if (svObj && svObj.version) {
       var rV = ("" + svObj.version).replace(/\s/g, ""), lV = SV.replace(/\s/g, "");
       if (rV !== lV) {
         fn_k("Update Found", "v" + lV + " -> v" + rV, true);
         var sURL = "https://raw.githubusercontent.com/guahhinc/firetestground/main/Guahh%20Store.js?v=" + now();
         var sPath = X + "Guahh Store.js";
         fn_N("Downloading Update...");
         var uR = V.httpFetch(sURL, { save: { fs: Ce, path: sPath, mode: "write" } });
         if (!uR || 200 !== uR.status) { fn_N("Retry via Proxy..."); sURL = H + "/service/manual/guahhinc/firetestground/main/Guahh%20Store.js"; uR = V.httpFetch(sURL, { save: { fs: Ce, path: sPath, mode: "write" } }); }
         if (uR && 200 === uR.status) {
           fn_N("Update Installed! v" + rV + "\nPress any key to exit."); delay(1000); 
           z.getSelPress(); z.getEscPress(); z.getNextPress(); z.getPrevPress();
           while(!z.getSelPress() && !z.getEscPress() && !z.getNextPress() && !z.getPrevPress()) { delay(50); }
           ue = !0; return; 
         } else { fn_N("Update failed: " + (uR ? uR.status : "Error")); delay(2000); }
       }
    }
    te = { totalCategories: 1, categories: [{ name: "Offline", slug: "ir", count: 1, apps: [{ n: "Epson", s: "guahhinc/firetestground/Epson_EB-695Wi.ir", v: "1.0", slug: "epson-ir" }] }] };
    var cURL = "https://raw.githubusercontent.com/guahhinc/firetestground/main/catalog.js";
    var ctg = getJSON(cURL + "?v=" + now());
    if (!ctg) ctg = getJSON(cURL);
    if (!ctg) ctg = getJSON(H + "/service/manual/guahhinc/firetestground/main/catalog.js");
    if (ctg && ctg.categories) { te = ctg; fn_N("Store Ready | " + te.totalCategories + " Categories"); } else { fn_N("Using Offline Mode"); }
    le = "categories"; fn_j();
  } catch (ex) { fn_N("Boot Error: " + ex.message); }
  delay(1000); fn_N(""); W.drawFillRect(0, Ue + 1, Se, Pe, _Cls.black); he = !1; xe = !0; gc(); fn_k(); fn_t();
}
function fn_b() { }
function fn_C(ctg) { try { if ("updates" === ctg.slug) re = ae; else re = { category: ctg.name, slug: ctg.slug, count: (ctg.apps || []).length, apps: ctg.apps || [] } } catch (ex) { fn_N("Err: " + ex.message) } gc(); pe = !1; fn_k(); fn_t() }
function fn_x(app) { try { return { owner: app.owner || "guahhinc", repo: app.repo || "firetestground", commit: app.commit || "main", version: app.v || "1.0", category: app.category || "IR", path: app.path || "/", files: app.files || [] } } catch (ex) { fn_N("Err (B): " + ex.message) } gc() }
function fn_E() { try { var str = K.read({ fs: Ce, path: Z }); ne = str ? JSON.parse(str) : {} } catch (ex) { ne = {} } if (!ne["GuahhDevices/Guahh-Store/Guahh Store"]) { ne["GuahhDevices/Guahh-Store/Guahh Store"] = { version: "0.0.0", commit: "" }; fn_A() } gc() }
function fn_A() { try { K.write({ fs: Ce, path: Z }, JSON.stringify(ne, null, 2), "write"); if (!pe && se) fn_j() } catch (ex) { } gc() }
function fn_S(app) { var ver = fn_i(app); if (!ver) return { text: "NOT INSTALLED", color: _Cls.yellow }; if (ver !== app.v) return { text: "UPDATE AVAILABLE", color: _Cls.orange }; return { text: "UP TO DATE", color: _Cls.green } }
function fn_P(txt) { var lineArr = txt.split("\n"), res = []; for (var i = 0; i < lineArr.length; i++) { var ln = lineArr[i]; if (ln.length <= Ge) res.push(ln); else { var wds = ln.split(" "), cur = ""; for (var j = 0; j < wds.length; j++) { var tmp = cur + (cur.length > 0 ? " " : "") + wds[j]; if (tmp.length <= Ge) cur = tmp; else if (cur.length > 0) { res.push(cur); cur = wds[j] } else res.push(wds[j]) } if (cur.length > 0) res.push(cur) } } return res }
function fn_N(msg) { var isNew = !1; if (null == msg || ve !== msg && ("" != msg && (isNew = !0), ve = msg)) { if (isNew) { fn_c(1, _Cls.orange); var lines = fn_P(ve); var h = lines.length * (Ne + 1) * 8 + 20; var w = 0; for (var i = 0; i < lines.length; i++) if (lines[i].length > w) w = lines[i].length; var rW = w * (6 * (1 + Ne)); var iW = Math.min(Se - 20, rW + 40); var x = (Se - iW) / 2; var y = Pe / 2 - h / 2; W.drawFillRect(x, y, iW, h, _Cls.black); W.drawRect(x, y, iW, h, _Cls.orange); lines.forEach(function (ln, idx) { var yO = y + 18 + idx * (Ne + 1) * 8; W.drawText(ln, Se / 2, yO) }) } } }
function fn_G() { if (Ae) { Ae = !1; if (!de || 0 === re.apps.length) return; var h = 16 * be.length + 28; var w = Math.min(Se - 28, 220); var x = (Se - w) / 2; var y = (Pe - h) / 2; W.drawFillRect(x, y, w, h, _Cls.black); W.drawRect(x, y, w, h, _Cls.cyan); fn_c(1, null, null); be.forEach(function (ln, idx) { var yO = y + 18 + idx * (Ne + 1) * 10, clr = idx === ce ? _Cls.green : _Cls.grey, pfx = idx === ce ? "> " : "  "; if (idx === ce) { W.drawRect(x + 4, yO - 6, 120, 12, _Cls.green) } W.setTextColor(clr); W.setTextAlign("left", "middle"); W.drawText(pfx + ln, x + 10, yO) }) } }
function fn_R() { if (gc(), xe) { xe = !1; W.drawFillRect(0, Ue + 1, Se, Pe, _Cls.black); if (0 === te.totalCategories) { fn_F("No categories available", 1, "C", "G6", _Cls.red); fn_F("Check WiFi", 1, "C", "G7", _Cls.white); return } if (de) return; var cat = te.categories[oe]; var name = cat.name; var total = te.totalCategories; var count = cat.count; if ("Updates" !== name) { var pth = $ + "category-" + cat.slug + ".json"; try { var str = K.read({ fs: Ce, path: pth }); if (str) { var o = JSON.parse(str); if (void 0 !== o.count) count = o.count; } } catch (ex) { } } fn_F("Category " + (oe + 1) + "/" + total, 1, "C", "G3", _Cls.white); fn_F("Updates" === name ? "* " + name + " *" : name, 2, "C", "G5", "Updates" === name ? _Cls.orange : _Cls.green); fn_F("Updates" === name ? count + " Update" + (1 === count ? "" : "s") + " Available" : count + ("Themes" === name ? " Theme" : " App") + (1 === count ? "" : "s"), 1, "C", "G7", _Cls.white); fn_F("SEL open   ESC quit", 1, "C", "G8", _Cls.grey) } gc() }
function fn_U() { if (gc(), Ee) { Ee = !1; W.drawFillRect(0, Ue + 1, Se, Pe, _Cls.black); if (0 === re.apps.length) { fn_F("No apps in category", 1, "C", "G4", _Cls.red); fn_F("Press ESC to go back", 1, "C", "G6", _Cls.white); return } if (de) return; var app = re.apps[oe]; var st = fn_S(app); if (ge) fn_F(ge.name + "   " + (oe + 1) + "/" + re.apps.length, 1, "C", "G2", _Cls.white); fn_c(2, _Cls.green); var y1 = Pe / 10 * 4; fn_p(app.n, Se / 2, y1, we); fn_c(1, _Cls.white); var y2 = Pe / 10 * 5 + 3 * (Ne + 1) + 3; fn_p(app.d, Se / 2, y2, me); fn_F(st.text, 1, "C", "G7", st.color); fn_g(app, 8); fn_F("SEL actions   ESC back", 1, "C", "G8", _Cls.grey) } gc() }
function fn_k(l1, l2, clr) { gc(); if (void 0 === l1) l1 = ""; if (void 0 === l2) l2 = ""; if (void 0 === clr) clr = !1; if (clr) W.drawFillRect(0, Ue, Se, Pe, _Cls.black); if (!de && !J) { W.drawFillRect(0, 0, Se, Ue, _Cls.black); W.drawRect(0, 0, Se, Ue, _Cls.black); fn_F("Guahh Store", 2, "C", Ue - 2, _Cls.light_blue); J = !0 } if (l1 != L) { fn_F(l1, 1, "C", "G4", _Cls.cyan); L = l1 } if (l2 != M) { fn_F(l2, 1, "C", "G6", _Cls.white); M = l2 } gc() }
function fn_F(msg, sz, x, y, clr) { var bnd = 8 * (2 + Ne); if ("C" == x) x = Se / 2; if ("string" == typeof y && "G" === y.substring(0, 1)) { var a = parseInt(y.substring(1)); y = (1 == a) ? bnd : (Pe - bnd - 4) / 8 * (a - 1) + bnd + 4 } W.drawFillRect(0, y - 8 * (sz + Ne), Se, 8 * (sz + Ne), _Cls.black); fn_c(sz, clr, "center"); W.setTextAlign("center", "bottom"); W.drawText(msg, x, y) }
function fn_O(app) { fe = !0; fn_k(app.n, "Connecting", !0); try { if (!fn_u()) { fe = !1; return } fn_k(app.n, "Installing"); var ok = 0, err = 0; var meta = fn_x(app); var fls = meta.files || []; var bP = "Themes" === meta.category ? Y : (_IR.indexOf(meta.category) !== -1 ? _IR : X); for (var i = 0; i < fls.length; i++) { var curF = fls[i]; var dP = fn_l(curF, bP, meta.category, app.n); var sP = curF && "object" == typeof curF && curF.source ? (meta.path + curF.source).replace(/^\/+/, "") : (meta.path + curF).replace(/^\/+/, ""); var url = (H + "/service/manual/" + meta.owner + "/" + meta.repo + "/" + meta.commit + "/" + sP).replace(/ /g, "%20"); if (200 === V.httpFetch(url, { save: { fs: Ce, path: dP, mode: "write" } }).status) { fn_k(app.n, "Downloading " + (i + 1) + " of " + fls.length); ok++ } else { err++; fn_k("Error", "Download failed for " + fls[i].source) } gc() } if (ok === fls.length && 0 === err) { ne[app.s] = { version: meta.version, commit: meta.commit }; fn_A(); Ee = !0; fn_k("", ""); fn_U(); fn_y("Installed successfully!") } } catch (ex) { fn_k("Error", "Err (A): " + ex.message) } gc(); fe = !1; fn_t() }
function fn_j() { try { ae = { name: "Updates", slug: "updates", count: 0, apps: [] }; if (te && te.categories) { te.categories = te.categories.filter(function (e) { return "updates" !== e.slug }); te.categories.forEach(function (ctg) { ctg.apps.forEach(function (app) { var ver = fn_i(app); if (ver && ver !== app.v) ae.apps.push(app) }) }); ae.count = ae.apps.length; if (ae.count > 0) te.categories.unshift(ae); te.totalCategories = te.categories.length } } catch (ex) { fn_N("Err: " + ex.message) } gc() }
function fn_D(ctg) { ie = oe; ge = ctg; le = "scripts"; oe = 0; fn_o(); fn_C(ctg); Ee = !0 }
function fn_B() { W.drawFillRect(0, Ue + 1, Se, Pe, _Cls.black); le = "categories"; oe = ie; re = []; ge = null; fn_o(); xe = !0 }
function fn_I(fwd, cnt, cb) { if (0 !== cnt) { oe = fwd ? (oe + 1) % cnt : (oe - 1 + cnt) % cnt; if (cb) cb(); if ("categories" === le) xe = !0; else Ee = !0 } }