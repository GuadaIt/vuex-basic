<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="getCats">
      <template v-slot:cell(name)="data">
        <router-link :to="`pets/cats/${data.index}`">
         {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'pets'
    ]),
    ...mapGetters([
      'getSpecies'
    ]),
    getCats () {
      return this.getSpecies('cat')
    }
  }
}
</script>
