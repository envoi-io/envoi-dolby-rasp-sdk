import HttpClient from './HttpClient';

class EnvoiDolbyRaspApiClient {
	baseUrl = 'https://api.dolbyrasp.com/';

	constructor({ baseUrl } = {}) {
		if (baseUrl) this.baseUrl = baseUrl
		this.httpClient = new HttpClient();
	}

	async createAsset({ name, urls, mimeType } = {}) {
		const endpoint = `${this.baseUrl}api/asset`;
		const data = {
			name,
			urls,
			mimeType
		}
		return this.httpClient.post(endpoint, data);
	}

	async createAssetRenditions({ ruid, renditions } = {}) {
		const endpoint = `${this.baseUrl}api/asset/vurl?ruid=${ruid}}`;
		return this.httpClient.put(endpoint, renditions);
	}

	async getAssetRenditionsUrls({ ruid } = {}) {
		const endpoint = `${this.baseUrl}api/asset/vurl?ruid=${ruid}}`;
		return this.httpClient.get(endpoint);
	}

}

module.exports = { EnvoiDolbyRaspApiClient }