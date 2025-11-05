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
│   └── admin.js        # Admin panel logic
├── data/
│   └── dares.json      # Dares data with riddles, hints, and answers
└── README.md           # This file
```

## Features

- **Role-based authentication** - Four roles: player1, player2, player3, admin
- **Terminal-style UI** - CRT aesthetic with green text, scanlines, and flicker effects
- **Points system** - Earn/lose points through dare completion and interactions
- **Interactive dares** - Complete dares, request hints, submit answers
- **Dashboard** - Real-time UI updates, locked/unlocked controls, dare management
- **Responsive design** - Works on desktop and mobile devices
- **No dependencies** - Pure HTML, CSS, and JavaScript

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

4. **Test credentials** (dev only):
   - `player1`, `player2`, `player3`, `admin` (password = role name)

5. **Unlock dashboard controls** (for testing):
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

## What's Left to Do

- **Security**: Replace client-side passwords with server-backed authentication
- **Backend API**: Implement secure password validation, session management, JWT tokens
- **Database**: Move dares storage from JSON to database
- **Admin Panel**: Complete admin interface for managing dares, users, and settings
- **Real-time Updates**: WebSocket support for multiplayer features
- **Testing**: Add unit tests and integration tests

## License

MIT License - See LICENSE file for details

## Contributing

Contributions welcome! Please open an issue or submit a pull request.
