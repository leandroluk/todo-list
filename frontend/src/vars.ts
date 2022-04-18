export default {
  api: {
    uri: new URL(process.env.REACT_APP_API_URI || 'http://localhost:3001').href
  }
}
