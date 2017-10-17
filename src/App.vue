<template>
  <div id="app">
    <div class="columns">
      <div class="column"/>
      <div class="column is-three-quarters">
        <div class="box">
          <akt-type-selector/>
          <without-user-form v-if="aktState == 'without'"/>
          <with-user-form v-if="aktState == 'with'"/>
        </div>
      </div>
      <div class="column"/>
    </div>
  </div>
</template>

<script>
import AktTypeSelector from './components/AktTypeSelector.vue'
import WithoutUserForm from './components/without/UserForm.vue'
import WithUserForm from './components/with/UserForm.vue'

export default {
  name: 'app',
  computed: {
    aktState () {
      return this.$store.state.akt
    },
    acceptUser () {
      return this.$store.state.acceptUser
    },
    transferUser () {
      return this.$store.state.transferUser
    }
  },
  components: {
    AktTypeSelector, WithoutUserForm, WithUserForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
