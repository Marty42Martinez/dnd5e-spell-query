
function clearDisplay() {
   while(repositoryDisplay.children.length > 0) {
      repositoryDisplay.lastElementChild.remove();
   }
}

export function makeRepoLI(repository) {
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
const repositoryDisplay = document.getElementById('repository-display');
export default function loadDisplay(listOfRepos) {
   clearDisplay();
   listOfRepos.forEach(repository => {
      const dom = makeRepoLI(repository);
      repositoryDisplay.appendChild(dom);
   });
}

