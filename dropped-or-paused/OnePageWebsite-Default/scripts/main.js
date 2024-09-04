// Function to handle smooth scrolling when a nav link is clicked
const handleNavClick = (event) => {
	event.preventDefault();
	const sectionId = event.target.getAttribute("href");
	const section = document.querySelector(sectionId);
	section.scrollIntoView({ behavior: "smooth" });
};

// Get all nav links and add click event listeners
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
	link.addEventListener("click", handleNavClick);
});
