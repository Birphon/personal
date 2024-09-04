// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;
const session = require("express-session");

const app = express();
const PORT = 5000; // Replace this with your desired port number

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up session
app.use(
	session({
		secret: "your-secret-key", // Replace this with a secret key for session management
		resave: true,
		saveUninitialized: true,
	})
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(
	new SteamStrategy(
		{
			returnURL: "http://localhost:5000/auth/steam/return", // Replace with your server's URL
			realm: "http://localhost:5000/", // Replace with your server's URL
			apiKey: "0D00D6D4D1C8523F99B5FBE1A8423A80", // Replace with your Steam API key
		},
		function (identifier, profile, done) {
			User.findByOpenID({ openId: identifier }, function (err, user) {
				return done(err, user);
			});
		}
	)
);

// Serialize user into session
passport.serializeUser((user, done) => {
	done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
	done(null, user);
});

// Example API endpoint accessible only after authentication
app.get("/api/protected", (req, res) => {
	if (req.isAuthenticated()) {
		res.json({ message: "You are authenticated!" });
	} else {
		res.status(401).json({ message: "Unauthorized" });
	}
});

// Steam authentication endpoint
app.get("/auth/steam", passport.authenticate("steam"));

// Steam authentication callback
app.get(
	"/auth/steam/return",
	passport.authenticate("steam", { failureRedirect: "/" }),
	(req, res) => {
		// Redirect to the frontend URL after successful authentication
		res.redirect("http://localhost:3000/");
	}
);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
