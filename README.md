# password
1Password Clone

1. What is the problem you’re solving?
Using the same or a common password is dangerous

2. What is the solution?
An app that accepts user-generated or generates a random password for you and stores it into a database with the associated website.

3. What is the MVP scope? (core features you must get working)
 * Generate pseudo-random passwords OR check user-submitted passwords with database against vulnerable passwords (via API) -- Checkforce (https://github.com/jaimeneeves/checkforce.js/blob/master/README.md)
* Implement UI for CRUD operations
* Show a password strength bar to user
4. What are the tough technical challenges involved with solving this problem?
* Database connectivity
* React Router v6 implementation
* Redux state-management
5. What are the stretch goals?
* Extra security measures for password reuse/reset
* OAuth for login OR SHA password strength
* Reward BTC for best password submittal 🤭
6. What is the technology stack?
* React/Redux/Express/Webpack/MongoDB
Team Responsibility breakdown: Who’s working on which part?
* Frontend - Trevor, Jay
* Backend - Abeer, Bryan, Erick


