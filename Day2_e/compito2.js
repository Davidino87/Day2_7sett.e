class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  stessoPapà(pet) {
    return this.ownerName === pet.ownerName;
  }
}

function creaPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;
  petList.appendChild(listItem);

  // form
  document.getElementById("petForm").reset();
}
