let topics = [];
let currentIndex = 0;

// LOAD TOPICS
fetch("data/topics.json")
  .then(res => res.json())
  .then(data => {
    topics = data;
    renderTopics();
  });

// RENDER TOPIC LIST
function renderTopics() {
  const list = document.getElementById("topicList");

  topics.forEach((t, index) => {
    let li = document.createElement("li");
    li.innerText = t.title;

    li.onclick = () => loadTopic(index);

    list.appendChild(li);
  });
}

// LOAD SELECTED TOPIC
function loadTopic(index) {
  currentIndex = index;

  document.getElementById("topicTitle").innerText = topics[index].title;
  document.getElementById("topicDesc").innerText = topics[index].desc;
  document.getElementById("topicExample").innerText = topics[index].example;
}

// NEXT TOPIC
function nextTopic() {
  if (currentIndex < topics.length - 1) {
    loadTopic(currentIndex + 1);
  }
}
