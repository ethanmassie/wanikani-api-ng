
export function appendQueryToUrl(params: Object, url: string): string {
  const query = Object.keys(params)
    .filter(k => params[k] != undefined)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return !!query ? `${url}?${query}` : url;
}