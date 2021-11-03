function getImageFromData() {
  const img = document.getElementById("image");
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status} ${response.statusText}`;
    })
    .then(function (data) {
      console.log(data);
      img.src = `${data.img}`;
    })
    .catch(function (error) {
      console.log("An error occurred:", error);
    });
}
getImageFromData();
