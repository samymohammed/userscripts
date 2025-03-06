// @grant       GM_xmlhttpRequest
if (typeof WB === "undefined") {
  var WB = {};
}

/* eslint-disable no-undef */
let httpFunctions = {
  get : (url, headers = {}) => {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "GET",
        url: url,
        headers: headers,
        onload: function(response) {
          resolve(response.responseText);
        },
        onerror: function(error) {
          reject(error);
        }
      });
    });
  },
  post : (url, data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: data,
        headers: headers,
        onload: function(response) {
          resolve(response.responseText);
        },
        onerror: function(error) {
          reject(error);
        }
      });
    });
  }
};


WB.http = httpFunctions;