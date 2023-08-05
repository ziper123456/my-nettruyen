// Fetch the API data
fetch('https://f.nettruyenio.com/Comic/Services/ComicService.asmx/GetFollowedPageComics')
  .then(response => response.json())
  .then(data => {
    // Get the followHtml value
    const followHtml = data.followHtml;
    
    // Display the followHtml on the webpage
    document.getElementById('follow-html').innerHTML = followHtml;
  })
  .catch(error => {
    console.error('Error:', error);
  });