const repoNames = document.querySelector("#repo-name");

async function fetchGithubApi() {
  event.preventDefault();
  try {
    let user = document.getElementById("user").value;
    const dataFetch = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await dataFetch.json();
    console.log(data);
    data.forEach((repo) => {
      let repoNames = document.getElementById("repo-name");
      var listItem = document.createElement("li");
      listItem.innerHTML = repo.name;
      repoNames.appendChild(listItem);
    });

    // repoNames.appendChild(repos);
    // console.log("repos", repos);
    // return repos;
  } catch (error) {
    console.log("Error:", error);
  }
}
