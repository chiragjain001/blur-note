module.exports = [
"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/storage");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getAdminApp",
    ()=>getAdminApp,
    "getAdminAuth",
    ()=>getAdminAuth,
    "getAdminDb",
    ()=>getAdminDb,
    "getAdminStorage",
    ()=>getAdminStorage,
    "getUserClaims",
    ()=>getUserClaims,
    "isAdmin",
    ()=>isAdmin,
    "isShadowbanned",
    ()=>isShadowbanned
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
let adminApp = null;
let adminAuth = null;
let adminDb = null;
let adminStorage = null;
function getAdminApp() {
    if (adminApp) {
        return adminApp;
    }
    // Check if already initialized
    const existingApps = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])();
    if (existingApps.length > 0) {
        adminApp = existingApps[0];
        return adminApp;
    }
    // Initialize with service account or default credentials
    try {
        let serviceAccount = undefined;
        // Option 1: Check for environment variable (for Vercel/production)
        if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
            try {
                serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
            } catch (e) {
                console.warn('[Admin] Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY from env');
            }
        }
        // Option 2: Check for local service account file (for local development)
        if (!serviceAccount && ("TURBOPACK compile-time value", "undefined") === 'undefined') {
            try {
                const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
                const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
                // Try to find service account file in project root
                const possiblePaths = [
                    path.join(process.cwd(), 'whisplyy-firebase-adminsdk-fbsvc-51b5120366.json'),
                    path.join(process.cwd(), 'serviceAccountKey.json'),
                    path.join(process.cwd(), 'firebase-adminsdk.json')
                ];
                for (const filePath of possiblePaths){
                    if (fs.existsSync(filePath)) {
                        const fileContent = fs.readFileSync(filePath, 'utf8');
                        serviceAccount = JSON.parse(fileContent);
                        console.log('[Admin] Loaded service account from:', filePath);
                        break;
                    }
                }
            } catch (e) {
                // File not found or error reading - will use default credentials
                console.warn('[Admin] Could not load service account file, using default credentials');
            }
        }
        if (serviceAccount) {
            adminApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
                credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])(serviceAccount),
                projectId: ("TURBOPACK compile-time value", "whisplyy") || serviceAccount.project_id,
                storageBucket: ("TURBOPACK compile-time value", "whisplyy.appspot.com")
            });
            console.log('[Admin] Firebase Admin initialized with service account');
        } else {
            // Use default credentials (for local development with gcloud CLI)
            adminApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
                projectId: ("TURBOPACK compile-time value", "whisplyy"),
                storageBucket: ("TURBOPACK compile-time value", "whisplyy.appspot.com")
            });
            console.log('[Admin] Firebase Admin initialized with default credentials');
        }
        return adminApp;
    } catch (error) {
        console.error('[Admin] Error initializing Firebase Admin:', error);
        throw new Error('Failed to initialize Firebase Admin');
    }
}
function getAdminAuth() {
    if (!adminAuth) {
        const app = getAdminApp();
        adminAuth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])(app);
    }
    return adminAuth;
}
function getAdminDb() {
    if (!adminDb) {
        const app = getAdminApp();
        adminDb = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])(app);
    }
    return adminDb;
}
function getAdminStorage() {
    if (!adminStorage) {
        const app = getAdminApp();
        adminStorage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__["getStorage"])(app);
    }
    return adminStorage;
}
async function getUserClaims(uid) {
    try {
        const auth = getAdminAuth();
        const user = await auth.getUser(uid);
        return user.customClaims || {};
    } catch (error) {
        console.error('[Admin] Error getting user claims:', error);
        return {};
    }
}
async function isAdmin(uid) {
    try {
        const claims = await getUserClaims(uid);
        return claims.admin === true;
    } catch (error) {
        console.error('[Admin] Error checking admin status:', error);
        return false;
    }
}
async function isShadowbanned(userId) {
    try {
        const db = getAdminDb();
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            return false;
        }
        const userData = userDoc.data();
        return userData?.status === 'shadowbanned';
    } catch (error) {
        console.error('[Admin] Error checking shadowban status:', error);
        return false;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"404e2f9d30ac88c6aa4f751cc2e3e34fba950b303b":"getUserPosts","40aa570c58d3a3eb2529358902c3aa03e4ba88fba3":"getUserLikedPosts","60587d35f885c167c0256fe3e2e01e921cc748135a":"checkUserLiked","7081561f72c0c9c8333a9ea864e6d788d81886b052":"getFeedPosts"},"",""] */ __turbopack_context__.s([
    "checkUserLiked",
    ()=>checkUserLiked,
    "getFeedPosts",
    ()=>getFeedPosts,
    "getUserLikedPosts",
    ()=>getUserLikedPosts,
    "getUserPosts",
    ()=>getUserPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
/**
 * Convert Firestore Timestamp objects to plain JavaScript values
 * This is necessary because Timestamps can't be serialized when passing from server to client
 */ function serializeTimestamp(value) {
    // Check if it's a Firestore Timestamp
    if (value && typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function') {
        return value.toDate().toISOString();
    }
    // Check if it's a Timestamp-like object with _seconds
    if (value && typeof value === 'object' && '_seconds' in value) {
        const seconds = value._seconds || 0;
        const nanoseconds = value._nanoseconds || 0;
        return new Date(seconds * 1000 + nanoseconds / 1000000).toISOString();
    }
    return value;
}
/**
 * Recursively serialize all Timestamp objects in a data object
 */ function serializePostData(data) {
    if (data === null || data === undefined) {
        return data;
    }
    if (Array.isArray(data)) {
        return data.map((item)=>serializePostData(item));
    }
    if (typeof data === 'object') {
        const serialized = {};
        for (const [key, value] of Object.entries(data)){
            // Special handling for timestamp fields
            if (key === 'createdAt' || key === 'updatedAt') {
                serialized[key] = serializeTimestamp(value);
            } else if (typeof value === 'object' && value !== null) {
                serialized[key] = serializePostData(value);
            } else {
                serialized[key] = value;
            }
        }
        return serialized;
    }
    return data;
}
async function getFeedPosts(limitCount = 20, lastPostId, genre) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Get all users and identify shadowbanned ones
        // Users without a status field or with status 'active' are considered active
        const allUsersSnapshot = await db.collection('users').get();
        const shadowbannedUserIds = new Set(allUsersSnapshot.docs.filter((doc)=>{
            const userData = doc.data();
            return userData.status === 'shadowbanned';
        }).map((doc)=>doc.id));
        // Build query - query all posts ordered by createdAt
        // We'll filter by genre and status in memory to avoid index requirements
        let query = db.collection('posts').orderBy('createdAt', 'desc').limit(limitCount * 3) // Get more posts since we'll filter some out
        ;
        // If pagination cursor provided
        if (lastPostId) {
            const lastPostDoc = await db.collection('posts').doc(lastPostId).get();
            if (lastPostDoc.exists) {
                query = query.startAfter(lastPostDoc);
            }
        }
        let posts = [];
        try {
            const snapshot = await query.get();
            posts = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
        } catch (queryError) {
            // If query fails (e.g., missing index), try a simpler query and sort in memory
            console.warn('[Server] Query with orderBy failed, trying without orderBy:', queryError.message);
            let fallbackQuery = db.collection('posts').limit(limitCount * 5);
            const fallbackSnapshot = await fallbackQuery.get();
            posts = fallbackSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            // Sort in memory by createdAt (descending)
            posts.sort((a, b)=>{
                const aTime = a.createdAt?.toMillis?.() || a.createdAt?._seconds || 0;
                const bTime = b.createdAt?.toMillis?.() || b.createdAt?._seconds || 0;
                return bTime - aTime // Descending order
                ;
            });
        }
        // Filter out shadowbanned users, inactive posts, and apply genre filter
        const filteredPosts = posts.filter((post)=>{
            // Exclude posts from shadowbanned users
            if (shadowbannedUserIds.has(post.userId)) {
                return false;
            }
            // Include posts with status 'active' or no status field (backward compatibility)
            // Exclude posts with other statuses like 'deleted', 'hidden', etc.
            if (post.status && post.status !== 'active') {
                return false;
            }
            // Apply genre filter if specified
            if (genre && genre !== 'All' && post.genre !== genre) {
                return false;
            }
            return true;
        }).slice(0, limitCount) // Limit to requested amount after filtering
        ;
        // Serialize all posts to convert Timestamps to plain values
        return filteredPosts.map((post)=>serializePostData(post));
    } catch (error) {
        console.error('[Server] Error getting feed posts:', error);
        return [];
    }
}
async function getUserPosts(userId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const snapshot = await db.collection('posts').where('userId', '==', userId).where('status', '==', 'active').orderBy('createdAt', 'desc').get();
        const posts = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        // Serialize all posts to convert Timestamps to plain values
        return posts.map((post)=>serializePostData(post));
    } catch (error) {
        console.error('[Server] Error getting user posts:', error);
        return [];
    }
}
async function checkUserLiked(userId, postId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const likeDoc = await db.collection('posts').doc(postId).collection('likes').doc(userId).get();
        return likeDoc.exists;
    } catch (error) {
        console.error('[Server] Error checking like:', error);
        return false;
    }
}
async function getUserLikedPosts(userId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Get all posts user has liked
        // Note: This is expensive, so we'll optimize by getting likes from user's subcollection
        // But for now, we'll use a different approach - check likes on each post
        // Actually, we should store likes in posts/{postId}/likes/{userId}
        // So we need to query all posts and check their likes subcollections
        // This is not efficient, but for MVP it's acceptable
        // Better approach: Store user's likes in a separate collection or use client-side caching
        // For now, return empty set and let client handle it
        return new Set();
    } catch (error) {
        console.error('[Server] Error getting user liked posts:', error);
        return new Set();
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getFeedPosts,
    getUserPosts,
    checkUserLiked,
    getUserLikedPosts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFeedPosts, "7081561f72c0c9c8333a9ea864e6d788d81886b052", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserPosts, "404e2f9d30ac88c6aa4f751cc2e3e34fba950b303b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkUserLiked, "60587d35f885c167c0256fe3e2e01e921cc748135a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserLikedPosts, "40aa570c58d3a3eb2529358902c3aa03e4ba88fba3", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/app/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/auth/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/storage/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+auth@1.11.1_@firebase+app@0.14.6/node_modules/@firebase/auth/dist/node-esm/index.js [app-rsc] (ecmascript)");
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
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
            googleProviderInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$1_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
};
}),
"[project]/Downloads/anonymous-social-platform/lib/waveform-generator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate waveform data from audio buffer
 * Returns array of peak values normalized to 0-1 range
 */ __turbopack_context__.s([
    "generateWaveform",
    ()=>generateWaveform,
    "generateWaveformFromBlob",
    ()=>generateWaveformFromBlob
]);
async function generateWaveform(audioBuffer, samples = 100) {
    try {
        const audioContext = new AudioContext();
        const decodedData = await audioContext.decodeAudioData(audioBuffer);
        const channelData = decodedData.getChannelData(0) // Use first channel
        ;
        const blockSize = Math.floor(channelData.length / samples);
        const waveform = [];
        for(let i = 0; i < samples; i++){
            let sum = 0;
            const start = i * blockSize;
            const end = Math.min(start + blockSize, channelData.length);
            for(let j = start; j < end; j++){
                sum += Math.abs(channelData[j]);
            }
            const average = sum / (end - start);
            // Normalize to 0-1 range
            waveform.push(Math.min(average * 2, 1));
        }
        return waveform;
    } catch (error) {
        console.error('[Waveform] Error generating waveform:', error);
        // Return flat waveform on error
        return new Array(samples).fill(0.1);
    }
}
async function generateWaveformFromBlob(blob, samples = 100) {
    const arrayBuffer = await blob.arrayBuffer();
    return generateWaveform(arrayBuffer, samples);
}
}),
"[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40d8f08f5ec8ef5b83103f2a59af177616b3225c73":"createPost","6011a687f959c5c37b66a8f6d64e14379a08935892":"editTextPost","6017dcfb18c083f3a87ffc816394aeb0d27e19a962":"deletePost","60b58bf21cb64e9896a4ba3b5c12273fe312b380da":"editPost","60e4026df2b0c96448d5a08a5843ed5671440f7338":"createPostWithAuth"},"",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "createPostWithAuth",
    ()=>createPostWithAuth,
    "deletePost",
    ()=>deletePost,
    "editPost",
    ()=>editPost,
    "editTextPost",
    ()=>editTextPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$6$2e$0$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/firebase@12.6.0/node_modules/firebase/storage/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/@firebase+storage@0.14.0_@firebase+app@0.14.6/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$waveform$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/waveform-generator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
