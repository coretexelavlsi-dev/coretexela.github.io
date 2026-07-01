let topics = [];
let currentIndex = 0;

// LOAD DATA
fetch("data/topics.json")
  .then(res => res.json())
  .then(data => {
    topics = data;
    renderTopics();
  });

// RENDER TOPIC LIST
function renderTopics() {
  const list = document.getElementById("topicList");

  topics.forEach((t, i) => {
    let li = document.createElement("li");
    li.innerText = t.title;

    li.onclick = () => loadTopic(i);

    list.appendChild(li);
  });
}

// LOAD TOPIC
function loadTopic(index) {
  currentIndex = index;

  document.getElementById("topicTitle").innerText = topics[index].title;
  document.getElementById("topicDesc").innerText = topics[index].desc;
  document.getElementById("topicExample").innerText = topics[index].example;

  updateSuggestion();
}

// NEXT TOPIC
function nextTopic() {
  if (currentIndex < topics.length - 1) {
    loadTopic(currentIndex + 1);
  }
}

// SIMPLE RECOMMENDATION LOGIC (MVP INTELLIGENCE)
function updateSuggestion() {
  let next = topics[currentIndex + 1];

  document.getElementById("nextSuggestion").innerText =
    next ? "Next: " + next.title : "You completed all topics in this section";
}
