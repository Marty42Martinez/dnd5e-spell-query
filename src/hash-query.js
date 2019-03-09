export function searchToHash(existingQuery, searchOptions) {
   const searchParams = new URLSearchParams(existingQuery);
   searchParams.set('user', searchOptions.searchTerm);
   searchParams.set('page', 1);
   searchParams.set('per_page', 6);
   return searchParams.toString();
}

export function readFromHash(query) {
   const searchParams = new URLSearchParams(query);
   const queryOptions = {
      user: searchParams.get('user'),
      page: parseInt(searchParams.get('page')),
      per_page: parseInt(searchParams.get('per_page'))
   };

   return queryOptions;
}