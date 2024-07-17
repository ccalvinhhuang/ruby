document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('inputBox');
  const output = document.getElementById('output');

  inputBox.addEventListener('input', () => {
    output.textContent = inputBox.value;
  });
});
