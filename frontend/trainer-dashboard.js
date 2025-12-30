const API_URL = "https://opulent-waffle-jjvgqx46xvqr3q5j6-5000.app.github.dev/api/trainer";

fetch(API_URL)
  .then(res => res.json())
  .then(trainers => {
    console.log(trainers); // 🔴 IMPORTANT
    const container = document.getElementById("trainer-list");
    container.innerHTML = "";

    trainers.forEach(t => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h4>${t.name}</h4>
        <p>${t.email}</p>
        <p>${t.course}</p>
        <p>${t.status}</p>
        <hr/>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Fetch error:", err));
