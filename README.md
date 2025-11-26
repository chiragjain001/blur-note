# Benaam Baatein - Anonymous Social Platform

A modern, production-ready anonymous social platform built with Next.js, Firebase, and Tailwind CSS. Share feelings, confessions, and stories through voice or text while maintaining complete anonymity.

## Features

- **Anonymous Posting**: Share without revealing your identity
- **Voice Posts with Filters**: Record voice notes with real-time modulation (6 filters)
- **Text Posts**: Share thoughts with beautiful formatting
- **Real-time Reactions**: Like posts instantly
- **Comments System**: Engage with the community
- **User Profiles**: View posts from specific users
- **Dark/Light Mode**: Seamless theme switching
- **Privacy-First**: All data encrypted and protected with Firestore security rules
- **Mobile Responsive**: Fully optimized for all devices

## Tech Stack

- **Frontend**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4
- **Authentication**: Firebase Auth (Google Sign-In)
- **Database**: Firestore (NoSQL) with Firebase Admin SDK
- **Storage**: Firebase Storage
- **Hosting**: Vercel
- **Audio Processing**: MediaRecorder API (audio/webm)
- **Waveform**: wavesurfer.js with precomputed waveforms

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase Project (Free tier)
- Vercel Account (optional for deployment)

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd benaam-baatein
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Firestore Database (Start in test mode for development)
   - Enable Firebase Storage
   - Enable Google Authentication

