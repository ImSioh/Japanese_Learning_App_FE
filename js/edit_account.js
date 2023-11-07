const apiUrl = "https://api.example.com/submit";

const editAccountForm = document.getElementById("edit-account");
const responseMessage = document.getElementById("response-message");

editAccountForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(editAccountForm);

  const requestOptions = {
    method: "POST",
    body: formData,
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
