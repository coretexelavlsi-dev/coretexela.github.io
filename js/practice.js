const problems = [
  {
    title: "2:1 Multiplexer",
    desc: "Output y = a when sel = 0 else y = b",
    expected: "assign y = sel"
  },
  {
    title: "AND Gate",
    desc: "Design AND gate",
    expected: "assign y = a & b"
  }
];

let current = 0;

// LOAD DEFAULT PROBLEM
function loadProblem() {
  document.getElementById("problemTitle").innerText = problems[current].title;
  document.getElementById("problemDesc").innerText = problems[current].desc;
}

loadProblem();

// RUN CODE (simple simulation placeholder)
function runCode() {
  document.getElementById("result").innerText =
    "Simulation Running... (MVP Mode)";
}

// SUBMIT CODE (basic string check logic)
function submitCode() {
  let code = document.getElementById("codeArea").value;

  let expected = problems[current].expected;

  if (code.includes(expected)) {
    document.getElementById("result").innerText =
      "Correct ✔ Great Engineering Logic!";
  } else {
    document.getElementById("result").innerText =
      "Incorrect ❌ Try Again";
  }
}

// NEXT PROBLEM (future upgrade hook)
function nextProblem() {
  if (current < problems.length - 1) {
    current++;
    loadProblem();
  }
}
