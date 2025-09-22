"use strict";
exports.id = "component---src-pages-events-js";
exports.ids = ["component---src-pages-events-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./public/page-data/sq/d/1162117368.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1162117368.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"redIconData":{"childImageSharp":{"gatsbyImageData":{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR42p2UyytEURzH72AGDU2jUSbJY0UmWTAWNl5lZukRNZGFmqSY8geMLKSUUlJ2FpJia2tFNnY2ymNFNgiTEsa9viffk18z1x3m1KffPb/XPed3fucYRsawLMtlOIxcdruAMlALvDIBZANoB37OvfTz/ZaogHLZ+h7znBdSHlC/w/ks52sy3shYRTk4o2Nc20AJuKD+HdSDcc437RLq1bWCNzr2CLv60R34pG0FjKoP0zS37BLqbfUz4BWEhL0CpBCcZtJbtVX67mYdlkg4RKcnUCnsPuouwRJ9UpTbTisc1s5YTVIdDOgGHnAP3QNXe2T9jA2ZIzNhhE4m+OD3Om3n3K5qlzB4YQ2TtBfZnbLaWgxMgmkwBapoawEDSFDMeSPoAwG7GsqEI2ACBKnrBTMqoei/Ofqpmrc5JQyAG241wTbSvaduSZDflijJnu2VFHVcpOOpKP4CbZ1snWfIQa4+5HjpIavBtThFdUNqaIvyIB7V6UM2QbqdHga9yoRIGBf2CBOmaVOn3pHVhzYJxxhwpfpO2MNCHyH+nM8ajPsMXOXcrWtI/YkokStXDUvBIQOj1HkoY9Qfq5+obf7pweUj2yyaWP+sDnTxsf3fy53v+AKWtitR/BLMHQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/d7ebc03d562a7282afc5a7b402c651c6/f31ef/lnyf_white_favicon.png","srcSet":"/static/d7ebc03d562a7282afc5a7b402c651c6/f31ef/lnyf_white_favicon.png 40w,\\n/static/d7ebc03d562a7282afc5a7b402c651c6/1f8a1/lnyf_white_favicon.png 80w","sizes":"40px"},"sources":[{"srcSet":"/static/d7ebc03d562a7282afc5a7b402c651c6/e73fe/lnyf_white_favicon.webp 40w,\\n/static/d7ebc03d562a7282afc5a7b402c651c6/61ca6/lnyf_white_favicon.webp 80w","type":"image/webp","sizes":"40px"}]},"width":40,"height":40}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"LNYF","description":"A website for the LNYF Festival at WashU","author":"Zachary Young, Harry Gao, Jane Liang, John Paul Pineda"}}}}');

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__Wrapper"
})(["cursor:pointer;padding:0 40px;font-family:\"Oswald\",sans-serif;text-transform:uppercase;font-weight:400;color:", ";border-radius:30px;background:", ";align-items:center;height:40px;font-size:14px;line-height:14px;border:1px solid ", ";&:hover{background:", ";color:", ";border:1px solid ", ";}@media (min-width:800px){border:1px solid ", ";line-height:17px;font-size:17px;}"], ({
  active
}) => {
  if (active) {
    return ({
      theme
    }) => theme.palette.background;
  } else {
    return ({
      theme
    }) => theme.palette.font;
  }
}, ({
  active
}) => {
  if (active) {
    return ({
      theme
    }) => theme.palette.font;
  } else {
    return "transparent";
  }
}, ({
  theme
}) => theme.palette.secondary1, ({
  theme
}) => theme.palette.font, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.secondary1);
const Button = ({
  children,
  active,
  ...rest
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, Object.assign({
    active: active
  }, rest), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const OuterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Container__OuterWrapper"
})(["padding:0 20px;"]);
const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Container__InnerWrapper"
})(["width:100%;"]);
const Container = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OuterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InnerWrapper, rest, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/FadeInOnScroll.js":
/*!******************************************!*\
  !*** ./src/components/FadeInOnScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const fadeInUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}"]);
const fadeInLeft = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateX(-30px);}to{opacity:1;transform:translateX(0);}"]);
const fadeInRight = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateX(30px);}to{opacity:1;transform:translateX(0);}"]);
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
const AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FadeInOnScroll__AnimatedDiv"
})(["opacity:0;transform:", ";transition:all 0.8s ease-out;&.visible{opacity:1;transform:", ";}&.fade-in{animation:", " 0.8s ease-out forwards;}&.fade-in-up{animation:", " 0.8s ease-out forwards;}&.fade-in-left{animation:", " 0.8s ease-out forwards;}&.fade-in-right{animation:", " 0.8s ease-out forwards;}"], ({
  direction
}) => {
  switch (direction) {
    case 'up':
      return 'translateY(30px)';
    case 'left':
      return 'translateX(-30px)';
    case 'right':
      return 'translateX(30px)';
    default:
      return 'none';
  }
}, ({
  direction
}) => {
  switch (direction) {
    case 'up':
      return 'translateY(0)';
    case 'left':
      return 'translateX(0)';
    case 'right':
      return 'translateX(0)';
    default:
      return 'none';
  }
}, fadeIn, fadeInUp, fadeInLeft, fadeInRight);
const FadeInOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
  style = {}
}) => {
  const {
    0: isVisible,
    1: setIsVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: hasAnimated,
    1: setHasAnimated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        // Add delay if specified
        setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, delay);
      }
    }, {
      threshold,
      rootMargin: '0px 0px -50px 0px'
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);
  const getAnimationClass = () => {
    if (!isVisible) return '';
    switch (direction) {
      case 'up':
        return 'fade-in-up';
      case 'left':
        return 'fade-in-left';
      case 'right':
        return 'fade-in-right';
      case 'fade':
        return 'fade-in';
      default:
        return 'fade-in-up';
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimatedDiv, {
    ref: ref,
    direction: direction,
    className: `${getAnimationClass()} ${className}`,
    style: style
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeInOnScroll);

/***/ }),

/***/ "./src/components/InnerPage.js":
/*!*************************************!*\
  !*** ./src/components/InnerPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_TwoColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TwoColumn */ "./src/components/TwoColumn.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Underline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Underline */ "./src/components/Underline.js");






const StyledContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "InnerPage__StyledContainer"
})(["margin-top:60px;padding-top:30px;"]);
const FilterColumn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "InnerPage__FilterColumn"
})(["@media (min-width:800px){flex-basis:250px;flex-shrink:0;}"]);
const FilterContent = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "InnerPage__FilterContent"
})(["padding:20px 0;"]);
const ContentColumn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "InnerPage__ContentColumn"
})(["flex-grow:1;"]);
const InnerPage = ({
  title,
  buttons,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spacing: 40
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FilterColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h2"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Underline__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FilterContent, null, buttons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentColumn, null, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerPage);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1162117368_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1162117368.json */ "./public/page-data/sq/d/1162117368.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text */ "./src/text.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.js */ "./src/components/Menu.js");
/* harmony import */ var _Waves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Waves */ "./src/components/Waves.js");












const LogoSection = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__LogoSection"
})(["margin-left:15px;"]);
const LinkSection = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__LinkSection"
})(["display:none;align-items:center;flex-wrap:wrap;margin-left:30px;margin-right:30px;@media (min-width:800px){display:flex;}"]);
const NavBarLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Layout__NavBarLink"
})(["margin-left:30px;margin-top:5px;margin-bottom:5px;text-shadow:1px 1px 3px ", "85;"], ({
  theme
}) => theme.palette.background);
const StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "Layout__StyledLink"
})(["text-decoration:none;color:inherit;transition:all 0.3s ease;&:hover{text-decoration:underline;transform:translateY(-2px);}"]);
const NavOverlay = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__NavOverlay"
})(["position:fixed;z-index:200;top:60px;left:0px;right:0px;bottom:0px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(77,127,132,0.85);backdrop-filter:blur(12px);box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);border-radius:0 0 24px 24px;padding:32px 0 32px 0;"]);
const NavOverlayLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Layout__NavOverlayLink"
})(["margin-bottom:28px;padding:0 32px;font-weight:400;font-size:2.1rem;letter-spacing:0.08em;color:#fff;text-align:center;border-radius:12px;transition:background 0.2s,color 0.2s,transform 0.2s;&:hover{background:rgba(255,255,255,0.08);color:#F4E27B;text-decoration:underline;transform:scale(1.04);}"]);
const Page = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].main.withConfig({
  displayName: "Layout__Page"
})(["display:flex;flex-direction:column;min-height:100vh;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__Content"
})(["flex-grow:2;"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__Footer"
})(["padding-left:15vw;padding-right:15vw;height:auto;min-height:350px;display:flex;align-items:flex-start;justify-content:space-between;z-index:1;background:", ";background:linear-gradient(180deg,", "00 0%,", "88 61%,", " 100%);@media (max-width:1200px){padding-left:10vw;padding-right:10vw;}@media (max-width:900px){flex-direction:column;padding-left:8vw;padding-right:8vw;padding-bottom:30px;}@media (max-width:600px){padding-left:5vw;padding-right:5vw;}"], ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.background);
const FooterDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__FooterDiv"
})(["display:flex;flex-direction:column;justify-content:flex-start;margin-top:50px;@media (max-width:1200px){margin-right:40px;}@media (max-width:900px){margin-right:0;margin-bottom:40px;width:100%;}@media (max-width:600px){margin-bottom:30px;}"]);
const NewsletterForm = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].form.withConfig({
  displayName: "Layout__NewsletterForm"
})(["display:flex;width:100%;max-width:800px;margin-bottom:20px;font-family:\"Oswald\",sans-serif;gap:12px;@media (max-width:600px){flex-direction:column;gap:8px;}"]);
const StyledWaves = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_Waves__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "Layout__StyledWaves"
})(["margin-top:40px;"]);
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
;
const Header = ({
  transparent
}) => {
  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: prevPos,
    1: setPrevPos
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const handleScroll = debounce(() => {
    const scrollY = window.pageYOffset;
    setVisible(scrollY < 20 || scrollY < prevPos);
    setPrevPos(scrollY);
  }, 10);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevPos, visible, handleScroll]);
  const {
    redIconData
  } = _public_page_data_sq_d_1162117368_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const redIconImg = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.getImage)(redIconData);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: animate,
    1: setAnimate
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_Menu__WEBPACK_IMPORTED_MODULE_7__.AnimateState.INITIAL);
  const onMenuClick = () => {
    setOpen(prevOpen => !prevOpen);
    setAnimate(animate === _Menu__WEBPACK_IMPORTED_MODULE_7__.AnimateState.INITIAL || animate === _Menu__WEBPACK_IMPORTED_MODULE_7__.AnimateState.CLOSED ? _Menu__WEBPACK_IMPORTED_MODULE_7__.AnimateState.OPEN : _Menu__WEBPACK_IMPORTED_MODULE_7__.AnimateState.CLOSED);
  };
  if (open) {
    transparent = false;
  }
  const navbarStyles = {
    display: 'flex',
    height: '60px',
    width: '100%',
    position: 'fixed',
    zIndex: '100',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: transparent ? 'transparent' : _theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.background,
    'background-color': `${_theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.background}73`,
    transition: 'top 0.6s'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/",
    onClick: onMenuClick
  }, "Home")), _text__WEBPACK_IMPORTED_MODULE_5__["default"].schedule.active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/auditions",
    onClick: onMenuClick
  }, "Auditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/performances",
    onClick: onMenuClick
  }, "Performers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/gallery",
    onClick: onMenuClick
  }, "Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/people",
    onClick: onMenuClick
  }, "Exec")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/philanthropy",
    onClick: onMenuClick
  }, "Philanthropy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavOverlayLink, {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/events",
    onClick: onMenuClick
  }, "Events")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      ...navbarStyles,
      top: visible ? '0px' : '-60px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LogoSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.GatsbyImage, {
    image: redIconImg,
    alt: "icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onMenuClick,
    animate: animate,
    setAnimate: setAnimate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LinkSection, null, _text__WEBPACK_IMPORTED_MODULE_5__["default"].schedule.active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavBarLink, {
    variant: "linkfont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/auditions"
  }, "Auditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavBarLink, {
    variant: "linkfont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/performances"
  }, "Performers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavBarLink, {
    variant: "linkfont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/gallery"
  }, "Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NavBarLink, {
    variant: "linkfont"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledLink, {
    to: "/people"
  }, "Exec")))));
};
const Layout = ({
  children,
  transparent,
  noWaves
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Page, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Header, {
    transparent: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Content, null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FooterDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footertitle",
    style: {
      marginBottom: '10px',
      fontSize: '1.4rem',
      fontWeight: '500',
      color: 'white'
    }
  }, "Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/events",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Events")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/performances",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Performances")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/gallery",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/people",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Exec")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/philanthropy",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Philanthropy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FooterDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footertitle",
    style: {
      marginBottom: '10px',
      fontSize: '1.4rem',
      fontWeight: '500',
      color: 'white'
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '10px'
    }
  }, "wu.lnyf@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: _text__WEBPACK_IMPORTED_MODULE_5__["default"].links.instagram,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fab fa-instagram fa-2x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: _text__WEBPACK_IMPORTED_MODULE_5__["default"].links.youtube,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fab fa-youtube fa-2x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: _text__WEBPACK_IMPORTED_MODULE_5__["default"].links.facebook,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fab fa-facebook fa-2x"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FooterDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footertitle",
    style: {
      marginBottom: '10px',
      fontSize: '1.4rem',
      fontWeight: '500',
      color: 'white'
    }
  }, "Sign Up For Our Newsletter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "footerlink",
    style: {
      fontSize: '1.1rem',
      marginBottom: '1px'
    }
  }, "Stay up to date with LNYF!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NewsletterForm, {
    name: "submit-to-google-sheet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "email",
    name: "Email",
    placeholder: "Email Address",
    style: {
      flex: 1,
      padding: '14px 16px',
      s: '10px',
      borderRadius: '5px',
      border: 'none',
      fontSize: '1rem',
      outline: 'none',
      marginTop: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    style: {
      height: '48px',
      padding: '0px 24px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: '"Oswald", sans-serif',
      marginTop: '10px'
    },
    onMouseEnter: e => {
      e.target.style.backgroundColor = 'white';
      e.target.style.color = 'black';
    },
    onMouseLeave: e => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = 'white';
    }
  }, "Subscribe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    id: "msg"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimateState: () => (/* binding */ AnimateState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Menu__Wrapper"
})(["cursor:pointer;border:none;background:transparent;padding:0;position:relative;height:25px;width:35px;margin-right:30px;@media (min-width:800px){display:none;}"]);
const AnimateState = {
  INITIAL: "Initial",
  OPEN: "Open",
  CLOSED: "Closed"
};
const Bar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Menu__Bar"
})(["position:absolute;background:", ";left:0;height:2px;"], ({
  theme
}) => theme.palette.secondarybackground);
const Bar1AnimationOpen = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{top:5.5px;}50%{top:17.5px;transform:rotate(0deg);}100%{top:17.5px;transform:rotate(45deg);}"]);
const Bar1AnimationClosed = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{top:17.5px;transform:rotate(45deg);}50%{top:17.5px;transform:rotate(0deg);}100%{top:5.5px;}"]);
const Bar1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Bar).withConfig({
  displayName: "Menu__Bar1"
})(["top:5.5px;width:40px;", ""], ({
  animate
}) => {
  if (animate !== AnimateState.INITIAL) {
    if (animate === AnimateState.CLOSED) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["animation:", " 0.2s ease-in-out forwards;"], Bar1AnimationClosed);
    } else {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["animation:", " 0.2s ease-in-out forwards;"], Bar1AnimationOpen);
    }
  }
});
const Bar2AnimationOpen = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{top:20.5px;}50%{top:17.5px;transform:rotate(0deg);}100%{top:17.5px;transform:rotate(-45deg);}"]);
const Bar2AnimationClosed = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{top:17.5px;transform:rotate(-45deg);}50%{top:17.5px;transform:rotate(0deg);}100%{top:20.5px;}"]);
const Bar2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Bar).withConfig({
  displayName: "Menu__Bar2"
})(["top:20.5px;width:40px;", ""], ({
  animate
}) => {
  if (animate !== AnimateState.INITIAL) {
    if (animate === AnimateState.CLOSED) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["animation:", " 0.2s ease-in-out forwards;"], Bar2AnimationClosed);
    } else {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["animation:", " 0.2s ease-in-out forwards;"], Bar2AnimationOpen);
    }
  }
});
const Menu = ({
  onClick,
  animate
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    "aria-label": "navigation",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Bar1, {
    animate: animate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Bar2, {
    animate: animate
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/Seo.js":
/*!*******************************!*\
  !*** ./src/components/Seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");



const Seo = ({
  description = ``,
  lang = `en`,
  meta = [],
  title
}) => {
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/TwoColumn.js":
/*!*************************************!*\
  !*** ./src/components/TwoColumn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TwoColumn__Wrapper"
})(["display:flex;flex-direction:column;margin-right:10px;margin-left:10px;> :first-child{margin-bottom:", "px;}> :last-child{margin-top:", "px;}@media (min-width:1000px){flex-direction:row;> :first-child{margin-bottom:0px;order:", ";", ";}> :last-child{order:", ";}}"], ({
  spacing
}) => spacing + 20, ({
  spacing
}) => spacing + 40, ({
  inverse
}) => inverse ? 2 : undefined, ({
  inverse,
  spacing
}) => inverse ? `margin-left: ${spacing}px` : `margin-right: ${spacing}px`, ({
  inverse
}) => inverse ? 1 : undefined);
const TwoColumn = ({
  children,
  inverse,
  spacing = 0
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, {
    inverse: inverse,
    spacing: spacing
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumn);

/***/ }),

/***/ "./src/components/Typography.js":
/*!**************************************!*\
  !*** ./src/components/Typography.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Header1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Typography__Header1"
})(["margin:0;line-height:56px;font-size:56px;font-weight:600;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){margin:-10px 0 0 -5px;line-height:124px;font-size:124px;}"], ({
  color
}) => color);
const Header2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Typography__Header2"
})(["margin:0;line-height:42px;font-size:42px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:68px;font-size:68px;}"], ({
  color
}) => color);
const Header3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Typography__Header3"
})(["margin:0;line-height:34px;font-size:34px;font-weight:700;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:64px;font-size:64px;}"], ({
  color
}) => color);
const Header4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Typography__Header4"
})(["margin:0;line-height:28px;font-size:28px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:50px;font-size:50px;}"], ({
  color
}) => color);
const Header5 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h5.withConfig({
  displayName: "Typography__Header5"
})(["margin:0;line-height:22px;font-size:22px;font-weight:300;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:40px;font-size:40px;}"], ({
  color
}) => color);
const Header6 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h6.withConfig({
  displayName: "Typography__Header6"
})(["margin:0;line-height:24px;font-size:24px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:30px;font-size:30px;}"], ({
  color
}) => color);
const LinkFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__LinkFont"
})(["margin:0;line-height:20px;font-size:20px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;"]);
const FloatingButtonFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FloatingButtonFont"
})(["margin:0;line-height:17px;font-size:17px;font-weight:500;text-transform:uppercase;font-family:\"Oswald\",sans-serif;"]);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Subtitle"
})(["line-height:20px;font-size:20px;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";@media (min-width:800px){line-height:24px;font-size:24px;}"], ({
  color
}) => color);
const Caption = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Caption"
})(["line-height:16px;font-size:16px;font-weight:300;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";@media (min-width:800px){line-height:20px;font-size:20px;}"], ({
  color
}) => color);
const Caption2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Caption2"
})(["line-height:12px;font-size:12px;font-weight:300;margin:0;font-family:\"Oswald\",sans-serif;text-transform:none;color:", ";@media (min-width:800px){line-height:17px;font-size:17px;}"], ({
  color
}) => color);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Paragraph"
})(["font-size:16px;margin:0;@media (min-width:800px){font-size:20px;}"]);
const FooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FooterTitle"
})(["font-size:15px;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";font-weight:300;@media (min-width:800px){font-size:14px;}"], ({
  theme
}) => theme.palette.accent3);
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FooterLink"
})(["font-size:10px;margin:0;font-weight:300;font-family:\"Oswald\",sans-serif;text-transform:uppercase;@media (min-width:800px){font-size:14px;}"]);
const CreditFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__CreditFont"
})(["font-size:10px;margin:0;color:", ";font-weight:200;font-family:\"Oswald\",sans-serif;text-align:center;margin-top:15px;"], ({
  theme
}) => theme.palette.accent3);
const Typography = ({
  variant,
  color,
  children,
  ...rest
}) => {
  switch (variant) {
    case "h1":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header1, Object.assign({
        color: color
      }, rest), children);
    case "h2":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header2, Object.assign({
        color: color
      }, rest), children);
    case "h3":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header3, Object.assign({
        color: color
      }, rest), children);
    case "h4":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header4, Object.assign({
        color: color
      }, rest), children);
    case "h5":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header5, Object.assign({
        color: color
      }, rest), children);
    case "h6":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header6, Object.assign({
        color: color
      }, rest), children);
    case "linkfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkFont, Object.assign({
        color: color
      }, rest), children);
    case "floatingbuttonfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingButtonFont, Object.assign({
        color: color
      }, rest), children);
    case "subtitle":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Subtitle, Object.assign({
        color: color
      }, rest), children);
    case "caption":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Caption, Object.assign({
        color: color
      }, rest), children);
    case "caption2":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Caption2, Object.assign({
        color: color
      }, rest), children);
    case "footertitle":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterTitle, Object.assign({
        color: color
      }, rest), children);
    case "footerlink":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLink, Object.assign({
        color: color
      }, rest), children);
    case "creditfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CreditFont, Object.assign({
        color: color
      }, rest), children);
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Paragraph, Object.assign({
        color: color
      }, rest), children);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./src/components/Underline.js":
/*!*************************************!*\
  !*** ./src/components/Underline.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Underline__StyledDiv"
})(["background:", ";height:5px;width:100px;margin-top:10px;border-radius:3px;@media (min-width:800px){width:160px;}"], ({
  theme
}) => theme.palette.gradient);
const Underline = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledDiv, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Underline);

/***/ }),

