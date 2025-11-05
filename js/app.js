/**
 * Main application JavaScript for operation-water-rock.
 * Handles terminal interface with typewriter effect and password prompt.
 */

/**
 * SECURITY WARNING: Client-side password storage is for DEVELOPMENT/TESTING ONLY.
 * 
 * TODO: Replace this with server-backed authentication:
 * - Move password validation to secure backend API
 * - Use proper session management (JWT tokens, secure cookies)
 * - Implement password hashing (bcrypt, argon2, etc.)
 * - Add rate limiting to prevent brute force attacks
 * - Use HTTPS in production
 * - Never store passwords in client-side code in production
 */
const PASSWORD_CONFIG = {
    // Dev/test passwords - REMOVE before production deployment
    player1: 'player1',
    player2: 'player2',
    player3: 'player3',
    admin: 'admin'
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriterText');
    const typewriterContainer = document.getElementById('typewriterContainer');
    const passwordPromptContainer = document.getElementById('passwordPromptContainer');
    const passwordInput = document.getElementById('passwordInput');
    const cursorBlink = document.getElementById('cursorBlink');
    
    // The text to type out
    const introText = 'operation water rock';
    
    // Typewriter effect function
    function typeWriter(text, element, speed = 100, callback) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Add a brief pause after typing completes
                setTimeout(() => {
                    if (callback) callback();
                }, 500);
            }
        }
        
        type();
    }
    
    // Show password prompt
    function showPasswordPrompt() {
        typewriterContainer.style.display = 'none';
        passwordPromptContainer.style.display = 'block';
        
        // Focus the password input
        setTimeout(() => {
            passwordInput.focus();
        }, 100);
    }
    
    // Show access denied message with animation
    function showAccessDenied() {
        passwordPromptContainer.style.display = 'none';
        
        const accessDeniedDiv = document.createElement('div');
        accessDeniedDiv.id = 'accessDeniedMessage';
        accessDeniedDiv.className = 'access-denied-message';
        accessDeniedDiv.textContent = 'ACCESS DENIED';
        
        typewriterContainer.appendChild(accessDeniedDiv);
        typewriterContainer.style.display = 'block';
        
        // Reset after animation
        setTimeout(() => {
            passwordPromptContainer.style.display = 'block';
            typewriterContainer.style.display = 'none';
            accessDeniedDiv.remove();
            passwordInput.value = '';
            passwordInput.focus();
        }, 3000);
    }
    
    // Validate password and determine role
    function validatePassword(password) {
        // TODO: Replace with server-side authentication API call
        // Example: const response = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ password }) });
        // TODO: Implement proper error handling and security measures
        
        for (const [role, pass] of Object.entries(PASSWORD_CONFIG)) {
            if (password === pass) {
                return role;
            }
        }
        return null;
    }
    
    // Redirect to dashboard with role and token
    function redirectToDashboard(role) {
        // TODO: Replace URL token with proper server-issued session token
        // TODO: Implement secure token generation and validation
        // TODO: Use HTTPS for all redirects in production
        
        const token = role; // Temporary: using role as token for dev/test
        window.location.href = `dashboard.html?role=${role}&rid=${token}`;
    }
    
    // Handle password input
    function handlePasswordInput(e) {
        // Update cursor visibility based on input focus
        if (passwordInput.value.length > 0) {
            cursorBlink.style.opacity = '1';
        }
        
        // Handle Enter key
        if (e.key === 'Enter') {
            e.preventDefault();
            const password = passwordInput.value.trim();
            
            if (!password) {
                return; // Don't process empty passwords
            }
            
            // Validate password and get role
            const role = validatePassword(password);
            
            if (role) {
                // Success: redirect to dashboard
                redirectToDashboard(role);
            } else {
                // Failure: show access denied message
                showAccessDenied();
            }
        }
    }
    
    // Handle input focus/blur for cursor visibility
    passwordInput.addEventListener('focus', function() {
        cursorBlink.style.opacity = '1';
    });
    
    passwordInput.addEventListener('blur', function() {
        // Keep cursor visible even when blurred for accessibility
        cursorBlink.style.opacity = '1';
    });
    
    // Handle input changes
    passwordInput.addEventListener('input', function() {
        // Cursor stays visible during input
        cursorBlink.style.opacity = '1';
    });
    
    // Handle keydown events
    passwordInput.addEventListener('keydown', handlePasswordInput);
    
    // Start the typewriter effect
    typeWriter(introText, typewriterText, 80, showPasswordPrompt);
    
    // Ensure keyboard focus works properly
    // Focus the password input when it becomes visible
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && 
                mutation.attributeName === 'style' &&
                passwordPromptContainer.style.display === 'block') {
                passwordInput.focus();
            }
        });
    });
    
    observer.observe(passwordPromptContainer, {
        attributes: true,
        attributeFilter: ['style']
    });
    
    // Make sure password input is accessible via keyboard
    passwordInput.setAttribute('tabindex', '0');
    
    // Handle window focus to re-focus input if needed
    window.addEventListener('focus', function() {
        if (passwordPromptContainer.style.display === 'block') {
            passwordInput.focus();
        }
    });
});
