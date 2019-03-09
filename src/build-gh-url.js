export function createURL(options) {
   const BASE_URL = `https://api.github.com/users`;
   const path = `${BASE_URL}/${options.user}/repos`;
   const url = new URL(path);
   url.searchParams.set('sort', 'created');
   url.searchParams.set('page', options.page);
   url.searchParams.set('per_page', options.per_page);

   return url.toString();
}