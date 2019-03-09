export function searchToBaseURL(options) {
   const BASE_URL = `https://api.github.com/users`;
   const url = `${BASE_URL}/${options.searchTerm}/repos/`;
   return url;
}