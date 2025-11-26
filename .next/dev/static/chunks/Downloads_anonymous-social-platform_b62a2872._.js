(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/anonymous-social-platform/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeToggle() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const isDarkMode = savedTheme === 'dark';
            setIsDark(isDarkMode);
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.body.classList.toggle('light', newTheme === 'light');
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-full hover:bg-dark-secondary transition-colors",
        "aria-label": "Toggle theme",
        children: isDark ? '☀️' : '🌙'
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/theme-toggle.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "i7zKHrS1Z8mPybDRZKFMH/iL1wo=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addComment",
    ()=>addComment,
    "createPost",
    ()=>createPost,
    "createUser",
    ()=>createUser,
    "getPostComments",
    ()=>getPostComments,
    "getPosts",
    ()=>getPosts,
    "getUser",
    ()=>getUser,
    "getUserLikes",
    ()=>getUserLikes,
    "getUserPosts",
    ()=>getUserPosts,
    "likePost",
    ()=>likePost,
    "reportPost",
    ()=>reportPost,
    "unlikePost",
    ()=>unlikePost,
    "updatePostAudio",
    ()=>updatePostAudio,
    "updatePostMetadata",
    ()=>updatePostMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+firestore@4.9.2_@firebase+app@0.14.6/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-client] (ecmascript)");
