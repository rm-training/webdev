/******************************************************************************/
/*
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server,
 * decoded from JSON.
 *
 * Hints:
 *
 *   * `fetch' returns a promise that yield a response object.
 *
 *   * The response object has a `json' method that returns a promise.
 *
 *   * The `fetch' API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
Ajax = (function () {
  let raw = async function (url, method, data) {
    const options = {
      method: method.toUpperCase(),
      body: JSON.stringify(data)
    };

    // return fetch(url, options).then((response) => {
    //   return response.json();
    // });

    response = await fetch(url, options);
    return response.json();
  };

  // HTTP GET (Fetch resource).
  let get = async function (url) {
    return raw(url, 'GET');
  };

  // HTTP POST (Create new resource).
  let post = async function (url, data) {
    return raw(url, 'POST', data);
  };

  // HTTP PATCH (Update existing resource).
  let patch = async function (url, data) {
    return raw(url, 'PATCH', data);
  };

  // HTTP DELETE (Delete existing resource).
  let del = async function (url) {
    return raw(url, 'DELETE');
  };

  // Return the public interface.
  return { get, post, patch, del };
})();
