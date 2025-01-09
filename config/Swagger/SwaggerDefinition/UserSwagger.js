/**
 * @swagger
 * /users/test:
 *   get:
 *     summary: Tests users route
 *     description: This route is used to test the users API.
 *     responses:
 *       200:
 *         description: A success message indicating the route is working
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users route is working"
 */


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user
 *               email:
 *                 type: string
 *                 description: The email address of the user
 *               password:
 *                 type: string
 *                 description: The password for the user
 *     responses:
 *       200:
 *         description: A user object with the details of the registered user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the user
 *                 email:
 *                   type: string
 *                   description: The email address of the user
 *                 password:
 *                   type: string
 *                   description: The password for the user (hashed)
 *                 avatar:
 *                   type: string
 *                   description: URL of the user's avatar
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: Date when the user was created
 *       400:
 *         description: Error if the email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "Email already exists"
 */
