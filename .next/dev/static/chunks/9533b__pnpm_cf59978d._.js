(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (prefetchProp === true) {
            return _types.FetchStrategy.Full;
        }
        // `null` or `"auto"`: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport.
        // This will also include invalid prop values that don't match the types specified here.
        // (although those should've been filtered out by prop validation in dev)
        prefetchProp;
        return _types.FetchStrategy.PPR;
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@emotion+is-prop-valid@1.4.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/wavesurfer.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>C
]);
function t(t, e, i, n) {
    return new (i || (i = Promise))(function(s, r) {
        function o(t) {
            try {
                h(n.next(t));
            } catch (t) {
                r(t);
            }
        }
        function a(t) {
            try {
                h(n.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function h(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                t(e);
            })).then(o, a);
        }
        h((n = n.apply(t, e || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
class e {
    constructor(){
        this.listeners = {};
    }
    on(t, e, i) {
        if (this.listeners[t] || (this.listeners[t] = new Set), null == i ? void 0 : i.once) {
            const i = (...n)=>{
                this.un(t, i), e(...n);
            };
            return this.listeners[t].add(i), ()=>this.un(t, i);
        }
        return this.listeners[t].add(e), ()=>this.un(t, e);
    }
    un(t, e) {
        var i;
        null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
    }
    once(t, e) {
        return this.on(t, e, {
            once: !0
        });
    }
    unAll() {
        this.listeners = {};
    }
    emit(t, ...e) {
        this.listeners[t] && this.listeners[t].forEach((t)=>t(...e));
    }
}
const i = {
    decode: function(e, i) {
        return t(this, void 0, void 0, function*() {
            const t = new AudioContext({
                sampleRate: i
            });
            try {
                return yield t.decodeAudioData(e);
            } finally{
                t.close();
            }
        });
    },
    createBuffer: function(t, e) {
        if (!t || 0 === t.length) throw new Error("channelData must be a non-empty array");
        if (e <= 0) throw new Error("duration must be greater than 0");
        if ("number" == typeof t[0] && (t = [
            t
        ]), !t[0] || 0 === t[0].length) throw new Error("channelData must contain non-empty channel arrays");
        !function(t) {
            const e = t[0];
            if (e.some((t)=>t > 1 || t < -1)) {
                const i = e.length;
                let n = 0;
                for(let t = 0; t < i; t++){
                    const i = Math.abs(e[t]);
                    i > n && (n = i);
                }
                for (const e of t)for(let t = 0; t < i; t++)e[t] /= n;
            }
        }(t);
        const i = t.map((t)=>t instanceof Float32Array ? t : Float32Array.from(t));
        return {
            duration: e,
            length: i[0].length,
            sampleRate: i[0].length / e,
            numberOfChannels: i.length,
            getChannelData: (t)=>{
                const e = i[t];
                if (!e) throw new Error(`Channel ${t} not found`);
                return e;
            },
            copyFromChannel: AudioBuffer.prototype.copyFromChannel,
            copyToChannel: AudioBuffer.prototype.copyToChannel
        };
    }
};
function n(t, e) {
    const i = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
    for (const [t, s] of Object.entries(e))if ("children" === t && s) for (const [t, e] of Object.entries(s))e instanceof Node ? i.appendChild(e) : "string" == typeof e ? i.appendChild(document.createTextNode(e)) : i.appendChild(n(t, e));
    else "style" === t ? Object.assign(i.style, s) : "textContent" === t ? i.textContent = s : i.setAttribute(t, s.toString());
    return i;
}
function s(t, e, i) {
    const s = n(t, e || {});
    return null == i || i.appendChild(s), s;
}
var r = Object.freeze({
    __proto__: null,
    createElement: s,
    default: s
});
const o = {
    fetchBlob: function(e, i, n) {
        return t(this, void 0, void 0, function*() {
            const s = yield fetch(e, n);
            if (s.status >= 400) throw new Error(`Failed to fetch ${e}: ${s.status} (${s.statusText})`);
            return function(e, i) {
                t(this, void 0, void 0, function*() {
                    if (!e.body || !e.headers) return;
                    const t = e.body.getReader(), n = Number(e.headers.get("Content-Length")) || 0;
                    let s = 0;
                    const r = (t)=>{
                        s += (null == t ? void 0 : t.length) || 0;
                        const e = Math.round(s / n * 100);
                        i(e);
                    };
                    try {
                        for(;;){
                            const e = yield t.read();
                            if (e.done) break;
                            r(e.value);
                        }
                    } catch (t) {
                        console.warn("Progress tracking error:", t);
                    }
                });
            }(s.clone(), i), s.blob();
        });
    }
};
class a extends e {
    constructor(t){
        super(), this.isExternalMedia = !1, t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), null != t.playbackRate && this.onMediaEvent("canplay", ()=>{
            null != t.playbackRate && (this.media.playbackRate = t.playbackRate);
        }, {
            once: !0
        });
    }
    onMediaEvent(t, e, i) {
        return this.media.addEventListener(t, e, i), ()=>this.media.removeEventListener(t, e, i);
    }
    getSrc() {
        return this.media.currentSrc || this.media.src || "";
    }
    revokeSrc() {
        const t = this.getSrc();
        t.startsWith("blob:") && URL.revokeObjectURL(t);
    }
    canPlayType(t) {
        return "" !== this.media.canPlayType(t);
    }
    setSrc(t, e) {
        const i = this.getSrc();
        if (t && i === t) return;
        this.revokeSrc();
        const n = e instanceof Blob && (this.canPlayType(e.type) || !t) ? URL.createObjectURL(e) : t;
        if (i && this.media.removeAttribute("src"), n || t) try {
            this.media.src = n;
        } catch (e) {
            this.media.src = t;
        }
    }
    destroy() {
        this.isExternalMedia || (this.media.pause(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load(), this.media.remove());
    }
    setMediaElement(t) {
        this.media = t;
    }
    play() {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.media.play();
            } catch (t) {
                if (t instanceof DOMException && "AbortError" === t.name) return;
                throw t;
            }
        });
    }
    pause() {
        this.media.pause();
    }
    isPlaying() {
        return !this.media.paused && !this.media.ended;
    }
    setTime(t) {
        this.media.currentTime = Math.max(0, Math.min(t, this.getDuration()));
    }
    getDuration() {
        return this.media.duration;
    }
    getCurrentTime() {
        return this.media.currentTime;
    }
    getVolume() {
        return this.media.volume;
    }
    setVolume(t) {
        this.media.volume = t;
    }
    getMuted() {
        return this.media.muted;
    }
    setMuted(t) {
        this.media.muted = t;
    }
    getPlaybackRate() {
        return this.media.playbackRate;
    }
    isSeeking() {
        return this.media.seeking;
    }
    setPlaybackRate(t, e) {
        null != e && (this.media.preservesPitch = e), this.media.playbackRate = t;
    }
    getMediaElement() {
        return this.media;
    }
    setSinkId(t) {
        return this.media.setSinkId(t);
    }
}
function h(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t;
}
function l({ maxTop: t, maxBottom: e, halfHeight: i, vScale: n }) {
    const s = Math.round(t * i * n);
    return {
        topHeight: s,
        totalHeight: s + Math.round(e * i * n) || 1
    };
}
function c({ barAlign: t, halfHeight: e, topHeight: i, totalHeight: n, canvasHeight: s }) {
    return "top" === t ? 0 : "bottom" === t ? s - n : e - i;
}
function d(t, e, i) {
    const n = e - t.left, s = i - t.top;
    return [
        n / t.width,
        s / t.height
    ];
}
function u(t) {
    return Boolean(t.barWidth || t.barGap || t.barAlign);
}
function p(t, e) {
    if (!u(e)) return t;
    const i = e.barWidth || .5, n = i + (e.barGap || i / 2);
    return 0 === n ? t : Math.floor(t / n) * n;
}
function m({ scrollLeft: t, totalWidth: e, numCanvases: i }) {
    if (0 === e) return [
        0
    ];
    const n = t / e, s = Math.floor(n * i);
    return [
        s - 1,
        s,
        s + 1
    ];
}
function f({ scrollLeft: t, clientWidth: e, scrollWidth: i }) {
    if (0 === i) return {
        startX: 0,
        endX: 0
    };
    return {
        startX: t / i,
        endX: (t + e) / i
    };
}
class g extends e {
    constructor(t, e){
        super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.dragUnsubscribe = null, this.subscriptions = [], this.options = t;
        const i = this.parentFromOptionsContainer(t.container);
        this.parent = i;
        const [n, s] = this.initHtml();
        i.appendChild(n), this.container = n, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), e && s.appendChild(e), this.initEvents();
    }
    parentFromOptionsContainer(t) {
        let e;
        if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (e = t), !e) throw new Error("Container not found");
        return e;
    }
    initEvents() {
        if (this.wrapper.addEventListener("click", (t)=>{
            const e = this.wrapper.getBoundingClientRect(), [i, n] = d(e, t.clientX, t.clientY);
            this.emit("click", i, n);
        }), this.wrapper.addEventListener("dblclick", (t)=>{
            const e = this.wrapper.getBoundingClientRect(), [i, n] = d(e, t.clientX, t.clientY);
            this.emit("dblclick", i, n);
        }), !0 !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", ()=>{
            const { scrollLeft: t, scrollWidth: e, clientWidth: i } = this.scrollContainer, { startX: n, endX: s } = f({
                scrollLeft: t,
                scrollWidth: e,
                clientWidth: i
            });
            this.emit("scroll", n, s, t, t + i);
        }), "function" == typeof ResizeObserver) {
            const t = this.createDelay(100);
            this.resizeObserver = new ResizeObserver(()=>{
                t().then(()=>this.onContainerResize()).catch(()=>{});
            }), this.resizeObserver.observe(this.scrollContainer);
        }
    }
    onContainerResize() {
        const t = this.parent.clientWidth;
        t === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t, this.reRender(), this.emit("resize"));
    }
    initDrag() {
        this.dragUnsubscribe || (this.dragUnsubscribe = function(t, e, i, n, s = 3, r = 0, o = 100) {
            if (!t) return ()=>{};
            const a = new Map, h = matchMedia("(pointer: coarse)").matches;
            let l = ()=>{};
            const c = (c)=>{
                if (c.button !== r) return;
                if (a.set(c.pointerId, c), a.size > 1) return;
                let d = c.clientX, u = c.clientY, p = !1;
                const m = Date.now(), f = (n)=>{
                    if (n.defaultPrevented || a.size > 1) return;
                    if (h && Date.now() - m < o) return;
                    const r = n.clientX, l = n.clientY, c = r - d, f = l - u;
                    if (p || Math.abs(c) > s || Math.abs(f) > s) {
                        n.preventDefault(), n.stopPropagation();
                        const s = t.getBoundingClientRect(), { left: o, top: a } = s;
                        p || (null == i || i(d - o, u - a), p = !0), e(c, f, r - o, l - a), d = r, u = l;
                    }
                }, g = (e)=>{
                    if (a.delete(e.pointerId), p) {
                        const i = e.clientX, s = e.clientY, r = t.getBoundingClientRect(), { left: o, top: a } = r;
                        null == n || n(i - o, s - a);
                    }
                    l();
                }, v = (t)=>{
                    a.delete(t.pointerId), t.relatedTarget && t.relatedTarget !== document.documentElement || g(t);
                }, b = (t)=>{
                    p && (t.stopPropagation(), t.preventDefault());
                }, y = (t)=>{
                    t.defaultPrevented || a.size > 1 || p && t.preventDefault();
                };
                document.addEventListener("pointermove", f), document.addEventListener("pointerup", g), document.addEventListener("pointerout", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", y, {
                    passive: !1
                }), document.addEventListener("click", b, {
                    capture: !0
                }), l = ()=>{
                    document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", g), document.removeEventListener("pointerout", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", y), setTimeout(()=>{
                        document.removeEventListener("click", b, {
                            capture: !0
                        });
                    }, 10);
                };
            };
            return t.addEventListener("pointerdown", c), ()=>{
                l(), t.removeEventListener("pointerdown", c), a.clear();
            };
        }(this.wrapper, (t, e, i)=>{
            const n = this.wrapper.getBoundingClientRect().width;
            this.emit("drag", h(i / n));
        }, (t)=>{
            this.isDragging = !0;
            const e = this.wrapper.getBoundingClientRect().width;
            this.emit("dragstart", h(t / e));
        }, (t)=>{
            this.isDragging = !1;
            const e = this.wrapper.getBoundingClientRect().width;
            this.emit("dragend", h(t / e));
        }), this.subscriptions.push(this.dragUnsubscribe));
    }
    initHtml() {
        const t = document.createElement("div"), e = t.attachShadow({
            mode: "open"
        }), i = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
        return e.innerHTML = `\n      <style${i ? ` nonce="${i}"` : ""}>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;\n          pointer-events: none;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases" part="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `, [
            t,
            e
        ];
    }
    setOptions(t) {
        if (this.options.container !== t.container) {
            const e = this.parentFromOptionsContainer(t.container);
            e.appendChild(this.container), this.parent = e;
        }
        !0 !== t.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t, this.reRender();
    }
    getWrapper() {
        return this.wrapper;
    }
    getWidth() {
        return this.scrollContainer.clientWidth;
    }
    getScroll() {
        return this.scrollContainer.scrollLeft;
    }
    setScroll(t) {
        this.scrollContainer.scrollLeft = t;
    }
    setScrollPercentage(t) {
        const { scrollWidth: e } = this.scrollContainer, i = e * t;
        this.setScroll(i);
    }
    destroy() {
        var t;
        this.subscriptions.forEach((t)=>t()), this.container.remove(), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), null === (t = this.unsubscribeOnScroll) || void 0 === t || t.forEach((t)=>t()), this.unsubscribeOnScroll = [];
    }
    createDelay(t = 10) {
        let e, i;
        const n = ()=>{
            e && (clearTimeout(e), e = void 0), i && (i(), i = void 0);
        };
        return this.timeouts.push(n), ()=>new Promise((s, r)=>{
                n(), i = r, e = setTimeout(()=>{
                    e = void 0, i = void 0, s();
                }, t);
            });
    }
    getHeight(t, e) {
        var i;
        const n = (null === (i = this.audioData) || void 0 === i ? void 0 : i.numberOfChannels) || 1;
        return function({ optionsHeight: t, optionsSplitChannels: e, parentHeight: i, numberOfChannels: n, defaultHeight: s = 128 }) {
            if (null == t) return s;
            const r = Number(t);
            if (!isNaN(r)) return r;
            if ("auto" === t) {
                const t = i || s;
                return (null == e ? void 0 : e.every((t)=>!t.overlay)) ? t / n : t;
            }
            return s;
        }({
            optionsHeight: t,
            optionsSplitChannels: e,
            parentHeight: this.parent.clientHeight,
            numberOfChannels: n,
            defaultHeight: 128
        });
    }
    convertColorValues(t) {
        return function(t, e) {
            if (!Array.isArray(t)) return t || "";
            if (0 === t.length) return "#999";
            if (t.length < 2) return t[0] || "";
            const i = document.createElement("canvas"), n = i.getContext("2d"), s = i.height * e, r = n.createLinearGradient(0, 0, 0, s || e), o = 1 / (t.length - 1);
            return t.forEach((t, e)=>{
                r.addColorStop(e * o, t);
            }), r;
        }(t, this.getPixelRatio());
    }
    getPixelRatio() {
        return t = window.devicePixelRatio, Math.max(1, t || 1);
        //TURBOPACK unreachable
        ;
        var t;
    }
    renderBarWaveform(t, e, i, n) {
        const { width: s, height: r } = i.canvas, { halfHeight: o, barWidth: a, barRadius: h, barIndexScale: d, barSpacing: u } = function({ width: t, height: e, length: i, options: n, pixelRatio: s }) {
            const r = e / 2, o = n.barWidth ? n.barWidth * s : 1, a = n.barGap ? n.barGap * s : n.barWidth ? o / 2 : 0, h = o + a || 1;
            return {
                halfHeight: r,
                barWidth: o,
                barGap: a,
                barRadius: n.barRadius || 0,
                barIndexScale: i > 0 ? t / h / i : 0,
                barSpacing: h
            };
        }({
            width: s,
            height: r,
            length: (t[0] || []).length,
            options: e,
            pixelRatio: this.getPixelRatio()
        }), p = function({ channelData: t, barIndexScale: e, barSpacing: i, barWidth: n, halfHeight: s, vScale: r, canvasHeight: o, barAlign: a }) {
            const h = t[0] || [], d = t[1] || h, u = h.length, p = [];
            let m = 0, f = 0, g = 0;
            for(let t = 0; t <= u; t++){
                const u = Math.round(t * e);
                if (u > m) {
                    const { topHeight: t, totalHeight: e } = l({
                        maxTop: f,
                        maxBottom: g,
                        halfHeight: s,
                        vScale: r
                    }), h = c({
                        barAlign: a,
                        halfHeight: s,
                        topHeight: t,
                        totalHeight: e,
                        canvasHeight: o
                    });
                    p.push({
                        x: m * i,
                        y: h,
                        width: n,
                        height: e
                    }), m = u, f = 0, g = 0;
                }
                const v = Math.abs(h[t] || 0), b = Math.abs(d[t] || 0);
                v > f && (f = v), b > g && (g = b);
            }
            return p;
        }({
            channelData: t,
            barIndexScale: d,
            barSpacing: u,
            barWidth: a,
            halfHeight: o,
            vScale: n,
            canvasHeight: r,
            barAlign: e.barAlign
        });
        i.beginPath();
        for (const t of p)h && "roundRect" in i ? i.roundRect(t.x, t.y, t.width, t.height, h) : i.rect(t.x, t.y, t.width, t.height);
        i.fill(), i.closePath();
    }
    renderLineWaveform(t, e, i, n) {
        const { width: s, height: r } = i.canvas, o = function({ channelData: t, width: e, height: i, vScale: n }) {
            const s = i / 2, r = t[0] || [];
            return [
                r,
                t[1] || r
            ].map((t, i)=>{
                const r = t.length, o = r ? e / r : 0, a = s, h = 0 === i ? -1 : 1, l = [
                    {
                        x: 0,
                        y: a
                    }
                ];
                let c = 0, d = 0;
                for(let e = 0; e <= r; e++){
                    const i = Math.round(e * o);
                    if (i > c) {
                        const t = a + (Math.round(d * s * n) || 1) * h;
                        l.push({
                            x: c,
                            y: t
                        }), c = i, d = 0;
                    }
                    const r = Math.abs(t[e] || 0);
                    r > d && (d = r);
                }
                return l.push({
                    x: c,
                    y: a
                }), l;
            });
        }({
            channelData: t,
            width: s,
            height: r,
            vScale: n
        });
        i.beginPath();
        for (const t of o)if (t.length) {
            i.moveTo(t[0].x, t[0].y);
            for(let e = 1; e < t.length; e++){
                const n = t[e];
                i.lineTo(n.x, n.y);
            }
        }
        i.fill(), i.closePath();
    }
    renderWaveform(t, e, i) {
        if (i.fillStyle = this.convertColorValues(e.waveColor), e.renderFunction) return void e.renderFunction(t, i);
        const n = function({ channelData: t, barHeight: e, normalize: i }) {
            var n;
            const s = e || 1;
            if (!i) return s;
            const r = t[0];
            if (!r || 0 === r.length) return s;
            let o = 0;
            for(let t = 0; t < r.length; t++){
                const e = null !== (n = r[t]) && void 0 !== n ? n : 0, i = Math.abs(e);
                i > o && (o = i);
            }
            return o ? s / o : s;
        }({
            channelData: t,
            barHeight: e.barHeight,
            normalize: e.normalize
        });
        u(e) ? this.renderBarWaveform(t, e, i, n) : this.renderLineWaveform(t, e, i, n);
    }
    renderSingleCanvas(t, e, i, n, s, r, o) {
        const a = this.getPixelRatio(), h = document.createElement("canvas");
        h.width = Math.round(i * a), h.height = Math.round(n * a), h.style.width = `${i}px`, h.style.height = `${n}px`, h.style.left = `${Math.round(s)}px`, r.appendChild(h);
        const l = h.getContext("2d");
        if (e.renderFunction ? (l.fillStyle = this.convertColorValues(e.waveColor), e.renderFunction(t, l)) : this.renderWaveform(t, e, l), h.width > 0 && h.height > 0) {
            const t = h.cloneNode(), i = t.getContext("2d");
            i.drawImage(h, 0, 0), i.globalCompositeOperation = "source-in", i.fillStyle = this.convertColorValues(e.progressColor), i.fillRect(0, 0, h.width, h.height), o.appendChild(t);
        }
    }
    renderMultiCanvas(t, e, i, n, s, r) {
        const o = this.getPixelRatio(), { clientWidth: a } = this.scrollContainer, h = i / o, l = function({ clientWidth: t, totalWidth: e, options: i }) {
            return p(Math.min(8e3, t, e), i);
        }({
            clientWidth: a,
            totalWidth: h,
            options: e
        });
        let c = {};
        if (0 === l) return;
        const d = (i)=>{
            if (i < 0 || i >= u) return;
            if (c[i]) return;
            c[i] = !0;
            const o = i * l;
            let a = Math.min(h - o, l);
            if (a = p(a, e), a <= 0) return;
            const d = function({ channelData: t, offset: e, clampedWidth: i, totalWidth: n }) {
                return t.map((t)=>{
                    const s = Math.floor(e / n * t.length), r = Math.floor((e + i) / n * t.length);
                    return t.slice(s, r);
                });
            }({
                channelData: t,
                offset: o,
                clampedWidth: a,
                totalWidth: h
            });
            this.renderSingleCanvas(d, e, a, n, o, s, r);
        }, u = Math.ceil(h / l);
        if (!this.isScrollable) {
            for(let t = 0; t < u; t++)d(t);
            return;
        }
        if (m({
            scrollLeft: this.scrollContainer.scrollLeft,
            totalWidth: h,
            numCanvases: u
        }).forEach((t)=>d(t)), u > 1) {
            const t = this.on("scroll", ()=>{
                const { scrollLeft: t } = this.scrollContainer;
                Object.keys(c).length > 10 && (s.innerHTML = "", r.innerHTML = "", c = {}), m({
                    scrollLeft: t,
                    totalWidth: h,
                    numCanvases: u
                }).forEach((t)=>d(t));
            });
            this.unsubscribeOnScroll.push(t);
        }
    }
    renderChannel(t, e, i, n) {
        var { overlay: s } = e, r = function(t, e) {
            var i = {};
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for(n = Object.getOwnPropertySymbols(t); s < n.length; s++)e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
            }
            return i;
        }(e, [
            "overlay"
        ]);
        const o = document.createElement("div"), a = this.getHeight(r.height, r.splitChannels);
        o.style.height = `${a}px`, s && n > 0 && (o.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(o);
        const h = o.cloneNode();
        this.progressWrapper.appendChild(h), this.renderMultiCanvas(t, r, i, a, o, h);
    }
    render(e) {
        return t(this, void 0, void 0, function*() {
            var t;
            this.timeouts.forEach((t)=>t()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
            const i = this.getPixelRatio(), n = this.scrollContainer.clientWidth, { scrollWidth: s, isScrollable: r, useParentWidth: o, width: a } = function({ duration: t, minPxPerSec: e = 0, parentWidth: i, fillParent: n, pixelRatio: s }) {
                const r = Math.ceil(t * e), o = r > i, a = Boolean(n && !o);
                return {
                    scrollWidth: r,
                    isScrollable: o,
                    useParentWidth: a,
                    width: (a ? i : r) * s
                };
            }({
                duration: e.duration,
                minPxPerSec: this.options.minPxPerSec || 0,
                parentWidth: n,
                fillParent: this.options.fillParent,
                pixelRatio: i
            });
            if (this.isScrollable = r, this.wrapper.style.width = o ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for(let i = 0; i < e.numberOfChannels; i++){
                const n = Object.assign(Object.assign({}, this.options), null === (t = this.options.splitChannels) || void 0 === t ? void 0 : t[i]);
                this.renderChannel([
                    e.getChannelData(i)
                ], n, a, i);
            }
            else {
                const t = [
                    e.getChannelData(0)
                ];
                e.numberOfChannels > 1 && t.push(e.getChannelData(1)), this.renderChannel(t, this.options, a, 0);
            }
            Promise.resolve().then(()=>this.emit("rendered"));
        });
    }
    reRender() {
        if (this.unsubscribeOnScroll.forEach((t)=>t()), this.unsubscribeOnScroll = [], !this.audioData) return;
        const { scrollWidth: t } = this.scrollContainer, { right: e } = this.progressWrapper.getBoundingClientRect();
        if (this.render(this.audioData), this.isScrollable && t !== this.scrollContainer.scrollWidth) {
            const { right: t } = this.progressWrapper.getBoundingClientRect(), i = function(t) {
                const e = 2 * t;
                return (e < 0 ? Math.floor(e) : Math.ceil(e)) / 2;
            }(t - e);
            this.scrollContainer.scrollLeft += i;
        }
    }
    zoom(t) {
        this.options.minPxPerSec = t, this.reRender();
    }
    scrollIntoView(t, e = !1) {
        const { scrollLeft: i, scrollWidth: n, clientWidth: s } = this.scrollContainer, r = t * n, o = i, a = i + s, h = s / 2;
        if (this.isDragging) {
            const t = 30;
            r + t > a ? this.scrollContainer.scrollLeft += t : r - t < o && (this.scrollContainer.scrollLeft -= t);
        } else {
            (r < o || r > a) && (this.scrollContainer.scrollLeft = r - (this.options.autoCenter ? h : 0));
            const t = r - i - h;
            e && this.options.autoCenter && t > 0 && (this.scrollContainer.scrollLeft += t);
        }
        {
            const t = this.scrollContainer.scrollLeft, { startX: e, endX: i } = f({
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: s
            });
            this.emit("scroll", e, i, t, t + s);
        }
    }
    renderProgress(t, e) {
        if (isNaN(t)) return;
        const i = 100 * t;
        this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${t * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.scrollIntoView(t, e);
    }
    exportImage(e, i, n) {
        return t(this, void 0, void 0, function*() {
            const t = this.canvasWrapper.querySelectorAll("canvas");
            if (!t.length) throw new Error("No waveform data");
            if ("dataURL" === n) {
                const n = Array.from(t).map((t)=>t.toDataURL(e, i));
                return Promise.resolve(n);
            }
            return Promise.all(Array.from(t).map((t)=>new Promise((n, s)=>{
                    t.toBlob((t)=>{
                        t ? n(t) : s(new Error("Could not export image"));
                    }, e, i);
                })));
        });
    }
}
class v extends e {
    constructor(){
        super(...arguments), this.animationFrameId = null, this.isRunning = !1;
    }
    start() {
        if (this.isRunning) return;
        this.isRunning = !0;
        const t = ()=>{
            this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(t));
        };
        t();
    }
    stop() {
        this.isRunning = !1, null !== this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
    }
    destroy() {
        this.stop();
    }
}
class b extends e {
    constructor(t = new AudioContext){
        super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
    }
    load() {
        return t(this, void 0, void 0, function*() {});
    }
    get src() {
        return this.currentSrc;
    }
    set src(t) {
        if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
        fetch(t).then((e)=>{
            if (e.status >= 400) throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);
            return e.arrayBuffer();
        }).then((e)=>this.currentSrc !== t ? null : this.audioContext.decodeAudioData(e)).then((e)=>{
            this.currentSrc === t && (this.buffer = e, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
        }).catch((t)=>{
            console.error("WebAudioPlayer load error:", t);
        });
    }
    _play() {
        if (!this.paused) return;
        this.paused = !1, this.bufferNode && (this.bufferNode.onended = null, this.bufferNode.disconnect()), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
        let t = this.playedDuration * this._playbackRate;
        (t >= this.duration || t < 0) && (t = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, t), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = ()=>{
            this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
        };
    }
    _pause() {
        var t;
        this.paused = !0, null === (t = this.bufferNode) || void 0 === t || t.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
    }
    play() {
        return t(this, void 0, void 0, function*() {
            this.paused && (this._play(), this.emit("play"));
        });
    }
    pause() {
        this.paused || (this._pause(), this.emit("pause"));
    }
    stopAt(t) {
        const e = t - this.currentTime, i = this.bufferNode;
        null == i || i.stop(this.audioContext.currentTime + e), null == i || i.addEventListener("ended", ()=>{
            i === this.bufferNode && (this.bufferNode = null, this.pause());
        }, {
            once: !0
        });
    }
    setSinkId(e) {
        return t(this, void 0, void 0, function*() {
            return this.audioContext.setSinkId(e);
        });
    }
    get playbackRate() {
        return this._playbackRate;
    }
    set playbackRate(t) {
        this._playbackRate = t, this.bufferNode && (this.bufferNode.playbackRate.value = t);
    }
    get currentTime() {
        return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
    }
    set currentTime(t) {
        const e = !this.paused;
        e && this._pause(), this.playedDuration = t / this._playbackRate, e && this._play(), this.emit("seeking"), this.emit("timeupdate");
    }
    get duration() {
        var t, e;
        return null !== (t = this._duration) && void 0 !== t ? t : (null === (e = this.buffer) || void 0 === e ? void 0 : e.duration) || 0;
    }
    set duration(t) {
        this._duration = t;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(t) {
        this.gainNode.gain.value = t, this.emit("volumechange");
    }
    get muted() {
        return this._muted;
    }
    set muted(t) {
        this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
    }
    canPlayType(t) {
        return /^(audio|video)\//.test(t);
    }
    getGainNode() {
        return this.gainNode;
    }
    getChannelData() {
        const t = [];
        if (!this.buffer) return t;
        const e = this.buffer.numberOfChannels;
        for(let i = 0; i < e; i++)t.push(this.buffer.getChannelData(i));
        return t;
    }
    removeAttribute(t) {
        switch(t){
            case "src":
                this.src = "";
                break;
            case "playbackRate":
                this.playbackRate = 0;
                break;
            case "currentTime":
                this.currentTime = 0;
                break;
            case "duration":
                this.duration = 0;
                break;
            case "volume":
                this.volume = 0;
                break;
            case "muted":
                this.muted = !1;
        }
    }
}
const y = {
    waveColor: "#999",
    progressColor: "#555",
    cursorWidth: 1,
    minPxPerSec: 0,
    fillParent: !0,
    interact: !0,
    dragToSeek: !1,
    autoScroll: !0,
    autoCenter: !0,
    sampleRate: 8e3
};
class C extends a {
    static create(t) {
        return new C(t);
    }
    constructor(t){
        const e = t.media || ("WebAudio" === t.backend ? new b : void 0);
        super({
            media: e,
            mediaControls: t.mediaControls,
            autoplay: t.autoplay,
            playbackRate: t.audioRate
        }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, y, t), this.timer = new v;
        const i = e ? void 0 : this.getMediaElement();
        this.renderer = new g(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
        const n = this.options.url || this.getSrc() || "";
        Promise.resolve().then(()=>{
            this.emit("init");
            const { peaks: t, duration: e } = this.options;
            (n || t && e) && this.load(n, t, e).catch((t)=>{
                this.emit("error", t instanceof Error ? t : new Error(String(t)));
            });
        });
    }
    updateProgress(t = this.getCurrentTime()) {
        return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t;
    }
    initTimerEvents() {
        this.subscriptions.push(this.timer.on("tick", ()=>{
            if (!this.isSeeking()) {
                const t = this.updateProgress();
                this.emit("timeupdate", t), this.emit("audioprocess", t), null != this.stopAtPosition && this.isPlaying() && t >= this.stopAtPosition && this.pause();
            }
        }));
    }
    initPlayerEvents() {
        this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", ()=>{
            const t = this.updateProgress();
            this.emit("timeupdate", t);
        }), this.onMediaEvent("play", ()=>{
            this.emit("play"), this.timer.start();
        }), this.onMediaEvent("pause", ()=>{
            this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
        }), this.onMediaEvent("emptied", ()=>{
            this.timer.stop(), this.stopAtPosition = null;
        }), this.onMediaEvent("ended", ()=>{
            this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
        }), this.onMediaEvent("seeking", ()=>{
            this.emit("seeking", this.getCurrentTime());
        }), this.onMediaEvent("error", ()=>{
            var t;
            this.emit("error", null !== (t = this.getMediaElement().error) && void 0 !== t ? t : new Error("Media error")), this.stopAtPosition = null;
        }));
    }
    initRendererEvents() {
        this.subscriptions.push(this.renderer.on("click", (t, e)=>{
            this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, e));
        }), this.renderer.on("dblclick", (t, e)=>{
            this.emit("dblclick", t, e);
        }), this.renderer.on("scroll", (t, e, i, n)=>{
            const s = this.getDuration();
            this.emit("scroll", t * s, e * s, i, n);
        }), this.renderer.on("render", ()=>{
            this.emit("redraw");
        }), this.renderer.on("rendered", ()=>{
            this.emit("redrawcomplete");
        }), this.renderer.on("dragstart", (t)=>{
            this.emit("dragstart", t);
        }), this.renderer.on("dragend", (t)=>{
            this.emit("dragend", t);
        }), this.renderer.on("resize", ()=>{
            this.emit("resize");
        }));
        {
            let t;
            const e = this.renderer.on("drag", (e)=>{
                var i;
                if (!this.options.interact) return;
                this.renderer.renderProgress(e), clearTimeout(t);
                let n = 0;
                const s = this.options.dragToSeek;
                this.isPlaying() ? n = 0 : !0 === s ? n = 200 : s && "object" == typeof s && (n = null !== (i = s.debounceTime) && void 0 !== i ? i : 200), t = setTimeout(()=>{
                    this.seekTo(e);
                }, n), this.emit("interaction", e * this.getDuration()), this.emit("drag", e);
            });
            this.subscriptions.push(()=>{
                clearTimeout(t), e();
            });
        }
    }
    initPlugins() {
        var t;
        (null === (t = this.options.plugins) || void 0 === t ? void 0 : t.length) && this.options.plugins.forEach((t)=>{
            this.registerPlugin(t);
        });
    }
    unsubscribePlayerEvents() {
        this.mediaSubscriptions.forEach((t)=>t()), this.mediaSubscriptions = [];
    }
    setOptions(t) {
        this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = i.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = i.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), null != t.mediaControls && (this.getMediaElement().controls = t.mediaControls);
    }
    registerPlugin(t) {
        if (this.plugins.includes(t)) return t;
        t._init(this), this.plugins.push(t);
        const e = t.once("destroy", ()=>{
            this.plugins = this.plugins.filter((e)=>e !== t), this.subscriptions = this.subscriptions.filter((t)=>t !== e);
        });
        return this.subscriptions.push(e), t;
    }
    unregisterPlugin(t) {
        this.plugins = this.plugins.filter((e)=>e !== t), t.destroy();
    }
    getWrapper() {
        return this.renderer.getWrapper();
    }
    getWidth() {
        return this.renderer.getWidth();
    }
    getScroll() {
        return this.renderer.getScroll();
    }
    setScroll(t) {
        return this.renderer.setScroll(t);
    }
    setScrollTime(t) {
        const e = t / this.getDuration();
        this.renderer.setScrollPercentage(e);
    }
    getActivePlugins() {
        return this.plugins;
    }
    loadAudio(e, n, s, r) {
        return t(this, void 0, void 0, function*() {
            var t;
            if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = null, !n && !s) {
                const t = this.options.fetchParams || {};
                window.AbortController && !t.signal && (this.abortController = new AbortController, t.signal = this.abortController.signal);
                const i = (t)=>this.emit("loading", t);
                n = yield o.fetchBlob(e, i, t);
                const s = this.options.blobMimeType;
                s && (n = new Blob([
                    n
                ], {
                    type: s
                }));
            }
            this.setSrc(e, n);
            const a = yield new Promise((t)=>{
                const e = r || this.getDuration();
                e ? t(e) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", ()=>t(this.getDuration()), {
                    once: !0
                }));
            });
            if (!e && !n) {
                const t = this.getMediaElement();
                t instanceof b && (t.duration = a);
            }
            if (s) this.decodedData = i.createBuffer(s, a || 0);
            else if (n) {
                const t = yield n.arrayBuffer();
                this.decodedData = yield i.decode(t, this.options.sampleRate);
            }
            this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
        });
    }
    load(e, i, n) {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio(e, void 0, i, n);
            } catch (t) {
                throw this.emit("error", t), t;
            }
        });
    }
    loadBlob(e, i, n) {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio("", e, i, n);
            } catch (t) {
                throw this.emit("error", t), t;
            }
        });
    }
    zoom(t) {
        if (!this.decodedData) throw new Error("No audio loaded");
        this.renderer.zoom(t), this.emit("zoom", t);
    }
    getDecodedData() {
        return this.decodedData;
    }
    exportPeaks({ channels: t = 2, maxLength: e = 8e3, precision: i = 1e4 } = {}) {
        if (!this.decodedData) throw new Error("The audio has not been decoded yet");
        const n = Math.min(t, this.decodedData.numberOfChannels), s = [];
        for(let t = 0; t < n; t++){
            const n = this.decodedData.getChannelData(t), r = [], o = n.length / e;
            for(let t = 0; t < e; t++){
                const e = n.slice(Math.floor(t * o), Math.ceil((t + 1) * o));
                let s = 0;
                for(let t = 0; t < e.length; t++){
                    const i = e[t];
                    Math.abs(i) > Math.abs(s) && (s = i);
                }
                r.push(Math.round(s * i) / i);
            }
            s.push(r);
        }
        return s;
    }
    getDuration() {
        let t = super.getDuration() || 0;
        return 0 !== t && t !== 1 / 0 || !this.decodedData || (t = this.decodedData.duration), t;
    }
    toggleInteraction(t) {
        this.options.interact = t;
    }
    setTime(t) {
        this.stopAtPosition = null, super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
    }
    seekTo(t) {
        const e = this.getDuration() * t;
        this.setTime(e);
    }
    play(e, i) {
        const n = Object.create(null, {
            play: {
                get: ()=>super.play
            }
        });
        return t(this, void 0, void 0, function*() {
            null != e && this.setTime(e);
            const t = yield n.play.call(this);
            return null != i && (this.media instanceof b ? this.media.stopAt(i) : this.stopAtPosition = i), t;
        });
    }
    playPause() {
        return t(this, void 0, void 0, function*() {
            return this.isPlaying() ? this.pause() : this.play();
        });
    }
    stop() {
        this.pause(), this.setTime(0);
    }
    skip(t) {
        this.setTime(this.getCurrentTime() + t);
    }
    empty() {
        this.load("", [
            [
                0
            ]
        ], .001);
    }
    setMediaElement(t) {
        this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents();
    }
    exportImage() {
        return t(this, arguments, void 0, function*(t = "image/png", e = 1, i = "dataURL") {
            return this.renderer.exportImage(t, e, i);
        });
    }
    destroy() {
        var t;
        this.emit("destroy"), null === (t = this.abortController) || void 0 === t || t.abort(), this.plugins.forEach((t)=>t.destroy()), this.subscriptions.forEach((t)=>t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
    }
}
C.BasePlugin = class extends e {
    constructor(t){
        super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
    }
    onInit() {}
    _init(t) {
        this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
    }
    destroy() {
        this.emit("destroy"), this.subscriptions.forEach((t)=>t()), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
    }
}, C.dom = r;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-context@1.1_d0e4a2dfab03f7a4e31992d5e9ce8e89/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/create-context.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/use-layout-effect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@18.3.27_react@19.2.0/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-effect-_3622ae2c79abb82c6cd4990020d978b9/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/use-effect-event.tsx
__turbopack_context__.s([
    "useEffectEvent",
    ()=>useEffectEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var useReactEffectEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
    if (typeof useReactEffectEvent === "function") {
        return useReactEffectEvent(callback);
    }
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        "useEffectEvent.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEffectEvent.useRef[ref]"]);
    if (typeof useReactInsertionEffect === "function") {
        useReactInsertionEffect({
            "useEffectEvent.useReactInsertionEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useReactInsertionEffect"]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
            "useEffectEvent.useLayoutEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useLayoutEffect"]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useEffectEvent.useMemo": ()=>({
                "useEffectEvent.useMemo": (...args)=>ref.current?.(...args)
            })["useEffectEvent.useMemo"]
    }["useEffectEvent.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-control_209f4e36376384102522bfe4d6b42732/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/use-controllable-state.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState,
    "useControllableStateReducer",
    ()=>useControllableStateReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$effect$2d$_3622ae2c79abb82c6cd4990020d978b9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-effect-_3622ae2c79abb82c6cd4990020d978b9/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)");
