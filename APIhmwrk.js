// put local storage at PageLoad to ensure data isn't erased//
//localStorage.setItem(data[0].author,data[0].quote);

// write out code for click//
document.querySelector('button').addEventListener('click', getPic)

// add event listener //
function getPic(){
fetch("https://strangerthings-quotes.vercel.app/api/quotes")
  .then(res => res.json() )
  .then(data => {
      console.dir(data[0]);

    document.querySelector('h2').innerText = data[0].quote
    document.querySelector('span').innerText = data[0].author
  })
}

