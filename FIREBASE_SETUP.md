# React + Firebase Firestore Setup

This project is a React application with Google Firebase Firestore database integration.

## Project Structure

```
src/
├── firebase-config.ts          # Firebase initialization
├── services/
│   └── firestoreService.ts    # Firestore database service layer
├── components/
│   ├── ItemList.tsx            # Example component using Firestore
│   └── ItemList.css            # Component styles
└── App.tsx                      # Main app component
```

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Follow the setup wizard to create your project
4. Enable Firestore Database:
   - In the left sidebar, go to "Build" > "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select your preferred region

### 2. Get Your Firebase Credentials

1. In Firebase Console, click the gear icon > "Project settings"
2. Go to the "General" tab
3. Scroll down to "Your apps" section
4. Click the web app (or create one if needed)
5. Copy your Firebase configuration

### 3. Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and paste your Firebase credentials:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### 4. Start the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Using Firestore Service

The `firestoreService` provides simple methods for database operations:

```typescript
import firestoreService from './services/firestoreService';

// Add a document
const docId = await firestoreService.add('items', {
  title: 'My Item',
  description: 'Item description',
});

// Get all documents from a collection
const items = await firestoreService.getCollection('items');

// Get a single document
const item = await firestoreService.getDoc('items', docId);

// Update a document
await firestoreService.update('items', docId, {
  title: 'Updated Title',
});

// Delete a document
await firestoreService.delete('items', docId);

// Query documents with conditions
import { where } from 'firebase/firestore';
const completed = await firestoreService.getDocumentsWhere('items', [
  where('completed', '==', true),
]);
```

## Features

- ✅ Firebase Firestore integration
- ✅ TypeScript support
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Query support with constraints
- ✅ Automatic timestamps (createdAt, updatedAt)
- ✅ Example component with full functionality

## Example Component

The `ItemList` component demonstrates:
- Fetching data from Firestore
- Adding new items
- Updating items (toggle completion)
- Deleting items
- Error handling
- Loading states

## Next Steps

1. Create more collections in Firestore
2. Create additional service methods as needed
3. Add authentication (see Firebase Auth docs)
4. Deploy to Firebase Hosting

## Useful Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [React Documentation](https://reactjs.org)
