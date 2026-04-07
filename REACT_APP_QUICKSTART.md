# Canton Goodfellows React App - Quick Start

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment (Optional - Firebase)
If you want to integrate with Firebase for data persistence:

```bash
cp .env.example .env.local
```

Then add your Firebase credentials to `.env.local`:
```
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
...
```

### 3. Start Development Server
```bash
npm start
```

The app opens automatically at `http://localhost:3000`

---

## 📱 App Features

### Home Screen
- Click any portal card to navigate to that section
- Application portal shows if applications are currently open (Oct 1 - Nov 15)
- Stats display families and children in the program

### Apply for Assistance (5-Step Form)
1. Enter family information
2. Add child details
3. Create wish lists
4. Upload documents
5. Review and submit

**Progress is tracked with a visual progress bar and step indicators.**

### Admin Dashboard
- View all applications with filtering
- See statistics (submitted, approved, denied)
- Click on any application to review details

### Sponsor a Child
- Browse available children
- View their interests and age
- Click to sponsor and see suggested gift ideas

### Check Application Status
- Enter email address
- Instantly see application status (submitted, under-review, approved, denied)

### About Page
- Learn the program's mission and history
- View board contact information

### Get Involved
- Learn how to sponsor children
- Find volunteer opportunities
- Make donations
- Set up Kroger Community Rewards (ID: 62754)

---

## 🎯 Key Features

✅ **Mobile Responsive** - Works perfectly on phones and tablets
✅ **5-Step Application Form** - Easy-to-use family assistance application
✅ **Admin Dashboard** - For Goodfellows board members to review applications
✅ **Sponsor Browsing** - Donors can sponsor individual children
✅ **Status Tracking** - Families can check their application status
✅ **Application Window Logic** - Automatically opens Oct 1 - Nov 15
✅ **Firebase Ready** - Optional cloud database integration

---

## 🛠️ Available Scripts

```bash
# Start development server (port 3000)
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject configuration (irreversible)
npm run eject
```

---

## 📂 Main Screens

| Screen | Route | Purpose |
|--------|-------|---------|
| Home | `/` | Navigation hub |
| Application Form | `/apply/step1` | 5-step family assistance form |
| About | `/about` | Program information |
| Get Involved | `/involved` | Volunteer & donation info |
| Admin Dashboard | `/admin` | Application review (admin only) |
| Sponsor | `/sponsor` | Sponsor a child |
| Status Check | `/status-check` | Check application status |
| Closed | `/closed` | Shown when apps not open |

---

## 🎨 Customization

### Change Application Window
Edit `src/components/Home.tsx`:
```typescript
const OPEN_MONTH = 9;   // October (change for different month)
const OPEN_DAY = 1;     // 1st
const CLOSE_MONTH = 10; // November
const CLOSE_DAY = 15;   // 15th
```

### Modify Colors
Edit `src/App.css` CSS variables:
```css
:root {
  --navy: #1a2a4a;      /* Primary color */
  --red: #c0392b;       /* Accents */
  --green: #1a7a4a;     /* Success states */
  ...
}
```

---

## 🔗 Firebase Integration (Optional)

The app includes Firebase Firestore integration for cloud data storage.

To enable:
1. Create a Firebase project at https://console.firebase.google.com
2. Create a Firestore Database
3. Copy credentials to `.env.local`
4. Use `firestoreService` methods:

```typescript
import firestoreService from './services/firestoreService';

// Add application
const id = await firestoreService.add('applications', {
  familyName: 'Smith',
  email: 'user@email.com',
  status: 'submitted'
});

// Get applications
const apps = await firestoreService.getCollection('applications');

// Update status
await firestoreService.update('applications', id, {
  status: 'approved'
});
```

---

## 📱 Mobile Testing

### iPhone Size
- Desktop: Cmd+Shift+I (inspect)
- Toggle device toolbar
- Select "iPhone 12" or similar

### Responsive View
- Width: 375px (mobile)
- Width: 768px (tablet)
- Width: 1024px+ (desktop)

---

## 💡 Tips

- **Form State**: Form data persists in memory during session
- **Admin Access**: Use `/admin` route to access dashboard
- **Mock Data**: Sponsor section uses mock child data for demo
- **Responsive**: App automatically adapts to screen size
- **Fonts**: Uses Google Fonts (Merriweather + Open Sans)

---

## ❓ Common Questions

**Q: Where is data saved?**
A: Currently in browser memory (session only). Add `.env.local` with Firebase credentials to enable cloud storage.

**Q: How do I add more children to sponsor?**
A: Edit `src/pages/SponsorSection.tsx` and add to `MOCK_CHILDREN` array.

**Q: Can I change the application window?**
A: Yes, edit the month/day values in `src/components/Home.tsx`

**Q: How do I deploy this?**
A: Run `npm run build` then deploy the `build/` folder to your hosting (Firebase, Vercel, Netlify, etc.)

---

## 📞 Support

**Canton Goodfellows**
- Phone: (734) 664-1044
- Email: cantongoodfellows@gmail.com

---

**Status**: ✅ Ready to Use
**Last Updated**: April 7, 2026
