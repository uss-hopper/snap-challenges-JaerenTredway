// using fetch display posts from jsonplaceholder.com onto the dom (https://jsonplaceholder.typicode.com/posts)

// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

const pathToResource = "https://jsonplaceholder.typicode.com/posts";

function showJSON(responseAsJSON) {
  var message = document.getElementById('target');
  message.textContent = responseAsJSON;
}

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function fetchJSON(pathToResource) {
  fetch(pathToResource) // 1
  .then(validateResponse) // 2
  .then(readResponseAsJSON) // 3
  .then(logResult) // 4
  .then(showJSON(responseAsJSON))
  .catch(logError);
}

fetchJSON('/posts');
