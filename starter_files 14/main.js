/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let search = document.getElementById("mySearch");
let resultsDisplay = document.querySelector(".results");

search.addEventListener("keyup", function (event) {
  if (event.which == 13) {
    let url = "https://itunes.apple.com/search?term=" + search.value;

    axios.get(url)
      .then(function (response) {
        results = response.data.results;
        for (i = 0; i < results.length; i++) {
          let data = results[i];
          console.log('data: ', data);
          const artwork =
            `<img src="${data.artworkUrl100}" >`
          resultsDisplay.innerHTML += artwork;
        }
      })
  };
});