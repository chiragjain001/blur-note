(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseStorage",
    ()=>storage,
    "getAppInstance",
    ()=>getAppInstance,
    "getAuthInstance",
    ()=>getAuthInstance,
    "getDbInstance",
    ()=>getDbInstance,
    "getGoogleProvider",
    ()=>getGoogleProvider,
    "getStorageInstance",
    ()=>getStorageInstance,
    "isFirebaseReady",
    ()=>isFirebaseReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+app@0.14.6/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+auth@1.11.1_@firebase+app@0.14.6/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+firestore@4.9.2_@firebase+app@0.14.6/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+storage@0.14.0_@firebase+app@0.14.6/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyACBv7agfDq3yMs9qdnFQbsnkjmZjNzPWE") || "AIzaSyACBv7agfDq3yMs9qdnFQbsnkjmZjNzPWE",
    authDomain: ("TURBOPACK compile-time value", "whisplyy.firebaseapp.com") || "whisplyy.firebaseapp.com",
    projectId: ("TURBOPACK compile-time value", "whisplyy") || "whisplyy",
    storageBucket: ("TURBOPACK compile-time value", "whisplyy.appspot.com") || "whisplyy.appspot.com",
    messagingSenderId: ("TURBOPACK compile-time value", "983464337272") || "983464337272",
    appId: ("TURBOPACK compile-time value", "1:983464337272:web:23bf268b6901c686b0328d") || "1:983464337272:web:23bf268b6901c686b0328d"
};
let app = null;
let auth = null;
let db = null;
let storage = null;
let isInitialized = false;
// Initialize Firebase only on client side
const initializeFirebase = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (isInitialized) return true;
    try {
        if (!app) {
            app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
        }
        if (!auth) {
            auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
        }
        if (!db) {
            db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        }
        if (!storage) {
            storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
        }
        isInitialized = true;
        console.log('[v0] Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('[v0] Firebase initialization error:', error.message);
        isInitialized = false;
        return false;
    }
};
const getAppInstance = ()=>{
    if (!app || !isInitialized) {
        const initialized = initializeFirebase();
        if (!initialized) return null;
    }
    return app;
};
const getAuthInstance = ()=>{
    if (!auth) {
        initializeFirebase();
    }
    return auth;
};
const getDbInstance = ()=>{
    if (!db) {
        initializeFirebase();
    }
    return db;
};
const getStorageInstance = ()=>{
    if (!storage) {
        initializeFirebase();
    }
    return storage;
};
;
// Lazy provider initialization
let googleProviderInstance = null;
const getGoogleProvider = ()=>{
    if (!googleProviderInstance) {
        try {
            googleProviderInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
            // Add any additional scopes you need
            googleProviderInstance.addScope('profile');
            googleProviderInstance.addScope('email');
            // Set the authentication method to 'popup' for better mobile support
            googleProviderInstance.setCustomParameters({
                prompt: 'select_account'
            });
        } catch (error) {
            console.error('[v0] Error creating Google provider:', error);
            throw new Error('Failed to initialize Google Sign-In. Please try again later.');
        }
    }
    return googleProviderInstance;
};
const isFirebaseReady = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!isInitialized) {
        return initializeFirebase();
    }
    return !!app && !!auth && !!db && !!storage;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+auth@1.11.1_@firebase+app@0.14.6/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    isLoggedIn: false
});
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
                console.warn('[v0] Firebase not ready in AuthProvider');
                setLoading(false);
                return;
            }
            try {
                const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInstance"])();
                if (!auth) {
                    console.warn('[v0] Auth instance not available');
                    setLoading(false);
                    return;
                }
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, {
                    "AuthProvider.useEffect.unsubscribe": (currentUser)=>{
                        setUser(currentUser);
                        setLoading(false);
                    }
                }["AuthProvider.useEffect.unsubscribe"]);
                return ({
                    "AuthProvider.useEffect": ()=>unsubscribe()
                })["AuthProvider.useEffect"];
            } catch (error) {
                console.error('[v0] Error in AuthProvider:', error);
                setLoading(false);
            }
        }
    }["AuthProvider.useEffect"], []);
    const value = {
        user,
        loading,
        isLoggedIn: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_anonymous-social-platform_lib_f132af53._.js.map