const apiUrl = "http://localhost:8081/jla-be/v1/public/login";

const contactForm = document.getElementById("contact-form");
const responseMessage = document.getElementById("response-message");



contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var mail = document.getElementById("login_mail").value;
  var password = document.getElementById("login_password").value
  // const formData = new FormData(contactForm);

  const data = {
    password: password,
    mail: mail,
  };

  const requestOptions = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8081", 
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      responseMessage.textContent = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
