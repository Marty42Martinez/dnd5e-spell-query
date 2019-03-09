import { searchToHash, readFromHash } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('Testing Search to URL component');



test('updates query using searchOptions object when existing is blank', assert => {
   //Arrange
   const expected = 'user=Marty42Martinez&page=1&per_page=6';
   const existing = '';
   const searchOptions = {
      searchTerm: 'Marty42Martinez'
   };
   //Act
   const result = searchToHash(existing, searchOptions);
   //Assert
   assert.equal(result, expected);
});


test('read hash and return queryOptions object', assert => {
   //Arrange
   const expected = {
      user: 'Marty42Martinez',
      page: 3,
      per_page: 6
   };
   
   const query = 'user=Marty42Martinez&page=3&per_page=6';
   //Act
   const result = readFromHash(query);
   //Assert
   assert.deepEqual(result, expected);
});