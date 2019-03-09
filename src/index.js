import data from '../data/repo-data.js';
import loadDisplay from './display-component.js';
import './search-component.js';

loadDisplay(data);

window.addEventListener('hashchange', () => {
   


});



//TODO:
//Pagination
//https://api.github.com/users/Marty42Martinez/repos?sort=created&page=3&per_page=4