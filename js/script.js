// Create and name a Global variable to select the div with a class of "overview".This div is where your profile info will appear.
	const overview = document.querySelector('.overview');
/*Create a global variable called username. In the value, add your GitHub username.*/
	const username = "np558565";
	const repoList = document.querySelector(".repo-list");
// Creat a variable that selects the section with a class of "repos" where all your repo information appears. 
	const allReposContainer = document.querySelector(".repos");
// Create a variable that selects the section with a class of "repo-data" where the individual repo data will appear.
	const repoData = document.querySelector(".repo-data");
//Create a variable that should select the Back to Repo Gallery button. 
	const viewReposButton = document.querySelector(".view-repos");
// Create a variable called filterInput to select the input with the "Search by name" placeholder
	const filterInput = document.querySelector(".filter-repos");

/*Create and name an async function to fetch information from your GitHub profile using the GitHub API address:https://api.github.com. Target the “users” endpoint and use a template literal to add the global username variable to the endpoint: users/${username}. Notice that you’ll add a “$” character in front of the variable name to create a placeholder. Because you’re using a template literal, surround the URL in backticks instead of quotation marks.*/ 
	const gitUserInfo = async function() {
	const userInfo = await fetch(`https://api.github.com/users/${username}`);
	const data = await userInfo.json()
	displayUserInfo(data);
};

// Call the function to see your results:
	gitUserInfo();

// Display the fetched user information on the page:
	const displayUserInfo = function (data) {
  // Create a new div and give it a class of "user-info". 
	const div = document.createElement("div");
	div.classList.add("user-info");
  // Populate the div, with the following elements for figure, image, and paragraphs:
	div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
		</figure>
		<div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
		</div> 
	`;
  // Append the div to the overview element.
	overview.append(div);
	gitRepos();
};

