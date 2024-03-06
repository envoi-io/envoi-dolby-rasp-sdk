class HttpClient {
	baseUrl = 'https://api.dolbyrasp.com/';

	async get(url) {
		const response = await fetch(this.baseUrl + url);
		return response.json();
	}

	async post(url, data) {
		const response = await fetch(this.baseUrl + url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	}

	async put(url, data) {
		const response = await fetch(this.baseUrl + url, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	}
}

export default HttpClient;