;
;
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()] || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function useControllableState({ prop, defaultProp, onChange = ()=>{}, caller }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(prop !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableState.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableState.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
                if (value2 !== prop) {
                    onChangeRef.current?.(value2);
                }
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        onChangeRef
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(value);
    const onChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(onChange);
    useInsertionEffect({
        "useUncontrolledState.useInsertionEffect": ()=>{
            onChangeRef.current = onChange;
        }
    }["useUncontrolledState.useInsertionEffect"], [
        onChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                onChangeRef.current?.(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef
    ]);
    return [
        value,
        setValue,
        onChangeRef
    ];
}
function isFunction(value) {
    return typeof value === "function";
}
;
;
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
    const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
    const isControlled = controlledState !== void 0;
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$effect$2d$_3622ae2c79abb82c6cd4990020d978b9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(onChangeProp);
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(controlledState !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableStateReducer.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableStateReducer.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const args = [
        {
            ...initialArg,
            state: defaultProp
        }
    ];
    if (init) {
        args.push(init);
    }
    const [internalState, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer({
        "useControllableStateReducer.useReducer": (state2, action)=>{
            if (action.type === SYNC_STATE) {
                return {
                    ...state2,
                    state: action.state
                };
            }
            const next = reducer(state2, action);
            if (isControlled && !Object.is(next.state, state2.state)) {
                onChange(next.state);
            }
            return next;
        }
    }["useControllableStateReducer.useReducer"], ...args);
    const uncontrolledState = internalState.state;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(uncontrolledState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (prevValueRef.current !== uncontrolledState) {
                prevValueRef.current = uncontrolledState;
                if (!isControlled) {
                    onChange(uncontrolledState);
                }
            }
        }
    }["useControllableStateReducer.useEffect"], [
        onChange,
        uncontrolledState,
        prevValueRef,
        isControlled
    ]);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useControllableStateReducer.useMemo[state]": ()=>{
            const isControlled2 = controlledState !== void 0;
            if (isControlled2) {
                return {
                    ...internalState,
                    state: controlledState
                };
            }
            return internalState;
        }
    }["useControllableStateReducer.useMemo[state]"], [
        internalState,
        controlledState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (isControlled && !Object.is(controlledState, internalState.state)) {
                dispatch({
                    type: SYNC_STATE,
                    state: controlledState
                });
            }
        }
    }["useControllableStateReducer.useEffect"], [
        controlledState,
        internalState.state,
        isControlled
    ]);
    return [
        state,
        dispatch
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.27_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-primitive@2_8fc36fddadfc5720002d5ad7c1f55b49/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.27_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-callbac_7c85c3de28ac41133fdfd926c05b824c/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/use-callback-ref.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-escape-_125e46ccc90a044351051b2cf1c2d67a/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-escape-keydown/src/use-escape-keydown.tsx
__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-callbac_7c85c3de28ac41133fdfd926c05b824c/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEscapeKeydown.useEffect": ()=>{
            const handleKeyDown = {
                "useEscapeKeydown.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onEscapeKeyDown(event);
                    }
                }
            }["useEscapeKeydown.useEffect.handleKeyDown"];
            ownerDocument.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useEscapeKeydown.useEffect": ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    })
            })["useEscapeKeydown.useEffect"];
        }
    }["useEscapeKeydown.useEffect"], [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-dismissable_dcde4bd9d3907d7eba47126fb3340842/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// src/dismissable-layer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-primitive@2_8fc36fddadfc5720002d5ad7c1f55b49/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-callbac_7c85c3de28ac41133fdfd926c05b824c/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$escape$2d$_125e46ccc90a044351051b2cf1c2d67a$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-escape-_125e46ccc90a044351051b2cf1c2d67a/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "DismissableLayer.useComposedRefs[composedRefs]": (node2)=>setNode(node2)
    }["DismissableLayer.useComposedRefs[composedRefs]"]);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside({
        "DismissableLayer.usePointerDownOutside[pointerDownOutside]": (event)=>{
            const target = event.target;
            const isPointerDownOnBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch"]);
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.usePointerDownOutside[pointerDownOutside]"], ownerDocument);
    const focusOutside = useFocusOutside({
        "DismissableLayer.useFocusOutside[focusOutside]": (event)=>{
            const target = event.target;
            const isFocusInBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch"]);
            if (isFocusInBranch) return;
            onFocusOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.useFocusOutside[focusOutside]"], ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$escape$2d$_125e46ccc90a044351051b2cf1c2d67a$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeKeydown"])({
        "DismissableLayer.useEscapeKeydown": (event)=>{
            const isHighestLayer = index === context.layers.size - 1;
            if (!isHighestLayer) return;
            onEscapeKeyDown?.(event);
            if (!event.defaultPrevented && onDismiss) {
                event.preventDefault();
                onDismiss();
            }
        }
    }["DismissableLayer.useEscapeKeydown"], ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            if (!node) return;
            if (disableOutsidePointerEvents) {
                if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                    originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                    ownerDocument.body.style.pointerEvents = "none";
                }
                context.layersWithOutsidePointerEventsDisabled.add(node);
            }
            context.layers.add(node);
            dispatchUpdate();
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
                    }
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (!node) return;
                    context.layers.delete(node);
                    context.layersWithOutsidePointerEventsDisabled.delete(node);
                    dispatchUpdate();
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            const handleUpdate = {
                "DismissableLayer.useEffect.handleUpdate": ()=>force({})
            }["DismissableLayer.useEffect.handleUpdate"];
            document.addEventListener(CONTEXT_UPDATE, handleUpdate);
            return ({
                "DismissableLayer.useEffect": ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayerBranch.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                context.branches.add(node);
                return ({
                    "DismissableLayerBranch.useEffect": ()=>{
                        context.branches.delete(node);
                    }
                })["DismissableLayerBranch.useEffect"];
            }
        }
    }["DismissableLayerBranch.useEffect"], [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "usePointerDownOutside.useRef[handleClickRef]": ()=>{}
    }["usePointerDownOutside.useRef[handleClickRef]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerDownOutside.useEffect": ()=>{
            const handlePointerDown = {
                "usePointerDownOutside.useEffect.handlePointerDown": (event)=>{
                    if (event.target && !isPointerInsideReactTreeRef.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 = {
                            "usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2": function() {
                                handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                                    discrete: true
                                });
                            }
                        }["usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2"];
                        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                        const eventDetail = {
                            originalEvent: event
                        };
                        if (event.pointerType === "touch") {
                            ownerDocument.removeEventListener("click", handleClickRef.current);
                            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                            ownerDocument.addEventListener("click", handleClickRef.current, {
                                once: true
                            });
                        } else {
                            handleAndDispatchPointerDownOutsideEvent2();
                        }
                    } else {
                        ownerDocument.removeEventListener("click", handleClickRef.current);
                    }
                    isPointerInsideReactTreeRef.current = false;
                }
            }["usePointerDownOutside.useEffect.handlePointerDown"];
            const timerId = window.setTimeout({
                "usePointerDownOutside.useEffect.timerId": ()=>{
                    ownerDocument.addEventListener("pointerdown", handlePointerDown);
                }
            }["usePointerDownOutside.useEffect.timerId"], 0);
            return ({
                "usePointerDownOutside.useEffect": ()=>{
                    window.clearTimeout(timerId);
                    ownerDocument.removeEventListener("pointerdown", handlePointerDown);
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                }
            })["usePointerDownOutside.useEffect"];
        }
    }["usePointerDownOutside.useEffect"], [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusOutside.useEffect": ()=>{
            const handleFocus = {
                "useFocusOutside.useEffect.handleFocus": (event)=>{
                    if (event.target && !isFocusInsideReactTreeRef.current) {
                        const eventDetail = {
                            originalEvent: event
                        };
                        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                            discrete: false
                        });
                    }
                }
            }["useFocusOutside.useEffect.handleFocus"];
            ownerDocument.addEventListener("focusin", handleFocus);
            return ({
                "useFocusOutside.useEffect": ()=>ownerDocument.removeEventListener("focusin", handleFocus)
            })["useFocusOutside.useEffect"];
        }
    }["useFocusOutside.useEffect"], [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-focus-scope_c9bbb58fdda48c8c67e5a2aa62d74a2f/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// src/focus-scope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-primitive@2_8fc36fddadfc5720002d5ad7c1f55b49/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-callbac_7c85c3de28ac41133fdfd926c05b824c/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_7c85c3de28ac41133fdfd926c05b824c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "FocusScope.useComposedRefs[composedRefs]": (node)=>setContainer(node)
    }["FocusScope.useComposedRefs[composedRefs]"]);
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (trapped) {
                let handleFocusIn2 = {
                    "FocusScope.useEffect.handleFocusIn2": function(event) {
                        if (focusScope.paused || !container) return;
                        const target = event.target;
                        if (container.contains(target)) {
                            lastFocusedElementRef.current = target;
                        } else {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusIn2"], handleFocusOut2 = {
                    "FocusScope.useEffect.handleFocusOut2": function(event) {
                        if (focusScope.paused || !container) return;
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget === null) return;
                        if (!container.contains(relatedTarget)) {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusOut2"], handleMutations2 = {
                    "FocusScope.useEffect.handleMutations2": function(mutations) {
                        const focusedElement = document.activeElement;
                        if (focusedElement !== document.body) return;
                        for (const mutation of mutations){
                            if (mutation.removedNodes.length > 0) focus(container);
                        }
                    }
                }["FocusScope.useEffect.handleMutations2"];
                var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
                document.addEventListener("focusin", handleFocusIn2);
                document.addEventListener("focusout", handleFocusOut2);
                const mutationObserver = new MutationObserver(handleMutations2);
                if (container) mutationObserver.observe(container, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "FocusScope.useEffect": ()=>{
                        document.removeEventListener("focusin", handleFocusIn2);
                        document.removeEventListener("focusout", handleFocusOut2);
                        mutationObserver.disconnect();
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (container) {
                focusScopesStack.add(focusScope);
                const previouslyFocusedElement = document.activeElement;
                const hasFocusedCandidate = container.contains(previouslyFocusedElement);
                if (!hasFocusedCandidate) {
                    const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                    container.dispatchEvent(mountEvent);
                    if (!mountEvent.defaultPrevented) {
                        focusFirst(removeLinks(getTabbableCandidates(container)), {
                            select: true
                        });
                        if (document.activeElement === previouslyFocusedElement) {
                            focus(container);
                        }
                    }
                }
                return ({
                    "FocusScope.useEffect": ()=>{
                        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                        setTimeout({
                            "FocusScope.useEffect": ()=>{
                                const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                                container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                container.dispatchEvent(unmountEvent);
                                if (!unmountEvent.defaultPrevented) {
                                    focus(previouslyFocusedElement ?? document.body, {
                                        select: true
                                    });
                                }
                                container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                focusScopesStack.remove(focusScope);
                            }
                        }["FocusScope.useEffect"], 0);
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FocusScope.useCallback[handleKeyDown]": (event)=>{
            if (!loop && !trapped) return;
            if (focusScope.paused) return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
                const container2 = event.currentTarget;
                const [first, last] = getTabbableEdges(container2);
                const hasTabbableElementsInside = first && last;
                if (!hasTabbableElementsInside) {
                    if (focusedElement === container2) event.preventDefault();
                } else {
                    if (!event.shiftKey && focusedElement === last) {
                        event.preventDefault();
                        if (loop) focus(first, {
                            select: true
                        });
                    } else if (event.shiftKey && focusedElement === first) {
                        event.preventDefault();
                        if (loop) focus(last, {
                            select: true
                        });
                    }
                }
            }
        }
    }["FocusScope.useCallback[handleKeyDown]"], [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-portal@1.1._ad66f61ba8072589babcd5af3002b951/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// src/portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-primitive@2_8fc36fddadfc5720002d5ad7c1f55b49/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Portal.useLayoutEffect": ()=>setMounted(true)
    }["Portal.useLayoutEffect"], []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-presence@1._3fd5045f6b2ce13867beb3cd4d530871/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-layout-_042807e529199e8e54792d18ec3a6018/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePresence.useEffect": ()=>{
            const currentAnimationName = getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
        }
    }["usePresence.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
                const prevAnimationName = prevAnimationNameRef.current;
                const currentAnimationName = getAnimationName(styles);
                if (present) {
                    send("MOUNT");
                } else if (currentAnimationName === "none" || styles?.display === "none") {
                    send("UNMOUNT");
                } else {
                    const isAnimating = prevAnimationName !== currentAnimationName;
                    if (wasPresent && isAnimating) {
                        send("ANIMATION_OUT");
                    } else {
                        send("UNMOUNT");
                    }
                }
                prevPresentRef.current = present;
            }
        }
    }["usePresence.useLayoutEffect"], [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_042807e529199e8e54792d18ec3a6018$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            if (node) {
                let timeoutId;
                const ownerWindow = node.ownerDocument.defaultView ?? window;
                const handleAnimationEnd = {
                    "usePresence.useLayoutEffect.handleAnimationEnd": (event)=>{
                        const currentAnimationName = getAnimationName(stylesRef.current);
                        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                        if (event.target === node && isCurrentAnimation) {
                            send("ANIMATION_END");
                            if (!prevPresentRef.current) {
                                const currentFillMode = node.style.animationFillMode;
                                node.style.animationFillMode = "forwards";
                                timeoutId = ownerWindow.setTimeout({
                                    "usePresence.useLayoutEffect.handleAnimationEnd": ()=>{
                                        if (node.style.animationFillMode === "forwards") {
                                            node.style.animationFillMode = currentFillMode;
                                        }
                                    }
                                }["usePresence.useLayoutEffect.handleAnimationEnd"]);
                            }
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationEnd"];
                const handleAnimationStart = {
                    "usePresence.useLayoutEffect.handleAnimationStart": (event)=>{
                        if (event.target === node) {
                            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationStart"];
                node.addEventListener("animationstart", handleAnimationStart);
                node.addEventListener("animationcancel", handleAnimationEnd);
                node.addEventListener("animationend", handleAnimationEnd);
                return ({
                    "usePresence.useLayoutEffect": ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                })["usePresence.useLayoutEffect"];
            } else {
                send("ANIMATION_END");
            }
        }
    }["usePresence.useLayoutEffect"], [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "usePresence.useCallback": (node2)=>{
                stylesRef.current = node2 ? getComputedStyle(node2) : null;
                setNode(node2);
            }
        }["usePresence.useCallback"], [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Presence;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-focus-guard_d174c36cd38bc1bf0f91643c1f4d8944/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>FocusGuards,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// src/focus-guards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusGuards.useEffect": ()=>{
            const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
            document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
            document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
            count++;
            return ({
                "useFocusGuards.useEffect": ()=>{
                    if (count === 1) {
                        document.querySelectorAll("[data-radix-focus-guard]").forEach({
                            "useFocusGuards.useEffect": (node)=>node.remove()
                        }["useFocusGuards.useEffect"]);
                    }
                    count--;
                }
            })["useFocusGuards.useEffect"];
        }
    }["useFocusGuards.useEffect"], []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.27_react@19.2.0/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.27_react@19.2.0/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.27_react@19.2.0/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.27_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll-bar@2.3_b21260a5c96b14c743b992b97ee91195/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3_b21260a5c96b14c743b992b97ee91195$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.27_react@19.2.0/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$get$2d$nonce$40$1$2e$0$2e$1$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$get$2d$nonce$40$1$2e$0$2e$1$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_12b879e545472626764c3588582e77e1$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-style-singleton@2.2.3_12b879e545472626764c3588582e77e1/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-dialog@1.1._2e279b9f45eaccf149bfa3a9b35ce50c/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// src/dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-compose-ref_7fbf6ad6cae1ebf9121047b3b7198075/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_d0e4a2dfab03f7a4e31992d5e9ce8e89$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-context@1.1_d0e4a2dfab03f7a4e31992d5e9ce8e89/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@18.3.27_react@19.2.0/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_209f4e36376384102522bfe4d6b42732$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-use-control_209f4e36376384102522bfe4d6b42732/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dismissable_dcde4bd9d3907d7eba47126fb3340842$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-dismissable_dcde4bd9d3907d7eba47126fb3340842/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$focus$2d$scope_c9bbb58fdda48c8c67e5a2aa62d74a2f$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-focus-scope_c9bbb58fdda48c8c67e5a2aa62d74a2f/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$portal$40$1$2e$1$2e$_ad66f61ba8072589babcd5af3002b951$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-portal@1.1._ad66f61ba8072589babcd5af3002b951/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_3fd5045f6b2ce13867beb3cd4d530871$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-presence@1._3fd5045f6b2ce13867beb3cd4d530871/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-primitive@2_8fc36fddadfc5720002d5ad7c1f55b49/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$focus$2d$guard_d174c36cd38bc1bf0f91643c1f4d8944$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-focus-guard_d174c36cd38bc1bf0f91643c1f4d8944/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.27_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$aria$2d$hidden$40$1$2e$2$2e$6$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.27_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_d0e4a2dfab03f7a4e31992d5e9ce8e89$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_209f4e36376384102522bfe4d6b42732$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Dialog.useCallback": ()=>setOpen({
                    "Dialog.useCallback": (prevOpen)=>!prevOpen
                }["Dialog.useCallback"])
        }["Dialog.useCallback"], [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_3fd5045f6b2ce13867beb3cd4d530871$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$portal$40$1$2e$1$2e$_ad66f61ba8072589babcd5af3002b951$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_3fd5045f6b2ce13867beb3cd4d530871$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_3fd5045f6b2ce13867beb3cd4d530871$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DialogContentModal.useEffect": ()=>{
            const content = contentRef.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$aria$2d$hidden$40$1$2e$2$2e$6$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["DialogContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_7fbf6ad6cae1ebf9121047b3b7198075$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$focus$2d$guard_d174c36cd38bc1bf0f91643c1f4d8944$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$focus$2d$scope_c9bbb58fdda48c8c67e5a2aa62d74a2f$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dismissable_dcde4bd9d3907d7eba47126fb3340842$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_8fc36fddadfc5720002d5ad7c1f55b49$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_d0e4a2dfab03f7a4e31992d5e9ce8e89$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TitleWarning.useEffect": ()=>{
            if (titleId) {
                const hasTitle = document.getElementById(titleId);
                if (!hasTitle) console.error(MESSAGE);
            }
        }
    }["TitleWarning.useEffect"], [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DescriptionWarning.useEffect": ()=>{
            const describedById = contentRef.current?.getAttribute("aria-describedby");
            if (descriptionId && describedById) {
                const hasDescription = document.getElementById(descriptionId);
                if (!hasDescription) console.warn(MESSAGE);
            }
        }
    }["DescriptionWarning.useEffect"], [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
]);

//# sourceMappingURL=9533b__pnpm_cf59978d._.js.map