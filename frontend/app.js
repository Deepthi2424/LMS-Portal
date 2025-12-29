// frontend/app.js or login.js

// Make sure you have input fields with IDs 'email' and 'password'
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent form from refreshing the page

  try {
    const res = await fetch('/api/auth/login', {  // Use relative path!
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const data = await res.json();

    if (res.ok) {
      // Save token in localStorage
      localStorage.setItem('token', data.token);

      // Redirect based on role
      if (data.role === 'trainer') {
        location.href = 'trainer-dashboard.html';
      } else {
        location.href = 'student-dashboard.html';
      }
    } else {
      // Show error message
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    alert('Something went wrong. Please try again.');
  }
});


