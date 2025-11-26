# Next Steps After Setting Up Firebase Admin

## ✅ What You've Done
- You have the Firebase Admin SDK service account key file: `whisplyy-firebase-adminsdk-fbsvc-51b5120366.json`
- The file is now in `.gitignore` (won't be committed to git)

## 🔒 Security Check
The service account key file is **sensitive** and should:
- ✅ Be in `.gitignore` (already done)
- ✅ Never be committed to git
- ✅ Never be shared publicly
- ✅ Only be used on your local machine or in secure server environments

## 📋 Next Steps

### 1. Verify the File is in the Right Place
The file `whisplyy-firebase-adminsdk-fbsvc-51b5120366.json` should be in your project root:
```
anonymous-social-platform/
├── whisplyy-firebase-adminsdk-fbsvc-51b5120366.json  ← Should be here
├── lib/
├── app/
├── components/
└── ...
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the project root (if you haven't already):

```bash
# Firebase Client SDK (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=whisplyy.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=whisplyy
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=whisplyy.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Note:** The service account key file will be automatically detected, so you don't need to add it to `.env.local` for local development.

### 3. Deploy Firestore Rules
Deploy your security rules to Firebase:

```bash
firebase deploy --only firestore:rules
```

### 4. Deploy Firestore Indexes
The indexes file was cleared. You need to create indexes as needed. For now, you can deploy:

```bash
firebase deploy --only firestore:indexes
```

Or manually create indexes in Firebase Console when you see errors.

### 5. Test the Setup
Start your development server:

```bash
pnpm dev
```

Try creating a post to test if Firebase Admin is working correctly.

### 6. Set Up Your First Admin User
To make yourself an admin, you can:

**Option A: Using Firebase Console**
1. Go to Firebase Console → Authentication → Users
2. Find your user UID
3. Go to Firebase Console → Functions (or use a script)
4. Set custom claims: `{ role: 'admin' }`

**Option B: Create a One-Time Script**
Create `scripts/set-admin.ts`:

```typescript
import { getAdminAuth } from '../lib/firebase-admin'

async function setAdmin(uid: string) {
  const auth = getAdminAuth()
  await auth.setCustomUserClaims(uid, { role: 'admin' })
  console.log(`User ${uid} is now an admin`)
}

// Replace with your user UID
setAdmin('YOUR_USER_UID')
```

Run it: `npx tsx scripts/set-admin.ts`

### 7. For Production (Vercel)
When deploying to Vercel, you have two options:

**Option A: Environment Variable (Recommended)**
1. In Vercel dashboard, go to Settings → Environment Variables
2. Add `FIREBASE_SERVICE_ACCOUNT_KEY` with the entire JSON content as a string
3. The code will automatically use it

**Option B: Vercel Secrets**
1. Store the service account key in Vercel Secrets
2. Reference it in your environment variables

## 🧪 Testing Checklist

- [ ] Development server starts without errors
- [ ] Can create a text post
- [ ] Can create a voice post (with 60s limit)
- [ ] Can like a post
- [ ] Can comment on a post
- [ ] Can view feed
- [ ] Username setup works after login

## 🐛 Troubleshooting

### Error: "Failed to initialize Firebase Admin"
- Check that the service account file exists in project root
- Verify the file name matches exactly
- Check that `NEXT_PUBLIC_FIREBASE_PROJECT_ID` is set correctly

### Error: "Permission denied"
- Make sure Firestore rules are deployed
- Verify the service account has proper permissions in Firebase Console

### Error: "Index not found"
- Create the required indexes in Firebase Console
- Or wait for Firebase to suggest them when you run queries

## 📚 Additional Resources

- [Firebase Admin SDK Docs](https://firebase.google.com/docs/admin/setup)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

