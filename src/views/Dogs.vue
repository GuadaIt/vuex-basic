<template>
  <div>
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="getDogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`pets/dogs/${data.index}`">
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
    getDogs () {
      return this.getSpecies('dog')
    }
  }
}
</script>
