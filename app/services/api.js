(function(global, undefined) {
  var API_BASE_URL = 'https://api.erated.co';
  var cache = {};

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  function parseJSON(response) {
    return response.json()
  }

  var getUserInformation = function(userToken) {
    return new Promise(function(resolve,reject){
      if(cache[userToken]){
        resolve(cache[userToken]);
      }else{
        fetch('https://api.erated.co/v1/users/'+userToken+'?partner=12341234&mode=marketplaces')
          .then(checkStatus)
          .then(parseJSON)
          .then(function(json) {
            cache[userToken] = json.data;
            resolve(json.data);
          })
          .catch(function(error) {
            reject(error);
          });
      }
    });
  };

  global.WidgetApi = {
    getUserInformation: getUserInformation
  };

}(window));
