<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>
    <h2>Pets on adoption: {{ animalsCount }}</h2>
    <h3>Cats: {{ getCats }}</h3>
    <h3>Dogs: {{ getDogs }}</h3>

    <button @click="toggleForm" class="btn btn-primary">Add new pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat', 'dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        species: null,
        age: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'totalOfSpecies'
    ]),
    getDogs () {
      return this.totalOfSpecies('dog')
    },
    getCats () {
      return this.totalOfSpecies('cat')
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, name, age } = this.formData
      const payload = {
        pet: {
          name,
          age,
          species
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        name: '',
        species: null,
        age: 0
      }
    }
  }
}
</script>
