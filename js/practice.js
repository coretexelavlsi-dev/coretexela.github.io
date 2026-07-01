let problems = [];
let currentIndex = 0;

// LOAD PROBLEMS
fetch("data/problems.json")
  .then(res => res.json())
  .then(data => {
    problems = data;
    renderProblems();
  });

// RENDER LIST
function renderProblems() {
  const list = document.getElementById("problemList");

  problems.forEach((p, i) => {
    let li = document.createElement("li");
    li.innerText = p.title;

    li.onclick = () => loadProblem(i);

    list.appendChild(li);
  });
}

// LOAD PROBLEM
function loadProblem(index) {
  currentIndex = index;

  document.getElementById("problemTitle").innerText =
    problems[index].title;

  document.getElementById("problemDesc").innerText =
    problems[index].desc;

  document.getElementById("hintText").innerText =
    "Think step by step like an RTL engineer.";
}

// RUN (simulation placeholder)
function runCode() {

  const code = document.getElementById("codeArea").value;

  fetch("http://localhost:3000/simulate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code })
  })
  .then(res => res.json())
  .then(data => {

    if(data.success) {
      document.getElementById("outputBox").innerText =
        data.output;
    } else {
      document.getElementById("outputBox").innerText =
        data.error;
    }

  });

}

// SUBMIT (basic validation engine)
function submitCode() {
  let code = document.getElementById("codeArea").value;
  let expected = problems[currentIndex].expected;

  if (code.includes(expected)) {
    document.getElementById("outputBox").innerText =
      "Correct ✔ RTL logic verified";
  } else {
    document.getElementById("outputBox").innerText =
      "Incorrect ❌ Review logic and retry";
  }
}
