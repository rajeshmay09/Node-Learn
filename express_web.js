const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("Helo World! welcome to server programming\n");
  res.end();
});

// Simple API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "This is a simple API response", status: "success" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//express route handling,
//express facilitate communication between front end and back end, without direct connection between
//front and back end.

// Express itself doesn’t directly handle database operations —
// //it’s a web framework. But it acts as the bridge between:

// Frontend/client (browser or app)

// Database (e.g., MongoDB, MySQL, PostgreSQL)

// Using middleware and routing, Express captures HTTP requests, processes them,
//interacts with the database (using a driver or ORM), and sends back a response.

// Express itself is built entirely on the idea of middleware functions:
// Your routes are middleware

// Your custom logic is middleware

// Your database access logic is often part of middleware

//ROUTING
//Routing is the mechanism that determines how your server responds to various
// HTTP requests (GET, POST, PUT, DELETE) sent to specific URL paths.

// Think of it as a traffic controller:

// "If a request comes in for /users with a GET method, then run this logic."

// app.get('/users', (req, res) => res.send('Get all users'));
// app.get('/users/:id', (req, res) => res.send(`Get user ${req.params.id}`));
// app.post('/users', (req, res) => res.send('Create user'));
// app.put('/users/:id', (req, res) => res.send(`Update user ${req.params.id}`));
// app.delete('/users/:id', (req, res) => res.send(`Delete user ${req.params.id}`));

//What express.Router() Does
// This line creates a mini Express app, without the full HTTP server features.

// It's an isolated route handler

// It behaves like app, but only for defining routes and middleware

// Later, you attach it to your main app using app.use()
// let express = require('express');

// let app = express();
// app.use('/users', userRoute); // Now /users routes are active

// let userRoute = express.Router();

// userRoute.get('/', (req, res) => {
//   res.send('All users');
// });

// userRoute.get('/:id', (req, res) => {
//   res.send(`User ID: ${req.params.id}`);
// });
// app.listen(3000, () => console.log('Listening on 3000'));

//Middleware is just a function that has access to the request, response,
// and a next function in the HTTP request-response cycle.

// /(req, res, next) => { /* your logic */ }

// const logMiddleware = (req, res, next) => {
//   console.log('Logged');
//   next();
// };

// const authMiddleware = (req, res, next) => {
//   if (req.query.token === '123') {
//     next();
//   } else {
//     res.status(403).send('Forbidden');
//   }
// };

// app.get('/secret', logMiddleware, authMiddleware, (req, res) => {
//   res.send('Top Secret Data');
// });

//application-level middleware,router level middleware, error handling middleware,
// built-in middleware, third-party middleware
//Template rendering
// Express can render HTML templates using engines like EJS, Pug, or Handlebars.

//AUThentication, Authorization
//authentication- session, password-less, token, OAuth
//Token- header,payload, signature
//token based authorization
//more scalable,flexible(can be used on multiple server), and secure

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());

// const JWT_SECRET = 'your-secret-key'; // In production, use env variables
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username);
//   if (!user) return res.status(401).send('User not found');

//   const valid = await bcrypt.compare(password, user.passwordHash);
//   if (!valid) return res.status(403).send('Invalid password');

//   const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
// sign is reqiered to create a token
//   res.json({ token });
// });

// 🔐 Protected Route (no separate middleware)
// app.get('/secret', (req, res) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader?.split(' ')[1];

//   if (!token) return res.status(401).send('Token missing');

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     res.send(`Welcome User ${decoded.userId}. This is a protected route.`);
//   } catch (err) {
//     res.status(403).send('Invalid token');
//   }
// });

// try {
//   const decoded = jwt.verify(token, JWT_SECRET);
//   console.log('✅ Token is valid:', decoded);  // decoded contains payload (e.g. { userId: 1, iat: ..., exp: ... })
// } catch (err) {
//   console.error('❌ Invalid token:', err.message);
// }

//HTTP has three ways to passs parameters : Url path parameters, query parameters, and header parameters.

//web framework directory structure
//node_modules,config,models,views,Routes,Public,app.js,routes.js,package.json.

//API- node_modules,config,models,routes,app.js,package.json.
