export default {
  animalsCount: state => {
    return state.pets.length
  },
  getSpecies: state => species => {
    return state.pets.filter(pet => pet.species === species)
  },
  totalOfSpecies: state => species => {
    const pets = state.pets.filter(pet => pet.species === species)
    return pets.length
  }
}
