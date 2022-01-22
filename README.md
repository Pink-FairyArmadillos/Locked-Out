# ~~Pink Fairy Armadillo~~ HSDC Password Manager

1. What is the problem you’re solving?
 * Using the same or a common password is dangerous
2. What is the solution?
 * An app that accepts user-generated and stores it into a database with the associated website.
3. What is the MVP scope? (core features you must get working)
 * Generate pseudo-random passwords OR check user-submitted passwords with database against vulnerable passwords (via API) -- Checkforce (https://github.com/jaimeneeves/checkforce.js/blob/master/README.md) -- backup to above UUID to a password manager
 * Implement UI for CRUD operations
 * Show a password strength bar to user
4. What are the tough technical challenges involved with solving this problem?
 * Data visualization (important) - D3 library?
 * Database connectivity
 * React Router v6 implementation
 * Redux state-management
5. What are the stretch goals?
 * Extra security measures for password reuse/reset
 * OAuth for login OR SHA password strength
 * Reward BTC for best password submittal 🤭
6. What is the technology stack?
 * React/Redux/Express/Webpack/SQL
 
Team Responsibility breakdown: Who’s working on which part?  
Frontend - Kurtis, Aaron, Drew  
Backend - Zach, Kyle
