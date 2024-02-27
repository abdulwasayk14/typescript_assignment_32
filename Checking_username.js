"use strict";
// List of current users
let current_users = ['john', 'alice', 'emma', 'sam', 'eric'];
// List of new users
let new_users = ['alice', 'bob', 'john', 'sarah', 'mike'];
// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());
// Loop through the new_users list
for (let user of new_users) {
    // Convert the current user to lowercase for case-insensitive comparison
    let user_lower = user.toLowerCase();
    // Check if the new username has already been used
    if (current_users_lower.includes(user_lower)) {
        console.log(`Sorry, the username '${user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${user}' is available.`);
    }
}