/***/ "./src/components/Waves.js":
/*!*********************************!*\
  !*** ./src/components/Waves.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Waves: () => (/* binding */ Waves),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
/* harmony import */ var _utils_hexToRgb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hexToRgb */ "./src/utils/hexToRgb.js");




const CanvasContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Waves__CanvasContainer"
})(["width:100%;padding-bottom:10%;height:0;position:relative;overflow:hidden;"]);
const Canvas = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].canvas.withConfig({
  displayName: "Waves__Canvas"
})(["position:absolute;width:103%;height:100%;"]);
const Waves = ({
  ...rest
}) => {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const drawWave = (ctx, height, width, formula, color) => {
    ctx.beginPath();
    ctx.moveTo(0, formula(0));
    for (let i = 1; i < width; i++) {
      ctx.lineTo(i, formula(i));
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  const animateWaves = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ctx, canvas, time, exp) => {
    const height = canvas.height;
    const width = canvas.width;
    // Clear
    ctx.clearRect(0, 0, width, height);
    const x = (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_2__["default"])(_theme__WEBPACK_IMPORTED_MODULE_1__["default"].palette.secondary2);
    const y = (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_2__["default"])(_theme__WEBPACK_IMPORTED_MODULE_1__["default"].palette.primary2);
    const z = (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_2__["default"])(_theme__WEBPACK_IMPORTED_MODULE_1__["default"].palette.primary1);

    // Draw
    drawWave(ctx, height, width, input => height / 4 + height / 5 * Math.sin((input + time / (width / 7)) / (width / 12) + width / 10), `rgba(${x.r},${x.g},${x.b},1)`);
    drawWave(ctx, height, width, input => height / 3 + height / 6 * Math.sin((input - time / (width / 5)) / (width / 8) + width / 15), `rgba(${y.r},${y.g},${y.b},.8)`);
    drawWave(ctx, height, width, input => height / 1.8 + height / 5 * Math.sin((input + time / (width / 5)) / (width / 10) + width / 4), `rgba(${z.r},${z.g},${z.b},.8)`);

    // Call again
    window.requestAnimationFrame(time => animateWaves(ctx, canvas, time, exp));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      window.requestAnimationFrame(time => animateWaves(ctx, canvas, time, input => 100 + 40 * Math.sin(input / 30)));
    }
  }, [animateWaves]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CanvasContainer, rest, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, {
    ref: canvasRef
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Waves);

/***/ }),

/***/ "./src/pages/events.js?export=default":
/*!********************************************!*\
  !*** ./src/pages/events.js?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InnerPage */ "./src/components/InnerPage.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.js");
/* harmony import */ var _components_TwoColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TwoColumn */ "./src/components/TwoColumn.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FadeInOnScroll */ "./src/components/FadeInOnScroll.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text */ "./src/text.js");










const EventContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "events__EventContainer"
})(["box-shadow:", ";border:", ";margin-bottom:20px;min-height:120px;overflow:hidden;@media (min-width:600px){min-height:150px;}@media (max-width:599px){margin-bottom:15px;}", ""], ({
  theme
}) => theme.decoration.boxShadow, ({
  theme
}) => theme.decoration.border, ({
  clickable
}) => clickable && `
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px ${({
  theme
}) => theme.palette.background}26;
    }
  `);
const EventCaption = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "events__EventCaption"
})(["margin-top:5px;"]);
const DateContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "events__DateContainer"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 10px;min-width:120px;flex-shrink:0;@media (min-width:600px){min-width:150px;padding:20px 15px;}@media (min-width:1000px){min-width:170px;padding:20px 20px;}"]);
const EventContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "events__EventContent"
})(["margin-top:0px;padding:5px 15px;flex:1;min-width:0;@media (min-width:600px){padding:5px 20px;}"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "events__Description"
})(["margin:10px 0;"]);
const EventsPage = () => {
  const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.useTheme)();
  const handleEventClick = event => {
    if (event.link) {
      window.open(event.link, '_blank', 'noopener,noreferrer');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Events"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    direction: "up",
    delay: 0
  }, _text__WEBPACK_IMPORTED_MODULE_7__["default"].events.map((e, i) => {
    const isClickable = !!e.link;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      direction: "up",
      delay: i * 20
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventContainer, {
      clickable: isClickable,
      onClick: () => isClickable && handleEventClick(e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DateContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6"
    }, e.month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h2"
    }, e.day)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6"
    }, e.title), e.caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventCaption, {
      variant: "caption"
    }, e.caption), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Description, null, e.description), isClickable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "caption",
      style: {
        color: '#0000EE',
        marginTop: '8px',
        fontSize: '0.85rem',
        display: 'block',
        fontWeight: 450
      }
    }, "Click to apply \u2192")))));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsPage);

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Typography */ "./src/components/Typography.js");





const StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "text__StyledButton"
})(["margin-right:10px;margin-bottom:5px;@media (min-width:800px){margin-bottom:0px;}"]);
const AuditionButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "text__AuditionButton"
})(["margin-top:20px;margin-right:10px;margin-bottom:5px;@media (min-width:800px){margin-bottom:0px;}"]);
const Table = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].table.withConfig({
  displayName: "text__Table"
})(["border:1px solid white;td,th{padding:10px;border:1px solid white;}"]);
const StyledHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "text__StyledHeader"
})(["margin-top:30px;margin-bottom:20px;"]);

