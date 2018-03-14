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
