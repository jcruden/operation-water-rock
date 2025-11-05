# Operation Water Rock

A terminal-style static website project built with plain HTML, CSS, and JavaScript. A hacker-themed game dashboard with role-based access, points system, and interactive dares.

## Project Structure

```
operation-water-rock/
├── index.html          # Login page with password authentication
├── dashboard.html      # Main dashboard with points and dares
├── admin.html          # Admin panel for managing content
├── css/
│   ├── style.css       # Terminal-style base styling
│   └── dashboard.css   # Dashboard-specific styles
├── js/
│   ├── app.js          # Login logic and authentication
│   ├── dashboard.js    # Dashboard functionality and interactions
│   ├── admin.js        # Admin panel logic
│   ├── firebase-config.js       # Firebase config (gitignored)
│   └── firebase-config.example.js # Firebase config template
├── data/
│   └── dares.json      # Dares data with riddles, hints, and answers
└── README.md           # This file
```

## Features

- **Role-based authentication** - Four roles: player1, player2, player3, admin
- **Terminal-style UI** - CRT aesthetic with green text, scanlines, and flicker effects
- **Interactive typewriter effect** - Animated text with moving cursor
- **Points system** - Earn/lose points through dare completion and interactions
- **Interactive dares** - Complete dares, request hints, submit answers
- **Dashboard** - Real-time UI updates, locked/unlocked controls, dare management
- **Firebase integration** - Real-time admin state synchronization
- **Responsive design** - Works on desktop and mobile devices
- **No build dependencies** - Pure HTML, CSS, and JavaScript (ES modules)

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd operation-water-rock
   ```

2. Open `index.html` in a web browser or use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if http-server is installed)
   npx http-server -p 8000
   ```

3. Navigate to `http://localhost:8000` in your browser

4. **Firebase Setup** (optional, for admin features):
   ```bash
   # Copy the example config file
   cp js/firebase-config.example.js js/firebase-config.js
   
   # Edit js/firebase-config.js and add your Firebase configuration
   ```

5. **Test credentials** (dev only):
   - `player1`, `player2`, `player3`, `admin` (password = role name)

6. **Unlock dashboard controls** (for testing):
   ```javascript
   localStorage.setItem('unlocked', 'true');
   ```

## Deployment to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch and root folder
4. Site will be available at `https://<username>.github.io/operation-water-rock/`

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript enabled.

## Firebase Setup

This project uses Firebase Firestore for real-time admin state synchronization. To set up:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Copy `js/firebase-config.example.js` to `js/firebase-config.js`
4. Add your Firebase configuration to `js/firebase-config.js`
5. Configure Firestore security rules as needed

**Note**: `firebase-config.js` is gitignored - never commit your actual Firebase config.

## What's Left to Do

- **Security**: Replace client-side passwords with server-backed authentication
- **Backend API**: Implement secure password validation, session management, JWT tokens
- **Database**: Move dares storage from JSON to database (Firestore integration started)
- **Admin Panel**: Complete admin interface for managing dares, users, and settings
- **Real-time Updates**: Complete Firebase integration for multiplayer features
- **Testing**: Add unit tests and integration tests

## License

MIT License - See LICENSE file for details

## Contributing

Contributions welcome! Please open an issue or submit a pull request.