;
;
const checkFirebase = (operation = 'operation')=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        console.warn(`[v0] Firebase not ready for ${operation}`);
        return false;
    }
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDbInstance"])();
    if (!db) {
        console.warn(`[v0] Firestore database not initialized for ${operation}`);
        return false;
    }
    return true;
};
const getDb = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDbInstance"])();
    if (!db) {
        throw new Error('Firestore not initialized');
    }
    return db;
};
async function createUser(uid, userData) {
    if (!checkFirebase('createUser')) return;
    try {
        const db = getDb();
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', uid);
        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (!userSnap.exists()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
                uid,
                username: userData.username || '',
                bio: userData.bio || '',
                avatar: userData.avatar || '👻',
                coverGradient: userData.coverGradient || 'from-primary to-accent',
                createdAt: new Date()
            });
            console.log('[v0] User created:', uid);
        }
    } catch (error) {
        console.error('[v0] Error creating user:', error);
    }
}
async function getUser(uid) {
    if (!checkFirebase('getUser') || !uid) {
        console.error('[v0] Invalid user ID or Firebase not ready');
        return null;
    }
    try {
        const db = getDb();
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', uid);
        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (!userSnap.exists()) {
            console.log(`[v0] User not found: ${uid}`);
            return null;
        }
        return userSnap.data();
    } catch (error) {
        console.error('[v0] Error getting user:', error);
        return null;
    }
}
async function createPost(postData) {
    if (!checkFirebase('createPost')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(postsRef, {
            ...postData,
            likeCount: 0,
            commentCount: 0,
            reportCount: 0,
            createdAt: new Date()
        });
        // Update user's post count
        if (postData.authorUid) {
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', postData.authorUid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                postCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
            });
        }
        console.log('[v0] Post created:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('[v0] Error creating post:', error);
        throw error;
    }
}
async function updatePostAudio(postId, audioData) {
    if (!checkFirebase('updatePostAudio')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(postRef, audioData);
    } catch (error) {
        console.error('[v0] Error updating post audio:', error);
        throw error;
    }
}
async function updatePostMetadata(postId, metadata) {
    if (!checkFirebase('updatePostMetadata')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(postRef, metadata);
    } catch (error) {
        console.error('[v0] Error updating post metadata:', error);
        throw error;
    }
}
async function getPosts(limitCount = 20) {
    if (!checkFirebase('getPosts')) return [];
    try {
        const db = getDb();
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(postsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(limitCount));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const posts = querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        console.log('[v0] Loaded posts:', posts.length);
        return posts;
    } catch (error) {
        console.error('[v0] Error getting posts:', error);
        return [];
    }
}
async function getUserPosts(uid) {
    if (!checkFirebase('getUserPosts')) return [];
    try {
        const db = getDb();
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(postsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.filter((doc)=>doc.data().authorUid === uid).map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.error('[v0] Error getting user posts:', error);
        return [];
    }
}
async function likePost(postId, userId) {
    if (!checkFirebase('likePost')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add to user's likes subcollection
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', userId, 'likes', postId);
        batch.set(likesRef, {
            createdAt: new Date()
        });
        // Increment post likeCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            likeCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        await batch.commit();
    } catch (error) {
        console.error('[v0] Error liking post:', error);
        throw error;
    }
}
async function unlikePost(postId, userId) {
    if (!checkFirebase('unlikePost')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Remove from user's likes subcollection
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', userId, 'likes', postId);
        batch.delete(likesRef);
        // Decrement post likeCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            likeCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(-1)
        });
        await batch.commit();
    } catch (error) {
        console.error('[v0] Error unliking post:', error);
        throw error;
    }
}
async function getUserLikes(userId) {
    if (!checkFirebase('getUserLikes')) return new Set();
    try {
        const db = getDb();
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'users', userId, 'likes');
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(likesRef);
        return new Set(querySnapshot.docs.map((doc)=>doc.id));
    } catch (error) {
        console.error('[v0] Error getting user likes:', error);
        return new Set();
    }
}
async function addComment(postId, commentData) {
    if (!checkFirebase('addComment')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add comment to comments collection
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        const commentDocRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(commentsRef, {
            postId,
            ...commentData,
            createdAt: new Date()
        });
        // Increment post commentCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            commentCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        await batch.commit();
        return commentDocRef.id;
    } catch (error) {
        console.error('[v0] Error adding comment:', error);
        throw error;
    }
}
async function getPostComments(postId) {
    if (!checkFirebase('getPostComments')) return [];
    try {
        const db = getDb();
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(commentsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.filter((doc)=>doc.data().postId === postId).map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.error('[v0] Error getting comments:', error);
        return [];
    }
}
async function reportPost(postId, userId, reason) {
    if (!checkFirebase('reportPost')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add report
        const reportsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(reportsRef, {
            postId,
            reportingUid: userId,
            reason,
            createdAt: new Date()
        });
        // Increment post reportCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            reportCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        await batch.commit();
    } catch (error) {
        console.error('[v0] Error reporting post:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/auth-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onAuthChange",
    ()=>onAuthChange,
    "signInAnonymously",
    ()=>signInAnonymously,
    "signOutUser",
    ()=>signOutUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+auth@1.11.1_@firebase+app@0.14.6/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-client] (ecmascript)");
;
;
;
async function signInAnonymously() {
    try {
        console.log('[Auth] Starting Anonymous Sign In...');
        // Ensure Firebase is initialized
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
            throw new Error('Failed to initialize Firebase. Please check your configuration.');
        }
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            throw new Error('Authentication service is not available. Please try again later.');
        }
        console.log('[Auth] Starting anonymous sign in...');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(auth).catch((error)=>{
            console.error('[Auth] Anonymous sign in error:', {
                code: error.code,
                message: error.message,
                name: error.name
            });
            throw error;
        });
        const user = result.user;
        if (!user) {
            throw new Error('Failed to authenticate anonymously. No user returned.');
        }
        console.log('[Auth] User authenticated anonymously:', {
            uid: user.uid
        });
        // Create user document if it doesn't exist
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUser"])(user.uid, {
                username: '',
                bio: '',
                avatar: '👻',
                coverGradient: 'from-primary to-accent'
            });
        } catch (userError) {
            // User might already exist, that's okay
            console.log('[Auth] User document creation skipped (may already exist)');
        }
        return user;
    } catch (error) {
        console.error('[Auth] Error in signInAnonymously:', {
            name: error.name,
            code: error.code,
            message: error.message
        });
        let errorMessage = 'Failed to sign in anonymously';
        if (error.code === 'auth/operation-not-allowed' || error.code === 'auth/admin-restricted-operation') {
            errorMessage = 'Anonymous authentication is not enabled in Firebase. Please enable it in Firebase Console: Authentication > Sign-in method > Anonymous > Enable';
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message) {
            errorMessage = error.message;
        }
        throw new Error(errorMessage);
    }
}
async function signOutUser() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        throw new Error('Firebase is not properly configured');
    }
    try {
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            throw new Error('Authentication service not available');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(auth);
    } catch (error) {
        console.error('[v0] Error signing out:', error);
        throw error;
    }
}
function onAuthChange(callback) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        console.warn('[v0] Firebase not ready for auth changes');
        callback(null);
        return ()=>{};
    }
    try {
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            callback(null);
            return ()=>{};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, callback);
    } catch (error) {
        console.error('[v0] Error setting up auth listener:', error);
        callback(null);
        return ()=>{};
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSignOut = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOutUser"])();
            setShowMenu(false);
        } catch (error) {
            console.error('[v0] Sign out error:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-dark-bg/50 border-b border-dark-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-2 text-2xl font-black gradient-text hover:opacity-80 transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "👻"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BlurNote"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    !loading && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowMenu(!showMenu),
                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg hover:scale-110 transition",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-12 right-0 bg-dark-card border border-dark-border rounded-lg shadow-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-4 py-2 text-sm text-gray-400 border-b border-dark-border truncate max-w-xs",
                                        children: user.displayName || 'Anonymous'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/profile/${user.uid}`,
                                        className: "block px-4 py-2 hover:bg-dark-secondary transition text-sm",
                                        onClick: ()=>setShowMenu(false),
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSignOut,
                                        className: "w-full px-4 py-2 text-left hover:bg-dark-secondary transition text-sm",
                                        children: "Sign Out"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Header, "qGzpyjpf35mSisKKWmR526K981g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-dialog@1.1._2e279b9f45eaccf149bfa3a9b35ce50c/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-xl', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:1d79d8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5":"toggleLike"},"Downloads/anonymous-social-platform/app/actions/likes.ts",""] */ __turbopack_context__.s([
    "toggleLike",
    ()=>toggleLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var toggleLike = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "toggleLike"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbGlrZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiIH0gZnJvbSAnQC9saWIvZmlyZWJhc2UtYWRtaW4nXHJcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ2ZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZSdcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgbGlrZSBvbiBhIHBvc3RcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVMaWtlKHVzZXJJZDogc3RyaW5nLCBwb3N0SWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGxpa2VkXHJcbiAgICBjb25zdCBsaWtlUmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKS5jb2xsZWN0aW9uKCdsaWtlcycpLmRvYyh1c2VySWQpXHJcbiAgICBjb25zdCBsaWtlRG9jID0gYXdhaXQgbGlrZVJlZi5nZXQoKVxyXG4gICAgXHJcbiAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaXNMaWtlZCA9IGxpa2VEb2MuZXhpc3RzXHJcbiAgICBcclxuICAgIGlmIChpc0xpa2VkKSB7XHJcbiAgICAgIC8vIFVubGlrZTogcmVtb3ZlIGxpa2UgZG9jdW1lbnQgYW5kIGRlY3JlbWVudCBjb3VudFxyXG4gICAgICBhd2FpdCBsaWtlUmVmLmRlbGV0ZSgpXHJcbiAgICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHtcclxuICAgICAgICBsaWtlc0NvdW50OiAocG9zdERvYy5kYXRhKCkhLmxpa2VzQ291bnQgfHwgMCkgLSAxLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsaWtlZDogZmFsc2UgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTGlrZTogYWRkIGxpa2UgZG9jdW1lbnQgYW5kIGluY3JlbWVudCBjb3VudFxyXG4gICAgICBhd2FpdCBsaWtlUmVmLnNldCh7XHJcbiAgICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHtcclxuICAgICAgICBsaWtlc0NvdW50OiAocG9zdERvYy5kYXRhKCkhLmxpa2VzQ291bnQgfHwgMCkgKyAxLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsaWtlZDogdHJ1ZSB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgdG9nZ2xpbmcgbGlrZTonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRUQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:4d4a6c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404d910a566286892204be87060f5c27cd920fa2ec":"getPostComments"},"Downloads/anonymous-social-platform/app/actions/comments.ts",""] */ __turbopack_context__.s([
    "getPostComments",
    ()=>getPostComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPostComments = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404d910a566286892204be87060f5c27cd920fa2ec", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPostComments"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiLCBpc1NoYWRvd2Jhbm5lZCB9IGZyb20gJ0AvbGliL2ZpcmViYXNlLWFkbWluJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQWRkQ29tbWVudFBhcmFtcyB7XHJcbiAgcG9zdElkOiBzdHJpbmdcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wIG9iamVjdHMgdG8gcGxhaW4gSmF2YVNjcmlwdCB2YWx1ZXNcclxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBUaW1lc3RhbXBzIGNhbid0IGJlIHNlcmlhbGl6ZWQgd2hlbiBwYXNzaW5nIGZyb20gc2VydmVyIHRvIGNsaWVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBGaXJlc3RvcmUgVGltZXN0YW1wXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3RvRGF0ZScgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvRGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICB9XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIFRpbWVzdGFtcC1saWtlIG9iamVjdCB3aXRoIF9zZWNvbmRzXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ19zZWNvbmRzJyBpbiB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLl9zZWNvbmRzIHx8IDBcclxuICAgIGNvbnN0IG5hbm9zZWNvbmRzID0gdmFsdWUuX25hbm9zZWNvbmRzIHx8IDBcclxuICAgIHJldHVybiBuZXcgRGF0ZShzZWNvbmRzICogMTAwMCArIG5hbm9zZWNvbmRzIC8gMTAwMDAwMCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBhbGwgVGltZXN0YW1wIG9iamVjdHMgaW4gYSBkYXRhIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudERhdGEoZGF0YTogYW55KTogYW55IHtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiBzZXJpYWxpemVDb21tZW50RGF0YShpdGVtKSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZDogYW55ID0ge31cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRpbWVzdGFtcCBmaWVsZHNcclxuICAgICAgaWYgKGtleSA9PT0gJ2NyZWF0ZWRBdCcgfHwga2V5ID09PSAndXBkYXRlZEF0Jykge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHNlcmlhbGl6ZVRpbWVzdGFtcCh2YWx1ZSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplQ29tbWVudERhdGEodmFsdWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50IHRvIGEgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvbW1lbnQocGFyYW1zOiBBZGRDb21tZW50UGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc2hhZG93YmFubmVkXHJcbiAgICBjb25zdCBzaGFkb3diYW5uZWQgPSBhd2FpdCBpc1NoYWRvd2Jhbm5lZChwYXJhbXMudXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIGNvbW1lbnQsIGJ1dCBjb21tZW50cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBjb21tZW50cyBxdWVyeVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZXQgdXNlciBkYXRhIGZvciBkZW5vcm1hbGl6YXRpb25cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhdGUgY29udGVudFxyXG4gICAgaWYgKCFwYXJhbXMuY29udGVudD8udHJpbSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWVudCBjb250ZW50IGlzIHJlcXVpcmVkJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgcG9zdCBleGlzdHNcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIGlmIChwb3N0RGF0YS5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbW1lbnQgb24gdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIGNvbW1lbnQgdG8gc3ViY29sbGVjdGlvblxyXG4gICAgY29uc3QgY29tbWVudFJlZiA9IHBvc3RSZWYuY29sbGVjdGlvbignY29tbWVudHMnKS5kb2MoKVxyXG4gICAgYXdhaXQgY29tbWVudFJlZi5zZXQoe1xyXG4gICAgICB1c2VySWQ6IHBhcmFtcy51c2VySWQsXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSB8fCAnQW5vbnltb3VzJyxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbnRlbnQ6IHBhcmFtcy5jb250ZW50LnRyaW0oKSxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBJbmNyZW1lbnQgY29tbWVudCBjb3VudFxyXG4gICAgYXdhaXQgcG9zdFJlZi51cGRhdGUoe1xyXG4gICAgICBjb21tZW50c0NvdW50OiAocG9zdERhdGEuY29tbWVudHNDb3VudCB8fCAwKSArIDEsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb21tZW50SWQ6IGNvbW1lbnRSZWYuaWQgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGFkZGluZyBjb21tZW50OicsIGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY29tbWVudHMgZm9yIGEgcG9zdCAoZmlsdGVyaW5nIG91dCBzaGFkb3diYW5uZWQgdXNlcnMpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdENvbW1lbnRzKHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEdldCBjb21tZW50c1xyXG4gICAgY29uc3QgY29tbWVudHNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLmRvYyhwb3N0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb21tZW50cycpXHJcbiAgICAgIC53aGVyZSgnc3RhdHVzJywgJz09JywgJ2FjdGl2ZScpXHJcbiAgICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICAvLyBGaWx0ZXIgb3V0IHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBjb21tZW50c1NuYXBzaG90LmRvY3NcclxuICAgICAgLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuZmlsdGVyKChjb21tZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNob3cgY29tbWVudHMgZnJvbSBhY3RpdmUgKG5vbi1zaGFkb3diYW5uZWQpIHVzZXJzXHJcbiAgICAgICAgcmV0dXJuICFzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhjb21tZW50LnVzZXJJZClcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBjb21tZW50cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gY29tbWVudHMubWFwKGNvbW1lbnQgPT4gc2VyaWFsaXplQ29tbWVudERhdGEoY29tbWVudCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBjb21tZW50czonLCBlcnJvcilcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvVUE2SHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:12d8b1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4042c7f6066b206e0590f3129fba0273d94a6411d5":"addComment"},"Downloads/anonymous-social-platform/app/actions/comments.ts",""] */ __turbopack_context__.s([
    "addComment",
    ()=>addComment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addComment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4042c7f6066b206e0590f3129fba0273d94a6411d5", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addComment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiLCBpc1NoYWRvd2Jhbm5lZCB9IGZyb20gJ0AvbGliL2ZpcmViYXNlLWFkbWluJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQWRkQ29tbWVudFBhcmFtcyB7XHJcbiAgcG9zdElkOiBzdHJpbmdcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wIG9iamVjdHMgdG8gcGxhaW4gSmF2YVNjcmlwdCB2YWx1ZXNcclxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBUaW1lc3RhbXBzIGNhbid0IGJlIHNlcmlhbGl6ZWQgd2hlbiBwYXNzaW5nIGZyb20gc2VydmVyIHRvIGNsaWVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBGaXJlc3RvcmUgVGltZXN0YW1wXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3RvRGF0ZScgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvRGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICB9XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIFRpbWVzdGFtcC1saWtlIG9iamVjdCB3aXRoIF9zZWNvbmRzXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ19zZWNvbmRzJyBpbiB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLl9zZWNvbmRzIHx8IDBcclxuICAgIGNvbnN0IG5hbm9zZWNvbmRzID0gdmFsdWUuX25hbm9zZWNvbmRzIHx8IDBcclxuICAgIHJldHVybiBuZXcgRGF0ZShzZWNvbmRzICogMTAwMCArIG5hbm9zZWNvbmRzIC8gMTAwMDAwMCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBhbGwgVGltZXN0YW1wIG9iamVjdHMgaW4gYSBkYXRhIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudERhdGEoZGF0YTogYW55KTogYW55IHtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiBzZXJpYWxpemVDb21tZW50RGF0YShpdGVtKSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZDogYW55ID0ge31cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRpbWVzdGFtcCBmaWVsZHNcclxuICAgICAgaWYgKGtleSA9PT0gJ2NyZWF0ZWRBdCcgfHwga2V5ID09PSAndXBkYXRlZEF0Jykge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHNlcmlhbGl6ZVRpbWVzdGFtcCh2YWx1ZSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplQ29tbWVudERhdGEodmFsdWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50IHRvIGEgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvbW1lbnQocGFyYW1zOiBBZGRDb21tZW50UGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc2hhZG93YmFubmVkXHJcbiAgICBjb25zdCBzaGFkb3diYW5uZWQgPSBhd2FpdCBpc1NoYWRvd2Jhbm5lZChwYXJhbXMudXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIGNvbW1lbnQsIGJ1dCBjb21tZW50cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBjb21tZW50cyBxdWVyeVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZXQgdXNlciBkYXRhIGZvciBkZW5vcm1hbGl6YXRpb25cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhdGUgY29udGVudFxyXG4gICAgaWYgKCFwYXJhbXMuY29udGVudD8udHJpbSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWVudCBjb250ZW50IGlzIHJlcXVpcmVkJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgcG9zdCBleGlzdHNcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIGlmIChwb3N0RGF0YS5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbW1lbnQgb24gdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIGNvbW1lbnQgdG8gc3ViY29sbGVjdGlvblxyXG4gICAgY29uc3QgY29tbWVudFJlZiA9IHBvc3RSZWYuY29sbGVjdGlvbignY29tbWVudHMnKS5kb2MoKVxyXG4gICAgYXdhaXQgY29tbWVudFJlZi5zZXQoe1xyXG4gICAgICB1c2VySWQ6IHBhcmFtcy51c2VySWQsXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSB8fCAnQW5vbnltb3VzJyxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbnRlbnQ6IHBhcmFtcy5jb250ZW50LnRyaW0oKSxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBJbmNyZW1lbnQgY29tbWVudCBjb3VudFxyXG4gICAgYXdhaXQgcG9zdFJlZi51cGRhdGUoe1xyXG4gICAgICBjb21tZW50c0NvdW50OiAocG9zdERhdGEuY29tbWVudHNDb3VudCB8fCAwKSArIDEsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb21tZW50SWQ6IGNvbW1lbnRSZWYuaWQgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGFkZGluZyBjb21tZW50OicsIGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY29tbWVudHMgZm9yIGEgcG9zdCAoZmlsdGVyaW5nIG91dCBzaGFkb3diYW5uZWQgdXNlcnMpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdENvbW1lbnRzKHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEdldCBjb21tZW50c1xyXG4gICAgY29uc3QgY29tbWVudHNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLmRvYyhwb3N0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb21tZW50cycpXHJcbiAgICAgIC53aGVyZSgnc3RhdHVzJywgJz09JywgJ2FjdGl2ZScpXHJcbiAgICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICAvLyBGaWx0ZXIgb3V0IHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBjb21tZW50c1NuYXBzaG90LmRvY3NcclxuICAgICAgLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuZmlsdGVyKChjb21tZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNob3cgY29tbWVudHMgZnJvbSBhY3RpdmUgKG5vbi1zaGFkb3diYW5uZWQpIHVzZXJzXHJcbiAgICAgICAgcmV0dXJuICFzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhjb21tZW50LnVzZXJJZClcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBjb21tZW50cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gY29tbWVudHMubWFwKGNvbW1lbnQgPT4gc2VyaWFsaXplQ29tbWVudERhdGEoY29tbWVudCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBjb21tZW50czonLCBlcnJvcilcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrVEE4RHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentsModal",
    ()=>CommentsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:4d4a6c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$12d8b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:12d8b1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CommentsModal({ postId, onClose }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentsModal.useEffect": ()=>{
            const loadComments = {
                "CommentsModal.useEffect.loadComments": async ()=>{
                    try {
                        if (postId.startsWith('demo-')) {
                            setComments([]);
                            setLoading(false);
                            return;
                        }
                        const postComments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPostComments"])(postId);
                        setComments(postComments);
                    } catch (err) {
                        console.error('[v0] Error loading comments:', err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["CommentsModal.useEffect.loadComments"];
            loadComments();
        }
    }["CommentsModal.useEffect"], [
        postId
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!newComment.trim() || !user) return;
        if (postId.startsWith('demo-')) {
            setError('Sign in to comment on real posts!');
            return;
        }
        try {
            setSubmitting(true);
            setError('');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$12d8b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addComment"])({
                postId,
                userId: user.uid,
                content: newComment.trim()
            });
            setNewComment('');
            // Reload comments
            const updatedComments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPostComments"])(postId);
            setComments(updatedComments);
        } catch (err) {
            setError(err.message || 'Failed to post comment');
        } finally{
            setSubmitting(false);
        }
    };
    const timeAgo = (date)=>{
        try {
            const now = new Date();
            const commentDate = date?.toDate?.() || new Date(date);
            const diff = now.getTime() - commentDate.getTime();
            const hours = Math.floor(diff / (1000 * 60 * 60));
            if (hours < 1) return 'just now';
            if (hours < 24) return `${hours}h ago`;
            return `${Math.floor(hours / 24)}d ago`;
        } catch  {
            return 'recently';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-2xl max-h-screen overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-dark-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Comments"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white text-2xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "Loading comments..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "No comments yet. Be the first!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this) : comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pb-4 border-b border-dark-border last:border-b-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-sm",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-sm",
                                                    children: comment.authorUsername || 'Anonymous'
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: timeAgo(comment.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-200 mt-1",
                                            children: comment.content
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, comment.id, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-dark-border p-6 bg-dark-secondary/50",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-error text-sm mb-3",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newComment,
                                    onChange: (e)=>setNewComment(e.target.value),
                                    placeholder: "Add a comment...",
                                    disabled: submitting,
                                    className: "flex-1 bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !newComment.trim() || submitting,
                                    className: "btn-primary px-6 py-2 disabled:opacity-50",
                                    children: submitting ? '...' : 'Post'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-dark-border p-6 bg-dark-secondary/50 text-center text-gray-400 text-sm",
                    children: "Sign in to comment"
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(CommentsModal, "mYfrClyZtZDIRJU6+AbiX9uWaCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CommentsModal;
var _c;
__turbopack_context__.k.register(_c, "CommentsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Genre color mapping and styling helper
 * Used for dynamic post card styling based on genre
 */ __turbopack_context__.s([
    "GENRES",
    ()=>GENRES,
    "GENRE_COLORS",
    ()=>GENRE_COLORS,
    "getGenreColor",
    ()=>getGenreColor,
    "getGenreStyles",
    ()=>getGenreStyles
]);
const GENRES = [
    'Confession',
    'Motivation',
    'Love / Heartbreak',
    'Dark Thoughts',
    'Friendship',
    'Life Advice',
    'Humor',
    'Storytime'
];
const GENRE_COLORS = {
    'Confession': '#FF6B6B',
    'Motivation': '#6BCB77',
    'Love / Heartbreak': '#A66CFF',
    'Dark Thoughts': '#FF4C4C',
    'Friendship': '#4D96FF',
    'Life Advice': '#FFD93D',
    'Humor': '#FF9F1C',
    'Storytime': '#845EC2'
};
function getGenreStyles(genre) {
    switch(genre){
        case 'Dark Thoughts':
            return 'bg-[#2D2D2D] border-2 border-[#FF4C4C]';
        case 'Confession':
            return 'bg-[#FF6B6B]';
        case 'Motivation':
            return 'bg-[#6BCB77]';
        case 'Love / Heartbreak':
            return 'bg-[#A66CFF]';
        case 'Friendship':
            return 'bg-[#4D96FF]';
        case 'Life Advice':
            return 'bg-[#FFD93D]';
        case 'Humor':
            return 'bg-[#FF9F1C]';
        case 'Storytime':
            return 'bg-[#845EC2]';
        default:
            return 'bg-dark-card border border-dark-border';
    }
}
function getGenreColor(genre) {
    return GENRE_COLORS[genre] || '#8b5cf6';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:490f1b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7084916c377494247151cef281f503624be26e963c":"reportPost"},"Downloads/anonymous-social-platform/app/actions/reports.ts",""] */ __turbopack_context__.s([
    "reportPost",
    ()=>reportPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var reportPost = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7084916c377494247151cef281f503624be26e963c", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reportPost"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb3J0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJ1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydCBhIHBvc3RcclxuICogQXBwZW5kcyB0byByZXBvcnRzW10gYXJyYXkgYW5kIHNldHMgcmVwb3J0ZWQgPSB0cnVlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVwb3J0UG9zdChwb3N0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHBvc3QgZXhpc3RzXHJcbiAgICBjb25zdCBwb3N0RG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKS5nZXQoKVxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IHJlcG9ydGVkIHRoaXMgcG9zdFxyXG4gICAgY29uc3QgZXhpc3RpbmdSZXBvcnQgPSBwb3N0RGF0YS5yZXBvcnRzPy5maW5kKFxyXG4gICAgICAocjogYW55KSA9PiByLnVzZXJJZCA9PT0gdXNlcklkXHJcbiAgICApXHJcbiAgICBcclxuICAgIGlmIChleGlzdGluZ1JlcG9ydCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIGFscmVhZHkgcmVwb3J0ZWQgdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIHRvIHJlcG9ydHMgYXJyYXkgYW5kIHNldCByZXBvcnRlZCA9IHRydWVcclxuICAgIGNvbnN0IHJlcG9ydHMgPSBwb3N0RGF0YS5yZXBvcnRzIHx8IFtdXHJcbiAgICByZXBvcnRzLnB1c2goe1xyXG4gICAgICB0eXBlOiByZWFzb24sXHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwb3N0SWQpLnVwZGF0ZSh7XHJcbiAgICAgIHJlcG9ydGVkOiB0cnVlLFxyXG4gICAgICByZXBvcnRzLFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgcmVwb3J0aW5nIHBvc3Q6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4VEFTc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportModal",
    ()=>ReportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$490f1b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:490f1b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const REPORT_REASONS = [
    'Abuse',
    'Hate Speech',
    'Self-Harm',
    'Spam'
];
function ReportModal({ postId, onClose }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [selectedReason, setSelectedReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        if (!user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('You must be logged in to report');
            return;
        }
        if (!selectedReason) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please select a reason');
            return;
        }
        try {
            setLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$490f1b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reportPost"])(postId, user.uid, selectedReason);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Report submitted');
            onClose();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || 'Failed to submit report');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Report Post"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Why are you reporting this post?"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: REPORT_REASONS.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedReason(reason),
                                className: `w-full px-4 py-3 rounded-lg text-left transition ${selectedReason === reason ? 'bg-primary text-white' : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'}`,
                                children: reason
                            }, reason, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                disabled: loading,
                                className: "flex-1 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-error hover:text-error transition disabled:opacity-50",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: !selectedReason || loading,
                                className: "flex-1 py-3 bg-error text-white rounded-lg font-semibold hover:bg-error/90 transition disabled:opacity-50 disabled:cursor-not-allowed",
                                children: loading ? 'Submitting...' : 'Submit Report'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ReportModal, "3tNDzZU1Efj+uLjTKL9pHfO8PyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ReportModal;
var _c;
__turbopack_context__.k.register(_c, "ReportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCard",
    ()=>PostCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$wavesurfer$2e$js$40$7$2e$11$2e$1$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/wavesurfer.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/framer-motion@12.23.24_@emo_a8f3e3ab3ce79744232f2639366efd77/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1d79d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:1d79d8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$comments$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$report$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
// Global audio player state to ensure only one plays at a time
let currentPlayer = null;
function VoicePlayer({ src, waveform, duration, initialSpeed = 1 }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wavesurferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSpeed || 1);
    const [initError, setInitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createWaveSurfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoicePlayer.useCallback[createWaveSurfer]": async ()=>{
            if (wavesurferRef.current || !containerRef.current || !src) return;
            try {
                const ws = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$wavesurfer$2e$js$40$7$2e$11$2e$1$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                    container: containerRef.current,
                    waveColor: '#4b5563',
                    progressColor: '#a855f7',
                    cursorColor: 'transparent',
                    barWidth: 2,
                    barRadius: 2,
                    responsive: true,
                    height: 56,
                    // Use precomputed waveform if available
                    ...waveform && {
                        peaks: waveform
                    }
                });
                wavesurferRef.current = ws;
                // If waveform is provided, use it directly (instant render)
                // Otherwise, load from audio file
                if (waveform && waveform.length > 0) {
                    // Create a dummy audio buffer for waveform display
                    // WaveSurfer will use the peaks we provided
                    ws.load(src);
                } else {
                    ws.load(src);
                }
                ws.setPlaybackRate(speed);
                const handleFinish = {
                    "VoicePlayer.useCallback[createWaveSurfer].handleFinish": ()=>{
                        setIsPlaying(false);
                        if (currentPlayer === ws) {
                            currentPlayer = null;
                        }
                    }
                }["VoicePlayer.useCallback[createWaveSurfer].handleFinish"];
                ws.on('finish', handleFinish);
                const handlePause = {
                    "VoicePlayer.useCallback[createWaveSurfer].handlePause": ()=>{
                        setIsPlaying(false);
                        if (currentPlayer === ws) {
                            currentPlayer = null;
                        }
                    }
                }["VoicePlayer.useCallback[createWaveSurfer].handlePause"];
                ws.on('pause', handlePause);
                return ({
                    "VoicePlayer.useCallback[createWaveSurfer]": ()=>{
                        ws.un('finish', handleFinish);
                    }
                })["VoicePlayer.useCallback[createWaveSurfer]"];
            } catch (e) {
                console.error('Error initializing WaveSurfer', e);
                setInitError('Could not initialize audio player');
            }
        }
    }["VoicePlayer.useCallback[createWaveSurfer]"], [
        src,
        speed,
        waveform
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoicePlayer.useEffect": ()=>{
            return ({
                "VoicePlayer.useEffect": ()=>{
                    if (wavesurferRef.current) {
                        wavesurferRef.current.destroy();
                        wavesurferRef.current = null;
                    }
                }
            })["VoicePlayer.useEffect"];
        }
    }["VoicePlayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoicePlayer.useEffect": ()=>{
            if (wavesurferRef.current) {
                wavesurferRef.current.setPlaybackRate(speed);
            }
        }
    }["VoicePlayer.useEffect"], [
        speed
    ]);
    const togglePlay = async ()=>{
        if (!wavesurferRef.current) {
            await createWaveSurfer();
        }
        if (!wavesurferRef.current) return;
        // Pause any currently playing audio
        if (currentPlayer && currentPlayer !== wavesurferRef.current) {
            currentPlayer.pause();
        }
        wavesurferRef.current.playPause();
        setIsPlaying((prev)=>{
            const newState = !prev;
            if (newState) {
                currentPlayer = wavesurferRef.current;
            } else {
                currentPlayer = null;
            }
            return newState;
        });
    };
    const handleSpeedChange = (value)=>{
        setSpeed(value);
    };
    const speeds = [
        1,
        1.25,
        1.5
    ];
    const formatDuration = (seconds)=>{
        if (!seconds) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 rounded-xl p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: togglePlay,
                        className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl shadow-lg hover:shadow-primary/50 transition",
                        children: isPlaying ? '⏸️' : '▶️'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "w-full h-12 sm:h-14"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-300 font-mono",
                        children: formatDuration(duration)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "opacity-80",
                        children: "Playback speed"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: speeds.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSpeedChange(s),
                                className: `px-2 py-1 rounded-full border text-xs sm:text-sm transition ${speed === s ? 'bg-primary text-white border-primary' : 'border-dark-border text-gray-300 hover:border-primary'}`,
                                children: [
                                    s,
                                    "x"
                                ]
                            }, s, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(VoicePlayer, "Vb+yipC13tVDkRugY8o1p1fhth8=");