4. **Get Firebase Credentials**
   - In Firebase Console, go to Project Settings
   - Copy your Web App credentials
   - Create `.env.local` file and add:
   \`\`\`
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # For server-side operations (Firebase Admin)
   # Option 1: Service Account Key (recommended for production)
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
   
   # Option 2: Use default credentials (for local dev with gcloud CLI)
   # Run: gcloud auth application-default login
   \`\`\`

5. **Set Up Firebase Admin (Server-Side)**
   - For production: Go to Firebase Console → Project Settings → Service Accounts
   - Generate new private key and add to `.env.local` as `FIREBASE_SERVICE_ACCOUNT_KEY`
   - For local development: Use `gcloud auth application-default login`

6. **Set Up Firestore Security Rules**
   - In Firebase Console, go to Firestore → Rules
   - Replace with rules from `firestore.rules`:
   ```rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow anyone to read posts and comments
       match /posts/{document=**} {
         allow read;
         allow create: if request.auth != null;
         allow update, delete: if request.auth.uid == resource.data.authorUid;
       }
       
       match /comments/{document=**} {
         allow read;
         allow create: if request.auth != null;
         allow update, delete: if request.auth.uid == resource.data.authorUid;
       }
       
       // User documents
       match /users/{uid} {
         allow read;
         allow write: if request.auth.uid == uid;
         
         // User's likes subcollection
         match /likes/{postId} {
           allow read, write: if request.auth.uid == uid;
         }
       }
       
       // Reports collection
       match /reports/{document=**} {
         allow create: if request.auth != null;
         allow read, write: if request.auth.uid == resource.data.reportingUid;
       }
     }
   }
   \`\`\`

7. **Deploy Firestore Indexes**
   - Run: `firebase deploy --only firestore:indexes`
   - Or manually create indexes in Firebase Console

8. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
benaam-baatein/
├── app/
│   ├── layout.tsx              # Root layout with theme setup
│   ├── page.tsx                # Landing page
│   ├── app/
│   │   ├── layout.tsx          # App layout
│   │   └── page.tsx            # Main feed
│   └── profile/[uid]/
│       └── page.tsx            # User profile page
├── components/
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   ├── animated-background.tsx # Hero background animation
│   └── app/
│       ├── header.tsx          # App header
│       ├── feed.tsx            # Main feed component
│       ├── post-card.tsx       # Individual post card
│       ├── floating-create-button.tsx  # FAB for creating posts
│       ├── create-post-modal.tsx       # Create post interface
│       ├── voice-recorder.tsx          # Voice recording UI
│       ├── login-modal.tsx             # Authentication modal
│       └── comments-modal.tsx          # Comments interface
├── lib/
│   ├── firebase.ts             # Firebase initialization
│   ├── auth-context.tsx        # Authentication provider
│   ├── auth-service.ts         # Auth functions
│   ├── firestore-utils.ts      # Firestore operations
│   ├── storage-utils.ts        # File upload functions
│   └── audio-processor.ts      # Audio processing engine
├── hooks/
│   └── use-audio-recorder.ts   # Audio recording hook
├── globals.css                 # Tailwind and theme styles
├── package.json
└── README.md
\`\`\`

## Database Schema

### Collections

#### Users
\`\`\`
users/{uid}
├── uid: string
├── displayName: string
├── photoURL: string
├── createdAt: timestamp
└── likes/            (subcollection)
    └── {postId}     (documents for liked posts)
\`\`\`

#### Posts
\`\`\`
posts/{postId}
├── type: 'text' | 'voice'
├── content: string
├── authorUid: string
├── authorName: string (denormalized)
├── authorPhoto: string (denormalized)
├── voiceURL?: string
├── voiceFilter?: string
├── duration?: string
├── likeCount: number
├── commentCount: number
├── reportCount: number
└── createdAt: timestamp
\`\`\`

#### Comments
\`\`\`
comments/{commentId}
├── postId: string
├── authorUid: string
├── authorName: string (denormalized)
├── content: string
└── createdAt: timestamp
\`\`\`

#### Reports
\`\`\`
reports/{reportId}
├── postId: string
├── reportingUid: string
├── reason: string
└── createdAt: timestamp
\`\`\`

## Voice Modulation Filters

- **Original**: No modification
- **Deep**: Lowers pitch for deeper voice effect
- **Robot**: Applies bit crushing for robotic sound
- **Echo**: Adds echo effect with delay
- **Whisper**: Reduces amplitude for whisper effect
- **Chipmunk**: Raises pitch for chipmunk effect

## Cost Breakdown (Free Tier)

- **Hosting**: Vercel (Free tier)
- **Database**: Firestore (50k reads/20k writes per day)
- **Storage**: Firebase Storage (5GB)
- **Authentication**: Firebase Auth (50k MAU)
- **Total Monthly Cost**: $0

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import project
4. Add environment variables
5. Deploy

\`\`\`bash
npm run build
npm start
\`\`\`

## Performance Optimizations

- **Snap scrolling** for smooth feed navigation
- **Image lazy loading** for fast page loads
- **Client-side audio processing** for zero server costs
- **Firestore denormalization** to minimize reads
- **Smart caching** with localStorage for likes
- **Code splitting** for faster initial load
- **CDN caching** via Vercel Edge Network

## Security Features

- **Firestore Security Rules** for data protection
- **XSS Protection** with content sanitization
- **User authentication** with Google OAuth
- **Row Level Security** for private data
- **Anonymous user support** for browsing
- **Report system** for community moderation

## Future Enhancements

- [ ] Comments with nested replies
- [ ] Search and filtering system
- [ ] Hashtags and trending topics
- [ ] User blocking and reporting improvements
- [ ] Notification system
- [ ] Direct messaging (anonymous)
- [ ] Mood-based feeds
- [ ] Advanced toxicity filtering
- [ ] Mobile app (React Native)
- [ ] Real-time push notifications

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project for any purpose.

## Support

For issues or questions:
- Open an issue on GitHub
- Visit our community forums
- Email: support@benaambaatein.com

## Acknowledgments

- Built with Next.js and Firebase
- Styled with Tailwind CSS
- Audio processing with Web Audio API
- Inspired by Gen-Z platforms like Fizz and Coverstar

---

Made with care for Gen-Z. Share your voice, stay anonymous.
