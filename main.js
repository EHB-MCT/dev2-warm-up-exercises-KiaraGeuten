import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
  // naam veranderen
  console.log("Exercise week 1");
  document.querySelector("#button-1a").addEventListener("click", function () {
    document.querySelector("#content-1").innerHTML =
      '<p>Hallo, dit is de oefening van Kiara"</p>';
  });
  document.querySelector("#button-1b").addEventListener("click", function () {
    document.querySelector("#section-1").style.backgroundColor = "lightblue";
  });
  document.querySelector("#button-1c").addEventListener("click", function () {
    const Ready = document.createElement("p");
    Ready.id = "Ready";
    Ready.innerHTML = "<strong><p>Ik ben er klaar voor</strong></p>";
    document.querySelector("#content-1").append(Ready);
  });
}
warmup2();
function warmup2() {
  const scores = getRandomScores(10);
  console.log("Exercise week 2");
  document.querySelector("#button-2b").addEventListener("click", function () {
    //TODO: sort
    scores.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    let html = "<ul>";
    //add li
    scores.forEach(function (score) {
      html += `<li>${score}</li>`;
    });
    html += "</ul>";
    document.querySelector("#content-2").innerHTML = html;
  });
  document.querySelector("#button-2a").addEventListener("click", function () {
    // add lijst
    let html = "<ul>";
    //add li
    scores.forEach(function (score) {
      html += `<li>${score}</li>`;
    });
    html += "</ul>";
    document.querySelector("#content-2").innerHTML = html;
  });
  document.querySelector("#button-2c").addEventListener("click", function () {
    const sum = scores.reduce(function (total, current) {
      return total + current;
    });
  });
}
warmup3();
function warmup3() {
  let student = getStudentJSON();
  const convert = JSON.parse(student);
  console.log(convert);
  document.querySelector("#button-3b").addEventListener("click", function () {
    document.querySelector(
      "#content-3"
    ).innerHTML = `<h2>${convert.firstname}</h2>`;
    css();
  });
  function css() {
    if (convert.isGraduated == true) {
      document.getElementById("content-3").classList.add("graduated");
    } else {
      document.getElementById("content-3").classList.add("not-graduated");
    }
  }
}

warmup4();
function warmup4() {
  let main, min, max;
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";

  document.querySelector("#button-4a").addEventListener("click", function () {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        main = data.main.temp;
        min = data.main.temp_min;
        max = data.main.temp_max;
      });
  });

  document
    .querySelector("#button-4b")
    .addEventListener("click", function (item) {
      document.querySelector("#content-4").innerHTML = `
      <h2>Temp: ${main}<h2>
      <h2>MIn temp:${min} <h2> 
      <h2>Max temp:${max} <h2>  `;
    });
}

function warmup5() {}
