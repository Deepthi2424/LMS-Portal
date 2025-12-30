// Use your Codespaces forwarded URL
const API_URL = "https://opulent-waffle-jjvgqx46xvqr3q5j6-5000.app.github.dev/api/trainer";

function loadTrainers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(trainers => {
      const container = document.getElementById("trainer-list");
      container.innerHTML = ""; // clear existing
      trainers.forEach(trainer => {
        const card = document.createElement("div");
        card.classList.add("trainer-card");
        card.innerHTML = `
          <h4>${trainer.name}</h4>
          <p><strong>Email:</strong> ${trainer.email}</p>
          <p><strong>Course:</strong> ${trainer.course}</p>
          <p><strong>Status:</strong> ${trainer.status}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error(err));
}

// Load trainers when page loads
window.onload = loadTrainers;