// FORMATTING GUIDELINES
// {
//   links: {
//     facebook: String
//     instagram: String
//     youtube: String
//     store: String
//   },
//   index: {
//     jumbotronTop: String
//     jumbotronMiddle: String
//     jumbotronBottom: String | undefined
//     jumbotronButtons: JSX,
//     aboutText: JSX,
//     philanthropyTitle: String
//     philanthropyText: JSX,
//     philanthropyLink: String,
//   },
//   events:
//     {
//       month: String,
//       day: String,
//       title: String,
//       caption: String,
//       description: JSX.Element
//     }[],
//   philanthropy: {
//     [INSERT_YEAR]: {
//       image: String,
//       title: String,
//       money: String,
//       description: String,
//       link: String,
//     }
//   },
//   performances:
//     {
//       title: String,
//       image: String,
//       performers: String[],
//     }[],
//   store: {
//     caption: String,
//     items:
//       {
//         title: String,
//         subtitle: String,
//         images: { image: String, alt: String }[],
//         subImages: { image: String, name: String }[],
//         price: String,
//         soldOut: Boolean,
//       }[],
//   },
//   people: {
//     [bod | comm | dev | perf]:
//       {
//         image: String,
//         name: String,
//         position: String,
//         major: String,
//         zodiac: String,
//         facts: String,
//       }[],
//   },
//   gallery: {
//     [INSERT_YEAR]: {
//       photos:
//         {
//           image: String,
//           caption: String,
//         }[],
//       videos:
//         {
//           link: String,
//         }[],
//     },
//   },
//   schedule: {
//     active: Boolean,
//     auditions: JSX.Element,
//     makeups: JSX.Element
//   }
// };

