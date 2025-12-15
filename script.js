const theme = document.getElementById("themeBtn");
theme.addEventListener("click", () => {
  const darkOn = document.body.classList.toggle("dark-mode");
  theme.textContent = darkOn ? "Toggle Light Mode" : "Toggle Dark Mode";
});


const editJob = document.getElementById("editJobBtn");
const job = document.querySelector(".job-title");
editJob.addEventListener("click", () => {
  const newJob = prompt("Enter new job title:", job.textContent);
  if (newJob !== null && newJob.trim() !== "") {
    job.textContent = newJob.trim();
  }
});


const skillToggle = document.getElementById("toggleSkillsBtn");
const skills = document.getElementById("skillsSection");
skillToggle.addEventListener("click", () => {
  const hidden = skills.style.display === "none";
  skills.style.display = hidden ? "block" : "none";
  skillToggle.textContent = hidden ? "Hide" : "Show";
});


const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
const maxChars = msgBox.maxLength;
counter.textContent = maxChars;
msgBox.addEventListener("input", () => {
  counter.textContent = maxChars - msgBox.value.length;
});


function validateForm(){
  const name = document.getElementById("nameField").value.trim();
  const email = document.getElementById("emailField").value.trim();
  const message = document.getElementById("msgBox").value.trim();
  if (name === "" || email === "" || message === "") {
    alert("No field should be empty!");
    return false;
  }
  return true;
}


const date = new Date();
document.getElementById("dateDisplay").textContent = date.toDateString();

function currentTime(){
  document.getElementById("time").textContent =new Date().toLocaleTimeString();
}
currentTime();
setInterval(currentTime, 1000);

