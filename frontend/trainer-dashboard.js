const API_URL = "http://localhost:5000/api/trainer"; // Use your backend URL

function loadTrainers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(trainers => {
      const container = document.getElementById("trainer-list");
      container.innerHTML = ""; // Clear previous
      trainers.forEach(trainer => {
        container.innerHTML += `
          <div class="trainer-card">
            <h4>${trainer.name}</h4>
            <p>${trainer.email}</p>
            <p>${trainer.course}</p>
            <p>${trainer.status}</p>
          </div>
        `;
      });
    })
    .catch(err => console.error(err));
}

window.onload = loadTrainers;
