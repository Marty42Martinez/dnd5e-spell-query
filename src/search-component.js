import { searchToHash } from './hash-query.js';

const searchForm = document.getElementById('search-form');


searchForm.addEventListener('submit', event => {
   event.preventDefault();
   const searchInput = searchForm.querySelector('input');
   const searchOptions = {
      searchTerm: searchInput.value
   };
   const existingQuery = window.location.hash.slice(1);
   const newQuery = searchToHash(existingQuery, searchOptions);
   
   window.location.hash = newQuery;

});