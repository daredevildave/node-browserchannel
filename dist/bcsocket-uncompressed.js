(function(){
function g(a) {
  throw a;
}
var h = void 0, j = !0, k = null, o = !1;
function aa() {
  return function() {
  }
}
function p(a) {
  return function(b) {
    this[a] = b
  }
}
function ba(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var q, da = da || {}, r = this;
function ea(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function fa() {
}
function ga(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return"array" == ga(a)
}
function ha(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || g(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return w.apply(k, arguments)
}
var x = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ka = b.prototype;
  a.prototype = new c
}
;function na(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function oa(a) {
  if(!pa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
  return a
}
var qa = /&/g, ra = /</g, sa = />/g, ta = /\"/g, pa = /[&<>\"]/;
var z, ua, va, xa;
function ya() {
  return r.navigator ? r.navigator.userAgent : k
}
xa = va = ua = z = o;
var za;
if(za = ya()) {
  var Aa = r.navigator;
  z = 0 == za.indexOf("Opera");
  ua = !z && -1 != za.indexOf("MSIE");
  va = !z && -1 != za.indexOf("WebKit");
  xa = !z && !va && "Gecko" == Aa.product
}
var Ba = z, A = ua, Ca = xa, B = va, Da;
a: {
  var Ea = "", Fa;
  if(Ba && r.opera) {
    var Ga = r.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga
  }else {
    if(Ca ? Fa = /rv\:([^\);]+)(\)|;)/ : A ? Fa = /MSIE\s+([^\);]+)(\)|;)/ : B && (Fa = /WebKit\/(\S+)/), Fa) {
      var Ha = Fa.exec(ya()), Ea = Ha ? Ha[1] : ""
    }
  }
  if(A) {
    var Ia, Ja = r.document;
    Ia = Ja ? Ja.documentMode : h;
    if(Ia > parseFloat(Ea)) {
      Da = "" + Ia;
      break a
    }
  }
  Da = Ea
}
var Ka = {};
function C(a) {
  var b;
  if(!(b = Ka[a])) {
    b = 0;
    for(var c = ("" + Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var i = c[f] || "", m = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(i) || ["", "", ""], u = n.exec(m) || ["", "", ""];
        if(0 == s[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ka[a] = 0 <= b
  }
  return b
}
var La = {};
function Ma(a) {
  return La[a] || (La[a] = A && !!document.documentMode && document.documentMode >= a)
}
;function Na(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Na) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
y(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, na.apply(k, b));
  b.shift()
}
y(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  g(new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {
  var b = E, c;
  for(c in b) {
    a.call(h, b[c], c, b)
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Va(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Ua.length;f++) {
      c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var F = Array.prototype, Wa = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
function Ya(a) {
  return F.concat.apply(F, arguments)
}
function Za(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function $a(a) {
  if("function" == typeof a.K) {
    return a.K()
  }
  if(v(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Sa(a)
}
function G(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ea) {
        d = a.ea()
      }else {
        if("function" != typeof a.K) {
          if(ha(a) || v(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Ta(a)
          }
        }else {
          d = h
        }
      }
      for(var e = $a(a), f = e.length, i = 0;i < f;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
;function ab(a, b) {
  this.M = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof ab ? (c = a.ea(), d = a.K()) : (c = Ta(a), d = Sa(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = ab.prototype;
q.f = 0;
q.K = function() {
  bb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.M[this.j[b]])
  }
  return a
};
q.ea = function() {
  bb(this);
  return this.j.concat()
};
q.ca = function(a) {
  return H(this.M, a)
};
q.remove = function(a) {
  return H(this.M, a) ? (delete this.M[a], this.f--, this.j.length > 2 * this.f && bb(this), j) : o
};
function bb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      H(a.M, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], H(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return H(this.M, a) ? this.M[a] : b
};
q.set = function(a, b) {
  H(this.M, a) || (this.f++, this.j.push(a));
  this.M[a] = b
};
q.n = function() {
  return new ab(this)
};
function H(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function I(a, b) {
  var c;
  if(a instanceof I) {
    this.z = b !== h ? b : a.z, cb(this, a.ja), c = a.Ra, J(this), this.Ra = c, db(this, a.da), eb(this, a.va), fb(this, a.F), gb(this, a.O.n()), c = a.Ga, J(this), this.Ga = c
  }else {
    if(a && (c = ("" + a).match(Qa))) {
      this.z = !!b;
      cb(this, c[1] || "", j);
      var d = c[2] || "";
      J(this);
      this.Ra = d ? decodeURIComponent(d) : "";
      db(this, c[3] || "", j);
      eb(this, c[4]);
      fb(this, c[5] || "", j);
      gb(this, c[6] || "", j);
      c = c[7] || "";
      J(this);
      this.Ga = c ? decodeURIComponent(c) : ""
    }else {
      this.z = !!b, this.O = new hb(k, 0, this.z)
    }
  }
}
q = I.prototype;
q.ja = "";
q.Ra = "";
q.da = "";
q.va = k;
q.F = "";
q.Ga = "";
q.Yb = o;
q.z = o;
q.toString = function() {
  var a = [], b = this.ja;
  b && a.push(ib(b, jb), ":");
  if(b = this.da) {
    a.push("//");
    var c = this.Ra;
    c && a.push(ib(c, jb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.va;
    b != k && a.push(":", "" + b)
  }
  if(b = this.F) {
    this.da && "/" != b.charAt(0) && a.push("/"), a.push(ib(b, "/" == b.charAt(0) ? kb : lb))
  }
  (b = this.O.toString()) && a.push("?", b);
  (b = this.Ga) && a.push("#", ib(b, mb));
  return a.join("")
};
q.n = function() {
  return new I(this)
};
function cb(a, b, c) {
  J(a);
  a.ja = c ? b ? decodeURIComponent(b) : "" : b;
  a.ja && (a.ja = a.ja.replace(/:$/, ""))
}
function db(a, b, c) {
  J(a);
  a.da = c ? b ? decodeURIComponent(b) : "" : b
}
function eb(a, b) {
  J(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.va = b) : a.va = k
}
function fb(a, b, c) {
  J(a);
  a.F = c ? b ? decodeURIComponent(b) : "" : b
}
function gb(a, b, c) {
  J(a);
  b instanceof hb ? (a.O = b, a.O.ib(a.z)) : (c || (b = ib(b, nb)), a.O = new hb(b, 0, a.z))
}
function K(a, b, c) {
  J(a);
  a.O.set(b, c)
}
function ob(a, b, c) {
  J(a);
  t(c) || (c = ["" + c]);
  pb(a.O, b, c)
}
function L(a) {
  J(a);
  K(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36));
  return a
}
function J(a) {
  a.Yb && g(Error("Tried to modify a read-only Uri"))
}
q.ib = function(a) {
  this.z = a;
  this.O && this.O.ib(a);
  return this
};
function qb(a, b, c, d) {
  var e = new I(k, h);
  a && cb(e, a);
  b && db(e, b);
  c && eb(e, c);
  d && fb(e, d);
  return e
}
function ib(a, b) {
  return v(a) ? encodeURI(a).replace(b, rb) : k
}
function rb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var jb = /[#\/\?@]/g, lb = /[\#\?:]/g, kb = /[\#\?]/g, nb = /[\#\?@]/g, mb = /#/g;
function hb(a, b, c) {
  this.w = a || k;
  this.z = !!c
}
function M(a) {
  if(!a.i && (a.i = new ab, a.f = 0, a.w)) {
    for(var b = a.w.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, f = k;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = N(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = hb.prototype;
q.i = k;
q.f = k;
q.add = function(a, b) {
  M(this);
  this.w = k;
  var a = N(this, a), c = this.i.get(a);
  c || this.i.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
q.remove = function(a) {
  M(this);
  a = N(this, a);
  return this.i.ca(a) ? (this.w = k, this.f -= this.i.get(a).length, this.i.remove(a)) : o
};
q.ca = function(a) {
  M(this);
  a = N(this, a);
  return this.i.ca(a)
};
q.ea = function() {
  M(this);
  for(var a = this.i.K(), b = this.i.ea(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
q.K = function(a) {
  M(this);
  var b = [];
  if(a) {
    this.ca(a) && (b = Ya(b, this.i.get(N(this, a))))
  }else {
    for(var a = this.i.K(), c = 0;c < a.length;c++) {
      b = Ya(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  M(this);
  this.w = k;
  a = N(this, a);
  this.ca(a) && (this.f -= this.i.get(a).length);
  this.i.set(a, [b]);
  this.f++;
  return this
};
q.get = function(a, b) {
  var c = a ? this.K(a) : [];
  return 0 < c.length ? c[0] : b
};
function pb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.w = k, a.i.set(N(a, b), Za(c)), a.f += c.length)
}
q.toString = function() {
  if(this.w) {
    return this.w
  }
  if(!this.i) {
    return""
  }
  for(var a = [], b = this.i.ea(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent("" + d), d = this.K(d), f = 0;f < d.length;f++) {
      var i = e;
      "" !== d[f] && (i += "=" + encodeURIComponent("" + d[f]));
      a.push(i)
    }
  }
  return this.w = a.join("&")
};
q.n = function() {
  var a = new hb;
  a.w = this.w;
  this.i && (a.i = this.i.n());
  return a
};
function N(a, b) {
  var c = "" + b;
  a.z && (c = c.toLowerCase());
  return c
}
q.ib = function(a) {
  a && !this.z && (M(this), this.w = k, G(this.i, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), pb(this, d, a))
  }, this));
  this.z = a
};
function sb() {
}
sb.prototype.Ba = k;
var tb;
function ub() {
}
y(ub, sb);
function vb(a) {
  return(a = wb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function xb(a) {
  var b = {};
  wb(a) && (b[0] = j, b[1] = j);
  return b
}
function wb(a) {
  if(!a.xb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.xb = d
      }catch(e) {
      }
    }
    g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.xb
}
tb = new ub;
function yb() {
}
var zb = 0;
q = yb.prototype;
q.key = 0;
q.ia = o;
q.nb = o;
q.Ia = function(a, b, c, d, e, f) {
  "function" == ga(a) ? this.zb = j : a && a.handleEvent && "function" == ga(a.handleEvent) ? this.zb = o : g(Error("Invalid listener argument"));
  this.ta = a;
  this.Kb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.bb = f;
  this.nb = o;
  this.key = ++zb;
  this.ia = o
};
q.handleEvent = function(a) {
  return this.zb ? this.ta.call(this.bb || this.src, a) : this.ta.handleEvent.call(this.ta, a)
};
!A || Ma(9);
var Ab = !A || Ma(9), Bb = A && !C("8");
!B || C("528");
Ca && C("1.9b") || A && C("8") || Ba && C("9.5") || B && C("528");
Ca && !C("8") || A && C("9");
function Cb() {
}
Cb.prototype.sb = o;
Cb.prototype.Ca = function() {
  this.sb || (this.sb = j, this.v())
};
Cb.prototype.v = function() {
  this.Tb && Db.apply(k, this.Tb);
  if(this.Eb) {
    for(;this.Eb.length;) {
      this.Eb.shift()()
    }
  }
};
function Db(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Db.apply(k, d) : d && "function" == typeof d.Ca && d.Ca()
  }
}
;function O(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
y(O, Cb);
q = O.prototype;
q.v = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.ha = o;
q.defaultPrevented = o;
q.Oa = j;
q.preventDefault = function() {
  this.defaultPrevented = j;
  this.Oa = o
};
function Eb(a) {
  Eb[" "](a);
  return a
}
Eb[" "] = fa;
function Fb(a, b) {
  a && this.Ia(a, b)
}
y(Fb, O);
q = Fb.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = o;
q.altKey = o;
q.shiftKey = o;
q.metaKey = o;
q.ab = k;
q.Ia = function(a, b) {
  var c = this.type = a.type;
  O.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ca) {
      var e;
      a: {
        try {
          Eb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = o
      }
      e || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = B || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = B || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.ab = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ha
};
q.preventDefault = function() {
  Fb.ka.preventDefault.call(this);
  var a = this.ab;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = o, Bb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.v = function() {
  Fb.ka.v.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ab = k
};
var Gb = {}, P = {}, E = {}, Hb = {};
function Ib(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var f = 0;f < b.length;f++) {
        Ib(a, b[f], c, d, e)
      }
      return k
    }
    var d = !!d, i = P;
    b in i || (i[b] = {f:0, A:0});
    i = i[b];
    d in i || (i[d] = {f:0, A:0}, i.f++);
    var i = i[d], m = ia(a), l;
    i.A++;
    if(i[m]) {
      l = i[m];
      for(f = 0;f < l.length;f++) {
        if(i = l[f], i.ta == c && i.bb == e) {
          if(i.ia) {
            break
          }
          return l[f].key
        }
      }
    }else {
      l = i[m] = [], i.f++
    }
    f = Jb();
    f.src = a;
    i = new yb;
    i.Ia(c, f, a, b, d, e);
    c = i.key;
    f.key = c;
    l.push(i);
    Gb[c] = i;
    E[m] || (E[m] = []);
    E[m].push(i);
    a.addEventListener ? (a == r || !a.pb) && a.addEventListener(b, f, d) : a.attachEvent(b in Hb ? Hb[b] : Hb[b] = "on" + b, f);
    return c
  }
  g(Error("Invalid event type"))
}
function Jb() {
  var a = Kb, b = Ab ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Lb(a, b, c, d, e) {
  if(t(b)) {
    for(var f = 0;f < b.length;f++) {
      Lb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = P;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].ta == c && a[f].capture == d && a[f].bb == e) {
          Mb(a[f].key);
          break
        }
      }
    }
  }
}
function Mb(a) {
  if(!Gb[a]) {
    return o
  }
  var b = Gb[a];
  if(b.ia) {
    return o
  }
  var c = b.src, d = b.type, e = b.Kb, f = b.capture;
  c.removeEventListener ? (c == r || !c.pb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Hb ? Hb[d] : Hb[d] = "on" + d, e);
  c = ia(c);
  e = P[d][f][c];
  if(E[c]) {
    var i = E[c], m = Wa(i, b);
    0 <= m && F.splice.call(i, m, 1);
    0 == i.length && delete E[c]
  }
  b.ia = j;
  e.Db = j;
  Nb(d, f, c, e);
  delete Gb[a];
  return j
}
function Nb(a, b, c, d) {
  if(!d.Ja && d.Db) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].ia ? d[e].Kb.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Db = o;
    0 == f && (delete P[a][b][c], P[a][b].f--, 0 == P[a][b].f && (delete P[a][b], P[a].f--), 0 == P[a].f && delete P[a])
  }
}
function Ob(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Mb(f.key), c++
        }
      }
    })
  }else {
    if(a = ia(a), E[a]) {
      for(var a = E[a], e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Mb(f.key), c++
        }
      }
    }
  }
}
function Pb(a, b, c, d, e) {
  var f = 1, b = ia(b);
  if(a[b]) {
    a.A--;
    a = a[b];
    a.Ja ? a.Ja++ : a.Ja = 1;
    try {
      for(var i = a.length, m = 0;m < i;m++) {
        var l = a[m];
        l && !l.ia && (f &= Qb(l, e) !== o)
      }
    }finally {
      a.Ja--, Nb(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Qb(a, b) {
  a.nb && Mb(a.key);
  return a.handleEvent(b)
}
function Kb(a, b) {
  if(!Gb[a]) {
    return j
  }
  var c = Gb[a], d = c.type, e = P;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, i;
  if(!Ab) {
    f = b || ea("window.event");
    var m = j in e, l = o in e;
    if(m) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var n = o;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(s) {
            n = j
          }
        }
        if(n || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    n = new Fb;
    n.Ia(f, this);
    f = j;
    try {
      if(m) {
        for(var u = [], wa = n.currentTarget;wa;wa = wa.parentNode) {
          u.push(wa)
        }
        i = e[j];
        i.A = i.f;
        for(var D = u.length - 1;!n.ha && 0 <= D && i.A;D--) {
          n.currentTarget = u[D], f &= Pb(i, u[D], d, j, n)
        }
        if(l) {
          i = e[o];
          i.A = i.f;
          for(D = 0;!n.ha && D < u.length && i.A;D++) {
            n.currentTarget = u[D], f &= Pb(i, u[D], d, o, n)
          }
        }
      }else {
        f = Qb(c, n)
      }
    }finally {
      u && (u.length = 0), n.Ca()
    }
    return f
  }
  d = new Fb(b, this);
  try {
    f = Qb(c, d)
  }finally {
    d.Ca()
  }
  return f
}
;function Rb() {
}
y(Rb, Cb);
q = Rb.prototype;
q.pb = j;
q.hb = k;
q.addEventListener = function(a, b, c, d) {
  Ib(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Lb(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = P;
  if(b in c) {
    if(v(a)) {
      a = new O(a, this)
    }else {
      if(a instanceof O) {
        a.target = a.target || this
      }else {
        var d = a, a = new O(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.hb) {
        e.push(f)
      }
      f = c[j];
      f.A = f.f;
      for(var i = e.length - 1;!a.ha && 0 <= i && f.A;i--) {
        a.currentTarget = e[i], d &= Pb(f, e[i], a.type, j, a) && a.Oa != o
      }
    }
    if(o in c) {
      if(f = c[o], f.A = f.f, b) {
        for(i = 0;!a.ha && i < e.length && f.A;i++) {
          a.currentTarget = e[i], d &= Pb(f, e[i], a.type, o, a) && a.Oa != o
        }
      }else {
        for(e = this;!a.ha && e && f.A;e = e.hb) {
          a.currentTarget = e, d &= Pb(f, e, a.type, o, a) && a.Oa != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.v = function() {
  Rb.ka.v.call(this);
  Ob(this);
  this.hb = k
};
function Sb(a, b) {
  this.qa = a || 1;
  this.za = b || Tb;
  this.Va = w(this.jc, this);
  this.gb = x()
}
y(Sb, Rb);
Sb.prototype.enabled = o;
var Tb = r.window;
q = Sb.prototype;
q.Q = k;
q.setInterval = function(a) {
  this.qa = a;
  this.Q && this.enabled ? (this.stop(), this.start()) : this.Q && this.stop()
};
q.jc = function() {
  if(this.enabled) {
    var a = x() - this.gb;
    0 < a && a < 0.8 * this.qa ? this.Q = this.za.setTimeout(this.Va, this.qa - a) : (this.dispatchEvent(Ub), this.enabled && (this.Q = this.za.setTimeout(this.Va, this.qa), this.gb = x()))
  }
};
q.start = function() {
  this.enabled = j;
  this.Q || (this.Q = this.za.setTimeout(this.Va, this.qa), this.gb = x())
};
q.stop = function() {
  this.enabled = o;
  this.Q && (this.za.clearTimeout(this.Q), this.Q = k)
};
q.v = function() {
  Sb.ka.v.call(this);
  this.stop();
  delete this.za
};
var Ub = "tick";
function Vb(a) {
  this.e = a;
  this.j = []
}
y(Vb, Cb);
var Wb = [];
function Xb(a, b, c, d, e, f) {
  t(c) || (Wb[0] = c, c = Wb);
  for(var i = 0;i < c.length;i++) {
    a.j.push(Ib(b, c[i], d || a, e || o, f || a.e || a))
  }
}
Vb.prototype.v = function() {
  Vb.ka.v.call(this);
  Xa(this.j, Mb);
  this.j.length = 0
};
Vb.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Q(a, b, c, d, e) {
  this.b = a;
  this.a = b;
  this.U = c;
  this.B = d;
  this.xa = e || 1;
  this.ya = Yb;
  this.$a = new Vb(this);
  this.La = new Sb;
  this.La.setInterval(Zb)
}
q = Q.prototype;
q.s = k;
q.H = o;
q.na = k;
q.kb = k;
q.wa = k;
q.S = k;
q.t = k;
q.T = k;
q.l = k;
q.Aa = 0;
q.I = k;
q.la = k;
q.q = k;
q.h = -1;
q.Nb = j;
q.V = o;
var Yb = 45E3, Zb = 250;
function $b(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var ac = {}, bc = {};
function cc() {
  return!A || Ma(10)
}
q = Q.prototype;
q.P = p("s");
q.setTimeout = p("ya");
function dc(a, b, c) {
  a.S = L(b.n());
  a.T = c;
  a.qb = j;
  ec(a, k)
}
function fc(a, b, c, d, e) {
  a.S = L(b.n());
  a.T = k;
  a.qb = c;
  e && (a.Nb = o);
  ec(a, d)
}
function ec(a, b) {
  a.wa = x();
  gc(a);
  a.t = a.S.n();
  ob(a.t, "t", a.xa);
  a.Aa = 0;
  a.l = a.b.Ya(a.b.Pa() ? b : k);
  Xb(a.$a, a.l, "readystatechange", a.lc, o, a);
  var c;
  if(a.s) {
    c = a.s;
    var d = {}, e;
    for(e in c) {
      d[e] = c[e]
    }
    c = d
  }else {
    c = {}
  }
  a.T ? (a.la = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.l.send(a.t, a.la, a.T, c)) : (a.la = "GET", a.Nb && !B && (c.Connection = "close"), a.l.send(a.t, a.la, k, c));
  a.b.D(hc);
  if(d = a.T) {
    c = "";
    d = d.split("&");
    for(e = 0;e < d.length;e++) {
      var f = d[e].split("=");
      if(1 < f.length) {
        var i = f[0], f = f[1], m = i.split("_");
        c = 2 <= m.length && "type" == m[1] ? c + (i + "=" + f + "&") : c + (i + "=redacted&")
      }
    }
  }else {
    c = k
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.xa + "]: " + a.la + "\n" + a.t + "\n" + c)
}
q.lc = function(a) {
  a = a.target;
  try {
    if(a == this.l) {
      a: {
        var b = R(this.l), c = this.l.fa, d = ic(this.l);
        if(!cc() || B && !C("420+")) {
          if(4 > b) {
            break a
          }
        }else {
          if(3 > b || 3 == b && !Ba && !jc(this.l)) {
            break a
          }
        }
        !this.V && (4 == b && c != kc) && (c == lc || 0 >= d ? this.b.D(mc) : this.b.D(nc));
        oc(this);
        var e = ic(this.l);
        this.h = e;
        var f = jc(this.l);
        f || this.a.debug("No response text for uri " + this.t + " status " + e);
        this.H = 200 == e;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.xa + "]: " + this.la + "\n" + this.t + "\n" + b + " " + e);
        if(this.H) {
          if(4 == b && S(this), this.qb ? (pc(this, b, f), Ba && 3 == b && (Xb(this.$a, this.La, Ub, this.hc), this.La.start())) : (qc(this.a, this.B, f, k), rc(this, f)), this.H && !this.V) {
            4 == b ? this.b.ga(this) : (this.H = o, gc(this))
          }
        }else {
          this.q = 400 == e && 0 < f.indexOf("Unknown SID") ? 3 : 0, T(), qc(this.a, this.B, f), S(this), sc(this)
        }
      }
    }else {
      this.a.ma("Called back with an unexpected xmlhttp")
    }
  }catch(i) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.l && jc(this.l) ? tc(this.a, i, "ResponseText: " + jc(this.l)) : tc(this.a, i, "No response text")
  }finally {
  }
};
function pc(a, b, c) {
  for(var d = j;!a.V && a.Aa < c.length;) {
    var e = uc(a, c);
    if(e == bc) {
      4 == b && (a.q = 4, T(), d = o);
      qc(a.a, a.B, k, "[Incomplete Response]");
      break
    }else {
      if(e == ac) {
        a.q = 4;
        T();
        qc(a.a, a.B, c, "[Invalid Chunk]");
        d = o;
        break
      }else {
        qc(a.a, a.B, e, k), rc(a, e)
      }
    }
  }
  4 == b && 0 == c.length && (a.q = 1, T(), d = o);
  a.H = a.H && d;
  d || (qc(a.a, a.B, c, "[Invalid Chunked Response]"), S(a), sc(a))
}
q.hc = function() {
  var a = R(this.l), b = jc(this.l);
  this.Aa < b.length && (oc(this), pc(this, a, b), this.H && 4 != a && gc(this))
};
function uc(a, b) {
  var c = a.Aa, d = b.indexOf("\n", c);
  if(-1 == d) {
    return bc
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return ac
  }
  d += 1;
  if(d + c > b.length) {
    return bc
  }
  var e = b.substr(d, c);
  a.Aa = d + c;
  return e
}
function vc(a, b) {
  a.wa = x();
  gc(a);
  var c = b ? window.location.hostname : "";
  a.t = a.S.n();
  K(a.t, "DOMAIN", c);
  K(a.t, "t", a.xa);
  try {
    a.I = new ActiveXObject("htmlfile")
  }catch(d) {
    a.a.G("ActiveX blocked");
    S(a);
    a.q = 7;
    T();
    sc(a);
    return
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"<\/script>');
  e += "</body></html>";
  a.I.open();
  a.I.write(e);
  a.I.close();
  a.I.parentWindow.m = w(a.fc, a);
  a.I.parentWindow.d = w(a.Jb, a, j);
  a.I.parentWindow.rpcClose = w(a.Jb, a, o);
  c = a.I.createElement("div");
  a.I.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.t + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.xa + "]: GET\n" + a.t);
  a.b.D(hc)
}
q.fc = function(a) {
  U(w(this.ec, this, a), 0)
};
q.ec = function(a) {
  if(!this.V) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + wc(b, a));
    oc(this);
    rc(this, a);
    gc(this)
  }
};
q.Jb = function(a) {
  U(w(this.dc, this, a), 0)
};
q.dc = function(a) {
  this.V || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), S(this), this.H = a, this.b.ga(this), this.b.D(xc))
};
q.Xb = function() {
  oc(this);
  this.b.ga(this)
};
q.cancel = function() {
  this.V = j;
  S(this)
};
function gc(a) {
  a.kb = x() + a.ya;
  yc(a, a.ya)
}
function yc(a, b) {
  a.na != k && g(Error("WatchDog timer not null"));
  a.na = U(w(a.gc, a), b)
}
function oc(a) {
  a.na && (r.clearTimeout(a.na), a.na = k)
}
q.gc = function() {
  this.na = k;
  var a = x();
  0 <= a - this.kb ? (this.H && this.a.G("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.t), this.b.D(mc), S(this), this.q = 2, T(), sc(this)) : (this.a.ma("WatchDog timer called too early"), yc(this, this.kb - a))
};
function sc(a) {
  !a.b.yb() && !a.V && a.b.ga(a)
}
function S(a) {
  oc(a);
  a.La.stop();
  var b = a.$a;
  Xa(b.j, Mb);
  b.j.length = 0;
  a.l && (b = a.l, a.l = k, b.abort());
  a.I && (a.I = k)
}
q.vb = ba("q");
function rc(a, b) {
  try {
    a.b.Gb(a, b), a.b.D(xc)
  }catch(c) {
    tc(a.a, c, "Error in httprequest callback")
  }
}
;function zc(a) {
  return eval("(" + a + ")")
}
function Ac(a) {
  var b = [];
  Bc(new Cc, a, b);
  return b.join("")
}
function Cc() {
  this.Na = h
}
function Bc(a, b, c) {
  switch(typeof b) {
    case "string":
      Dc(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == k) {
        c.push("null");
        break
      }
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Bc(a, a.Na ? a.Na.call(b, "" + f, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Dc(f, c), c.push(":"), Bc(a, a.Na ? a.Na.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      g(Error("Unknown type: " + typeof b))
  }
}
var Ec = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Fc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Dc(a, b) {
  b.push('"', a.replace(Fc, function(a) {
    if(a in Ec) {
      return Ec[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Ec[a] = e + b.toString(16)
  }), '"')
}
;function Gc(a) {
  return Hc(a || arguments.callee.caller, [])
}
function Hc(a, b) {
  var c = [];
  if(0 <= Wa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ic(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Ic(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Hc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ic(a) {
  if(Jc[a]) {
    return Jc[a]
  }
  a = "" + a;
  if(!Jc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Jc[a] = b ? b[1] : "[Anonymous]"
  }
  return Jc[a]
}
var Jc = {};
function Kc(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Kc.prototype.ub = k;
Kc.prototype.tb = k;
var Lc = 0;
Kc.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Lc++;
  d || x();
  this.sa = a;
  this.Zb = b;
  delete this.ub;
  delete this.tb
};
Kc.prototype.Ob = p("sa");
function V(a) {
  this.$b = a
}
V.prototype.Ka = k;
V.prototype.sa = k;
V.prototype.Wa = k;
V.prototype.wb = k;
function Mc(a, b) {
  this.name = a;
  this.value = b
}
Mc.prototype.toString = ba("name");
var Nc = new Mc("SEVERE", 1E3), Oc = new Mc("WARNING", 900), Pc = new Mc("INFO", 800), Qc = new Mc("CONFIG", 700), Rc = new Mc("FINE", 500);
q = V.prototype;
q.getParent = ba("Ka");
q.Ob = p("sa");
function Sc(a) {
  if(a.sa) {
    return a.sa
  }
  if(a.Ka) {
    return Sc(a.Ka)
  }
  Pa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Sc(this).value) {
    a = this.Wb(a, b, c);
    b = "log:" + a.Zb;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.wb) {
        for(var e = 0, f = h;f = c.wb[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.Wb = function(a, b, c) {
  var d = new Kc(a, "" + b, this.$b);
  if(c) {
    d.ub = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var i;
      var m = ea("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:m, stack:"Not available"}
      }else {
        var l, n, s = o;
        try {
          l = c.lineNumber || c.mc || "Not available"
        }catch(u) {
          l = "Not available", s = j
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || m
        }catch(wa) {
          n = "Not available", s = j
        }
        i = s || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:l, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + oa(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + oa(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + oa(Gc(f) + "-> ")
    }catch(D) {
      e = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.tb = e
  }
  return d
};
q.G = function(a, b) {
  this.log(Nc, a, b)
};
q.ma = function(a, b) {
  this.log(Oc, a, b)
};
q.info = function(a, b) {
  this.log(Pc, a, b)
};
function W(a, b) {
  a.log(Rc, b, h)
}
var Tc = {}, Uc = k;
function Vc(a) {
  Uc || (Uc = new V(""), Tc[""] = Uc, Uc.Ob(Qc));
  var b;
  if(!(b = Tc[a])) {
    b = new V(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Vc(a.substr(0, c));
    c.Wa || (c.Wa = {});
    c.Wa[d] = b;
    b.Ka = c;
    Tc[a] = b
  }
  return b
}
;function X() {
  this.p = Vc("goog.net.BrowserChannel")
}
function qc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + wc(a, c) + (d ? " " + d : ""))
}
X.prototype.debug = function(a) {
  this.info(a)
};
function tc(a, b, c) {
  a.G((c || "Exception") + b)
}
X.prototype.info = function(a) {
  this.p.info(a)
};
X.prototype.ma = function(a) {
  this.p.ma(a)
};
X.prototype.G = function(a) {
  this.p.G(a)
};
function wc(a, b) {
  if(!b || b == Wc) {
    return b
  }
  try {
    for(var c = zc(b), d = 0;d < c.length;d++) {
      if(t(c[d])) {
        var e = c[d];
        if(!(2 > e.length)) {
          var f = e[1];
          if(t(f) && !(1 > f.length)) {
            var i = f[0];
            if("noop" != i && "stop" != i) {
              for(var m = 1;m < f.length;m++) {
                f[m] = ""
              }
            }
          }
        }
      }
    }
    return Ac(c)
  }catch(l) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b
  }
}
;var kc = 7, lc = 8;
function Xc(a) {
  this.headers = new ab;
  this.oa = a || k
}
y(Xc, Rb);
Xc.prototype.p = Vc("goog.net.XhrIo");
var Yc = /^https?$/i;
q = Xc.prototype;
q.R = o;
q.g = k;
q.Sa = k;
q.fb = "";
q.Ab = "";
q.fa = 0;
q.q = "";
q.Za = o;
q.Ha = o;
q.cb = o;
q.Z = o;
q.Qa = 0;
q.$ = k;
q.Mb = "";
q.kc = o;
q.send = function(a, b, c, d) {
  this.g && g(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.fb = a;
  this.q = "";
  this.fa = 0;
  this.Ab = b;
  this.Za = o;
  this.R = j;
  this.g = this.oa ? vb(this.oa) : vb(tb);
  this.Sa = this.oa ? this.oa.Ba || (this.oa.Ba = xb(this.oa)) : tb.Ba || (tb.Ba = xb(tb));
  this.g.onreadystatechange = w(this.Fb, this);
  try {
    W(this.p, Y(this, "Opening Xhr")), this.cb = j, this.g.open(b, a, j), this.cb = o
  }catch(e) {
    W(this.p, Y(this, "Error opening Xhr: " + e.message));
    Zc(this, e);
    return
  }
  var a = c || "", f = this.headers.n();
  d && G(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.ca("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  G(f, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  this.Mb && (this.g.responseType = this.Mb);
  "withCredentials" in this.g && (this.g.withCredentials = this.kc);
  try {
    this.$ && (Tb.clearTimeout(this.$), this.$ = k), 0 < this.Qa && (W(this.p, Y(this, "Will abort after " + this.Qa + "ms if incomplete")), this.$ = Tb.setTimeout(w(this.ya, this), this.Qa)), W(this.p, Y(this, "Sending request")), this.Ha = j, this.g.send(a), this.Ha = o
  }catch(i) {
    W(this.p, Y(this, "Send error: " + i.message)), Zc(this, i)
  }
};
q.ya = function() {
  "undefined" != typeof da && this.g && (this.q = "Timed out after " + this.Qa + "ms, aborting", this.fa = lc, W(this.p, Y(this, this.q)), this.dispatchEvent("timeout"), this.abort(lc))
};
function Zc(a, b) {
  a.R = o;
  a.g && (a.Z = j, a.g.abort(), a.Z = o);
  a.q = b;
  a.fa = 5;
  $c(a);
  ad(a)
}
function $c(a) {
  a.Za || (a.Za = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function(a) {
  this.g && this.R && (W(this.p, Y(this, "Aborting")), this.R = o, this.Z = j, this.g.abort(), this.Z = o, this.fa = a || kc, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ad(this))
};
q.v = function() {
  this.g && (this.R && (this.R = o, this.Z = j, this.g.abort(), this.Z = o), ad(this, j));
  Xc.ka.v.call(this)
};
q.Fb = function() {
  !this.cb && !this.Ha && !this.Z ? this.cc() : bd(this)
};
q.cc = function() {
  bd(this)
};
function bd(a) {
  if(a.R && "undefined" != typeof da) {
    if(a.Sa[1] && 4 == R(a) && 2 == ic(a)) {
      W(a.p, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.Ha && 4 == R(a)) {
        Tb.setTimeout(w(a.Fb, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == R(a)) {
          W(a.p, Y(a, "Request complete"));
          a.R = o;
          try {
            var b = ic(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 304:
                ;
                case 1223:
                  d = j;
                  break a;
                default:
                  d = o
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var f = ("" + a.fb).match(Qa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                e = !Yc.test(f ? f.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.fa = 6;
              var m;
              try {
                m = 2 < R(a) ? a.g.statusText : ""
              }catch(l) {
                W(a.p, "Can not get status: " + l.message), m = ""
              }
              a.q = m + " [" + ic(a) + "]";
              $c(a)
            }
          }finally {
            ad(a)
          }
        }
      }
    }
  }
}
function ad(a, b) {
  if(a.g) {
    var c = a.g, d = a.Sa[0] ? fa : k;
    a.g = k;
    a.Sa = k;
    a.$ && (Tb.clearTimeout(a.$), a.$ = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.p.G("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.isActive = function() {
  return!!this.g
};
function R(a) {
  return a.g ? a.g.readyState : 0
}
function ic(a) {
  try {
    return 2 < R(a) ? a.g.status : -1
  }catch(b) {
    return a.p.ma("Can not get status: " + b.message), -1
  }
}
function jc(a) {
  try {
    return a.g ? a.g.responseText : ""
  }catch(b) {
    return W(a.p, "Can not get responseText: " + b.message), ""
  }
}
q.vb = function() {
  return v(this.q) ? this.q : "" + this.q
};
function Y(a, b) {
  return b + " [" + a.Ab + " " + a.fb + " " + ic(a) + "]"
}
;function cd() {
  this.Lb = x()
}
new cd;
cd.prototype.set = p("Lb");
cd.prototype.reset = function() {
  this.set(x())
};
cd.prototype.get = ba("Lb");
function dd(a, b, c, d, e) {
  (new X).debug("TestLoadImageWithRetries: " + e);
  if(0 == d) {
    c(o)
  }else {
    var f = e || 0;
    d--;
    ed(a, b, function(e) {
      e ? c(j) : r.setTimeout(function() {
        dd(a, b, c, d, f)
      }, f)
    })
  }
}
function ed(a, b, c) {
  var d = new X;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image, f = k;
  createHandler = function(a, b) {
    return function() {
      try {
        d.debug("TestLoadImage: " + b), e.onload = k, e.onerror = k, e.onabort = k, e.ontimeout = k, r.clearTimeout(f), c(a)
      }catch(l) {
        tc(d, l)
      }
    }
  };
  e.onload = createHandler(j, "loaded");
  e.onerror = createHandler(o, "error");
  e.onabort = createHandler(o, "abort");
  e.ontimeout = createHandler(o, "timeout");
  f = r.setTimeout(function() {
    if(e.ontimeout) {
      e.ontimeout()
    }
  }, b);
  e.src = a
}
;function fd(a, b) {
  this.b = a;
  this.a = b
}
q = fd.prototype;
q.s = k;
q.u = k;
q.Ma = o;
q.Pb = k;
q.Ea = k;
q.eb = k;
q.F = k;
q.c = k;
q.h = -1;
q.L = k;
q.Ua = k;
q.P = p("s");
q.Xa = function(a) {
  this.F = a;
  a = gd(this.b, this.F);
  T();
  ob(a, "MODE", "init");
  this.u = new Q(this, this.a, h, h, h);
  this.u.P(this.s);
  fc(this.u, a, o, k, j);
  this.c = 0;
  this.Pb = x()
};
q.Sb = function(a) {
  if(a) {
    this.c = 2, hd(this)
  }else {
    T();
    var b = this.b;
    b.a.debug("Test Connection Blocked");
    b.h = b.W.h;
    Z(b, 9)
  }
  a && this.D(nc)
};
function hd(a) {
  a.a.debug("TestConnection: starting stage 2");
  a.u = new Q(a, a.a, h, h, h);
  a.u.P(a.s);
  var b = id(a.b, a.L, a.F);
  T();
  if(cc()) {
    ob(b, "TYPE", "xmlhttp"), fc(a.u, b, o, a.L, o)
  }else {
    ob(b, "TYPE", "html");
    var c = a.u, a = Boolean(a.L);
    c.S = L(b.n());
    vc(c, a)
  }
}
q.Ya = function(a) {
  return this.b.Ya(a)
};
q.abort = function() {
  this.u && (this.u.cancel(), this.u = k);
  this.h = -1
};
q.yb = ca(o);
q.Gb = function(a, b) {
  this.h = a.h;
  if(0 == this.c) {
    if(this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = zc(b)
      }catch(d) {
        tc(this.a, d);
        jd(this.b, this);
        return
      }
      this.L = this.b.correctHostPrefix(c[0]);
      this.Ua = c[1]
    }else {
      this.a.debug("TestConnection: Null responseText"), jd(this.b, this)
    }
  }else {
    if(2 == this.c) {
      if(this.Ma) {
        T(), this.eb = x()
      }else {
        if("11111" == b) {
          if(T(), this.Ma = j, this.Ea = x(), c = this.Ea - this.Pb, cc() || 500 > c) {
            this.h = 200, this.u.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), T(), kd(this.b, this, j)
          }
        }else {
          T(), this.Ea = this.eb = x(), this.Ma = o
        }
      }
    }
  }
};
q.ga = function() {
  this.h = this.u.h;
  if(this.u.H) {
    if(0 == this.c) {
      if(this.a.debug("TestConnection: request complete for initial check"), this.Ua) {
        this.c = 1;
        var a = ld(this.b, this.Ua, "/mail/images/cleardot.gif");
        L(a);
        dd(a.toString(), 5E3, w(this.Sb, this), 3, 2E3);
        this.D(hc)
      }else {
        this.c = 2, hd(this)
      }
    }else {
      2 == this.c && (this.a.debug("TestConnection: request complete for stage 2"), a = o, (a = cc() ? this.Ma : 200 > this.eb - this.Ea ? o : j) ? (this.a.debug("Test connection succeeded; using streaming connection"), T(), kd(this.b, this, j)) : (this.a.debug("Test connection failed; not using streaming"), T(), kd(this.b, this, o)))
    }
  }else {
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? T() : 2 == this.c && T(), jd(this.b, this)
  }
};
q.Pa = function() {
  return this.b.Pa()
};
q.isActive = function() {
  return this.b.isActive()
};
q.D = function(a) {
  this.b.D(a)
};
function md(a) {
  this.ob = a || k;
  this.c = nd;
  this.r = [];
  this.N = [];
  this.a = new X
}
function od(a, b) {
  this.Cb = a;
  this.map = b
}
q = md.prototype;
q.s = k;
q.pa = k;
q.o = k;
q.k = k;
q.F = k;
q.Fa = k;
q.mb = k;
q.L = k;
q.Rb = j;
q.ua = 0;
q.ac = 0;
q.Da = o;
q.e = k;
q.C = k;
q.J = k;
q.X = k;
q.W = k;
q.jb = k;
q.Qb = j;
q.ra = -1;
q.Bb = -1;
q.h = -1;
q.Y = 0;
q.aa = 0;
q.rb = zc;
q.ba = 8;
var nd = 1, pd = new Rb;
function qd(a) {
  O.call(this, "statevent", a)
}
y(qd, O);
function rd(a, b) {
  O.call(this, "timingevent", a);
  this.size = b
}
y(rd, O);
var hc = 1, nc = 2, mc = 3, xc = 4;
function sd(a) {
  O.call(this, "serverreachability", a)
}
y(sd, O);
var Wc = "y2f%";
q = md.prototype;
q.Xa = function(a, b, c, d, e) {
  this.a.debug("connect()");
  T();
  this.F = b;
  this.pa = c || {};
  d && e !== h && (this.pa.OSID = d, this.pa.OAID = e);
  this.a.debug("connectTest_()");
  td(this) && (this.W = new fd(this, this.a), this.W.P(this.s), this.W.Xa(a))
};
function ud(a) {
  a.W && (a.W.abort(), a.W = k);
  a.k && (a.k.cancel(), a.k = k);
  a.J && (r.clearTimeout(a.J), a.J = k);
  vd(a);
  a.o && (a.o.cancel(), a.o = k);
  a.C && (r.clearTimeout(a.C), a.C = k)
}
q.P = p("s");
q.yb = function() {
  return 0 == this.c
};
function wd(a) {
  !a.o && !a.C && (a.C = U(w(a.Ib, a), 0), a.Y = 0)
}
q.Ib = function(a) {
  this.C = k;
  this.a.debug("startForwardChannel_");
  if(td(this)) {
    if(this.c == nd) {
      if(a) {
        this.a.G("Not supposed to retry the open")
      }else {
        this.a.debug("open_()");
        this.ua = Math.floor(1E5 * Math.random());
        var a = this.ua++, b = new Q(this, this.a, "", a, h);
        b.P(this.s);
        var c = xd(this), d = this.Fa.n();
        K(d, "RID", a);
        this.ob && K(d, "CVER", this.ob);
        yd(this, d);
        dc(b, d, c);
        this.o = b;
        this.c = 2
      }
    }else {
      3 == this.c && (a ? zd(this, a) : 0 == this.r.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.o ? this.a.G("startForwardChannel_ returned: connection already in progress") : (zd(this), this.a.debug("startForwardChannel_ finished, sent request")))
    }
  }
};
function zd(a, b) {
  var c, d;
  b ? 6 < a.ba ? (a.r = a.N.concat(a.r), a.N.length = 0, c = a.ua - 1, d = xd(a)) : (c = b.B, d = b.T) : (c = a.ua++, d = xd(a));
  var e = a.Fa.n();
  K(e, "SID", a.U);
  K(e, "RID", c);
  K(e, "AID", a.ra);
  yd(a, e);
  c = new Q(a, a.a, a.U, c, a.Y + 1);
  c.P(a.s);
  c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
  a.o = c;
  dc(c, e, d)
}
function yd(a, b) {
  if(a.e) {
    var c = a.e.getAdditionalParams(a);
    c && G(c, function(a, c) {
      K(b, c, a)
    })
  }
}
function xd(a) {
  var b = Math.min(a.r.length, 1E3), c = ["count=" + b], d;
  6 < a.ba && 0 < b ? (d = a.r[0].Cb, c.push("ofs=" + d)) : d = 0;
  for(var e = 0;e < b;e++) {
    var f = a.r[e].Cb, i = a.r[e].map, f = 6 >= a.ba ? e : f - d;
    try {
      G(i, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(m) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, i)
    }
  }
  a.N = a.N.concat(a.r.splice(0, b));
  return c.join("&")
}
function Ad(a) {
  !a.k && !a.J && (a.lb = 1, a.J = U(w(a.Hb, a), 0), a.aa = 0)
}
function Bd(a) {
  if(a.k || a.J) {
    return a.a.G("Request already in progress"), o
  }
  if(3 <= a.aa) {
    return o
  }
  a.a.debug("Going to retry GET");
  a.lb++;
  a.J = U(w(a.Hb, a), Cd(a, a.aa));
  a.aa++;
  return j
}
q.Hb = function() {
  this.J = k;
  if(td(this)) {
    this.a.debug("Creating new HttpRequest");
    this.k = new Q(this, this.a, this.U, "rpc", this.lb);
    this.k.P(this.s);
    var a = this.mb.n();
    K(a, "RID", "rpc");
    K(a, "SID", this.U);
    K(a, "CI", this.jb ? "0" : "1");
    K(a, "AID", this.ra);
    yd(this, a);
    if(cc()) {
      K(a, "TYPE", "xmlhttp"), fc(this.k, a, j, this.L, o)
    }else {
      K(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.L);
      b.S = L(a.n());
      vc(b, c)
    }
    this.a.debug("New Request created")
  }
};
function td(a) {
  if(a.e) {
    var b = a.e.okToMakeRequest(a);
    if(0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), o
    }
  }
  return j
}
function kd(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.jb = a.Qb && c;
  a.h = b.h;
  a.a.debug("connectChannel_()");
  a.Ub(nd, 0);
  a.Fa = gd(a, a.F);
  wd(a)
}
function jd(a, b) {
  a.a.debug("Test Connection Failed");
  a.h = b.h;
  Z(a, 2)
}
q.Gb = function(a, b) {
  if(!(0 == this.c || this.k != a && this.o != a)) {
    if(this.h = a.h, this.o == a && 3 == this.c) {
      if(7 < this.ba) {
        var c;
        try {
          c = this.rb(b)
        }catch(d) {
          c = k
        }
        if(t(c) && 3 == c.length) {
          var e = c;
          if(0 == e[0]) {
            a: {
              if(this.a.debug("Server claims our backchannel is missing."), this.J) {
                this.a.debug("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.wa + 3E3 < this.o.wa) {
                    vd(this), this.k.cancel(), this.k = k
                  }else {
                    break a
                  }
                }else {
                  this.a.ma("We do not have a BackChannel established")
                }
                Bd(this);
                T()
              }
            }
          }else {
            this.Bb = e[1], c = this.Bb - this.ra, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && (this.jb && 0 == this.aa) && !this.X && (this.X = U(w(this.bc, this), 6E3)))
          }
        }else {
          this.a.debug("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != Wc && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && vd(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.rb(b);
        for(var e = this.e && this.e.channelHandleMultipleArrays ? [] : k, f = 0;f < c.length;f++) {
          var i = c[f];
          this.ra = i[0];
          i = i[1];
          2 == this.c ? "c" == i[0] ? (this.U = i[1], this.L = this.correctHostPrefix(i[2]), i = i[3], this.ba = i != k ? i : 6, this.c = 3, this.e && this.e.channelOpened(this), this.mb = id(this, this.L, this.F), Ad(this)) : "stop" == i[0] && Z(this, 7) : 3 == this.c && ("stop" == i[0] ? (e && e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != i[0] && (e ? e.push(i) : this.e && this.e.channelHandleArray(this, i)), this.aa = 0)
        }
        e && e.length && this.e.channelHandleMultipleArrays(this, e)
      }
    }
  }
};
q.correctHostPrefix = function(a) {
  return this.Rb ? this.e ? this.e.correctHostPrefix(a) : a : k
};
q.bc = function() {
  this.X != k && (this.X = k, this.k.cancel(), this.k = k, Bd(this), T())
};
function vd(a) {
  a.X != k && (r.clearTimeout(a.X), a.X = k)
}
q.ga = function(a) {
  this.a.debug("Request complete");
  var b;
  if(this.k == a) {
    vd(this), this.k = k, b = 2
  }else {
    if(this.o == a) {
      this.o = k, b = 1
    }else {
      return
    }
  }
  this.h = a.h;
  if(0 != this.c) {
    if(a.H) {
      1 == b ? (x(), pd.dispatchEvent(new rd(pd, a.T ? a.T.length : 0)), wd(this), this.N.length = 0) : Ad(this)
    }else {
      var c = a.vb();
      if(3 == c || 7 == c || 0 == c && 0 < this.h) {
        this.a.debug("Not retrying due to error type")
      }else {
        this.a.debug("Maybe retrying, last error: " + $b(c, this.h));
        var d;
        if(d = 1 == b) {
          this.o || this.C ? (this.a.G("Request already in progress"), d = o) : this.c == nd || this.Y >= (this.Da ? 0 : 2) ? d = o : (this.a.debug("Going to retry POST"), this.C = U(w(this.Ib, this, a), Cd(this, this.Y)), this.Y++, d = j)
        }
        if(d || 2 == b && Bd(this)) {
          return
        }
        this.a.debug("Exceeded max number of retries")
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2)
      }
    }
  }
};
function Cd(a, b) {
  var c = 5E3 + Math.floor(1E4 * Math.random());
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b
}
q.Ub = function(a) {
  0 <= Wa(arguments, this.c) || g(Error("Unexpected channel state: " + this.c))
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(2 == b || 9 == b) {
    var c = k;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = w(a.ic, a);
    c || (c = new I("//www.google.com/images/cleardot.gif"), L(c));
    ed(c.toString(), 1E4, d)
  }else {
    T()
  }
  Dd(a, b)
}
q.ic = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), T()) : (this.a.info("Failed to ping google.com"), T(), Dd(this, 8))
};
function Dd(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.c = 0;
  a.e && a.e.channelError(a, b);
  Ed(a);
  ud(a)
}
function Ed(a) {
  a.c = 0;
  a.h = -1;
  if(a.e) {
    if(0 == a.N.length && 0 == a.r.length) {
      a.e.channelClosed(a)
    }else {
      a.a.debug("Number of undelivered maps, pending: " + a.N.length + ", outgoing: " + a.r.length);
      var b = Za(a.N), c = Za(a.r);
      a.N.length = 0;
      a.r.length = 0;
      a.e.channelClosed(a, b, c)
    }
  }
}
function gd(a, b) {
  var c = ld(a, k, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c
}
function id(a, b, c) {
  b = ld(a, a.Pa() ? b : k, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b
}
function ld(a, b, c) {
  var d = c instanceof I ? c.n() : new I(c, h);
  if("" != d.da) {
    b && db(d, b + "." + d.da), eb(d, d.va)
  }else {
    var e = window.location, d = qb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.pa && G(a.pa, function(a, b) {
    K(d, b, a)
  });
  K(d, "VER", a.ba);
  yd(a, d);
  return d
}
q.Ya = function(a) {
  a && g(Error("Can't create secondary domain capable XhrIo object."));
  return new Xc
};
q.isActive = function() {
  return!!this.e && this.e.isActive(this)
};
function U(a, b) {
  "function" != ga(a) && g(Error("Fn must not be null and must be a function"));
  return r.setTimeout(function() {
    a()
  }, b)
}
q.D = function() {
  pd.dispatchEvent(new sd(pd))
};
function T() {
  pd.dispatchEvent(new qd(pd))
}
q.Pa = function() {
  return!cc()
};
function Fd() {
}
q = Fd.prototype;
q.channelHandleMultipleArrays = k;
q.okToMakeRequest = ca(0);
q.channelOpened = aa();
q.channelHandleArray = aa();
q.channelError = aa();
q.channelClosed = aa();
q.getAdditionalParams = function() {
  return{}
};
q.getNetworkTestImageUri = ca(k);
q.isActive = ca(j);
q.badMapError = aa();
q.correctHostPrefix = function(a) {
  return a
};
var $, Gd;
Gd = {"0":"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, f, i, m, l, n, s;
  l = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  if(t(b || "string" === typeof b)) {
    b = {}
  }
  i = b.reconnectTime || 3E3;
  s = function(a) {
    l.readyState = l.readyState = a
  };
  s(this.CLOSED);
  n = k;
  e = b.nc;
  c = new Fd;
  c.channelOpened = function() {
    e = n;
    s($.OPEN);
    return"function" === typeof l.onopen ? l.onopen() : h
  };
  d = k;
  c.channelError = function(a, b) {
    var c;
    c = Gd[b];
    d = b;
    s($.Ta);
    return"function" === typeof l.onerror ? l.onerror(c, b) : h
  };
  m = k;
  c.channelClosed = function(a, c, e) {
    if(l.readyState !== $.CLOSED) {
      n = k;
      a = d ? Gd[d] : "Closed";
      s($.CLOSED);
      try {
        if("function" === typeof l.onclose) {
          l.onclose(a, c, e)
        }
      }catch(Hd) {
        "undefined" !== typeof console && console !== k && console.error(Hd.stack)
      }
      b.reconnect && (7 !== d && 0 !== d) && (c = 6 === d ? 0 : i, clearTimeout(m), m = setTimeout(f, c));
      return d = k
    }
  };
  c.channelHandleArray = function(a, b) {
    return"function" === typeof l.onmessage ? l.onmessage(b) : h
  };
  f = function() {
    n && g(Error("Reconnect() called from invalid state"));
    s($.CONNECTING);
    if("function" === typeof l.onconnecting) {
      l.onconnecting()
    }
    clearTimeout(m);
    n = new md(b.appVersion);
    n.e = c;
    d = k;
    if(b.failFast) {
      var f = n;
      f.Da = j;
      f.a.info("setFailFast: true");
      if((f.o || f.C) && f.Y > (f.Da ? 0 : 2)) {
        f.a.info("Retry count " + f.Y + " > new maxRetries " + (f.Da ? 0 : 2) + ". Fail immediately!"), f.o ? (f.o.cancel(), f.ga(f.o)) : (r.clearTimeout(f.C), f.C = k, Z(f, 2))
      }
    }
    return n.Xa("" + a + "/test", "" + a + "/bind", k, e != k ? e.U : h, e != k ? e.ra : h)
  };
  this.open = function() {
    l.readyState !== l.CLOSED && g(Error("Already open"));
    return f()
  };
  this.close = function() {
    clearTimeout(m);
    d = 0;
    if(l.readyState !== $.CLOSED) {
      s($.Ta);
      var a = n;
      a.a.debug("disconnect()");
      ud(a);
      if(3 == a.c) {
        var b = a.ua++, c = a.Fa.n();
        K(c, "SID", a.U);
        K(c, "RID", b);
        K(c, "TYPE", "terminate");
        yd(a, c);
        b = new Q(a, a.a, a.U, b, h);
        b.S = L(c.n());
        c = new Image;
        c.src = b.S;
        c.onload = w(b.Xb, b);
        b.wa = x();
        gc(b)
      }
      Ed(a)
    }
  };
  this.sendMap = function(a) {
    var b;
    ((b = l.readyState) === $.Ta || b === $.CLOSED) && g(Error("Cannot send to a closed connection"));
    n.P(l.Vb);
    b = n;
    0 == b.c && g(Error("Invalid operation: sending map when state is closed"));
    1E3 == b.r.length && b.a.G("Already have 1000 queued maps upon queueing " + Ac(a));
    b.r.push(new od(b.ac++, a));
    (2 == b.c || 3 == b.c) && wd(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:Ac(a)})
  };
  this.setExtraHeaders = function(a) {
    return l.Vb = a
  };
  f();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.Ta = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && exports !== k ? exports : window).BCSocket = $;

})();
