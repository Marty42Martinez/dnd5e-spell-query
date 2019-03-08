const test = QUnit.test;

QUnit.module('Creating LI Templates');

function makeRepoLI(repository) {
   const html = /*html*/`
   <li>
        <h2>${repository.name}</h2>
        <a href="${repository.html_url}">${repository.name}</a>
        <p>${repository.description ? repository.description : 'Description'}</p>
        <p>${repository.language}</p>
        <p>Last updated: ${repository.updated_at.slice(0, 10)}</p>
      </li>`;
   const template = document.createElement('template');
   template.innerHTML = html;
   return template.content;
   
}

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