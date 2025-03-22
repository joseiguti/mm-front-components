'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var react = require('@chakra-ui/react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;
  function z(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development$1 = {};

var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  if (hasRequiredReactIs_development$1) return reactIs_development$1;
  hasRequiredReactIs_development$1 = 1;
  if (process.env.NODE_ENV !== "production") {
    (function () {

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development$1.AsyncMode = AsyncMode;
      reactIs_development$1.ConcurrentMode = ConcurrentMode;
      reactIs_development$1.ContextConsumer = ContextConsumer;
      reactIs_development$1.ContextProvider = ContextProvider;
      reactIs_development$1.Element = Element;
      reactIs_development$1.ForwardRef = ForwardRef;
      reactIs_development$1.Fragment = Fragment;
      reactIs_development$1.Lazy = Lazy;
      reactIs_development$1.Memo = Memo;
      reactIs_development$1.Portal = Portal;
      reactIs_development$1.Profiler = Profiler;
      reactIs_development$1.StrictMode = StrictMode;
      reactIs_development$1.Suspense = Suspense;
      reactIs_development$1.isAsyncMode = isAsyncMode;
      reactIs_development$1.isConcurrentMode = isConcurrentMode;
      reactIs_development$1.isContextConsumer = isContextConsumer;
      reactIs_development$1.isContextProvider = isContextProvider;
      reactIs_development$1.isElement = isElement;
      reactIs_development$1.isForwardRef = isForwardRef;
      reactIs_development$1.isFragment = isFragment;
      reactIs_development$1.isLazy = isLazy;
      reactIs_development$1.isMemo = isMemo;
      reactIs_development$1.isPortal = isPortal;
      reactIs_development$1.isProfiler = isProfiler;
      reactIs_development$1.isStrictMode = isStrictMode;
      reactIs_development$1.isSuspense = isSuspense;
      reactIs_development$1.isValidElementType = isValidElementType;
      reactIs_development$1.typeOf = typeOf;
    })();
  }
  return reactIs_development$1;
}

