// Add smooth scrolling to anchor links
document.addEventListener("DOMContentLoaded", function () {
	const anchorLinks = document.querySelectorAll('a[href^="#"]');

	for (let i = 0; i < anchorLinks.length; i++) {
		anchorLinks[i].addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: "smooth",
				});
			}
		});
	}
});

// Show/hide password toggle for password input
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

if (passwordToggle) {
	passwordToggle.addEventListener("click", function () {
		const type =
			passwordInput.getAttribute("type") === "password"
				? "text"
				: "password";
		passwordInput.setAttribute("type", type);
	});
}

// Display current year in the footer
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("current-year");
if (yearElement) {
	yearElement.textContent = currentYear;
}
