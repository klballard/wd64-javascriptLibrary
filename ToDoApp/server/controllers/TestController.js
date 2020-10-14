// goal: controller with one GET request that responds with "Hello from the test controller"

const { Router } = require("express");

const testControllerRouter = Router();

testControllerRouter.get('/', (request, response) => {
    let message = "Hello from the test controller";
    response.send(message);
});

const testController = require("./TestController");


module.exports = {test: testController};