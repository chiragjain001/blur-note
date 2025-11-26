module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/anonymous-social-platform/components/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeToggle() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const isDarkMode = savedTheme === 'dark';
        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);
    const toggleTheme = ()=>{
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.body.classList.toggle('light', newTheme === 'light');
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+firestore@4.9.2_@firebase+app@0.14.6/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
const checkFirebase = (operation = 'operation')=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        console.warn(`[v0] Firebase not ready for ${operation}`);
        return false;
    }
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDbInstance"])();
    if (!db) {
        console.warn(`[v0] Firestore database not initialized for ${operation}`);
        return false;
    }
    return true;
};
const getDb = ()=>{
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDbInstance"])();
    if (!db) {
        throw new Error('Firestore not initialized');
    }
    return db;
};
async function createUser(uid, userData) {
    if (!checkFirebase('createUser')) return;
    try {
        const db = getDb();
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'users', uid);
        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (!userSnap.exists()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
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
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'users', uid);
        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
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
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(postsRef, {
            ...postData,
            likeCount: 0,
            commentCount: 0,
            reportCount: 0,
            createdAt: new Date()
        });
        // Update user's post count
        if (postData.authorUid) {
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'users', postData.authorUid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                postCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
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
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(postRef, audioData);
    } catch (error) {
        console.error('[v0] Error updating post audio:', error);
        throw error;
    }
}
async function updatePostMetadata(postId, metadata) {
    if (!checkFirebase('updatePostMetadata')) throw new Error('Firebase not initialized');
    try {
        const db = getDb();
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(postRef, metadata);
    } catch (error) {
        console.error('[v0] Error updating post metadata:', error);
        throw error;
    }
}
async function getPosts(limitCount = 20) {
    if (!checkFirebase('getPosts')) return [];
    try {
        const db = getDb();
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(postsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(limitCount));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const postsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'posts');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(postsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add to user's likes subcollection
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'users', userId, 'likes', postId);
        batch.set(likesRef, {
            createdAt: new Date()
        });
        // Increment post likeCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            likeCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
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
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Remove from user's likes subcollection
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'users', userId, 'likes', postId);
        batch.delete(likesRef);
        // Decrement post likeCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            likeCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(-1)
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
        const likesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'users', userId, 'likes');
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(likesRef);
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
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add comment to comments collection
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        const commentDocRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(commentsRef, {
            postId,
            ...commentData,
            createdAt: new Date()
        });
        // Increment post commentCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            commentCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
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
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(commentsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(db);
        // Add report
        const reportsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, 'comments');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(reportsRef, {
            postId,
            reportingUid: userId,
            reason,
            createdAt: new Date()
        });
        // Increment post reportCount
        const postRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, 'posts', postId);
        batch.update(postRef, {
            reportCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        await batch.commit();
    } catch (error) {
        console.error('[v0] Error reporting post:', error);
        throw error;
    }
}
}),
"[project]/Downloads/anonymous-social-platform/lib/auth-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onAuthChange",
    ()=>onAuthChange,
    "signInAnonymously",
    ()=>signInAnonymously,
    "signOutUser",
    ()=>signOutUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+auth@1.11.1_@firebase+app@0.14.6/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-ssr] (ecmascript)");