const text = {
  links: {
    facebook: "https://www.facebook.com/WULNYF/",
    instagram: "https://www.instagram.com/wu.lnyf/?hl=en",
    youtube: "https://www.youtube.com/user/LNYF",
    store: "https://commerce.cashnet.com/SULUNAR",
    store2: "https://docs.google.com/forms/d/e/1FAIpQLScCqjMIVtSPz-8_1roqnXly6q6xMPj0dJ_kQCcw_wQlGOX5uw/viewform?usp=dialog"
    //store: "https://docs.google.com/forms/d/e/1FAIpQLScHw56q-6mb2jUH9Wx5KhdkTjk4KWjdP0uwR0uTIa_9DWlXIw/viewform",
  },
  index: {
    jumbotronTop: "Lunar New Year Festival 2026",
    jumbotronMiddle: "Boundless\nHorizons",
    jumbotronBottom: undefined,
    jumbotronButtons: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "/events"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledButton, {
      white: true
    }, "Events"))),
    aboutText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Lunar New Year Festival (LNYF) is an annual student-run production staged in commemoration and celebration of the Lunar New Year. LNYF seeks to leave a prolonged impact both on and off the stage. Dynamic performances ranging from acting to dancing to martial arts explore Asian heritage from both traditional and modern perspectives, and acknowledge social issues prevalent in Asian communities. LNYF partners with local non-profit organizations to offer sustainable support to the greater St Louis community.")),
    philanthropyTitle: "EarthDance",
    philanthropyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "LNYF is proud to partner with EarthDance as its philanthropy for the Year of the Horse."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        "font-weight": "bold"
      }
    }, " About the Philanthropy: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Based in Ferguson, Missouri, EarthDance operates on the oldest organic farm west of the Mississippi and is nationally recognized for its hands-on, justice-focused approach to farming education. By reconnecting people to the land and one another, EarthDance teaches community members of all ages where their food comes from and how to grow it themselves, fostering deeper relationships with both food and community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "EarthDance makes fresh, locally grown produce accessible through a Pay-What-You-Can model at their Farm Stand and Ferguson Farmers Market booth, partnerships with local food pantries and grocers, and affordable gardening education. With about 60% of their customers living in North St. Louis County\u2014an area facing historic and ongoing barriers to healthy food access\u2014their sliding-scale systems ensure that nourishment is treated as a right, not a privilege, in service of a more regenerative, inclusive future.")),
    philanthropyLink: "https://earthdancefarms.org/"
  },
  events: [
  // {
  //   month: "Aug",
  //   day: "29",
  //   title: "Activities Fair",
  //   caption: "3-5 PM @ Mudd Field",
  //   description:
  //     "Come find the LNYF booth and sign up to be on our mailing list!",
  // },
  // {
  //   month: "Aug",
  //   day: "31",
  //   title: "Choreo Apps",
  //   caption: "Due 11:59 pm",
  //   description:
  //     "Apply to choreograph a dance in the upcoming 2026 show!",
  //   link: "https://docs.google.com/document/d/1fPwDiHwoEnvHn7a3U0Pa0dJshJN13q4eGg8ZCsJtBxc/edit?tab=t.0",
  // },
  // {
  //   month: "Sept",
  //   day: "7",
  //   title: "General Body Meeting",
  //   caption: "TBA Time @ Ursa's",
  //   description:
  //     "Come join our first GBM to find out more about how we celebrate Lunar New Year through performance, fundraising, and other events!",
  // },
  // {
  //   month: "Sept",
  //   day: "12",
  //   title: "LNYF @ AMC's Mid-Autumn Festival",
  //   caption: "3-5 PM @ Ursa's",
  //   description:
  //     "Come to the LNYF Booth to play games and learn more about LNYF!",
  // },
  // {
  //   month: "Sept",
  //   day: "8-12",
  //   title: "Act Workshops",
  //   caption: "More info on the LNYF's Instagram!",
  //   description:
  //     "Explore different LNYF 2026 Acts!",
  // },
  // {
  //   month: "Sept",
  //   day: "13-14",
  //   title: "Auditions",
  //   caption: "More info on the Auditions Page and LNYF's Instagram!",
  //   description:
  //     "Try out to become a performer at LNYF 2026!",
  // },
  // {
  //   month: "Sept",
  //   day: "15-19",
  //   title: "Make-Up Auditions",
  //   caption: "More info on the Auditions Page and LNYF's Instagram!",
  //   description:
  //     "In case you missed it, or for a second chance!",
  // }, 
  {
    month: "Sept",
    day: "24",
    title: "KBOP Fundraiser",
    caption: "6-8 PM @ BD",
    description: "Help us raise money for our philanthropy!"
  }, {
    month: "Sept",
    day: "25",
    title: "KBOP Fundraiser",
    caption: "11AM-2 PM @ DUC",
    description: "Help us raise money for our philanthropy!"
  }, {
    month: "Oct",
    day: "19",
    title: "Performer Social",
    caption: "3-4:30 PM @ Mudd MPR",
    description: "Join your fellow performers for a night of fun activities and delicious food!"
  }, {
    month: "Oct",
    day: "22",
    title: "PUSO x LNYF Fundraiser",
    caption: "6-8 PM @ BD",
    description: "Help us raise money for our philanthropy!"
  }, {
    month: "Oct",
    day: "23",
    title: "PUSO x LNYF Fundraiser",
    caption: "11AM-2 PM @ DUC",
    description: "Help us raise money for our philanthropy!"
  }, {
    month: "Nov",
    day: "9",
    title: "Performer Banquet",
    caption: "4-9 PM @ Umrath Lounge",
    description: "Join your fellow performers for a night of fun activities and delicious food!"
  }
  // {
  //   month: "Nov",
  //   day: "11",
  //   title: "Philanth. MedQ Event",
  //   caption: "6 PM @ Seigle 303",
  //   description:
  //     "Join us for SQSH's MEDQ Philanthropy Event to learn more about the LGBTQ+ community in healthcare!",
  // },
  // {
  //   month: "Jan",
  //   day: "25",
  //   title: "AMC Fireworks",
  //   caption: "7 pm",
  //   description:
  //     "Watch beautiful fireworks and a variety of dances at our collaboration event with Asian Multicultural Council!",
  // },
  // {
  //   month: "Jan",
  //   day: "31",
  //   title: "LNYF Show 1",
  //   caption: "7 pm",
  //   description:
  //     "Come watch our show. Find more info on our instagram!",
  // },
  // {
  //   month: "Feb",
  //   day: "1",
  //   title: "LNYF Shows 2 & 3",
  //   caption: "2 & 7 pm",
  //   description:
  //     "Come watch our show. Find more info on our instagram!",
  // }
  // {
  //   month: "April",
  //   day: "24",
  //   title: "Choreo Info Session Panel",
  //   caption: "7-8 PM @ DUC 234",
  //   description:
  //     "Come to learn more!",
  // },
  ],
  philanthropy: {
    2026: {
      image: "earthdance",
      title: "EarthDance",
      money: undefined,
      description: 'EarthDance is a non-profit organization that operates on the oldest organic farm west of the Mississippi and is nationally recognized for its hands-on, justice-focused approach to farming education. By reconnecting people to the land and one another, EarthDance teaches community members of all ages where their food comes from and how to grow it themselves, fostering deeper relationships with both food and community.',
      link: "https://earthdancefarms.org/"
    },
    2025: {
      image: "SQSH",
      title: "St. Louis Queer SUpport &amp Healing",
      money: undefined,
      description: 'SQSH’s mission is to strengthen the St. Louis queer community by building collective skills for peer support, active listening, and navigating conflict. It operates a telephone support line five days a week, builds deep connections within the local community, and partners with civil rights organizations to advocate for LGBTQIA+ needs. SQSH aims to create alternative models, strategies, and practices that moves the LGBTQIA+ community closer to collective liberation.',
      link: "https://www.thesqsh.org/"
    },
    2024: {
      image: "ppa",
      title: "Prison Performing Arts",
      money: undefined,
      description: 'Prison Performing Arts is a multi-discipline, literacy and performing arts program dedicated to enriching the lives of youth and adults in Missouri’s criminal and juvenile justice systems. They foster individual and social change by providing incarcerated adults, justice-involved youth, and returning citizens with opportunities to participate in the arts as artists, students, and audience members. Participants learn creative and constructive ways to express emotions, build trust, and work in collaboration with one another. Programs aim to improve literacy and communication skills, instill responsibility to self and others, and to promote non-violent expression of emotion.',
      link: "https://www.prisonperformingarts.org/"
    },
    2023: {
      video: "https://www.youtube.com/embed/c9vfyap0Jqs",
      title: "Caring for Kids",
      money: undefined,
      description: '“Caring for Kids immediately provides essential resources to meet the urgent needs of abused, neglected or at-risk children in St. Louis County. Founded in 2003, Caring for Kids was started by Susan Block, an Administrative Judge of the St. Louis Family Court. She witnessed children that were unable to receive basic needs due to lack of resources, including school supplies, clothing, and even glasses and tutoring. Caring For Kids identifies kids at risk and helps kids meet their basic needs.”',
      link: "https://caringforkids-stl.org/"
    },
    2022: {
      image: "havenofgrace",
      title: "Haven of Grace",
      money: "$10,000",
      description: '"Serving women who are pregnant and homeless, The Haven of Grace provides a safe, nurturing home, educational programs and long-term support for mother and child. Founded in faith, we instill hope, dignity and the pride of independence, one family at a time."',
      link: "https://havenofgracestl.org/"
    },
    2021: {
      image: "fosterandadoptive",
      title: "Foster & Adoptive Care Coalition",
      money: "$6,750",
      description: '"The Foster & Adoptive Care Coalition strives to create permanency in foster children’s lives by recruiting and supporting foster and adoptive families in the metropolitan St. Louis region."',
      link: "https://www.foster-adopt.org/"
    },
    2020: {
      image: "varietychildren",
      title: "Variety, The Children's Charity",
      money: "$7,000",
      description: '"All children are special. However, Variety – the Children’s Charity’s purpose is to serve children who are less fortunate – children who live and grow up with a serious illness, disability or disadvantage. These are extra special children who require a special kind of help."',
      link: "https://usvariety.org/"
    },
    2019: {
      image: "kingdomhouse",
      title: "Kingdom House",
      money: undefined,
      description: '"Our mission is to help individuals and families achieve economic well-being by providing high-impact, relationship-based programming and by addressing systemic barriers to their success."',
      link: "https://www.lifewisestl.org/"
    },
    2018: {
      image: "foodoutreach",
      title: "Food Outreach",
      money: undefined,
      description: '"Food Outreach is the only St. Louis area organization whose mission is to provide nutritional support and enhance the quality of life of men, women and children living with HIV/AIDS or cancer."',
      link: "https://foodoutreach.org/"
    },
    2017: {
      image: "beyondhousing",
      title: "Beyond Housing",
      money: undefined,
      description: '"We began with housing in 1975, because we understood that home matters. Through our work, we learned that the true meaning of home - a place to shelter people and nurture dreams - can only happen in the context of a strong community."',
      link: "https://www.beyondhousing.org/legacy-gala"
    }
  },
  performances: [{
    title: "Chinese Fan",
    image: "cfan",
    performers: ["Celina Liu (choreo)", "Cynthia Zhi (choreo)", "Gioia Wang (choreo)", "Alyssa Zhang", "Eileen Li", "Rachel Wei", "Theresa Xuan Nguyen", "Sophia Zhang", "Sophie Song"]
  }, {
    title: "Dai",
    image: "dai",
    performers: ["Sarah Cao (choreo)", "Annie Zhao", "Cheney Zhang", "Kylee Kest", "Jadyn Tian", "Lisa Ji", "Maggie Sun", "Rainbow Wu", "Sarah You"]
  }, {
    title: "Korean Fan",
    image: "kfan",
    performers: ["Andrew Choi (choreo)", "Jessica Lee (choreo)", "Hailey Kim (choreo)", "Abigail Rhee", "Alaina Rhee", "Anlsey Lee", "Eric Montufar-Morales", "Esther Perez", "Jacky Ta", "Katie Auyeung", "Makayla Zheng", "Reina Xu"]
  }, {
    title: "Lion",
    image: "lion",
    performers: ["Edward Hao (choreo)", "Justin Lan (choreo)", "Richard Yang", "Kevin Si", "Lance Yeh", "Kelly Gan", "Jacqueline Chuang", "Allison Tan", "Sarah Gao"]
  }, {
    title: "Samulnori",
    image: "samulnori",
    performers: ["Alex Zhang (choreo)", "Yoon Shin (choreo)", "Abby Tang", "Alan Shi", "Alex Huang", "Ann Lee", "Brandon Cho", "Chelsea Chun", "Elaine Yoo", "Elizabeth Chen", "Heyun Lee", "Juneseo Lee", "Kyle Shon", "Robin Pyo", "Sarah Ye", "Steven Tao", "Yosep Maeng"]
  }, {
    title: "Standing Drums",
    image: "standingdrums",
    performers: ["Connor Park (choreo)", "Dexter Chen (choreo)", "Avery Kim", "Daniel Yoo", "Dheer Jain", "Hannah Do", "Jade Lo", "Jocelyn Liao", "Justin Yu", "Michelle Cai"]
  }, {
    title: "Taekwondo",
    image: "taekwondo",
    performers: ["Julie Baguio (choreo)", "Priyanka Deka (choreo)", "Aaron Chun", "Andrew Kang", "Arwyn Sullivan", "Daniel Oh", "Iliana Acevedo", "Insang Lee", "Jason Ng", "Jonathan Leung", "Kay Stephens", "Keira Nguyen", "Nathan Jeffrey Zhou", "Oleg Ivlev", "Ray Adelstein", "Sarah Cai"]
  }, {
    title: "Tinikling",
    image: "tinikling",
    performers: ["Alex Fang (choreo)", "John Paul (JP) Pineda (choreo)", "Sophie Leong (choreo)", "Alicia Huang", "Alexandria Flojo", "Alice Xu", "Andrew Aviado", "Dwyneth Jade Calopez Guiterrez", "Grace Huang", "John Glaser", "Joyce Tan", "Julie Baguio", "Junyoung Park", "Malaya Hill", "Noah Sagum", "William Li"]
  }, {
    title: "Vietnamese Scarves",
    image: "vscarves",
    performers: ["Charlotte Chen (choreo)", "Nikki Nguyen (choreo)", "Vy Nguyen (choreo)"]
  }, {
    title: "Wushu",
    image: "wushu",
    performers: ["Maggie Cheng (choreo)"]
  }, {
    title: "Yoyo",
    image: "yoyo",
    performers: ["David Zhu (choreo)", "Reina Xu (choreo)", "Sharon Shen (choreo)", "Allison Chang", "Brandon Lin", "Ivy Huang", "Jessie Shi", "Joye Zheng", "Nevin Song", "Madison Wang", "Peter Chang", "Ran Duan", "R. Dehao Tieh", "Ryan Lin", "Thanh Lung", "Vincent Lim"]
  }],
  store: {
    // "The store is closed temporarily. Please check back soon. Apologies for any inconvenience.""
    // "Welcome to the LNYF Store!",
    //caption: "The store is closed temporarily. Please check back soon. Apologies for any inconvenience.",
    items: [
    /*{
      title: "COMING SOON",
      images: [
        { image: "coming-soon", alt: "Coming Soon" },
      ],
      subImages: undefined,
      price: "0.00",
      soldOut: false,
    },*/
    {
      title: "Long Sleeve Shirt",
      images: [{
        image: "shirt-boys",
        alt: "Long Sleeve"
      }, {
        image: "shirt-girls",
        alt: "Long Sleeve"
      }, {
        image: "shirt-tote-girls",
        alt: "Long Sleeve"
      }],
      subImages: undefined,
      price: "$26.00",
      soldOut: false
    }, {
      title: "Tote Bag",
      images: [{
        image: "tote-bag",
        alt: "LNYF Tote"
      }, {
        image: "tote-bag-1",
        alt: "LNYF Tote"
      }, {
        image: "tote-bag-girls",
        alt: "LNYF Tote"
      }, {
        image: "tote-bag-boys",
        alt: "LNYF Tote"
      }],
      subImages: undefined,
      price: "$17.00",
      soldOut: false
    },
    // {
    //   title: "Sweatpants",
    //   images: [
    //     { image: "pants-pic", alt: "Sweatpants" },
    //     { image: "pants-pic-2", alt: "Sweatpants" },
    //   ],
    //   subImages: undefined,
    //   price: "$45.00",
    //   soldOut: true,
    // },
    {
      title: "Snake Pin",
      images: [{
        image: "pins",
        alt: "Pin"
      }, {
        image: "pins-1",
        alt: "Pin"
      }, {
        image: "pins-2",
        alt: "Pin"
      }],
      subImages: undefined,
      price: "$7.00",
      soldOut: false
    }, {
      title: "Short Sleeve T-Shirt",
      images: [{
        image: "t-shirt-1",
        alt: "Short Sleeve"
      }, {
        image: "t-shirt-2",
        alt: "Short Sleeve"
      }, {
        image: "t-shirt-3",
        alt: "Short Sleeve"
      }],
      subImages: undefined,
      price: "$14.00",
      soldOut: false
    }, {
      title: "Coffee Mug",
      images: [{
        image: "mug-main",
        alt: "Mug"
      }, {
        image: "mug-slides",
        alt: "Mug"
      }],
      subImages: undefined,
      price: "$14.00",
      soldOut: false
    }]
  },
  people: {
    bod: [{
      image: "sarahcao",
      name: "Sarah Cao",
      position: "Executive Director",
      major: "Philosophy-Neuroscience-Psychology",
      zodiac: "GOAT",
      facts: "LNYF is a celebration of my heritage that always reminds me to be proud of my upbringing. It's also a constant reminder of the amazing community and people I'm surrounded by! "
    }, {
      image: "emilyso",
      name: "Emily So",
      position: "Executive Director",
      major: "Philosophy-Neuroscience-Psychology",
      zodiac: "Monkey",
      facts: "My college experience ❤️ "
    }, {
      image: "cecely",
      name: "Cece Ly",
      position: "Director of Communications",
      major: "Organization and Strategic Management & Marketing",
      zodiac: "Monkey",
      facts: "It means a community of people who work together towards a common goal of spreading culture through performances and celebration. It’s a community that when I first saw it on stage was one that radiated a level of comfort and excitement in wanting to be part of something like it. To me, it also means opportunities and chances to meet new people, learn new things, and push beyond my limits. "
    }, {
      image: "alexzhang",
      name: "Alex Zhang",
      position: "Director of Development",
      major: "Biology: Neuroscience",
      zodiac: "Monkey",
      facts: "LNYF is home away from home where I can form memories and friends that I will cherish for a long time."
    }, {
      image: "nikkinguyen",
      name: "Nikki Nguyen",
      position: "Director of Performance",
      major: "Political Science and Educational Studies",
      zodiac: "Rooster",
      facts: "LNYF is a great supportive community where I can express my Asian heritage!"
    }],
    comm: [{
      image: "carolinezhuang",
      name: "Caroline Zhuang",
      position: "Art Director",
      major: "Neuroscience",
      zodiac: "Rooster",
      facts: "Watching LNYF has always been my favorite part of the school year! I think it's a great way to find community and I'm super excited to be a part of planning this year!"
    }, {
      image: "charliewang",
      name: "Charlie Wang",
      position: "Art Director",
      major: "Communication Design",
      zodiac: "Dog",
      facts: "A reflection of cultural heritage and pride."
    }, {
      image: "madisonwang",
      name: "Madison Wang",
      position: "Multimedia Director",
      major: "Communication Design",
      zodiac: "Monkey",
      facts: "Lovely Night Yummy Friends"
    }, {
      image: "justinlan",
      name: "Justin Lan",
      position: "Multimedia Director",
      major: "Biology",
      zodiac: "Monkey",
      facts: "The most welcoming and talented group of people that works so so hard to put on an amazing show both on the stage and behind the scenes."
    }, {
      image: "jaxonpoentis",
      name: "Jaxon Poentis",
      position: "Multimedia Director",
      major: "Computer Science + Math",
      zodiac: "Rooster",
      facts: "LNYF brings together passionate, like-minded individuals to showcase their talents in a vibrant celebration of Asian culture!"
    }, {
      image: "andrialuo",
      name: "Andria Luo",
      position: "PR Chair",
      major: "Computer Science, Bioinformatics & Psychology minors",
      zodiac: "Monkey",
      facts: "Lovely people and a lovely time :) LNYF is a wonderful, supportive community and I love being able to celebrate one of my favorite holidays with everyone."
    }, {
      image: "estherperez",
      name: "Esther Perez",
      position: "PR Chair",
      major: "Marketing & Communication Design, PNP minor",
      zodiac: "Rooster",
      facts: "A community where you can explore who you are without having to hold yourself back."
    }, {
      image: "sophieleong",
      name: "Sophie Leong",
      position: "Graphic Design Chair",
      major: "Communication Design",
      zodiac: "Monkey",
      facts: "LNYF is Lunar New Year Festival to me :P (it also means the place where I found some of my closest friends and learned so many life lessons in college!)"
    }, {
      image: "johnpaulpineda",
      name: "John Paul (JP) Pineda",
      position: "Webmaster",
      major: "Computer Science + Math",
      zodiac: "Monkey",
      facts: "Being part of a passionate and fun community that showcases a variety of Asian culture!"
    }],
    dev: [{
      image: "sarahyou",
      name: "Sarah You",
      position: "Philanthropy Chair",
      major: "Architecture",
      zodiac: "Rooster caw cawwww",
      facts: "LNYF provides an opportunity to connect with community members through showcasing East and Southeast Asian culture!"
    }, {
      image: "alexflojo",
      name: "Alex Flojo",
      position: "Fundraising Chair",
      major: "Architecture",
      zodiac: "Monkey",
      facts: "lovely people, lovely dancing, lovely memories made and to be made!"
    }, {
      image: "cynthiazhi",
      name: "Cynthia Zhi",
      position: "Fundraising Chair",
      major: "Computational Biology",
      zodiac: "Rooster",
      facts: "LNYF is a wonderful community of passionate individuals who I get to celebrate one of my favorite holidays with! "
    }, {
      image: "phichanda",
      name: "Phi Chanda",
      position: "Fundraising Chair",
      major: "Political Sciencce",
      zodiac: "Dog",
      facts: "Where countries with centuries of beef can share dressing rooms and even a stage!"
    }, {
      image: "kellygan",
      name: "Kelly Gan",
      position: "Corporate Sponsorship Chair",
      major: "Biology, Anthropology minor",
      zodiac: "Rooster",
      facts: "LNYF is a chance for a strong community of minorities to support each other and other minorities; it's a beautiful experience to be uplifting others through more than just performance."
    }, {
      image: "randuan",
      name: "Ran Duan",
      position: "Corporate Sponsorship Chair",
      major: "Computer Science, Statistics",
      zodiac: "Goat",
      facts: "LNYF is about coming together as a community to celebrate the traditions that make our cultures so rich and beautiful."
    }, {
      image: "lisaji",
      name: "Lisa Ji",
      position: "Corporate Sponsorship Chair",
      major: "Biology: Neuroscience",
      zodiac: "Goat",
      facts: "EVERYTHING. I'm so grateful to have met my best friends here and be a part of the community that celebrate my cultural heritage."
    }, {
      image: "hayoungcho",
      name: "Katie Cho",
      position: "Treasurer",
      major: "Data Science",
      zodiac: "Monkey",
      facts: "The community!"
    }, {
      image: "alstonliu",
      name: "Alston Liu",
      position: "Treasurer",
      major: "Computer Engineering",
      zodiac: "Rooster",
      facts: "LNYF means to me that I can experience Lunar New Year away from family and experience how other cultures celebrate it!"
    }, {
      image: "willli",
      name: "William Li",
      position: "Treasurer",
      major: "Computer Engineering",
      zodiac: "Rooster",
      facts: "Good Vibes and Good Times!"
    }],
    perf: [{
      image: "davidzhu",
      name: "David Zhu",
      position: "Choreo Chair",
      major: "Computational Biology",
      zodiac: "Monkey",
      facts: "LNYF to me is an opportunity to see a bunch of passionate and talented people come together to create something that's meaningful and celebrates their heritage."
    }, {
      image: "nevinsong",
      name: "Nevin Song",
      position: "Choreo Chair",
      major: "Biomedical Engineering",
      zodiac: "Monkey",
      facts: "LNYF means being with friends to showcase our culture together through amazing performances!"
    }, {
      image: "charlottechen",
      name: "Charlotte Chen",
      position: "Technical Chair",
      major: "Biomedical Engineering and Architecture",
      zodiac: "Sheep",
      facts: "To me, LNYF is a vibrant celebration of cultural pride, tradition, and unity within the Asian community and beyond. It serves as a platform to share stories, heritage, and creativity with a wider audience through performance and collective effort. More than just a festival, LNYF nurtures a deep sense of belonging, strengthens community connections, and creates opportunities for people of all backgrounds to engage with and appreciate diverse cultural traditions."
    }, {
      image: "reinaxu",
      name: "Reina Xu",
      position: "Special Operations Chair",
      major: "Biology",
      zodiac: "Monkey",
      facts: "A great community of performers and friends :D"
    }, {
      image: "vynguyen",
      name: "Vy Nguyen",
      position: "External Performance Chair",
      major: "Anthropology",
      zodiac: "Goat",
      facts: "A community where we all work together to create a lovely show that celebrates different East and Southeast Asian cultures!"
    }]
  },
  gallery: {
    2025: {
      photos: [{
        image: "lion_one",
        caption: "Lion"
      }, {
        image: "umbrella_one",
        caption: "Chinese Umbrella"
      }, {
        image: "cfan_one",
        caption: "Contemporary Chinese Fan"
      }, {
        image: "fashion_one",
        caption: "Fashion Show"
      }, {
        image: "tinikling_one",
        caption: "Tinikling"
      }, {
        image: "juggling_one",
        caption: "Juggling"
      }, {
        image: "lotus_one",
        caption: "Lotus"
      }, {
        image: "lotus_two",
        caption: "Lotus"
      }, {
        image: "tkd_one",
        caption: "Taekwondo"
      }, {
        image: "samulnori_one",
        caption: "Samulnori"
      }, {
        image: "yoyo_one",
        caption: "Yoyo"
      }, {
        image: "watersleeves_one",
        caption: "Watersleeves"
      }, {
        image: "vfan_one",
        caption: "Vietnamese Fan"
      }, {
        image: "standing_one",
        caption: "Standing Drums"
      }, {
        image: "kfan_one",
        caption: "Korean Fan"
      }, {
        image: "liontinikling_one",
        caption: "Lion x Tinikling"
      }, {
        image: "senior_dance_one",
        caption: "Senior Dance"
      }, {
        image: "senior_dance_two",
        caption: "Senior Dance"
      }, {
        image: "senior_dance_three",
        caption: "Senior Dance"
      }, {
        image: "curtain_one",
        caption: "Curtain Call"
      }, {
        image: "curtain_two",
        caption: "Curtain Call"
      }, {
        image: "curtain_three",
        caption: "Curtain Call"
      }, {
        image: "lion_two",
        caption: "Lion"
      }, {
        image: "tinikling_two",
        caption: "Tinikling"
      }, {
        image: "juggling_two",
        caption: "Juggling"
      }, {
        image: "watersleeves_two",
        caption: "Watersleeves"
      }, {
        image: "umbrella_two",
        caption: "Chinese Umbrella"
      }, {
        image: "cfan_two",
        caption: "Contemporary Chinese Fan"
      }, {
        image: "samulnori_two",
        caption: "Samulnori"
      }, {
        image: "tkd_two",
        caption: "Taekwondo"
      }, {
        image: "tinikling_three",
        caption: "Tinikling"
      }, {
        image: "liotinikling_two",
        caption: "Lion x Tinikling"
      }, {
        image: "kfan_two",
        caption: "Korean Fan"
      }, {
        image: "yoyo_two",
        caption: "Yoyo"
      }, {
        image: "fashion_two",
        caption: "Fashion Show"
      }, {
        image: "vfan_two",
        caption: "Vietnamese Fan"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/8KHaVBibACc?si=Yg_2WtACB1olexp5"
      }, {
        link: "https://www.youtube.com/embed/0axC0Em2vBw?si=3yhcyYfqtE-vUSSl"
      },, {
        link: "https://www.youtube.com/embed/_wUiM3PPsRk?si=MTgAIcM99vX-u-Qp"
      }, {
        link: "https://www.youtube.com/embed/4EehtboydO0?si=DCdUDHIKke9QOOeP"
      }, {
        link: "https://www.youtube.com/embed/XSRRL8DjPug?si=U3cXGWHNGHAL8ftl"
      }, {
        link: "https://www.youtube.com/embed/3fK6njKZ4EI?si=STVVdHy_McXpc0OQ"
      }, {
        link: "https://www.youtube.com/embed/0S1HyRSgk_4?si=GDiGZ-6qu6tZGAqh"
      }, {
        link: "https://www.youtube.com/embed/jf_Mof-htv0?si=T5Dm4wxVtp6hRYZB"
      }, {
        link: "https://www.youtube.com/embed/cOOzKbRMA0o?si=l6FeAsqXY0SBvJHN8"
      }, {
        link: "https://www.youtube.com/embed/P4kDCthv-mc?si=Ia-IuP-irZkU5xh5"
      }, {
        link: "https://www.youtube.com/embed/c96zml7hqAs?si=6dV7kRYUPenGe0Lv"
      }, {
        link: "https://www.youtube.com/embed/gVW4jcByNJM?si=lbG36QZAGEHSmOj3"
      }, {
        link: "https://www.youtube.com/embed/kt_KLZefG-k?si=uqCWXbMDo-GODXir"
      }, {
        link: "https://www.youtube.com/embed/w3cReIJ-dLk?si=KkiJhZD052GJQAC7"
      }, {
        link: "https://www.youtube.com/embed/2TzkLv2lbEc?si=f_c8LgHrjvz9JuVv"
      }, {
        link: "https://www.youtube.com/embed/b4R0ESYKPZU?si=29ZKBgzob14QgmkA"
      }, {
        link: "https://www.youtube.com/embed/CHiAof1-900?si=wBTxR-GsPlWqxbWp"
      }]
    },
    2024: {
      photos: [{
        image: "2024_lion",
        caption: "Lion Dance"
      }, {
        image: "2024_dai",
        caption: "Dai"
      }, {
        image: "2024_standing",
        caption: "Standing Drums"
      }, {
        image: "2024_chinese_contemp",
        caption: "chinese_contemp"
      }, {
        image: "2024_fashionshow",
        caption: "fashion_show"
      }, {
        image: "2024_juggling",
        caption: "juggling"
      }, {
        image: "2024_kfan",
        caption: "kfan"
      }, {
        image: "2024_lotus",
        caption: "lotus"
      }, {
        image: "2024_samulnori",
        caption: "samulnori"
      }, {
        image: "2024_senior",
        caption: "senior_dance"
      }, {
        image: "2024_taekwondo",
        caption: "taekwondo"
      }, {
        image: "2024_tinikling",
        caption: "tinikling"
      }, {
        image: "2024_watersleeves",
        caption: "watersleeves"
      }, {
        image: "2024_yoyo",
        caption: "yoyo"
      }, {
        image: "backstage_one",
        caption: "backstage_one"
      }, {
        image: "backstage_two",
        caption: "backstage_two"
      }, {
        image: "curtain-call",
        caption: "curtain-call"
      }, {
        image: "chinese_contemp",
        caption: "chinese_contemp"
      }, {
        image: "dai",
        caption: "dai"
      }, {
        image: "kfan",
        caption: "kfan"
      }, {
        image: "lion",
        caption: "lion"
      }, {
        image: "lotus",
        caption: "lotus"
      }, {
        image: "senior-dance",
        caption: "senior-dance"
      }, {
        image: "sensasions",
        caption: "sensasions"
      }, {
        image: "standing",
        caption: "standing"
      }, {
        image: "taekwondo",
        caption: "taekwondo"
      }, {
        image: "taekwondo_one",
        caption: "taekwondo_one"
      }, {
        image: "tinikles_girls",
        caption: "tinikles_girls"
      }, {
        image: "tinikling_end",
        caption: "tinikling_end"
      }, {
        image: "watersleeves",
        caption: "watersleeves"
      }, {
        image: "yoyo",
        caption: "yoyo"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/Kw91dbtjtEc?si=fMv-HQsciqZWvCTw"
      }, {
        link: "https://www.youtube.com/embed/Mm4hct7hbJk?si=6GBychD59p9n96KX"
      }, {
        link: "https://www.youtube.com/embed/Ol1HRSY6Vw0?si=LgtLTuPUSHHA0Ra2"
      }, {
        link: "https://www.youtube.com/embed/8v1Uq4HlSqs?si=iK5zx6jyuKXDPxGv"
      }, {
        link: "https://www.youtube.com/embed/Lf94GmRdHkI?si=r5A1XbszXAC3JXeB"
      }, {
        link: "https://www.youtube.com/embed/uii1T0CZiDM?si=yk7Xwo7Y9VUFEdqi"
      }, {
        link: "https://www.youtube.com/embed/1R7FMHiNlCs?si=j-mT6lwUB9EyJDzv"
      }, {
        link: "https://www.youtube.com/embed/LEcB1Zf1K-0?si=kg0UvPCIOwZMrwE9"
      }, {
        link: "https://www.youtube.com/embed/bnGW3G-DiT8?si=Mwdx9sQP3h-9tJtN"
      }, {
        link: "https://www.youtube.com/embed/sw5Tr0V0mTw?si=BRQQSKVx-W7AFFCV"
      }, {
        link: "https://www.youtube.com/embed/asftPbpUkcM?si=lxxjNFVXP2CsTwpA"
      }, {
        link: "https://www.youtube.com/embed/xani_y29DUs?si=Igd29xBYkosGvRC5"
      }, {
        link: "https://www.youtube.com/embed/QK9Y_1UU11E?si=M7HpCg0W5BwTcqTW"
      }, {
        link: "https://www.youtube.com/embed/tOXkPKdFj5I?si=xsY3CQhV9qSh-hfy"
      }, {
        link: "https://www.youtube.com/embed/CG5wx44Zt5A?si=MhKcGzlsun1CU8r8"
      }, {
        link: "https://www.youtube.com/embed/VkmbbAuj1a0?si=kQ7Ty70F4n142ZsN"
      }, {
        link: "https://www.youtube.com/embed/k-Z31jzyWcI?si=kj4D8TOE5ksJa13V"
      }]
    },
    2023: {
      photos: [{
        image: "1V2A9954",
        caption: "Show photos"
      }, {
        image: "1V2A1695",
        caption: "Show photos"
      }, {
        image: "1V2A1629",
        caption: "Show photos"
      }, {
        image: "1V2A9865",
        caption: "Show photos"
      }, {
        image: "1V2A1098",
        caption: "Show photos"
      }, {
        image: "1V2A0945",
        caption: "Show photos"
      }, {
        image: "1V2A0859",
        caption: "Show photos"
      }, {
        image: "1V2A0565",
        caption: "Show photos"
      }, {
        image: "1V2A1788",
        caption: "Show photos"
      }, {
        image: "1V2A0417",
        caption: "Show photos"
      }, {
        image: "1V2A8994",
        caption: "Show photos"
      }, {
        image: "1V2A3759",
        caption: "Show photos"
      }, {
        image: "1V2A3718",
        caption: "Show photos"
      }, {
        image: "1V2A3616",
        caption: "Show photos"
      }, {
        image: "1V2A3590",
        caption: "Show photos"
      }, {
        image: "1V2A3322",
        caption: "Show photos"
      }, {
        image: "1V2A2743",
        caption: "Show photos"
      }, {
        image: "1V2A2670",
        caption: "Show photos"
      }, {
        image: "1V2A2323",
        caption: "Show photos"
      }, {
        image: "1V2A9818",
        caption: "Show photos"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/2VTpOkWIoeY"
      }, {
        link: "https://www.youtube.com/embed/weO73kyAmRk"
      }, {
        link: "https://www.youtube.com/embed/WCd9g1zGXZQ"
      }, {
        link: "https://www.youtube.com/embed/qRLrd1a_B6E"
      }, {
        link: "https://www.youtube.com/embed/aZx5jwIDprM"
      }, {
        link: "https://www.youtube.com/embed/-9fvYJvDxJM"
      }, {
        link: "https://www.youtube.com/embed/ZsvyOUwWPdU"
      }, {
        link: "https://www.youtube.com/embed/Xu7DilnHcP8"
      }, {
        link: "https://www.youtube.com/embed/s7WaJIDiyOY"
      }, {
        link: "https://www.youtube.com/embed/WeujnG0tfms"
      }, {
        link: "https://www.youtube.com/embed/3iohBylHwro"
      }, {
        link: "https://www.youtube.com/embed/aHvbKOrQ_Bg"
      }, {
        link: "https://www.youtube.com/embed/Aa6VIrrJODI"
      }, {
        link: "https://www.youtube.com/embed/gb5E58bqvUw"
      }, {
        link: "https://www.youtube.com/embed/Z7bn_4fzMzk"
      }, {
        link: "https://www.youtube.com/embed/2Sv3wCfyF4w"
      }]
    },
    2022: {
      photos: [{
        image: "AZ1A6517",
        caption: "Banquet photos"
      }, {
        image: "AZ1A6674",
        caption: "Banquet photos"
      }, {
        image: "AZ1A6923",
        caption: "Banquet photos"
      }, {
        image: "AZ1A6489",
        caption: "Banquet photos"
      }, {
        image: "AZ1A6836",
        caption: "Banquet photos"
      }, {
        image: "AZ1A6460",
        caption: "Banquet photos"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/PFXkHuOhL6g"
      }, {
        link: "https://www.youtube.com/embed/pj8Bth1k0SU"
      }, {
        link: "https://www.youtube.com/embed/8f3BG7B9uy0"
      }, {
        link: "https://www.youtube.com/embed/jsQW6DRhlos"
      }, {
        link: "https://www.youtube.com/embed/9p9xm4FDMM0"
      }, {
        link: "https://www.youtube.com/embed/7pWLzut9dik"
      }, {
        link: "https://www.youtube.com/embed/9q7MSWI8ps8"
      }, {
        link: "https://www.youtube.com/embed/UKXEkCvgE2A"
      }, {
        link: "https://www.youtube.com/embed/s62HWbOZIf8"
      }, {
        link: "https://www.youtube.com/embed/GK5__1lGb3M"
      }, {
        link: "https://www.youtube.com/embed/A47N-pGKUcI"
      }, {
        link: "https://www.youtube.com/embed/_l_6WvexKYg"
      }, {
        link: "https://www.youtube.com/embed/fpzj7SDf63E"
      }, {
        link: "https://www.youtube.com/embed/YdIwniiGYJk"
      }]
    },
    2021: {
      photos: [{
        image: "2021_DSC_6632",
        caption: "Banquet photos"
      }, {
        image: "2021_DSC_6669",
        caption: "Banquet photos"
      }, {
        image: "2021_DSC_6776",
        caption: "Banquet photos"
      }, {
        image: "2021_DSC_6800",
        caption: "Banquet photos"
      }, {
        image: "2021_DSC_6818",
        caption: "Banquet photos"
      }, {
        image: "2021_DSC_6834",
        caption: "Banquet photos"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/ZlceeNnXLls"
      }, {
        link: "https://www.youtube.com/embed/YUCiiUID1Dc"
      }, {
        link: "https://www.youtube.com/embed/dJG128WbZtI"
      }, {
        link: "https://www.youtube.com/embed/N8-_wRVSCVY"
      }, {
        link: "https://www.youtube.com/embed/fVelluHLyPc"
      }, {
        link: "https://www.youtube.com/embed/7YoTmf6T7Ks"
      }, {
        link: "https://www.youtube.com/embed/UYt6NmwOwfI"
      }, {
        link: "https://www.youtube.com/embed/f23d5n5qY-o"
      }, {
        link: "https://www.youtube.com/embed/4JYR3A4NyXU"
      }, {
        link: "https://www.youtube.com/embed/OLfxC7Ehm5E"
      }, {
        link: "https://www.youtube.com/embed/J5EZ8vAfQ5U"
      }, {
        link: "https://www.youtube.com/embed/afVIE4PdWvU"
      }, {
        link: "https://www.youtube.com/embed/SuGSUhWwiPI"
      }, {
        link: "https://www.youtube.com/embed/0XxfQ9kFiYA"
      }, {
        link: "https://www.youtube.com/embed/4GmPxs5q88c"
      }, {
        link: "https://www.youtube.com/embed/_cRE7bU8UnE"
      }, {
        link: "https://www.youtube.com/embed/FPn_GF86FBI"
      }, {
        link: "https://www.youtube.com/embed/7vbnj2cZ4O8"
      }]
    },
    2020: {
      photos: [{
        image: "2020_cfansquare",
        caption: "Chinese fan"
      }, {
        image: "2020_daisquare",
        caption: "Dai"
      }, {
        image: "2020_fusionsquare",
        caption: "Fusion"
      }, {
        image: "2020_hulasquare",
        caption: "Hula"
      }, {
        image: "2020_jugglingsquare",
        caption: "Juggling"
      }, {
        image: "2020_lionsquare",
        caption: "Lion"
      }, {
        image: "2020_lotussquare",
        caption: "Lotus"
      }, {
        image: "2020_samulnorisquare",
        caption: "Samulnori"
      }, {
        image: "2020_skitsquare",
        caption: "Skit"
      }, {
        image: "2020_standingdrumsquare",
        caption: "Standing Drums"
      }, {
        image: "2020_swordssquare",
        caption: "Swords"
      }, {
        image: "2020_tiniklingsquare",
        caption: "Tinikling"
      }, {
        image: "2020_yoyosquare",
        caption: "Yo Yo"
      }],
      videos: [{
        link: "https://www.youtube.com/embed/gNBQ2XlIDD8"
      }, {
        link: "https://www.youtube.com/embed/LgfF_AerMDE"
      }, {
        link: "https://www.youtube.com/embed/gkS30Zor6KQ"
      }, {
        link: "https://www.youtube.com/embed/f_2-AmrpJ68"
      }, {
        link: "https://www.youtube.com/embed/6yXO0JIkfSU"
      }, {
        link: "https://www.youtube.com/embed/WTvKhz6UoA4"
      }, {
        link: "https://www.youtube.com/embed/tFeouMyTyyk"
      }, {
        link: "https://www.youtube.com/embed/s7yBEo7eRCY"
      }, {
        link: "https://www.youtube.com/embed/YmCCK9yG488"
      }, {
        link: "https://www.youtube.com/embed/4KQBQYKr7ms"
      }, {
        link: "https://www.youtube.com/embed/uJ8mNod_EaU"
      }, {
        link: "https://www.youtube.com/embed/RY3sHQTvBCI"
      }, {
        link: "https://www.youtube.com/embed/gHMvRwaeNW0"
      }, {
        link: "https://www.youtube.com/embed/-xk0ExdPiGA"
      }, {
        link: "https://www.youtube.com/embed/NwpENXhPQ2Y"
      }, {
        link: "https://www.youtube.com/embed/Er28twFGTb0"
      }, {
        link: "https://www.youtube.com/embed/HgTXDfGBi-g"
      }, {
        link: "https://www.youtube.com/embed/WOg_-ZXSW18"
      }, {
        link: "https://www.youtube.com/embed/3m3lnL3Qthg"
      }, {
        link: "https://www.youtube.com/embed/difpmJqCddQ"
      }, {
        link: "https://www.youtube.com/embed/CcQp8AjK5Hg"
      }]
    }
  },
  schedule: {
    active: false,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSef97k_fA8FsUM8l63CSOiV2jQECn65NckuCTybw1MRFO-69g/viewform?usp=sf_link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AuditionButton, null, "Liability Waiver")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "https://docs.google.com/forms/d/e/1FAIpQLScPyvY2naMK4-hb6rudJg0zBNUJeqvgvVd0hHshQrRxAL03dg/viewform?usp=sf_link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AuditionButton, null, "Attendance Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdDLnYR7A67esGHGjW5TjIcSJICxdtdzQjp09wrYPoXpOxd9g/viewform"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AuditionButton, null, "Auditions Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledHeader, {
      variant: "h6"
    }, "Auditions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '150px'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '110px'
      }
    }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '110px'
      }
    }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '150px'
      }
    }, "Act")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "7"
    }, "Saturday 9/14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10AM - 12PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Vietnamese Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "12PM - 2PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Watersleeves")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "2PM - 4PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Korean Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "4PM - 6PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Umbrella")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Lotus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Contemp C-Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Fashion Show")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "7"
    }, "Sunday 9/15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10AM - 12PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Malli 303/305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Samulnori")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "12PM - 2PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Standing Drums")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "2PM - 4PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Lion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "4PM - 6PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Tae Kwon Do")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Tinikling")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Juggling")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Yoyo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledHeader, {
      variant: "h6"
    }, "Makeups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '150px'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '110px'
      }
    }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '110px'
      }
    }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        width: '150px'
      }
    }, "Act")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "3"
    }, "Monday 9/16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Fashion Show")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Contemp C-Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Tae Kwon Do")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "4"
    }, "Tuesday 9/17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Juggling")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Tinikling")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Lotus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Vietnamese Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "4"
    }, "Wednesday 9/18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Umbrella")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Yoyo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "K-Fan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Standing Drum")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      rowspan: "3"
    }, "Thursday 9/19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "8PM - 10PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Malli 302/303"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Samulnori")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "McMillan Cafe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Lion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "10PM - 12AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Mudd MPR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Watersleeves")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Friday 9/20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "6PM - 8PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Olin 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "Lion (Callbacks)"))))
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/utils/hexToRgb.js":
/*!*******************************!*\
  !*** ./src/utils/hexToRgb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hexToRgb = hex => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hexToRgb);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-events-js.js.map