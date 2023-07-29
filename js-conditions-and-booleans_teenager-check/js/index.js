console.clear();
console.log("Hello Peet");
const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  //TENERY OPERATOR
  const age = Number(input.value);
  // output.textContent =
  //   age < 20 && age >= 12 ? "You will survive this" : "Not a teeanger";

  //TENARY SOLUTION ADVANCED
  output.textContent =
    age < 20 && age >= 12
      ? "Teenager, poor thing"
      : age > 20
      ? "It's over"
      : "You are a child";
});

//SOLUTION WITH IF ELSE
// const age = Number(input.value);
// if (age < 20 && age >= 12) {
//   console.log("You are a teenager!");
//   output.textContent = "You are a teenager!";
// } else if (age > 20) {
//   console.log("You survived, your not a teenager anymore");
//   output.textContent = "You survived, your not a teenager anymore";
// } else {
//   console.log("Oh no, you're a child!");
//   output.textContent = "Oh no, you're a child!";
// }
// Exercise:
// Use conditions and the logical AND operator to write
// "You are a teen." or "You are not a teen." into the output.