;
;
;
async function signInAnonymously() {
    try {
        console.log('[Auth] Starting Anonymous Sign In...');
        // Ensure Firebase is initialized
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
            throw new Error('Failed to initialize Firebase. Please check your configuration.');
        }
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            throw new Error('Authentication service is not available. Please try again later.');
        }
        console.log('[Auth] Starting anonymous sign in...');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInAnonymously"])(auth).catch((error)=>{
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUser"])(user.uid, {
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        throw new Error('Firebase is not properly configured');
    }
    try {
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            throw new Error('Authentication service not available');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(auth);
    } catch (error) {
        console.error('[v0] Error signing out:', error);
        throw error;
    }
}
function onAuthChange(callback) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirebaseReady"])()) {
        console.warn('[v0] Firebase not ready for auth changes');
        callback(null);
        return ()=>{};
    }
    try {
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInstance"])();
        if (!auth) {
            callback(null);
            return ()=>{};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, callback);
    } catch (error) {
        console.error('[v0] Error setting up auth listener:', error);
        callback(null);
        return ()=>{};
    }
}
}),
"[project]/Downloads/anonymous-social-platform/components/app/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/theme-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Header() {
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSignOut = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOutUser"])();
            setShowMenu(false);
        } catch (error) {
            console.error('[v0] Sign out error:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-dark-bg/50 border-b border-dark-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-2 text-2xl font-black gradient-text hover:opacity-80 transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "👻"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    !loading && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowMenu(!showMenu),
                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg hover:scale-110 transition",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-12 right-0 bg-dark-card border border-dark-border rounded-lg shadow-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-4 py-2 text-sm text-gray-400 border-b border-dark-border truncate max-w-xs",
                                        children: user.displayName || 'Anonymous'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/profile/${user.uid}`,
                                        className: "block px-4 py-2 hover:bg-dark-secondary transition text-sm",
                                        onClick: ()=>setShowMenu(false),
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Downloads/anonymous-social-platform/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@radix-ui+react-dialog@1.1._2e279b9f45eaccf149bfa3a9b35ce50c/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-xl', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_2e279b9f45eaccf149bfa3a9b35ce50c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:1d79d8 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5":"toggleLike"},"Downloads/anonymous-social-platform/app/actions/likes.ts",""] */ __turbopack_context__.s([
    "toggleLike",
    ()=>toggleLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var toggleLike = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "toggleLike"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbGlrZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiIH0gZnJvbSAnQC9saWIvZmlyZWJhc2UtYWRtaW4nXHJcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ2ZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZSdcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgbGlrZSBvbiBhIHBvc3RcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVMaWtlKHVzZXJJZDogc3RyaW5nLCBwb3N0SWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGxpa2VkXHJcbiAgICBjb25zdCBsaWtlUmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKS5jb2xsZWN0aW9uKCdsaWtlcycpLmRvYyh1c2VySWQpXHJcbiAgICBjb25zdCBsaWtlRG9jID0gYXdhaXQgbGlrZVJlZi5nZXQoKVxyXG4gICAgXHJcbiAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaXNMaWtlZCA9IGxpa2VEb2MuZXhpc3RzXHJcbiAgICBcclxuICAgIGlmIChpc0xpa2VkKSB7XHJcbiAgICAgIC8vIFVubGlrZTogcmVtb3ZlIGxpa2UgZG9jdW1lbnQgYW5kIGRlY3JlbWVudCBjb3VudFxyXG4gICAgICBhd2FpdCBsaWtlUmVmLmRlbGV0ZSgpXHJcbiAgICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHtcclxuICAgICAgICBsaWtlc0NvdW50OiAocG9zdERvYy5kYXRhKCkhLmxpa2VzQ291bnQgfHwgMCkgLSAxLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsaWtlZDogZmFsc2UgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTGlrZTogYWRkIGxpa2UgZG9jdW1lbnQgYW5kIGluY3JlbWVudCBjb3VudFxyXG4gICAgICBhd2FpdCBsaWtlUmVmLnNldCh7XHJcbiAgICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHtcclxuICAgICAgICBsaWtlc0NvdW50OiAocG9zdERvYy5kYXRhKCkhLmxpa2VzQ291bnQgfHwgMCkgKyAxLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsaWtlZDogdHJ1ZSB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgdG9nZ2xpbmcgbGlrZTonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRUQVFzQiJ9
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:4d4a6c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404d910a566286892204be87060f5c27cd920fa2ec":"getPostComments"},"Downloads/anonymous-social-platform/app/actions/comments.ts",""] */ __turbopack_context__.s([
    "getPostComments",
    ()=>getPostComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getPostComments = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("404d910a566286892204be87060f5c27cd920fa2ec", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPostComments"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiLCBpc1NoYWRvd2Jhbm5lZCB9IGZyb20gJ0AvbGliL2ZpcmViYXNlLWFkbWluJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQWRkQ29tbWVudFBhcmFtcyB7XHJcbiAgcG9zdElkOiBzdHJpbmdcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wIG9iamVjdHMgdG8gcGxhaW4gSmF2YVNjcmlwdCB2YWx1ZXNcclxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBUaW1lc3RhbXBzIGNhbid0IGJlIHNlcmlhbGl6ZWQgd2hlbiBwYXNzaW5nIGZyb20gc2VydmVyIHRvIGNsaWVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBGaXJlc3RvcmUgVGltZXN0YW1wXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3RvRGF0ZScgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvRGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICB9XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIFRpbWVzdGFtcC1saWtlIG9iamVjdCB3aXRoIF9zZWNvbmRzXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ19zZWNvbmRzJyBpbiB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLl9zZWNvbmRzIHx8IDBcclxuICAgIGNvbnN0IG5hbm9zZWNvbmRzID0gdmFsdWUuX25hbm9zZWNvbmRzIHx8IDBcclxuICAgIHJldHVybiBuZXcgRGF0ZShzZWNvbmRzICogMTAwMCArIG5hbm9zZWNvbmRzIC8gMTAwMDAwMCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBhbGwgVGltZXN0YW1wIG9iamVjdHMgaW4gYSBkYXRhIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudERhdGEoZGF0YTogYW55KTogYW55IHtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiBzZXJpYWxpemVDb21tZW50RGF0YShpdGVtKSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZDogYW55ID0ge31cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRpbWVzdGFtcCBmaWVsZHNcclxuICAgICAgaWYgKGtleSA9PT0gJ2NyZWF0ZWRBdCcgfHwga2V5ID09PSAndXBkYXRlZEF0Jykge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHNlcmlhbGl6ZVRpbWVzdGFtcCh2YWx1ZSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplQ29tbWVudERhdGEodmFsdWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50IHRvIGEgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvbW1lbnQocGFyYW1zOiBBZGRDb21tZW50UGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc2hhZG93YmFubmVkXHJcbiAgICBjb25zdCBzaGFkb3diYW5uZWQgPSBhd2FpdCBpc1NoYWRvd2Jhbm5lZChwYXJhbXMudXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIGNvbW1lbnQsIGJ1dCBjb21tZW50cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBjb21tZW50cyBxdWVyeVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZXQgdXNlciBkYXRhIGZvciBkZW5vcm1hbGl6YXRpb25cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhdGUgY29udGVudFxyXG4gICAgaWYgKCFwYXJhbXMuY29udGVudD8udHJpbSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWVudCBjb250ZW50IGlzIHJlcXVpcmVkJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgcG9zdCBleGlzdHNcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIGlmIChwb3N0RGF0YS5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbW1lbnQgb24gdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIGNvbW1lbnQgdG8gc3ViY29sbGVjdGlvblxyXG4gICAgY29uc3QgY29tbWVudFJlZiA9IHBvc3RSZWYuY29sbGVjdGlvbignY29tbWVudHMnKS5kb2MoKVxyXG4gICAgYXdhaXQgY29tbWVudFJlZi5zZXQoe1xyXG4gICAgICB1c2VySWQ6IHBhcmFtcy51c2VySWQsXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSB8fCAnQW5vbnltb3VzJyxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbnRlbnQ6IHBhcmFtcy5jb250ZW50LnRyaW0oKSxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBJbmNyZW1lbnQgY29tbWVudCBjb3VudFxyXG4gICAgYXdhaXQgcG9zdFJlZi51cGRhdGUoe1xyXG4gICAgICBjb21tZW50c0NvdW50OiAocG9zdERhdGEuY29tbWVudHNDb3VudCB8fCAwKSArIDEsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb21tZW50SWQ6IGNvbW1lbnRSZWYuaWQgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGFkZGluZyBjb21tZW50OicsIGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY29tbWVudHMgZm9yIGEgcG9zdCAoZmlsdGVyaW5nIG91dCBzaGFkb3diYW5uZWQgdXNlcnMpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdENvbW1lbnRzKHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEdldCBjb21tZW50c1xyXG4gICAgY29uc3QgY29tbWVudHNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLmRvYyhwb3N0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb21tZW50cycpXHJcbiAgICAgIC53aGVyZSgnc3RhdHVzJywgJz09JywgJ2FjdGl2ZScpXHJcbiAgICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICAvLyBGaWx0ZXIgb3V0IHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBjb21tZW50c1NuYXBzaG90LmRvY3NcclxuICAgICAgLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuZmlsdGVyKChjb21tZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNob3cgY29tbWVudHMgZnJvbSBhY3RpdmUgKG5vbi1zaGFkb3diYW5uZWQpIHVzZXJzXHJcbiAgICAgICAgcmV0dXJuICFzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhjb21tZW50LnVzZXJJZClcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBjb21tZW50cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gY29tbWVudHMubWFwKGNvbW1lbnQgPT4gc2VyaWFsaXplQ29tbWVudERhdGEoY29tbWVudCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBjb21tZW50czonLCBlcnJvcilcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvVUE2SHNCIn0=
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:12d8b1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4042c7f6066b206e0590f3129fba0273d94a6411d5":"addComment"},"Downloads/anonymous-social-platform/app/actions/comments.ts",""] */ __turbopack_context__.s([
    "addComment",
    ()=>addComment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addComment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4042c7f6066b206e0590f3129fba0273d94a6411d5", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addComment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBZG1pbkRiLCBpc1NoYWRvd2Jhbm5lZCB9IGZyb20gJ0AvbGliL2ZpcmViYXNlLWFkbWluJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQWRkQ29tbWVudFBhcmFtcyB7XHJcbiAgcG9zdElkOiBzdHJpbmdcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wIG9iamVjdHMgdG8gcGxhaW4gSmF2YVNjcmlwdCB2YWx1ZXNcclxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBUaW1lc3RhbXBzIGNhbid0IGJlIHNlcmlhbGl6ZWQgd2hlbiBwYXNzaW5nIGZyb20gc2VydmVyIHRvIGNsaWVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBGaXJlc3RvcmUgVGltZXN0YW1wXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3RvRGF0ZScgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvRGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICB9XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIFRpbWVzdGFtcC1saWtlIG9iamVjdCB3aXRoIF9zZWNvbmRzXHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ19zZWNvbmRzJyBpbiB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLl9zZWNvbmRzIHx8IDBcclxuICAgIGNvbnN0IG5hbm9zZWNvbmRzID0gdmFsdWUuX25hbm9zZWNvbmRzIHx8IDBcclxuICAgIHJldHVybiBuZXcgRGF0ZShzZWNvbmRzICogMTAwMCArIG5hbm9zZWNvbmRzIC8gMTAwMDAwMCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBhbGwgVGltZXN0YW1wIG9iamVjdHMgaW4gYSBkYXRhIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplQ29tbWVudERhdGEoZGF0YTogYW55KTogYW55IHtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiBzZXJpYWxpemVDb21tZW50RGF0YShpdGVtKSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZDogYW55ID0ge31cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRpbWVzdGFtcCBmaWVsZHNcclxuICAgICAgaWYgKGtleSA9PT0gJ2NyZWF0ZWRBdCcgfHwga2V5ID09PSAndXBkYXRlZEF0Jykge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHNlcmlhbGl6ZVRpbWVzdGFtcCh2YWx1ZSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplQ29tbWVudERhdGEodmFsdWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50IHRvIGEgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvbW1lbnQocGFyYW1zOiBBZGRDb21tZW50UGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc2hhZG93YmFubmVkXHJcbiAgICBjb25zdCBzaGFkb3diYW5uZWQgPSBhd2FpdCBpc1NoYWRvd2Jhbm5lZChwYXJhbXMudXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIGNvbW1lbnQsIGJ1dCBjb21tZW50cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBjb21tZW50cyBxdWVyeVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZXQgdXNlciBkYXRhIGZvciBkZW5vcm1hbGl6YXRpb25cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhdGUgY29udGVudFxyXG4gICAgaWYgKCFwYXJhbXMuY29udGVudD8udHJpbSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWVudCBjb250ZW50IGlzIHJlcXVpcmVkJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgcG9zdCBleGlzdHNcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIGlmIChwb3N0RGF0YS5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbW1lbnQgb24gdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIGNvbW1lbnQgdG8gc3ViY29sbGVjdGlvblxyXG4gICAgY29uc3QgY29tbWVudFJlZiA9IHBvc3RSZWYuY29sbGVjdGlvbignY29tbWVudHMnKS5kb2MoKVxyXG4gICAgYXdhaXQgY29tbWVudFJlZi5zZXQoe1xyXG4gICAgICB1c2VySWQ6IHBhcmFtcy51c2VySWQsXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSB8fCAnQW5vbnltb3VzJyxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwgfHwgJycsXHJcbiAgICAgIGNvbnRlbnQ6IHBhcmFtcy5jb250ZW50LnRyaW0oKSxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBJbmNyZW1lbnQgY29tbWVudCBjb3VudFxyXG4gICAgYXdhaXQgcG9zdFJlZi51cGRhdGUoe1xyXG4gICAgICBjb21tZW50c0NvdW50OiAocG9zdERhdGEuY29tbWVudHNDb3VudCB8fCAwKSArIDEsXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb21tZW50SWQ6IGNvbW1lbnRSZWYuaWQgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGFkZGluZyBjb21tZW50OicsIGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY29tbWVudHMgZm9yIGEgcG9zdCAoZmlsdGVyaW5nIG91dCBzaGFkb3diYW5uZWQgdXNlcnMpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdENvbW1lbnRzKHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEdldCBjb21tZW50c1xyXG4gICAgY29uc3QgY29tbWVudHNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLmRvYyhwb3N0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb21tZW50cycpXHJcbiAgICAgIC53aGVyZSgnc3RhdHVzJywgJz09JywgJ2FjdGl2ZScpXHJcbiAgICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICAvLyBGaWx0ZXIgb3V0IHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBjb21tZW50c1NuYXBzaG90LmRvY3NcclxuICAgICAgLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuZmlsdGVyKChjb21tZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNob3cgY29tbWVudHMgZnJvbSBhY3RpdmUgKG5vbi1zaGFkb3diYW5uZWQpIHVzZXJzXHJcbiAgICAgICAgcmV0dXJuICFzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhjb21tZW50LnVzZXJJZClcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBjb21tZW50cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gY29tbWVudHMubWFwKGNvbW1lbnQgPT4gc2VyaWFsaXplQ29tbWVudERhdGEoY29tbWVudCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBjb21tZW50czonLCBlcnJvcilcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrVEE4RHNCIn0=
}),
"[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentsModal",
    ()=>CommentsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:4d4a6c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$12d8b1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:12d8b1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CommentsModal({ postId, onClose }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadComments = async ()=>{
            try {
                if (postId.startsWith('demo-')) {
                    setComments([]);
                    setLoading(false);
                    return;
                }
                const postComments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPostComments"])(postId);
                setComments(postComments);
            } catch (err) {
                console.error('[v0] Error loading comments:', err);
            } finally{
                setLoading(false);
            }
        };
        loadComments();
    }, [
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$12d8b1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addComment"])({
                postId,
                userId: user.uid,
                content: newComment.trim()
            });
            setNewComment('');
            // Reload comments
            const updatedComments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$4d4a6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPostComments"])(postId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-2xl max-h-screen overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-dark-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Comments"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    }, this) : comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pb-4 border-b border-dark-border last:border-b-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-sm",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-sm",
                                                    children: comment.authorUsername || 'Anonymous'
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-dark-border p-6 bg-dark-secondary/50",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-error text-sm mb-3",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:490f1b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7084916c377494247151cef281f503624be26e963c":"reportPost"},"Downloads/anonymous-social-platform/app/actions/reports.ts",""] */ __turbopack_context__.s([
    "reportPost",
    ()=>reportPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var reportPost = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7084916c377494247151cef281f503624be26e963c", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reportPost"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVwb3J0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJ1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydCBhIHBvc3RcclxuICogQXBwZW5kcyB0byByZXBvcnRzW10gYXJyYXkgYW5kIHNldHMgcmVwb3J0ZWQgPSB0cnVlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVwb3J0UG9zdChwb3N0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIHBvc3QgZXhpc3RzXHJcbiAgICBjb25zdCBwb3N0RG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKS5nZXQoKVxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IHJlcG9ydGVkIHRoaXMgcG9zdFxyXG4gICAgY29uc3QgZXhpc3RpbmdSZXBvcnQgPSBwb3N0RGF0YS5yZXBvcnRzPy5maW5kKFxyXG4gICAgICAocjogYW55KSA9PiByLnVzZXJJZCA9PT0gdXNlcklkXHJcbiAgICApXHJcbiAgICBcclxuICAgIGlmIChleGlzdGluZ1JlcG9ydCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIGFscmVhZHkgcmVwb3J0ZWQgdGhpcyBwb3N0JylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIHRvIHJlcG9ydHMgYXJyYXkgYW5kIHNldCByZXBvcnRlZCA9IHRydWVcclxuICAgIGNvbnN0IHJlcG9ydHMgPSBwb3N0RGF0YS5yZXBvcnRzIHx8IFtdXHJcbiAgICByZXBvcnRzLnB1c2goe1xyXG4gICAgICB0eXBlOiByZWFzb24sXHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwb3N0SWQpLnVwZGF0ZSh7XHJcbiAgICAgIHJlcG9ydGVkOiB0cnVlLFxyXG4gICAgICByZXBvcnRzLFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgcmVwb3J0aW5nIHBvc3Q6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4VEFTc0IifQ==
}),
"[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportModal",
    ()=>ReportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$490f1b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:490f1b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
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
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [selectedReason, setSelectedReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        if (!user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('You must be logged in to report');
            return;
        }
        if (!selectedReason) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Please select a reason');
            return;
        }
        try {
            setLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$490f1b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reportPost"])(postId, user.uid, selectedReason);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Report submitted');
            onClose();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || 'Failed to submit report');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card border border-dark-border rounded-2xl w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Report Post"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Why are you reporting this post?"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: REPORT_REASONS.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                disabled: loading,
                                className: "flex-1 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-error hover:text-error transition disabled:opacity-50",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCard",
    ()=>PostCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$wavesurfer$2e$js$40$7$2e$11$2e$1$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/wavesurfer.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/framer-motion@12.23.24_@emo_a8f3e3ab3ce79744232f2639366efd77/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1d79d8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:1d79d8 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$comments$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/comments-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/genre-styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$report$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/report-modal.tsx [app-ssr] (ecmascript)");
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
;
// Global audio player state to ensure only one plays at a time
let currentPlayer = null;
function VoicePlayer({ src, waveform, duration, initialSpeed = 1 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wavesurferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSpeed || 1);
    const [initError, setInitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const createWaveSurfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (wavesurferRef.current || !containerRef.current || !src) return;
        try {
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$wavesurfer$2e$js$40$7$2e$11$2e$1$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
            const handleFinish = ()=>{
                setIsPlaying(false);
                if (currentPlayer === ws) {
                    currentPlayer = null;
                }
            };
            ws.on('finish', handleFinish);
            const handlePause = ()=>{
                setIsPlaying(false);
                if (currentPlayer === ws) {
                    currentPlayer = null;
                }
            };
            ws.on('pause', handlePause);
            return ()=>{
                ws.un('finish', handleFinish);
            };
        } catch (e) {
            console.error('Error initializing WaveSurfer', e);
            setInitError('Could not initialize audio player');
        }
    }, [
        src,
        speed,
        waveform
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (wavesurferRef.current) {
            wavesurferRef.current.setPlaybackRate(speed);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 rounded-xl p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "opacity-80",
                        children: "Playback speed"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: speeds.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function TextModal({ open, onOpenChange, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "glass border-dark-border w-[90%] sm:w-[70%] lg:w-1/2 max-h-[90vh] overflow-y-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function PostCard({ post, isLiked, onLike }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTextModal, setShowTextModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReportModal, setShowReportModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isLiked);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(post.likesCount || 0);
    const [isLiking, setIsLiking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$1d79d8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["toggleLike"])(user.uid, post.id);
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
    const genreStyles = post.genre ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$genre$2d$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGenreStyles"])(post.genre) : 'bg-dark-card border border-dark-border';
    const isDarkThoughts = post.genre === 'Dark Thoughts';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: profileLink,
                        className: "w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl hover:scale-110 transition",
                        children: "👻"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: profileLink,
                                className: "font-semibold sm:font-bold hover:text-primary transition",
                                children: post.authorUsername || 'Anonymous'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-400",
                                        children: timeAgo(post.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    post.isEdited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 py-4 sm:py-5",
                children: [
                    post.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-200 leading-relaxed",
                                children: isLongText ? truncatedText : post.content
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            isLongText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    post.type === 'voice' && post.mediaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 sm:mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VoicePlayer, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-dark-border flex items-center gap-6 text-gray-400 text-xs sm:text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLike,
                                disabled: !user || post.id.startsWith('demo-') || isLiking,
                                className: "flex items-center gap-2 hover:text-primary transition group disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-xl group-hover:scale-125 transition",
                                        children: liked ? '❤️' : '🤍'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowComments(true),
                                className: "flex items-center gap-2 hover:text-primary transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            !isOwnPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReportModal(true),
                                className: "flex items-center gap-2 hover:text-error transition",
                                title: "Report post",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            isOwnPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMenu(!showMenu),
                                        className: "flex items-center gap-2 hover:text-primary transition",
                                        title: "More options",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-10 min-w-[120px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            showComments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$comments$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommentsModal"], {
                postId: post.id,
                onClose: ()=>setShowComments(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            isLongText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextModal, {
                open: showTextModal,
                onOpenChange: setShowTextModal,
                text: post.content
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this),
            showReportModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$report$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportModal"], {
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
}),
"[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCardSkeleton",
    ()=>PostCardSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/framer-motion@12.23.24_@emo_a8f3e3ab3ce79744232f2639366efd77/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function PostCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full bg-dark-secondary animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-32 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 py-4 sm:py-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-dark-secondary rounded-xl p-4 animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-dark-card"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-12 bg-dark-card rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-dark-border flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-16 bg-dark-secondary rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:bc5b1b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404e2f9d30ac88c6aa4f751cc2e3e34fba950b303b":"getUserPosts"},"Downloads/anonymous-social-platform/app/actions/feed.ts",""] */ __turbopack_context__.s([
    "getUserPosts",
    ()=>getUserPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getUserPosts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("404e2f9d30ac88c6aa4f751cc2e3e34fba950b303b", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserPosts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmVlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IEZpcmVzdG9yZSBUaW1lc3RhbXAgb2JqZWN0cyB0byBwbGFpbiBKYXZhU2NyaXB0IHZhbHVlc1xyXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIFRpbWVzdGFtcHMgY2FuJ3QgYmUgc2VyaWFsaXplZCB3aGVuIHBhc3NpbmcgZnJvbSBzZXJ2ZXIgdG8gY2xpZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVUaW1lc3RhbXAodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIEZpcmVzdG9yZSBUaW1lc3RhbXBcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAndG9EYXRlJyBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9EYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9EYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gIH1cclxuICAvLyBDaGVjayBpZiBpdCdzIGEgVGltZXN0YW1wLWxpa2Ugb2JqZWN0IHdpdGggX3NlY29uZHNcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnX3NlY29uZHMnIGluIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuX3NlY29uZHMgfHwgMFxyXG4gICAgY29uc3QgbmFub3NlY29uZHMgPSB2YWx1ZS5fbmFub3NlY29uZHMgfHwgMFxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHNlY29uZHMgKiAxMDAwICsgbmFub3NlY29uZHMgLyAxMDAwMDAwKS50b0lTT1N0cmluZygpXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgc2VyaWFsaXplIGFsbCBUaW1lc3RhbXAgb2JqZWN0cyBpbiBhIGRhdGEgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVQb3N0RGF0YShkYXRhOiBhbnkpOiBhbnkge1xyXG4gIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgIHJldHVybiBkYXRhLm1hcChpdGVtID0+IHNlcmlhbGl6ZVBvc3REYXRhKGl0ZW0pKVxyXG4gIH1cclxuICBcclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkOiBhbnkgPSB7fVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdGltZXN0YW1wIGZpZWxkc1xyXG4gICAgICBpZiAoa2V5ID09PSAnY3JlYXRlZEF0JyB8fCBrZXkgPT09ICd1cGRhdGVkQXQnKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gc2VyaWFsaXplVGltZXN0YW1wKHZhbHVlKVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSBzZXJpYWxpemVQb3N0RGF0YSh2YWx1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGZlZWQgcG9zdHMgKGZpbHRlcmluZyBvdXQgc2hhZG93YmFubmVkIHVzZXJzIGFuZCBoaWRkZW4vZGVsZXRlZCBwb3N0cylcclxuICogU3VwcG9ydHMgZ2VucmUgZmlsdGVyaW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZFBvc3RzKFxyXG4gIGxpbWl0Q291bnQ6IG51bWJlciA9IDIwLFxyXG4gIGxhc3RQb3N0SWQ/OiBzdHJpbmcsXHJcbiAgZ2VucmU/OiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIEdldCBhbGwgdXNlcnMgYW5kIGlkZW50aWZ5IHNoYWRvd2Jhbm5lZCBvbmVzXHJcbiAgICAvLyBVc2VycyB3aXRob3V0IGEgc3RhdHVzIGZpZWxkIG9yIHdpdGggc3RhdHVzICdhY3RpdmUnIGFyZSBjb25zaWRlcmVkIGFjdGl2ZVxyXG4gICAgY29uc3QgYWxsVXNlcnNTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KClcclxuICAgIGNvbnN0IHNoYWRvd2Jhbm5lZFVzZXJJZHMgPSBuZXcgU2V0KFxyXG4gICAgICBhbGxVc2Vyc1NuYXBzaG90LmRvY3NcclxuICAgICAgICAuZmlsdGVyKGRvYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YS5zdGF0dXMgPT09ICdzaGFkb3diYW5uZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGRvYyA9PiBkb2MuaWQpXHJcbiAgICApXHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gcXVlcnkgYWxsIHBvc3RzIG9yZGVyZWQgYnkgY3JlYXRlZEF0XHJcbiAgICAvLyBXZSdsbCBmaWx0ZXIgYnkgZ2VucmUgYW5kIHN0YXR1cyBpbiBtZW1vcnkgdG8gYXZvaWQgaW5kZXggcmVxdWlyZW1lbnRzXHJcbiAgICBsZXQgcXVlcnk6IGFueSA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmxpbWl0KGxpbWl0Q291bnQgKiAzKSAvLyBHZXQgbW9yZSBwb3N0cyBzaW5jZSB3ZSdsbCBmaWx0ZXIgc29tZSBvdXRcclxuICAgIFxyXG4gICAgLy8gSWYgcGFnaW5hdGlvbiBjdXJzb3IgcHJvdmlkZWRcclxuICAgIGlmIChsYXN0UG9zdElkKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3N0RG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MobGFzdFBvc3RJZCkuZ2V0KClcclxuICAgICAgaWYgKGxhc3RQb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3RhcnRBZnRlcihsYXN0UG9zdERvYylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcG9zdHM6IGFueVtdID0gW11cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcXVlcnkuZ2V0KClcclxuICAgICAgcG9zdHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICB9KSlcclxuICAgIH0gY2F0Y2ggKHF1ZXJ5RXJyb3I6IGFueSkge1xyXG4gICAgICAvLyBJZiBxdWVyeSBmYWlscyAoZS5nLiwgbWlzc2luZyBpbmRleCksIHRyeSBhIHNpbXBsZXIgcXVlcnkgYW5kIHNvcnQgaW4gbWVtb3J5XHJcbiAgICAgIGNvbnNvbGUud2FybignW1NlcnZlcl0gUXVlcnkgd2l0aCBvcmRlckJ5IGZhaWxlZCwgdHJ5aW5nIHdpdGhvdXQgb3JkZXJCeTonLCBxdWVyeUVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIGxldCBmYWxsYmFja1F1ZXJ5OiBhbnkgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmxpbWl0KGxpbWl0Q291bnQgKiA1KVxyXG4gICAgICBjb25zdCBmYWxsYmFja1NuYXBzaG90ID0gYXdhaXQgZmFsbGJhY2tRdWVyeS5nZXQoKVxyXG4gICAgICBcclxuICAgICAgcG9zdHMgPSBmYWxsYmFja1NuYXBzaG90LmRvY3MubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICBcclxuICAgICAgLy8gU29ydCBpbiBtZW1vcnkgYnkgY3JlYXRlZEF0IChkZXNjZW5kaW5nKVxyXG4gICAgICBwb3N0cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBhLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5jcmVhdGVkQXQ/LnRvTWlsbGlzPy4oKSB8fCBiLmNyZWF0ZWRBdD8uX3NlY29uZHMgfHwgMFxyXG4gICAgICAgIHJldHVybiBiVGltZSAtIGFUaW1lIC8vIERlc2NlbmRpbmcgb3JkZXJcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmlsdGVyIG91dCBzaGFkb3diYW5uZWQgdXNlcnMsIGluYWN0aXZlIHBvc3RzLCBhbmQgYXBwbHkgZ2VucmUgZmlsdGVyXHJcbiAgICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHNcclxuICAgICAgLmZpbHRlcigocG9zdDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRXhjbHVkZSBwb3N0cyBmcm9tIHNoYWRvd2Jhbm5lZCB1c2Vyc1xyXG4gICAgICAgIGlmIChzaGFkb3diYW5uZWRVc2VySWRzLmhhcyhwb3N0LnVzZXJJZCkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlIHBvc3RzIHdpdGggc3RhdHVzICdhY3RpdmUnIG9yIG5vIHN0YXR1cyBmaWVsZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAvLyBFeGNsdWRlIHBvc3RzIHdpdGggb3RoZXIgc3RhdHVzZXMgbGlrZSAnZGVsZXRlZCcsICdoaWRkZW4nLCBldGMuXHJcbiAgICAgICAgaWYgKHBvc3Quc3RhdHVzICYmIHBvc3Quc3RhdHVzICE9PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGx5IGdlbnJlIGZpbHRlciBpZiBzcGVjaWZpZWRcclxuICAgICAgICBpZiAoZ2VucmUgJiYgZ2VucmUgIT09ICdBbGwnICYmIHBvc3QuZ2VucmUgIT09IGdlbnJlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSlcclxuICAgICAgLnNsaWNlKDAsIGxpbWl0Q291bnQpIC8vIExpbWl0IHRvIHJlcXVlc3RlZCBhbW91bnQgYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICBcclxuICAgIC8vIFNlcmlhbGl6ZSBhbGwgcG9zdHMgdG8gY29udmVydCBUaW1lc3RhbXBzIHRvIHBsYWluIHZhbHVlc1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkUG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyBmZWVkIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgcG9zdHMgKGZvciBwcm9maWxlIHBhZ2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclBvc3RzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAud2hlcmUoJ3VzZXJJZCcsICc9PScsIHVzZXJJZClcclxuICAgICAgLndoZXJlKCdzdGF0dXMnLCAnPT0nLCAnYWN0aXZlJylcclxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcclxuICAgICAgLmdldCgpXHJcbiAgICBcclxuICAgIGNvbnN0IHBvc3RzID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSlcclxuICAgIFxyXG4gICAgLy8gU2VyaWFsaXplIGFsbCBwb3N0cyB0byBjb252ZXJ0IFRpbWVzdGFtcHMgdG8gcGxhaW4gdmFsdWVzXHJcbiAgICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4gc2VyaWFsaXplUG9zdERhdGEocG9zdCkpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZ2V0dGluZyB1c2VyIHBvc3RzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBoYXMgbGlrZWQgYSBwb3N0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VyTGlrZWQodXNlcklkOiBzdHJpbmcsIHBvc3RJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBjb25zdCBsaWtlRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gICAgICAuZG9jKHBvc3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2xpa2VzJylcclxuICAgICAgLmRvYyh1c2VySWQpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGlrZURvYy5leGlzdHNcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciBjaGVja2luZyBsaWtlOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIncyBsaWtlZCBwb3N0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMaWtlZFBvc3RzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxTZXQ8c3RyaW5nPj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgXHJcbiAgICAvLyBHZXQgYWxsIHBvc3RzIHVzZXIgaGFzIGxpa2VkXHJcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGV4cGVuc2l2ZSwgc28gd2UnbGwgb3B0aW1pemUgYnkgZ2V0dGluZyBsaWtlcyBmcm9tIHVzZXIncyBzdWJjb2xsZWN0aW9uXHJcbiAgICAvLyBCdXQgZm9yIG5vdywgd2UnbGwgdXNlIGEgZGlmZmVyZW50IGFwcHJvYWNoIC0gY2hlY2sgbGlrZXMgb24gZWFjaCBwb3N0XHJcbiAgICBcclxuICAgIC8vIEFjdHVhbGx5LCB3ZSBzaG91bGQgc3RvcmUgbGlrZXMgaW4gcG9zdHMve3Bvc3RJZH0vbGlrZXMve3VzZXJJZH1cclxuICAgIC8vIFNvIHdlIG5lZWQgdG8gcXVlcnkgYWxsIHBvc3RzIGFuZCBjaGVjayB0aGVpciBsaWtlcyBzdWJjb2xsZWN0aW9uc1xyXG4gICAgLy8gVGhpcyBpcyBub3QgZWZmaWNpZW50LCBidXQgZm9yIE1WUCBpdCdzIGFjY2VwdGFibGVcclxuICAgIFxyXG4gICAgLy8gQmV0dGVyIGFwcHJvYWNoOiBTdG9yZSB1c2VyJ3MgbGlrZXMgaW4gYSBzZXBhcmF0ZSBjb2xsZWN0aW9uIG9yIHVzZSBjbGllbnQtc2lkZSBjYWNoaW5nXHJcbiAgICAvLyBGb3Igbm93LCByZXR1cm4gZW1wdHkgc2V0IGFuZCBsZXQgY2xpZW50IGhhbmRsZSBpdFxyXG4gICAgcmV0dXJuIG5ldyBTZXQoKVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGdldHRpbmcgdXNlciBsaWtlZCBwb3N0czonLCBlcnJvcilcclxuICAgIHJldHVybiBuZXcgU2V0KClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlRBc0pzQiJ9
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:6eb134 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6017dcfb18c083f3a87ffc816394aeb0d27e19a962":"deletePost"},"Downloads/anonymous-social-platform/app/actions/posts.ts",""] */ __turbopack_context__.s([
    "deletePost",
    ()=>deletePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deletePost = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6017dcfb18c083f3a87ffc816394aeb0d27e19a962", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePost"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcG9zdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBdXRoSW5zdGFuY2UgfSBmcm9tICdAL2xpYi9maXJlYmFzZSdcclxuaW1wb3J0IHsgZ2V0QWRtaW5EYiwgZ2V0QWRtaW5BdXRoLCBpc0FkbWluIH0gZnJvbSAnQC9saWIvZmlyZWJhc2UtYWRtaW4nXHJcbmltcG9ydCB7IGdldFN0b3JhZ2VJbnN0YW5jZSB9IGZyb20gJ0AvbGliL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyByZWYsIHVwbG9hZEJ5dGVzLCBnZXREb3dubG9hZFVSTCwgZGVsZXRlT2JqZWN0IH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcclxuaW1wb3J0IHsgZ2VuZXJhdGVXYXZlZm9ybUZyb21CbG9iIH0gZnJvbSAnQC9saWIvd2F2ZWZvcm0tZ2VuZXJhdG9yJ1xyXG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnXHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFBhcmFtcyB7XHJcbiAgdHlwZTogJ3RleHQnIHwgJ3ZvaWNlJ1xyXG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBudWxsXHJcbiAgbWVkaWFCbG9iPzogQmxvYiB8IG51bGxcclxuICBtZWRpYU1pbWVUeXBlPzogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRWRpdFBvc3RQYXJhbXMge1xyXG4gIHBvc3RJZDogc3RyaW5nXHJcbiAgY29udGVudD86IHN0cmluZ1xyXG4gIHRleHQ/OiBzdHJpbmdcclxuICBnZW5yZT86IHN0cmluZ1xyXG4gIG1vZHVsYXRpb25UeXBlPzogJ29yaWdpbmFsJyB8ICdkZWVwJyB8ICdyb2JvdCcgfCAnd2hpc3BlcidcclxuICBtZWRpYUJsb2I/OiBCbG9iIC8vIEZvciByZS1wcm9jZXNzaW5nIHZvaWNlIHdpdGggbmV3IG1vZHVsYXRpb25cclxufVxyXG5cclxuLyoqXHJcbiAqIFJhdGUgbGltaXRpbmc6IENoZWNrIGlmIHVzZXIgcG9zdGVkIHdpdGhpbiBsYXN0IDIgbWludXRlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSYXRlTGltaXQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gIGNvbnN0IHBvc3RzUmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKVxyXG4gIFxyXG4gIGNvbnN0IHR3b01pbnV0ZXNBZ28gPSBUaW1lc3RhbXAuZnJvbU1pbGxpcyhEYXRlLm5vdygpIC0gMiAqIDYwICogMTAwMClcclxuICBjb25zdCByZWNlbnRQb3N0cyA9IGF3YWl0IHBvc3RzUmVmXHJcbiAgICAud2hlcmUoJ3VzZXJJZCcsICc9PScsIHVzZXJJZClcclxuICAgIC53aGVyZSgnY3JlYXRlZEF0JywgJz4nLCB0d29NaW51dGVzQWdvKVxyXG4gICAgLmxpbWl0KDEpXHJcbiAgICAuZ2V0KClcclxuXHJcbiAgaWYgKCFyZWNlbnRQb3N0cy5lbXB0eSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdSYXRlIGxpbWl0OiBQbGVhc2Ugd2FpdCAyIG1pbnV0ZXMgYmV0d2VlbiBwb3N0cycpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgZGF0YSB3aXRoIGRlbm9ybWFsaXplZCBmaWVsZHNcclxuICogQ3JlYXRlcyBhIGRlZmF1bHQgdXNlciBkb2N1bWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyRGF0YSh1c2VySWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXJJZCkuZ2V0KClcclxuICBcclxuICBpZiAoIXVzZXJEb2MuZXhpc3RzKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBkZWZhdWx0IHVzZXIgZG9jdW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdFxyXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHVzZXIgYXV0aGVudGljYXRlZCBidXQgZG9jdW1lbnQgY3JlYXRpb24gZmFpbGVkXHJcbiAgICBjb25zdCBkZWZhdWx0VXNlckRhdGEgPSB7XHJcbiAgICAgIHVpZDogdXNlcklkLFxyXG4gICAgICB1c2VybmFtZTogJ0Fub255bW91cycsXHJcbiAgICAgIHJvbGU6ICd1c2VyJyxcclxuICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcclxuICAgICAgYXZhdGFyVXJsOiAnJyxcclxuICAgICAgYmlvOiAnJyxcclxuICAgICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wLm5vdygpLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VySWQpLnNldChkZWZhdWx0VXNlckRhdGEpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lOiAnQW5vbnltb3VzJyxcclxuICAgICAgYXZhdGFyVXJsOiAnJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCkhXHJcbiAgLy8gSGFuZGxlIGJvdGggb2xkIGZvcm1hdCAoYXZhdGFyKSBhbmQgbmV3IGZvcm1hdCAoYXZhdGFyVXJsKVxyXG4gIGNvbnN0IGF2YXRhclVybCA9IHVzZXJEYXRhLmF2YXRhclVybCB8fCB1c2VyRGF0YS5hdmF0YXIgfHwgJydcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lIHx8ICdBbm9ueW1vdXMnLFxyXG4gICAgYXZhdGFyVXJsOiBhdmF0YXJVcmwsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBzaGFkb3diYW5uZWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGlzU2hhZG93YmFubmVkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlcklkKS5nZXQoKVxyXG4gIFxyXG4gIGlmICghdXNlckRvYy5leGlzdHMpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKSFcclxuICByZXR1cm4gdXNlckRhdGEuc3RhdHVzID09PSAnc2hhZG93YmFubmVkJ1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IHBvc3QgKHRleHQgb3Igdm9pY2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdChwYXJhbXM6IENyZWF0ZVBvc3RQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgLy8gR2V0IGF1dGggdG9rZW4gZnJvbSByZXF1ZXN0XHJcbiAgICAvLyBOb3RlOiBJbiBOZXh0LmpzIFNlcnZlciBBY3Rpb25zLCB3ZSBuZWVkIHRvIHBhc3MgdGhlIGF1dGggdG9rZW5cclxuICAgIC8vIEZvciBub3csIHdlJ2xsIHVzZSBhIHdvcmthcm91bmQgd2l0aCBjbGllbnQtc2lkZSBhdXRoXHJcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB1c2UgY29va2llcyBvciBoZWFkZXJzIHRvIHBhc3MgdGhlIHRva2VuXHJcbiAgICBcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd0ZXh0JyAmJiAhcGFyYW1zLmNvbnRlbnQ/LnRyaW0oKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgY29udGVudCBpcyByZXF1aXJlZCcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJykge1xyXG4gICAgICBpZiAoIXBhcmFtcy5tZWRpYUJsb2IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIHJlY29yZGluZyBpcyByZXF1aXJlZCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFZhbGlkYXRlIGR1cmF0aW9uICg2MCBzZWNvbmRzIG1heClcclxuICAgICAgLy8gV2UnbGwgY2hlY2sgdGhpcyBvbiB0aGUgY2xpZW50IHNpZGUsIGJ1dCB2YWxpZGF0ZSBmaWxlIHNpemUgaGVyZVxyXG4gICAgICBpZiAocGFyYW1zLm1lZGlhQmxvYi5zaXplID4gNSAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWb2ljZSBmaWxlIG11c3QgYmUgbGVzcyB0aGFuIDVNQicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlOiBJbiBhIHJlYWwgaW1wbGVtZW50YXRpb24sIHlvdSdkIGdldCB1c2VySWQgZnJvbSB0aGUgYXV0aCB0b2tlblxyXG4gICAgLy8gRm9yIG5vdywgd2UnbGwgbmVlZCB0byBwYXNzIGl0IGZyb20gdGhlIGNsaWVudFxyXG4gICAgLy8gVGhpcyBpcyBhIGxpbWl0YXRpb24gLSB3ZSdsbCBuZWVkIHRvIHJlZmFjdG9yIGF1dGggY29udGV4dFxyXG4gICAgXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVBvc3Q6IEF1dGggdG9rZW4gcmVxdWlyZWQgLSBuZWVkcyByZWZhY3RvcmluZycpXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFdpdGhBdXRoUGFyYW1zIGV4dGVuZHMgQ3JlYXRlUG9zdFBhcmFtcyB7XHJcbiAgbWVkaWFEdXJhdGlvbj86IG51bWJlciAvLyBEdXJhdGlvbiBpbiBzZWNvbmRzIChyZXF1aXJlZCBmb3Igdm9pY2UgcG9zdHMpXHJcbiAgZ2VucmU/OiBzdHJpbmcgLy8gR2VucmUgKHJlcXVpcmVkIGZvciBhbGwgcG9zdHMpXHJcbiAgbW9kdWxhdGlvblR5cGU/OiAnb3JpZ2luYWwnIHwgJ2RlZXAnIHwgJ3JvYm90JyB8ICd3aGlzcGVyJyAvLyBWb2ljZSBtb2R1bGF0aW9uIHR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBwb3N0IHdpdGggdXNlcklkIChjYWxsZWQgZnJvbSBjbGllbnQgd2l0aCBhdXRoKVxyXG4gKiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uIHVudGlsIHdlIGltcGxlbWVudCBwcm9wZXIgdG9rZW4gcGFzc2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3RXaXRoQXV0aChcclxuICB1c2VySWQ6IHN0cmluZyxcclxuICBwYXJhbXM6IENyZWF0ZVBvc3RXaXRoQXV0aFBhcmFtc1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgcmF0ZSBsaW1pdFxyXG4gICAgYXdhaXQgY2hlY2tSYXRlTGltaXQodXNlcklkKVxyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHNoYWRvd2Jhbm5lZFxyXG4gICAgY29uc3Qgc2hhZG93YmFubmVkID0gYXdhaXQgaXNTaGFkb3diYW5uZWQodXNlcklkKVxyXG4gICAgaWYgKHNoYWRvd2Jhbm5lZCkge1xyXG4gICAgICAvLyBTaGFkb3diYW5uZWQgdXNlcnMgY2FuIHBvc3QsIGJ1dCBwb3N0cyB3b24ndCBhcHBlYXIgdG8gb3RoZXJzXHJcbiAgICAgIC8vIFdlJ2xsIGhhbmRsZSB0aGlzIGluIHRoZSBmZWVkIHF1ZXJ5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldCB1c2VyIGRhdGEgZm9yIGRlbm9ybWFsaXphdGlvblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRVc2VyRGF0YSh1c2VySWQpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIXBhcmFtcy5nZW5yZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlbnJlIGlzIHJlcXVpcmVkIGZvciBhbGwgcG9zdHMnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd0ZXh0JyAmJiAhcGFyYW1zLmNvbnRlbnQ/LnRyaW0oKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgY29udGVudCBpcyByZXF1aXJlZCcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJykge1xyXG4gICAgICBpZiAoIXBhcmFtcy5tZWRpYUJsb2IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIHJlY29yZGluZyBpcyByZXF1aXJlZCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChwYXJhbXMubWVkaWFCbG9iLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZvaWNlIGZpbGUgbXVzdCBiZSBsZXNzIHRoYW4gNU1CJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCFwYXJhbXMubWVkaWFEdXJhdGlvbiB8fCBwYXJhbXMubWVkaWFEdXJhdGlvbiA+IDYwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWb2ljZSByZWNvcmRpbmcgbXVzdCBiZSA2MCBzZWNvbmRzIG9yIGxlc3MnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXBhcmFtcy5tb2R1bGF0aW9uVHlwZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxhdGlvbiB0eXBlIGlzIHJlcXVpcmVkIGZvciB2b2ljZSBwb3N0cycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3cgPSBUaW1lc3RhbXAubm93KClcclxuICAgIFxyXG4gICAgLy8gR2V0IGdlbnJlIGNvbG9yXHJcbiAgICBjb25zdCBnZW5yZUNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgJ0NvbmZlc3Npb24nOiAnI0ZGNkI2QicsXHJcbiAgICAgICdNb3RpdmF0aW9uJzogJyM2QkNCNzcnLFxyXG4gICAgICAnTG92ZSAvIEhlYXJ0YnJlYWsnOiAnI0E2NkNGRicsXHJcbiAgICAgICdEYXJrIFRob3VnaHRzJzogJyNGRjRDNEMnLFxyXG4gICAgICAnRnJpZW5kc2hpcCc6ICcjNEQ5NkZGJyxcclxuICAgICAgJ0xpZmUgQWR2aWNlJzogJyNGRkQ5M0QnLFxyXG4gICAgICAnSHVtb3InOiAnI0ZGOUYxQycsXHJcbiAgICAgICdTdG9yeXRpbWUnOiAnIzg0NUVDMicsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHBvc3REYXRhOiBhbnkgPSB7XHJcbiAgICAgIGlkOiAnJywgLy8gV2lsbCBiZSBzZXQgd2hlbiBjcmVhdGluZyBkb2N1bWVudFxyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIGdlbnJlOiBwYXJhbXMuZ2VucmUsXHJcbiAgICAgIGdlbnJlQ29sb3I6IGdlbnJlQ29sb3JzW3BhcmFtcy5nZW5yZV0gfHwgJyM4YjVjZjYnLFxyXG4gICAgICBtb2R1bGF0aW9uVHlwZTogcGFyYW1zLnR5cGUgPT09ICd2b2ljZScgPyAocGFyYW1zLm1vZHVsYXRpb25UeXBlIHx8ICdvcmlnaW5hbCcpIDogbnVsbCxcclxuICAgICAgYXVkaW9Vcmw6IG51bGwsXHJcbiAgICAgIHRleHQ6IHBhcmFtcy50eXBlID09PSAndGV4dCcgPyBwYXJhbXMuY29udGVudCA6IG51bGwsXHJcbiAgICAgIGR1cmF0aW9uOiBwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJyA/IChwYXJhbXMubWVkaWFEdXJhdGlvbiB8fCAwKSA6IDAsXHJcbiAgICAgIHJlcG9ydGVkOiBmYWxzZSxcclxuICAgICAgcmVwb3J0czogW10sXHJcbiAgICAgIGF1dGhvclVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgYXV0aG9yQXZhdGFyVXJsOiB1c2VyRGF0YS5hdmF0YXJVcmwsXHJcbiAgICAgIHR5cGU6IHBhcmFtcy50eXBlLFxyXG4gICAgICBjb250ZW50OiBwYXJhbXMudHlwZSA9PT0gJ3RleHQnID8gcGFyYW1zLmNvbnRlbnQgOiBudWxsLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIG1lZGlhVXJsOiBudWxsLFxyXG4gICAgICBtZWRpYUR1cmF0aW9uOiBwYXJhbXMudHlwZSA9PT0gJ3ZvaWNlJyA/IHBhcmFtcy5tZWRpYUR1cmF0aW9uIDogbnVsbCxcclxuICAgICAgbWVkaWFNaW1lVHlwZTogbnVsbCxcclxuICAgICAgd2F2ZWZvcm06IG51bGwsXHJcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogbm93LFxyXG4gICAgICB1cGRhdGVkQXQ6IG5vdyxcclxuICAgICAgaXNFZGl0ZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSB2b2ljZSBwb3N0XHJcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICd2b2ljZScgJiYgcGFyYW1zLm1lZGlhQmxvYikge1xyXG4gICAgICAvLyBVcGxvYWQgYXVkaW8gZmlsZVxyXG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZUluc3RhbmNlKClcclxuICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIG5vdCBpbml0aWFsaXplZCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBvc3RJZCA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZG9jKCkuaWRcclxuICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSBgdm9pY2UtcG9zdHMvJHt1c2VySWR9LyR7cG9zdElkfS53ZWJtYFxyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIHN0b3JhZ2VQYXRoKVxyXG4gICAgICBcclxuICAgICAgYXdhaXQgdXBsb2FkQnl0ZXMoc3RvcmFnZVJlZiwgcGFyYW1zLm1lZGlhQmxvYilcclxuICAgICAgY29uc3QgbWVkaWFVcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICBcclxuICAgICAgLy8gR2VuZXJhdGUgd2F2ZWZvcm1cclxuICAgICAgY29uc3Qgd2F2ZWZvcm0gPSBhd2FpdCBnZW5lcmF0ZVdhdmVmb3JtRnJvbUJsb2IocGFyYW1zLm1lZGlhQmxvYiwgMTAwKVxyXG4gICAgICBcclxuICAgICAgcG9zdERhdGEubWVkaWFVcmwgPSBtZWRpYVVybFxyXG4gICAgICBwb3N0RGF0YS5hdWRpb1VybCA9IG1lZGlhVXJsIC8vIEFsc28gc2V0IGF1ZGlvVXJsIGZvciBuZXcgZGF0YSBtb2RlbFxyXG4gICAgICBwb3N0RGF0YS5tZWRpYUR1cmF0aW9uID0gcGFyYW1zLm1lZGlhRHVyYXRpb25cclxuICAgICAgcG9zdERhdGEuZHVyYXRpb24gPSBwYXJhbXMubWVkaWFEdXJhdGlvbiAvLyBBbHNvIHNldCBkdXJhdGlvbiBmb3IgbmV3IGRhdGEgbW9kZWxcclxuICAgICAgcG9zdERhdGEubWVkaWFNaW1lVHlwZSA9IHBhcmFtcy5tZWRpYU1pbWVUeXBlIHx8ICdhdWRpby93ZWJtJ1xyXG4gICAgICBwb3N0RGF0YS53YXZlZm9ybSA9IHdhdmVmb3JtXHJcbiAgICAgIHBvc3REYXRhLmlkID0gcG9zdElkXHJcbiAgICAgIFxyXG4gICAgICAvLyBDcmVhdGUgcG9zdCBkb2N1bWVudFxyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwb3N0SWQpLnNldChwb3N0RGF0YSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcG9zdElkIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRleHQgcG9zdFxyXG4gICAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MoKVxyXG4gICAgICBwb3N0RGF0YS5pZCA9IHBvc3RSZWYuaWRcclxuICAgICAgYXdhaXQgcG9zdFJlZi5zZXQocG9zdERhdGEpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHBvc3RJZDogcG9zdFJlZi5pZCB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRWRpdCBwb3N0ICh0ZXh0LCBnZW5yZSwgYW5kIHZvaWNlIG1vZHVsYXRpb24gY2FuIGJlIHVwZGF0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdFBvc3QodXNlcklkOiBzdHJpbmcsIHBhcmFtczogRWRpdFBvc3RQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuICAgIGNvbnN0IHBvc3RSZWYgPSBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhwYXJhbXMucG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgaWYgKHBvc3REYXRhLnVzZXJJZCAhPT0gdXNlcklkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkOiBZb3UgY2FuIG9ubHkgZWRpdCB5b3VyIG93biBwb3N0cycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHtcclxuICAgICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAubm93KCksXHJcbiAgICAgIGlzRWRpdGVkOiB0cnVlLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGV4dCBjb250ZW50IChmb3IgdGV4dCBwb3N0cyBvciB2b2ljZSBjYXB0aW9ucylcclxuICAgIGlmIChwYXJhbXMudGV4dCAhPT0gdW5kZWZpbmVkIHx8IHBhcmFtcy5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dCB8fCBwYXJhbXMuY29udGVudFxyXG4gICAgICBpZiAoIXRleHRDb250ZW50Py50cmltKCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgY2Fubm90IGJlIGVtcHR5JylcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVEYXRhLnRleHQgPSB0ZXh0Q29udGVudFxyXG4gICAgICB1cGRhdGVEYXRhLmNvbnRlbnQgPSB0ZXh0Q29udGVudCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSBnZW5yZVxyXG4gICAgaWYgKHBhcmFtcy5nZW5yZSkge1xyXG4gICAgICBjb25zdCBnZW5yZUNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgICAnQ29uZmVzc2lvbic6ICcjRkY2QjZCJyxcclxuICAgICAgICAnTW90aXZhdGlvbic6ICcjNkJDQjc3JyxcclxuICAgICAgICAnTG92ZSAvIEhlYXJ0YnJlYWsnOiAnI0E2NkNGRicsXHJcbiAgICAgICAgJ0RhcmsgVGhvdWdodHMnOiAnI0ZGNEM0QycsXHJcbiAgICAgICAgJ0ZyaWVuZHNoaXAnOiAnIzREOTZGRicsXHJcbiAgICAgICAgJ0xpZmUgQWR2aWNlJzogJyNGRkQ5M0QnLFxyXG4gICAgICAgICdIdW1vcic6ICcjRkY5RjFDJyxcclxuICAgICAgICAnU3Rvcnl0aW1lJzogJyM4NDVFQzInLFxyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZURhdGEuZ2VucmUgPSBwYXJhbXMuZ2VucmVcclxuICAgICAgdXBkYXRlRGF0YS5nZW5yZUNvbG9yID0gZ2VucmVDb2xvcnNbcGFyYW1zLmdlbnJlXSB8fCAnIzhiNWNmNidcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIG1vZHVsYXRpb24gZm9yIHZvaWNlIHBvc3RzIChyZXF1aXJlcyByZS1wcm9jZXNzaW5nKVxyXG4gICAgaWYgKHBhcmFtcy5tb2R1bGF0aW9uVHlwZSAmJiBwb3N0RGF0YS50eXBlID09PSAndm9pY2UnKSB7XHJcbiAgICAgIGlmIChwYXJhbXMubWVkaWFCbG9iKSB7XHJcbiAgICAgICAgLy8gUmUtcHJvY2VzcyBhdWRpbyB3aXRoIG5ldyBtb2R1bGF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2VJbnN0YW5jZSgpXHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Ugbm90IGluaXRpYWxpemVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSBgdm9pY2UtcG9zdHMvJHt1c2VySWR9LyR7cGFyYW1zLnBvc3RJZH0ud2VibWBcclxuICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIHN0b3JhZ2VQYXRoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHVwbG9hZEJ5dGVzKHN0b3JhZ2VSZWYsIHBhcmFtcy5tZWRpYUJsb2IpXHJcbiAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdlbmVyYXRlIG5ldyB3YXZlZm9ybVxyXG4gICAgICAgIGNvbnN0IHdhdmVmb3JtID0gYXdhaXQgZ2VuZXJhdGVXYXZlZm9ybUZyb21CbG9iKHBhcmFtcy5tZWRpYUJsb2IsIDEwMClcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVEYXRhLmF1ZGlvVXJsID0gYXVkaW9VcmxcclxuICAgICAgICB1cGRhdGVEYXRhLm1lZGlhVXJsID0gYXVkaW9VcmwgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIHVwZGF0ZURhdGEud2F2ZWZvcm0gPSB3YXZlZm9ybVxyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZURhdGEubW9kdWxhdGlvblR5cGUgPSBwYXJhbXMubW9kdWxhdGlvblR5cGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHBvc3RcclxuICAgIGF3YWl0IHBvc3RSZWYudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGVkaXRpbmcgcG9zdDonLCBlcnJvcilcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRWRpdCB0ZXh0IHBvc3QgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdFRleHRQb3N0KHVzZXJJZDogc3RyaW5nLCBwYXJhbXM6IEVkaXRQb3N0UGFyYW1zKSB7XHJcbiAgcmV0dXJuIGVkaXRQb3N0KHVzZXJJZCwgeyAuLi5wYXJhbXMsIHRleHQ6IHBhcmFtcy5jb250ZW50IH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgcG9zdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QodXNlcklkOiBzdHJpbmcsIHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBjb25zdCBwb3N0UmVmID0gZGIuY29sbGVjdGlvbigncG9zdHMnKS5kb2MocG9zdElkKVxyXG4gICAgY29uc3QgcG9zdERvYyA9IGF3YWl0IHBvc3RSZWYuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCFwb3N0RG9jLmV4aXN0cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBwb3N0RG9jLmRhdGEoKSFcclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcCBvciBhZG1pblxyXG4gICAgY29uc3QgdXNlcklzQWRtaW4gPSBhd2FpdCBpc0FkbWluKHVzZXJJZClcclxuICAgIGlmIChwb3N0RGF0YS51c2VySWQgIT09IHVzZXJJZCAmJiAhdXNlcklzQWRtaW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEZWxldGUgYXVkaW8gZmlsZSBmcm9tIHN0b3JhZ2UgaWYgdm9pY2UgcG9zdFxyXG4gICAgaWYgKHBvc3REYXRhLnR5cGUgPT09ICd2b2ljZScgJiYgcG9zdERhdGEuYXVkaW9VcmwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZUluc3RhbmNlKClcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgLy8gRXh0cmFjdCBwYXRoIGZyb20gVVJMIG9yIHVzZSBzdGFuZGFyZCBwYXRoXHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGB2b2ljZS1wb3N0cy8ke3Bvc3REYXRhLnVzZXJJZH0vJHtwYXJhbXMucG9zdElkfS53ZWJtYFxyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBzdG9yYWdlUGF0aClcclxuICAgICAgICAgIC8vIE5vdGU6IEZpcmViYXNlIEFkbWluIFNESyBuZWVkZWQgZm9yIGRlbGV0ZSwgYnV0IHdlIGNhbiBtYXJrIGZvciBkZWxldGlvblxyXG4gICAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgcmVseSBvbiBTdG9yYWdlIHJ1bGVzIGFuZCBtYW51YWwgY2xlYW51cFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoc3RvcmFnZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgZGVsZXRpbmcgYXVkaW8gZmlsZTonLCBzdG9yYWdlRXJyb3IpXHJcbiAgICAgICAgLy8gQ29udGludWUgd2l0aCBwb3N0IGRlbGV0aW9uIGV2ZW4gaWYgc3RvcmFnZSBkZWxldGlvbiBmYWlsc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIERlbGV0ZSBwb3N0IGRvY3VtZW50XHJcbiAgICBhd2FpdCBwb3N0UmVmLmRlbGV0ZSgpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXJ2ZXJdIEVycm9yIGRlbGV0aW5nIHBvc3Q6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0VEF1WHNCIn0=
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:a7b646 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bdaa920bc5d20a9cee1773e4110081119cc55204":"createUsername"},"Downloads/anonymous-social-platform/app/actions/auth.ts",""] */ __turbopack_context__.s([
    "createUsername",
    ()=>createUsername
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createUsername = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40bdaa920bc5d20a9cee1773e4110081119cc55204", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createUsername"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJ1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZVVzZXJuYW1lUGFyYW1zIHtcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIHVzZXJuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVVzZXJQcm9maWxlUGFyYW1zIHtcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGF2YXRhcj86IHN0cmluZ1xyXG4gIGJpbz86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIG9yIHVwZGF0ZSB1c2VybmFtZSBmb3IgYSB1c2VyXHJcbiAqIEVuZm9yY2VzIHVuaXF1ZW5lc3MgdXNpbmcgdXNlcm5hbWVzIGNvbGxlY3Rpb25cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VybmFtZShwYXJhbXM6IENyZWF0ZVVzZXJuYW1lUGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIHVzZXJuYW1lXHJcbiAgICBjb25zdCB1c2VybmFtZUxvd2VyID0gcGFyYW1zLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICBcclxuICAgIGlmICghdXNlcm5hbWVMb3dlciB8fCB1c2VybmFtZUxvd2VyLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh1c2VybmFtZUxvd2VyLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBsZXNzIHRoYW4gMjAgY2hhcmFjdGVycycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghL15bYS16MC05X10rJC8udGVzdCh1c2VybmFtZUxvd2VyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgYW5kIHVuZGVyc2NvcmVzJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlblxyXG4gICAgY29uc3QgdXNlcm5hbWVEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKHVzZXJuYW1lRG9jLmV4aXN0cykge1xyXG4gICAgICBjb25zdCBleGlzdGluZ1VpZCA9IHVzZXJuYW1lRG9jLmRhdGEoKSEudWlkXHJcbiAgICAgIGlmIChleGlzdGluZ1VpZCAhPT0gcGFyYW1zLnVzZXJJZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbicpXHJcbiAgICAgIH1cclxuICAgICAgLy8gU2FtZSB1c2VyLCBhbGxvdyB1cGRhdGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHBhcmFtcy51c2VySWQpLmdldCgpXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXJuYW1lID0gdXNlckRvYy5leGlzdHMgPyB1c2VyRG9jLmRhdGEoKT8udXNlcm5hbWVMb3dlciA6IG51bGxcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHVzZXJuYW1lcyBjb2xsZWN0aW9uXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuc2V0KHtcclxuICAgICAgdWlkOiBwYXJhbXMudXNlcklkLFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gSWYgdXNlciBoYWQgYSBkaWZmZXJlbnQgdXNlcm5hbWUsIHJlbW92ZSBvbGQgZW50cnlcclxuICAgIGlmIChleGlzdGluZ1VzZXJuYW1lICYmIGV4aXN0aW5nVXNlcm5hbWUgIT09IHVzZXJuYW1lTG93ZXIpIHtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcm5hbWVzJykuZG9jKGV4aXN0aW5nVXNlcm5hbWUpLmRlbGV0ZSgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB1c2VyIGRvY3VtZW50XHJcbiAgICBjb25zdCB1c2VyRGF0YTogYW55ID0ge1xyXG4gICAgICB1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxyXG4gICAgICB1c2VybmFtZUxvd2VyLFxyXG4gICAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcC5ub3coKSxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IHVzZXIgZG9jdW1lbnRcclxuICAgICAgdXNlckRhdGEudWlkID0gcGFyYW1zLnVzZXJJZFxyXG4gICAgICB1c2VyRGF0YS5yb2xlID0gJ3VzZXInXHJcbiAgICAgIHVzZXJEYXRhLnN0YXR1cyA9ICdhY3RpdmUnXHJcbiAgICAgIHVzZXJEYXRhLmF2YXRhclVybCA9ICcnXHJcbiAgICAgIHVzZXJEYXRhLmJpbyA9ICcnXHJcbiAgICAgIHVzZXJEYXRhLmNyZWF0ZWRBdCA9IFRpbWVzdGFtcC5ub3coKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5zZXQodXNlckRhdGEsIHsgbWVyZ2U6IHRydWUgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgdXNlcm5hbWU6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKHBhcmFtczogVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuXHJcbiAgICBjb25zdCB1cGRhdGVzOiBhbnkgPSB7XHJcbiAgICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wLm5vdygpLFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmF2YXRhciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdXBkYXRlcy5hdmF0YXIgPSBwYXJhbXMuYXZhdGFyXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuYmlvICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB1cGRhdGVzLmJpbyA9IHBhcmFtcy5iaW9cclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5zZXQodXBkYXRlcywgeyBtZXJnZTogdHJ1ZSB9KVxyXG5cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgY29uc3QgZGF0YSA9IHVzZXJEb2MuZGF0YSgpIHx8IHt9XHJcblxyXG4gICAgY29uc3Qgc2FmZVVzZXIgPSB7XHJcbiAgICAgIHVpZDogcGFyYW1zLnVzZXJJZCxcclxuICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUgPz8gJycsXHJcbiAgICAgIHVzZXJuYW1lTG93ZXI6IGRhdGEudXNlcm5hbWVMb3dlciA/PyAnJyxcclxuICAgICAgYmlvOiBkYXRhLmJpbyA/PyAnJyxcclxuICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhciA/PyAnJyxcclxuICAgICAgYXZhdGFyVXJsOiBkYXRhLmF2YXRhclVybCA/PyAnJyxcclxuICAgICAgcm9sZTogZGF0YS5yb2xlID8/ICd1c2VyJyxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyA/PyAnYWN0aXZlJyxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB1c2VyOiBzYWZlVXNlcixcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciB1cGRhdGluZyB1c2VyIHByb2ZpbGU6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB1c2VyIGJ5IHVzZXJuYW1lXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgY29uc3QgdXNlcm5hbWVMb3dlciA9IHVzZXJuYW1lLnRvTG93ZXJDYXNlKClcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcm5hbWVEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCF1c2VybmFtZURvYy5leGlzdHMpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdWlkID0gdXNlcm5hbWVEb2MuZGF0YSgpIS51aWRcclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1aWQpLmdldCgpXHJcbiAgICBcclxuICAgIGlmICghdXNlckRvYy5leGlzdHMpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdWlkLFxyXG4gICAgICAuLi51c2VyRG9jLmRhdGEoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciBnZXR0aW5nIHVzZXIgYnkgdXNlcm5hbWU6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrVEFvQnNCIn0=
}),
"[project]/Downloads/anonymous-social-platform/app/actions/data:265bbb [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409a305868c91c056c47855eb2f61b961143d8ec48":"updateUserProfile"},"Downloads/anonymous-social-platform/app/actions/auth.ts",""] */ __turbopack_context__.s([
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateUserProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409a305868c91c056c47855eb2f61b961143d8ec48", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGdldEFkbWluRGIgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbidcclxuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJ1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZVVzZXJuYW1lUGFyYW1zIHtcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIHVzZXJuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVVzZXJQcm9maWxlUGFyYW1zIHtcclxuICB1c2VySWQ6IHN0cmluZ1xyXG4gIGF2YXRhcj86IHN0cmluZ1xyXG4gIGJpbz86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIG9yIHVwZGF0ZSB1c2VybmFtZSBmb3IgYSB1c2VyXHJcbiAqIEVuZm9yY2VzIHVuaXF1ZW5lc3MgdXNpbmcgdXNlcm5hbWVzIGNvbGxlY3Rpb25cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VybmFtZShwYXJhbXM6IENyZWF0ZVVzZXJuYW1lUGFyYW1zKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0QWRtaW5EYigpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIHVzZXJuYW1lXHJcbiAgICBjb25zdCB1c2VybmFtZUxvd2VyID0gcGFyYW1zLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICBcclxuICAgIGlmICghdXNlcm5hbWVMb3dlciB8fCB1c2VybmFtZUxvd2VyLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh1c2VybmFtZUxvd2VyLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBsZXNzIHRoYW4gMjAgY2hhcmFjdGVycycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghL15bYS16MC05X10rJC8udGVzdCh1c2VybmFtZUxvd2VyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgYW5kIHVuZGVyc2NvcmVzJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlblxyXG4gICAgY29uc3QgdXNlcm5hbWVEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKHVzZXJuYW1lRG9jLmV4aXN0cykge1xyXG4gICAgICBjb25zdCBleGlzdGluZ1VpZCA9IHVzZXJuYW1lRG9jLmRhdGEoKSEudWlkXHJcbiAgICAgIGlmIChleGlzdGluZ1VpZCAhPT0gcGFyYW1zLnVzZXJJZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbicpXHJcbiAgICAgIH1cclxuICAgICAgLy8gU2FtZSB1c2VyLCBhbGxvdyB1cGRhdGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHBhcmFtcy51c2VySWQpLmdldCgpXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXJuYW1lID0gdXNlckRvYy5leGlzdHMgPyB1c2VyRG9jLmRhdGEoKT8udXNlcm5hbWVMb3dlciA6IG51bGxcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHVzZXJuYW1lcyBjb2xsZWN0aW9uXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuc2V0KHtcclxuICAgICAgdWlkOiBwYXJhbXMudXNlcklkLFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gSWYgdXNlciBoYWQgYSBkaWZmZXJlbnQgdXNlcm5hbWUsIHJlbW92ZSBvbGQgZW50cnlcclxuICAgIGlmIChleGlzdGluZ1VzZXJuYW1lICYmIGV4aXN0aW5nVXNlcm5hbWUgIT09IHVzZXJuYW1lTG93ZXIpIHtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcm5hbWVzJykuZG9jKGV4aXN0aW5nVXNlcm5hbWUpLmRlbGV0ZSgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB1c2VyIGRvY3VtZW50XHJcbiAgICBjb25zdCB1c2VyRGF0YTogYW55ID0ge1xyXG4gICAgICB1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxyXG4gICAgICB1c2VybmFtZUxvd2VyLFxyXG4gICAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcC5ub3coKSxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCF1c2VyRG9jLmV4aXN0cykge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IHVzZXIgZG9jdW1lbnRcclxuICAgICAgdXNlckRhdGEudWlkID0gcGFyYW1zLnVzZXJJZFxyXG4gICAgICB1c2VyRGF0YS5yb2xlID0gJ3VzZXInXHJcbiAgICAgIHVzZXJEYXRhLnN0YXR1cyA9ICdhY3RpdmUnXHJcbiAgICAgIHVzZXJEYXRhLmF2YXRhclVybCA9ICcnXHJcbiAgICAgIHVzZXJEYXRhLmJpbyA9ICcnXHJcbiAgICAgIHVzZXJEYXRhLmNyZWF0ZWRBdCA9IFRpbWVzdGFtcC5ub3coKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5zZXQodXNlckRhdGEsIHsgbWVyZ2U6IHRydWUgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW1NlcnZlcl0gRXJyb3IgY3JlYXRpbmcgdXNlcm5hbWU6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKHBhcmFtczogVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBnZXRBZG1pbkRiKClcclxuXHJcbiAgICBjb25zdCB1cGRhdGVzOiBhbnkgPSB7XHJcbiAgICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wLm5vdygpLFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmF2YXRhciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdXBkYXRlcy5hdmF0YXIgPSBwYXJhbXMuYXZhdGFyXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuYmlvICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB1cGRhdGVzLmJpbyA9IHBhcmFtcy5iaW9cclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5zZXQodXBkYXRlcywgeyBtZXJnZTogdHJ1ZSB9KVxyXG5cclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhwYXJhbXMudXNlcklkKS5nZXQoKVxyXG4gICAgY29uc3QgZGF0YSA9IHVzZXJEb2MuZGF0YSgpIHx8IHt9XHJcblxyXG4gICAgY29uc3Qgc2FmZVVzZXIgPSB7XHJcbiAgICAgIHVpZDogcGFyYW1zLnVzZXJJZCxcclxuICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUgPz8gJycsXHJcbiAgICAgIHVzZXJuYW1lTG93ZXI6IGRhdGEudXNlcm5hbWVMb3dlciA/PyAnJyxcclxuICAgICAgYmlvOiBkYXRhLmJpbyA/PyAnJyxcclxuICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhciA/PyAnJyxcclxuICAgICAgYXZhdGFyVXJsOiBkYXRhLmF2YXRhclVybCA/PyAnJyxcclxuICAgICAgcm9sZTogZGF0YS5yb2xlID8/ICd1c2VyJyxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyA/PyAnYWN0aXZlJyxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB1c2VyOiBzYWZlVXNlcixcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciB1cGRhdGluZyB1c2VyIHByb2ZpbGU6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB1c2VyIGJ5IHVzZXJuYW1lXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGdldEFkbWluRGIoKVxyXG4gICAgY29uc3QgdXNlcm5hbWVMb3dlciA9IHVzZXJuYW1lLnRvTG93ZXJDYXNlKClcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcm5hbWVEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VybmFtZXMnKS5kb2ModXNlcm5hbWVMb3dlcikuZ2V0KClcclxuICAgIFxyXG4gICAgaWYgKCF1c2VybmFtZURvYy5leGlzdHMpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdWlkID0gdXNlcm5hbWVEb2MuZGF0YSgpIS51aWRcclxuICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1aWQpLmdldCgpXHJcbiAgICBcclxuICAgIGlmICghdXNlckRvYy5leGlzdHMpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdWlkLFxyXG4gICAgICAuLi51c2VyRG9jLmRhdGEoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbU2VydmVyXSBFcnJvciBnZXR0aW5nIHVzZXIgYnkgdXNlcm5hbWU6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrVUEwRnNCIn0=
}),
"[project]/Downloads/anonymous-social-platform/lib/username-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditProfileModal",
    ()=>EditProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$a7b646__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:a7b646 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$265bbb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:265bbb [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$username$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/username-generator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function EditProfileModal({ userId, initialProfile, onClose, onUpdated }) {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProfile.username || '');
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProfile.avatar || '👻');
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProfile.bio || '');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const avatarOptions = [
        '👻',
        '🌙',
        '⭐',
        '🦊',
        '🐱',
        '🐺',
        '💫',
        '🖤'
    ];
    const handleRandomUsername = ()=>{
        const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$username$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUsername"])();
        setUsername(generated);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (!trimmedUsername) {
            setError('Username is required');
            return;
        }
        if (trimmedUsername.length < 3 || trimmedUsername.length > 20) {
            setError('Username must be between 3 and 20 characters');
            return;
        }
        if (!/^[a-z0-9_]+$/.test(trimmedUsername)) {
            setError('Username can only contain letters, numbers, and underscores');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const usernameChanged = trimmedUsername !== (initialProfile.username || '');
            if (usernameChanged) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$a7b646__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createUsername"])({
                    userId,
                    username: trimmedUsername
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$265bbb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserProfile"])({
                userId,
                avatar,
                bio: bio.trim()
            });
            if (result?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Profile updated');
                onUpdated(result.user);
                onClose();
            }
        } catch (err) {
            console.error('[Profile] Error updating profile:', err);
            setError(err.message || 'Failed to update profile');
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || 'Failed to update profile');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card/95 border border-dark-border rounded-2xl w-full max-w-md shadow-2xl shadow-black/40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-dark-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Edit Profile"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white text-2xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-error/20 border border-error text-error rounded-lg text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 max-w-sm mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium",
                                            children: "Avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-4 gap-2 justify-items-center sm:grid-cols-8",
                                            children: avatarOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setAvatar(option),
                                                    className: `w-10 h-10 rounded-full flex items-center justify-center text-2xl border transition ${avatar === option ? 'bg-primary/20 border-primary shadow-lg shadow-black/40' : 'bg-dark-secondary border-dark-border hover:border-primary'}`,
                                                    children: option
                                                }, option, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end pt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setAvatar('👻'),
                                                className: "px-3 py-1.5 text-xs bg-dark-secondary border border-dark-border rounded-full hover:border-primary transition",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-w-sm mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium",
                                            children: "Username"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex items-center gap-2 bg-dark-secondary border border-dark-border rounded-full px-4 py-2 focus-within:border-primary transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400",
                                                            children: "@"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: username,
                                                            onChange: (e)=>{
                                                                setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''));
                                                                setError('');
                                                            },
                                                            placeholder: "username",
                                                            disabled: loading,
                                                            maxLength: 20,
                                                            minLength: 3,
                                                            pattern: "[a-z0-9_]+",
                                                            className: "flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 disabled:opacity-50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleRandomUsername,
                                                    disabled: loading,
                                                    className: "w-11 h-11 rounded-full bg-dark-secondary border border-dark-border flex items-center justify-center hover:border-primary transition disabled:opacity-50",
                                                    title: "Generate random username",
                                                    children: "🎲"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                username.length,
                                                "/20 characters • Letters, numbers, and underscores only"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-w-sm mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium",
                                            children: "Bio"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: bio,
                                            onChange: (e)=>setBio(e.target.value),
                                            placeholder: "Anonymous soul sharing stories",
                                            maxLength: 200,
                                            rows: 3,
                                            className: "w-full bg-dark-secondary border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                bio.length,
                                                "/200 characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-sm mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/40",
                                        children: loading ? 'Saving...' : 'Save Changes'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/framer-motion@12.23.24_@emo_a8f3e3ab3ce79744232f2639366efd77/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/post-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/post-card-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firestore-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$bc5b1b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:bc5b1b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$6eb134__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/data:6eb134 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$edit$2d$profile$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/components/app/edit-profile-modal.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
function ProfilePage({ params }) {
    const { uid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [profileUser, setProfileUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userPosts, setUserPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [likedPosts, setLikedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showEditMenu, setShowEditMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEditProfile, setShowEditProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!uid) {
            setError('User ID is required');
            setLoading(false);
            return;
        }
        const loadProfile = async ()=>{
            try {
                setLoading(true);
                const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firestore$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"])(uid);
                if (!userData) {
                    throw new Error('User not found');
                }
                setProfileUser(userData);
                try {
                    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$bc5b1b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserPosts"])(uid);
                    setUserPosts(posts);
                } catch (postError) {
                    console.error('[v0] Error loading user posts:', postError);
                    setUserPosts([]);
                }
                setError(null);
            } catch (error) {
                console.error('[v0] Error loading profile:', error);
                setProfileUser(null);
                setUserPosts([]);
                setError('Failed to load profile');
            } finally{
                setLoading(false);
            }
        };
        loadProfile();
    }, [
        uid
    ]);
    // Add smooth scrolling behavior to html element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.setAttribute('data-scroll-behavior', 'smooth');
        return ()=>{
            document.documentElement.removeAttribute('data-scroll-behavior');
        };
    }, []);
    const handleLike = (postId)=>{
        const newLiked = new Set(likedPosts);
        if (newLiked.has(postId)) {
            newLiked.delete(postId);
        } else {
            newLiked.add(postId);
        }
        setLikedPosts(newLiked);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-dark-bg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-24 pb-8 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40 bg-dark-card rounded-xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 bg-dark-card rounded-xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    if (!profileUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-dark-bg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-24 pb-8 px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-5xl mb-4",
                            children: "👻"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mb-6",
                            children: "User not found"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/app",
                            className: "inline-block btn-primary",
                            children: "Back to Feed"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    const isOwnProfile = user?.uid === uid;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-dark-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 pb-8 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_$40$emo_a8f3e3ab3ce79744232f2639366efd77$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "card mb-8 relative overflow-hidden shadow-2xl shadow-black/40 border border-dark-border rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-40 bg-gradient-to-r from-primary to-accent rounded-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 pb-6 -mt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl border-[4px] border-dark-bg shadow-lg shadow-black/40",
                                                            children: profileUser.avatar || '👻'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold",
                                                                    children: profileUser.username || profileUser.displayName || 'Anonymous'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        "@",
                                                                        profileUser.username?.toLowerCase() || 'anonymous'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                isOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 sm:self-end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowEditProfile(true),
                                                            className: "px-4 py-2 rounded-full border border-dark-border bg-dark-bg/80 text-sm font-medium transition hover:border-primary hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]",
                                                            children: "Edit Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-9 h-9 rounded-full border border-dark-border bg-dark-bg/80 flex items-center justify-center text-lg transition hover:border-primary hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]",
                                                            children: "···"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-gray-300 text-sm leading-relaxed",
                                            children: profileUser.bio || 'Anonymous soul sharing stories'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        isOwnProfile && showEditProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$edit$2d$profile$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditProfileModal"], {
                            userId: user.uid,
                            initialProfile: {
                                username: profileUser.username,
                                bio: profileUser.bio,
                                avatar: profileUser.avatar
                            },
                            onClose: ()=>setShowEditProfile(false),
                            onUpdated: (updated)=>setProfileUser(updated)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-6",
                                    children: "Posts"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostCardSkeleton"], {}, i, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this) : userPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl mb-4 opacity-50",
                                            children: "📝"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400",
                                            children: "No posts yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: userPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                isOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowEditMenu(showEditMenu === post.id ? null : post.id),
                                                            className: "p-2 bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-lg hover:bg-dark-card transition",
                                                            children: "•••"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 25
                                                        }, this),
                                                        showEditMenu === post.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-20 min-w-[120px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: async ()=>{
                                                                        setShowEditMenu(null);
                                                                        // TODO: Open edit modal
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Edit functionality coming soon');
                                                                    },
                                                                    className: "w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary transition",
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: async ()=>{
                                                                        if (!confirm('Are you sure you want to delete this post?')) {
                                                                            setShowEditMenu(null);
                                                                            return;
                                                                        }
                                                                        try {
                                                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$6eb134__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePost"])(user.uid, post.id);
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Deleted');
                                                                            // Reload posts
                                                                            const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$data$3a$bc5b1b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserPosts"])(uid);
                                                                            setUserPosts(posts);
                                                                        } catch (error) {
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || 'Failed to delete');
                                                                        }
                                                                        setShowEditMenu(null);
                                                                    },
                                                                    className: "w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary text-error transition",
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$components$2f$app$2f$post$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostCard"], {
                                                    post: post,
                                                    isLiked: likedPosts.has(post.id),
                                                    onLike: ()=>handleLike(post.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, post.id, true, {
                                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/app",
                                className: "text-primary hover:text-accent transition",
                                children: "← Back to Feed"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/anonymous-social-platform/app/profile/[uid]/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb3813dc._.js.map