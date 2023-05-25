const input = document.querySelector("input.date");
const API_KEY = "YLqi9WYJ8YuxO08WjT804w5GS9Tw8TOtf6ugbXkf";

const date = new Date().toLocaleDateString("en-ca");
input.max = date;

input.addEventListener("change", (event) => APOD(event.target.value));

const APOD = (date) => {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(error);
    })
    .then((data) => displayimage(data))
    .catch(() => NotFound());
};

const displayimage= (data) => {
  const apodCard = document.querySelector(".apod");
  apodCard.innerHTML = `
    <h3 style="color: white; font-size:20px ;" >${data.title}</h3>
    <img src=${data.url} title=${data.title} class="pic" />
   <h3 style="color: white; 	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
;   font-size:15px ;"  >${ data.explanation}</h3>
       `;

};

const NotFound =() => {
  const apodCard = document.querySelector(".apod");
  apodCard.innerHTML =
    '<h3 class="apod-title">This date is wrong</h3>';

};