// Import the express module
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Instantiate an Express application
const app = express();

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
//app.use(express.static('public'));

// Vercel version
app.use(exp.static(path.join(__dirname, 'public')));


// Define the port number where our server will listen
//const PORT = 3000;

// Important: Use environment variable for port, fallback to 3000
const PORT = process.env.PORT || 3000;

// Create a "default" route for our website's home page
app.get('/', (req, res) => {

    // Send our home page as a response to the client
    //res.sendFile(`${import.meta.dirname}/views/home.html`);
//
//     res.send('<h1>Hello from Vercel!</h1><p>Pizza app is working!</p>');

    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
/*
// Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
*/
// For Vercel, don't use app.listen() in production
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
  
  // Export the app for Vercel (ES module syntax)
  export default app;