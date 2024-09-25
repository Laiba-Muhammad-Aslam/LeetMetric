const searchButton = document.getElementById("search-btn");

async function getData() {
    // const url = "https://leetcode-stats-api.herokuapp.com/<YOUR_USERNAME>";
    const usernameInput = document.getElementById("user-input").value;
    const url = `https://leetcode-stats-api.herokuapp.com/${usernameInput}`;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  searchButton.addEventListener("click", getData);
