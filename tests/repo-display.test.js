import { makeRepoLI } from '../src/display-component.js';
const test = QUnit.test;

QUnit.module('Creating LI Templates');


test('create li template when passed repository object', assert => {
   //Arrange
   const expected = /*html*/`
   <li>
        <h2>about-me</h2>
        <a href="https://github.com/Marty42Martinez/about-me">about-me</a>
        <p>Description</p>
        <p>HTML</p>
        <p>Last updated: 2019-01-29</p>
      </li>
   `;
   const repository = {
      name: 'about-me',
      html_url: 'https://github.com/Marty42Martinez/about-me',
      description: null,
      language: 'HTML',
      updated_at: '2019-01-29T01:01:08Z'
   };
   //Act
   const result = makeRepoLI(repository);
   //Assert
   assert.htmlEqual(result, expected);
});