//your JS code here. If required.
// script.js

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  if (!age || !name) {
    alert("Please fill in all the fields.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then((message) => alert(message))
    .catch((message) => alert(message));
});
