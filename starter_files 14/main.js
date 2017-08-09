/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let search = document.getElementById("mySearch");

search.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    let url = "?q=" + search.value;

    axios.get(url)
      .then(function (response) {


        for (i = 0; i < response.data.results.length; i++) {
          let data = response.data.results[i];
          if (data.thumbnail === '') {
            const recipe =
              `<>`
            document.querySelector(".boxes").innerHTML += recipe;
          } else {
            const recipe =
              `<img src="${data.thumbnail}" >`
            document.querySelector(".boxes").innerHTML += recipe;
          }
        }
      });
  }
});