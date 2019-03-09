// import data from '../data/repo-data.js';
import loadDisplay from './display-component.js';
import './search-component.js';
import { readFromHash } from './hash-query.js';
import { createURL } from './build-gh-url.js';

window.addEventListener('hashchange', () => {
   const query = window.location.hash.slice(1);
   const queryOptions = readFromHash(query);
   
   const url = createURL(queryOptions);
   fetch(url)
      .then(response => response.json())
      .then(repositories => {
         loadDisplay(repositories);
      });

});



//TODO:
//Pagination
//https://api.github.com/users/Marty42Martinez/repos?sort=created&page=3&per_page=4