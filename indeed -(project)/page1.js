
const searchInput = document.getElementById('search-input');
const locationInput = document.getElementById('location-input');

document.querySelector('button').addEventListener('click', () => {
  const searchTerms = searchInput.value;
  const location = locationInput.value;
  const url = `https://api.indeed.com/v2/jobs/search?q=${searchTerms}&l=${location}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      console.log(results);
    });
});
