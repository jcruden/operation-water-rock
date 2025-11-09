# Running Locally

This is a static web application that needs to be served over HTTP (not opened directly as a file) because it uses ES6 modules.

## Quick Start

### Option 1: Python (Recommended - Usually Pre-installed)

```bash
# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 2: Node.js (if you have Node installed)

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run it
http-server -p 8000

# Or use npx (no installation needed)
npx http-server -p 8000
```

Then open: `http://localhost:8000`

### Option 3: VS Code Live Server

If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Testing the Application

1. **Start the server** using one of the options above

2. **Open the app**:
   - Login page: `http://localhost:8000/index.html`
   - Or just: `http://localhost:8000` (index.html is the default)

3. **Login as a player**:
   - Enter one of the player roles (Zoe, JT, Alana)
   - Enter the password (set during Firebase setup)

4. **Test the dashboard**:
   - View clues, dares, and points
   - Complete dares or answer clues
   - Test the locked/unlocked controls

5. **Test admin panel**:
   - Go to `http://localhost:8000/admin.html`
   - Enter admin password
   - Use commands like `help`, `list clues`, `list points`, etc.

## Importing Data (Optional)

If you want to import clues/dares from your local JSON files:

```bash
# Make sure you have Firebase Admin SDK set up
# See IMPORT_RIDDLES.md for setup instructions

# Import clues from riddles.json
npm run import-clues

# Import dares from dares.json
npm run import-dares

# Import both
npm run import-all
```

## Troubleshooting

### "Failed to load module" or CORS errors
- Make sure you're using a local server (not opening files directly)
- Check that the server is running on the correct port

### Firebase errors
- Firebase is already configured in `js/firebase-service.js`
- Make sure your Firestore database is set up (see FIREBASE_SETUP.md)
- Check browser console for specific error messages

### Can't see clues/dares
- Make sure you've imported data using the import scripts
- Or add data manually through the admin panel
- Check browser console for errors

### Points not updating
- Points are stored in localStorage per user
- Check browser DevTools → Application → Local Storage
- Look for keys like `points_Zoe`, `points_JT`, etc.

## Development Tips

- **Browser DevTools**: Press F12 to open console and see any errors
- **Hard Refresh**: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac) to clear cache
- **Multiple Tabs**: Open multiple tabs with different user roles to test multiplayer features
- **Network Tab**: Check Network tab in DevTools to see Firebase requests

