/*
function loadJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

//var url = "https://jaganmohangumpa.github.io/resume/resources/data.json";
//usage:
loadJSON("api-data/data.json", function(text) {
  let data = JSON.parse(text);
  console.log(data);
});
*/

function loadJSON(url){
  return new Promise( (resolve, reject) => {
    return fetch(url).then( response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error - unable to load JSON'));
      }
    })
  })
}

var myPromise = loadJSON("api-data/data.json");

myPromise.then( data => {
  console.log(data);
} );
