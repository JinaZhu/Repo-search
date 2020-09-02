let repoNames = document.getElementById("repo-name");

async function fetchGithubApi() {
  event.preventDefault();
  repoNames.innerHTML = "";
  try {
    let user = document.getElementById("user").value;
    const dataFetch = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await dataFetch.json();
    console.log(data);
    data.forEach((repo) => {
      let listItem = document.createElement("li");
      let repoContainer = `<a class="repo-link" href=${repo.html_url} target="_blank"><div class="repo-container"><p>${repo.name}</p><div class="info-container"><p><svg class="lan-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg> ${repo.language}</p><p><svg class="star" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>${repo.stargazers_count}</p><p>${repo.size}KB</p></div></div></a>`;
      listItem.innerHTML = repoContainer;
      repoNames.appendChild(listItem);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
