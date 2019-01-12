let apiUrl
const apiUrls = {
  development: 'https://aqueous-atoll-85096.herokuapp.com',
  production: 'https://trails-client-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
