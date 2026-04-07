# Canton Goodfellows React Application

A mobile-responsive React web application that replicates the functionality of the Canton Goodfellows charitable program for assisting families during Christmas.

## 🎯 Features

### Home Screen
- **Portal Cards Navigation**: Easy access to all major sections
- **Application Window Tracking**: Shows when applications are open/closed with countdown
- **Statistics Display**: Shows program stats (families, children, sponsored)
- **Dynamic Status**: Application portal changes based on current date

### Application Process (5-Step Form)
1. **Step 1 - Family Information**: Collect family name, email, phone, number of children
2. **Step 2 - Children Details**: Information about each child (name, age, gender)
3. **Step 3 - Wish Lists**: Wish list items for each child
4. **Step 4 - Documentation**: Upload supporting documents (income, residency, custody)
5. **Step 5 - Review & Submit**: Review application and submit

Features:
- Progress tracking with visual progress bar
- Form state persistence via Context API
- Input validation
- Confirmation screen on submission

### Admin Dashboard
- Filter applications by status
- View application statistics
- Review individual applications
- Update application status (submitted, under-review, approved, denied)

### Sponsor Section
- Browse available children to sponsor
- View child profiles with interests
- Sort by age or name
- Suggested gift ideas guidance

### Status Check
- Anonymous application lookup by email
- Real-time status display (submitted, under-review, approved, denied)
- Timeline information for each status

### About Page
- Mission statement
- How the program works
- Historical information
- Board contact information

