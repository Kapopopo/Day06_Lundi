
function displayAgentInfo(obj) {
  let age = obj.age;
  let code = obj.code;
  let firstName = obj.firstName;
  let lastName = obj.lastName;

  let sentence = `My name is ${firstName}, ${lastName}! I'm agent ${code} and I'm ${age} years old.`;
  let element = document.querySelector(".container > p");
  element.innerHTML = sentence;
}

const infos = {
  age: 51,
  code: "007",
  firstName: "James",
  lastName: "Bond",
};

document.addEventListener("DOMContentLoaded", function () {
  displayAgentInfo(infos);
});