/**
 * Rate limiting: Check if user posted within last 2 minutes
 */ async function checkRateLimit(userId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
    const postsRef = db.collection('posts');
    const twoMinutesAgo = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].fromMillis(Date.now() - 2 * 60 * 1000);
    const recentPosts = await postsRef.where('userId', '==', userId).where('createdAt', '>', twoMinutesAgo).limit(1).get();
    if (!recentPosts.empty) {
        throw new Error('Rate limit: Please wait 2 minutes between posts');
    }
}
/**
 * Get user data with denormalized fields
 * Creates a default user document if it doesn't exist
 */ async function getUserData(userId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
        // Create a default user document if it doesn't exist
        // This can happen if user authenticated but document creation failed
        const defaultUserData = {
            uid: userId,
            username: 'Anonymous',
            role: 'user',
            status: 'active',
            avatarUrl: '',
            bio: '',
            createdAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now(),
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now()
        };
        await db.collection('users').doc(userId).set(defaultUserData);
        return {
            username: 'Anonymous',
            avatarUrl: ''
        };
    }
    const userData = userDoc.data();
    // Handle both old format (avatar) and new format (avatarUrl)
    const avatarUrl = userData.avatarUrl || userData.avatar || '';
    return {
        username: userData.username || 'Anonymous',
        avatarUrl: avatarUrl
    };
}
/**
 * Check if user is shadowbanned
 */ async function isShadowbanned(userId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
        return false;
    }
    const userData = userDoc.data();
    return userData.status === 'shadowbanned';
}
async function createPost(params1) {
    try {
        // Get auth token from request
        // Note: In Next.js Server Actions, we need to pass the auth token
        // For now, we'll use a workaround with client-side auth
        // In production, use cookies or headers to pass the token
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Validate input
        if (params1.type === 'text' && !params1.content?.trim()) {
            throw new Error('Text content is required');
        }
        if (params1.type === 'voice') {
            if (!params1.mediaBlob) {
                throw new Error('Voice recording is required');
            }
            // Validate duration (60 seconds max)
            // We'll check this on the client side, but validate file size here
            if (params1.mediaBlob.size > 5 * 1024 * 1024) {
                throw new Error('Voice file must be less than 5MB');
            }
        }
        // Note: In a real implementation, you'd get userId from the auth token
        // For now, we'll need to pass it from the client
        // This is a limitation - we'll need to refactor auth context
        throw new Error('createPost: Auth token required - needs refactoring');
    } catch (error) {
        console.error('[Server] Error creating post:', error);
        throw error;
    }
}
async function createPostWithAuth(userId, params1) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Check rate limit
        await checkRateLimit(userId);
        // Check if user is shadowbanned
        const shadowbanned = await isShadowbanned(userId);
        if (shadowbanned) {
        // Shadowbanned users can post, but posts won't appear to others
        // We'll handle this in the feed query
        }
        // Get user data for denormalization
        const userData = await getUserData(userId);
        // Validate input
        if (!params1.genre) {
            throw new Error('Genre is required for all posts');
        }
        if (params1.type === 'text' && !params1.content?.trim()) {
            throw new Error('Text content is required');
        }
        if (params1.type === 'voice') {
            if (!params1.mediaBlob) {
                throw new Error('Voice recording is required');
            }
            if (params1.mediaBlob.size > 5 * 1024 * 1024) {
                throw new Error('Voice file must be less than 5MB');
            }
            if (!params1.mediaDuration || params1.mediaDuration > 60) {
                throw new Error('Voice recording must be 60 seconds or less');
            }
            if (!params1.modulationType) {
                throw new Error('Modulation type is required for voice posts');
            }
        }
        const now = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now();
        // Get genre color
        const genreColors = {
            'Confession': '#FF6B6B',
            'Motivation': '#6BCB77',
            'Love / Heartbreak': '#A66CFF',
            'Dark Thoughts': '#FF4C4C',
            'Friendship': '#4D96FF',
            'Life Advice': '#FFD93D',
            'Humor': '#FF9F1C',
            'Storytime': '#845EC2'
        };
        const postData = {
            id: '',
            userId,
            genre: params1.genre,
            genreColor: genreColors[params1.genre] || '#8b5cf6',
            modulationType: params1.type === 'voice' ? params1.modulationType || 'original' : null,
            audioUrl: null,
            text: params1.type === 'text' ? params1.content : null,
            duration: params1.type === 'voice' ? params1.mediaDuration || 0 : 0,
            reported: false,
            reports: [],
            authorUsername: userData.username,
            authorAvatarUrl: userData.avatarUrl,
            type: params1.type,
            content: params1.type === 'text' ? params1.content : null,
            mediaUrl: null,
            mediaDuration: params1.type === 'voice' ? params1.mediaDuration : null,
            mediaMimeType: null,
            waveform: null,
            status: 'active',
            likesCount: 0,
            commentsCount: 0,
            createdAt: now,
            updatedAt: now,
            isEdited: false
        };
        // Handle voice post
        if (params1.type === 'voice' && params1.mediaBlob) {
            // Upload audio file
            const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStorageInstance"])();
            if (!storage) {
                throw new Error('Storage not initialized');
            }
            const postId = db.collection('posts').doc().id;
            const storagePath = `voice-posts/${userId}/${postId}.webm`;
            const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(storage, storagePath);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, params1.mediaBlob);
            const mediaUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
            // Generate waveform
            const waveform = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$waveform$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateWaveformFromBlob"])(params1.mediaBlob, 100);
            postData.mediaUrl = mediaUrl;
            postData.audioUrl = mediaUrl; // Also set audioUrl for new data model
            postData.mediaDuration = params1.mediaDuration;
            postData.duration = params1.mediaDuration; // Also set duration for new data model
            postData.mediaMimeType = params1.mediaMimeType || 'audio/webm';
            postData.waveform = waveform;
            postData.id = postId;
            // Create post document
            await db.collection('posts').doc(postId).set(postData);
            return {
                success: true,
                postId
            };
        } else {
            // Text post
            const postRef = db.collection('posts').doc();
            postData.id = postRef.id;
            await postRef.set(postData);
            return {
                success: true,
                postId: postRef.id
            };
        }
    } catch (error) {
        console.error('[Server] Error creating post:', error);
        throw error;
    }
}
async function editPost(userId, params1) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const postRef = db.collection('posts').doc(params1.postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) {
            throw new Error('Post not found');
        }
        const postData = postDoc.data();
        // Verify ownership
        if (postData.userId !== userId) {
            throw new Error('Unauthorized: You can only edit your own posts');
        }
        const updateData = {
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now(),
            isEdited: true
        };
        // Update text content (for text posts or voice captions)
        if (params1.text !== undefined || params1.content !== undefined) {
            const textContent = params1.text || params1.content;
            if (!textContent?.trim()) {
                throw new Error('Content cannot be empty');
            }
            updateData.text = textContent;
            updateData.content = textContent; // Keep for backward compatibility
        }
        // Update genre
        if (params1.genre) {
            const genreColors = {
                'Confession': '#FF6B6B',
                'Motivation': '#6BCB77',
                'Love / Heartbreak': '#A66CFF',
                'Dark Thoughts': '#FF4C4C',
                'Friendship': '#4D96FF',
                'Life Advice': '#FFD93D',
                'Humor': '#FF9F1C',
                'Storytime': '#845EC2'
            };
            updateData.genre = params1.genre;
            updateData.genreColor = genreColors[params1.genre] || '#8b5cf6';
        }
        // Update modulation for voice posts (requires re-processing)
        if (params1.modulationType && postData.type === 'voice') {
            if (params1.mediaBlob) {
                // Re-process audio with new modulation
                const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStorageInstance"])();
                if (!storage) {
                    throw new Error('Storage not initialized');
                }
                const storagePath = `voice-posts/${userId}/${params1.postId}.webm`;
                const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(storage, storagePath);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, params1.mediaBlob);
                const audioUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
                // Generate new waveform
                const waveform = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$waveform$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateWaveformFromBlob"])(params1.mediaBlob, 100);
                updateData.audioUrl = audioUrl;
                updateData.mediaUrl = audioUrl; // Keep for backward compatibility
                updateData.waveform = waveform;
            }
            updateData.modulationType = params1.modulationType;
        }
        // Update post
        await postRef.update(updateData);
        return {
            success: true
        };
    } catch (error) {
        console.error('[Server] Error editing post:', error);
        throw error;
    }
}
async function editTextPost(userId, params1) {
    return editPost(userId, {
        ...params1,
        text: params1.content
    });
}
async function deletePost(userId, postId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) {
            throw new Error('Post not found');
        }
        const postData = postDoc.data();
        // Verify ownership or admin
        const userIsAdmin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])(userId);
        if (postData.userId !== userId && !userIsAdmin) {
            throw new Error('Unauthorized');
        }
        // Delete audio file from storage if voice post
        if (postData.type === 'voice' && postData.audioUrl) {
            try {
                const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStorageInstance"])();
                if (storage) {
                    // Extract path from URL or use standard path
                    const storagePath = `voice-posts/${postData.userId}/${params.postId}.webm`;
                    const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$storage$40$0$2e$14$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$6$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(storage, storagePath);
                // Note: Firebase Admin SDK needed for delete, but we can mark for deletion
                // For now, we'll rely on Storage rules and manual cleanup
                }
            } catch (storageError) {
                console.error('[Server] Error deleting audio file:', storageError);
            // Continue with post deletion even if storage deletion fails
            }
        }
        // Delete post document
        await postRef.delete();
        return {
            success: true
        };
    } catch (error) {
        console.error('[Server] Error deleting post:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPost,
    createPostWithAuth,
    editPost,
    editTextPost,
    deletePost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPost, "40d8f08f5ec8ef5b83103f2a59af177616b3225c73", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPostWithAuth, "60e4026df2b0c96448d5a08a5843ed5671440f7338", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(editPost, "60b58bf21cb64e9896a4ba3b5c12273fe312b380da", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(editTextPost, "6011a687f959c5c37b66a8f6d64e14379a08935892", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePost, "6017dcfb18c083f3a87ffc816394aeb0d27e19a962", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5":"toggleLike"},"",""] */ __turbopack_context__.s([
    "toggleLike",
    ()=>toggleLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function toggleLike(userId, postId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Check if already liked
        const likeRef = db.collection('posts').doc(postId).collection('likes').doc(userId);
        const likeDoc = await likeRef.get();
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) {
            throw new Error('Post not found');
        }
        const isLiked = likeDoc.exists;
        if (isLiked) {
            // Unlike: remove like document and decrement count
            await likeRef.delete();
            await postRef.update({
                likesCount: (postDoc.data().likesCount || 0) - 1
            });
            return {
                success: true,
                liked: false
            };
        } else {
            // Like: add like document and increment count
            await likeRef.set({
                createdAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now()
            });
            await postRef.update({
                likesCount: (postDoc.data().likesCount || 0) + 1
            });
            return {
                success: true,
                liked: true
            };
        }
    } catch (error) {
        console.error('[Server] Error toggling like:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    toggleLike
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleLike, "60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"402a3d7b44117f7b1904a6ecf7b900a80a37325b28":"getUserByUsername","409a305868c91c056c47855eb2f61b961143d8ec48":"updateUserProfile","40bdaa920bc5d20a9cee1773e4110081119cc55204":"createUsername"},"",""] */ __turbopack_context__.s([
    "createUsername",
    ()=>createUsername,
    "getUserByUsername",
    ()=>getUserByUsername,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function createUsername(params) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Validate username
        const usernameLower = params.username.toLowerCase().trim();
        if (!usernameLower || usernameLower.length < 3) {
            throw new Error('Username must be at least 3 characters');
        }
        if (usernameLower.length > 20) {
            throw new Error('Username must be less than 20 characters');
        }
        if (!/^[a-z0-9_]+$/.test(usernameLower)) {
            throw new Error('Username can only contain letters, numbers, and underscores');
        }
        // Check if username is already taken
        const usernameDoc = await db.collection('usernames').doc(usernameLower).get();
        if (usernameDoc.exists) {
            const existingUid = usernameDoc.data().uid;
            if (existingUid !== params.userId) {
                throw new Error('Username is already taken');
            }
        // Same user, allow update
        }
        // Get existing user data
        const userDoc = await db.collection('users').doc(params.userId).get();
        const existingUsername = userDoc.exists ? userDoc.data()?.usernameLower : null;
        // Update usernames collection
        await db.collection('usernames').doc(usernameLower).set({
            uid: params.userId
        });
        // If user had a different username, remove old entry
        if (existingUsername && existingUsername !== usernameLower) {
            await db.collection('usernames').doc(existingUsername).delete();
        }
        // Update user document
        const userData = {
            username: params.username,
            usernameLower,
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now()
        };
        if (!userDoc.exists) {
            // Create new user document
            userData.uid = params.userId;
            userData.role = 'user';
            userData.status = 'active';
            userData.avatarUrl = '';
            userData.bio = '';
            userData.createdAt = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now();
        }
        await db.collection('users').doc(params.userId).set(userData, {
            merge: true
        });
        return {
            success: true,
            username: params.username
        };
    } catch (error) {
        console.error('[Server] Error creating username:', error);
        throw error;
    }
}
async function updateUserProfile(params) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const updates = {
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now()
        };
        if (typeof params.avatar !== 'undefined') {
            updates.avatar = params.avatar;
        }
        if (typeof params.bio !== 'undefined') {
            updates.bio = params.bio;
        }
        await db.collection('users').doc(params.userId).set(updates, {
            merge: true
        });
        const userDoc = await db.collection('users').doc(params.userId).get();
        const data = userDoc.data() || {};
        const safeUser = {
            uid: params.userId,
            username: data.username ?? '',
            usernameLower: data.usernameLower ?? '',
            bio: data.bio ?? '',
            avatar: data.avatar ?? '',
            avatarUrl: data.avatarUrl ?? '',
            role: data.role ?? 'user',
            status: data.status ?? 'active'
        };
        return {
            success: true,
            user: safeUser
        };
    } catch (error) {
        console.error('[Server] Error updating user profile:', error);
        throw error;
    }
}
async function getUserByUsername(username) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        const usernameLower = username.toLowerCase();
        const usernameDoc = await db.collection('usernames').doc(usernameLower).get();
        if (!usernameDoc.exists) {
            return null;
        }
        const uid = usernameDoc.data().uid;
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return null;
        }
        return {
            uid,
            ...userDoc.data()
        };
    } catch (error) {
        console.error('[Server] Error getting user by username:', error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createUsername,
    updateUserProfile,
    getUserByUsername
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUsername, "40bdaa920bc5d20a9cee1773e4110081119cc55204", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserProfile, "409a305868c91c056c47855eb2f61b961143d8ec48", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserByUsername, "402a3d7b44117f7b1904a6ecf7b900a80a37325b28", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4042c7f6066b206e0590f3129fba0273d94a6411d5":"addComment","404d910a566286892204be87060f5c27cd920fa2ec":"getPostComments"},"",""] */ __turbopack_context__.s([
    "addComment",
    ()=>addComment,
    "getPostComments",
    ()=>getPostComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
/**
 * Convert Firestore Timestamp objects to plain JavaScript values
 * This is necessary because Timestamps can't be serialized when passing from server to client
 */ function serializeTimestamp(value) {
    // Check if it's a Firestore Timestamp
    if (value && typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function') {
        return value.toDate().toISOString();
    }
    // Check if it's a Timestamp-like object with _seconds
    if (value && typeof value === 'object' && '_seconds' in value) {
        const seconds = value._seconds || 0;
        const nanoseconds = value._nanoseconds || 0;
        return new Date(seconds * 1000 + nanoseconds / 1000000).toISOString();
    }
    return value;
}
/**
 * Recursively serialize all Timestamp objects in a data object
 */ function serializeCommentData(data) {
    if (data === null || data === undefined) {
        return data;
    }
    if (Array.isArray(data)) {
        return data.map((item)=>serializeCommentData(item));
    }
    if (typeof data === 'object') {
        const serialized = {};
        for (const [key, value] of Object.entries(data)){
            // Special handling for timestamp fields
            if (key === 'createdAt' || key === 'updatedAt') {
                serialized[key] = serializeTimestamp(value);
            } else if (typeof value === 'object' && value !== null) {
                serialized[key] = serializeCommentData(value);
            } else {
                serialized[key] = value;
            }
        }
        return serialized;
    }
    return data;
}
async function addComment(params) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Check if user is shadowbanned
        const shadowbanned = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isShadowbanned"])(params.userId);
        if (shadowbanned) {
        // Shadowbanned users can comment, but comments won't appear to others
        // We'll handle this in the comments query
        }
        // Get user data for denormalization
        const userDoc = await db.collection('users').doc(params.userId).get();
        if (!userDoc.exists) {
            throw new Error('User not found');
        }
        const userData = userDoc.data();
        // Validate content
        if (!params.content?.trim()) {
            throw new Error('Comment content is required');
        }
        // Check if post exists
        const postRef = db.collection('posts').doc(params.postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) {
            throw new Error('Post not found');
        }
        const postData = postDoc.data();
        if (postData.status !== 'active') {
            throw new Error('Cannot comment on this post');
        }
        // Add comment to subcollection
        const commentRef = postRef.collection('comments').doc();
        await commentRef.set({
            userId: params.userId,
            authorUsername: userData.username || 'Anonymous',
            authorAvatarUrl: userData.avatarUrl || '',
            content: params.content.trim(),
            createdAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now(),
            status: 'active'
        });
        // Increment comment count
        await postRef.update({
            commentsCount: (postData.commentsCount || 0) + 1
        });
        return {
            success: true,
            commentId: commentRef.id
        };
    } catch (error) {
        console.error('[Server] Error adding comment:', error);
        throw error;
    }
}
async function getPostComments(postId) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Get all users and identify shadowbanned ones
        // Users without a status field or with status 'active' are considered active
        const allUsersSnapshot = await db.collection('users').get();
        const shadowbannedUserIds = new Set(allUsersSnapshot.docs.filter((doc)=>{
            const userData = doc.data();
            return userData.status === 'shadowbanned';
        }).map((doc)=>doc.id));
        // Get comments
        const commentsSnapshot = await db.collection('posts').doc(postId).collection('comments').where('status', '==', 'active').orderBy('createdAt', 'desc').get();
        // Filter out shadowbanned users
        const comments = commentsSnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            })).filter((comment)=>{
            // Only show comments from active (non-shadowbanned) users
            return !shadowbannedUserIds.has(comment.userId);
        });
        // Serialize all comments to convert Timestamps to plain values
        return comments.map((comment)=>serializeCommentData(comment));
    } catch (error) {
        console.error('[Server] Error getting comments:', error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addComment,
    getPostComments
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addComment, "4042c7f6066b206e0590f3129fba0273d94a6411d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPostComments, "404d910a566286892204be87060f5c27cd920fa2ec", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"7084916c377494247151cef281f503624be26e963c":"reportPost"},"",""] */ __turbopack_context__.s([
    "reportPost",
    ()=>reportPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function reportPost(postId, userId, reason) {
    try {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminDb"])();
        // Check if post exists
        const postDoc = await db.collection('posts').doc(postId).get();
        if (!postDoc.exists) {
            throw new Error('Post not found');
        }
        const postData = postDoc.data();
        // Check if user already reported this post
        const existingReport = postData.reports?.find((r)=>r.userId === userId);
        if (existingReport) {
            throw new Error('You have already reported this post');
        }
        // Append to reports array and set reported = true
        const reports = postData.reports || [];
        reports.push({
            type: reason,
            userId,
            createdAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["Timestamp"].now()
        });
        await db.collection('posts').doc(postId).update({
            reported: true,
            reports
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('[Server] Error reporting post:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    reportPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reportPost, "7084916c377494247151cef281f503624be26e963c", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/.next-internal/server/app/profile/[uid]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/anonymous-social-platform/.next-internal/server/app/profile/[uid]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "4042c7f6066b206e0590f3129fba0273d94a6411d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addComment"],
    "404d910a566286892204be87060f5c27cd920fa2ec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostComments"],
    "404e2f9d30ac88c6aa4f751cc2e3e34fba950b303b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserPosts"],
    "409a305868c91c056c47855eb2f61b961143d8ec48",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserProfile"],
    "40bdaa920bc5d20a9cee1773e4110081119cc55204",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUsername"],
    "6017dcfb18c083f3a87ffc816394aeb0d27e19a962",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePost"],
    "60bf1b3d64d6019825add7bb8b1aed3cc61d5540b5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleLike"],
    "7084916c377494247151cef281f503624be26e963c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportPost"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f2e$next$2d$internal$2f$server$2f$app$2f$profile$2f5b$uid$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Downloads/anonymous-social-platform/.next-internal/server/app/profile/[uid]/page/actions.js { ACTIONS_MODULE0 => "[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/feed.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/likes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/comments.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/anonymous-social-platform/app/actions/reports.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f2e$next$2d$internal$2f$server$2f$app$2f$profile$2f5b$uid$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f2e$next$2d$internal$2f$server$2f$app$2f$profile$2f5b$uid$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$anonymous$2d$social$2d$platform$2f$app$2f$actions$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3cb5eaf7._.js.map