var hasRequiredReactIs$1;
function requireReactIs$1() {
  if (hasRequiredReactIs$1) return reactIs$1.exports;
  hasRequiredReactIs$1 = 1;
  if (process.env.NODE_ENV === 'production') {
    reactIs$1.exports = requireReactIs_production_min();
  } else {
    reactIs$1.exports = requireReactIs_development$1();
  }
  return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
   
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');  
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = /*@__PURE__*/requireHas();
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs$1();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
  var has = /*@__PURE__*/requireHas();
  var checkPropTypes = /*@__PURE__*/requireCheckPropTypes();
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
     
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
     

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && _typeof(data) === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (_typeof(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = _typeof(propValue);
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = requireReactIs$1();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes.exports = /*@__PURE__*/requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = /*@__PURE__*/requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}

var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function memoize$2(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex$1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid$1 = /* #__PURE__ */memoize$2(function (prop) {
  return reactPropsRegex$1.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);

var MS$1 = '-ms-';
var MOZ$1 = '-moz-';
var WEBKIT$1 = '-webkit-';
var COMMENT$1 = 'comm';
var RULESET$1 = 'rule';
var DECLARATION$1 = 'decl';
var IMPORT$1 = '@import';
var KEYFRAMES$1 = '@keyframes';
var LAYER$1 = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs$1 = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from$1 = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign$1 = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash$1(value, length) {
  return charat$1(value, 0) ^ 45 ? (((length << 2 ^ charat$1(value, 0)) << 2 ^ charat$1(value, 1)) << 2 ^ charat$1(value, 2)) << 2 ^ charat$1(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim$1(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match$1(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace$1(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof$1(value, search, position) {
  return value.indexOf(search, position);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat$1(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr$1(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen$1(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof$1(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append$1(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine$1(array, callback) {
  return array.map(callback).join('');
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter(array, pattern) {
  return array.filter(function (value) {
    return !match$1(value, pattern);
  });
}

var line$1 = 1;
var column$1 = 1;
var length$1 = 0;
var position$1 = 0;
var character$1 = 0;
var characters$1 = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node$1(value, root, parent, type, props, children, length, siblings) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line$1,
    column: column$1,
    length: length,
    "return": '',
    siblings: siblings
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy$1(root, props) {
  return assign$1(node$1('', null, null, '', null, null, 0, root.siblings), root, {
    length: -root.length
  }, props);
}

/**
 * @param {object} root
 */
function lift(root) {
  while (root.root) root = copy$1(root.root, {
    children: [root]
  });
  append$1(root, root.siblings);
}

/**
 * @return {number}
 */
function _char$1() {
  return character$1;
}
function prev$1() {
  character$1 = position$1 > 0 ? charat$1(characters$1, --position$1) : 0;
  if (column$1--, character$1 === 10) column$1 = 1, line$1--;
  return character$1;
}

/**
 * @return {number}
 */
function next$1() {
  character$1 = position$1 < length$1 ? charat$1(characters$1, position$1++) : 0;
  if (column$1++, character$1 === 10) column$1 = 1, line$1++;
  return character$1;
}

/**
 * @return {number}
 */
function peek$1() {
  return charat$1(characters$1, position$1);
}

/**
 * @return {number}
 */
function caret$1() {
  return position$1;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice$1(begin, end) {
  return substr$1(characters$1, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token$1(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc$1(value) {
  return line$1 = column$1 = 1, length$1 = strlen$1(characters$1 = value), position$1 = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc$1(value) {
  return characters$1 = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit$1(type) {
  return trim$1(slice$1(position$1 - 1, delimiter$1(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace$1(type) {
  while (character$1 = peek$1()) if (character$1 < 33) next$1();else break;
  return token$1(type) > 2 || token$1(character$1) > 3 ? '' : ' ';
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping$1(index, count) {
  while (--count && next$1())
  // not 0-9 A-F a-f
  if (character$1 < 48 || character$1 > 102 || character$1 > 57 && character$1 < 65 || character$1 > 70 && character$1 < 97) break;
  return slice$1(index, caret$1() + (count < 6 && peek$1() == 32 && next$1() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter$1(type) {
  while (next$1()) switch (character$1) {
    // ] ) " '
    case type:
      return position$1;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter$1(character$1);
      break;
    // (
    case 40:
      if (type === 41) delimiter$1(type);
      break;
    // \
    case 92:
      next$1();
      break;
  }
  return position$1;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter$1(type, index) {
  while (next$1())
  // //
  if (type + character$1 === 47 + 10) break;
  // /*
  else if (type + character$1 === 42 + 42 && peek$1() === 47) break;
  return '/*' + slice$1(index, position$1 - 1) + '*' + from$1(type === 47 ? type : next$1());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier$1(index) {
  while (!token$1(peek$1())) next$1();
  return slice$1(index, position$1);
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile$1(value) {
  return dealloc$1(parse$1('', null, null, null, [''], value = alloc$1(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse$1(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next$1()) {
    // (
    case 40:
      if (previous != 108 && charat$1(characters, length - 1) == 58) {
        if (indexof$1(characters += replace$1(delimit$1(character), '&', '&\f'), '&\f', abs$1(index ? points[index - 1] : 0)) != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit$1(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace$1(previous);
      break;
    // \
    case 92:
      characters += escaping$1(caret$1() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek$1()) {
        case 42:
        case 47:
          append$1(comment$1(commenter$1(next$1(), caret$1()), root, parent, declarations), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = strlen$1(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = replace$1(characters, /\f/g, '');
          if (property > 0 && strlen$1(characters) - length) append$1(property > 32 ? declaration$1(characters + ';', rule, parent, length - 1, declarations) : declaration$1(replace$1(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          append$1(reference = ruleset$1(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
          if (character === 123) if (offset === 0) parse$1(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat$1(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse$1(value, reference, reference, rule && append$1(ruleset$1(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse$1(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + strlen$1(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev$1() == 125) continue;
      switch (characters += from$1(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (strlen$1(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek$1() === 45) characters += delimit$1(next$1());
          atrule = peek$1(), offset = length = strlen$1(type = characters += identifier$1(caret$1())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && strlen$1(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset$1(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof$1(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr$1(value, post + 1, post = abs$1(j = points[i])), z = value; x < size; ++x) if (z = trim$1(j > 0 ? rule[x] + ' ' + y : replace$1(y, /&\f/g, rule[x]))) props[k++] = z;
  return node$1(value, root, parent, offset === 0 ? RULESET$1 : type, props, children, length, siblings);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment$1(value, root, parent, siblings) {
  return node$1(value, root, parent, COMMENT$1, from$1(_char$1()), substr$1(value, 2, -2), 0, siblings);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration$1(value, root, parent, length, siblings) {
  return node$1(value, root, parent, DECLARATION$1, substr$1(value, 0, length), substr$1(value, length + 1, -1), length, siblings);
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix$1(value, length, children) {
  switch (hash$1(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT$1 + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT$1 + value + value;
    // tab-size
    case 4789:
      return MOZ$1 + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT$1 + value + MOZ$1 + value + MS$1 + value + value;
    // writing-mode
    case 5936:
      switch (charat$1(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)
        case 108:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        // default: fallthrough to below
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT$1 + value + MS$1 + value + value;
    // order
    case 6165:
      return WEBKIT$1 + value + MS$1 + 'flex-' + value + value;
    // align-items
    case 5187:
      return WEBKIT$1 + value + replace$1(value, /(\w+).+(:[^]+)/, WEBKIT$1 + 'box-$1$2' + MS$1 + 'flex-$1$2') + value;
    // align-self
    case 5443:
      return WEBKIT$1 + value + MS$1 + 'flex-item-' + replace$1(value, /flex-|-self/g, '') + (!match$1(value, /flex-|baseline/) ? MS$1 + 'grid-row-' + replace$1(value, /flex-|-self/g, '') : '') + value;
    // align-content
    case 4675:
      return WEBKIT$1 + value + MS$1 + 'flex-line-pack' + replace$1(value, /align-content|flex-|-self/g, '') + value;
    // flex-shrink
    case 5548:
      return WEBKIT$1 + value + MS$1 + replace$1(value, 'shrink', 'negative') + value;
    // flex-basis
    case 5292:
      return WEBKIT$1 + value + MS$1 + replace$1(value, 'basis', 'preferred-size') + value;
    // flex-grow
    case 6060:
      return WEBKIT$1 + 'box-' + replace$1(value, '-grow', '') + WEBKIT$1 + value + MS$1 + replace$1(value, 'grow', 'positive') + value;
    // transition
    case 4554:
      return WEBKIT$1 + replace$1(value, /([^-])(transform)/g, '$1' + WEBKIT$1 + '$2') + value;
    // cursor
    case 6187:
      return replace$1(replace$1(replace$1(value, /(zoom-|grab)/, WEBKIT$1 + '$1'), /(image-set)/, WEBKIT$1 + '$1'), value, '') + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace$1(value, /(image-set\([^]*)/, WEBKIT$1 + '$1' + '$`$1');
    // justify-content
    case 4968:
      return replace$1(replace$1(value, /(.+:)(flex-)?(.*)/, WEBKIT$1 + 'box-pack:$3' + MS$1 + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT$1 + value + value;
    // justify-self
    case 4200:
      if (!match$1(value, /flex-|baseline/)) return MS$1 + 'grid-column-align' + substr$1(value, length) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS$1 + replace$1(value, 'template-', '') + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function (element, index) {
        return length = index, match$1(element.props, /grid-\w+-end/);
      })) {
        return ~indexof$1(value + (children = children[length].value), 'span', 0) ? value : MS$1 + replace$1(value, '-start', '') + value + MS$1 + 'grid-row-span:' + (~indexof$1(children, 'span', 0) ? match$1(children, /\d+/) : +match$1(children, /\d+/) - +match$1(value, /\d+/)) + ';';
      }
      return MS$1 + replace$1(value, '-start', '') + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function (element) {
        return match$1(element.props, /grid-\w+-start/);
      }) ? value : MS$1 + replace$1(replace$1(value, '-end', '-span'), 'span ', '') + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace$1(value, /(.+)-inline(.+)/, WEBKIT$1 + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen$1(value) - 1 - length > 6) switch (charat$1(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat$1(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace$1(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT$1 + '$2-$3' + '$1' + MOZ$1 + (charat$1(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch
        case 115:
          return ~indexof$1(value, 'stretch', 0) ? prefix$1(replace$1(value, 'stretch', 'fill-available'), length, children) + value : value;
      }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace$1(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) {
        return MS$1 + a + ':' + b + f + (c ? MS$1 + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
      });
    // position: sticky
    case 4949:
      // stick(y)?
      if (charat$1(value, length + 6) === 121) return replace$1(value, ':', ':' + WEBKIT$1) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat$1(value, charat$1(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace$1(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT$1 + (charat$1(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT$1 + '$2$3' + '$1' + MS$1 + '$2box$3') + value;
        // (inline-)?gri(d)
        case 100:
          return replace$1(value, ':', ':' + MS$1) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace$1(value, 'scroll-', 'scroll-snap-') + value;
  }
  return value;
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize$1(children, callback) {
  var output = '';
  for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify$1(element, index, children, callback) {
  switch (element.type) {
    case LAYER$1:
      if (element.children.length) break;
    case IMPORT$1:
    case DECLARATION$1:
      return element["return"] = element["return"] || element.value;
    case COMMENT$1:
      return '';
    case KEYFRAMES$1:
      return element["return"] = element.value + '{' + serialize$1(element.children, callback) + '}';
    case RULESET$1:
      if (!strlen$1(element.value = element.props.join(','))) return '';
  }
  return strlen$1(children = serialize$1(element.children, callback)) ? element["return"] = element.value + '{' + children + '}' : '';
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware$1(collection) {
  var length = sizeof$1(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
    return output;
  };
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet$1(callback) {
  return function (element) {
    if (!element.root) if (element = element["return"]) callback(element);
  };
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer$1(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION$1:
      element["return"] = prefix$1(element.value, element.length, children);
      return;
    case KEYFRAMES$1:
      return serialize$1([copy$1(element, {
        value: replace$1(element.value, '@', '@' + WEBKIT$1)
      })], callback);
    case RULESET$1:
      if (element.length) return combine$1(children = element.props, function (value) {
        switch (match$1(value, callback = /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            lift(copy$1(element, {
              props: [replace$1(value, /:(read-\w+)/, ':' + MOZ$1 + '$1')]
            }));
            lift(copy$1(element, {
              props: [value]
            }));
            assign$1(element, {
              props: filter(children, callback)
            });
            break;
          // :placeholder
          case '::placeholder':
            lift(copy$1(element, {
              props: [replace$1(value, /:(plac\w+)/, ':' + WEBKIT$1 + 'input-$1')]
            }));
            lift(copy$1(element, {
              props: [replace$1(value, /:(plac\w+)/, ':' + MOZ$1 + '$1')]
            }));
            lift(copy$1(element, {
              props: [replace$1(value, /:(plac\w+)/, MS$1 + 'input-$1')]
            }));
            lift(copy$1(element, {
              props: [value]
            }));
            assign$1(element, {
              props: filter(children, callback)
            });
            break;
        }
        return '';
      });
  }
}

var unitlessKeys$1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var f = "undefined" != typeof process && undefined !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  m = "active",
  y = "data-styled-version",
  v = "6.1.14",
  g = "/*!sc*/\n",
  S = "undefined" != typeof window && "HTMLElement" in window,
  w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && undefined !== process.env && undefined !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && undefined !== process.env && undefined !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV),
  b = {},
  E = /invalid hook call/i,
  N = new Set(),
  P = function P(t, n) {
    if ("production" !== process.env.NODE_ENV) {
      var r = n ? ' with the id of "'.concat(n, '"') : "",
        s = "The component ".concat(t).concat(r, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        i = console.error;
      try {
        var a = !0;
        console.error = function (t) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          E.test(t) ? (a = !1, N["delete"](s)) : i.apply(void 0, __spreadArray([t], n, !1));
        }, React.useRef(), a && !N.has(s) && (console.warn(s), N.add(s));
      } catch (e) {
        E.test(e.message) && N["delete"](s);
      } finally {
        console.error = i;
      }
    }
  },
  _ = Object.freeze([]),
  C = Object.freeze({});
function I(e, t, n) {
  return undefined === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
  O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  D = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi,
  k = 52,
  j = function j(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function x(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
  return (j(t % k) + n).replace(T, "$1-$2");
}
var V,
  F = 5381,
  M = function M(e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  z = function z(e) {
    return M(F, e);
  };
function $(e) {
  return x(z(e) >>> 0);
}
function B(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = "function" == typeof Symbol && Symbol["for"],
  Y = G ? Symbol["for"]("react.memo") : 60115,
  q = G ? Symbol["for"]("react.forward_ref") : 60112,
  W = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  },
  H = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  },
  U = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  },
  J = ((V = {})[q] = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, V[Y] = U, V);
function X(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : W;
  var t;
}
var Z = Object.defineProperty,
  K = Object.getOwnPropertyNames,
  Q = Object.getOwnPropertySymbols,
  ee = Object.getOwnPropertyDescriptor,
  te = Object.getPrototypeOf,
  ne = Object.prototype;
function re(e, t, n) {
  if ("string" != typeof t) {
    if (ne) {
      var r = te(t);
      r && r !== ne && re(e, r, n);
    }
    var o = K(t);
    Q && (o = o.concat(Q(t)));
    for (var s = X(e), i = X(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
        var l = ee(t, c);
        try {
          Z(e, c, l);
        } catch (e) {}
      }
    }
  }
  return e;
}
function oe(e) {
  return "function" == typeof e;
}
function se(e) {
  return "object" == _typeof(e) && "styledComponentId" in e;
}
function ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
  if (0 === e.length) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ce(e) {
  return null !== e && "object" == _typeof(e) && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
  if (undefined === n && (n = false), !n && !ce(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = le(e[r], t[r]);else if (ce(t)) for (var r in t) e[r] = le(e[r], t[r]);
  return e;
}
function ue(e, t) {
  Object.defineProperty(e, "toString", {
    value: t
  });
}
var pe = "production" !== process.env.NODE_ENV ? {
  1: "Cannot create styled-component for component: %s.\n\n",
  2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
  8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
  9: "Missing document `<head>`\n\n",
  10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  14: 'ThemeProvider: "theme" prop is required.\n\n',
  15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
  18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
} : {};
function de() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1) r.push(e[o]);
  return r.forEach(function (e) {
    n = n.replace(/%[a-z]/, e);
  }), n;
}
function he(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
  return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(undefined, __spreadArray([pe[t]], n, false)).trim());
}
var fe = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    return e.prototype.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, e.prototype.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) if ((o <<= 1) < 0) throw he(16, "".concat(e));
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
    }, e.prototype.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, e.prototype.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += "".concat(this.tag.getRule(s)).concat(g);
      return t;
    }, e;
  }(),
  me = 1 << 30,
  ye = new Map(),
  ve = new Map(),
  ge = 1,
  Se = function Se(e) {
    if (ye.has(e)) return ye.get(e);
    for (; ve.has(ge);) ge++;
    var t = ge++;
    if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > me)) throw he(16, "".concat(t));
    return ye.set(e, t), ve.set(t, e), t;
  },
  we = function we(e, t) {
    ge = t + 1, ye.set(e, t), ve.set(t, e);
  },
  be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'),
  Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  Ne = function Ne(e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  Pe = function Pe(e, t) {
    for (var n, r = (null !== (n = t.textContent) && undefined !== n ? n : "").split(g), o = [], s = 0, i = r.length; s < i; s++) {
      var a = r[s].trim();
      if (a) {
        var c = a.match(Ee);
        if (c) {
          var l = 0 | parseInt(c[1], 10),
            u = c[2];
          0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
        } else o.push(a);
      }
    }
  },
  _e = function _e(e) {
    for (var t = document.querySelectorAll(be), n = 0, r = t.length; n < r; n++) {
      var o = t[n];
      o && o.getAttribute(f) !== m && (Pe(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };
function Ce() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function Ie(e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
        return t[t.length - 1];
      }(n),
      s = undefined !== o ? o.nextSibling : null;
    r.setAttribute(f, m), r.setAttribute(y, v);
    var i = Ce();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  Ae = function () {
    function e(e) {
      this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        throw he(17);
      }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return false;
      }
    }, e.prototype.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, e.prototype.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return t && t.cssText ? t.cssText : "";
    }, e;
  }(),
  Oe = function () {
    function e(e) {
      this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t);
        return this.element.insertBefore(n, this.nodes[e] || null), this.length++, true;
      }
      return false;
    }, e.prototype.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, e.prototype.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  De = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, true);
    }, e.prototype.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, e.prototype.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  Re = S,
  Te = {
    isServer: !S,
    useCSSOMInjection: !w
  },
  ke = function () {
    function e(e, n, r) {
      undefined === e && (e = C), undefined === n && (n = {});
      var o = this;
      this.options = __assign(__assign({}, Te), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && S && Re && (Re = false, _e(this)), ue(this, function () {
        return function (e) {
          for (var t = e.getTag(), n = t.length, r = "", o = function o(n) {
              var o = function (e) {
                return ve.get(e);
              }(n);
              if (undefined === o) return "continue";
              var s = e.names.get(o),
                i = t.getGroup(n);
              if (undefined === s || !s.size || 0 === i.length) return "continue";
              var a = "".concat(f, ".g").concat(n, '[id="').concat(o, '"]'),
                c = "";
              undefined !== s && s.forEach(function (e) {
                e.length > 0 && (c += "".concat(e, ","));
              }), r += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
            }, s = 0; s < n; s++) o(s);
          return r;
        }(o);
      });
    }
    return e.registerId = function (e) {
      return Se(e);
    }, e.prototype.rehydrate = function () {
      !this.server && S && _e(this);
    }, e.prototype.reconstructWithOptions = function (n, r) {
      return undefined === r && (r = true), new e(__assign(__assign({}, this.options), n), this.gs, r && this.names || undefined);
    }, e.prototype.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, e.prototype.getTag = function () {
      return this.tag || (this.tag = (e = function (e) {
        var t = e.useCSSOMInjection,
          n = e.target;
        return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
      }(this.options), new fe(e)));
      var e;
    }, e.prototype.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, e.prototype.registerName = function (e, t) {
      if (Se(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, e.prototype.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(Se(e), n);
    }, e.prototype.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, e.prototype.clearRules = function (e) {
      this.getTag().clearGroup(Se(e)), this.clearNames(e);
    }, e.prototype.clearTag = function () {
      this.tag = undefined;
    }, e;
  }(),
  je = /&/g,
  xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
  return e.map(function (e) {
    return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function (e) {
      return "".concat(t, " ").concat(e);
    })), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
  });
}
function Fe(e) {
  var t,
    n,
    r,
    o = C ,
    s = o.options,
    i = undefined === s ? C : s,
    a = o.plugins,
    c = undefined === a ? _ : a,
    l = function l(e, r, o) {
      return o.startsWith(n) && o.endsWith(n) && o.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
    },
    u = c.slice();
  u.push(function (e) {
    e.type === RULESET$1 && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(r, l));
  }), i.prefix && u.push(prefixer$1), u.push(stringify$1);
  var p = function p(e, o, s, a) {
    undefined === o && (o = ""), undefined === s && (s = ""), undefined === a && (a = "&"), t = a, n = o, r = new RegExp("\\".concat(n, "\\b"), "g");
    var c = e.replace(xe, ""),
      l = compile$1(s || o ? "".concat(s, " ").concat(o, " { ").concat(c, " }") : c);
    i.namespace && (l = Ve(l, i.namespace));
    var p = [];
    return serialize$1(l, middleware$1(u.concat(rulesheet$1(function (e) {
      return p.push(e);
    })))), p;
  };
  return p.hash = c.length ? c.reduce(function (e, t) {
    return t.name || he(15), M(e, t.name);
  }, F).toString() : "", p;
}
var Me = new ke(),
  ze = Fe(),
  $e = /*#__PURE__*/React.createContext({
    shouldForwardProp: undefined,
    styleSheet: Me,
    stylis: ze
  });
  $e.Consumer;
function Ge() {
  return React.useContext($e);
}
var qe = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        undefined === t && (t = ze);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function () {
        throw he(12, String(n.name));
      });
    }
    return e.prototype.getName = function (e) {
      return undefined === e && (e = ze), this.name + e.hash;
    }, e;
  }(),
  We = function We(e) {
    return e >= "A" && e <= "Z";
  };
function He(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (1 === n && "-" === r && "-" === e[0]) return e;
    We(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function Ue(e) {
    return null == e || false === e || "" === e;
  },
  _Je = function Je(t) {
    var n,
      r,
      o = [];
    for (var s in t) {
      var i = t[s];
      t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || oe(i) ? o.push("".concat(He(s), ":"), i, ";") : ce(i) ? o.push.apply(o, __spreadArray(__spreadArray(["".concat(s, " {")], _Je(i), false), ["}"], false)) : o.push("".concat(He(s), ": ").concat((n = s, null == (r = i) || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || n in unitlessKeys$1 || n.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
    }
    return o;
  };
function Xe(e, t, n, r) {
  if (Ue(e)) return [];
  if (se(e)) return [".".concat(e.styledComponentId)];
  if (oe(e)) {
    if (!oe(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return "production" === process.env.NODE_ENV || "object" != _typeof(o) || Array.isArray(o) || o instanceof qe || ce(o) || null === o || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(o, t, n, r);
  }
  var s;
  return e instanceof qe ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : ce(e) ? _Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function (e) {
    return Xe(e, t, n, r);
  })) : [e.toString()];
}
function Ze(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (oe(n) && !se(n)) return false;
  }
  return true;
}
var Ke = z(v),
  Qe = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (undefined === n || n.isStatic) && Ze(e), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
      if (this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = ie(r, this.staticRulesId);else {
          var o = ae(Xe(this.rules, e, t, n)),
            s = x(M(this.baseHash, o) >>> 0);
          if (!t.hasNameForId(this.componentId, s)) {
            var i = n(o, ".".concat(s), undefined, this.componentId);
            t.insertRules(this.componentId, s, i);
          }
          r = ie(r, s), this.staticRulesId = s;
        }
      } else {
        for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
          var u = this.rules[l];
          if ("string" == typeof u) c += u, "production" !== process.env.NODE_ENV && (a = M(a, u));else if (u) {
            var p = ae(Xe(u, e, t, n));
            a = M(a, p + l), c += p;
          }
        }
        if (c) {
          var d = x(a >>> 0);
          t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), undefined, this.componentId)), r = ie(r, d);
        }
      }
      return r;
    }, e;
  }(),
  et = /*#__PURE__*/React.createContext(undefined);
  et.Consumer;
function rt(e) {
  var n = React.useContext(et),
    o = React.useMemo(function () {
      return function (e, n) {
        if (!e) throw he(14);
        if (oe(e)) {
          var r = e(n);
          if ("production" !== process.env.NODE_ENV && (null === r || Array.isArray(r) || "object" != _typeof(r))) throw he(7);
          return r;
        }
        if (Array.isArray(e) || "object" != _typeof(e)) throw he(8);
        return n ? __assign(__assign({}, n), e) : e;
      }(e.theme, n);
    }, [e.theme, n]);
  return e.children ? /*#__PURE__*/React.createElement(et.Provider, {
    value: o
  }, e.children) : null;
}
var ot = {},
  st = new Set();
function it(e, o, s) {
  var i = se(e),
    a = e,
    c = !L(e),
    p = o.attrs,
    d = undefined === p ? _ : p,
    h = o.componentId,
    f = undefined === h ? function (e, t) {
      var n = "string" != typeof e ? "sc" : R(e);
      ot[n] = (ot[n] || 0) + 1;
      var r = "".concat(n, "-").concat($(v + n + ot[n]));
      return t ? "".concat(t, "-").concat(r) : r;
    }(o.displayName, o.parentComponentId) : h,
    m = o.displayName,
    y = undefined === m ? function (e) {
      return L(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
    }(e) : m,
    g = o.displayName && o.componentId ? "".concat(R(o.displayName), "-").concat(o.componentId) : o.componentId || f,
    S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d,
    w = o.shouldForwardProp;
  if (i && a.shouldForwardProp) {
    var b = a.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      w = function w(e, t) {
        return b(e, t) && E(e, t);
      };
    } else w = b;
  }
  var N = new Qe(s, g, i ? a.componentStyle : undefined);
  function O(e, o) {
    return function (e, o, s) {
      var i = e.attrs,
        a = e.componentStyle,
        c = e.defaultProps,
        p = e.foldedComponentIds,
        d = e.styledComponentId,
        h = e.target,
        f = React.useContext(et),
        m = Ge(),
        y = e.shouldForwardProp || m.shouldForwardProp;
      "production" !== process.env.NODE_ENV && React.useDebugValue(d);
      var v = I(o, f, c) || C,
        g = function (e, n, r) {
          for (var o, s = __assign(__assign({}, n), {
              className: undefined,
              theme: r
            }), i = 0; i < e.length; i += 1) {
            var a = oe(o = e[i]) ? o(s) : o;
            for (var c in a) s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? __assign(__assign({}, s[c]), a[c]) : a[c];
          }
          return n.className && (s.className = ie(s.className, n.className)), s;
        }(i, o, v),
        S = g.as || h,
        w = {};
      for (var b in g) undefined === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b], y || "development" !== process.env.NODE_ENV || isPropValid$1(b) || st.has(b) || !A.has(S) || (st.add(b), console.warn('styled-components: it looks like an unknown prop "'.concat(b, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E = function (e, t) {
        var n = Ge(),
          r = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
        return "production" !== process.env.NODE_ENV && React.useDebugValue(r), r;
      }(a, g);
      "production" !== process.env.NODE_ENV && e.warnTooManyClasses && e.warnTooManyClasses(E);
      var N = ie(p, d);
      return E && (N += " " + E), g.className && (N += " " + g.className), w[L(S) && !A.has(S) ? "class" : "className"] = N, s && (w.ref = s), /*#__PURE__*/React.createElement(S, w);
    }(D, e, o);
  }
  O.displayName = y;
  var D = /*#__PURE__*/React.forwardRef(O);
  return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(e) {
      this._foldedDefaultProps = i ? function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, o = t; r < o.length; r++) le(e, o[r], true);
        return e;
      }({}, a.defaultProps, e) : e;
    }
  }), "production" !== process.env.NODE_ENV && (P(y, g), D.warnTooManyClasses = function (e, t) {
    var n = {},
      r = false;
    return function (o) {
      if (!r && (n[o] = true, Object.keys(n).length >= 200)) {
        var s = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = true, n = {};
      }
    };
  }(y, g)), ue(D, function () {
    return ".".concat(D.styledComponentId);
  }), c && re(D, e, {
    attrs: true,
    componentStyle: true,
    displayName: true,
    foldedComponentIds: true,
    shouldForwardProp: true,
    styledComponentId: true,
    target: true
  }), D;
}
function at(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ct = function ct(e) {
  return Object.assign(e, {
    isCss: true
  });
};
function lt(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
  if (oe(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, true))));
  var o = t;
  return 0 === n.length && 1 === o.length && "string" == typeof o[0] ? Xe(o) : ct(Xe(at(o, n)));
}
function ut(n, r, o) {
  if (undefined === o && (o = C), !r) throw he(1, r);
  var s = function s(t) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return n(r, o, lt.apply(undefined, __spreadArray([t], s, false)));
  };
  return s.attrs = function (e) {
    return ut(n, r, __assign(__assign({}, o), {
      attrs: Array.prototype.concat(o.attrs, e).filter(Boolean)
    }));
  }, s.withConfig = function (e) {
    return ut(n, r, __assign(__assign({}, o), e));
  }, s;
}
var pt = function pt(e) {
    return ut(it, e);
  },
  dt = pt;
A.forEach(function (e) {
  dt[e] = pt(e);
});
var ht = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function (e, t, n, r) {
    var o = r(ae(Xe(this.rules, t, n, r)), ""),
      s = this.componentId + e;
    n.insertRules(s, s, o);
  }, e.prototype.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, e.prototype.renderStyles = function (e, t, n, r) {
    e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();
function ft(n) {
  for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
  var i = lt.apply(undefined, __spreadArray([n], o, false)),
    a = "sc-global-".concat($(JSON.stringify(i))),
    c = new ht(i, a);
  "production" !== process.env.NODE_ENV && P(a);
  var _l = function l(e) {
    var n = Ge(),
      o = React.useContext(et),
      s = React.useRef(n.styleSheet.allocateGSInstance(a)).current;
    return "production" !== process.env.NODE_ENV && React.Children.count(e.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), "production" !== process.env.NODE_ENV && i.some(function (e) {
      return "string" == typeof e && -1 !== e.indexOf("@import");
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), n.styleSheet.server && function (e, n, r, o, s) {
      if (c.isStatic) c.renderStyles(e, b, r, s);else {
        var i = __assign(__assign({}, n), {
          theme: I(n, o, _l.defaultProps)
        });
        c.renderStyles(e, i, r, s);
      }
    }(s, e, n.styleSheet, o, n.stylis), null;
  };
  return /*#__PURE__*/React.memo(_l);
}
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var wt = "__sc-".concat(f, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[wt] || (window[wt] = 0), 1 === window[wt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[wt] += 1);

var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var Nav = dt.nav(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: ", ";\n  height: 100vh;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);\n  transition: width 0.3s ease;\n  z-index: 1000;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])), function (_ref) {
  var $isCollapsed = _ref.$isCollapsed;
  return $isCollapsed ? '60px' : '250px';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
var Ul = dt.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondaryBackground || '#f7f7f7';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius.small || '10px';
});
var Li = dt.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.small;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.secondary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.hover;
});
var HamburgerButton = dt.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n\n  span {\n    width: 24px;\n    height: 2px;\n    background-color: ", ";\n  }\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.secondary;
});
var StyledLink = dt.a(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.hoverLight || '#d3d3d3';
});
var Icon = dt.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin-right: ", ";\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.icons.size;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.small;
});
var Divider = dt.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 90%;\n  height: 1px;\n  background-color: ", ";\n  margin: ", " auto;\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.secondary;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.small;
});
var Header = dt.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", ";\n  margin-bottom: ", ";\n"])), function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.small;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.small;
});
var Logo = dt.img(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-height: 40px;\n  margin-right: auto;\n  display: ", ";\n  transition:\n    display 0.3s ease,\n    opacity 0.3s ease;\n  opacity: ", ";\n"])), function (_ref17) {
  var $isCollapsed = _ref17.$isCollapsed;
  return $isCollapsed ? 'none' : 'block';
}, function (_ref18) {
  var $isCollapsed = _ref18.$isCollapsed;
  return $isCollapsed ? 0 : 1;
});
var SubUl = dt.ul(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0 16px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n"])), function (_ref19) {
  var theme = _ref19.theme;
  return theme.spacing.xsmall;
});
var SubLi = dt.li(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: ", " 0;\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref20) {
  var theme = _ref20.theme;
  return theme.spacing.xsmall;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.secondary;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.fonts.size.small;
});
var ToggleButton = dt.button(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (_ref23) {
  var theme = _ref23.theme;
  return theme.colors.secondary;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.hover;
});

var reactIs = {exports: {}};

var reactIs_production = {};

var hasRequiredReactIs_production;
function requireReactIs_production() {
  if (hasRequiredReactIs_production) return reactIs_production;
  hasRequiredReactIs_production = 1;
  var REACT_ELEMENT_TYPE = Symbol["for"]("react.transitional.element"),
    REACT_PORTAL_TYPE = Symbol["for"]("react.portal"),
    REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment"),
    REACT_STRICT_MODE_TYPE = Symbol["for"]("react.strict_mode"),
    REACT_PROFILER_TYPE = Symbol["for"]("react.profiler");
  var REACT_CONSUMER_TYPE = Symbol["for"]("react.consumer"),
    REACT_CONTEXT_TYPE = Symbol["for"]("react.context"),
    REACT_FORWARD_REF_TYPE = Symbol["for"]("react.forward_ref"),
    REACT_SUSPENSE_TYPE = Symbol["for"]("react.suspense"),
    REACT_SUSPENSE_LIST_TYPE = Symbol["for"]("react.suspense_list"),
    REACT_MEMO_TYPE = Symbol["for"]("react.memo"),
    REACT_LAZY_TYPE = Symbol["for"]("react.lazy"),
    REACT_OFFSCREEN_TYPE = Symbol["for"]("react.offscreen"),
    REACT_CLIENT_REFERENCE = Symbol["for"]("react.client.reference");
  function typeOf(object) {
    if ("object" === _typeof(object) && null !== object) {
      var $$typeof = object.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          switch (object = object.type, object) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
              return object;
            default:
              switch (object = object && object.$$typeof, object) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                  return object;
                case REACT_CONSUMER_TYPE:
                  return object;
                default:
                  return $$typeof;
              }
          }
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  }
  reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
  reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
  reactIs_production.Element = REACT_ELEMENT_TYPE;
  reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
  reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
  reactIs_production.Lazy = REACT_LAZY_TYPE;
  reactIs_production.Memo = REACT_MEMO_TYPE;
  reactIs_production.Portal = REACT_PORTAL_TYPE;
  reactIs_production.Profiler = REACT_PROFILER_TYPE;
  reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
  reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
  reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  reactIs_production.isContextConsumer = function (object) {
    return typeOf(object) === REACT_CONSUMER_TYPE;
  };
  reactIs_production.isContextProvider = function (object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  };
  reactIs_production.isElement = function (object) {
    return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  };
  reactIs_production.isForwardRef = function (object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  };
  reactIs_production.isFragment = function (object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  };
  reactIs_production.isLazy = function (object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  };
  reactIs_production.isMemo = function (object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  };
  reactIs_production.isPortal = function (object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  };
  reactIs_production.isProfiler = function (object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  };
  reactIs_production.isStrictMode = function (object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  };
  reactIs_production.isSuspense = function (object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  };
  reactIs_production.isSuspenseList = function (object) {
    return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
  };
  reactIs_production.isValidElementType = function (type) {
    return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || undefined !== type.getModuleId) ? true : false;
  };
  reactIs_production.typeOf = typeOf;
  return reactIs_production;
}

var reactIs_development = {};

var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  "production" !== process.env.NODE_ENV && function () {
    function typeOf(object) {
      if ("object" === _typeof(object) && null !== object) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object = object.type, object) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return object;
              default:
                switch (object = object && object.$$typeof, object) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object;
                  case REACT_CONSUMER_TYPE:
                    return object;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var REACT_ELEMENT_TYPE = Symbol["for"]("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol["for"]("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol["for"]("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol["for"]("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol["for"]("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol["for"]("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol["for"]("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol["for"]("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol["for"]("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol["for"]("react.memo"),
      REACT_LAZY_TYPE = Symbol["for"]("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol["for"]("react.offscreen"),
      REACT_CLIENT_REFERENCE = Symbol["for"]("react.client.reference");
    reactIs_development.ContextConsumer = REACT_CONSUMER_TYPE;
    reactIs_development.ContextProvider = REACT_CONTEXT_TYPE;
    reactIs_development.Element = REACT_ELEMENT_TYPE;
    reactIs_development.ForwardRef = REACT_FORWARD_REF_TYPE;
    reactIs_development.Fragment = REACT_FRAGMENT_TYPE;
    reactIs_development.Lazy = REACT_LAZY_TYPE;
    reactIs_development.Memo = REACT_MEMO_TYPE;
    reactIs_development.Portal = REACT_PORTAL_TYPE;
    reactIs_development.Profiler = REACT_PROFILER_TYPE;
    reactIs_development.StrictMode = REACT_STRICT_MODE_TYPE;
    reactIs_development.Suspense = REACT_SUSPENSE_TYPE;
    reactIs_development.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    reactIs_development.isContextConsumer = function (object) {
      return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    reactIs_development.isContextProvider = function (object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    reactIs_development.isElement = function (object) {
      return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    reactIs_development.isForwardRef = function (object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    reactIs_development.isFragment = function (object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    reactIs_development.isLazy = function (object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    };
    reactIs_development.isMemo = function (object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    };
    reactIs_development.isPortal = function (object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    };
    reactIs_development.isProfiler = function (object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    };
    reactIs_development.isStrictMode = function (object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    reactIs_development.isSuspense = function (object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    reactIs_development.isSuspenseList = function (object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    reactIs_development.isValidElementType = function (type) {
      return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || undefined !== type.getModuleId) ? true : false;
    };
    reactIs_development.typeOf = typeOf;
  }();
  return reactIs_development;
}

var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === 'production') {
    reactIs.exports = /*@__PURE__*/requireReactIs_production();
  } else {
    reactIs.exports = /*@__PURE__*/requireReactIs_development();
  }
  return reactIs.exports;
}

var reactIsExports = /*@__PURE__*/ requireReactIs();

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (_typeof(item) !== 'object' || item === null) {
    return false;
  }
  var prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/*#__PURE__*/ /*#__PURE__*/React__namespace.isValidElement(source) || reactIsExports.isValidElementType(source) || !isPlainObject(source)) {
    return source;
  }
  var output = {};
  Object.keys(source).forEach(function (key) {
    output[key] = deepClone(source[key]);
  });
  return output;
}

/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _objectSpread2({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (/*#__PURE__*/ /*#__PURE__*/React__namespace.isValidElement(source[key]) || reactIsExports.isValidElementType(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  var url = new URL("https://mui.com/production-error/?code=".concat(code));
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  args.forEach(function (arg) {
    return url.searchParams.append('args[]', arg);
  });
  return "Minified MUI error #".concat(code, "; visit ").concat(url, " for the full message.");
}

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (_typeof(Component) === 'object') {
    switch (Component.$$typeof) {
      case reactIsExports.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case reactIsExports.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @returns resolved props
 */
function resolveProps(defaultProps, props) {
  var output = _objectSpread2({}, props);
  for (var key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      var propName = key;
      if (propName === 'components' || propName === 'slots') {
        output[propName] = _objectSpread2(_objectSpread2({}, defaultProps[propName]), output[propName]);
      } else if (propName === 'componentsProps' || propName === 'slotProps') {
        var defaultSlotProps = defaultProps[propName];
        var slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = _objectSpread2({}, slotProps);
          for (var slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              var slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
            }
          }
        }
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass) {
  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var output = {};
  for (var slotName in slots) {
    var slot = slots[slotName];
    var buffer = '';
    var start = true;
    for (var i = 0; i < slot.length; i += 1) {
      var value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

var defaultGenerator = function defaultGenerator(componentName) {
  return componentName;
};
var createClassNameGenerator = function createClassNameGenerator() {
  var _generate = defaultGenerator;
  return {
    configure: function configure(generator) {
      _generate = generator;
    },
    generate: function generate(componentName) {
      return _generate(componentName);
    },
    reset: function reset() {
      _generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();

var globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot) {
  var globalStatePrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Mui';
  var globalStateClass = globalStateClasses[slot];
  return globalStateClass ? "".concat(globalStatePrefix, "-").concat(globalStateClass) : "".concat(ClassNameGenerator.generate(componentName), "-").concat(slot);
}

function generateUtilityClasses(componentName, slots) {
  var globalStatePrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Mui';
  var result = {};
  slots.forEach(function (slot) {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

function clamp(val) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MIN_SAFE_INTEGER;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_SAFE_INTEGER;
  return Math.max(min, Math.min(val, max));
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

var responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  var sorted = Object.keys(css).filter(function (key) {
    return key.startsWith('@container');
  }).sort(function (a, b) {
    var _a$match, _b$match;
    var regex = /min-width:\s*([0-9.]+)/;
    return +(((_a$match = a.match(regex)) === null || _a$match === undefined ? undefined : _a$match[1]) || 0) - +(((_b$match = b.match(regex)) === null || _b$match === undefined ? undefined : _b$match[1]) || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce(function (acc, key) {
    var value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, _objectSpread2({}, css));
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(function (key) {
    return value.startsWith("@".concat(key));
  }) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  var matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The provided shorthand ".concat("(".concat(shorthand, ")"), " is invalid. The format should be `@<breakpoint | number>` or `@<breakpoint | number>/<container>`.\n") + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, "(".concat(shorthand, ")")));
    }
    return null;
  }
  var _matches = _slicedToArray(matches, 3),
    containerQuery = _matches[1],
    containerName = _matches[2];
  var value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  var toContainerQuery = function toContainerQuery(mediaQuery, name) {
    return mediaQuery.replace('@media', name ? "@container ".concat(name) : '@container');
  };
  function attachCq(node, name) {
    node.up = function () {
      var _themeInput$breakpoin;
      return toContainerQuery((_themeInput$breakpoin = themeInput.breakpoints).up.apply(_themeInput$breakpoin, arguments), name);
    };
    node.down = function () {
      var _themeInput$breakpoin2;
      return toContainerQuery((_themeInput$breakpoin2 = themeInput.breakpoints).down.apply(_themeInput$breakpoin2, arguments), name);
    };
    node.between = function () {
      var _themeInput$breakpoin3;
      return toContainerQuery((_themeInput$breakpoin3 = themeInput.breakpoints).between.apply(_themeInput$breakpoin3, arguments), name);
    };
    node.only = function () {
      var _themeInput$breakpoin4;
      return toContainerQuery((_themeInput$breakpoin4 = themeInput.breakpoints).only.apply(_themeInput$breakpoin4, arguments), name);
    };
    node.not = function () {
      var _themeInput$breakpoin5;
      var result = toContainerQuery((_themeInput$breakpoin5 = themeInput.breakpoints).not.apply(_themeInput$breakpoin5, arguments), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  var node = {};
  var containerQueries = function containerQueries(name) {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return _objectSpread2(_objectSpread2({}, themeInput), {}, {
    containerQueries: containerQueries
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
var defaultContainerQueries = {
  containerQueries: function containerQueries(containerName) {
    return {
      up: function up(key) {
        var result = typeof key === 'number' ? key : values[key] || key;
        if (typeof result === 'number') {
          result = "".concat(result, "px");
        }
        return containerName ? "@container ".concat(containerName, " (min-width:").concat(result, ")") : "@container (min-width:".concat(result, ")");
      }
    };
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  var theme = props.theme || {};
  if (Array.isArray(propValue)) {
    var themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (_typeof(propValue) === 'object') {
    var _themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      if (isCqShorthand(_themeBreakpoints.keys, breakpoint)) {
        var containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(_themeBreakpoints.values || values).includes(breakpoint)) {
        var mediaKey = _themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        var cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  var output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject() {
  var _breakpointsInput$key;
  var breakpointsInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) === null || _breakpointsInput$key === undefined ? undefined : _breakpointsInput$key.reduce(function (acc, key) {
    var breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce(function (acc, key) {
    var breakpointOutput = acc[key];
    var isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

function getPath(obj, path) {
  var checkVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    var val = "vars.".concat(path).split('.').reduce(function (acc, item) {
      return acc && acc[item] ? acc[item] : null;
    }, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce(function (acc, item) {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal) {
  var userValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : propValueFinal;
  var value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  var prop = options.prop,
    _options$cssProperty = options.cssProperty,
    cssProperty = _options$cssProperty === undefined ? options.prop : _options$cssProperty,
    themeKey = options.themeKey,
    transform = options.transform;

  // false positive
   
  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }
    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};
    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, "".concat(prop).concat(propValueFinal === 'default' ? '' : capitalize(propValueFinal)), propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return _defineProperty$1({}, cssProperty, value);
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? _defineProperty$1({}, prop, responsivePropType) : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize$1(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
var getCssProperties = memoize$1(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(''),
    _prop$split2 = _slicedToArray(_prop$split, 2),
    a = _prop$split2[0],
    b = _prop$split2[1];
  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
var paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
var spacingKeys = [].concat(marginKeys, paddingKeys);
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  var themeSpacing = (_getPath = getPath(theme, themeKey, true)) !== null && _getPath !== undefined ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return function (val) {
      if (typeof val === 'string') {
        return val;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof val !== 'number') {
          console.error("MUI: Expected ".concat(propName, " argument to be a number or a string, got ").concat(val, "."));
        }
      }
      if (typeof themeSpacing === 'string') {
        return "calc(".concat(val, " * ").concat(themeSpacing, ")");
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function (val) {
      if (typeof val === 'string') {
        return val;
      }
      var abs = Math.abs(val);
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error(["MUI: The `theme.".concat(themeKey, "` array type cannot be combined with non integer values.") + "You should either use an integer value that can be used as index, or define the `theme.".concat(themeKey, "` as a number.")].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error(["MUI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
        }
      }
      var transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      return "-".concat(transformed);
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error(["MUI: The `theme.".concat(themeKey, "` value (").concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
  }
  return function () {
    return undefined;
  };
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  var cssProperties = getCssProperties(prop);
  var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  var propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  var transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(function (prop) {
    return resolveCssProperty(props, keys, prop, transformer);
  }).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce(function (obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce(function (obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce(function (obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};

function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }
  var handlers = styles.reduce(function (acc, style) {
    style.filterProps.forEach(function (prop) {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
   
  var fn = function fn(props) {
    return Object.keys(props).reduce(function (acc, prop) {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce(function (acc, style) {
    return Object.assign(acc, style.propTypes);
  }, {}) : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return "".concat(value, "px solid");
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop: prop,
    themeKey: 'borders',
    transform: transform
  });
}
var border = createBorderStyle('border', borderTransform);
var borderTop = createBorderStyle('borderTop', borderTransform);
var borderRight = createBorderStyle('borderRight', borderTransform);
var borderBottom = createBorderStyle('borderBottom', borderTransform);
var borderLeft = createBorderStyle('borderLeft', borderTransform);
var borderColor = createBorderStyle('borderColor');
var borderTopColor = createBorderStyle('borderTopColor');
var borderRightColor = createBorderStyle('borderRightColor');
var borderBottomColor = createBorderStyle('borderBottomColor');
var borderLeftColor = createBorderStyle('borderLeftColor');
var outline = createBorderStyle('outline', borderTransform);
var outlineColor = createBorderStyle('outlineColor');

// false positive
 
var borderRadius = function borderRadius(props) {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    var transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    var styleFromPropValue = function styleFromPropValue(propValue) {
      return {
        borderRadius: getValue(transformer, propValue)
      };
    };
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
 
var gap = function gap(props) {
  if (props.gap !== undefined && props.gap !== null) {
    var transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    var styleFromPropValue = function styleFromPropValue(propValue) {
      return {
        gap: getValue(transformer, propValue)
      };
    };
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType
} : {};
gap.filterProps = ['gap'];

// false positive
 
var columnGap = function columnGap(props) {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    var transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    var styleFromPropValue = function styleFromPropValue(propValue) {
      return {
        columnGap: getValue(transformer, propValue)
      };
    };
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
 
var rowGap = function rowGap(props) {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    var transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    var styleFromPropValue = function styleFromPropValue(propValue) {
      return {
        rowGap: getValue(transformer, propValue)
      };
    };
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType
} : {};
rowGap.filterProps = ['rowGap'];
var gridColumn = style$1({
  prop: 'gridColumn'
});
var gridRow = style$1({
  prop: 'gridRow'
});
var gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
var gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
var gridArea = style$1({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
var color = style$1({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
var bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
var backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? "".concat(value * 100, "%") : value;
}
var width = style$1({
  prop: 'width',
  transform: sizingTransform
});
var maxWidth = function maxWidth(props) {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    var styleFromPropValue = function styleFromPropValue(propValue) {
      var _props$theme, _props$theme2;
      var breakpoint = ((_props$theme = props.theme) === null || _props$theme === undefined || (_props$theme = _props$theme.breakpoints) === null || _props$theme === undefined || (_props$theme = _props$theme.values) === null || _props$theme === undefined ? undefined : _props$theme[propValue]) || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) === null || _props$theme2 === undefined || (_props$theme2 = _props$theme2.breakpoints) === null || _props$theme2 === undefined ? undefined : _props$theme2.unit) !== 'px') {
        return {
          maxWidth: "".concat(breakpoint).concat(props.theme.breakpoints.unit)
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
var minWidth = style$1({
  prop: 'minWidth',
  transform: sizingTransform
});
var height = style$1({
  prop: 'height',
  transform: sizingTransform
});
var maxHeight = style$1({
  prop: 'maxHeight',
  transform: sizingTransform
});
var minHeight = style$1({
  prop: 'minHeight',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
var boxSizing = style$1({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

var defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: function transform(value) {
      return {
        '@media print': {
          display: value
        }
      };
    }
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};

function objectsHaveSameKeys() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  var allKeys = objects.reduce(function (keys, object) {
    return keys.concat(Object.keys(object));
  }, []);
  var union = new Set(allKeys);
  return objects.every(function (object) {
    return union.size === Object.keys(object).length;
  });
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    var props = _defineProperty$1(_defineProperty$1({}, prop, val), "theme", theme);
    var options = config[prop];
    if (!options) {
      return _defineProperty$1({}, prop, val);
    }
    var _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === undefined ? prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform,
      style = options.style;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return _defineProperty$1({}, prop, val);
    }
    var themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, "".concat(prop).concat(propValueFinal === 'default' ? '' : capitalize(propValueFinal)), propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return _defineProperty$1({}, cssProperty, value);
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    var _ref4 = props || {},
      sx = _ref4.sx,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === undefined ? {} : _ref4$theme;
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    var config = (_theme$unstable_sxCon = theme.unstable_sxConfig) !== null && _theme$unstable_sxCon !== undefined ? _theme$unstable_sxCon : defaultSxConfig;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      var sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (_typeof(sxInput) !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      var emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      var breakpointsKeys = Object.keys(emptyBreakpoints);
      var css = emptyBreakpoints;
      Object.keys(sxObject).forEach(function (styleKey) {
        var value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (_typeof(value) === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              var breakpointsValues = handleBreakpoints({
                theme: theme
              }, value, function (x) {
                return _defineProperty$1({}, styleKey, x);
              });
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme: theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];

function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here

  return undefined;
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {}
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? undefined : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash(value, length) {
  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof(value, search) {
  return value.indexOf(search);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine(array, callback) {
  return array.map(callback).join('');
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    "return": ''
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy(root, props) {
  return assign(node('', null, null, '', null, null, 0), root, {
    length: -root.length
  }, props);
}

/**
 * @return {number}
 */
function _char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return charat(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return substr(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && charat(characters, length - 1) == 58) {
        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \
    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek()) {
        case 42:
        case 47:
          append(comment(commenter(next(), caret()), root, parent), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = strlen(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = replace(characters, /\f/g, '');
          if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + strlen(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
      switch (characters += from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && strlen(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(_char()), substr(value, 2, -2), 0);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration(value, root, parent, length) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize(children, callback) {
  var output = '';
  var length = sizeof(children);
  for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element["return"] = element["return"] || element.value;
    case COMMENT:
      return '';
    case KEYFRAMES:
      return element["return"] = element.value + '{' + serialize(element.children, callback) + '}';
    case RULESET:
      element.value = element.props.join(',');
  }
  return strlen(children = serialize(element.children, callback)) ? element["return"] = element.value + '{' + children + '}' : '';
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware(collection) {
  var length = sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
    return output;
  };
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element["return"]) callback(element);
  };
}

var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var isBrowser$4 = typeof document !== 'undefined';
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (token(character)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());
  return parsed;
};
var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

 

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;
    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);
    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
  return memoize(function () {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache(options) {
  var key = options.key;
  if (isBrowser$4 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser$4) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var isBrowser$3 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      if (!isBrowser$3 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser$3 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== undefined) {
    return componentSelector;
  }
  switch (_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        var keyframes = interpolation;
        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }
        var serializedStyles = interpolation;
        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = serializedStyles.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)

  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (_typeof(value) !== 'object') {
        var asString = value;
        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && _typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name: name,
    styles: styles,
    next: cursor
  };
}

var isBrowser$2 = typeof document !== 'undefined';
var syncFallback = function syncFallback(create) {
  return create();
};
var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;

var isBrowser$1 = typeof document !== 'undefined';
var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext(
// we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = React.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = React.useContext(EmotionCacheContext);
      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

 
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);

var isBrowser = typeof document !== 'undefined';
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser && rules !== undefined) {
    var _ref2;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var createStyled$1 = function createStyled(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
     
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === undefined) {
       
      styles.push.apply(styles, args);
    } else {
      var templateStringsArr = args[0];
      styles.push(templateStringsArr[0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles.push(args[i], templateStringsArr[i]);
      }
    }
    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = React__namespace.useContext(ThemeContext);
      }
      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/React__namespace.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function (nextTag, nextOptions) {
      var newStyled = createStyled(nextTag, _extends$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      }));
      return newStyled.apply(undefined, styles);
    };
    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// bind it to avoid mutating the original function
var newStyled = createStyled$1.bind(null);
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production;
function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = Symbol["for"]("react.transitional.element"),
    REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment");
  function jsxProd(type, config, maybeKey) {
    var key = null;
    undefined !== maybeKey && (key = "" + maybeKey);
    undefined !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: undefined !== config ? config : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  "production" !== process.env.NODE_ENV && function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === _typeof(type)) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
        case REACT_CONTEXT_TYPE:
          return (type.displayName || "Context") + ".Provider";
        case REACT_CONSUMER_TYPE:
          return (type._context.displayName || "Context") + ".Consumer";
        case REACT_FORWARD_REF_TYPE:
          var innerType = type.render;
          type = type.displayName;
          type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
          return type;
        case REACT_MEMO_TYPE:
          return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
        case REACT_LAZY_TYPE:
          innerType = type._payload;
          type = type._init;
          try {
            return getComponentNameFromType(type(innerType));
          } catch (x) {}
      }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = {
          configurable: true,
          enumerable: true,
          writable: true
        };
        Object.defineProperties(console, {
          log: assign({}, props, {
            value: prevLog
          }),
          info: assign({}, props, {
            value: prevInfo
          }),
          warn: assign({}, props, {
            value: prevWarn
          }),
          error: assign({}, props, {
            value: prevError
          }),
          group: assign({}, props, {
            value: prevGroup
          }),
          groupCollapsed: assign({}, props, {
            value: prevGroupCollapsed
          }),
          groupEnd: assign({}, props, {
            value: prevGroupEnd
          })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (undefined === prefix) try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || "";
        suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (undefined !== frame) return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
            try {
              if (construct) {
                var Fake = function Fake() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function set() {
                    throw Error();
                  }
                });
                if ("object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && "function" === typeof Fake["catch"] && Fake["catch"](function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
          for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");) _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];) _RunInRootFrame$Deter--;
          for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--) if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
            if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
              do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                "function" === typeof fn && componentFrameCache.set(fn, _frame);
                return _frame;
              } while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
            }
            break;
          }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === _typeof(type)) switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          return type = describeNativeComponentFrame(type.render, false), type;
        case REACT_MEMO_TYPE:
          return describeUnknownElementTypeFrameInDEV(type.type);
        case REACT_LAZY_TYPE:
          prototype = type._payload;
          type = type._init;
          try {
            return describeUnknownElementTypeFrameInDEV(type(prototype));
          } catch (x) {}
      }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return false;
      }
      return undefined !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return undefined !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (undefined !== self ? self : null) ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", {
        enumerable: false,
        value: null
      });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
      if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || undefined !== type.getModuleId)) {
        var children = config.children;
        if (undefined !== children) if (isStaticChildren) {
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren], type);
            Object.freeze && Object.freeze(children);
          } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        } else validateChildKeys(children, type);
      } else {
        children = "";
        if (undefined === type || "object" === _typeof(type) && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : undefined !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = _typeof(type);
        console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      undefined !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if ("object" === _typeof(node) && node && node.$$typeof !== REACT_CLIENT_REFERENCE) if (isArrayImpl(node)) for (var i = 0; i < node.length; i++) {
        var child = node[i];
        isValidElement(child) && validateExplicitKey(child, parentType);
      } else if (isValidElement(node)) node._store && (node._store.validated = 1);else if (null === node || "object" !== _typeof(node) ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for (; !(node = i.next()).done;) isValidElement(node.value) && validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
      return info;
    }
    var React$1 = React,
      REACT_ELEMENT_TYPE = Symbol["for"]("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol["for"]("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol["for"]("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol["for"]("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol["for"]("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol["for"]("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol["for"]("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol["for"]("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol["for"]("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol["for"]("react.memo"),
      REACT_LAZY_TYPE = Symbol["for"]("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol["for"]("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      REACT_CLIENT_REFERENCE$2 = Symbol["for"]("react.client.reference"),
      ReactSharedInternals = React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      assign = Object.assign,
      REACT_CLIENT_REFERENCE$1 = Symbol["for"]("react.client.reference"),
      isArrayImpl = Array.isArray,
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix,
      suffix,
      reentry = false;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol["for"]("react.client.reference"),
      specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {},
      ownerHasKeyUseWarning = {};
    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, false, source, self);
    };
    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, true, source, self);
    };
  }();
  return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  if (process.env.NODE_ENV === 'production') {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
function styled$1(tag, options) {
  var stylesFactory = newStyled(tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return function () {
      var component = typeof tag === 'string' ? "\"".concat(tag, "\"") : 'component';
      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }
      if (styles.length === 0) {
        console.error(["MUI: Seems like you called `styled(".concat(component, ")()` without a `style` argument."), 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(function (style) {
        return style === undefined;
      })) {
        console.error("MUI: the styled(".concat(component, ")(...args) API requires all its args to be defined."));
      }
      return stylesFactory.apply(undefined, styles);
    };
  }
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_mutateStyles(tag, processor) {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}

// Emotion only accepts an array, but we want to avoid allocations
var wrapper = [];
// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}

var _excluded$m = ["values", "unit", "step"];
var sortBreakpointsValues = function sortBreakpointsValues(values) {
  var breakpointsAsArray = Object.keys(values).map(function (key) {
    return {
      key: key,
      val: values[key]
    };
  }) || [];
  // Sort in ascending order
  breakpointsAsArray.sort(function (breakpoint1, breakpoint2) {
    return breakpoint1.val - breakpoint2.val;
  });
  return breakpointsAsArray.reduce(function (acc, obj) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, obj.key, obj.val));
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
    values = _breakpoints$values === undefined ? {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    } : _breakpoints$values,
    _breakpoints$unit = breakpoints.unit,
    unit = _breakpoints$unit === undefined ? 'px' : _breakpoints$unit,
    _breakpoints$step = breakpoints.step,
    step = _breakpoints$step === undefined ? 5 : _breakpoints$step,
    other = _objectWithoutProperties$1(breakpoints, _excluded$m);
  var sortedValues = sortBreakpointsValues(values);
  var keys = Object.keys(sortedValues);
  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }
  function between(start, end) {
    var endIndex = keys.indexOf(end);
    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    var keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return _objectSpread2({
    keys: keys,
    values: sortedValues,
    up: up,
    down: down,
    between: between,
    only: only,
    not: not,
    unit: unit
  }, other);
}

var shape = {
  borderRadius: 4
};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createUnarySpacing({
    spacing: spacingInput
  });
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  var spacing = function spacing() {
    for (var _len = arguments.length, argsInput = new Array(_len), _key = 0; _key < _len; _key++) {
      argsInput[_key] = arguments[_key];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error("MUI: Too many arguments provided, expected between 0 and 4, got ".concat(argsInput.length));
      }
    }
    var args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(function (argument) {
      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * With the styled function:
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * With the sx prop:
 * ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={[
 *     { background: '#e5e5e5' },
 *     theme => theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  var theme = this;
  if (theme.vars) {
    var _theme$colorSchemes;
    if (!((_theme$colorSchemes = theme.colorSchemes) !== null && _theme$colorSchemes !== undefined && _theme$colorSchemes[key]) || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    var selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = "*:where(".concat(selector.replace(/\s*&$/, ''), ") &");
    }
    return _defineProperty$1({}, selector, styles);
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

var _excluded$l = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints,
    breakpointsInput = _options$breakpoints === undefined ? {} : _options$breakpoints,
    _options$palette = options.palette,
    paletteInput = _options$palette === undefined ? {} : _options$palette,
    spacingInput = options.spacing,
    _options$shape = options.shape,
    shapeInput = _options$shape === undefined ? {} : _options$shape,
    other = _objectWithoutProperties$1(options, _excluded$l);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints: breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _objectSpread2({
      mode: 'light'
    }, paletteInput),
    spacing: spacing,
    shape: _objectSpread2(_objectSpread2({}, shape), shapeInput)
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles;
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function (acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);
  muiTheme.unstable_sxConfig = _objectSpread2(_objectSpread2({}, defaultSxConfig), other === null || other === undefined ? undefined : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

var _excluded$k = ["variants"];
function preprocessStyles(input) {
  var variants = input.variants,
    style = _objectWithoutProperties$1(input, _excluded$k);
  var result = {
    variants: variants,
    style: internal_serializeStyles(style),
    isProcessed: true
  };

  // Not supported on styled-components
  if (result.style === style) {
    return result;
  }
  if (variants) {
    variants.forEach(function (variant) {
      if (typeof variant.style !== 'function') {
        variant.style = internal_serializeStyles(variant.style);
      }
    });
  }
  return result;
}

var _excluded$j = ["variants"],
  _excluded2$3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

 
 
 

var systemDefaultTheme = createTheme$1();

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return function (_props, styles) {
    return styles[slot];
  };
}
function attachTheme(props, themeId, defaultTheme) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style) {
  /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */

  var resolvedStyle = typeof style === 'function' ? style(props) : style;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap(function (subStyle) {
      return processStyle(props, subStyle);
    });
  }
  if (Array.isArray(resolvedStyle === null || resolvedStyle === undefined ? undefined : resolvedStyle.variants)) {
    var rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = resolvedStyle.style;
    } else {
      resolvedStyle.variants;
        var otherStyles = _objectWithoutProperties$1(resolvedStyle, _excluded$j);
      rootStyle = otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
  }
  if (resolvedStyle !== null && resolvedStyle !== undefined && resolvedStyle.isProcessed) {
    return resolvedStyle.style;
  }
  return resolvedStyle;
}
function processStyleVariants(props, variants) {
  var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var mergedState; // We might not need it, initialized lazily

  variantLoop: for (var i = 0; i < variants.length; i += 1) {
    var variant = variants[i];
    if (typeof variant.props === 'function') {
      mergedState !== null && mergedState !== undefined ? mergedState : mergedState = _objectSpread2(_objectSpread2(_objectSpread2({}, props), props.ownerState), {}, {
        ownerState: props.ownerState
      });
      if (!variant.props(mergedState)) {
        continue;
      }
    } else {
      for (var key in variant.props) {
        var _props$ownerState;
        if (props[key] !== variant.props[key] && ((_props$ownerState = props.ownerState) === null || _props$ownerState === undefined ? undefined : _props$ownerState[key]) !== variant.props[key]) {
          continue variantLoop;
        }
      }
    }
    if (typeof variant.style === 'function') {
      mergedState !== null && mergedState !== undefined ? mergedState : mergedState = _objectSpread2(_objectSpread2(_objectSpread2({}, props), props.ownerState), {}, {
        ownerState: props.ownerState
      });
      results.push(variant.style(mergedState));
    } else {
      results.push(variant.style);
    }
  }
  return results;
}
function createStyled() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var themeId = input.themeId,
    _input$defaultTheme = input.defaultTheme,
    defaultTheme = _input$defaultTheme === undefined ? systemDefaultTheme : _input$defaultTheme,
    _input$rootShouldForw = input.rootShouldForwardProp,
    rootShouldForwardProp = _input$rootShouldForw === undefined ? shouldForwardProp : _input$rootShouldForw,
    _input$slotShouldForw = input.slotShouldForwardProp,
    slotShouldForwardProp = _input$slotShouldForw === undefined ? shouldForwardProp : _input$slotShouldForw;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme);
  }
  var styled = function styled(tag) {
    var inputOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // If `tag` is already a styled component, filter out the `sx` style function
    // to prevent unnecessary styles generated by the composite components.
    internal_mutateStyles(tag, function (styles) {
      return styles.filter(function (style) {
        return style !== styleFunctionSx;
      });
    });
    var componentName = inputOptions.name,
      componentSlot = inputOptions.slot,
      inputSkipVariantsResolver = inputOptions.skipVariantsResolver,
      inputSkipSx = inputOptions.skipSx,
      _inputOptions$overrid = inputOptions.overridesResolver,
      overridesResolver = _inputOptions$overrid === undefined ? defaultOverridesResolver(lowercaseFirstLetter(componentSlot)) : _inputOptions$overrid,
      options = _objectWithoutProperties$1(inputOptions, _excluded2$3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    var skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    var skipSx = inputSkipSx || false;
    var shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    var defaultStyledResolver = styled$1(tag, _objectSpread2({
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot)
    }, options));
    var transformStyle = function transformStyle(style) {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof style === 'function' && style.__emotion_real !== style) {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style);
        };
      }
      if (isPlainObject(style)) {
        var serialized = preprocessStyles(style);
        if (!serialized.variants) {
          return serialized.style;
        }
        return function styleObjectProcessor(props) {
          return processStyle(props, serialized);
        };
      }
      return style;
    };
    var muiStyledResolver = function muiStyledResolver() {
      var expressionsHead = [];
      for (var _len = arguments.length, expressionsInput = new Array(_len), _key = 0; _key < _len; _key++) {
        expressionsInput[_key] = arguments[_key];
      }
      var expressionsBody = expressionsInput.map(transformStyle);
      var expressionsTail = [];

      // Preprocess `props` to set the scoped theme value.
      // This must run before any other expression.
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          var _theme$components;
          var theme = props.theme;
          var styleOverrides = (_theme$components = theme.components) === null || _theme$components === undefined || (_theme$components = _theme$components[componentName]) === null || _theme$components === undefined ? undefined : _theme$components.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          var resolvedStyleOverrides = {};

          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
           
          for (var slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          var _theme$components2;
          var theme = props.theme;
          var themeVariants = theme === null || theme === undefined || (_theme$components2 = theme.components) === null || _theme$components2 === undefined || (_theme$components2 = _theme$components2[componentName]) === null || _theme$components2 === undefined ? undefined : _theme$components2.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants);
        });
      }
      if (!skipSx) {
        expressionsTail.push(styleFunctionSx);
      }

      // This function can be called as a tagged template, so the first argument would contain
      // CSS `string[]` values.
      if (Array.isArray(expressionsBody[0])) {
        var inputStrings = expressionsBody.shift();

        // We need to add placeholders in the tagged template for the custom functions we have
        // possibly added (attachTheme, overrides, variants, and sx).
        var placeholdersHead = new Array(expressionsHead.length).fill('');
        var placeholdersTail = new Array(expressionsTail.length).fill('');
        var outputStrings;
        // prettier-ignore
        {
          outputStrings = [].concat(_toConsumableArray(placeholdersHead), _toConsumableArray(inputStrings), _toConsumableArray(placeholdersTail));
          outputStrings.raw = [].concat(_toConsumableArray(placeholdersHead), _toConsumableArray(inputStrings.raw), _toConsumableArray(placeholdersTail));
        }

        // The only case where we put something before `attachTheme`
        expressionsHead.unshift(outputStrings);
      }
      var expressions = [].concat(expressionsHead, _toConsumableArray(expressionsBody), expressionsTail);
      var Component = defaultStyledResolver.apply(undefined, _toConsumableArray(expressions));
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (process.env.NODE_ENV !== 'production') {
        Component.displayName = generateDisplayName(componentName, componentSlot, tag);
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return "".concat(componentName).concat(capitalize(componentSlot || ''));
  }
  return "Styled(".concat(getDisplayName(tag), ")");
}
function generateStyledLabel(componentName, componentSlot) {
  var label;
  if (process.env.NODE_ENV !== 'production') {
    if (componentName) {
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      label = "".concat(componentName, "-").concat(lowercaseFirstLetter(componentSlot || 'Root'));
    }
  }
  return label;
}
function isObjectEmpty(object) {
   
  for (var _ in object) {
    return false;
  }
  return true;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error("MUI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }
  return clamp(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }
  if (process.env.NODE_ENV !== 'production') {
    if (color.length !== color.trim().length) {
      console.error("MUI: The color: \"".concat(color, "\" is invalid. Make sure the color input doesn't contain leading/trailing space."));
    }
  }
  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Unsupported `".concat(color, "` color.\n") + 'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().' : formatMuiErrorMessage(9, color));
  }
  var values = color.substring(marker + 1, color.length - 1);
  var colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: unsupported `".concat(colorSpace, "` color space.\n") + 'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.' : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values,
    colorSpace: colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
var colorChannel = function colorChannel(color) {
  var decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map(function (val, idx) {
    return decomposedColor.type.includes('hsl') && idx !== 0 ? "".concat(val, "%") : val;
  }).join(' ');
};
var private_safeColorChannel = function private_safeColorChannel(color, warning) {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  var type = color.type,
    colorSpace = color.colorSpace;
  var values = color.values;
  if (type.includes('rgb')) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.includes('hsl')) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }
  if (type.includes('color')) {
    values = "".concat(colorSpace, " ").concat(values.join(' '));
  } else {
    values = "".concat(values.join(', '));
  }
  return "".concat(type, "(").concat(values, ")");
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
    values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);
  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = "/".concat(value);
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes('rgb') || color.type.includes('color')) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes('rgb')) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes('color')) {
    for (var _i = 0; _i < 3; _i += 1) {
      color.values[_i] += (1 - color.values[_i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    return color;
  }
}

var PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object
} : undefined;
function getThemeProps(params) {
  var theme = params.theme,
    name = params.name,
    props = params.props;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  var config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return resolveProps(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return resolveProps(config, props);
  }
  return props;
}
function useDefaultProps$1(_ref2) {
  var props = _ref2.props,
    name = _ref2.name;
  var ctx = React__namespace.useContext(PropsContext);
  return getThemeProps({
    props: props,
    name: name,
    theme: {
      components: ctx
    }
  });
}

/* eslint-disable @typescript-eslint/naming-convention */

// We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
var arg = {
  theme: undefined
};

/**
 * Memoize style function on theme.
 * Intended to be used in styled() calls that only need access to the theme.
 */
function unstable_memoTheme(styleFn) {
  var lastValue;
  var lastTheme;
  return function styleMemoized(props) {
    var value = lastValue;
    if (value === undefined || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = preprocessStyles(styleFn(arg));
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}

/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar$1() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  function appendVar() {
    for (var _len = arguments.length, vars = new Array(_len), _key = 0; _key < _len; _key++) {
      vars[_key] = arguments[_key];
    }
    if (!vars.length) {
      return '';
    }
    var value = vars[0];
    if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return ", var(--".concat(prefix ? "".concat(prefix, "-") : '').concat(value).concat(appendVar.apply(undefined, _toConsumableArray(vars.slice(1))), ")");
    }
    return ", ".concat(value);
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  var getCssVar = function getCssVar(field) {
    for (var _len2 = arguments.length, fallbacks = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      fallbacks[_key2 - 1] = arguments[_key2];
    }
    return "var(--".concat(prefix ? "".concat(prefix, "-") : '').concat(field).concat(appendVar.apply(undefined, fallbacks), ")");
  };
  return getCssVar;
}

/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
var assignNestedKeys = function assignNestedKeys(obj, keys, value) {
  var arrayKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var temp = obj;
  keys.forEach(function (k, index) {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && _typeof(temp) === 'object') {
        temp[k] = value;
      }
    } else if (temp && _typeof(temp) === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};

/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
var walkObjectDeep = function walkObjectDeep(obj, callback, shouldSkipPaths) {
  function recurse(object) {
    var parentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var arrayKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    Object.entries(object).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([].concat(_toConsumableArray(parentKeys), [key]))) {
        if (value !== undefined && value !== null) {
          if (_typeof(value) === 'object' && Object.keys(value).length > 0) {
            recurse(value, [].concat(_toConsumableArray(parentKeys), [key]), Array.isArray(value) ? [].concat(_toConsumableArray(arrayKeys), [key]) : arrayKeys);
          } else {
            callback([].concat(_toConsumableArray(parentKeys), [key]), value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
var getCssValue = function getCssValue(keys, value) {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(function (prop) {
      return keys.includes(prop);
    })) {
      // CSS property that are unitless
      return value;
    }
    var lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().includes('opacity')) {
      // opacity values are unitless
      return value;
    }
    return "".concat(value, "px");
  }
  return value;
};

/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
 * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 */
function cssVarsParser(theme, options) {
  var _ref3 = options || {},
    prefix = _ref3.prefix,
    shouldSkipGeneratingVar = _ref3.shouldSkipGeneratingVar;
  var css = {};
  var vars = {};
  var varsWithDefaults = {};
  walkObjectDeep(theme, function (keys, value, arrayKeys) {
    if (typeof value === 'string' || typeof value === 'number') {
      if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        var cssVar = "--".concat(prefix ? "".concat(prefix, "-") : '').concat(keys.join('-'));
        var resolvedValue = getCssValue(keys, value);
        Object.assign(css, _defineProperty$1({}, cssVar, resolvedValue));
        assignNestedKeys(vars, keys, "var(".concat(cssVar, ")"), arrayKeys);
        assignNestedKeys(varsWithDefaults, keys, "var(".concat(cssVar, ", ").concat(resolvedValue, ")"), arrayKeys);
      }
    }
  }, function (keys) {
    return keys[0] === 'vars';
  } // skip 'vars/*' paths
  );
  return {
    css: css,
    vars: vars,
    varsWithDefaults: varsWithDefaults
  };
}

var _excluded$i = ["colorSchemes", "components", "defaultColorScheme"];
function prepareCssVars(theme) {
  var parserConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _parserConfig$getSele = parserConfig.getSelector,
    getSelector = _parserConfig$getSele === undefined ? defaultGetSelector : _parserConfig$getSele,
    disableCssColorScheme = parserConfig.disableCssColorScheme,
    selector = parserConfig.colorSchemeSelector;
  // @ts-ignore - ignore components do not exist
  var _theme$colorSchemes = theme.colorSchemes,
    colorSchemes = _theme$colorSchemes === undefined ? {} : _theme$colorSchemes;
    theme.components;
    var _theme$defaultColorSc = theme.defaultColorScheme,
    defaultColorScheme = _theme$defaultColorSc === undefined ? 'light' : _theme$defaultColorSc,
    otherTheme = _objectWithoutProperties$1(theme, _excluded$i);
  var _cssVarsParser = cssVarsParser(otherTheme, parserConfig),
    rootVars = _cssVarsParser.vars,
    rootCss = _cssVarsParser.css,
    rootVarsWithDefaults = _cssVarsParser.varsWithDefaults;
  var themeVars = rootVarsWithDefaults;
  var colorSchemesMap = {};
  var defaultScheme = colorSchemes[defaultColorScheme],
    otherColorSchemes = _objectWithoutProperties$1(colorSchemes, [defaultColorScheme].map(_toPropertyKey$1));
  Object.entries(otherColorSchemes || {}).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      scheme = _ref2[1];
    var _cssVarsParser2 = cssVarsParser(scheme, parserConfig),
      vars = _cssVarsParser2.vars,
      css = _cssVarsParser2.css,
      varsWithDefaults = _cssVarsParser2.varsWithDefaults;
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css: css,
      vars: vars
    };
  });
  if (defaultScheme) {
    // default color scheme vars should be merged last to set as default
    var _cssVarsParser3 = cssVarsParser(defaultScheme, parserConfig),
      css = _cssVarsParser3.css,
      vars = _cssVarsParser3.vars,
      varsWithDefaults = _cssVarsParser3.varsWithDefaults;
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css: css,
      vars: vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    var rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector !== null && selector !== undefined && selector.startsWith('data-') && !selector.includes('%s')) {
      // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
      rule = "[".concat(selector, "=\"%s\"]");
    }
    if (colorScheme) {
      if (rule === 'media') {
        var _colorSchemes$colorSc;
        if (theme.defaultColorScheme === colorScheme) {
          return ':root';
        }
        var mode = ((_colorSchemes$colorSc = colorSchemes[colorScheme]) === null || _colorSchemes$colorSc === undefined || (_colorSchemes$colorSc = _colorSchemes$colorSc.palette) === null || _colorSchemes$colorSc === undefined ? undefined : _colorSchemes$colorSc.mode) || colorScheme;
        return _defineProperty$1({}, "@media (prefers-color-scheme: ".concat(mode, ")"), {
          ':root': cssObject
        });
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return ":root, ".concat(rule.replace('%s', String(colorScheme)));
        }
        return rule.replace('%s', String(colorScheme));
      }
    }
    return ':root';
  }
  var generateThemeVars = function generateThemeVars() {
    var vars = _objectSpread2({}, rootVars);
    Object.entries(colorSchemesMap).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        schemeVars = _ref5[1].vars;
      vars = deepmerge(vars, schemeVars);
    });
    return vars;
  };
  var generateStyleSheets = function generateStyleSheets() {
    var stylesheets = [];
    var colorScheme = theme.defaultColorScheme || 'light';
    function insertStyleSheet(key, css) {
      if (Object.keys(css).length) {
        stylesheets.push(typeof key === 'string' ? _defineProperty$1({}, key, _objectSpread2({}, css)) : key);
      }
    }
    insertStyleSheet(getSelector(undefined, _objectSpread2({}, rootCss)), rootCss);
    var defaultSchemeVal = colorSchemesMap[colorScheme],
      other = _objectWithoutProperties$1(colorSchemesMap, [colorScheme].map(_toPropertyKey$1));
    if (defaultSchemeVal) {
      var _colorSchemes$colorSc2;
      // default color scheme has to come before other color schemes
      var _css = defaultSchemeVal.css;
      var cssColorSheme = (_colorSchemes$colorSc2 = colorSchemes[colorScheme]) === null || _colorSchemes$colorSc2 === undefined || (_colorSchemes$colorSc2 = _colorSchemes$colorSc2.palette) === null || _colorSchemes$colorSc2 === undefined ? undefined : _colorSchemes$colorSc2.mode;
      var finalCss = !disableCssColorScheme && cssColorSheme ? _objectSpread2({
        colorScheme: cssColorSheme
      }, _css) : _objectSpread2({}, _css);
      insertStyleSheet(getSelector(colorScheme, _objectSpread2({}, finalCss)), finalCss);
    }
    Object.entries(other).forEach(function (_ref7) {
      var _colorSchemes$key;
      var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        css = _ref8[1].css;
      var cssColorSheme = (_colorSchemes$key = colorSchemes[key]) === null || _colorSchemes$key === undefined || (_colorSchemes$key = _colorSchemes$key.palette) === null || _colorSchemes$key === undefined ? undefined : _colorSchemes$key.mode;
      var finalCss = !disableCssColorScheme && cssColorSheme ? _objectSpread2({
        colorScheme: cssColorSheme
      }, css) : _objectSpread2({}, css);
      insertStyleSheet(getSelector(key, _objectSpread2({}, finalCss)), finalCss);
    });
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars: generateThemeVars,
    generateStyleSheets: generateStyleSheets
  };
}

/* eslint-disable import/prefer-default-export */
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === 'media') {
      if (process.env.NODE_ENV !== 'production') {
        if (colorScheme !== 'light' && colorScheme !== 'dark') {
          console.error("MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '".concat(colorScheme, "'."));
        }
      }
      return "@media (prefers-color-scheme: ".concat(colorScheme, ")");
    }
    if (selector) {
      if (selector.startsWith('data-') && !selector.includes('%s')) {
        return "[".concat(selector, "=\"").concat(colorScheme, "\"] &");
      }
      if (selector === 'class') {
        return ".".concat(colorScheme, " &");
      }
      if (selector === 'data') {
        return "[data-".concat(colorScheme, "] &");
      }
      return "".concat(selector.replace('%s', colorScheme), " &");
    }
    return '&';
  };
}

var common = {
  black: '#000',
  white: '#fff'
};

var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

var purple = {
  50: '#f3e5f5',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  700: '#7b1fa2'};

var red = {
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  700: '#d32f2f',
  800: '#c62828'};

var orange = {
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  700: '#f57c00',
  900: '#e65100'};

var blue = {
  50: '#e3f2fd',
  200: '#90caf9',
  400: '#42a5f5',
  700: '#1976d2',
  800: '#1565c0'};

var lightBlue = {
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  700: '#0288d1',
  900: '#01579b'};

var green = {
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20'};

var _excluded$h = ["mode", "contrastThreshold", "tonalOffset"];
function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      "default": common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
var light = getLight();
function getDark() {
  return {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      "default": '#121212'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
var dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}
function getDefaultSecondary() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}
function getDefaultError() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}
function getDefaultInfo() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}
function getDefaultSuccess() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}
function getDefaultWarning() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'light';
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}
function createPalette(palette) {
  var _palette$mode = palette.mode,
    mode = _palette$mode === undefined ? 'light' : _palette$mode,
    _palette$contrastThre = palette.contrastThreshold,
    contrastThreshold = _palette$contrastThre === undefined ? 3 : _palette$contrastThre,
    _palette$tonalOffset = palette.tonalOffset,
    tonalOffset = _palette$tonalOffset === undefined ? 0.2 : _palette$tonalOffset,
    other = _objectWithoutProperties$1(palette, _excluded$h);
  var primary = palette.primary || getDefaultPrimary(mode);
  var secondary = palette.secondary || getDefaultSecondary(mode);
  var error = palette.error || getDefaultError(mode);
  var info = palette.info || getDefaultInfo(mode);
  var success = palette.success || getDefaultSuccess(mode);
  var warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      var contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(["MUI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  var augmentColor = function augmentColor(_ref) {
    var color = _ref.color,
      name = _ref.name,
      _ref$mainShade = _ref.mainShade,
      mainShade = _ref$mainShade === undefined ? 500 : _ref$mainShade,
      _ref$lightShade = _ref.lightShade,
      lightShade = _ref$lightShade === undefined ? 300 : _ref$lightShade,
      _ref$darkShade = _ref.darkShade,
      darkShade = _ref$darkShade === undefined ? 700 : _ref$darkShade;
    color = _objectSpread2({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The color".concat(name ? " (".concat(name, ")") : '', " provided to augmentColor(color) is invalid.\n") + "The color object needs to have a `main` property or a `".concat(mainShade, "` property.") : formatMuiErrorMessage(11, name ? " (".concat(name, ")") : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The color".concat(name ? " (".concat(name, ")") : '', " provided to augmentColor(color) is invalid.\n") + "`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n") + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : formatMuiErrorMessage(12, name ? " (".concat(name, ")") : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  var modeHydrated;
  if (mode === 'light') {
    modeHydrated = getLight();
  } else if (mode === 'dark') {
    modeHydrated = getDark();
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!modeHydrated) {
      console.error("MUI: The palette mode `".concat(mode, "` is not supported."));
    }
  }
  var paletteOutput = deepmerge(_objectSpread2({
    // A collection of common colors.
    common: _objectSpread2({}, common),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, modeHydrated), other);
  return paletteOutput;
}

function prepareTypographyVars(typography) {
  var vars = {};
  var entries = Object.entries(typography);
  entries.forEach(function (entry) {
    var _entry = _slicedToArray(entry, 2),
      key = _entry[0],
      value = _entry[1];
    if (_typeof(value) === 'object') {
      vars[key] = "".concat(value.fontStyle ? "".concat(value.fontStyle, " ") : '').concat(value.fontVariant ? "".concat(value.fontVariant, " ") : '').concat(value.fontWeight ? "".concat(value.fontWeight, " ") : '').concat(value.fontStretch ? "".concat(value.fontStretch, " ") : '').concat(value.fontSize || '').concat(value.lineHeight ? "/".concat(value.lineHeight, " ") : '').concat(value.fontFamily || '');
    }
  });
  return vars;
}

function createMixins(breakpoints, mixins) {
  return _objectSpread2({
    toolbar: _defineProperty$1(_defineProperty$1({
      minHeight: 56
    }, breakpoints.up('xs'), {
      '@media (orientation: landscape)': {
        minHeight: 48
      }
    }), breakpoints.up('sm'), {
      minHeight: 64
    })
  }, mixins);
}

var _excluded$g = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === undefined ? defaultFontFamily : _ref$fontFamily,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === undefined ? 14 : _ref$fontSize,
    _ref$fontWeightLight = _ref.fontWeightLight,
    fontWeightLight = _ref$fontWeightLight === undefined ? 300 : _ref$fontWeightLight,
    _ref$fontWeightRegula = _ref.fontWeightRegular,
    fontWeightRegular = _ref$fontWeightRegula === undefined ? 400 : _ref$fontWeightRegula,
    _ref$fontWeightMedium = _ref.fontWeightMedium,
    fontWeightMedium = _ref$fontWeightMedium === undefined ? 500 : _ref$fontWeightMedium,
    _ref$fontWeightBold = _ref.fontWeightBold,
    fontWeightBold = _ref$fontWeightBold === undefined ? 700 : _ref$fontWeightBold,
    _ref$htmlFontSize = _ref.htmlFontSize,
    htmlFontSize = _ref$htmlFontSize === undefined ? 16 : _ref$htmlFontSize,
    allVariants = _ref.allVariants,
    pxToRem2 = _ref.pxToRem,
    other = _objectWithoutProperties$1(_ref, _excluded$g);
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  var coef = fontSize / 14;
  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };
  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _objectSpread2(_objectSpread2(_objectSpread2({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}), casing), allVariants);
  };
  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge(_objectSpread2({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep
  });
}

var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

var _excluded$f = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
var duration = {
  shortest: 150,
  shorter: 200,
  "short": 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  var constant = height / 36;

  // https://www.desmos.com/calculator/vbrp3ggqet
  return Math.min(Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
  var mergedEasing = _objectSpread2(_objectSpread2({}, easing), inputTransitions.easing);
  var mergedDuration = _objectSpread2(_objectSpread2({}, duration), inputTransitions.duration);
  var create = function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
      durationOption = _options$duration === undefined ? mergedDuration.standard : _options$duration,
      _options$easing = options.easing,
      easingOption = _options$easing === undefined ? mergedEasing.easeInOut : _options$easing,
      _options$delay = options.delay,
      delay = _options$delay === undefined ? 0 : _options$delay,
      other = _objectWithoutProperties$1(options, _excluded$f);
    if (process.env.NODE_ENV !== 'production') {
      var isString = function isString(value) {
        return typeof value === 'string';
      };
      var isNumber = function isNumber(value) {
        return !Number.isNaN(parseFloat(value));
      };
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("MUI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (_typeof(options) !== 'object') {
        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
      }
      if (Object.keys(other).length !== 0) {
        console.error("MUI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }
    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  };
  return _objectSpread2(_objectSpread2({
    getAutoHeightDuration: getAutoHeightDuration,
    create: create
  }, inputTransitions), {}, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

function isSerializable(val) {
  return isPlainObject(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}

/**
 * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */
function stringifyTheme() {
  var baseTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var serializableTheme = _objectSpread2({}, baseTheme);
  function serializeTheme(object) {
    var array = Object.entries(object);
     
    for (var index = 0; index < array.length; index++) {
      var _array$index = _slicedToArray(array[index], 2),
        key = _array$index[0],
        value = _array$index[1];
      if (!isSerializable(value) || key.startsWith('unstable_')) {
        delete object[key];
      } else if (isPlainObject(value)) {
        object[key] = _objectSpread2({}, value);
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return "import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ".concat(JSON.stringify(serializableTheme, null, 2), ";\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;");
}

var _excluded$e = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createThemeNoVars() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options.breakpoints;
    var _options$mixins = options.mixins,
    mixinsInput = _options$mixins === undefined ? {} : _options$mixins;
    options.spacing;
    var _options$palette = options.palette,
    paletteInput = _options$palette === undefined ? {} : _options$palette,
    _options$transitions = options.transitions,
    transitionsInput = _options$transitions === undefined ? {} : _options$transitions,
    _options$typography = options.typography,
    typographyInput = _options$typography === undefined ? {} : _options$typography;
    options.shape;
    var other = _objectWithoutProperties$1(options, _excluded$e);
  if (options.vars) {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `vars` is a private field used for CSS variables support.\n' + 'Please use another name.' : formatMuiErrorMessage(20));
  }
  var palette = createPalette(paletteInput);
  var systemTheme = createTheme$1(options);
  var muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _objectSpread2({}, zIndex)
  });
  muiTheme = deepmerge(muiTheme, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function (acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    var stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    var traverse = function traverse(node, component) {
      var key;

       
      for (key in node) {
        var child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            var stateClass = generateUtilityClass('', key);
            console.error(["MUI: The `".concat(component, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', "Instead, you need to use the '&.".concat(stateClass, "' syntax:"), JSON.stringify({
              root: _defineProperty$1({}, "&.".concat(stateClass), child)
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(function (component) {
      var styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith('Mui')) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = _objectSpread2(_objectSpread2({}, defaultSxConfig), other === null || other === undefined ? undefined : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  muiTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return muiTheme;
}

// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
  var alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * Math.pow(elevation, 2);
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1000;
}

var _excluded$d = ["palette", "opacity", "overlays"];
var defaultDarkOverlays = _toConsumableArray(Array(25)).map(function (_, index) {
  if (index === 0) {
    return 'none';
  }
  var overlay = getOverlayAlpha(index);
  return "linear-gradient(rgba(255 255 255 / ".concat(overlay, "), rgba(255 255 255 / ").concat(overlay, "))");
});
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
    inputUnderline: mode === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
    switchTrack: mode === 'dark' ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  var _options$palette = options.palette,
    paletteInput = _options$palette === undefined ? {
      mode: 'light'
    } : _options$palette,
    opacity = options.opacity,
    overlays = options.overlays,
    rest = _objectWithoutProperties$1(options, _excluded$d);
  var palette = createPalette(paletteInput);
  return _objectSpread2({
    palette: palette,
    opacity: _objectSpread2(_objectSpread2({}, getOpacity(palette.mode)), opacity),
    overlays: overlays || getOverlays(palette.mode)
  }, rest);
}

function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!((_keys$ = keys[1]) !== null && _keys$ !== undefined && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
}

/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */
var excludeVariablesFromRoot = function excludeVariablesFromRoot(cssVarPrefix) {
  return [].concat(_toConsumableArray(_toConsumableArray(Array(25)).map(function (_, index) {
    return "--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "overlays-").concat(index);
  })), ["--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "palette-AppBar-darkBg"), "--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "palette-AppBar-darkColor")]);
};

var defaultGetSelector = (function (theme) {
  return function (colorScheme, css) {
    var root = theme.rootSelector || ':root';
    var selector = theme.colorSchemeSelector;
    var rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector !== null && selector !== undefined && selector.startsWith('data-') && !selector.includes('%s')) {
      // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
      rule = "[".concat(selector, "=\"%s\"]");
    }
    if (theme.defaultColorScheme === colorScheme) {
      if (colorScheme === 'dark') {
        var excludedVariables = {};
        excludeVariablesFromRoot(theme.cssVarPrefix).forEach(function (cssVar) {
          excludedVariables[cssVar] = css[cssVar];
          delete css[cssVar];
        });
        if (rule === 'media') {
          return _defineProperty$1(_defineProperty$1({}, root, css), "@media (prefers-color-scheme: dark)", _defineProperty$1({}, root, excludedVariables));
        }
        if (rule) {
          return _defineProperty$1(_defineProperty$1({}, rule.replace('%s', colorScheme), excludedVariables), "".concat(root, ", ").concat(rule.replace('%s', colorScheme)), css);
        }
        return _defineProperty$1({}, root, _objectSpread2(_objectSpread2({}, css), excludedVariables));
      }
      if (rule && rule !== 'media') {
        return "".concat(root, ", ").concat(rule.replace('%s', String(colorScheme)));
      }
    } else if (colorScheme) {
      if (rule === 'media') {
        return _defineProperty$1({}, "@media (prefers-color-scheme: ".concat(String(colorScheme), ")"), _defineProperty$1({}, root, css));
      }
      if (rule) {
        return rule.replace('%s', String(colorScheme));
      }
    }
    return root;
  };
});

var _excluded$c = ["palette"],
  _excluded2$2 = ["colorSchemes", "defaultColorScheme", "disableCssColorScheme", "cssVarPrefix", "shouldSkipGeneratingVar", "colorSchemeSelector", "rootSelector"];
function assignNode(obj, keys) {
  keys.forEach(function (k) {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (typeof color !== 'string' || !color.startsWith('hsl')) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!("".concat(key, "Channel") in obj)) {
    // custom channel token is not provided, generate one.
    // if channel token can't be generated, show a warning.
    obj["".concat(key, "Channel")] = private_safeColorChannel(toRgb(obj[key]), "MUI: Can't create `palette.".concat(key, "Channel` because `palette.").concat(key, "` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().") + '\n' + "To suppress this warning, you need to explicitly provide the `palette.".concat(key, "Channel` as a string (in rgb format, for example \"12 12 12\") or undefined if you want to remove the channel token."));
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === 'number') {
    return "".concat(spacingInput, "px");
  }
  if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return '8px';
}
var silent = function silent(fn) {
  try {
    return fn();
  } catch (error) {
    // ignore error
  }
  return undefined;
};
var createGetCssVar = function createGetCssVar() {
  var cssVarPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mui';
  return createGetCssVar$1(cssVarPrefix);
};
function attachColorScheme$1(colorSchemes, scheme, restTheme, colorScheme) {
  var _scheme2, _scheme3, _scheme4;
  if (!scheme) {
    return undefined;
  }
  scheme = scheme === true ? {} : scheme;
  var mode = colorScheme === 'dark' ? 'dark' : 'light';
  if (!restTheme) {
    var _scheme;
    colorSchemes[colorScheme] = createColorScheme(_objectSpread2(_objectSpread2({}, scheme), {}, {
      palette: _objectSpread2({
        mode: mode
      }, (_scheme = scheme) === null || _scheme === undefined ? undefined : _scheme.palette)
    }));
    return undefined;
  }
  var _createThemeNoVars = createThemeNoVars(_objectSpread2(_objectSpread2({}, restTheme), {}, {
      palette: _objectSpread2({
        mode: mode
      }, (_scheme2 = scheme) === null || _scheme2 === undefined ? undefined : _scheme2.palette)
    })),
    palette = _createThemeNoVars.palette,
    muiTheme = _objectWithoutProperties$1(_createThemeNoVars, _excluded$c);
  colorSchemes[colorScheme] = _objectSpread2(_objectSpread2({}, scheme), {}, {
    palette: palette,
    opacity: _objectSpread2(_objectSpread2({}, getOpacity(mode)), (_scheme3 = scheme) === null || _scheme3 === undefined ? undefined : _scheme3.opacity),
    overlays: ((_scheme4 = scheme) === null || _scheme4 === undefined ? undefined : _scheme4.overlays) || getOverlays(mode)
  });
  return muiTheme;
}

/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */
function createThemeWithVars() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$colorSchemes = options.colorSchemes,
    colorSchemesInput = _options$colorSchemes === undefined ? {
      light: true
    } : _options$colorSchemes,
    defaultColorSchemeInput = options.defaultColorScheme,
    _options$disableCssCo = options.disableCssColorScheme,
    disableCssColorScheme = _options$disableCssCo === undefined ? false : _options$disableCssCo,
    _options$cssVarPrefix = options.cssVarPrefix,
    cssVarPrefix = _options$cssVarPrefix === undefined ? 'mui' : _options$cssVarPrefix,
    _options$shouldSkipGe = options.shouldSkipGeneratingVar,
    shouldSkipGeneratingVar$1 = _options$shouldSkipGe === undefined ? shouldSkipGeneratingVar : _options$shouldSkipGe,
    _options$colorSchemeS = options.colorSchemeSelector,
    selector = _options$colorSchemeS === undefined ? colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined : _options$colorSchemeS,
    _options$rootSelector = options.rootSelector,
    rootSelector = _options$rootSelector === undefined ? ':root' : _options$rootSelector,
    input = _objectWithoutProperties$1(options, _excluded2$2);
  var firstColorScheme = Object.keys(colorSchemesInput)[0];
  var defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
  var getCssVar = createGetCssVar(cssVarPrefix);
  var defaultSchemeInput = colorSchemesInput[defaultColorScheme],
    builtInLight = colorSchemesInput.light,
    builtInDark = colorSchemesInput.dark,
    customColorSchemes = _objectWithoutProperties$1(colorSchemesInput, [defaultColorScheme, "light", "dark"].map(_toPropertyKey$1));
  var colorSchemes = _objectSpread2({}, customColorSchemes);
  var defaultScheme = defaultSchemeInput;

  // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
  if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `colorSchemes.".concat(defaultColorScheme, "` option is either missing or invalid.") : formatMuiErrorMessage(21, defaultColorScheme));
  }

  // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
  var muiTheme = attachColorScheme$1(colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme$1(colorSchemes, builtInLight, undefined, 'light');
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme$1(colorSchemes, builtInDark, undefined, 'dark');
  }
  var theme = _objectSpread2(_objectSpread2({
    defaultColorScheme: defaultColorScheme
  }, muiTheme), {}, {
    cssVarPrefix: cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector: rootSelector,
    getCssVar: getCssVar,
    colorSchemes: colorSchemes,
    font: _objectSpread2(_objectSpread2({}, prepareTypographyVars(muiTheme.typography)), muiTheme.font),
    spacing: getSpacingVal(input.spacing)
  });
  Object.keys(theme.colorSchemes).forEach(function (key) {
    var palette = theme.colorSchemes[key].palette;
    var setCssVarColor = function setCssVarColor(cssVar) {
      var tokens = cssVar.split('-');
      var color = tokens[1];
      var colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };

    // attach black & white channels to common node
    if (palette.mode === 'light') {
      setColor(palette.common, 'background', '#fff');
      setColor(palette.common, 'onBackground', '#000');
    }
    if (palette.mode === 'dark') {
      setColor(palette.common, 'background', '#000');
      setColor(palette.common, 'onBackground', '#fff');
    }

    // assign component variables
    assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
    if (palette.mode === 'light') {
      setColor(palette.Alert, 'errorColor', private_safeDarken(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeDarken(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeDarken(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeDarken(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
      setColor(palette.Alert, 'errorFilledColor', silent(function () {
        return palette.getContrastText(palette.error.main);
      }));
      setColor(palette.Alert, 'infoFilledColor', silent(function () {
        return palette.getContrastText(palette.info.main);
      }));
      setColor(palette.Alert, 'successFilledColor', silent(function () {
        return palette.getContrastText(palette.success.main);
      }));
      setColor(palette.Alert, 'warningFilledColor', silent(function () {
        return palette.getContrastText(palette.warning.main);
      }));
      setColor(palette.Alert, 'errorStandardBg', private_safeLighten(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeLighten(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeLighten(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeLighten(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
      setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, 'errorBg', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.LinearProgress, 'infoBg', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.LinearProgress, 'successBg', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.LinearProgress, 'warningBg', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.Skeleton, 'bg', "rgba(".concat(setCssVarColor('palette-text-primaryChannel'), " / 0.11)"));
      setColor(palette.Slider, 'primaryTrack', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Slider, 'secondaryTrack', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Slider, 'errorTrack', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Slider, 'infoTrack', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Slider, 'successTrack', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Slider, 'warningTrack', private_safeLighten(palette.warning.main, 0.62));
      var snackbarContentBackground = private_safeEmphasize(palette.background["default"], 0.8);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(function () {
        return palette.getContrastText(snackbarContentBackground);
      }));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Switch, 'errorDisabledColor', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Switch, 'infoDisabledColor', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Switch, 'successDisabledColor', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Switch, 'warningDisabledColor', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.TableCell, 'border', private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }
    if (palette.mode === 'dark') {
      setColor(palette.Alert, 'errorColor', private_safeLighten(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeLighten(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeLighten(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeLighten(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
      setColor(palette.Alert, 'errorFilledColor', silent(function () {
        return palette.getContrastText(palette.error.dark);
      }));
      setColor(palette.Alert, 'infoFilledColor', silent(function () {
        return palette.getContrastText(palette.info.dark);
      }));
      setColor(palette.Alert, 'successFilledColor', silent(function () {
        return palette.getContrastText(palette.success.dark);
      }));
      setColor(palette.Alert, 'warningFilledColor', silent(function () {
        return palette.getContrastText(palette.warning.dark);
      }));
      setColor(palette.Alert, 'errorStandardBg', private_safeDarken(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeDarken(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeDarken(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeDarken(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
      setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
      setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
      setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, 'errorBg', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.LinearProgress, 'infoBg', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.LinearProgress, 'successBg', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.LinearProgress, 'warningBg', private_safeDarken(palette.warning.main, 0.5));
      setColor(palette.Skeleton, 'bg', "rgba(".concat(setCssVarColor('palette-text-primaryChannel'), " / 0.13)"));
      setColor(palette.Slider, 'primaryTrack', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.Slider, 'secondaryTrack', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.Slider, 'errorTrack', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.Slider, 'infoTrack', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.Slider, 'successTrack', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.Slider, 'warningTrack', private_safeDarken(palette.warning.main, 0.5));
      var _snackbarContentBackground = private_safeEmphasize(palette.background["default"], 0.98);
      setColor(palette.SnackbarContent, 'bg', _snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(function () {
        return palette.getContrastText(_snackbarContentBackground);
      }));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeDarken(palette.primary.main, 0.55));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeDarken(palette.secondary.main, 0.55));
      setColor(palette.Switch, 'errorDisabledColor', private_safeDarken(palette.error.main, 0.55));
      setColor(palette.Switch, 'infoDisabledColor', private_safeDarken(palette.info.main, 0.55));
      setColor(palette.Switch, 'successDisabledColor', private_safeDarken(palette.success.main, 0.55));
      setColor(palette.Switch, 'warningDisabledColor', private_safeDarken(palette.warning.main, 0.55));
      setColor(palette.TableCell, 'border', private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }

    // MUI X - DataGrid needs this token.
    setColorChannel(palette.background, 'default');

    // added for consistency with the `background.default` token
    setColorChannel(palette.background, 'paper');
    setColorChannel(palette.common, 'background');
    setColorChannel(palette.common, 'onBackground');
    setColorChannel(palette, 'divider');
    Object.keys(palette).forEach(function (color) {
      var colors = palette[color];

      // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

      if (color !== 'tonalOffset' && colors && _typeof(colors) === 'object') {
        // Silent the error for custom palettes.
        if (colors.main) {
          setColor(palette[color], 'mainChannel', private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], 'lightChannel', private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], 'darkChannel', private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], 'contrastTextChannel', private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === 'text') {
          // Text colors: text.primary, text.secondary
          setColorChannel(palette[color], 'primary');
          setColorChannel(palette[color], 'secondary');
        }
        if (color === 'action') {
          // Action colors: action.active, action.selected
          if (colors.active) {
            setColorChannel(palette[color], 'active');
          }
          if (colors.selected) {
            setColorChannel(palette[color], 'selected');
          }
        }
      }
    });
  });
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  theme = args.reduce(function (acc, argument) {
    return deepmerge(acc, argument);
  }, theme);
  var parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme: disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
    getSelector: defaultGetSelector(theme)
  };
  var _prepareCssVars = prepareCssVars(theme, parserConfig),
    vars = _prepareCssVars.vars,
    generateThemeVars = _prepareCssVars.generateThemeVars,
    generateStyleSheets = _prepareCssVars.generateStyleSheets;
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
  theme.unstable_sxConfig = _objectSpread2(_objectSpread2({}, defaultSxConfig), input === null || input === undefined ? undefined : input.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return theme;
}

var _excluded$b = ["palette", "cssVariables", "colorSchemes", "defaultColorScheme"];
 
function attachColorScheme(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return undefined;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = _objectSpread2(_objectSpread2({}, colorScheme !== true && colorScheme), {}, {
      palette: createPalette(_objectSpread2(_objectSpread2({}, colorScheme === true ? {} : colorScheme.palette), {}, {
        mode: scheme
      })) // cast type to skip module augmentation test
    });
  }
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var palette = options.palette,
    _options$cssVariables = options.cssVariables,
    cssVariables = _options$cssVariables === undefined ? false : _options$cssVariables,
    _options$colorSchemes = options.colorSchemes,
    initialColorSchemes = _options$colorSchemes === undefined ? !palette ? {
      light: true
    } : undefined : _options$colorSchemes,
    _options$defaultColor = options.defaultColorScheme,
    initialDefaultColorScheme = _options$defaultColor === undefined ? palette === null || palette === undefined ? undefined : palette.mode : _options$defaultColor,
    rest = _objectWithoutProperties$1(options, _excluded$b);
  var defaultColorSchemeInput = initialDefaultColorScheme || 'light';
  var defaultScheme = initialColorSchemes === null || initialColorSchemes === undefined ? undefined : initialColorSchemes[defaultColorSchemeInput];
  var colorSchemesInput = _objectSpread2(_objectSpread2({}, initialColorSchemes), palette ? _defineProperty$1({}, defaultColorSchemeInput, _objectSpread2(_objectSpread2({}, typeof defaultScheme !== 'boolean' && defaultScheme), {}, {
    palette: palette
  })) : undefined);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (cssVariables === false) {
    if (!('colorSchemes' in options)) {
      // Behaves exactly as v5
      return createThemeNoVars.apply(undefined, [options].concat(args));
    }
    var paletteOptions = palette;
    if (!('palette' in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === 'dark') {
          // @ts-ignore to prevent the module augmentation test from failing
          paletteOptions = {
            mode: 'dark'
          };
        }
      }
    }
    var theme = createThemeNoVars.apply(undefined, [_objectSpread2(_objectSpread2({}, options), {}, {
      palette: paletteOptions
    })].concat(args));
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === 'light') {
      theme.colorSchemes.light = _objectSpread2(_objectSpread2({}, colorSchemesInput.light !== true && colorSchemesInput.light), {}, {
        palette: theme.palette
      });
      attachColorScheme(theme, 'dark', colorSchemesInput.dark);
    }
    if (theme.palette.mode === 'dark') {
      theme.colorSchemes.dark = _objectSpread2(_objectSpread2({}, colorSchemesInput.dark !== true && colorSchemesInput.dark), {}, {
        palette: theme.palette
      });
      attachColorScheme(theme, 'light', colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars.apply(undefined, [_objectSpread2(_objectSpread2({}, rest), {}, {
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput
  }, typeof cssVariables !== 'boolean' && cssVariables)].concat(args));
}

var defaultTheme$2 = createTheme();

var THEME_ID = '$$material';

// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}

var rootShouldForwardProp = function rootShouldForwardProp(prop) {
  return slotShouldForwardProp(prop) && prop !== 'classes';
};

var styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$2,
  rootShouldForwardProp: rootShouldForwardProp
});

var memoTheme = unstable_memoTheme;

process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : undefined;
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}

function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

var _excluded$a = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var color = ownerState.color,
    fontSize = ownerState.fontSize,
    classes = ownerState.classes;
  var slots = {
    root: ['root', color !== 'inherit' && "color".concat(capitalize(color)), "fontSize".concat(capitalize(fontSize))]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, ownerState.color !== 'inherit' && styles["color".concat(capitalize(ownerState.color))], styles["fontSize".concat(capitalize(ownerState.fontSize))]];
  }
})(memoTheme(function (_ref) {
  var _theme$transitions, _theme$transitions$cr, _transitions, _theme$vars, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _theme$vars2, _palette2, _theme$vars4, _palette3, _theme$vars5;
  var theme = _ref.theme;
  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) === null || _theme$transitions === undefined || (_theme$transitions$cr = _theme$transitions.create) === null || _theme$transitions$cr === undefined ? undefined : _theme$transitions$cr.call(_theme$transitions, 'fill', {
      duration: (_transitions = ((_theme$vars = theme.vars) !== null && _theme$vars !== undefined ? _theme$vars : theme).transitions) === null || _transitions === undefined || (_transitions = _transitions.duration) === null || _transitions === undefined ? undefined : _transitions.shorter
    }),
    variants: [{
      props: function props(_props) {
        return !_props.hasSvgAsChild;
      },
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: 'currentColor'
      }
    }, {
      props: {
        fontSize: 'inherit'
      },
      style: {
        fontSize: 'inherit'
      }
    }, {
      props: {
        fontSize: 'small'
      },
      style: {
        fontSize: ((_theme$typography = theme.typography) === null || _theme$typography === undefined || (_theme$typography$pxT = _theme$typography.pxToRem) === null || _theme$typography$pxT === undefined ? undefined : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem'
      }
    }, {
      props: {
        fontSize: 'medium'
      },
      style: {
        fontSize: ((_theme$typography2 = theme.typography) === null || _theme$typography2 === undefined || (_theme$typography2$px = _theme$typography2.pxToRem) === null || _theme$typography2$px === undefined ? undefined : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem'
      }
    }, {
      props: {
        fontSize: 'large'
      },
      style: {
        fontSize: ((_theme$typography3 = theme.typography) === null || _theme$typography3 === undefined || (_theme$typography3$px = _theme$typography3.pxToRem) === null || _theme$typography3$px === undefined ? undefined : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
      }
    }].concat(_toConsumableArray(Object.entries(((_theme$vars2 = theme.vars) !== null && _theme$vars2 !== undefined ? _theme$vars2 : theme).palette).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        value = _ref3[1];
      return value && value.main;
    }).map(function (_ref4) {
      var _palette, _theme$vars3;
      var _ref5 = _slicedToArray(_ref4, 1),
        color = _ref5[0];
      return {
        props: {
          color: color
        },
        style: {
          color: (_palette = ((_theme$vars3 = theme.vars) !== null && _theme$vars3 !== undefined ? _theme$vars3 : theme).palette) === null || _palette === undefined || (_palette = _palette[color]) === null || _palette === undefined ? undefined : _palette.main
        }
      };
    })), [{
      props: {
        color: 'action'
      },
      style: {
        color: (_palette2 = ((_theme$vars4 = theme.vars) !== null && _theme$vars4 !== undefined ? _theme$vars4 : theme).palette) === null || _palette2 === undefined || (_palette2 = _palette2.action) === null || _palette2 === undefined ? undefined : _palette2.active
      }
    }, {
      props: {
        color: 'disabled'
      },
      style: {
        color: (_palette3 = ((_theme$vars5 = theme.vars) !== null && _theme$vars5 !== undefined ? _theme$vars5 : theme).palette) === null || _palette3 === undefined || (_palette3 = _palette3.action) === null || _palette3 === undefined ? undefined : _palette3.disabled
      }
    }, {
      props: {
        color: 'inherit'
      },
      style: {
        color: undefined
      }
    }])
  };
}));
var SvgIcon = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
  var props = useDefaultProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  var children = props.children,
    className = props.className,
    _props$color = props.color,
    color = _props$color === undefined ? 'inherit' : _props$color,
    _props$component = props.component,
    component = _props$component === undefined ? 'svg' : _props$component,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === undefined ? 'medium' : _props$fontSize,
    htmlColor = props.htmlColor,
    _props$inheritViewBox = props.inheritViewBox,
    inheritViewBox = _props$inheritViewBox === undefined ? false : _props$inheritViewBox,
    titleAccess = props.titleAccess,
    _props$viewBox = props.viewBox,
    viewBox = _props$viewBox === undefined ? '0 0 24 24' : _props$viewBox,
    other = _objectWithoutProperties$1(props, _excluded$a);
  var hasSvgAsChild = /*#__PURE__*/ /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
  var ownerState = _objectSpread2(_objectSpread2({}, props), {}, {
    color: color,
    component: component,
    fontSize: fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox: inheritViewBox,
    viewBox: viewBox,
    hasSvgAsChild: hasSvgAsChild
  });
  var more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntimeExports.jsxs(SvgIconRoot, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more), other), hasSvgAsChild && children.props), {}, {
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/jsxRuntimeExports.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : undefined;
SvgIcon.muiName = 'SvgIcon';

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/jsxRuntimeExports.jsx(SvgIcon, _objectSpread2(_objectSpread2({
      "data-testid": "".concat(displayName, "Icon"),
      ref: ref
    }, props), {}, {
      children: path
    }));
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = "".concat(displayName, "Icon");
  }
  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/React__namespace.memo(/*#__PURE__*/React__namespace.forwardRef(Component));
}

var ArrowRightIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "m10 17 5-5-5-5z"
}), 'ArrowRight');

var ArrowDropDownIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "m7 10 5 5 5-5z"
}), 'ArrowDropDown');

var Menu = function Menu(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === undefined ? {
      items: [],
      logo: ''
    } : _ref$config,
    _ref$theme = _ref.theme,
    theme = _ref$theme === undefined ? {} : _ref$theme,
    externalIsCollapsed = _ref.isCollapsed,
    toggleMenu = _ref.toggleMenu,
    _ref$LinkComponent = _ref.LinkComponent,
    LinkComponent = _ref$LinkComponent === undefined ? 'a' : _ref$LinkComponent;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    internalIsCollapsed = _useState2[0],
    setInternalIsCollapsed = _useState2[1];
  var _useState3 = React.useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    openSubmenus = _useState4[0],
    setOpenSubmenus = _useState4[1];
  var isCollapsed = externalIsCollapsed !== undefined ? externalIsCollapsed : internalIsCollapsed;
  var handleToggleMenu = function handleToggleMenu() {
    if (toggleMenu) {
      toggleMenu();
    } else {
      setInternalIsCollapsed(function (prev) {
        return !prev;
      });
    }
  };
  var toggleSubmenu = function toggleSubmenu(index) {
    setOpenSubmenus(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty$1({}, index, !prev[index]));
    });
  };
  var handleLinkClick = function handleLinkClick(e, item, index) {
    if (item.children) {
      e.preventDefault();
      toggleSubmenu(index);
    }
  };
  return /*#__PURE__*/React.createElement(rt, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Nav, {
    $isCollapsed: isCollapsed
  }, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Logo, {
    src: config.logo,
    alt: "Logo",
    $isCollapsed: isCollapsed
  }), /*#__PURE__*/React.createElement(HamburgerButton, {
    onClick: handleToggleMenu
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px'
    }
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Ul, null, config.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(Li, null, item.link ? /*#__PURE__*/React.createElement(LinkComponent, {
      href: item.link,
      passHref: true
    }, /*#__PURE__*/React.createElement(StyledLink, null, /*#__PURE__*/React.createElement(Icon, null, item.icon && /*#__PURE__*/React.isValidElement(/*#__PURE__*/React.createElement(item.icon, null)) ? /*#__PURE__*/React.createElement(item.icon, null) : null), !isCollapsed && item.label)) : /*#__PURE__*/React.createElement(StyledLink, {
      as: "button",
      onClick: function onClick(e) {
        return handleLinkClick(e, item, index);
      }
    }, /*#__PURE__*/React.createElement(Icon, null, item.icon && /*#__PURE__*/React.isValidElement(/*#__PURE__*/React.createElement(item.icon, null)) ? /*#__PURE__*/React.createElement(item.icon, null) : null), !isCollapsed && item.label), !isCollapsed && item.children && /*#__PURE__*/React.createElement(ToggleButton, {
      onClick: function onClick() {
        return toggleSubmenu(index);
      }
    }, openSubmenus[index] ? /*#__PURE__*/React.createElement(ArrowDropDownIcon, null) : /*#__PURE__*/React.createElement(ArrowRightIcon, null))), !isCollapsed && item.children && openSubmenus[index] && /*#__PURE__*/React.createElement(SubUl, null, item.children.map(function (subitem, subIndex) {
      return /*#__PURE__*/React.createElement(SubLi, {
        key: subIndex
      }, /*#__PURE__*/React.createElement(LinkComponent, {
        href: subitem.link || '#',
        passHref: true
      }, /*#__PURE__*/React.createElement(StyledLink, null, "- ", subitem.label)));
    })));
  }))));
};
Menu.propTypes = {
  config: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      link: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string
      }))
    })),
    logo: PropTypes.string
  }),
  isCollapsed: PropTypes.bool,
  toggleMenu: PropTypes.func,
  LinkComponent: PropTypes.elementType
};

var _templateObject;
var GlobalStyles = ft(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    font-family: ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.primary;
}, function (_ref2) {
  _ref2.theme;
  return '#FFF';
}, function (_ref3) {
  _ref3.theme;
  return '#000';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.hover;
});

var _excluded$9 = ["loading", "disabled", "loadingText", "children"];
var Button$1 = /*#__PURE__*/React__namespace.forwardRef(function Button(props, ref) {
  var loading = props.loading,
    disabled = props.disabled,
    loadingText = props.loadingText,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$9);
  return /*#__PURE__*/React__namespace.createElement(react.Button, _extends$2({
    disabled: loading || disabled,
    ref: ref
  }, rest), loading && !loadingText ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(react.AbsoluteCenter, {
    display: "inline-flex"
  }, /*#__PURE__*/React__namespace.createElement(react.Spinner, {
    size: "inherit",
    color: "inherit"
  })), /*#__PURE__*/React__namespace.createElement(react.Span, {
    opacity: 0
  }, children)) : loading && loadingText ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(react.Spinner, {
    size: "inherit",
    color: "inherit"
  }), loadingText) : children);
});

var themeForm = {
  colors: {
    buttonBg: 'blue.500',
    buttonText: 'white',
    buttonHover: 'blue.600',
    buttonDisabled: 'gray.300',
    labelColor: 'gray.600',
    inputBorderColor: 'gray.300',
    inputFocusBorderColor: 'blue.500',
    errorBorderColor: 'red.500',
    errorTextColor: 'red.700'
  },
  buttonMinWidth: '50px',
  buttonMaxWidth: '300px',
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif'
  },
  size: 'md'
};

var StyledButton = function StyledButton(props) {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (props.onSubmit && !props.isDisabled) {
      props.onSubmit();
    }
  };
  var handleClick = function handleClick() {
    if (props.onClick && !props.isDisabled) {
      props.onClick();
    }
  };
  var theme = props.theme ? _objectSpread2(_objectSpread2({}, themeForm), props.theme) : themeForm;
  if (props.isLoading) {
    return /*#__PURE__*/React.createElement(Button$1, {
      loading: true,
      loadingText: props.loadingText || 'Loading...',
      bg: themeForm.colors.buttonDisabled,
      color: themeForm.colors.buttonText,
      css: {
        minWidth: themeForm.buttonMinWidth,
        maxWidth: themeForm.buttonMaxWidth
      },
      size: props.size,
      type: props.isSubmit ? 'submit' : 'button'
    }, props.label);
  }
  return /*#__PURE__*/React.createElement(Button$1, {
    onClick: props.isSubmit ? undefined : handleClick,
    onSubmit: props.isSubmit ? handleSubmit : undefined,
    type: props.isSubmit ? 'submit' : 'button',
    bg: props.isDisabled ? theme.colors.buttonDisabled : theme.colors.buttonBg,
    color: theme.colors.buttonText,
    css: {
      minWidth: themeForm.buttonMinWidth,
      maxWidth: themeForm.buttonMaxWidth
    },
    isDisabled: props.isDisabled,
    _hover: {
      bg: props.isDisabled ? theme.colors.buttonDisabled : theme.colors.buttonHover
    },
    _disabled: {
      cursor: 'not-allowed',
      bg: themeForm.colors.buttonDisabled
    },
    size: props.size
  }, props.icon && /*#__PURE__*/React.createElement("span", {
    className: "button-icon"
  }, props.icon), props.label);
};

var Button = function Button(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === undefined ? '' : _ref$label,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === undefined ? false : _ref$isLoading,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === undefined ? false : _ref$isDisabled,
    _ref$isSubmit = _ref.isSubmit,
    isSubmit = _ref$isSubmit === undefined ? false : _ref$isSubmit,
    onClick = _ref.onClick,
    onSubmit = _ref.onSubmit,
    _ref$icon = _ref.icon,
    icon = _ref$icon === undefined ? null : _ref$icon,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? '' : _ref$size,
    _ref$loadingText = _ref.loadingText,
    loadingText = _ref$loadingText === undefined ? '' : _ref$loadingText,
    _ref$theme = _ref.theme,
    theme = _ref$theme === undefined ? themeForm : _ref$theme;
  var mergedTheme = _objectSpread2(_objectSpread2({}, themeForm), theme);
  return /*#__PURE__*/React.createElement(StyledButton, {
    label: label,
    isLoading: isLoading,
    isDisabled: isDisabled,
    size: size,
    onClick: onClick,
    onSubmit: onSubmit,
    loadingText: loadingText,
    icon: icon,
    theme: mergedTheme,
    isSubmit: isSubmit
  });
};
Button.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  loadingText: PropTypes.string
};
Button.defaultProps = {
  label: '',
  isLoading: false,
  isSubmit: false,
  isDisabled: false,
  onClick: function onClick() {},
  onSubmit: function onSubmit() {},
  icon: null,
  size: 'md',
  loadingText: 'Loading...'
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded$8 = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (undefined !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded$8);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function LuFileUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"},"child":[]},{"tag":"path","attr":{"d":"M14 2v4a2 2 0 0 0 2 2h4"},"child":[]},{"tag":"path","attr":{"d":"M12 12v6"},"child":[]},{"tag":"path","attr":{"d":"m15 15-3-3-3 3"},"child":[]}]})(props);
}function LuFile (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"},"child":[]},{"tag":"path","attr":{"d":"M14 2v4a2 2 0 0 0 2 2h4"},"child":[]}]})(props);
}function LuUpload (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},"child":[]},{"tag":"polyline","attr":{"points":"17 8 12 3 7 8"},"child":[]},{"tag":"line","attr":{"x1":"12","x2":"12","y1":"3","y2":"15"},"child":[]}]})(props);
}function LuX (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 6 6 18"},"child":[]},{"tag":"path","attr":{"d":"m6 6 12 12"},"child":[]}]})(props);
}

function _nullishCoalesce$1(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
var CloseButton = /*#__PURE__*/React__namespace.forwardRef(function CloseButton(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(react.IconButton, _extends$2({
    variant: "ghost",
    "aria-label": "Close",
    ref: ref
  }, props), _nullishCoalesce$1(props.children, function () {
    return /*#__PURE__*/React__namespace.createElement(LuX, null);
  }));
});

var _excluded$7 = ["children", "portalled", "portalRef", "backdrop"];
var DialogContent = /*#__PURE__*/React__namespace.forwardRef(function DialogContent(props, ref) {
  var children = props.children,
    _props$portalled = props.portalled,
    portalled = _props$portalled === undefined ? true : _props$portalled,
    portalRef = props.portalRef,
    _props$backdrop = props.backdrop,
    backdrop = _props$backdrop === undefined ? true : _props$backdrop,
    rest = _objectWithoutProperties$1(props, _excluded$7);
  return /*#__PURE__*/React__namespace.createElement(react.Portal, {
    disabled: !portalled,
    container: portalRef
  }, backdrop && /*#__PURE__*/React__namespace.createElement(react.Dialog.Backdrop, null), /*#__PURE__*/React__namespace.createElement(react.Dialog.Positioner, null, /*#__PURE__*/React__namespace.createElement(react.Dialog.Content, _extends$2({
    ref: ref
  }, rest, {
    asChild: false
  }), children)));
});
var DialogCloseTrigger = /*#__PURE__*/React__namespace.forwardRef(function DialogCloseTrigger(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(react.Dialog.CloseTrigger, _extends$2({
    position: "absolute",
    top: "2",
    insetEnd: "2"
  }, props, {
    asChild: true
  }), /*#__PURE__*/React__namespace.createElement(CloseButton, {
    size: "sm",
    ref: ref
  }, props.children));
});
var DialogRoot = react.Dialog.Root;
var DialogFooter = react.Dialog.Footer;
var DialogHeader = react.Dialog.Header;
var DialogBody = react.Dialog.Body;
react.Dialog.Backdrop;
var DialogTitle = react.Dialog.Title;
react.Dialog.Description;
react.Dialog.Trigger;
react.Dialog.ActionTrigger;

var defaultTheme$1 = {
  triggerButton: {
    backgroundColor: 'gray.200',
    color: 'black'
  },
  content: {
    padding: '1rem',
    borderRadius: 'md'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  body: {
    fontSize: '1rem',
    color: 'gray.700'
  },
  buttonTheme: {
    colors: {
      buttonBg: 'gray.500',
      buttonText: 'white'
    }
  }
};

var Dialog = function Dialog(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    body = _ref.body,
    buttons = _ref.buttons,
    theme = _ref.theme,
    placement = _ref.placement;
  var mergedTheme = _objectSpread2(_objectSpread2({}, defaultTheme$1), theme);
  return /*#__PURE__*/React.createElement(DialogRoot, {
    open: isOpen,
    onOpenChange: onClose,
    placement: placement
  }, /*#__PURE__*/React.createElement(DialogContent, {
    style: mergedTheme.content
  }, title && /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, {
    style: mergedTheme.title
  }, title)), /*#__PURE__*/React.createElement(DialogBody, {
    style: mergedTheme.body
  }, body), buttons && /*#__PURE__*/React.createElement(DialogFooter, null, buttons.map(function (buttonConfig, index) {
    return /*#__PURE__*/React.createElement(Button, {
      key: index,
      label: buttonConfig.label,
      icon: buttonConfig.icon,
      size: buttonConfig.size || 'md',
      theme: buttonConfig.theme || mergedTheme.buttonTheme,
      onClick: buttonConfig.onClick
    });
  })), /*#__PURE__*/React.createElement(DialogCloseTrigger, null)));
};
Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.node.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.element,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.object,
    onClick: PropTypes.func.isRequired
  })),
  theme: PropTypes.object,
  placement: PropTypes.oneOf(['top', 'center', 'bottom'])
};
Dialog.defaultProps = {
  theme: {},
  placement: 'center'
};

var _excluded$6 = ["children", "inputProps"],
  _excluded2$1 = ["children", "label", "description"],
  _excluded3$1 = ["showSize", "clearable", "files"],
  _excluded4$1 = ["placeholder"];
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
var FileUploadRoot = /*#__PURE__*/React__namespace.forwardRef(function FileUploadRoot(props, ref) {
  var children = props.children,
    inputProps = props.inputProps,
    rest = _objectWithoutProperties$1(props, _excluded$6);
  return /*#__PURE__*/React__namespace.createElement(react.FileUpload.Root, rest, /*#__PURE__*/React__namespace.createElement(react.FileUpload.HiddenInput, _extends$2({
    ref: ref
  }, inputProps)), children);
});
var FileUploadDropzone = /*#__PURE__*/React__namespace.forwardRef(function FileUploadDropzone(props, ref) {
  var children = props.children,
    label = props.label,
    description = props.description,
    rest = _objectWithoutProperties$1(props, _excluded2$1);
  return /*#__PURE__*/React__namespace.createElement(react.FileUpload.Dropzone, _extends$2({
    ref: ref
  }, rest), /*#__PURE__*/React__namespace.createElement(react.Icon, {
    fontSize: "xl",
    color: "fg.muted"
  }, /*#__PURE__*/React__namespace.createElement(LuUpload, null)), /*#__PURE__*/React__namespace.createElement(react.FileUpload.DropzoneContent, null, /*#__PURE__*/React__namespace.createElement("div", null, label), description && /*#__PURE__*/React__namespace.createElement(react.Text, {
    color: "fg.muted"
  }, description)), children);
});
var FileUploadItem = /*#__PURE__*/React__namespace.forwardRef(function FileUploadItem(props, ref) {
  var file = props.file,
    showSize = props.showSize,
    clearable = props.clearable;
  return /*#__PURE__*/React__namespace.createElement(react.FileUpload.Item, {
    file: file,
    ref: ref
  }, /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemPreview, {
    asChild: true
  }, /*#__PURE__*/React__namespace.createElement(react.Icon, {
    fontSize: "lg",
    color: "fg.muted"
  }, /*#__PURE__*/React__namespace.createElement(LuFile, null))), showSize ? /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemContent, null, /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemName, null), /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemSizeText, null)) : /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemName, {
    flex: "1"
  }), clearable && /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemDeleteTrigger, {
    asChild: true
  }, /*#__PURE__*/React__namespace.createElement(react.IconButton, {
    variant: "ghost",
    color: "fg.muted",
    size: "xs"
  }, /*#__PURE__*/React__namespace.createElement(LuX, null))));
});
var FileUploadList = /*#__PURE__*/React__namespace.forwardRef(function FileUploadList(props, ref) {
  var showSize = props.showSize,
    clearable = props.clearable,
    files = props.files,
    rest = _objectWithoutProperties$1(props, _excluded3$1);
  var fileUpload = react.useFileUploadContext();
  var acceptedFiles = _nullishCoalesce(files, function () {
    return fileUpload.acceptedFiles;
  });
  if (acceptedFiles.length === 0) return null;
  return /*#__PURE__*/React__namespace.createElement(react.FileUpload.ItemGroup, _extends$2({
    ref: ref
  }, rest), acceptedFiles.map(function (file) {
    return /*#__PURE__*/React__namespace.createElement(FileUploadItem, {
      key: file.name,
      file: file,
      showSize: showSize,
      clearable: clearable
    });
  }));
});
var FileInput = /*#__PURE__*/React__namespace.forwardRef(function FileInput(props, ref) {
  var inputRecipe = react.useRecipe({
    key: 'input'
  });
  var _inputRecipe$splitVar = inputRecipe.splitVariantProps(props),
    _inputRecipe$splitVar2 = _slicedToArray(_inputRecipe$splitVar, 2),
    recipeProps = _inputRecipe$splitVar2[0],
    restProps = _inputRecipe$splitVar2[1];
  var _restProps$placeholde = restProps.placeholder,
    placeholder = _restProps$placeholde === undefined ? 'Select file(s)' : _restProps$placeholde,
    rest = _objectWithoutProperties$1(restProps, _excluded4$1);
  return /*#__PURE__*/React__namespace.createElement(react.FileUpload.Trigger, {
    asChild: true
  }, /*#__PURE__*/React__namespace.createElement(react.Button, _extends$2({
    unstyled: true,
    py: "0",
    ref: ref
  }, rest, {
    css: [inputRecipe(recipeProps), props.css]
  }), /*#__PURE__*/React__namespace.createElement(react.FileUpload.Context, null, function (_ref) {
    var acceptedFiles = _ref.acceptedFiles;
    if (acceptedFiles.length === 1) {
      return /*#__PURE__*/React__namespace.createElement("span", null, acceptedFiles[0].name);
    }
    if (acceptedFiles.length > 1) {
      return /*#__PURE__*/React__namespace.createElement("span", null, acceptedFiles.length, " files");
    }
    return /*#__PURE__*/React__namespace.createElement(react.Span, {
      color: "fg.subtle"
    }, placeholder);
  })));
});
var FileUploadLabel = react.FileUpload.Label;
var FileUploadClearTrigger = react.FileUpload.ClearTrigger;
react.FileUpload.Trigger;

var FileDropZone = function FileDropZone(_ref) {
  var _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === undefined ? 'xl' : _ref$maxWidth,
    _ref$maxFiles = _ref.maxFiles,
    maxFiles = _ref$maxFiles === undefined ? 10 : _ref$maxFiles,
    _ref$label = _ref.label,
    label = _ref$label === undefined ? 'Drag and drop here to upload' : _ref$label,
    _ref$description = _ref.description,
    description = _ref$description === undefined ? '.png, .jpg up to 5MB' : _ref$description,
    onFileChange = _ref.onFileChange,
    _ref$accept = _ref.accept,
    accept = _ref$accept === undefined ? ['image/png', 'image/jpeg'] : _ref$accept;
  var handleFileChange = function handleFileChange(event) {
    if (onFileChange) {
      onFileChange(event);
    }
  };
  return /*#__PURE__*/React.createElement(FileUploadRoot, {
    maxW: maxWidth,
    alignItems: "stretch",
    maxFiles: maxFiles,
    onFileChange: function onFileChange(event) {
      return handleFileChange(event);
    },
    accept: accept.join(',')
  }, /*#__PURE__*/React.createElement(FileUploadDropzone, {
    label: label,
    description: description
  }), /*#__PURE__*/React.createElement(FileUploadList, {
    showSize: true,
    clearable: true
  }));
};
FileDropZone.propTypes = {
  maxWidth: PropTypes.string,
  maxFiles: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
  onFileChange: PropTypes.func,
  accept: PropTypes.arrayOf(PropTypes.string)
};

var _excluded$5 = ["startElement", "startElementProps", "endElement", "endElementProps", "children", "startOffset", "endOffset"];
var InputGroup = /*#__PURE__*/React__namespace.forwardRef(function InputGroup(props, ref) {
  var startElement = props.startElement,
    startElementProps = props.startElementProps,
    endElement = props.endElement,
    endElementProps = props.endElementProps,
    children = props.children,
    _props$startOffset = props.startOffset,
    startOffset = _props$startOffset === undefined ? '6px' : _props$startOffset,
    _props$endOffset = props.endOffset,
    endOffset = _props$endOffset === undefined ? '6px' : _props$endOffset,
    rest = _objectWithoutProperties$1(props, _excluded$5);
  var child = React__namespace.Children.only(children);
  return /*#__PURE__*/React__namespace.createElement(react.Group, _extends$2({
    ref: ref
  }, rest), startElement && /*#__PURE__*/React__namespace.createElement(react.InputElement, _extends$2({
    pointerEvents: "none"
  }, startElementProps), startElement), /*#__PURE__*/React__namespace.cloneElement(child, _objectSpread2(_objectSpread2(_objectSpread2({}, startElement && {
    ps: "calc(var(--input-height) - ".concat(startOffset, ")")
  }), endElement && {
    pe: "calc(var(--input-height) - ".concat(endOffset, ")")
  }), children.props)), endElement && /*#__PURE__*/React__namespace.createElement(react.InputElement, _extends$2({
    placement: "end"
  }, endElementProps), endElement));
});

var FileField = function FileField(_ref) {
  var label = _ref.label,
    maxWidth = _ref.maxWidth,
    onFileChange = _ref.onFileChange,
    accept = _ref.accept;
  var handleFileChange = function handleFileChange(event) {
    var _event$target;
    var selectedFile = event === null || event === undefined || (_event$target = event.target) === null || _event$target === undefined ? undefined : _event$target.files[0];
    if (selectedFile && onFileChange) {
      onFileChange(selectedFile);
    }
  };
  return /*#__PURE__*/React.createElement(FileUploadRoot, {
    gap: "1",
    maxWidth: maxWidth || '100%',
    accept: accept ? accept.join(',') : undefined,
    onFileChange: handleFileChange
  }, /*#__PURE__*/React.createElement(FileUploadLabel, null, label || 'Upload file'), /*#__PURE__*/React.createElement(InputGroup, {
    w: "full",
    startElement: /*#__PURE__*/React.createElement(LuFileUp, null),
    endElement: /*#__PURE__*/React.createElement(FileUploadClearTrigger, {
      asChild: true
    }, /*#__PURE__*/React.createElement(CloseButton, {
      me: "-1",
      size: "xs",
      variant: "plain",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      pointerEvents: "auto",
      color: "fg.subtle"
    }))
  }, /*#__PURE__*/React.createElement(FileInput, {
    onChange: handleFileChange
  })));
};
FileField.propTypes = {
  label: PropTypes.string,
  maxWidth: PropTypes.string,
  onFileChange: PropTypes.func,
  accept: PropTypes.arrayOf(PropTypes.string)
};
FileField.defaultProps = {
  label: 'Upload file',
  maxWidth: '100%',
  onFileChange: null,
  accept: null
};

var _excluded$4 = ["label", "children", "helperText", "errorText", "optionalText"];
var Field = /*#__PURE__*/React__namespace.forwardRef(function Field(props, ref) {
  var label = props.label,
    children = props.children,
    helperText = props.helperText,
    errorText = props.errorText,
    optionalText = props.optionalText,
    rest = _objectWithoutProperties$1(props, _excluded$4);
  return /*#__PURE__*/React__namespace.createElement(react.Field.Root, _extends$2({
    ref: ref
  }, rest), label && /*#__PURE__*/React__namespace.createElement(react.Field.Label, null, label, /*#__PURE__*/React__namespace.createElement(react.Field.RequiredIndicator, {
    fallback: optionalText
  })), children, helperText && /*#__PURE__*/React__namespace.createElement(react.Field.HelperText, null, helperText), errorText && /*#__PURE__*/React__namespace.createElement(react.Field.ErrorText, null, errorText));
});

var _excluded$3 = ["mergeTheme", "isDisabled", "isInvalid", "isRequired", "value", "onChange", "type"];
var StyledBox$1 = function StyledBox(props) {
  return /*#__PURE__*/React.createElement(react.Box, _extends$2({}, props, {
    pb: 4,
    borderRadius: "md"
  }));
};
var StyledInput = function StyledInput(_ref) {
  _ref.mergeTheme;
    var isDisabled = _ref.isDisabled,
    isInvalid = _ref.isInvalid,
    isRequired = _ref.isRequired,
    value = _ref.value,
    onChange = _ref.onChange,
    type = _ref.type,
    props = _objectWithoutProperties$1(_ref, _excluded$3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isInvalid ? /*#__PURE__*/React.createElement(Field, _extends$2({
    disabled: isDisabled,
    invalid: true,
    errorText: props.errorText || 'Error',
    label: props.label,
    css: {
      color: props.labelColor
    }
  }, isRequired && {
    required: true
  }), /*#__PURE__*/React.createElement(react.Input, {
    size: props.size,
    placeholder: props.placeholder,
    value: value,
    onChange: onChange,
    type: type // Pasar el tipo al Input
  })) : /*#__PURE__*/React.createElement(Field, _extends$2({
    disabled: isDisabled,
    label: props.label,
    css: {
      color: props.labelColor
    }
  }, isRequired && {
    required: true
  }), /*#__PURE__*/React.createElement(react.Input, {
    size: props.size,
    placeholder: props.placeholder,
    value: value,
    onChange: onChange,
    type: type // Pasar el tipo al Input
  })));
};

var TextField = function TextField(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === undefined ? '' : _ref$label,
    _ref$value = _ref.value,
    value = _ref$value === undefined ? '' : _ref$value,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === undefined ? 'Enter text' : _ref$placeholder,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === undefined ? '' : _ref$errorMessage,
    _ref$isInvalid = _ref.isInvalid,
    isInvalid = _ref$isInvalid === undefined ? false : _ref$isInvalid,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === undefined ? false : _ref$isDisabled,
    _ref$isRequired = _ref.isRequired,
    isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
    _ref$type = _ref.type,
    type = _ref$type === undefined ? 'text' : _ref$type,
    _ref$theme = _ref.theme,
    theme = _ref$theme === undefined ? themeForm : _ref$theme;
  var mergedTheme = _objectSpread2(_objectSpread2({}, themeForm), theme);
  return /*#__PURE__*/React.createElement(StyledBox$1, null, /*#__PURE__*/React.createElement(StyledInput, {
    label: label,
    type: type,
    errorText: errorMessage || '',
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    isInvalid: isInvalid,
    "aria-invalid": isInvalid,
    borderColor: mergedTheme.colors.inputBorderColor,
    size: mergedTheme.size,
    labelColor: mergedTheme.colors.labelColor,
    isDisabled: isDisabled,
    isRequired: isRequired,
    _focus: {
      borderColor: mergedTheme.colors.inputFocusBorderColor
    }
  }));
};
TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  theme: PropTypes.object
};

var _excluded$2 = ["children", "clearable"],
  _excluded2 = ["portalled", "portalRef"],
  _excluded3 = ["item", "children"],
  _excluded4 = ["children"];
var SelectTrigger = /*#__PURE__*/React__namespace.forwardRef(function SelectTrigger(props, ref) {
  var children = props.children,
    clearable = props.clearable,
    rest = _objectWithoutProperties$1(props, _excluded$2);
  return /*#__PURE__*/React__namespace.createElement(react.Select.Control, rest, /*#__PURE__*/React__namespace.createElement(react.Select.Trigger, {
    ref: ref
  }, children), /*#__PURE__*/React__namespace.createElement(react.Select.IndicatorGroup, null, clearable && /*#__PURE__*/React__namespace.createElement(SelectClearTrigger, null), /*#__PURE__*/React__namespace.createElement(react.Select.Indicator, null)));
});
var SelectClearTrigger = /*#__PURE__*/React__namespace.forwardRef(function SelectClearTrigger(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(react.Select.ClearTrigger, _extends$2({
    asChild: true
  }, props, {
    ref: ref
  }), /*#__PURE__*/React__namespace.createElement(CloseButton, {
    size: "xs",
    variant: "plain",
    focusVisibleRing: "inside",
    focusRingWidth: "2px",
    pointerEvents: "auto"
  }));
});
var SelectContent = /*#__PURE__*/React__namespace.forwardRef(function SelectContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === undefined ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded2);
  return /*#__PURE__*/React__namespace.createElement(react.Portal, {
    disabled: !portalled,
    container: portalRef
  }, /*#__PURE__*/React__namespace.createElement(react.Select.Positioner, null, /*#__PURE__*/React__namespace.createElement(react.Select.Content, _extends$2({}, rest, {
    ref: ref
  }))));
});
var SelectItem = /*#__PURE__*/React__namespace.forwardRef(function SelectItem(props, ref) {
  var item = props.item,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded3);
  return /*#__PURE__*/React__namespace.createElement(react.Select.Item, _extends$2({
    key: item.value,
    item: item
  }, rest, {
    ref: ref
  }), children, /*#__PURE__*/React__namespace.createElement(react.Select.ItemIndicator, null));
});
var SelectValueText = /*#__PURE__*/React__namespace.forwardRef(function SelectValueText(props, ref) {
  var children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded4);
  return /*#__PURE__*/React__namespace.createElement(react.Select.ValueText, _extends$2({}, rest, {
    ref: ref
  }), /*#__PURE__*/React__namespace.createElement(react.Select.Context, null, function (select) {
    var items = select.selectedItems;
    if (items.length === 0) return props.placeholder;
    if (children) return children(items);
    if (items.length === 1) return select.collection.stringifyItem(items[0]);
    return "".concat(items.length, " selected");
  }));
});
var SelectRoot = /*#__PURE__*/React__namespace.forwardRef(function SelectRoot(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(react.Select.Root, _extends$2({}, props, {
    ref: ref,
    positioning: _objectSpread2({
      sameWidth: true
    }, props.positioning)
  }), props.asChild ? props.children : /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(react.Select.HiddenSelect, null), props.children));
});
react.Select.Label;
react.Select.ItemText;

var _excluded$1 = ["label", "options", "isDisabled", "isInvalid", "isRequired", "isMultiple"];
var StyledBox = function StyledBox(props) {
  return /*#__PURE__*/React.createElement(react.Box, _extends$2({}, props, {
    pb: 4,
    borderRadius: "md"
  }));
};
var StyledSelect = function StyledSelect(_ref) {
  var label = _ref.label,
    options = _ref.options,
    isDisabled = _ref.isDisabled,
    isInvalid = _ref.isInvalid,
    isRequired = _ref.isRequired,
    isMultiple = _ref.isMultiple,
    props = _objectWithoutProperties$1(_ref, _excluded$1);
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setValue = _useState2[1];
  var selectOptions = react.createListCollection({
    items: options
  });
  var handleValueChange = function handleValueChange(selectedItem) {
    var value = Array.isArray(selectedItem.value) ? selectedItem.value[0] : selectedItem.value;
    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    } else {
      console.warn('props.onChange is undefined!');
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isInvalid ? /*#__PURE__*/React.createElement(Field, _extends$2({
    disabled: isDisabled,
    invalid: true,
    errorText: props.errorMessage || 'Error',
    label: label,
    css: {
      color: props.labelColor
    }
  }, isRequired && {
    required: true
  }), /*#__PURE__*/React.createElement(SelectRoot, _extends$2({
    collection: selectOptions,
    size: props.size,
    defaultValue: props.defaultValue,
    onValueChange: function onValueChange(value) {
      handleValueChange(value);
    }
  }, isMultiple && {
    multiple: true
  }), /*#__PURE__*/React.createElement(SelectTrigger, null, /*#__PURE__*/React.createElement(SelectValueText, {
    placeholder: props.placeholder
  })), /*#__PURE__*/React.createElement(SelectContent, null, selectOptions.items.map(function (record) {
    return /*#__PURE__*/React.createElement(SelectItem, {
      item: record,
      key: record.value
    }, record.label);
  })))) : /*#__PURE__*/React.createElement(Field, _extends$2({
    disabled: isDisabled,
    label: label,
    css: {
      color: props.labelColor
    }
  }, isRequired && {
    required: true
  }), /*#__PURE__*/React.createElement(SelectRoot, _extends$2({
    collection: selectOptions,
    size: props.size,
    defaultValue: props.defaultValue,
    onValueChange: function onValueChange(value) {
      handleValueChange(value);
    }
  }, isMultiple && {
    multiple: true
  }), /*#__PURE__*/React.createElement(SelectTrigger, null, /*#__PURE__*/React.createElement(SelectValueText, {
    placeholder: props.placeholder
  })), /*#__PURE__*/React.createElement(SelectContent, null, selectOptions.items.map(function (record) {
    return /*#__PURE__*/React.createElement(SelectItem, {
      item: record,
      key: record.value
    }, record.label);
  })))));
};

var SelectField = function SelectField(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === undefined ? '' : _ref$label,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === undefined ? '' : _ref$defaultValue,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === undefined ? [] : _ref$options,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === undefined ? 'Select an option' : _ref$placeholder,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === undefined ? '' : _ref$errorMessage,
    _ref$isInvalid = _ref.isInvalid,
    isInvalid = _ref$isInvalid === undefined ? false : _ref$isInvalid,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === undefined ? false : _ref$isDisabled,
    _ref$isRequired = _ref.isRequired,
    isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
    _ref$isMultiple = _ref.isMultiple,
    isMultiple = _ref$isMultiple === undefined ? false : _ref$isMultiple,
    _ref$theme = _ref.theme,
    theme = _ref$theme === undefined ? themeForm : _ref$theme;
  var mergedTheme = _objectSpread2(_objectSpread2({}, themeForm), theme);
  console.log(mergedTheme);
  return /*#__PURE__*/React.createElement(StyledBox, null, /*#__PURE__*/React.createElement(StyledSelect, {
    label: label,
    defaultValue: defaultValue,
    onChange: onChange,
    options: options,
    placeholder: placeholder,
    isInvalid: isInvalid,
    isDisabled: isDisabled,
    isRequired: isRequired,
    isMultiple: isMultiple,
    errorMessage: errorMessage,
    borderColor: mergedTheme.colors.inputBorderColor,
    size: mergedTheme.size,
    labelColor: mergedTheme.colors.labelColor,
    _focus: {
      borderColor: mergedTheme.colors.inputFocusBorderColor
    }
  }));
};
SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  theme: PropTypes.object
};

var Form = function Form(_ref) {
  var fields = _ref.fields,
    buttonsPosition = _ref.buttonsPosition,
    theme = _ref.theme,
    onSubmit = _ref.onSubmit;
  var _useState = React.useState(function () {
      return fields.flat().reduce(function (acc, field) {
        if (field.name) {
          acc[field.name] = field.defaultValue || '';
        }
        return acc;
      }, {});
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formValues = _useState2[0],
    setFormValues = _useState2[1];
  var _useState3 = React.useState(function () {
      return fields.flat().reduce(function (acc, field) {
        acc[field.name] = '';
        return acc;
      }, {});
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var resetForm = function resetForm() {
    setFormValues(fields.flat().reduce(function (acc, field) {
      if (field.name) {
        acc[field.name] = field.defaultValue || '';
      }
      return acc;
    }, {}));
    setErrors(fields.flat().reduce(function (acc, field) {
      acc[field.name] = '';
      return acc;
    }, {}));
  };
  var validate = function validate() {
    var newErrors = {};
    fields.flat().forEach(function (field) {
      var value = formValues[field.name];
      if (field.isRequired && !value) {
        if (field.errorMessage) {
          newErrors[field.name] = field.errorMessage;
        } else {
          newErrors[field.name] = "".concat(field.label || 'This field', " is required.");
        }
      }
      if (field.validate) {
        var customError = field.validate(value, formValues);
        if (customError) {
          newErrors[field.name] = customError;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  var handleChange = function handleChange(name, value) {
    setFormValues(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty$1({}, name, value));
    });
    setErrors(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty$1({}, name, ''));
    });
  };
  var filterUndefinedFields = function filterUndefinedFields(values) {
    var filteredValues = {};
    Object.keys(values).forEach(function (key) {
      if (key && key !== 'undefined') {
        filteredValues[key] = values[key];
      }
    });
    return filteredValues;
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      var filteredValues = filterUndefinedFields(formValues);
      if (onSubmit) {
        onSubmit(filteredValues);
      }
    }
  };
  return /*#__PURE__*/React.createElement(react.Box, {
    as: "form",
    onSubmit: handleSubmit,
    bg: "white",
    p: 4,
    borderRadius: "md"
  }, /*#__PURE__*/React.createElement(react.Stack, {
    spacing: 4
  }, fields.map(function (field) {
    if (Array.isArray(field)) {
      return /*#__PURE__*/React.createElement(react.Flex, {
        key: field.map(function (f) {
          return f.name || f.label;
        }).join('-'),
        gap: "0",
        justify: "space-between"
      }, field.map(function (subField) {
        return /*#__PURE__*/React.createElement(react.Box, {
          px: "2",
          py: "0",
          key: subField.name || subField.label,
          flex: "0 0 ".concat(100 / Math.min(field.length, 4), "%"),
          maxWidth: "".concat(100 / Math.min(field.length, 4), "%")
        }, subField.type === 'text' && /*#__PURE__*/React.createElement(TextField, {
          label: subField.label,
          value: formValues[subField.name],
          onChange: function onChange(e) {
            return handleChange(subField.name, e.target.value);
          },
          placeholder: subField.placeholder,
          isRequired: subField.isRequired,
          isInvalid: !!errors[subField.name],
          errorMessage: errors[subField.name],
          theme: theme
        }), subField.type === 'date' && /*#__PURE__*/React.createElement(TextField, {
          label: subField.label,
          value: formValues[subField.name],
          onChange: function onChange(e) {
            return handleChange(subField.name, e.target.value);
          },
          placeholder: subField.placeholder,
          isRequired: subField.isRequired,
          isInvalid: !!errors[subField.name],
          errorMessage: errors[subField.name],
          theme: theme,
          type: subField.type
        }), subField.type === 'select' && /*#__PURE__*/React.createElement(SelectField, {
          label: subField.label,
          value: formValues[subField.name],
          onChange: function onChange(value) {
            return handleChange(subField.name, value);
          },
          options: subField.options,
          placeholder: subField.placeholder,
          isRequired: subField.isRequired,
          isInvalid: !!errors[subField.name],
          errorMessage: errors[subField.name],
          theme: theme
        }), subField.type === 'file' && /*#__PURE__*/React.createElement(FileField, {
          label: subField.label,
          maxWidth: subField.maxWidth,
          accept: subField.accept,
          onFileChange: function onFileChange(file) {
            return handleChange(subField.name, file);
          }
        }));
      }));
    }
    if (field.type === 'text' || field.type === 'date' || field.type === 'select' || field.type === 'file' || field.type === 'drop') {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: field.name
      }, field.type === 'text' && /*#__PURE__*/React.createElement(TextField, {
        label: field.label,
        value: formValues[field.name],
        onChange: function onChange(e) {
          return handleChange(field.name, e.target.value);
        },
        placeholder: field.placeholder,
        isRequired: field.isRequired,
        isInvalid: !!errors[field.name],
        errorMessage: errors[field.name],
        theme: theme
      }), field.type === 'date' && /*#__PURE__*/React.createElement(TextField, {
        label: field.label,
        value: formValues[field.name],
        onChange: function onChange(e) {
          return handleChange(field.name, e.target.value);
        },
        placeholder: field.placeholder,
        isRequired: field.isRequired,
        isInvalid: !!errors[field.name],
        errorMessage: errors[field.name],
        theme: theme,
        type: field.type
      }), field.type === 'select' && /*#__PURE__*/React.createElement(SelectField, {
        label: field.label,
        value: formValues[field.name],
        onChange: function onChange(value) {
          return handleChange(field.name, value);
        },
        options: field.options,
        placeholder: field.placeholder,
        isRequired: field.isRequired,
        isInvalid: !!errors[field.name],
        errorMessage: errors[field.name],
        theme: theme
      }), field.type === 'file' && /*#__PURE__*/React.createElement(FileField, {
        label: field.label,
        maxWidth: field.maxWidth,
        accept: field.accept,
        onFileChange: function onFileChange(file) {
          return handleChange(field.name, file);
        }
      }), field.type === 'drop' && /*#__PURE__*/React.createElement(react.Box, {
        py: "2",
        key: field.name,
        flex: "1",
        maxWidth: "100%"
      }, /*#__PURE__*/React.createElement(FileDropZone, {
        label: field.label,
        description: field.description,
        maxWidth: "100%",
        maxFiles: field.maxFiles,
        accept: field.accept,
        onFileChange: function onFileChange(files) {
          return handleChange(field.name, files);
        }
      })));
    }
    return null;
  }), /*#__PURE__*/React.createElement(react.Flex, {
    justify: buttonsPosition,
    gap: "2"
  }, fields.filter(function (field) {
    return field.type === 'button';
  }).map(function (button, index) {
    return /*#__PURE__*/React.createElement(Button, {
      key: index,
      label: button.label,
      isLoading: button.isLoading,
      loadingText: button.loadingText,
      isDisabled: button.isDisabled,
      size: button.size,
      onClick: button.isSubmit ? handleSubmit : button.isReset ? resetForm : button.onClick,
      icon: button.icon,
      theme: button.theme,
      isSubmit: button.isSubmit
    });
  }))));
};
Form.propTypes = {
  buttonsPosition: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
  fields: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'date', 'select', 'button', 'file', 'drop']).isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    isRequired: PropTypes.bool,
    maxWidth: PropTypes.string,
    accept: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    maxFiles: PropTypes.number
  })])).isRequired,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object
};
Form.defaultProps = {
  theme: {}
};

// THIS FILE IS AUTO GENERATED
function HiChevronLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiMiniEllipsisHorizontal (props) {
  return GenIcon({"attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"},"child":[]}]})(props);
}

var _createRecipeContext = react.createRecipeContext({
    key: 'button'
  }),
  withContext = _createRecipeContext.withContext;

// Replace "a" with your framework's link component
var LinkButton = withContext('a');

var _excluded = ["size", "variant", "getHref"];
var _createContext = react.createContext({
    name: 'RootPropsProvider'
  }),
  _createContext2 = _slicedToArray(_createContext, 2),
  RootPropsProvider = _createContext2[0],
  useRootProps = _createContext2[1];
var variantMap = {
  outline: {
    "default": 'ghost',
    ellipsis: 'plain',
    current: 'outline'
  },
  solid: {
    "default": 'outline',
    ellipsis: 'outline',
    current: 'solid'
  },
  subtle: {
    "default": 'ghost',
    ellipsis: 'plain',
    current: 'subtle'
  }
};
var PaginationRoot = /*#__PURE__*/React__namespace.forwardRef(function PaginationRoot(props, ref) {
  var _props$size = props.size,
    size = _props$size === undefined ? 'sm' : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === undefined ? 'outline' : _props$variant,
    getHref = props.getHref,
    rest = _objectWithoutProperties$1(props, _excluded);
  return /*#__PURE__*/React__namespace.createElement(RootPropsProvider, {
    value: {
      size: size,
      variantMap: variantMap[variant],
      getHref: getHref
    }
  }, /*#__PURE__*/React__namespace.createElement(react.Pagination.Root, _extends$2({
    ref: ref,
    type: getHref ? 'link' : 'button'
  }, rest)));
});
var PaginationEllipsis = /*#__PURE__*/React__namespace.forwardRef(function PaginationEllipsis(props, ref) {
  var _useRootProps = useRootProps(),
    size = _useRootProps.size,
    variantMap = _useRootProps.variantMap;
  return /*#__PURE__*/React__namespace.createElement(react.Pagination.Ellipsis, _extends$2({
    ref: ref
  }, props, {
    asChild: true
  }), /*#__PURE__*/React__namespace.createElement(react.Button, {
    as: "span",
    variant: variantMap.ellipsis,
    size: size
  }, /*#__PURE__*/React__namespace.createElement(HiMiniEllipsisHorizontal, null)));
});
var PaginationItem = /*#__PURE__*/React__namespace.forwardRef(function PaginationItem(props, ref) {
  var _usePaginationContext = react.usePaginationContext(),
    page = _usePaginationContext.page;
  var _useRootProps2 = useRootProps(),
    size = _useRootProps2.size,
    variantMap = _useRootProps2.variantMap,
    getHref = _useRootProps2.getHref;
  var current = page === props.value;
  var variant = current ? variantMap.current : variantMap["default"];
  if (getHref) {
    return /*#__PURE__*/React__namespace.createElement(LinkButton, {
      href: getHref(props.value),
      variant: variant,
      size: size
    }, props.value);
  }
  return /*#__PURE__*/React__namespace.createElement(react.Pagination.Item, _extends$2({
    ref: ref
  }, props, {
    asChild: true
  }), /*#__PURE__*/React__namespace.createElement(react.Button, {
    variant: variant,
    size: size
  }, props.value));
});
var PaginationPrevTrigger = /*#__PURE__*/React__namespace.forwardRef(function PaginationPrevTrigger(props, ref) {
  var _useRootProps3 = useRootProps(),
    size = _useRootProps3.size,
    variantMap = _useRootProps3.variantMap,
    getHref = _useRootProps3.getHref;
  var _usePaginationContext2 = react.usePaginationContext(),
    previousPage = _usePaginationContext2.previousPage;
  if (getHref) {
    return /*#__PURE__*/React__namespace.createElement(LinkButton, {
      href: previousPage != null ? getHref(previousPage) : undefined,
      variant: variantMap["default"],
      size: size
    }, /*#__PURE__*/React__namespace.createElement(HiChevronLeft, null));
  }
  return /*#__PURE__*/React__namespace.createElement(react.Pagination.PrevTrigger, _extends$2({
    ref: ref,
    asChild: true
  }, props), /*#__PURE__*/React__namespace.createElement(react.IconButton, {
    variant: variantMap["default"],
    size: size
  }, /*#__PURE__*/React__namespace.createElement(HiChevronLeft, null)));
});
var PaginationNextTrigger = /*#__PURE__*/React__namespace.forwardRef(function PaginationNextTrigger(props, ref) {
  var _useRootProps4 = useRootProps(),
    size = _useRootProps4.size,
    variantMap = _useRootProps4.variantMap,
    getHref = _useRootProps4.getHref;
  var _usePaginationContext3 = react.usePaginationContext(),
    nextPage = _usePaginationContext3.nextPage;
  if (getHref) {
    return /*#__PURE__*/React__namespace.createElement(LinkButton, {
      href: nextPage != null ? getHref(nextPage) : undefined,
      variant: variantMap["default"],
      size: size
    }, /*#__PURE__*/React__namespace.createElement(HiChevronRight, null));
  }
  return /*#__PURE__*/React__namespace.createElement(react.Pagination.NextTrigger, _extends$2({
    ref: ref,
    asChild: true
  }, props), /*#__PURE__*/React__namespace.createElement(react.IconButton, {
    variant: variantMap["default"],
    size: size
  }, /*#__PURE__*/React__namespace.createElement(HiChevronRight, null)));
});
var PaginationItems = function PaginationItems(props) {
  return /*#__PURE__*/React__namespace.createElement(react.Pagination.Context, null, function (_ref) {
    var pages = _ref.pages;
    return pages.map(function (page, index) {
      return page.type === 'ellipsis' ? /*#__PURE__*/React__namespace.createElement(PaginationEllipsis, _extends$2({
        key: index,
        index: index
      }, props)) : /*#__PURE__*/React__namespace.createElement(PaginationItem, _extends$2({
        key: index,
        type: "page",
        value: page.value
      }, props));
    });
  });
};

var defaultTheme = {
  size: 'md',
  colorScheme: 'teal',
  headerColor: 'gray.700',
  cellColor: 'gray.600',
  rowHoverBg: 'gray.100'
};

var Grid = function Grid(_ref) {
  var headers = _ref.headers,
    data = _ref.data,
    theme = _ref.theme,
    pagination = _ref.pagination,
    initialItemsPerPage = _ref.itemsPerPage,
    enableSorting = _ref.enableSorting;
  var _useState = React.useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = React.useState(initialItemsPerPage),
    _useState4 = _slicedToArray(_useState3, 2),
    itemsPerPage = _useState4[0],
    setItemsPerPage = _useState4[1];
  var _useState5 = React.useState({
      key: null,
      direction: 'asc'
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sortConfig = _useState6[0],
    setSortConfig = _useState6[1];
  var mergedTheme = _objectSpread2(_objectSpread2({}, defaultTheme), theme);
  var itemPerPageOptions = [{
    value: '5',
    label: '5'
  }, {
    value: '10',
    label: '10'
  }, {
    value: '20',
    label: '20'
  }, {
    value: '30',
    label: '30'
  }];
  var visibleData = pagination ? data.slice((page - 1) * itemsPerPage, page * itemsPerPage) : data;
  var handleSort = function handleSort(key) {
    if (!enableSorting) return;
    if (sortConfig.key === key) {
      setSortConfig({
        key: key,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      setSortConfig({
        key: key,
        direction: 'asc'
      });
    }
  };
  var handleItemsPerPageChange = function handleItemsPerPageChange(value) {
    setItemsPerPage(Number(value));
    setPage(1);
  };
  var sortedData = enableSorting ? _toConsumableArray(visibleData).sort(function (a, b) {
    if (!sortConfig.key) return 0;
    var aValue = a[sortConfig.key];
    var bValue = b[sortConfig.key];
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
    return 0;
  }) : visibleData;
  return /*#__PURE__*/React.createElement(react.Box, null, /*#__PURE__*/React.createElement(react.Table.Root, {
    size: mergedTheme.size,
    colorScheme: mergedTheme.colorScheme
  }, /*#__PURE__*/React.createElement(react.Table.Header, null, /*#__PURE__*/React.createElement(react.Table.Row, null, headers.map(function (header, index) {
    return /*#__PURE__*/React.createElement(react.Table.ColumnHeader, {
      key: index,
      textAlign: header.textAlign || 'center',
      color: mergedTheme.headerColor,
      style: {
        width: header.width ? "".concat(header.width, "%") : 'auto'
      },
      cursor: header.isSortable && enableSorting ? 'pointer' : 'default',
      onClick: header.isSortable && enableSorting ? function () {
        return handleSort(header.key);
      } : undefined
    }, header.label, header.isSortable && enableSorting && sortConfig.key === header.key && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓'));
  }))), /*#__PURE__*/React.createElement(react.Table.Body, null, sortedData.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement(react.Table.Row, {
      key: row.id || rowIndex,
      _hover: {
        bg: mergedTheme.rowHoverBg
      }
    }, headers.map(function (header, cellIndex) {
      return /*#__PURE__*/React.createElement(react.Table.Cell, {
        key: cellIndex,
        textAlign: header.textAlign || 'start',
        color: mergedTheme.cellColor,
        style: {
          width: header.width ? "".concat(header.width, "%") : 'auto'
        }
      }, header.buttons && Array.isArray(header.buttons) ? /*#__PURE__*/React.createElement(react.Flex, {
        gap: "2",
        justify: header.textAlign || 'center'
      }, header.buttons.map(function (buttonConfig, btnIndex) {
        return /*#__PURE__*/React.createElement(Button, {
          key: btnIndex,
          label: buttonConfig.label,
          icon: buttonConfig.icon,
          size: "sm",
          theme: buttonConfig.theme || mergedTheme.buttonTheme,
          onClick: function onClick() {
            return buttonConfig.onClick(row, header.key);
          }
        });
      })) : header.isLink ? /*#__PURE__*/React.createElement("a", {
        href: row[header.key],
        target: "_blank",
        rel: "noopener noreferrer"
      }, row[header.key]) : row[header.key]);
    }));
  }))), pagination && /*#__PURE__*/React.createElement(PaginationRoot, {
    count: data.length,
    pageSize: itemsPerPage,
    page: page,
    onPageChange: function onPageChange(e) {
      return setPage(e.page);
    }
  }, /*#__PURE__*/React.createElement(react.HStack, {
    justify: "center",
    mt: 4,
    gap: "1"
  }, /*#__PURE__*/React.createElement(PaginationPrevTrigger, null), /*#__PURE__*/React.createElement(react.Box, {
    pt: 4,
    css: {
      minWidth: '100px'
    }
  }, /*#__PURE__*/React.createElement(SelectField, {
    options: itemPerPageOptions,
    defaultValue: itemsPerPage.toString(),
    onChange: handleItemsPerPageChange
  })), /*#__PURE__*/React.createElement(PaginationItems, null), /*#__PURE__*/React.createElement(PaginationNextTrigger, null))));
};
Grid.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    textAlign: PropTypes.oneOf(['start', 'center', 'end']),
    width: PropTypes.number,
    isSortable: PropTypes.bool,
    isLink: PropTypes.bool,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
      theme: PropTypes.object,
      onClick: PropTypes.func.isRequired
    }))
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object,
  pagination: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  enableSorting: PropTypes.bool
};
Grid.defaultProps = {
  theme: {},
  pagination: false,
  itemsPerPage: 5,
  enableSorting: false
};

var toastify$1 = {exports: {}};

var toastify = toastify$1.exports;
var hasRequiredToastify;
function requireToastify() {
  if (hasRequiredToastify) return toastify$1.exports;
  hasRequiredToastify = 1;
  (function (module) {
    (function (root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(toastify, function (global) {
      // Object initialization
      var _Toastify = function Toastify(options) {
          // Returning a new init object
          return new _Toastify.lib.init(options);
        },
        // Library version
        version = "1.12.0";

      // Set the default global options
      _Toastify.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: undefined,
        duration: 3000,
        selector: undefined,
        callback: function callback() {},
        destination: undefined,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: '',
        backgroundColor: '',
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function onClick() {},
        offset: {
          x: 0,
          y: 0
        },
        escapeMarkup: true,
        ariaLive: 'polite',
        style: {
          background: ''
        }
      };

      // Defining the prototype of the object
      _Toastify.lib = _Toastify.prototype = {
        toastify: version,
        constructor: _Toastify,
        // Initializing the object with required parameters
        init: function init(options) {
          // Verifying and validating the input object
          if (!options) {
            options = {};
          }

          // Creating the options object
          this.options = {};
          this.toastElement = null;

          // Validating the options
          this.options.text = options.text || _Toastify.defaults.text; // Display message
          this.options.node = options.node || _Toastify.defaults.node; // Display content as node
          this.options.duration = options.duration === 0 ? 0 : options.duration || _Toastify.defaults.duration; // Display duration
          this.options.selector = options.selector || _Toastify.defaults.selector; // Parent selector
          this.options.callback = options.callback || _Toastify.defaults.callback; // Callback after display
          this.options.destination = options.destination || _Toastify.defaults.destination; // On-click destination
          this.options.newWindow = options.newWindow || _Toastify.defaults.newWindow; // Open destination in new window
          this.options.close = options.close || _Toastify.defaults.close; // Show toast close icon
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : _Toastify.defaults.gravity; // toast position - top or bottom
          this.options.positionLeft = options.positionLeft || _Toastify.defaults.positionLeft; // toast position - left or right
          this.options.position = options.position || _Toastify.defaults.position; // toast position - left or right
          this.options.backgroundColor = options.backgroundColor || _Toastify.defaults.backgroundColor; // toast background color
          this.options.avatar = options.avatar || _Toastify.defaults.avatar; // img element src - url or a path
          this.options.className = options.className || _Toastify.defaults.className; // additional class names for the toast
          this.options.stopOnFocus = options.stopOnFocus === undefined ? _Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
          this.options.onClick = options.onClick || _Toastify.defaults.onClick; // Callback after click
          this.options.offset = options.offset || _Toastify.defaults.offset; // toast offset
          this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : _Toastify.defaults.escapeMarkup;
          this.options.ariaLive = options.ariaLive || _Toastify.defaults.ariaLive;
          this.options.style = options.style || _Toastify.defaults.style;
          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          }

          // Returning the current object for chaining functions
          return this;
        },
        // Building the DOM element
        buildToast: function buildToast() {
          // Validating if the options are defined
          if (!this.options) {
            throw "Toastify is not initialized";
          }

          // Creating the DOM object
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;

          // Positioning toast to left or right or center
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            // To be depreciated in further versions
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
            } else {
              // Default position
              divElement.className += " toastify-right";
            }
          }

          // Assigning gravity of element
          divElement.className += " " + this.options.gravity;
          if (this.options.backgroundColor) {
            // This is being deprecated in favor of using the style HTML DOM property
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          }

          // Loop through our style object and apply styles to divElement
          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          }

          // Announce the toast to screen readers
          if (this.options.ariaLive) {
            divElement.setAttribute('aria-live', this.options.ariaLive);
          }

          // Adding the toast message/node
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }
            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";
              if (this.options.position == "left" || this.options.positionLeft === true) {
                // Adding close icon on the left of content
                divElement.appendChild(avatarElement);
              } else {
                // Adding close icon on the right of content
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }

          // Adding a close icon to the toast
          if (this.options.close === true) {
            // Create a span for close element
            var closeElement = document.createElement("button");
            closeElement.type = "button";
            closeElement.setAttribute("aria-label", "Close");
            closeElement.className = "toast-close";
            closeElement.innerHTML = "&#10006;";

            // Triggering the removal of toast from DOM on close click
            closeElement.addEventListener("click", function (event) {
              event.stopPropagation();
              this.removeElement(this.toastElement);
              window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this));

            //Calculating screen width
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

            // Adding the close icon to the toast element
            // Display on the right if screen width is less than or equal to 360px
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              // Adding close icon on the left of content
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              // Adding close icon on the right of content
              divElement.appendChild(closeElement);
            }
          }

          // Clear timeout while toast is focused
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self = this;
            // stop countdown
            divElement.addEventListener("mouseover", function (event) {
              window.clearTimeout(divElement.timeOutValue);
            });
            // add back the timeout
            divElement.addEventListener("mouseleave", function () {
              divElement.timeOutValue = window.setTimeout(function () {
                // Remove the toast from DOM
                self.removeElement(divElement);
              }, self.options.duration);
            });
          }

          // Adding an on-click destination path
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener("click", function (event) {
              event.stopPropagation();
              if (this.options.newWindow === true) {
                window.open(this.options.destination, "_blank");
              } else {
                window.location = this.options.destination;
              }
            }.bind(this));
          }
          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener("click", function (event) {
              event.stopPropagation();
              this.options.onClick();
            }.bind(this));
          }

          // Adding offset
          if (_typeof(this.options.offset) === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          }

          // Returning the generated element
          return divElement;
        },
        // Displaying the toast
        showToast: function showToast() {
          // Creating the DOM object for the toast
          this.toastElement = this.buildToast();

          // Getting the root element to with the toast needs to be added
          var rootElement;
          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          }

          // Validating if root element is present in DOM
          if (!rootElement) {
            throw "Root element is not defined";
          }

          // Adding the DOM element
          var elementToInsert = _Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert);

          // Repositioning the toasts in case multiple toasts are present
          _Toastify.reposition();
          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(function () {
              // Remove the toast from DOM
              this.removeElement(this.toastElement);
            }.bind(this), this.options.duration); // Binding `this` for function invocation
          }

          // Supporting function chaining
          return this;
        },
        hideToast: function hideToast() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function removeElement(toastElement) {
          // Hiding the element
          // toastElement.classList.remove("on");
          toastElement.className = toastElement.className.replace(" on", "");

          // Removing the element from DOM after transition end
          window.setTimeout(function () {
            // remove options node if any
            if (this.options.node && this.options.node.parentNode) {
              this.options.node.parentNode.removeChild(this.options.node);
            }

            // Remove the element from the DOM, only when the parent node was not removed before.
            if (toastElement.parentNode) {
              toastElement.parentNode.removeChild(toastElement);
            }

            // Calling the callback function
            this.options.callback.call(toastElement);

            // Repositioning the toasts again
            _Toastify.reposition();
          }.bind(this), 400); // Binding `this` for function invocation
        }
      };

      // Positioning the toasts on the DOM
      _Toastify.reposition = function () {
        // Top margins with gravity
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        };

        // Get all toast messages on the DOM
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;

        // Modifying the position of each toast element
        for (var i = 0; i < allToasts.length; i++) {
          // Getting the applied gravity
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }
          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1);
          // Spacing between toasts
          var offset = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

          // Show toast in center if screen with less than or equal to 360px
          if (width <= 360) {
            // Setting the position
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              // Setting the position
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              // Setting the position
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        }

        // Supporting function chaining
        return this;
      };

      // Helper function to get offset.
      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + 'px';
          }
        }
        return '0px';
      }
      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      }

      // Setting up the prototype for the init object
      _Toastify.lib.init.prototype = _Toastify.lib;

      // Returning the Toastify function to be assigned to the window object/module
      return _Toastify;
    });
  })(toastify$1);
  return toastify$1.exports;
}

var toastifyExports = requireToastify();
var Toastify = /*@__PURE__*/getDefaultExportFromCjs(toastifyExports);

var defaultStyles = {
  success: {
    background: 'green',
    color: 'white'
  },
  error: {
    background: 'red',
    color: 'white'
  },
  warning: {
    background: 'orange',
    color: 'white'
  },
  info: {
    background: 'blue',
    color: 'white'
  }
};

function styleInject(css, ref) {
  if (ref === undefined) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n";
styleInject(css_248z);

/**
 * @typedef {Object} NotificationsProps
 * @property {string} message
 * @property {"success" | "error" | "warning" | "info"} [type]
 * @property {number} [duration]
 * @property {"top-right" | "top-left" | "bottom-right" | "bottom-left"} [position]
 * @property {{ background?: string; color?: string; } | null} [theme]
 */

/**
 * @param {NotificationsProps} props
 */
var Notifications = function Notifications(_ref) {
  var message = _ref.message,
    _ref$type = _ref.type,
    type = _ref$type === undefined ? 'info' : _ref$type,
    _ref$duration = _ref.duration,
    duration = _ref$duration === undefined ? 5000 : _ref$duration,
    _ref$position = _ref.position,
    position = _ref$position === undefined ? 'top-right' : _ref$position,
    theme = _ref.theme;
  var notify = function notify() {
    var styles = theme ? _objectSpread2(_objectSpread2({}, defaultStyles[type]), theme) : defaultStyles[type];
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: position.includes('top') ? 'top' : 'bottom',
      position: position.includes('left') ? 'left' : 'right',
      style: {
        background: styles.background,
        color: styles.color
      }
    }).showToast();
  };
  return {
    notify: notify
  };
};
Notifications.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
  theme: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string
  })
};
Notifications.defaultProps = {
  type: 'info',
  duration: 5000,
  position: 'top-right',
  theme: null
};

if (!React || !ReactDOM) {
  throw new Error('React or ReactDOM is not available. Ensure peer dependencies are installed correctly in the consumer project.');
}

exports.Button = Button;
exports.Dialog = Dialog;
exports.FileDropZone = FileDropZone;
exports.FileField = FileField;
exports.Form = Form;
exports.GlobalStyles = GlobalStyles;
exports.Grid = Grid;
exports.Menu = Menu;
exports.Notifications = Notifications;
exports.SelectField = SelectField;
exports.TextField = TextField;
//# sourceMappingURL=index.cjs.js.map
