const API_URL = "https://opulent-waffle-jjvgqx46xvqr3q5j6-5000.app.github.dev/api/trainer";



function loadTrainers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(trainers => {
      const container = document.getElementById("trainer-cards");
      container.innerHTML = "";

      trainers.forEach(trainer => {
        const card = document.createElement("div");
        card.className = "trainer-card";
        card.innerHTML = `
          <h4>${trainer.name}</h4>
          <p><strong>Email:</strong> ${trainer.email}</p>
          <p><strong>Course:</strong> ${trainer.course}</p>
          <p><strong>Status:</strong> ${trainer.status}</p>
        `;
        container.appendChild(card);
      });

      // Update stats
      document.getElementById("enrolled-courses").innerText = trainers.length;
      document.getElementById("learning-hours").innerText = 42; // placeholder
      document.getElementById("completed").innerText = 3; // placeholder
      document.getElementById("certificates").innerText = 2; // placeholder
    })
    .catch(err => console.error(err));
}

window.onload = loadTrainers;
