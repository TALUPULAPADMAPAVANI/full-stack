//script.js
// Fetch a random joke from the API
async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching joke failed:", error);
    return null;
  }
}

// Update the DOM with the joke
function displayJoke(joke) {
  const setupEl = document.getElementById('setup');
  const punchlineEl = document.getElementById('punchline');
  const errorEl = document.getElementById('error');

  if (!joke) {
    setupEl.textContent = '';
    punchlineEl.textContent = '';
    errorEl.textContent = "Couldn't fetch a joke, try again!";
  } else {
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
    errorEl.textContent = '';
  }
}

// Load and display the joke
async function loadJoke() {
  const joke = await getJoke();
  displayJoke(joke);
}