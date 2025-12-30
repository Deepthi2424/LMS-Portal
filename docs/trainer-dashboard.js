const API_URL = "https://opulent-waffle-jjvgqx46xvqr3q5j6-5000.app.github.dev/api/trainer" // Replace with Codespaces forwarded URL if needed

function renderTrainers(trainers) {
  const container = document.getElementById("trainer-list");
  container.innerHTML = ""; // Clear previous content

  trainers.forEach(trainer => {
    const card = document.createElement("div");
    card.className = "trainer-card";
    card.innerHTML = `
      <h3>${trainer.name}</h3>
      <p>Email: ${trainer.email}</p>
      <p>Course: ${trainer.course}</p>
      <p>Status: ${trainer.status}</p>
      <button onclick="viewStudents('${trainer._id}')">View Students</button>
      <button onclick="addModule('${trainer._id}')">Add Module</button>
      <div class="course-list" id="courses-${trainer._id}"></div>
    `;
    container.appendChild(card);

    // Load courses for this trainer from database
    loadCourses(trainer._id);
  });
}


