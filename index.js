import util from './util';
import urls from './url';

class UconnCasClient {
  constructor() {
    this.endpoint = 'login.uconn.edu';
    this.path = '/cas';
    this.protocol = 'https';
    this.version =  '2.0'
    this.redirectUrl = util.getCurrentUrl();
  }

  auth() {
    return new Promise((resolve, reject) => {
      const ticket = util.getParamFromCurrentUrl('ticket');
      if (util.isEmpty(ticket)) 
        window.location.href = urls.getLoginUrl(this);
      else 
        this._validateTicket(ticket, resolve, reject);
    });
  };

  _validateTicket(ticket, resolve, reject) {
    let version = this.version;
    let content_type = 'text/xml';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xhr.responseText, 'text/xml');
        const netID = xml.childNodes[0].textContent.trim()
        const regexPattern = /^[a-zA-Z]{3}\d{5}$/;
        const netIDAuthenticationSuccess = regexPattern.test(netID);
        if (netIDAuthenticationSuccess)
          resolve(netID);
        else
          reject
     }  
    }
    xhr.open('GET', "https://6xqpeg7i0j.execute-api.us-east-2.amazonaws.com/default/test2?ticket=" + ticket
    , true);
    xhr.send(); 
  }
}

export default UconnCasClient;
