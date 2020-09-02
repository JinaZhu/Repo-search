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
      var listItem = document.createElement("li");
      listItem.innerHTML = repo.name;
      repoNames.appendChild(listItem);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
