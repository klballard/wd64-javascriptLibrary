/* purpose:
CRUD for LISTS   (create, read, update, delete)
CRUD for ITEMS
CRUD for USERS

index.js (this file) is the collection point for all controllers
index.js is also the outlet point for all controllers

Current goal: Create a test controller
*/

const TestController = require('./TestController');
const UsersController = require('./UsersController');

module.exports = {
    test: TestController,
    users: UsersController
}
