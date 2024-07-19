document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("inputBox");
  const submitButton = document.getElementById("submitButton");
  const output = document.getElementById("output");

  submitButton.addEventListener("click", () => {
    const query = inputBox.value;

    fetch("http://localhost:5001/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: query }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.answer) {
          output.textContent = data.answer;
        } else if (data.error) {
          output.textContent = "Error: " + data.error;
        }
      })
      .catch((error) => {
        output.textContent = "Error: " + error.message;
      });
  });
});
