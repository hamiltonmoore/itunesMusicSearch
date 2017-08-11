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
    resultsDisplay.innerHTML = '';
    let url = "https://itunes.apple.com/search?term=" + search.value;

    let newpopup = document.querySelector("h1");
    newpopup.textContent = "click in a row to play a song";


    axios.get(url)
      .then(function (response) {
        results = response.data.results;
        for (i = 0; i < results.length; i++) {
          let data = results[i];
          console.log('data: ', data);
          const artwork =
            `<div class="styling" id="${data.previewUrl}">
              <p>${data.trackName}</p>
              <p>${data.artistName} </p>
            </div>`

          resultsDisplay.innerHTML += artwork;
        }
      });
  }
});

resultsDisplay.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == ".styling") {

    let song = e.target.getAttribute("id");
    let player = document.querySelector(".music-player");
    player.setAttribute('div', song);

  }
});

              // <img src="${data.artworkUrl100}">

//the following was to add an additional bit of text to header. it worked, but wanted to do something different

    // let popup = document.querySelector("header");
    // let popupText = document.createElement("h2");
    // let newText = document.createTextNode("click in a row to play song");
    // popup.appendChild(popupText);
    // popupText.appendChild(newText);