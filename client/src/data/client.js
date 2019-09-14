export class BaseClient {
  _url() {
    if (window.location.href.includes('localhost')) {
      return 'http://localhost:5000/';
    }
    return 'https://potential-carnival.appspot.com/';
  }
}
