const API_URL = "http://localhost:5000/api/trainer";

// Add Module
function addModule(courseId) {
  const title = prompt("Enter module title");

  fetch(`${API_URL}/module`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({
      courseId,
      title
    })
  })
  .then(res => res.json())
  .then(() => alert("Module added successfully"));
}

// View Students
function viewStudents(courseId) {
  fetch(`${API_URL}/students/${courseId}`, {
    headers: {
      "Authorization": localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}