_c = VoicePlayer;
function TextModal({ open, onOpenChange, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "glass border-dark-border w-[90%] sm:w-[70%] lg:w-1/2 max-h-[90vh] overflow-y-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 16,
                    scale: 0.96
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                transition: {
                    duration: 0.2
                },
                className: "space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base sm:text-lg leading-relaxed text-gray-100",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_c1 = TextModal;
function PostCard({ post, isLiked, onLike }) {
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTextModal, setShowTextModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReportModal, setShowReportModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isLiked);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(post.likesCount || 0);
    const [isLiking, setIsLiking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isOwnPost = user?.uid === post.userId;
    const isTextPost = post.type === 'text' && typeof post.content === 'string';
    const isLongText = isTextPost && post.content.length > 150;
    const truncatedText = isLongText ? `${post.content.slice(0, 150)}...` : post.content;
    const timeAgo = (date)=>{
        try {
            const now = new Date();
            const postDate = date?.toDate?.() || new Date(date);
            const diff = now.getTime() - postDate.getTime();
            const hours = Math.floor(diff / (1000 * 60 * 60));
            if (hours < 1) return 'just now';
            if (hours < 24) return `${hours}h ago`;
            return `${Math.floor(hours / 24)}d ago`;
        } catch  {
            return 'recently';
        }
    };
    const handleLike = async ()=>{
        if (!user || post.id.startsWith('demo-') || isLiking) return;
        try {
            setIsLiking(true);
            // Optimistic update
            const newLiked = !liked;
            setLiked(newLiked);
            setLikeCount((prev)=>newLiked ? prev + 1 : prev - 1);
            // Call server action
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1d79d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["toggleLike"])(user.uid, post.id);
            // Update state based on result
            if (result.success) {
                setLiked(result.liked);
            // Update count from server response if needed
            } else {
                // Revert on error
                setLiked(!newLiked);
                setLikeCount((prev)=>newLiked ? prev - 1 : prev + 1);
            }
        } catch (error) {
            console.error('[Server] Error toggling like:', error);
            // Revert on error
            setLiked(!liked);
            setLikeCount((prev)=>liked ? prev - 1 : prev + 1);
        } finally{
            setIsLiking(false);
        }
    };
    const profileLink = post.userId ? `/profile/${post.userId}` : '#';
    // Get genre styles for dynamic styling
    const genreStyles = post.genre ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenreStyles"])(post.genre) : 'bg-dark-card border border-dark-border';
    const isDarkThoughts = post.genre === 'Dark Thoughts';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.3
        },
        className: `w-full ${genreStyles} ${!isDarkThoughts ? 'border border-dark-border' : ''} rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: profileLink,
                        className: "w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl hover:scale-110 transition",
                        children: "👻"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: profileLink,
                                className: "font-semibold sm:font-bold hover:text-primary transition",
                                children: post.authorUsername || 'Anonymous'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-400",
                                        children: timeAgo(post.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    post.isEdited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 bg-dark-secondary px-2 py-0.5 rounded",
                                        children: "Edited"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 py-4 sm:py-5",
                children: [
                    post.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-200 leading-relaxed",
                                children: isLongText ? truncatedText : post.content
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            isLongText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowTextModal(true),
                                className: "mt-1 text-xs sm:text-sm text-primary hover:text-accent transition",
                                children: "...read"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this),
                    post.type === 'voice' && post.mediaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 sm:mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VoicePlayer, {
                            src: post.mediaUrl,
                            waveform: post.waveform,
                            duration: post.mediaDuration,
                            initialSpeed: 1
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-dark-border flex items-center gap-6 text-gray-400 text-xs sm:text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLike,
                                disabled: !user || post.id.startsWith('demo-') || isLiking,
                                className: "flex items-center gap-2 hover:text-primary transition group disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-xl group-hover:scale-125 transition",
                                        children: liked ? '❤️' : '🤍'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: likeCount
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowComments(true),
                                className: "flex items-center gap-2 hover:text-primary transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: post.commentCount || 0
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            !isOwnPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReportModal(true),
                                className: "flex items-center gap-2 hover:text-error transition",
                                title: "Report post",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🚩"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            isOwnPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMenu(!showMenu),
                                        className: "flex items-center gap-2 hover:text-primary transition",
                                        title: "More options",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "•••"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-10 min-w-[120px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowMenu(false);
                                                // TODO: Open edit modal
                                                },
                                                className: "w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary transition",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: async ()=>{
                                                    setShowMenu(false);
                                                // TODO: Delete post
                                                },
                                                className: "w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary text-error transition",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 374,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            showComments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$comments$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommentsModal"], {
                postId: post.id,
                onClose: ()=>setShowComments(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            isLongText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextModal, {
                open: showTextModal,
                onOpenChange: setShowTextModal,
                text: post.content
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this),
            showReportModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$report$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportModal"], {
                postId: post.id,
                onClose: ()=>setShowReportModal(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 413,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s1(PostCard, "gW/N3LeCE3wvtK83wha4Wj5A6tI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c2 = PostCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VoicePlayer");
__turbopack_context__.k.register(_c1, "TextModal");
__turbopack_context__.k.register(_c2, "PostCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCardSkeleton",
    ()=>PostCardSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/framer-motion@12.23.24_@emo_a8f3e3ab3ce79744232f2639366efd77/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function PostCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "w-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full bg-dark-secondary animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-32 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-24 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 py-4 sm:py-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-3/4 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-dark-secondary rounded-xl p-4 animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-dark-card"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-12 bg-dark-card rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-12 bg-dark-card rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-dark-border flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-16 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-16 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = PostCardSkeleton;
var _c;
__turbopack_context__.k.register(_c, "PostCardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:43c321 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7081561f72c0c9c8333a9ea864e6d788d81886b052":"getFeedPosts"},"Downloads/anonymous-social-platform/app/actions/feed.ts",""] */ __turbopack_context__.s([
    "getFeedPosts",
    ()=>getFeedPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFeedPosts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7081561f72c0c9c8333a9ea864e6d788d81886b052", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFeedPosts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmVlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IEZpcmVzdG9yZSBUaW1lc3RhbXAgb2JqZWN0cyB0byBwbGFpbiBKYXZhU2NyaXB0IHZhbHVlc1xyXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIFRpbWVzdGFtcHMgY2FuJ3QgYmUgc2VyaWFsaXplZCB3aGVuIHBhc3NpbmcgZnJvbSBzZXJ2ZXIgdG8gY2xpZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVUaW1lc3RhbXAodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIEZpcmVzdG9yZSBUaW1lc3RhbXBcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAndG9EYXRlJyBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9EYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9EYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgVGltZXN0YW1wLWxpa2Ugb2JqZWN0IHdpdGggX3NlY29uZHNcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnX3NlY29uZHMnIGluIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuX3NlY29uZHMgfHwgMFxyXG4gICAgY29uc3QgbmFub3NlY29uZHMgPSB2YWx1ZS5fbmFub3NlY29uZHMgfHwgMFxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHNlY29uZHMgKiAxMDAwICsgbmFub3NlY29uZHMgLyAxMDAwMDAwKS50b0lTT1N0cmluZygpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgc2VyaWFsaXplIGFsbCBUaW1lc3RhbXAgb2JqZWN0cyBpbiBhIGRhdGEgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVQb3N0RGF0YShkYXRhOiBhbnkpOiBhbnkge1xyXG4gIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgIHJldHVybiBkYXRhLm1hcChpdGVtID0+IHNlcmlhbGl6ZVBvc3REYXRhKGl0ZW0pKVxyXG4gIH1cclxuICBcclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkOiBhbnkgPSB7fVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdGltZXN0YW1wIGZpZWxkc1xyXG4gICAgICBpZiAoa2V5ID09PSAnY3JlYXRlZEF0JyB8fCBrZXkgPT09ICd1cGRhdGVkQXQnKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlKVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSBzZXJpYWxpemVQb3N0RGF0YSh2YWx1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGZlZWQgcG9zdHMgKGZpbHRlcmluZyBvdXQgc2hhZG93YmFubmVkIHVzZXJzIGFuZCBoaWRkZW4vZGVsZXRlZCBwb3N0cylcclxuICogU3VwcG9ydHMgZ2VucmUgZmlsdGVyaW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZFBvc3RzKFxyXG4gIGxpbWl0Q291bnQ6IG51bWJlciA9IDIwLFxyXG4gIGxhc3RQb3N0SWQ/OiBzdHJpbmcsXHJcbiAgZ2VucmU/OiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gcXVlcnkgYWxsIHBvc3RzIG9yZGVyZWQgYnkgY3JlYXRlZEF0XHJcbiAgICAvLyBXZSdsbCBmaWx0ZXIgYnkgZ2VucmUgYW5kIHN0YXR1cyBpbiBtZW1vcnkgdG8gYXZvaWQgaW5kZXggcmVxdWlyZW1lbnRzXHJcbiAgICBsZXQgcXVlcnk6IGFueSA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmxpbWl0KGxpbWl0Q291bnQgKiAzKSAvLyBHZXQgbW9yZSBwb3N0cyBzaW5jZSB3ZSdsbCBmaWx0ZXIgc29tZSBvdXRcclxuICAgIFxyXG4gICAgLy8gSWYgcGFnaW5hdGlvbiBjdXJzb3IgcHJvdmlkZWRcclxuICAgIGlmIChsYXN0UG9zdElkKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3N0RG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MobGFzdFBvc3RJZCkuZ2V0KClcclxuICAgICAgaWYgKGxhc3RQb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3RhcnRBZnRlcihsYXN0UG9zdERvYylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcG9zdHM6IGFueVtdID0gW11cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcXVlcnkuZ2V0KClcclxuICAgICAgcG9zdHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICB9KSlcclxuICAgIH0gY2F0Y2ggKHF1ZXJ5RXJyb3I6IGFueSkge1xyXG4gICAgICAvLyBJZiBxdWVyeSBmYWlscyAoZS5nLiwgbWlzc2luZyBpbmRleCksIHRyeSBhIHNpbXBsZXIgcXVlcnkgYW5kIHNvcnQgaW4gbWVtb3J5XHJcbiAgICAgIGNvbnNvbGUud2FybignW1NlcnZlcl0gUXVlcnkgd2l0aCBvcmRlckJ5IGZhaWxlZCwgdHJ5aW5nIHdpdGhvdXQgb3JkZXJCeTonLCBxdWVyeUVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIGxldCBmYWxsYmFja1F1ZXJ5OiBhbnkgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmxpbWl0KGxpbWl0Q291bnQgKiA1KVxyXG4gICAgICBjb25zdCBmYWxsYmFja1NuYXBzaG90ID0gYXdhaXQgZmFsbGJhY2tRdWVyeS5nZXQoKVxyXG4gICAgICBcclxuICAgICAgcG9zdHMgPSBmYWxsYmFja1NuYXBzaG90LmRvY3MubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICBcclxuICAgICAgLy8gU29ydCBpbiBtZW1vcnkgYnkgY3JlYXRlZEF0IChkZXNjZW5kaW5nKVxyXG4gICAgICBwb3N0cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBhLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBiLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIHJldHVybiBiVGltZSAtIGFUaW1lIC8vIERlc2NlbmRpbmcgb3JkZXJcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmlsdGVyIG91dCBzaGFkb3diYW5uZWQgdXNlcnMsIGluYWN0aXZlIHBvc3RzLCBhbmQgYXBwbHkgZ2VucmUgZmlsdGVyXHJcbiAgICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHNcclxuICAgICAgLmZpbHRlcigocG9zdDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRXhjbHVkZSBwb3N0cyBmcm9tIHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgICAgIGlmIChzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhwb3N0LnVzZXJJZCkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlIHBvc3RzIHdpdGggc3RhdHVzICdhY3RpdmUnIG9yIG5vIHN0YXR1cyBmaWVsZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAvLyBFeGNsdWRlIHBvc3RzIHdpdGggb3RoZXIgc3RhdHVzZXMgbGlrZSAnZGVsZXRlZCcsICdoaWRkZW4nLCBldGMuXHJcbiAgICAgICAgaWYgKHBvc3Quc3RhdHVzICYmIHBvc3Quc3RhdHVzICE9PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGx5IGdlbnJlIGZpbHRlciBpZiBzcGVjaWZpZWRcclxuICAgICAgICBpZiAoZ2VucmUgJiYgZ2VucmUgIT09ICdBbGwnICYmIHBvc3QuZ2VucmUgIT09IGdlbnJlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSlcclxuICAgICAgLnNsaWNlKDAsIGxpbWl0Q291bnQpIC8vIExpbWl0IHRvIHJlcXVlc3RlZCBhbW91bnQgYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICBcclxuICAgIC8vIFNlcmlhbGl6ZSBhbGwgcG9zdHMgdG8gY29udmVydCBUaW1lc3RhbXBzIHRvIHBsYWluIHZhbHVlc1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkUG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBmZWVkIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgcG9zdHMgKGZvciBwcm9maWxlIHBhZ2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclBvc3RzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAud2hlcmUoJ3VzZXJJZCcsICc9PScsIHVzZXJJZClcclxuICAgICAgLndoZXJlKCdzdGF0dXMnLCAnPT0nLCAnYWN0aXZlJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmdldCgpXHJcbiAgICBcclxuICAgIGNvbnN0IHBvc3RzID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBwb3N0cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyB1c2VyIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBoYXMgbGlrZWQgYSBwb3N0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VyTGlrZWQodXNlcklkOiBzdHJpbmcsIHBvc3RJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBjb25zdCBsaWtlRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAuZG9jKHBvc3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2xpa2VzJylcclxuICAgICAgLmRvYyh1c2VySWQpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGlrZURvYy5leGlzdHNcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciBjaGVja2luZyBsaWtlOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIncyBsaWtlZCBwb3N0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMaWtlZFBvc3RzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxTZXQ8c3RyaW5nPj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBHZXQgYWxsIHBvc3RzIHVzZXIgaGFzIGxpa2VkXHJcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGV4cGVuc2l2ZSwgc28gd2UnbGwgb3B0aW1pemUgYnkgZ2V0dGluZyBsaWtlcyBmcm9tIHVzZXIncyBzdWJjb2xsZWN0aW9uXHJcbiAgICAvLyBCdXQgZm9yIG5vdywgd2UnbGwgdXNlIGEgZGlmZmVyZW50IGFwcHJvYWNoIC0gY2hlY2sgbGlrZXMgb24gZWFjaCBwb3N0XHJcbiAgICBcclxuICAgIC8vIEFjdHVhbGx5LCB3ZSBzaG91bGQgc3RvcmUgbGlrZXMgaW4gcG9zdHMve3Bvc3RJZH0vbGlrZXMve3VzZXJJZH1cclxuICAgIC8vIFNvIHdlIG5lZWQgdG8gcXVlcnkgYWxsIHBvc3RzIGFuZCBjaGVjayB0aGVpciBsaWtlcyBzdWJjb2xsZWN0aW9uc1xyXG4gICAgLy8gVGhpcyBpcyBub3QgZWZmaWNpZW50LCBidXQgZm9yIE1WUCBpdCdzIGFjY2VwdGFibGVcclxuICAgIFxyXG4gICAgLy8gQmV0dGVyIGFwcHJvYWNoOiBTdG9yZSB1c2VyJ3MgbGlrZXMgaW4gYSBzZXBhcmF0ZSBjb2xsZWN0aW9uIG9yIHVzZSBjbGllbnQtc2lkZSBjYWNoaW5nXHJcbiAgICAvLyBGb3Igbm93LCByZXR1cm4gZW1wdHkgc2V0IGFuZCBsZXQgY2xpZW50IGhhbmRsZSBpdFxyXG4gICAgcmV0dXJuIG5ldyBTZXQoKVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGdldHRpbmcgdXNlciBsaWtlZCBwb3N0czonLCBlcnJvcilcclxuICAgIHJldHVybiBuZXcgU2V0KClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlRBd0RzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:532417 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60587d35f885c167c0256fe3e2e01e921cc748135a":"checkUserLiked"},"Downloads/anonymous-social-platform/app/actions/feed.ts",""] */ __turbopack_context__.s([
    "checkUserLiked",
    ()=>checkUserLiked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var checkUserLiked = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60587d35f885c167c0256fe3e2e01e921cc748135a", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "checkUserLiked"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmVlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IEZpcmVzdG9yZSBUaW1lc3RhbXAgb2JqZWN0cyB0byBwbGFpbiBKYXZhU2NyaXB0IHZhbHVlc1xyXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIFRpbWVzdGFtcHMgY2FuJ3QgYmUgc2VyaWFsaXplZCB3aGVuIHBhc3NpbmcgZnJvbSBzZXJ2ZXIgdG8gY2xpZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVUaW1lc3RhbXAodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIEZpcmVzdG9yZSBUaW1lc3RhbXBcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAndG9EYXRlJyBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9EYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9EYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgVGltZXN0YW1wLWxpa2Ugb2JqZWN0IHdpdGggX3NlY29uZHNcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnX3NlY29uZHMnIGluIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuX3NlY29uZHMgfHwgMFxyXG4gICAgY29uc3QgbmFub3NlY29uZHMgPSB2YWx1ZS5fbmFub3NlY29uZHMgfHwgMFxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHNlY29uZHMgKiAxMDAwICsgbmFub3NlY29uZHMgLyAxMDAwMDAwKS50b0lTT1N0cmluZygpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgc2VyaWFsaXplIGFsbCBUaW1lc3RhbXAgb2JqZWN0cyBpbiBhIGRhdGEgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVQb3N0RGF0YShkYXRhOiBhbnkpOiBhbnkge1xyXG4gIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgIHJldHVybiBkYXRhLm1hcChpdGVtID0+IHNlcmlhbGl6ZVBvc3REYXRhKGl0ZW0pKVxyXG4gIH1cclxuICBcclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkOiBhbnkgPSB7fVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdGltZXN0YW1wIGZpZWxkc1xyXG4gICAgICBpZiAoa2V5ID09PSAnY3JlYXRlZEF0JyB8fCBrZXkgPT09ICd1cGRhdGVkQXQnKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlKVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSBzZXJpYWxpemVQb3N0RGF0YSh2YWx1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGZlZWQgcG9zdHMgKGZpbHRlcmluZyBvdXQgc2hhZG93YmFubmVkIHVzZXJzIGFuZCBoaWRkZW4vZGVsZXRlZCBwb3N0cylcclxuICogU3VwcG9ydHMgZ2VucmUgZmlsdGVyaW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZFBvc3RzKFxyXG4gIGxpbWl0Q291bnQ6IG51bWJlciA9IDIwLFxyXG4gIGxhc3RQb3N0SWQ/OiBzdHJpbmcsXHJcbiAgZ2VucmU/OiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gcXVlcnkgYWxsIHBvc3RzIG9yZGVyZWQgYnkgY3JlYXRlZEF0XHJcbiAgICAvLyBXZSdsbCBmaWx0ZXIgYnkgZ2VucmUgYW5kIHN0YXR1cyBpbiBtZW1vcnkgdG8gYXZvaWQgaW5kZXggcmVxdWlyZW1lbnRzXHJcbiAgICBsZXQgcXVlcnk6IGFueSA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmxpbWl0KGxpbWl0Q291bnQgKiAzKSAvLyBHZXQgbW9yZSBwb3N0cyBzaW5jZSB3ZSdsbCBmaWx0ZXIgc29tZSBvdXRcclxuICAgIFxyXG4gICAgLy8gSWYgcGFnaW5hdGlvbiBjdXJzb3IgcHJvdmlkZWRcclxuICAgIGlmIChsYXN0UG9zdElkKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3N0RG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MobGFzdFBvc3RJZCkuZ2V0KClcclxuICAgICAgaWYgKGxhc3RQb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3RhcnRBZnRlcihsYXN0UG9zdERvYylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcG9zdHM6IGFueVtdID0gW11cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcXVlcnkuZ2V0KClcclxuICAgICAgcG9zdHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICB9KSlcclxuICAgIH0gY2F0Y2ggKHF1ZXJ5RXJyb3I6IGFueSkge1xyXG4gICAgICAvLyBJZiBxdWVyeSBmYWlscyAoZS5nLiwgbWlzc2luZyBpbmRleCksIHRyeSBhIHNpbXBsZXIgcXVlcnkgYW5kIHNvcnQgaW4gbWVtb3J5XHJcbiAgICAgIGNvbnNvbGUud2FybignW1NlcnZlcl0gUXVlcnkgd2l0aCBvcmRlckJ5IGZhaWxlZCwgdHJ5aW5nIHdpdGhvdXQgb3JkZXJCeTonLCBxdWVyeUVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIGxldCBmYWxsYmFja1F1ZXJ5OiBhbnkgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmxpbWl0KGxpbWl0Q291bnQgKiA1KVxyXG4gICAgICBjb25zdCBmYWxsYmFja1NuYXBzaG90ID0gYXdhaXQgZmFsbGJhY2tRdWVyeS5nZXQoKVxyXG4gICAgICBcclxuICAgICAgcG9zdHMgPSBmYWxsYmFja1NuYXBzaG90LmRvY3MubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICBcclxuICAgICAgLy8gU29ydCBpbiBtZW1vcnkgYnkgY3JlYXRlZEF0IChkZXNjZW5kaW5nKVxyXG4gICAgICBwb3N0cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBhLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBiLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIHJldHVybiBiVGltZSAtIGFUaW1lIC8vIERlc2NlbmRpbmcgb3JkZXJcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmlsdGVyIG91dCBzaGFkb3diYW5uZWQgdXNlcnMsIGluYWN0aXZlIHBvc3RzLCBhbmQgYXBwbHkgZ2VucmUgZmlsdGVyXHJcbiAgICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHNcclxuICAgICAgLmZpbHRlcigocG9zdDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRXhjbHVkZSBwb3N0cyBmcm9tIHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgICAgIGlmIChzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhwb3N0LnVzZXJJZCkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlIHBvc3RzIHdpdGggc3RhdHVzICdhY3RpdmUnIG9yIG5vIHN0YXR1cyBmaWVsZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAvLyBFeGNsdWRlIHBvc3RzIHdpdGggb3RoZXIgc3RhdHVzZXMgbGlrZSAnZGVsZXRlZCcsICdoaWRkZW4nLCBldGMuXHJcbiAgICAgICAgaWYgKHBvc3Quc3RhdHVzICYmIHBvc3Quc3RhdHVzICE9PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGx5IGdlbnJlIGZpbHRlciBpZiBzcGVjaWZpZWRcclxuICAgICAgICBpZiAoZ2VucmUgJiYgZ2VucmUgIT09ICdBbGwnICYmIHBvc3QuZ2VucmUgIT09IGdlbnJlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSlcclxuICAgICAgLnNsaWNlKDAsIGxpbWl0Q291bnQpIC8vIExpbWl0IHRvIHJlcXVlc3RlZCBhbW91bnQgYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICBcclxuICAgIC8vIFNlcmlhbGl6ZSBhbGwgcG9zdHMgdG8gY29udmVydCBUaW1lc3RhbXBzIHRvIHBsYWluIHZhbHVlc1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkUG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBmZWVkIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgcG9zdHMgKGZvciBwcm9maWxlIHBhZ2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclBvc3RzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAud2hlcmUoJ3VzZXJJZCcsICc9PScsIHVzZXJJZClcclxuICAgICAgLndoZXJlKCdzdGF0dXMnLCAnPT0nLCAnYWN0aXZlJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmdldCgpXHJcbiAgICBcclxuICAgIGNvbnN0IHBvc3RzID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBwb3N0cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyB1c2VyIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBoYXMgbGlrZWQgYSBwb3N0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VyTGlrZWQodXNlcklkOiBzdHJpbmcsIHBvc3RJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBjb25zdCBsaWtlRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAuZG9jKHBvc3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2xpa2VzJylcclxuICAgICAgLmRvYyh1c2VySWQpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGlrZURvYy5leGlzdHNcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciBjaGVja2luZyBsaWtlOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIncyBsaWtlZCBwb3N0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMaWtlZFBvc3RzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxTZXQ8c3RyaW5nPj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBHZXQgYWxsIHBvc3RzIHVzZXIgaGFzIGxpa2VkXHJcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGV4cGVuc2l2ZSwgc28gd2UnbGwgb3B0aW1pemUgYnkgZ2V0dGluZyBsaWtlcyBmcm9tIHVzZXIncyBzdWJjb2xsZWN0aW9uXHJcbiAgICAvLyBCdXQgZm9yIG5vdywgd2UnbGwgdXNlIGEgZGlmZmVyZW50IGFwcHJvYWNoIC0gY2hlY2sgbGlrZXMgb24gZWFjaCBwb3N0XHJcbiAgICBcclxuICAgIC8vIEFjdHVhbGx5LCB3ZSBzaG91bGQgc3RvcmUgbGlrZXMgaW4gcG9zdHMve3Bvc3RJZH0vbGlrZXMve3VzZXJJZH1cclxuICAgIC8vIFNvIHdlIG5lZWQgdG8gcXVlcnkgYWxsIHBvc3RzIGFuZCBjaGVjayB0aGVpciBsaWtlcyBzdWJjb2xsZWN0aW9uc1xyXG4gICAgLy8gVGhpcyBpcyBub3QgZWZmaWNpZW50LCBidXQgZm9yIE1WUCBpdCdzIGFjY2VwdGFibGVcclxuICAgIFxyXG4gICAgLy8gQmV0dGVyIGFwcHJvYWNoOiBTdG9yZSB1c2VyJ3MgbGlrZXMgaW4gYSBzZXBhcmF0ZSBjb2xsZWN0aW9uIG9yIHVzZSBjbGllbnQtc2lkZSBjYWNoaW5nXHJcbiAgICAvLyBGb3Igbm93LCByZXR1cm4gZW1wdHkgc2V0IGFuZCBsZXQgY2xpZW50IGhhbmRsZSBpdFxyXG4gICAgcmV0dXJuIG5ldyBTZXQoKVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGdldHRpbmcgdXNlciBsaWtlZCBwb3N0czonLCBlcnJvcilcclxuICAgIHJldHVybiBuZXcgU2V0KClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1RBZ0xzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/feed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Feed",
    ()=>Feed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$43c321__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:43c321 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$532417__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:532417 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Feed() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [likedPosts, setLikedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const lastPostIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const loadPosts = async (genre, reset = false)=>{
        try {
            if (reset) {
                setLoading(true);
                setPosts([]);
                lastPostIdRef.current = undefined;
            }
            const firestorePosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$43c321__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFeedPosts"])(10, lastPostIdRef.current, genre === 'All' ? undefined : genre);
            if (reset) {
                setPosts(firestorePosts);
            } else {
                setPosts((prev)=>[
                        ...prev,
                        ...firestorePosts
                    ]);
            }
            if (firestorePosts.length < 10) {
                setHasMore(false);
            } else {
                lastPostIdRef.current = firestorePosts[firestorePosts.length - 1].id;
            }
            // Load user's likes if logged in
            if (user) {
                const likeChecks = await Promise.all(firestorePosts.map(async (post)=>{
                    const liked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$532417__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkUserLiked"])(user.uid, post.id);
                    return liked ? post.id : null;
                }));
                const likedSet = new Set(likeChecks.filter(Boolean));
                if (reset) {
                    setLikedPosts(likedSet);
                } else {
                    setLikedPosts((prev)=>new Set([
                            ...prev,
                            ...likedSet
                        ]));
                }
            }
        } catch (error) {
            console.error('[Server] Error loading feed:', error);
            if (reset) {
                setPosts([]);
            }
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feed.useEffect": ()=>{
            loadPosts(selectedGenre, true);
        }
    }["Feed.useEffect"], [
        selectedGenre,
        user
    ]);
    const handleGenreChange = (genre)=>{
        setSelectedGenre(genre);
        setHasMore(true);
    };
    const handleLoadMore = ()=>{
        if (!loading && hasMore) {
            loadPosts(selectedGenre, false);
        }
    };
    const handleLike = ()=>{
    // Like handling is now done in PostCard component
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-4 sm:px-6 md:px-8 py-8 md:py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl w-full mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 overflow-x-auto pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 min-w-max",
                        children: [
                            'All',
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENRES"]
                        ].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleGenreChange(genre),
                                className: `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${selectedGenre === genre ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'}`,
                                children: genre
                            }, genre, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                loading && posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 sm:space-y-6",
                    children: [
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostCardSkeleton"], {}, i, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this) : posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16 sm:py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl sm:text-5xl mb-4",
                            children: "👻"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-base sm:text-lg",
                            children: selectedGenre === 'All' ? 'No posts yet. Be the first to share!' : `No ${selectedGenre} posts yet.`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostCard"], {
                                    post: post,
                                    isLiked: likedPosts.has(post.id),
                                    onLike: ()=>{}
                                }, post.id, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLoadMore,
                                disabled: loading,
                                className: "px-6 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-primary transition disabled:opacity-50",
                                children: loading ? 'Loading...' : 'Load More'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/feed.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Feed, "MxbIHlyac3yr/vF3MzqIVRCkC+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Feed;
var _c;
__turbopack_context__.k.register(_c, "Feed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:2a5076 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e4026df2b0c96448d5a08a5843ed5671440f7338":"createPostWithAuth"},"Downloads/anonymous-social-platform/app/actions/posts.ts",""] */ __turbopack_context__.s([
    "createPostWithAuth",
    ()=>createPostWithAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createPostWithAuth = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e4026df2b0c96448d5a08a5843ed5671440f7338", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPostWithAuth"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcG9zdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBdXRoSW5zdGFuY2UgfSBmcm9tICdAL2xpYi9maXJlYmFzZSdcclxuaW1wb3J0IHsgZ2V0QWRtaW5EYiwgZ2V0QWRtaW5BdXRoLCBpc0FkbWluIH0gZnJvbSAnQC9saWIvZmlyZWJhc2UtYWRtaW4nXHJcbmltcG9ydCB7IGdldFN0b3JhZ2VJbnN0YW5jZSB9IGZyb20gJ0AvbGliL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyByZWYsIHVwbG9hZEJ5dGVzLCBnZXREb3dubG9hZFVSTCwgZGVsZXRlT2JqZWN0IH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcclxuaW1wb3J0IHsgZ2VuZXJhdGVXYXZlZm9ybUZyb21CbG9iIH0gZnJvbSAnQC9saWIvd2F2ZWZvcm0tZ2VuZXJhdG9yJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFBhcmFtcyB7XHJcbiAgdHlwZTogJ3RleHQnIHwgJ3ZvaWNlJ1xyXG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBudWxsXHJcbiAgbWVkaWFCbG9iPzogQmxvYiB8IG51bGxcclxuICBtZWRpYU1pbWVUeXBlPzogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRWRpdFBvc3RQYXJhbXMge1xyXG4gIHBvc3RJZDogc3RyaW5nXHJcbiAgY29udGVudD86IHN0cmluZ1xyXG4gIHRleHQ/OiBzdHJpbmdcclxuICBnZW5yZT86IHN0cmluZ1xyXG4gIG1vZHVsYXRpb25UeXBlPzogJ29yaWdpbmFsJyB8ICdkZWVwJyB8ICdyb2JvdCcgfCAnd2hpc3BlcidcclxuICBtZWRpYUJsb2I/OiBCbG9iIC8vIEZvciByZS1wcm9jZXNzaW5nIHZvaWNlIHdpdGggbmV3IG1vZHVsYXRpb25cclxufVxyXG5cclxuLyoqXHJcbiAqIFJhdGUgbGltaXRpbmc6IENoZWNrIGlmIHVzZXIgcG9zdGVkIHdpdGhpbiBsYXN0IDIgbWludXRlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSYXRlTGltaXQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gIGNvbnN0IHBvc3RzUmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gIFxyXG4gIGNvbnN0IHR3b01pbnV0ZXNBZ28gPSBUaW1lc3RhbXAuZnJvbU1pbGxpcyhEYXRlLm5vdygpIC0gMiAqIDYwICogMTAwMClcclxuICBjb25zdCByZWNlbnRQb3N0cyA9IGF3YWl0IHBvc3RzUmVmXHJcbiAgICAud2hlcmUoJ3VzZXJJZCcsICc9PScsIHVzZXJJZClcclxuICAgIC53aGVyZSgnY3JlYXRlZEF0JywgJz4nLCB0d29NaW51dGVzQWdvKVxyXG4gICAgLmxpbWl0KDEpXHJcbiAgICAuZ2V0KClcclxuXHJcbiAgaWYgKCFyZWNlbnRQb3N0cy5lbXB0eSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdSYXRlIGxpbWl0OiBQbGVhc2Ugd2FpdCAyIG1pbnV0ZXMgYmV0d2VlbiBwb3N0cycpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgZGF0YSB3aXRoIGRlbm9ybWFsaXplZCBmaWVsZHNcclxuICogQ3JlYXRlcyBhIGRlZmF1bHQgdXNlciBkb2N1bWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyRGF0YSh1c2VySWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXJJZCkuZ2V0KClcclxuICBcclxuICBpZiAoIXVzZXJEb2MuZXhpc3RzKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBkZWZhdWx0IHVzZXIgZG9jdW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdFxyXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHVzZXIgYXV0aGVudGljYXRlZCBidXQgZG9jdW1lbnQgY3JlYXRpb24gZmFpbGVkXHJcbiAgICBjb25zdCBkZWZhdWx0VXNlckRhdGEgPSB7XHJcbiAgICAgIHVpZDogdXNlcklkLFxyXG4gICAgICB1c2VybmFtZTogJ0Fub255bW91cycsXHJcbiAgICAgIHJvbGU6ICd1c2VyJyxcclxuICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcclxuICAgICAgYXZhdGFyVXJsOiAnJyxcclxuICAgICAgYmlvOiAnJyxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wLm5vdygpLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VySWQpLnNldChkZWZhdWx0VXNlckRhdGEpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lOiAnQW5vbnltb3VzJyxcclxuICAgICAgYXZhdGFyVXJsOiAnJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCkhXHJcbiAgLy8gSGFuZGxlIGJvdGggb2xkIGZvcm1hdCAoYXZhdGFyKSBhbmQgbmV3IGZvcm1hdCAoYXZhdGFyVXJsKVxyXG4gIGNvbnN0IGF2YXRhclVybCA9IHVzZXJEYXRhLmF2YXRhclVybCB8fCB1c2VyRGF0YS5hdmF0YXIgfHwgJydcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lIHx8ICdBbm9ueW1vdXMnLFxyXG4gICAgYXZhdGFyVXJsOiBhdmF0YXJVcmwsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBzaGFkb3diYW5uZWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGlzU2hhZG93YmFubmVkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlcklkKS5nZXQoKVxyXG4gIFxyXG4gIGlmICghdXNlckRvYy5leGlzdHMpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICByZXR1cm4gdXNlckRhdGEuc3RhdHVzID09PSAnc2hhZG93YmFubmVkJ1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IHBvc3QgKHRleHQgb3Igdm9pY2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdChwYXJhbXM6IENyZWF0ZVBvc3RQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgLy8gR2V0IGF1dGggdG9rZW4gZnJvbSByZXF1ZXN0XHJcbiAgICAvLyBOb3RlOiBJbiBOZXh0LmpzIFNlcnZlciBBY3Rpb25zLCB3ZSBuZWVkIHRvIHBhc3MgdGhlIGF1dGggdG9rZW5cclxuICAgIC8vIEZvciBub3csIHdlJ2xsIHVzZSBhIHdvcmthcm91bmQgd2l0aCBjbGllbnQtc2lkZSBhdXRoXHJcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB1c2UgY29va2llcyBvciBoZWFkZXJzIHRvIHBhc3MgdGhlIHRva2VuXHJcbiAgICBcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd0ZXh0JyAmJiAhcGFyYW1zLmNvbnRlbnQ/LnRyaW0oKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgY29udGVudCBpcyByZXF1aXJlZCcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJykge1xyXG4gICAgICBpZiAoIXBhcmFtcy5tZWRpYUJsb2IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIHJlY29yZGluZyBpcyByZXF1aXJlZCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFZhbGlkYXRlIGR1cmF0aW9uICg2MCBzZWNvbmRzIG1heClcclxuICAgICAgLy8gV2UnbGwgY2hlY2sgdGhpcyBvbiB0aGUgY2xpZW50IHNpZGUsIGJ1dCB2YWxpZGF0ZSBmaWxlIHNpemUgaGVyZVxyXG4gICAgICBpZiAocGFyYW1zLm1lZGlhQmxvYi5zaXplID4gNSAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWb2ljZSBmaWxlIG11c3QgYmUgbGVzcyB0aGFuIDVNQicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlOiBJbiBhIHJlYWwgaW1wbGVtZW50YXRpb24sIHlvdSdkIGdldCB1c2VySWQgZnJvbSB0aGUgYXV0aCB0b2tlblxyXG4gICAgLy8gRm9yIG5vdywgd2UnbGwgbmVlZCB0byBwYXNzIGl0IGZyb20gdGhlIGNsaWVudFxyXG4gICAgLy8gVGhpcyBpcyBhIGxpbWl0YXRpb24gLSB3ZSdsbCBuZWVkIHRvIHJlZmFjdG9yIGF1dGggY29udGV4dFxyXG4gICAgXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVBvc3Q6IEF1dGggdG9rZW4gcmVxdWlyZWQgLSBuZWVkcyByZWZhY3RvcmluZycpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFdpdGhBdXRoUGFyYW1zIGV4dGVuZHMgQ3JlYXRlUG9zdFBhcmFtcyB7XHJcbiAgbWVkaWFEdXJhdGlvbj86IG51bWJlciAvLyBEdXJhdGlvbiBpbiBzZWNvbmRzIChyZXF1aXJlZCBmb3Igdm9pY2UgcG9zdHMpXHJcbiAgZ2VucmU/OiBzdHJpbmcgLy8gR2VucmUgKHJlcXVpcmVkIGZvciBhbGwgcG9zdHMpXHJcbiAgbW9kdWxhdGlvblR5cGU/OiAnb3JpZ2luYWwnIHwgJ2RlZXAnIHwgJ3JvYm90JyB8ICd3aGlzcGVyJyAvLyBWb2ljZSBtb2R1bGF0aW9uIHR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBwb3N0IHdpdGggdXNlcklkIChjYWxsZWQgZnJvbSBjbGllbnQgd2l0aCBhdXRoKVxyXG4gKiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uIHVudGlsIHdlIGltcGxlbWVudCBwcm9wZXIgdG9rZW4gcGFzc2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3RXaXRoQXV0aChcclxuICB1c2VySWQ6IHN0cmluZyxcclxuICBwYXJhbXM6IENyZWF0ZVBvc3RXaXRoQXV0aFBhcmFtc1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgcmF0ZSBsaW1pdFxyXG4gICAgYXdhaXQgY2hlY2tSYXRlTGltaXQodXNlcklkKVxyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHNoYWRvd2Jhbm5lZFxyXG4gICAgY29uc3Qgc2hhZG93YmFubmVkID0gYXdhaXQgaXNTaGFkb3diYW5uZWQodXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIHBvc3QsIGJ1dCBwb3N0cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBmZWVkIHF1ZXJ5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldCB1c2VyIGRhdGEgZm9yIGRlbm9ybWFsaXphdGlvblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRVc2VyRGF0YSh1c2VySWQpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIXBhcmFtcy5nZW5yZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlbnJlIGlzIHJlcXVpcmVkIGZvciBhbGwgcG9zdHMnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd0ZXh0JyAmJiAhcGFyYW1zLmNvbnRlbnQ/LnRyaW0oKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgY29udGVudCBpcyByZXF1aXJlZCcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJykge1xyXG4gICAgICBpZiAoIXBhcmFtcy5tZWRpYUJsb2IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIHJlY29yZGluZyBpcyByZXF1aXJlZCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChwYXJhbXMubWVkaWFCbG9iLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIGZpbGUgbXVzdCBiZSBsZXNzIHRoYW4gNU1CJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCFwYXJhbXMubWVkaWFEdXJhdGlvbiB8fCBwYXJhbXMubWVkaWFEdXJhdGlvbiA+IDYwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWb2ljZSByZWNvcmRpbmcgbXVzdCBiZSA2MCBzZWNvbmRzIG9yIGxlc3MnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXBhcmFtcy5tb2R1bGF0aW9uVHlwZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxhdGlvbiB0eXBlIGlzIHJlcXVpcmVkIGZvciB2b2ljZSBwb3N0cycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3cgPSBUaW1lc3RhbXAubm93KClcclxuICAgIFxyXG4gICAgLy8gR2V0IGdlbnJlIGNvbG9yXHJcbiAgICBjb25zdCBnZW5yZUNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgJ0NvbmZlc3Npb24nOiAnI0ZGNkI2QicsXHJcbiAgICAgICdNb3RpdmF0aW9uJzogJyM2QkNCNzcnLFxyXG4gICAgICAnTG92ZSAvIEhlYXJ0YnJlYWsnOiAnI0E2NkNGRicsXHJcbiAgICAgICdEYXJrIFRob3VnaHRzJzogJyNGRjRDNEMnLFxyXG4gICAgICAnRnJpZW5kc2hpcCc6ICcjNEQ5NkZGJyxcclxuICAgICAgJ0xpZmUgQWR2aWNlJzogJyNGRkQ5M0QnLFxyXG4gICAgICAnSHVtb3InOiAnI0ZGOUYxQycsXHJcbiAgICAgICdTdG9yeXRpbWUnOiAnIzg0NUVDMicsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHBvc3REYXRhOiBhbnkgPSB7XHJcbiAgICAgIGlkOiAnJywgLy8gV2lsbCBiZSBzZXQgd2hlbiBjcmVhdGluZyBkb2N1bWVudFxyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIGdlbnJlOiBwYXJhbXMuZ2VucmUsXHJcbiAgICAgIGdlbnJlQ29sb3I6IGdlbnJlQ29sb3JzW3BhcmFtcy5nZW5yZV0gfHwgJyM4YjVjZjYnLFxyXG4gICAgICBtb2R1bGF0aW9uVHlwZTogcGFyYW1zLnR5cGUgPT09ICd2b2ljZScgPyAocGFyYW1zLm1vZHVsYXRpb25UeXBlIHx8ICdvcmlnaW5hbCcpIDogbnVsbCxcclxuICAgICAgYXVkaW9Vcmw6IG51bGwsXHJcbiAgICAgIHRleHQ6IHBhcmFtcy50eXBlID09PSAndGV4dCcgPyBwYXJhbXMuY29udGVudCA6IG51bGwsXHJcbiAgICAgIGR1cmF0aW9uOiBwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJyA/IChwYXJhbXMubWVkaWFEdXJhdGlvbiB8fCAwKSA6IDAsXHJcbiAgICAgIHJlcG9ydGVkOiBmYWxzZSxcclxuICAgICAgcmVwb3J0czogW10sXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwsXHJcbiAgICAgIHR5cGU6IHBhcmFtcy50eXBlLFxyXG4gICAgICBjb250ZW50OiBwYXJhbXMudHlwZSA9PT0gJ3RleHQnID8gcGFyYW1zLmNvbnRlbnQgOiBudWxsLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIG1lZGlhVXJsOiBudWxsLFxyXG4gICAgICBtZWRpYUR1cmF0aW9uOiBwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJyA/IHBhcmFtcy5tZWRpYUR1cmF0aW9uIDogbnVsbCxcclxuICAgICAgbWVkaWFNaW1lVHlwZTogbnVsbCxcclxuICAgICAgd2F2ZWZvcm06IG51bGwsXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogbm93LFxyXG4gICAgICB1cGRhdGVkQXQ6IG5vdyxcclxuICAgICAgaXNFZGl0ZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSB2b2ljZSBwb3N0XHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd2b2ljZScgJiYgcGFyYW1zLm1lZGlhQmxvYikge1xyXG4gICAgICAvLyBVcGxvYWQgYXVkaW8gZmlsZVxyXG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZUluc3RhbmNlKClcclxuICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIG5vdCBpbml0aWFsaXplZCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBvc3RJZCA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZG9jKCkuaWRcclxuICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSBgdm9pY2UtcG9zdHMvJHt1c2VySWR9LyR7cG9zdElkfS53ZWJtYFxyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIHN0b3JhZ2VQYXRoKVxyXG4gICAgICBcclxuICAgICAgYXdhaXQgdXBsb2FkQnl0ZXMoc3RvcmFnZVJlZiwgcGFyYW1zLm1lZGlhQmxvYilcclxuICAgICAgY29uc3QgbWVkaWFVcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICBcclxuICAgICAgLy8gR2VuZXJhdGUgd2F2ZWZvcm1cclxuICAgICAgY29uc3Qgd2F2ZWZvcm0gPSBhd2FpdCBnZW5lcmF0ZVdhdmVmb3JtRnJvbUJsb2IocGFyYW1zLm1lZGlhQmxvYiwgMTAwKVxyXG4gICAgICBcclxuICAgICAgcG9zdERhdGEubWVkaWFVcmwgPSBtZWRpYVVybFxyXG4gICAgICBwb3N0RGF0YS5hdWRpb1VybCA9IG1lZGlhVXJsIC8vIEFsc28gc2V0IGF1ZGlvVXJsIGZvciBuZXcgZGF0YSBtb2RlbFxyXG4gICAgICBwb3N0RGF0YS5tZWRpYUR1cmF0aW9uID0gcGFyYW1zLm1lZGlhRHVyYXRpb25cclxuICAgICAgcG9zdERhdGEuZHVyYXRpb24gPSBwYXJhbXMubWVkaWFEdXJhdGlvbiAvLyBBbHNvIHNldCBkdXJhdGlvbiBmb3IgbmV3IGRhdGEgbW9kZWxcclxuICAgICAgcG9zdERhdGEubWVkaWFNaW1lVHlwZSA9IHBhcmFtcy5tZWRpYU1pbWVUeXBlIHx8ICdhdWRpby93ZWJtJ1xyXG4gICAgICBwb3N0RGF0YS53YXZlZm9ybSA9IHdhdmVmb3JtXHJcbiAgICAgIHBvc3REYXRhLmlkID0gcG9zdElkXHJcbiAgICAgIFxyXG4gICAgICAvLyBDcmVhdGUgcG9zdCBkb2N1bWVudFxyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwb3N0SWQpLnNldChwb3N0RGF0YSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcG9zdElkIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRleHQgcG9zdFxyXG4gICAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MoKVxyXG4gICAgICBwb3N0RGF0YS5pZCA9IHBvc3RSZWYuaWRcclxuICAgICAgYXdhaXQgcG9zdFJlZi5zZXQocG9zdERhdGEpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHBvc3RJZDogcG9zdFJlZi5pZCB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRWRpdCBwb3N0ICh0ZXh0LCBnZW5yZSwgYW5kIHZvaWNlIG1vZHVsYXRpb24gY2FuIGJlIHVwZGF0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdFBvc3QodXNlcklkOiBzdHJpbmcsIHBhcmFtczogRWRpdFBvc3RQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgaWYgKHBvc3REYXRhLnVzZXJJZCAhPT0gdXNlcklkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkOiBZb3UgY2FuIG9ubHkgZWRpdCB5b3VyIG93biBwb3N0cycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHtcclxuICAgICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIGlzRWRpdGVkOiB0cnVlLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGV4dCBjb250ZW50IChmb3IgdGV4dCBwb3N0cyBvciB2b2ljZSBjYXB0aW9ucylcclxuICAgIGlmIChwYXJhbXMudGV4dCAhPT0gdW5kZWZpbmVkIHx8IHBhcmFtcy5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dCB8fCBwYXJhbXMuY29udGVudFxyXG4gICAgICBpZiAoIXRleHRDb250ZW50Py50cmltKCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgY2Fubm90IGJlIGVtcHR5JylcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVEYXRhLnRleHQgPSB0ZXh0Q29udGVudFxyXG4gICAgICB1cGRhdGVEYXRhLmNvbnRlbnQgPSB0ZXh0Q29udGVudCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSBnZW5yZVxyXG4gICAgaWYgKHBhcmFtcy5nZW5yZSkge1xyXG4gICAgICBjb25zdCBnZW5yZUNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgICAnQ29uZmVzc2lvbic6ICcjRkY2QjZCJyxcclxuICAgICAgICAnTW90aXZhdGlvbic6ICcjNkJDQjc3JyxcclxuICAgICAgICAnTG92ZSAvIEhlYXJ0YnJlYWsnOiAnI0E2NkNGRicsXHJcbiAgICAgICAgJ0RhcmsgVGhvdWdodHMnOiAnI0ZGNEM0QycsXHJcbiAgICAgICAgJ0ZyaWVuZHNoaXAnOiAnIzREOTZGRicsXHJcbiAgICAgICAgJ0xpZmUgQWR2aWNlJzogJyNGRkQ5M0QnLFxyXG4gICAgICAgICdIdW1vcic6ICcjRkY5RjFDJyxcclxuICAgICAgICAnU3Rvcnl0aW1lJzogJyM4NDVFQzInLFxyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZURhdGEuZ2VucmUgPSBwYXJhbXMuZ2VucmVcclxuICAgICAgdXBkYXRlRGF0YS5nZW5yZUNvbG9yID0gZ2VucmVDb2xvcnNbcGFyYW1zLmdlbnJlXSB8fCAnIzhiNWNmNidcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIG1vZHVsYXRpb24gZm9yIHZvaWNlIHBvc3RzIChyZXF1aXJlcyByZS1wcm9jZXNzaW5nKVxyXG4gICAgaWYgKHBhcmFtcy5tb2R1bGF0aW9uVHlwZSAmJiBwb3N0RGF0YS50eXBlID09PSAndm9pY2UnKSB7XHJcbiAgICAgIGlmIChwYXJhbXMubWVkaWFCbG9iKSB7XHJcbiAgICAgICAgLy8gUmUtcHJvY2VzcyBhdWRpbyB3aXRoIG5ldyBtb2R1bGF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2VJbnN0YW5jZSgpXHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Ugbm90IGluaXRpYWxpemVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSBgdm9pY2UtcG9zdHMvJHt1c2VySWR9LyR7cGFyYW1zLnBvc3RJZH0ud2VibWBcclxuICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIHN0b3JhZ2VQYXRoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHVwbG9hZEJ5dGVzKHN0b3JhZ2VSZWYsIHBhcmFtcy5tZWRpYUJsb2IpXHJcbiAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdlbmVyYXRlIG5ldyB3YXZlZm9ybVxyXG4gICAgICAgIGNvbnN0IHdhdmVmb3JtID0gYXdhaXQgZ2VuZXJhdGVXYXZlZm9ybUZyb21CbG9iKHBhcmFtcy5tZWRpYUJsb2IsIDEwMClcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVEYXRhLmF1ZGlvVXJsID0gYXVkaW9VcmxcclxuICAgICAgICB1cGRhdGVEYXRhLm1lZGlhVXJsID0gYXVkaW9VcmwgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIHVwZGF0ZURhdGEud2F2ZWZvcm0gPSB3YXZlZm9ybVxyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZURhdGEubW9kdWxhdGlvblR5cGUgPSBwYXJhbXMubW9kdWxhdGlvblR5cGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHBvc3RcclxuICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGVkaXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRWRpdCB0ZXh0IHBvc3QgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdFRleHRQb3N0KHVzZXJJZDogc3RyaW5nLCBwYXJhbXM6IEVkaXRQb3N0UGFyYW1zKSB7XHJcbiAgcmV0dXJuIGVkaXRQb3N0KHVzZXJJZCwgeyAuLi5wYXJhbXMsIHRleHQ6IHBhcmFtcy5jb250ZW50IH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QodXNlcklkOiBzdHJpbmcsIHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcCBvciBhZG1pblxyXG4gICAgY29uc3QgdXNlcklzQWRtaW4gPSBhd2FpdCBpc0FkbWluKHVzZXJJZClcclxuICAgIGlmIChwb3N0RGF0YS51c2VySWQgIT09IHVzZXJJZCAmJiAhdXNlcklzQWRtaW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEZWxldGUgYXVkaW8gZmlsZSBmcm9tIHN0b3JhZ2UgaWYgdm9pY2UgcG9zdFxyXG4gICAgaWYgKHBvc3REYXRhLnR5cGUgPT09ICd2b2ljZScgJiYgcG9zdERhdGEuYXVkaW9VcmwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZUluc3RhbmNlKClcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgLy8gRXh0cmFjdCBwYXRoIGZyb20gVVJMIG9yIHVzZSBzdGFuZGFyZCBwYXRoXHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGB2b2ljZS1wb3N0cy8ke3Bvc3REYXRhLnVzZXJJZH0vJHtwYXJhbXMucG9zdElkfS53ZWJtYFxyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBzdG9yYWdlUGF0aClcclxuICAgICAgICAgIC8vIE5vdGU6IEZpcmViYXNlIEFkbWluIFNESyBuZWVkZWQgZm9yIGRlbGV0ZSwgYnV0IHdlIGNhbiBtYXJrIGZvciBkZWxldGlvblxyXG4gICAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgcmVseSBvbiBTdG9yYWdlIHJ1bGVzIGFuZCBtYW51YWwgY2xlYW51cFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoc3RvcmFnZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZGVsZXRpbmcgYXVkaW8gZmlsZTonLCBzdG9yYWdlRXJyb3IpXHJcbiAgICAgICAgLy8gQ29udGludWUgd2l0aCBwb3N0IGRlbGV0aW9uIGV2ZW4gaWYgc3RvcmFnZSBkZWxldGlvbiBmYWlsc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIERlbGV0ZSBwb3N0IGRvY3VtZW50XHJcbiAgICBhd2FpdCBwb3N0UmVmLmRlbGV0ZSgpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGRlbGV0aW5nIHBvc3Q6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvVUFxSnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/hooks/use-media-recorder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaRecorder",
    ()=>useMediaRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MAX_DURATION = 60 // 60 seconds
;
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
;
function useMediaRecorder() {
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const durationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaRecorder.useCallback[startRecording]": async ()=>{
            try {
                setError(null);
                audioChunksRef.current = [];
                setRecordingTime(0);
                durationRef.current = 0;
                // Get user media
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });
                mediaStreamRef.current = stream;
                // Create MediaRecorder with webm format
                const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : 'audio/webm' // fallback
                ;
                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType,
                    audioBitsPerSecond: 128000
                });
                mediaRecorderRef.current = mediaRecorder;
                // Collect audio chunks
                mediaRecorder.ondataavailable = ({
                    "useMediaRecorder.useCallback[startRecording]": (event)=>{
                        if (event.data.size > 0) {
                            audioChunksRef.current.push(event.data);
                        }
                    }
                })["useMediaRecorder.useCallback[startRecording]"];
                // Start recording
                mediaRecorder.start(100); // Collect data every 100ms
                setIsRecording(true);
                // Start timer
                timerIntervalRef.current = setInterval({
                    "useMediaRecorder.useCallback[startRecording]": ()=>{
                        setRecordingTime({
                            "useMediaRecorder.useCallback[startRecording]": (prev)=>{
                                const newTime = prev + 1;
                                durationRef.current = newTime;
                                // Auto-stop at 60 seconds
                                if (newTime >= MAX_DURATION) {
                                    stopRecording();
                                }
                                return newTime;
                            }
                        }["useMediaRecorder.useCallback[startRecording]"]);
                    }
                }["useMediaRecorder.useCallback[startRecording]"], 1000);
            } catch (err) {
                console.error('Error starting recording:', err);
                setError(err.message || 'Failed to start recording');
                setIsRecording(false);
            }
        }
    }["useMediaRecorder.useCallback[startRecording]"], []);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaRecorder.useCallback[stopRecording]": async ()=>{
            try {
                // Stop timer
                if (timerIntervalRef.current) {
                    clearInterval(timerIntervalRef.current);
                    timerIntervalRef.current = null;
                }
                // Stop MediaRecorder
                if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                    mediaRecorderRef.current.stop();
                }
                // Stop media stream
                if (mediaStreamRef.current) {
                    mediaStreamRef.current.getTracks().forEach({
                        "useMediaRecorder.useCallback[stopRecording]": (track)=>track.stop()
                    }["useMediaRecorder.useCallback[stopRecording]"]);
                    mediaStreamRef.current = null;
                }
                setIsRecording(false);
                // Wait for recording to finish
                return new Promise({
                    "useMediaRecorder.useCallback[stopRecording]": (resolve)=>{
                        if (!mediaRecorderRef.current) {
                            resolve(null);
                            return;
                        }
                        mediaRecorderRef.current.onstop = ({
                            "useMediaRecorder.useCallback[stopRecording]": ()=>{
                                // Combine all chunks
                                const blob = new Blob(audioChunksRef.current, {
                                    type: mediaRecorderRef.current?.mimeType || 'audio/webm'
                                });
                                // Check file size
                                if (blob.size > MAX_FILE_SIZE) {
                                    setError(`Recording is too large (${(blob.size / 1024 / 1024).toFixed(2)}MB). Maximum is 5MB.`);
                                    resolve(null);
                                    return;
                                }
                                const duration = durationRef.current;
                                const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm';
                                resolve({
                                    blob,
                                    duration,
                                    mimeType
                                });
                            }
                        })["useMediaRecorder.useCallback[stopRecording]"];
                    }
                }["useMediaRecorder.useCallback[stopRecording]"]);
            } catch (err) {
                console.error('Error stopping recording:', err);
                setError(err.message || 'Failed to stop recording');
                return null;
            }
        }
    }["useMediaRecorder.useCallback[stopRecording]"], []);
    const cancelRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaRecorder.useCallback[cancelRecording]": ()=>{
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
                timerIntervalRef.current = null;
            }
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            if (mediaStreamRef.current) {
                mediaStreamRef.current.getTracks().forEach({
                    "useMediaRecorder.useCallback[cancelRecording]": (track)=>track.stop()
                }["useMediaRecorder.useCallback[cancelRecording]"]);
                mediaStreamRef.current = null;
            }
            audioChunksRef.current = [];
            setRecordingTime(0);
            durationRef.current = 0;
            setIsRecording(false);
            setError(null);
        }
    }["useMediaRecorder.useCallback[cancelRecording]"], []);
    return {
        isRecording,
        recordingTime,
        error,
        startRecording,
        stopRecording,
        cancelRecording,
        maxDuration: MAX_DURATION,
        maxFileSize: MAX_FILE_SIZE
    };
}
_s(useMediaRecorder, "30t2tuAh1wWrZn0woN3tSk81t1g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/voice-modulation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Voice modulation using Web Audio API and Tone.js
 * Client-side audio processing before upload
 */ __turbopack_context__.s([
    "previewModulatedAudio",
    ()=>previewModulatedAudio,
    "processAudioWithModulation",
    ()=>processAudioWithModulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/core/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$ToneAudioBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/core/context/ToneAudioBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$source$2f$buffer$2f$Player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/source/buffer/Player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$channel$2f$Recorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/component/channel/Recorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$PitchShift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/effect/PitchShift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$BitCrusher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/effect/BitCrusher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$Gain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/core/context/Gain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$filter$2f$Filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tone@15.1.22/node_modules/tone/build/esm/component/filter/Filter.js [app-client] (ecmascript)");
;
async function processAudioWithModulation(audioBlob, modulationType) {
    if (modulationType === 'original') {
        return audioBlob;
    }
    try {
        // Initialize Tone.js
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]();
        // Convert blob to AudioBuffer
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"]().rawContext;
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        // Create Tone.js buffer
        const toneBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$ToneAudioBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneAudioBuffer"](audioBuffer);
        const player = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$source$2f$buffer$2f$Player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"](toneBuffer);
        // Create recorder
        const recorder = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$channel$2f$Recorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Recorder"]();
        // Build effect chain
        let output = player;
        switch(modulationType){
            case 'deep':
                // Lower pitch by 6 semitones
                const pitchShift = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$PitchShift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PitchShift"](-6);
                player.connect(pitchShift);
                output = pitchShift;
                break;
            case 'robot':
                // Bit crusher for robotic effect
                const bitCrusher = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$BitCrusher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BitCrusher"](4);
                player.connect(bitCrusher);
                output = bitCrusher;
                break;
            case 'whisper':
                // High-pass filter + reduced gain for whisper effect
                const gain = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$Gain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gain"](0.6);
                const highPass = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$filter$2f$Filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Filter"]({
                    type: 'highpass',
                    frequency: 1000
                });
                player.connect(gain);
                gain.connect(highPass);
                output = highPass;
                break;
        }
        // Connect to recorder
        output.connect(recorder);
        // Start recording and playback
        await recorder.start();
        player.start();
        // Wait for playback to finish
        const duration = audioBuffer.duration * 1000;
        await new Promise((resolve)=>setTimeout(resolve, duration + 500));
        // Stop and get processed blob
        const processedBlob = await recorder.stop();
        player.stop();
        // Cleanup
        player.dispose();
        recorder.dispose();
        if (output !== player) {
            output.dispose?.();
        }
        return processedBlob;
    } catch (error) {
        console.error('[Voice Modulation] Error processing audio:', error);
        // Fallback to original if processing fails
        return audioBlob;
    }
}
async function previewModulatedAudio(audioBlob, modulationType) {
    if (modulationType === 'original') {
        const url = URL.createObjectURL(audioBlob);
        const audio = new Audio(url);
        await audio.play();
        audio.onended = ()=>URL.revokeObjectURL(url);
        return;
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]();
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"]().rawContext;
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const toneBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$ToneAudioBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneAudioBuffer"](audioBuffer);
        const player = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$source$2f$buffer$2f$Player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"](toneBuffer);
        let output = player;
        // Apply modulation
        switch(modulationType){
            case 'deep':
                const pitchShift = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$PitchShift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PitchShift"](-6);
                player.connect(pitchShift);
                output = pitchShift;
                break;
            case 'robot':
                const bitCrusher = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$BitCrusher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BitCrusher"](4);
                player.connect(bitCrusher);
                output = bitCrusher;
                break;
            case 'whisper':
                const gain = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$context$2f$Gain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gain"](0.6);
                const highPass = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tone$40$15$2e$1$2e$22$2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$filter$2f$Filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Filter"]({
                    type: 'highpass',
                    frequency: 1000
                });
                player.connect(gain);
                gain.connect(highPass);
                output = highPass;
                break;
        }
        output.toDestination();
        player.start();
        // Cleanup after playback
        const duration = audioBuffer.duration * 1000;
        setTimeout(()=>{
            player.dispose();
            if (output !== player) {
                output.dispose?.();
            }
        }, duration + 1000);
    } catch (error) {
        console.error('[Voice Modulation] Error previewing audio:', error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceRecorder",
    ()=>VoiceRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$hooks$2f$use$2d$media$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/hooks/use-media-recorder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$2a5076__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:2a5076 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$voice$2d$modulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/voice-modulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function VoiceRecorder({ onClose, onPostCreated }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isRecording, recordingTime, error: recorderError, startRecording, stopRecording, cancelRecording, maxDuration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$hooks$2f$use$2d$media$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaRecorder"])();
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Confession');
    const [selectedModulation, setSelectedModulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('original');
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recordingDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasPermission, setHasPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check microphone permission on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceRecorder.useEffect": ()=>{
            const checkPermission = {
                "VoiceRecorder.useEffect.checkPermission": async ()=>{
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({
                            audio: true
                        });
                        stream.getTracks().forEach({
                            "VoiceRecorder.useEffect.checkPermission": (track)=>track.stop()
                        }["VoiceRecorder.useEffect.checkPermission"]);
                        setHasPermission(true);
                    } catch (err) {
                        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                            setHasPermission(false);
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Microphone access required to confess.');
                        } else {
                            setHasPermission(null);
                        }
                    }
                }
            }["VoiceRecorder.useEffect.checkPermission"];
            checkPermission();
        }
    }["VoiceRecorder.useEffect"], []);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    const handleStartRecording = async ()=>{
        if (hasPermission === false) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Microphone access required to confess.');
            return;
        }
        try {
            await startRecording();
        } catch (err) {
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                setHasPermission(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Microphone access required to confess.');
            } else {
                setError(err.message || 'Failed to start recording');
            }
        }
    };
    const handleStopRecording = async ()=>{
        const result = await stopRecording();
        if (result) {
            recordingDataRef.current = result;
        } else if (recorderError) {
            setError(recorderError);
        }
    };
    const handlePost = async ()=>{
        if (!recordingDataRef.current || !user) {
            setError('Please record audio and sign in first');
            return;
        }
        if (!selectedGenre) {
            setError('Please select a genre');
            return;
        }
        // Don't start Tone.js if mic permission was denied
        if (hasPermission === false) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Microphone access required to confess.');
            return;
        }
        try {
            setLoading(true);
            setIsProcessing(true);
            setError('');
            let { blob, duration, mimeType } = recordingDataRef.current;
            // Apply modulation if not original (only if we have permission)
            if (selectedModulation !== 'original' && hasPermission !== false) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('Processing audio with modulation...');
                blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$voice$2d$modulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processAudioWithModulation"])(blob, selectedModulation);
                // Update mimeType to webm after processing
                mimeType = 'audio/webm';
            }
            setIsProcessing(false);
            // Create post using Server Action
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$2a5076__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPostWithAuth"])(user.uid, {
                type: 'voice',
                content: caption || null,
                genre: selectedGenre,
                modulationType: selectedModulation,
                mediaBlob: blob,
                mediaDuration: duration,
                mediaMimeType: mimeType
            });
            if (!result.success) {
                throw new Error('Failed to create voice post');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Posted!');
            onPostCreated?.();
            recordingDataRef.current = null;
            setCaption('');
            setSelectedGenre('Confession');
            setSelectedModulation('original');
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to post');
            console.error('[Server] Error posting voice:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || 'Failed to post');
        } finally{
            setLoading(false);
            setIsProcessing(false);
        }
    };
    const displayError = error || recorderError;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-semibold mb-2 text-gray-300",
                        children: "Genre (Required)"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENRES"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedGenre(genre),
                                disabled: loading || isRecording,
                                className: `px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${selectedGenre === genre ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-dark-card' : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'} disabled:opacity-50`,
                                children: genre
                            }, genre, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            recordingDataRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-semibold mb-2 text-gray-300",
                        children: "Voice Modulation"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                        children: [
                            'original',
                            'deep',
                            'robot',
                            'whisper'
                        ].map((mod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedModulation(mod),
                                disabled: loading || isProcessing,
                                className: `px-3 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition ${selectedModulation === mod ? 'bg-accent text-white ring-2 ring-accent ring-offset-2 ring-offset-dark-card' : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'} disabled:opacity-50`,
                                children: mod
                            }, mod, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: isRecording ? handleStopRecording : handleStartRecording,
                        disabled: loading || hasPermission === false,
                        className: `w-32 h-32 mx-auto rounded-full text-4xl font-bold transition-all flex items-center justify-center ${isRecording ? 'bg-error scale-110 animate-pulse shadow-2xl shadow-error' : 'bg-gradient-to-r from-primary to-accent hover:scale-105 disabled:opacity-50'}`,
                        children: isRecording ? '⏸️' : '🎤'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-2xl font-mono text-gray-300",
                        children: [
                            formatTime(recordingTime),
                            " / ",
                            formatTime(maxDuration)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    isRecording && recordingTime >= maxDuration - 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-error",
                        children: [
                            "Recording will stop automatically at ",
                            formatTime(maxDuration)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    hasPermission === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-error",
                        children: "Microphone access required"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            displayError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-error/20 border border-error text-error rounded-lg text-sm",
                children: displayError
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-primary/20 border border-primary text-primary rounded-lg text-sm text-center",
                children: [
                    "⚙️ Processing audio with ",
                    selectedModulation,
                    " modulation..."
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: caption,
                onChange: (e)=>setCaption(e.target.value),
                placeholder: "Add a caption to your voice post (optional)...",
                disabled: loading || isRecording || isProcessing,
                maxLength: 200,
                className: "w-full h-24 bg-dark-secondary border border-dark-border rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none disabled:opacity-50"
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    recordingDataRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            recordingDataRef.current = null;
                            cancelRecording();
                        },
                        disabled: loading || isProcessing,
                        className: "flex-1 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-error hover:text-error transition disabled:opacity-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePost,
                        disabled: !recordingDataRef.current || isRecording || loading || isProcessing || !selectedGenre,
                        className: "flex-1 btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isProcessing ? '⚙️ Processing...' : loading ? '🚀 Uploading...' : 'Post Voice 🎤'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400 text-center space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "• Maximum recording time: ",
                            maxDuration,
                            " seconds"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Maximum file size: 5MB"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Format: audio/webm (preferred) or audio/mp4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(VoiceRecorder, "ogPo/2gw3TSOct3aY0M4gDP1ve0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$hooks$2f$use$2d$media$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaRecorder"]
    ];
});
_c = VoiceRecorder;
var _c;
__turbopack_context__.k.register(_c, "VoiceRecorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePostModal",
    ()=>CreatePostModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$2a5076__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:2a5076 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$voice$2d$recorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/voice-recorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CreatePostModal({ onClose, onPostCreated }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('text');
    const [textContent, setTextContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Confession');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handlePostText = async ()=>{
        if (!textContent.trim()) {
            setError('Please enter some text');
            return;
        }
        if (!selectedGenre) {
            setError('Please select a genre');
            return;
        }
        if (!user) {
            setError('You must be logged in to post');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$2a5076__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPostWithAuth"])(user.uid, {
                type: 'text',
                content: textContent.trim(),
                genre: selectedGenre
            });
            if (!result.success) {
                throw new Error('Failed to create post');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Posted!');
            setTextContent('');
            setSelectedGenre('Confession');
            onPostCreated?.();
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to create post');
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || 'Failed to create post');
            console.error('[Server] Post creation error:', err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-2xl max-h-screen overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Create Post"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white text-2xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-error/20 border border-error text-error rounded-lg text-sm mb-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('voice'),
                                    className: `flex-1 py-3 rounded-lg font-semibold transition ${activeTab === 'voice' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-dark-secondary text-gray-400 hover:text-white'}`,
                                    children: "🎤 Voice"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('text'),
                                    className: `flex-1 py-3 rounded-lg font-semibold transition ${activeTab === 'text' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-dark-secondary text-gray-400 hover:text-white'}`,
                                    children: "✍️ Text"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        activeTab === 'voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$voice$2d$recorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceRecorder"], {
                            onClose: onClose,
                            onPostCreated: onPostCreated
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        activeTab === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold mb-2 text-gray-300",
                                            children: "Genre (Required)"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENRES"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setSelectedGenre(genre),
                                                    disabled: loading,
                                                    className: `px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${selectedGenre === genre ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-dark-card' : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'} disabled:opacity-50`,
                                                    children: genre
                                                }, genre, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: textContent,
                                    onChange: (e)=>setTextContent(e.target.value),
                                    placeholder: "Share your thoughts, feelings, or story...",
                                    maxLength: 500,
                                    className: "w-full h-48 bg-dark-secondary border border-dark-border rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            textContent.length,
                                            "/500"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePostText,
                                    disabled: !textContent.trim() || !selectedGenre || loading,
                                    className: "w-full btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: loading ? 'Posting...' : 'Post Text ✍️'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(CreatePostModal, "aBbdT/9+ya9OAbC9Ud4a1NBdBhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CreatePostModal;
var _c;
__turbopack_context__.k.register(_c, "CreatePostModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginModal",
    ()=>LoginModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LoginModal({ onClose, onLogin }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAnonymousLogin = async ()=>{
        try {
            setLoading(true);
            setError('');
            console.log('[Auth] Starting anonymous login process...');
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])();
            console.log('[Auth] Anonymous login successful:', {
                uid: user?.uid
            });
            onLogin(user);
            onClose();
        } catch (err) {
            console.error('[Auth] Login error:', {
                name: err.name,
                message: err.message,
                stack: err.stack,
                code: err.code
            });
            setError(err.message || 'Failed to sign in. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-dark-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Sign in to Post"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white text-2xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-error/20 border border-error text-error rounded-lg text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAnonymousLogin,
                            disabled: loading,
                            className: "w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin",
                                        children: "⏳"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Signing in..."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "👻"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Continue Anonymously"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-gray-400 pt-4",
                            children: "No email, no password. Just anonymous posting. Your identity stays protected."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(LoginModal, "xQswdwBNg1Q8V6Q6QDVeneBDwwg=");
_c = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:1bcbef [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bdaa920bc5d20a9cee1773e4110081119cc55204":"createUsername"},"Downloads/anonymous-social-platform/app/actions/auth.ts",""] */ __turbopack_context__.s([
    "createUsername",
    ()=>createUsername
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createUsername = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bdaa920bc5d20a9cee1773e4110081119cc55204", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createUsername"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJ1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZVVzZXJuYW1lUGFyYW1zIHtcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIHVzZXJuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBvciB1cGRhdGUgdXNlcm5hbWUgZm9yIGEgdXNlclxyXG4gKiBFbmZvcmNlcyB1bmlxdWVuZXNzIHVzaW5nIHVzZXJuYW1lcyBjb2xsZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcm5hbWUocGFyYW1zOiBDcmVhdGVVc2VybmFtZVBhcmFtcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGF0ZSB1c2VybmFtZVxyXG4gICAgY29uc3QgdXNlcm5hbWVMb3dlciA9IHBhcmFtcy51c2VybmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gICAgXHJcbiAgICBpZiAoIXVzZXJuYW1lTG93ZXIgfHwgdXNlcm5hbWVMb3dlci5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodXNlcm5hbWVMb3dlci5sZW5ndGggPiAyMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIG11c3QgYmUgbGVzcyB0aGFuIDIwIGNoYXJhY3RlcnMnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIS9eW2EtejAtOV9dKyQvLnRlc3QodXNlcm5hbWVMb3dlcikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VybmFtZSBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGFuZCB1bmRlcnNjb3JlcycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW5cclxuICAgIGNvbnN0IHVzZXJuYW1lRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcm5hbWVzJykuZG9jKHVzZXJuYW1lTG93ZXIpLmdldCgpXHJcbiAgICBcclxuICAgIGlmICh1c2VybmFtZURvYy5leGlzdHMpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdVaWQgPSB1c2VybmFtZURvYy5kYXRhKCkhLnVpZFxyXG4gICAgICBpZiAoZXhpc3RpbmdVaWQgIT09IHBhcmFtcy51c2VySWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4nKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFNhbWUgdXNlciwgYWxsb3cgdXBkYXRlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldCBleGlzdGluZyB1c2VyIGRhdGFcclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VybmFtZSA9IHVzZXJEb2MuZXhpc3RzID8gdXNlckRvYy5kYXRhKCk/LnVzZXJuYW1lTG93ZXIgOiBudWxsXHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB1c2VybmFtZXMgY29sbGVjdGlvblxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcm5hbWVzJykuZG9jKHVzZXJuYW1lTG93ZXIpLnNldCh7XHJcbiAgICAgIHVpZDogcGFyYW1zLnVzZXJJZCxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIElmIHVzZXIgaGFkIGEgZGlmZmVyZW50IHVzZXJuYW1lLCByZW1vdmUgb2xkIGVudHJ5XHJcbiAgICBpZiAoZXhpc3RpbmdVc2VybmFtZSAmJiBleGlzdGluZ1VzZXJuYW1lICE9PSB1c2VybmFtZUxvd2VyKSB7XHJcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJuYW1lcycpLmRvYyhleGlzdGluZ1VzZXJuYW1lKS5kZWxldGUoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdXNlciBkb2N1bWVudFxyXG4gICAgY29uc3QgdXNlckRhdGE6IGFueSA9IHtcclxuICAgICAgdXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZSxcclxuICAgICAgdXNlcm5hbWVMb3dlcixcclxuICAgICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghdXNlckRvYy5leGlzdHMpIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyB1c2VyIGRvY3VtZW50XHJcbiAgICAgIHVzZXJEYXRhLnVpZCA9IHBhcmFtcy51c2VySWRcclxuICAgICAgdXNlckRhdGEucm9sZSA9ICd1c2VyJ1xyXG4gICAgICB1c2VyRGF0YS5zdGF0dXMgPSAnYWN0aXZlJ1xyXG4gICAgICB1c2VyRGF0YS5hdmF0YXJVcmwgPSAnJ1xyXG4gICAgICB1c2VyRGF0YS5iaW8gPSAnJ1xyXG4gICAgICB1c2VyRGF0YS5jcmVhdGVkQXQgPSBUaW1lc3RhbXAubm93KClcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocGFyYW1zLnVzZXJJZCkuc2V0KHVzZXJEYXRhLCB7IG1lcmdlOiB0cnVlIH0pXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGNyZWF0aW5nIHVzZXJuYW1lOicsIGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdXNlciBieSB1c2VybmFtZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeVVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICAgIGNvbnN0IHVzZXJuYW1lTG93ZXIgPSB1c2VybmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXJuYW1lRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcm5hbWVzJykuZG9jKHVzZXJuYW1lTG93ZXIpLmdldCgpXHJcbiAgICBcclxuICAgIGlmICghdXNlcm5hbWVEb2MuZXhpc3RzKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHVpZCA9IHVzZXJuYW1lRG9jLmRhdGEoKSEudWlkXHJcbiAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModWlkKS5nZXQoKVxyXG4gICAgXHJcbiAgICBpZiAoIXVzZXJEb2MuZXhpc3RzKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZCxcclxuICAgICAgLi4udXNlckRvYy5kYXRhKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyB1c2VyIGJ5IHVzZXJuYW1lOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1RBY3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/lib/username-generator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate unique anonymous usernames
 * Pattern: @silentwave57, @ghostuser42, etc.
 */ __turbopack_context__.s([
    "generateDisplayUsername",
    ()=>generateDisplayUsername,
    "generateUsername",
    ()=>generateUsername
]);
const adjectives = [
    'silent',
    'ghost',
    'shadow',
    'mystic',
    'hidden',
    'quiet',
    'whisper',
    'dark',
    'lonely',
    'empty',
    'void',
    'secret',
    'anonymous',
    'unknown',
    'lost',
    'broken',
    'faded',
    'distant',
    'cold',
    'warm',
    'soft',
    'gentle',
    'wild',
    'free',
    'brave',
    'bold',
    'calm',
    'peaceful',
    'serene'
];
const nouns = [
    'wave',
    'ocean',
    'soul',
    'spirit',
    'heart',
    'mind',
    'dream',
    'night',
    'day',
    'star',
    'moon',
    'sun',
    'wind',
    'storm',
    'rain',
    'cloud',
    'river',
    'lake',
    'forest',
    'mountain',
    'valley',
    'desert',
    'island',
    'bird',
    'wolf',
    'fox',
    'deer',
    'cat',
    'dog',
    'lion',
    'tiger',
    'user',
    'ghost',
    'shadow',
    'phantom',
    'wanderer',
    'traveler',
    'explorer'
];
function generateUsername() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 100) // 0-99
    ;
    return `${adjective}${noun}${number}`;
}
function generateDisplayUsername() {
    return `@${generateUsername()}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsernameSetupModal",
    ()=>UsernameSetupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1bcbef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:1bcbef [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$username$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/username-generator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function UsernameSetupModal({ userId, onComplete }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [autoGenerated, setAutoGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-generate username on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsernameSetupModal.useEffect": ()=>{
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$username$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUsername"])();
            setUsername(generated);
            setAutoGenerated(true);
        }
    }["UsernameSetupModal.useEffect"], []);
    const handleGenerateNew = ()=>{
        const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$username$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUsername"])();
        setUsername(generated);
        setAutoGenerated(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!username.trim()) {
            setError('Username is required');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1bcbef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createUsername"])({
                userId,
                username: username.trim()
            });
            if (result.success) {
                onComplete();
            }
        } catch (err) {
            setError(err.message || 'Failed to create username');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Your Anonymous Username"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "We've generated a unique username for you. You can regenerate or customize it."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-error/20 border border-error text-error rounded-lg text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "@"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: username,
                                                onChange: (e)=>{
                                                    setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''));
                                                    setAutoGenerated(false);
                                                    setError('');
                                                },
                                                placeholder: "username",
                                                disabled: loading,
                                                maxLength: 20,
                                                minLength: 3,
                                                pattern: "[a-z0-9]+",
                                                className: "flex-1 bg-dark-secondary border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleGenerateNew,
                                                disabled: loading,
                                                className: "px-3 py-3 bg-dark-secondary border border-dark-border rounded-lg hover:border-primary transition disabled:opacity-50",
                                                title: "Generate new username",
                                                children: "🎲"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            username.length,
                                            "/20 characters • Letters and numbers only",
                                            autoGenerated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-primary",
                                                children: "✨ Auto-generated"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !username.trim() || username.length < 3 || loading,
                                className: "w-full btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed",
                                children: loading ? 'Creating...' : 'Continue'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(UsernameSetupModal, "UC7vAp/a9jQK2flDMChch7w4BAM=");
_c = UsernameSetupModal;
var _c;
__turbopack_context__.k.register(_c, "UsernameSetupModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/floating-create-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingCreateButton",
    ()=>FloatingCreateButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FloatingCreateButton({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "fixed bottom-8 right-8 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl shadow-2xl hover:scale-110 transition-transform duration-300 animate-glow",
        children: "+"
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/floating-create-button.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = FloatingCreateButton;
var _c;
__turbopack_context__.k.register(_c, "FloatingCreateButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/anonymous-social-platform/app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$feed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/feed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$create$2d$post$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/create-post-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/login-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$username$2d$setup$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/username-setup-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$floating$2d$create$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/floating-create-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function AppPage() {
    _s();
    const { user, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoginModal, setShowLoginModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUsernameSetup, setShowUsernameSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Check if user needs to set up username
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppPage.useEffect": ()=>{
            const checkUsername = {
                "AppPage.useEffect.checkUsername": async ()=>{
                    if (user) {
                        try {
                            const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])(user.uid);
                            if (userData && !userData.username) {
                                setShowUsernameSetup(true);
                            }
                        } catch (error) {
                            console.error('[App] Error checking username:', error);
                        }
                    }
                }
            }["AppPage.useEffect.checkUsername"];
            checkUsername();
        }
    }["AppPage.useEffect"], [
        user
    ]);
    const handleCreateClick = ()=>{
        if (!isLoggedIn) {
            setShowLoginModal(true);
        } else {
            setShowCreateModal(true);
        }
    };
    const handleLogin = ()=>{
        setShowLoginModal(false);
    // Username check will happen in useEffect
    };
    const handleUsernameComplete = ()=>{
        setShowUsernameSetup(false);
    };
    const handlePostCreated = ()=>{
        setRefreshKey((prev)=>prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$feed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feed"], {}, refreshKey, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$floating$2d$create$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingCreateButton"], {
                onClick: handleCreateClick
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            showCreateModal && isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$create$2d$post$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePostModal"], {
                onClose: ()=>setShowCreateModal(false),
                onPostCreated: handlePostCreated
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            showLoginModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginModal"], {
                onClose: ()=>setShowLoginModal(false),
                onLogin: handleLogin
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            showUsernameSetup && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$username$2d$setup$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsernameSetupModal"], {
                userId: user.uid,
                onComplete: handleUsernameComplete
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/app/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AppPage, "/NXFso2R0GmRcpfZ2jDVvswuvTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AppPage;
var _c;
__turbopack_context__.k.register(_c, "AppPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_anonymous-social-platform_b62a2872._.js.map