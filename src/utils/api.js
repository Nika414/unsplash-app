class Api {
    constructor({ baseUrl, apiKey }) {
      this._baseUrl = baseUrl;
      this._apiKey = apiKey;
    }
  
    search(query) {
      return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
        headers: {
          Authorization: `Client-ID ${this._apiKey}`
        }
      })
      .then(res => res.json());
    }
  }
  
  const api = new Api({
    baseUrl: 'https://api.unsplash.com',
    apiKey: 'EkLUS8gzO6LdB52p_EhabczaO-a7LYUOU0Yu_8JqHbY'
  });
  
  export default api;