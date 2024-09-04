function submitOrder() {
	var formData = {
		name: document.getElementById("name").value,
		item: document.getElementById("item").value,
		address: document.getElementById("address").value,
	};

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "Python/order.json", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(formData));
}
