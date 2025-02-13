import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
  // naam veranderen
  console.log("Exercise week 1");
  const button = document.querySelector("#button-1a");
  button.addEventListener("click", function () {
    document.querySelector("#content-1").innerHTML =
      '<p>Hallo, dit is de oefening van Kiara"</p>';
  });
  document.querySelector("#button-1b");
  addEventListener("click", function () {
    document.querySelector("#section-1").style.backgroundColor = "lightblue";
  });
  document.querySelector("#button-1c");
  addEventListener("click", function () {
    const Ready = document.createElement("p");
    Ready.id = "Ready";
    Ready.innerHTML = "<strong><p>Ik ben er klaar voor</p>";
    document.querySelector("#content-1").append(Ready);
  });
}

function warmup2() {
  console.log("Exercise week 2");
  const scores = getRandomScores(10);
}

function warmup3() {
  let student = getStudentJSON();
}

function warmup4() {
  let main, min, max;
}

function warmup5() {}
