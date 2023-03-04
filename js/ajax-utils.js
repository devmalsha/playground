(function (global) {
  let ajaxUtility = {};

  function getHttpRequestObject() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      global.alert("Ajax is not supported!");
      return null;
    }
  }

  ajaxUtility.sendGetRequest = function (requestUrl, responseHandler) {
    let request = getHttpRequestObject();
    request.onreadystatechange = function () {
      handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null);
  };

  function handleResponse(request, responseHandler) {
    if (request.readyState == 4 && request.status == 200) {
      responseHandler(request);
    }
  }

  global.$ajaxUtility = ajaxUtility;
})(window);
