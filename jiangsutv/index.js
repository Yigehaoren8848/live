// const n = Math.floor(Date.now() / 1e3) + t
// , r = n.toString(16);
// let i = "jsws_live";
// const o = `${s}${i}${r}`, l = h()(o).toString().toLowerCase()

function RstringToBytes(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t.push(255 & e.charCodeAt(n));
  return t
}

function TbytesToWords(e) {
  for (var t = [], n = 0, r = 0; n < e.length; n++,
    r += 8)
    t[r >>> 5] |= e[n] << 24 - r % 32;
  return t
}
function p(e, t, n, r, a, i, s) {
  var o = e + (t & n | ~t & r) + (a >>> 0) + s;
  return (o << i | o >>> 32 - i) + t
}

function m(e, t, n, r, a, i, s) {
  var o = e + (t & r | n & ~r) + (a >>> 0) + s;
  return (o << i | o >>> 32 - i) + t
}
function g(e, t, n, r, a, i, s) {
  var o = e + (t ^ n ^ r) + (a >>> 0) + s;
  return (o << i | o >>> 32 - i) + t
}
function _(e, t, n, r, a, i, s) {
  var o = e + (n ^ (t | ~r)) + (a >>> 0) + s;
  return (o << i | o >>> 32 - i) + t
}
function endian(e) {
  if (e.constructor == Number)
      return 16711935 & rotl(e, 8) | 4278255360 & rotl(e, 24);
  for (var t = 0; t < e.length; t++)
      e[t] = endian(e[t]);
  return e
}
function rotl(e, t) {
  return e << t | e >>> 32 - t
}
function s(e, n) {
  e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : RstringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
  for (var o = TbytesToWords(e), l = 8 * e.length, d = 1732584193, u = -271733879, c = -1732584194, h = 271733878, f = 0; f < o.length; f++)
    o[f] = 16711935 & (o[f] << 8 | o[f] >>> 24) | 4278255360 & (o[f] << 24 | o[f] >>> 8);
  o[l >>> 5] |= 128 << l % 32,
    o[14 + (l + 64 >>> 9 << 4)] = l;
 
  for (f = 0; f < o.length; f += 16) {
    var y = d
      , v = u
      , x = c
      , b = h;
    d = p(d, u, c, h, o[f + 0], 7, -680876936),
      h = p(h, d, u, c, o[f + 1], 12, -389564586),
      c = p(c, h, d, u, o[f + 2], 17, 606105819),
      u = p(u, c, h, d, o[f + 3], 22, -1044525330),
      d = p(d, u, c, h, o[f + 4], 7, -176418897),
      h = p(h, d, u, c, o[f + 5], 12, 1200080426),
      c = p(c, h, d, u, o[f + 6], 17, -1473231341),
      u = p(u, c, h, d, o[f + 7], 22, -45705983),
      d = p(d, u, c, h, o[f + 8], 7, 1770035416),
      h = p(h, d, u, c, o[f + 9], 12, -1958414417),
      c = p(c, h, d, u, o[f + 10], 17, -42063),
      u = p(u, c, h, d, o[f + 11], 22, -1990404162),
      d = p(d, u, c, h, o[f + 12], 7, 1804603682),
      h = p(h, d, u, c, o[f + 13], 12, -40341101),
      c = p(c, h, d, u, o[f + 14], 17, -1502002290),
      u = p(u, c, h, d, o[f + 15], 22, 1236535329),
      d = m(d, u, c, h, o[f + 1], 5, -165796510),
      h = m(h, d, u, c, o[f + 6], 9, -1069501632),
      c = m(c, h, d, u, o[f + 11], 14, 643717713),
      u = m(u, c, h, d, o[f + 0], 20, -373897302),
      d = m(d, u, c, h, o[f + 5], 5, -701558691),
      h = m(h, d, u, c, o[f + 10], 9, 38016083),
      c = m(c, h, d, u, o[f + 15], 14, -660478335),
      u = m(u, c, h, d, o[f + 4], 20, -405537848),
      d = m(d, u, c, h, o[f + 9], 5, 568446438),
      h = m(h, d, u, c, o[f + 14], 9, -1019803690),
      c = m(c, h, d, u, o[f + 3], 14, -187363961),
      u = m(u, c, h, d, o[f + 8], 20, 1163531501),
      d = m(d, u, c, h, o[f + 13], 5, -1444681467),
      h = m(h, d, u, c, o[f + 2], 9, -51403784),
      c = m(c, h, d, u, o[f + 7], 14, 1735328473),
      u = m(u, c, h, d, o[f + 12], 20, -1926607734),
      d = g(d, u, c, h, o[f + 5], 4, -378558),
      h = g(h, d, u, c, o[f + 8], 11, -2022574463),
      c = g(c, h, d, u, o[f + 11], 16, 1839030562),
      u = g(u, c, h, d, o[f + 14], 23, -35309556),
      d = g(d, u, c, h, o[f + 1], 4, -1530992060),
      h = g(h, d, u, c, o[f + 4], 11, 1272893353),
      c = g(c, h, d, u, o[f + 7], 16, -155497632),
      u = g(u, c, h, d, o[f + 10], 23, -1094730640),
      d = g(d, u, c, h, o[f + 13], 4, 681279174),
      h = g(h, d, u, c, o[f + 0], 11, -358537222),
      c = g(c, h, d, u, o[f + 3], 16, -722521979),
      u = g(u, c, h, d, o[f + 6], 23, 76029189),
      d = g(d, u, c, h, o[f + 9], 4, -640364487),
      h = g(h, d, u, c, o[f + 12], 11, -421815835),
      c = g(c, h, d, u, o[f + 15], 16, 530742520),
      u = g(u, c, h, d, o[f + 2], 23, -995338651),
      d = _(d, u, c, h, o[f + 0], 6, -198630844),
      h = _(h, d, u, c, o[f + 7], 10, 1126891415),
      c = _(c, h, d, u, o[f + 14], 15, -1416354905),
      u = _(u, c, h, d, o[f + 5], 21, -57434055),
      d = _(d, u, c, h, o[f + 12], 6, 1700485571),
      h = _(h, d, u, c, o[f + 3], 10, -1894986606),
      c = _(c, h, d, u, o[f + 10], 15, -1051523),
      u = _(u, c, h, d, o[f + 1], 21, -2054922799),
      d = _(d, u, c, h, o[f + 8], 6, 1873313359),
      h = _(h, d, u, c, o[f + 15], 10, -30611744),
      c = _(c, h, d, u, o[f + 6], 15, -1560198380),
      u = _(u, c, h, d, o[f + 13], 21, 1309151649),
      d = _(d, u, c, h, o[f + 4], 6, -145523070),
      h = _(h, d, u, c, o[f + 11], 10, -1120210379),
      c = _(c, h, d, u, o[f + 2], 15, 718787259),
      u = _(u, c, h, d, o[f + 9], 21, -343485551),
      d = d + y >>> 0,
      u = u + v >>> 0,
      c = c + x >>> 0,
      h = h + b >>> 0
  }
  console.log("肯定是价格扣篮大赛：",[d, u, c, h])
  return endian([d, u, c, h])
}

 function l(e) {
  for (var t = [], n = 0; n < 32 * e.length; n += 8)
      t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
  return t
}
function makeTxSecret(e){
  for (var t = [], n = 0; n < e.length; n++)
  t.push((e[n] >>> 4).toString(16)),
  t.push((15 & e[n]).toString(16));
return t.join("")
}
let ex = s("wjdXmmib4XHM47CAQhWSjsws_live67276b87")
let ol = l(ex)
let txSecret = makeTxSecret(ol)
console.log("asdfsdf", txSecret)