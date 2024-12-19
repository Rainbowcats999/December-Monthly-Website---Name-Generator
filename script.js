//define variable in/or inputs
//was pasted to the bottom//
//ends here

//Generate prefix for name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "The Great";
  } else {
    return "Master";
  }
}
//ends here

//Generate First Name of name
function genFirstname(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Jeff";
  } else if (firstLetter === "b") {
    return "Jake";
  } else if (firstLetter === "c") {
    return "Ethan";
  } else if (firstLetter === "d") {
    return "Thomas";
  } else if (firstLetter === "e") {
    return "Alex";
  } //Default name if first letter doesn't match
}
//ends here

//Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "Road") {
    return `${favoriteColor} ridge`;
  } else if (roadType === "Street") {
    return `${favoriteColor} son`;
  } else if (roadType === "ave") {
    return `${favoriteColor} field`;
  } else {
    return `${favoriteColor} stone`;
  }
}
//ends here

//Generate Last Name
function genLastname(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Storm";
  } else if (lastLetter === "i") {
    return "Blaze";
  } else if (lastLetter === "o") {
    return "Thorn";
  } else if (lastLetter === "u") {
    return "frost";
  } else {
    return "Moon";
  }
}
//ends here

//Geberate Suffix
function gensuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal}`;
}
//ends here

//Master function to assemble Full Name
function genfullName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();
  //ends here

  //Generate each part of the name using helper function
  const prefix = genPrefix(firstName);
  const newfirstName = genFirstname(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newlastName = genLastname(lastName);
  const suffix = gensuffix(favoriteAnimal);

  console.log(prefix);
  console.log(newfirstName);
  console.log(middleName);
  console.log(newlastName);
  console.log(suffix);

  //function to capitalize words
  const capitalizePrefix = capitalize(prefix);
  const capitalizefirstName = capitalize(newfirstName);
  const capitalizeMiddleName = capitalize(middleName);
  const capitalizeLastName = capitalize(newlastName);
  //ends here

  //Capitalize everything
  const fullName = `${capitalizePrefix} ${capitalizefirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${suffix}`;

  //Combine everything
  document.getElementById("result").textContent = fullName;
  console.log(fullName);
}

//Function capitalizar
function capitalize(word) {
  console.log(word);
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
//ends here
//everything ends here

