console.log("script.js connected!");

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(block => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      block.dataset.selected = button.dataset.type;
    });
  });
});

function displayResult() {
  let counts = {
    explorer: 0,
    artist: 0,
    leader: 0,
    thinker: 0
  };

  questionBlocks.forEach(block => {
    const answer = block.dataset.selected;
    if (answer) {
      counts[answer]++;
    }
  });

  let result = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  let resultText = "";

  if (result === "explorer") {
    resultText = "You are an Explorer 🌍 — You love adventure and new experiences!";
  } else if (result === "artist") {
    resultText = "You are an Artist 🎨 — You are creative and expressive!";
  } else if (result === "leader") {
    resultText = "You are a Leader 💼 — You take charge and get things done!";
  } else {
    resultText = "You are a Thinker 🧠 — You enjoy analyzing and learning!";
  }

  document.getElementById("result-text").textContent = resultText;
  document.getElementById("result-container").style.display = "block";
}

document.getElementById("show-result").addEventListener("click", displayResult);