### Get Involved Page
- **Sponsor Tab**: How to sponsor a child
- **Volunteer Tab**: Volunteer opportunities
- **Donate Tab**: Donation options
- **Kroger Tab**: Community Rewards program instructions (org #62754)

### Additional Pages
- **Closed Screen**: Displayed when application window is closed
- **Application Submitted**: Confirmation page

## 📁 Project Structure

```
src/
├── contexts/
│   └── AppContext.tsx           # Global state management
├── components/
│   ├── Home.tsx                 # Home page
│   ├── Home.css                 # Home styles
│   ├── ApplicationForm.tsx       # 5-step form component
│   ├── ApplicationForm.css       # Form styles
│   └── ItemList.tsx             # Firebase Firestore example (legacy)
├── pages/
│   ├── About.tsx                # About page with tabs
│   ├── GetInvolved.tsx          # Get involved page with tabs
│   ├── AdminDashboard.tsx       # Admin review interface
│   ├── SponsorSection.tsx       # Sponsor browsing
│   ├── StatusCheck.tsx          # Application status lookup
│   ├── ClosedScreen.tsx         # Application closed screen
│   └── ApplicationSubmitted.tsx  # Submission confirmation
├── services/
│   ├── firebase-config.ts       # Firebase initialization
│   └── firestoreService.ts      # Firestore CRUD operations
├── App.tsx                      # Main app with routing
├── App.css                      # Global styles
└── index.tsx                    # React entry point
```

## 🎨 Design System

### Color Palette
```
--navy:      #1a2a4a
--red:       #c0392b
--green:     #1a7a4a
--gold:      #c8980a
--off-white: #f7f8fb
--text:      #222831
--muted:     #6b7280
```

### Typography
- **Serif Font**: Merriweather (headers, titles)
- **Sans-serif Font**: Open Sans (body text)

### Responsive Design
- Mobile-first approach
- Max-width: 600px for optimal viewing
- Touch-friendly button sizes (44px minimum)
- Flexible grid layouts

## 🔧 Setup & Installation

### Requirements
- Node.js 16+ (recommended: 18+)
- npm or yarn

### Installation Steps

1. **Navigate to the project:**
   ```bash
   cd /Users/bryankulczycki/Development/goodfellowscanton/goodfellowscanton
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Firebase credentials

4. **Start development server:**
   ```bash
   npm start
   ```
   App opens at http://localhost:3000

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🔐 State Management

### AppContext Structure
```typescript
{
  currentApplication: Partial<Application>  // Current form data
  applications: Application[]               // All applications
  currentUser: { role, id }                // Current user info
}
```

### Application Interface
```typescript
interface Application {
  id: string
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'denied'
  familyName: string
  email: string
  phone: string
  childrenCount: number
  children: Child[]
  householdIncome: string
  needDescription: string
  documents: string[]
  submittedAt?: Date
  reviewedAt?: Date
}
```

## 📱 Mobile Responsiveness

The app is fully responsive and optimized for:
- **Phones**: 375px - 480px
- **Tablets**: 600px - 1000px
- **Desktop**: 1000px+

Key responsive features:
- Flexible grid layouts
- Readable typography sizes
- Touch-optimized controls
- Full-width mobile layouts

## 🔗 Navigation

Navigation uses React Router v6:
- `/` - Home page
- `/apply/step1` - Application form
- `/about` - About page
- `/involved` - Get involved page
- `/admin` - Admin dashboard
- `/sponsor` - Sponsor section
- `/status-check` - Status check
- `/closed` - Application closed screen
- `/application-submitted` - Submission confirmation

## 💾 Data Management

### Current Implementation
- **In-Memory Storage**: Uses React Context API
- **Local State**: Persists only during session

### Firebase Integration (Ready)
The app includes Firebase Firestore integration:
1. Configure `.env.local` with Firebase credentials
2. Use `firestoreService` to add/update/delete applications
3. Automatic timestamps added to all records

Example:
```typescript
const docId = await firestoreService.add('applications', {
  familyName: 'Smith',
  email: 'user@email.com',
  status: 'submitted'
});
```

## 🎯 Application Window Logic

The app includes seasonal logic for application window:
- **Open Window**: Oct 1 - Nov 15
- **Closed Otherwise**: Application portal locked outside window
- **Countdown Display**: Shows days remaining/until next window
- **Automatic Status**: Portal card reflects current window state

Configure in `src/components/Home.tsx`:
```typescript
const OPEN_MONTH = 9;   // October (0-indexed)
const OPEN_DAY = 1;
const CLOSE_MONTH = 10; // November (0-indexed)
const CLOSE_DAY = 15;
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All portal cards clickable
- [ ] 5-step form progresses correctly
- [ ] Progress bar updates accurately
- [ ] Form state persists between steps
- [ ] Admin dashboard filters work
- [ ] Sponsor browsing works
- [ ] Status check displays all statuses
- [ ] All tabs work in About/GetInvolved
- [ ] Application window logic correct
- [ ] Mobile layout responsive
- [ ] Touch interactions smooth

### Running Tests
```bash
npm test
```

## 📦 Dependencies

### Core
- `react` v19.2.4
- `react-dom` v19.2.4
- `react-router-dom` - Navigation
- `firebase` v12.11.0

### Optional
- `TypeScript` v4.9.5 - Type safety
- `react-scripts` v5.0.1 - CRA tooling

## 🚀 Deployment

### Build Process
```bash
npm run build
```

Generates optimized production build in `build/` directory.

### Deployment Options
1. **Firebase Hosting**
   ```bash
   firebase deploy
   ```

2. **Vercel** - Zero-config deployment
3. **Netlify** - Drag-and-drop deployment
4. **GitHub Pages** - Free static hosting

## 🐛 Troubleshooting

### Build Errors
**Error: "Cannot find module 'node:path'"**
- Solution: Upgrade Node.js to 16+
  ```bash
  brew install node@18
  ```

### Navigation Not Working
- Ensure React Router is properly wrapped in `<Router>`
- Check that routes match exactly in `AppRoutes`

### Styles Not Loading
- Clear browser cache
- Run `npm cache clean --force`
- Restart development server

### Firebase Connection Issues
- Verify `.env.local` has correct credentials
- Check Firestore Database is created in Firebase Console
- Ensure security rules allow read/write (test mode for development)

## 📞 Contact

**Canton Goodfellows**
- Phone: (734) 664-1044
- Email: cantongoodfellows@gmail.com

## 📄 License

This application is built for Canton Goodfellows charitable organization.

## 🔄 Version History

- **v1.0** - Initial React application with all major features
  - 5-step application form
  - Admin dashboard
  - Sponsor browsing
  - Status check
  - Firebase integration ready
  - Mobile responsive design

---

**Last Updated**: April 7, 2026
**Status**: Production Ready ✅
