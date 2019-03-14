// using fetch display posts from jsonplaceholder.com onto the dom (https://jsonplaceholder.typicode.com/posts)

// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

fetch('examples/example.json')
.then(function(response) {
  // Do stuff with the response
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
