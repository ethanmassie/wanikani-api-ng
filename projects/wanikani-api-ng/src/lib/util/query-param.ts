/**
 * Create url query param string from any object and return the url with the string appended
 * @param params Object with keys and values for the query params string
 * @param url string url to prefix query with
 * @returns string with query params (if any)
 */
export function appendQueryToUrl(params = {}, url: string): string {
  const query = Object.keys(params)
    .filter((k) => params[k] != undefined) // ensure the value for k is defined
    .map((k) => {
      return params[k] instanceof Date
        ? `${encodeURIComponent(k)}=${params[k].toISOString()}`
        : `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    }) // create param string key=params[k] encoded (encode dates using ISO format)
    .join('&');
  return !!query ? `${url}?${query}` : url; // only return the url with the query if it is truthy
}
